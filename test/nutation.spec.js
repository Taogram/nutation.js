/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-06-29 21:00:45
 * @LastEditors: lax
 * @LastEditTime: 2022-06-29 21:11:18
 * @FilePath: \tao_solar_terms\test\nutation.js
 */
const Nutation = require("@/nutation.js");
const nutation = new Nutation();
nutation.T = 1;

describe("Nutation", () => {
	it(`calc D`, () => {
		expect(nutation.getD()).toBe(455564.9599310777);
	});
	it(`calc M`, () => {
		expect(nutation.getM()).toBe(36356.57789636667);
	});
	it(`calc _M`, () => {
		expect(nutation.get_M()).toBe(477333.83909297775);
	});
	it(`calc F`, () => {
		expect(nutation.getF()).toBe(483295.2857685556);
	});
	it(`calc O`, () => {
		expect(nutation.getO()).toBe(-1809.0938095777778);
	});
});
