const mysql = require('mysql');
const express= require('express');

const app = express();

// DBに接続する設定情報
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Haisuinozin08',
    database:'testMysql'
});

connection.connect((err) => {
    if (err) {
        console.log("error connection");
        return;
    }

    console.log('接続完了');
});

app.get('/', (req, res)=>{
    connection.query(
        'SELECT * FROM users',
        (error, results)=> {
            console.log(results);
            res.render(hello.ejs);
        }
    );
});

app.listen(3000)