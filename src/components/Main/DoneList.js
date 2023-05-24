import Image from "next/image";
import styled from "styled-components";

export default function DoneList() {
  return (
    <Container>
      <Card>
        <Image
          src={require("../../assets/coffee-cup.png")}
          width={40}
          height={40}
        />
        <CardText>커피를 마셨어요</CardText>
      </Card>
      <Card>
        <Image
          src={require("../../assets/push-up.png")}
          width={40}
          height={40}
        />
        <CardText>푸쉬업을 다 했어요</CardText>
      </Card>
      <Card>
        <Image src={require("../../assets/sleep.png")} width={40} height={40} />
        <CardText>낮잠을 잤어요</CardText>
      </Card>
      <Card>
        <Image
          src={require("../../assets/runner.png")}
          width={40}
          height={40}
        />
        <CardText>달리기를 했어요</CardText>
      </Card>
      <Card>
        <Image src={require("../../assets/heart.png")} width={40} height={40} />
        <CardText>행동을 했어요</CardText>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.03);
  background-color: white;

  @media screen and (max-width: 700px) {
    height: 130px;
    flex-direction: column;
    padding: 5px;
  }
`;

const CardText = styled.p`
  font-size: 1.3rem;
  word-wrap: normal;
  text-align: center;
  margin-left: 12px;

  @media screen and (max-width: 700px) {
    margin-top: 15px;
    font-size: 1.1rem;
  }
`;
