import '../../css/admin.css';
import React, { Component } from 'react';
import Table from '../generic/table';
import dataServicios from '../../data/servicios.json';
import Siderbar from '../generic/navbar';
import ServiForm from './serviform';

class Pageadmin extends Component {
  render() {
    return (
       <div class="d-flex flex-nowrap p-1 mt-2">
          <Siderbar />
          <div className='p-1'> 
             <ServiForm/>  
             <Table data ={dataServicios.dataervicios} th={['title','description','img','actions']}/>
          </div>
       </div>
     )
  }
}

export default Pageadmin;
