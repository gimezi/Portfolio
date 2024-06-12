import FrontEndSkills from "../Components/skill/FrontEndSkills"
import BackEndSkills from "../Components/skill/BackEndSkills"
import Collaborations from "../Components/skill/Collaborations"

function Skill() {
  return (
    <div className="w-full h-full px-5 lg:px-[10%]">
      <p className="text-5xl underline underline-offset-8 tracking-wider mb-7" style={{fontFamily:'SEBANG_Gothic_Bold'}}>Skill</p>
      <div className="w-full h-[85%] flex flex-col lg:flex-row">
        <div 
          className={`
            w-full h-[60%]
            lg:w-[60%] lg:h-full
          `}
        >
          <FrontEndSkills/>
        </div>
        <div
          className={`
          w-full h-[40%] 
          flex flex-row
          lg:w-[40%] lg:h-full lg:flex-col
        `}
        >
          <div
            className={`
              w-[50%] h-full
              lg:w-full lg:h-[50%]
            `}
          >
            <BackEndSkills/>
          </div>
          <div
            className={`
              w-[50%] h-full
              lg:w-full lg:h-[50%]
            `}
          >
            <Collaborations/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Skill