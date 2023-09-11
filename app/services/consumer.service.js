const amqplib = require("amqplib/callback_api");
const connection = require("./connection.service");

const queue = "tasks";

exports.retrieve = () => {
  connection(queue, (error, channel) => {
    channel.consume(queue, (message) => {
      console.log(`Message: ${message.content}`);
      channel.ack(message);
    });
  });
};
