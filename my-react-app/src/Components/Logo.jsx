import logo from '../assets/RB.jpg'

function Logo(){

    const styles = {
        width: "150px",
        height: "150px",
        marginRight: "20px",
    }

    return(
        <div>
            <img src={logo} alt="RB" style={styles}></img>
        </div>
    );
}

export default Logo
