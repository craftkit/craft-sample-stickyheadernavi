
const Demo = { StickyHeader: {} };

import { App } from './App.js';
import { MyViewController } from './MyViewController.js';
import { MyHeader } from './MyHeader.js';
import { Title } from './Title.js';
import { LargeTitle } from './LargeTitle.js';
import { SmallTitle } from './SmallTitle.js';
import { MyNavi } from './MyNavi.js';
import { NaviBtn } from './NaviBtn.js';
import { MyPage } from './MyPage.js';
import { FirstPage } from './FirstPage.js';
import { SecondPage } from './SecondPage.js';

Demo.StickyHeader = {
	App              : App,
	MyViewController : MyViewController,
	MyHeader         : MyHeader,
	Title            : Title,
	LargeTitle       : LargeTitle,
	SmallTitle       : SmallTitle,
	MyNavi           : MyNavi,
	NaviBtn          : NaviBtn,
	MyPage           : MyPage,
	FirstPage        : FirstPage,
	SecondPage       : SecondPage
};

export default Demo;

