import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'

type PropsType = {
  children : string,
  baseVelocity: number
}

export default function ScrollText({ children, baseVelocity = 100} :PropsType) {
  
    // 여기서부터는 테스트
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0,1000], [0,5], {
      clamp: false
    })

    const x = useTransform(baseX, (v) => `${3*v}%`)
    const directionFactor = useRef<number>(1)
    useAnimationFrame((_t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get()

      baseX.set(baseX.get() + moveBy)
    })
  return(
    <motion.div 
      style={{ x }} 
      className='w-[100vw] overflow-hidden m-0 whitespace-nowrap flex flex-nowrap'
    >
      <span>{children}</span>
      <span className='mx-[50px]'></span>
      <span>{children}</span>
      <span className='mx-[50px]'></span>
    </motion.div>
  )
}

