export const calculateMiniPositionByRadius = (
  radius,
  additionalPosition = { x: 0, y: 0, z: 0 },
): [number, number, number] => {
  const theta = Math.PI / 2;
  const phi = Math.PI / 2;
  const x = radius * Math.sin(theta) * Math.cos(phi);
  const y = radius * Math.sin(theta) * Math.sin(phi);
  const z = radius * Math.cos(theta);
  return [
    x + additionalPosition.x,
    y + additionalPosition.y,
    z + additionalPosition.z,
  ];
};
