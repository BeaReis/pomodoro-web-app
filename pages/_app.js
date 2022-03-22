import { createGlobalStyle } from "styled-components";
import scheme from '../public/colors.json';
import Layout from "../src/components/common/layout";

const GlobalStyle = createGlobalStyle`
      
        * {
          background-color: ${scheme.colors.neutrals[100]};
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          color: white;
        }

        /* App fit Height */ 
        html, body, #__next {
          height: 100%;
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
    )
}