import "@/styles/globals.css";
import Head from "next/head";
import NavBar from "@/components/navbar/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="img/32x32.png" />
        <link rel="icon" type="image/x-icon" href="img/16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bax soluciones" />
        <meta name="copyright" content="Bax" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
