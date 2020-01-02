
import * as Craft from '@craftkit/craft-uikit';

import { MyPage } from './MyPage.js';

export class SecondPage extends MyPage {
	constructor(){
		super();
		//this.path = '#/second';
		this.path = 'second';
		this.title = 'Second page';
	}
	viewWillAppear(callback){
		this.viewController.header.large.setMessage('Hello Page2!');
		this.viewController.header.large.setCaption('This is my second page header.');
		this.viewController.header.small.setMessage('Hello Page2!');
		this.viewController.header.navi.markSecond();
		if( callback ){ callback(); }
	}
	template(self){
		return `
			<div class="root">
				<div class="dummy1">I am SecondPage.</div>
				<div class="dummy2"></div>
				${[...Array(40)].map( () => `
					<div class="dummy1"></div>
					<div class="dummy2"></div>
				`).join('')}
			</div>
		`;
	}
}
