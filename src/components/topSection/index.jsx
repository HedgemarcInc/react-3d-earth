import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #27b927;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

const MadeBy = styled.h3`
  color: #fff;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Logo>rebanc Inc. </Logo>
      <Slogan>Building Something Great</Slogan>
      <Paragraph>
      “A great brand is a story that’s never completely told. 
      A brand is a metaphorical story that connects with something very deep 
      a fundamental appreciation of mythology. Stories create the emotional 
      context people need to locate themselves in a larger experience.”
                             'Scott Bedbury'.
    
      </Paragraph>
      <DonateButton>Please Visit our Linkedin Page 
        for more Updates</DonateButton> 
      {/* <MadeBy>
        <u>Made By:</u> Islem Maboud
      </MadeBy> */}
    </TopSectionContainer>
  );
}
