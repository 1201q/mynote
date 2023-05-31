import { auth } from "@/utils/firebase/firebaseClient";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [errorCode, setErrorCode] = useState(null);

  useEffect(() => {
    if (errorCode) {
      setTimeout(() => {
        setErrorCode(null);
      }, 2000);
    }
  }, [errorCode]);

  async function createUser() {
    try {
      if (password === passwordConfirm) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await updateProfile(user, { displayName });
        console.log(user);
        setErrorCode(null);
      } else {
        setErrorCode("password-mismatch");
        console.log("비번 안맞음");
      }
    } catch (error) {
      console.log(error.code);
      setErrorCode(error.code);
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "pw") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    }
  };

  const returnErrorCode = (code) => {
    switch (code) {
      case "auth/user-not-found" || "auth/wrong-password":
        return "이메일 혹은 비밀번호가 일치하지 않아요.";
      case "auth/email-already-in-use":
        return "이미 사용 중인 이메일이에요.";
      case "auth/weak-password":
        return "비밀번호는 6글자 이상으로 해주세요.";
      case "auth/network-request-failed":
        return "네트워크 연결에 실패했어요.";
      case "auth/invalid-email":
        return "잘못된 이메일 형식이에요.";
      case "auth/internal-error":
        return "잘못된 요청이에요.";
      case "password-mismatch":
        return "비밀번호가 틀려요.";
      default:
        return "";
    }
  };

  return (
    <Container>
      <Header>회원가입</Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          createUser();
        }}
      >
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
        <InputHeader>
          <InputHeaderText>비밀번호</InputHeaderText>
        </InputHeader>
        <Input
          required
          type="password"
          value={password}
          name="pw"
          onChange={onChange}
          placeholder="비밀번호를 입력하세요."
        />
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
          name="passwordConfirm"
          onChange={onChange}
          placeholder="비밀번호를 다시 입력하세요."
        />
        {errorCode && (
          <Popup
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <p>{returnErrorCode(errorCode)}</p>
          </Popup>
        )}

        <Input type="submit" value="회원가입" />
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
  height: 100%;
  font-size: 40px;
  font-weight: 700;
  color: #2c2d49;
`;
const Form = styled.form`
  position: relative;
  width: 100%;
  height: min-content;
  max-width: 840px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 20px;
  /* background-color: red; */
`;

const Input = styled.input`
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
      margin-top: 70px;
      background-color: #3182f6;
      border-radius: 16px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 800;
      color: white;
    `};
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
