# NodeJs turtorial

Node.jsを勉強するための練習
作成したアプリ
- simpleChat:非同期な簡単なチャット機能を作成
- mysql:Mysqlの練習ディレクトリ。データベースを作成してアクセスできるところまでできている。

# Todo
- [x] フロントエンドの改良
→ cssの設定と読み込めるようにするよう改良(今後さらにUI改良する)

[【Express】静的HTMLファイルの表示（res.sendFile()、express.static()）](https://www.i-ryo.com/entry/2020/04/16/215205)

- [ ] [Node.js / Expressを習得するためにやったことまとめ（随時更新）](https://qiita.com/i-ryo/items/d7416e0c4a6035c30288)を読む

- [ ] glitchでwebサーバーに公開

- [x] コマンドプロンプトでの開発が煩わしいのでWSLでNode.js開発できるようにセットアップする。

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
