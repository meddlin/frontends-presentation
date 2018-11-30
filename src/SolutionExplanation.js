import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './SolutionExplanation.module.css';

const SolutionExplanation = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">A Solution -- "buildchains"</Heading>

			<div className="horizontalLists" >
				<div >
					<Link href={'https://github.com/facebook/create-react-app'}>
						<Text textSize={'36px'} textColor="tertiary">create-react-app</Text>
					</Link>
					<List>
						<ListItem textSize={'32px'} textColor="primary">npm</ListItem>
						<ListItem textSize={'32px'} textColor="primary">JSX, ES6, (TypeScript)</ListItem>
						<ListItem textSize={'32px'} textColor="primary">Autoprefixed CSS</ListItem>
						<ListItem textSize={'32px'} textColor="primary">(opt.) preprocessors</ListItem>
						<ListItem textSize={'32px'} textColor="primary">unit test runner</ListItem>
						<ListItem textSize={'32px'} textColor="primary">webpack configuration</ListItem>
						<ListItem textSize={'32px'} textColor="primary">+ PWA service worker</ListItem>
					</List>
				</div>

				<div>
					<Link href={'https://cli.angular.io/'}>
						<Text textSize={'36px'} textColor="tertiary">angular-cli</Text>
					</Link>
					<List>
						<ListItem textSize={'32px'} textColor="primary">npm</ListItem>
						<ListItem textSize={'32px'} textColor="primary">TypeScript + ES6/7</ListItem>
						<ListItem textSize={'32px'} textColor="primary">(opt.) CSS preprocessors</ListItem>
						<ListItem textSize={'32px'} textColor="primary">Karma unit test runner</ListItem>
						<ListItem textSize={'32px'} textColor="primary">webpack configuration</ListItem>
						<ListItem textSize={'32px'} textColor="primary">+ CLI for code generation</ListItem>
						<ListItem textSize={'32px'} textColor="primary">+ router</ListItem>
						<ListItem textSize={'32px'} textColor="primary">+ PWA service worker</ListItem>
					</List>
				</div>

				<div>
					<Link href={'https://cli.vuejs.org/'}>
						<Text textSize={'36px'} textColor="tertiary">vue-cli</Text>
					</Link>
					<List>
						<ListItem textSize={'32px'} textColor="primary">npm</ListItem>
						<ListItem textSize={'32px'} textColor="primary">TypeScript + ES6/7</ListItem>
						<ListItem textSize={'32px'} textColor="primary">(opt.) CSS preprocessors</ListItem>
						<ListItem textSize={'32px'} textColor="primary">unit test runner</ListItem>
						<ListItem textSize={'32px'} textColor="primary">webpack configuration</ListItem>
						<ListItem textSize={'32px'} textColor="primary">"advanced" webpack*</ListItem>
						<ListItem textSize={'32px'} textColor="primary">+ CLI code generation</ListItem>
						<ListItem textSize={'32px'} textColor="primary">+ PWA service worker</ListItem>
					</List>
				</div>
			</div>

			<Text textSize={'24px'} textColor="tertiary">* "Advanced" webpack features, i.e. code splitting, tree-shaking</Text>
	    </div>
	);
};

export default SolutionExplanation;