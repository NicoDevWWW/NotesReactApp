/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
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
import { login } from '../service/Api'

class LoginContainer extends Component{
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}

	}
	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		login(this.state)
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}
	render() {
		const { email, password } = this.state
		return (
			<div>
				<div className="forms">
					<h1>LOGIN</h1>
					<form className='block_form' method='post' onSubmit={this.handleSubmit}>
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

export default LoginContainer
