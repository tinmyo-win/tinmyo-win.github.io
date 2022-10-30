import spotifyProfilePng from './images/spotify-profile.png';
import './Projects.css';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'

const projects = [
    {
        name: 'SpotifyConnected App',
        image: spotifyProfilePng,
        detail: `                 A web app for visualizing personalized Spotify data. 
            View your top artists, top tracks, recently played tracks, 
            and detailed audio information about each track. Create and 
            save new playlists of recommended tracks based on your existing 
            playlists and more.`,
        tools: ['React', 'Styled Component', 'Express', 'Spotify Api', 'Netlify'],
        demoLink: 'https://spotify-profile-viewer.netlify.app/',
        sourceCode: 'https://github.com/tinmyo-win/spotify-app'
    },
]

const Projects = () => {
    return(
        <div id='projects' className='projects'>
            <ScreenHeading title='Projects' subHeading='Apps I built' />
            {projects.map((project, i) => (
                <div key={i} className={i%2===0 ? 'project-container' : 'project-container-reverse'}>
                    <img src={project.image} alt='Project Demo' />
                    <div className='project-description'>
                        <h2>{project.name}</h2>
                        <p>
                            {project.detail}
                        </p>
                        <ol>
                            {project.tools && project.tools.map((tool, i) => (
                                <li key={i}>{tool}</li>
                            ))}
                        </ol>
                        <a href={project.sourceCode}> Source Code <i className="fa fa-github"></i></a>
                        <a href={project.demoLink}> Demo <i className="fa fa-external-link"></i></a>
                    </div>
                </div>
            )

            )}
        </div>
    )
}

export default Projects;