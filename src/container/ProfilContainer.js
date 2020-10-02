/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import React, {Component} from "react";
import { getProfil } from "../service/Api"
class ProfilContainer extends Component{
	constructor() {
		super();
		this.state = {
			profil: {}
		}
	}
	componentDidMount() {
		getProfil()
			.then(profil => {
				this.setState({profil: profil})
			})
			.catch()
	}

	render() {
		return (
			<div>
				<h1>ABOUT YOUR PROFILE</h1>
				<div className="block_profil">
					<div className="avatar_profil"></div>
				</div>

				<div>{JSON.stringify(this.state.profil.name)}</div>
				<div>{JSON.stringify(this.state.profil.email)}</div>
				<div>{JSON.stringify(this.state.profil.role)}</div>
			</div>
		)
	}
}

export default ProfilContainer
