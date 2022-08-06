/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-02 21:21:46
 * @LastEditors: lax
 * @LastEditTime: 2022-08-06 09:38:46
 * @FilePath: \nutation\src\algorithm\IAU1980.js
 */
module.exports = {
	l(T) {
		return (
			134.96298 + 477198.867398 * T + 0.0086972 * T * T + (T * T * T) / 56250
		);
	},
	l_(T) {
		return (
			357.52772 + 35999.05034 * T - 0.0001603 * T * T - (T * T * T) / 300000.0
		);
	},
	F(T) {
		return (
			93.27191 + 483202.017538 * T - 0.0036825 * T * T + (T * T * T) / 327270
		);
	},
	D(T) {
		return (
			297.85036 + 455267.11148 * T - 0.0019142 * T * T + (T * T * T) / 189474.0
		);
	},
	O(T) {
		return (
			125.04452 - 1934.136261 * T - 0.0020708 * T * T + (T * T * T) / 450000
		);
	},
	calc(T, argument, [a, b, c, d, e, sin1, sin2]) {
		return (sin1 + sin2 * T) * Math.sin(argument);
	},
};
