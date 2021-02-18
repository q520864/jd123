/*

测试中，别用

微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^https:\/\/*\.yueyouxs\.com\/* url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/yynovel/yynovel.js
[mitm]
hostname = *.yueyouxs.com
[app下载地址]
https:\/\/apps.apple.com\/cn\/app\/%E9%98%85%E5%8F%8B%E5%B0%8F%E8%AF%B4-%E7%83%AD%E9%97%A8%E5%85%A8%E6%9C%AC%E5%B0%8F%E8%AF%B4%E7%94%B5%E5%AD%90%E4%B9%A6%E9%98%85%E8%AF%BB%E5%99%A8\/id1066723192
*/

var body = $response.body;
var url = $request.url;

const path1 = '*';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["readVipEndTime"] = 2030-01-01 00:00:00;
	obj.data["allVipEndTime"] = 2030-01-01 00:00:00;
	obj.data["bookVipFree"] = 1;
	body = JSON.stringify(obj);  
 }

$done({body});
