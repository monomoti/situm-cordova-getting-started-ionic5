[本家](https://github.com/situmtech/situm-cordova-getting-started) のREADME には下記手順が抜けています。

```
$> npm i -g ionic
$> npm i -g cordova
$> npm i -g native-run
```

あと、cocoapadsが必要です。

また、プラットフォームにiosを追加する時にgooglemapsのバージョンエラーが出る場合は、下記を試してみmてください。

```
$> ionic cordova platform rm ios
$> ionic cordova plugin rm cordova-plugin-googlemaps
$> ionic cordova plugin add cordova-plugin-googlemaps@2.6.2

// might need this command
$> npm i --save cordova-common
$> ionic cordova platform add ios@5
$> ionic cordova build ios
```

実機で動かす場合は、

```
$> ionic cordova build ios
```
の後、

`platform/ios/` にあるMyApp.xcworkspaceを開いて実行してください。