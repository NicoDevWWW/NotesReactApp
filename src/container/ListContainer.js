/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";
import Note from "../component/Note";

import '../container/css/container.css';

class ListContainer extends Component{
	constructor() {
		super();
		this.state = {
			data: []
		}
		// ANcienne méthode pour binder
		// this.handleButtonClick = this.handleButtonClick.bind(this)

	}
	componentDidMount() {
		fetch('https://api.myidea.fr/v1/notes')
			.then((response) => response.json())
			.then((result) => this.setState({data : result}))
			.catch((error) => console.error(error))
	}
	render() {
		const {data} = this.state
		return (
			<div>
				<div className="listNotes">
					{
						data
						?(
							data.map((note, index) => {
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
