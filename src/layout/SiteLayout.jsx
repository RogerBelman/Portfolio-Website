import { Outlet } from 'react-router-dom'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

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
