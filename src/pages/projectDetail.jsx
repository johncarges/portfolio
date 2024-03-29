import React from 'react'
import { useParams } from "react-router-dom";
import { projectData } from '../projectData';
import { MultiLineText } from '../components/multilineText';

export default function ProjectDetail() {
    const {projectName} = useParams()

    const project = projectData.filter(pr => {
        return pr.detailUrl === projectName
    })[0]


    const deployText = project.currentlyDeployed 
        ? <a style={{'text-decoration':'underline', 'padding':'.3rem'}} 
            target="_blank" 
            rel="noopener noreferrer" 
            href={project.deployLink}
            
            >&rarr; Visit</a>
        : project.deployLink && <p style={{'font-size':'small'}}>Not currently deployed</p> 
    // Only show link/'not currently deployed' if there is a link. (not for cli's, etc)


    const renderedSections = project.sections.map(section => {
        return <SectionTile section={section}/>
    })

    return (
        <div className='project-detail-page page'>
            <div className='project-detail-section tile'>
                <h1>{project.name}</h1>
                <img className='main-project-image' src={project.image}/>
                <h3>{project.subtitle}</h3>
                {!!project.collaborators && <h5>In collaboration with {project.collaborators[0]}</h5>}
                {deployText}
                <a style={{'text-decoration':'underline', 'padding':'.3rem'}} target="_blank" rel="noopener noreferrer" href={project.githubLink}>&rarr; GitHub</a>
                <MultiLineText text={project.description}/>
            </div>
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
    console.log(image)
    return (
        <div className='project-detail-section tile'>
            <h3>{title}</h3>
            { (!!image) && <img className='section-image' src={image} alt={title}/>}
            {renderedDescription}
        </div>
    )
}