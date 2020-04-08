import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';

class MainPage extends Component {

  render () {
    return (
      <div>
          <Header/>
            <Container>
              <h1>new app</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);