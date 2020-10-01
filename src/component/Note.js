/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";

import Draggable from "react-draggable";
// eslint-disable-next-line no-unused-vars
import { DeleteNote } from "../service/Api"
import EditModal from "../container/EditModal";
import { AiFillEdit } from "react-icons/ai";
import { AiFillRest } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { FavoriteNote } from '../service/Api'


class Note extends Component{
	constructor() {
		super();
		this.state = {
			openModal:false,

		}
	}
	getRandomColor(){
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	handledeleteNote = (notId) => {
		DeleteNote(notId)
	}
	handlemodalNote = (note) => {
		console.log(note)
		this.setState({openModal: true})
	}
	handlefavorisNote = (note) => {
		if (note.isFavorite === false){
			console.log(note.isFavorite)
			note.isFavorite = true
			FavoriteNote(note)
		}else{
			note.isFavorite = false
			FavoriteNote(note)
		}
	}

	render() {
		const { note } = this.props
		const favoriteMod = note.isFavorite

		return (
			note
			? (
					<Draggable>
						<div className="drag" style={{backgroundColor:this.getRandomColor()}}>
							<div>
								{favoriteMod ?
									<AiFillHeart className="YES" size={25}color='red' onClick={() => this.handlefavorisNote(note)}/>
									:
									<AiFillHeart className="NO" size={25} color='aliceblue' onClick={() => this.handlefavorisNote(note)}/>
								}
							</div>
							<h2 className="card">
								{note.title}
							</h2>
							<div className="desc">
								{note.description}
							</div>

								<IconContext.Provider value={{ className: 'react-icons' }}>
									<div className="action_row">
										<AiFillRest size={25} onClick={() => this.handledeleteNote(note.id)}/>
										<AiFillEdit size={25} onClick={() => this.handlemodalNote(note)}/>
									</div>
								</IconContext.Provider>

							<EditModal updateMode isOpen={this.state.openModal} note={note}/>
						</div>

					</ Draggable>

				)
			: 'No DATA'
		)
	}
}

export default Note
