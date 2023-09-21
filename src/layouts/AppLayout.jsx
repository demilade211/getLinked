import React from 'react'
import styled from 'styled-components';
import Navbar from "../pages/home/subComponents/Navbar"

const AppLayout = ({children}) => {
  return (
    <Con>
      <Navbar/> 
      {children}
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;  
`;

export default AppLayout