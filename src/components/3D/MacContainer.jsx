import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

const MacContainer = ({ isOpen }) => {
  const model = useGLTF("./mac.glb");
  const tex = useTexture("./recam.png");
  const meshes = {};
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [scale, setScale] = useState([1.5, 1.5, 1.5]);

  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  const closedAngle = THREE.MathUtils.degToRad(180);
  const openAngle = THREE.MathUtils.degToRad(90);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    targetRotationRef.current = isOpen
      ? rotationRef.current + Math.PI * 2
      : rotationRef.current - Math.PI * 2;
  }, [isOpen]);

  // Detect window resize and adjust scale
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]); // Mobile scale
      } else {
        setScale([1.5, 1.5, 1.5]); // Desktop scale
      }
    };

    handleResize(); // Set initial scale based on the window size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useFrame(() => {
    rotationRef.current = THREE.MathUtils.lerp(
      rotationRef.current,
      targetRotationRef.current,
      0.02
    );

    const targetAngle = isOpen ? openAngle : closedAngle;
    meshes.screen.rotation.x = THREE.MathUtils.lerp(
      meshes.screen.rotation.x,
      targetAngle,
      0.05
    );

    model.scene.rotation.y = rotationRef.current;

    if (meshes.matte) {
      meshes.matte.material = new THREE.MeshStandardMaterial({
        map: tex,
        transparent: true,
        metalness: 0,
        roughness: 1,
        side: THREE.FrontAndBack,
      });
    }
  });

  return (
    <group position={[0, -14, 20]} scale={scale}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
