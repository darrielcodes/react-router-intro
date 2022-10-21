import "./App.css"
import NavBar from "./Components/NavBar"
import {Outlet} from "react-router-dom"
import {useState} from "react"

const App = () => {
	const [signupList, setSignUp] = useState([])

	const handleAddSignUp = (firstName, lastName, email) => {
		const newSignUp = {
			firstName,
			lastName,
			email
		};
			const signupListCopy = [...signupList];
			signupListCopy.push(newSignUp);
			setSignUp(signupListCopy);
		};

	return (
		<div className="App-header">
​		<NavBar />
		<Outlet context={[signupList, handleAddSignUp]}/>
		</div>
	);
}

export default App