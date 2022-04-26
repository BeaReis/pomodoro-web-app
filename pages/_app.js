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
          position: relative;
          width: 100vw;
          min-height: 100vh;
        }

        #__next {
          display: flex;
          flex-direction: column;
        }

        main {
          display: flex;
          justify-content: center;
          align-items: center;
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
