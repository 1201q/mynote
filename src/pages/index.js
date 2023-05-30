import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Main/Carousel";
import DoneList from "@/components/Main/DoneList";
import Status from "@/components/Main/Status";
import Menu from "@/components/Main/Menu";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import BottomBtn from "@/components/BottomBtn";

export default function Home() {
  const [menuSelect, setMenuSelect] = useState("donelist");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      window.scrollTo(0, 0);
    }
  }, [isSidebarOpen]);
  return (
    <Container>
      {isSidebarOpen ? (
        <>
          <Head>
            <meta name="theme-color" content="#131F53" />
          </Head>
          <SidebarWrapper>
            <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
          </SidebarWrapper>
        </>
      ) : (
        <>
          <Head>
            <meta name="theme-color" content="#fafaff" />
          </Head>
        </>
      )}
      <Wrapper>
        <Main
          styledradius={isSidebarOpen ? "40px" : "0px"}
          styledpadding={isSidebarOpen ? "20px" : "0px"}
          animate={isSidebarOpen ? { scale: 0.8, x: 260 } : { scale: 1, x: 0 }}
          styledheight={isSidebarOpen ? "80vh" : "max-content"}
          styledoverflow={isSidebarOpen && "hidden"}
          onClick={() => {
            if (isSidebarOpen) {
              setIsSidebarOpen(false);
            }
          }}
        >
          <Padding styledpaddingbottom={"20px"}>
            <Header setIsSidebarOpen={setIsSidebarOpen} />
            <Hello
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              안녕하세요, 황준서님!
            </Hello>
            <HeaderText>약 기록</HeaderText>
          </Padding>
          <Carousel />
          <Padding styledpaddingbottom={"100px"}>
            <Menu menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
            {menuSelect === "donelist" ? <DoneList /> : <Status />}
          </Padding>
          {!isSidebarOpen && <BottomBtn menuSelect={menuSelect} />}
        </Main>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafaff;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 840px;
  z-index: 1;
  overflow: hidden;
`;
const SidebarWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 840px;
  background-color: #131f53;
`;

const Main = styled(motion.div)`
  width: 100%;
  height: ${(props) => props.styledheight};
  min-height: 100vh;
  max-width: 840px;
  color: #404245;
  background-color: #fafaff;
  border-radius: ${(props) => props.styledradius};
  padding: ${(props) => props.styledpadding};
  z-index: 200;
  overflow-y: ${(props) => props.styledoverflow};
`;
const Padding = styled.div`
  height: max-content;
  max-width: 840px;
  padding: 20px 20px 20px 20px;
  padding-top: 20px;
  padding-bottom: ${(props) => props.styledpaddingbottom};
`;
const Hello = styled(motion.div)`
  color: #2c2d49;
  font-weight: 800;
  font-size: 30px;
  margin-bottom: 50px;
`;
const HeaderText = styled.p`
  color: #c5c5cd;
  font-size: 17px;
  font-weight: 700;
`;
