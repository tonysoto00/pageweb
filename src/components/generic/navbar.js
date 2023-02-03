
import React, { Component } from 'react';

class Siderbar extends Component {
  render() {
    return (
      <div className='d-flex flex-column flex-shrink-0 w-25 p-3 text-bg-dark "'>
        <div>title</div>
      <hr />
        <ul class="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
      <hr />
      </div>
     )
  }
}

export default Siderbar;
