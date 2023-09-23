import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from "../images/logo.svg"
import ham from "../images/ham.svg"
import { useNavigate } from "react-router-dom";
import Close from "../images/Close Button.svg"

const Navbar = () => {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(false);

    function handleNavigate(path) {
        navigate(path);
    }

    return (
        <LandingNavbarCon>
            <div className='left' onClick={() => navigate("/")}>
                <img src={logo} alt="img" />
            </div>
            <div className='right'>
                <nav>
                    <span><Link href={`/`}>Timeline</Link></span>
                    <span><Link href={`/`}>Overview</Link></span>
                    <span><Link href={`/`}>FAQs</Link></span>
                    <span><Link to="/contact">Contact</Link></span>
                </nav>
                <div>
                    <NavButton onClick={() => navigate("/register")} white={false}>Register</NavButton>
                </div>
            </div>
            <div className='mobile-right'>
                <img src={ham} alt="img" onClick={() => setShowNav(!showNav)} />
            </div>
            {showNav && <div className='mobile-nav'>
                <div className="close" onClick={() => setShowNav(false)} >
                    <img src={Close} alt="img" onClick={() => setShowNav(!showNav)} />
                </div>
                <ul>
                    <li>Timeline</li>
                    <li>Overview</li>
                    <li>FAQs</li>
                    <li onClick={() => navigate("/contact")}>Contact</li>
                    <li>
                        <NavButton onClick={() => navigate("/register")} white={false}>Register</NavButton>
                    </li>
                </ul>
            </div>}
        </LandingNavbarCon>
    )
}

const LandingNavbarCon = styled.header`
    width:100%;
    height:80px; 
    display: flex;
    justify-content:space-between;
    align-items:center;
    left:0;
    top:0; 
    position:fixed; 
    z-index:3;
    padding:40px 90px;
    align-items:center; 
    border-bottom:1px solid rgba(255, 255, 255, 0.18);
    background:#150E28; 
    background-image: url('/images/Header Bg.png');
    background-position: center center;
    background-size: 100% 100%;
    @media (max-width: 1200px) { 
        padding:0px 50px;  
    }
    a{
        text-decoration:none;
    }
    .left{ 
        display:flex;
        align-items:center; 
        img{
            margin-right:50px;
            width:150px;
            height:150px;
        }
    }
    .right{ 
        display:flex;
        align-items:center;
        nav{
            span{
                margin-right:30px;  
                a{
                    color: #FFF;
                    font-family: Montserrat;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                
            }
        }
        @media (max-width: 1200px) { 
            display:none;
        }
    } 
    .mobile-right{
        display:none;
        img{
            margin-left:30px;
        }
        @media (max-width: 1200px) { 
            display:flex;
            align-items:center; 
        }
    }
    .mobile-nav{ 
        position:absolute;
        width:100%;
        top:0px;
        left:0;
        display:none;
        border-radius: 8px;
        border: 0.5px solid rgba(255, 255, 255, 0.04);
        background: #150E28;
        backdrop-filter: blur(30px);
        padding:20px 50px;
        .close{
            display:flex;
            justify-content:flex-end;
            align-items:center;
            margin-bottom:40px;
        }
        ul{
            li{
                text-align:left;
                list-style-type:none;
                margin-bottom:30px;
                color: #FFF;
                font-family: Montserrat;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
        @media (max-width: 1200px) { 
            display:block;  
        }
    }
`;

const SearchCon = styled.div`  
    width: 343px;
    height:46px; 
    background: #F2F3F5;
    border-radius: 8px;
    display:flex; 
    padding:10px;
    img{
        margin:0 !important;
        margin-right:10px !important;
    }
    input{
        width:100%;
        background:none;
        border:none;
        outline:none; 
        font-style: normal;
        font-weight: 400;
        font-size: 14px; 
        color: #667085;
    } 
    @media (max-width: 1200px) { 
        display:none;
    }
`;

const NavButton = styled.button` 
    width: 172px;
    height: 44px;   
    padding: 10px 24px;
    border-radius: 4px;
    border:none;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); 
    line-height: normal;
    margin-left:30px; 
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400; 
    cursor:pointer;
    @media (max-width: 1200px) { 
        margin-left:0px;  
    }
`;

export default Navbar