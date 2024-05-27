import { useRef, useState } from "react"
import Navbar from "./Components/NavBar"
import Main from "./pages/Main"
import AboutMe from "./pages/AboutMe"
import Skill from "./pages/Skill"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import ScrollObserver from "./Hooks/ScrollObserver"
import { tabType, tabRefType } from "./types/scrolltypes"
import { Button } from "@nextui-org/react"

function App() {
  const [selectedTab, setSelectedTab] = useState<tabType | null>(null)

  const tabRef: tabRefType = {
    'Main': useRef<HTMLDivElement>(null),
    'AboutMe': useRef<HTMLDivElement>(null),
    'Skill': useRef<HTMLDivElement>(null),
    'Project': useRef<HTMLDivElement>(null),
    'Contact': useRef<HTMLDivElement>(null)
  }

  const HandleClick = (item: tabType) => {
    setSelectedTab(item)
    tabRef[item].current?.scrollIntoView({ behavior: 'smooth'})
  }

  const handleSelectedTab = (tab: tabType) => {
    setSelectedTab(tab)
  }

  ScrollObserver({ tabRef, handleSelectedTab })

  return (
    <div className="dark:bg-[#343a40]">
      <Navbar
        selectedTab={selectedTab}
        HandleClick={HandleClick}
      />
      <Button 
        isIconOnly
        size="lg"
        onClick={() => HandleClick('Main')} 
        className="fixed bottom-[3vw] right-[2vh]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </Button>
      <div ref={tabRef['Main']} className="h-[100vh] pt-[10vh]">
        <Main />
      </div>
      <div ref={tabRef['AboutMe']} style={{ height: '100vh' }}>
        <AboutMe />
      </div>
      <div ref={tabRef['Skill']} style={{ height: '100vh' }}>
        <Skill />
      </div>
      <div ref={tabRef['Project']} style={{ height: '100vh' }}>
        <Projects />
      </div>
      <div ref={tabRef['Contact']} style={{ height: '100vh' }}>
        <Contact />
      </div>
    </div>
  )
}

export default App
