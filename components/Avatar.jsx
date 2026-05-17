'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { useRef, useState } from 'react'

function Blob() {
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    mesh.current.rotation.y += 0.003
    mesh.current.rotation.x = state.mouse.y * 0.3
    mesh.current.position.x = state.mouse.x * 0.1
  })

  return (
    <Sphere
      ref={mesh}
      args={[1.2, 128, 128]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <MeshDistortMaterial
        color={clicked ? '#A8481E' : hovered ? '#E8855A' : '#C4622D'}
        distort={hovered ? 0.6 : 0.35}
        speed={hovered ? 4 : 1.5}
        roughness={0.1}
        metalness={0.3}
      />
    </Sphere>
  )
}

export default function Avatar() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 2]} intensity={1.2} />
        <pointLight position={[-3, -2, -2]} intensity={0.5} color="#C4622D" />
        <Blob />
      </Canvas>
    </div>
  )
}
