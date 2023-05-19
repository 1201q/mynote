import Image from "next/image";
import styled from "styled-components";

const Behavior = ({ img = sun, header, explain }) => {
  return (
    <Container>
      <Circle>
        <Image
          src={require(`../assets/${img}.png`)}
          alt={img}
          width={30}
          height={30}
        />
      </Circle>
      <Info>
        <div>
          <Header>{header}</Header>
          <Explain>{explain}</Explain>
        </div>
        <Image
          src={require("../assets/right-arrow1.svg")}
          alit="arrow"
          width={35}
          height={35}
        />
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: min-content;
  box-shadow: 0px 10px 40px rgba(29, 22, 23, 0.07);
  border-radius: 16px;
  padding: 20px 20px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-color: rgba(146, 163, 253, 0.12);

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Header = styled.p`
  color: #1d1617;
  font-size: 23px;
  font-weight: 800;
`;
const Explain = styled.p`
  color: #7b6f72;
  font-size: 15px;
  font-weight: 300;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Behavior;
