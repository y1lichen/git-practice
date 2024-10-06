1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查

public ip: 3.27.110.23

連結：[link](http://3.27.110.23)

2. 什麼是 instance type?

instance type 中文為執行個體，是 aws 提供的不同規格虛擬機。不同的 instance type 有不同的cpu、記憶體、儲存體、網路效能等規格。

有關instance type的介紹見[Architecting on AWS 筆記：運算資源](https://www.cythilya.tw/2022/05/23/architecting-on-aws-compute-service/)
3. 什麼是 Nginx？有哪些用途與特性？

根據[Nginx官網](https://nginx.org/en/)的簡介，Nginx是一個HTTP和反向代理伺服器，也是一個郵件代理伺服器，以及一個通用的TCP/UDP代理伺服器。

Nginx能做到：
- 反向代理 

Client 不需知道 Application Server 的真實位置，僅需要透過 Nginx 反向代理的方式就能夠向後面的 Application Server 發送請求，而 Application Server 也不需要知道是哪一個 Client 的 Request，僅需回傳 Response 即可。
- 負載均衡 

Nginx 能夠自動的將 Client 的 Request 分送到不同 Application Server 上進行分流。
- http 快取 

Client 發出 Request ，Nginx 會將 Request 的資訊做 hash。如果 hash key 在記憶體中 Nginx 就可以直接索引檔案，而不用向 Application server索取檔案位置。

4. pm2 套件是什麼？有什麼用處？
    1. 如果不是使用 pm2，那就告訴我你是用哪一個、這個工具的用途，以及，你為什麼這樣選擇
5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
    1. 提示 `Reverse proxy` vs `Forward Proxy`
6. 在 readme 中提供步驟 9 的 Nginx 設定檔
7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」

[ssh連線不上時在stackoverflow參考這](https://stackoverflow.com/a/25954437)
11. 列出完成本作業時參考的資料

[如何設定inbound](https://stackoverflow.com/questions/70285350/how-to-open-port-80-on-aws-ec2)
[在linux上安裝nginx](https://medium.com/@B369/在linux-安裝-nginx-web-server-fed26c16a594)
[Nginx是什麼？](https://www.explainthis.io/zh-hant/swe/why-nginx)