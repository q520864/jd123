/*
 biz.lemonyd.com
 
 https://biz.lemonyd.com/user/account/info url script-response-body sngxhyxs.js


*/


body = $response.body.replace(/isVip":\w+/g, 'isVip":true').replace(/shell":\d+/g, 'shell":6666666');
$done({body});
