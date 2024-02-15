
export default function Contact() {


    return (
        <div className='contacts-page page'>
            <h1>My Information</h1>
            <div className='contacts-grid'>
                <a target="_blank" rel="noopener noreferrer" className='tile' href='mailto: johncarges@gmail.com'>johncarges@gmail.com</a>
                <a target="_blank" rel="noopener noreferrer" className='tile' href='https://www.linkedin.com/in/john-carges/'>LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" className='tile' href='https://github.com/johncarges'>Github</a>            
                <a target="_blank" rel="noopener noreferrer" className='tile' href="https://drive.google.com/file/d/1uBYnfR8K-RgNocK_7zppLdw_9mUkshOQ/view?usp=sharing">Resume</a>            
                
                <hr style={{'width':'100%', 'opacity':'20%'}}></hr>
                <h4 style={{'font-style':'italic'}}>Extra-Curricular</h4>
                <a target="_blank" rel="noopener noreferrer" className='tile' href='https://www.instagram.com/john_carges/'>Instagram</a>
                <a target="_blank" rel="noopener noreferrer" className='tile' href='https://www.imdb.com/name/nm12713021/'>IMDB</a>
            </div>
        </div>
    )
}


