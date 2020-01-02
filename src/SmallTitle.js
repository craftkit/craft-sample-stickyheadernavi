
import * as Craft from '@craftkit/craft-uikit';

import { Title } from './Title.js';

export class SmallTitle extends Title {
	viewWillAppear(callback){
		this.appendView(this.viewController.header.navi); // take over navi.view
		if( callback ){ callback(); }
	}
	setMessage(message){
		this.shadow.getElementById("message").innerHTML = message;
	}
	style(componentId){
		return super.style(componentId) + `
			.root { height: 88px; } /* 44+44 */
			h1 { margin:0; padding:0; font-size:22px; line-height: 44px; }
		`;
	}
	template(componentId){
		return `
			<div id="root" class="root">
				<div id="title">
					<h1 id="message"></h1>
				</div>
			</div>
		`;
	}
}
