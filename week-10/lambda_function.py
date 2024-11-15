import json
import urllib3

def lambda_handler(event, context):
    # Discord Webhook URL
    discord_webhook_url = "https://discord.com/api/webhooks/1306975738045399120/c-qAdOq4GGhjeEV2EqcmVqA058g5U357rlaBUlw8IVk5rrRUgWXy7Kl-8VPmz2V6eogK"
    http = urllib3.PoolManager()

    # 從 SNS 消息中提取警報訊息
    sns_message = event['Records'][0]['Sns']['Message']
    sns_subject = event['Records'][0]['Sns']['Subject']
    
    # 自訂要發送到 Discord 的消息
    discord_message = {
        "content": f"警報主題: {sns_subject}\n詳細資訊: {sns_message}"
    }

    # 發送消息到 Discord
    encoded_message = json.dumps(discord_message).encode('utf-8')
    response = http.request(
        'POST',
        discord_webhook_url,
        body=encoded_message,
        headers={'Content-Type': 'application/json'}
    )
    
    return {
        'statusCode': response.status,
        'body': response.data
    }

