import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    if (errorText) {
      setTimeout(() => {
        setErrorText(null);
      }, 2000);
    }
  }, [errorText]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setId(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "pwConfirm") {
      setPasswordConfirm(value);
    }
  };

  const signup = async () => {
    const URL =
      process.env.NODE_ENV === "production"
        ? "https://mynote-gilt.vercel.app/api/signup"
        : "http://localhost:3000/api/signup";
    axios
      .get(URL, {
        params: {
          id: id,
          pw: password,
          email: email,
          name: displayName,
        },
      })
      .then((response) => {
        // 회원가입 완료
        //로직
      })
      .catch((error) => {
        // 에러
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setErrorText(error.response.data.error);
        } else {
          setErrorText(error.message);
        }
      });
  };

  return (
    <Container>
      <Header>회원가입</Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          if (password === passwordConfirm) {
            signup();
          } else {
            setErrorText("확인 비밀번호가 서로 동일해야해요.");
          }
        }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.46 }}
      >
        {/* 아이디 */}
        <InputHeader>
          <InputHeaderText>아이디</InputHeaderText>
        </InputHeader>
        <Input
          required
          type="text"
          value={id}
          name="id"
          onChange={onChange}
          placeholder="아이디를 입력하세요."
        />

        {/* 비밀번호 */}
        <InputHeader>
          <InputHeaderText>비밀번호</InputHeaderText>
        </InputHeader>
        <Input
          required
          type="password"
          value={password}
          name="password"
          onChange={onChange}
          placeholder="비밀번호를 입력하세요."
        />

        {/* 비밀번호 재확인 */}
        <InputHeader>
          <InputHeaderText>비멀번호 재확인</InputHeaderText>
          {password !== "" && passwordConfirm !== "" && (
            <IsPWSame
              styledcolor={password === passwordConfirm ? "#2BC48A" : "#F7595D"}
            >
              <Image
                src={
                  password === passwordConfirm
                    ? require("../assets/green-exclamation.svg")
                    : require("../assets/red-exclamation.svg")
                }
                alt="exclamation"
                width={15}
                height={15}
                style={{
                  marginTop: "1px",
                  marginRight: "5px",
                }}
              />
              {password === passwordConfirm
                ? "비밀번호가 동일해요."
                : "비밀번호가 틀려요."}
            </IsPWSame>
          )}
        </InputHeader>
        <Input
          required
          type="password"
          value={passwordConfirm}
          name="pwConfirm"
          onChange={onChange}
          placeholder="비밀번호를 다시 입력하세요."
        />

        {/* 이름 */}
        <InputHeader>
          <InputHeaderText>이름</InputHeaderText>
        </InputHeader>
        <Input
          required
          type="text"
          value={displayName}
          name="displayName"
          onChange={onChange}
          placeholder="나의 이름을 입력하세요."
        />

        {/* 이메일 */}
        <InputHeader>
          <InputHeaderText>이메일</InputHeaderText>
        </InputHeader>
        <Input
          required
          type="email"
          value={email}
          name="email"
          onChange={onChange}
          placeholder="이메일을 입력하세요."
        />

        {/* 에러시 에러코드 출력 */}
        {errorText && (
          <Popup
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p>{errorText}</p>
          </Popup>
        )}

        {/* submit 버튼 */}
        <SubmitBtnContainer>
          <Input type="submit" value="회원가입" whileTap={{ scale: 0.95 }} />
        </SubmitBtnContainer>
      </Form>
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

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
  font-size: 40px;
  font-weight: 700;
  color: #2c2d49;
`;

const Form = styled(motion.form)`
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

const IsPWSame = styled.p`
  display: flex;
  width: 100%;
  text-align: start;
  margin-left: 20px;
  margin-top: 1px;
  color: ${(props) => props.styledcolor};
  font-size: 15px;
  font-weight: 700;
`;

const Popup = styled(motion.div)`
  position: fixed;
  bottom: 90px;
  background-color: #f7595d;
  color: white;
  font-weight: 700;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  padding: 10px 20px;
  border-radius: 10px;
`;

export default Login;
