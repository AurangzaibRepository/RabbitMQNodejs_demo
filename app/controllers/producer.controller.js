const producerService = require("../services/producer.service");

exports.sendAll = (req, res) => {
  producerService.sendMessages();
  res.send("Messages are being sent");
};

exports.send = (req, res) => {
  producerService.send(req.params.message);
  res.send(`Message "${req.params.message}" sent`);
};
