/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";

import Draggable from "react-draggable";

class Note extends Component{
	constructor(props) {
		super(props);
	}
	getRandomColor(){
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		console.log(color);
		return color;
	}
	render() {
		const { note } = this.props
		return (
			note
			? (
					<Draggable>
						<div className="drag" style={{backgroundColor:this.getRandomColor()}}>
							<h2 className="card">
								{note.title}
							</h2>
							<div className="desc">
								{note.description}
							</div>
						</div>
					</ Draggable>
				)
			: 'No DATA'
		)
	}
}

export default Note
