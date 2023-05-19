import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const Medication = () => {
  return (
    <Container>
      <Header>오늘 약을 먹었나요?</Header>
      <GridContainer>
        <MedicationCheck whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../assets/sunny.png")}
            alt="sunny"
            width={35}
            height={35}
          />
        </MedicationCheck>
        <MedicationCheck whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../assets/half-moon.png")}
            alt="half-moon"
            width={35}
            height={35}
          />
        </MedicationCheck>
        <MedicationCheck whileTap={{ scale: 0.95 }}>
          <Image
            src={require("../assets/sleeping.png")}
            alt="sleeping"
            width={35}
            height={35}
          />
        </MedicationCheck>
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: min-content;
  background: rgba(146, 163, 253, 0.2);
  border-radius: 22px;
  padding: 20px;
`;

const Header = styled.p`
  margin-bottom: 12px;
  font-size: 17px;
  color: #1d1617;
  font-weight: 800;
`;

const MedicationCheck = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 12px;
  margin-right: 10px;
  padding: 10px;
  color: #7b6f72;
  font-weight: 300;
  cursor: pointer;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export default Medication;
