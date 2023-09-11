const router = require("express").Router();
const consumers = require("../controllers/consumer.controller");

module.exports = (app) => {
  router.get("/", consumers.get);

  app.use("/api/consumer", router);
};
