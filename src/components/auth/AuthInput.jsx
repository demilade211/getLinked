import React from 'react'
import styled from "styled-components";

const AuthInput = ({ place, withIcon, image, type, onChange, name, value, errors }) => {
  return (
    <InputLabelCon>
      <InputCon>
        {withIcon && <img src={image} alt="img" />}
        <input type={type} placeholder={place} onChange={onChange} name={name} value={value} />
      </InputCon>
      {errors.inputName === name && errors.isError && <ErrorMessage>{errors.message}</ErrorMessage>}
    </InputLabelCon>

  )
}
const InputLabelCon = styled.div`
    margin-bottom:30px;
`;
const ErrorMessage = styled.div` 
    color: red;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:5px;
`;

const InputCon = styled.div`
    width: 100%;
    height:47px;
    display:flex; 
    align-items:center;
    border-radius: 4px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding:10px; 
    img{
        margin-right:10px;
        width:25px;
        height:25px;
    }
    input{
      width:100%;
      background:none;
      border:none;
      outline:none;
      color: #FFF;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal; /* Text color for input */
      &::placeholder {
        color: rgba(255, 255, 255, 0.25); /* Placeholder color for input */
      }

    }
`;

export default AuthInput