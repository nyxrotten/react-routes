import { useParams, Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <header>
            <h1>Home</h1>
            <div>
                <h2><Link to="/projects">Projects</Link></h2>
                <h2><Link to="/resume">Resume</Link></h2>
            </div>
            <div className='welcomeBox'>
                <h3>Welcome to my portfolio!</h3>
            </div>
        </header>
        </>
        
    )
}


export default Home;
