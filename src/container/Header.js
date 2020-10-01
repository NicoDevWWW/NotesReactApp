/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";
import logo from '../logo.svg';
class Header extends Component{
	render() {
		return (
			<div className="header">
				<h1>HELLO REACT</h1>
				<img alt="logo" className="logo" src={logo}/>
			</div>
		)
	}
}

export default Header
