# microfrontend
micro frontend sample

# 使用ライブラリ

| Name | Description | FYI |
| --- | --- | --- |
| Module Federation | 複数の個別のビルドによって単一のアプリケーションを構築するWebpackのコアプラグイン | [webpack](https://webpack.js.org/concepts/module-federation/) |
| solid JS | インタラクティブな Web アプリケーションを作成するための JavaScript フレームワーク | [soild-js](https://www.solidjs.com/guides/getting-started) |


# サンプルApp作成

- 概要
remote app で共通コンポーネントを作成し、異なるJS Appで共有するサンプルを作成してみました。ボタンをクリック数を+1カウントするシンプルな機能ですが、一般的なJS appとReactで共通で使う処理です。
簡単にチュートリアルしたく、Module Federationとsolid JSを利用しました。よろしくお願いします。


1. 共通処理を持つ app 作成
```
npx create-mf-app
? Pick the name of your app: remote
? Project Type: Application
? Port number: 3000
? Framework: solid-js

cd remote
yarn
yarn start
```

2. 一般jsx app 作成
```
npx create-mf-app
? Pick the name of your app: host
? Project Type: Application
? Port number: 8080
? Framework: solid-js

cd host
yarn
yarn start
```

2. react app 作成
```
npx create-mf-app
? Pick the name of your app: react-host
? Project Type: Application
? Port number: 3001
? Framework: react

cd react-host
yarn
yarn start
```

![スクリーンショット 2023-01-11 16 55 27](https://user-images.githubusercontent.com/7709476/211750733-9e0c01f7-5951-41e1-9422-0f0085a81a57.png)

構成

```mermaid
graph TD;
    remote-->js;
    remote-->react;
```
