import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export default function DoneList() {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <TextArea placeholder="오늘 한 일을 입력해보세요."></TextArea>
      <GridWrapper>
        <Card whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../../assets/coffee-cup.png")}
            alt="coffee"
            width={40}
            height={40}
          />
          <CardText>커피를 마셨어요</CardText>
        </Card>
        <Card whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../../assets/push-up.png")}
            alt="pushup"
            width={40}
            height={40}
          />
          <CardText>푸쉬업을 다 했어요</CardText>
        </Card>
        <Card whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../../assets/sleep.png")}
            alt="sleep"
            width={40}
            height={40}
          />
          <CardText>낮잠을 잤어요</CardText>
        </Card>
        <Card whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../../assets/runner.png")}
            alt="runner"
            width={40}
            height={40}
          />
          <CardText>달리기를 했어요</CardText>
        </Card>
        <Card whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../../assets/heart.png")}
            alt="heart"
            width={40}
            height={40}
          />
          <CardText>행동을 했어요</CardText>
        </Card>
      </GridWrapper>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100%;
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 20px;
  background-color: #ecf1f8;
  color: #404245;
  font-size: 20px;
  font-weight: 600;
  overflow-y: auto;
  resize: vertical;

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::placeholder {
    color: #a5adb9;
    font-weight: 500;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.03);
  background-color: white;

  @media screen and (max-width: 700px) {
    height: 130px;
    flex-direction: column;
    padding: 5px;
  }
`;

const CardText = styled.p`
  font-size: 1.3rem;
  word-wrap: normal;
  text-align: center;

  @media screen and (min-width: 699px) {
    margin-left: 12px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 15px;
    font-size: 1.1rem;
  }
`;
