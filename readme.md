<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-11 00:02:06
 * @LastEditors: lax
 * @LastEditTime: 2022-08-11 00:34:02
 * @FilePath: \nutation\readme.md
-->
# Nutation.js

![GitHub](https://img.shields.io/github/license/Taogram/nutation.js) ![GitHub package.json version](https://img.shields.io/github/package-json/v/Taogram/nutation.js)

基于js的章动计算实现

## 算法

### IAU1980
已实现

### IAU2000
已实现

## 使用说明

### 引用

```
const Nutation = require("nutation.js");
const nutation = new Nutation(jde,ALGO,LIB);
```

```
<!-- longitude nutation -->
nutation.longitude();
```

```
<!-- obliquity nutation -->
nutation.obliquity();
```
## api

### jde 
给定任意时刻的，基于力学时的儒略日

### ALGO
章动的算法实现，默认基于IAU1980算法的简化实现，可以自定义 自定义参考（/src/algorithm/IAU1980.js）

### LIB
算法的章动序列表，默认基于《Astronomical.Algorithms》的简化序列（该表忽略了系数小于0.0003的周期项）
表参考目录（/src/data/）

## 返回值
基于角度单位的值


## 参考资料

* 《IAU1976、1980及2000A岁差章动模型的比较》
* 《1980IAU章动理论最终报告》
* 《Astronomical.Algorithms》
