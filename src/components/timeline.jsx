import { useState } from "react"
import Popup from "./timelinePopUp"

export default function Timeline() {

    const [showTip, setShowTip] = useState(true)

    const tip = (
        <div className='timeline-tip' style={{'height':'30px'}}>
            {showTip ? <p>Hover to read more</p> : <p></p>}
        </div>
    )

    return (
        <div className='timeline-container'>
            {tip}
            <div className='timeline' onMouseEnter={()=>setShowTip(false)}>
                <div className='end-tick'></div>
                <div className='chunk' style={{'background-color':'#643583','width':'80px'}}>
                    <div className='popup'>
                        <p>2009-2013</p>
                        <h4>Bachelor's Degree</h4>
                        <h3>New York University</h3>
                        <p>Double Major in Math and Philosophy, Magna Cum Laude</p>
                    </div>
                </div>
                <div className='chunk' style={{'background-color':'#fa1','width':'70px'}}>
                    <div className='popup'>
                        <p>2013-2016</p>
                        <h4>Global Academic Fellowship in Mathematics</h4>
                        <h3>New York University in Abu Dhabi</h3>
                        <p>Assisted professors and developed curriculum for single- and multi-variable calculus courses.</p>
                    </div>
                </div>
                <div className='chunk' style={{'background-color':'#3d6','width':'200px'}}>
                    <div className='popup'>
                        <p>2016-2023</p>
                        <h4>Lighting Technician</h4>
                        <h3>Various Film and Television Projects including Succession, Maestro, and Mean Girls</h3>
                        <p>Planned and implemented set lighting, electrical distribution, and lighting control networks.</p>
                    </div>
                </div>
                <div className='chunk' style={{'background-color':'#f66','width':'70px'}}>
                    <div className='popup'>
                        <p>2021-2023</p>
                        <h4>Assistant Chief Lighting Technician</h4>
                        <h3>Various Film and Television Projects including Maybe I Do, Ezra, and Redemption in Cherry Springs</h3>
                        <p>Managed logistics, hiring, and budgeting for electrical department.</p> 
                    </div>
                </div>
                <div className='chunk' style={{'background-color':'#39ccc7','width':'50px'}}>
                    <div className='popup'>
                        <p>2023</p>
                        <h4>Software Engineering Bootcamp</h4>
                        <h3>The Flatiron School </h3>
                        <p>Full stack web development course in Python and Javascript.</p> 
                    </div>
                </div>
                <div className='end-tick'></div>
            </div>

        </div>
    )
}

