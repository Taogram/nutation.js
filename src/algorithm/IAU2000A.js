/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-01 22:48:51
 * @LastEditors: lax
 * @LastEditTime: 2024-07-22 00:53:46
 * @FilePath: \nutation\src\algorithm\IAU2000.js
 */
// TODO;
module.exports = {
	l(T) {
		return (
			485868.249036 +
			(T *
				(1717915923.2178 + T * (31.8792 + T * (0.051635 + T * -0.0002447)))) /
				3600
		);
	},
	l_(T) {
		return (
			1287104.79305 +
			(T *
				(129596581.0481 + T * (-0.5532 + T * (0.000136 + T * -0.00001149)))) /
				3600
		);
	},
	F(T) {
		return (
			335779.526232 +
			(T *
				(1739527262.8478 + T * (-12.7512 + T * (-0.001037 + T * 0.00000417)))) /
				3600
		);
	},
	D(T) {
		return (
			1072260.70369 +
			(T *
				(1602961601.209 + T * (-6.3706 + T * (0.006593 + T * -0.00003169)))) /
				3600
		);
	},
	O(T) {
		return (
			450160.398036 +
			(T * (-6962890.5431 + T * (7.4722 + T * (0.007702 + T * -0.00005939)))) /
				3600
		);
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
