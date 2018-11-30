import React from 'react';
import { 
	Heading,
	Link,
	Text,
	List,
	ListItem,
	CodePane
} from 'spectacle';

const CoolBonusVue = () => {
	return (
		<div>
			<Heading size={4} textColor="primary">Cool Stuff</Heading>
			<div className="horizontalLists">
				<div>
			        <Text textSize={'36px'} textColor="tertiary">.NET Core Starters</Text>
			        <List>
						<ListItem>
							<Link href="https://github.com/MarkPieszak/aspnetcore-angular2-universal">
								<Text textSize={'30px'} textColor="primary">Angular + .NET Core</Text>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://github.com/MarkPieszak/aspnetcore-Vue-starter">
								<Text textSize={'30px'} textColor="primary">Vue Starter + .NET Core</Text>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.1&tabs=visual-studio">
								<CodePane source={`dotnet new react`} theme="light" textSize={'30px'} />
							</Link>
						</ListItem>
			        </List>
		        </div>

		        <div>
			        <Text textSize={'36px'} textColor="tertiary">More Possibilities</Text>
			        <List>
						<ListItem>			        
							<Link href="https://nextjs.org/">
								<Text textSize={'30px'} textColor="primary">Next.js -- Static & SSR</Text>
							</Link>
						</ListItem>
						<ListItem>						
							<Link href="https://scotch.io/tutorials/creating-vue-apps-with-the-vue-ui-tool">
								<Text textSize={'30px'} textColor="primary">vue-cli 3 GUI -- Manage projects w/ built-in GUI</Text>
							</Link>
						</ListItem>
						<ListItem>						
							<Link href="https://material.angular.io/">
								<Text textSize={'30px'} textColor="primary">Angular Material -- Modern, re-usable components</Text>
							</Link>
						</ListItem>
						<ListItem>
							<Text textSize={'30px'} textColor="primary">VS Code Extensions => 
								<Link 
									href="https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials" 
									textColor="primary"> Angular</Link> | 
								<Link 
									href="https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack"
									textColor="primary"> React</Link> | 
								<Link
									href="https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack"
									textColor="primary"> Vue</Link>
							</Text>							
						</ListItem>
			        </List>
		        </div>
		    </div>
	    </div>
	);
};

export default CoolBonusVue;