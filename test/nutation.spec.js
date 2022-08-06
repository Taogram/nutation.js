/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-06-29 21:00:45
 * @LastEditors: lax
 * @LastEditTime: 2022-08-06 09:39:21
 * @FilePath: \nutation\test\nutation.spec.js
 */
const Nutation = require("@/nutation.js");
const nutation = new Nutation();
nutation.T = 1;

describe("Nutation IAU1980", () => {
	it(`calc D`, () => {
		expect(nutation.getD()).toBe(455564.9599310777);
	});
	it(`calc l\``, () => {
		expect(nutation.getL_()).toBe(36356.57789636667);
	});
	it(`calc l`, () => {
		expect(nutation.getL()).toBe(477333.83909297775);
	});
	it(`calc F`, () => {
		expect(nutation.getF()).toBe(483295.2857685556);
	});
	it(`calc O`, () => {
		expect(nutation.getO()).toBe(-1809.0938095777778);
	});
});
