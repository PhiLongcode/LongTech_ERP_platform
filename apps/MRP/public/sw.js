if (!self.define) {
  let a,
    s = {};
  const t = (t, n) => (
    (t = new URL(t + ".js", n).href),
    s[t] ||
      new Promise((s) => {
        if ("document" in self) {
          const a = document.createElement("script");
          ((a.src = t), (a.onload = s), document.head.appendChild(a));
        } else ((a = t), importScripts(t), s());
      }).then(() => {
        const a = s[t];
        if (!a) throw new Error(`Module ${t} didn’t register its module`);
        return a;
      })
  );
  self.define = (n, e) => {
    const i =
      a ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    const o = {};
    const r = (a) => t(a, i),
      c = { module: { uri: i }, exports: o, require: r };
    s[i] = Promise.all(n.map((a) => c[a] || r(a))).then((a) => (e(...a), o));
  };
}
define(["./workbox-362255dc"], function (a) {
  "use strict";
  (importScripts("fallback-BO8oxnWfZwutR7XA_3Jh1.js"),
    self.skipWaiting(),
    a.clientsClaim(),
    a.precacheAndRoute(
      [
        {
          url: "/_next/static/BO8oxnWfZwutR7XA_3Jh1/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1007-6381a3c63a4b34e2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/11465-cf1f2368ab31b062.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/11661-14b95f6745889dcc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/1170.3506bab4e274f96a.js",
          revision: "3506bab4e274f96a",
        },
        {
          url: "/_next/static/chunks/11998.6d266ff332e1ef7d.js",
          revision: "6d266ff332e1ef7d",
        },
        {
          url: "/_next/static/chunks/12146.f3054c80eb9732a8.js",
          revision: "f3054c80eb9732a8",
        },
        {
          url: "/_next/static/chunks/12538-a64a81330c02aeba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/12557-8952946fba24e573.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/14342-a370fd54bc30ad7c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/14353-27a6005c2a252bf1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/1528-439214fda03e51ba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/15554.066271ef50251a14.js",
          revision: "066271ef50251a14",
        },
        {
          url: "/_next/static/chunks/1610-c20d3927710def8b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/16340-35eee6694d40d6e0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/16606.cf41ae6b829d9f3d.js",
          revision: "cf41ae6b829d9f3d",
        },
        {
          url: "/_next/static/chunks/17369-892fe804ecbdb82b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/17450.b30ed022b2cba0b7.js",
          revision: "b30ed022b2cba0b7",
        },
        {
          url: "/_next/static/chunks/17612-836b9f924c65e4c5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/18841.1d90a51fc7819fc2.js",
          revision: "1d90a51fc7819fc2",
        },
        {
          url: "/_next/static/chunks/19185-03c74c9214c998c7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/19475.0029b9847a025cc9.js",
          revision: "0029b9847a025cc9",
        },
        {
          url: "/_next/static/chunks/1dd3208c-9de78380abdd26b2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/20478-a5b18db29802b541.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/20858-519e76bfe2fe06e7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/21060-84b2709a16a87338.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/21698-f912b43aa27ba293.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/22934.0a00d104187cad94.js",
          revision: "0a00d104187cad94",
        },
        {
          url: "/_next/static/chunks/23038.25f4b9f45a29c4a3.js",
          revision: "25f4b9f45a29c4a3",
        },
        {
          url: "/_next/static/chunks/23058.37aca9b8b6970c61.js",
          revision: "37aca9b8b6970c61",
        },
        {
          url: "/_next/static/chunks/23706-158b620a1af7f40f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/23863-1ddba76faaa1d7e1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/25224-606f701727786546.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/25606.d2e9ac98073a4fa6.js",
          revision: "d2e9ac98073a4fa6",
        },
        {
          url: "/_next/static/chunks/26087-3ff2db47d3d154d1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/2746-822da2fdfbcfc6cb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/27595-b56ea11b33bb4686.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/27786-6a7da5585cbc37f7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/2833-776220ad0a8d5712.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/28887-0d41b51528d0cf9e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/29078-51bdbce60796048c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/29250.087bd295bb91194c.js",
          revision: "087bd295bb91194c",
        },
        {
          url: "/_next/static/chunks/29515.4ec6fe1ffeb0671c.js",
          revision: "4ec6fe1ffeb0671c",
        },
        {
          url: "/_next/static/chunks/29597-eee923a72ca84571.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/29672-5a8d4dcd547938cd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/29687-193202635a108038.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/3091-08102070e94434aa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/31141-95b76966c4d02e0f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/31263.dc8bf78fa3312861.js",
          revision: "dc8bf78fa3312861",
        },
        {
          url: "/_next/static/chunks/31328.3fb2b8e21c7de5de.js",
          revision: "3fb2b8e21c7de5de",
        },
        {
          url: "/_next/static/chunks/31382.ffeedb1224419bdd.js",
          revision: "ffeedb1224419bdd",
        },
        {
          url: "/_next/static/chunks/32407-be8761bbe6ec583d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/32568-fdd721684125d2b5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/33143.8e6cc97878396c32.js",
          revision: "8e6cc97878396c32",
        },
        {
          url: "/_next/static/chunks/33299-7c3085e5983cd8c5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/34968-7ae45221515ab9e0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/34992-c723e38f2fdf84ac.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/35096-b6890227618a44f0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/35631-26813aa9a709aeab.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/36341-a7eba6441a0498e6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/36477-f57722459b51c4e9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/36639-77c1f50b7879aaaa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/36689-5cd815120a4ab1aa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/3802-f279baa6002e3b01.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/38941.c29ca942b3a324d0.js",
          revision: "c29ca942b3a324d0",
        },
        {
          url: "/_next/static/chunks/38946-27f0db5d668ec346.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/39521.eded6c726df5eafc.js",
          revision: "eded6c726df5eafc",
        },
        {
          url: "/_next/static/chunks/39525-0c7a8c0904d59833.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/39657-8968883eeca8fe14.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/40109-50b4f6d751745fe4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/40244.7a64e82e12a0279e.js",
          revision: "7a64e82e12a0279e",
        },
        {
          url: "/_next/static/chunks/4027-9181983a4365676c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/4066-b800160b383a0f03.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/41074-280fe12f70ee5d3b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/4125-da5acc947da63eb5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/41723-5b66a0484ed48460.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/425a1fef.b6b86806598ffd06.js",
          revision: "b6b86806598ffd06",
        },
        {
          url: "/_next/static/chunks/42634-5af6a0e6018c0f52.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/42858-1909ddba159fa128.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/4299-8da58e79401e0b83.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/44618-f987069e33a3edf1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/44713-b5c90b20b7939966.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/44985-6a6fe9ab872f8507.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/45102-6f2f46660f16aa8b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/45540.a91ea1dd65cb94ad.js",
          revision: "a91ea1dd65cb94ad",
        },
        {
          url: "/_next/static/chunks/45609-d0fad096f8dfea75.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/46166-ce4294c92e06a3d9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/46629-bf56332d446b7a96.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/46699-5d07de78c77e644e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/46998-583a7d031b9db01f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/47055.5f2a4fcd9cf6413f.js",
          revision: "5f2a4fcd9cf6413f",
        },
        {
          url: "/_next/static/chunks/47133-43f1d44d4b3bdd04.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/47153.9f1d390f5310450e.js",
          revision: "9f1d390f5310450e",
        },
        {
          url: "/_next/static/chunks/472.41fe20470037760d.js",
          revision: "41fe20470037760d",
        },
        {
          url: "/_next/static/chunks/47592-8a89bc6e7675f69f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/49962-8807f0670d890afc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/49979-d17c8efee3e92ad1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/51369-ebae0fefcecc86ae.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/51602-8dd2738fe0d82d7c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/51774-eecaf1cb129d6915.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/52044-092ed2449c288da7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/52644-cd7517f714b0b0ca.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/53540-d5cd435694dc9cf0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/53784.97541556f75e6144.js",
          revision: "97541556f75e6144",
        },
        {
          url: "/_next/static/chunks/54068-cca9a72d6db49502.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/54427-bca2f9ec0a5deb24.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/54852-f84322d413d2f5e8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/55203-e9529ce12ab9b0ff.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/55350.c52776174b227ba7.js",
          revision: "c52776174b227ba7",
        },
        {
          url: "/_next/static/chunks/55844.0978f8faef016441.js",
          revision: "0978f8faef016441",
        },
        {
          url: "/_next/static/chunks/56015-cdcfc5b48c278975.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/57074-a0e7cf2f4f85f158.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/57164-3cab66d88067e165.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/58223-ac0f508af02972cb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/58415-d6adfce99d3c5af0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/58889-9eda67ff5fe49ac6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/5922.14f915be9d1aedcf.js",
          revision: "14f915be9d1aedcf",
        },
        {
          url: "/_next/static/chunks/5987-639ad0a47deee2b6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/59935-635148aa70d80d59.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/60603-4b57189ca2dad242.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/61386-ee65fb9d40aa96e1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/61918.50d6cf526713d03a.js",
          revision: "50d6cf526713d03a",
        },
        {
          url: "/_next/static/chunks/6281-894cffe06ac090a9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/63351-262ea9025270a49a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/63557-119ad6745d5d6432.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/63826-a51c9f93269c7e97.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/6487-166c47b02fa30380.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/66227.a91d2481a240916f.js",
          revision: "a91d2481a240916f",
        },
        {
          url: "/_next/static/chunks/66513.d04124bfe68b57bc.js",
          revision: "d04124bfe68b57bc",
        },
        {
          url: "/_next/static/chunks/66776-b3854e06f5a24193.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/67205.26476bc7daa52ec5.js",
          revision: "26476bc7daa52ec5",
        },
        {
          url: "/_next/static/chunks/68544-7c7fe7d5a72d3a2a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/68788-2628505afd28d5e6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/6883.55c2e62225b421ec.js",
          revision: "55c2e62225b421ec",
        },
        {
          url: "/_next/static/chunks/69384.8472be7d736ecdf7.js",
          revision: "8472be7d736ecdf7",
        },
        {
          url: "/_next/static/chunks/69690-ba9b8e11633e88bf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/69938-b8b7fff3a756e6d0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/69987-84adcfda89c27394.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/70557-4d4616889e64d047.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/71843-8de5d42cc65b4969.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/71938-3a90091b51a4e5c2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/72058-4caa92d5b071e131.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/7230-6d0edb408b7288bf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/72644-6c13c7ef51c2aaf2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/72821-603738017d5a6630.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/72969-b2da447aec295b04.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/73256-f20cedec872bf845.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/74464-0d2b002c2cbfc380.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/74815.5733bdcc4f4b3a59.js",
          revision: "5733bdcc4f4b3a59",
        },
        {
          url: "/_next/static/chunks/74859.eaf065bff27d0ba3.js",
          revision: "eaf065bff27d0ba3",
        },
        {
          url: "/_next/static/chunks/7491.9a91f1008eebc532.js",
          revision: "9a91f1008eebc532",
        },
        {
          url: "/_next/static/chunks/75768-431229c67a64d136.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/75782.e7459d054227df31.js",
          revision: "e7459d054227df31",
        },
        {
          url: "/_next/static/chunks/75784-9f0cf89edd606bf1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/76516-40ac4cb92feffcb1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/77118-f31e075bb0de3622.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/77723-acb3e6d2415c9430.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/78362-928c1132a2702688.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/78365-6d91fae457bdae5d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/78839-8ab54491ad2d6765.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/79462-a1a3adea7a36fb8a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/7c198e02.0df73e6232fe5a4d.js",
          revision: "0df73e6232fe5a4d",
        },
        {
          url: "/_next/static/chunks/80098.9900ab85c4fb31d5.js",
          revision: "9900ab85c4fb31d5",
        },
        {
          url: "/_next/static/chunks/80450-0b3d273f4a72dd01.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/8067-75f389613036ee6f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/81342-fb2ebea35c47a27f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/81354.65a6b9aa96f5f5cc.js",
          revision: "65a6b9aa96f5f5cc",
        },
        {
          url: "/_next/static/chunks/82173-4867d8b67885bee9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/82529.1eea78b264a36228.js",
          revision: "1eea78b264a36228",
        },
        {
          url: "/_next/static/chunks/83429-e002923cfa5b1a0d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/83606-59c9462cad7031a9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/84132-902f7dedbd5fea17.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/84376-4ca843ee6355ee21.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/84544-461d5a789696eb5b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/84969.e5d03bd261b86b37.js",
          revision: "e5d03bd261b86b37",
        },
        {
          url: "/_next/static/chunks/85398-9b96ff525475d55d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/86049-39e258cdcda9b1cc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/86583-319d26dd056557fe.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/87030-3c9038e525511dd4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/87758-a1d933b0ee27b150.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/89454-066e0ac062133c19.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/89481-e170ff75237d48b4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/89ddd23d.ff8c370110e5a5dd.js",
          revision: "ff8c370110e5a5dd",
        },
        {
          url: "/_next/static/chunks/90319-dbc4b2990f822996.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/90406.248ca2ba6f857bb9.js",
          revision: "248ca2ba6f857bb9",
        },
        {
          url: "/_next/static/chunks/90929-d33cec03f742d1de.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/91304-95a18f8e30b2429c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/91409-02123ee65e98d0e7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/91579-14b2fb728d8f0e90.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/92077-2839a1e234de1b27.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/92195.941bc8e0b0f9f549.js",
          revision: "941bc8e0b0f9f549",
        },
        {
          url: "/_next/static/chunks/9247-0884e459a8d75ebd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/92597-01818735fa22e8af.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/92648-25bfaa7083a82263.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/9319-9937bef7e90d71e2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/95117-7f7da8b6e045d3ae.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/96782.c11a03e6898200dc.js",
          revision: "c11a03e6898200dc",
        },
        {
          url: "/_next/static/chunks/97427-6dd55eef8bb3f216.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/97979-ac81281caf9de7eb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/98590-51c8ce46850f2cc4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/98f82933.b422a3e607c7509c.js",
          revision: "b422a3e607c7509c",
        },
        {
          url: "/_next/static/chunks/9954-b3c484335b9d848c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/99628-af53a8bf2d03879e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/99693-4203af7a8539d032.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/forgot-password/error-66a30f9c2d4e3110.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/forgot-password/layout-31102df91bfa8f16.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/forgot-password/loading-13a6560fc12d3aeb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/forgot-password/page-c0ff81e133960259.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/layout-1f64d7240d792865.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/login/error-9ebe5b93cd2d9956.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/login/layout-fb1c5f8441d2b0eb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/login/loading-320e560be1ad3223.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/login/page-307687711f53c69e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/register/page-038f3b729091905f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/reset-password/error-b85d0dd12d9f574b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/reset-password/layout-1cbda6bdd974bd74.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/reset-password/loading-4fe39e32baf2da87.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(auth)/reset-password/page-d1dba7d27cb7ef0c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/activity/error-54a0e10a3de9c539.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/activity/layout-bac2bbd65d253460.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/activity/loading-14c0d6109719a974.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/activity/page-90cd9ebe3ddf7e16.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai-insights/error-6d9896fdf40a09c6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai-insights/layout-54637aaf34976baf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai-insights/loading-992d28bb60e433bb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai-insights/page-8e25a4b54ea63197.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/%5BalertId%5D/error-347bf66dd07e633e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/%5BalertId%5D/layout-fb11ba312d5bb534.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/%5BalertId%5D/loading-797f7cfa89fac285.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/%5BalertId%5D/not-found-d29efc03c0628a30.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/%5BalertId%5D/page-ad3232a5732fb70e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/error-fad79ad1dfb0c6c5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/layout-bc214c6eaaf13a0b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/loading-115b4240a95b1fea.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/alerts/page-f25351fc5ceab113.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/%5BsuggestionId%5D/error-0b937ee32dfb7068.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/%5BsuggestionId%5D/layout-c725751211a4c7c5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/%5BsuggestionId%5D/loading-4d6bdbbee612e60d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/%5BsuggestionId%5D/not-found-2616d878c42a0d70.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/%5BsuggestionId%5D/page-a49e2019affc130a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/error-66417c1abfad7b5b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/layout-54d51079788f0bac.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/loading-71101c588afeb2bd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-po/page-70834f6ff5f7f8d8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/%5BworkOrderId%5D/error-f405d05a11f10203.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/%5BworkOrderId%5D/layout-20cfc5385fba4bdf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/%5BworkOrderId%5D/loading-0517cdbe28e1a8f7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/%5BworkOrderId%5D/not-found-30a1821d7d04716b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/%5BworkOrderId%5D/page-29e535417c612b5d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/error-408e38bc0b1a25e3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/layout-7ed1694cc1201e57.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/loading-73d332499ee77b33.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/auto-schedule/page-f3bc2ad49a20a7f1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/email-import/error-d85e437ebb6388ed.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/email-import/layout-cde537ae5becb0dc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/email-import/loading-7af0f65ef7776e66.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/email-import/page-b3aa576a7bf86f58.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/error-b88b37381c1cd547.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/%5BproductId%5D/error-092a9c94d0ce3880.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/%5BproductId%5D/layout-e1d54731c2d540a7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/%5BproductId%5D/loading-c2501d22ef16e453.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/%5BproductId%5D/not-found-697f85ba6c35580e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/%5BproductId%5D/page-c8b54664ad60bccb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/error-8913ec42a4589064.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/layout-334c9e45171da0c5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/loading-f79da94446692175.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecast/page-00f249d4add56445.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecasting/error-dba00c05ee6fcbca.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecasting/layout-a33cc162177d0e99.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecasting/loading-200d18436cc80980.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/forecasting/page-637a77ab2d49019a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/insights/error-dc02dbb846248532.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/insights/layout-0d880d8d851a9498.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/insights/loading-116a54cf2263eda4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/insights/page-c736ac98c1c0ff09.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/knowledge/error-4cb49679db7d3370.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/knowledge/layout-2c5bd7162a5ef06f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/knowledge/loading-240a639862927ca7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/knowledge/page-7873396d1fc28c38.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/layout-c8fdae2b5b501345.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/lead-time/error-7c31d8ab22ae2ba4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/lead-time/layout-59e0f5d44c1833f4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/lead-time/loading-be59280f3b03b2bc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/lead-time/page-ca8699266ac61754.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/loading-b0a1d57cf243ce08.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/page-e92b61e010f8724b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/predictive-maintenance/error-898fc903173fc707.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/predictive-maintenance/layout-7c4fdf97e4a3847a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/predictive-maintenance/loading-43ca0d519569f1b1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/predictive-maintenance/page-57a53a50c8da2572.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/%5BpartId%5D/error-506a2896b83266ea.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/%5BpartId%5D/layout-ed81b7f49252eba0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/%5BpartId%5D/loading-811d9cbf457f7851.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/%5BpartId%5D/not-found-666d281f7339e425.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/%5BpartId%5D/page-9ded320d0b650a17.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/error-33f3ff10df519225.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/layout-37f1cb6a84a68391.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/loading-bb3f72aedb2a111a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/quality/page-c4dcf1364ca35b39.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/recommendations/error-74d632afba52b3dd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/recommendations/layout-8485a1f7130d5e43.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/recommendations/loading-93e46ceb625f303c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/recommendations/page-da010718ed046819.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/scenarios/error-ceec305df0147ba5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/scenarios/layout-d918c0a604bb4b1f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/scenarios/loading-3448da5090a0c5ff.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/scenarios/page-fd88cd5cc0422c06.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/%5Bid%5D/error-e386bf75adcdbbd5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/%5Bid%5D/layout-d731976ecce20c4f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/%5Bid%5D/loading-89792a656f509a95.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/%5Bid%5D/not-found-bdcba488a9a06486.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/%5Bid%5D/page-233b5007561b5b02.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/error-10166b96986482fe.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/layout-33250d09a46886d3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/loading-e8b685d212ee64bf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/simulation/page-dc3c54c42104790a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/%5BsupplierId%5D/error-ae3a822118945baa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/%5BsupplierId%5D/layout-4b6e075b2170f1fa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/%5BsupplierId%5D/loading-dfeb63883f2bfc40.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/%5BsupplierId%5D/not-found-6643478d6dd67e28.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/%5BsupplierId%5D/page-68cf54309a9390b2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/error-db146d1f2eea1661.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/layout-d62952c30a68a940.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/loading-3f9401860c5ae87d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/supplier-risk/page-dbdd869b604f481b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/suppliers/error-4c4695b892cd5b94.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/suppliers/layout-1ed7f37b50e849eb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/suppliers/loading-bbcf45bd3fa46a43.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/ai/suppliers/page-a76b385b3b935404.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/alerts/error-ee7ee96dd363112b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/alerts/layout-22bfd554d3461bca.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/alerts/loading-fef01725d84beb4e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/alerts/page-c25b8a353aac3fac.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/edit/error-e59417c3920b8d4e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/edit/layout-7573100a16c40943.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/edit/loading-1d531367a3f004f9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/edit/page-35e995abc3ac953d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/error-8522ac4fbbd5486f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/layout-f3b9b7de3ee83d68.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/loading-de0e8b925af31aad.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/not-found-af5e8ba4ffffb68d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/%5Bid%5D/page-d83eb7965ab206f1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/error-e33f74b4616bff85.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/layout-9dc432807d697481.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/loading-04146e1d893da875.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/new/error-6be397a886ffe616.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/new/layout-af24d72bbb66dc7c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/new/loading-5d4f64625346518b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/new/page-ce0ea4c2df67ecd2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/dashboards/page-6660fdd176bf2521.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/error-851b2fd68584a457.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/kpis/error-1b15e658742bb799.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/kpis/layout-787518e19e292854.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/kpis/loading-94f68798a5948449.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/kpis/page-f2a636fd33b100dc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/layout-3193bf3a58d1918b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/loading-25b43faf3579bd49.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/page-6528112dd9d98714.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/reports/error-fd041d04915baf6b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/reports/layout-a699c6aa32930e3a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/reports/loading-f168107aeb5004bb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/analytics/reports/page-dca749dc782ffe69.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/approvals/error-a338106cf9ea612e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/approvals/layout-3504914c932a0340.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/approvals/loading-77b9858b7ad6ab04.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/approvals/page-74f36d9f31a98cf1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/audit/error-017158e15fedf280.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/audit/layout-d539469efec8f6c0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/audit/loading-534e12584074cbda.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/audit/page-0efa492395fe19ad.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/error-f69ae2042b32542f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/explode/error-d2a5c50791fc4404.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/explode/layout-605f4a42e06f43e0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/explode/loading-206b911abe919483.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/explode/page-d5851cc8d915d0c6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/loading-68d197931f9d9d0f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/not-found-c998aa43acbe12bf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/%5Bid%5D/page-af4febdc35e0f60b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/error-b621f6a0f8ba87da.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/layout-fd9f97aa0fb1e5ff.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/loading-aad108adcc07f1a1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/new/error-0e8f15685ad28396.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/new/layout-15f57ffade633358.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/new/loading-cf7d3766ca7db1e4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/new/page-4d8486e3b766e621.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/page-60fd90d994b32264.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/versions/error-7c9e97099d29621f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/versions/layout-b842a016aa775888.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/versions/loading-723b29611425e00b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/bom/versions/page-e4b0a9eee973d184.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/compliance/error-e33339c467acd872.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/compliance/layout-3b1e9b1bf52aad9a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/compliance/loading-01b047efe9b34ae9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/compliance/page-4988e24e94e18c4a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/advisor/page-5f2a7c9aa7b72830.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/analyze/page-c89826d0db094c57.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/autonomy/page-af410bdb6ed67bea.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/bom-cost/page-15168c2fef7cba29.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/dashboard/page-536879516d6fa54d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/make-vs-buy/%5Bid%5D/page-185910fd1d71a539.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/make-vs-buy/new/page-620fcba4b6c34b53.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/make-vs-buy/page-f87532940dd84f09.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/page-507c48250d21bf69.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/roadmap/%5BtargetId%5D/actions/%5BactionId%5D/page-6181feee9adb1eec.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/roadmap/%5BtargetId%5D/actions/new/page-0a2d00f340e50a1d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/roadmap/%5BtargetId%5D/page-837b517bb0dfa688.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/roadmap/%5BtargetId%5D/phases/new/page-fabc76c74bc8d3c1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/roadmap/new/page-528fe2c57edc2679.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/roadmap/page-e437a0cf6b437904.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/substitutes/%5Bid%5D/page-6d80c15fb7c60472.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/substitutes/new/page-bfcd70a695bbfabc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/substitutes/page-e6d2ecdb86eb4abb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/cost-optimization/suppliers/page-533dd249cf5549ca.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/costing/page-c5b971d366c9ac46.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/%5Bid%5D/error-b6b9881ef92cf74a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/%5Bid%5D/layout-f1e926380b05caf5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/%5Bid%5D/loading-044ed7affc9ffab2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/%5Bid%5D/not-found-a761d6c975ad559f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/%5Bid%5D/page-42ca2258e72d3a00.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/error-24abdc9212684e0d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/layout-8a3f6678fbe744a2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/loading-448ed2c08959b750.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/customers/page-b0e538afc719196d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/data-migration/error-6984c2fd6a03c07d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/data-migration/layout-03a8de5cb8f642c0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/data-migration/loading-ea3b38cfc93a4a1d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/data-migration/page-a2cc8935e70360d4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/data-setup/page-60f3b794971b0e75.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/discussions/error-e4f89e1afba55a60.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/discussions/layout-57cf263e04be83fb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/discussions/loading-6737e320be276e12.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/discussions/page-8d164c6aca04011a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/documents/error-e4f0ee7fedd34e54.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/documents/layout-341cdd0360121efa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/documents/loading-8224975b7fb01845.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/documents/page-faa8e686fd4e0433.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/error-456fcf69a1e31ce1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/error-08bb84741ba9b3f8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/export/error-638b0a9bfc831df7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/export/layout-81f1102d4d4ec6e0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/export/loading-139b72d907ba388b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/export/page-0890156dab5cb896.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/import/error-6de26a027453601c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/import/layout-b8e04eb15d79e335.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/import/loading-9aa49c8239ddab6b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/import/page-c3909df650c1b0c4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/layout-fe02053ac692929f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/loading-01c71c31f0687727.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/page-47b468592e5d8371.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/templates/error-fc9b338200605f9c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/templates/layout-568329fbdea8bf2b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/templates/loading-bb4cae841a0e35ae.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/excel/templates/page-edda366be82cc697.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/costing/error-298de23f0dcd7861.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/costing/layout-27f0ab084e0d8d24.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/costing/loading-5826f0e11464e532.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/costing/page-28054d14f3dbebc1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/error-12db811a758b05eb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/gl/error-7ed039ada8a2b23a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/gl/layout-587e4ab8cdf411ee.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/gl/loading-0fc559b39808655c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/gl/page-e87cf56f686a30bc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/invoicing/error-f1c66b1422bd9b07.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/invoicing/layout-b1a141494d47ee96.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/invoicing/loading-eab58e668eab3d08.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/invoicing/page-a55e78defa49855c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/layout-3e0eea8f55e99729.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/loading-bc8d125d7cec2476.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/misa-export/error-dde72f0077f3baca.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/misa-export/layout-0d792cdf50c06aba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/misa-export/loading-84c8e625179d0689.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/misa-export/page-19d0e53900ebb9c5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/page-9fb9c02d171f47ba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/reports/error-6f0a66f90adc657a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/reports/layout-4922016159c5190e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/reports/loading-f74aade82a15f10c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/finance/reports/page-4f592f2b268fba55.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/help/error-91676fe65d55e8c7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/help/layout-a0caeab87c770300.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/help/loading-0dd523a93f9a0bd6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/help/page-a123d88fcec858da.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/home/error-80b2f2980c485a58.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/home/layout-269bed97724045b0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/home/loading-4d348e238e8fe54a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/home/page-a81496174219a359.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/error-eb8dd2e2a8427bee.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/history/error-8f647bb2484770d0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/history/layout-824df8f836997b6e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/history/loading-4aec7cc6851b46d1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/history/page-ce63585ec7643a93.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/layout-8090180ca10a3bea.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/loading-9d19c91f9af49729.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/page-bfbd597ac0b57269.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/smart/error-955c5fd4127ce051.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/smart/layout-43b380d6391efad3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/smart/loading-6e9cf7567e28656f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/import/smart/page-b9f15a4f1acae824.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/%5Bid%5D/error-b1bce051325dbcbf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/%5Bid%5D/layout-90246b7ecdd4a905.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/%5Bid%5D/loading-706b97c6c50d8cd7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/%5Bid%5D/not-found-8ada51f63143705e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/%5Bid%5D/page-39855f9ccb5c4843.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/abc/error-41152541196e1a70.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/abc/layout-372dd6fa9df219c4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/abc/loading-51dc596d0ff55af1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/abc/page-143c9b272e489e10.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/alerts/error-9fd28c583bdcf242.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/alerts/loading-fb67b7c3ed4cfbef.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/alerts/page-2472f25fabcd219f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/cycle-count/error-2063c3bfacb4308f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/cycle-count/layout-752b7708a26eaed0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/cycle-count/loading-34bbdb5e6e70bf63.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/cycle-count/page-9130db6b41002c8b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/error-5990f7f95f4218d9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/expiry-alerts/error-6d97bc9c25dea238.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/expiry-alerts/layout-21f108463a450937.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/expiry-alerts/loading-30ffe829d4409a95.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/expiry-alerts/page-5517e0e2a19760d8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/issue/error-538021cb465bb987.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/issue/loading-21a0464279bcf701.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/issue/page-e3aca538faf8a729.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/layout-61f20f39b5c4aea2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/loading-51bba39e22c126b3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/inventory/page-7f9c16b438d2f5ac.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/layout-368dbb723a598b24.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/loading-8c812f88cc1488aa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/%5BrunId%5D/error-6cd01162f0d8f652.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/%5BrunId%5D/layout-2b3f9fcab72d78c8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/%5BrunId%5D/loading-791309cb5917bb6c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/%5BrunId%5D/not-found-207f77798b929d0a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/%5BrunId%5D/page-932dda69da02e809.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/atp/error-c8235538a9ac215c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/atp/layout-d2b722c0402a582e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/atp/loading-5e9b42a4617e058d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/atp/page-cbd7e68062a99899.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/error-0613831f2e46cc87.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/exceptions/error-c37ec2dbf3917efe.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/exceptions/layout-1fe159c2010e2e76.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/exceptions/loading-c6729c5f82eb31d7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/exceptions/page-ce282f07b3a286a7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/firm-orders/error-85f180d59706d685.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/firm-orders/layout-d33cc67e967f571a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/firm-orders/loading-b0ee272418d11dcc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/firm-orders/page-0778200f2987572a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/layout-bb1f851ed3fa79a6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/loading-9273831a35c78ec7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/multi-site/error-9da0a620188f6704.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/multi-site/layout-1daec09f966ac67e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/multi-site/loading-0352be78c29f6b14.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/multi-site/page-24ac9d776650d1ed.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/page-5fd3b4eac6efaa74.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/pegging/error-0f04123c6cd4a78b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/pegging/layout-5ef6c89f90a66225.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/pegging/loading-c97370941c269ad2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/pegging/page-24dd461bc7fcedd7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/planning/error-ffaef1becbbab3a0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/planning/loading-7bdcb8e7d3df6d29.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/planning/page-bd6a3e9ef7343a63.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/shortages/error-0add727234ecf22f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/shortages/layout-d3d662d439ad4484.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/shortages/loading-dbfa8e6479f6f440.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/shortages/page-efc3368a05528dd2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/simulation/error-32d9f8300be5f172.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/simulation/layout-bf830cefa18f7258.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/simulation/loading-a958cfbd3b4430af.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/simulation/page-4799bfeee51e609f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/wizard/error-5f5b48577b1d3ed8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/wizard/layout-b448870acd24f2b7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/wizard/loading-ee0d2848175d7ac3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/mrp/wizard/page-783f760f4e908ef3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/notifications/error-d9356baecb95a42e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/notifications/layout-af57d531cf13cf7a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/notifications/loading-2cf79a20fbf35825.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/notifications/page-d2037dd6768f15e3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/%5Bid%5D/error-1ee1cd2113c110d9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/%5Bid%5D/layout-502eb461c1e7dc6c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/%5Bid%5D/loading-9eefa47d0ee7ee2c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/%5Bid%5D/not-found-f6c3d83ec5385342.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/%5Bid%5D/page-c3701a116bc0eaf4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/backorders/error-eda03e39a12f18d5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/backorders/layout-37d94237ff515813.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/backorders/loading-78e2f7556f451901.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/backorders/page-1036685f3844b13f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/error-4f802594a5e9d022.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/layout-5d696f6c9ada23dc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/loading-62d91aa6ebd3ebba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/new/error-1205a7ef5e1e44b3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/new/layout-33bc73c0aca3b922.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/new/loading-1a6bd9e11633829a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/new/page-06adc89f9eace99f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/orders/page-413f73b9de8967e3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/%5Bid%5D/error-2e77b6c4b2a90560.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/%5Bid%5D/layout-a5b7ac157db48db5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/%5Bid%5D/loading-f5be1fb1d2070e83.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/%5Bid%5D/not-found-12c2610d901a3331.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/%5Bid%5D/page-c5e3503791717456.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/error-14d05eac7c63f2ca.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/layout-73489be0b3b68c89.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/loading-f8cfb8f0362f2cd9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/parts/page-2450ae2ed30d53e1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/%5Bid%5D/error-deb90a8e5973b323.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/%5Bid%5D/layout-93461a90ae303233.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/%5Bid%5D/loading-375fa9ea8339d0df.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/%5Bid%5D/not-found-65308e557b524a35.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/%5Bid%5D/page-06c00345acdb1aed.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/capacity/error-3dae83c3fc423ae9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/capacity/layout-dadfe0848db74ff5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/capacity/loading-d76f134b1b42d105.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/capacity/page-9134349bd8baf376.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/equipment/error-669b7dbf20762444.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/equipment/layout-94aad60dc2adabba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/equipment/loading-3a0f0a11719c99cf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/equipment/page-3847f4453ec4c7e0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/error-4384dfa4f03f17f8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/layout-e15c6f0367877af7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/loading-d0dfc3356f13fb5d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/new/error-9b47c52880f69b67.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/new/layout-5db5a665d29ce53e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/new/loading-7d412c1d441d1ed4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/new/page-fef0a5cd50aba818.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/oee/error-6ca704b2982c1abd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/oee/layout-fde4454b70ec1af7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/oee/loading-3719b6cdd1264a8f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/oee/page-2e5348744ab8cade.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/page-fb0b7ad3444590c9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/partial-release/error-e981d4b35528078c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/partial-release/layout-70bfb585317d5813.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/partial-release/loading-531ceda424704900.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/partial-release/page-d89889425a47add9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/error-c0dda1c47338ae92.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/layout-f02f45dc082a6a1e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/loading-9003fe28a0a08b6b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/new/error-9b171eeb900aa8f0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/new/layout-5f076463cbd3eb37.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/new/loading-a2750e9f1a5fabc0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/new/page-ba248dea29d8b319.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/routing/page-0a40d0a35499c6c0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/schedule/error-3e237e374c1047cd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/schedule/layout-c19a2f1c4f54d8d4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/schedule/loading-25462b23a3c231e0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/schedule/page-d030c42a1b9907c8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/scheduler/error-fa4baf15ba021935.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/scheduler/layout-1473adba4d5d3f86.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/scheduler/loading-2b169feb599db10c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/scheduler/page-baedac0238cc1f9e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/shop-floor/error-0a2ec2a03c0927f7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/shop-floor/layout-3a76e74493e03d1e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/shop-floor/loading-7f4b4cac1186df92.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/shop-floor/page-071080fc1d36cac5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/subcontracting/error-1df5926b46ac4d3e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/subcontracting/layout-ddc3bbe836fb5d09.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/subcontracting/loading-150179d98a69d6db.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/subcontracting/page-4bebab4d2f9c9642.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/%5Bid%5D/error-46b6825bac46f75c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/%5Bid%5D/layout-1900075d4be35a07.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/%5Bid%5D/loading-c8c19320e72d7021.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/%5Bid%5D/not-found-fc76a003f23edd7d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/%5Bid%5D/page-3ed73db4d4c95aaa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/error-3e5fc423e5693378.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/layout-df3ce7e69bcb2201.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/loading-11f3eac044b69ae9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/new/error-281db615688c384d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/new/layout-7b1d9eec54ab3b3b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/new/loading-994c73ee713b56b2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/new/page-3a7bd257b9c719f0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/production/work-centers/page-026eb40aaefb7bba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/profile/error-f41afb9ea946b78c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/profile/layout-585f14677ce7652e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/profile/loading-a22a98b47828c553.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/profile/page-8cffb71be0c7ba53.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/%5Bid%5D/error-36eab1e902ece734.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/%5Bid%5D/layout-79596df596ebc279.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/%5Bid%5D/loading-b6894cd049c31f15.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/%5Bid%5D/not-found-38c7d686547e26e1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/%5Bid%5D/page-37e03d1dc1946543.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/error-74b10f256672ae62.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/layout-5da8ab7000fe7654.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/loading-b3cea1a75d6140e7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/new/error-118cb933c097f81c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/new/layout-8977a72a16b14846.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/new/loading-71b2de769a551537.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/new/page-4ef5165b0248fb77.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/purchasing/page-40c87cd6de69ea21.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/alerts/error-692c3c3d8864da37.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/alerts/layout-1c007b05b5bfae80.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/alerts/loading-aba7a3da2220212e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/alerts/page-0cca890902e4a2c7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/error-93121b0416d654cd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/layout-0143547ccdf0aea9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/loading-bad691fd9e2249ba.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/new/error-b25e8581e294fee9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/new/layout-da4bb7b6782146a0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/new/loading-34581f45bb3d5b47.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/new/page-74fcc5386d80b1f6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capa/page-c7d1a43f8dc3e827.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capability/error-bf738c9560ad5a39.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capability/layout-391ce80e318380f2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capability/loading-adb409e28f3a1a80.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/capability/page-c0311ef9b7eefc8c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/certificates/error-2bab3df7bb461cc2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/certificates/layout-a30caaf4dfb02b40.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/certificates/loading-e6195fde4e6e6240.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/certificates/page-679ccf61f5b6a7c1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/error-7e32f7709d4e55b7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/error-5c076b75cef6ad8a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/layout-b667b6a0e17561e4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/loading-61d3083f0fd92280.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/new/error-fc603a7ee7c6aec7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/new/layout-d3bd9fc13a18ad15.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/new/loading-4abb13bd5ae4b9bc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/new/page-673cd8792c4557d2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/final/page-4db4b09f7e7f6475.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/hold/error-5df44e0f710d4ea5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/hold/layout-b877d369bdef3fff.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/hold/loading-4740a3c658ee9cf6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/hold/page-106ff9866faf6d91.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/error-cd4812381ff941cb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/layout-adabbfbe3264b28b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/loading-e6ef8703c680d768.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/new/error-fb94e7f58d8ac104.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/new/layout-d9a5561054977a0e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/new/loading-0c6e51ed5d22f80a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/new/page-b0b35c407c563635.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/in-process/page-0015ec5417120b75.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/error-cfe9f56b5a663c97.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/layout-d500ce797371f32c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/loading-edc20ecb90af6a6e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/new/error-8f206e2f9763c0c0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/new/layout-60a7ee0c84db267d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/new/loading-1f79f2e64a6a05fc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/new/page-797abfaf863b181c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/inspection-plans/page-88c99237fd20bff7.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/layout-67d978ddc4dcd7cf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/loading-a69eca747f8fa014.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/measurements/error-82691c36c3b2c929.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/measurements/layout-28013ca4cd500ef6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/measurements/loading-89be030070d96316.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/measurements/page-3471c3ae412f0aa4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/%5Bid%5D/page-fe6e69641fe93605.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/error-9f321750fbc74f89.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/layout-8eedff840e7cca57.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/loading-b18579e5615afbea.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/new/error-6450db337c6fde6d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/new/layout-f04fea34aa0c544f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/new/loading-6e3b39bf6fec3772.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/new/page-cc300380d662643d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/ncr/page-4acc9bdbbaa7092e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/page-94fbcd5e4b49ffcc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/%5Bid%5D/error-03875d849d8de839.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/%5Bid%5D/layout-12460f82435ced31.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/%5Bid%5D/loading-dbdb4f8b1002cc9e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/%5Bid%5D/not-found-b63db8f024863f34.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/%5Bid%5D/page-040f23fd15aa08d8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/error-9d2341c9b77588eb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/layout-255008fdf0c8a04c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/loading-b7ea2dbe10689956.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/new/error-03890f0a1d193512.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/new/layout-fc6485c457e44517.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/new/loading-a2a6be6a49f6f9f8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/new/page-e4ea7d609cad3e2c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/receiving/page-a62d42688f97607e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/rework/error-8978c707be2e8204.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/rework/layout-870a00881741e275.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/rework/loading-7f82fb4c4ae0d33e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/rework/page-5194b7f61fd511cc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/scrap/error-a4e777698052a10f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/scrap/layout-7c5bf205a5bdcc47.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/scrap/loading-137aa42fbcc6e105.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/scrap/page-11871263292c271b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/spc/error-bd213af3c8ef5e56.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/spc/layout-f0a67e5cafbb1a9c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/spc/loading-0456581b8055f75b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/spc/page-599d4cbe105d4f0e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/%5BlotNumber%5D/error-3348e7e61327bc8e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/%5BlotNumber%5D/layout-91e6b1156fa36fa2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/%5BlotNumber%5D/loading-380fa9bfca4d0a29.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/%5BlotNumber%5D/not-found-5f12d37e3a14d538.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/%5BlotNumber%5D/page-3010f8a080acd125.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/error-e4cc5d0c001bb50b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/layout-23d70f6550692c1a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/loading-191c6521796df8ed.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/quality/traceability/page-01a87bdd3e7ebe6f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/enhanced/error-ad6180f0b6ef22fb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/enhanced/layout-fd8bd5417fce60fb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/enhanced/loading-02a7e4ecaca6023b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/enhanced/page-925c2df5319dba90.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/error-211bafb9c0bf0817.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/layout-610e4823f0033810.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/loading-e23e651e4aa7ff65.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/page-e9b44f19264f3882.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/scheduled/error-a6f5e01296dd3f84.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/scheduled/layout-6df9fd2cb712e44e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/scheduled/loading-d41ff1c79691632c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/reports/scheduled/page-9eeb9e7b1d013871.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/error-d426deb980873542.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/layout-f2be6de9dac49955.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/loading-1bbe13304dd808fb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/page-f1d46120a1d515ee.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/pricing-rules/page-e993ef37e65ec2ca.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/quotations/%5Bid%5D/page-2ec80f5cc451f689.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/quotations/new/page-25d9136d88c8b716.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/sales/quotations/page-639e9f2e9d450fa4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/backup/error-1be9552d29279102.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/backup/layout-ce4ec9ea8be29354.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/backup/loading-ca0cedc6909275e5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/backup/page-753f54f25df6a8dd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/error-adac5c157b517e20.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/layout-3ab0991ce1a422f5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/loading-ef5c4971f7dd7964.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/notifications/error-48ab8f6e18872b30.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/notifications/layout-bf51e3c7b7656ed3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/notifications/loading-a9e23c300fcdf4f8.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/notifications/page-7e49fac37a4cfe0a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/page-07b1a4d48721681d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/security/error-3a0bb3017abe42a0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/security/layout-fac1d3630a6937e4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/security/loading-22d220254f485c9d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/security/page-2e56cb491bcd2c83.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/warehouse/error-dc5fa9261db7687d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/warehouse/layout-3d43cb9f43d146e5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/warehouse/loading-ed25c2c688db09a1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/settings/warehouse/page-739d3d8a6595e775.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/%5Bid%5D/error-0bc0adee077ed62f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/%5Bid%5D/layout-ca8b5cf56836d23e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/%5Bid%5D/loading-6588e50544efb824.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/%5Bid%5D/not-found-a7beb4b1f94c914c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/%5Bid%5D/page-69e510992564297b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/%5Bid%5D/scorecard/page-cc649406eed7aab6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/error-e40c5d138da84c3b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/evaluation/page-dce66770f5af771f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/layout-e9830ec2c5c9af44.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/loading-75ce068b73d1537a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/suppliers/page-3d563a7bc639e331.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/%5Bid%5D/error-65b5aa180bdb8618.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/%5Bid%5D/layout-1fd5c77f8412ee6c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/%5Bid%5D/loading-000c302542585eaf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/%5Bid%5D/not-found-81e3830e4bf971bf.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/%5Bid%5D/page-baa1df5854d6f524.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/error-835ec1ee9fb77e4a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/layout-b127b3358034cf03.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/loading-eca5fa199f4f1668.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(dashboard)/warehouses/page-a7268cc9699918f6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/deliveries/layout-9b2005a10015d2fa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/deliveries/loading-26ba7946a0257c85.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/deliveries/page-8de82ca04aae3393.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/invoices/layout-82484d43ecbfdf22.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/invoices/loading-4467ef595802c51b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/invoices/page-2b56957c8c989cab.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/layout-1532bcabe031c02f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/orders/layout-018ac6f49ce50807.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/orders/loading-60b2f46ca39a28b6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/orders/page-a75905643e3a62b9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/page-6d474c0c861061fd.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/support/layout-1ab77adf84c06d94.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/support/loading-d421578f1e164c70.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/customer/support/page-04741ed9044d96c0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/error-275582b433422db9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/(portal)/layout-27902ca79f0e862c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-0abf007d52abca80.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/dashboard/loading-f4ae7f5a41fc0fd9.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/dashboard/page-3cc3ab323f5f12aa.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/docs/loading-dea2ed24b2760b08.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/docs/page-3183e1c90197b310.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/error-9d2b45227abeed86.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/global-error-1e747307cbe56655.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/layout-c8a1f7798091b8c2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/loading-6ba9159836e2472f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/error-63c5c26b4fee7b65.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/adjust/layout-3076319ef33c2def.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/adjust/loading-69df3dd899326e1e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/adjust/page-43f05e33a0e445f2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/count/layout-b6d1cb504dcae325.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/count/loading-25be7438e0c162a0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/count/page-bcf4c11faf330778.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/layout-04c0cd7f81ba36c4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/loading-6393781e1d8e9577.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/page-a43e7cf2eab6de1e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/transfer/layout-c3867ca6dcd39c26.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/transfer/loading-35d9a251204082a1.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/inventory/transfer/page-925b844020dd365e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/layout-5225b70db3ac83d5.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/loading-b610f24d2975c03a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/page-155047d8046b9057.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/picking/layout-cdec2926a64a06c2.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/picking/loading-16466668e200f7f3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/picking/page-331dda486d2182df.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/quality/layout-e1f9ecb8f6f56414.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/quality/loading-19089d0cf4ca3a32.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/quality/page-e441dc99ad75ff90.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/receiving/layout-ec05c1c4db5853db.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/receiving/loading-6c199dd936f1133b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/receiving/page-cba1783cbe3e8f4a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/scan/layout-a4f1f7b4e744e718.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/scan/loading-67e4f1d94b99110b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/scan/page-016f87665f817148.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/settings/layout-606e32d3694eb75a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/settings/loading-418897a4cce581bb.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/settings/page-0d8d6dd31ee4fa99.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/downtime/layout-00af209993b9537e.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/downtime/loading-de4e61eaa9b789e4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/downtime/new/layout-a2404b82174d4b0a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/downtime/new/loading-bee8719fbc66c067.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/downtime/new/page-00088c19b836590c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/downtime/page-ef2ccfc5cc994218.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/equipment/layout-00cf0309df5e9174.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/equipment/loading-70ab6085bd8a3dff.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/equipment/page-abae85862b69657f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/layout-b3956aaf3f50c95d.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/loading-e8fecceec7b679f0.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/maintenance/layout-112020d115dc83ee.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/maintenance/loading-0489c20ffcc30b7f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/maintenance/page-a4c2d70b8f28fe21.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/technician/page-669d06989a725004.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/workorder/layout-e1d36bb235abb228.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/workorder/loading-dbdda661107c4195.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/mobile/workorder/page-c6ed3baabb54ec2c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/not-found-b43268f653ea0a22.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/offline/layout-6887f1d60227f6dc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/offline/loading-ba7b718f0903d8b4.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/offline/page-6b38b1dccd07a01b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/page-05927f09e4244370.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/deliveries/layout-d8c48a137e6b818b.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/deliveries/loading-1769b56c444507e3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/deliveries/page-072243915e31fa70.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/error-a8ef0952cd511610.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/invoices/layout-ae6e0bf83000f1d3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/invoices/loading-99ef272f4026927f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/invoices/page-6ff8de3e4c960cdc.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/layout-e0e7d4463995af6f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/orders/layout-6160e14f9036690c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/orders/loading-e83b10bfd471d6a6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/orders/page-43ea972ddc637e9a.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/page-f258a9995bc7ac73.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/performance/layout-429a71446ed8100f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/performance/loading-b7f88f4cca8b6890.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/app/supplier/performance/page-39a652e73de4c90c.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/da458701.9e7c246573f6d7bd.js",
          revision: "9e7c246573f6d7bd",
        },
        {
          url: "/_next/static/chunks/framework-539728bf77cfd0a6.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/main-80074e16920cab4f.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/main-app-459e3d49047d9967.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/pages/_app-5d1b240938aff1b3.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/pages/_error-7f373c265cf11235.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-270572f1a5469646.js",
          revision: "BO8oxnWfZwutR7XA_3Jh1",
        },
        {
          url: "/_next/static/css/12471cbc7368eb66.css",
          revision: "12471cbc7368eb66",
        },
        {
          url: "/_next/static/css/1898e7502a7dc5a0.css",
          revision: "1898e7502a7dc5a0",
        },
        {
          url: "/_next/static/css/e2594f5aef087980.css",
          revision: "e2594f5aef087980",
        },
        {
          url: "/_next/static/media/00f4982f357db61e-s.p.woff2",
          revision: "8bddb56152be79c4a6f3da7f4d737f8b",
        },
        {
          url: "/_next/static/media/011e180705008d6f-s.woff2",
          revision: "cd34c7793d9776838308cfbe5d93922b",
        },
        {
          url: "/_next/static/media/07ef58f5f6014a87-s.woff2",
          revision: "2e81f1545505fa48cbc4a57c92b79384",
        },
        {
          url: "/_next/static/media/19cfc7226ec3afaa-s.woff2",
          revision: "9dda5cfc9a46f256d0e131bb535e46f8",
        },
        {
          url: "/_next/static/media/20535187d867b7b9-s.woff2",
          revision: "7de6d31e5076eb437418b6e01998ee12",
        },
        {
          url: "/_next/static/media/21350d82a1f187e9-s.woff2",
          revision: "4e2553027f1d60eff32898367dd4d541",
        },
        {
          url: "/_next/static/media/2173e4bb28c315da-s.p.woff2",
          revision: "9b259ee8dd20976ce1e1f8f1a81b5658",
        },
        {
          url: "/_next/static/media/25ab8995c98996d7-s.p.woff2",
          revision: "67469fa9f9c4da0bc3cc9c91d9dcf44e",
        },
        {
          url: "/_next/static/media/26d4368bf94c0ec4-s.p.woff2",
          revision: "d28498895ed7050c37c94ddd026a4670",
        },
        {
          url: "/_next/static/media/2801417b65625cf5-s.woff2",
          revision: "d313794bd9fda8b0ad44189b27348eab",
        },
        {
          url: "/_next/static/media/28793f5c5e3d822d-s.woff2",
          revision: "c352fb162d499702d53f0dbfaab7b58f",
        },
        {
          url: "/_next/static/media/5356a6a4f2c8c8d8-s.woff2",
          revision: "6041b3192dc3e1a50141d5d418a24199",
        },
        {
          url: "/_next/static/media/558ca1a6aa3cb55e-s.p.woff2",
          revision: "570751c5f8b418972c1976160ba6ed85",
        },
        {
          url: "/_next/static/media/5662512df8b0ccdf-s.p.woff2",
          revision: "bc784c2fa8f9c020cd0296e214b764c2",
        },
        {
          url: "/_next/static/media/58f386aa6b1a2a92-s.woff2",
          revision: "f572f7b57d27ec7fd8373961f0b762b0",
        },
        {
          url: "/_next/static/media/5ab5267d02dae909-s.p.woff2",
          revision: "b64e82fed4633c41b37f8d4cdf7ec788",
        },
        {
          url: "/_next/static/media/62a3c74fa0e47362-s.woff2",
          revision: "2a98d7d0b630d459b8b7f3ffc37aebc9",
        },
        {
          url: "/_next/static/media/64d784ea54a4acde-s.woff2",
          revision: "8a5b33d747f0cfaac631ad00bd5bcba2",
        },
        {
          url: "/_next/static/media/6d831b18ae5b01dc-s.woff2",
          revision: "e6155c5cfacf3867c500daf0ebcba222",
        },
        {
          url: "/_next/static/media/73cb51aac9c97f90-s.woff2",
          revision: "662cde3543f3375874e26c26845cec22",
        },
        {
          url: "/_next/static/media/7b19b489dc6743ba-s.woff2",
          revision: "fa052422282eb26cff400131e5af4da1",
        },
        {
          url: "/_next/static/media/7ba5fb2a8c88521c-s.woff2",
          revision: "afac1fab355fe8db5c2dcaa7623dffb3",
        },
        {
          url: "/_next/static/media/8201559e247ad180-s.p.woff2",
          revision: "aee0d471b1f666a438ea1bb173ddd6b5",
        },
        {
          url: "/_next/static/media/8247d8d2a376ae43-s.woff2",
          revision: "3388b10411bec0a10049fe1d231a9163",
        },
        {
          url: "/_next/static/media/89362aa296165c6d-s.woff2",
          revision: "0ee30d9d8a666afbd0e9f2476140dc14",
        },
        {
          url: "/_next/static/media/8e9860b6e62d6359-s.woff2",
          revision: "01ba6c2a184b8cba08b0d57167664d75",
        },
        {
          url: "/_next/static/media/92eeb95d069020cc-s.woff2",
          revision: "17a5b2a15bf5647b49cadb9a3bb02e1c",
        },
        {
          url: "/_next/static/media/98e207f02528a563-s.p.woff2",
          revision: "6708425c446b05de1c2d471a0eaf4099",
        },
        {
          url: "/_next/static/media/99dcf268bda04fe5-s.woff2",
          revision: "216ee1a35b060106ed2852cdd8c026c7",
        },
        {
          url: "/_next/static/media/9ddf1512dbee9c99-s.p.woff2",
          revision: "aec71369a346acde530e0e30b251c13f",
        },
        {
          url: "/_next/static/media/ac0e76ddaeeb7981-s.woff2",
          revision: "6465b62dd12646a816e0d80f024ab07f",
        },
        {
          url: "/_next/static/media/b3bf17a9041d9433-s.woff2",
          revision: "ded54b0f07a0919cf7e27d7880a56e0a",
        },
        {
          url: "/_next/static/media/ba9851c3c22cd980-s.woff2",
          revision: "9e494903d6b0ffec1a1e14d34427d44d",
        },
        {
          url: "/_next/static/media/c5fe6dc8356a8c31-s.woff2",
          revision: "027a89e9ab733a145db70f09b8a18b42",
        },
        {
          url: "/_next/static/media/c6f81e539d11fc99-s.woff2",
          revision: "b0126114324bebe005a350a87951d935",
        },
        {
          url: "/_next/static/media/c9c3823090ec8b55-s.woff2",
          revision: "625be018001610bec1a5c0ba45d9988c",
        },
        {
          url: "/_next/static/media/cd79e1ff94fa521b-s.p.woff2",
          revision: "d6e77878340198efcaebfda4ee7df589",
        },
        {
          url: "/_next/static/media/d26bbd13d6b70f89-s.woff2",
          revision: "75fa2e527eaae805bbf44e3378d1232c",
        },
        {
          url: "/_next/static/media/d29838c109ef09b4-s.woff2",
          revision: "0ba762bde65aaa682fcc089f8c57288e",
        },
        {
          url: "/_next/static/media/d3ebbfd689654d3a-s.p.woff2",
          revision: "814fe1615d4dbc7bbd92d26a6bda0905",
        },
        {
          url: "/_next/static/media/db96af6b531dc71f-s.p.woff2",
          revision: "e71a597e376ed91862e822b5a5de8c04",
        },
        {
          url: "/_next/static/media/df0a9ae256c0569c-s.woff2",
          revision: "d54db44de5ccb18886ece2fda72bdfe0",
        },
        {
          url: "/_next/static/media/e11f95d95ac59fa4-s.p.woff2",
          revision: "25db3a2db9083240f9b7988b4db2a99a",
        },
        {
          url: "/_next/static/media/e270c9fc4fe96f5a-s.p.woff2",
          revision: "31e9a4d2fa4d7326dfafe06a699a8e5c",
        },
        {
          url: "/_next/static/media/e40af3453d7c920a-s.woff2",
          revision: "9fb609fe01d739bb9df558e1fba2498e",
        },
        {
          url: "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
          revision: "65850a373e258f1c897a2b3d75eb74de",
        },
        {
          url: "/_next/static/media/edc640959b0c7826-s.woff2",
          revision: "5508edf7c10fe677025b8c88a2578acb",
        },
        {
          url: "/_next/static/media/ef4d5661765d0e49-s.woff2",
          revision: "de1d49f26130d43f91829088086625f4",
        },
        {
          url: "/_next/static/media/ff71da380fbe67dd-s.woff2",
          revision: "60d32697500d4779da3725134067ad31",
        },
        {
          url: "/icons/icon-128x128.png",
          revision: "b0b1fa964b24685b5a9bedf18fdd824f",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "a4ebae94eabb462d69474f62483f2912",
        },
        {
          url: "/icons/icon-152x152.png",
          revision: "1f109a1fd5db89b6daaf190c294c7a51",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "35c5ef50f33840a53ecbc1dc07362409",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "b0668dbbf3e0d0bf29a2c744f25d7fa9",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "0059d1d6113bdf9522ce1d8c0977beac",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "be94189c9d143e0cdff0c82557ca4420",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "16265420cb5eb3febeb709ede27711ec",
        },
        {
          url: "/icons/icon.svg",
          revision: "5e0e7bc2aeeb3452f9f57ab35266c800",
        },
        {
          url: "/icons/inventory-96x96.png",
          revision: "8ef2ca5fe3766b5a6c5961f1f354ac5a",
        },
        {
          url: "/icons/scan-96x96.png",
          revision: "897797c2720b7632a68bb24b75ceea45",
        },
        {
          url: "/icons/work-order-96x96.png",
          revision: "8d815dd84dd3a913e6b6ee09709cfa9f",
        },
        {
          url: "/logo-vierp-dark.png",
          revision: "de7a5ddfbf302e14356647b3c241c449",
        },
        {
          url: "/logo-vierp.png",
          revision: "18f68261471884607e63386cff19edc2",
        },
        { url: "/manifest.json", revision: "d35d55df4ce47a4c3e6be1ed11afeb68" },
        { url: "/offline", revision: "BO8oxnWfZwutR7XA_3Jh1" },
        {
          url: "/templates/TEMPLATE_BOM.xlsx",
          revision: "13e96cace2e1bb048439f209dd4590bc",
        },
        {
          url: "/templates/TEMPLATE_Customers.xlsx",
          revision: "a2bcc0e5fb7bd17b03c6d93321620f25",
        },
        {
          url: "/templates/TEMPLATE_Inventory.xlsx",
          revision: "049163cf1c46c88503245151b01cf57c",
        },
        {
          url: "/templates/TEMPLATE_PartPlanning.xlsx",
          revision: "79beb8d8654ba219fc33c38c824a5b58",
        },
        {
          url: "/templates/TEMPLATE_PartSupplier.xlsx",
          revision: "2ff269fd014d1054f6b89a13e0e94b94",
        },
        {
          url: "/templates/TEMPLATE_Parts.xlsx",
          revision: "395dc3371f3ab5dc18e65f405f29c78e",
        },
        {
          url: "/templates/TEMPLATE_Suppliers.xlsx",
          revision: "b64e8c8a042fbfa1ba9f3d32fbce3c46",
        },
        {
          url: "/templates/TEMPLATE_Warehouses.xlsx",
          revision: "ec157098eceba3b352bad184f20bf1d3",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    a.cleanupOutdatedCaches(),
    a.registerRoute(
      "/",
      new a.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: a,
              response: s,
              event: t,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new a.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new a.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new a.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new a.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new a.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new a.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\.(?:js)$/i,
      new a.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\.(?:css|less)$/i,
      new a.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new a.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ),
    a.registerRoute(
      /\/api\/mobile\/.*/i,
      new a.NetworkFirst({
        cacheName: "mobile-api",
        networkTimeoutSeconds: 10,
        plugins: [
          new a.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: a }) => self.fallback(a) },
        ],
      }),
      "GET",
    ));
});
