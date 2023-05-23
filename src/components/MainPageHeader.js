import styled from "styled-components";
import Image from "next/image";

const MainPageHeader = () => {
  return (
    <Container>
      <ProfileBox>
        <Profile>
          <Image
            src={require("../../public/assets/user.svg")}
            width={20}
            height={20}
          />
        </Profile>
        <HelloBox>
          <Hello>안녕하세요.</Hello>
          <Name>황준서님</Name>
        </HelloBox>
      </ProfileBox>
      <BtnBox>
        <Btn>
          <Image
            src={require("../../public/assets/settings.svg")}
            width={17}
            height={17}
          />
        </Btn>
      </BtnBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 42px;
  margin-bottom: 40px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #fed8a5;
  margin-right: 15px;
  /* border-color : white; */
  border: 2px solid white;
`;

const Hello = styled.p`
  color: #b5b9bd;
  font-weight: 600;
  font-size: 14px;
`;

const Name = styled.p`
  font-weight: 800;
  font-size: 23px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #ecf1f8;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;

// box
const HelloBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileBox = styled.div`
  display: flex;
`;

const BtnBox = styled.div``;

export default MainPageHeader;
