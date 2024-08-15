import React from "react";
import { useGLTF } from "@react-three/drei";

export const Mini = ({ radius, isMovingForward }) => {
  const theta = Math.PI / 2;
  const phi = Math.PI / 2;
  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);
  const { scene } = useGLTF("/models/mini.glb");

  const getRotation = () => {
    if (isMovingForward === true) return [0, Math.PI / 2, 0];
    if (isMovingForward === false) return [0, Math.PI / 2, 0];
    return [0, Math.PI / 2, 0];
  };

  return (
    <primitive object={scene} position={[x, y, z]} rotation={getRotation()} />
  );
};
