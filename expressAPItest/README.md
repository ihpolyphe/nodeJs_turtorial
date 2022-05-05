# expressAPItest

Express、`body-parser`を使用してFetch APIおよびformのリクエストを受け取りレスポンスを返す動きを作る。

## setup

```
npm init -y 
npm install express --save
```

## 起動
`nodemon`で起動する。これはファイルを編集後nodeを再起動しなくてもブラウザのリロードでファイルが再読み込みされる仕組み。

インストール
```
sudo npm install nodemon -g
```

サーバ起動
```
cd nodeJs_turtorial/expressAPItest
nodemon index.js
```
ブラウザで`localhost:3000`にアクセス

## 参照
- [【Express】body-parserでFetch API（およびForm）のPOST送信を受け取る](https://www.i-ryo.com/entry/2020/08/30/095357)