function Resume(){

    const styles = {
        display: "flex",
        width: "350px",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "25px",
        color: "hsl(208, 100%, 25%)",
        fontWeight: "bold",
    }

    const buttonPlacement = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "50px",
    }

    const buttonStyles = {
        backgroundColor: "hsl(0, 0%, 0%)",
        fontFamily: "'Orbitron'",
        color: "hsl(0, 0%, 100%)",
        border: "2px solid hsl(0, 0%, 100%)",
        fontSize: "18px",
        width: "150px",
        cursor: "pointer",
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
            <p className="Resume">Checkout My Resume</p>
            <div style={buttonPlacement}>
                <button style={buttonStyles} onClick={handleView}>View</button>
                <button style={buttonStyles} onClick={handleDownload}>Download</button>
            </div>
        </div>
    );
}

export default Resume
