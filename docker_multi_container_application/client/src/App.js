import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import OtherPage from './OtherPage';
import Fib from './Fib';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Routes>
              <Route path='/' element={<Fib />}></Route>
              <Route path='/otherpage' element={<OtherPage />}></Route>
            </Routes> 
          </div>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
