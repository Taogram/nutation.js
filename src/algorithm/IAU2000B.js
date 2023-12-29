/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-01 22:48:51
 * @LastEditors: lax
 * @LastEditTime: 2023-12-29 14:17:33
 * @FilePath: \nutation\src\algorithm\IAU2000.js
 */

module.exports = {
	l(T) {
		return (485868.249036 + 1717915923.2178 * T) / 3600;
	},
	l_(T) {
		return (1287104.79305 + 129596581.0481 * T) / 3600;
	},
	F(T) {
		return (335779.526232 + 1739527262.8478 * T) / 3600;
	},
	D(T) {
		return (1072260.70369 + 1602961601.209 * T) / 3600;
	},
	O(T) {
		return (450160.398036 - 6962890.5431 * T) / 3600;
	},
	/* eslint-disable-next-line */
	calcLongitude(T, argument, [a, b, c, d, e, A, _A,__A]) {
		return (A + _A * T) * Math.sin(argument) + __A * Math.cos(argument);
	},
	/* eslint-disable-next-line */
	calcObliquity(T, argument, [a, b, c, d, e, A, _A,__A,B,_B,__B]) {
		return (B + _B * T) * Math.cos(argument) + __B * Math.sin(argument);
	},
	longitudeOffset() {
		return -0.135 / 1e3;
	},
	obliquityOffset() {
		return 0.388 / 1e3;
	},
};
