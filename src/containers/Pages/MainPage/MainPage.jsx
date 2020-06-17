import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import myimg from '../../../static/img/unnamed.png';
import car1 from '../../../static/img/car1.jpg';
import car2 from '../../../static/img/car2.png';
import car3 from '../../../static/img/car3.jpg';

import Container from '../../../components/Common/Container';
import Header from '../../../components/Common/Header';
import Footer from '../../../components/Common/Footer';

import './styles.css';

class MainPage extends Component {

  render () {
    return (
      <div>
        <Header />
        <Container>
          <div className="carousel-container">

            <h5 align="center">Информационная система для определения видов лекарственных растений на основании первичных признаков</h5>
          </div>
        </Container>
        
      </div>
    );
  }
}
/*
<Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={car1}
    alt="First slide"
  />
  <Carousel.Caption>
    
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={car2}
    alt="Third slide"
  />

  <Carousel.Caption>
   
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={car3}
    alt="Third slide"
  />

  <Carousel.Caption>
    
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
*/
const mapStateToProps = ({ }) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);