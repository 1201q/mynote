import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { getSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const uuid = session?.user.uuid;

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  try {
    const res = await axios.get(`http://localhost:3000/api/medi?uuid=${uuid}`);
    const mediData = res.data;
    return { props: { mediData } };
  } catch (error) {
    return { props: { data: null } };
  }
}

const Medication = ({ mediData }) => {
  return (
    <Container>
      <Header>약 설정</Header>
      <Wrapper
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.46 }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {mediData.result.map((data, idx) => (
          <>
            <InputHeader>
              <InputHeaderText>{idx + 1}</InputHeaderText>
            </InputHeader>
            <Input
              required
              type="text"
              name={idx}
              value={dataArr[idx].medication_name}
              onChange={onChange}
              placeholder={data.medication_name}
            />
          </>
        ))}
        {/* submit 버튼 */}
        <SubmitBtnContainer>
          <Input type="submit" value="저장" whileTap={{ scale: 0.95 }} />
        </SubmitBtnContainer>
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
  background-color: #faffff;
`;

const Wrapper = styled(motion.form)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 70vh;
  overflow-y: scroll;
  max-width: 840px;
  z-index: 1;
  display: flex;
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

const Input = styled(motion.input)`
  border: none;
  border-radius: 16px;
  outline: none;
  width: 100%;
  height: 56px;
  padding: 15px 20px;
  margin-bottom: 20px;
  background-color: #ecf1f8;
  color: #404245;
  font-size: 18px;
  font-weight: 600;

  ::placeholder {
    color: #a5adb9;
    font-weight: 500;
  }

  ${({ type }) =>
    type === "submit" &&
    css`
      height: 55px;
      margin-bottom: 0px;
      background-color: #3182f6;
      border-radius: 16px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 800;
      color: white;
    `};
`;

const SubmitBtnContainer = styled(motion.div)`
  width: 100%;
  max-width: 840px;
  position: fixed;
  bottom: 15px;
  padding: 0px 20px;
`;

const InputHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const InputHeaderText = styled.p`
  width: fit-content;
  white-space: pre;
  text-align: start;
  margin-bottom: 7px;
  color: #c5c5cd;
  font-size: 17px;
  font-weight: 700;
`;

export default Medication;
