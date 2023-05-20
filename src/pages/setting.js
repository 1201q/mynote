import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Setting = () => {
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <HeaderContainer>
          <HeaderButton onClick={() => router.back()}>
            <Image
              src={require("../assets/angle-left.svg")}
              alt="arrow"
              width={12}
              height={12}
            />
          </HeaderButton>

          <HeaderText>설정</HeaderText>
        </HeaderContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 840px;
  color: #0d1f3c;
  padding: 0px 25px;
  padding-top: 30px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 32px;
  margin-bottom: 30px;
`;

const HeaderText = styled.p`
  color: #1d1617;
  font-size: 22px;
  font-weight: 900;
  text-align: center;
`;

const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 32px;
  height: 32px;
  border: none;
  background-color: #f7f8f8;
  color: #1d1617;
  border-radius: 8px;
  cursor: pointer;
`;

export default Setting;
