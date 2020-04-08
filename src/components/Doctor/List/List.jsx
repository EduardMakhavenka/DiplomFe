import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

//import Header from './Header';
//import Modal from '../../Common/Modal';
//import Row from '../Row/Row.jsx';
//import  ListPagination  from '../../ListPagination/ListPagination';

import './styles.css';

export default class List extends Component {

  //constructor (props) {
  //  super(props);
  //  this.state = {
  //    show: false,
  //    itemToDelete: '',
  //    filteredItems: null,
  //    currentPage: 1,
  //    itemsPerPage: 25,
  //  };
  //}

  render () {
    return (
      <div>
        {this.props.items &&  <Table bordered striped hover>
          <thead>
            <tr>
              <td className="entity-id">#</td>
              <td>Name</td>
              <td>Surname</td>
              <td>Experience</td>
              <td>Photo</td>
              <td>Specialty</td>
              <td>Education</td>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((doctor, idx) =>
              <tr>
                <td>{idx}</td>
                <td>{doctor.name}</td>
              </tr>
            )}
          </tbody> 
        </Table>}
      </div>
    );
  }
}


