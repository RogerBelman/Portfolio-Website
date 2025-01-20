import RogerBelman from '/src/assets/Me.jpg'
function Headshot(){

    const imgStyles = {
        width: "200px",
        heighy: "200px",
        borderRadius: "50%",
    }

    return(
        <img src={RogerBelman} alt="Roger Belman" style={imgStyles}></img>
    );
}

export default Headshot
