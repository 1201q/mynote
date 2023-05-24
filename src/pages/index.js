import styled from "styled-components";
import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Main/Carousel";
import DoneList from "@/components/Main/DoneList";

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Padding>
          <Header />
          <Hello>안녕하세요, 황준서님!</Hello>
          <MenuHeader>카테고리</MenuHeader>
        </Padding>
        <Carousel />
        <Padding>
          <MenuHeader>오늘 한 일</MenuHeader>
          <DoneList />
        </Padding>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 840px;
  color: #404245;

  background-color: #fafaff;
`;

const Padding = styled.div`
  padding: 20px 20px 0px 20px;
  padding-top: 20px;
`;

const Hello = styled.div`
  color: #2c2d49;
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 50px;
`;

const MenuHeader = styled.p`
  color: #c5c5cd;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;
