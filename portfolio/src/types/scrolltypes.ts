type tabType = 'Main'|'AboutMe'|'Skill'|'Project'|'Contact'
type tabRefType = {
  Main: React.RefObject<HTMLDivElement>,
  AboutMe: React.RefObject<HTMLDivElement>,
  Skill: React.RefObject<HTMLDivElement>,
  Project: React.RefObject<HTMLDivElement>,
  Contact: React.RefObject<HTMLDivElement>
}

export type {tabType, tabRefType}