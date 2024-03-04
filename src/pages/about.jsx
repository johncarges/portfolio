import { MultiLineText } from '../components/multilineText'
import headshot from '../assets/Headshot.jpg'
import Timeline from '../components/timeline'

export default function About() {
    
    return (
        <div className='about-page page'>
            <div className='about-page-image-container'>
                <img src={headshot} alt='John_Carges_Headshot'></img>
            </div>
            <div className='about-page-info'>
                <h2>Mathematician, Teacher and Filmmaker turned Full Stack Software Engineer</h2>
                <hr/>
                <h3>Experience and Education</h3>
                <Timeline />
                <hr />
                <h3>Left Brain Meets Right Brain</h3>
                <MultiLineText text={bioCopy}/>
                <p style={{'font-style': 'italic'}}>This website built with React.js, and deployed 
                via <a target="_blank" rel="noopener noreferrer" href='https://render.com'>Render</a>.</p>
            </div>
        </div>
    )
}



const bioCopy = `
    Though my career has taken me through seemingly unrelated industries, I see two key themes that have driven me throughout: communication and rule-based thinking.
    <br>
    At NYU I developed passions not only for math and philosophy, but also for teaching. Of course, teaching is entirely about communication: how do I take the complex idea in my head and package it in a way that the student or group in front of me will be able to receive? I worked part-time as a teaching assistant at a Manhattan public school for the four years that I was at NYU, and also as a math tutor at the NYU tutoring center during my junior and senior years. Pursuing teaching after graduation, I worked with the math department at the NYU campus in Abu Dhabi to help students in smaller lecture groups and collaborate with other STEM departments to create more integrated curricula and resources. In Abu Dhabi I was able to further develop my communication skills, developing lesson plans and assignments that emphasized core concepts and important applications, creating visual models in Python and Mathematica, and working with a diverse student body representing nearly 100 different countries.
    <br>
    Of course, communication is a huge part (or the whole point?) of filmmaking as well, and on every production I learned something new about how to use light, camera angles, and color to plant ideas and make connections for the viewer. Communication between crewmembers is absolutely crucial as well, as there can often be hundreds of crewmembers rushing around the same small spaces to efficiently create the shots that you end up seeing on your TV. I often found myself simultaneously talking to someone on the phone, gesturing to someone in person, and hearing a question or request in my walkie-talkie earpiece, so mastering concise communication was a must. 
    <br>
    More abstractly, throughout my career I have gravitated towards rule-based thinking. This is perhaps clearest in my choice of majors: math and philosophy. My favorite area of study in math was abstract algebra, in which one starts with a set (the most simple mathematical object) and slowly adds rules to allow combination or comparison of elements, resulting in more intricate structures like groups, rings, and fields. The central thrust of abstract algebra is: given a small set of constraints about a system, what theorems and applications can we derive for the system. Similarly in philosophy, many papers and ideas start with a small set of axioms, and see what can be derived logically. 
    <br>
    And film, like any art, involves rules (which are often broken). Rules may be established by a genre, director, or cinematographer. Whether viewers notice it or not, films often decide on color schemes and when and how to use the different colors (it is common for films to shift towards blue when a character is at a low point, for example). Shakier handheld camerawork is often used to capture frenetic, violent scenes, but a director may create his or her own rule: shoot all such scenes without any camera movement, emphasizing horror rather than energy. It was always incredibly rewarding to see how the chosen constraints of a project created new meaning and stories in the final product.
    <br>
    Perhaps it's not hard to see why I've enjoyed writing code ever since I began using Python at NYU. Or why, when film production was paused at the beginning of the Covid-19 quarantine, I chose to start working towards enrolling in a bootcamp like Flatiron. With an eye to the rules of languages, paradigms and best practices, and a commitment to clear communication to users and other developers, I'm incredibly excited to begin my work as a software engineer.
`