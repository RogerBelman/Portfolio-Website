import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/RB.jpg'
import './Navbar.css'

function Navbar(){
    
    const [isHidden, setIsHidden] = useState(false);
    const getLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let upwardScrollDistance = 0;
        const showThreshold = 120;

        function handleScroll() {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY;

            if (currentScrollY <= 20) {
                setIsHidden(false);
                upwardScrollDistance = 0;
            } else if (scrollDifference > 0) {
                setIsHidden(true);
                upwardScrollDistance = 0;
            } else if (scrollDifference < 0) {
                upwardScrollDistance += Math.abs(scrollDifference);

                if (upwardScrollDistance >= showThreshold) {
                    setIsHidden(false);
                }
            }

            lastScrollY = currentScrollY;
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header className={isHidden ? 'site-header hidden' : 'site-header'}>
            <div className="site-header-inner">
                <div className="header-content">
                    <img src={logo} alt="RB" className="site-logo"></img>
                    <div className="text-content">
                        <p className="site-name">Roger Belman</p>
                        <h3>Aspiring Software Engineer</h3>
                    </div>
                </div>
                <nav aria-label="Primary navigation">
                    <NavLink to="/" className={getLinkClass}><p>Profile</p></NavLink>
                    <NavLink to="/projects" className={getLinkClass}><p>Projects</p></NavLink>
                    <NavLink to="/experience" className={getLinkClass}><p>Experience</p></NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar
