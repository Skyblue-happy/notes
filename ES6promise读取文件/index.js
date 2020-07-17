// 1、引入fs模块
const fs = require('fs');

// 2、调用方法读取文件
// fs.readFile('./resources/test.md',(err,data)=>{
// 	if(err) throw err;
	
// 	console.log(data.toString());
// })

// 3、使用promise封装
const p = new Promise(function(resolve,reject){
	fs.readFile('./resources/test.md',(err,data)=>{
		if(err) reject(err);
		resolve(data);
	})
})

p.then(function(value){
	console.log(value.toString());
}),function(reason){
	console.log('读取文件失败！')
}