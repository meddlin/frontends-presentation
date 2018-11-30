import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem,
	CodePane
} from 'spectacle';
import styles from './DemoComponentAngular.module.css';

const ProConAngular = () => {
	return (
		<div>
			<Heading size={6} textColor="primary" caps>Preview: Angular</Heading>
			<List className="horizontalLists" >
				<div>
		        	<ListItem>
		        		<Text textSize={'24px'} textColor="tertiary">heroes.component.html</Text>
		        		<CodePane source={`<h2>My Heroes</h2>
	<ul class="heroes">
	  <li *ngFor="let hero of heroes">
	    <span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>

	<app-hero-detail [hero]="selectedHero"></app-hero-detail>`} lang="html" theme="light" textSize={'17px'} />
		        		<br />
		        		<Text textSize={'24px'} textColor="tertiary">heroes.component.ts</Text>
		        		<CodePane source={`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}`} lang="ts" theme="light" textSize={'17px'} />
		        	</ListItem>
		        </div>

	        	<div>
		        	<ListItem >
		        		<List>
		        			<Text textSize={'24px'} textColor="primary">A framework's framework</Text>
			        		<Text textSize={'24px'} textColor="primary">- Templating...</Text>
			        		<Text textSize={'24px'} textColor="primary">- Routing...</Text>
			        		<Text textSize={'24px'} textColor="primary">- Data-flow...</Text>
			        		<Text textSize={'24px'} textColor="primary">- SSR...</Text>
			        		<Text textSize={'24px'} textColor="primary">- Configurations...</Text>
			        		<Text textSize={'24px'} textColor="primary">It's all here</Text>
		        		</List>
		        	</ListItem>

		        	<ListItem >
		        		<List>
		        			<Text textSize={'24px'} textColor="primary">A "Component"</Text>
			        		<Text textSize={'24px'} textColor="primary">- heroes.component.html</Text>
			        		<Text textSize={'24px'} textColor="primary">- heroes.component.ts</Text>
			        		<Text textSize={'24px'} textColor="primary">- heroes.component.scss</Text>
			        		<Text textSize={'24px'} textColor="primary">+ data model (./hero.ts)</Text>
			        		<Text textSize={'24px'} textColor="primary">+ services (./hero.service.ts)</Text>
		        		</List>
		        	</ListItem>
	        	</div>
	        </List>
	    </div>
	);
};

export default ProConAngular;