import React from 'react'
import styled from 'styled-components';
import cloudman from "../images/cloudman1.png"

const FifthSection = () => {
    let que = [
        "Can I work on a project I started before the hackathon?",
        "What happens if I need help during the hackathon?",
        "What happens if I don't have an idea for a project?",
        "Can I join a team or do I have to come with one?",
        "What happens after the hackathon ends",
        "Can I work on a project I started before the hackathon?"
    ]
    return (
        <Con>
            <Left>
                <img src={cloudman} alt="img" />
            </Left>
            <Right>
                <h3>Frequently Ask <br /> <span>Question</span></h3>
                <p>
                    We got answers to the questions that you might
                    want to ask about <span>getlinked Hackathon 1.0</span>
                </p>
                {que.map(val => (
                    <div className='faq-con'>
                        <span className='left'>{val}</span>
                        <span className='right'>+</span>
                    </div>
                ))}
            </Right>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;     
    display:flex; 
    flex-direction: row-reverse;
    align-items:center;
    padding:100px 20px;
    border-top:1px solid rgba(255, 255, 255, 0.18); 
    background-image: url('/images/FAQ Bg.png');
    background-position: center center;
    background-size: 100% 100%;
    @media (max-width: 1200px) { 
        flex-direction:column-reverse;
        background:none;
    }
`;

const Left = styled.div`  
    width: 50%;   
    height: 600px; 
    display:flex; 
    justify-content:center;  
    img{
        width:100%;
        height:100%;
    }
    @media (max-width: 1200px) { 
        width:100%;
        height: 400px; 
    }
`;

const Right = styled.div`  
    width: 50%;    
    display:flex;
    flex-direction:column;
    justify-content:center; 
    padding-left:50px; 
    @media (max-width: 1200px) { 
        padding-left:0px;  
    }
    h3{ 
        width: 80%;    
        color: #FFF;
        font-family: 'Clash Display', sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 700; 
        text-align:left;
        margin-bottom:20px;
        span{
            color:#D434FE;
        }
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 24px;
            width: 100%;  
        }
    }
    p{ 
        width: 70%;    
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
        margin-bottom:50px;
        span{
            color: #FFF;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 27.5px;
        }
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 16px;
            width: 100%;  
        }

    } 
    .faq-con{
        padding-bottom:20px;
        border-bottom:1px solid #D434FE;
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:20px;
        .left{
            color: #FFF;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 27.5px; /* 196.429% */
        }
        .right{
            color: #D434FE;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 27.5px; /* 137.5% */
        }
        p{
            width:100%;
        }
    }
    @media (max-width: 1200px) { 
        width:100%;
        padding-left:0px;
    } 
`;

export default FifthSection