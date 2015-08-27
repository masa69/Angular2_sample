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
	item  : [string];
	item2 : [{
		id      : string,
		name    : string,
		country : string,
	}];

	constructor()
	{
		this.item  = ['GIN', 'Whiskey', 'Beer', 'Sake', 'Vodka'];
		this.item2 = [
			{
				id      : '1',
				name    : 'Dodos',
				country : 'us'
			},
			{
				id      : '2',
				name    : 'Red Hot Chili Peppers',
				country : 'us'
			},
			{
				id      : '3',
				name    : 'Prodigy',
				country : 'uk'
			},
		];
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
		<h2>Item</h2>
		<ul>
			<li *ng-for="#list of lists">{{ list }}</li>
		</ul>
		<h2>Item2</h2>
		<ul>
			<li *ng-for="#list of lists2">
				id: {{ list.id }}, name: {{ list.name }}, type: {{ list.type }}
			</li>
		</ul>
	`,
	directives: [NgFor]
})

// Component controller
class MyAppComponent
{
	title  : string;
	mes    : string;
	lists  : [string];
	lists2 : [{}];

	constructor(message: Messages, sampleLists: SampleLists)
	{
		this.title  = 'masa69';
		this.mes    = message.get();
		this.lists  = sampleLists.item;
		this.lists2 = sampleLists.item2;
	}
}

bootstrap(MyAppComponent, [Messages, SampleLists]);