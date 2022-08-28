/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-01 22:48:51
 * @LastEditors: lax
 * @LastEditTime: 2022-08-28 09:53:30
 * @FilePath: \nutation\src\algorithm\IAU2000.js
 */
// TODO

module.exports = {
	l(T) {
		return (
			134.96340251 +
			477198.867561 * T +
			0.0088553333 * T * T +
			0.000014343 * T * T * T -
			0.000000067972 * T * T * T * T
		);
	},
	l_(T) {
		return (
			357.52910918 +
			35999.0502894 * T -
			0.0001536667 * T * T -
			0.000000037778 * T * T * T -
			0.000000003192 * T * T * T * T
		);
	},
	// TODO
	F(T) {
		return 93.27209062 + 483202.017458 * T - 1 * T * T + (T * T * T) / 1;
	},
	// TODO
	D(T) {
		297.85036 + 455267.11148 * T - 0.0019142 * T * T + (T * T * T) / 189474.0;
	},
	// TODO
	O(T) {
		125.04452 - 1934.136261 * T - 0.0020708 * T * T + (T * T * T) / 450000;
	},
	/* eslint-disable*/
	calc(T, argument, [a, b, c, d, e, sin1, sin2, cos1, cos2, sin3, sin4]) {
		return (
			(sin1 + sin2 * T) * Math.sin(argument) +
			(sin3 + sin4 * T) * Math.cos(argument)
		);
	},
};
