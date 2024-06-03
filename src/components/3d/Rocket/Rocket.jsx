import React, { useRef, useEffect, Suspense, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

const Model = () => {
  const innerRef = useRef();
  const outerRef = useRef();

  const { nodes, materials } = useGLTF('./src/components/3d/rocket/model.gltf');

  const modelProps = {
    position: [0, -1, 0],
    rotation: [0, 0, 0],
    scale: 3,
  };

  useEffect(() => {
    if (innerRef.current) {
      // Apply small shaking effect
      gsap.fromTo(
        innerRef.current.rotation,
        { x: -0.005, y: -0.005, z: -0.005 },
        {
          x: 0.005,
          y: 0.005,
          z: 0.005,
          duration: 0.001,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
        },
      );
    }
  }, [innerRef]);

  // animate the model
  const animateModel = () => {
    if (outerRef.current) {
      gsap.to(outerRef.current.rotation, {
        x: -1,
        y: -1,
        z: 0,
        duration: 2,
        ease: 'power1.inOut',
      });
      gsap.to(outerRef.current.position, {
        x: 3,
        y: -1,
        z: 1,
        ease: 'power1.inOut',
        duration: 2,
        onComplete: function () {
          console.log('Animation complete!');
        },
      });
    }
  };

  useEffect(() => {
    if (outerRef && scrollY > 10) animateModel();
  }, [scrollY]);

  // Meshes
  return (
    <group {...modelProps} dispose={null} ref={outerRef}>
      {/* Inner mesh group */}
      <group ref={innerRef}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
        />
      </group>
    </group>
  );
};

export default function RenderModel(scrollY) {

  return (
    <>
      <Canvas>
        {/* Light on model */}
        <directionalLight position={[-30, 100, 30]} intensity={20} />
        <ambientLight intensity={10} />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />

        {/* Model */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
}

useGLTF.preload('./src/components/3d/rocket/model.gltf');
