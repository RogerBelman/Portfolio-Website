import Button from '../Button'

function Resume(){

    const styles = {
        display: "flex",
        width: "350px",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
    }

    const buttonPlacement = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "50px",
    }

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
        <div style={styles}>
            <h3>Checkout My Resume</h3>
            <div style={buttonPlacement}>
                <Button handle={handleView} text="View"></Button>
                <Button handle={handleDownload} text="Download"></Button>
            </div>
        </div>
    );
}

export default Resume
