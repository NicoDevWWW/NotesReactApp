import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import CreateNote from "./container/CreateNote";
import RootContainer from "./container/RootContainer";

function App() {
  return (
    <div className="App">

      {/*<BrowserRouter>*/}
		{/*  <ul>*/}
		{/*	  <li><Link to="/">Home</Link></li>*/}
		{/*	  <li><Link to="./container/CreateNote">Create note</Link></li>*/}
		{/*  </ul>*/}
	  {/*</BrowserRouter>*/}

		{/*<Route path="/" component={App}/>*/}
		{/*<Route path="/airports" component={CreateNote}/>*/}

      <RootContainer/>
    </div>
  );
}

export default App;
