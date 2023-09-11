const amqplib = require("amqplib/callback_api");

function createQueueChannel(queue, callback) {
  function onConnectionCreated(error, connection) {
    if (error) {
      console.log(`Connection error: ${error.message}`);
      return;
    }

    function onChannelCreated(channelError, channel) {
      if (channelError) {
        console.log(`Channel error: ${channelError.message}`);
        return;
      }

      function onQueueCreated(queueError) {
        if (queueError) {
          console.log(`Queue error: ${queueError.message}`);
          return;
        }

        callback(null, channel);
      }

      channel.assertQueue(queue, { durable: true }, onQueueCreated);
    }

    connection.createChannel(onChannelCreated);
  }

  amqplib.connect(process.env.RABBITMQ_SERVER, onConnectionCreated);
}

module.exports = createQueueChannel;
