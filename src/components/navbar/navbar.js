import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import arrow from '../../assets/arrow.png';

const Navbar = () => {
  const history = useHistory();
  const [toggleMenu, setToggleMenu] = useState(true);
  const { isAuth, username } = useSelector((state) => state.user);

  return (
    <S.Header toggle={toggleMenu}>
      <S.Navbar>
        <h1>{isAuth ? username : 'Not Logged In'}  </h1>
        <S.Button onClick={() => history.push('/')}>Home</S.Button>
      </S.Navbar>
      <S.ArrowContainer toggle={toggleMenu}>
        <S.Arrow src={arrow} alt="Arrow" onClick={() => setToggleMenu(!toggleMenu)} />
      </S.ArrowContainer>
    </S.Header>
  );
};

export default Navbar;
