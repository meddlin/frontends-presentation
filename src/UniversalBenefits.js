import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const UniversalBenefits = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Common benefits from any of these frameworks/tools</Heading>
			<div className="horizontalLists">
		        <List>
		        	<ListItem textColor="primary">Component-based front-end code</ListItem>
		        	<ListItem textColor="primary">ES6/7 and/or TypeScript</ListItem>
		        	<ListItem textColor="primary">Front-end unit testing</ListItem>
		        	<ListItem textColor="primary">Advanced dev-time tooling via CLI</ListItem>
		        	<ListItem textColor="primary">Lazy-loading</ListItem>
		        	<ListItem textColor="primary">SEO-capable</ListItem>
		        	<ListItem textColor="primary">Server-side Rendering</ListItem>
		        	<ListItem textColor="primary">PWA-capable</ListItem>
		        </List>
		    </div>
	    </div>
	);
};

export default UniversalBenefits;