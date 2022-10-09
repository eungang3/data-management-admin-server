const myDataSource = require("./db.config");

const getCenter = async () => {
  try {
    const result = JSON.parse(
      JSON.stringify(
        await myDataSource.query(
          `
          SELECT *
          FROM centers
          `
        )
      )
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const getFilterCenter = async (
  cnterNm,
  cnterSe,
  doctrCo,
  nurseCo,
  scrcsCo,
  rprsntvNm,
  operPhoneNumber
) => {
  try {
    const result = JSON.parse(
      JSON.stringify(
        await myDataSource.query(
          `
          SELECT *
          FROM centers
          WHERE (cnterNm LIKE '%${cnterNm}%')
          OR(cnterSe = '${cnterSe}')
          OR(doctrCo >= ${doctrCo})
          OR(nurseCo >= ${nurseCo})
          OR(scrcsCo >= ${scrcsCo})
          OR(rprsntvNm LIKE '%${rprsntvNm}%')
          OR(operPhoneNumber LIKE '%${operPhoneNumber}%')
          `
        )
      )
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const getCenterData = async (regionId) => {
  try {
    const result = JSON.parse(
      JSON.stringify(
        await myDataSource.query(
          `
          SELECT *
          FROM centers
          WHERE region_id = ${regionId}
          `
        )
      )
    );
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

const getFilterCenterData = async (
  regionId,
  cnterNm,
  cnterSe,
  doctrCo,
  nurseCo,
  scrcsCo,
  rprsntvNm,
  operPhoneNumber
) => {
  try {
    const result = JSON.parse(
      JSON.stringify(
        await myDataSource.query(
          `
          SELECT *
          FROM centers
          WHERE ((cnterNm LIKE '%${cnterNm}%')
          OR (cnterSe = '${cnterSe}')
          OR (doctrCo >= '${doctrCo}')
          OR (nurseCo >= '${nurseCo}')
          OR (scrcsCo >= '${scrcsCo}')
          OR (rprsntvNm LIKE '%${rprsntvNm}%')
          OR (operPhoneNumber LIKE '%${operPhoneNumber}%'))
          AND (region_id = '${regionId}');
          `
        )
      )
    );

    region_id = "${regionId}";
    return result;
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = "500";
    throw error;
  }
};

module.exports = {
  getCenter,
  getFilterCenter,
  getCenterData,
  getFilterCenterData,
};
