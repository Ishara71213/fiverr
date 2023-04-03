import Jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(createError(401, "Not authenticated!"));
  Jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    } else {
      req.userId = payload.id;
      req.isSeller = payload.isSeller;
      next();
    }
  });
};
// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.accessToken;
//   if (!token) return next(createError(401, "Not authenticated!"));
//   Jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
//     if (err) {
//       return next(createError(403, "Token is not valid!"));
//     } else {
//       req.userId = payload.id;
//       req.isSeller = payload.isSeller;
//       next();
//     }
//   });
// };
