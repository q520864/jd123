/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^https:\/\/ws\.60he\.com\/(book.*|user.*) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/PythonAI/PythonAI.js

[mitm]
hostname = ws.60he.com
*/

/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^https:\/\/ws\.60he\.com\/(book.*|user.*) url script-response-body PythonAI.js
[mitm]
hostname = ws.60he.com

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const a = '/user*';
const b = '/book*';

if (url.indexOf(a) != -1) {
    obj.data.item.nickname = "公众号：少年歌行pro",
    obj.data.item.vip = 365,
    body = JSON.stringify(obj);
}
if (url.indexOf(b) != -1) {
    obj.data.isFree = 1,
    body = JSON.stringify(obj);
}


$done({body});
