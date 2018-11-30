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
			<Heading size={4} textColor="primary">Honorable Mentions: Vue</Heading>
			<div className="horizontalLists">
		        <List>
		        	<ListItem textColor="primary">vue-cli 3 => configuration w/o "ejecting"</ListItem>
		        	{/*https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb*/}
		        	<ListItem textColor="primary">Plugin Architecture</ListItem>
		        	{/*https://medium.com/vue-mastery/5-vue-cli-3-plugins-for-your-vue-project-df5af357d076*/}
		        	<ListItem textColor="primary">Project/plugin management GUI</ListItem>
		        	{/*https://medium.com/the-vue-point/vue-cli-3-0-is-here-c42bebe28fbb*/}
		        </List>
		    </div>
	    </div>
	);
};

export default CoolBonusVue;