import zmq from 'zeromq'

export function sendRequest(projectFolder, requestType, dataObj, callBack) {
    let msgObj = {
        "project_folder": projectFolder,
        "request_type": requestType,
        "dataObj": dataObj
    }
    const requester = zmq.socket('req');
    requester.connect('tcp://localhost:50010');
    requester.send(JSON.stringify(msgObj))
    requester.on('message', function (msg) {
        callBack(JSON.parse(msg.toString()))
        requester.close()
    });
}

