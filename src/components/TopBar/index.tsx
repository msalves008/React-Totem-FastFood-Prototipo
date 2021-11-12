import React from 'react';
import logo from '../../assets/logoDyoLanches_write.png'

import { Container } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <div className="section-topbar"> 
      <img src={logo} alt="" /> 
      </div>
    </Container>
  );
};

export default TopBar;
