import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation(){
    
    const getLinkClass = ({ isActive }) => (isActive ? 'active' : 'inactive');
   
    return(
        <nav>
            <NavLink to="/" className={getLinkClass}><p>Profile</p></NavLink>
            <NavLink to="/Projects" className={getLinkClass}><p>Projects</p></NavLink>
            <NavLink to="/Experience" className={getLinkClass}><p>Experience</p></NavLink>
        </nav>
    );
}

export default Navigation
