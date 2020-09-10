/*
[rewrite_local]

^http?:\/\/api\_\d{4}\.kuwo\.cn\/front\/user\/vipstatus$ url script-response-body 2046.js
[mitm]
hostname = api_2496.kuwo.cn

*/

var body = $response.body;
var url = $request.url;

const path1 = '\/front\/user\/vipstatus';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["vipstatus"] = 1;
	obj.data["xpiration_time"] = "2029-05-01";
	body = JSON.stringify(obj);  
 }

$done({body});
