/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-01 22:48:51
 * @LastEditors: lax
 * @LastEditTime: 2023-04-27 10:56:36
 * @FilePath: \nutation\src\algorithm\IAU2000.js
 */

module.exports = {
	l(T) {
		const T2 = T * T;
		const T3 = T2 * T;
		const T4 = T3 * T;
		return (
			134.96340251 +
			(1717915923.2178 / 3600) * T +
			(31.8792 / 3600) * T2 +
			(0.051635 / 3600) * T3 -
			(0.0002447 / 3600) * T4
		);
	},
	l_(T) {
		const T2 = T * T;
		const T3 = T2 * T;
		const T4 = T3 * T;
		return (
			357.52910918 +
			(129596581.0481 / 3600) * T -
			(0.5532 / 3600) * T2 -
			(0.00013 / 3600) * T3 -
			(0.00001149 / 3600) * T4
		);
	},
	F(T) {
		const T2 = T * T;
		const T3 = T2 * T;
		const T4 = T3 * T;
		return (
			93.27209062 +
			(1739527262.8478 / 3600) * T -
			(12.7512 / 3600) * T2 -
			(0.001037 / 3600) * T3 +
			(0.00000417 / 3600) * T4
		);
	},
	D(T) {
		const T2 = T * T;
		const T3 = T2 * T;
		const T4 = T3 * T;
		297.85019547 +
			(1602961601.209 / 3600) * T -
			(6.3706 / 3600) * T2 +
			(0.006593 / 3600) * T3 -
			(0.00003169 / 3600) * T4;
	},
	O(T) {
		const T2 = T * T;
		const T3 = T2 * T;
		const T4 = T3 * T;
		125.04455501 -
			(6962890.5431 / 3600) * T +
			(7.4722 / 3600) * T2 +
			(0.007702 / 3600) * T3 -
			(0.00005939 / 3600) * T4;
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
