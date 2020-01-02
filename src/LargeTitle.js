
import * as Craft from '@craftkit/craft-uikit';

import { Title } from './Title.js';

export class LargeTitle extends Title {
	viewWillAppear(callback){
		this.appendView(this.viewController.header.navi); // take over navi.view
		if( callback ){ callback(); }
	}
	setMessage(message){
		this.shadow.getElementById("message").innerHTML = message;
	}
	setCaption(caption){
		this.shadow.getElementById("caption").innerHTML = caption;
	}
	style(componentId){
		return super.style(componentId) + `
			.root { height: 128px; } /* 84+44 */
			h1 { margin:0; padding:0; font-size:44px; }
			p { margin:0; padding:0; font-size:12px; }
		`;
	}
	template(componentId){
		return `
			<div id="root" class="root">
				<div id="title">
					<h1 id="message"></h1>
					<p id="caption"></p>
				</div>
			</div>
		`;
	}
}
