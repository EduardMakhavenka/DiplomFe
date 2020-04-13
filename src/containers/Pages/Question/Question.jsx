import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/Common/Container';
import CreateForm from '../../../components/Question/CreateForm';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';

import { createQuestion } from '../../../actions/question';

class Question extends Component {

  render () {
    return (
      <div>
        <Header/>
        <Container>
          <CreateForm
            create={this.props.createQuestion}
          />
        </Container>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({ }) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createQuestion: (text, name, email) =>
      dispatch(createQuestion(text, name, email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);