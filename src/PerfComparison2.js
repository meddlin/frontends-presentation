import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem
} from 'spectacle';
import styles from './PerfComparison2.module.css';

const PerfComparison2 = () => {
	return (
		<div>
		{/*https://medium.com/@cuelogicTech/angular-vs-react-vs-vue-a-2018-comparison-b1ab3a498ac4*/}
			<Heading size={4} textColor="primary">Specifics!</Heading>
			<Text textSize={'24px'} textColor="primary">
				tl;dr -- React and Vue are *almost* equal. Angular is at least an order of magnitude heavier.
			</Text>


			<Text textSize={'24px'} textColor="primary">
				I left them out on purpose...
			</Text>
			<List>
				<ListItem textColor="primary">Bundle Size</ListItem>
				<ListItem textColor="primary">Benchmarks</ListItem>
			</List>

			
	    </div>
	);
};

export default PerfComparison2;