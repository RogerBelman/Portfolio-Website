import Button from '../Button'
import './Resume.css'

function Resume(){

    return(
        <div className="resume-placement">
            <div className="resume-copy">
                <h3>Resume</h3>
                <p>View my latest resume as a PDF.</p>
            </div>
            <Button href="/Resume_Roger_Belman.pdf" target="_blank" text="View Resume"></Button>
        </div>
    );
}

export default Resume
