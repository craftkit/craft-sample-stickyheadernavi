
import * as Craft from '@craftkit/craft-uikit';

export class Title extends Craft.UI.View {
	viewDidLoad(){
		this.title = this.shadow.getElementById('title');
	}
	slideOutTitle(){
		this.title.classList.add("slide_out");
		this.title.classList.remove("slide_in");
	}
	slideInTitle(){
		this.title.classList.add("slide_in");
		this.title.classList.remove("slide_out");
	}
	style(componentId){
		return `
			* { box-sizing:border-box; }
			.root {
				padding: 0px 11px;
				color:black;
			}
			.slide_out {
				transition: 0.05s;
				margin-left: 44px;
				width: calc( 100vw - 44px );
			}
			.slide_in {
				transition: 0.05s;
				margin-left: 0px;
				width: 100vw;
			}
		`;
	}
}
