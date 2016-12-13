# 一个简单的React Demo

### 编写该代码

使用yeoman的模板生成网页框架

```
npm i -g yo
npm i -g generator-react-webpack
yo react-webpack
```

在此基础上增加了semantic-ui-react用于ui界面

```
npm install semantic-ui-react --save

```

### 功能

1. 测试了父子组件间利用props传递信息、shouldComponentUpdate减少无用render。

src/components/Main.js是父组件，包含了src/components/list.js子组件，Add向子组件增加元素；Decrease移除子组件元素；Change改变父组件state引起重新render。

结论： 注意在传递时不要传递同一引用，否则会引起无法正常在shouldComponentUpdate内的比较。

### Todo

没有增加@autobind功能
