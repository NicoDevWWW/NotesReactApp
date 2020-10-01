/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";
import Note from "../component/Note";

import '../container/css/container.css';
import { getNotes } from '../service/Api'
import EditModal from "./EditModal";

class ListContainer extends Component{
	constructor() {
		super();
		this.state = {
			notes: []
		}
		// ANcienne méthode pour binder
		// this.handleButtonClick = this.handleButtonClick.bind(this)

	}
	componentDidMount() {
		getNotes()
			.then(data => this.setState({notes: data}))
	}
	render() {
		const {notes} = this.state
		return (
			<div>
				<EditModal />
				<div className="listNotes">
					{
						notes
						?(
								notes.map((note, index) => {
								return (
									<Note key={note.id} note={note}/>

								)
							})
						)
						: 'No DATA'

					}
				</div>

			</div>
		)
	}
}

export default ListContainer
