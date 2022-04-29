const express = require(`express`);
const http = require(`http`);

// Socket.ioをインポート
const socketIo = require('socket.io');

const app = express();
const server = http.Server(app);

// initialize
const io = socketIo(server);

const PORT = 3000;

// ルーティングの設定。`/`にリクエストがあった場合、src/index.html
app.use(express.static('simpleChat'));

//3000番ポートでHTTPサーバを起動
server.listen(PORT, () => {
    console.log('listening on port ${PORT}');
});

//　クライアントとのコネクションが確立したら、"connected"という表示をさせる
io.on('connection', (socket) => {
    console.log('user connected');

    // 'sendMessage'というイベント名で受信できる
    // 第一引数には受信したメッセージが入り、ログに出力する
    socket.on('sendMessage', (message) => {
        console.log('Message has been sent:', message);


        //"receiveMessage"というイベントを発火、受信したメッセージをすべてのクライアントに対して送信する
        io.emit('receiveMessage', message);
    });
});