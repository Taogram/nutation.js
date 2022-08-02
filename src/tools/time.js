/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2021-12-19 10:29:06
 * @LastEditors: lax
 * @LastEditTime: 2022-08-02 21:25:26
 * @FilePath: \nutation\src\tools\time.js
 */

const CALENDAR = {
	/**
	 * 儒略年（符号：a）是天文学中测量时间的测量单位.
	 * 定义的数值为365.25天，每天为国际单位的86400秒，总数为31,557,600秒。
	 */
	a: 365.25,
};

const JD = {
	JD2000: 2451545.0,
};

function getJulianCentury(jde) {
	return (jde - JD.JD2000) / (CALENDAR.a * 100);
}
module.exports = {
	getJulianCentury,
};
