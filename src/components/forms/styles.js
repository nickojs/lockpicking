import styled, { css } from 'styled-components';
import openEye from '../../assets/openEye.png';
import closedEye from '../../assets/closedEye.png';


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

export const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  max-width: 302px;
`;

const openEyeIndicator = css`
  background: url(${openEye});
`;

const closedEyeIndicator = css`
  background: url(${closedEye});
`;

export const PasswordIndicator = styled.span`
  position: absolute;
  top: calc(25% - 4px); right: 0;

  display: block;
  width: 36px; height: 36px;
  
  border: 0;
  ${({ indicator }) => (indicator ? closedEyeIndicator : openEyeIndicator)}
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const FormInputs = styled.div`
  grid-area: form-inputs; 
  padding: 12px;  
`;

export const FormSubmit = styled.div` 
  grid-area: form-submit; 
  align-self: center;
`;

const disabledBtn = css`
  text-decoration: line-through;
  color: grey;
`;

const enabledBtn = css`
  color: white;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
  &:disabled{ color: red; }
`;

export const ConfirmButton = styled.input`
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  
  padding: 20px;
  height: 100px; width: auto;

  border: 0;
  background: transparent;
  transition: .5s ease;
  ${(props) => (props.isDisabled ? disabledBtn : enabledBtn)}
`;
