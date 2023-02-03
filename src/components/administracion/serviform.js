import React, { Component } from 'react';

class ServiForm extends Component {

 sumar (numOne , numbertwo) {
  return numOne+numbertwo;
}
  render() {
    let count=0;
    return (    
      <div ><h2>Agregar servicio </h2>
      <p>You clicked {count} times</p>
      <button onClick={() =>this.sumar(count+1)}>
        Click me
      </button>
      </div>
     )
  }
}

export default ServiForm;
