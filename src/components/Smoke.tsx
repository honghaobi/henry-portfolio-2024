import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { calculateMiniPositionByRadius } from "../helpers";

export const Smoke = ({ isMovingForward }) => {
  const [opacity, setOpacity] = useState(0.5);
  const [scale, setScale] = useState(0.1);

  useFrame(() => {
    if (isMovingForward) {
      setScale((prev) => prev + 0.2);
      setOpacity((prev) => Math.max(prev - 0.04, 0));
    }
  });

  return (
    <mesh
      scale={[scale, scale, scale]}
      position={calculateMiniPositionByRadius(600, {
        x: 45 * scale,
        y: 10 * scale,
        z: -15 + Math.random() * 3,
      })}
      rotation={[scale, scale, scale]}
    >
      <sphereGeometry args={[3, 6, 6]} />
      <meshStandardMaterial
        color="black"
        opacity={opacity}
        transparent={true}
      />
    </mesh>
  );
};
