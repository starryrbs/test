/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bb12b5918cf44b03e1f0bbfeec01d4ba"
  },
  {
    "url": "about/index.html",
    "revision": "c1ff5572a589c5e0a37f3d3c8f74dd07"
  },
  {
    "url": "assets/css/0.styles.3248a01a.css",
    "revision": "ac4503a5dc375e0465a06dd5fcd91463"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.70f7729f.js",
    "revision": "9d2962c11abf1f63b78433a01f5f2dc5"
  },
  {
    "url": "assets/js/100.af889329.js",
    "revision": "953e9b5a2a004acb487361cb53e19314"
  },
  {
    "url": "assets/js/101.83a5a892.js",
    "revision": "1827c53906ca9ee3be59d7a5b75e188f"
  },
  {
    "url": "assets/js/102.a0752614.js",
    "revision": "4f730dd2324d84a39ab9a9a05f747dec"
  },
  {
    "url": "assets/js/103.a7b15277.js",
    "revision": "4f70b9ea5cb6dc26ea5a69043517fc2c"
  },
  {
    "url": "assets/js/104.e18c7eb8.js",
    "revision": "f2b4532a8ac259239eb55fb694724101"
  },
  {
    "url": "assets/js/105.c88b7cbc.js",
    "revision": "1f99ab9c2188e3348efe1784d99c1733"
  },
  {
    "url": "assets/js/106.2201959b.js",
    "revision": "46f6833db0a95a091e8e317a6fe872c2"
  },
  {
    "url": "assets/js/107.72150beb.js",
    "revision": "16699f85e089e71ed121d0971229785e"
  },
  {
    "url": "assets/js/108.71a384b2.js",
    "revision": "586b1a14b7e9cc94402cdbc00865b56b"
  },
  {
    "url": "assets/js/109.cc04fd96.js",
    "revision": "ea7b3575cb1e3dd69ec4d860da13b13d"
  },
  {
    "url": "assets/js/11.1136a5cc.js",
    "revision": "0458dc5d6f91eebcab799acffc85b75a"
  },
  {
    "url": "assets/js/110.86890132.js",
    "revision": "a5ec49cebcc3369267d64e0370d52b26"
  },
  {
    "url": "assets/js/111.969756be.js",
    "revision": "08de9d1fc269683ee00b764e914e6aa4"
  },
  {
    "url": "assets/js/112.179797c1.js",
    "revision": "e182cb5bd675a107fc49c0b75b833d70"
  },
  {
    "url": "assets/js/113.fa493852.js",
    "revision": "aa7edc65ce806ee825f4667785437bba"
  },
  {
    "url": "assets/js/114.15a344ba.js",
    "revision": "0df3312dff60645335ac80a11de062ec"
  },
  {
    "url": "assets/js/115.fe5819c3.js",
    "revision": "8202638f079a3e95f54a5e0d34eadad3"
  },
  {
    "url": "assets/js/116.a577627d.js",
    "revision": "5691819d168a85de89686cab56d2ffca"
  },
  {
    "url": "assets/js/117.238237fa.js",
    "revision": "c2b8d9e6744430378939a29140ac920f"
  },
  {
    "url": "assets/js/118.49732251.js",
    "revision": "52b8b4994f6265f8c7942144192bc589"
  },
  {
    "url": "assets/js/119.054f6232.js",
    "revision": "95fc9ec45e6e052f99925d6d142d858f"
  },
  {
    "url": "assets/js/12.f3e3f81b.js",
    "revision": "bdc28a7f6f8cec93b4b48190dbb1baae"
  },
  {
    "url": "assets/js/120.a591485b.js",
    "revision": "e24f94267c51eb23fc4cef4220342ef4"
  },
  {
    "url": "assets/js/121.e8d4cd9d.js",
    "revision": "65ed87bc32b726f64b5ab90d1bb4290b"
  },
  {
    "url": "assets/js/122.c458fe11.js",
    "revision": "9bea39bf836f76101154af0f007f088f"
  },
  {
    "url": "assets/js/123.c8fd3354.js",
    "revision": "ecbd10fe5958f3f7e31dcbf41b489c9d"
  },
  {
    "url": "assets/js/124.199a1d58.js",
    "revision": "ce34f176a30c4dea2c829b761ef8d0d9"
  },
  {
    "url": "assets/js/125.eae6875a.js",
    "revision": "5c451c9a2cfd213101d82870edbae8e7"
  },
  {
    "url": "assets/js/126.b05cfffe.js",
    "revision": "d33dec6357cf2ddcd3120d491471905e"
  },
  {
    "url": "assets/js/127.1f4f7ea0.js",
    "revision": "7f9c9cdbb49cb263f860ed709cace548"
  },
  {
    "url": "assets/js/128.5636bb6a.js",
    "revision": "7aeeeafc6d6458c7365f0321d99767d5"
  },
  {
    "url": "assets/js/129.d0b5d229.js",
    "revision": "fc57378db97944dba62097e103e403bc"
  },
  {
    "url": "assets/js/13.85ed63ca.js",
    "revision": "fd7ef7c980386b4c9a4bbd43b14148b6"
  },
  {
    "url": "assets/js/130.8721e796.js",
    "revision": "bba7586c357992e03c4aa3c7e687df2a"
  },
  {
    "url": "assets/js/131.13c91c8f.js",
    "revision": "f6b5289bac5e35a4dbfc66a6d708dd61"
  },
  {
    "url": "assets/js/132.940dd320.js",
    "revision": "5530353aee32fe74fe5c88fefe008654"
  },
  {
    "url": "assets/js/133.4d431355.js",
    "revision": "5ed1f0b22986ccca44ba3dd31d7026b3"
  },
  {
    "url": "assets/js/134.f6152320.js",
    "revision": "ef09f7af6ab09389a9173d0a5bc16680"
  },
  {
    "url": "assets/js/135.01fe1960.js",
    "revision": "d57195c27dd2e3930d69661088b6ef0a"
  },
  {
    "url": "assets/js/136.a9c2607e.js",
    "revision": "2dbe3641e4254952567ef7d9263d3af2"
  },
  {
    "url": "assets/js/137.4e158d0c.js",
    "revision": "2c9f26bb99ddb3e6da38c7afe641f27a"
  },
  {
    "url": "assets/js/138.597af231.js",
    "revision": "eed51cc33e542f085be8389dc7fa546a"
  },
  {
    "url": "assets/js/139.f62f6ae0.js",
    "revision": "ad43800153497711e81c12e08049071f"
  },
  {
    "url": "assets/js/14.3ca8c3fb.js",
    "revision": "7baca27ab989e7b075ef9e42c37533c8"
  },
  {
    "url": "assets/js/140.c43b02e6.js",
    "revision": "6787117120dc0dd53aa8a26f28ae0a14"
  },
  {
    "url": "assets/js/141.8ffbf5ad.js",
    "revision": "4617b1351f1b140f397bbe5e9ed82cce"
  },
  {
    "url": "assets/js/142.d97eb659.js",
    "revision": "05091cf50d7d857f26d953fbfe0b0c20"
  },
  {
    "url": "assets/js/143.e16224af.js",
    "revision": "6c0bcb69088f8e32646c9d40bac42d16"
  },
  {
    "url": "assets/js/144.b6b835d8.js",
    "revision": "3267bbecbc0294f1300f1b9d11a5bd61"
  },
  {
    "url": "assets/js/145.78905eb6.js",
    "revision": "8d41668de17cb224a202005e2e4f2bb5"
  },
  {
    "url": "assets/js/146.fee016c4.js",
    "revision": "108b680060e2a0b929c83f0f86b98ccb"
  },
  {
    "url": "assets/js/147.186611b7.js",
    "revision": "65adff7ebc5c39311f8a740b9ac39d69"
  },
  {
    "url": "assets/js/148.98e31fd1.js",
    "revision": "e2296b05fe2573f6d9f051b3c4b24a4a"
  },
  {
    "url": "assets/js/149.c4e350d5.js",
    "revision": "83b6e72a6f6f726214a8051087149cdd"
  },
  {
    "url": "assets/js/15.49a93c49.js",
    "revision": "947befd2825d73667c899dfb4f2b62a2"
  },
  {
    "url": "assets/js/150.bad38bcf.js",
    "revision": "97f56cc6911a1f446e4509175ba4fbf7"
  },
  {
    "url": "assets/js/16.da334be0.js",
    "revision": "70d3a93030c210a0b4260d187c4b2d39"
  },
  {
    "url": "assets/js/17.b5889bfa.js",
    "revision": "9e3899b9cca86df3df48a69afaf1c371"
  },
  {
    "url": "assets/js/18.80f5e719.js",
    "revision": "9c6ff4be25fe3bcdb2283e53c811adad"
  },
  {
    "url": "assets/js/19.8fbe7cbb.js",
    "revision": "8036c781bdb6659e5185ca9dc6c9ff02"
  },
  {
    "url": "assets/js/2.87c12698.js",
    "revision": "791c2379dbc682cc0dd4dd177179707b"
  },
  {
    "url": "assets/js/20.d0f20c63.js",
    "revision": "8df29626a4b427ff4e740833df16494f"
  },
  {
    "url": "assets/js/21.2eae878c.js",
    "revision": "0a4636fe8ff56b56cdb2117b6c5d29c3"
  },
  {
    "url": "assets/js/22.ce379d43.js",
    "revision": "ad4dad5833c5f0afab36e75b7430ef25"
  },
  {
    "url": "assets/js/23.3911505a.js",
    "revision": "1a5d3e0d81b1dfe6e03c34ade862dde2"
  },
  {
    "url": "assets/js/24.20373ba7.js",
    "revision": "58bd718fa67821689b3c81dac38c4c0b"
  },
  {
    "url": "assets/js/25.cf7c5dc7.js",
    "revision": "5bdffe14ceccff8ffe28390e962c8288"
  },
  {
    "url": "assets/js/26.9b3e846f.js",
    "revision": "bd990062efe7588cb656050f96889d5b"
  },
  {
    "url": "assets/js/27.c2737516.js",
    "revision": "4685123044992740a533871ac256b518"
  },
  {
    "url": "assets/js/28.fd35783b.js",
    "revision": "8b1dfdaa77f14a5e9db9af7d5df5cda4"
  },
  {
    "url": "assets/js/29.bc89d792.js",
    "revision": "1f190b4be2724160bfdf6bc2f59e43ff"
  },
  {
    "url": "assets/js/3.26717ae3.js",
    "revision": "ab903ea298622e97369732f7c93a82d7"
  },
  {
    "url": "assets/js/30.aa2d58a6.js",
    "revision": "e1999a11bac46e79158f85f9786b86e9"
  },
  {
    "url": "assets/js/31.63dff282.js",
    "revision": "f326bba83125af5000f55d280a8fed75"
  },
  {
    "url": "assets/js/32.b688f677.js",
    "revision": "5e19f04d565f2e4ec4cf59238ef18705"
  },
  {
    "url": "assets/js/33.044bbe59.js",
    "revision": "186fb0458148fa574dbca0be664f3494"
  },
  {
    "url": "assets/js/34.6b4a9ad8.js",
    "revision": "cd5ccf87cf166cc204170a6f3843d481"
  },
  {
    "url": "assets/js/35.f6b42324.js",
    "revision": "08fb4c7bc7029b94145b31d7157c3552"
  },
  {
    "url": "assets/js/36.8943db31.js",
    "revision": "f7c2b327b1a60bcd0bcb1d157af0fbeb"
  },
  {
    "url": "assets/js/37.baf3f613.js",
    "revision": "d35b1a3b2068d7fa14b77ce1e2a3b92f"
  },
  {
    "url": "assets/js/38.22d229d2.js",
    "revision": "b40f3d45254e49a667edf501c4266935"
  },
  {
    "url": "assets/js/39.171ce5f3.js",
    "revision": "2204e0140fd5eadba63987ed941160f8"
  },
  {
    "url": "assets/js/4.d62f2c4b.js",
    "revision": "161b0048840bdfc7efb97bf9abb767df"
  },
  {
    "url": "assets/js/40.719c3152.js",
    "revision": "4615c8eb5fc37fc502889116611e16f2"
  },
  {
    "url": "assets/js/41.39bee66f.js",
    "revision": "adef49df35e485053764d8a598e6ee96"
  },
  {
    "url": "assets/js/42.6eac6222.js",
    "revision": "02b783e8d8e83d8d4cb0727f679769f3"
  },
  {
    "url": "assets/js/43.6ba6f3bb.js",
    "revision": "4788be1a5df951dc517a2edfb2dd3950"
  },
  {
    "url": "assets/js/44.64bfb1b7.js",
    "revision": "f59a8086da44bcced9d3e158e8382d84"
  },
  {
    "url": "assets/js/45.5abb0166.js",
    "revision": "f2d38f72470477275e4b27bd57ffc429"
  },
  {
    "url": "assets/js/46.81c85d7e.js",
    "revision": "831f34f2101e2569a19561f33965362a"
  },
  {
    "url": "assets/js/47.120568d0.js",
    "revision": "4eda21248125d029385b593745cb3a37"
  },
  {
    "url": "assets/js/48.f0851d59.js",
    "revision": "32a79a12efe4f35ae87d127b8bf75c94"
  },
  {
    "url": "assets/js/49.c8ae2322.js",
    "revision": "055f92f39422c9e756172bf3787bbf85"
  },
  {
    "url": "assets/js/5.37b36554.js",
    "revision": "930c7e665c56a7f228854a474ddc23a6"
  },
  {
    "url": "assets/js/50.05149852.js",
    "revision": "f5a1b3588d214b411ddf60044eeca48a"
  },
  {
    "url": "assets/js/51.f31e6a63.js",
    "revision": "8108aad1a8ca68728ea6e3e350cb2173"
  },
  {
    "url": "assets/js/52.bae8c9b5.js",
    "revision": "d8493e54a5a664310a4d752fcf8d13b1"
  },
  {
    "url": "assets/js/53.f8ab914e.js",
    "revision": "e514c93b445f174d1a1849181476a498"
  },
  {
    "url": "assets/js/54.2c0b9dbd.js",
    "revision": "cbd0d06e52fb959acd2507fa4220fb97"
  },
  {
    "url": "assets/js/55.bd9abb96.js",
    "revision": "fa8db5614a4320d909854c58322d3ce2"
  },
  {
    "url": "assets/js/56.faf59d94.js",
    "revision": "c512dc3a7177bae4ac8344a50f4f96c8"
  },
  {
    "url": "assets/js/57.bd14baae.js",
    "revision": "fee2ea22973b450b9805c0aa4edd478b"
  },
  {
    "url": "assets/js/58.80ea8cb4.js",
    "revision": "b040136f7cd138c9af4559f2b5fb14b9"
  },
  {
    "url": "assets/js/59.03a65728.js",
    "revision": "3e341954a446b451b4c86530a39a64c7"
  },
  {
    "url": "assets/js/6.85125b4d.js",
    "revision": "d230a174e194538acf19d92911d334b3"
  },
  {
    "url": "assets/js/60.23d657bd.js",
    "revision": "536e8f99d0a7593377e89a4eb01635ba"
  },
  {
    "url": "assets/js/61.27fe0c06.js",
    "revision": "23311416263c7bd8214a327ddc13928e"
  },
  {
    "url": "assets/js/62.a876c903.js",
    "revision": "49c6f6ab9d1d6d081a1349bf7a72e164"
  },
  {
    "url": "assets/js/63.91517c4f.js",
    "revision": "6401085409ccff222959a83273e1ac0f"
  },
  {
    "url": "assets/js/64.0f1765fe.js",
    "revision": "3540212c9d859962eb8e22287803fc24"
  },
  {
    "url": "assets/js/65.82ab61bf.js",
    "revision": "2a93d5af6d61c381d6aacc15da6c23fc"
  },
  {
    "url": "assets/js/66.25f048a4.js",
    "revision": "a52cf0dd09d2e7a94d46c9ce3815a89b"
  },
  {
    "url": "assets/js/67.88e95134.js",
    "revision": "2290b079a7c048b5b90e3d7fef6df962"
  },
  {
    "url": "assets/js/68.a55ad5f0.js",
    "revision": "14e8a9cec018f9e13882a4c4bbcacf39"
  },
  {
    "url": "assets/js/69.d0fab449.js",
    "revision": "98fc36883c6d62302ae65c8b29df29b1"
  },
  {
    "url": "assets/js/7.5c6c9618.js",
    "revision": "7c50956e07275fba5476a615359f6deb"
  },
  {
    "url": "assets/js/70.1bdb582b.js",
    "revision": "a516c113c3f592631dc457fb67b1a920"
  },
  {
    "url": "assets/js/71.47db125d.js",
    "revision": "8cc1ddbc5110e298dc03f94795760f7d"
  },
  {
    "url": "assets/js/72.516f11d7.js",
    "revision": "a40f86d1d5e26688548fa25e7f1a5be4"
  },
  {
    "url": "assets/js/73.9537c575.js",
    "revision": "284b9b6b2f6e8dc5084eeac3ea8887cf"
  },
  {
    "url": "assets/js/74.5b372716.js",
    "revision": "2f2cb4b9d4ea451ac6020668209f9937"
  },
  {
    "url": "assets/js/75.ca3adff3.js",
    "revision": "55e15a198e9427ae8addf0974243244a"
  },
  {
    "url": "assets/js/76.5f859510.js",
    "revision": "9014c03ac628bec709ec1331cb48d64e"
  },
  {
    "url": "assets/js/77.e568c9b4.js",
    "revision": "cc18553c310daa13e7ade1ff92d30f77"
  },
  {
    "url": "assets/js/78.05c51e95.js",
    "revision": "40ae753337fd88de4695853d5a108ed8"
  },
  {
    "url": "assets/js/79.2173b3d0.js",
    "revision": "156badbe92316cdd5e04ed5ee998f82a"
  },
  {
    "url": "assets/js/8.34e4aa45.js",
    "revision": "c92a899c58832659d27c37008b9dca09"
  },
  {
    "url": "assets/js/80.e15bf454.js",
    "revision": "a2f5ca19b29689c1c2e6420d6c864eeb"
  },
  {
    "url": "assets/js/81.d98c751d.js",
    "revision": "bd77320e32410fdeb1aa043d6219351f"
  },
  {
    "url": "assets/js/82.213f4967.js",
    "revision": "121e3e9f6045b365b1ff5ff8ecb48c09"
  },
  {
    "url": "assets/js/83.c5cba092.js",
    "revision": "34b63fe01dd36fefebf845de15836a82"
  },
  {
    "url": "assets/js/84.0aed6e13.js",
    "revision": "8e71d217b183dec6d26fbf13b242b384"
  },
  {
    "url": "assets/js/85.bedb151d.js",
    "revision": "37486b3ed1abf9de9a7324126fdeee13"
  },
  {
    "url": "assets/js/86.d345a0d3.js",
    "revision": "abe450add61ead2664f6e369d398d55e"
  },
  {
    "url": "assets/js/87.107392b7.js",
    "revision": "79ca583ee987af884020bacd916fe917"
  },
  {
    "url": "assets/js/88.de31a6fc.js",
    "revision": "3731d62371a5eb30109a2d4a0e620575"
  },
  {
    "url": "assets/js/89.21717c36.js",
    "revision": "bfb7b7bacf4ac6ad587f7d098b8cdbb8"
  },
  {
    "url": "assets/js/9.b11e0e52.js",
    "revision": "a602bb522a29b7b3deba66e2b302b4a4"
  },
  {
    "url": "assets/js/90.2a222288.js",
    "revision": "225cc0c5c0ef0a8a57ed7ebe67b0101e"
  },
  {
    "url": "assets/js/91.15f3c807.js",
    "revision": "d1fc93810694c6068ac74d98b23b101c"
  },
  {
    "url": "assets/js/92.40dd4695.js",
    "revision": "a9880c151acfb52d68ed2a917e204377"
  },
  {
    "url": "assets/js/93.78fc9091.js",
    "revision": "02b16f1e8056354c506f80aaffedce5e"
  },
  {
    "url": "assets/js/94.5257bdf1.js",
    "revision": "1a40117c42de366165ab109eb3dfb4bc"
  },
  {
    "url": "assets/js/95.2d325999.js",
    "revision": "2c6c75dac218ce4c0dc979530df28092"
  },
  {
    "url": "assets/js/96.65c9957b.js",
    "revision": "14e5ce4b703d1da893d1daa81a75b24b"
  },
  {
    "url": "assets/js/97.c5ad66f1.js",
    "revision": "82f89b8d75b1405f74ce21d4703d16ab"
  },
  {
    "url": "assets/js/98.96c9cea7.js",
    "revision": "4aaa55f3f9873c2d265248999b5a1671"
  },
  {
    "url": "assets/js/99.09b4646d.js",
    "revision": "33030ecf9e233d02e777a9c9797717ea"
  },
  {
    "url": "assets/js/app.9b55f9fd.js",
    "revision": "b9509c12c37793857b9ccf40bd557d33"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "2047fb060be1b57db62328960598a85a"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "en/index.html",
    "revision": "ea5747b7681b24ab1ac18b0d2efd0e80"
  },
  {
    "url": "friends/index.html",
    "revision": "8ff0db6a4869cb89902db318bdc1a531"
  },
  {
    "url": "guide/index.html",
    "revision": "dc4c730d19ef0e56710c9905c752fe98"
  },
  {
    "url": "index.html",
    "revision": "533863e912a68043c366e2a48697ea87"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "440b9c4e89691cee4936ecbfe4e71451"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "b1c977ad9a2d50db23d042e128923980"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "27e648bf1c86ae1b9193e0f5e7a9d1c9"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "99815193848b9526424950688fe02b9f"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "64e687330d601fd1ac2fd6e1bea04ce8"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "54c318a4de43f5c255048bea7cbbdc62"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "bd3f64d2f40d60ffede0e600aa8da700"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "c0036e6d51d9940f233eb5a6670d7a60"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "56e2263da996c2ec639f4f036ce0d4c3"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "effee74e519662ac8e278dd5b919b7e3"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "735f90af2d92a6958bf275dfb47b259e"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "9e02ca7c3139f60faac8055ea04e22bb"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "7f31fb8b3fdddd154501221a66453579"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "bd67059c571e740ef931e6cc34b3f436"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "0a3fde90cedeae43dfb96d77f711cf92"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "e87d1a3ed76e354273aa7c2d72e8c99e"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "f6079a039413308528a7bcecb456de55"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "cf242642a885722ace5f0baefe4c5e68"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "95ef07397999c152ea534deaf05b2f42"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "04d7494014018420ed081d036febf41b"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "34feb333f1a9477d910a584a7fabc824"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "05bdc6249d6bd2cd2c5f1b4c042907a8"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "e61b3a3dbf783efa5214e8892393017c"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "92280369a3fe218d9a7f55f26e8a7985"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "67aa9e052130c216334157c402a4fc91"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "1355d58aa530e85a04a08ca1f1a9d383"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "436729d083094085bfc5af1153e13c64"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "ab7f311ff3a32d24522e059eb6bd5622"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "a7bc8c205b4bc2e2183a6a864da92175"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "769a2fe24833d6e275c9606cb710e748"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "4bf2c4dbcc3b0d275bf8359f3ff34a16"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "417c2db0160dbcb5b35a4be2df0bbe16"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "695d09579ecf1223c65cc6ef31ae1cb2"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "c3e2cd7558d66761991bd042ce1b2d5d"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "516b3efb93c5a52c15274edbf9c63b64"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "0cb460836f584723d64d532c2b02e03b"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "e01f24e4c43db98c39f7d39989469d39"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "7958c06939d3e358a462b906cc6ac663"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "e4acdf6c3cc3e1d3462723abac15cd16"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "f757e9ccfec1b953e1e73851c0feb0e9"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "ab7b2a141929aedc5eb80566b1cc843d"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "d425ca2279720bf616199ebed8e93caa"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "edd2b2da2a9cb3469e717c278821024a"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "7e9f1ec4dbd2126e2e3577ea120493dc"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "5200e1324d61a740799f26c2f8b7f529"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "6fc00fcb9b5bd7c561ad061aeee7dad6"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "830ed1c429ca4183fafcf0e10aa6bf9c"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "0475fbb8b9ef620d2311cf4427e6adf5"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "71a6ac6c6c0a676579b1001796d919d9"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "bfc07df4f932fcb9b940430bf2fdb1ab"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "5b6a81b7425f93a81f2e865403941494"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "0cd332dad328d8339579d18007604d3e"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "032854a200ba8abbd72612d0ff1676f2"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "cea8f3631d006a6db5b8979a8f5492bc"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "32d8c4225a042833b6326c9288f36693"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "ac5ddfeb20d8c39dffddfe1de67d31f1"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "c3b95000b8e41194acc294a95c564e07"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "9e2384d9790cb9580864a58f96eb34d6"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "10a5cc65d059378534aa7a5e24324d0f"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "b7840d3c901a2c46fc6bda11e1bc5e45"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "51b27408965dd40c885817d5b3bf2c97"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "b7c41eb44562ed94342f210106574370"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "978b2a0963e95c274a45ab1298cc0e68"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "ec12df5b1671037ae7a0fd4eab892186"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "b24c306e17b6dda47383d2134bdfad1a"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "71663aebc31846cabdc7d33fb418bd56"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "78f5d8892b98774154a992b691a683a2"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "4e8533dae4a0d7d8b504225e42901eaf"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "8f1f36cf0319be9793869de009a25526"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "6aa9887abc5185f62b5e1a4013ebdf50"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "06dc2a674d679ac0747563516aed94d4"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "91866d08020600adb486513df6cc0488"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "aab3e090bcbc5a53b409463bcdff5050"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "44f0c0a0cc3cbaf9634112a227f9b018"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "4075c65d1bc0ca9004b4257a7cb6e41f"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "6885d4262fba261487f329d54db30c49"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "9af401e4a3d2aa5a1f6ecf276040fc33"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "e07167e270d4a7f598fe519a7fd9b28a"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "e4333ed2c9738d09ab2cfe7206410015"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "d292b5cfcc69fc9647955fbf8e16b5cf"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "308f7c1bb42e21a77e0e4be5030fe46b"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "ac2e15a4fb2c16268c691e82f0acb9fa"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "a8b09fa462cff759c19a9c58f7ff56f1"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "dcd8ef565de586bb09540bb8cd47b910"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "17ce0477272e9c90bef34384221d7e9a"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "e098e77f3462cd3259bcf97fc5401342"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "d01ca85dfa59ac7760b82f7ca170fe03"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "cff62155af026506d122071f7917cced"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "b12e32a0fbf53744639df0fc5b5b7dbb"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "4aaf46cd9ac252f16742dbb2e5e9779c"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "9de5131529ee689e674975e3f0b4a39a"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "fc12c0b4836b331888f7aa6771c970c5"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "5854e37b9941353998c55cb4c46fa992"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "50f8e0cdbdf195440491a1ca2471bbae"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "a6bdcef332d79d15f68e41f76e38e0bc"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "cfed16b1c4e385aff9a6f4a008624881"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "1da0f9ee3c7d7da6d547762d5617e23d"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "c5149eb0c130711735b1dd935b590f58"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "7f65d24cbef7e036da1fa38a66c60131"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "aee9c5f1c488aa09a7e56cc8bc3a63f8"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "e20e9a9782dcd2276cf64a18ecf3673a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "fbdc5f6829d17eee7e292ddf466e8cb0"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "77acde54f7b8c80b148408dd74705b69"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "2f4b3dd5b826c8751307c210e66c693a"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "7ae5bde438ca7fba3863999b1b7c9bcb"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "371356e98755cff1db2e8857963b537f"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "98efc2aa5c9d00d0d43ecdbbd7443547"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "37bfb5e811536d2cd92491032adbbd69"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "fb1eebad28e5af2c517cf088dee6a232"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "e543eb6803e476ff190351a24a205ef7"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "403910a36bf7588e9fdc90bbd5f98250"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "175bfe4c2079c5d48902d86c6722c242"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "0f691c13ea725a1e5731dea0a7a332ab"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "f4347f550c685685d73145d279251e62"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "c8ac9cdeca7be3139f16bdfb374e7679"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "859441c99239261f23e79d5ad0da0bb6"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "edd6876238b4d113011c074002f9b3b0"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "7b064926c328b5baf5edb2a828686bf5"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "ff729369dd88bbf8663555f14256b944"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "5be9de2d3a2877e45f563e0a8c13b97c"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "1182a5c6d38fcf8e445ebbf26450b972"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "f132f8561393509dc999398953dd72e8"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "3cc0708d58c99a23194cd0b08629275b"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "c21a94561e351bcca0f2c41a2a529fb9"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "dc8cee28a9b65009e60bbf01a5d2a111"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "cbd8d23e913ca7bf5fd7e1f42451ab84"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "abad75ce92c161d5b5a5b05bf70a6a82"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "e39229b6227e98a6c86171a49e69eea9"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "1998699b105083a38fceefe45438828c"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "52baddd5a93b3091baef1afcd45d473e"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "eb48ad7baa8e49e749b82e2f6bec4e5f"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "3a74a823ef0502290e869f8216f521fb"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "bf88a0f3056cdbdbccf96fa4fe6673dd"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "441e0cec71080089bc271e1296bc67cd"
  },
  {
    "url": "passages/2019-08-31-chain-of-responsibility-patterns/index.html",
    "revision": "895ba1411084847e2f2f59d9c1c8ceb1"
  },
  {
    "url": "passages/2019-08-31-design-patterns/index.html",
    "revision": "2aba2879975bb4614e130cd38b11d164"
  },
  {
    "url": "passages/2019-08-31-state-patterns/index.html",
    "revision": "eb30c2096864d80bccd675aff17615a5"
  },
  {
    "url": "together/index.html",
    "revision": "e80c0c722edec5bc3f1db6ba52bbb74d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
