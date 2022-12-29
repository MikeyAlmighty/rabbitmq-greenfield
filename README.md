# RabbitMQ Tutorial

[RabbitMQ Crash Course](https://www.youtube.com/watch?v=Cie5v59mrTg)


## Setup

Docker: `docker run --name rabbitmq -p 5672:5672 rabbitmq`
Scripts:

``` javascript
 // Publishes (With ARG i.e. npm run publish 69 - Publishes a message with { number: 69 } to queue.)
npm run publish {ARG} 
npm run consume // Consumes
```


## What have we learned?

### Publisher
- Establishes connection to rabbitMQ server (AMQP).
- Creates channel on connection. (Different channel than the Consumer)
- Ensures a queue exists (`channel.assertQueue(QUEUE_NAME)`) [If it doesn't exist, it gets created].
- Send a message to the queue (`channel.sendToQueue(QUEUE_NAME, SOME_CONTENT)`)

### Consumer
- Establishes connection to rabbitMQ server (AMQP).
- Creates channel on connection.(Different channel than the Publisher)
- Ensures a queue exists (`channel.assertQueue(QUEUE_NAME)`) [If it doesn't exist, it gets created].
- Consume a message from to the queue (`channel.consume(QUEUE_NAME, callbackFn)`)
- Acknowledge to server that Consumer has received message
