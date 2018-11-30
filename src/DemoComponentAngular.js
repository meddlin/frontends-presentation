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
			<List className="horizontalLists" style={{margin: '0 0 0 -180px'}}>
		        	<ListItem>
		        		<Text textSize={'24px'} textColor="tertiary">heroes.component.html</Text>
		        		<CodePane source={`<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<app-hero-detail [hero]="selectedHero"></app-hero-detail>`} lang="html" theme="dark" />
		        	</ListItem>

		        	<ListItem style={{margin: '0 30px 0 30px'}}>
		        		<Text textSize={'24px'} textColor="tertiary">heroes.component.ts</Text>
		        		<CodePane source={`import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}`} lang="ts" theme="dark" />
		        	</ListItem>

		        	<ListItem style={{width: '10em'}}>
		        		<List>
		        			<Text textSize={'24px'} textColor="primary">All Inclusive</Text>
			        		<Text textSize={'24px'} textColor="primary">- heroes.component.html</Text>
			        		<Text textSize={'24px'} textColor="primary">- heroes.component.ts</Text>
			        		<Text textSize={'24px'} textColor="primary">- heroes.component.scss</Text>
			        		<Text textSize={'24px'} textColor="primary">- data model (./hero.ts)</Text>
			        		<Text textSize={'24px'} textColor="primary">- services (./hero.service.ts)</Text>
		        		</List>
		        	</ListItem>
		        </List>
	    </div>
	);
};

export default ProConAngular;