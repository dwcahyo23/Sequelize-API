import UserModel from '../models/userModel.js';

export const CreateUser = async (req, res) => {
  const { name, data } = req.body;
  console.log(req.body);
  await UserModel.create({
    name,
    data,
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};

// export const CreateUser = async (req, res) => {
//   console.log(req.body);
//   try {
//     const response = await UserModel.create(
//       req.body,
//     );
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const FindUser = async (req, res) => {
  await UserModel.findAll({})
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};
