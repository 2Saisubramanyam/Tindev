import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cards from './Cards'
import Swipeb from './Swipebuttons'
import Header from './Header'
function App() {
  return (
    <div className="App">
      <h1>TINDEV!</h1>
      <Header/>
      <Router>
      {/*Header*/}
      <Switch>
      <Route path='/push'>
        <h1>
          subbu pag
        </h1>
      </Route>
      <Route path='/'>
        <Cards/>
      </Route>
      </Switch>    
      <Swipeb/>
      </Router>
    </div>
  );
}

export default App;
