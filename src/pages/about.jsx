import headshot from '../assets/Headshot.jpg'

export default function About() {
    
    return (
        <div className='page'>
            <div className='about-page-image-container'>
                <img src={headshot} alt='John_Carges_Headshot'></img>
            </div>
            <div className='about-page-info'>
                <h2>Teacher and Filmmaker turned Full Stack Software Engineer</h2>
                <p>{bioCopy}</p>
                <p style={{'font-style': 'italic'}}>This website built with React.js, and deployed 
                via <a href='https://render.com'>Render</a>.</p>
            </div>
        </div>
    )
}



const bioCopy = ""