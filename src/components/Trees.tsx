import React from "react";
import { useGLTF } from "@react-three/drei";

export const Trees = ({ radius, count }) => {
  const { scene } = useGLTF("/models/tree.glb");

  const trees = Array.from({ length: count }, (_, index) => {
    const theta = Math.random() * Math.PI;
    const phi = Math.random() * 2 * Math.PI;
    const randomX = radius * Math.sin(theta) * Math.cos(phi);
    const randomY = radius * Math.sin(theta) * Math.sin(phi);
    const randomZ = radius * Math.cos(theta);
    return (
      <primitive
        key={index}
        object={scene.clone()}
        position={[randomX, randomY, randomZ]}
        rotation={[Math.PI / 2 - theta, phi, 0]}
        // scale={[5, 5, 5]} // randomize later
      />
    );
  });

  return <>{trees}</>;
};
