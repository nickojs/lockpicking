import styled from 'styled-components';


export const SmallTitle = styled.h1`
  text-align: center;
`;

export const ErrorMsg = styled.p`
  margin: 6px auto;

  font-family: 'Arial', sans-serif;
  font-size: .8em;

  text-shadow: 0px 0px 8px lightcoral;
  text-align: center;
  
  color: red;
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

export const Input = styled.input`
  padding: 12px;
  font-family: inherit;
  font-size: inherit;

  border: none;
  border-bottom: 1px solid white;

  color: white;
  background: transparent;
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
