const centerDao = require("../models/centerDao");

/** 데이터 저장 */
const centerInsert = async (cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber, lnmadr) => {
    if (lnmadr.indexOf("서울특별시") == 0) {
        region_id = 1
    } else if (lnmadr.indexOf("부산광역시") == 0) {
        region_id = 2
    } else if (lnmadr.indexOf("인천광역시") == 0) {
        region_id = 3
    } else if (lnmadr.indexOf("대구광역시") == 0) {
        region_id = 4
    } else if (lnmadr.indexOf("대전광역시") == 0) {
        region_id = 5
    } else if (lnmadr.indexOf("광주광역시") == 0) {
        region_id = 6
    } else if (lnmadr.indexOf("울산광역시") == 0) {
        region_id = 7
    } else if (lnmadr.indexOf("세종특별자치시") == 0) {
        region_id = 8
    } else if (lnmadr.indexOf("경기도") == 0) {
        region_id = 9
    } else if (lnmadr.indexOf("강원도") == 0) {
        region_id = 10
    } else if (lnmadr.indexOf("충청북도") == 0) {
        region_id = 11
    } else if (lnmadr.indexOf("충청남도") == 0) {
        region_id = 12
    } else if (lnmadr.indexOf("전라북도") == 0) {
        region_id = 13
    } else if (lnmadr.indexOf("전라남도") == 0) {
        region_id = 14
    } else if (lnmadr.indexOf("경상북도") == 0) {
        region_id = 15
    } else if (lnmadr.indexOf("경상남도") == 0) {
        region_id = 16
    } else if (lnmadr.indexOf("제주특별자치도") == 0) {
        region_id = 17
    } else {
        region_id = 0
    }

    const centerInsert = await centerDao.centerInsert(region_id, cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber, lnmadr);
    return centerInsert;
};

module.exports = {
    centerInsert,
};