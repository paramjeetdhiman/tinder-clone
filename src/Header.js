import React from 'react';
import { Person, Forum } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

import './Header.scss';

const Header = () => {
  return (
    <div>
      <div className="header">
        <IconButton>
          <Person fontSize="large" className="header_icon" />
        </IconButton>
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder-logo"
        />
        <IconButton>
          <Forum />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
