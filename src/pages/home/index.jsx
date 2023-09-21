import React from 'react'
import styled from 'styled-components';
import AppLayout from '../../layouts/AppLayout';
import HeroSection from './subComponents/HeroSection';
import SecondSection from './subComponents/SecondSection';
import ThirdSection from './subComponents/ThirdSection';
import FourthSection from './subComponents/FourthSection';
import FifthSection from './subComponents/FifthSection';
import Timeline from './subComponents/Timeline';
import Prizes from './subComponents/Prizes';
import Partners from './subComponents/Partners';
import Privacy from './subComponents/Privacy';
import Footer from './subComponents/Footer';

const index = () => {
  return (
    <Con>
      <AppLayout> 
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <Timeline/>
      <Prizes/>
      <Partners/>
      <Privacy/>
      <Footer/>
    </AppLayout>
    </Con>
  )
}

const Con = styled.div`  
  width: 100%; 
  border:1px solid black;
  background:#150E28; 
`;

export default index