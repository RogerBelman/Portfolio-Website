import RogerBelman from '../assets/Me.jpg'

function Headshot(){

    const imgStyles = {
        width: "200px",
        heighy: "200px",
        borderRadius: "50%",
    }

    const styles = {
        display: "flex",
        justifyContent: "center",
    }

    return(
        <div style={styles}>
            <img src={RogerBelman} alt="Roger Belman" style={imgStyles}></img>
        </div>
    );
}

export default Headshot
