import { Link } from "react-router-dom"

export default function ProjectTile(props) {
    const {project} = props

    return (
        <Link to={`/projects/${project.detailUrl}`}>
            <div className='project-tile'>
                <h3>{project.name}</h3>
                <p>{project.subtitle}</p>
            </div>
        </Link>
    )

}