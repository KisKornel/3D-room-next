"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useToogleContext } from "@/contexts/ToogleContext";

const filePath = "/3d/standingLamp.glb";

useGLTF.preload(filePath);

type GLTFResult = GLTF & {
  nodes: {
    StandingLamp: THREE.Mesh;
    StandingLamp1: THREE.Mesh;
    StandingLamp2: THREE.Mesh;
    StandingLamp3: THREE.Mesh;
  };
  materials: {
    GreenColor: THREE.MeshStandardMaterial;
  };
};

const SPOT_LIGHT_COLOR = "#fffec8";

const StandingLamp = (props: JSX.IntrinsicElements["group"]) => {
  const standingLampRef = useRef<THREE.Group>(null!);

  const [isStandingLampLightOn, setIsStandingLampLightOn] = useState(true);
  const [hovered, setHovered] = useState(false);

  const { nodes, materials } = useGLTF(filePath) as GLTFResult;

  useCursor(hovered);

  const spotlight = useMemo(() => {
    const spotlight = new THREE.SpotLight(
      SPOT_LIGHT_COLOR,
      5,
      5,
      Math.PI / 3,
      0.5,
      2
    );
    spotlight.castShadow = true;
    spotlight.visible = isStandingLampLightOn;

    return spotlight;
  }, [isStandingLampLightOn]);

  const handleLapmOnClick = () => {
    setIsStandingLampLightOn(() => !isStandingLampLightOn);
  };

  return (
    <group
      {...props}
      ref={standingLampRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleLapmOnClick}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.StandingLamp.geometry}
        material={materials.GreenColor}
        position={[-0.747, -1.8, 1.498]}
        rotation={[0, -0.074, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StandingLamp1.geometry}
          material={materials.GreenColor}
          position={[0, 0.99, 0.357]}
          rotation={[-1.033, 0, 0]}
          scale={[0.865, 0.857, 0.865]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StandingLamp2.geometry}
          material={materials.GreenColor}
          position={[-0.001, 1.202, 0.004]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.072, 0.061, 0.072]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StandingLamp3.geometry}
          material={materials.GreenColor}
          position={[0, 1.655, -0.812]}
          rotation={[0.244, 0.005, 0.015]}
          scale={[0.174, 0.312, 0.182]}
        >
          <primitive object={spotlight} position={[0.005, -0.334, -0.046]} />
          <primitive
            object={spotlight.target}
            position={[0.005, -3.334, -0.046]}
          />
        </mesh>
      </mesh>
    </group>
  );
};

export default StandingLamp;
