import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './PerfComparison.module.css';

const PerfComparison = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Erm...?</Heading>
			<div>
		        <List className="horizontalLists" style={{margin: '0 0 0 -180px'}}>
		        	<ListItem>
		        		<Text textSize={'36px'} textColor="tertiary">Bundle Size</Text>
		        		<img src={ require('./images/bundle-sizes.png')} 
		        			style={{margin: '0 90px 0 0'}} />
		        	</ListItem>

		        	<ListItem>
		        		<Text textSize={'36px'} textColor="tertiary">Load Time</Text>
		        		<img src={ require('./images/script-parse-time.png')} />
		        	</ListItem>       	
		        </List>
		    </div>

		    <Text textSize={'24px'} textColor="primary">
		    	NOTE: On-screen performance appears to be highly subjective as it depends on what is rendered, how many nodes need updating.
		    </Text>

		    <br />

			<Link href={'https://blog.uncommon.is/the-baseline-costs-of-javascript-frameworks-f768e2865d4a'}>
    			<Text textSize={'28px'} textColor="primary">Ref: Baseline Cost (article)</Text>
    		</Link>
	    </div>
	);
};

export default PerfComparison;