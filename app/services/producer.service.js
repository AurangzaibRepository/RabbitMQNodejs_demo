const amqplib = require("amqplib/callback_api");
const connection = require("./connection.service");

const queue = "tasks";

exports.sendMessages = () => {
  let taskCounter = 0;

  connection(queue, (error, channel) => {
    setInterval(() => {
      taskCounter += 1;
      channel.sendToQueue(queue, Buffer.from(`Message ${taskCounter}`));
      console.log(`Message ${taskCounter} sent`);
    }, 1000);
  });
};

exports.send = (message) => {
  connection(queue, (error, channel) => {
    channel.sendToQueue(queue, Buffer.from(message));
  });
};
