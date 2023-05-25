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
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
`;

const SidebarOffBtn = styled.button`
  position: absolute;
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
