import ProfileBody from '../Components/Profile/ProfileBody.jsx'
import SEO from '../Components/SEO.jsx'
 
function Profile(){

    return(
        <>
            <SEO routeKey="profile"></SEO>
            <ProfileBody></ProfileBody>
        </>
    );
}

export default Profile
