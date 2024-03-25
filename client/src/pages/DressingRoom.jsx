import { Suspense, useEffect, useRef } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Grid, ScrollControls, useScroll, 
  Scroll, Text, Clone } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  

export default function DressingRoom() {
  return (
    <div className="droom" style={{ width:'100vw',height:'100vh'}}>
         <Canvas shadows camera={{ position: [0, 0, 15], fov: 65 }}>
         <Environment preset={"sunset"} background={true} blur={0.1} />
         <OrbitControls />
         </Canvas>
    </div>
  )
}
