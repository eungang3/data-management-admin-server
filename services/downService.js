const downDao = require("../models/downDao");
const exceljs = require("exceljs");

const getCenter = async (
  regionId,
  cnterNm,
  cnterSe,
  doctrCo,
  nurseCo,
  scrcsCo,
  rprsntvNm,
  operPhoneNumber
) => {
  const data = {};

  if (
    !(
      regionId ||
      cnterNm ||
      cnterSe ||
      doctrCo ||
      nurseCo ||
      scrcsCo ||
      rprsntvNm ||
      operPhoneNumber
    )
  ) {
    console.log("대표관리자 데이터 조회");
    data.center = await downDao.getCenter();
    const result = createExcel(data);
    return result;
  }

  if (!(cnterNm || cnterSe || doctrCo || nurseCo || scrcsCo || rprsntvNm || operPhoneNumber)) {
    console.log("지역관리자 데이터 조회");
    data.center = await downDao.getCenterData(regionId);
    const result = createExcel(data);
    return result;
  } else {
    if (!doctrCo) {
      doctrCo = 100000;
    }
    if (!nurseCo) {
      nurseCo = 100000;
    }
    if (!scrcsCo) {
      scrcsCo = 100000;
    }

    if (!regionId) {
      console.log("대표관리자 검색 조회");
      data.center = await downDao.getFilterCenter(
        cnterNm,
        cnterSe,
        doctrCo,
        nurseCo,
        scrcsCo,
        rprsntvNm,
        operPhoneNumber
      );
      const result = createExcel(data);
      return result;
    }

    console.log("지역관리자 검색 조회");
    data.center = await downDao.getFilterCenterData(
      regionId,
      cnterNm,
      cnterSe,
      doctrCo,
      nurseCo,
      scrcsCo,
      rprsntvNm,
      operPhoneNumber
    );

    const result = createExcel(data);
    return result;
  }
};

const createExcel = async (data) => {
  const workbook = new exceljs.Workbook();

  workbook.creator = "backend3";
  workbook.lastModifiedBy = "backend3";
  workbook.created = new Date(2019, 9, 18);
  workbook.modified = new Date();
  workbook.lastPrinted = new Date(2022, 10, 09);

  const workSheet = workbook.addWorksheet("centers");

  workSheet.columns = [
    { header: "ID", key: "id", width: 5, style: { alignment: { horizontal: "center" } } },
    {
      header: "치매센터명",
      key: "cnterNm",
      width: 50,
    },
    {
      header: "치매센터유형",
      key: "cnterSe",
      width: 18,
      style: { alignment: { horizontal: "center" } },
    },
    {
      header: "소재지도로명주소",
      key: "lnmadr",
      width: 45,
    },
    {
      header: "의사인원수",
      key: "doctrCo",
      width: 15,
      style: { alignment: { horizontal: "center" } },
    },
    {
      header: "간호사인원수",
      key: "nurseCo",
      width: 16,
      style: { alignment: { horizontal: "center" } },
    },
    {
      header: "사회복지사인원수",
      key: "scrcsCo",
      width: 20,
      style: { alignment: { horizontal: "center" } },
    },
    {
      header: "운영기관대표자명",
      key: "rprsntvNm",
      width: 20,
      style: { alignment: { horizontal: "center" } },
    },
    {
      header: "운영기관전화번호",
      key: "operPhoneNumber",
      width: 20,
      style: { alignment: { horizontal: "center" } },
    },
  ];

  const headerStyle = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "cce6ff" },
  };
  const headerBorderStyle = {
    left: { style: "thin", color: { argb: "bfbfbf" } },
    right: { style: "thin", color: { argb: "bfbfbf" } },
  };

  for (let i = 1; i <= workSheet.columnCount; i++) {
    const headerEachCell = workSheet.getCell(`${String.fromCharCode(i + 64)}1`);
    headerEachCell.fill = headerStyle;
    headerEachCell.border = headerBorderStyle;
    headerEachCell.alignment = { horizontal: "center" };
    headerEachCell.font = { bold: true, size: 13 };
  }

  workSheet.addRows(data.center);

  return workbook.xlsx.writeBuffer();
};

module.exports = {
  getCenter,
};
