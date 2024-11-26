import React from 'react';
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from 'react-responsive';
import Target from "../components/Target";
import ReactLogo from '../components/ReactLogo';

const calculateSizes = (isMobile, isSmall, isTablet) => {
  const targetPosition = [-6, -10, 15]; // Adjust as needed
  const reactLogoPosition = [8, 6, 15]; // Adjust as needed

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
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.desktop.position}
              rotation={[0.4, 210, 0]}
            />
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.ReactLogo.position}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={3}  />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;