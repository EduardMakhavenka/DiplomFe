import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';

import { getDiseaseById } from '../../../actions/disease';

class Disease extends Component {

  constructor (props) {
    super(props);

    this.state = {
      disease: {},
    };
  }
   
  componentDidMount () {
    const url = window.location.pathname.split('/');
    const id = url[2];
    this.props.getDiseaseById(id);
  }

  render () {
    const { schema } = this.props;
    return (
      <div className="main-container">
        <Header/>
        <Container>
          <p><h5>Название:</h5> {this.props.disease.name}</p> 
          <p><h5>Описание:</h5> {this.props.disease.description}</p>
          <p><h5>Определение:</h5> {this.props.disease.definition}</p>
          <p><h5>Причины:</h5> {this.props.disease.causes}</p>
          <p><h5>Лечение:</h5> {this.props.disease.treatment}</p>
          <p><h5>Опастность:</h5> {this.props.disease.danger}</p>
          <p><h5>Группы риска:</h5> {this.props.disease.riskGroup}</p>
          <p><h5>Профилактика:</h5> {this.props.disease.prevention}</p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ disease }) => {
  return {
    disease: disease.disease,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDiseaseById: (id) => dispatch(getDiseaseById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disease);