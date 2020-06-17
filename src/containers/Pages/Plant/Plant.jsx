import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';

import { getPlantById } from '../../../actions/plant';

class Plant extends Component {

  constructor (props) {
    super(props);

    this.state = {
    };
  }
   
  componentDidMount () {
    const url = window.location.pathname.split('/');
    const id = url[2];
    this.props.getPlantById(id);
  }

  render () {
    return (
      <div className="main-container">
        <Header/>
        <Container>
          <p><h5>Название:</h5> {this.props.plant.name}</p> 
          <p><h5>Описание:</h5> {this.props.plant.description}</p>
          <p><h5>Жизненая форма:</h5> {this.props.plant.lifeForm}</p>
          <p><h5>Внешний вид:</h5></p>
          <p><h6>Побеги:</h6>
            <p>Тип: {this.props.plant.shootType}</p>
            <p>Листорасположение: {this.props.plant.shootLeafArrangement}</p>
            <p>Размещение листьев: {this.props.plant.shootLeafPlacement}</p>
            <p>Поверхность: {this.props.plant.shootsurface}</p>
            <p>Придатки: {this.props.plant.shootappendages}</p>
          </p>
          <p><h6>Листья:</h6> 
            <p>Тип: {this.props.plant.leavestype}</p>
            <p>Верхушка: {this.props.plant.leavestop}</p>
            <p>Край: {this.props.plant.leavesedge}</p>
            <p>Основание: {this.props.plant.leavesbase}</p>
            <p>Поверхность: {this.props.plant.leavessurface}</p>
            <p>Придатки: {this.props.plant.leavesappendage}</p>
            <p>Пластинка</p>
            <p>Форма: {this.props.plant.leafplateshape}</p>
            <p>Членение: {this.props.plant.leavesplatedivision}</p>
            <p>Порядки сложности: {this.props.plant.leavesplateordersofdifficulty}</p>
            <p>Прикрепление: {this.props.plant.leavesplateattachment}</p>
            <p>Доли</p>
            <p>Форма: {this.props.plant.leavesshareshape}</p>
            <p>Членение: {this.props.plant.leavessharedivision}</p>
          </p>
          <p><h6>Соцветие:</h6> {this.props.plant.inflorescence}</p>
          <p><h6>Цветки:</h6> 
            <p>Размер: {this.props.plant.flowerssize}</p>
            <p>Околоцветник: {this.props.plant.flowersperianth}</p>
            <p>Число лепестков: {this.props.plant.flowersthenumberofpetals}</p>
            <p>Цвет</p>
            <p>Основной: {this.props.plant.flowerscobrmain}</p>
            <p>Оттенки: {this.props.plant.flowerscolorshades}</p>
            <p>Пятна и полоски: {this.props.plant.flowerscolorspotsorstripes}</p>
          </p>
          <p><h6>Плоды:</h6> 
            <p>Тип: {this.props.plant.fruittupe}</p>
            <p>Окраска с оттенками: {this.props.plant.fruitcoloringwithshades}</p>
            <p>Придатки: {this.props.plant.fruitappendages}</p>
          </p>
          <p><h6>Шишки:</h6>
            <p>Консистенция: {this.props.plant.bumpsconsistency}</p>
            <p>Форма: {this.props.plant.bumpsform}</p>
          </p>
          <p><h6>Спорангии:</h6> {this.props.plant.sporangia}</p>
          <p><h5>Местообитание:</h5> {this.props.plant.habitat}</p>
          <p><h5>Экология:</h5></p>
          <p>Отношение к влаге: {this.props.plant.relationtomoisture}</p>
          <p>Отношение к питанию: {this.props.plant.attitudetonutrition}</p>
          <p>Отношение к свету: {this.props.plant.attitudetolight}</p>
          <p>Отношение к субстрату: {this.props.plant.relationtosubstrate}</p>
          <p><h5>Особенности:</h5> {this.props.plant.features}</p>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ plant }) => {
  return {
    plant: plant.plant,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlantById: (id) => dispatch(getPlantById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plant);