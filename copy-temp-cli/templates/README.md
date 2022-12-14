# 模板项目

- 修改 package.json 中的 name 为项目名称
- 修改 vue.config.js 文件中端口为项目的启动端口

## 目录结构

```
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├──src                         # 源代码
│   ├──api                     # 所有请求
│   ├──assets                  # 主题 字体等静态资源
│   ├──components              # 全局公用组件
│   ├──filters                 # 全局公用过滤器
│   ├──mixins                  # 全局公用混入
│   ├──router                  # 路由
│   ├──store                   # 全局 store管理
│   ├──style                   # 共用style【永不删除】
│   ├──utils                   # 全局公用方法
│   ├──views                   # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口 加载组件 初始化等
│   └── public-path.js         # 配置乾坤项-勿动
├── .env.development           # 配置开发环境
├── .env.production            # 配置生产环境
├── .env.release               # 配置预览环境
├── .env.staging               # 配置测试环境
├── .gitignore.md              # git上传需要忽略的文件格式
├──  babel.config.js           # ES6语法编译配置
├──  Dockerfile                # Nginx配置
├──  package.json              # 依赖包
├──  README.md                 # 项目说明文档
└──  vue.config.js             # 项目启动配置项
```

## views 目录结构

```
├── views                                      # views 所有页面
│   │── moduleA                                # 模块A-有子集
│   │   │── moduleA-a                          # 模块A-a 最多到二级文件
│   │   │   │── index.vue                      # 模块A-a-首页
│   │   │   │── add.vue                        # 模块A-a-新增
│   │   │   │── edit.vue                       # 模块A-a-编辑
│   │   │   │── detail.vue                     # 模块A-a-详情
│   │   │   │── [other].vue                    # 模块A-a-其它页面
│   │   │   │── constants.js                   # 模块A-a-配置项
│   │   │   └── [other].js                     # 模块A-a-其它方法
│   │   └── moduleA-b                          # 模块A-b 最多到二级文件
│   │       │── index.vue                      # 模块A-b-首页
│   │       │── add.vue                        # 模块A-b-新增
│   │       │── edit.vue                       # 模块A-b-编辑
│   │       │── detail.vue                     # 模块A-b-详情
│   │       │── [other].vue                    # 模块A-b-其它页面
│   │       │── constants.js                   # 模块A-b-配置项
│   │       └── [other].js                     # 模块A-b-其它方法
│   └── moduleB                                # 模块B
│       │── index.vue                          # 模块B-首页
│       │── add.vue                            # 模块B-新增
│       │── edit.vue                           # 模块B-编辑
│       │── detail.vue                         # 模块B-详情
│       │── [other].vue                        # 模块B-其它页面
│       │── constants.js                       # 模块B-配置项
│       └── [other].js                         # 模块B-其它方

```

## router 目录结构

```
├── router
│   │── moduleA
│   │   │── [a].js
│   │   └── [b].js
│   └── moduleB
│   |    │──[a].js
│   |    └──[b].js
│   └──index.js

```

## api 目录结构

```
├── api
│   │── moduleA
│   │   │── [a].js
│   │   └── [b].js
│   └── moduleB
│       │──[a].js
│       └──[b].js
```
