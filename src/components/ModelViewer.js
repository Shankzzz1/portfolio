// src/components/Modelviewer.js
import React, { Suspense } from 'react';
// eslint-disable-next-line
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/LittlestTokyo.glb'); // Path to your GLB file in the public folder
  return <primitive object={scene} scale={0.5} position={[0, 30, 0]} />; // Center the model vertically
}

export default function Modelviewer() {
  return (
    <div style={{ width: '500px', height: '500px', margin: 'auto' }}>
      <Canvas
        camera={{ position: [0, 2,300], fov: 75 }} // Adjust the camera for a centered view
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
