import Button from '../Button'
import './Resume.css'

function Resume(){

    const handleView = () => {
        window.open("/Resume_Roger_Belman.pdf", "_blank");
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Resume_Roger_Belman.docx";
        link.download = "Resume_Roger_Belman.docx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div className="resume-placement">
            <h3>Checkout My Resume</h3>
            <div className="button-placement">
                <Button handle={handleView} text="View"></Button>
                <Button handle={handleDownload} text="Download"></Button>
            </div>
        </div>
    );
}

export default Resume
