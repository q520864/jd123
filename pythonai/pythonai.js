/*
公众号少年歌行pro测试
QX:
[rewrite_local]
#解锁会员
^https:\/\/ws\.60he\.com\/book*|user* url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/pythonai/pythonai.js

[mitm]
hostname = ws.60he.com,
*/

let obj = JSON.parse($response.body);
obj = {
  "isFree": 1,
  "vip": 365,
  };

$done({body: JSON.stringify(obj)});
