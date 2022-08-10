<!--
 * @Description: 
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-09 09:04:42
 * @LastEditors: lax
 * @LastEditTime: 2022-08-10 11:11:04
 * @FilePath: \nutation.js\readme - en.md
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
### 参数

* jde 
给定任意时刻的，基于力学时的儒略日

* ALGO
章动的算法实现，默认基于IAU1980算法的简化实现，可以自定义 自定义参考（/src/algorithm/IAU1980.js）

* LIB
算法的章动序列表，默认基于《Astronomical.Algorithms》的简化序列，不考虑精度小于等于0.0003
表参考（/src/data/）

### 返回值
基于角度单位的值


### 参考资料

* 《IAU1976、1980及2000A岁差章动模型的比较》
* 《1980IAU章动理论最终报告》
* 《Astronomical.Algorithms》
2
