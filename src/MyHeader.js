
import * as Craft from '@craftkit/craft-uikit';
import * as StickyHeaderNavi from '@craftkit/craft-widget-stickyheaderNavi';
Craft.usePackage(StickyHeaderNavi);

export class MyHeader extends Craft.Widget.StickyHeaderNavi.Header {
	constructor(options){
		super(options);
		this.navi = options.navi; // extends navi
	}
	onAppearBackButton(){
		// overwrite to support parcial(only title element) slide in/out behaviour
		this.large.slideOutTitle();
		this.small.slideOutTitle();
	}
	onDisappearBackButton(){
		// overwrite to support parcial(only title element) slide in/out behaviour
		this.large.slideInTitle();
		this.small.slideInTitle();
	}
	style(componentId){
		return super.style(componentId) + `
			:host{
				box-shadow: 0px 2px 2px 1px rgba(128,128,128,.25); /* cosmetic shadow */
				background-color: rgba(241,241,241,.5); /* cosmetic color */
				backdrop-filter: blur(10px);
				-webkit-backdrop-filter: blur(10px);
			.root{ box-sizing:border-box; }
		`;
	}
}
