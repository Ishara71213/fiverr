import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user?._doc;
    res.status(200).send(info);
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (req.userId !== user?._id.toString()) {
      return next(createError(403, "You can only delete own profile only!"));
    } else {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send("account deleted");
    }
  } catch (err) {
    next(err);
  }
};
// without middle ware
// export const deleteUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const token = req.cookies.accessToken;

//     if (!token) return res.status(401).send("not authenticated");

//     Jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
//       if (payload.id !== user?._id.toString()) {
//         res.status(403).send("you can only delete own profile only");
//       } else {
//         await User.findByIdAndDelete(req.params.id);
//         res.status(200).send("account deleted");
//       }
//     });
//   } catch (err) {
//     res.status(403).send("something went wrong");
//   }
// };
