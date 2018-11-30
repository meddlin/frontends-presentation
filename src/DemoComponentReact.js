import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem,
	CodePane
} from 'spectacle';
import styles from './DemoComponentReact.module.css';

const ProConReact = () => {
	return (
		<div>
			<Heading size={6} textColor="primary" caps>Preview: React</Heading>
			<List className="horizontalLists" style={{margin: '0 0 0 -180px'}}>
            	<ListItem>
            	<CodePane source={`import React, { Component } from 'react';

import './App.css';

class App extends Component {
  doStuff() {
    console.log('Hellooooo!');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        {/* <!-- Removed for brevity --> */}

          </a>
        </header>
      </div>
    );
  }
}

export default App;`} lang="jsx" theme="dark" />
	    		</ListItem>
				<ListItem style={{width: '10em'}}>
		    		<List>
		    			<Text textSize={'24px'} textColor="primary">"It's only the view!"</Text>
		        		<Text textSize={'24px'} textColor="primary">- JSX is...JS-based components</Text>
		        		<Text textSize={'24px'} textColor="primary">- one-way data flow</Text>
		        		<Text textSize={'24px'} textColor="primary">- React Router</Text>
		        		<Text textSize={'24px'} textColor="primary">- Redux</Text>
		    		</List>
		    	</ListItem>
	    	</List>
	    </div>
	);
};

export default ProConReact;