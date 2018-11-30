import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const CoolBonusVue = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Cool Stuff: Angular</Heading>
			<div className="horizontalLists">
		        <List>
		        	<ListItem textColor="primary">Testing built-in from the start</ListItem>
		        	<ListItem textColor="primary">Integrated Angular Material</ListItem>
		        	{/*https://blog.angular.io/version-7-of-angular-cli-prompts-virtual-scroll-drag-and-drop-and-more-c594e22e7b8c*/}
		        	
		        	<ListItem textColor="primary">**No 'eject' => ngx-build-plus allows editing config</ListItem>
		        	{/*https://blog.ninja-squad.com/2018/10/19/angular-cli-7.0/*/}
		        	{/*https://github.com/manfredsteyer/ngx-build-plus*/}

		        	<ListItem textColor="primary">CLI prompts</ListItem>
		        	{/*https://medium.com/@urish/cli-prompts-my-favorite-feature-in-angular-7-a41bc5c9e806*/}
		        </List>
		    </div>
	    </div>
	);
};

export default CoolBonusVue;