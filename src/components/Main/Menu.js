import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export default function Menu({ menuSelect, setMenuSelect }) {
  return (
    <Container>
      <BtnContainer>
        <Btn
          onClick={() => {
            setMenuSelect("donelist");
          }}
          styledcolor={menuSelect === "donelist" ? "#2c2d49" : "#c5c5cd"}
        >
          오늘 한 일
        </Btn>
        <Btn
          onClick={() => {
            setMenuSelect("status");
          }}
          styledcolor={menuSelect === "status" ? "#2c2d49" : "#c5c5cd"}
        >
          상태
        </Btn>
      </BtnContainer>
      <UnderBar select={menuSelect === "status"} />
    </Container>
  );
}
const Container = styled.div``;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;

  padding-bottom: 15px;
`;

const Btn = styled.div`
  width: 100%;
  color: ${(props) => props.styledcolor};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;

const UnderBar = styled.div`
  background-color: #2c2d49;
  height: 1px;
  width: 50%;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => (props.select ? "100%" : "0")});
  margin-bottom: 20px;
`;
