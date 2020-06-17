import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';
import history from '../../../history';

import { getAllParameters } from '../../../actions/parameters';
import { getPlantsByParameters } from '../../../actions/plant';

import './styles.css';

class PlantSearch extends Component {

  constructor (props) {
    super(props);
    
    this.state = {
      selectedParameters: [],     
      showLifeForm: true,
      showAppearanceForm: false,
      showHabitatForm: false,
      showEcologyForm: false,
      showFeaturesForm: false,
      listPlants: [],
    };
  }


  componentDidMount () {
    this.props.getAllParameters();
  }  

  search = async () => {
    let text = '';
    this.state.selectedParameters.map( item => {
      let itempatrs = item.split(';');
      console.log(itempatrs[0]);
      console.log(itempatrs[1]);
      text = text + `"${itempatrs[0]}":"${itempatrs[1]}",`;
    });
    console.log(text); 
    text = text.slice(0, -1);
    text = '{' + text + '}';
    console.log(text);
    let result = await this.props.getPlantsByParameters(text);
    console.log(result)
    this.setState({ listPlants: result.plant }, () => console.log(result.plant));
  }

  showFeaturesForm = () => {
    if (this.state.showFeaturesForm === true) {
      this.setState({ showFeaturesForm: false });
    } else {
      this.setState({ showFeaturesForm: true });
    }
  }

  showEcologyForm = () => {
    if (this.state.showEcologyForm === true) {
      this.setState({ showEcologyForm: false });
    } else {
      this.setState({ showEcologyForm: true });
    }
  }

  showHabitatForm = () => {
    if (this.state.showHabitatForm === true) {
      this.setState({ showHabitatForm: false });
    } else {
      this.setState({ showHabitatForm: true });
    }
  }

  showLifeForm = () => {
    if (this.state.showLifeForm === true) {
      this.setState({ showLifeForm: false });
    } else {
      this.setState({ showLifeForm: true });
    }
  }

  showAppearanceForm = () => {
    if (this.state.showAppearanceForm === true) {
      this.setState({ showAppearanceForm: false });
    } else {
      this.setState({ showAppearanceForm: true });
    }
  }

  handleParameter = (event) => {
    let param =event.target.value;
    let parts =param.split(';');
    //console.log(parts[0]);
    let result = [];

    let flag = false;
    let deleteflag = false;
    let updateflag = false;

    this.state.selectedParameters.map( item => {
      let itemParts = item.split(';');    
      if (itemParts[0]===parts[0]){
        flag = true;
        //console.log('flag sovpadenia');
        if(parts[1] === '1') {
          deleteflag = true;
          //console.log('flag delete');
        } else {
          updateflag = true;
          //console.log('flag update');
        }
      }
    });

    if (flag === false) {
      if (parts[1] !== '1'){
        result = this.state.selectedParameters;
        result.push(param);
        //console.log('prosto dobavlenia');   
      }
    } else if (deleteflag === true) {
      //console.log('delete');
      this.state.selectedParameters.map(item => {
        let itemParts = item.split(';');
        if (itemParts[0] !== parts[0]){
          result.push(item);    
        }    
      });
    } else if (updateflag === true){
      //console.log('update');
      this.state.selectedParameters.map(item => {
        let itemParts = item.split(';');
        if (itemParts[0] !== parts[0]){
          result.push(item);    
        } else {
          result.push(param);
        }   
      });  
    }

    //console.log(param);
    console.log(result);
    this.setState({ selectedParameters: result});
  }

  render () {
    let list = this.props.items;
    console.log(list.features);
    let listContent = this.state.listPlants;
    return (
      <div>
        <Header />
        <Container>
          <div class="mt-3 card">
            <div class="card-body">
              <h3>Поиск растений</h3>
              <div class="mt-1 card">
                <div class="card-body" >
                  <h5 onClick={this.showLifeForm}>Жизненая форма:</h5>
                  {this.state.showLifeForm && <Form className="inputForm">
                    <Form.Group  controlId="exampleForm.SelectCustom">
                      <Form.Control as="select" onChange={this.handleParameter} custom>
                        <option value="lifeForm;1">---
                        </option>
                        {list.lifeForm &&
                         list.lifeForm.map(item =>
                           <option value={'lifeForm;' + item} >{item}</option>)}
                      </Form.Control>
                    </Form.Group>
                  </Form>}
                </div>
              </div>
              <div class="mt-1 card">
                <div class="card-body" >
                  <h5 onClick={this.showAppearanceForm}>Внешний вид:</h5>
                  {this.state.showAppearanceForm && <div>
                    <div class="mt-1 card"> 
                      <div class="card-body">
                        <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"><h5 align="center">Побеги</h5></div>
                        <div class="col-4"></div>
                      </div>
                        <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Тип</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="shootType;1">---
                                </option>
                                {list.shootType &&
                                list.shootType.map(item =>
                                  <option value={'shootType;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Листорасположение</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="shootLeafArrangement;1">---
                                </option>
                                {list.shootLeafArrangement &&
                                list.shootLeafArrangement.map(item =>
                                  <option value={'shootLeafArrangement;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Размещение листьев</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="shootLeafPlacement;1">---
                                </option>
                                {list.shootLeafPlacement &&
                                list.shootLeafPlacement.map(item =>
                                  <option value={'shootLeafPlacement;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                        <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Поверхность</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="shootsurface;1">---
                                </option>  
                                {list.shootsurface &&
                                list.shootsurface.map(item =>
                                  <option value={'shootsurface;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form></div>
                        <div class="col-4"><Form className="inputForm">
                          <Form.Group  controlId="exampleForm.SelectCustom">
                            <Form.Label>Придатки</Form.Label>
                            <Form.Control as="select" onChange={this.handleParameter} custom>
                              <option value="shootappendages;1">---
                              </option>  
                              {list.shootappendages &&
                                list.shootappendages.map(item =>
                                  <option value={'shootappendages;' + item}>{item}</option>)}
                            </Form.Control>
                          </Form.Group>
                        </Form></div>
                        <div class="col-4"></div>
                      </div>
                      </div>
                    </div>
                    <div class="mt-1 card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"><h5 align="center">Листья</h5></div>
                        <div class="col-4"></div>
                      </div>
                      <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Тип</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="leavestype;1">---
                                </option>  
                                {list.leavestype &&
                                list.leavestype.map(item =>
                                  <option value={'leavestype;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Верхушка</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="leavestop;1">---
                                </option>  
                                {list.leavestop &&
                                list.leavestop.map(item =>
                                  <option value={'leavestop;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Край</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="leavesedge;1">---
                                </option>  
                                {list.leavesedge &&
                                list.leavesedge.map(item =>
                                  <option value={'leavesedge;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Основание</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="leavesbase;1">---
                                </option>  
                                {list.leavesbase &&
                                list.leavesbase.map(item =>
                                  <option value={'leavesbase;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form></div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Поверхность</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="leavessurface;1">---
                                </option>  
                                {list.leavessurface &&
                                list.leavessurface.map(item =>
                                  <option value={'leavessurface;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Придатки</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="leavesappendage;1">---
                                </option>  
                                {list.leavesappendage &&
                                list.leavesappendage.map(item =>
                                  <option value={'leavesappendage;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>

                      <div class="mt-1 card">
                        <div class="card-body">
                          <h6>Пластинка</h6>  
                          <div class="row">
                            <div class="col-3">
                              <Form>
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Форма</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="leafplateshape;1">---
                                    </option>  
                                    {list.leafplateshape &&
                                      list.leafplateshape.map(item =>
                                        <option value={'leafplateshape;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                            <div class="col-3">
                              <Form>
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Членение</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="leavesplatedivision;1">---
                                    </option>  
                                    {list.leavesplatedivision &&
                                      list.leavesplatedivision.map(item =>
                                        <option value={'leavesplatedivision;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                            <div class="col-3">
                              <Form>
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Порядки сложности</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="leavesplateordersofdifficulty;1">---
                                    </option>  
                                    {list.leavesplateordersofdifficulty &&
                                      list.leavesplateordersofdifficulty.map(item =>
                                        <option value={'leavesplateordersofdifficulty;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                            <div class="col-3">
                              <Form>
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Прикрепление</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="leavesplateattachment;1">---
                                    </option>  
                                    {list.leavesplateattachment &&
                                      list.leavesplateattachment.map(item =>
                                        <option value={'leavesplateattachment;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-1 card">
                        <div class="card-body">
                          <h6>Доли:</h6>  
                          <div class="row">
                            <div class="col-3">
                              <Form>
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Форма</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="leavesshareshape;1">---
                                    </option>  
                                    {list.leavesshareshape &&
                                      list.leavesshareshape.map(item =>
                                        <option value={'leavesshareshape;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                            <div class="col-3">
                              <Form>
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Членение</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="leavessharedivision;1">---
                                    </option>  
                                    {list.leavessharedivision &&
                                      list.leavessharedivision.map(item =>
                                        <option value={'leavessharedivision;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                            <div class="col-3">
                            </div>
                            <div class="col-3">
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                    <div class="mt-1 card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"><h5 align="center">Соцветие</h5></div>
                        <div class="col-4"></div>
                      </div>
                      <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="inflorescence;1">---
                                </option>  
                                {list.inflorescence &&
                                    list.inflorescence.map(item =>
                                      <option value={'inflorescence;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                        </div>
                        <div class="col-4">
                        </div>
                      </div>
                      
                    </div>
                  </div>
                    <div class="mt-1 card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"><h5 align="center">Цветки</h5></div>
                        <div class="col-4"></div>
                      </div>
                      <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Размер</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="flowerssize;1">---
                                </option>  
                                {list.flowerssize &&
                                    list.flowerssize.map(item =>
                                      <option value={'flowerssize;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Околоцветник</Form.Label>
                              <Form.Control as="select"  onChange={this.handleParameter}custom>
                                <option value="flowersperianth;1">---
                                </option>  
                                {list.flowersperianth &&
                                    list.flowersperianth.map(item =>
                                      <option value={'flowersperianth;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Число лепестков</Form.Label>
                              <Form.Control as="select"  onChange={this.handleParameter} custom>
                                <option value="flowersthenumberofpetals;1">---
                                </option>  
                                {list.flowersthenumberofpetals &&
                                    list.flowersthenumberofpetals.map(item =>
                                      <option value={'flowersthenumberofpetals;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-body">
                          <h6>Цвет:</h6>
                          <div class="row">
                            <div class="col-4">
                              <Form >
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Основной</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="flowerscobrmain;1">---
                                    </option>  
                                    {list.flowerscobrmain &&
                                    list.flowerscobrmain.map(item =>
                                      <option value={'flowerscobrmain;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                            <div class="col-4">
                              <Form >
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Оттенки</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="flowerscolorshades;1">---
                                    </option>  
                                    {list.flowerscolorshades &&
                                    list.flowerscolorshades.map(item =>
                                      <option value={'flowerscolorshades;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                            <div class="col-4">
                              <Form >
                                <Form.Group  controlId="exampleForm.SelectCustom">
                                  <Form.Label>Пятна и полоски</Form.Label>
                                  <Form.Control as="select" onChange={this.handleParameter} custom>
                                    <option value="flowerscolorspotsorstripes;1">---
                                    </option>  
                                    {list.flowerscolorspotsorstripes &&
                                    list.flowerscolorspotsorstripes.map(item =>
                                      <option value={'flowerscolorspotsorstripes;' + item}>{item}</option>)}
                                  </Form.Control>
                                </Form.Group>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                    <div class="mt-1 card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"><h5 align="center">Плоды</h5></div>
                        <div class="col-4"></div>
                      </div>
                      <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Тип</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="fruittupe;1">---
                                </option>  
                                {list.fruittupe &&
                                  list.fruittupe.map(item =>
                                    <option value={'fruittupe;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Окраска с оттенками</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="fruitcoloringwithshades;1">---
                                </option>  
                                {list.fruitcoloringwithshades &&
                                  list.fruitcoloringwithshades.map(item =>
                                    <option value={'fruitcoloringwithshades;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Придатки</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="fruitappendages;1">---
                                </option>  
                                {list.fruitappendages &&
                                  list.fruitappendages.map(item =>
                                    <option value={'fruitappendages;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div class="mt-1 card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"><h5 align="center">Шишки</h5></div>
                        <div class="col-4"></div>
                      </div>
                      <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Консистенция</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="bumpsconsistency;1">---
                                </option>  
                                {list.bumpsconsistency &&
                                  list.bumpsconsistency.map(item =>
                                    <option value={'bumpsconsistency;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Label>Форма</Form.Label>
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="bumpsform;1">---
                                </option>  
                                {list.bumpsform &&
                                  list.bumpsform.map(item =>
                                    <option value={'bumpsform;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                        </div>
                      </div>
                    </div>
                  </div>
                    <div class="mt-1 card">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"><h5 align="center">Спорангии</h5></div>
                        <div class="col-4"></div>
                      </div>
                      <div class="row">
                        <div class="col-4">
                          <Form className="inputForm">
                            <Form.Group  controlId="exampleForm.SelectCustom">
                              <Form.Control as="select" onChange={this.handleParameter} custom>
                                <option value="sporangia;1">---
                                </option>  
                                {list.sporangia&&
                                  list.sporangia.map(item =>
                                    <option value={'sporangia;' + item}>{item}</option>)}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                        <div class="col-4">
                        </div>
                        <div class="col-4">
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>}
                </div>
              </div>
              <div class="mt-1 card">
                <div class="card-body">
                  <h5 onClick={this.showHabitatForm}>Местообитание:</h5>
                  {this.state.showHabitatForm &&
                  <Form className="inputForm">
                    <Form.Group  controlId="exampleForm.SelectCustom">        
                      <Form.Control as="select" onChange={this.handleParameter} custom>
                        <option value="habitat;1">---
                        </option>  
                        {list.habitat &&
                          list.habitat.map(item =>
                            <option value={'habitat;' + item}>{item}</option>)}
                      </Form.Control>
                    </Form.Group>
                  </Form>}
                </div>
              </div>
              <div class="mt-1 card">
                <div class="card-body">
                  <h5  onClick={this.showEcologyForm}>Экология:</h5>
                  {this.state.showEcologyForm &&
                  <div class="row">
                    <div class="col-3">
                      <Form>
                        <Form.Label>Отношение к влаге:</Form.Label> 
                        <Form.Group  controlId="exampleForm.SelectCustom">        
                          <Form.Control as="select" onChange={this.handleParameter} custom>
                            <option value="relationtomoisture;1">---
                            </option>  
                            {list.relationtomoisture &&
                            list.relationtomoisture.map(item =>
                              <option value={'relationtomoisture;' + item}>{item}</option>)}
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </div>
                    <div class="col-3">
                      <Form>
                        <Form.Label>Отношение к питанию:</Form.Label>  
                        <Form.Group  controlId="exampleForm.SelectCustom">        
                          <Form.Control as="select" onChange={this.handleParameter} custom>
                            <option value="attitudetonutrition;1">---
                            </option>  
                            {list.attitudetonutrition &&
                            list.attitudetonutrition.map(item =>
                              <option value={'attitudetonutrition;' + item}>{item}</option>)}
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </div>
                    <div class="col-3">
                      <Form>
                        <Form.Label>Отношение к свету:</Form.Label>    
                        <Form.Group  controlId="exampleForm.SelectCustom">        
                          <Form.Control as="select" onChange={this.handleParameter} custom>
                            <option value="attitudetolight;1">---
                            </option>  
                            {list.attitudetolight &&
                            list.attitudetolight.map(item =>
                              <option value={'attitudetolight;' + item}>{item}</option>)}
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </div>
                    <div class="col-3">
                      <Form>
                        <Form.Label>Отношение к субстрату:</Form.Label>   
                        <Form.Group  controlId="exampleForm.SelectCustom">        
                          <Form.Control as="select" onChange={this.handleParameter} custom>
                            <option value="relationtosubstrate;1">---
                            </option>  
                            {list.relationtosubstrate &&
                            list.relationtosubstrate.map(item =>
                              <option value={'relationtosubstrate;' + item}>{item}</option>)}
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  }</div>
              </div>
              <div class="mt-1 card">
                <div class="card-body">
                  <h5 onClick={this.showFeaturesForm}>Особенности:</h5>
                  {this.state.showFeaturesForm && <div>
                  <Form className="inputForm">
                    <Form.Group  controlId="exampleForm.SelectCustom">        
                      <Form.Control as="select" onChange={this.handleParameter} custom>
                        <option value="features;1">---
                        </option>  
                        {list.features &&
                          list.features.map(item =>
                            <option value={'features;' + item}>{item}</option>)}
                      </Form.Control>
                    </Form.Group>
                  </Form>
                  </div>}
                </div>
              </div>
              <button onClick={this.search} class="mt-3 btn btn-success">Поиск</button> 
            </div>
          </div>
          
          {listContent && listContent.map(item => 
            <div class="mt-2 mb-1 card">
              <div class="card-body">
                <h3>{item.name}</h3>
                <button onClick={() => history.push(`/plant/${item._id}`)} type="button" class="btn m-3 btn-success">Подробнее</button>
              </div>
            </div>
          )}

        </Container>        
      </div>
    );
  }
}

const mapStateToProps = ({ parameters, plant }) => {
  return {
    plants: plant.plants,
    items: parameters.parameters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlantsByParameters: (items) => dispatch(getPlantsByParameters(items)),
    getAllParameters: () => dispatch(getAllParameters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlantSearch);