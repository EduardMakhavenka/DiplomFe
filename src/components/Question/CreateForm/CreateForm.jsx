import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

import history from '../../../history';

import './styles.css';

export default class CreateForm extends Component {

  constructor (props){
    super(props);
    this.state = {
      name: '',
      email: '',
      questionContent: '',
      show: false,
      nameError: false,
      emailError: false,
      textareaError: false,
    };
  }

  showModel = () => {
    this.setState({ show: true });
  }

  handleClose = () => {
    this.setState({ show: false });
    history.push('/question');
  }

  handelTextarea = (event) => {
    this.setState({ 
      questionContent: event.target.value,
      textareaError: false
    });
  }

  handelName = (event) => {
    this.setState({ 
      name: event.target.value,
      nameError: false 
    });
  }

  handelEmail = (event) => {
    this.setState({ 
      email: event.target.value,
      emailError: false  
    });
  }

  handelQuestion = () => {
    this.setState({ show: false });
    let content = this.state.questionContent;
    let name = this.state.name.trim().slice(0, 30);
    let email = this.state.email;
    if(this.isEmailCorrect(name, email, content)){
      //this.props.create( content, name, email);
      console.log('error');
    }
    
  }
  
  isEmailCorrect = (name, email, content) => {
    let result = true;
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(email.trim())) {
      this.state.emailError = true;
      result = false; 
    } 

    if (name.length < 5) {
      this.state.nameError = true;
      result = false;
    }

    if (content === '') {
      this.state.textareaError = true;
      result = false;
    }
    return result;
  }

  render () {
    return (
      <div>
        <div className="question-createform">
          <h1>Задать вопрос</h1>
          <label>ФИО</label>
          {this.state.nameError === true ? <p className="errorMessage">Имя должно содержать не менее 3 символов и не более 35!</p> : <p></p> }
          <input type="text" class="form-control" onChange={this.handelName} placeholder="Иван Колобков"/>
          <label >Email</label>
          {this.state.emailError === true ? <p className="errorMessage">Неправильно введена электроная почта!</p> : <p></p> }
          <input type="email" class="form-control" onChange={this.handelEmail} placeholder="name@example.com"/>
          <label for="exampleFormControlTextarea1">Поля ввода для вопроса</label>
          {this.state.textareaError === true ? <p className="errorMessage">Введите вопрос в поля ввода!</p> : <p></p> }
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" onChange={event => this.handelTextarea(event)} >
          </textarea>
          <button onClick={this.showModel} class="btn btn-success">Отправить</button>
        </div>

        <Modal className="modal-create" show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Внимание</Modal.Title>
          </Modal.Header>
          <Modal.Body>Подтвердите создание вопроса.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handelQuestion}>
              Подтверждаю
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }

}