const amqplib = require("amqplib/callback_api");
const connection = require("./connection.service");

const queue = "tasks";
let taskCounter = 0;

exports.sendMessages = () => {
  amqplib.connect(process.env.RABBITMQ_SERVER, (error, connection) => {
    connection.createChannel((err, channel1) => {
      channel1.assertQueue();

      setInterval(() => {
        taskCounter += 1;
        channel1.sendToQueue(queue, Buffer.from(`Message ${taskCounter}`));
        console.log(`Message ${taskCounter} sent`);
      });
    });
  });
};

exports.send = (message) => {
  connection(queue, (error, channel) => {
    channel.sendToQueue(queue, Buffer.from(message));
  });
};
