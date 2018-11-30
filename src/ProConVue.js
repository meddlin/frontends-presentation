import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './ProConVue.module.css';

const ProConVue = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Vue</Heading>
			<div className="horizontalLists">
		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Pros</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Well-written documentation</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Fast, easy learning curve</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">1st-party packages for routing, state management</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">DSL is happy medium between React, Angular's</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Use as little or much as you want</Text>
		        	</ListItem>
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Cons</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Community + Resources: it's not React</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Questionable support: it's not React (again)</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">DSL can be questionable</Text>
		        	</ListItem>	        	
		        </List>
		    </div>
	    </div>
	);
};

export default ProConVue;