import styled from "styled-components";
import Medication from "@/components/Medication";
import Behavior from "@/components/Behavior";
import React, { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(null);
  return (
    <Container>
      <Wrapper>
        <HelloHeader>
          <Hello>환영해요.</Hello>
          <Name>황준서님</Name>
        </HelloHeader>
        <Medication />
        <Header>행동 보고</Header>
        <Behavior
          expanded={expanded}
          img={"sun"}
          header={"오전"}
          explain={"기상후 ~ 11:59"}
        />
        <Behavior
          expanded={expanded}
          img={"moon"}
          header={"오후"}
          explain={"12:00 ~ 17:59"}
        />
        <Behavior
          expanded={expanded}
          img={"zzz"}
          header={"밤"}
          explain={"18:00 ~ 취침전"}
        />
        <Header>특이사항</Header>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 840px;
  color: #0d1f3c;
  padding: 0px 25px;
  padding-top: 40px;
`;

const HelloHeader = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Hello = styled.p`
  color: #ada4a5;
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const Name = styled.p`
  color: #1d1617;
  font-size: 26px;
  font-weight: 900;
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: 800;
  margin-top: 30px;
`;
