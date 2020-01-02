
import * as Craft from '@craftkit/craft-uikit';

import { MyPage } from './MyPage.js';

export class FirstPage extends MyPage {
	constructor(){
		super();
		//this.path = '#/first';
		this.path = 'first';
		this.title = 'First page';
	}
	viewWillAppear(callback){
		this.viewController.header.large.setMessage('Hello Page1!');
		this.viewController.header.large.setCaption('This is my first page header.');
		this.viewController.header.small.setMessage('Hello Page1!');
		this.viewController.header.navi.markFirst();
		if( callback ){ callback(); }
	}
	next(){
		this.viewController.open({ page:Craft.Core.Context.MyPageProvider.page('second') });
	}
	template(self){
		return `
			<div class="root">
				<div class="dummy1">I am FirstPage.</div>
				<div class="dummy2" onclick="${self}.next();" style="cursor:pointer;color:blue;">Click here to go SecondPage.</div>
				${[...Array(40)].map( () => `
					<div class="dummy1"></div>
					<div class="dummy2"></div>
				`).join('')}
			</div>
		`;
	}
}
