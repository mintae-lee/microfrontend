# microfrontend
micro frontend sample

## 使用ライブラリ
Module Federation

`複数の個別のビルドによって単一のアプリケーションを構築するWebpackのコアプラグイン`

FYI:
https://zenn.dev/azukiazusa/articles/6686cb89ae13e5


solid-js

`インタラクティブな Web アプリケーションを作成するための JavaScript フレームワーク`

FYI:
https://www.solidjs.com/guides/getting-started


## cretae example app

1. remote
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

2. host
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

2. react
```
npx create-mf-app
? Pick the name of your app: react-host
? Project Type: Application
? Port number: 8080
? Framework: solid-js

cd react-host
yarn
yarn start
```