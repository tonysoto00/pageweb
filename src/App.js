import './css/carousel.css';
import Navigation from './components/generic/navigation';
import Footer from './components/generic/footer';
import Pageindex from './components/indexPage/pageindex';
import Pageadmin from './components/administracion/adminpage';

import dataServicios from './data/servicios.json';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import { Component } from 'react';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
              <Navigation />
          </header>
          <main>
                <Routes>
                  <Route path='/' element={<Pageindex />} />
                  <Route path='/home' element={<Pageindex />} />
                  <Route path='/admin' element={<Pageadmin />} />
                  <Route path='*' element={<div><h1> 404 -Not Found </h1> </div>} />
                </Routes>
              <Footer/>
          </main>
       </div>
    </BrowserRouter>
      );
    }
    
    export default App;
