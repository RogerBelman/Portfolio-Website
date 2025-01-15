import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound(){
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate(-1)
        }, 4000)
    }, [])

    const styles = {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
    }

    return <h1 style={styles}>Page Not Found<br/><br/>Returing</h1>
}

export default NotFound
