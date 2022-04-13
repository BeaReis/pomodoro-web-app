import { createGlobalStyle } from "styled-components";
import scheme from "../public/colors.json";
import Layout from "../src/components/common/layout";

const GlobalStyle = createGlobalStyle`
      
        * {
          background-color: ${scheme.colors.neutrals[100]};
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          color: white;
        }

        div, p {
          background-color: transparent;
        }

        /* App fit Height */ 
        html, body {
          height: 100vh;
          width: 100vw;
        }

        #__next {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        main {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
