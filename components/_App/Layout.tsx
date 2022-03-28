import Head from "next/head";
import { Container } from "semantic-ui-react";

import Header from "./Header";

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Pizza APP</title>
      </Head>
      <Header />
      <Container text style={{ paddingTop: "1em" }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
