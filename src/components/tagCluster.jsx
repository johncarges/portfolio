import React from "react"

export default function TagCluster(props) {

    const {tags} = props

    if (!tags) {
        console.log(tags)
        return null
    }

    const tagColors = {
        'Python': '#8f8',
        'Javascript': '#f09b25',
        'React.js': '#527ae6',
        'FastAPI': '#7ac69c',
        'Flask': '#daa',
        
    }

    const renderedTags = tags.map(tag=> {
        
        const color = tagColors[tag] ?? '#ccc'

        return (
            <p style={{'background-color':color}}>{tag}</p>
        )
    })

    return (
        <div className='tag-cluster'>
            {renderedTags}
        </div>
    )


}