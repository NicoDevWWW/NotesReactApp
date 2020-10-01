/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";
import ListContainer from "./ListContainer";
import Header from "./Header";


class RootContainer extends Component{
	handlechangeBack = () => {
		var back = document.getElementById('colorPickerBackground').value;
		document.getElementById('root').style.background = back ;
	}
	render() {

		return (
			<div>
				<select id="colorPickerBackground" onChange={this.handlechangeBack}>
					<option value="transparent">None</option>
					<option value="yellow">Yellow</option>
					<option value="olive">Olive</option>
					<option value="lightblue">Light Blue</option>
					<option value="limegreen">Lime Green</option>
					<option value="cyan">Cyan</option>
					<option value="violet">Violet</option>
					<option value="red">Red</option>
				</select>
				<Header className="App-header"/>

				<ListContainer/>

			</div>
		)
	}
}

export default RootContainer
