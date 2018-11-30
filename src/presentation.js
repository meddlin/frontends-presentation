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
import DemoComponentAngular from './DemoComponentAngular';
import DemoComponentReact from './DemoComponentReact';
import DemoComponentVue from './DemoComponentVue';
import FurtherReading from './FurtherReading';
import PerfComparison from './PerfComparison';
import UseComparison from './UseComparison';
import ProConAngular from './ProConAngular';
import ProConReact from './ProConReact';
import ProConVue from './ProConVue';
import CoolBonusAngular from './CoolBonusAngular';
import CoolBonusReact from './CoolBonusReact';
import CoolBonusVue from './CoolBonusVue';
import UniversalBenefits from './UniversalBenefits';
import WorthTheTime from './WorthTheTime';
import ProblemExplanation from './ProblemExplanation';
import SolutionExplanation from './SolutionExplanation';

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
        contentWidth={1500}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar">

      {/* Title */}
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">JS Frontend Frameworks</Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Slide02Titles />
        </Slide>

      {/* Preview */}
        <Slide transition={['fade']} bgColor="secondary" align="flex-start" >
          <DemoComponentAngular />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" align="flex-start">
          <DemoComponentReact />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" align="flex-start">
          <DemoComponentVue />
        </Slide>

      {/* Pro/Con */}
        <Slide transition={['fade']} bgColor="secondary">
          <ProConAngular />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <ProConReact />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <ProConVue />
        </Slide>

      {/* Performance Comparison */}
        <Slide transition={['fade']} bgColor="secondary">
          <PerfComparison />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <UseComparison />
        </Slide>

      {/* Problem */}
        <Slide transition={['fade']} bgColor="secondary">
          <ProblemExplanation />
        </Slide>

      {/* Solution */}
        <Slide transition={['fade']} bgColor="secondary">
          <SolutionExplanation />
        </Slide>

      {/* Cool Stuff */}
        <Slide transition={['fade']} bgColor="secondary">
          <CoolBonusAngular />
        </Slide>
        {/*<Slide transition={['fade']} bgColor="secondary">
          <CoolBonusReact />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <CoolBonusVue />
        </Slide>*/}

      {/* Closing */}
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
