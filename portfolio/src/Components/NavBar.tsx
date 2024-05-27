type tabType = 'AboutMe'|'Skill'|'Project'|'Contact'
type functionType = (item:tabType) => void
type PropsType = {
  selectedTab: tabType|null,
  HandleClick: functionType
}

function Navbar({selectedTab, HandleClick}: PropsType) {
  return (
    <div className="sticky top-0 flex text-center py-8 text-base lg:text-lg font-semibold">
      <div className="w-[10%] lg:w-[55%]"/>
      <div className="w-[20%] lg:w-[10%]" onClick={() => {HandleClick('AboutMe')}}>
        <p className={`${selectedTab==='AboutMe' ? 'text-[#00a6fb]': ''} cursor-pointer`}>About Me</p>
      </div>
      <div className="w-[20%] lg:w-[10%]" onClick={() => {HandleClick('Skill')}}>
        <p className={`${selectedTab==='Skill' ? 'text-[#00a6fb]': ''} cursor-pointer`}>Skill</p>
      </div>
      <div className="w-[20%] lg:w-[10%]" onClick={() => {HandleClick('Project')}}>
        <p className={`${selectedTab==='Project' ? 'text-[#00a6fb]': ''} cursor-pointer`}>Projects</p>
      </div>
      <div className="w-[20%] lg:w-[10%]" onClick={() => {HandleClick('Contact')}}>
        <p className={`${selectedTab==='Contact' ? 'text-[#00a6fb]': ''} cursor-pointer`}>Contact</p>
      </div>
    </div>
  )
}

export default Navbar