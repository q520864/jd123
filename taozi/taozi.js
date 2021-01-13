  
/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^http:\/\/api\.06f158e\.xyz\/fast-cloud\/user\/info url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/taozi/taozi.js

[mitm]
hostname = api.06f158e.xyz
*/

body = $response.body.replace(\/vipType\":0\/g, 'vipType\":1').replace(\/vipValidDate\":null\/g, 'vipValidDate\":1800000000000');
$done({body});
