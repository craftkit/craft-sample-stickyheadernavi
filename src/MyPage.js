
import * as Craft from '@craftkit/craft-uikit';
import * as StickyHeaderNavi from '@craftkit/craft-widget-stickyheaderNavi';
Craft.usePackage(StickyHeaderNavi);

export class MyPage extends Craft.Widget.StickyHeaderNavi.Page {
	style(componentId){
		return super.style(componentId) + `
			:host {
				width:100%;
				box-sizing:border-box;
				margin:0;
				background-color:#fff;
			}
			.root { box-sizing:border-box; padding:11px; }
			.dummy1 {
				width: 100%;
				height: 22px;
				background-color: #f0f0f0;
			}
			.dummy2 {
				width: 100%;
				height: 22px;
				background-color: #fafafa;
			}
		`;
	}
}
