"use client";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const LaptopModel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleOpen}
        className={`bg-violet text-white px-3 py-2 rounded absolute left-1/2 transform -translate-x-1/2 ${
          isOpen ? "top-[43%] lg:top-[22%]" : "top-[63%] lg:top-[77%]"
        } transition-all duration-500 ease-in-out p-4 text-base cursor-pointer z-10`}
      >
        {isOpen ? "Cerrar" : "Click Aquí"}
      </button>

      <Canvas
        camera={{
          fov: 12,
          position: [0, -10, 220],
        }}
      >
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />

        <MacContainer isOpen={isOpen} />
      </Canvas>
    </>
  );
};

export default LaptopModel;
