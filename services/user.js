const userDao = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

const login = async (account, req_password) => {
  const user = await userDao.getUserAccount(account);
  if (user) {
    const { id, password, role, region_id } = user;
    const isPasswordCorrect = bcrypt.compareSync(req_password, password);

    if (isPasswordCorrect) {
      const token = jwt.sign(
        { userId: id, role: role, regionId: region_id },
        process.env.JWT_SECRET_KEY
      );
      return token;
    } else {
      const error = new Error("비밀번호가 일치하지 않습니다.");
      error.statusCode = 400;
      throw error;
    }
  } else {
    const error = new Error("존재하지 않는 아이디입니다.");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = { createUser, checkAccount, login };
