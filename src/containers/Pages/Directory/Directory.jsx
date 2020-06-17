import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';

import history from '../../../history';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';
import List from '../../../components/Directory/List';

import { getAllSymptoms, getAllDiseaseTitles, getAllDiseasesByTitles, getAllDiseasesBySymptoms } from '../../../actions/disease';

class Directory extends Component {

  constructor (props) {
    super(props);

    this.state = {
      currentList: 'titles',
      selectedOption: null,
      content: [],
    };

  }

  componentDidMount () {
    this.props.getAllSymptoms();
    this.props.getAllDiseaseTitles();
  }

  createLists = (list) => {
    let result = [];
    list.map( item => {
      result.push({value: item, label : item});
    });
    return result;
  }

  changeList = (list) => {
    this.setState({ currentList: list, 
      selectedOption: null });
  }

  handleChange = async (selectedOption) => {

    //console.log(this.state.selectedOption);
    if (selectedOption !== null){
      let searchDiseases = [];
      if(this.state.currentList === 'titles'){
        searchDiseases = await this.props.getAllDiseasesByTitles(selectedOption);
      //console.log(searchDiseases.diseases);
      } else {
        searchDiseases = await this.props.getAllDiseasesBySymptoms(selectedOption);
        console.log(searchDiseases.diseases);
      }
      this.setState(
        { selectedOption },
        () => {
          console.log(`Option selected:`, this.state.selectedOption);     
        }
      );
      this.setState(
        { content: searchDiseases.diseases },
        () => {
          console.log(`Option selec2:`, this.state.content);         
        }
      );
    } else {
      this.setState(
        { selectedOption },
        () => {
          console.log(`Option selected:`, this.state.selectedOption);     
        }
      );
      this.setState(
        { content: [] },
        () => {
          console.log(`Option selec2:`, this.state.content);         
        }
      );
    }
  };

  render () {
    const { selectedOption } = this.state;
    let symptoms = this.createLists(this.props.symptoms);
    let titles = this.createLists(this.props.titles);
    let list = [];
    if (this.state.currentList === 'titles') {
      list = titles;
    } else {
      list = symptoms;
    }
    let diseases = this.state.content;
    return (
      <div>
        <Header/>
        <Container>
          <div class="m-3 card">
            <div class="card-body">
              <fieldset id="group1">
                <div class="form-check">
                  <input class="form-check-input" name="group1" onClick={() => this.changeList('titles')} type="radio" value="option1"/>
                  <label class="form-check-label">
                    Поиск болезни по названию
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="group1" onClick={() => this.changeList('symptoms')} type="radio" value="option2"/>
                  <label class="form-check-label">
                    Поиск болезни по симптомам
                  </label>
                </div>
              </fieldset>
            </div>
            <Select
              className="mt-4 col-md-6 col-offset-4"
              value={selectedOption}
              components={makeAnimated()}
              onChange={this.handleChange}
              isMulti
              options={list}
            />
            <List/>
           
          </div>
          {diseases && diseases.map(disease => 
            <div class="mr-3 ml-3 mt-1 mb-1 card">
              <div class="card-body">
                <h3>{disease.name}</h3>
                <p>Симптомы: {disease.symptoms.join(' ,')}.</p>
                <button onClick={() => history.push(`/disease/${disease._id}`)} type="button" class="btn m-3 btn-success">Подробней</button>
              </div>
            </div>
          )} 
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ disease }) => {
  return {
    symptoms: disease.symptoms,
    titles: disease.titles,
    diseases: disease.diseases,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSymptoms: () => dispatch(getAllSymptoms()),
    getAllDiseaseTitles: () => dispatch(getAllDiseaseTitles()),
    getAllDiseasesByTitles: (titles) => dispatch(getAllDiseasesByTitles(titles)),
    getAllDiseasesBySymptoms: (symptoms) => dispatch(getAllDiseasesBySymptoms(symptoms)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);