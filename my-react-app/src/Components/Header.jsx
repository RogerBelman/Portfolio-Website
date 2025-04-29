import Navigation from './Navigation.jsx'
import Logo from './Logo.jsx'
import './Header.css'

function Header(){
    
    return(
        <header>
            <div className="header-content">
                <Logo></Logo>
                <div className="text-content">
                    <h1>Roger Belman</h1>
                    <h3>Aspiring Software Engineer</h3>
                </div>
            </div>
            <Navigation></Navigation>
        </header>
    );
}

export default Header
