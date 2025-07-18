import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = ({ persons }) => {
    const navigate = useNavigate()
    const navRegister = () => {
        navigate('register')
    }

    return (
        <>
            <h1>Welcome to Registeration Part</h1>
            <div className="title">Registered Person:</div>
            {!persons.length ? <div>No one registered yet!</div> : (
                <ol>
                    {persons.map((item) => (
                        <li key={item.username}>{item.firstName + " " + item.lastName + " - " + item.email}</li>
                    ))}
                </ol>
            )}
            <button className="reg-but" onClick={navRegister}>Register Now!</button>
        </>
    )
}

export default Home