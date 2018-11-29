import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const WorthTheTime = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Beware</Heading>
			<img 
				src={ require('./images/xkcd-worth-the-time.png')} 
				style={{margin: '20px 0 20px 0'}} 
			/>

			<Link href={'https://xkcd.com/1205/'}>
				<Text textSize={'20px'} textColor="tertiary">Credit: xkcd -- Is It Worth The Time?</Text>
			</Link>
	    </div>
	);
};

export default WorthTheTime;