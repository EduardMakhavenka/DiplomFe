import React, { Component } from 'react';
import { convertMillisecondsToReadableDate } from '../../../utils/common';

import './styles.css';

export default class Item extends Component {

  constructor (props){
    super(props);
    this.state = {
      showTextarea: false,
      showAnswers: false,
      textareaError: false,
      answerContent: '',
    };
  }

  showTextareaHandler = () => {
    if (this.state.showTextarea){  
      this.setState({ showTextarea: false});
    } else {
      this.setState({ showTextarea: true});
    }
  }

  handelTextarea = (event) => {
    this.setState({ 
      answerContent: event.target.value,
      textareaError: false
    });
  }

  showAnswersHandler = () => {
    if (this.state.showAnswers){  
      this.setState({ showAnswers: false});
    } else {
      this.setState({ showAnswers: true});
    }
  }

  handelTextareaContent = () => {
    if (this.isTextAreaCorrect(this.state.answerContent)){
      console.log('good');
      console.log(this.props.item._id);
      this.props.createAnswer(this.state.answerContent, 'Eduard', 'admin', this.props.item._id);
      this.setState({ answerContent: '',
        showTextarea: false });
    } else {
      console.log('error');
    }
  }

  isTextAreaCorrect = (content) => {
    if (content === '') {
      this.setState({ textareaError: true});
      return false;
    }
    return true;
  }
  

  render () {
    let list = this.props.answer.filter( answer => answer.questionId == this.props.item._id);
    return(
      <div class="m-3 card">
        <div class="card-header">
          <div class="row">
            <div class="col-sm-1">
              {this.props.idx}
            </div>
            <div class="col-3">
              {this.props.item.name}       
            </div>
            <div class="col-5"></div>    
            <div class="col-1">{this.props.item.like}</div>
            <div class="col-2">{convertMillisecondsToReadableDate(this.props.item.createdAt)}</div>
          </div>  
        </div> 
        <div class="card-body">
          <p class="card-text">{this.props.item.text}</p>
          {this.state.showTextarea
            ? <button type="button" onClick={this.showTextareaHandler} class="btn btn-warning">Скрыть</button> 
            : <button type="button" onClick={this.showTextareaHandler} class="btn btn-success">Ответить</button>
          }
          {this.state.showAnswers
            ? <button type="button" onClick={this.showAnswersHandler} class="btn ml-3 btn-warning">Скрыть ответы</button>
            : <button type="button" onClick={this.showAnswersHandler} class="btn ml-3 btn-success">Посмотреть ответы</button>
          }
        </div>
        {this.state.showTextarea && <div class="m-3">
          {this.state.textareaError === true ? <p className="errorMessage">Введите вопрос в поля ввода!</p> : <p></p> }
          <textarea class="form-control"  rows="4" onChange={event => this.handelTextarea(event)} >
          </textarea>
          <button onClick={this.handelTextareaContent} class="btn mt-3 btn-success">Отправить</button>
        </div>}
        {this.state.showAnswers && list.map((answer, idx) =>  
          <div class="m-1 card">
            <div class="card-header">
              <div class="row">
                <div class="col-3">
                  {answer.author}     
                </div>
                <div class="col-5"></div>    
                <div class="col-1">{answer.like}</div>
                <div class="col-3">{convertMillisecondsToReadableDate(answer.createdAt)}</div>
              </div>  
            </div>
            <div class="card-body">
              <p class="card-text">{answer.text}</p>
            </div>
          </div>) 
        }
      </div>   
    );
  }
}