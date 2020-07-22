// import * as test from './say.js'; // 引入整个say.js文件


let btn = document.getElementsByTagName('button')[0];
btn.onclick= function(){
	console.log(233)
	// test.say()
	
	// 动态导入，提高加载效率
	import('./say.js').then(res => {
		res.say();
	})
}