/*
微信公众号：少年歌行pro
转载请注明出处

圈X
[rewrite_local]
#69视频解锁会员
^http:\/\/69shipin\.vip\/(api\/user\/personal|api\/community\/edit) url script-response-body 69sp.js


[mitm]
hostname= 69shipin.vip

下载地址：http://app.exxanz.com/?code=SQDDAH


*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const a = '\/api\/user\/personal';
const b = '\/api\/community\/edit';

if (url.indexOf(a) != -1) {
    obj.data.vip_time = 2035-01-01 00:00:00,
	obj.data.nickname = 少年歌行pro解锁vip,
	obj.data.vip = 1,
	obj.data.vip_ymd = 2035-11-30,
    body = JSON.stringify(obj);
} 
if (url.indexOf(b) != -1) {
    obj.data.code = 200,
    body = JSON.stringify(obj);
} 
$done({body});