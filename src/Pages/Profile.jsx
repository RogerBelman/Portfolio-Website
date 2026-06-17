import Header from '../Components/Header.jsx'
import ProfileBody from '../Components/Profile/ProfileBody.jsx'
import Footer from '../Components/Footer.jsx'
import SEO from '../Components/SEO.jsx'
 
function Profile(){

    return(
        <>
            <SEO
                title="Roger Belman"
                description="Roger Belman is a software engineering student at The University of Texas at Dallas building practical web applications with React and modern development tools."
                path="/"
            />
            <Header></Header>
            <ProfileBody></ProfileBody>
            <Footer></Footer>
        </>
    );
}

export default Profile
