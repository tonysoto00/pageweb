import React, { Component } from 'react';

import dataServicios from '../../data/servicios.json';

class Servi extends Component {
  constructor (){
    super();
    this.state ={
      dataServicios: dataServicios,
    };
  }

  render() {
    
    const ser = this.state.dataServicios.dataervicios.map((data , index ) =>{
      let text =(index%2 == 0)? "col-md-7 order-md-2" : "col-md-7 " ;
      let textI =(index%2 == 0)? "col-md-5 order-md-mb-1 " : "col-md-5 mb-1" ;

      return(

      <div className="row featurette ">
      <div className={text} >
        <h2 className="featurette-heading fw-normal lh-1">{data.title}</h2>
        <p className="lead">{data.description}</p>
      </div>
      <div className={textI}>
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
      </div>    
    </div>
     );
    });   

    return (    
      <div>
      <h2 className="col-12 text-center">Services</h2>
      {ser} </div>
     )
  }
}

export default Servi;
