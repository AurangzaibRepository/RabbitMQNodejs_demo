const router = require("express").Router();
const producers = require("../controllers/producer.controller");

module.exports = (app) => {
  router.get("/", producers.sendAll);
  router.get("/:message", producers.send);

  app.use("/api/sender", router);
};
