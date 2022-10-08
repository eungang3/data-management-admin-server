const centerService = require("../services/centerService");
const dataFile = require("../db/전국치매센터표준데이터.json")

/** 데이터 저장 */
const centerInsert = async (req, res) => {
    const { 치매센터명, 치매센터유형, 의사인원수, 간호사인원수, 사회복지사인원수, 운영기관대표자명, 운영기관전화번호, 소재지지번주소 } = req.body
    const cnterNm = 치매센터명;
    const cnterSe = 치매센터유형;
    const doctrCo = 의사인원수;
    const nurseCo = 간호사인원수;
    const scrcsCo = 사회복지사인원수;
    const rprsntvNm = 운영기관대표자명;
    const operPhoneNumber = 운영기관전화번호;
    const lnmadr = 소재지지번주소;
    /**
     * api 변수형식이 한글인데, 만약 변수형식이 영문일경우 아래 사용
     * const { cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber, lnmadr } = req.body;
     */
    const centerInsert = await centerService.centerInsert(cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber, lnmadr);
    res.status(200).json({ records: centerInsert });
};

/** 포스트 /centers/api 보내면 치매센터 데이터 통째로 입력 */
const centerData = async (req, res) => {
    for (i = 0; i < dataFile.records.length; i++) {
        const cnterNm = dataFile.records[i].치매센터명;
        const cnterSe = dataFile.records[i].치매센터유형;
        const doctrCo = dataFile.records[i].의사인원수;
        const nurseCo = dataFile.records[i].간호사인원수;
        const scrcsCo = dataFile.records[i].사회복지사인원수;
        const rprsntvNm = dataFile.records[i].운영기관대표자명;
        const operPhoneNumber = dataFile.records[i].운영기관전화번호;
        const lnmadr = dataFile.records[i].소재지지번주소;

        const inputData = await centerService.centerInsert(
            cnterNm,
            cnterSe,
            doctrCo,
            nurseCo,
            scrcsCo,
            rprsntvNm,
            operPhoneNumber,
            lnmadr
        )
    }
    res.status(200).json({ message: "입력 완료" })
};

module.exports = {
    centerInsert,
    centerData
};