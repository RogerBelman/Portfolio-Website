import AnExperience from './AnExperience'
import './ExperienceBody.css'

function ExperienceBody(){

    return(
        <div className="ExperienceBody">
            <h1>Experience</h1>
            <AnExperience 
                company="AB Drywall Systems LLC" 
                position="Construction Delivery & Labor" 
                link="https://www.abdrywallsystemsllc.com/" 
                skills="English, Spanish, Physical Labor, Transportation, Communication"
                description={
                    "Delivered construction materials to job sites.\n" +
                    "Assisted mechanics with on-site construction tasks.\n" +
                    "Translated conversations between mechanics and supervisors in English and Spanish."
                }>
            </AnExperience>
            <hr></hr>
            <AnExperience 
                company="J. Crawford Construction Systems" 
                position="Construction Labor" 
                link="https://www.crawfordconstructionsystems.com/" 
                skills="English, Spanish, Physical Labor, Collaboration"
                description={
                    "Supported a mechanic with physical construction tasks.\n" +
                    "Worked in a collaborative, bilingual job site environment."
                }>
            </AnExperience>
            <hr></hr>
            <AnExperience 
                company="Walmart" 
                position="Front End Associate" 
                link="https://careers.walmart.com/" 
                skills="English, Spanish, Customer Service, Cash Handling, Conflict Resolution"
                description={
                    "Operated registers and provided front-end customer service in a fast-paced retail setting.\n" +
                    "Monitored and assisted self-checkout stations.\n" +
                    "Translated for Spanish-speaking customers and coworkers."
                }>
            </AnExperience>
        </div>
    );
}

export default ExperienceBody
