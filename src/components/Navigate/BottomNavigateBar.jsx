import { Bottom } from './Nav.style';
import Home from '../../assets/Navigate/Home.svg';
import Person from '../../assets/Navigate/Person.svg';
import Plus from '../../assets/Navigate/Plus.svg';

import { useNavigate } from 'react-router-dom';

import React, { useCallback } from 'react';

const BottomNavigateBar = () => {
  const navigate = useNavigate();

  const isLogin = useCallback(() => {
    return !!localStorage.getItem('id');
  }, []);

  return (
    <Bottom.Rectangle>
      <Bottom.Home src={Home} onClick={() => navigate('/')} />

      <Bottom.Circle src={Plus} onClick={() => navigate('/add')} />

      {isLogin() ? (
        <Bottom.Person src={Person} onClick={() => navigate('/mypage')} />
      ) : (
        <Bottom.Person src={Person} onClick={() => navigate('/login')} />
      )}
    </Bottom.Rectangle>
  );
};

export default React.memo(BottomNavigateBar);
