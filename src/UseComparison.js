import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import './UseComparison.module.css';

const UseComparison = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Usage Compared</Heading>
			
			<div class="centered">
				<Link href={'https://2018.stateofjs.com/front-end-frameworks/overview/'}>
				<img 
					src={ require('./images/frontend-use-comparison_resize-1100px.png')} 
					style={{margin: '20px 0 20px 0'}} 
				/>
				</Link>

				<Link href={'https://2018.stateofjs.com/front-end-frameworks/overview/'}>
					<Text textSize={'20px'} textColor="tertiary">Credit: State of JS, 2018 Survey</Text>
				</Link>
			</div>
	    </div>
	);
};

export default UseComparison;