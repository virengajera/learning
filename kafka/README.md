# Table of Contents

1. [Kafka](#kafka)
    - [Queue vs Pub/Sub](#queue-vs-pubsub)
    - [Kafka Broker](#kafka-broker)
    - [Kafka Producer and Consumer](#kafak-producer-and-consumer)
    - [Kafka Partitions](#kafka-partitions)
    - [Consumer Group](#consumer-group)
    - [Distributed System with Kafka and zookeeper](#distributed-system-with-kakfa-with-zookeeper)
    - [Running Kafka with zookeeper on Docker](#running-kafka-with-zookeeper-on-docker)


# **Kafka**

## **Queue vs Pub/Sub**


**Kafka** can implement both Queue and Pub/Sub with **Consumer Group**

| Queue | Pub/Sub |
|-----------|-----------|
| Message is published once and consume once(only one consumer)| Message can be consumed by Multiple consumer|
| Once message is consume by consumer-1 then same message cannot be consumed by consumer-2 | Same message can be consumed by Multiple consumer|
| e.g. Consider Payment system once message is published you want only one system to execute payment process one time only.| e.g. Broadcasting message. Youtube video once compressed can be broadcasted to multiple devices so that they all can view compressed video. |


## **Kafka Broker**

**Kafka Broker :** It is a Kafka Server running on port default port of **9092**.

**Topics :** 
Logical partitions of Messages. From where you read and write messages.


| ![Kafka Broker](./assets/kafkabroker.png) | 
|:--:| 
| *Kafka broker with Topics* |


## **Kafak Producer and Consumer**

Producer publishes message to topic and consumer consumes those message from topic.

Consumer is responsible for getting messages from Topics. While in RabbitMQ broker pushes messages.

| ![Kafka producer and Consumer](./assets/producer_consumer.png) | 
|:--:| 
| *Kafka Producer and Consumer* |



## **Kafka Partitions**

When publisher publishes message to partition it returns "Current Position" value.

| ![Kafka Partitons](./assets/partitions.png) | 
|:--:| 
| *Kafka Partitions* |


## **Consumer Group**

Through consumer group you can implement queue or pub/sub. Multiple consumer group can consume data in parallel.

If you have only 1 Consumer-Group and 1-Consumer that consumer will be responsible for all the partitions means all the messages from multiple partitions can be read.

| ![Consumer group with one consumer](./assets/consumer-group-1.png) | 
|:--:| 
| *Consumer group with one consumer* |


By adding one more consumer in group it rebalances means consumer-1 will get partion-1 and consumer-2 will get partition-2. 

You can have consumer-1 consume multiple partions and consumer-2 consume single partition. But good practice is each consumer should have its own partition. **By having each consumer having individual parition you can achieve queue**. They run in parallel.


| ![Consumer group with 2 consumer](./assets/consumer-group-2.png) | 
|:--:| 
| *Each consumer get individual partition it behaves like queue* |


**By putting each consumer in its own unique/individual consumer group you can achieve Pub/Sub.** It is at group level. So group-1 and group-2 can read same partition and positiion of message will be at group level.


| ![Consumer group achieve queue or pub/sub](./assets/consumer-group-3.png) | 
|:--:| 
| *Consumer group achieve queue or pub/sub* |



## **Distributed System with Kakfa with zookeeper**

In distributed system you tends to replicate. Follower copies data from Leader. Now problem arises when Leadear went down then from whom follower is going to copy data.

So, in Kafka at partitions Level Leadear and Follower is maintaine. Broker-1 will be Leader of Partition-1 and follower of Broker-2 Partition-2 . Broker-2 will be leader of Partition-2 and follower of Broker-1 partition-1.

This information of leader and follower is stored in Zookeeper server.

Producing Message : When you publish message. In the backend both server communicates(gossip) with each other and writes messages to corresponding partition with leader in correct broker.
 

| ![Kafka distributed system with zookeeper](./assets/distributed-kafka-zookeeper.png) | 
|:--:| 
| *Kafka distributed system with zookeeper* |


## **Running Kafka with zookeeper on Docker**

Spin up Zookeeper : 
```docker run -p 2181:2181 --name zookeeper zookeeper:latest```


Spin up Kafka with 1 cluster : 
```docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=localhost:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 --name kafka confluentinc/cp-kafka```

you need to specify enviroment varaible with -e for kafka you need zookeeper. Also listener  we define on which port they send and consume message also plaintext protocol is defined means un-encrypted. Last Replication part indicates how many instances of kafka you want we want only one.