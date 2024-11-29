import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  useEffect(() => {
    if (targetRef.current) {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          // Create a clone of the original material to preserve original properties
          const originalMaterial = child.material.clone();
          
          // Adjust color without completely desaturating
          const adjustedColor = originalMaterial.color.clone();
          adjustedColor.multiplyScalar(0.85); // Slightly lighter darkening
          
          child.material = new THREE.MeshStandardMaterial({
            color: adjustedColor,
            opacity: originalMaterial.opacity,
            transparent: originalMaterial.transparent,
            metalness: originalMaterial.metalness ?? 0,
            roughness: originalMaterial.roughness ?? 0.5
          });
        }
      });

      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, [scene]);

  return (
    <mesh {...props} ref={targetRef} rotation={[0,Math.PI/5,0]} scale={2.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;