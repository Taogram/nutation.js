/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2022-02-26 13:39:00
 * @LastEditors: lax
 * @LastEditTime: 2023-12-08 20:32:18
 * @FilePath: \nutation.js\src\nutation.js
 */
const IAU1980_LIB = require("@/data/ASTRONOMICAL_IAU1980_REVISE.js");
const IAU2000_LIB = require("@/data/ASTRONOMICAL_IAU2000.js");
const ASTRONOMICAL = { IAU1980: IAU1980_LIB, IAU2000: IAU2000_LIB };
const TIME = require("@/tools/time");
const IAU1980 = require("@/algorithm/IAU1980.js");
const IAU2000 = require("@/algorithm/IAU2000.js");
const ALGORITHMS = { IAU1980, IAU2000 };
/**
 * @class 章动
 */
class Nutation {
	constructor(JDE, ALGO = 2000) {
		const IAU = ALGO === 2000 ? 2000 : 1980;
		this.algo = ALGORITHMS[`IAU${IAU}`];
		this.T = TIME.getJulianCentury(JDE);
		this.D = this.getD();
		this.l = this.getL();
		this.l_ = this.getL_();
		this.F = this.getF();
		this.O = this.getO();
		const { data, coefficient } = ASTRONOMICAL[`IAU${ALGO}`];
		this.nutation = data;
		this.coefficient = coefficient;
		this.RADIAN_ANGLE = Math.PI / 180;
	}

	/**
	 *
	 * @param {JC} T
	 * @returns {angle} nutation
	 */
	longitude(T = this.T) {
		const result = this.nutation.reduce((acc, row) => {
			const argument = this.calcArgument(row);
			return acc + this.algo.calcLongitude(T, argument, row);
		}, 0);
		return result * this.coefficient;
	}

	/**
	 *
	 * @param {JC} T
	 * @returns {angle} nutation
	 */
	obliquity(T = this.T) {
		const result = this.nutation.reduce((acc, row) => {
			const argument = this.calcArgument(row);
			return acc + this.algo.calcObliquity(T, argument, row);
		}, 0);
		return (result * this.coefficient) / 3600;
	}

	calcArgument([l, l_, F, D, O]) {
		let argument =
			this.l * l + this.l_ * l_ + this.F * F + this.D * D + this.O * O;
		argument *= this.RADIAN_ANGLE;
		return argument;
	}

	/**
	 * 月球平近点角
	 * @param {*} T
	 * @returns
	 */
	getL(T = this.T) {
		return this.algo.l(T);
	}

	/**
	 * 太阳(地球)平近点角
	 * @param {*} T
	 * @returns
	 */
	getL_(T = this.T) {
		return this.algo.l_(T);
	}

	/**
	 * 月球平升交角距
	 * @param {*} T
	 * @returns
	 */
	getF(T = this.T) {
		return this.algo.F(T);
	}

	/**
	 * 平距角-日月对地心角的距离
	 * @param {*} T
	 * @returns
	 */
	getD(T = this.T) {
		return this.algo.D(T);
	}

	/**
	 * 黄道与月球平轨道升交点黄经，从Date黄道平分点开始测量
	 * @param {*} T
	 * @returns
	 */
	getO(T = this.T) {
		return this.algo.O(T);
	}
}

module.exports = Nutation;
