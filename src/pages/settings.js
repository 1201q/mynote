import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { getSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios";

const settings = () => {
  return (
    <Container>
      <Header>설정</Header>
      <Wrapper
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.46 }}
      >
        <Content>
          {/* 내 정보 */}
          <Menu>
            <MenuHeader>
              <MenuName>내 정보</MenuName>
              <MenuDescription>내 정보에 대한 설정.</MenuDescription>
            </MenuHeader>
            <Image
              alt="angle"
              src={require("../assets/angle-small-right.svg")}
              width={25}
              height={25}
            />
          </Menu>
        </Content>
        <Content>
          {/* 약 기록 */}
          <Link href="/settings/medication">
            <Menu styledmargin={"20px"}>
              <MenuHeader>
                <MenuName>약</MenuName>
                <MenuDescription>내가 먹는 약에 대한 설정.</MenuDescription>
              </MenuHeader>
              <Image
                alt="angle"
                src={require("../assets/angle-small-right.svg")}
                width={25}
                height={25}
              />
            </Menu>
          </Link>
          {/* 오늘 한 일 */}
          <Menu styledmargin={"20px"}>
            <MenuHeader>
              <MenuName>오늘 한 일</MenuName>
              <MenuDescription>내가 한 일에 대한 설정.</MenuDescription>
            </MenuHeader>
            <Image
              alt="angle"
              src={require("../assets/angle-small-right.svg")}
              width={25}
              height={25}
            />
          </Menu>
          {/* 상태 */}
          <Menu>
            <MenuHeader>
              <MenuName>상태</MenuName>
              <MenuDescription>나의 상태에 대한 설정.</MenuDescription>
            </MenuHeader>
            <Image
              alt="angle"
              src={require("../assets/angle-small-right.svg")}
              width={25}
              height={25}
            />
          </Menu>
        </Content>
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
`;

const Wrapper = styled(motion.form)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 70vh;
  overflow-y: scroll;
  max-width: 840px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  align-items: center;
  padding: 15px 0px 0px 0px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
  font-size: 40px;
  font-weight: 700;
  color: #2c2d49;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: min-content;
  background-color: white;
  padding: 20px 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${(props) => props.styledmargin};
`;

const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuName = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #2c2d49;
  margin-bottom: 5px;
`;
const MenuDescription = styled.p`
  font-size: 15px;
  color: #c5c5cd;
`;

export default settings;
