/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-06-29 21:00:45
 * @LastEditors: lax
 * @LastEditTime: 2024-07-22 00:47:07
 * @FilePath: \nutation.js\test\nutation.spec.js
 */
const Nutation = require("@/nutation.js");

describe("《Astronomical.Algorithms》21.a / jde=2446895.5", () => {
	const jde = 2446895.5;
	const nutation = new Nutation(jde, 1980);
	it(`T -0.127296372348`, () => {
		expect(nutation.T).toBeCloseTo(-0.127296372348, 12);
	});
	it(`D -56383°.0377`, () => {
		expect(nutation.D).toBeCloseTo(-56383.0377, 4);
	});
	it(`l\` -4225°.0208`, () => {
		expect(nutation.l_).toBeCloseTo(-4225.0208, 4);
	});
	it(`l -60610°.7216`, () => {
		expect(nutation.l).toBeCloseTo(-60610.7216, 4);
	});
	it(`F -61416°.5921`, () => {
		expect(nutation.F).toBeCloseTo(-61416.5921, 4);
	});
	it(`O 371°.2531`, () => {
		expect(nutation.O).toBeCloseTo(371.2531, 4);
	});
	// -3".788有误
	it(`longitude -3".788`, () => {
		expect(nutation.longitude() * 3600).toBeCloseTo(-3.788, 3);
	});
	it(`obliquity +9".443`, () => {
		expect(nutation.obliquity() * 3600).toBeCloseTo(9.443, 3);
	});
});

describe("SOFA test jde=2446895.5", () => {
	const jde = 2446895.5;
	const nutation = new Nutation(jde, 1980, true);
	it(`longitude -3".7878`, () => {
		expect(nutation.longitude()).toBeCloseTo(-0.001052173431676, 15);
	});
	it(`obliquity +9".4424`, () => {
		expect(nutation.obliquity()).toBeCloseTo(0.002622907050506, 15);
	});
});

describe("SOFA/t_sofa_c.c test jde=2453736.5", () => {
	const jde = 2453736.5;
	const nutation = new Nutation(jde, 1980, true);
	it(`longitude -0.9643658353226563966e-5`, () => {
		expect(nutation.longitude() * (Math.PI / 180)).toBeCloseTo(
			-0.9643658353226563966e-5,
			15
		);
	});
	it(`obliquity 0.4060051006879713322e-4`, () => {
		expect(nutation.obliquity() * (Math.PI / 180)).toBeCloseTo(
			0.4060051006879713322e-4,
			15
		);
	});
});

describe("IAU2000B SOFA jde=2453736.5", () => {
	const jde = 2453736.5;
	const nutation = new Nutation(jde);

	it(`longitude  -0.9632552291148362783e-5`, () => {
		expect(nutation.longitude() * (Math.PI / 180)).toBeCloseTo(
			-0.9632552291148362783e-5,
			15
		);
	});
	it(`obliquity 0.4063197106621159367e-4`, () => {
		expect(nutation.obliquity() * (Math.PI / 180)).toBeCloseTo(
			0.4063197106621159367e-4,
			15
		);
	});
});
