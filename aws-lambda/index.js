// https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions/ws-aws?tab=code
const AWS = require('aws-sdk');
const api = new AWS.ApiGatewayManagementApi({
    endpoint: '3f7oxp8ct8.execute-api.ap-northeast-2.amazonaws.com/production'
});

exports.handler = async (event) => {
    //console.log("Received event!")
    console.log(event);
    
    const route = event.requestContext.routeKey;
    const connectionId = event.requestContext.connectionId;
    
    switch (route) {
        case '$connect':
            console.log('Connection occurred');
            break;
        case '$disconnect':
            console.log("Disconnect occurred");
            break;
        case 'message':
            const req = JSON.parse(event.body);
            //console.log('Message received', req.message)
            await replytoMessage(req.message, connectionId);
            console.log('Sent message', req.message);
            break;
        default:
            console.log('Unkown route hit');
    }
    
    // TODO implement
    const response = {
        statusCode: 200,
        //body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

async function replytoMessage(response, connectionId) {
    const data = {message: response};
    const params = {
        ConnectionId: connectionId,
        Data: Buffer.from(JSON.stringify(data))
    };
    //console.log('tring to send message', response)
    return api.postToConnection(params).promise();
}