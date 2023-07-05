import Head from "next/head";
import { ReactNode } from "react";

export default function Layouts({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>오누이</title>
        <meta
          property="og:description"
          content="떡 하나 주면 안잡아먹지!"
        ></meta>
      </Head>
      <div>{children}</div>
    </>
  );
}
