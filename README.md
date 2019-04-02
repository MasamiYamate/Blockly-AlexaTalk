# Blockly-AlexaTalk
このプログラムは、ビジュアルプログラミングエディタ「Blockly」の結果をAlexaに読み上げさせるスキルを作成するものです。

## Description
プログラミングの理解が出来ていない子供に向けて、「順次」「反復」「分岐」の概念を楽しく伝えたいと思って開発しています。
Alexaに発話させる内容を「Blockly」のエディタ上でパーツを組み合わせて作り上げることが到達目標です。

## Installation
### 事前準備
本プロジェクトを動かすには、「node.js」と「ask-cli」のセットアップが必要になります。
インストールは下記の公式ページを参照してください。

[Node.js](https://nodejs.org)  
[ask-cli](https://developer.amazon.com/ja/docs/smapi/ask-cli-command-reference.html)

また、ask-cliのセットアップ時に「AWSアカウント」と「Amazon developerアカウント」も必要になります。
こちらも別途事前に登録を行いましょう。

適当なディレクトリで、本プロジェクトを```git clone```してください。

```
$ cd hoge/hoge
$ git clone https://github.com/MasamiYamate/Blockly-AlexaTalk.git
```

git clone後、ルートディレクトリにて下記コマンドを実行し依存モジュールをインストールします
```
$ cd Blockly-AlexaTalk-master/
$ npm install
```

## How to us
### 起動方法
ルートディレクトリで下記コマンドを実行してください。
実行後、localhost:3000でBlocklyのエディタ画面を開くことができます。

```
$ node index.js
```

### 処理内容を組み立てる
![スクリーンショット 2019-04-02 15 25 08](https://user-images.githubusercontent.com/5555537/55380595-9adbed00-555b-11e9-86f7-62d099c8b639.png)
Alexaに対して「〇〇を開いて」と呼びかけた後、Blocklyの処理内容をAlexaが読み上げ、セッションクローズするワンショットのスキルのみ作ることができます。
Blocklyを用いて組み立てたロジックは、スキル起動後読み上げる文字列を生成するメソッドに反映されます。

### Lambdaへアップロードする
ページ下部に配置している「Lambdaへアップロード」ボタンをクリックすることで、ask-cliに紐づいたAWSの権限を元にLambdaにスキルスクリプトが自動的にアップされます。
アップロードが完了しましたら、ボタン脇にSuccessと表示されますので、表示後にスキルを呼び出すとBlocklyで組み立てた処理の結果を読み上げます。
