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

module.exports = { createUser, getUserAccount };
