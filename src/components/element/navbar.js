import React from 'react';
import 'assets/scss/App.scss';
import { Icon } from '@blueprintjs/core';
const NavBar = () => {
  return (
    <ul className="w3-animate-top">
      <li>
        <Icon icon="unresolve" iconSize={24} color="#16d" />
        <span style={{ color: '#16d' }}>&nbsp;Findless</span>
      </li>
    </ul>
  );
};

export default NavBar;
