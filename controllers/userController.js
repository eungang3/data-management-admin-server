const userService = require("../services/userService");

const createUser = async (req, res) => {
  const { name, account, password, phoneNumber, regionId, role } = req.body;

  if (!(name && account && password && phoneNumber && role)) {
    res.status(400).json({ error: "필수 항목이 입력되지 않았습니다." });
    return;
  }

  try {
    const user = await userService.createUser(name, account, password, phoneNumber, regionId, role);
    res.status(201).json({ data: user });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ error: err.message });
  }
};

const checkAccount = async (req, res) => {
  const { account } = req.query;

  if (!account) {
    res.status(400).json({ error: "아이디를 입력해 주세요." });
    return;
  }

  try {
    await userService.checkAccount(account);
    res.status(200).json({ message: "사용 가능한 아이디입니다." });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { account, password } = req.body;
  console.log(req.body);

  if (!account) {
    const error = new Error("아이디를 입력해 주세요.");
    error.statusCode = 400;
    throw error;
  } else if (!password) {
    const error = new Error("비밀번호를 입력해 주세요.");
    error.statusCode = 400;
    throw error;
  }

  const token = await userService.login(account, password);
  res.status(200).json({ data: token });
};

const test = async (req, res) => {
  res.json({ message: req.user });
};

const updateUserController = async (req, res) => {
  try {
    const userDto = { ...req.body, headers: req.headers.authorization };

    if (!userDto.account) {
      const error = new Error("수정할 회원의 아이디를 선택해 주세요.");
      error.statusCode = 400;
      throw error;
    }

    if (!userDto.name && !userDto.phoneNumber && !userDto.regionId) {
      const error = new Error("이름, 번호, 지역에서 수정해 주세요.");
      error.statusCode = 400;
      throw error;
    }

    await userService.updateUserService(userDto);

    return res.status(200).json({ message: "정보 수정 성공" });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ error: err.message });
  }
};

module.exports = { createUser, checkAccount, login, updateUserController };
