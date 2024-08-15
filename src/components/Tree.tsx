import React from "react";
import { useGLTF } from "@react-three/drei";

export const Tree = ({ radius }) => {
  const theta = Math.PI / 2;
  const phi = Math.PI / 2;
  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);
  const { scene } = useGLTF("/models/tree.glb");

  return (
    <primitive
      object={scene}
      position={[x, y, z]}
      rotation={[0, Math.PI / 2, 0]}
      scale={[5, 5, 5]} 
    />
  );
};
