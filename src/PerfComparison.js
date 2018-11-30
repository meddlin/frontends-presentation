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
			<Heading size={4} textColor="primary">Uhmm...?</Heading>
			<div>
		        <List className="horizontalLists">
		        	<ListItem>
		        		<Text textSize={'36px'} textColor="tertiary">Bundle Size</Text>
		        		<img src={ require('./images/bundle-sizes.png')} 
		        			style={{margin: '0 90px 0 0'}} />
		        	</ListItem>

		        	<ListItem>
		        		<Text textSize={'36px'} textColor="tertiary">"Parse" Time</Text>
		        		<img src={ require('./images/script-parse-time.png')} />
		        	</ListItem>       	
		        </List>
		    </div>

		    <Text textSize={'24px'} textColor="primary">
		    	NOTE: "Load time" would be a function of download size + "parsing" + render time.
		    </Text>

		    <br />

			<Link href={'https://blog.uncommon.is/the-baseline-costs-of-javascript-frameworks-f768e2865d4a'}>
    			<Text textSize={'28px'} textColor="primary">Ref: Baseline Cost (article)</Text>
    		</Link>
	    </div>
	);
};

export default PerfComparison;