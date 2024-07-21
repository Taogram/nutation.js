<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-09 09:04:42
 * @LastEditors: lax
 * @LastEditTime: 2024-07-22 00:54:48
 * @FilePath: \nutation.js\readme - en.md
-->
## 介绍
基于js的章动计算实现
⚠⚠⚠(Math.PI = 3.141592653589793)计算基于JSΠ的最大值
本项目主要用于[Taogram](https://github.com/Taogram/taogram)的节气算法辅助使用，非标准天文项目。
## 算法
IAU1980/IAU2000B可选
IAU2000A 施工中
## 使用说明

### 引用

```
const Nutation = require("nutation.js");
const nutation = new Nutation(jde,IAU,FULL);
```

```
<!-- longitude nutation -->
nutation.longitude();
```

```
<!-- obliquity nutation -->
nutation.obliquity();
```
### 参数

* jde 
给定任意时刻的，基于力学时的儒略日

* IAU
章动的算法实现，默认基于IAU2000B算法的实现，也可以选择IAU1980.
算法的章动序列表为简化序列表参考（/src/data/）
```
const nutation = new Nutation(jde,1980/2000b);
```
* FULL
true/false
是否使用简化的章动库，当前仅1980有效,2000b简化和非简化库内容一致

### 返回值
基于角度单位的值


### 参考资料

* 《IAU1976、1980及2000A岁差章动模型的比较》
* 《1980IAU章动理论最终报告》
* 《Astronomical.Algorithms》
