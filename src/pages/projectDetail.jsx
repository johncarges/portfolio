import React from 'react'
import { useParams } from "react-router-dom";
import { projectData } from '../projectData';

export default function ProjectDetail() {
    const {projectName} = useParams()

    const project = projectData.filter(pr => {
        return pr.detailUrl === projectName
    })[0]


    const renderedSections = project.sections.map(section => {
        return <SectionTile section={section}/>
    })

    return (
        <div className='project-detail-page page'>
            <h1>{project.name}</h1>
            <h4>{project.subtitle}</h4>
            
            <p>{project.description}</p>
            {renderedSections}
        </div>
    )
}

function SectionTile(props) {
    const {title, image, description} = props.section

    let renderedDescription;

    if (description.includes('<br>')) {
        const lines = description.split("<br>")
        renderedDescription = lines.map(line => {
            return <p>{line}</p>
        })
    } else {
        renderedDescription = <p>{description}</p>
    }

    return (
        <div>
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            {renderedDescription}
        </div>
    )
}