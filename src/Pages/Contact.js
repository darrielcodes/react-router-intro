import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import NavBar from '../Components/NavBar'


const ContactPage = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <NavBar />
            <h1>Contact Page</h1>

            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => {
                setFirstName(e.target.value)
            }}></input>

             <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => {
                setLastName(e.target.value)
            }}></input>

             <label>Email:</label>
            <input type="text" value={email} onChange={(e) => {
                setEmail(e.target.value)
            }}></input>

            <button onClick={() =>{
                navigate("/")
            }}>Submit</button>
        </div>
    )
};

export default ContactPage;