import React, { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useArrowKeyRotation } from "../helpers/useArrowKeyRotation";
import { Trees } from "./Trees";

const MemoizedTrees = React.memo(Trees);

export const World = ({ radius, updateRotationZ, updateIsMovingForward }) => {
  const worldMesh = useRef(null);
  const roadMesh = useRef(null);

  const handleKeyPress = (rotationZ, isMovingForward) => {
    const degrees = Math.abs(rotationZ * (180 / Math.PI)) % 360;
    updateRotationZ(degrees);
    updateIsMovingForward(isMovingForward);
  };

  useArrowKeyRotation(worldMesh, handleKeyPress);

  return (
    <motion.mesh ref={worldMesh}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color="#B2DCA2" />
      <motion.mesh ref={roadMesh} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[radius + 1, radius + 1, 100, 128]} />
        <meshStandardMaterial color="gray" />
      </motion.mesh>
      <MemoizedTrees radius={radius} count={50} />
    </motion.mesh>
  );
};
