import pic from './assets/RB.jpg'

function Logo(){

    const styles = {
        width: "100px",
        height: "100px",
    }

    return(
        <div className="Logo">
            <img src={pic} alt="RB" style={styles}></img>
        </div>
    );
}

export default Logo