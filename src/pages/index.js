import styled from "styled-components";
import Medication from "@/components/Medication";
import Behavior from "@/components/Behavior";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    console.log(expanded);
  }, [expanded]);
  return (
    <Container>
      <Wrapper>
        <HeaderContainer>
          <HelloHeader>
            <Hello>환영해요.</Hello>
            <Name>황준서님</Name>
          </HelloHeader>
          <Link href="/setting">
            <HeaderButton>
              <Image
                src={require("../assets/settings.svg")}
                alt="arrow"
                width={25}
                height={25}
              />
            </HeaderButton>
          </Link>
        </HeaderContainer>
        <Medication />
        <Header>행동 보고</Header>
        <>
          <Behavior
            setExpanded={setExpanded}
            expanded={expanded}
            img={"sun"}
            header={"오전"}
            explain={"기상후 ~ 11:59"}
          />
          <Behavior
            setExpanded={setExpanded}
            expanded={expanded}
            img={"moon"}
            header={"오후"}
            explain={"12:00 ~ 17:59"}
          />
          <Behavior
            setExpanded={setExpanded}
            expanded={expanded}
            img={"zzz"}
            header={"밤"}
            explain={"18:00 ~ 취침전"}
          />
        </>
        <Header>특이사항</Header>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f4f6;
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
  padding-top: 30px;
`;

const HeaderContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const HelloHeader = styled.div`
  width: 100%;
`;

const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border: none;

  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 16px 0px; */
  background: none;
  color: #1d1617;
  border-radius: 8px;
  cursor: pointer;
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
  font-size: 22px;
  font-weight: 800;
  margin-top: 30px;
`;
