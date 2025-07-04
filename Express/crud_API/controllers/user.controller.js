//! 1) import collection
const userCollection = require("../models/user.model");

const createUser = async (req, res) => {
  //? data is stored in req.body
  try {
    let { name, email, contactNo, password } = req.body;

    let newUser = await userCollection.create({ name, email, contactNo, password });
    //   let newUser = await userCollection.create(req.body);
    res.status(200).json({
      success: true,
      message: "user created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
      errMsg: error.message,
    });
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    let users = await userCollection.find();

    if (users.length === 0) {
      return res.status(200).json({
        success: true,
        message: "no users found",
      });
    }

    res.status(200).json({
      success: true,
      message: "users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong while fetching all users",
      errorObj: error,
      errMsg: error.message,
    });
  }
};

const fetchOneUser = async (req, res) => {
  try {
    let { id } = req.params;
    let user = await userCollection.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "user fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong while fetching one user",
      errorObj: error,
      errMsg: error.message,
    });
  }
};

const updateOneUser = async (req, res) => {
  //! the new Data
  let { name, email, contactNo, password } = req.body;
  console.log(email, password, contactNo, name);
  let { id } = req.params;

  await userCollection.updateOne(
    { _id: id }, //? filter part
    {
      $set: {
        //? updation part
        name,
        email,
        contactNo,
        password,
      },
    }
  );
  res.status(200).json({
    success: true,
    message: "user updated",
  });
};

const deleteOneUser = async (req, res) => {
  let { id } = req.params;
  await userCollection.deleteOne({ _id: id });
  res.status(200).json({
    success: true,
    message: "user deleted",
  });
};

const deleteMultipleUsers = async (req, res) => {
  await userCollection.deleteMany();
  res.status(200).json({
    success: true,
    message: "all users deleted",
  });
};

module.exports = {
  createUser,
  fetchAllUsers,
  fetchOneUser,
  updateOneUser,
  deleteOneUser,
  deleteMultipleUsers,
};

// https://www.amazon.in/Daikin-Inverter-Display-Technology-MTKL50U/dp/B0BK1KS6ZD/ref=sr_1_1?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.LpujZ4uISPUK8sa_6yNGVW-CEicI8CFtijd1DlKsf7L8_3kEEuWwnAEZTUtf5gJIoFsrMDrEfmW4NSXynccTI7ssOo8eamNDXbtRzRFl91R3udVjrN4wFFqpfDo8jGvjf6XNnGF4u39oFiJ_-dIbTz07VdIxIxM8Zly8CyqS_u5s_beqGtup5Ese4xdW34IAscClaIahyd7-CEEEXVLC1EARU_zKN8kMsklyZn4RtOM2HbvrckkgZRQUZz8F78OAkAFemvW_YzqxPERXmViXEtcViCB_8k1l7vhC2f-MJ2k.1At0ts5gwnbngmkZayvkSt38mp3GTb0LLxGQ9AlCQsQ&dib_tag=se&pd_rd_r=99fc4c74-9a08-4d01-81b1-9893534f8453&pd_rd_w=PS2Un&pd_rd_wg=YO1eg&qid=1749536191&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-1&th=1

// https://www.amazon.in/Voltas-Window-183-Vectra-Pearl/dp/B0BSJ7KZLJ/ref=sr_1_3?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.LpujZ4uISPUK8sa_6yNGVW-CEicI8CFtijd1DlKsf7L8_3kEEuWwnAEZTUtf5gJIoFsrMDrEfmW4NSXynccTI7ssOo8eamNDXbtRzRFl91R3udVjrN4wFFqpfDo8jGvjf6XNnGF4u39oFiJ_-dIbTz07VdIxIxM8Zly8CyqS_u5s_beqGtup5Ese4xdW34IAscClaIahyd7-CEEEXVLC1EARU_zKN8kMsklyZn4RtOM2HbvrckkgZRQUZz8F78OAkAFemvW_YzqxPERXmViXEtcViCB_8k1l7vhC2f-MJ2k.1At0ts5gwnbngmkZayvkSt38mp3GTb0LLxGQ9AlCQsQ&dib_tag=se&pd_rd_r=99fc4c74-9a08-4d01-81b1-9893534f8453&pd_rd_w=PS2Un&pd_rd_wg=YO1eg&qid=1749536191&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-3&th=1
