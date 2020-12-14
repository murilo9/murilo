import * as React from 'react';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
import Header from '../components/Header';
import Footer from '../components/Footer';
class IndexPage extends React.Component {
  render() {
    return (
      <main>
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
