const userDao = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (name, account, password, phoneNumber, regionId, role) => {
  const hashedPw = await bcrypt.hash(password, 12);
  return await userDao.createUser(name, account, hashedPw, phoneNumber, regionId, role);
};

const checkAccount = async (account) => {
  const check = await userDao.getUserAccount(account);
  if (check) {
    const error = new Error("가입된 아이디가 있습니다.");
    error.statusCode = 400;
    throw error;
  }
  return check;
};

module.exports = { createUser, checkAccount };
