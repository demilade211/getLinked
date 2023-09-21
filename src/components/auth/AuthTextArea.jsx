import React from 'react'
import styled from 'styled-components';

const TextAreaAndLabel = ({label,placeholder,name,onChange,value}) => {
  return (
    <TextAreaLabelCon>
        <Label>{label}</Label>
        <GreyTextArea type="textarea" placeholder={placeholder} name={name} onChange={onChange} value={value}></GreyTextArea>
    </TextAreaLabelCon>
  )
}

const TextAreaLabelCon = styled.div`
    margin-bottom:30px;
    border-radius: 4px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const GreyTextArea = styled.textarea`
    width:100%;
    max-width:327px: 
    height: 119px;
    background: none;  
    padding:15px;
    outline:none;
    border:none;
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;; /* Text color for input */
    &::placeholder {
      color: rgba(255, 255, 255, 0.25);; /* Placeholder color for input */
    }
`;

const Label = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #333843;
    margin-bottom:5px
`;

export default TextAreaAndLabel