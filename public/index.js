let correct = {
    status: 'ok'
}
let not_found = {
    message: 'socket not found'
}

const response = {
    correct,
    not_found
};

function emit(socket, url, data) {
    socket.on(url, function (data) {
        console.log(data);
        socket.emit('response', { response: response.correct });
    });
}