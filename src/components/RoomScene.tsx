"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Group } from "three";
import { Bounds, OrbitControls, OrthographicCamera } from "@react-three/drei";
import {
  Bed,
  Book,
  Books,
  Cactus,
  Candles,
  Carpet,
  Chair,
  Floor,
  Flower,
  Images,
  Shelf,
  StandingLamp,
  Table,
  TableLamp,
  Wall,
  Window,
} from "@/components/models";
import { ToogleProvider } from "@/contexts/ToogleContext";
import { TooltipProvider } from "@/contexts/TooltipContext";

const INTERPOLATE_FUNC = (t: number) => -t * t * t + 2 * t * t;

export default function RoomScene() {
  const globalRef = useRef<Group>(null!);

  return (
    <section className="absolute top-0 w-full h-screen bg-slate-50 dark:bg-gray-950">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} shadows="variance">
        <OrthographicCamera
          makeDefault
          zoom={90}
          position={[0, 0, 5]}
          far={2000}
          near={0.1}
        />
        <Suspense fallback={null}>
          <directionalLight
            position={[4, 4, 0]}
            scale={[5, 5, 5]}
            intensity={3}
            color="#FCE570"
            castShadow
          />

          <ambientLight color="#FFFFFF" intensity={0.2} />
          <hemisphereLight
            position={[0, 2, 0]}
            color={"#FCE570"}
            groundColor="#ff8100"
            intensity={1}
          />

          <Bounds
            clip
            fit
            margin={1.1}
            interpolateFunc={INTERPOLATE_FUNC}
            maxDuration={1}
          >
            <TooltipProvider>
              <ToogleProvider>
                <group
                  ref={globalRef}
                  rotation={[0.4, -Math.PI / 4, 0]}
                  castShadow
                  receiveShadow
                  dispose={null}
                >
                  <Wall />
                  <Window />
                  <Floor />
                  <Carpet />
                  <Bed />
                  <Table />
                  <Shelf />
                  <Images />
                  <Flower />
                  <TableLamp />
                  <StandingLamp />
                  <Chair />
                  <Books />
                  <Candles />
                  <Cactus />
                  <Bounds margin={1.2} maxDuration={1.2}>
                    <Book globalRef={globalRef} />
                  </Bounds>
                </group>
              </ToogleProvider>
            </TooltipProvider>
          </Bounds>
        </Suspense>
        <OrbitControls makeDefault enableRotate={false} enableZoom={false} />
      </Canvas>
    </section>
  );
}
