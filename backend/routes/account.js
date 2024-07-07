const express = require("express");
const { Account } = require("../db");
const mongoose = require("mongoose");
const { userMiddleware } = require("../middleware");


const router = express.Router();

router.get("/balance",userMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
    id: req.userId,
  });
});

router.post("/transfer",userMiddleware, async (req, res) => {
  const amount = req.body.amount;
  const to = req.body.to;

  const session = await mongoose.startSession();

  session.startTransaction();
  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );

  if (!account || amount > account.balance) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
  await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

  await session.commitTransaction();
  res.json({
    msg: "transfer successful",
  });
});

module.exports = router;
