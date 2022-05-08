# NodeJs turtorial

Node.js を勉強するための練習
作成したアプリ

- simpleChat:非同期な簡単なチャット機能を作成
- mysql:Mysql の練習ディレクトリ。データベースを作成してアクセスできるところまでできている。

# Todo

- [x] フロントエンドの改良
      → css の設定と読み込めるようにするよう改良(今後さらに UI 改良する)

[【Express】静的 HTML ファイルの表示（res.sendFile()、express.static()）](https://www.i-ryo.com/entry/2020/04/16/215205)

- [x] [Node.js / Express を習得するためにやったことまとめ（随時更新）](https://qiita.com/i-ryo/items/d7416e0c4a6035c30288)を読む
      →Express を使用した CRUD 処理まで実装できたのでいったん区切り。

- [ ] REST API の勉強

- [ ] glitch で web サーバーに公開
- [x] コマンドプロンプトでの開発が煩わしいので WSL で Node.js 開発できるようにセットアップする。
- [x] README.md 修正（ここは Node.js の話、simpleChat に README.md 追加）

## Node.js 環境構築(winodows)

- [Node.js の開発環境を用意しよう！（Windows）](https://prog-8.com/docs/nodejs-env-win)
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

## Javascript 拡張機能

- ESlint:静的チェックツール
- Prettier:自動成型ツール

参照:[【初心者向け】Visual Studio Code へ ESLint と Prettier を導入する](https://qiita.com/genbu-jp/items/a48bcb9df209b71c2de3)
