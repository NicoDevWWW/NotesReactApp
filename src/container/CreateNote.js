/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";

import '../container/css/container.css';

class CreateNote extends Component{
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		data: []
	// 	}
	// 	// ANcienne méthode pour binder
	// 	// this.handleButtonClick = this.handleButtonClick.bind(this)
	//
	// }
	// componentDidMount() {
	// 	fetch('https://api.myidea.fr/v1/notes')
	// 		.then((response) => response.json())
	// 		.then((result) => this.setState({data : result}))
	// 		.catch((error) => console.error(error))
	// }
	render() {
		return (
			<div>
				<div className="forms">
					<h1>Creat a Note</h1>
					<form>
						<label>Title: </label>
						<input onChange={this.handleChange} name='nom' value={this.state.nom}/>
						<label>Description: </label>
						<textarea onChange={this.handleChange} name='prenom' value={this.state.prenom}/>
						<button type='submit'>ENVOYER</button></form>
				</div>
			</div>
		)
	}
}

export default CreateNote
