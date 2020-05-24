import styled from 'styled-components';
import { Container as C, Title as T } from '../../generalStyles';
import bg from '../../assets/image/login.jpg';

export const Container = styled(C)`
  justify-content: center;
  align-items: flex-start;
  color: white;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Input = styled.input`
  padding: 12px;
  font-family: inherit;
  font-size: inherit;

  border: none;
  border-bottom: 1px solid white;

  color: white;
  background: transparent;
`;

export const SmallTitle = styled.h1`
  text-align: center;
`;

export const Title = styled(T)`
  padding-top: .5em;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "form-inputs form-submit";

  div { 
    box-sizing: border-box;
    padding: 12px;
  }
`;

export const FormInputs = styled.div` grid-area: form-inputs; `;

export const FormSubmit = styled.div` 
  grid-area: form-submit; 
  align-self: center;
`;

export const ConfirmButton = styled.input`
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  
  height: 100px;
  width: 100px;
  padding: 20px;

  color: white;
  background: transparent;
  border: 0;

  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;
