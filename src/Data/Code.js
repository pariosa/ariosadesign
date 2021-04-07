import { faReact, faJs,faLaravel, faPhp, faBootstrap, faNode, faStripeS} from '@fortawesome/free-brands-svg-icons'
import { faFireAlt, faDna ,faDatabase,faFan, faCube } from '@fortawesome/free-solid-svg-icons'

export const codeTemplate = {
    title:"",
    link:"",
    githubLink:"",
    description:"",
    technologies:[],
    technologiesIcons:[],
    screenshot:""
}
export const data = [
    {
        title:"React Character Sheet",
        className:"charactersheet",
        link:"http://charactersheet.online",
        githubLink:"https://github.com/pariosa/Cha-react-er-Sheet",
        description:"A Character sheet application for d20 3.5 style game systems using react-redux and firebase storage",
        technologies:["Firebase", "React.js", "Redux", "Webpack", "Semantic-ui","Node.js","Javascript"],
        technologiesIcons:[faFireAlt, faReact, faDna, faCube, faFireAlt, faStripeS, faNode,faJs ],
        screenshot:"charactersheet.png"
    },
    {
        title:"Laravel E-Commerce Platform",
        link:"",
        className:"ecommerce",
        githubLink:"https://github.com/pariosa/laravel-ecommerce",
        description:"Ecommerce platform build on PHP framework Laravel 8",
        technologies:["Laravel", "php", "Blade", "Mysql", "Bootstrap"],
        technologiesIcons:[faLaravel, faPhp, faFan, faDatabase, faBootstrap],
        screenshot:"laravel_admin.png"
    },
    {
        title:"Cvlture Crew Homepage",
        className:"cvlturecrew",
        link:"http://cvlturecrew.com",
        githubLink:"https://github.com/pariosa/cvlturecrew",
        description:"Events Page for local music scene organization",
        technologies:["React.js", "Javascript", "Webpack", "Node.js"],
        technologiesIcons:[faReact, faJs, faCube, faNode],
        screenshot:"cvlturecrew.png "
    },
]



export default data;