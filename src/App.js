import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header" style={{height:'250px'}}>
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Welcome to react-redux learning platform.
          </p>
        </header>
          <Postform/>
          <Posts/>
      </div>
    </Provider>
  );
}

export default App;
