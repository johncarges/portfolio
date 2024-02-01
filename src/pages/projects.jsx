
import ProjectTile from '../components/projectTile'
import {projectData} from '../projectData'

export default function Projects() {

    const renderedProjects = projectData.map((project, index)=>{
        return (
            <ProjectTile key={index} project={project}/>
        )
    })

    return (
        <div className='projects-page'>
            <div className='projects-list'>
                {renderedProjects}
            </div>
        </div>
    )

}