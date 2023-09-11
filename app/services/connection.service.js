const amqplib = require("amqplib/callback_api");

function createQueueChannel(queue, callback) {
  amqplib.connect(process.env.RABBITMQ_SERVER, (error, connection) => {
    if (error) {
      console.log(`Connection error: ${error.message}`);
    }

    connection.createChannel((channelError, channel) => {
      if (channelError) {
        console.log(`Channel error: ${channelError.message}`);
      }

      channel.assertQueue(queue);
      callback(null, channel);
    });
  });
}

module.exports = createQueueChannel;
