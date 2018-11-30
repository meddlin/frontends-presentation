import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './ProConReact.module.css';

const ProConReact = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">React</Heading>
			<div className="horizontalLists">
		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Pros</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Easy to learn -- "tweaked JS"</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Light-weight by default</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary"><em>High</em> level of flexibility</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Wide community support</Text>
		        	</ListItem>	        	
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Cons</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">JSX "forces" tooling changes</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">State managment is quickly a necessity</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">JSX feels like a harsh change</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Component-specific patterns show up**</Text>
		        	</ListItem>
		        </List>
		    </div>

		    <Text textSize={'20px'} textColor="primary">**Increased difficulty in some areas for: render props, higher-order components, etc.</Text>
	    </div>
	);
};

export default ProConReact;