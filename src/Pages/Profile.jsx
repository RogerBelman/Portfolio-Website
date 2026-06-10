import Header from '../Components/Header.jsx'
import ProfileBody from '../Components/Profile/ProfileBody.jsx'
import Footer from '../Components/Footer.jsx'
import SEO from '../Components/SEO.jsx'
 
function Profile(){

    return(
        <>
            <SEO
                title="Roger Belman"
                description="Roger Belman's portfolio homepage, featuring his software engineering profile, resume, and contact links."
                path="/"
            />
            <Header></Header>
            <ProfileBody></ProfileBody>
            <Footer></Footer>
        </>
    );
}

export default Profile
