/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, Suspense } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

useGLTF.preload('./assets/models/astronaut/model.gltf');

const Model = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    './assets/models/astronaut/model.gltf',
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
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]} scale={1}>
          <group name='root'>
            <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 10, 1]}>
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

const Astronaut = () => {
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
        <Model position={[-3.3, 2.5, 0]} scale={1.5} rotation={[-1, -2, 9.4]} />
      </Suspense>

      {/* Environment reflection effect on model's body */}
      <Environment preset='night' />
    </Canvas>
  );
};

export default Astronaut;
