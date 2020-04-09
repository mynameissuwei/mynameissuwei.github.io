/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/04/06/Github搭建博客/hexo.jpg","c3b5748b3e1dd5a483af30753a8f1620"],["/2019/04/06/Github搭建博客/index.html","a85bcaf032e59ca692d069e59f6275c6"],["/2019/04/06/主题音乐播放器/index.html","4bc06beb21a8cfe68a950275276dda3b"],["/2019/04/06/加快页面加载速度/index.html","4528a15fd5c9bf6fdc88cfb2548974cb"],["/2019/04/06/我的第一篇博客/index.html","7e52560cf643e02166a045a23149d457"],["/2019/04/07/pic/8.jpg","2c82c6e2e970e8c77b903492bc7b3bf4"],["/2019/04/07/pic/index.html","d6eee6faf06c77973b12e7378dae1d08"],["/2019/04/07/创建自己的微信公众号/index.html","424ff86d7cb88424f260b18fa3ebe376"],["/2019/04/07/功能完善/index.html","d3c5acd78331dc9a3fbfbf2b9873ff15"],["/2019/04/08/添加菜单分类页面/index.html","4501e61857c9bd84cb198100ac106e61"],["/2019/04/09/umi搭建教程/index.html","96eb3483c3d1ec3127a1972428492c49"],["/2019/04/12/ES6知识归纳/index.html","0cae6ba88f82fea196155174b1613e03"],["/2019/04/13/pm2start/index.html","e517ea74267552ec29a9d91652d3aa33"],["/2019/04/13/pm2start/pm2.png","db343923f76dd2f2a75ff2270929bcd6"],["/2019/04/17/webpack/index.html","a2931e495e9b950f33599a9e8646d1cc"],["/2019/04/22/react-hook/index.html","092ca30d233d3c33d2b34cb35a92676c"],["/2019/04/22/如何和hr谈薪资/index.html","110700bbe21da1e69ef88f0a4d637ad5"],["/2019/04/22/如何和hr谈薪资/p.jpg","54b0d80253acd02f30d13d6d474c156e"],["/2019/04/22/如何和hr谈薪资/pay.png","a6b4ce3e8eb61a0560c32a1a705c63d6"],["/2019/04/23/时间处理函数/index.html","1fba02dd7161685ee8ee17cec622e4b0"],["/2019/04/25/mac-Linux日常入门命令行使用/6900dac312be4fa891844f2c13e48c46_th.jpg","aaa36125f9642bd581f7a2c12cc32db2"],["/2019/04/25/mac-Linux日常入门命令行使用/index.html","a0c94be3ea70fc0bc2d7ba4e47bfaf55"],["/2019/04/25/mac上如何安装git/index.html","e20926b672c7daf3582cab74806c1963"],["/2019/04/25/mac上如何安装git/mac.jpg","99888184e7a1a93bc3a65abfae465b4a"],["/2019/04/25/mac上如何安装git/微信图片_20190425100828.png","87f2f7d584b4f0ea1b4acb2ee1da4df6"],["/2019/04/25/mac上如何安装git/微信图片_20190425100932.png","a7d71d4d2bf6e9b0a1f3bb17d4a92ac0"],["/2019/04/25/mac上如何安装git/微信图片_20190425101032.png","b2cc4fa3104d158d57d22705edfa58c3"],["/2019/04/25/mac上如何安装git/微信图片_20190425114016.png","cbd280f91ceed39d2a3d2d4e1d81859b"],["/2019/04/25/带大家了解sigmaJs/index.html","a54e48fd5b4d849d8b021ab477b66bec"],["/2019/04/25/带大家了解sigmaJs/sigma.png","a6854d00af3318d995add21857c7b6e0"],["/2019/04/25/带大家了解sigmaJs/微信图片_20190425171205.png","6e4f0e5e6bd6be863ae30241140e040c"],["/2019/04/27/ES6知识点总结/index.html","fe2ca29e7796652c9117c0c7ecbd2d44"],["/2019/05/02/typescript基本数据类型/index.html","8ce56faadd0dd57f703bb24707f6d6fb"],["/2019/05/03/redis的安装和使用/download.png","58e0f78af9cf3ea5caba4aa1be395978"],["/2019/05/03/redis的安装和使用/index.html","327ac2fbfc85b2948adca1dbd7a977f9"],["/2019/05/03/redis的安装和使用/install.png","eb3a9a34de1f8f7de44b585d9c081498"],["/2019/05/03/redis的安装和使用/keys.png","bce0da310dd34d5858a511a3c8aa0fad"],["/2019/05/03/redis的安装和使用/next.png","4f30173effb21b5c989f7c791072a48b"],["/2019/05/03/redis的安装和使用/redis.png","2b8e7418d31ad7726ddc45e6865b0c11"],["/2019/05/03/redis的安装和使用/session.png","79b608d83b667b9d59facf985acb628d"],["/2019/05/03/redis的安装和使用/set.png","b2587eb83b57015ad5b8074236203ccb"],["/2019/05/03/redis的安装和使用/setex.png","576a9e755f6196d852458f4f57bf0cdf"],["/2019/05/04/next-js/1.png","0711066bd5072abd7c802451f957b89d"],["/2019/05/04/next-js/2.png","6e06fee5820a26e00604a7d79320f12f"],["/2019/05/04/next-js/3.png","e6a19b95c6180e7feaf7ff0e04456380"],["/2019/05/04/next-js/index.html","fd061fbe105d51c0fdfa0c0d6ea9067c"],["/2019/05/04/next-js/next.png","4f30173effb21b5c989f7c791072a48b"],["/2019/05/20/git工作命令/index.html","673dbe2623d1ae4db1bf22270c3bf2fc"],["/2019/06/28/前端架构师知识分享/index.html","109e58677120bcc22731ec4a44f74591"],["/2019/06/28/前端架构师知识分享/leader.png","5ea7faee73e544007c6df2aae8724fc0"],["/2019/08/12/21个让React 开发更高效更有趣的工具/index.html","e4456eef74646175ffbbe603ba6e121a"],["/about/index.html","ae052f0fb75a848593aa06074f062491"],["/archives/2019/04/index.html","57324ea994c998464301d1839fa46140"],["/archives/2019/04/page/2/index.html","a214ed72e772e611c1139e3bd68ac8a3"],["/archives/2019/05/index.html","1e4facf4adb80ac2d5146546b320e79b"],["/archives/2019/06/index.html","29fe1b96234fe303c439fe2b2f5bd7b9"],["/archives/2019/08/index.html","67ded9e3e024565a572d80fed458beb2"],["/archives/2019/index.html","4a4f12483f334220103aa91ede5a54ee"],["/archives/2019/page/2/index.html","2a4bceb2e3ac0382c1b3ab603e7caf84"],["/archives/2019/page/3/index.html","1e929031d4f40e77f1201cd28db08926"],["/archives/index.html","ad6566d375b5d6f719126cbe7ac7d9e3"],["/archives/page/2/index.html","2a3438270dade9d14d2470dbbd371384"],["/archives/page/3/index.html","be8ffdd08f3226008d605a7b7fc35be4"],["/bundle.js","1ea6cd63198468df5478d926c17eb25e"],["/css/main.css","ac3492119525753daf9cbfb7332adcbb"],["/google27ad80c63e8d3543.html","f6c52f32d0b47a8a3c1c44cdffb721dc"],["/images/1.jpg","11bb0f8216279bacec35279541febbc7"],["/images/2.jpg","b7f4c278a033641f5edc32024ba315fa"],["/images/5.jpg","af8f964e0424218f5bd9dc59808de9ce"],["/images/6.jpg","1eb365ca0e3d07cdc2fb091432efa8b2"],["/images/7.png","46b1c698dcb0242f1a76d3e0d3156e69"],["/images/9.jpg","5c83a9e6862414a13eef1b367e0e69f6"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","d7339fc1b994be6b0064ea4e5a7578f4"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/man.jpg","e70542e335b5c6491dbfeb2083abf844"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","906e9454c3cac63ac1a5b14ad8b14a4e"],["/js/161dba201c0a6499.png","a45b09258ac6eda671a2d1ce353bfad0"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/my_avatar.png","fd5a7cabc8a6685fc3051a05fa892120"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","5786748aa3710f31829398e20f1dd899"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","bf695c7e693c4aec958e465bbab80687"],["/page/3/index.html","13dd1720c2d4e9efcfc3a9184e519440"],["/style.css","52e0947497241863100f97ca49093350"],["/sw-register.js","b68b987b16ec31ba086949416fed5825"],["/tags/ES6/index.html","1213e8b1eee5a89f1c87c78166e63e56"],["/tags/HR/index.html","17f0c74303f1cb5e59f85cad2d7431b3"],["/tags/PM2/index.html","a6ca602f47121b14596f05a02fa2bef8"],["/tags/git/index.html","23643f885bcee8cebf47954c81ddc8fd"],["/tags/mac/index.html","996c85edc45293527429456d07c69e6a"],["/tags/next-js/index.html","5b2bf33d0c3be0070f0d89805574da1e"],["/tags/react/index.html","bfb7bb4477396124d859702f67b516f6"],["/tags/redis/index.html","fb4a778b127da21775ea70d5bdb019cf"],["/tags/sigma/index.html","3292fa2943a682a2ddff4440abeb438f"],["/tags/typescript/index.html","df26383296c0a22a3711c32d28218809"],["/tags/umi/index.html","9a316338cfd2b09f281ea2bf52a6aac4"],["/tags/webpack/index.html","b0b3932d1d57184e69fec4785b0cca6c"],["/tags/前端架构/index.html","77309cdd1ac85d615a6f0144848a7d07"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
