import React, { useRef, useEffect, Suspense, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

// Get current directory path
const __dirname = new URL(".", import.meta.url).pathname;

const Model = React.forwardRef((modelProps, ref) => {
  const { nodes, materials } = useGLTF(`${__dirname}/model.gltf`);

  useEffect(() => {
    if (ref.current) {
      // Apply small shaking effect
      gsap.fromTo(
        ref.current.rotation,
        { x: -0.005, y: -0.005, z: -0.005 },
        {
          x: 0.005,
          y: 0.005,
          z: 0.005,
          duration: 0.001,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        }
      );
    }
  }, [ref]);

  // Meshes
  return (
    <group {...modelProps} dispose={null} >
      {/* Inner mesh group */}
      <group ref={ref}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
        />
      </group>
    </group>
  );
});

export default function RenderModel(scrollY) {
  const modelRef = useRef();

  const modelInitialProps = {
    position: [0, -1, 0],
    rotation: [-Math.PI * 1.01, -Math.PI * 1, -Math.PI * 1],
    scale: 3,
  };

  const [modelProps, setModelProps] = useState(modelInitialProps);
  const [rotation, setRotation] = useState(modelInitialProps.rotation);

  const animateRocket = () => {
    if (modelRef.current) {
      const newRotation = rotation[1] + Math.PI / 2;
      gsap.to(modelRef.current.rotation, {
        y: newRotation,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          setRotation([rotation[0], newRotation, rotation[2]]);
          setModelProps({
            ...modelProps,
            rotation: [rotation[0], newRotation, rotation[2]],
          });
        },
      });
    }
  };

  if(scrollY === 100)
    animateRocket();

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
          <Model {...modelProps} ref={modelRef} />
        </Suspense>
      </Canvas>
    </>
  );
}

useGLTF.preload(`${__dirname}/model.gltf`);
