/* eslint-disable react/no-unknown-property */
import { useRef, Suspense, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

gsap.registerPlugin(MotionPathPlugin);

useGLTF.preload('./assets/models/earth/model.gltf');

const Model = (props) => {
  const model = useRef();
  const { nodes, materials } = useGLTF('./assets/models/earth/model.gltf');

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

const Earth = forwardRef((props, ref) => {
  return (
    <>
      <Canvas ref={ref} {...props}>
        {/* Light on model */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[-5, 20, 30]} intensity={5} />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.6}
        />

        {/* Model */}
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={2.1} />
        </Suspense>
      </Canvas>
    </>
  );
});

Earth.displayName = 'Earth';

export default Earth;
