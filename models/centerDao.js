const myDataSource = require("./db.config");

/** 데이터 저장 */
const centerInsert = async (region_id, cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber, lnmadr) => {
    const centerInsert = await myDataSource.query(
        `INSERT INTO centers (region_id, cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber, lnmadr)
        VALUES(?,?,?,?,?,?,?,?,?)
        `,
        [region_id, cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber, lnmadr]
    );
    return centerInsert;
};

module.exports = {
    centerInsert,
};