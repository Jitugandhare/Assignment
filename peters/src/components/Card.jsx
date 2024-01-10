import React from 'react';
import styled from 'styled-components';
import MyCard from './MyCard';



const Card = () => {
    return (
        <CardSectionWrapper>
            <MyCard heading={`Current Year Emission`} emission={'39699 CO2e'} percentage={'7.6% YOY'} color={'red'} />
            <MyCard heading={`Revenue to emission ratio`} emission={'136 CO2e'} percentage={'3.7% YOY'} color={'yellow'} />
            
            <DIV>
            <MyCard heading={`Category-1`}  percentage={'32% of Scope3'} color={'green'} />
            </DIV>

            <LastCardWrapper>
                <p>Total number of reached suppliers</p>
                <H1>143</H1>
            </LastCardWrapper>
        </CardSectionWrapper>
    );
};

export default Card;




const CardSectionWrapper = styled.div`
width:80%;
margin-left:15%;

justify-content:space-between;
  margin-top: 2rem;
  padding: 0 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: 0.2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;

const LastCardWrapper = styled.div`
  margin-top:1rem;
  padding-left: 1rem;
  width: 170px;
  height: 155px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #EBEBEB;
  background: rgba(2, 171, 108, 0.67);
  box-shadow: 0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02);
  color: rgba(255, 255, 255, 0.84);
`;
const DIV=styled.div`
 
 
`

const H1 = styled.h1`
  text-align: center;
  font-family: HelveticaNeue;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;