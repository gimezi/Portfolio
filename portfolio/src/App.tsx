import { useEffect, useRef, useState } from "react"
import Navbar from "./Components/NavBar"
import Main from "./Templates/Main"
import AboutMe from "./Templates/AboutMe"
import Skill from "./Templates/Skill"
import Projects from "./Templates/Projects"
import Contact from "./Templates/Contact"

type tabType = 'AboutMe'|'Skill'|'Project'|'Contact'

function App() {
  const [selectedTab, setSelectedTab] = useState<tabType|null>(null) 

  const tabRef = {
    'AboutMe': useRef<HTMLDivElement>(null),
    'Skill': useRef<HTMLDivElement>(null),
    'Project' : useRef<HTMLDivElement>(null),
    'Contact' : useRef<HTMLDivElement>(null)
  }

  const HandleClick = (item :tabType) => {
    setSelectedTab(item)
    tabRef[item].current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const observers: { [key in tabType]: IntersectionObserver } = {
      'AboutMe': new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSelectedTab('AboutMe')
        }
      }),
      'Skill': new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSelectedTab('Skill')
        }
      }),
      'Project': new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSelectedTab('Project')
        }
      }),
      'Contact': new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSelectedTab('Contact')
        }
      })
    }

    Object.keys(tabRef).forEach((key) => {
      if (tabRef[key as tabType].current) {
        observers[key as tabType].observe(tabRef[key as tabType].current ? tabRef[key as tabType].current)
      }
    })

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect())
    }
  }, [])
  
  return (
    <div className="dark:bg-[#343a40]">
      <Navbar 
        selectedTab={selectedTab}
        HandleClick={HandleClick}
      />
      <div style={{height: '100vh'}}>
        <Main/>
      </div>
      <div ref={tabRef['AboutMe']} style={{height: '100vh'}}>
        <AboutMe/>
      </div>
      <div ref={tabRef['Skill']} style={{height: '100vh'}}>
        <Skill/>
      </div>
      <div ref={tabRef['Project']} style={{height: '100vh'}}>
        <Projects/>
      </div>
      <div ref={tabRef['Contact']} style={{height: '100vh'}}>
        <Contact/>
      </div>
    </div>
  )
}

export default App
