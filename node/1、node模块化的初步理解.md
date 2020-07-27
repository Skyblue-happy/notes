##### 1、模块分类
- 核心模块
    由node引擎提供的模块
    核心模块的标识就是模块的名字（例如：var fs = require('fs')）
- 文件模块
    用户自己创建的模块（通过绝对路径、相对路径引入）
##### 2、node中的全局对象为global，它的作用和网页中的window类似

​	在全局中创建的变量都会作为global的属性保存
​	在全局中创建的函数都会作为global的方法保存

###### 2.1、在node执行模块中的代码时，它会首先在代码块的最顶部添加如下代码，传进5个实参

```function (exports, require, module, __filename, __dirname) {```

exports：该对象用来将变量或函数暴露到外部

require：函数，用来引入外部的模块

module：代表当前模块本身，exports就是module的属性，所以 exports == module.exports

__filename：当前模块的完整路径

__dirname：当前模块的所在文件夹路径



###### 2.2、在代码的最底部添加如下代码

```}```

**<u>所以模块的代码都是包含在函数里执行的，都是局部变量</u>**

3、arguments.callee

这个属性保存的是当前执行的函数对象

```// 查看当前调用的函数整体
// 查看当前调用的函数整体
console.log(arguments.callee + '')

// 输出结果为
function (exports, require, module, __filename, __dirname) {
	***
}```
```