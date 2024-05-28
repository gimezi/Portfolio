import { motion } from 'framer-motion'
import ScrollText from '../Components/ScrollText'

const variants:{} = {
  hidden: { opacity: 0, y: 20 },
  visible: (idx:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: idx * 0.3,
      duration: 1
    }
  })
}

function Main() {
  const messages = [
    {
      content: '안녕하세요',
      color1: 'text-[#6C757D]',
      color2: 'dark:text-[#ADB5BD]'
    }, 
    {
      content: '인사말입니다',
      color1: 'text-[#495057]', 
      color2: 'dark:text-[#CED4DA]'
    },
    {
      content: '쨔잔잔',
      color1: 'text-[#212529]',
      color2: 'dark:text-[#E9ECEF]'
    }
  ]
  
  return (
    <div className='mt-[20vh] ml-0 lg:ml-[10%] overflow-hidden' style={{fontFamily:'SEBANG_Gothic_Bold'}}>
      <ul>
        {messages.map((message, idx) => (
            <motion.li
              key={idx}
              initial='hidden'
              animate='visible'
              variants={variants}
              custom={idx}
            >
              <p 
                className={`
                  ${message.color1}
                  ${message.color2}
                  text-[4.5rem]
                `}
              >
                {message.content}
              </p>
            </motion.li>
          ))}
      </ul>
      <ScrollText baseVelocity={3}>🙋‍♀️ 저에 대한 소개를 시작해볼게요 </ScrollText>
    </div>
  )
}

export default Main