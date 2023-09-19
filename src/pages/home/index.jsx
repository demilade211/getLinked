import React from 'react'
import styled from 'styled-components';
import Navbar from './subComponents/Navbar';
import HeroSection from './subComponents/HeroSection';

const index = () => {
  return (
    <Con>
      <Navbar/>
      <HeroSection/>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%; 
  border:1px solid black;
  background:#150E28; 
`;

export default index