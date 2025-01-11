import { NavLink } from 'react-router-dom'
 
import './Navigation.css'

function Navigation(){
    
    const getLinkClass = ({ isActive }) => (isActive ? 'active' : 'inactive');
   
    return(
        <nav>
            <NavLink to="/" className={getLinkClass}>Profile</NavLink>
            <NavLink to="/Projects" className={getLinkClass}>Projects</NavLink>
            <NavLink to="/Experience" className={getLinkClass}>Experience</NavLink>
        </nav>
    );
}

export default Navigation