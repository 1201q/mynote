import styled from "styled-components";
export default function Carousel() {
  return (
    <Conatiner>
      <Content>1</Content>
      <Content>2</Content>
      <Content>3</Content>
      <Content>4</Content>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-left: 20px;
  padding-right: 10px;
  padding-bottom: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 430px) {
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
      background-color: transparent;
    }
  }
`;

const Content = styled.div`
  min-width: 200px;
  width: 200px;
  height: 100px;

  margin-right: 10px;

  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.07);
`;
