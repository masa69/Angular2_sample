/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
	selector: 'my-app'
})
@View({
	templateUrl: 'templates/app.html'
})
// Component controller
class MyAppComponent
{
	title: string;

	constructor() {
		this.title = 'masa69';
	}
}

bootstrap(MyAppComponent);