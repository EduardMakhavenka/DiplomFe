import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';

class Directory extends Component {

  render () {
    return (
      <div>
        <Header/>
        <Container>
          <h1>Directory</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Directory);