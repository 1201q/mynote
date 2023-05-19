import { useState } from "react";
import styled from "styled-components";

export async function getServerSideProps() {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://mynote-gilt.vercel.app/api/test"
      : "http://localhost:3000/api/test";

  const response = await fetch(url);
  const data = await response.json();

  return { props: { data } };
}

export default function testpage({ data }) {
  const newurl =
    process.env.NODE_ENV === "production"
      ? "https://mynote-gilt.vercel.app/api/newdata"
      : "http://localhost:3000/api/newdata";

  const [number, setNumber] = useState(0);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    const data = {
      id: number,
      name: user,
      email: email,
    };

    fetch("/api/newdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    if (name === "number") {
      setNumber(value);
    } else if (name === "user") {
      setUser(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return (
    <Container>
      <Wrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input
            type="number"
            onChange={onChange}
            name="number"
            value={number}
          />
          <input type="text" onChange={onChange} name="user" value={user} />
          <input type="text" onChange={onChange} name="email" value={email} />
          <input type="submit" />
        </form>
        {data.map((item) => (
          <Board key={item.id}>
            <Header>{item.name}</Header>
            <User>{item.email}</User>
          </Board>
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Board = styled.div`
  display: flex;
  width: 100%;
  color: black;
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid black;
`;

const Header = styled.div`
  width: 70%;
`;
const User = styled.div`
  width: 30%;
`;
