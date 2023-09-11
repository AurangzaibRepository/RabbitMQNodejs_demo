const consumerService = require("../services/consumer.service");

exports.get = (req, res) => {
  consumerService.retrieve();
  res.send("Messages are being retrieved");
};
