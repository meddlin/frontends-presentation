import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './ProblemExplanation.module.css';

const ProblemExplanation = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">The Problem</Heading>
			
			<List>
				<Text textSize={'30px'} textColor="tertiary">Sort-of mandatory for buildchain</Text>
				<ListItem textColor="primary">package manager --> npm</ListItem>
				<ListItem textColor="primary">compiler --> Babel</ListItem>
				<ListItem textColor="primary">bundler --> webpack</ListItem>
				<br />
				<Text textSize={'30px'} textColor="tertiary">Extra, but...<em>really</em> nice</Text>
				<ListItem textColor="primary">preprocessors</ListItem>
				<ListItem textColor="primary">unit testing requires a "runner"</ListItem>
				<ListItem textColor="primary">dev server + linting</ListItem>
				<ListItem textColor="primary">auto-reload</ListItem>
			</List>
	    </div>
	);
};

export default ProblemExplanation;