# 什麼是 AWS Region, AZ (availability zones)

## 1. Region（區域）
- Region是一個實際的地理區域，例如：東京、香港。
- 一個Region中會有多個Availability Zones。

## 2. Availability Zones（可用區域）
- 每個AZ是一個可獨立運作的資料中心，有獨立的備用電源、散熱等設施，提高容錯率和災害復原能力。
- 僅管AZ在同一個區域內（100公里內），兩個AZ仍相隔數公里。藉由低延遲網路連結AZ可對AZ進行備份，降低系統遇到天災人禍時shutdown的風險。
- 每個AZ有自己的identifier，如：use1-az1、usw1-az1
---

## 3. Local Zones（本地區域）
讓資料庫、運算主機放在更靠近人口中心、IT中心的地方。舉例來說，Region選擇東京時，可以台北為本地區域。

# 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region？考慮的因素有哪些？
如果我的TA主要是台灣用戶，我的Region會選用**東京**。主要的考量因素是價格和距離，希望距離使用者近以降低延遲，同時也要盡可能降低成本。
AWS位在亞洲臨近台灣的Region有香港、新加坡、東京、大阪。參考[AWS EC2價目表](https://aws.amazon.com/tw/ec2/pricing/on-demand/)，以m5.2xlarge的執行個體來說，香港每小時費率是0.528美金，遠高於新加坡（0.48）、東京（0.496）、大阪（0.496）。雖然東京的費率略高於新加坡，每年相差約2,800台幣，但使用東京Region，可使用Taipei local zone。

---

### 參考資料
[medium文章-不懂裝懂AWS — Region & AZ](https://medium.com/i-發客/不懂裝懂aws-region-az-e888bc15b3a6)
[AWS官網](https://docs.aws.amazon.com/zh_tw/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
[AWS官網](https://aws.amazon.com/tw/about-aws/global-infrastructure/regions_az/)