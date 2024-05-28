import { Switch } from "@nextui-org/react"
import { useEffect, useState } from "react"

type tabType = 'Main'|'AboutMe'|'Skill'|'Project'|'Contact'
type functionType = (item:tabType) => void
type PropsType = {
  selectedTab: tabType|null,
  HandleClick: functionType
}

function Navbar({selectedTab, HandleClick}: PropsType) {
  const [dark, setDark] = useState<boolean>(false)
  
  const toggleDarkMode = () => {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
      setDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDark(true)
    }
  }
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  })

  return (
    <div 
      className={`
        fixed top-0 flex 
        py-3 w-[100vw] 
        bg-[#FFFFFFCC] dark:bg-[#FFFFFF11]
        lg:py-5 lg:text-xl 
        font-semibold text-center text-base
      `}
      style={{fontFamily:'SEBANG_Gothic_Bold'}}
    >
      <div className="w-[20%] ml-[0%] lg:ml-[2%] lg:w-[13%]">
        <Switch
          isSelected={dark}
          size="lg"
          color="default"
          onClick={toggleDarkMode}
        />
        <p className="text-xs w-full text-gray-500 pr-[8px] dark:text-gray-300">{dark ? 'dark mode' : 'light mode'}</p>
      </div>
      <div className="w-[0%] lg:w-[40%]"/>
      <div className="w-[20%] lg:w-[10%] my-auto" onClick={() => {HandleClick('AboutMe')}}>
        <p className={`${selectedTab==='AboutMe' ? 'text-[#00a6fb]': ''} cursor-pointer`}>About Me</p>
      </div>
      <div className="w-[20%] lg:w-[10%] my-auto" onClick={() => {HandleClick('Skill')}}>
        <p className={`${selectedTab==='Skill' ? 'text-[#00a6fb]': ''} cursor-pointer`}>Skill</p>
      </div>
      <div className="w-[20%] lg:w-[10%] my-auto" onClick={() => {HandleClick('Project')}}>
        <p className={`${selectedTab==='Project' ? 'text-[#00a6fb]': ''} cursor-pointer`}>Projects</p>
      </div>
      <div className="w-[20%] lg:w-[10%] lg:mr-[5%] my-auto" onClick={() => {HandleClick('Contact')}}>
        <p className={`${selectedTab==='Contact' ? 'text-[#00a6fb]': ''} cursor-pointer`}>Contact</p>
      </div>
    </div>
  )
}

export default Navbar