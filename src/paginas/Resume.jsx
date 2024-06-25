import {studies, experiences} from '../data/resume';
import { useParams, Link} from 'react-router-dom'
import {useState} from 'react';

function Resume() {
    const [studiesData, setStudiesData] = useState(studies)
    const [experciencesData, setExperiencesData] = useState(experiences)
    return (
        <>
        <header>
            <h1>Resume</h1>
            <div>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/projects">Projects</Link></h2>
            </div>
        </header>
        <main className='resumeBox'>
            <div className='studiesBox'>
            {studiesData.map((studies) => {
                return <>
                <h2>{studies.title}</h2>
                <h3>{studies.institution}</h3>
                <h4>{studies.date}</h4>
                </>
            })}
            </div>
            <div className='linea'></div>
            <div className='experiencesBox'>
            {experciencesData.map((experience) => {
                return <>
                <h2>{experience.title}</h2>
                <h3>{experience.company}</h3>
                <h4>{experience.date}</h4>
                </>
            })}
            </div>
        </main>
        </>
    ) 
}


export default Resume;