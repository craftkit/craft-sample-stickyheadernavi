
import * as Craft from '@craftkit/craft-uikit';

import { NaviBtn } from './NaviBtn.js';

export class MyNavi extends Craft.UI.View {
	viewDidLoad(){
		this.firstbtn = new NaviBtn({
			lavel  : 'First',
			action : () => {
				this.viewController.open({ page:Craft.Core.Context.MyPageProvider.page('first') });
			}
		});
		this.secondbtn = new NaviBtn({
			lavel  : 'Second',
			action : () => {
				this.viewController.open({ page:Craft.Core.Context.MyPageProvider.page('second') });
			}
		});
		this.appendView(this.firstbtn);
		this.appendView(this.secondbtn);
	}
	markFirst(){
		this.firstbtn.mark();
		this.secondbtn.unmark();
	}
	markSecond(){
		this.firstbtn.unmark();
		this.secondbtn.mark();
	}
	style(){
		return `
			.root {
				box-sizing:border-box;
				display: flex;
				flex-direction: row;
				justify-content: center;
				height: 44px;
				line-height: 44px;
				text-align: center;
			}
		`;
	}
}
