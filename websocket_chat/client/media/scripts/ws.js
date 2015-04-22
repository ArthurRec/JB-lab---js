/**
 * Created by atataururu on 23.04.15.
 */


var config, socket;
config = {
    host:'127.0.0.1',
    port:'8081'
}

socket = new WebSocket("ws:"+config.host+":"+config.port);
socket.onopen = function() {
    console.log("Соединение установлено.");
};
socket.onclose = function(event) {
    if (event.wasClean) {
        console.log('Соединение закрыто чисто');
    } else {
        console.log('Обрыв соединения'); // например, "убит" процесс сервера
    }
    console.log('Код: ' + event.code + ' ' + event.reason);
};

socket.onmessage = function(event) {
    console.log("Получены данные " + event.data);
};

socket.onerror = function(error) {
    console.log("Ошибка " + error.message);
};