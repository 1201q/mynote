import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Home({ user }) {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/main");
    } else {
      router.push("/auth/login");
    }
  }, [user]);

  return <Container></Container>;
}

const Container = styled.div`
  background-color: white;
  height: 100vh;
`;
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  return {
    props: {
      user: session?.user || null,
    },
  };
}
