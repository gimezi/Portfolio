import { Canvas } from "@react-three/fiber"
import { DaeTa } from "../Components/DaeTa"
import { OrbitControls } from "@react-three/drei"
// import { useScroll } from "framer-motion";

function AboutMe() {
  // const { scrollYProgress } = useScroll();
  // console.log(scrollYProgress?.current)
  return (
    <div className="w-full h-full">
      <div className='w-[40%] h-[70%] ml-0 lg:ml-[10%]'>
        <Canvas 
          linear 
          camera={{ position: [0, 30, 25], fov: 15 }}
        >
          <DaeTa/>
          <OrbitControls />
        </Canvas>
      </div>
      
      <div>
      </div>
    </div>
  )
}

export default AboutMe