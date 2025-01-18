import AnExperience from './AnExperience'
import './ExperienceBody.css'

function ExperienceBody(){

    return(
        <div className="ExperienceBody">
            <h1>Experience</h1>
            <AnExperience company="AB Drywall Systems LLC" position="Construction Delivery & Labor " 
                link="https://www.abdrywallsystemsllc.com/" skills="English, Spanish, Physical Labor, Transportation, Communication"></AnExperience>
            <hr></hr>
            <AnExperience company="J. Crawford Construction Systems" position="Construction Labor" 
                link="https://www.crawfordconstructionsystems.com/" skills="English, Spanish, Physical Labor, Collaboration"></AnExperience>
            <hr></hr>
            <AnExperience company="Walmart" position="Front End Associate" 
                link="https://careers.walmart.com/" skills="English, Spanish, Customer Service, Cash Handling, Conflict Resolution"></AnExperience>
        </div>
    );
}

export default ExperienceBody
