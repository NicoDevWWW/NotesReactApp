/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";

import './css/container.css';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {Button} from "@material-ui/core";
import { registerUser } from '../service/Api'

class AuthContainer extends Component{
	constructor() {
		super();
		this.state = {
			username: ' ',
			email: '',
			password: ''
		}

	}
	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}
	handleSubmit = (event) => {
		console.log("Register anvoyé", this.state)
		registerUser(this.state)
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
		event.preventDefault()
	}
	render() {
		const { username, email, password } = this.state
		return (
			<div>
				<div className="forms">
					<h1>REGISTER</h1>
					<form className='block_form' method='post' onSubmit={this.handleSubmit}>
						<FormControl className='input_form'>
							<InputLabel>Name :</InputLabel>
							<Input  name='username' onChange={this.handleChange} value={username}/>
						</FormControl >
						<FormControl className='input_form'>
							<InputLabel>Mail :</InputLabel>
							<Input type="email" name='email' onChange={this.handleChange} value={email}/>
						</FormControl>
						<FormControl className='input_form'>
							<InputLabel>Mot de passe :</InputLabel>
							<Input   name='password' type="password" onChange={this.handleChange} value={password}/>
						</FormControl>
						<Button className='action_btn' type="submit">Create an account</Button>
					</form>
				</div>
			</div>
		)
	}
}

export default AuthContainer
