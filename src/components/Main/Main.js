import React from 'react';
import './Main.css'
import About from "../About/About";
import Videos from "../Videos/Videos";

function Main(props) {
  return (
    <main className="main">
      <About />
      <Videos />
    </main>
  );
}

export default Main;
