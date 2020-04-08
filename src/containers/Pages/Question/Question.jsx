import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/Common/Container';
import CreateForm from '../../../components/Question/CreateForm';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';

class Question extends Component {

  render () {
    return (
      <div>
        <Header/>
        <Container>
          <h1>Question</h1>
          <CreateForm/>
        </Container>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({  }) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);