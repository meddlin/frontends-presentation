import React from 'react';
import { Heading, Text } from 'spectacle';
import styles from './Slide02Titles.module.css';

const Slide02Titles = () => {
	return (
		<div className="horizontalWrapper">
	        <div>
		        <Heading size={2} textColor="primary">Angular</Heading>
		        <img src={ require('./images/angular-380px-transp.png')} style={{margin: '22px 0 0 0'}} />
		        <Text size={1} textColor="primary">angular-cli</Text>
	        </div>

	        <div>
		        <Heading size={2} textColor="primary">React</Heading>
		        <img src={ require('./images/react-400px-transp.png')} />
		        <Text size={1} textColor="primary">create-react-app</Text>
	        </div>

	        <div>
		        <Heading size={2} textColor="primary">Vue</Heading>
		        <img src={ require('./images/vue-400px-transp.png')} />
		        <Text size={1} textColor="primary">vue-cli</Text>
	        </div>
	    </div>
	);
};

export default Slide02Titles;