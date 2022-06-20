import axios from "axios"
import React, { useState } from "react"
import "./Form.css"

function Form() {
	const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
	const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
	// const [ model, setModel ] = useState("")	
	const handleSend = async (e) => {
		setSent(true)
		try {
			await axios.post("http://localhost:4000/", {
				text, name, email
			})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="App">
			{!sent ? (
			<form className="contact-form" onSubmit={handleSend}>
				<h3>GET QUOTE</h3>
				<input type="text" id="name" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
				<input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
				<textarea id="message" placeholder="Message" cols="30" rows="10" type="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
				<button type="submit" class="submit" value="Send Message">Send Message</button>
			</form>
			) : (
				<h1>Email Sent</h1>
			)}
		</div>
	)
}

export default Form
