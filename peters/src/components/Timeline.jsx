import React from 'react';
import styled from 'styled-components';



const Timeline = () => {
    return (
        <TimelineWrapper>
            <SelectWrapper>
                <option value="Jan20-Dec21">Show Timeline: <span className='date'>Jan'22-Dec'23</span></option>
            </SelectWrapper>
        </TimelineWrapper>
    );
}

export default Timeline;




const TimelineWrapper = styled.div`
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    margin-top: 0.5rem;
    padding: 1rem;
    justify-content: center;
  }
`;

const SelectWrapper = styled.select`
  width:250px;
  padding: 10px;
  height: 3rem;
  border: 1px solid green;
  border-radius: 10px;
  color: green;
`;