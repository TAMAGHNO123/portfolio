import React from 'react';
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from 'react-responsive';
import Target from "../components/Target";
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const calculateSizes = (isMobile, isSmall, isTablet) => {
  const targetPosition = [-18, -10, 15]; // Adjust as needed
  const reactLogoPosition = [16, 6, 15]; // Adjust as needed

  if (isMobile) {
    return {
      deskScale: 0.07,
      desktop: { position: [1.7, -6, 10.0] },
      targetPosition,
      ReactLogo: { position: reactLogoPosition },
    };
  } else if (isTablet) {
    return {
      deskScale: 0.09,
      desktop: { position: [1.7, -6, 10.0] },
      targetPosition,
      ReactLogo: { position: reactLogoPosition },
    };
  } else if (isSmall) {
    return {
      deskScale: 0.05,
      desktop: { position: [1.7, -6, 10.0] },
      targetPosition,
      ReactLogo: { position: reactLogoPosition },
    };
  } else {
    return {
      deskScale: 0.1,
      desktop: { position: [1.7, -6, 10.0] },
      targetPosition,
      ReactLogo: { position: reactLogoPosition },
    };
  }
};

const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isMobile, isSmall, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Heyyy folks!! I am TG <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Building products and exploring new tech
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 2, 42]} />
            <HeroCamera isMobile={isMobile}>

              <HackerRoom
                scale={0.128}
                position={[0,-5,1]}
                rotation={[0.4, 210.4, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={[24,9, 8]} />
              <Cube position={[23, -8, 5]} />
              <Rings position={[-55, 15, 7]} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 15, 10]} intensity={3} />
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
      <a href="#contact" className='w-fit'>
          <Button name='Lets work together' isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;