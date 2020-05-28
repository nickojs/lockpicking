import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import arrow from '../../assets/arrow.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(true);
  const { isAuth } = useSelector((state) => state.user);

  return (
    <S.Header toggle={toggleMenu}>
      <S.Navbar>
        <h1>{isAuth ? 'Username' : 'Not Logged In'}  </h1>
        <S.Button onClick={() => dispatch({ type: 'RESET_STATE' })}>Home</S.Button>
      </S.Navbar>
      <S.ArrowContainer toggle={toggleMenu}>
        <S.Arrow src={arrow} alt="Arrow" onClick={() => setToggleMenu(!toggleMenu)} />
      </S.ArrowContainer>
    </S.Header>
  );
};

export default Navbar;
