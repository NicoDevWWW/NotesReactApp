/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";
import ReactModal from 'react-modal';
import  {Button}  from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createNote, updateNote } from '../service/Api'
import {AiFillHeart, AiOutlineClose} from "react-icons/ai";
class EditModal extends Component{
	constructor(props) {
		super()
		this.state = {
			id: props.note ? props.note.id : null,
			title: props.note ? props.note.title: '',
			description: props.note ? props.note.description: '',
			isOpen: undefined
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.updateMode && prevProps.isOpen !== prevState.isOpen) {
			this.setState({isOpen: prevProps.isOpen})
		}
	}
	handleOpenModal = () => {
		this.setState({isOpen: true})
	}
	handleCloseModal = () => {
		this.setState({isOpen: false})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		if (this.props.updateMode) {
			updateNote(this.state)
				.then(() => console.log('La note a été modifiée'))
		} else {
			createNote(this.state)
				.then(() => this.setState({isOpen: false}), console.log('La note a été ajoutée'))
		}
	}
	render() {
		const { title, description, isOpen } = this.state
		const { updateMode } = this.props
		return (
			<div>
				{!updateMode ? <Button className='action_btn' onClick={this.handleOpenModal}>CREATE NOTE</Button> : null}
				<ReactModal
				isOpen={isOpen}
				>
					<div className='modal_container'>
						<h1>EDIT NOTE</h1>

						<form className='block_form' method='post' onSubmit={this.handleSubmit}>
							<FormControl className='input_form'>
								<InputLabel>Titre :</InputLabel>
								<Input  name='title' onChange={this.handleChange} value={title}/>
							</FormControl >
							<FormControl className='input_form'>
								<InputLabel>Description :</InputLabel>
								<Input   onChange={this.handleChange} name='description' value={description}/>
							</FormControl>
							<Button className='action_btn' type="submit">{updateMode ? 'MODIFIER' : 'AJOUTER'}</Button>
						</form>
						<AiOutlineClose size={25} color='black'className='closemodal' onClick={this.handleCloseModal}/>
					</div>
				</ReactModal>
			</div>
		)
	}
}

export default EditModal
