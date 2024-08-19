import React from "react";
import { useGLTF } from "@react-three/drei";
import { calculateMiniPositionByRadius } from "../helpers";

export const Mini = ({ radius, isMovingForward }) => {
  const position = calculateMiniPositionByRadius(radius);
  const { scene } = useGLTF("/models/mini.glb");
  console.log("moving forward: ", isMovingForward);

  return (
    <primitive
      object={scene}
      position={position}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};
