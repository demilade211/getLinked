import React from 'react'
import styled from 'styled-components';
import AppLayout from '../layouts/AppLayout';
import manondesk from "./home/images/manondesk.svg"
import fw from "./home/images/fw.svg"
import sw from "./home/images/sw.svg"
import AuthInputWithLabel from '../components/auth/AuthInputWithLabel';
import AuthSelect from '../components/auth/AuthSelect';

const Register = () => {
    return (
        <AppLayout>
            <Con>
                <Left>
                    <img src={manondesk} alt="img" />
                </Left>
                <Right>
                    <div className='form-con'>
                        <h2>Register</h2>
                        <div className='sub-con'>
                            <p className='sub-head'>Be part of this movement!</p>
                            <div className='emo'>
                                <img src={fw} alt="img" />
                                <img src={sw} alt="img" />
                            </div>
                        </div>
                        <h3>CREATE YOUR ACCOUNT</h3>

                        <GridCon>
                            <AuthInputWithLabel place="Enter the name of your group" label="Team's Name" />
                            <AuthInputWithLabel place="Enter your phone number" label="Phone" />
                            <AuthInputWithLabel place="Enter your email address" label="Email" />
                            <AuthInputWithLabel place="What is your group project topic" label="Project Topic" />
                            <AuthSelect label="Category" />
                            <AuthSelect label="Group Size" />
                        </GridCon>
                        <p className='info'>Please review your registration details before submitting</p>
                        <div className='check'>
                            <input type='checkbox'/>
                            <p>I agreed with the event terms and conditions  and privacy policy</p>
                        </div>
                        <NavButton>Register Now</NavButton>
                    </div>
                </Right>
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
  width: 100%;  
  border:1px solid black;
  background:#150E28; 
  margin-top:80px;
  display:grid;
  grid-template-columns:45% 55%;
  padding:40px;
  @media (max-width: 1200px) {  
    grid-template-columns:100%;  
  }
`;

const Left = styled.div`  
  width: 100%;  
  padding:20px;
  display:flex;
  justify-content:center;
  align-items:center;  
  @media (max-width: 1200px) {  
    display:none;
  }
`;

const Right = styled.div`  
  width: 100%;  
  display:flex; 
  align-items:center;
  @media (max-width: 1200px) {  
    justify-content:center;
  }
  .form-con{
    width: 95%; 
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding:50px;
    @media (max-width: 1200px) {  
        justify-content:center;
        background: none;
        box-shadow: none;
        padding:0px;
      }
    h2{
        color: #D434FE;
        font-family: Clash Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal; 
    }
    .sub-con{
        display:flex;
        align-items:flex-end;
        margin-bottom:20px;
        .sub-head{
            color: #FFF;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        .emo{
            width: 101px; 
            display:flex;
            justify-content:center;
            border-bottom:1px solid #D434FE
        }
    }
    h3{
        color: #FFF;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom:30px;
    }
    .info{
        color: #FF26B9;
        font-family: Montserrat;
        font-size: 12px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        margin-bottom:20px;
    }
    .check{
        display:flex;
        margin-bottom:20px;
        input[type=checkbox]{
            appearance: none;
            width: 16px;
            height: 16px;
            border: 1px solid white;
            background-color: transparent;
            cursor: pointer;

            &:checked {
                background-color: transparent;
            }
            &:checked::before {
                content: '✓'; /* Add content here */
                display: block;
                text-align: center;
                font-size: 12px;
                color: white;
                background-color: transparent;
              }
            
        }
        P{
            color: #FFF;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-left:10px;
        }
    }
    
  }
`;


const NavButton = styled.button` 
    width: 100%;
    height: 44px;   
    padding: 10px 24px;
    border-radius: 4px;
    border:none;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); 
    line-height: normal; 
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;  
`;

const GridCon = styled.div`  
  width: 100%;  
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap:20px;  
  @media (max-width: 600px) {  
    grid-template-columns:100%;
  }
`;
export default Register