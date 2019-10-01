import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import { Provider } from "./context";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";

import './App.css';

function App() {
  return (
      <Provider>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/details/:itemId" component={Details} />
          </div>
        </Router>
      </Provider>
  );
}

export default App;
