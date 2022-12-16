import React from 'react';
import { Layout } from './style';
import Profil from '../../assets/Profile/Profile.svg';

const userInfo = ({ userName }) => {
  return (
    <Layout.Profile>
      <img src={Profil} className="profile" />
      <p className="username">{userName} 님</p>
    </Layout.Profile>
  );
};

export default React.memo(userInfo);
