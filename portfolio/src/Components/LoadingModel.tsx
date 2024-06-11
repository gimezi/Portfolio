import { DaeTa } from "./DaeTa"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function LoadingModel() {
    return(
        <Canvas 
          linear 
          camera={{ position: [0, 30, 25], fov: 15 }}
        >
          <DaeTa/>
          <OrbitControls />
        </Canvas>
    )
}
export default LoadingModel