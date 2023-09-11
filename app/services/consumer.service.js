const amqplib = require("amqplib/callback_api");

const queue = "tasks";

exports.retrieve = () => {
  amqplib.connect(process.env.RABBITMQ_SERVER, (error, connection) => {
    connection.createChannel((err, channel1) => {
      channel1.assertQueue();
      channel1.consume(queue, (message) => {
        console.log(`Message: ${message.content}`);
        channel1.ack(message);
      });
    });
  });
};
