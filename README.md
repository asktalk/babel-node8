# babel-node8

## babel-node8
目前node8.1 版本已经支持大部分es6特性，但是不支持import和export。本例子主要目的是基于import/export+ node8 es6特性开发。最终通过babel仅仅转化import/export语法，其他es6语法不做转化，因为node8.1已经直接支持了。

同时在开发时候，可以直接通过babel-register.js来直接执行代码，不需要先转化代码。