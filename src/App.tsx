import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mini } from "./components/Mini";
import { World } from "./components/World";
import { calculateMiniPositionByRadius } from "./helpers";

const RADIUS = 600;
const BACKGROUND_COLOR_MAP = {
  education: "#F2845C",
  work: "#F2EEB3",
  about: "#B2DCA2",
  contact: "#078C7F",
  resume: "#1082a2",
  fun: "#753e94",
};

export default function App() {
  const [rotationZ, updateRotationZ] = useState(0);
  const [isMovingForward, updateIsMovingForward] = useState(true);
  const page =
    Object.keys(BACKGROUND_COLOR_MAP)[
      Math.floor((rotationZ / 60) % Object.keys(BACKGROUND_COLOR_MAP).length)
    ];
  const backgroundColor = BACKGROUND_COLOR_MAP[page];
  console.log(page);
  return (
    <div className="bg" style={{ backgroundColor }}>
      <div className="bgGradient"></div>
      <h1 className="title">Henry's Journey</h1>
      <h2 className="page">{page}</h2>
      <Canvas
        style={{ width: "100vw", height: "100vh", position: "absolute" }}
        camera={{ position: [-300, 700, 200], near: 0.1, far: 10000 }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <pointLight
          position={[2000, 2000, 1000]}
          decay={0}
          intensity={Math.PI / 2}
        />
        <World
          radius={RADIUS}
          updateRotationZ={updateRotationZ}
          updateIsMovingForward={updateIsMovingForward}
        />
        <Mini radius={RADIUS} isMovingForward={isMovingForward} />
        <axesHelper args={[1000]} />
        <OrbitControls
          enableZoom={false}
          target={calculateMiniPositionByRadius(RADIUS, 100)}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
