import { useNavigate, useOutletContext } from 'react-router-dom'
import { useState } from "react";


const ContactPage = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [signupList, handleAddSignup] = useOutletContext();

    return (
        <div>
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
                handleAddSignup(firstName,lastName,email)
            }}>Submit</button>
        </div>
    )
};

export default ContactPage;