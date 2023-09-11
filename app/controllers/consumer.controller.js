const consumerService = require("../services/consumer.service");

exports.get = (req, res) => {
  consumerService.retrieve();
  res.status(200).send("Messages are being retrieved");
};
