import { MultiLineText } from '../components/multilineText'
import headshot from '../assets/Headshot.jpg'

export default function About() {
    
    return (
        <div className='page'>
            <div className='about-page-image-container'>
                <img src={headshot} alt='John_Carges_Headshot'></img>
            </div>
            <div className='about-page-info'>
                <h2>Teacher and Filmmaker turned Full Stack Software Engineer</h2>
                <MultiLineText text={bioCopy}/>
                <p style={{'font-style': 'italic'}}>This website built with React.js, and deployed 
                via <a href='https://render.com'>Render</a>.</p>
            </div>
        </div>
    )
}



const bioCopy = `
    FIRST SENTENCE. I studied math and philosophy
    <br>
    Though my career has taken me through seemingly unrelated industries, I see two key themes that have driven me throughout: communication and rule-based thinking.
    <br>
    At NYU I developed passion not only for math and philosophy, but also for teaching: sharing and communicating ideas. I worked part-time as a teaching assistant at a Manhattan public school for the four years that I was at NYU, and also as a math tutor at the NYU tutoring center during my Junior and Senior years. Pursuing teaching after graduation, I worked with the math department at the NYU campus in Abu Dhabi to help students in smaller lecture groups and collaborate with other STEM departments to create more integrated curricula and resources.
    <br>
    Of course, communication is a huge part (or the whole point?) of filmmaking as well, and on every production I learned something new about how to use light, camera angles, and color to plant ideas and make connections for the viewer. Communication amongst crewmembers is absolutely crucial as well, as there can often be 100's of crewmembers rushing around the same small spaces to efficiently create the shots that you end up seeing on your TV. I often found myself simultaneously talking to someone on the phone, gesturing to someone in person, and hearing a question or request in my walkie-talkie earpiece, so mastering concise communication was a must. 
    <br>
    More abstractly, throughout my career I have gravitated towards rule-based thinking. This is perhaps clearest in my choice of majors: math and philosophy. My favorite area of study in math was abstract algebra, in which one starts with a set (the most simple mathematical object) and slowly adds rules to allow combination or comparison of elements, resulting in more intricate structures like groups, rings, and fields. Similarly in philosophy, many papers and ideas start with a small set of axioms, and see what can be derived logically. 
    <br>
    As a math teacher, I have always emphasized the fundamental concepts over memorization. 
    <br>
    And film, like any art, involves rules (which are often broken!). Rules may be established by a genre, director, or cinematographer. Whether viewers notice it or not, films often decide on color schemes and when and how to use the different colors (it is common for films to shift towards blue when a character is at a low point, for example). Shakier handheld camerawork is often used to capture frenetic, violent scenes, but a director may create his or her own rule: shoot all such scenes without any camera movement, emphasizing horror rather than energy. 
    <br>
    I imagine it's not hard to see how 
`