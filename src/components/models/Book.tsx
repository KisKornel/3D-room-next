"use client";

import React, { useEffect, useRef, useState } from "react";
import { GLTF } from "three-stdlib";
import { Html, useBounds, useCursor, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";
import { useTooltipContext } from "@/contexts/TooltipContext";
import { useToogleContext } from "@/contexts/ToogleContext";
import BookPages from "../BookPages";

const filePath = "/3d/book.glb";

useGLTF.preload(filePath);

type GLTFResult = GLTF & {
  nodes: {
    Book: THREE.Mesh;
    Cube044: THREE.Mesh;
    Cube044_1: THREE.Mesh;
    BezierCurve: THREE.Mesh;
  };
  materials: {
    BookColorRed2: THREE.MeshStandardMaterial;
    PagePigMaterial: THREE.MeshStandardMaterial;
    White2: THREE.MeshStandardMaterial;
    White3: THREE.MeshStandardMaterial;
  };
};

type BookProps = JSX.IntrinsicElements["group"] & {
  globalRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
};

const Book = ({ globalRef }: BookProps) => {
  const bookref = useRef<THREE.Group>(null!);

  const { camera } = useThree();
  const bounds = useBounds();

  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [originalCameraPosition, setOriginalCameraPosition] = useState(
    camera.position
  );

  const { isToogle, setIsToogle } = useToogleContext();
  const { setCurrentStage } = useTooltipContext();

  const { nodes, materials } = useGLTF(filePath) as GLTFResult;

  useCursor(hovered);

  useFrame(() => {
    TWEEN.update();
  });

  const handleBookOnPointerOver = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!isToogle) {
      setHovered(true);
      setCurrentStage(1);
    }
  };

  const handleBookOnPointerOut = () => {
    if (!isToogle) {
      setHovered(false);
      setCurrentStage(0);
    }
  };

  const zoomIn = () => {
    bounds.refresh().reset().clip().fit();
  };

  const zoomOut = () => {
    bounds.refresh(globalRef.current).reset().clip().fit();
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleBookOnClick = async (e: ThreeEvent<MouseEvent>) => {
    if (!isToogle) {
      e.stopPropagation();
      setIsToogle(true);
      setCurrentStage(0);
      setHovered(false);

      await sleep(50);

      zoomIn();

      await sleep(1300);

      cameraRotationIn();
    }
  };

  const cameraRotationIn = () => {
    const targetCamera = new THREE.Vector3(Math.PI / 3, Math.PI / 4, 0.2);

    new TWEEN.Tween(originalCameraPosition)
      .to(targetCamera, 1100)
      .easing(TWEEN.Easing.Sinusoidal.In)
      .onComplete(() => {
        setHidden(false);
      })
      .start();
  };

  const cameraRotationOut = () => {
    new TWEEN.Tween(camera.position)
      .to(originalCameraPosition, 1300)
      .easing(TWEEN.Easing.Quadratic.In)
      .start();
  };

  const handleBookOnClickBack = async () => {
    setIsToogle(false);
    setHidden(true);

    await sleep(50);

    cameraRotationOut();

    await sleep(1300);

    zoomOut();
  };

  return (
    <group ref={bookref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book.geometry}
        material={materials.BookColorRed2}
        position={[1.004, -0.736, -1.029]}
        rotation={[0, 0.193, 0]}
        onPointerOver={handleBookOnPointerOver}
        onPointerOut={handleBookOnPointerOut}
        onClick={handleBookOnClick}
      >
        <group position={[0, -0.001, 0]} scale={[1, 1, 0.978]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044.geometry}
            material={materials.PagePigMaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044_1.geometry}
            material={materials.White2}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={materials.White3}
          position={[0, -0.001, 0]}
          scale={[0.136, 1, 1]}
        />
        {isToogle ? (
          <Html
            transform
            rotation-x={-Math.PI / 2}
            position={[0, 0.01, 0]}
            scale={0.1}
            zIndexRange={[5, 0]}
            className={`relative flex justify-center items-center w-96 h-64 transition-all duration-1000 scale-50 ${
              hidden ? "opacity-0" : "opacity-100"
            }`}
          >
            <BookPages onClick={handleBookOnClickBack} />
          </Html>
        ) : null}
      </mesh>
    </group>
  );
};

export default Book;
