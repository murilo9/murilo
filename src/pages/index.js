import * as React from 'react';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import Portfolio from '../sections/Portfolio';
class IndexPage extends React.Component {
  render() {
    return (
      <main>
        <Landing />
        <About />
        <Services />
        <Skills />
        <Portfolio />
      </main>
    );
  }
}

export default IndexPage;
