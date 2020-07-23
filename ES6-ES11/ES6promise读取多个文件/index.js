// 1、引入fs模块
const fs = require('fs');

// 2、使用promise封装
// 读取第一个文件
const p = new Promise((resolve,reject) => {
	fs.readFile('./resources/test.md', (err, data) => {
		if (err) reject(err);
		resolve(data);
	})
})

// 读取第二个文件，返回一个新的promise
p.then(value => { // value是第一个test.md
	return new Promise((resolve, reject) => {
		fs.readFile('./resources/test2.md', (err, data) => {
			resolve([value, data]) // value是test.md，data是test2.md
		})
	})
}).then(value => {
	return new Promise((resolve, reject) => {
		fs.readFile('./resources/test3.md', (err, data) => {
			value.push(data)
			resolve(value)
		})
	})
}).then(value=>{
	console.log(value.join('\r\n'));
})
