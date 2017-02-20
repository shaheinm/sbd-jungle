const aws = require('aws-sdk');

const lambda = new aws.Lambda({
  region: 'us-east-1'
});

exports.handler = (event, context, callback) => {
  console.log('Welcome to the Jungle!');
  let eventBody = event.body;
  let action = event.body['action'];
  callback(runLambdaFunction(eventBody, action), {"statusCode": 200, "headers": {"Content-Type": "application/json"}, "body": "Success!"});
};

let runLambdaFunction = function(eventBody, action) {
  lambda.invoke({
    FunctionName: action,
    Payload: eventBody
  }, (error, data) => {
    console.log(error);
  });
};
