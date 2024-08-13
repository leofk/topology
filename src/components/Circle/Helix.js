import React, { useMemo } from 'react';
import * as THREE from 'three';


function Helix({ radius = 1, height = 20, turns = 20, segments = 2000 }) {
  const geometry = useMemo(() => {
    const points = [];
    const segmentHeight = height / segments;

    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * turns * 2 * Math.PI;
      const x = radius * Math.cos(t);
      const y = -height / 2 + i * segmentHeight;
      const z = radius * Math.sin(t);
      points.push(new THREE.Vector3(x, y, z));
    }

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    return lineGeometry;
  }, [radius, height, turns, segments]);

  return (
    <line
      geometry={geometry}
      onUpdate={(line) => line.computeLineDistances()}
      scale={[1, 1, 1]}
    >
      <lineDashedMaterial color="black" dashSize={0.05} gapSize={0.05} />
    </line>
  );
}

export default Helix;
