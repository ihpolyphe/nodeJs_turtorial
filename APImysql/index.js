const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

//Mysql設定
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Route246',
    database:'ikku',
    port:3306
});

// FetchAPI設定
const jsonParser = bodyParser.json();

app.post('/fetch', jsonParser, (req, res) => {
    console.log(req.body);
    const ikku = req.body.ikku;
    console.log('ikku->' + ikku);
   
   connection.query('SELECT id, ikku FROM ikkulist',
   (err, result) => {
       if(err) throw err;
       const resIkku = result[0].ikku;
       console.log('resIkku->' + resIkku);
       const resText = '今日の一句' + resIkku;
       res.send(resText);
   });
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});