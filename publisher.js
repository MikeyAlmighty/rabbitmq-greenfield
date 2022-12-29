const amqp = require('amqplib')

// Feeds in CLI arg after publish
const message = { number: process.argv[2] }

// Create connection to server (:5672)
const connect = async () =>  {
  try {
    const connection = await amqp.connect("amqp://localhost:5672")

    // Different channel to Consumer
    const channel = await connection.createChannel()

    // Ensure queue exists, if not creates it
    const result = await channel.assertQueue("jobs")

    // Send message to queue (job queue)
    channel.sendToQueue("jobs", Buffer.from(JSON.stringify(message)))
    console.info('job sent successfully: ', message.number)

  } catch(error) {
    console.error(error)
  }
}

connect()
