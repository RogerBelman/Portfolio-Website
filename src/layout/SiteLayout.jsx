import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function SiteLayout() {
    return (
        <>
            <Header></Header>
            <main id="main-content">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    )
}

export default SiteLayout
