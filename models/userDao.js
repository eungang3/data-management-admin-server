const myDataSource = require("./db.config");

const createUser = async (name, account, hashedPw, phoneNumber, regionId, role) => {
  const user = await myDataSource.query(
    `INSERT INTO users (name, account, password, phone_number, region_id, role)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, account, hashedPw, phoneNumber, regionId, role]
  );
  return user;
};

const getUserAccount = async (account) => {
  const [user] = await myDataSource.query(
    `SELECT id, account, password, role, region_id 
    FROM users 
    WHERE account = ?`,
    [account]
  );
  return user;
};

const updateName = async (userDao) => {
  await myDataSource.query(
    `
    UPDATE users
    SET name = "${userDao.name}"
    WHERE account = "${userDao.account}"
    `
  );
};

const updatePhoneNumber = async (userDao) => {
  await myDataSource.query(
    `
    UPDATE users
    SET phone_number = "${userDao.phoneNumber}"
    WHERE account = "${userDao.account}"
    `
  );
};

const updateRegion = async (userDao) => {
  await myDataSource.query(
    `
    UPDATE users
    SET region_id = "${userDao.regionId}"
    WHERE account = "${userDao.account}"
    `
  );
};

const maxRegion = async () => {
  const [row] = await myDataSource.query(
    `
    SELECT MAX(id) as max
    FROM regions
    `
  );
  return row;
};

module.exports = {
  createUser,
  getUserAccount,
  updateName,
  updatePhoneNumber,
  updateRegion,
  maxRegion,
};
