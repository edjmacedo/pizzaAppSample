import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/_App/Layout";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
