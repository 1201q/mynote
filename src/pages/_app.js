import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>mynote | 나의노트</title>
          <link rel="manifest" href="/manifest.json" />
        </Head>

        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
