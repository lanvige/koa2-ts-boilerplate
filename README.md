# KOA2-TS-BOILERPLATE

这是一个基于 koa2 和 typescript 的一个实践。

> 起因是，最近 js 写的多，改的也多，改着改着总会引发很多的问题，最主要的就是 type，弱类型语言的通病。
> 所谓写起一时爽，重构万般痛。
> 同时，还有一些东西改变了认知，像 dva，要去写一下才知道真实的世界。于是就有了这个项目。


## 2018 目标：

- 构建一个可用的 ts 的最佳配置集。
- 结合 koa2
- 使用 ORM - typeorm
- 使用 IoC - typedi
- env 实践



### Web Framework

- https://github.com/koajs/koa
- https://github.com/typestack/routing-controllers


### IoC

- https://github.com/typestack/typedi


### ORM

- https://github.com/typeorm/typeorm
- https://github.com/typeorm/typeorm-typedi-extensions



## 开始使用

### 准备数据库

数据文件在 `db` 目录下


### 更改 db 连接配置

在项目的根目录，创建 `ormconfig.json` 来配置 typeorm 的数据库连接配置。

可参考 `ormconfig.example.json`


### VSCode 

在开发中，可以方便的使用 vscode 来进行开发和调试，其配置如下

```
$ yarn dev
```

然后配置 vscode 的 debug。

配置文件在 docs/launch.json


### 直接启动

分两部，首先进行编译，然后再进行启动。

```
yarn build

yarn start
```


## Authors

- redelva https://github.com/redelva
- lanvige https://github.com/lanvige
