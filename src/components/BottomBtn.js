import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const BottomBtn = ({}) => {
  return (
    <Container
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Wrapper>
        <Btn whileTap={{ scale: 0.95 }}>저장</Btn>
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  max-width: 840px;
  height: 55px;
  position: fixed;
  bottom: 0px;
  border: none;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 18px;
`;

const Btn = styled(motion.button)`
  width: 100%;
  height: 100%;
  background-color: #3182f6;
  border: none;
  border-radius: 16px;

  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
`;

export default BottomBtn;
