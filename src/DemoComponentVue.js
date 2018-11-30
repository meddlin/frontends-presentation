import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem,
	CodePane
} from 'spectacle';
import styles from './DemoComponentVue.module.css';

const ProConVue = () => {
	return (
		<div>
			<Heading size={6} textColor="primary" caps>Preview: Vue</Heading>
      <List className="horizontalLists">
        <ListItem>
          <Text textSize={'24px'} textColor="tertiary">Component.vue</Text>
          <CodePane source={`<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.</p>
    <button v-on:click="doStuff">Do Stuff!</button>

    <!-- Removed for brevity -->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    doStuff() {
      console.log('Hellooooo!');
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>`} lang="html" theme="light" textSize={'17px'} />
            </ListItem>
            <div>
              <ListItem>
                <List>
                    <Text textSize={'24px'} textColor="primary">Progressive framework</Text>
                    <Text textSize={'24px'} textColor="primary">- single- or multi-file components</Text>
                    <Text textSize={'24px'} textColor="primary">- one-way OR two-way data flow</Text>
                    <Text textSize={'24px'} textColor="primary">- "close" to HTML</Text>
                  </List>
                </ListItem>
                <ListItem>
                  <List>
                    <Text textSize={'24px'} textColor="primary">Pieces included, but opt-in</Text>
                    <Text textSize={'24px'} textColor="primary">- Vue-Router</Text>
                    <Text textSize={'24px'} textColor="primary">- Vuex</Text>
                    <Text textSize={'24px'} textColor="primary">- vue-server-renderer</Text>
                </List>
              </ListItem>
            </div>
        </List>
	    </div>
	);
};

export default ProConVue;