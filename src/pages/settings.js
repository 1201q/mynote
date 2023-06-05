import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { getSession } from "next-auth/react";
import axios from "axios";

const settings = () => {
  const [setting, setSetting] = useState(false);
  const [donelist, setDoneList] = useState(false);

  return (
    <Container>
      <Header>설정</Header>
      <Wrapper>
        {!setting ? (
          <Card layoutId="r" onClick={() => setSetting(true)}>
            <Text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.21, delay: 0.3 }}
            >
              약 기록
            </Text>
            <Image
              src={require("../assets/angle-small-down.svg")}
              alt="angle-small-down"
              width={30}
              height={30}
            />
          </Card>
        ) : (
          <ExpandedCard layoutId="r" onClick={() => setSetting(false)}>
            <Text>약 기록</Text>
          </ExpandedCard>
        )}
        {!donelist ? (
          <Card layoutId="1" onClick={() => setDoneList(true)}>
            <Text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.21, delay: 0.3 }}
            >
              내가 한 일
            </Text>
            <Image
              src={require("../assets/angle-small-down.svg")}
              alt="angle-small-down"
              width={30}
              height={30}
            />
          </Card>
        ) : (
          <ExpandedCard layoutId="1" onClick={() => setDoneList(false)}>
            <Text>내가 한 일</Text>
          </ExpandedCard>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafaff;
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
  padding: 15px 20px 90px 20px;
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

const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  padding: 0px 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.03);
  color: #747f8c;
  font-weight: 700;
  font-size: 25px;
  cursor: pointer;
  margin-bottom: 20px;

  img {
    cursor: pointer;
  }
`;

const ExpandedCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  padding: 30px 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.03);
  color: #747f8c;
  font-weight: 700;
  font-size: 25px;
  cursor: pointer;
  margin-bottom: 20px;

  img {
    cursor: pointer;
  }
`;

const Text = styled(motion.div)``;

export default settings;
