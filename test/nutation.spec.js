/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-06-29 21:00:45
 * @LastEditors: lax
 * @LastEditTime: 2022-08-08 23:36:56
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

describe("《Astronomical.Algorithms》21.a / jde=2446895.5", () => {
	const jde = 2446895.5;
	it(`T -0.127296372348`, () => {
		expect(new Nutation(jde).T).toBeCloseTo(-0.127296372348, 12);
	});
	it(`D -56383°.0377`, () => {
		expect(new Nutation(jde).D).toBeCloseTo(-56383.0377, 3);
	});
	it(`l\` -4225°.0208`, () => {
		expect(new Nutation(jde).l_).toBeCloseTo(-4225.0208, 3);
	});
	it(`l -60610°.7216`, () => {
		expect(new Nutation(jde).l).toBeCloseTo(-60610.7216, 3);
	});
	it(`F -61416°.5921`, () => {
		expect(new Nutation(jde).F).toBeCloseTo(-61416.5921, 3);
	});
	it(`O 371°.2531`, () => {
		expect(new Nutation(jde).O).toBeCloseTo(371.2531, 3);
	});
	it(`longitude 9".443`, () => {
		expect(new Nutation(jde).longitude()).toBeCloseTo(0.0026230555, 3);
	});
});
