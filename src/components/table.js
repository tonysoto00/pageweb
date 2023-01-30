
import React, { Component } from 'react';

class Table extends Component {
  render() {
    let actions = false;
    const th = this.props.th.map((data , index ) =>{
      actions =(data == 'actions')?true: false ;
      return(
          <th>{data}</th>
     );
    }); 

    const tr = this.props.data.map((dat , index ) =>{

const column = Object.entries(dat).map((value, key ) => { 
 return(
   <td>{value}</td>
 )
});

      return(
        <tr>
         {column}
      <td><div>
      <input className="btn btn-primary btn-sm" type="submit" value="Edit"/>
      <input className="btn btn-danger btn-sm" type="button" value="Delete"/>
      </div>
      </td>
        </tr>
     );
    }); 

    return (
<table className="table">
  <thead className="table-dark">
  <tr>{th}</tr>
  </thead>
  <tbody>
  {tr}
  </tbody>
</table>
     )
  }
}

export default Table;
