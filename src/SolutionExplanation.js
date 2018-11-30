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

			<div className="horizontalLists" style={{margin: '0 -12em'}}>
				<div style={{ margin: '0 -2.5em 0 2em', padding: '0 1em 0 0' }}>
					<Text textSize={'36px'} textColor="tertiary">create-react-app</Text>
					<List>
						<ListItem textSize={'30px'} textColor="primary">npm</ListItem>
						<ListItem textSize={'30px'} textColor="primary">JSX, ES6, (TypeScript)</ListItem>
						<ListItem textSize={'30px'} textColor="primary">Autoprefixed CSS</ListItem>
						<ListItem textSize={'30px'} textColor="primary">(opt.) preprocessors</ListItem>
						<ListItem textSize={'30px'} textColor="primary">unit test runner</ListItem>
						<ListItem textSize={'30px'} textColor="primary">webpack configuration</ListItem>
						<ListItem textSize={'30px'} textColor="primary">+ PWA service worker</ListItem>
					</List>
				</div>

				<div>
					<Text textSize={'36px'} textColor="tertiary">angular-cli</Text>
					<List>
						<ListItem textSize={'30px'} textColor="primary">npm</ListItem>
						<ListItem textSize={'30px'} textColor="primary">TypeScript + ES6/7</ListItem>
						<ListItem textSize={'30px'} textColor="primary">(opt.) CSS preprocessors</ListItem>
						<ListItem textSize={'30px'} textColor="primary">Karma unit test runner</ListItem>
						<ListItem textSize={'30px'} textColor="primary">webpack configuration</ListItem>
						<ListItem textSize={'30px'} textColor="primary">+ CLI for code generation</ListItem>
						<ListItem textSize={'30px'} textColor="primary">+ router</ListItem>
						<ListItem textSize={'30px'} textColor="primary">+ PWA service worker</ListItem>
					</List>
				</div>

				<div style={{ padding: '0 1em 0 0' }}>
					<Text textSize={'36px'} textColor="tertiary">vue-cli</Text>
					<List>
						<ListItem textSize={'30px'} textColor="primary">npm</ListItem>
						<ListItem textSize={'30px'} textColor="primary">TypeScript + ES6/7</ListItem>
						<ListItem textSize={'30px'} textColor="primary">(opt.) CSS preprocessors</ListItem>
						<ListItem textSize={'30px'} textColor="primary">unit test runner</ListItem>
						<ListItem textSize={'30px'} textColor="primary">webpack configuration</ListItem>
						<ListItem textSize={'30px'} textColor="primary">"advanced" webpack*</ListItem>
						<ListItem textSize={'30px'} textColor="primary">+ CLI code generation</ListItem>
						<ListItem textSize={'30px'} textColor="primary">+ PWA service worker</ListItem>
					</List>
				</div>
			</div>

			<Text textSize={'24px'} textColor="tertiary">* "Advanced" webpack features, i.e. code splitting, tree-shaking</Text>
	    </div>
	);
};

export default SolutionExplanation;