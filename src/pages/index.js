import styled from "styled-components";

import React, { useEffect, useState } from "react";

import Image from "next/image";

export default function Home() {
  return (
    <Background>
      <MainContainer>
        <MainWrapper>
          <MainPageHeaderContainer>
            <Profile>
              <Image
                src={require("../../public/assets/user.svg")}
                width={20}
                height={20}
              />
            </Profile>
            <Name>황준서님</Name>
          </MainPageHeaderContainer>
          <ContentsBox>1</ContentsBox>
        </MainWrapper>
      </MainContainer>
    </Background>
  );
}

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/bgbg.jpg");
    background-size: cover;
    background-position: center;
    opacity: 1;
    filter: blur(300px);
  }
`;

const MainContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 840px;
  color: #0d1f3c;
  padding: 30px 18px;
  /* background-color: white; */
`;

const MainPageHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  height: 42px;
  margin-bottom: 20px;
`;

const Name = styled.p`
  font-weight: 800;
  font-size: 24px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: white;
  margin-right: 15px;
`;

const ContentsBox = styled.div`
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 22px;
  padding: 20px;
`;
