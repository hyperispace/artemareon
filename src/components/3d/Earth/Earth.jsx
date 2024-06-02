import React, { useRef, useEffect, useState, Suspense, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

gsap.registerPlugin(MotionPathPlugin);

const Model = (props) => {
  const model = useRef();
  const { nodes, materials } = useGLTF('./src/components/3d/earth/model.gltf');

  // Meshes
  return (
    <group {...props} dispose={null}>
      {/* Inner mesh group */}
      <group ref={model}>
        <group>
          <group name='root'>
            <group>
              <group name='Clouds_1'>
                <mesh
                  name='Object_6'
                  geometry={nodes.Object_6.geometry}
                  material={materials.clouds}
                />
              </group>
              <group name='Earth_0'>
                <mesh
                  name='Object_4'
                  geometry={nodes.Object_4.geometry}
                  material={materials.earth}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const RenderModel = forwardRef((props, ref) => {
  return (
    <>
      <Canvas ref={ref} {...props}>
        {/* Light on model */}
        <ambientLight intensity={10} />

        {/* Controls */}
        <OrbitControls
          // enableZoom={false}
          // enablePan={false}
          // enableRotate={false}
          autoRotate
          autoRotateSpeed={0.4}
        />

        {/* Model */}
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={1} />
        </Suspense>
      </Canvas>
    </>
  );
});

export default RenderModel;

useGLTF.preload('./src/components/3d/earth/model.gltf');
