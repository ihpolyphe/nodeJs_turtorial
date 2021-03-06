const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

//Mysql設定
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Route246',
  database: 'ikku',
  port: 3306,
});

// FetchAPI設定
const jsonParser = bodyParser.json();

// create
app.post('/fetch', jsonParser, (req, res) => {
  const body = req.body;
  const ikku = req.body.ikku;

  const insertSql = 'INSERT INTO ikkulist SET ?';
  const selectSql = 'SELECT * FROM ikkulist WHERE ikku = ?';

  connection.query(insertSql, body, (err, result) => {
    if (err) throw err;
    connection.query(selectSql, ikku, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      res.send(result[0]);
    });
  });
});
// *!read
app.get('/fetch', jsonParser, (req, res) => {
  const selectSql = 'SELECT * FROM ikkulist';
  connection.query(selectSql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

// update
app.put('/fetch', jsonParser, (req, res) => {
  const id = req.body.id;
  const ikku = req.body.ikku;

  const updateSql = 'UPDATE ikkulist SET ikku = ? WHERE id = ?';
  const selectSql = 'SELECT * FROM ikkulist WHERE id = ?';

  connection.query(updateSql, [ikku, id], (err, result) => {
    if (err) throw err;
    connection.query(selectSql, id, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      res.send(result[0]);
    });
  });
});

//delete
app.delete('/fetch', jsonParser, (req, res) => {
  const id = req.body.id;
  const deleteSql = 'DELETE FROM ikkulist WHERE id = ?';

  connection.query(deleteSql, id, (err, result) => {
    if (err) throw err;
    res.json({
      id: Number(id),
      ikku: 'deleted',
    });
  });
});

app.listen(3000, () => {
  console.log('Start server port:3000');
});
