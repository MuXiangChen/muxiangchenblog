# 微商电子烟

最近为了谋生，开始卖电子烟，但本人没有空闲时间用来聊微信，所以决定开发一个微信机器人自动接待顾客，下单-发货

项目搁置

## 技术结构
+ [Wechaty 微信托管](https://github.com/wechaty/wechaty) 
::: danger
因web接口收紧，作者又太穷，买不起安卓协议的SDK，此项目暂时搁置.
:::
+ [ChatShop 服务](../services/ChatShop.md)

## 字段表

### base
- shop_id 店铺ID（微信独立ID）
- shop_name 店铺名称
- product_type 商品类别

### user
- id 独立ID
- name 昵称
- avatar_md5 头像
- last_visit_time 上次联络时间
- last_buy_list 上次购买产品列表
    - id
    - count
    - total
- last_buy_cost 上次购买的耗材产品
- aver_cost_time 平均购买耗材的时间，默认14天

### product
- id 独立ID
- type 商品类型 base为基础商品,cost为耗材类商品
- cost_time 耗材类产品一般消耗时间

### discount
- id 促销ID
- product_list 促销套装列表
- original_price 原价
- price 促销价格

### feedback
- uid 用户ID
- content 内容


## ChatQL

类GraphQL，但使用文字进行触发

关键字（主动）/过程（被动）-触发函数-执行流程

具体API和触发关键字对照表:


### 商品查询
**Query**
+ 关键字
+ 价格
+ 新品
+ 促销

**keyword**
+ 啥
+ 什么


### 产品详情
**Query**
+ ..doc
+ Q&A


### 结账
**Query**
**Keyword**
+ 一共多钱
+ 好，就这些


### 修改收货地址
**Query**
**Keyword**
+ 地址


### 用户偏好设置
**Query**
**Keyword**
+ 包好点



## Pipeline

### 迎宾
1. 扫码 - 已添加
2. 问候语
```
if 新用户
    欢迎光临 shop_name ，请问您需要 product_type 嘛？
if 老用户
    var duration = current_time - user.last_visit_time;
    duration 不见呀亲～
```
3. 预测推荐
```
if (duration >= product.cost_time)
        再来
    if (last_buy_cost)
```