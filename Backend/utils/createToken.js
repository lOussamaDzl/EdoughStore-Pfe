import Jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = Jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  // set JWT as an HTTP-Only Cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV != "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateToken;
