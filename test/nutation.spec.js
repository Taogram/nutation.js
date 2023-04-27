/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-06-29 21:00:45
 * @LastEditors: lax
 * @LastEditTime: 2023-04-27 14:43:52
 * @FilePath: \nutation.js\test\nutation.spec.js
 */
const Nutation = require("@/nutation.js");

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
	it(`longitude -3".788`, () => {
		expect(new Nutation(jde).longitude()).toBeCloseTo(-0.0010522222, 6);
	});
	it(`longitude +9".443`, () => {
		expect(new Nutation(jde).obliquity()).toBeCloseTo(0.0026230555, 6);
	});
});

describe("IAU2000B jde=2446895.5", () => {
	const jde = 2446895.5;
	const nutation = new Nutation(jde, 2000);
	it(`T -0.127296372348`, () => {
		expect(nutation.T).toBeCloseTo(-0.127296372348, 12);
	});
	it(`D -56383°.0377`, () => {
		expect(nutation.D).toBeCloseTo(-56383.0377, 3);
	});
	it(`l\` -4225°.0208`, () => {
		expect(nutation.l_).toBeCloseTo(-4225.0208, 2);
	});
	it(`l -60610°.7216`, () => {
		expect(nutation.l).toBeCloseTo(-60610.7216, 3);
	});
	it(`F -61416°.5921`, () => {
		expect(nutation.F).toBeCloseTo(-61416.5921, 3);
	});
	it(`O 371°.2531`, () => {
		expect(nutation.O).toBeCloseTo(371.2531, 3);
	});
	it(`longitude -3".788`, () => {
		expect(nutation.longitude()).toBeCloseTo(-0.0010522222, 6);
	});
	it(`longitude +9".443`, () => {
		expect(nutation.obliquity()).toBeCloseTo(0.0026230555, 6);
	});
});
