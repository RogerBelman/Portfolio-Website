import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

function SiteLayout() {
    return (
        <>
            <Navbar></Navbar>
            <main id="main-content" className="site-content">
                <Outlet></Outlet>
            </main>
            <footer>
                <p>Last Updated July 2026</p>
            </footer>
        </>
    )
}

export default SiteLayout
