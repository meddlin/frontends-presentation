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
			<Heading size={4} textColor="primary">Pro / Con | Angular</Heading>
			<div className="horizontalLists">
		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Pros</Text>
		        	<ListItem>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">React (v16.x)</Text>
		        	</ListItem>
		        	<ListItem>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">Angular (v7)</Text>
		        	</ListItem>
		        	<ListItem>
		        			<Text textSize={'28px'} textColor="primary">Vue (v2)</Text>
		        	</ListItem>	        	
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Cons</Text>
		        	<ListItem>
		        		<Link href={'https://github.com/facebook/create-react-app'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">create-react-app (v2.x)</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://cli.angular.io/'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">angular-cli (v7.1.x)</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://cli.vuejs.org/'}>
		        			<Text textSize={'28px'} textColor="primary">vue-cli (v3)</Text>
		        		</Link>
		        	</ListItem>	        	
		        </List>
		    </div>
	    </div>
	);
};

export default ProConAngular;