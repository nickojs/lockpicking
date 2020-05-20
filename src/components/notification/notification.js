import React from 'react';
import * as S from './styles';

const Notification = ({ children }) => (
  <S.NotificationContainer>
    <p>{children}</p>
  </S.NotificationContainer>
);

export default Notification;
