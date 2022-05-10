import { Html, Head, Main, NextScript } from "next/document";

/* This file is responsible for */

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" sizes="10x10" type="image/svg" href="/favicon.svg"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
