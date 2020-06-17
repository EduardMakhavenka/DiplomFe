import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import myimg from '../../../static/img/unnamed.png';

import './styles.css';

export default class List extends Component {

  constructor (props){
    super(props);
    this.state = {
      show: false,
      showTextarea: false,
      questionContent: '',
      textareaError: false,
      nameError: false,
      emailError: false,
      name: '',
      email: '',
      to: '',
    };}


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

  showModel = (id) => {
    this.setState({ show: true});
    this.setState({ to: id});
  }

  showTextarea = () => {
    if (this.state.showTextarea === true) {
      this.setState({ showTextarea: false });
    } else {
      this.setState({ showTextarea: true });
    }
  }

  handelTextarea = (event) => {
    this.setState({ 
      questionContent: event.target.value,
      textareaError: false
    });
  }

  handelQuestion = () => {
    this.setState({ show: false });
    let content = this.state.questionContent;
    let name = this.state.name.trim().slice(0, 30);
    let email = this.state.email;
    let to = this.state.to;
    if(this.isEmailCorrect(name, email, content)){
      this.props.create( content, name, email, to);
    }
  }

  isEmailCorrect = (name, email, content) => {
    let result = true;
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(email.trim())) {
      this.setState({ emailError: true});
      result = false; 
    } 

    if (name.length < 5) {
      this.setState({ nameError: true});
      result = false;
    }

    if (content === '') {
      this.setState({ textareaError: true});
      result = false;
    }
    return result;
  }

  render () {
    return (
      <div className="conponent-style">
        {this.props.items && this.props.items.map((doctor, idx) =>                
          <div class="mt-3 card">
            <div class="card-header">
              {doctor.name} {doctor.surname}
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <img src={myimg} alt="photo"/>
                </div>
                <div class="col-3"></div>
                <div class="col-5">
                  <p>Стаж: {doctor.experience}</p>
                  <p>Специальность: {doctor.specialty}</p>
                  <p>Образование: {doctor.education}</p>
                  {this.state.showTextarea
                    ? <button onClick={this.showTextarea} class="btn btn-warning">Скрыть</button>
                    : <button onClick={this.showTextarea} class="btn btn-success">Отправить вопрос</button>
                  }
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  {this.state.textareaError === true ? <p className="errorMessage">Введите вопрос в поля ввода!</p> : <p></p> }
                  {this.state.showTextarea && <div class="mt-2">
                    <label>ФИО</label>
                    {this.state.nameError === true ? <p className="errorMessage">Имя должно содержать не менее 3 символов и не более 35!</p> : <p></p> }
                    <input type="text" class="form-control" onChange={this.handelName} placeholder="Иван Колобков"/>
                    <label >Email</label>
                    {this.state.emailError === true ? <p className="errorMessage">Неправильно введена электроная почта!</p> : <p></p> }
                    <input type="email" class="form-control" onChange={this.handelEmail} placeholder="name@example.com"/>
                    <label class="mt-3" >Поля ввода</label>
                    <textarea class="form-control" rows="4" onChange={event => this.handelTextarea(event)} >
                    </textarea>
                    <button onClick={() => this.showModel(doctor._id)} class="mt-3 btn btn-success">Отправить</button>
                  </div>}
                </div>
              </div>
            </div>
          </div>)}
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


