import React, { useState, useEffect } from 'react';
import moment from 'moment';

import * as S from './styles';
import { Title, InnerContainer } from '../../generalStyles';
import useRequest from '../../hooks/request';

const Stats = () => {
  const [options, setOptions] = useState({});
  const [requestData] = useRequest(options);
  const { data, loading, error } = requestData;

  useEffect(() => {
    setOptions({
      method: 'GET',
      url: `https://${process.env.REACT_APP_BACKEND}/stats`
    });
  }, []);

  let stats;

  if (data) {
    stats = data.records.map((s) => (
      <tr key={s.id}>
        <td>{s.username}</td>
        <td>{Number(s.time).toFixed(2)}</td>
        <td>{s.picks}</td>
        <td>{moment(s.createdAt).format('MMMM Do [at] h:mm:ss a')}</td>
      </tr>
    ));
  }

  return (
    <S.Container>
      <InnerContainer>
        <Title>Stats</Title>
      </InnerContainer>
      <InnerContainer>
        <S.MsgContainer>
          {error && <S.ErrorMsg>{error.message}</S.ErrorMsg> }
          {loading && <p>Loading...</p>}
        </S.MsgContainer>
        {data
          && (
          <S.Table>
            <thead>
              <tr>
                <th>username</th>
                <th>time</th>
                <th>picks</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {stats}
            </tbody>
          </S.Table>
          )}
      </InnerContainer>
    </S.Container>
  );
};

export default Stats;
