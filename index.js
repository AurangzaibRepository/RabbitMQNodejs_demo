const express = require("express");

const app = express();

require("dotenv").config();

require("./app/routes/sender.route")(app);
require("./app/routes/consumer.route")(app);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
