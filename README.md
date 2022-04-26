# simpleChat

Node.jsを勉強するために[Socket.ioを使って簡易的なチャットアプリを作る](https://weseek.co.jp/tech/1484/)を参考にして簡単なチャットボットを作成

# Todo
- [ ] フロントエンドの改良
→ cssの設定と読み込めるようにするよう改良

[【Express】静的HTMLファイルの表示（res.sendFile()、express.static()）](https://www.i-ryo.com/entry/2020/04/16/215205)

- [ ] [Node.js / Expressを習得するためにやったことまとめ（随時更新）](https://qiita.com/i-ryo/items/d7416e0c4a6035c30288)を読む

→次ここかな[【Epxress】データベース接続の比較（MySQLとMongoDB）](https://qiita.com/i-ryo/items/d7416e0c4a6035c30288)

- [ ] glitchでwebサーバーに公開
- [ ] コマンドプロンプトでの開発が煩わしいのでWSLでNode.js開発できるようにセットアップする。

## Node.js環境構築(winodows)
- [Node.jsの開発環境を用意しよう！（Windows）](https://prog-8.com/docs/nodejs-env-win)
- [Yarn を導入しよう（Windows）](https://qiita.com/kurararara/items/21c70c4adfd3bb323412)

## クローンして動かす方法
```
## リモートリポジトリからクローン
$ git clone https://github.com/ihpolyphe/simpleChat

## ディレクトリーに入る
$ cd simpleChat

## 依存関係のイントール
$ yarn install

## サーバーの起動
$ node index.js
```

起動に成功すると、ブラウザで`http://localhost:3000/`でチャットボットが起動できる。
