import React, { Component } from 'react';

import './styles.css';

export default class CreateForm extends Component {

  constructor (props){
    super(props);

    this.state = {
      questionContent: '',
    };
  }

  handelTextarea = (event) => {
    console.log(event.target.value); 
    this.setState({questionContent: event.target.value});
  }

  handelQuestion = () => {
    console.log("1");
  }   

  render () {
    return (
      <div>
        <h1>Задать вопрос</h1>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Поля для вопроса</span>
          </div>
          <textarea class="form-control" aria-label="With textarea" onChange={event => this.handelTextarea(event)}></textarea>
          <button onClick={this.handelQuestion}>Отправить</button>
        </div>
      </div>
    );
  }

}