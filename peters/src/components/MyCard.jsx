import React from 'react';
import styled from 'styled-components';
import infoIcon from '../utils/infoIcon.svg';



const MyCard = ({ heading, emission, percentage, color }) => {
    return (
        <Subcard>
            <CardHeading>
                <Para>{heading}</Para>
                <img src={infoIcon} alt="info" />
            </CardHeading>

            <SubheadingWrapper style={{ border: `1px solid ${color}` }}>
                <Para>{emission}</Para>
                <Para>{percentage}</Para>
            </SubheadingWrapper>
        </Subcard>
    );
};

export default MyCard;




const Subcard = styled.div`

  padding: 2rem 0.5rem;
  display: flex;
  width: 267px;
  height: 134px;
  
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #EBEBEB;
  background: #FFF;
  box-shadow: 0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02);
`;

const CardHeading = styled.div`
  display: flex;
  font-weight: 500;
  gap: 2px;
`;

const Para = styled.p`
  font-weight: bold;
`;

const SubheadingWrapper = styled.div`
  width: 90%;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;