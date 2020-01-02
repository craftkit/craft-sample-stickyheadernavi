
import * as Craft from '@craftkit/craft-uikit';

import { MyViewController } from './MyViewController.js';
import { MyHeader } from './MyHeader.js';
import { LargeTitle } from './LargeTitle.js';
import { SmallTitle } from './SmallTitle.js';
import { MyNavi } from './MyNavi.js';
import { FirstPage } from './FirstPage.js';
import { SecondPage } from './SecondPage.js';

export var App = {
	
	router : Craft.Core.PathRouter,
	
	didBootApplication : function(){
		Craft.Core.Defaults.ALLOW_COMPONENT_SHORTCUT = true;
		
		Craft.Core.Context.MyPageProvider = {
			classes : {
				first  : FirstPage,
				second : SecondPage
			},
			instances : {},
			page : function(name){
				return new this.classes[name]();
				if( this.instances[name] ){
					return this.instances[name];
				}else{
					let instance = new this.classes[name]();
					this.instances[name] = instance;
					return instance;
				}
			}
		};
		
		const rootViewController = new MyViewController({
			header : new MyHeader({
				large : new LargeTitle(),
				small : new SmallTitle(),
				navi  : new MyNavi() // extended
			}),
			backbtn : new Craft.Widget.StickyHeaderNavi.BackButton(), // works only in the standalone mode
			enableSwipeBack : true
		});
		Craft.Core.Context.setRootViewController(rootViewController);
		rootViewController.bringup();
	}
};
