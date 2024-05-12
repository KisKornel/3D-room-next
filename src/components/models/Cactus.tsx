/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const filePath = "/3d/cactus.glb";

useGLTF.preload(filePath);

type GLTFResult = GLTF & {
  nodes: {
    Cactus1: THREE.Mesh;
    Cactus1Leaf1: THREE.Mesh;
    Cactus1Leaf2: THREE.Mesh;
    Cactus2: THREE.Mesh;
    Cactus2Leaf1: THREE.Mesh;
    Cactus2Leaf2: THREE.Mesh;
    Cactus2Leaf3: THREE.Mesh;
  };
  materials: {
    FlowerpotMaterial: THREE.MeshStandardMaterial;
    CactusLeafMaterial: THREE.MeshStandardMaterial;
  };
};

const Cactus = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(filePath) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cactus1.geometry}
        material={materials.FlowerpotMaterial}
        position={[0.338, -0.33, -1.851]}
        scale={0.596}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus1Leaf1.geometry}
          material={materials.CactusLeafMaterial}
          position={[0.107, 0.314, -0.004]}
          rotation={[-0.267, -0.278, -0.698]}
          scale={[0.044, 0.081, 0.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus1Leaf2.geometry}
          material={materials.CactusLeafMaterial}
          position={[0, 0.243, 0]}
          scale={[0.095, 0.176, 0.095]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cactus2.geometry}
        material={materials.FlowerpotMaterial}
        position={[-1.587, -0.144, 0.419]}
        rotation={[0, 1.32, 0]}
        scale={0.596}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus2Leaf1.geometry}
          material={materials.CactusLeafMaterial}
          position={[0, 0.243, 0]}
          scale={[0.095, 0.176, 0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus2Leaf2.geometry}
          material={materials.CactusLeafMaterial}
          position={[0.107, 0.314, -0.004]}
          rotation={[-0.267, -0.278, -0.698]}
          scale={[0.044, 0.081, 0.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cactus2Leaf3.geometry}
          material={materials.CactusLeafMaterial}
          position={[-0.084, 0.248, 0.046]}
          rotation={[3.11, -0.77, -0.783]}
          scale={[0.044, 0.081, 0.044]}
        />
      </mesh>
    </group>
  );
};

export default Cactus;
