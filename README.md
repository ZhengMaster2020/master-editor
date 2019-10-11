# vue-markdown 打造自己的编辑器

## 初始化项目

新建 vue-markdown 文件夹以及在它里面新建package.json以及README.md文件

```bash
mkdir vue-markdown
cd vue-markdown 
npm init -y
echo "# Vue-markdown" > README.md
```
## 新建项目相关的几个文件夹
新建 src public文件夹
```lua
--- vue-markdown
  --- public
  --- src
    --- assets
    --- components
  --- App.vue
  --- main.js
```

## 安装相应的库
> webpack webpack-cli



compute 与 watch的区别
>
> computed是用于定义基于数据之上的数据。
> 
> 而watch是你想在某个数据变化时做一些事情，如果做的事情是更新其他数> 据，那其实与把这个要更新的数据项定义成computed是一样的，这个时候用> computed更有可读性，虽然技术上讲watch也可以实现。
> 
> 但你也可以在被watch的数据变化时做其他事情啊，比如调用一个方法，这个是computed做不到也不应该做的。
> 
> 总结：
> 
> 1.如果一个数据依赖于其他数据，那么把这个数据设计为computed的
> 
> 2.如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化# self-markdown
