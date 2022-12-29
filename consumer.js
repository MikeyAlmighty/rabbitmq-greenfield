const amqp = require('amqplib')

const connect = async () =>  {
  try {
    const connection = await amqp.connect("amqp://localhost:5672")

    // Different channel to Publisher
    const channel = await connection.createChannel()

    const result = await channel.assertQueue("jobs")

    // Consume Queue
    channel.consume("jobs", message => {
      const input = JSON.parse(message.content.toString())
      console.log('received job with input: ', input)
      if (input.number == 69) channel.ack(message) // Arbitrary acknowledgement example
    })
    console.log('Waiting for messages...')
  } catch(error) {
    console.error(error)
  }
}

connect()
