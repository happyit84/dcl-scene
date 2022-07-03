// index2.js
// https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions/ws-aws?tab=code
const AWS = require('aws-sdk');
const api = new AWS.ApiGatewayManagementApi({
    endpoint: '3f7oxp8ct8.execute-api.ap-northeast-2.amazonaws.com/production'
});
let connectionIds = {};

exports.handler = async (event) => {
    //console.log("Received event!")
    console.log(event);
    
    const route = event.requestContext.routeKey;
    const connectionId = event.requestContext.connectionId;
    
    if (!connectionIds[connectionId])
    {
        connectionIds[connectionId] = true;
        console.log('Connection occurred', connectionId);
    }
    
    switch (route) {
        case '$connect':
            //connectionIds[connectionId] = true;
            console.log('Connection occurred in $connect', connectionId);
            break;
        case '$disconnect':
            delete connectionIds[connectionId];
            console.log("Disconnect occurred");
            break;
        case 'message':
            const req = JSON.parse(event.body);
            //console.log('Message received', req.message)
            await broadcastMessage(Object.keys(connectionIds), req.message);
            console.log('broadcasted message', req.message);
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

async function sendData(id, dataString) {
    try {
        const param = {
            ConnectionId: id,
            Data: Buffer.from(dataString)
        };
        console.log('sendData', param);
        return api.postToConnection(param).promise();
    } catch (err) {
        console.error(err);
    }
    return null;
}

async function broadcastMessage(ids, message) {
    console.log("broadcastMessage", ids);
    const data = {message: message};
    const dataString = JSON.stringify(data);
    const all = ids.map(i => sendData(i, dataString));
    return Promise.all(all);
}

