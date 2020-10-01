/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";

import './css/container.css';

class Contact extends Component{
	constructor() {
		super();
		this.state = {
			title: ' ',
			description: ''
		}

	}
	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}
	handleSubmit = (event) => {
		console.log("Le formulaire à été envoyé", this.state)
		event.preventDefault()
	}
	render() {
		return (
			<div>
				<div className="forms">
					<h1>Contact us</h1>
					<form onSubmit={this.handleSubmit}>
						<label>Name: </label>
						<input onChange={this.handleChange} name='title' value={this.state.title}/>
						<label>Description: </label>
						<textarea onChange={this.handleChange} name='description' value={this.state.description}/>
						<button type='submit'>ENVOYER</button></form>
				</div>
			</div>
		)
	}
}

export default Contact
