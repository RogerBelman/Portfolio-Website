import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import Button from '../Components/Button.jsx'
import SEO from '../Components/SEO.jsx'
import './NotFound.css'

function NotFound(){

    return(
        <>
            <SEO
                title="Page Not Found"
                description="The requested page could not be found on Roger Belman's portfolio."
                path="/404"
            />
            <Header></Header>
            <main className="NotFound">
                <p className="NotFound-code">404</p>
                <h1>Page Not Found</h1>
                <p className="NotFound-copy">
                    The page you are looking for may have moved, changed names, or no longer exists.
                </p>
                <div className="NotFound-actions">
                    <Button href="/" text="Go Home"></Button>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default NotFound
