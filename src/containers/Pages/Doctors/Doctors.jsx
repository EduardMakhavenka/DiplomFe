import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllDoctors } from '../../../actions/doctor';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';
import List from '../../../components/Doctor/List';


import './styles.css';

class Doctors extends Component {

  componentDidMount () {
    this.props.getAllDoctors();
  }

  render () {
    const { doctors } = this.props;
    return (
      <div>
        <Header/>
        <Container> 
          <h1>doctors</h1>
          {doctors && <List 
            items={doctors}
          />}
        </Container>
        <Footer/>
      </div>
    );
  }

}

const mapStateToProps = ({ doctor }) => {
  return {
    doctors: doctor.doctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDoctors: () => dispatch(getAllDoctors()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
