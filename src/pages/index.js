/* eslint-disable max-len */
import * as React from 'react';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet';
class IndexPage extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>
            Murilo Henrique | Desenvolvedor Web Fullstack
          </title>
          <meta name="author" content="Murilo Henrique"></meta>
          <meta name="keywords" content="Murilo Henrique, desenvolvedor web, fullstack, programador, front-end, javascript"></meta>
          <meta name="description" content="Desenvolvedor Web Fullstack JavaScript"></meta>
        </Helmet>
        <Landing />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Header />
        <Footer />
      </main>
    );
  }
}

export default IndexPage;
