import './App.css';
import Hero from './components/hero/hero.js';
import Navbar from './components/navbar';
import Carousel from './components/carousel/carousel';
import Table from './components/table/table';
import Middle from './components/middle/middle';
import Calendar from './calender/cal'; // Note the corrected import path

import Main from './components/main/main.js';
import { useState } from 'react';

function App() {
  var [ch, statech] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className='button'>
      <button onClick={change} className='cal mt-7' >{ch ? "Hide the calender":"Click to view calender"}</button>
      </div>
      {ch ? <div className='calender'><Calendar /></div> : null}
      <Table />
      <Carousel />
      <Hero />
    </div>
  );

  function change() {
    statech(!ch);
  }
}

export default App;
