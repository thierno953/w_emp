import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SectionSideStyled>
    <div className='sideInfo'>
        <div>
        <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className='add'>
        <Link to="/addPerson">Add</Link>
        </div>
        <div className='add'>
        <Link to="/private">Private</Link>
        </div>
    </div>
    </SectionSideStyled>
  )
}

const SectionSideStyled = styled.div` 
  background: var(--color-primary-dark);
  height: 100%
  border-radius: 7px;
  text-align: center;
  padding-top: 25px;
  .sideInfo a{
      font-size: 18px;
      font-weight: 700;
      padding: 10px;
      color: var(--color-white);
  }
  .add {
    padding-top: 25px; 
  }

`;

export default Sidebar