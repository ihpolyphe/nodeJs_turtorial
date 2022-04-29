# Mysql

Node.js+express+mySQLのチュートリアル。セットアップ方法からデータベース作成、Node.jsで接続するまでを確認。

mysql起動
```
sudo service start mysql
```

mysqlにアタッチ
```
sudo mysql -u root -p<password>
```

## 参照先

- [linuxへ,mysqlインストール](https://qiita.com/nanbuwks/items/ed8adb2d4324c939a349)

- [ubuntuでnode.js+Express](https://qiita.com/bonkoturyu/items/eaf6f1927f6a547fcf58)

- [ubuntuにmysqlインストール](https://qiita.com/houtarou/items/a44ce783d09201fc28f5
https://www.t3a.jp/blog/infrastructure/mysql-start-stop/)

- [データベース作成](https://prog-8.com/docs/mysql-database-setup)

- [node.jsからmysqlに接続](https://mebee.info/2021/06/29/post-24526/)

- [作ったデータベースに接続](https://prog-8.com/docs/nodejs-mysql)

## Troubleshooting
https://qiita.com/monga3/items/6583c07a9b275b469608
https://onoredekaiketsu.com/can-not-root-login-to-mysql-with-error-1045-28000/

## Todo
- [ ] リポジトリの整理（リポジトリ名変更したり、データベースアクセスのファイル分けたり）
- [ ] viewファイルにアクセスできるようにするhttps://prog-8.com/docs/nodejs-mysql
- [ ] README作成