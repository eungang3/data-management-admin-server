const downService = require("../services/downService");

const getCenter = async (req, res) => {
  try {
    const { regionId } = req.user;
    const { cnterNm, cnterSe, doctrCo, nurseCo, scrcsCo, rprsntvNm, operPhoneNumber } = req.query;

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename*=utf-8''${encodeURI("치매센터 표준데이터")}.xlsx`
    );
    const centerExcel = await downService.getCenter(
      regionId,
      cnterNm,
      cnterSe,
      doctrCo,
      nurseCo,
      scrcsCo,
      rprsntvNm,
      operPhoneNumber
    );
    res.status(200).end(centerExcel);
  } catch (err) {
    console.log(err);
    res.status(err.code || 500).json({ message: err.message });
  }
};

module.exports = {
  getCenter,
};
