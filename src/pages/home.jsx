import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const navRegister = () => {
        navigate('register')
    }
    return (
        <>
            <button onClick={navRegister}>Register</button>
        </>
    )
}

export default Home