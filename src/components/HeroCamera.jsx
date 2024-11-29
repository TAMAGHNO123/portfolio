import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { easing } from 'maath';

const HeroCamera = ({ children }) => {
  const groupRef = useRef();

  useFrame(({ camera, delta }) => {
    easing.damp3(camera.position, [0, 4, 52], 0.25, delta);
  });

  return <group ref={groupRef} scale={1.1}>{children}</group>;
};

export default HeroCamera;