# 建立 Express 專案

1. npm init 

會詢問package name、version、description、entry point、test script、author、license等資訊生成[package.json](./package.json) 

2. npm install express 

會新增 package.json 、 package-lock.json 、 node_modules資料夾

- 觀察 package.json 的變化 

package.json的dependencies新增了express和其版號。
- 觀察 package-lock.json 的變化 

package-lock.json記錄package的dependencies和sub-dependencies。 

- 觀察 node_modules 裡面有什麼 

node_modules裡放的是安裝的套件。以 npm install express 這個指令來說，除了express還包含其他依賴套件。

---

# package.json 中的 dependencies 與 devDependencies 分別是什麼
# package.json 中的 scripts 這個區塊怎麼用？
# Port number 要怎麼以環境變數來設定？
使用`var port = process.env.PORT`，執行app.js要執行`PORT=4444 node app.js`。 

然而，也可以利用[dotenv](https://www.npmjs.com/package/@mcrowe/gotenv)。在app.js加入`require("dotenv").config();`，並且在.env中設定PORT，即可用`process.env.PORT`讀取.env設定的PORT。
# 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？
## 1. 需要上傳的檔案
- 需要所有人同步的檔案，如：程式碼、package.json。package.json需要放上repo這麼一來，才能確保所有人使用的是同版本的依賴。
## 2. 不需要上傳的檔案
- 一些含有像是資料庫密碼、jwt的密鑰等機密資料的檔案，如：.env。
- 過大的檔案
- 一些只有在本地才用得到的檔案，如：.DS_Store、.Spotlight-V100
- 其他人不一定要同步的檔案，如：node_modules。因為上傳了package.json，其他人只要執行`npm install`就可以下載同樣的依賴套件，生成同樣的package.json。

# 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

# localhost 是什麼？
localhost是本地主機，代表的是127.0.0.1的IP位址。
# curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？
