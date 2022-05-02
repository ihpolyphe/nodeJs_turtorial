const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

// データベース接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'hayato',
  password: 'Haisuinozin08',
  database: 'testMysql'
});

// データベースに接続できたらコンソールにConnectedを表示
connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
  });

// テーブルitemsのデータを取得してindex.ejsで表示
app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM items',
      (error, results) => {
        res.render('hello.ejs',{items:results});
      }
    );
  });
  
  app.listen(3000);