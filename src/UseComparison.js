import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';

const UseComparison = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Usage Compared</Heading>
			
			<img 
				src={ require('./images/frontend-use-comparison.png')} 
				style={{margin: '20px 0 20px 0'}} 
			/>

			<Link href={'https://2018.stateofjs.com/front-end-frameworks/overview/'}>
				<Text textSize={'20px'} textColor="tertiary">Credit: State of JS, 2018 Survey</Text>
			</Link>
	    </div>
	);
};

export default UseComparison;