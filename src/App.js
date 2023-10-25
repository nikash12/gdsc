import './App.css';
import Hero from './components/hero/hero.js';
import Navbar from './components/navbar';
import Carousel from './components/carousel/carousel';
import Table from './components/table/table';



import Main from './components/main/main.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      
      <Table />    
      <Carousel />
      <Hero />
    </div>
  );
}

export default App;
