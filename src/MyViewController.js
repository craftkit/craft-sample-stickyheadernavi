
import * as Craft from '@craftkit/craft-uikit';
import * as StickyHeaderNavi from '@craftkit/craft-widget-stickyheaderNavi';
Craft.usePackage(StickyHeaderNavi);

export class MyViewController extends Craft.Widget.StickyHeaderNavi.ViewController {
	
	resolveRoutingRequest(route){
		switch(route.path){
			case '/second':
				this.open({ page:Craft.Core.Context.MyPageProvider.page('second'), callback:null, route:route });
				break;
			default:
				this.open({ page:Craft.Core.Context.MyPageProvider.page('first'), callback:null, route:route });
				break;
		}
	}
	
}
