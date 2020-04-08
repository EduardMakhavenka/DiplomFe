import React from 'react';
import history from '../../../history';

import './Header.css';

const Header = () => {
  return(
    <div className="header">
      <span className="header-logo">
        
      </span>
      <div className="header-navigation">
        <div onClick={() => history.push('/')}>Главная</div>
        <div onClick={() => history.push('/doctors')}>Врачи</div>
        <div onClick={() => history.push('/question')}>Задать вопрос</div>
        <div onClick={() => history.push('/directory')}>Справочник болезний</div>
      </div>
      <div className="header-profile">
        Admin
      </div>
    </div>
  );
};

export default Header;