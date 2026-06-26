import RogerBelman from '/src/assets/Me.jpg'
import './Headshot.css'

function Headshot(){

    return(
        <div className="headshot-frame">
            <img src={RogerBelman} className="headshot" alt="Roger Belman"></img>
        </div>
    );
}

export default Headshot
