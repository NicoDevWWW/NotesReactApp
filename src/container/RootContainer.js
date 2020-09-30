/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";
import FirstButton from "../component/FirstButton";
import ListContainer from "./ListContainer";
import Header from "./Header";

class RootContainer extends Component{
	render() {
		return (
			<div>
				<Header className="App-header"/>
				<FirstButton/>
				<ListContainer/>
			</div>
		)
	}
}

export default RootContainer
