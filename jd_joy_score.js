/*
京享值PK
cron 15 2,7,18 * * * jd_joyscore.js
更新时间：2021-7-05
活动入口：京东APP-我的-京享值
已支持IOS双京东账号,Node.js支持N个京东账号
更新日志：直接延时，调整逻辑顺序，增加是否开宝箱选项。默认关闭
建议：12点过后运行一次，半小时后再运行一次。没有提交自己分享码将无法获取其他人的分享码。0-18时每2小时运行一次
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京享值PK
5,30 0-18/2 * * * https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js, tag=京享值PK
================Loon==============
[Script]
cron "5,30 0-18/2 * * *" script-path=https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js,tag=京享值PK
===============Surge=================
*/

const $ = new Env('京享值PK');
!function (n) { "use strict"; function r(n, r) { var t = (65535 & n) + (65535 & r); return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t } function t(n, r) { return n << r | n >>> 32 - r } function u(n, u, e, o, c, f) { return r(t(r(r(u, n), r(o, f)), c), e) } function e(n, r, t, e, o, c, f) { return u(r & t | ~r & e, n, r, o, c, f) } function o(n, r, t, e, o, c, f) { return u(r & e | t & ~e, n, r, o, c, f) } function c(n, r, t, e, o, c, f) { return u(r ^ t ^ e, n, r, o, c, f) } function f(n, r, t, e, o, c, f) { return u(t ^ (r | ~e), n, r, o, c, f) } function i(n, t) { n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t; var u, i, a, h, g, l = 1732584193, d = -271733879, v = -1732584194, C = 271733878; for (u = 0; u < n.length; u += 16)i = l, a = d, h = v, g = C, d = f(d = f(d = f(d = f(d = c(d = c(d = c(d = c(d = o(d = o(d = o(d = o(d = e(d = e(d = e(d = e(d, v = e(v, C = e(C, l = e(l, d, v, C, n[u], 7, -680876936), d, v, n[u + 1], 12, -389564586), l, d, n[u + 2], 17, 606105819), C, l, n[u + 3], 22, -1044525330), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 4], 7, -176418897), d, v, n[u + 5], 12, 1200080426), l, d, n[u + 6], 17, -1473231341), C, l, n[u + 7], 22, -45705983), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 8], 7, 1770035416), d, v, n[u + 9], 12, -1958414417), l, d, n[u + 10], 17, -42063), C, l, n[u + 11], 22, -1990404162), v = e(v, C = e(C, l = e(l, d, v, C, n[u + 12], 7, 1804603682), d, v, n[u + 13], 12, -40341101), l, d, n[u + 14], 17, -1502002290), C, l, n[u + 15], 22, 1236535329), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 1], 5, -165796510), d, v, n[u + 6], 9, -1069501632), l, d, n[u + 11], 14, 643717713), C, l, n[u], 20, -373897302), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 5], 5, -701558691), d, v, n[u + 10], 9, 38016083), l, d, n[u + 15], 14, -660478335), C, l, n[u + 4], 20, -405537848), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 9], 5, 568446438), d, v, n[u + 14], 9, -1019803690), l, d, n[u + 3], 14, -187363961), C, l, n[u + 8], 20, 1163531501), v = o(v, C = o(C, l = o(l, d, v, C, n[u + 13], 5, -1444681467), d, v, n[u + 2], 9, -51403784), l, d, n[u + 7], 14, 1735328473), C, l, n[u + 12], 20, -1926607734), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 5], 4, -378558), d, v, n[u + 8], 11, -2022574463), l, d, n[u + 11], 16, 1839030562), C, l, n[u + 14], 23, -35309556), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 1], 4, -1530992060), d, v, n[u + 4], 11, 1272893353), l, d, n[u + 7], 16, -155497632), C, l, n[u + 10], 23, -1094730640), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 13], 4, 681279174), d, v, n[u], 11, -358537222), l, d, n[u + 3], 16, -722521979), C, l, n[u + 6], 23, 76029189), v = c(v, C = c(C, l = c(l, d, v, C, n[u + 9], 4, -640364487), d, v, n[u + 12], 11, -421815835), l, d, n[u + 15], 16, 530742520), C, l, n[u + 2], 23, -995338651), v = f(v, C = f(C, l = f(l, d, v, C, n[u], 6, -198630844), d, v, n[u + 7], 10, 1126891415), l, d, n[u + 14], 15, -1416354905), C, l, n[u + 5], 21, -57434055), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 12], 6, 1700485571), d, v, n[u + 3], 10, -1894986606), l, d, n[u + 10], 15, -1051523), C, l, n[u + 1], 21, -2054922799), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 8], 6, 1873313359), d, v, n[u + 15], 10, -30611744), l, d, n[u + 6], 15, -1560198380), C, l, n[u + 13], 21, 1309151649), v = f(v, C = f(C, l = f(l, d, v, C, n[u + 4], 6, -145523070), d, v, n[u + 11], 10, -1120210379), l, d, n[u + 2], 15, 718787259), C, l, n[u + 9], 21, -343485551), l = r(l, i), d = r(d, a), v = r(v, h), C = r(C, g); return [l, d, v, C] } function a(n) { var r, t = "", u = 32 * n.length; for (r = 0; r < u; r += 8)t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255); return t } function h(n) { var r, t = []; for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1)t[r] = 0; var u = 8 * n.length; for (r = 0; r < u; r += 8)t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32; return t } function g(n) { return a(i(h(n), 8 * n.length)) } function l(n, r) { var t, u, e = h(n), o = [], c = []; for (o[15] = c[15] = void 0, e.length > 16 && (e = i(e, 8 * n.length)), t = 0; t < 16; t += 1)o[t] = 909522486 ^ e[t], c[t] = 1549556828 ^ e[t]; return u = i(o.concat(h(r)), 512 + 8 * r.length), a(i(c.concat(u), 640)) } function d(n) { var r, t, u = ""; for (t = 0; t < n.length; t += 1)r = n.charCodeAt(t), u += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r); return u } function v(n) { return unescape(encodeURIComponent(n)) } function C(n) { return g(v(n)) } function A(n) { return d(C(n)) } function m(n, r) { return l(v(n), v(r)) } function s(n, r) { return d(m(n, r)) } function b(n, r, t) { return r ? t ? m(r, n) : s(r, n) : t ? C(n) : A(n) } $.md5 = b }();
$.toObj = (t, e = null) => {
    try {
        return JSON.parse(t)
    } catch {
        return e
    }
}
$.toStr = (t, e = null) => {
    try {
        return JSON.stringify(t)
    } catch {
        return e
    }
}

const notify = $.isNode() ? require("./sendNotify") : "";
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
const sck = $.isNode() ? "set-cookie" : "Set-Cookie";
const APPID = "dafbe42d5bff9d82298e5230eb8c3f79";
const md5Key = "34e1e81ae8122ca039ec5738d33b4eee";
let cookiesArr = [],
    cookie = "",
    message;
let minPrize = 1;

let countlaunch = 0;
let countreceive = 0;
let bcomplate = false;
//是否开箱开关。true 为自动开箱，注意PK开箱豆子有时效性。有需要再开了用。默认关闭；
let kaixiang=false;
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => { };
} else {
    cookiesArr = [
        $.getdata("CookieJD"),
        $.getdata("CookieJD2"),
        ...jsonParse($.getdata("CookiesJD") || "[]").map((item) => item.cookie),
    ].filter((item) => !!item);
}
var _0xodS='jsjiami.com.v6',_0x584c=[_0xodS,'wr0pwqECwoI=','KMO0w5Y=','wphGfw==','ZHpX','AhkHwojCmA==','w5VvwrFuKg==','w7Iwwrg=','XwXCmCXDjA==','w4o7w6xle17Cvw==','w4o/w58=','EjHChQ==','w7oVworCn8OV','w7RRwok=','w5vDmWBvTw==','wrPCmH4=','EHDDgMKReMOUw5Q=','G8O3wpo=','w68/EA==','wo1tw5DDkcKtw60owpc=','w7DCizvCuzw=','PsOLwrPDsmo=','wo/Cnnc=','EH7DusKZZ8OZ','UsKRMgzCkg==','E33DmMKJcg==','w6vCowXCgcOY','RX/Cq0Im','wrTCnEARUQ==','5oiC5p2RwrsL5q+g5peb5bev5ayw','YGNXwotM','Ki7CjCrCuw==','Ajga','OhbCvxLCtg==','wrsxNw==','aTnDjQ==','B8KCwqBLwrTCpg==','wq4iCjzChQ==','w6gKw6Blcw==','RMK6YlvDtw==','w7/CkcO3w7LDh1U=','AsKgwpk=','5LmV5LyJ57iu5p+U772/','w6cSw5pjdQ==','TMKbw53DhTk=','DMK4wqZvPA==','wrsQKsOVYw==','wqbCmApcQQ==','woQhDhLClQ==','BsO/wqfDh2k=','EH7DssKKX8OEw5TDvyfCr2HCr1PDoQ==','NsKMwptnBg==','aALCnjDDvQ==','cwfDgMKLAQ==','w7jDi19OSQ==','MgUobhg=','w6Aqwo4=','WHnCvFkXw4dI','w5LClwfCs8Oy','wrgtGR3Cog==','wqMxH8O6fQ==','X8O9Mg==','w7xUI8K5eA==','5rKV5pyb6I2f5Y+g5YmM5aef5Y+t','wqrCpwc=','bMKhY3bDlA==','A8O9wrfDgFw=','w7BtJ8Kxwro=','KMO+w5fDvhl/wpvDglDDtcOtAMKuf8Kj','TgbCpiDDnA==','ZMK1QUnDoA==','wpnCrz5yYg==','egXDiEIm','LHDDhMKXfQ==','C8OVw61Jw4/Dn8OWIBg=','wofCrQJPQQ==','w5nCoDjCrSE=','V8OuCw==','QsO8FsKnZA==','w63Cqy3Ck8OBQ8KQ','FVHDuMKYRA==','UsKDw4DDqSg=','wpDCgWkFbQ==','asKGw77DgC4=','wop9w5jDpMKr','w5XCmsOMw7bDig==','w5lEJsKZVQ==','w5IOwrHCmcOR','PcOse8Obw73CncOhw5DCinTDksOjwpDDsMOm','wpPDsCcgw7w=','wo0+wr4Zwoo=','woXCosOyYMKJ','TMK6w4A=','6LSR5omX5YqJ5paN5pqA6aqX776T6L2d6KG16KCM5Yisw5J+','dwXDqkgJ','YMK3EQ==','DxbCh1zCng==','UcOQIMKww7U=','McOPwqTDqnw=','O8Khwpc1wqQ=','Q8K2W2vDkg==','Y8K2w4bDvzs=','w7MDw7N7cg==','Ml/DoMKyeQ==','wrnCqlg=','w442wrE=','DxnCknrCnQ==','H04cwo5V','GWAEwqp+','KTPChAfCjg==','Ww/DqA==','w545FjIz','wr9fw7DDhcKU','wr48wowmwo8Z','PirChHnCtCw=','wq4qNRbCmEc=','w594C8Kpwpg=','KQfCpFHCsQ==','wqXDjS0pw4U=','A0Mvwohg','HDIewqDChUoKwpA=','w4JpM8KmUg==','VMOZGcKFw7M=','T8OuGMKcw7TCox3DpcKV','TMOoAsKO','fcOFI8K2dA==','w4MVwofCuMOV','WcOkDcKTw4jCmxvDp8Kowo9owr4=','woABKijCnQ==','wq8gwr8xwpgfHww=','w63Ch8Kr','w5bDg8O5wp0m','5b6L5YmT6IGp5Z6Zw5k=','ZMKfYlrDkBvDgGc=','TgfCpQfDgsOSF3jCj8OF','wrjCoQo=','CsOVw6R0w5U=','wo0aNSnCtQ==','w7HCg8KewpbDj8O/w7w1','wq4gPA==','5ay6566Y5qKk5raY57iD5p2H4oCz4oKX','5by95YqCwo4owqDvvJ3Dl8Ky56G077yE7763','wqbCknwGRw==','BMOwX8OBw6U=','NwcYwpzCtQ==','c8K8Z1rDgg==','w4tXwqtgNg==','w4TCpcO0w5fDog==','J3jCkjIt','w4DCtcOJw6zDog==','w5cwwqfCv0I=','wqfDlAcuw5U=','w7kBPRU1','w4TDrWFxRA==','WcK2fmjDhA==','w5bCrcOzw7LDkA==','w4cVwpjCl3M=','QH/CkG8d','wrs1BMO3fDDDvQ==','wqlWeMKrBg==','wrXDsjERw7km','RsKawrdnGGpZAQ==','w7LDrioMw7JwTFDCqQ==','eS7CjGzCvmI=','B8O3Hg==','wrrDswQyw64=','wrIgKAU=','cwXDsk4p','wr3DiAcbw6s=','wofCsjETwrQ=','YMKbf13DiQ==','NMOHw6Q=','w4EzwqnCgsO2','MALCiS3Crg==','w7DDi3VLSg==','w7XCgj7CpTc=','CsKxwq1nOA==','w6jCqi4=','w4hXwoA=','YArDg8KQPw==','w7ZUwqZSOQ==','w4zDu8OUwq0V','RwvDncKYBzrDs8Oy','wp0PwrQSwoA=','XBrCmR7Dpw==','w43ChSw=','w5NEHMKKwrE=','wq81FxLCgQ==','w5Y7w6pvY07CvXQ=','w4Aiw5dnR1LCv07CkcOX','wpXCqwIXwro=','SjLCpCvDvQ==','woJ6QMKUAg==','TT/DsFQd','SgfCuyrDhg==','wqRAdg==','FCYUwqTCug==','wrEawqgCwoM=','wpHCmgMEwp8=','HcKEwoFjwoE=','wp0sGsOTWQ==','6KCK5YmC6YOL6Ky/5omj5YmX6L285ZmO57q85p+Z77yo','w59jE8KAwr4=','WcKvw7DDjiU=','w6gVw7t+XQ==','w5TCkcKOwp3DpQ==','LHzDjMKvRA==','w7bCuybCiiI=','wr5mU8KwKA==','P8Oew4tAw40=','w4DDmVpSRw==','wrXCrR13Tw==','dsOWO8KXw5Y=','w6jChQnCgBE=','ODjCkV/CuTJU','EMOFwq9PwrTCh8K5wrRiSEnDhhTDssK9TTE9LMOYworClm5y','woPDhmnCuhbCpMOJw6QGKlzCkCU=','w4VIwpdxF20=','w65DesK/FMOXwrwz','w75yw57Dt8KMw6cgwpzCmg==','w7LCvQRaSjY=','woAkwoU=','G8KIwr1Y','w4tMCMKqwrY=','wrLCpy8Xwro=','TBTCvgs=','NwnCmQ7Csg==','XBrChQjDvw==','AyQa','wqfDtiAsw7g=','bSLDgMKPPQ==','w6XCvcObw5/Dnw==','w4Y4wqLCmw==','wrxDecK1Pg==','XsOAOsKZdA==','w4tGAw==','YMKYWHDDmQ==','6KCP5YqQ6YGn6K+P5omj5YuP6L+d5Zq457qt5p+P77+p','fHpjwpVE','w5gCEi03','w5NGN8KnwqI=','w7FFF8K2wr4=','bXnCsW4b','w7DCiA3CnMO0','wpLCgn4XXA==','G8KMwpxJwrPCu8Kxw6I=','wq3CpmYpQQ==','w7bClsOrw7HDtw==','QH3Cu0IO','CsOMw4fDkA4=','w7HClsOVw4PDmg==','DhQRXyJ1d8KW','w6fCmsKjwp7Dq8Ojw74Pw4gs','wrXCscOsRsKN','VcOscAzDng==','w7AEBD03','wp7CpiRIdA==','w7XChDLCkhU=','wqwWAzTCow==','w6TDtF5bTA==','wqxCWcKzDw==','M0bCmg==','5o+u5Y2J6KGf5Yigf8Oa5oys5oqh','B8KTwqh2IW5S','TzDCiVUIw6tCwq9NK8KfA8KNBgvCtTsqdTPDtsKdEXw=','w7wAw6FCQQ==','wqPDjsO1woEDO2ki','w7k/w5A=','KnbDg8KWQQ==','wr3CjT5RSg==','TMOZS2E=','XMObBMKhbA==','QH3Cp1QW','Gh43Ww==','VDLCjjnDhA==','w7fCsSjCgsOc','L0LCry0WwqfCgmI=','YwLCnC/DuA==','R8OxTBXDu8O+bMOQesOv','PcOmeg==','DXrDtsKUUA==','w40QwofCt34=','TT/DtEkBwonCujI=','w6XCvcK+wp3Dmg==','NijCkxrCsg==','NcObw6Q=','MznCiSrCgg==','woPCkOe5t+aet+WGluS7jeS+mOaAkA==','R8O9BsKYUA==','w5wswoc=','wrbCozIQwqPCucKSw40=','w5Y2woHCk15gU8Op','w60aw6lLVw==','HTrCjkLClg==','TQzCuQzDjg==','VnvCvnkE','w4Ajw4h/Zw==','wpcJCjvCrQ==','w6XCtSvClcOb','w4cgw5ppcg==','w7/Cm8O+','MzLCgg==','w7DCqhrCgsOL','DMO7w5lEw5I=','w5Ygw5N+Vw==','w4zDksOQwqEj','LzzDng==','V8KQXHfDkw==','w456wpB+Kw==','w5jDqHlrUg==','w5AswpTCon0=','w7Yxw5ViXA==','Ci3Ch0TCqg==','wqPDhTEcw7o=','X8KmOifCmw==','CMKVwqhewqI=','wrk2HMOMXQ==','w4ocw6hZWg==','w7TCkcOtw4HDmlDDlA==','wpnDpzA0w6U=','PkrCiQEBw6/DlzDCvcK0DU8kw6/Cjz0=','w7LDtnw=','w69lB8Kywpk=','ODjCkQ==','bsK9R33DkQ==','wrDCrxlc','B8KIwqk=','woHCo8OVTsKj','w4rCncKKwrLDrQ==','WsO5eXDCnw==','woEGIcOKVg==','f1JAwqVR','w4hRIcKKwpI=','JcKVwrBXGA==','w4DCiT/CgRfDtcKRwrYONULDu3vCow==','w7XCt8OPbsKwchdC','ccOcJMK1Uw==','ChAMWDs=','wofCkGQS','w6nDjcO5','wo4YKjzCjg==','dhrCggjDvw==','X8KpExLCiw==','VsOOaTHDrw==','ZcK4PQ7CqA==','woktCQLCpA==','KhgXwpLCuQ==','w6kpw5B6Uw==','LUYEwqpc','VMOgQmXCqQ==','wofChiDCjSPCocOGwq0=','w6kCw4JOQQ==','w7TCkcOt','XcKXd2jDrA==','wptyw4bDjsKS','UsKAaVLDoA==','wqfCqBxNSg==','ZWJIwolm','wrYgFBPChg==','SMOHUXjCrA==','wqLCqRQU','BMKXwqhD','w7vCqTrCoBo=','WcO/en7Chw==','GE7Dp8KfSw==','DcKjwqxECw==','bAzCpDLDng==','w47CnSfCpCE=','BMKQwqJAwpI=','eXRDwpl3','QAHCvhrDpsKBVhnCm8OYwrfCtsOeJRI8BsKaw6zDiyDCqBcGwpkcwoLDr8KMw4fDr2ZzZsKeM8KZNcO4Ii0jwp0L','FMOUw6LDng==','w4gfwrzConw=','BzLCqQzCog==','w7jCkcO8w6XCnlzDnVXDoMOu','asOELMKBRQ==','OUQVwok=','RcKqKgTCgQ==','w6XCvy/Ckho=','QBTDjUUm','LjfCjA==','6KO65Yih6YKd6K2Y5aaN6Leb776Y','PMO6eg==','O23Csykd','wokmDDbCog==','EcKiwqdAwqw=','d8KOdVXDqQ==','wrDCocOhQcKq','w5M5GQ==','5Lii5L2V57iZ5p+2776P','PiQJwqnCiQ==','bHREwoA=','ZBjDnMK7PA==','WcOjIMKrw7E=','Lxo2ciE=','woQHHDDChA==','wqLCtnEHRA==','VsOiX0fCvA==','cRPCuDPDlw==','wqrCphEYwrM=','wqQqMcOscg==','TcOsRA==','w79xLcKxwp0=','5LiL5Ym26YO/6K6J5aeo6LSn77yP','w4zCmSw=','w4VOCsKGwrI=','J8KAwqs3woM=','w6PCmgLChic=','wolcw77DisKr','wonCt3orWw==','e3Fjwotz','woRXRMKoIA==','w5gxw7vCmV4=','GRo3','W8OtShXDmw==','ZMOqbjzDgg==','BUoEwpVI','DxfCkyXCiw==','FsOyw7/DoB4=','Axw1woLCrg==','NMKcwr0pwq8=','LSoXbRQ=','SwzCizrDsg==','w7skwo3ClcO2','w53CrcO/w5fDlQ==','w6d2wpF7JA==','QMK1LRvCqnd5w4c=','wrXCqcOLRsK3chcxw4o1','RMKBXnbDlg==','LRkLwobCuw==','UcOocR3Dn8OibsOq','KzLCsmLCvhFEPQ==','VQzCjQ==','G03CjhsB','w4NHJMK5bA==','UjDDpMKEBw==','PMOrw5zDjTc=','R8KXfGzDrg==','w6JuwpZwJw==','ecKewqwH','ZA3CnzjDsQ==','w7sPwq/Cl1c=','Y8OSZzHDlg==','SMK8wp0uwrxwwpo=','wrLCq8ONBcKTeAsWw48sw7h6U8Kfw5PCuw==','GMOEwpLDv2A=','wpccwrgxwog=','SMOSSEfCiw==','GcKXwqRSBg==','wqUDKzTCjQ==','5LqV5aW05Lue6KKg5Ym4D3rlnJfltoDnlI3lrJ8=','w5Y2wpnCmFo=','IMOnwqDDn0M=','RMKpMxjCtQ==','5Luk5Yujwr0f5q+K5pSa5baB5a+0','5rCG5pyg6I+T5YyF5Yug5aWl5Y+e','5b+15Yid6IGk5ZywKg==','5b2o5YuMHMKUw7bvv7wEw6Dno6fvv6fvvJ8=','5bya5YmmCsKWZH0ZwrUz772w','5oma55ia5LmY5Lijf8Oa5Yi75YKFBA==','bwnDjcK7PA==','w6AYw71PXA==','woZ1ScKVJw==','wobCpV8qWQ==','HXvCnjAC','55e85ou5PXRqMcOG','5b+S5Yql5YuK5paD776m','6LWN5ouQ5YuI5pWc5pi06aiW77+R6L2N6KCU5LmK5YuNwrQt','bMOOFsKsw70=','5Lmk5Yu1wrVA5q+x5pSv5beD5a+c','6L6f6KOX6KCa5Yii6YOY6K+rwqjDrA==','w5HCqzrCvjA=','eCTDgMKyJA==','CMKkwqtMBw==','KEV7w4EW5oi155m15YqV5pe3ZA==','w6XCncOQw43DtQ==','XGNpwpZw','fcKWLS/ClA==','5rCz5pyr6I+m5Yyn5Yis6KGz5YmN6YKu6K+E56Ce','5Lmt5aSA5Lmf6KG45Ym4SF7ln7bltpbnlY7lrq8=','Q3TCkEw4','w6QFwqzCqsOV','dcOoVSjDuA==','HkvClA8y','wpXDpQkVw5U=','wqsmFTPCvA==','5Y+w5b6e5a2p56y5FQ==','6YGU6Ky55om95Yqi6Zyk6KaK566v5by05o605pSrB1zvv4U=','wooRwpolwp0=','M8Ozw7Jow5A=','w7BRNMK1ZQ==','6YCT6KyD5oqJ5YiK6L2n5Zuj57mi5p6g776M','w4caw71ffA==','wq59w7rDrMKi','w7LCvcOww7rDlg==','5Y2V6Lay5o2Y5ouu','wrrCmyt4UA==','w47CsCXChsO1','w67CqQ/Cvgc=','5Y6T6LSv6KGA5YuowpHDoOmCneiti+aNieaKjw==','M8OgS8Ogw4Q=','6KOF5Yu/6YO96Kyy5ou85Yqj6L675Ziq57in5p2S77y9','6I6/5Y+D5Yi25LmKZm/no7Dvvok=','bMK4w6/Dviw=','w41NN8K7wrFqcMOjBQhHWl8=','w5ZcAcKiwr8=','KAoocwg=','FsOAw6luw4Q=','IMOwUcOLw70=','w7PCowvCt8Ot','WMKIBQ7CrQ==','w6jDpcOxwoc0','U8OgNMKTw6A=','fcOgEcKGWg==','KsOuwp3CplzDsk/DkE7Du8OqPMOnIsOww5k=','HWvDpMKSesOSw5vDqCbCkGTDjkzDv8O6MQ==','LcKZwqZLJG9WEwHDsMKWKsOQw67DlUdcF8KGOVpKOcKWWcKQw5QQw5HDgcKvw6h2QCTDocKHw5JXG8KGwojDjMO1w4fDp8OSAcObTMOYdG57cMOpMsK2w6zDm3zCkCTCoVJrw7FjwrEuL3BvS8O/wrZNwpoXwoRywoPCmTPCrxE8wrLDsMOlwoTDuH5lNgXDpmPCn3TCosO1w6tTw5HDpQ8ow4oTL8KCUQ==','ScO6eMKPTA==','wojCvWY8bw==','HsK7wo4owqAo','w4xMAcKjw715ecOYEgM=','H8KDwr5+wpY=','wrgHwp0Rwoo=','wr7ChgFJfg==','w7rDlldWVw==','5Liz5Yq96YKw6KyW5aSH6LSB77+r','eHt3wqth','wpMuKwLCow==','QjVFsVjilUPpaNpmiLF.com.v6=='];(function(_0x209156,_0x15d41d,_0x1512e6){var _0x2a27c1=function(_0x3d7902,_0x5382bb,_0x3ff244,_0x151022,_0x127114){_0x5382bb=_0x5382bb>>0x8,_0x127114='po';var _0x34657c='shift',_0x3bea3f='push';if(_0x5382bb<_0x3d7902){while(--_0x3d7902){_0x151022=_0x209156[_0x34657c]();if(_0x5382bb===_0x3d7902){_0x5382bb=_0x151022;_0x3ff244=_0x209156[_0x127114+'p']();}else if(_0x5382bb&&_0x3ff244['replace'](/[QVFVlUPpNpLF=]/g,'')===_0x5382bb){_0x209156[_0x3bea3f](_0x151022);}}_0x209156[_0x3bea3f](_0x209156[_0x34657c]());}return 0x95a9c;};return _0x2a27c1(++_0x15d41d,_0x1512e6)>>_0x15d41d^_0x1512e6;}(_0x584c,0x1c6,0x1c600));var _0xcb13=function(_0x4e5699,_0x4ac357){_0x4e5699=~~'0x'['concat'](_0x4e5699);var _0x3accbc=_0x584c[_0x4e5699];if(_0xcb13['KdNpTh']===undefined){(function(){var _0xd2f684;try{var _0x252757=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xd2f684=_0x252757();}catch(_0x3e5301){_0xd2f684=window;}var _0x1e46d3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xd2f684['atob']||(_0xd2f684['atob']=function(_0x3f4137){var _0x52d940=String(_0x3f4137)['replace'](/=+$/,'');for(var _0x4d9e23=0x0,_0x5d8647,_0x2c25b2,_0x523962=0x0,_0x3ba038='';_0x2c25b2=_0x52d940['charAt'](_0x523962++);~_0x2c25b2&&(_0x5d8647=_0x4d9e23%0x4?_0x5d8647*0x40+_0x2c25b2:_0x2c25b2,_0x4d9e23++%0x4)?_0x3ba038+=String['fromCharCode'](0xff&_0x5d8647>>(-0x2*_0x4d9e23&0x6)):0x0){_0x2c25b2=_0x1e46d3['indexOf'](_0x2c25b2);}return _0x3ba038;});}());var _0x421d8e=function(_0x1966e9,_0x4ac357){var _0xfb345=[],_0x4d28e5=0x0,_0x200ee4,_0x17c9fb='',_0x37530d='';_0x1966e9=atob(_0x1966e9);for(var _0xce5ac8=0x0,_0x396249=_0x1966e9['length'];_0xce5ac8<_0x396249;_0xce5ac8++){_0x37530d+='%'+('00'+_0x1966e9['charCodeAt'](_0xce5ac8)['toString'](0x10))['slice'](-0x2);}_0x1966e9=decodeURIComponent(_0x37530d);for(var _0x244378=0x0;_0x244378<0x100;_0x244378++){_0xfb345[_0x244378]=_0x244378;}for(_0x244378=0x0;_0x244378<0x100;_0x244378++){_0x4d28e5=(_0x4d28e5+_0xfb345[_0x244378]+_0x4ac357['charCodeAt'](_0x244378%_0x4ac357['length']))%0x100;_0x200ee4=_0xfb345[_0x244378];_0xfb345[_0x244378]=_0xfb345[_0x4d28e5];_0xfb345[_0x4d28e5]=_0x200ee4;}_0x244378=0x0;_0x4d28e5=0x0;for(var _0x38ca15=0x0;_0x38ca15<_0x1966e9['length'];_0x38ca15++){_0x244378=(_0x244378+0x1)%0x100;_0x4d28e5=(_0x4d28e5+_0xfb345[_0x244378])%0x100;_0x200ee4=_0xfb345[_0x244378];_0xfb345[_0x244378]=_0xfb345[_0x4d28e5];_0xfb345[_0x4d28e5]=_0x200ee4;_0x17c9fb+=String['fromCharCode'](_0x1966e9['charCodeAt'](_0x38ca15)^_0xfb345[(_0xfb345[_0x244378]+_0xfb345[_0x4d28e5])%0x100]);}return _0x17c9fb;};_0xcb13['LKlJmj']=_0x421d8e;_0xcb13['pYIeNI']={};_0xcb13['KdNpTh']=!![];}var _0x59b98b=_0xcb13['pYIeNI'][_0x4e5699];if(_0x59b98b===undefined){if(_0xcb13['MBZNYO']===undefined){_0xcb13['MBZNYO']=!![];}_0x3accbc=_0xcb13['LKlJmj'](_0x3accbc,_0x4ac357);_0xcb13['pYIeNI'][_0x4e5699]=_0x3accbc;}else{_0x3accbc=_0x59b98b;}return _0x3accbc;};!function(_0x1ef2ae){var _0x492845={'nvrHd':function(_0x2cc2e9,_0x434736){return _0x2cc2e9+_0x434736;},'yybfT':_0xcb13('0','GKF$'),'WBkTq':function(_0x2d4b53,_0x38f20b){return _0x2d4b53-_0x38f20b;},'QapsO':function(_0x4450fa,_0x477cc7){return _0x4450fa(_0x477cc7);},'pnGJW':function(_0x4d1fab,_0x1715b8){return _0x4d1fab+_0x1715b8;},'bbLVi':_0xcb13('1',')wuZ'),'SCmKg':function(_0x52d0b5,_0x1fe921){return _0x52d0b5+_0x1fe921;},'lNzMt':function(_0x49a634,_0x4e5157){return _0x49a634+_0x4e5157;},'qWVVY':_0xcb13('2','dOvG'),'wpROY':_0xcb13('3','(Emj'),'JVjRO':function(_0x2db89a,_0x109394,_0x1aa9cf){return _0x2db89a(_0x109394,_0x1aa9cf);},'JOqfL':function(_0x2cf8a4,_0x4b7083){return _0x2cf8a4>_0x4b7083;},'sNcXL':function(_0x4ae247,_0x1f59a0){return _0x4ae247-_0x1f59a0;},'uUGzE':function(_0x439036,_0xa1f081,_0x4c08e0){return _0x439036(_0xa1f081,_0x4c08e0);},'bOMrK':_0xcb13('4','z4d$'),'ofLwa':function(_0x3e2f45,_0x1b6bb4){return _0x3e2f45<=_0x1b6bb4;},'qmCtZ':_0xcb13('5','mtMv'),'WmPbF':'AkxsB','hvgjz':_0xcb13('6',')wuZ'),'jZsEk':'进行主动邀请PK','lmQMi':function(_0x2e4ef3,_0x3ecad6){return _0x2e4ef3===_0x3ecad6;},'PNRdT':_0xcb13('7','Lc$v'),'CZYQV':_0xcb13('8','qZxX'),'dHgnw':_0xcb13('9','Unfn'),'ABbie':function(_0x385b53,_0x1a75c1){return _0x385b53(_0x1a75c1);},'rVgae':function(_0x48ca84,_0x1fdee0){return _0x48ca84+_0x1fdee0;},'nfzqf':_0xcb13('a','4j0l'),'FnUcy':_0xcb13('b','diBE'),'iJlfW':function(_0x5174f1,_0x2a41ec){return _0x5174f1(_0x2a41ec);},'MaSOF':function(_0x1f66e3,_0x3e7321){return _0x1f66e3<_0x3e7321;},'VzGEN':function(_0x1a411f,_0x7e1a3d){return _0x1a411f!==_0x7e1a3d;},'QatHA':'TbLGR','DgOvu':'xnsin','rsORI':_0xcb13('c','[jqZ'),'LzkTI':function(_0x46a30d,_0x1b7e34,_0x4af1ec,_0x1d8e4c){return _0x46a30d(_0x1b7e34,_0x4af1ec,_0x1d8e4c);},'zbBlN':function(_0x3cff0f,_0x124555){return _0x3cff0f!==_0x124555;},'IFyIv':_0xcb13('d','dOvG'),'xUSIw':_0xcb13('e','4NND'),'HcCHs':_0xcb13('f','%s8p'),'WDCbj':function(_0x5d50ef,_0x44980d){return _0x5d50ef-_0x44980d;},'fslJI':_0xcb13('10','0cu%'),'WiOIW':_0xcb13('11','mtMv'),'CUkbI':_0xcb13('12','6HQg'),'XXWKx':function(_0x25a438,_0x488ac2){return _0x25a438!==_0x488ac2;},'bqlql':'FYOOn','qnCKF':function(_0x32f508,_0x524e9f){return _0x32f508!=_0x524e9f;},'cWYsi':function(_0x255ff7,_0x34ecc1){return _0x255ff7==_0x34ecc1;},'spyvz':function(_0x285998,_0x333ced){return _0x285998+_0x333ced;},'JSYHc':function(_0x240939,_0x401dd2){return _0x240939+_0x401dd2;},'RcmGH':function(_0x3836b5,_0x1e2773){return _0x3836b5+_0x1e2773;},'KfwhI':_0xcb13('13','clR#'),'bMQTK':function(_0x348dec,_0x26332a){return _0x348dec<_0x26332a;},'BMsYb':function(_0x335002,_0x1d4442){return _0x335002<_0x1d4442;},'Grfxa':function(_0x74093e,_0x5f6b8c){return _0x74093e===_0x5f6b8c;},'VyVKi':_0xcb13('14','[ONt'),'MeUBn':function(_0x416d3d,_0x113c8c){return _0x416d3d(_0x113c8c);},'NUIhf':function(_0x143a32,_0x299831,_0x50a46b,_0x13999b,_0x50f1ce){return _0x143a32(_0x299831,_0x50a46b,_0x13999b,_0x50f1ce);},'PKbWN':function(_0x36889e,_0x1e8936){return _0x36889e!==_0x1e8936;},'zQPbS':'TnHsA','BTDKb':_0xcb13('15','clR#'),'Unitj':_0xcb13('16','#HM^'),'USKqb':'账户分数更高，进行被动PK','PDwqM':_0xcb13('17','*Lzq'),'Vezse':_0xcb13('18','GKF$'),'WQCRn':_0xcb13('19','4bGL'),'kkoGO':_0xcb13('1a','4Y9p'),'aohKU':'准备检测是否可以开宝箱……','gAEfw':function(_0x629d5f,_0x278b73){return _0x629d5f(_0x278b73);},'NOSVa':function(_0xc4e19,_0x2ce58e){return _0xc4e19<_0x2ce58e;},'xQozH':function(_0x161d97,_0x4a0ac0){return _0x161d97===_0x4a0ac0;},'vZAZa':_0xcb13('1b','!*Qo'),'qOlqX':_0xcb13('1c','Unfn'),'JhIuP':function(_0x4793ab,_0x41d2a5){return _0x4793ab==_0x41d2a5;},'oXuxk':_0xcb13('1d','4ORN'),'QNUFU':_0xcb13('1e','ByL*'),'NWvZV':function(_0x4b0bde,_0x1857ec){return _0x4b0bde+_0x1857ec;},'sVguO':_0xcb13('1f','z4d$'),'BNqYq':function(_0x546513,_0x73d977,_0x1b49b7){return _0x546513(_0x73d977,_0x1b49b7);},'EcluP':_0xcb13('20','4j0l'),'UyBnY':function(_0x56c5db,_0x2678ac){return _0x56c5db!==_0x2678ac;},'gHWea':_0xcb13('21','b%Xr'),'WQmBQ':function(_0x11b32d,_0x508c2b){return _0x11b32d>_0x508c2b;},'SAPyQ':_0xcb13('22','IC0K'),'uiqEr':_0xcb13('23','*Lzq'),'ebrdD':_0xcb13('24','[ONt'),'sVFvH':_0xcb13('25',')wuZ'),'JaJNG':'发起邀请请求失败:','FWClS':_0xcb13('26','*ev3'),'NUqmD':function(_0x2c3b13,_0x5613f1){return _0x2c3b13(_0x5613f1);},'MBNWg':_0xcb13('27','[ONt'),'ayiQB':_0xcb13('28','bw5e'),'fjHmm':function(_0x39018a,_0x45ada2){return _0x39018a+_0x45ada2;},'ORzDQ':function(_0x8db32c,_0x20c6eb){return _0x8db32c(_0x20c6eb);},'yzWFh':function(_0x4a75a6,_0x2c5079){return _0x4a75a6===_0x2c5079;},'NECtM':_0xcb13('29','4j0l'),'PgXQW':_0xcb13('2a','bw5e'),'QPmOI':function(_0x477db9,_0x392671){return _0x477db9===_0x392671;},'acpJk':'FASqz','MWWjN':_0xcb13('2b','0cu%'),'IoBHb':_0xcb13('2c','4)qY'),'GzVra':'jdShareBattleLaunch','TnyZf':function(_0x4af192,_0x2fa792){return _0x4af192===_0x2fa792;},'nYXEO':'PK结果出错','nLNGL':_0xcb13('2d','@6lT'),'dmHIK':function(_0x313a57,_0x2fde2f,_0x1313aa,_0x3763b6){return _0x313a57(_0x2fde2f,_0x1313aa,_0x3763b6);},'ymTkH':'receiveBattle','EPfYy':_0xcb13('2e','Gl#K'),'UFQJA':function(_0x25b604,_0x3e8d0c){return _0x25b604!==_0x3e8d0c;},'apbcb':'YTFBj','UOZir':function(_0x27be73,_0x12a55e){return _0x27be73==_0x12a55e;},'ruBXM':function(_0x30db64,_0xfac5e0){return _0x30db64!==_0xfac5e0;},'ppktG':'IpNep','CdlHp':function(_0x55122e,_0x56e8db){return _0x55122e+_0x56e8db;},'jBwFX':_0xcb13('2f','clR#'),'PamhL':_0xcb13('30','Sb21'),'UpbOz':function(_0x3c0b5f,_0x4d24d0,_0x10c852,_0x5756cb,_0xc35b6c,_0x375520){return _0x3c0b5f(_0x4d24d0,_0x10c852,_0x5756cb,_0xc35b6c,_0x375520);},'nEjUr':_0xcb13('31','GKF$'),'xPwtZ':'XKnKA','DTuBS':_0xcb13('32','GKF$'),'EmWKn':'firstVerify','OyhpC':function(_0x2020e2,_0x1d3a4b){return _0x2020e2(_0x1d3a4b);},'owllR':function(_0x28236e,_0x5ab412){return _0x28236e!==_0x5ab412;},'wMJIC':_0xcb13('33','9wp$'),'UfBpq':_0xcb13('34','IC0K'),'KbRsH':_0xcb13('35','@6lT'),'DOjWU':_0xcb13('36','bw5e'),'dmbWl':_0xcb13('37','#HM^'),'dUsaX':function(_0x50e2f6,_0x3ef63f){return _0x50e2f6+_0x3ef63f;},'mUpfC':_0xcb13('38','0Tx5'),'DynXK':_0xcb13('39','dOvG'),'jTgRa':function(_0x288850,_0x5f4fa3){return _0x288850(_0x5f4fa3);},'qasxA':_0xcb13('3a','g$H)'),'bHKRW':'AFWqi','jFjXL':_0xcb13('3b','z4d$'),'EjBLc':_0xcb13('3c','eHEe'),'XRifu':'\x20*/*','LxURd':_0xcb13('3d','6HQg'),'YVymg':_0xcb13('3e','g$H)'),'bgnUb':function(_0x2d09b5,_0x512d2c){return _0x2d09b5+_0x512d2c;},'HpRKk':_0xcb13('3f','qZxX'),'IOUvM':function(_0x595812,_0x2d2d5a){return _0x595812+_0x2d2d5a;},'BpINT':'https://api.scriptsjd.cf/api/JoyScore/CheckPin?','QBKiH':_0xcb13('40','Wjy7'),'sdSjE':_0xcb13('41','GKF$'),'SxSFH':function(_0x3fe88d,_0x1de722){return _0x3fe88d==_0x1de722;},'QeuHp':function(_0x3ade6e,_0x348b60){return _0x3ade6e!==_0x348b60;},'FHGAh':function(_0x95cb28,_0x111216){return _0x95cb28(_0x111216);},'AGatS':function(_0x7d8980,_0x54b8f7){return _0x7d8980(_0x54b8f7);},'ePkys':_0xcb13('42','[jqZ'),'xpmGo':_0xcb13('43','b%Xr'),'ScLSM':_0xcb13('44','4j0l'),'FVqHT':function(_0xa3fd29,_0x2edfb0){return _0xa3fd29(_0x2edfb0);}};async function _0x58c567(){var _0x32bfbc={'apsiS':function(_0x4b407a,_0xbbfeba){return _0x492845[_0xcb13('45','XPi5')](_0x4b407a,_0xbbfeba);},'xNTRw':_0xcb13('46','clR#'),'VRNEK':'所有PK次数已完','hyRHP':function(_0x55d303,_0x5f8b14){return _0x492845[_0xcb13('47','clR#')](_0x55d303,_0x5f8b14);},'lQfFh':'PK结果出错','Ccawv':function(_0x2ba9e5,_0x4240ad){return _0x492845[_0xcb13('48','ByL*')](_0x2ba9e5,_0x4240ad);},'SagYu':function(_0x7300b2,_0x2515dd){return _0x7300b2+_0x2515dd;},'OUnXY':_0x492845[_0xcb13('49','b%Xr')]};let _0x323437=await getToken();let _0x71982c=[];let _0x271ff1=[];console[_0xcb13('4a','%s8p')](_0x492845['SCmKg']('当前token：',_0x323437));if(_0x323437){let _0x2539d1;let _0x20462d=await getPin();if(_0x20462d[_0xcb13('4b','Lc$v')]){console[_0xcb13('4c','clR#')](_0x492845[_0xcb13('4d','Gl#K')](_0x492845['lNzMt'](_0x492845[_0xcb13('4e','Vi$!')]+_0x20462d[_0xcb13('4f','qN2y')],_0x492845[_0xcb13('50','KVgr')]),_0x20462d[_0xcb13('51',')wuZ')]));}console[_0xcb13('52',')wuZ')]('执行京东检测验证');await _0x4b3951(APPID,_0x20462d[_0xcb13('53','4)qY')]);await _0x492845[_0xcb13('54','4Y9p')](_0x271c9c,APPID,_0x20462d[_0xcb13('55','Vi$!')]);let _0x31426d=await _0x492845[_0xcb13('56','XPi5')](getUserPkInfo,_0x20462d['Pin']);let _0x171267=await _0x431e4f(_0x20462d[_0xcb13('57','qZxX')],_0x20462d[_0xcb13('58','eHEe')]);let _0x5f274c=await getScore(_0x20462d[_0xcb13('59','z4d$')]);let _0x351e25={'PkPin':_0x20462d[_0xcb13('5a','A(3a')],'PtPin':$[_0xcb13('5b','*ev3')],'RandomStr':_0x171267,'Score':_0x5f274c};await _0x492845[_0xcb13('5c','0cu%')](_0x120835,_0x351e25);countlaunch=0x0;countreceive=0x0;let _0x3c4257=await _0x4626f6($['UserName']);if(_0x492845['JOqfL'](_0x3c4257,0x0)){countreceive=_0x492845['sNcXL'](_0x3c4257,0x1);countlaunch=0x1;}let _0x4ab255=await _0x492845[_0xcb13('5d','z4d$')](_0x23aec7,0x28,_0x5f274c);console[_0xcb13('5e','qZxX')]('获取Pk列表'+_0x4ab255[_0xcb13('5f','eHEe')]+'条数据备用');console['log'](_0x492845[_0xcb13('60','#HM^')]+_0x5f274c);if(_0x492845[_0xcb13('61','eHEe')](_0x31426d['leftLunchPkNum'],0x0)&&_0x492845[_0xcb13('62','bw5e')](_0x31426d['leftAcceptPkNum']-countreceive,0x0)){if(_0x492845[_0xcb13('63','4bGL')]!==_0x492845[_0xcb13('64','qZxX')]){console['log'](_0xcb13('65','4)qY'));}else{console['log'](resp);}}else{if(_0x492845[_0xcb13('66','clR#')]!==_0x492845[_0xcb13('67','4)qY')]){console[_0xcb13('68','Gl#K')](_0x32bfbc['apsiS'](_0x32bfbc[_0xcb13('69','4)qY')],data['msg']));}else{console[_0xcb13('6a','AC4g')](_0x492845['jZsEk']);if(_0x492845['JOqfL'](_0x31426d['leftLunchPkNum'],0x0)){_0x2539d1=await getFriendPinList(_0x20462d[_0xcb13('6b','V2QG')]);if(_0x2539d1[_0xcb13('6c','[jqZ')]>0x0){if(_0x492845[_0xcb13('6d','ByL*')](_0xcb13('6e',')wuZ'),_0x492845[_0xcb13('6f','MHRX')])){let _0x3eb903,_0x4d4482;for(let _0x20f592=0x0;_0x20f592<_0x2539d1[_0xcb13('70','[ONt')];_0x20f592++){if(_0x492845['CZYQV']===_0x492845['dHgnw']){console[_0xcb13('71','Wjy7')](_0xcb13('72','Unfn')+res);}else{_0x3eb903=_0x2539d1[_0x20f592];_0x4d4482=await _0x492845[_0xcb13('73',')wuZ')](getScore,_0x3eb903);console['log'](_0x492845[_0xcb13('74','Sb21')](_0x492845[_0xcb13('75','6HQg')](_0x492845[_0xcb13('76','AC4g')](_0x492845[_0xcb13('77','4j0l')](_0x492845['rVgae'](_0x492845['nfzqf'],_0x3eb903),_0x492845[_0xcb13('78','ByL*')]),_0x4d4482),'\x20PK\x20\x20我的分数:'),_0x5f274c));_0x492845['iJlfW'](sleep,0x1f4);if(_0x492845[_0xcb13('79','z4d$')](_0x4d4482,_0x5f274c)){if(countlaunch<_0x31426d[_0xcb13('7a','eHEe')]){if(_0x492845[_0xcb13('7b','6HQg')](_0x492845[_0xcb13('7c','VF5B')],_0x492845[_0xcb13('7d','mtMv')])){_0x71982c['push'](_0x3eb903);console['log'](_0x492845[_0xcb13('7e','XPi5')]);await _0x492845[_0xcb13('7f','9wp$')](_0x5ad92e,_0x3eb903,_0x20462d[_0xcb13('80','4Y9p')],_0x20462d[_0xcb13('81','4bGL')]);}else{console[_0xcb13('68','Gl#K')](_0x32bfbc[_0xcb13('82','bw5e')]);}}else{if(_0x492845[_0xcb13('83','ByL*')](_0x492845['IFyIv'],_0x492845['IFyIv'])){if(res){let _0x58e6aa=$[_0xcb13('84','AC4g')](res);if(_0x58e6aa){score=_0x58e6aa['data'];}}}else{break;}}}else{continue;}}}}else{console[_0xcb13('85','g$H)')](_0x492845[_0xcb13('86','*Lzq')]('发起邀请请求失败:',res));}}else{console['log'](_0xcb13('87','4bGL'));}}else{console[_0xcb13('88','uO]B')](_0x492845[_0xcb13('89','MHRX')]);}console[_0xcb13('52',')wuZ')](_0x492845[_0xcb13('8a','z4d$')]);_0x31426d=await getUserPkInfo(_0x20462d['Pin']);if(_0x492845[_0xcb13('8b','GKF$')](_0x31426d[_0xcb13('8c','%s8p')],countreceive)>0x0){if(_0x4ab255){if(_0x492845[_0xcb13('83','ByL*')](_0x492845[_0xcb13('8d','KVgr')],_0xcb13('8e','MHRX'))){resolve(res);}else{for(let _0xda1851=0x0;_0x492845[_0xcb13('8f','4j0l')](_0xda1851,_0x4ab255['length']);_0xda1851++){if(_0x492845['WiOIW']!==_0x492845[_0xcb13('90','V2QG')]){let _0x3eb903=_0x4ab255[_0xda1851][_0xcb13('91','eHEe')];let _0xef7707=_0x4ab255[_0xda1851][_0xcb13('92','IC0K')];let _0x4d4482=_0x4ab255[_0xda1851][_0xcb13('93','4j0l')];let _0x5bd79e=0x1;if(_0x71982c['indexOf'](_0x3eb903)>-0x1){if(_0x492845['XXWKx'](_0xcb13('94','0cu%'),_0x492845['bqlql'])){continue;}else{console[_0xcb13('95','dOvG')](_0x492845['yybfT']);}}if(_0x492845[_0xcb13('96','g$H)')](_0x2539d1,null)&&_0x492845['cWYsi'](_0x2539d1[_0xcb13('97','bw5e')](_0x3eb903),-0x1)){_0x5bd79e=0x1;}else{_0x5bd79e=0x2;}_0x492845[_0xcb13('98','eHEe')](sleep,0x3e8);console[_0xcb13('85','g$H)')](_0x492845[_0xcb13('99','Sb21')](_0x492845[_0xcb13('9a','qZxX')](_0x492845[_0xcb13('9b','Sb21')](_0x492845[_0xcb13('9c','*ev3')](_0x492845['nfzqf'],_0x3eb903),_0x492845[_0xcb13('9d','[ONt')]),_0x4d4482)+_0x492845[_0xcb13('9e','*Lzq')],_0x5f274c));if(_0x492845[_0xcb13('9f','4Y9p')](_0x4d4482,_0x5f274c)){if(_0x492845['BMsYb'](countreceive,_0x31426d[_0xcb13('a0','@6lT')])){if(_0x492845[_0xcb13('a1','4ORN')](_0xcb13('a2','b%Xr'),_0x492845[_0xcb13('a3',']kY%')])){console[_0xcb13('a4','Sb21')](resp);}else{console['log'](_0xcb13('a5','mtMv'));await _0x145623(_0xef7707,_0x20462d[_0xcb13('59','z4d$')],_0x20462d['lkToken'],_0x5bd79e);if(bcomplate){_0x492845['MeUBn'](sleep,0x3e8);await _0x492845[_0xcb13('a6','V2QG')](_0x3491a4,_0xef7707,_0x20462d[_0xcb13('a7','#HM^')],_0x20462d['lkToken'],0x1);}}}else{if(_0x492845[_0xcb13('a8','4NND')](_0xcb13('a9','dOvG'),_0x492845[_0xcb13('aa','z4d$')])){break;}else{console[_0xcb13('71','Wjy7')](_0x32bfbc['hyRHP'](_0x32bfbc['lQfFh'],$['toStr'](resp)));}}}else{if(_0x492845['BTDKb']!==_0x492845[_0xcb13('ab','Wjy7')]){continue;}else{countreceive=_0x492845[_0xcb13('ac','MHRX')](_0x3c4257,0x1);countlaunch=0x1;}}}else{_0x32bfbc[_0xcb13('ad','Sb21')](resolve,score);}}console['log'](_0x492845[_0xcb13('ae',')wuZ')]);}}else{if(_0xcb13('af','eHEe')==='zrMyo'){let _0x2aec3a;if(isGet==0x0){_0x2aec3a=appId+'_'+appMD5Key+'_'+body+'_'+timestamp;}else{_0x2aec3a=appId+'_'+appMD5Key+'__'+timestamp;}return $[_0xcb13('b0','4j0l')](_0x2aec3a);}else{console[_0xcb13('b1','qN2y')](_0x492845[_0xcb13('b2','4NND')]);}}}else{console['log'](_0x492845[_0xcb13('b3','(Emj')]);}}}if(kaixiang){if(_0x492845[_0xcb13('b4','(Emj')](_0x492845['WQCRn'],_0x492845[_0xcb13('b5','4)qY')])){console[_0xcb13('b6','mtMv')](_0x492845[_0xcb13('b7','A(3a')]);let _0x3a9136=await _0x492845[_0xcb13('b8','*ev3')](getBoxRewardInfo,_0x20462d['Pin']);if(_0x3a9136[_0xcb13('b9','b%Xr')]){for(let _0x549962=0x0;_0x492845['NOSVa'](_0x549962,_0x3a9136[_0xcb13('ba','4NND')][_0xcb13('bb','ByL*')]);_0x549962++){if(_0x492845[_0xcb13('bc','GKF$')](_0x492845[_0xcb13('bd','4NND')],_0x492845[_0xcb13('be','4ORN')])){_0x5bd79e=0x1;}else{let _0x4e1716=_0x3a9136['awards'][_0x549962];if(_0x492845[_0xcb13('bf','(Emj')](_0x4e1716[_0xcb13('c0','Gl#K')],0x0)){if(_0x492845[_0xcb13('c1','*Lzq')](_0x492845[_0xcb13('c2','dOvG')],_0x492845['QNUFU'])){if(_0x3a9136[_0xcb13('c3','dOvG')]>=_0x4e1716[_0xcb13('c4','dOvG')]){console['log'](_0x492845[_0xcb13('c5','g$H)')](_0x492845[_0xcb13('c6','4Y9p')],_0x4e1716['rewards'][0x0][_0xcb13('c7','dOvG')]));await _0x492845[_0xcb13('c8','ByL*')](sendBoxReward,_0x4e1716['id'],_0x20462d['Pin']);}}else{if(data[_0xcb13('c9','b%Xr')]){if(intype==0x0){console[_0xcb13('ca','diBE')](_0x32bfbc[_0xcb13('cb','0Tx5')](_0xcb13('cc','*ev3'),data[_0xcb13('cd','MHRX')][_0xcb13('ce','KVgr')]));}else{console[_0xcb13('cf','4j0l')](_0x32bfbc[_0xcb13('d0','IC0K')](_0x32bfbc[_0xcb13('d1','ByL*')],data[_0xcb13('d2','diBE')]['toWinNum']));}}countreceive++;}}}}}console[_0xcb13('d3','ByL*')](_0xcb13('d4','GKF$'));}else{_0x492845[_0xcb13('5c','0cu%')](resolve,res);}}}};function _0x5ad92e(_0x2f4bf4,_0x1bfbb4,_0x2f0400,_0x4ef017=0x2){var _0x443d2f={'EYjgc':function(_0x286fd3,_0x27f4c1){return _0x286fd3+_0x27f4c1;},'eLNmC':function(_0x26c372,_0x13f9d2){return _0x26c372+_0x13f9d2;},'tmxYa':function(_0x4f3b28,_0x54a55c){return _0x492845['NWvZV'](_0x4f3b28,_0x54a55c);},'LEOAg':_0xcb13('d5','Wjy7'),'JUQnF':_0x492845[_0xcb13('d6','qZxX')],'iJFCv':function(_0x3d6f96,_0x55d44e){return _0x492845[_0xcb13('d7','@6lT')](_0x3d6f96,_0x55d44e);},'upgIU':_0xcb13('d8','Gl#K'),'AzQfd':_0x492845[_0xcb13('d9','MHRX')],'scjnl':function(_0x3e82ee,_0x4f8d70){return _0x3e82ee!==_0x4f8d70;},'qpIOl':'qGvSW','rZbmo':_0xcb13('da','Vi$!'),'YiKBM':function(_0x33e435,_0x3429d0){return _0x492845[_0xcb13('db','[ONt')](_0x33e435,_0x3429d0);},'zseWJ':function(_0x8ca4ab,_0x3963f9){return _0x492845[_0xcb13('dc','Unfn')](_0x8ca4ab,_0x3963f9);},'ThumD':_0x492845[_0xcb13('dd','[ONt')],'IYJiF':function(_0x33f070,_0x431f2c){return _0x33f070!==_0x431f2c;},'UeeRp':_0x492845[_0xcb13('de','qN2y')],'BDYFk':_0x492845['ebrdD'],'mzLcm':_0x492845['bbLVi'],'Scbbj':_0x492845[_0xcb13('df','4ORN')],'XNmGj':function(_0xc07ff2,_0x46f0fa){return _0xc07ff2+_0x46f0fa;},'sdQRz':function(_0x4653fb,_0x366c4f){return _0x4653fb(_0x366c4f);},'zqiaV':_0x492845['JaJNG'],'WRcqO':function(_0x50c1bc,_0x3f9622){return _0x492845['UyBnY'](_0x50c1bc,_0x3f9622);},'JrJKN':_0x492845[_0xcb13('e0','A(3a')],'nqEjs':function(_0x30e288,_0x207f7c){return _0x492845[_0xcb13('e1','XPi5')](_0x30e288,_0x207f7c);}};if('alLbA'===_0x492845[_0xcb13('e2','MHRX')]){console[_0xcb13('a4','Sb21')](_0x443d2f[_0xcb13('e3','[ONt')](_0x443d2f[_0xcb13('e4','qN2y')](_0x443d2f[_0xcb13('e5','4bGL')](_0x443d2f['LEOAg'],myinfo[_0xcb13('4b','Lc$v')]),'当前lkToken：'),myinfo[_0xcb13('e6','AC4g')]));}else{console['log'](_0x492845[_0xcb13('e7','Lc$v')]);var _0x3ac6f4=new Date()['getTime']();let _0x382224='{\x22actId\x22:9,\x22recipient\x22:\x22'+_0x2f4bf4+'\x22,\x22relation\x22:'+_0x4ef017+'}';const _0x10e39c=_0x523ed0(APPID,md5Key,_0x382224,_0x3ac6f4);const _0x328c63=_0xcb13('e8','4ORN')+APPID+_0xcb13('e9','6HQg')+_0x1bfbb4+_0xcb13('ea','4ORN')+_0x2f0400+_0xcb13('eb','4NND')+_0x10e39c+_0xcb13('ec','!*Qo')+_0x3ac6f4;const _0x4f7ba2=_0x492845['LzkTI'](getPostRequest,'launchBattle',_0x328c63,_0x382224);return new Promise(_0x3b687a=>{var _0x510937={'bGnAh':function(_0x716bfc,_0xe83dfd){return _0x443d2f[_0xcb13('ed','4ORN')](_0x716bfc,_0xe83dfd);}};$[_0xcb13('ee','ByL*')](_0x4f7ba2,(_0x4cea3d,_0xc20326,_0x411b1d)=>{var _0x3be44b={'WjLmK':function(_0x3678ff,_0x2f9902){return _0x3678ff+_0x2f9902;},'RlAjJ':_0x443d2f[_0xcb13('ef','V2QG')],'nQEVh':function(_0x3c14bb,_0x3d9ce9){return _0x3c14bb(_0x3d9ce9);}};try{if(_0x443d2f[_0xcb13('f0','4ORN')](_0x443d2f['upgIU'],_0x443d2f[_0xcb13('f1','uO]B')])){if(_0x411b1d){let _0xef4429=$[_0xcb13('f2','MHRX')](_0x411b1d);if(_0xef4429){_0xef4429=_0xef4429['data'];if(_0xef4429[_0xcb13('f3','IC0K')]){if(_0x443d2f['scjnl'](_0x443d2f[_0xcb13('f4','4Y9p')],_0x443d2f[_0xcb13('f5','4)qY')])){if(_0x443d2f['YiKBM'](_0xef4429['state'],0x2)){if(_0x443d2f[_0xcb13('f6','XPi5')](_0x443d2f[_0xcb13('f7','0cu%')],_0xcb13('f8','6HQg'))){console[_0xcb13('f9','bw5e')]('主动邀请失败：'+_0xef4429['msg']);}else{console[_0xcb13('fa','Vi$!')](_0x3be44b[_0xcb13('fb','mtMv')](_0x3be44b[_0xcb13('fc','Vi$!')],$['toStr'](_0xef4429)));}}}else{let _0x131bc7=$['toObj'](_0x411b1d);if(_0x131bc7){score=_0x131bc7['data'];}}}else{if(_0x443d2f[_0xcb13('fd','0Tx5')](_0x443d2f['UeeRp'],'cNxzW')){if(_0xef4429[_0xcb13('fe','mtMv')]){countlaunch++;console['log'](_0x443d2f[_0xcb13('ff','b%Xr')]+$[_0xcb13('100','KVgr')](_0xef4429));console[_0xcb13('101','0cu%')](_0x443d2f[_0xcb13('102','GKF$')](_0x443d2f[_0xcb13('103','ByL*')],_0xef4429[_0xcb13('104',')wuZ')][_0xcb13('105',')wuZ')]));}else{if(_0x443d2f['IYJiF']('aJEUl',_0x443d2f[_0xcb13('106','uO]B')])){if(_0x411b1d){_0x510937[_0xcb13('107','KVgr')](_0x3b687a,_0x411b1d);}}else{console['log'](_0x443d2f['XNmGj'](_0x443d2f[_0xcb13('108','Lc$v')],$[_0xcb13('109','V2QG')](_0xef4429)));}}_0x443d2f[_0xcb13('10a','VF5B')](sleep,0x3e8);}else{console[_0xcb13('6a','AC4g')](e);}}}}else{console[_0xcb13('10b','Lc$v')](_0x443d2f['XNmGj'](_0x443d2f[_0xcb13('10c','Gl#K')],_0x411b1d));}}else{_0x3be44b[_0xcb13('10d','b%Xr')](_0x3b687a,_0x411b1d);}}catch(_0x2b75f2){console[_0xcb13('10b','Lc$v')](_0xc20326);}finally{if(_0x443d2f[_0xcb13('10e','uO]B')](_0xcb13('10f','[jqZ'),_0x443d2f[_0xcb13('110','AC4g')])){countreceive++;console['log'](_0xcb13('111','0cu%')+$['toStr'](data));}else{_0x3b687a(_0x411b1d);}}});});}};function _0x145623(_0x36faf7,_0x58ff41,_0x2fa800,_0xde342b=0x2){var _0x43960d={'lelyf':_0xcb13('112','GKF$'),'IYZGi':function(_0x2da32a,_0x4a4b20){return _0x492845[_0xcb13('113','Sb21')](_0x2da32a,_0x4a4b20);},'sfTEv':'lqlNj','uQrNs':_0x492845[_0xcb13('114',')wuZ')],'uWGpy':function(_0x107645,_0xb2e5f8){return _0x492845[_0xcb13('115','diBE')](_0x107645,_0xb2e5f8);},'HdFOx':_0x492845[_0xcb13('116','eHEe')],'dsdsK':function(_0xd45743,_0x3be1e8){return _0x492845[_0xcb13('117','0cu%')](_0xd45743,_0x3be1e8);},'ZBOrI':_0xcb13('118','Lc$v'),'tlhOz':function(_0x105c07,_0x32b321){return _0x492845['fjHmm'](_0x105c07,_0x32b321);},'mRouV':'被动邀请失败：','Vlsen':function(_0x24e00b,_0x43cb3b){return _0x492845[_0xcb13('119','IC0K')](_0x24e00b,_0x43cb3b);},'gTlTQ':_0x492845['EcluP'],'YkYXg':_0x492845[_0xcb13('11a','XPi5')],'tMDjM':function(_0x2baca7,_0x170c56){return _0x492845['QPmOI'](_0x2baca7,_0x170c56);},'qsndK':_0x492845[_0xcb13('11b','4j0l')]};if(_0x492845['MWWjN']===_0x492845[_0xcb13('11c','dOvG')]){console['log'](_0x492845[_0xcb13('11d','0cu%')]);var _0x5025dc=new Date()[_0xcb13('11e','4NND')]();let _0x3d10ff=_0xcb13('11f','[jqZ')+_0x36faf7+_0xcb13('120','0cu%')+_0xde342b+'}';const _0x281c12=_0x523ed0(APPID,md5Key,_0x3d10ff,_0x5025dc);const _0x21030c=_0xcb13('121','Vi$!')+APPID+_0xcb13('122','Lc$v')+_0x58ff41+_0xcb13('123','*ev3')+_0x2fa800+_0xcb13('124','4j0l')+_0x281c12+_0xcb13('125',')wuZ')+_0x5025dc;const _0x4b5dae=getPostRequest(_0x492845['GzVra'],_0x21030c,_0x3d10ff);return new Promise(_0x671613=>{$[_0xcb13('126','[jqZ')](_0x4b5dae,(_0x3ba959,_0x1b3a32,_0x49a771)=>{if(_0x43960d[_0xcb13('127','GKF$')]!==_0x43960d['lelyf']){if(_0x49a771){let _0x5a564c=$[_0xcb13('128','uO]B')](_0x49a771);if(_0x5a564c){score=_0x5a564c[_0xcb13('129','KVgr')];}}}else{try{if(_0x43960d['IYZGi'](_0x43960d['sfTEv'],_0x43960d[_0xcb13('12a','4)qY')])){console[_0xcb13('4c','clR#')](_0x1b3a32);}else{if(_0x49a771){if(_0x43960d['uWGpy']('JulpL',_0x43960d['HdFOx'])){str=appId+'_'+appMD5Key+'_'+_0x3d10ff+'_'+timestamp;}else{let _0x436b10=$[_0xcb13('12b','KVgr')](_0x49a771);if(_0x436b10){_0x436b10=_0x436b10['data'];if(_0x436b10[_0xcb13('12c','Gl#K')]){if(_0x43960d['dsdsK'](_0x436b10[_0xcb13('12d','4ORN')],0x2)){if(_0x43960d[_0xcb13('12e','mtMv')]!==_0xcb13('12f','[ONt')){score=_0x436b10[_0xcb13('130','qN2y')];}else{console['log'](_0x43960d[_0xcb13('131','Lc$v')](_0x43960d[_0xcb13('132','g$H)')],_0x436b10['msg']));bcomplate=![];}}}else{if(_0x436b10[_0xcb13('104',')wuZ')]){countreceive++;console[_0xcb13('133','GKF$')](_0x43960d[_0xcb13('134','MHRX')](_0xcb13('135','Vi$!'),$[_0xcb13('136','clR#')](_0x436b10)));}else{bcomplate=!![];console['log'](_0x43960d['Vlsen'](_0x43960d[_0xcb13('137','A(3a')],$[_0xcb13('138','GKF$')](_0x436b10)));}}}}}else{bcomplate=![];console['log'](_0x43960d[_0xcb13('139','GKF$')](_0x43960d[_0xcb13('13a','4bGL')],_0x49a771));}}}catch(_0x27df4d){if(_0x43960d[_0xcb13('13b','bw5e')](_0x43960d[_0xcb13('13c','qZxX')],_0x43960d['qsndK'])){console[_0xcb13('10b','Lc$v')](_0x1b3a32);}else{_0x671613(score);}}finally{_0x671613(_0x49a771);}}});});}else{if(data[_0xcb13('13d','[jqZ')]){countlaunch++;console[_0xcb13('85','g$H)')](_0x492845[_0xcb13('13e','qZxX')](_0x492845[_0xcb13('13f','[ONt')],$[_0xcb13('140','4bGL')](data)));console[_0xcb13('68','Gl#K')](_0x492845[_0xcb13('141','%s8p')](_0x492845[_0xcb13('142','[ONt')],data[_0xcb13('143','9wp$')][_0xcb13('144','diBE')]));}else{console['log'](_0x492845[_0xcb13('145',']kY%')]('邀请成功需要等待接收PK：',$[_0xcb13('146','!*Qo')](data)));}_0x492845[_0xcb13('147','A(3a')](sleep,0x3e8);}};function _0x3491a4(_0x8464f4,_0xba06e2,_0xe770ec,_0x355047){var _0xedf5b5={'QsLgj':function(_0x3b79a5,_0x2aaf77){return _0x3b79a5+_0x2aaf77;},'oIQMN':_0x492845['bbLVi'],'mQdAx':function(_0x8b31df,_0x53ccdf){return _0x492845[_0xcb13('148','4j0l')](_0x8b31df,_0x53ccdf);},'ZavWD':function(_0x13c19f,_0xaf2d64){return _0x13c19f==_0xaf2d64;},'qabjC':function(_0x5d4069,_0x52b1d8){return _0x492845['fjHmm'](_0x5d4069,_0x52b1d8);},'dUrnf':function(_0x2e3775,_0x9aa6a6){return _0x492845[_0xcb13('149','0cu%')](_0x2e3775,_0x9aa6a6);},'KJQAG':function(_0x2f6715,_0x21e21e){return _0x492845['fjHmm'](_0x2f6715,_0x21e21e);},'BgkIF':_0x492845[_0xcb13('14a','ByL*')],'vuyVG':_0x492845[_0xcb13('14b','XPi5')],'fspuw':function(_0x4c2aa4,_0x4d2cd9){return _0x4c2aa4(_0x4d2cd9);},'ZPYHQ':function(_0x1ca591,_0x53d58b,_0x28cbf0,_0x46ee57,_0x23f676){return _0x1ca591(_0x53d58b,_0x28cbf0,_0x46ee57,_0x23f676);},'VmWhR':function(_0x4f31f9,_0x509347,_0x1ee181,_0x17c8ba){return _0x492845[_0xcb13('14c','Lc$v')](_0x4f31f9,_0x509347,_0x1ee181,_0x17c8ba);},'iCSln':_0x492845['ymTkH']};console[_0xcb13('14d','Unfn')](_0xcb13('14e','z4d$'));return new Promise(_0x2486dc=>{var _0x55e498=new Date()[_0xcb13('14f','6HQg')]();let _0x56e184=_0xcb13('150','4bGL')+_0x8464f4+'\x22}';const _0x1a5041=_0xedf5b5[_0xcb13('151',')wuZ')](_0x523ed0,APPID,md5Key,_0x56e184,_0x55e498);const _0x16e850='appId='+APPID+_0xcb13('152','0Tx5')+_0xba06e2+'&lkToken='+_0xe770ec+_0xcb13('124','4j0l')+_0x1a5041+_0xcb13('153','b%Xr')+_0x55e498;const _0x5e113c=_0xedf5b5[_0xcb13('154','eHEe')](getPostRequest,_0xedf5b5[_0xcb13('155','4j0l')],_0x16e850,_0x56e184);$[_0xcb13('156','(iMk')](_0x5e113c,(_0x994162,_0xe0dd8c,_0x7da9de)=>{var _0x19f88a={'kedDh':function(_0x1e363a,_0x2c2205){return _0xedf5b5['QsLgj'](_0x1e363a,_0x2c2205);},'Pzlgb':_0xedf5b5[_0xcb13('157','g$H)')]};try{if(_0x7da9de){let _0x4385ee=$[_0xcb13('158','4bGL')](_0x7da9de);if(_0x4385ee){_0x4385ee=_0x4385ee[_0xcb13('159','9wp$')];if(_0xedf5b5[_0xcb13('15a','VF5B')](_0x4385ee[_0xcb13('15b','bw5e')],0x1)){if(_0x4385ee[_0xcb13('15c','Unfn')]){if(_0xedf5b5[_0xcb13('15d','VF5B')](_0x355047,0x0)){console[_0xcb13('f9','bw5e')]('当前胜场:'+_0x4385ee['pkResult'][_0xcb13('15e','!*Qo')]);}else{console[_0xcb13('15f','@6lT')](_0xedf5b5[_0xcb13('160','eHEe')](_0xedf5b5[_0xcb13('161','qN2y')],_0x4385ee[_0xcb13('104',')wuZ')][_0xcb13('162','V2QG')]));}}countreceive++;}else{if(_0xedf5b5[_0xcb13('163','diBE')](_0xcb13('164','4)qY'),'tpxZs')){console[_0xcb13('165','IC0K')](_0xedf5b5[_0xcb13('166','4)qY')](_0xcb13('167',']kY%'),$[_0xcb13('168','g$H)')](_0x4385ee)));}else{console[_0xcb13('169','4Y9p')](_0x19f88a['kedDh'](_0x19f88a['Pzlgb'],_0x4385ee[_0xcb13('16a','uO]B')][_0xcb13('16b','qN2y')]));}}}}}catch(_0x52e0cb){console[_0xcb13('4c','clR#')](_0xedf5b5[_0xcb13('16c',')wuZ')](_0xedf5b5[_0xcb13('16d','4NND')],$[_0xcb13('16e','VF5B')](_0xe0dd8c)));}finally{if(_0xcb13('16f','4bGL')===_0xedf5b5['vuyVG']){_0xedf5b5[_0xcb13('170',')wuZ')](_0x2486dc,_0x7da9de);}else{console['log'](e);}}});});}function _0x523ed0(_0x337145,_0x3d3623,_0x1814c1,_0x3522fb,_0x2cce45=0x0){var _0x10e6fc={'xhrgj':function(_0x198f9b,_0x566b50){return _0x198f9b(_0x566b50);}};if(_0x492845[_0xcb13('171','ByL*')](_0x492845[_0xcb13('172','bw5e')],_0x492845[_0xcb13('173',')wuZ')])){if(data['pkResult']){countreceive++;console[_0xcb13('174','[ONt')](_0x492845['fjHmm'](_0x492845['EPfYy'],$['toStr'](data)));}else{bcomplate=!![];console[_0xcb13('175','4NND')](_0x492845['EcluP']+$[_0xcb13('176','bw5e')](data));}}else{let _0x34a82c;if(_0x492845[_0xcb13('177','IC0K')](_0x2cce45,0x0)){if(_0x492845['ruBXM'](_0x492845[_0xcb13('178',')wuZ')],_0xcb13('179','0Tx5'))){_0x10e6fc['xhrgj'](resolve,data);}else{_0x34a82c=_0x337145+'_'+_0x3d3623+'_'+_0x1814c1+'_'+_0x3522fb;}}else{_0x34a82c=_0x337145+'_'+_0x3d3623+'__'+_0x3522fb;}return $[_0xcb13('17a','4)qY')](_0x34a82c);}}function _0x431e4f(_0x346224,_0x4c618e){var _0x3f3bdb={'wGpDg':function(_0x504537,_0x18a98f){return _0x492845[_0xcb13('17b','MHRX')](_0x504537,_0x18a98f);},'oxEYB':_0x492845[_0xcb13('17c','Vi$!')],'aqIgK':function(_0x529e61,_0xf658b9){return _0x492845['ORzDQ'](_0x529e61,_0xf658b9);},'crfrb':_0xcb13('17d','XPi5'),'nhLTJ':function(_0x73fe05,_0x7b3379){return _0x492845[_0xcb13('17e','qN2y')](_0x73fe05,_0x7b3379);},'lLPSJ':_0x492845[_0xcb13('17f',')wuZ')],'Meqlx':function(_0x2b0a23,_0x3c8a17,_0x5f388f,_0x1ed6a7,_0x5095f5,_0x4c1210){return _0x492845[_0xcb13('180','4NND')](_0x2b0a23,_0x3c8a17,_0x5f388f,_0x1ed6a7,_0x5095f5,_0x4c1210);},'HLcaI':function(_0x1f53f9,_0x1270b2,_0x5111fb,_0x1c82bf){return _0x1f53f9(_0x1270b2,_0x5111fb,_0x1c82bf);},'xGRmB':_0x492845['nEjUr']};return new Promise(_0x59d28b=>{var _0x7216d5={'zIwBr':function(_0x964a1b,_0x2ea0d8){return _0x964a1b(_0x2ea0d8);},'RxqeC':function(_0x8e628,_0x552feb){return _0x3f3bdb[_0xcb13('181','4ORN')](_0x8e628,_0x552feb);},'VhMkk':_0x3f3bdb[_0xcb13('182','#HM^')],'fOAeB':_0x3f3bdb[_0xcb13('183','[jqZ')]};if(_0x3f3bdb[_0xcb13('184','AC4g')]('XGVWb',_0x3f3bdb[_0xcb13('185',')wuZ')])){var _0x1d6cb3=new Date()[_0xcb13('186','[ONt')]();const _0x460de0=_0x3f3bdb[_0xcb13('187','4ORN')](_0x523ed0,APPID,md5Key,'',_0x1d6cb3,0x1);const _0x53bc95=_0xcb13('188','Unfn')+_0x4c618e+'&appId='+APPID+_0xcb13('122','Lc$v')+_0x346224+'&sign='+_0x460de0+_0xcb13('189','4ORN')+_0x1d6cb3;const _0x32b66e=_0x3f3bdb[_0xcb13('18a','GKF$')](getGetRequest,_0x3f3bdb['xGRmB'],_0x53bc95,0x0);$[_0xcb13('18b','4NND')](_0x32b66e,(_0x2c3b13,_0x4f04cb,_0x2fd5f4)=>{var _0x1024c0={'VXqRA':function(_0x530fcc,_0x54a880){return _0x7216d5[_0xcb13('18c','MHRX')](_0x530fcc,_0x54a880);}};let _0x4f9c84;try{if(_0x2fd5f4){_0x4f9c84=$['toObj'](_0x2fd5f4);_0x4f9c84=_0x4f9c84[_0xcb13('18d','4j0l')];if(_0x4f9c84){console[_0xcb13('18e','[jqZ')](_0x7216d5[_0xcb13('18f',']kY%')](_0x7216d5['VhMkk'],_0x4f9c84));_0x59d28b(_0x4f9c84);}}}catch(_0x4ebab5){if(_0xcb13('190','diBE')===_0x7216d5[_0xcb13('191','(iMk')]){_0x1024c0[_0xcb13('192','AC4g')](_0x59d28b,_0x2fd5f4);}else{console[_0xcb13('52',')wuZ')](_0x4f04cb);}}finally{_0x59d28b(_0x4f9c84);}});}else{console[_0xcb13('a4','Sb21')](_0x3f3bdb[_0xcb13('193','clR#')](_0x3f3bdb[_0xcb13('194','GKF$')],data));_0x3f3bdb['aqIgK'](_0x59d28b,data);}});}function _0x4b3951(_0xf7e99a,_0x1ec680){var _0x405ec4={'LWqMb':_0x492845[_0xcb13('195','6HQg')]};const _0x18a553=_0xcb13('196','0cu%')+_0xf7e99a+_0xcb13('197',']kY%')+_0x1ec680;const _0x539133=_0x492845[_0xcb13('198','g$H)')](getGetRequest,_0x492845['EmWKn'],_0x18a553);return new Promise(_0x9bce31=>{if(_0x492845['xPwtZ']!==_0x492845['DTuBS']){$['get'](_0x539133,(_0x26fdae,_0x14399a,_0x3c48c0)=>{let _0x39cecc=0x0;try{if(_0x3c48c0){let _0x3501ce=$[_0xcb13('199','9wp$')](_0x3c48c0);if(_0x3501ce){_0x39cecc=_0x3501ce[_0xcb13('19a','qZxX')];}}}catch(_0x584a18){console[_0xcb13('19b','0Tx5')](_0x14399a);}finally{_0x9bce31(_0x39cecc);}});}else{bcomplate=!![];console[_0xcb13('d3','ByL*')](_0x405ec4[_0xcb13('19c','ByL*')]+$['toStr'](data));}});}function _0x271c9c(_0x236b33,_0x76e4af){var _0xf30bf={'IcGWO':function(_0x7e2aab,_0x1ffa95){return _0x492845[_0xcb13('19d','VF5B')](_0x7e2aab,_0x1ffa95);},'Clsmq':function(_0x70aba7,_0x240982){return _0x492845[_0xcb13('19e','#HM^')](_0x70aba7,_0x240982);},'FtYmC':_0x492845[_0xcb13('19f','!*Qo')],'sfqpn':_0x492845[_0xcb13('1a0','#HM^')],'mwxhP':_0x492845[_0xcb13('1a1','ByL*')],'vZVJZ':_0x492845[_0xcb13('1a2','Gl#K')],'eIBkZ':function(_0x5e11c4,_0x1c9764){return _0x492845[_0xcb13('1a3',')wuZ')](_0x5e11c4,_0x1c9764);}};if(_0x492845[_0xcb13('1a4','(Emj')]===_0xcb13('1a5','(iMk')){const _0x52cdbe='actId=9&appId='+_0x236b33+_0xcb13('1a6','0cu%')+_0x76e4af;const _0x261a13=_0x492845['BNqYq'](getGetRequest,'checkRisk',_0x52cdbe);return new Promise(_0x3cfaa2=>{var _0x14ec7d={'tqimq':function(_0x576eec,_0xa228d5){return _0x492845[_0xcb13('1a7',')wuZ')](_0x576eec,_0xa228d5);}};$[_0xcb13('1a8','[ONt')](_0x261a13,(_0x3149f0,_0x1922aa,_0x80ebec)=>{var _0x2ad159={'ZCqhi':function(_0x2fca55,_0x5dceb2){return _0xf30bf[_0xcb13('1a9','MHRX')](_0x2fca55,_0x5dceb2);}};if(_0xf30bf[_0xcb13('1aa','*ev3')](_0xf30bf[_0xcb13('1ab','MHRX')],_0xf30bf[_0xcb13('1ac','4j0l')])){let _0x2951bd=0x0;try{if(_0x80ebec){let _0x356ab8=$['toObj'](_0x80ebec);if(_0x356ab8){if(_0xf30bf[_0xcb13('1ad','clR#')]===_0xf30bf['vZVJZ']){if(_0x80ebec){let _0x142429=$[_0xcb13('1ae','ByL*')](_0x80ebec);_0x14ec7d[_0xcb13('1af','(iMk')](_0x3cfaa2,_0x142429);}}else{_0x2951bd=_0x356ab8[_0xcb13('1b0','uO]B')];}}}}catch(_0x4d64f1){console[_0xcb13('d3','ByL*')](_0x1922aa);}finally{_0xf30bf['IcGWO'](_0x3cfaa2,_0x2951bd);}}else{data=$['toObj'](_0x80ebec);data=data[_0xcb13('1b1','6HQg')];if(data){console['log']('获取分享PK码：'+data);_0x2ad159[_0xcb13('1b2','0cu%')](_0x3cfaa2,data);}}});});}else{_0xf30bf[_0xcb13('1b3','(iMk')](resolve,res);}}function _0x120835(_0x58d5e6){var _0x241e40={'fYAfp':function(_0x202296,_0x48dfe4){return _0x492845[_0xcb13('1b4','eHEe')](_0x202296,_0x48dfe4);},'utUzX':function(_0x9c995a,_0x1020a6){return _0x9c995a===_0x1020a6;},'DUdZi':_0x492845[_0xcb13('1b5','6HQg')],'yDneI':_0x492845[_0xcb13('1b6','KVgr')],'dDNax':function(_0x39263d,_0x163f45){return _0x492845[_0xcb13('1b7','0cu%')](_0x39263d,_0x163f45);},'zEill':function(_0x50d882,_0x4487c5){return _0x492845[_0xcb13('1b8','[jqZ')](_0x50d882,_0x4487c5);},'czEjJ':'Ilgqs','Pstle':function(_0x4e473f,_0x303931){return _0x492845['jTgRa'](_0x4e473f,_0x303931);}};if(_0x492845[_0xcb13('1b9','clR#')]!==_0x492845['bHKRW']){const _0x5015ff=_0xcb13('1ba','KVgr');const _0x25b755=_0xcb13('1bb','%s8p');const _0x4442d8={'Host':_0x492845[_0xcb13('1bc','qN2y')],'Content-Type':_0x492845[_0xcb13('1bd','4)qY')],'Connection':_0xcb13('1be','[ONt'),'Accept':_0x492845['XRifu'],'User-Agent':_0x492845['LxURd'],'Accept-Language':_0x492845[_0xcb13('1bf','g$H)')]};let _0x143a9c={'url':_0x5015ff,'method':_0x25b755,'headers':_0x4442d8,'body':$['toStr'](_0x58d5e6)};return new Promise(_0x26d931=>{$[_0xcb13('1c0','(Emj')](_0x143a9c,(_0x5dd7cd,_0xf2e51f,_0x57b47a)=>{var _0x5d3f3a={'EpRLu':function(_0x1e34e1,_0x40ba1c){return _0x241e40['fYAfp'](_0x1e34e1,_0x40ba1c);}};if(_0x241e40[_0xcb13('1c1','#HM^')](_0x241e40[_0xcb13('1c2','0cu%')],_0x241e40[_0xcb13('1c3','V2QG')])){console[_0xcb13('1c4','4)qY')](_0x5d3f3a['EpRLu'](_0xcb13('1c5','@6lT'),data[_0xcb13('1c6','@6lT')]));bcomplate=![];}else{try{if(_0x241e40[_0xcb13('1c7','Unfn')]('BUXIy',_0xcb13('1c8','ByL*'))){if(_0x57b47a){if(_0x241e40[_0xcb13('1c9','[jqZ')](_0x241e40[_0xcb13('1ca','MHRX')],_0x241e40[_0xcb13('1cb',']kY%')])){console[_0xcb13('1cc','A(3a')](_0xf2e51f);}else{console['log'](_0xcb13('1cd','KVgr')+_0x57b47a);}}}else{if(_0x57b47a){console[_0xcb13('10b','Lc$v')]('上传结果：'+_0x57b47a);}}}catch(_0x130d92){console[_0xcb13('15f','@6lT')](_0x130d92);}finally{_0x241e40[_0xcb13('1ce','Gl#K')](_0x26d931,_0x57b47a);}}});});}else{let _0x16b9e3=$['toObj'](res);if(_0x16b9e3){score=_0x16b9e3[_0xcb13('1cf','clR#')];}}};function _0x4626f6(_0x40fe20){var _0x12940e={'lnqmc':function(_0x24c6e4,_0x268acf){return _0x24c6e4>_0x268acf;},'XXIbM':function(_0xdb7c75,_0x58a072){return _0xdb7c75+_0x58a072;},'znimw':function(_0x1f3519,_0x2ac5e5){return _0x492845[_0xcb13('1d0','mtMv')](_0x1f3519,_0x2ac5e5);},'EiMDn':_0x492845[_0xcb13('1d1','dOvG')],'Labhx':function(_0x31a4fb,_0x17e060){return _0x492845[_0xcb13('1d2','9wp$')](_0x31a4fb,_0x17e060);},'RiNjF':'MOxeJ','SUTWE':function(_0x5653df,_0x5f0a2e){return _0x492845[_0xcb13('1d3','ByL*')](_0x5653df,_0x5f0a2e);},'cyAPg':function(_0x4806ac,_0x5d2eba){return _0x4806ac===_0x5d2eba;},'NYfBf':'jBtej','DdsSd':function(_0x370986,_0x49b8de){return _0x492845[_0xcb13('1d4','qZxX')](_0x370986,_0x49b8de);}};return new Promise(_0x3744b2=>{var _0x4a9c6b={'mKHGB':function(_0xfe621a,_0x3cd6ab){return _0x492845['bgnUb'](_0xfe621a,_0x3cd6ab);},'Dvznp':_0x492845['jBwFX'],'ZSCha':function(_0x566158,_0x47f881){return _0x492845[_0xcb13('1d5','(iMk')](_0x566158,_0x47f881);}};if(_0x492845[_0xcb13('1d6','VF5B')]==='pWglr'){if(_0x12940e[_0xcb13('1d7','uO]B')](data[_0xcb13('1d8','AC4g')],0x2)){console[_0xcb13('1d9','!*Qo')](_0x12940e[_0xcb13('1da','GKF$')](_0xcb13('1db','#HM^'),data[_0xcb13('1dc','0cu%')]));}}else{let _0x1d3682=_0x492845[_0xcb13('1dd','GKF$')](_0x492845[_0xcb13('1de','Wjy7')](_0x492845[_0xcb13('1df','0cu%')],_0x492845[_0xcb13('1e0','*ev3')]),_0x40fe20);let _0x5c6159={'url':_0x1d3682,'headers':{'Host':_0x492845[_0xcb13('1e1','qZxX')],'Connection':_0x492845[_0xcb13('1e2','clR#')],'Accept':'\x20*/*','User-Agent':_0x492845[_0xcb13('1e3','Lc$v')],'Accept-Language':_0xcb13('1e4','qN2y')}};$[_0xcb13('1e5','9wp$')](_0x5c6159,(_0x4e587b,_0x1039ac,_0x7a26c8)=>{var _0x9a17ec={'otyPp':function(_0x2cf90c,_0x10ba66){return _0x12940e[_0xcb13('1e6','!*Qo')](_0x2cf90c,_0x10ba66);},'CNvCW':_0x12940e[_0xcb13('1e7','!*Qo')],'PunIu':function(_0x2aa91e,_0x28d22a){return _0x2aa91e+_0x28d22a;}};if(_0x12940e[_0xcb13('1e8','(Emj')](_0xcb13('1e9','4)qY'),_0x12940e[_0xcb13('1ea','%s8p')])){if(_0x7a26c8){data=$['toObj'](_0x7a26c8);data=data['data'];if(data){console[_0xcb13('ca','diBE')](_0x4a9c6b[_0xcb13('1eb','Gl#K')](_0x4a9c6b['Dvznp'],data));_0x4a9c6b[_0xcb13('1ec','Wjy7')](_0x3744b2,data);}}}else{try{if(_0x7a26c8){_0x12940e[_0xcb13('1ed','9wp$')](_0x3744b2,_0x7a26c8);}}catch(_0x39d4aa){if(_0x12940e[_0xcb13('1ee','KVgr')](_0xcb13('1ef','4Y9p'),_0x12940e[_0xcb13('1f0','[ONt')])){if(_0x9a17ec['otyPp'](intype,0x0)){console[_0xcb13('1d9','!*Qo')](_0x9a17ec[_0xcb13('1f1','Vi$!')]+data[_0xcb13('1f2','#HM^')][_0xcb13('1f3',']kY%')]);}else{console[_0xcb13('1c4','4)qY')](_0x9a17ec[_0xcb13('1f4','MHRX')](_0x9a17ec[_0xcb13('1f5','Gl#K')],data[_0xcb13('1f6','!*Qo')][_0xcb13('1f7','4NND')]));}}else{console[_0xcb13('1f8','VF5B')](_0x39d4aa);}}finally{_0x12940e[_0xcb13('1f9','Unfn')](_0x3744b2,_0x7a26c8);}}});}});}function _0x23aec7(_0x3be484,_0x4bc6fd){var _0x372fbd={'xTBQc':function(_0x4f03b7,_0x288b95){return _0x492845[_0xcb13('1fa','*Lzq')](_0x4f03b7,_0x288b95);},'WrJNe':_0x492845[_0xcb13('1fb','mtMv')],'yaxpN':_0x492845[_0xcb13('1fc','%s8p')],'kyTWl':function(_0xe50271,_0x241fba){return _0xe50271!==_0x241fba;},'twLfl':_0x492845[_0xcb13('1fd','MHRX')],'BQDIz':function(_0x904063,_0x295a51){return _0x492845[_0xcb13('1fe','Vi$!')](_0x904063,_0x295a51);},'SZfwO':_0x492845['sdSjE'],'HWUec':_0xcb13('1ff','IC0K'),'JSFuC':_0x492845[_0xcb13('200','KVgr')],'xekzt':_0x492845[_0xcb13('201','qN2y')]};return new Promise(_0x8c511a=>{var _0x22e109={'EzJxn':function(_0x39e3bb,_0x2e56c3){return _0x372fbd[_0xcb13('202','!*Qo')](_0x39e3bb,_0x2e56c3);}};let _0x6efbf8='https://api.scriptsjd.cf/api/JoyScore/GetPin?count='+_0x3be484+_0xcb13('203','Wjy7')+_0x4bc6fd;let _0x98e127={'url':_0x6efbf8,'headers':{'Host':_0xcb13('204',']kY%'),'Connection':_0x372fbd[_0xcb13('205','z4d$')],'Accept':_0x372fbd[_0xcb13('206','b%Xr')],'User-Agent':_0x372fbd['JSFuC'],'Accept-Language':_0x372fbd['xekzt']}};$['get'](_0x98e127,(_0x138ff1,_0x54d96c,_0x4c0f84)=>{if(_0x372fbd['xTBQc'](_0xcb13('207','(iMk'),_0x372fbd['WrJNe'])){_0x22e109['EzJxn'](_0x8c511a,_0x4c0f84);}else{try{if(_0x4c0f84){if(_0x372fbd[_0xcb13('208','6HQg')]!==_0xcb13('209','ByL*')){console[_0xcb13('133','GKF$')](_0xcb13('20a','4NND'));}else{let _0x574de8=$[_0xcb13('20b','qN2y')](_0x4c0f84);_0x8c511a(_0x574de8);}}}catch(_0x3b96fd){if(_0x372fbd[_0xcb13('20c','z4d$')]('jHltZ',_0x372fbd[_0xcb13('20d','#HM^')])){console[_0xcb13('133','GKF$')](_0xcb13('20e','b%Xr'));}else{console[_0xcb13('6a','AC4g')](_0x3b96fd);}}finally{_0x8c511a(_0x4c0f84);}}});});}_0x1ef2ae['main']=_0x58c567;}($);;_0xodS='jsjiami.com.v6';

!(async () => {

    if (!cookiesArr[0]) {
        $.msg(
            $.name,
            "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
            "https://bean.m.jd.com/", {
            "open-url": "https://bean.m.jd.com/"
        }
        );
        return;
    }
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(
                cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]
            );
            $.index = i + 1;
            message = "";
            console.log(`\n******开始【京东账号${$.index}】${$.UserName}*********\n`);
            //await $.updatefriend();
            await $.main();
        }
    }
})()
    .catch((e) => {
        $.log("", `❌ ${$.name}, 失败! 原因: ${e}!`, "");
    })
    .finally(() => {
        $.done();
    })


//已改


//获取京享值分数
function getScore(fpin) {
    const mquery = `actId=9&appId=${APPID}&lkEPin=${fpin}`;
    const myRequest = getGetRequest('getScore', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {
            let score = 0;
            try {
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        score = data.data;
                    }
                }
            } catch (e) {
                console.log(resp);
            } finally {
                //  console.log("查询"+fpin+"分数  " + score );
                resolve(score);
            }
        });
    });
}



//获取用户PK余量信息
function getUserPkInfo(pin) {
    const mquery = `actId=9&appId=${APPID}&lkEPin=${pin}`;
    const myRequest = getGetRequest('getUserPkInfo', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {

            try {
                if (res) {
                    let data = $.toObj(res);
                    data = data.data;
                    if (data) {
                        console.log(`${data.nickName}今天剩余主动邀请PK次数：${data.leftLunchPkNum} 被动邀请PK次数：${data.leftAcceptPkNum}`);
                        resolve(data);
                    }
                }
            } catch (e) {
                console.log("getUserPkInfo出错：" + resp);
            } finally {
                resolve();
            }
        });
    });
}
async function getFriendPinList(pin) {
    console.log("开始获取所有好友可以使用Pk列表中……");
    let allFriends = [];
    for (let i = 0; i < 100; i++) {
        let friends = await getUserFriendsPage(pin, i + 1);
        if (friends.length === 0) {
            console.log("好友列表到底了，共获取" + i + "页好友！！")
            break;
        }
        //console.log(`第${i+1}页`);
        for (let j = 0; j < friends.length; j++) {
            let item = friends[j];

            if (item.pkStatus == 2) {
                if (item.leftAcceptPkNum > 0 && item.leftLunchPkNum > 0) {
                    allFriends.push(item.friendPin);
                }
            }
        }
    }
    return allFriends;
}

//获取好友PK列表
function getUserFriendsPage(pin, pageNo) {
    //?actId=9&pageNo=2&pageSize=10&appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=13f5ef448152243c1e8c7a33f3b76dd20f296a206a12473f57d63d95f3be0534
    const mquery = `actId=9&pageNo=${pageNo}&pageSize=10&appId=${APPID}&lkEPin=${pin}`
    const myRequest = getGetRequest('getUserFriendsPage', mquery);
    return new Promise((resolve) => {
        $.get(myRequest, (err, resp, res) => {
            let data;
            try {
                if (res) {
                    data = $.toObj(res);
                    data = data.datas;
                    if (data) {
                        resolve(data);
                        //console.log("获取好友PK列表第" + pageNo + "页");
                    }
                }
            } catch (e) {
                console.log(resp);
            } finally {

                resolve(data);
            }
        });
    });
}


//已改
function getBoxRewardInfo(mypin) {
    return new Promise((resolve) => {
        const mquery = `actId=9&appId=${APPID}&lkEPin=${mypin}`;
        const myRequest = getGetRequest('getBoxRewardInfo', mquery);
        $.get(myRequest, (err, resp, res) => {
            try {

                if (res) {
                    let data = $.toObj(res);
                    if (data.success) {
                        // $.awards = data.data.awards;
                        //console.log($.toStr($.awards));
                        // $.totalWins=data.data.totalWins;
                        console.log("总胜场:" + data.data.totalWins);
                        resolve(data.data);
                    }

                }
            } catch (e) {
                console.log(resp);
            } finally {
                resolve(res);
            }
        });
    });
}

//已修复
function sendBoxReward(rewardConfigId, mypin) {
    return new Promise((resolve) => {
        console.log("进行开宝箱")
        const mquery = `rewardConfigId=${rewardConfigId}&actId=9&appId=${APPID}&lkEPin=${mypin}`
        const myRequest = getGetRequest('sendBoxReward', mquery);
        $.get(myRequest, (err, resp, res) => {
            try {
                console.log(res);
                if (res) {
                    let data = $.toObj(res);
                    if (data.success) {
                        for (let j = 0; j < data.datas.length; j++) {
                            console.log('获得奖励类型:' + data.datas[j].type + "京豆数量：" + data.datas[j].beanNum);
                        }

                    }

                }
            } catch (e) {
                console.log(resp);
            } finally {
                resolve(res);
            }
        });
    });
}

async function getPin() {
    return new Promise((resolve) => {
        let options = {
            "url": `https://jdjoy.jd.com/saas/framework/encrypt/pin?appId=${APPID}`,
            "headers": {
                "Host": "jdjoy.jd.com",
                "Origin": "https://prodev.m.jd.com",
                "Cookie": cookie,
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                "Accept-Language": "zh-cn",
                "Referer": "https://prodev.m.jd.com/"
            }
        };

        $.post(options, (err, resp, res) => {
            try {

                // console.log(res);
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        let minfo = { Pin: data.data.lkEPin, lkToken: data.data.lkToken };
                        resolve(minfo);
                        // $.pin = data.data.lkEPin
                        // $.lkToken=data.data.lkToken
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
};

function getToken() {
    return new Promise((resolve) => {
        let options = {
            "url": `https://jdjoy.jd.com/saas/framework/user/token?appId=${APPID}&client=m&url=pengyougou.m.jd.com`,
            "headers": {
                "Host": "jdjoy.jd.com",
                "Origin": "https://prodev.m.jd.com",
                "Cookie": cookie,
                "Connection": "keep-alive",
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                "Accept-Language": "zh-cn",
                "Referer": "https://prodev.m.jd.com/"
            }
        };
        $.post(options, (err, resp, res) => {
            let token;
            //console.log(JSON.stringify(res))
            try {
                if (res) {
                    let data = $.toObj(res);
                    if (data) {
                        token = data.data;
                    }

                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve(token);
            }
        });
    });
};
function getGetRequest(type, query, checktype = 1) {
    let url;
    if (checktype == 0) {
        url = `https://pengyougou.m.jd.com/open/api/like/jxz/${type}?${query}`;
    } else {
        url = `https://pengyougou.m.jd.com/like/jxz/${type}?${query}`;
    }

    const method = `GET`;
    const headers = {
        'Accept': `*/*`,
        "Origin": `https://game-cdn.moxigame.cn`,
        'Sec-Fetch-Site': `cross-site`,
        'Sec-Fetch-Mode': `cors`,
        'Sec-Fetch-Dest': `empty`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Referer': `https://game-cdn.moxigame.cn/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `pengyougou.m.jd.com`,
        "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        'Accept-Language': `zh-cn`
    };
    //console.log(url)
    return { url: url, method: method, headers: headers };
};

function getPostRequest(type, query, body) {
    const url = `https://pengyougou.m.jd.com/open/api/like/jxz/${type}?${query}`;
    const method = `POST`;
    const headers = {
        'Accept': `*/*`,
        'Origin': `https://game-cdn.moxigame.cn`,
        'Sec-Fetch-Site': `cross-site`,
        'Sec-Fetch-Mode': `cors`,
        'Sec-Fetch-Dest': `empty`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Content-Type': `application/json;charset=UTF-8`,
        'Host': `pengyougou.m.jd.com`,
        'Connection': `keep-alive`,
        "User-Agent": "jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        'Referer': `https://game-cdn.moxigame.cn/`,
        'Accept-Language': `zh-cn`
    };
    //console.log(url)
    return myRequest = { url: url, method: method, headers: headers, body: body };
};


function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, "", "不要在BoxJS手动复制粘贴修改cookie");
            return [];
        }
    }
};

function sleep(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};



// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
