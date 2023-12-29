/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-08-02 21:21:46
 * @LastEditors: lax
 * @LastEditTime: 2023-12-28 21:39:17
 * @FilePath: \nutation.js\src\algorithm\IAU1980.js
 */
module.exports = {
	l(T) {
		return (
			(485866.733 +
				(715922.633 + (31.31 + 0.064 * T) * T) * T +
				1717200000 * T) /
			3600
		);
	},
	l_(T) {
		return (
			(1287099.804 +
				(1292581.224 + (-0.577 - 0.012 * T) * T) * T +
				128304000 * T) /
			3600
		);
	},
	F(T) {
		return (
			(335778.877 +
				(295263.137 + (-13.257 + 0.011 * T) * T) * T +
				1739232000 * T) /
			3600
		);
	},
	D(T) {
		return (
			(1072261.307 +
				(1105601.328 + (-6.891 + 0.019 * T) * T) * T +
				1601856000 * T) /
			3600
		);
	},
	O(T) {
		return (
			(450160.28 + (-482890.539 + (7.455 + 0.008 * T) * T) * T - 6480000 * T) /
			3600
		);
	},
	/* eslint-disable-next-line */
	calcLongitude(T, argument, [a, b, c, d, e, sin1, sin2]) {
		return (sin1 + sin2 * T) * Math.sin(argument);
	},
	/* eslint-disable-next-line */
	calcObliquity(T, argument, [a, b, c, d, e, sin1, sin2, cos1, cos2]) {
		return (cos1 + cos2 * T) * Math.cos(argument);
	},
	longitudeOffset() {
		return 0;
	},
	obliquityOffset() {
		return 0;
	},
};
