import React from "react";
import styled from "styled-components";




const Sidebar = () => {
    return (
        <SidebarContainer>
            <LogoContainer>
                {/* <img src={image} alt="Logo" /> */}
            </LogoContainer>
            <SectionContainer>
                <SectionContent>
                    <SectionTitle>
                        <p>Data-in</p>
                    </SectionTitle>
                    <StyledSelectContainer>
                      
                            
                       
                        <StyledSelect>
                            <option>Energy</option>
                        </StyledSelect>
                    </StyledSelectContainer>
                   
                </SectionContent>
            </SectionContainer>
            <ButtonContainer>
                <HelpCenterButton>Open Help Centre</HelpCenterButton>
            </ButtonContainer>
            <PoweredByContainer>
                <PoweredByText>Powered by</PoweredByText>
                <PoweredByLogo>
                  
                </PoweredByLogo>
            </PoweredByContainer>
        </SidebarContainer>
    );
};

export default Sidebar;






const SidebarContainer = styled.div`
  position: fixed;
  width: 249px;
  background-color: #181818;
`;

const LogoContainer = styled.div`
  padding: 15px;

  img {
    text-align: left;
  }
`;

const SectionContainer = styled.div`
  border-top: 1px solid #2c2c2c;
  border-bottom: 1px solid #2c2c2c;
  width: 100%;
`;

const SectionContent = styled.div`
  height: 183px;
  display: flex;
  padding: 10px 15px 15px 15px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SectionTitle = styled.div`
  padding: 13px 10px 13px 20px;
  width: 100%;
  text-align: left;

  p {
    color: #5c5c5c;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    text-transform: uppercase;
  }
`;

const StyledSelectContainer = styled.div`
  display: flex;
  padding: 16px 97px 17px 21px;
  gap: 9px;
`;

const StyledSelect = styled.select`
  color: #fff;
  font-family: "Inter";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  background-color: #181818;
  border: none;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 63.5px 31px 63.5px 7px;
`;

const HelpCenterButton = styled.button`
  width: 187px;
  height: 50px;
  border-radius: 11px;
  background-color: #02ab6c;
  color: #fff;
`;

const PoweredByContainer = styled.div`
  height: 48px;
  padding: 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #02ab6c;
  color: #fafbfc;
`;

const PoweredByText = styled.div`
  margin-right: 4px;
`;

const PoweredByLogo = styled.div`
  svg {
    width: 117px;
    height: 26px;
  }
`;