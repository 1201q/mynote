import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import axios from "axios";

export default function Home({ user }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (user) {
    return (
      <>
        <button onClick={() => router.push("/main")}>메인</button>
        <button onClick={() => signOut()}>로그아웃</button>
        {user.name} {user.email}
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => signIn()}>로그인</button>
      </>
    );
  }
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  return {
    props: {
      user: session?.user || null,
    },
  };
}
