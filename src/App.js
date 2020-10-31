import React from 'react';
import './App.css';
import Footer from "./my_comps/Footer";
import NavigationBar from "./my_comps/NavigationBar";
import Welcome from "./my_comps/Welcome";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Welcome/>
      <Footer/>
    </div>
  );
}

export default App;
