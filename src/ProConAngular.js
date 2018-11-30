import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './ProConAngular.module.css';

const ProConAngular = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Angular</Heading>
			<div className="horizontalLists">
		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Pros</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Everything included <em>...even the kitchen sink!</em></Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">TypeScript by default</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">MVVM pattern out-of-the-box</Text>
		        	</ListItem>
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Cons</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Feels bloated</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Opinionated project organization</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Waning popularity</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Highest learning curve</Text>
		        	</ListItem>
		        </List>
		    </div>
	    </div>
	);
};

export default ProConAngular;