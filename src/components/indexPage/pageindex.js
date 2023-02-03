
import React, { Component } from 'react';
import Servi from '../generic/servi';
import Contacts from '../generic/contacts';
import Carousel from '../generic/carousel';

class Pageindex extends Component {
  render() {
    return ( 
      <div>
       <Carousel />
          <div className="container marketing">     
          <Servi />
          <Contacts />
          </div>
      </div>
     )
  }
}

export default Pageindex;
