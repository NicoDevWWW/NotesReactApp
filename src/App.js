import React from 'react';

import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import RootContainer from "./container/RootContainer";
import Contact from "./container/Contact";
import AboutContainer from "./container/AboutContainer";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AuthContainer from "./container/AuthContainer";
import LoginContainer from "./container/LoginContainer";


function App() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		event.preventDefault()
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
  return (
    <div className="App">

			<Router>
				<div className="menu">
					<Button className='action_btn' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
						Open Menu
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
						<MenuItem onClick={handleClose}><Link to="/about">About</Link></MenuItem>
						<MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
						<MenuItem onClick={handleClose}><Link to="/register">Register</Link></MenuItem>
						<MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
					</Menu>
				</div>
					{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/register">
							<AuthContainer />
						</Route>
						<Route path="/login">
							<LoginContainer />
						</Route>
						<Route path="/about">
							<AboutContainer />
						</Route>
						<Route path="/">
							<RootContainer />
						</Route>
					</Switch>
			</Router>
    </div>
  );
}

export default App;
