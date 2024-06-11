// import { useScroll } from "framer-motion";
import LoadingModel from "../Components/LoadingModel"

type introduceType = {
  title: string,
  content: string
}
function AboutMe() {
  const introduce:introduceType[] = [
    {
      title: '기록하며 공부하는 사람',
      content: `개발을 공부한 2023년 7월부터 블로그에 약 150여개의 글을 기록하며 공부하고 있습니다.
      최근에는 다른 사람에게 도움이 되는 다듬어진 글을 기록하기 위해 노력하고 있습니다.`
    },
    {
      title: '새로운 기술을 도전하는 사람',
      content: '프론트엔드 기술은 끊임없이 발전하고, 저는 이러한 변화에 발맞춰 항상 새로운 도전을 하고 있습니다. 매 프로젝트마다 새로운 기술이나 도구를 탐구하며, 이를 실제 프로젝트에 적용해보는 과정을 통해 성장하고 있습니다.'
    },
  ]


  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      <div 
        className={`
          w-full h-[40%]
          lg:w-[40%] lg:h-[50%] lg:ml-0 lg:my-auto
        `}
      >
        <LoadingModel/>
      </div>
      <div 
        className={`
          w-full h-[60%]
          flex flex-col justify-around
          lg:w-[60%] lg:h-full lg:py-[10%]
        `}
      >
       {
          introduce.map((intro, idx) => {
            return(
              <IntroduceP title={intro.title} content={intro.content} key={idx}/>
            )
          })
       }
      </div>
    </div>
  )
}

export default AboutMe

function IntroduceP({title, content}:introduceType) {
  return(
    <div className="w-full h-[45%] lg:h-[40%] p-3">
      <p className="text-2xl underline underline-offset-8 mb-4" style={{fontFamily:'WavvePADO-Regular'}}>{title}</p>
      <p className="p-1 text-slate-600 dark:text-slate-200 lg:pr-20">{content}</p>
    </div>
  )
}