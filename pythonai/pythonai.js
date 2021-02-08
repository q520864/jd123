/*
公众号少年歌行pro测试
QX:
[rewrite_local]
#解锁会员
^https:\/\/ws\.60he\.com\/book|user* url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/pythonai/pythonai.js

[mitm]
hostname = ws.60he.com,
*/

let obj = JSON.parse($response.body);
obj = {
    "amount": 0,
    "alert": false,
    "sysId": 0,
    "nickName": "少年歌行pro",
    "chargeTotal": 0,
    "stars": 0,
    "userName": "",
    "vip": 365,
    "userId": 11518,
    "login_sum": 36
    "isFree":1,
  };

$done({body: JSON.stringify(obj)});
