import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export default function Status() {
  return (
    <Container
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.15 }}
    >
      <Card whileTap={{ scale: 0.95 }}>
        <Image
          src={require("../../assets/brainfog.png")}
          alt="coffee"
          width={40}
          height={40}
        />
        <CardText>브레인포그</CardText>
      </Card>
      <Card whileTap={{ scale: 0.95 }}>
        <Image
          src={require("../../assets/zzzz.png")}
          alt="runner"
          width={40}
          height={40}
        />
        <CardText>잠</CardText>
      </Card>
      <Card whileTap={{ scale: 0.95 }}>
        <Image
          src={require("../../assets/depress.png")}
          alt="pushup"
          width={40}
          height={40}
        />
        <CardText>우울</CardText>
      </Card>
      <Card whileTap={{ scale: 0.95 }}>
        <Image
          src={require("../../assets/eye.png")}
          alt="sleep"
          width={40}
          height={40}
        />
        <CardText>시야</CardText>
      </Card>
      <Card whileTap={{ scale: 0.95 }}>
        <Image
          src={require("../../assets/eye.png")}
          alt="sleep"
          width={40}
          height={40}
        />
        <CardText>시야</CardText>
      </Card>
      <Card whileTap={{ scale: 0.95 }}>
        <Image
          src={require("../../assets/eye.png")}
          alt="sleep"
          width={40}
          height={40}
        />
        <CardText>시야</CardText>
      </Card>
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
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
    height: 100px;
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
