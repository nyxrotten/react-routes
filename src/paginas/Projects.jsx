import projects from '../data/projects';
import {useState} from 'react';
import { useParams, Link} from 'react-router-dom'

function Projects() {
    const [projectsData, setProjectsData] = useState(projects)

    return (
        <>
        <header>
            <h1>Projects</h1>
            <div>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/resume">Resume</Link></h2>
            </div>
        </header>
        <main>
            {projectsData.map((project) => {
                return <>
                <h2>{project.name}</h2>
                <img src={project.image}/>
                <h3>{project.description}</h3>
                <h4>{project.url}</h4>
                </>
            })}
        </main>
        </>
    )
}


export default Projects;