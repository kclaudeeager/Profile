import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Claude kwizera - Computer Engineer</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="author" content="Claude Kwizera" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a talented Front-End developer with a UI/UX design background." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Claude kwizera - Computer Engineer" />
        <meta property="og:locale" content="KC" />
        <title data-rh="true">Claude kwizera - Computer Engineer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Claude kwizera - Computer Engineer"/>
        <meta data-rh="true" property="og:image" content="/images/Eager.JPG"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;