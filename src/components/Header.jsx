import Navigation from './Navigation.jsx'
import Logo from './Logo.jsx'
import './Header.css'

function Header(){
    
    return(
        <header>
            <div className="header-content">
                <Logo></Logo>
                <div className="text-content">
                    <p className="site-name">Roger Belman</p>
                    <h3>Aspiring Software Engineer</h3>
                </div>
            </div>
            <Navigation></Navigation>
        </header>
    );
}

export default Header
