import styled from 'styled-components';
import background from '../../assets/image/home.jpg';
import { Container as C } from '../../generalStyles';

export const Container = styled(C)`
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  
  color: white;
  background: url(${background});
`;

export const MsgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{ 
    margin: 24px auto;
  }
`;

export const ErrorMsg = styled.p`
  margin: 6px auto;

  font-family: 'Arial', sans-serif;
  font-size: .8em;

  text-shadow: 0px 0px 8px lightcoral;
  text-align: center;
  
  color: red;
`;

export const Table = styled.table`
  
  border: 5px double #EEE;
  background: rgba(0, 0, 0, 0.9);

  td, th{ 
    padding: 8px; 
    border: 1px solid #EEE;
  }

  tbody tr:hover{ 
    color: black;
    background: #CCC; 
  }
`;
