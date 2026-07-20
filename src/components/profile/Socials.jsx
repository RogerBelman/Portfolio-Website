import GitHub from '/src/assets/GitHub.jpg'
import LinkedIn from '/src/assets/LinkedIn.png'
import './Socials.css'

const socialLinks = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/roger-belman/',
        image: LinkedIn,
    },
    {
        name: 'GitHub',
        link: 'https://github.com/RogerBelman',
        image: GitHub,
    },
]

function Socials(){

    return(
        <div className="socials-placement">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    className="social-link"
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Roger Belman on ${social.name}`}
                >
                    <img src={social.image} alt="" className="social-image"></img>
                </a>
            ))}
        </div>
    );
}

export default Socials
