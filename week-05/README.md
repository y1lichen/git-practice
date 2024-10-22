## 1. 你的網址
我的網址是[https://y1lichen.urcafemate.me](https://y1lichen.urcafemate.me)
## 2. 你在哪裡購買網域的
[namecheap](https://www.namecheap.com)
## 3. DNS 的 A record 是什麼？
## 4. DNS 的 NS record 是什麼？
## 5. Domain Name vs FQDN vs URL 這三者分別為何？
#### Domain Name

Domain name 用來代替可讀性低的 ip。Domain name 由不同層級的子網域組成。以 https://y1lichen.urcafemate.me 為例，.me 是頂級網域，urcafemate 是二級網域。
#### FQDN

FQDN 全名是 Fully Qualified Domain Name。FQDN 包含了完整路徑的網域名稱，從具體的主機名稱到頂級網域，並且指向網路上唯一的某個具體位置。以 https://y1lichen.urcafemate.me 為例，https://y1lichen.urcafemate.me 就是 FQDN。其中，y1lichen 就是主機名。
#### URL

URL 用來定位網路資源的具體位置，包括了 FQDN、通訊協定（如 HTTP 或 HTTPS）、端口號、資源路徑和參數。https://y1lichen.urcafemate.me 是完整的 URL，https 是通訊協定，y1lichen.urcafemate.me 是 FQDN。URL 可能還會包含如`?id=123`的查詢參數。

## 6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

為網站加上 SSL/TLS 憑證可以提升網站安全性。
- HTTPS 使用 SSL/TLS 協議來加密使用者與網站之間的通訊，用戶發送到伺服器的資料會被加密，第三方無法攔截、竊聽或篡改。
- HTTPS 透過憑證機構（CA）來驗證網站的真實性，避免使用者連上釣魚網站。

### 參考資料
[https://its-okay.medium.com/搞懂-ip-fqdn-dns-name-server-鼠年全馬鐵人挑戰-05-aa60f45496fb](https://its-okay.medium.com/搞懂-ip-fqdn-dns-name-server-鼠年全馬鐵人挑戰-05-aa60f45496fb)