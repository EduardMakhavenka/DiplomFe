import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';

export default class List extends Component {

  constructor (props){
    super(props);
    this.state = {

    };}


  render () {
    return (
      <div className="conponent-style">
        {this.props.items && this.props.items.map((disease, idx) =>                
          <div class="mt-3 card">
            <div class="card-header">
            </div>  
            <div class="card-body">
            </div>
          </div>)}
      </div>
    );
  }
}


