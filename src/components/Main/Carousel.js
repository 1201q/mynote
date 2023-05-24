import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

export default function Carousel() {
  const [pillArr, setPillArr] = useState(["아침약", "취침약", "영양제"]);
  const [pillTFArr, setPillTFArr] = useState([false, false, false]);

  const handleCardClick = (idx) => {
    const updatedPillArr = [...pillTFArr];
    updatedPillArr[idx] = !updatedPillArr[idx];
    setPillTFArr(updatedPillArr);
  };

  return (
    <Conatiner>
      {pillArr.map((item, idx) => (
        <Card
          key={idx}
          onClick={() => {
            handleCardClick(idx);
          }}
        >
          {pillTFArr[idx] === true && (
            <Image
              src={require("../../assets/check.svg")}
              alt="check"
              width={35}
              height={35}
            />
          )}
          <CardWrapper styledopacity={pillTFArr[idx] === false ? 1 : 0.3}>
            <SmallText>{item}</SmallText>
            <BigText>아직 안먹었어요</BigText>
          </CardWrapper>
        </Card>
      ))}
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
  cursor: pointer;

  @media screen and (max-width: 430px) {
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
      background-color: transparent;
    }
  }
`;
const Card = styled.div`
  position: relative;
  min-width: 200px;
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  padding: 30px 20px;
  margin-right: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.03);

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${(props) => props.styledopacity};
`;
const SmallText = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  color: #c5c5cd;
`;
const BigText = styled.div`
  font-size: 20px;
  font-weight: 800;
`;
