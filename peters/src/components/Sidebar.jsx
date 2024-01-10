import React from "react";
import styled from "styled-components";
import image from "../utils/img1.svg";



const Sidebar = () => {
    return (
        <SidebarContainer>
            <LogoContainer>
                <img src={image} alt="Logo" />
            </LogoContainer>
            <SectionContainer>
                <SectionContent>
                    <SectionTitle>
                        <p>Data-in</p>
                    </SectionTitle>
                    <StyledSelectContainer>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                        >
                            <path
                                d="M12 3.76999L11.25 4.60999C11.25 4.60999 9.97 6.05999 8.68 7.93999C7.39 9.81999 6 12.07 6 14.23C6 15.8213 6.63214 17.3474 7.75736 18.4726C8.88258 19.5978 10.4087 20.23 12 20.23C13.5913 20.23 15.1174 19.5978 16.2426 18.4726C17.3679 17.3474 18 15.8213 18 14.23C18 12.07 16.61 9.81999 15.32 7.93999C14.5243 6.78422 13.6664 5.67258 12.75 4.60999L12 3.76999ZM12 6.89999C12.44 7.41999 12.84 7.84999 13.68 9.06999C14.89 10.83 16 13.07 16 14.23C16 16.45 14.22 18.23 12 18.23C9.78 18.23 8 16.45 8 14.23C8 13.07 9.11 10.83 10.32 9.06999C11.16 7.84999 11.56 7.41999 12 6.89999Z"
                                fill="white"
                            />
                        </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="26" viewBox="0 0 117 26" fill="none">
                        <path
                            d="M12 3.76999L11.25 4.60999C11.25 4.60999 9.97 6.05999 8.68 7.93999C7.39 9.81999 6 12.07 6 14.23C6 15.8213 6.63214 17.3474 7.75736 18.4726C8.88258 19.5978 10.4087 20.23 12 20.23C13.5913 20.23 15.1174 19.5978 16.2426 18.4726C17.3679 17.3474 18 15.8213 18 14.23C18 12.07 16.61 9.81999 15.32 7.93999C14.5243 6.78422 13.6664 5.67258 12.75 4.60999L12 3.76999ZM12 6.89999C12.44 7.41999 12.84 7.84999 13.68 9.06999C14.89 10.83 16 13.07 16 14.23C16 16.45 14.22 18.23 12 18.23C9.78 18.23 8 16.45 8 14.23C8 13.07 9.11 10.83 10.32 9.06999C11.16 7.84999 11.56 7.41999 12 6.89999Z"
                            fill="white"
                        />
                    </svg>
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
width: Fixed (219px)
height: Hug (73px)
padding: 13px, 10px, 13px, 20px
border-radius: 45px
gap: 5px

  

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