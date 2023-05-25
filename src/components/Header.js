import styled from "styled-components";
import Image from "next/image";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <Container>
      <div onClick={() => setIsSidebarOpen(true)} style={{ cursor: "pointer" }}>
        <Image
          src={require("../assets/menu-burger.svg")}
          alt="menu-burger"
          width={20}
          height={20}
        />
      </div>
      <div>
        <Image
          src={require("../assets/bell.svg")}
          alt="bell"
          width={20}
          height={20}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  margin-bottom: 30px;
`;

export default Header;
