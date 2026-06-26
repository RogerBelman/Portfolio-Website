import ProfileBody from '../components/profile/ProfileBody.jsx'
import SEO from '../components/SEO.jsx'
 
function Profile(){

    return(
        <>
            <SEO routeKey="profile"></SEO>
            <ProfileBody></ProfileBody>
        </>
    );
}

export default Profile
