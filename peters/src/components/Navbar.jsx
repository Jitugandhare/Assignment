import React from 'react';
import styled from 'styled-components';
import Group from '../utils/Group.svg';
import dropdown from '../utils/dropdown.svg';
import Vector from '../utils/Vector.svg';



const NavBar = () => {
  return (
    <NavBarWrapper>
      <LeftWrapper>
        <img src={Group} alt="group" />
        <p>Category-1</p>
      </LeftWrapper>

      <RightWrapper>
        <img src={dropdown} alt="dropdown" />
        <img src={Vector} alt="vector" />
      </RightWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;





const NavBarWrapper = styled.div`
// border: 2px solid red;
  margin-left: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    justify-content: space-between;
  }
`;

const LeftWrapper = styled.div`
  padding-left:150px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 800px) {
    gap: 0.2rem;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 1rem;

padding-right:30px;
  @media screen and (max-width: 800px) {
    gap: 0.4rem;
  }
`;