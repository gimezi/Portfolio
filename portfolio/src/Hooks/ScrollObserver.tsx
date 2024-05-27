import { useEffect } from "react"
import { tabType, tabRefType } from "../types/scrolltypes"

type PropsType = {
    tabRef :tabRefType,
    handleSelectedTab: (tab: tabType) => void
}
export default function ScrollObserver({tabRef, handleSelectedTab}:PropsType) {
    useEffect(() => {
        const observers: { [key in tabType]: IntersectionObserver } = {
          'Main': new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                handleSelectedTab('Main')
            }
          }, {threshold: 0.3}),
          'AboutMe': new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                handleSelectedTab('AboutMe')
            }
          }, {threshold: 0.3}),
          'Skill': new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                handleSelectedTab('Skill')
            }
          }, {threshold: 0.3}),
          'Project': new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                handleSelectedTab('Project')
            }
          }, {threshold: 0.3}),
          'Contact': new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                handleSelectedTab('Contact')
            }
          }, {threshold: 0.3})
        }
    
        Object.keys(tabRef).forEach((key) => {
          if (tabRef[key as tabType].current) {
            observers[key as tabType].observe(tabRef[key as tabType].current!)
          }
        })
    
        return () => {
          Object.values(observers).forEach((observer) => observer.disconnect())
        }
      }, [])
}
