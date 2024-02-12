import React from "react"

export function MultiLineText(props) {
    // Catch a Break! 

    const {text, classNames} = props

    const lines = text.split('<br>')

    const renderedParagraphs = lines.map(line=>{
        return (
            <p className={classNames}>{line}</p>
        )
    })
    return (
        <>
            {renderedParagraphs}
        </>
    )
}