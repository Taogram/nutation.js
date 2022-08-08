<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-02-26 14:15:25
 * @LastEditors: lax
 * @LastEditTime: 2022-08-08 10:38:15
 * @FilePath: \nutation.js\readme.md
-->

## 介绍
基于js的章动计算实现

## 算法

### IAU1980
已实现

### IAU2000
尚未实现

## 使用说明

### 引用

```
<!-- 尚未构建npm包 -->
const Nutation = require("@/index.js");
const nutation = new Nutation(jde,ALGO,LIB);
```
### 参数

* jde 
给定任意时刻的，基于力学时的儒略日

* ALGO
章动的算法实现，默认基于IAU1980算法的简化实现，可以自定义

* LIB
算法的章动序列表，默认基于《Astronomical.Algorithms》的简化序列（该表忽略了系数小于0.0003的周期项）

### 返回值
基于角度单位的值


### 参考资料

* 《IAU1976、1980及2000A岁差章动模型的比较》
* 《1980IAU章动理论最终报告》
* 《Astronomical.Algorithms》
