


type skillType = {
    name: string,
    image:string,
    projects: number[]
}

// 프로젝트 번호: 노션에 있는 번호순대로
function FrontEndSkills() {
    const FrontSkills:skillType[] = [
        {
            name:'JavaScript',
            image: '',
            projects: [2, 3]
        },
        {
            name:'TypeScript',
            image: '',
            projects: [0, 1]
        },
        {
            name:'HTML',
            image: '',
            projects: []
        },
        {
            name:'CSS',
            image: '',
            projects: []
        },
        {
            name: 'React',
            image: '/logo/React.png',
            projects: [0, 1, 2]
        },
        {
            name:'Redux',
            image: '',
            projects: [0, 1, 2]
        },
        {
            name:'Vue.js',
            image: '',
            projects: [3]
        },
        {
            name:'Three.js',
            image: '',
            projects: [1]
        },
        {
            name:'Tailwind CSS',
            image: '',
            projects: [2, 3]
        },
        {
            name:'Styled Component',
            image: '',
            projects: [2, 3]
        },
    ]
    return(
        <div className="w-full h-full">
            FrontEnd
        </div>
    )
}

export default FrontEndSkills