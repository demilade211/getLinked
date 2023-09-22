import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from "../images/logo.svg"
import ham from "../images/ham.svg"
import { useNavigate } from "react-router-dom";

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M0.307505 10.6925C0.504459 10.8894 0.771552 11 1.05005 11C1.32854 11 1.59563 10.8894 1.79259 10.6925L5.50634 6.97874L9.22009 10.6925C9.41818 10.8838 9.68348 10.9897 9.95886 10.9873C10.2342 10.9849 10.4977 10.8744 10.6924 10.6797C10.8871 10.485 10.9976 10.2216 11 9.94617C11.0024 9.6708 10.8965 9.4055 10.7052 9.20741L6.99142 5.49366L10.7052 1.77991C10.8965 1.58182 11.0024 1.31652 11 1.04114C10.9976 0.765767 10.8871 0.502346 10.6924 0.307617C10.4977 0.112889 10.2342 0.00243378 9.95886 4.1008e-05C9.68348 -0.00235271 9.41818 0.103509 9.22009 0.294824L5.50634 4.00858L1.79259 0.294824C1.5945 0.103509 1.3292 -0.00235271 1.05383 4.1008e-05C0.778448 0.00243378 0.515027 0.112889 0.320299 0.307617C0.12557 0.502346 0.0151142 0.765767 0.0127213 1.04114C0.0103283 1.31652 0.11619 1.58182 0.307505 1.77991L4.02126 5.49366L0.307505 9.20741C0.110609 9.40437 0 9.67146 0 9.94995C0 10.2284 0.110609 10.4955 0.307505 10.6925Z" fill="#F8F8F8" />
                    </svg>
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