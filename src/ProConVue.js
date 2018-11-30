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
			<Heading size={4} textColor="primary">Pro / Con | Vue</Heading>
			<div className="horizontalLists">
		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Pros</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Well-written documentation</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Angular (v7)</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Vue (v2)</Text>
		        	</ListItem>	        	
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Cons</Text>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">Smaller community support</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">angular-cli (v7.1.x)</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text textSize={'28px'} textColor="primary">vue-cli (v3)</Text>
		        	</ListItem>	        	
		        </List>
		    </div>
	    </div>
	);
};

export default ProConVue;