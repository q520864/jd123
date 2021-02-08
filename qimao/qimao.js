/*
https:\/\/(.+)\\.wtzw\\.com\/.+ url script-response-body qmxs_noad.js

hostname=*.wtzw.com,

*/




body = $response.body.replace(\/is_vip\":\"0\"\/g, 'is_vip\":\"1\"').replace(\/adv_style\":\"\\d+\"\/g, 'adv_style\":\"0\"').replace(\/true\/g, 'false');\n$done({body});"
