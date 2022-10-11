import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { advice, anime, breaking, fitness, gericht, loopstudio, todo, fylo, warehouse, } from './assets';




export const projects =[
    {
        id:1,
        image:warehouse,
        desc:'Reactjs, Framer-motion, AOS, Tailwind',
        demo: 'http://warehousestar.netlify.app/',
        source: 'https://github.com/PenuelSam/Ware-house-app'
    },
    {
        id:2,
        image:anime,
        desc:'Reactjs, Rapid-Api, CSS',
        demo: 'http://animeland.netlify.app/',
        source: 'https://github.com/PenuelSam/Anime-app'
    },
    {
        id:3,
        image:fitness,
        desc:'Reactjs, CSS',
        demo: 'http://yourfavfitnesssite.netlify.app/',
        source: 'https://github.com/PenuelSam/React-Router-v6'
    },
    {
        id:4,
        image:gericht,
        desc:'Reactjs, CSS',
        demo: 'http://geritchfav.netlify.app/',
        source: 'https://github.com/PenuelSam/Restaurant-App'
    },
    {
        id:5,
        image:loopstudio,
        desc:'Reactjs, Tailwind, CSS',
        demo: 'http://vr-loopstudios.netlify.app/',
        source: 'https://github.com/PenuelSam/loop-studio'
    },
   
    {
        id:6,
        image:fylo,
        desc:'Reactjs, Tailwind',
        demo: 'http://mafylo.netlify.app/',
        source: 'https://github.com/PenuelSam/Fylo'
    },
    {
        id:7,
        image:todo,
        desc:'Reactjs, Firebase, Tailwind',
        demo: 'http://easytodoap.netlify.app/',
        source: 'https://github.com/PenuelSam/Todo-App'
    },
    {
        id:8,
        image:breaking,
        desc:'Reactjs, CSS',
        demo: 'http://breakingbad-char.netlify.app/',
        source: 'https://github.com/PenuelSam/Breaking-bad-app'
    },
    {
        id:9,
        image:advice,
        desc:'Reactjs, API, Tailwind',
        demo: 'http://advicequotegen.netlify.app/',
        source: 'https://github.com/PenuelSam/Quote-Generator'
    },
    
]


export const navList = [
    {
        id: '/',
        name: 'Home'
    },
    {
        id: '#about',
        name: 'About'
    },
    {
        id: '#skill',
        name: 'Skills'
    },
    {
        id: '#portfolio',
        name: 'Projects'
    },
    {
        id: '#contact',
        name: 'Contact'
    },
]

export const skills =[
    {
        id: 1,
        tick: <CheckCircleIcon />,
        title: 'HTML',
        desc: 'Basics',
    },
    {
        id: 2,
        tick: <CheckCircleIcon />,
        title: 'CSS',
        desc: 'Advanced',
    },
    {
        id: 3,
        tick: <CheckCircleIcon />,
        title: 'Javascript',
        desc: 'Intermediate',
    },
    {
        id:4,
        tick: <CheckCircleIcon />,
        title: 'React',
        desc: 'Intermediate',
    },
    {
        id: 5,
        tick: <CheckCircleIcon />,
        title: 'Tailwind',
        desc: 'Intermediate',
    },
    {
        id: 6,
        tick: <CheckCircleIcon />,
        title: 'Git', 
        desc: 'Intermediate',       
    },
    {
        id: 7,
        tick: <CheckCircleIcon />,
        title: 'Framer-Motion', 
        desc: 'Intermediate',       
    },
    {
        id: 8,
        tick: <CheckCircleIcon />,
        title: 'AOS', 
        desc: 'Intermediate',       
    },
    {
        id: 9,
        tick: <CheckCircleIcon />,
        title: 'REST-API', 
        desc: 'Intermediate',       
    },
]

