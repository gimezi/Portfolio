import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
  }
  materials: {
    Body: THREE.MeshStandardMaterial
  }
}

export function DaeTa(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/dae_ta.glb') as GLTFResult
  return (
    <group position={[0,0,0]} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Body}
        rotation={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/dae_ta.glb')
