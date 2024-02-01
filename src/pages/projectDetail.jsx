import React from 'react'
import { useParams } from "react-router-dom";
import { projectData } from '../projectData';

export default function ProjectDetail() {
    const {projectName} = useParams()

    const project = projectData.filter(pr => {
        return pr.detailUrl === projectName
    })[0]



    return (
        <div>
            <h1>{project.name}</h1>
            <h4>{project.subtitle}</h4>
            
            <p>{project.description}</p>
        </div>
    )
}