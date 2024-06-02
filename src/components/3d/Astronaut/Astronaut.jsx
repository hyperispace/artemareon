import React, { useRef, useEffect, useState, Suspense } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Environment, OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    './src/components/3d/astronaut/model.gltf',
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions['floating'].play();
    }
  }, [actions]);

  // // Floating animation
  // useFrame((state, delta) => {
  //   if (model.current) {
  //     model.current.rotation.y += delta / 10;
  //     model.current.rotation.x += delta / 10;
  //     model.current.position.x = Math.sin(state.clock.elapsedTime) / 2;
  //   }
  // });

  // Meshes
  return (
    <group ref={group} {...props} dispose={null}>
      {/* Inner mesh group */}
      <group name='Sketchfab_Scene'>
        <group
          name='Sketchfab_model'
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.314}
        >
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
              <group name='RootNode0_0' scale={0.01}>
                <group name='skeletal3_6'>
                  <group name='GLTF_created_0'>
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <group name='_3_correction'>
                      <group name='_3' />
                    </group>
                    <group name='_4_correction'>
                      <group name='_4' />
                    </group>
                    <group name='_5_correction'>
                      <group name='_5' />
                    </group>
                    <skinnedMesh
                      name='Object_99'
                      geometry={nodes.Object_99.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <skinnedMesh
                      name='Object_100'
                      geometry={nodes.Object_100.geometry}
                      material={materials.material_0}
                      skeleton={nodes.Object_100.skeleton}
                    />
                    <skinnedMesh
                      name='Object_103'
                      geometry={nodes.Object_103.geometry}
                      material={materials.material_1}
                      skeleton={nodes.Object_103.skeleton}
                    />
                    <skinnedMesh
                      name='Object_106'
                      geometry={nodes.Object_106.geometry}
                      material={materials.material_2}
                      skeleton={nodes.Object_106.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default function RenderModel() {
  return (
    <Canvas>
      {/* Light on model */}
      <directionalLight position={[10, 10, 3]} intensity={1} />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />

      {/* Model */}
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} scale={5} rotation={[-1, -3, 12]} />
      </Suspense>

      {/* Environment reflection effect on model's body */}
      <Environment preset='night' />
    </Canvas>
  );
}

useGLTF.preload('./src/components/3d/astronaut/model.gltf');
