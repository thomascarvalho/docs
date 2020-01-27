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
    "url": "0xcert-framework.svg",
    "revision": "82d69102af8178f89d620d53a8dd46e1"
  },
  {
    "url": "0xcert-logo.svg",
    "revision": "780242d9a166ea4703aa89253b275583"
  },
  {
    "url": "404.html",
    "revision": "90245379e334a0191f8139f50a1d5c05"
  },
  {
    "url": "api-icon.svg",
    "revision": "df67661118113e7c8d05ffbb9cd882e1"
  },
  {
    "url": "api/api/certification.html",
    "revision": "0107f50c67fd5ae5aaffe318965b47a4"
  },
  {
    "url": "api/api/client.html",
    "revision": "71c3e438fba3311fee60dc44b97fca3b"
  },
  {
    "url": "api/api/rest.html",
    "revision": "67ff111123688ca7f966457aa8622660"
  },
  {
    "url": "api/guides/additional-scenarios.html",
    "revision": "c975473b7e6b42477e55437f484e15b9"
  },
  {
    "url": "api/guides/asset-ledger-deployment.html",
    "revision": "1ecd955c7247695be7897b7d4fd2c58a"
  },
  {
    "url": "api/guides/atomic-operations.html",
    "revision": "3aed2482bb669e436e485b477491e783"
  },
  {
    "url": "api/guides/certification.html",
    "revision": "7e87ecd5549ae9fee704c3037b94a99b"
  },
  {
    "url": "api/guides/dashboard.html",
    "revision": "3f83d34798917c47d75ca6174044b212"
  },
  {
    "url": "api/guides/destroy-asset.html",
    "revision": "87661a535c20d3b003cdcac04d16065e"
  },
  {
    "url": "api/guides/fungible-values.html",
    "revision": "e0521a7884a1a243c64ce7bed4fab2ea"
  },
  {
    "url": "api/guides/get-credits.html",
    "revision": "5f75a192b0094389f712cdd9d35a8268"
  },
  {
    "url": "api/guides/installation.html",
    "revision": "987562e245cddc1ca97d462ab1c8c50f"
  },
  {
    "url": "api/guides/issue-asset.html",
    "revision": "684f8345ab256458c500d4e4bc5b896d"
  },
  {
    "url": "api/guides/non-fungible-assets.html",
    "revision": "eeb97e04efca88740657ecf231273b13"
  },
  {
    "url": "api/guides/overview.html",
    "revision": "0bcd97fd1acb4e3d9eb92ed6c1d67df4"
  },
  {
    "url": "api/guides/providers.html",
    "revision": "3e6079fcaaac55d168e3d061796abacc"
  },
  {
    "url": "api/guides/set-asset-ledger-abilities.html",
    "revision": "b6621a295f54b8d001d1c354041b91df"
  },
  {
    "url": "api/guides/transfer-asset.html",
    "revision": "a389d0dd4dfb0186ebc7c96ce6fe8628"
  },
  {
    "url": "api/guides/transfer-value.html",
    "revision": "1ee523643287453a1ba62f5ba05afb39"
  },
  {
    "url": "api/guides/update-asset-imprint.html",
    "revision": "3ddd0af65e71353835d0bcfa32ee83ea"
  },
  {
    "url": "api/guides/use-cases.html",
    "revision": "35691022fdc848453434bbb5e08cf49a"
  },
  {
    "url": "api/index.html",
    "revision": "78a2c58a111d3826feced2f2225f73da"
  },
  {
    "url": "api/schemas/86-base-asset-schema.html",
    "revision": "26ef7ec40a4b788382305ec549d3e064"
  },
  {
    "url": "api/schemas/87-asset-evidence-schema.html",
    "revision": "c7cc73b7102b37809452ec2c7e9e4127"
  },
  {
    "url": "api/schemas/88-crypto-collectible-schema.html",
    "revision": "2473f306553d94d4a0feacdb56994619"
  },
  {
    "url": "api/schemas/xcert-schema.html",
    "revision": "ffb029d739d66d89a9e7541ceb44b420"
  },
  {
    "url": "assets/css/0.styles.8a7c0d11.css",
    "revision": "e2d64a7c9ba9ac36a207556f0d05bd8c"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/block_balance.76df9697.svg",
    "revision": "76df969771b008e4c91ecba8efc7c865"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/dashboard.16371e3e.svg",
    "revision": "16371e3ebd00b65330840c8ac581ed64"
  },
  {
    "url": "assets/img/deposit-options.5d6d1f98.png",
    "revision": "5d6d1f98ad1757646a2d42b0db7cdbbf"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/login.73da2ce5.svg",
    "revision": "73da2ce51e6a0a75f6e8b1f1823b07fc"
  },
  {
    "url": "assets/img/no-conflicting-proogs.a3213736.svg",
    "revision": "a32137363710f3ee693cbd9c072ae3a4"
  },
  {
    "url": "assets/img/notarized.e62f8d82.svg",
    "revision": "e62f8d828e030c82db405054e14d705f"
  },
  {
    "url": "assets/img/part-proved.c1187f5f.svg",
    "revision": "c1187f5f1951d21e14a64ee515e22217"
  },
  {
    "url": "assets/img/request-details.cabc2414.svg",
    "revision": "cabc24145895fe13025c229bddea9cca"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.7d8428f2.js",
    "revision": "413af57fa7017a87a87ed558372a4d21"
  },
  {
    "url": "assets/js/11.cf7d3a40.js",
    "revision": "47e15b24cd9555371c47ef79009ce673"
  },
  {
    "url": "assets/js/12.9f2e25b6.js",
    "revision": "7fa4eb9d40fbf8e3f45f29ff2945c8e3"
  },
  {
    "url": "assets/js/13.6ef66317.js",
    "revision": "f53a6654cdacdc21b41496c70c5993e2"
  },
  {
    "url": "assets/js/14.4c758c0f.js",
    "revision": "a127186791800edb2ad9c2cd86482dfa"
  },
  {
    "url": "assets/js/15.ff735b42.js",
    "revision": "3cf50b69e29d4d67ea25c7966f82a8a2"
  },
  {
    "url": "assets/js/16.f677359c.js",
    "revision": "960dcebc42c7db04334a1537d185e52e"
  },
  {
    "url": "assets/js/17.fa50c7b4.js",
    "revision": "ec49b6da11d3b7539b104814db43d7de"
  },
  {
    "url": "assets/js/18.f2663920.js",
    "revision": "7fb958282c30488ee44d1b86a55ff028"
  },
  {
    "url": "assets/js/19.b630fb61.js",
    "revision": "b207dd960ac57074d89e6f4eb1168479"
  },
  {
    "url": "assets/js/2.58b97c4e.js",
    "revision": "37d3fb5524cbf7b7ef95815f56a85efc"
  },
  {
    "url": "assets/js/20.fe6eb9a9.js",
    "revision": "460edb698761868d14a8e14005a3822c"
  },
  {
    "url": "assets/js/21.296783cd.js",
    "revision": "b7a943181b5f706429722f2dbb185610"
  },
  {
    "url": "assets/js/22.ef96e372.js",
    "revision": "9f3473992a3c83195e081a749dd06624"
  },
  {
    "url": "assets/js/23.77f583d2.js",
    "revision": "689d69b5c194f8267e516cd990f8957e"
  },
  {
    "url": "assets/js/24.301b75de.js",
    "revision": "73986ac233e70b350027659a4b321b90"
  },
  {
    "url": "assets/js/25.60f16a32.js",
    "revision": "61ac7c991d0fd18f3b2c22950c3bd001"
  },
  {
    "url": "assets/js/26.5048862b.js",
    "revision": "e8d77dbed2e19e08af802f45005a9e00"
  },
  {
    "url": "assets/js/27.0cf5530d.js",
    "revision": "134ecd9cb071ce2d312b441f105854f8"
  },
  {
    "url": "assets/js/28.c4f5906e.js",
    "revision": "a9db16a325a08cdcc038e63db4323852"
  },
  {
    "url": "assets/js/29.6c66ce6f.js",
    "revision": "1edb9c5dfc39c80d9e6ac75ecf50642c"
  },
  {
    "url": "assets/js/3.04fa18bc.js",
    "revision": "75837466c42e980a2ffba83671b863db"
  },
  {
    "url": "assets/js/30.36643d3d.js",
    "revision": "3dba655c213f745ceb22fac3b202ca82"
  },
  {
    "url": "assets/js/31.1bf5008f.js",
    "revision": "0fa411f1af414e885927fc95ddf93163"
  },
  {
    "url": "assets/js/32.dd653a2b.js",
    "revision": "b47e2c6222d5a45d00f73f39bfa1a0c6"
  },
  {
    "url": "assets/js/33.3f9b6acd.js",
    "revision": "9d6baf75bdfb2fb80d3af50c5cd80cc6"
  },
  {
    "url": "assets/js/34.7c7e0109.js",
    "revision": "18294edf6463d1e7b2dc47068d241cd0"
  },
  {
    "url": "assets/js/35.53b8b5c5.js",
    "revision": "c5db9198908084f86085c99ce8786bbc"
  },
  {
    "url": "assets/js/36.0a60067a.js",
    "revision": "ca9e1eb7a9e796945d6b9c3b85f8473c"
  },
  {
    "url": "assets/js/37.4c4afec4.js",
    "revision": "b70bf6bbca2e9f46b5b479691dc13db9"
  },
  {
    "url": "assets/js/38.dd8f510f.js",
    "revision": "158b57550606b1f0c880fec1477b99bf"
  },
  {
    "url": "assets/js/39.cc8af02b.js",
    "revision": "b62157d034d6411f13913e1459e59a58"
  },
  {
    "url": "assets/js/4.2371acce.js",
    "revision": "8c0ab6515e2e71e688135702f071064d"
  },
  {
    "url": "assets/js/40.8e3c2872.js",
    "revision": "afc91025149121d97035559bdcd25c34"
  },
  {
    "url": "assets/js/41.46958cfc.js",
    "revision": "d6fbe49805c81e90f62804dddef550c8"
  },
  {
    "url": "assets/js/42.e84a0bd5.js",
    "revision": "0eb40b93e2503a70806136f56b9aceb6"
  },
  {
    "url": "assets/js/43.1ebad992.js",
    "revision": "69425083254950f707defea622bd6972"
  },
  {
    "url": "assets/js/44.d0e8252b.js",
    "revision": "2cc4b05be8ecd1029c3fa73473df19f1"
  },
  {
    "url": "assets/js/45.df881daf.js",
    "revision": "8e36db1f4a17bfc5f001841431ade025"
  },
  {
    "url": "assets/js/46.c1f85aa1.js",
    "revision": "3963c0fce48b9e2e6443c6ac87767b46"
  },
  {
    "url": "assets/js/47.0644f8da.js",
    "revision": "ec7f9abe710c9bf2583579e0b6440c20"
  },
  {
    "url": "assets/js/48.5d412d07.js",
    "revision": "b94f95cb8bffd85405ecd708f8a544d7"
  },
  {
    "url": "assets/js/49.1cfc428b.js",
    "revision": "8763f89bda3c038594c1bc3dc6139eef"
  },
  {
    "url": "assets/js/5.288ef22c.js",
    "revision": "03bf761c2e610d3c28960f389b357647"
  },
  {
    "url": "assets/js/50.034197d2.js",
    "revision": "b65d995e661074af5c3a1f63ad5dd66b"
  },
  {
    "url": "assets/js/51.5c712a48.js",
    "revision": "2e0f7e49e30089759c9ce218b2844c19"
  },
  {
    "url": "assets/js/52.ae610528.js",
    "revision": "65cca33fb713563bd32e642d60b60c17"
  },
  {
    "url": "assets/js/53.53cbb7fe.js",
    "revision": "8c371ce24e432bddbffd321c0b3fe044"
  },
  {
    "url": "assets/js/54.068cd792.js",
    "revision": "c48d0f6808c83bbbc23a6d46879ca6d4"
  },
  {
    "url": "assets/js/55.0e982437.js",
    "revision": "f72166b9c25f5e78ca055beb9fe3ac97"
  },
  {
    "url": "assets/js/56.b96c191c.js",
    "revision": "6215d2ee6071446523cd2f9fa993aeaa"
  },
  {
    "url": "assets/js/57.e9f5229d.js",
    "revision": "92cc091ba2c19ba22441591d153a546f"
  },
  {
    "url": "assets/js/58.32e69da9.js",
    "revision": "73cfe6894e3b98b839cf23315716fa9c"
  },
  {
    "url": "assets/js/59.849b8121.js",
    "revision": "0af7993a75096f5695ed123c637c90fc"
  },
  {
    "url": "assets/js/6.60320752.js",
    "revision": "84c1952a5624379040abdd48ad8356bc"
  },
  {
    "url": "assets/js/60.bcba5f11.js",
    "revision": "9d1264098e869a3cf6b51bc3d11d14ea"
  },
  {
    "url": "assets/js/61.e3db6b0b.js",
    "revision": "95a0b322b91da4627c83ddd359da5d1e"
  },
  {
    "url": "assets/js/62.278586a2.js",
    "revision": "f0980d5ad5ddf184862b252739f0c513"
  },
  {
    "url": "assets/js/63.6afb3618.js",
    "revision": "8ee38a9b204912fe6993ef2caf04c0e4"
  },
  {
    "url": "assets/js/64.bb37cb8c.js",
    "revision": "2b5a5533a6f93128e1eae373c813a692"
  },
  {
    "url": "assets/js/65.5720c4fc.js",
    "revision": "8f15eb34fd2898bb59a74160ac9e892b"
  },
  {
    "url": "assets/js/66.353a1614.js",
    "revision": "dc8f23d0921a722cac31902c99cde8da"
  },
  {
    "url": "assets/js/67.2df8126d.js",
    "revision": "6c1d2594ce44ec2ac06dfd5f3bc68356"
  },
  {
    "url": "assets/js/68.b817c21b.js",
    "revision": "5f21a080a5163826450c94f95f6fdcf7"
  },
  {
    "url": "assets/js/69.2fee6c78.js",
    "revision": "3d9d649dbbb6f68fb79e4301d56d1da0"
  },
  {
    "url": "assets/js/7.6abbfced.js",
    "revision": "e107e613de9782e4674ce984df475e16"
  },
  {
    "url": "assets/js/70.ba66575a.js",
    "revision": "b6308b115400f49a5053ba4aed2e988c"
  },
  {
    "url": "assets/js/71.adc779d7.js",
    "revision": "569ad9bc1df2221e9abf85c6ea1636ba"
  },
  {
    "url": "assets/js/72.d7d59abe.js",
    "revision": "9600892a98e304a752c5448b2c131bb4"
  },
  {
    "url": "assets/js/73.ae0c99b8.js",
    "revision": "2e66283d927cd178f43cbf794810dd46"
  },
  {
    "url": "assets/js/74.db26d1bf.js",
    "revision": "964db400868d97c34a8ec6f19c872740"
  },
  {
    "url": "assets/js/75.b9081c33.js",
    "revision": "abdfe2d8d0cb12bd57103840f6a71682"
  },
  {
    "url": "assets/js/76.2ef8811a.js",
    "revision": "268913f68b8c88a2feafbf2c6dc54ee8"
  },
  {
    "url": "assets/js/77.3b77a324.js",
    "revision": "04ffcca4280798b5a9bfea59d4892c86"
  },
  {
    "url": "assets/js/8.726e030e.js",
    "revision": "298aab13f496541e1d35993eb355ec97"
  },
  {
    "url": "assets/js/9.1d43a597.js",
    "revision": "414238cfd8f56f6b787b62567e90d75d"
  },
  {
    "url": "assets/js/app.474446c0.js",
    "revision": "8d606684cf0294150afabbee3026e37a"
  },
  {
    "url": "background.svg",
    "revision": "5dfa0b3c79465dfa2a64827a18d32db0"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "0f4c921b82ff2c29b64e0efb5f8bb012"
  },
  {
    "url": "ethereum.png",
    "revision": "e87ef377b6298693af14e868e7bd9d54"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "framework-icon.svg",
    "revision": "238a8eda04c75c7ca680da3cfacbb6b8"
  },
  {
    "url": "framework/v1/api/core.html",
    "revision": "85afc13abbae5cc8ce2924da51b2a4e9"
  },
  {
    "url": "framework/v1/api/ethereum.html",
    "revision": "15810596025f9b3fb3d6396d75e46403"
  },
  {
    "url": "framework/v1/api/wanchain.html",
    "revision": "23b6d7606fbe85e4a3a39cb0c20e1383"
  },
  {
    "url": "framework/v1/guide/about-assets.html",
    "revision": "908fa44b942ff77a3abce1853ffbc885"
  },
  {
    "url": "framework/v1/guide/about-cryptocurrency.html",
    "revision": "ad7d6289d1ed271dee8746c9237e7598"
  },
  {
    "url": "framework/v1/guide/asset-management.html",
    "revision": "e0ebbdff99518cfd7680b3d2a37b2b5e"
  },
  {
    "url": "framework/v1/guide/atomic-orders.html",
    "revision": "0f27652376aebcb135e5045a7628b4ac"
  },
  {
    "url": "framework/v1/guide/certification.html",
    "revision": "94b87ded5c724bb08ab0b49c30ed73c0"
  },
  {
    "url": "framework/v1/guide/communication.html",
    "revision": "a61dd8ce4c0be6fd3ebd64db483398c3"
  },
  {
    "url": "framework/v1/guide/getting-started.html",
    "revision": "80cefe27345286880148d4df86380a0b"
  },
  {
    "url": "framework/v1/guide/introduction.html",
    "revision": "847fc80681cf84db7ce952427646638b"
  },
  {
    "url": "framework/v1/guide/threat-models.html",
    "revision": "65bdf492f9897ab4b95fb61fade1615a"
  },
  {
    "url": "framework/v1/guide/using-providers.html",
    "revision": "148f14344e5c11ca1297bff0f69926be"
  },
  {
    "url": "framework/v1/guide/value-management.html",
    "revision": "971d3e87ea00782eb2fbefb1b7e6bb32"
  },
  {
    "url": "framework/v1/index.html",
    "revision": "909071c2bac13ec2a5a6886a795d8186"
  },
  {
    "url": "framework/v1/plugins/vuejs.html",
    "revision": "f11952ca8cca5a51e8eeab6caff1c837"
  },
  {
    "url": "framework/v2/api/0xcertapi-client.html",
    "revision": "0951608fa07b4525957c5f9455ae4e93"
  },
  {
    "url": "framework/v2/api/certification.html",
    "revision": "607790d713aa20391cf9d199e98a0a97"
  },
  {
    "url": "framework/v2/api/ethereum-connectors.html",
    "revision": "fc2f252d8e4ffb15884171d0e6ac6935"
  },
  {
    "url": "framework/v2/api/vuejs-plugin.html",
    "revision": "3d61dc92bc0bf5000adfb636f930f99c"
  },
  {
    "url": "framework/v2/api/wanchain-connectors.html",
    "revision": "7b87dd66a1da0381f29af48f9d34eb0e"
  },
  {
    "url": "framework/v2/guides/asset-management.html",
    "revision": "877920160c718899e255852ab056b9af"
  },
  {
    "url": "framework/v2/guides/atomic-actions.html",
    "revision": "0dbb1a9b0fc096de54d549ea58bf8719"
  },
  {
    "url": "framework/v2/guides/atomic-deployments.html",
    "revision": "42f086cab23bcc89150f8000881f25dd"
  },
  {
    "url": "framework/v2/guides/certification.html",
    "revision": "cb0d1a9a19623e438c0227cce53c8d04"
  },
  {
    "url": "framework/v2/guides/communication.html",
    "revision": "00b8ab76b9fcb3922d7b3ab9d04f5499"
  },
  {
    "url": "framework/v2/guides/providers.html",
    "revision": "b64d671e06166fd09f0e45d666b59f00"
  },
  {
    "url": "framework/v2/guides/value-management.html",
    "revision": "2830e6c663706f7d32c4a238e6ea395d"
  },
  {
    "url": "framework/v2/index.html",
    "revision": "3495236c60ea741b7ebb1849d9dc073b"
  },
  {
    "url": "framework/v2/introduction/0xcert-tokens.html",
    "revision": "28d4925909b27bee4d303895728dae62"
  },
  {
    "url": "framework/v2/introduction/atomic-transactions.html",
    "revision": "16918027063cd9f03715deda8eedbdfa"
  },
  {
    "url": "framework/v2/introduction/authenticity.html",
    "revision": "023ac15fc4b1dc3aba2f2f5e9455e278"
  },
  {
    "url": "framework/v2/introduction/fungible-values.html",
    "revision": "5d521a89998c6e7fa26335b4f5ab53f4"
  },
  {
    "url": "framework/v2/introduction/getting-started.html",
    "revision": "153519663a45b6ec01f1f6578cace392"
  },
  {
    "url": "framework/v2/introduction/interoperability.html",
    "revision": "81a3c29dab7143e228e0cfc9cdcbce92"
  },
  {
    "url": "framework/v2/introduction/non-fungible-assets.html",
    "revision": "975fc199555dc21437ac0907b98eeef9"
  },
  {
    "url": "framework/v2/introduction/threat-models.html",
    "revision": "2b20a73cc00ddd0ee1918ce7ea63cd26"
  },
  {
    "url": "framework/v2/schemas/86-base-asset-schema.html",
    "revision": "43f2f38140f97e35fb2d19516f586546"
  },
  {
    "url": "framework/v2/schemas/87-asset-evidence-schema.html",
    "revision": "8747ee3ffef4249adea6ade54517472c"
  },
  {
    "url": "framework/v2/schemas/88-crypto-collectible-schema.html",
    "revision": "cf766b2cd6efe00d5eb0d13cd8e043b9"
  },
  {
    "url": "framework/v2/schemas/xcert-schema.html",
    "revision": "f816f6df996c8924f19a9646de6623ee"
  },
  {
    "url": "hero-image.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "index.html",
    "revision": "fec7f506e14beb8c308d74ce0627b512"
  },
  {
    "url": "LICENSE.html",
    "revision": "d526227f8a2f0d1901c7d1f2d9d9fe17"
  },
  {
    "url": "logo_0xcert.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "logo_alliance.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "logo_swapmarket.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "logo_validator.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
  },
  {
    "url": "logo-bitski.svg",
    "revision": "6bf34f5872caea823c755a950675ccb1"
  },
  {
    "url": "logo-metamask.svg",
    "revision": "fa7b829817860f80d7733f08efd3e4fe"
  },
  {
    "url": "wanchain.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
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
