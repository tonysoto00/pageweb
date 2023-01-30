import './css/carousel.css';
import Navigation from './components/navigation';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Pageindex from './components/indexPage/pageindex';
import Table from './components/table';

import dataServicios from './data/servicios.json';

//import { Component } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navigation />
      </header>
      <main>
      <Carousel />
      <div className="container marketing">
      <Pageindex />

      <Table data ={dataServicios.dataervicios} th={['title','description','img','actions']}/>     
      <Footer/>
      </div>
      </main>
    </div>
      );
    }
    
    export default App;
