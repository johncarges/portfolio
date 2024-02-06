import React from 'react'
import { Link } from "react-router-dom"
import TagCluster from "./tagCluster"

export default function ProjectTile(props) {
    const {project} = props

    const deployText = project.currentlyDeployed 
        ? <a href={project.deployLink}>Currently deployed via Render</a>
        : project.deployLink && <p style={{'font-size':'small'}}>Not currently deployed</p> 
    // Only show link/'not currently deployed' if there is a link. (not for cli's, etc)


    return (
        <Link to={`/projects/${project.detailUrl}`}>
            <div className='project-tile tile'>
                <h3>{project.name}</h3>
                <div className='project-tile-img-container'>
                    <img src={project.image} alt={project.name}/>
                </div>
                <p>{project.subtitle}</p>
                {deployText}
                <TagCluster tags={project.tags}/>
            </div>
        </Link>
    )

}