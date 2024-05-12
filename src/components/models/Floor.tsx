/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const filePath = "/3d/floor.glb";

useGLTF.preload(filePath);

type GLTFResult = GLTF & {
  nodes: {
    Floor: THREE.Mesh;
  };
  materials: {
    FloorColor: THREE.MeshStandardMaterial;
  };
};

const Floor = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(filePath) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.FloorColor}
        position={[0.18, -1.81, 0.13]}
      />
    </group>
  );
};

export default Floor;