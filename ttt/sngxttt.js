/*
微信公众号：少年歌行pro
转载请注明出处
tg:https://t.me/sngxpro

圈X
[rewrite_local]
#汤头条解锁视频无限观看（付费视频未破解，待高人）

^http:\/\/ttt2\.tbrapi\.org\:8080\/api.php\/api\/user\/userinfo url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/ttt/sngx

[mitm]
hostname= ttt2.tbrapi.org

下载地址：appstore



*/



body = $response.body.replace(/data":"\w+/g, 'data":"57B1759F5B1835A54BBF8BD02753C5B28B7FDCF86C2B8FD0C77249B432A3416D78314BF53FD8FA09BC93A17076479A52B676BCEFF06E876B624484A87EB4EF569B6C6DB70ED6CB14A257A945B62F6737D39407D5158CD4CFF387DDCC98F6797865F1A6929F0C7FA5D82FE4CC19AA9C767427AE0DDCDA3724EE8A36AA22D6FC7A8D9440A3BF58E2B803ADDAD738182F6533C3E0092862F7075FB2F1739E58B99A448BF66782910193F69960057138F19967D3124122923F180679CDCEA902AD9E4D977B17920E7381210DE504B8AF73D3E7B02C2236FE0C6CD0BA73AEE1A046789077A43CEBEA6D10648CFF73A7B9CF2548805BA94E48AD61940A06E709388DD6B1F79059A447712017905B574FBC128EB0C5D96605272C7DA2F6C1AF427084F03B073EB531BBF8800C116CA47A01D58BE3783D858EB8B48087D3A41684A9A809336A7343F6C46804A9C5019AC9A4D0B9FE1B1519CCAD593C2EF959861D5B9092A1BB027E62BE26D857D99189301481153233B41F134DF92967F9EE20F14989DF79A86023E086618CFE5B0107EB546EB96550993BEFF12D91D1B3017608CB1CFDCB79436B18F6375D0B1316CB77BC853D8D0E436BB4585927208959EB1B665EC51320DC3CA8715DCFCA9DECD51C470F73CB5A864B67F51257A4F60B42717F1A786A2430F4F27C24F4F600FED3E1078D3864595EE2DBA298BD6A0E6F05FB0B701E5BAA6D12422521F5DD5164B21E8C52C2548C3C81840C856ADB204B2459A640219AC8D6B26503B4F311E5962C1EC41991CAB9E652A0A469B95211CAB55EA02413674A633DC1BF111A8AC4DF8ADCBAD64633015FF1FC6E1D6D131CEECB47579CE5440006');
$done({body});

