import React from 'react';
import './App.css';
import './Style.css';
import Dashboard from './components/Dashboard';
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>  <div className="App">

      <div className="container">
        <Dashboard />
      </div>
    </div></Provider>
  );
}

export default App;
