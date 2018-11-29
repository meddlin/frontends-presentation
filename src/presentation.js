// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  CodePane,
  Layout,
  Fill
} from 'spectacle';
import Slide02Titles from './Slide02Titles';
import FurtherReading from './FurtherReading';
import PerfComparison from './PerfComparison';
import PerfComparison2 from './PerfComparison2';
import ProConAngular from './ProConAngular';
import ProConReact from './ProConReact';
import ProConVue from './ProConVue';
import UniversalBenefits from './UniversalBenefits';
import WorthTheTime from './WorthTheTime';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JS Frontend Frameworks
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Slide02Titles />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Example Angular Component
          </Heading>
          
            <CodePane source={`angular`} lang="jsx" theme="dark" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Example JSX
          </Heading>
          
            <CodePane source={`<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>`} lang="jsx" theme="dark" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Example Vue Component
          </Heading>
          
            <CodePane source={`vue`} lang="jsx" theme="dark" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <ProConAngular />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <ProConReact />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <ProConVue />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <PerfComparison />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <PerfComparison2 />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <UniversalBenefits />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <WorthTheTime />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Layout>
            <Fill>
              <FurtherReading />
            </Fill>
          </Layout>
        </Slide>

      </Deck>
    );
  }
}
