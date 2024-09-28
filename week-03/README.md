# 什麼是 AWS Region, AZ (availability zones)

## 1. Region（區域）
Region是一個實際的地理區域，例如：東京、香港。一個Region中會有多個Availability Zones。

## 2. Availability Zones（可用區域）
每個AZ是一個可獨立運作的資料中心，有獨立的備用電源、散熱等設施，提高容錯率。
僅管AZ在同一個區域內（100公里內），兩個AZ仍相隔數公里。藉由低延遲網路連結AZ可對AZ進行備份，降低系統遇到天災人禍時shutdown的風險。

---

## 3. Local Zones（本地區域）
讓資料庫、運算主機放在更靠近人口中心、IT中心的地方。舉例來說，Region選擇東京時，可以台北為本地區域。

# 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region？考慮的因素有哪些？
選擇 Region的因素有：
- 價格：AWS中不同的Region的費率不盡相同。價格關乎營運的成本，是重要的考量因素之一，但還是要綜合考量其他因素
- 和服務對象的距離：離用戶距離越近會有較低的網路延遲，有助使用體驗
- 法規：對於儲存資料需要符合當地法規，如：歐盟的GDPR

---

### 參考資料
[medium文章-不懂裝懂AWS — Region & AZ](https://medium.com/i-發客/不懂裝懂aws-region-az-e888bc15b3a6)
[AWS官網](https://docs.aws.amazon.com/zh_tw/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
[AWS官網](https://aws.amazon.com/tw/about-aws/global-infrastructure/regions_az/)