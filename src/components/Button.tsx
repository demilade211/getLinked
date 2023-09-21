import React from 'react'
import styled from "styled-components";

const Button: React.FC<any> = ({ text, isdisabled, handleClick }) => {
    return (
        <YellowButton onClick={handleClick} disabled={isdisabled}>{text}</YellowButton>
    )
}

const YellowButton = styled.button`
    width: 100%;
    height:55px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 4px;
    background-color: #D88B07;
    font-family: 'IBM Plex Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px; 
    color: #FFFFFF;
    border:none;
    cursor:pointer;
    margin-top:30px;
    margin-bottom:20px;
    &:disabled,
    button[disabled]{ 
      background: #ECC583;
      color:white;
    }
`;

export default Button