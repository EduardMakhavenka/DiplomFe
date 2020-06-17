import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/Common/Container';
import CreateForm from '../../../components/Question/CreateForm';
import List from '../../../components/Question/List';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';

import { createQuestion, getAllQuestions } from '../../../actions/question';
import { createAnswer, getAllAnswers } from '../../../actions/answer';

class Question extends Component {

  componentDidMount () {
    this.props.getAllQuestions();
    this.props.getAllAnswers();
  }

  render () {
    const { questions, answers } = this.props;
    return (
      <div>
        <Header/>
        <Container>
          <CreateForm
            create={this.props.createQuestion}
          />
          {questions && <List 
            items={questions}
            createAnswer={this.props.createAnswer}
            answers={answers}
          />}
        </Container>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({ question, answer }) => {
  return {
    questions: question.questions,
    answers: answer.answers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAnswers: () => dispatch(getAllAnswers()),
    getAllQuestions: () => dispatch(getAllQuestions()),
    createQuestion: (text, name, email, to) =>
      dispatch(createQuestion(text, name, email, to)),
    createAnswer: (text, author, role, questionId) => 
      dispatch(createAnswer(text, author, role, questionId)),  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);