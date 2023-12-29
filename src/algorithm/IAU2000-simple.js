/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-01 22:48:51
 * @LastEditors: lax
 * @LastEditTime: 2023-12-29 00:14:26
 * @FilePath: \nutation\src\algorithm\IAU2000.js
 */

module.exports = {
	l(T) {
		return 134.96340251 + (1717915923.2178 / 3600) * T;
	},
	l_(T) {
		return 357.52910918 + (129596581.0481 / 3600) * T;
	},
	F(T) {
		return 93.27209062 + (1739527262.8478 / 3600) * T;
	},
	D(T) {
		return 297.85019547 + (1602961601.209 / 3600) * T;
	},
	O(T) {
		return 125.04455501 - (6962890.5431 / 3600) * T;
	},
	/* eslint-disable-next-line */
	calcLongitude(T, argument, [a, b, c, d, e, A, _A,__A]) {
		return (A + _A * T) * Math.sin(argument) + __A * Math.cos(argument);
	},
	/* eslint-disable-next-line */
	calcObliquity(T, argument, [a, b, c, d, e, A, _A,__A,B,_B,__B]) {
		return (B + _B * T) * Math.cos(argument) + __B * Math.sin(argument);
	},
};
