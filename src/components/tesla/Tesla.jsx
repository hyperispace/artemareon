import React, { useRef, useEffect, useState, Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

// Get current direcory path
const __dirname = new URL(".", import.meta.url).pathname;

const Model = (props) => {
  const model = useRef();
  const { nodes, materials } = useGLTF('./src/components/tesla/model.gltf');

  
  // Headlight animation
  const headlight = useRef();
  const [isHeadlightOn, setIsHeadlightOn] = useState(true);
  useEffect(() => {
    if (headlight.current) {
      headlight.current.material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 1,
      });
    }

    const interval = setInterval(() => {
      setIsHeadlightOn((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (headlight.current) {
      const intensity = isHeadlightOn ? 1 : 0;
      gsap.to(headlight.current.material, {
        emissiveIntensity: intensity,
        duration: 0.3,
      });
    }
  }, [isHeadlightOn]);

  // Floating animation
  useFrame((state, delta) => {
    if (model.current) {
      model.current.rotation.y += delta / 10;
      model.current.rotation.x += delta / 10;
      model.current.position.x = Math.sin(state.clock.elapsedTime) / 2;
    }
  });

  // Meshes
  return (
    <group {...props} dispose={null}>
      {/* Inner mesh group */}
      <group ref={model}>
        <mesh
          geometry={nodes.Body_CarPaint_0.geometry}
          material={materials.CarPaint}
        />
        <mesh
          geometry={nodes.Body_Window_0.geometry}
          material={materials.Window}
        />
        <mesh
          geometry={nodes.Body_Plastic_0.geometry}
          material={materials.Plastic}
        />
        <mesh
          ref={headlight}
          geometry={nodes.Body_HeadLight_0.geometry}
          material={headlight.current ? headlight.current.material : materials.HeadLight}
        />
        <mesh
          geometry={nodes.Body_RearLight_0.geometry}
          material={materials.RearLight}
        />
        <mesh
          geometry={nodes.Front_Wheels001_Tire_0.geometry}
          material={materials.Tire}
        />
        <mesh
          geometry={nodes.Front_Wheels001_Rims_0.geometry}
          material={materials.Rims}
        />
        <mesh
          geometry={nodes.Back_Wheels001_Tire_0.geometry}
          material={materials.Tire}
        />
        <mesh
          geometry={nodes.Back_Wheels001_Rims_0.geometry}
          material={materials.Rims}
        />
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
      <OrbitControls enableZoom={false} />

      {/* Model */}
      <Suspense fallback={null}>
        <Model position={[0, 0, 0]} scale={1} rotation={[-2, -7, 12]} />
      </Suspense>

      {/* Environment reflection effect on model's body */}
      <Environment preset="night" />
    </Canvas>
  );
}

useGLTF.preload('./src/components/tesla/model.gltf');
