
import ProjectTile from '../components/projectTile'
import {projectData} from '../projectData'

export default function Projects() {

    const projectsToDisplay = projectData.filter(project=>project.display)

    const renderedProjects = projectsToDisplay.map((project, index)=>{
        return (
            <ProjectTile key={index} project={project}/>
        )
    })

    return (
        <div className='projects-page page'>
            <div className='projects-list'>
                {renderedProjects}
            </div>
        </div>
    )

}