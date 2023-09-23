import React from 'react'
import styled from 'styled-components';
import boygirl from "../images/boygirl1.png"

const FourthSection = () => {
    return (
        <Con>
            <Left>
                <img src={boygirl} alt="img" />
            </Left>
            <Right>
                <h3>Judging Criteria <br /> <span>Key attributes</span></h3>
                <p>
                    <span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                    solution. Consider whether it addresses a real-world problem in a novel
                    way or introduces innovative features.
                </p>
                <p>
                    <span>Functionality:</span> Assess how well the solution works. Does it perform its
                    intended functions effectively and without major issues? Judges would
                    consider the completeness and robustness of the solution.
                </p>
                <p>
                    <span>Impact and Relevance:</span> Determine the potential impact of the solution
                    in the real world. Does it address a significant problem, and is it relevant
                    to the target audience? Judges would assess the potential social,
                    economic, or environmental benefits.
                </p>
                <p>
                    <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of advanced
                    technologies or algorithms, and the scalability of the solution.
                </p>
                <p>
                    <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
                    to the rules and guidelines of the hackathon, including deadlines, use of
                    specific technologies or APIs, and any other competition-specific requirements.
                </p>
                <div className='btn-con'>
                    <NavButton>Read More</NavButton>
                </div>
            </Right>
        </Con>
    )
}
const Con = styled.section`  
    width: 100%;     
    display:flex; 
    align-items:center;
    padding:20px;  
    background-image: url('/images/Judging Criteria Bg.png');
    background-position: center center;
    background-size: 100% 100%;
    @media (max-width: 1200px) { 
        flex-direction:column;
        background:url('/images/Judging Criteria Mobile.png');
        background-position: 100% 100%;
    }
`;

const Left = styled.div`  
    width: 50%;   
    height: 500px; 
    display:flex; 
    justify-content:center;
    padding:20px;   
    img{
        width:100%;
        height:100%;
    }
    @media (max-width: 1200px) { 
        width:100%;
        height: 300px; 
    }
`;

const Right = styled.div`  
    width: 50%;    
    display:flex;
    flex-direction:column;
    justify-content:center; 
    padding:20px;  
    padding-left:50px;
    @media (max-width: 1200px) { 
        padding-left:0px;  
        padding:20px;
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
            font-size: 20px;
            width: 100%;  
        }
    }
    p{ 
        width: 80%;    
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
        margin-bottom:20px;
        span{
            color: #FF26B9;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 173.5%; /* 27.76px */
        }
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 13px;
            width: 100%;  
        }

    } 
    .btn-con{
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:40px;
    }
    @media (max-width: 1200px) { 
        width:100%;
    } 
`;

const NavButton = styled.button` 
    min-width: 172px;
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


export default FourthSection