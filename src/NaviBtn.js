
import * as Craft from '@craftkit/craft-uikit';

export class NaviBtn extends Craft.UI.View {
	constructor(options){
		super();
		this.lavel  = options.lavel;
		this.action = options.action;
	}
	mark(){
		this.root.classList.add("mark");
	}
	unmark(){
		this.root.classList.remove("mark");
	}
	style(){
		return `
			:host { box-sizing:border-box; }
			.root {
				box-sizing:border-box;
				border-radius: 5px;
				padding: 0px 11px;
				cursor: pointer;
				-webkit-tap-highlight-color:rgba(0,0,0,0);
				-webkit-touch-callout: none;
			}
			.root:active {
				background-color: #d0d0d0;
			}
			.mark {
				font-weight: bold;
			}
		`;
	}
	template(self){
		return `
			<div class="root" onclick="${self}.action();" ontouchstart="">${this.lavel}</div>
		`;
	}
}
