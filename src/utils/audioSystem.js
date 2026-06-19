let audioCtx = null;
let isMuted = true;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

export const audioSystem = {
  toggleMute: () => {
    isMuted = !isMuted;
    if (!isMuted) {
      initAudio();
      // Play confirmation tone
      audioSystem.playClick();
    }
    return isMuted;
  },

  getMuteState: () => isMuted,

  playClick: () => {
    if (isMuted) return;
    try {
      initAudio();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(330, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      console.warn('AudioContext failed:', e);
    }
  },

  playHover: () => {
    if (isMuted) return;
    try {
      initAudio();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(90, audioCtx.currentTime);
      
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {
      console.warn('AudioContext failed:', e);
    }
  }
};
