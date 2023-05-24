import styled from "styled-components";
import React from "react";
import Header from "@/components/Main/Header";
import Carousel from "@/components/Main/Carousel";

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
          <MenuHeader>오늘 할 일</MenuHeader>
          <Content>1</Content>
          <Content>2</Content>
          <Content>2</Content>
          <Content>2</Content>
        </Padding>
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
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  min-width: 200px;
  width: 100%;
  height: 65px;
  padding: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.07);
`;
