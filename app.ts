/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

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

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	template: `
		<h1>{{ title }}</h1>
		<p>{{ mes }}</p>
	`
})

// Component controller
class MyAppComponent
{
	title : string;
	mes   : string;

	constructor(message: Messages)
	{
		this.title = 'masa69';
		this.mes   = message.get()
	}
}

bootstrap(MyAppComponent, [Messages]);