const aws = require('aws-sdk');

const db = new aws.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  const animal = event.eventBody['animal'];
  const food = event.eventBody['food'];

  if (food == 'grain' && animal == 'tiger')
    throw 'Tigers cannot eat grain!';

  callback(feedAnimal(animal, food),  {"statusCode": 200, "headers": {"Content-Type": "application/json"}, "body": "Success!"});
};

let feedAnimal = (animal, food) => {
  const params = {
    TableName: animal,
    Key: {
      S: 'energy'
    }
  }
}
