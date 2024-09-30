# 一、建立 Express 專案

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
# 二、問題

## package.json 中的 dependencies 與 devDependencies 分別是什麼
根據[npm Docs](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)，dependencies是部署上線時需要的套件；devDependencies是在本地開發測試時需要的套件。

若是要安裝devDependencies的套件，可使用`npm install <套件名> --save-dev`或`npm i <套件名> -D`安裝
## package.json 中的 scripts 這個區塊怎麼用？
使用scripts可以預先設定指令，指令的名稱可以自行設置。例如：
```
"scripts": {
    "start": "node app.js",
    "dewdewdee": "node app.js"
  },
```
執行`npm start`時會自動執行`node app.js`。 
需特別注意的是除了某些預設指令可以直接執行npm <指令名>，如：start、test，其它的指令須使用`npm run <指令名>`。

## Port number 要怎麼以環境變數來設定？
使用`var port = process.env.PORT`，執行app.js要執行`PORT=4444 node app.js`。 

然而，也可以利用[dotenv](https://www.npmjs.com/package/@mcrowe/gotenv)。在app.js加入`require("dotenv").config();`，並且在.env中設定PORT，即可用`process.env.PORT`讀取.env設定的PORT。
### 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

1. 需要上傳的檔案
- 需要所有人同步的檔案，如：程式碼、package.json。package.json需要放上repo，這麼一來才能確保所有人使用的是同版本的依賴。

2. 不需要上傳的檔案
- 一些含有像是資料庫密碼、jwt的密鑰等機密資料的檔案，如：.env。
- 過大的檔案
- 一些只有在本地才用得到的檔案，如：macOS的.DS_Store、.Spotlight-V100
- 其他人可以從別的地方取得同樣的檔案，如：node_modules。因為上傳了package.json，其他人只要執行`npm install`就可以下載同樣的依賴套件，生成同樣的package.json。

## 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

## localhost 是什麼？
localhost是本地主機，代表的是127.0.0.1的IP位址。
## curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？
curl能用來存取網路資源，支援FTP、FTPS、HTTP、HTTPS、SMTP等。
### 如果要測網路連線
可以隨便使用`curl http://google.com`來看是否有連網，如果沒連上會出現`curl: (6) Could not resolve host: google.com`。要注意的是如果call了一個斷線的服務也會有一樣的結果，所以最好是call像是google這種穩定的網站。

curl也能用來測速，指令如下：
```
curl -o /dev/null -s -w "%{time_namelookup},%{time_connect}, \
%{time_starttransfer},%{time_total}" \
https://tw.yahoo.com && echo
```
- time_namelookup: DNS 解析時間
- time_connect: 建立伺服器 TCP 所花的時間
- time_starttransfer: 伺服器return的第一個字節的時間
- time_total: 整個請求的花費時間

### 常用參數
1. -X

-X用來指定要使用的 HTTP 方法

如： -X POST使用post method
```
url -X POST --data "email=test@example.com&press=%20OK%20"  http://www.example.com/form.php
```

2. -o或-O

-o和-O可用來下載網址的檔案，使用-o搭配要存的檔名，或是用-O存下載網址的檔案檔名。
如：
```
curl -o duck.jpg https://im2.book.com.tw/image/getImage?i=https://www.books.com.twhttps://static.coderbridge.com/img/techbridge/images/N00/040/56/N000405619.jpg

curl -O filename.jpg duck.jpg https://im2.book.com.tw/image/getImage?i=https://www.books.com.twhttps://static.coderbridge.com/img/techbridge/images/N00/040/56/N000405619.jpg
```
3. -L

隨著網址 301/302 redirect

4. -H
帶header
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://hostname/resource
``` 

5. -I
只看header的部分
```
curl -s -I -X POST http://www.google.com
```

6. --user-agent
設定user agent
```
curl --user-agent "Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)" http://www.example.com
```

7. --cookie
帶cookie
```
curl --cookie "name=Jack" http://www.example.com
```

---
# 參考資料

[TechBridge](https://blog.techbridge.cc/2019/02/01/linux-curl-command-tutorial/)
[Wikipedia](https://zh.wikipedia.org/zh-tw/CURL)
[萬用的-curl-模擬各種訪問狀況、檢測訪問速度](https://shazi.info/萬用的-curl-模擬各種訪問狀況、檢測訪問速度/)
[IBM](https://www.ibm.com/docs/zh-tw/flashsystem-5x00/8.5.x?topic=svra-usage-examples-in-curl)