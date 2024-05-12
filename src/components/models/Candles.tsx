"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useToogleContext } from "@/contexts/ToogleContext";

const filePath = "/3d/candle.glb";

useGLTF.preload(filePath);

type GLTFResult = GLTF & {
  nodes: {
    Circle007: THREE.Mesh;
    Circle007_1: THREE.Mesh;
    Circle009: THREE.Mesh;
    Circle009_1: THREE.Mesh;
    Circle010: THREE.Mesh;
    Circle010_1: THREE.Mesh;
    Circle011: THREE.Mesh;
    Circle011_1: THREE.Mesh;
  };
  materials: {
    CandleMaterial: THREE.MeshStandardMaterial;
    CandleLight: THREE.MeshStandardMaterial;
  };
};

const CANDLES_COLOR = "#fdfa72";

const Candles = (props: JSX.IntrinsicElements["group"]) => {
  const candlesRef = useRef<THREE.Group>(null!);

  const [isCandleLightOn, setIsCandleLightOn] = useState(true);
  const [hovered, setHovered] = useState(false);

  const { isToogle } = useToogleContext();

  const { nodes, materials } = useGLTF(filePath) as GLTFResult;

  useCursor(hovered);

  const handleCandleOnClick = () => {
    setIsCandleLightOn(() => !isCandleLightOn);
  };

  const pointLight1 = useMemo(() => {
    const pointLight = new THREE.PointLight(CANDLES_COLOR, 0.07, 1, 1.3);
    pointLight.castShadow = true;
    pointLight.visible = isToogle ? false : isCandleLightOn;

    return pointLight;
  }, [isCandleLightOn, isToogle]);

  const pointLight2 = useMemo(() => {
    const pointLight = pointLight1.clone();

    return pointLight;
  }, [pointLight1]);

  const pointLight3 = useMemo(() => {
    const pointLight = pointLight1.clone();

    return pointLight;
  }, [pointLight1]);

  const pointLight4 = useMemo(() => {
    const pointLight = pointLight1.clone();

    return pointLight;
  }, [pointLight1]);

  return (
    <group
      {...props}
      ref={candlesRef}
      onClick={handleCandleOnClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
    >
      <group position={[-1.541, 0.534, 1.162]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials.CandleMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_1.geometry}
          material={materials.CandleLight}
        />
        <primitive object={pointLight1} position={[0, 0.13, 0]} />
      </group>
      <group position={[-1.626, 0.534, 1.311]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009.geometry}
          material={materials.CandleMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_1.geometry}
          material={materials.CandleLight}
        />
        <primitive object={pointLight2} position={[0, 0.1, 0]} />
      </group>
      <group position={[-1.626, 0.534, 1.013]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010.geometry}
          material={materials.CandleMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010_1.geometry}
          material={materials.CandleLight}
        />
        <primitive object={pointLight3} position={[0, 0.22, 0]} />
      </group>
      <group position={[-1.341, -0.144, -1.587]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle011.geometry}
          material={materials.CandleMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle011_1.geometry}
          material={materials.CandleLight}
        />
        <primitive object={pointLight4} position={[0, 0.13, 0]} />
      </group>
    </group>
  );
};

export default Candles;
