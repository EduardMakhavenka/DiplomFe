import React, { Component } from 'react';

import './styles.css';
import Item from '../Item';

export default class List extends Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        {this.props.items.map((question, idx) =>       
          <Item
            item={question}
            answer={this.props.answers}
            idx={idx+1}
            createAnswer={this.props.createAnswer}
          />
        )}
      </div>
    );
  }
}


