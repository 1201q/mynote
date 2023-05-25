import styled from "styled-components";
import Image from "next/image";

export default function Sidebar({ setIsSidebarOpen }) {
  return (
    <Container>
      <SidebarOffBtn
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      >
        <Image
          src={require("../assets/angle-left.svg")}
          alt="angleLeft"
          width={18}
          height={18}
        />
      </SidebarOffBtn>

      <MenuContainer>
        <HeaderText style={{ top: "0px" }}>메뉴</HeaderText>
        <Menu style={{ top: "80px" }}>
          <Image
            src={require("../assets/settings.svg")}
            alt="settings"
            width={23}
            height={23}
          />
          <Text>설정</Text>
        </Menu>
        <Menu style={{ top: "130px" }}>
          <Image
            src={require("../assets/calendar.svg")}
            alt="calendar"
            width={23}
            height={23}
          />
          <Text>기록</Text>
        </Menu>
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 450px;
`;

const SidebarOffBtn = styled.button`
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: none;
  border: 2px solid #faffff;
  cursor: pointer;
  z-index: 100;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
  position: absolute;

  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  z-index: 800;

  img {
    margin-right: 20px;
  }
`;

const Text = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: #808eb4;
`;

const HeaderText = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 800;
`;
