import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
          <div className='placeholder'></div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
