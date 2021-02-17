# 前端三大框架 Vue Angular React 对比（摘抄并翻译）

## 引用到的资料
+ [Angular vs React vs Vue: Which Framework to Choose in 2021](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/)
+ [What is the difference between React.js and React Native](https://www.cognitiveclouds.com/insights/what-is-the-difference-between-react-js-and-react-native/#:~:text=React%20is%20a%20framework%20for,a%20high%20performing%20UI%20layer.&text=React%20Native%20doesn't%20use%20CSS%20either.)

## 背景资料

|  | Angular | React | Vue |
| ------ | ----------- | ---- | ---- |
| 首次发布 | 2010 | 2013 | 2014 |
| 官网地址 | [angular.io](https://angular.io/) | [reactjs.org](https://reactjs.org/) | [vuejs.org](https://vuejs.org/)
| 代码大小(KB)    | 500 | 100 | 80 |
| 应用于    | Google, Wix | Facebook, Uber | Alibaba, GitLab |

### [Angular](https://angular.io/)
由谷歌开发，首次发行于2010年，是三大框架中资历最老的一个，基于TypeScript的JavaScript框架。在2016年做出一次重大更新-Angular 2(并且在名字中去掉了JS,之前叫AngularJS)，Angular 2以上的版本都统称为Angular，虽然AngularJS还在持续更新，但本文将以Angular为重点进行讨论。最新的稳定版本是Angular 10, 于2020年6月发布。

### [React](https://reactjs.org/)
由Facebook开发，首次发行于2013年，Facebook在自家产品中重度应用React（Facebook,Instagram,WhatsApp）。当前稳定版本为 16.X，于2018年11月发行（后来进行了小幅更新）

::: tip
[React](https://reactjs.org/) 与 [React Native](https://reactnative.dev/) 的区别： React是用于制作JavaScript应用的库，React Native则是一个完整的平台，用于开发跨平台应用，React.js 是一个用于编写高性能UI页面的js库，React.js是React Nativa的核心。
:::

### [Vue](https://vuejs.org/)
又称为Vue.js，是三大框架中最年轻的一个，由前谷歌工程师，[尤雨溪](https://baike.baidu.com/item/%E5%B0%A4%E9%9B%A8%E6%BA%AA/2281470)于2014年开发，近三年来，即使Vue的背后没有实力雄厚的大公司支撑，Vue依旧好评如潮，当前稳定版本为2.6，于2019年2月发布（后来进行了小幅更新），Vue的贡献者通过[Patreon](https://www.patreon.com/evanyou)获得资金支持，Vue 3当前处于测试阶段，将转用TypeScript.

::: tip
Vue 3正式版本已经发布 [Vue 3教程]（https://www.vuemastery.com/courses-path/vue3/）
:::


## 更新迭代

Angular 每半年进行一次重大更新，半年后进行API废除。你可以在一年的两次更新区间对你的项目做出改动。

对于Angular 和 React，Facebook对于稳定性的要求放在第一位，独角兽公司例如Twitter和Airbnb都使用React。版本迭代最容易的也是React，例如使用[react-codemod](https://github.com/reactjs/react-codemod)进行版本迁移

## 组件

组件是三大框架的核心。三大框架组件上的区别如下：

### Angular
在Angular中，组件被称作Directive(指令)，指令只是DOM元素上的标记，Angular也可以跟踪和附加特定行为。因此，Angular将组件的UI部分作为HTML标签的属性分离，并且将其行为以JavaScript代码的形式分离。这就是Angular在对比React上与众不同的地方。

### React
有趣的是，React结合了用户界面和组件的行为。例如，[此处是在React中创建hello world组件的代码](https://reactjs.org/docs/hello-world.html)。在React中，代码的同一部分负责创建UI元素并指示其行为。

### Vue
在Vue vs React中，在Vue中，UI和行为也是组件的一部分，这使事情更加直观。此外，Vue具有高度可定制性，可让您从脚本中组合UI和组件的行为。此外，您还可以在Vue中使用预处理器而不是CSS，这是一个很棒的功能。当与其他库（例如Bootstrap）集成时，Vue很棒。


## 学习曲线

### Angular
考虑到Angular是一个完整的解决方案，它的学习曲线很陡，掌握Angular要求您学习相关的概念，例如TypeScript和MVC。尽管学习Angular需要花费时间，但这项投资在了解前端的工作方式方面仍能带来回报。

### React
React提供了一个[“入门指南”](https://reactjs.org/docs/getting-started.html)，可以帮助一个小时左右的时间完成React的设置。该文档是完整而完整的，并提供了Stack Overflow中已经存在的常见问题的解决方案。 React不是一个完整的框架，高级功能需要使用第三方库。这使得核心框架的学习曲线不是那么陡峭，而是取决于您采用其他功能的途径。但是，学习使用React并不一定意味着您正在使用最佳实践。

### Vue
Vue提供了更高的可定制性，因此比Angular或React更易于学习。此外，Vue在功能（如使用组件）方面与Angular和React重叠。因此，从两者之一过渡到Vue是一个简单的选择。但是，Vue的简单性和灵活性是一把双刃剑–它允许较差的代码，从而使其难以调试和测试。

## 三种框架实现同样功能的项目（转）

[用vue和react实现一个待办事项app](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd)

[使用angular实现待办事项app](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-part-2-angular-39b1aa289878)

### 项目截图：
![1613578539158.png](http://blog-img.molifouru.cn/1613578539158.png)

### 目录结构:

![1_9NvJBD9kqTJ9Cc7XZ_42EA.png](http://blog-img.molifouru.cn/1_9NvJBD9kqTJ9Cc7XZ_42EA.png)

### 组件代码:

#### Angular
![1_sV0RO6xZvQQYyyqOae_I_w.png](http://blog-img.molifouru.cn/1_sV0RO6xZvQQYyyqOae_I_w.png)

#### Vue

![1613578763448.png](http://blog-img.molifouru.cn/1613578763448.png)

#### React

![1613578775238.png](http://blog-img.molifouru.cn/1613578775238.png)


## 编者言

个人而言，我更偏向于Angular，拥有更完整的体系和完成度，适用于更加独立的网站。

react也是一个不错的选择，便捷度以及稳定性是首选。

个人不喜欢vue。（虽然整个博客都是vuepress驱动的，上手确实容易，可就这vuepress的文档，我也是踩坑踩了一夜才把小庙搭起来）