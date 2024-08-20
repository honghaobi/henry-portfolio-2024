import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { calculateMiniPositionByRadius } from "../helpers";

export const Mini = ({ radius, isMovingForward, rotationZ }) => {
  const { scene: mini } = useGLTF("/models/mini_no_wheels.glb");
  const { scene: wheel } = useGLTF("/models/wheel.glb");

  const miniPosition = calculateMiniPositionByRadius(radius);
  const wheelPositions = [
    { x: -49, y: 10, z: 26 }, // Front Left
    { x: -49, y: 10, z: -24 }, // Front Right
    { x: 29, y: 10, z: 26 }, // Back Left
    { x: 29, y: 10, z: -24 }, // Back Right
  ];
  console.log(rotationZ);
  return (
    <>
      <primitive
        object={mini}
        position={miniPosition}
        rotation={[0, Math.PI / 2, 0]}
      />
      {wheelPositions.map((pos, index) => (
        <primitive
          key={index}
          object={wheel.clone()}
          position={calculateMiniPositionByRadius(radius, pos)}
          rotation={[
            (Math.PI * 3) / 2,
            rotationZ * 0.2,
            index % 2 === 0 ? Math.PI / 2 : (Math.PI * 3) / 2,
          ]}
        />
      ))}
    </>
  );
};
