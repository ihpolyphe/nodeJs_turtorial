# APImysql

## サービス内容

サーバを起動し、MySQLの`ikku`データベースにアクセスし、現在のデータベースのテーブル情報を取得する。取得した情報をweb上に表示し、修正、削除のクエリを送信できるようにする。また新規の俳句に関してもMySQLデータベースに追加される仕組みを導入

## 実現方法

- index.js
`Express`、`body-parser`、`MySQL`を使用してFetch APIからMySQLサーバを呼び出して、俳句を`MySQL`データベースへ追加、修正、削除のクエリを送信する。サーバを立てるバックエンドファイル。

- index.html
フロントエンド。MySQLへの俳句の追加のウィンドウを形成。修正、削除は`fetch_crud.js`側で管理。

- fetch_crud.js
`MySQL`から取得した情報をweb上に表示し、修正、削除のボタンを形成、押された場合の処理をつかさどる。`index.html`から呼び出されるフロントエンド側のjsファイル。

## 用語
- Express
サーバサイドの実行環境として存在するNode.jsにおいてwebアプリケーション開発をスピードアップするために使用されるフレームワークの一つ。開発効率向上の具体例としてはREST APIの開発がある。
参照:[ゼロからはじめるExpress + Node.jsを使ったアプリ開発](https://qiita.com/nkjm/items/723990c518acfee6e473)

- body-parser
HTML(ejs)のformのinputに入力された値を受け取れるようにするもの。
`index.html`の以下で定義される。ここでは`name="ikku"`、`type="text"`の値を取得できる。
```
<input type="text" name="ikku" size="30" maxlength="30" class="postIkku">
```
受ける側では`index.js`で`req.body.[inputのnameに指定した値]`として取得できる。今回だと`req.body.ikku`となる。フロント(HTML)で受け取った情報をサーバ側(index.js)で受け取り処理を実行する流れ。
参照:[node.js(express)のbody-parserを理解する](https://qiita.com/anoonoll/items/050ebb62143ada022a32)

- MySQL
RTDB(リレーショナルデータベース)で、情報をため込んでおくサーバみたいなもの。MongoDBと呼ばれるJSON形式のデータを蓄えるデータベース管理システムも存在するらしい。

- CRUD処理
以下の処理の頭文字をとったものでデータベースを使ったWEBアプリケーションではたびたび使用される。

|処理|内容|
|---|---|
|Create(登録)|新しいデータを登録する|
|Read(参照)|レコードをテーブルから取り出す。|
|Update(更新)|レコードの内容を更新する。|
|Delete)削除|レコードを削除する。|


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
- [【Express】MySQLのデータをbody-parserでブラウザに返す](https://www.i-ryo.com/entry/2020/09/03/080732)

## 実装時のトラブルシューティング

- `postBtn.addEventListener`ボタン押下時のリアクション変数が定義と間違っていた→vscodeにpylintみたいなのを導入する。

- コロンであるべきところがコンマになっていた。
→コードチェックツールの導入

上記のコーディングミスが目立ったことから[JavaScript開発者のための優秀なVSCodeツール26選](https://qiita.com/rana_kualu/items/4a4ce6ea7f489dc19f63)を参考にvscodeの拡張機能でコーディング環境を整えていく。