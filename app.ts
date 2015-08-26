/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

class Messages
{
	// private first: string;
	test: string;

	constructor()
	{
		this.test = 'success';
	}

	get()
	{
		return this.test;
	}
}

class SampleLists
{
	// private first: string;
	item: Array<string>;

	constructor()
	{
		this.item = ['one', 'two', 'three', 'four', 'five'];
	}
}

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	template: `
		<h1>{{ title }}</h1>
		<p>{{ mes }}</p>
		<ul>
			<li *ng-for="#list of lists">{{ list }}</li>
		</ul>
	`,
	directives: [NgFor]
})

// Component controller
class MyAppComponent
{
	title : string;
	mes   : string;
	lists : Array<string>;

	constructor(message: Messages, sampleLists: SampleLists)
	{
		this.title = 'masa69';
		this.mes   = message.get();
		this.lists = sampleLists.item;
	}
}

bootstrap(MyAppComponent, [Messages, SampleLists]);