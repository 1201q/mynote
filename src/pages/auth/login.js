import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { getSession, signIn, useSession } from "next-auth/react";

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/main",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user || null,
    },
  };
}

const Login = ({ user }) => {
  const router = useRouter();

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     router.replace("/main");
  //   } else {
  //     router.replace("/auth/login");
  //   }
  // }, [user]);

  useEffect(() => {
    if (errorText) {
      setTimeout(() => {
        setErrorText(null);
      }, 2000);
    }
  }, [errorText]);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "userid") {
      setUserid(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const login = async (e) => {
    e.preventDefault();

    const response = await signIn("mynote", {
      userid,
      password,
      redirect: false,
    });

    if (!response.ok) {
      setErrorText("로그인 할 수 없어요. 다시 시도해주세요.");
    }

    if (response?.ok) {
      router.replace("/main");
    }
  };

  return (
    <Container>
      <Header>로그인</Header>
      <Form
        onSubmit={(e) => login(e)}
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
          value={userid}
          name="userid"
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
          <Input type="submit" value="로그인" whileTap={{ scale: 0.95 }} />
        </SubmitBtnContainer>

        <Link href="/auth/signup">
          <Signup>회원가입</Signup>
        </Link>
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
  align-items: center;
  justify-content: flex-start;
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

const Signup = styled.p`
  font-size: 20px;
  margin-top: 50px;
  color: #c5c5cd;
  cursor: pointer;
`;

export default Login;
