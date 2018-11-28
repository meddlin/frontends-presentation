import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './FurtherReading.module.css';

const FurtherReading = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Further Reading</Heading>
			<div className="horizontalLists">
		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Docs</Text>
		        	<ListItem>
		        		<Link href={'https://reactjs.org/docs/getting-started.html'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">React (v16.x)</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://angular.io/docs'}>
		        		<Text 
		        			textSize={'28px'}
		        		 	textColor="primary">Angular (v7)</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://vuejs.org/v2/guide/'}>
		        			<Text textSize={'28px'} textColor="primary">Vue (v2)</Text>
		        		</Link>
		        	</ListItem>	        	
		        </List>

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">CLIs</Text>
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

		        <List>
		        	<Text textSize={'36px'} textColor="tertiary">Roadmaps</Text>
		        	<ListItem>
		        		<Link href={'https://reactjs.org/blog/2018/11/27/react-16-roadmap.html'}>
		        			<Text textSize={'28px'} textColor="primary">React</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://www.google.com/search?q=angular+roadmap&ie=utf-8&oe=utf-8&client=firefox-b-1-ab'}>
		        			<Text textSize={'28px'} textColor="primary">Angular -- uhh, Google?</Text>
		        		</Link>
		        	</ListItem>
		        	<ListItem>
		        		<Link href={'https://github.com/vuejs/roadmap'}>
		        			<Text textSize={'28px'} textColor="primary">Vue</Text>
		        		</Link>
		        	</ListItem>
		        </List>
		    </div>
		    <List>
	        	<ListItem>
	        		<Text textSize={'28px'} textColor="primary">Slide Deck</Text>
	        		<Link href={'https://github.com/meddlin/frontends-presentation'}>
	        			<Text textSize={'28px'} textColor="primary">https://github.com/meddlin/frontends-presentation</Text>
	        		</Link>
	        	</ListItem>
	        </List>
	    </div>
	);
};

export default FurtherReading;