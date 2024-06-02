import React, { useRef, useEffect, useState, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

gsap.registerPlugin(MotionPathPlugin);

const Model = (props) => {
  const model = useRef();
  const { nodes, materials } = useGLTF('./src/components/3d/moon/model.gltf');

  // Meshes
  return (
    <group {...props} dispose={null}>
      {/* Inner mesh group */}
      <group ref={model}>
        <mesh geometry={nodes.Object_7.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.None} />
      </group>
    </group>
  );
};

export default function RenderModel(props) {

  return (
    <>
      <Canvas>
        {/* Light on model */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[15, 1, 10]} intensity={7} />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.7}
        />

        {/* Model */}
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={0.3} />
        </Suspense>
      </Canvas>
    </>
  );
}

useGLTF.preload('./src/components/3d/moon/model.gltf');
