import styled from "styled-components";

import React, { useEffect, useState } from "react";

import MainPageHeader from "@/components/MainPageHeader";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <MainPageHeader />
        <SectionHeader>
          <Header>진행중이에요</Header>
          <ViewMore>View More</ViewMore>
        </SectionHeader>
        <ContentsBox>1</ContentsBox>
        <SectionHeader>
          <Header>끝났어요</Header>
          <ViewMore>View More</ViewMore>
        </SectionHeader>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 840px;
  color: #404245;
  padding: 30px 25px;
  padding-top: 40px;
  background-color: #f9fafc;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #404245;
`;

const ViewMore = styled.p`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  color: rgba(52, 122, 240, 0.8);
  font-weight: 600;
`;

const ContentsBox = styled.div`
  border-radius: 20px;
  background-color: white;
  height: 300px;
  padding: 20px;
  margin-bottom: 20px;
`;
