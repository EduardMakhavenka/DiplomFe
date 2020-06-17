import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllDoctors } from '../../../actions/doctor';
import { createQuestion } from '../../../actions/question';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';
import List from '../../../components/Doctor/List';


import './styles.css';

class Doctors extends Component {

  constructor (props) {
    super(props);

    this.state = {
      currentSpecialty: '',
    };

  }

  componentDidMount () {
    this.props.getAllDoctors();
  }

  handleSpecialty = (specialty) => {
    this.setState({ currentSpecialty: specialty});
  }

  render () {
    const specialtyList = ['Врач акушер-гинеколог', 'Врач аллерголог-иммунолог', 'Врач ангиохирург',
      'Врач анестезиолог-реаниматолог', 'Врач валеолог', 'Врач гастроэнтеролог',
      'Врач генетик', 'Врач гинеколог-эндокринолог', 'Врач дерматолог', 'Врач диетолог', 'Врач инфекционист', 
      'Врач кардиолог/аритмолог', 'Врач кардиохирург', 'Врач ЛФК', 'Врач невролог', 'Врач нейрохирург', 
      'Врач офтальмолог', 'Врач онколог', 'Врач педиатр', 'Врач психиатр-нарколог', 'Врач психотеропевт/психолог',
      'Врач радиолог', 'Врач ревматолог', 'Врач стоматолог'];
    let currentDoctorsList = [];  
    if (this.state.currentSpecialty==='') {  
      currentDoctorsList = this.props.doctors;   
    } else {
      currentDoctorsList = this.props.doctors.filter( doctor => doctor.specialty == this.state.currentSpecialty);
    }
    return (
      <div>
        <Header/>
        <Container> 
          <div className="container">
            <div className="row">
              <div class="col-3 mt-3 list-group">
                {specialtyList.map((specialty, idx) =>                
                  <button type="button" class="list-group-item list-group-item-action" onClick={() => this.handleSpecialty(specialty)}>
                    {specialty}
                  </button>
                )}
              </div>
              <div className="col-9">
                {currentDoctorsList && <List 
                  items={currentDoctorsList}
                  create={this.props.createQuestion}
                />}
              </div>
            </div>  
          </div>
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
    createQuestion: (text, name, email, to) =>
      dispatch(createQuestion(text, name, email, to)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
