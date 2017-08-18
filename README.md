# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




├── index.html
├── main.js
├── api
│   └── ... # API 请求
├── components  # 组件页面
│   ├── App.vue
│   └── ...
├── public  # 公用的内容
    ├── components  # 公用组件
    └── scss  # 公用样式
    ├── components  # 公用工具函数
    ├── components  # 过滤函数
├── router  # 路由
└── vuex
    ├── store.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutation-types.js      # 动作常量
    └── modules
    |   ├── cart.js       # 各个页面的数据处理
        └── products.js   # 产品模块