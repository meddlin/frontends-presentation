import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const CoolBonusReact = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Cool Stuff: React</Heading>
			{/*<div className="horizontalLists"></div>*/}
				<Text textSize={'36px'} textColor="tertiary">Multiple "buildchains"</Text>
		        <List>
		        	<ListItem textColor="primary">Next.js</ListItem>
		        	<ListItem textColor="primary">Gatsby</ListItem>
		        	<ListItem textColor="primary">Razzle</ListItem> {/*https://github.com/jaredpalmer/razzle*/}
		        	{/*https://reactjs.org/docs/create-a-new-react-app.html*/}
		        </List>

		        <List>
		        	<ListItem textColor="primary">nwb - Toolkit for making React npm modules</ListItem>
		        	{/*https://github.com/insin/nwb*/}
		        </List>
		    
	    </div>
	);
};

export default CoolBonusReact;