import { Switch } from "@nextui-org/react"
import { useEffect, useState } from "react"

function Main() {
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
    <>
      메인페이지
      <Switch
        isSelected={dark}
        size="lg"
        color="default"
        onClick={toggleDarkMode}
      >
        {dark ? 'dark mode' : 'light mode'}
      </Switch>
    </>
  )
}

export default Main