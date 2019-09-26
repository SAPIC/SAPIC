/*! version: "1.6.0", file: steamdesign.min.js, hash: 8cda06f78e1007361299, 2019-09-23 12:52:10 */!function (n) { var r = {}; function o(t) { if (r[t]) return r[t].exports; var e = r[t] = { i: t, l: !1, exports: {} }; return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports } o.m = n, o.c = r, o.d = function (t, e, n) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, o.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function (e, t) { if (1 & t && (e = o(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) { return e[t] }.bind(null, r)); return n }, o.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return o.d(e, "a", e), e }, o.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = 152) }({ 0: function (t, e, n) { "use strict"; n.d(e, "d", function () { return d }), n.d(e, "g", function () { return l }), n.d(e, "c", function () { return r }), n.d(e, "b", function () { return c }), n.d(e, "a", function () { return o }), n.d(e, "e", function () { return i }), n.d(e, "f", function () { return a }); var d = function (t) { return -1 < window.location.search.indexOf(t) }; function l() { for (var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = void 0 === e.title ? "" : e.title, r = void 0 === e.style ? "font-weight:bold;font-size:13px;color:green" : e.style, o = void 0 === e.dlevel ? "log" : e.dlevel, i = arguments.length, a = new Array(1 < i ? i - 1 : 0), s = 1; s < i; s++)a[s - 1] = arguments[s]; var d = "string" == typeof a[0] ? " " + a.shift() : ""; (t = console)[o].apply(t, ["%c" + n + "%c" + d, r, ""].concat(a)) } var r = d("nndebug"), c = r && !d("nndebug="); function o() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; (c || d("nndebug=1")) && l.apply(void 0, [{ title: "DEBUG:" }].concat(e)) } function i(t) { for (var e = arguments.length, n = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r]; l.apply(void 0, [{ title: t, dlevel: "info", style: "font-weight:bold;color:blue" }].concat(n)) } function a(t) { for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = void 0 === e.title ? "" : e.title, r = void 0 === e.style ? "font-weight:bold;font-size:13px;color:green" : e.style, o = d(t), i = arguments.length, a = new Array(2 < i ? i - 2 : 0), s = 2; s < i; s++)a[s - 2] = arguments[s]; (o || c) && l.apply(void 0, [{ title: n || t.toUpperCase(), style: r }].concat(a)) } o("Version:", "1.6.0") }, 1: function (t, e, n) { "use strict"; n.d(e, "b", function () { return c }), n.d(e, "a", function () { return g }), n.d(e, "c", function () { return p }); var i = n(0), o = n(2); function a(t) { return function (t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n } }(t) || function (t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } function s(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); t && (r = r.filter(function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), n.push.apply(n, r) } return n } function d(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var r = window, l = document, c = l.getElementById.bind(l), u = r.innerWidth || l.documentElement.clientWidth || l.body.clientWidth; function g(n, r) { var t = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]; if ((t || !AdSlots.slots[n]) && (AdSlots.config[n] && !t && (r.original = Object.keys(AdSlots.config[n]).filter(function (t) { return Object.keys(r).includes(t) }).reduce(function (t, e) { return JSON.stringify(r[e]) === JSON.stringify(AdSlots.config[n][e]) || (t[e] = r[e]), t }, {}), r = function (e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {}; t % 2 ? s(n, !0).forEach(function (t) { d(e, t, n[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach(function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }) } return e }({}, r, {}, AdSlots.config[n])), (AdSlots.config[n] = r).minWidth = r.minWidth || 0, u >= r.minWidth && c(r.id))) { if (AdSlots.slots[n] && delete AdSlots.slots[n], AdSlots.slots[n] = googletag.defineSlot(r.path, r.sizes, r.id).addService(googletag.pubads()), r.targeting) for (var e in r.targeting) AdSlots.slots[n].setTargeting(e, r.targeting[e]); var o; if (void 0 !== r.setCollapseEmptyDiv) (o = AdSlots.slots[n]).setCollapseEmptyDiv.apply(o, a(Array.isArray(r.setCollapseEmptyDiv) ? r.setCollapseEmptyDiv : [r.setCollapseEmptyDiv])); Object(i.a)("Slot Defined:", r) } } function p(t) { var e = l.createElement("div"); return e.id = t.id, t.style && (e.style = t.style), t.append && l.body.appendChild(e), t.before && t.before.parentNode.insertBefore(e, t.before), t.after && t.after.parentNode.insertBefore(e, t.after.nextSibling), t.el = e, t } r.AdSlots = r.AdSlots || { config: {}, slots: {} }, r.generateAdSlot = g, r.displayAdSlots = function (t) { function e(t) { var e = AdSlots.config[t], n = c(e.id); u > e.minWidth && n && "none" !== n.style.display && (Object(i.a)("Slot Displayed:", e), googletag.display(e.id)) } return "string" == typeof t && AdSlots.config[t] ? e(t) : Array.isArray(t) ? t.forEach(function (t) { e(t) }) : void Object.keys(AdSlots.slots).forEach(function (t) { e(t) }) }, r.refreshAdSlots = function (t) { AdSlots.meta = AdSlots.meta || { refreshCount: 0 }; var e = AdSlots.meta.refreshCount; 0 <= AdSlots.meta.refreshCount && googletag.pubads().setTargeting("refresh", JSON.stringify(e)), AdSlots.meta.refreshCount++; var n = []; if ("string" == typeof t && (t = [t]), void 0 === t || !t.length) return Object(i.a)("All Slots Refreshed"), googletag.pubads().refresh(null); t.forEach(function (t) { AdSlots.slots[t] && n.push(AdSlots.slots[t]) }), Object(i.a)("Refreshed Slots:", t, n), googletag.pubads().refresh(n) }, r.destroyAdSlots = function (t) { var e = []; return "string" == typeof t && (t = [t]), void 0 !== t && t.length ? (t.forEach(function (t) { AdSlots.slots[t] && e.push(AdSlots.slots[t]) }), Object(i.a)("Destroyed Slots:", t), googletag.destroySlots(e)) : (Object(i.a)("All Slots Destroyed"), googletag.destroySlots()) }, r.excludeAdSlots = function (e) { return Object.keys(AdSlots.config).filter(function (t) { return !e.includes(t) }).reduce(function (t, e) { return [].concat(a(t), [e]) }, []) }, r.getAdSlotsInView = function () { var t = AdSlots.config, e = []; for (var n in t) { var r = c(t[n].id); r && Object(o.b)(r) && e.push(n) } return Object(i.a)("Slots InView:", e), e } }, 12: function (t, e, n) { "use strict"; n.d(e, "a", function () { return o }); var d = n(0), r = (n(2), n(18), function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return d.f.apply(void 0, ["nndebug=sticky", { title: "nn__Sticky:", style: "font-weight:bold;font-size:13px;color:orange" }].concat(e)) }), l = document, c = window, u = l.getElementById.bind(l); function o(o, i) { var a = l.createElement("div"), t = u(o); function s(t, e) { 1 < arguments.length && void 0 !== e && !e || googletag.pubads().clear([AdSlots.slots[t]]), a.style.display = "none", r("Sticky Closed:", { slot_id: t }) } 1 < l.querySelectorAll("#" + o).length && u(o + "_wrap") && (u(o + "_wrap").remove(), r("Removed sticky duplicate:", o)), u(o + "_wrap") || null === t || (a.className = "nn-sticky", a.id = o + "_wrap", c.__cmp && c.__cmp("addEventListener", "isOpen", function (t) { var n = t.data; r("CMP Status:", n), setTimeout(function () { var t = l.querySelector(".intro_intro--Ntqks"), e = 1 === n && t ? t.offsetHeight + 14 + "px" : null; a.style.bottom = e || "", r("Adjusting (" + a.id + ") sticky bottom position:", e) }, 0) }), t.parentNode.insertBefore(a, t), a.appendChild(t), l.body.appendChild(a), r("Sticky Created:", { div_id: o, slot_id: i }), c.AdEvents = c.AdEvents || {}, c.AdEvents[i] || (c.AdEvents[i] = []), c.AdEvents[i].includes("slotRenderEnded") || (r("Event was added for", i), googletag.pubads().addEventListener("slotRenderEnded", function (t) { var e = l.createElement("input"), n = o, r = i; if (t.slot.getSlotElementId() === n) { if ("none" === a.style.display && (a.style.display = ""), !d.c && t.isEmpty) return s(r, !1); e.type = "checkbox", e.className = "close-btn", u(n).appendChild(e), e.addEventListener("change", function (t) { this.checked && s(r), this.remove() }) } }), c.AdEvents[i].push("slotRenderEnded"))) } c.createStickyAd = o }, 152: function (t, e, n) { "use strict"; n.r(e); n(6); function l() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return i.f.apply(void 0, ["nndebug=ss", { title: "nn__SS:", style: "font-weight:bold;font-size:13px;color:purple" }].concat(e)) } var r, o, i = n(0), a = n(2), s = n(3), d = n(5), c = (n(9), n(1)), u = n(12); n(16); function g() { o.innerWidth || r.documentElement.clientWidth || r.body.clientWidth; var t = "/6928793/Steam.Design"; Object(c.a)("lb1", { path: t + "-LB1", sizes: [728, 90], id: "nn_lb1" }), Object(c.a)("lb2", { path: t + "-LB2", sizes: [728, 90], id: "nn_lb2" }), Object(u.a)("nn_lb2", "lb2"), Object(c.a)("mpu1", { path: t + "-MPU1", sizes: [[300, 250], [300, 600]], id: "nn_mpu1" }), Object(i.a)("SSS :: setup finished"), o.dispatchEvent(new Event("nnAdsSetupFinished")), Object(d.a)(); var e = 0, n = setInterval(function () { e < 5 ? (googletag.pubads().refresh(), e++) : clearInterval(n) }, 6e4) } !function (i, a, t, s) { if (!s.novideo) { var d = { loaded: !1, timeout: null }; e() } function e() { if (!d.loaded) { "/" === i.charAt(0) && (i = i.substr(1)), "/" === i.charAt(i.length - 1) && (i = i.substr(0, i.length - 1)); var t = ""; if (i) { a("SpringServe: ss_url = " + i), t = "", t += "&ss_url=" + encodeURIComponent(i); var e = i.split("/"); for (var n in e) { var r = e[n].replace(/-/g, "_"); t += "&ss_url_part_" + r + "=1", a("SpringServe: ss_url_part_" + r + " = 1") } } else t = "&ss_url=/", a("SpringServe: ss_url = /"); var o = "?w=[player_width]&h=[player_height]&url=[page_url]cb=[timestamp]" + t; s.tagURL = "https://vid.springserve.com/vast/438385" + o, s.tagURLm = "https://vid.springserve.com/vast/438387" + o, l("SS LOADED"), function (t, e, n, r) { (n = e.createElement("script")).async = 1, n.type = "text/javascript"; var o = "https:" === e.location.protocol; n.src = (o ? "https:" : "http:") + "//cdn.springserve.com/assets/0/playerJS/networkN_1.js", (r = e.getElementsByTagName("script")[0]).parentNode.insertBefore(n, r) }(0, document), d.loaded = !0 } } }(window.location.pathname, console.log, document, window), AdSlots.info = { name: "Steam Design", url: "https://steam.design/", units: { desktop: ["nn_lb1", "nn_lb2", "nn_mpu1"], mobile: [] } }, r = document, o = window, Object(s.a)(83468, function () { window.bkTags = "|steam|pc|" }), Object(a.a)(function () { googletag.cmd.push(g) }) }, 16: function (t, e, n) { var r = n(17); "string" == typeof r && (r = [[t.i, r, ""]]); var o = { attributes: { id: "nncss" }, insert: "head", singleton: !1 }; n(8)(r, o); r.locals && (t.exports = r.locals) }, 17: function (t, e, n) { (t.exports = n(7)(!1)).push([t.i, ".cmp-state--bar .brid,.cmp-state--bar .pro-player-ivm-BR{bottom:120px!important}.cmp-state--bar .brid-banner-ad-timer,.cmp-state--bar .brid-close.brid-close-banner{bottom:350px!important}", ""]) }, 18: function (t, e, n) { var r = n(19); "string" == typeof r && (r = [[t.i, r, ""]]); var o = { attributes: { id: "nncss" }, insert: "head", singleton: !1 }; n(8)(r, o); r.locals && (t.exports = r.locals) }, 19: function (t, e, n) { (t.exports = n(7)(!1)).push([t.i, ".nn-sticky{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:fixed;bottom:0;left:0;right:0;z-index:9999;pointer-events:none}.nn-sticky>div{margin:0;padding:0;position:relative;z-index:9999;pointer-events:auto}.nn-sticky .close-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;width:40px;height:40px;position:absolute;right:-5px;top:0;margin-top:-40px;border-radius:40px;cursor:pointer;outline:none;background:#555;z-index:9999;pointer-events:auto}.nn-sticky .close-btn:after{content:\"\";background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M10 10l20 20m0-20L10 30' stroke='%23fff' stroke-width='4'/%3E%3C/svg%3E\") no-repeat 50% 50%;background-size:25px;width:100%;height:100%;display:block}@media (max-width:500px){.cmp-state--bar .nn-sticky{bottom:234px}}@media (min-width:501px) and (max-width:607px){.cmp-state--bar .nn-sticky{bottom:180px}}@media (min-width:608px){.cmp-state--bar .nn-sticky{bottom:132px}}", ""]) }, 2: function (t, e, n) { "use strict"; n.d(e, "d", function () { return a }), n.d(e, "a", function () { return s }), n.d(e, "c", function () { return d }), n.d(e, "b", function () { return l }); var r = n(0), o = window, i = document; function a(t) { var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : { async: !0, defer: !1 }, n = document.createElement("script"); n.src = t, n.async = !!e.async, n.defer = !!e.defer; var r = document.getElementsByTagName("script")[0]; r.parentNode.insertBefore(n, r) } function s(t) { if ("loading" === document.readyState) return document.addEventListener("DOMContentLoaded", function () { return Object(r.a)("-- DOM: Now Ready --") }), Object(r.a)("-- DOM: Waiting --"), void document.addEventListener("DOMContentLoaded", t); Object(r.a)("-- DOM: Ready --"), t() } function d() { return Math.max(o.innerWidth || i.documentElement.clientWidth || i.body.clientWidth) } function l(t) { var e = t.getBoundingClientRect(); return e.top < window.innerHeight && e.left < window.innerWidth && 0 < e.top + e.height && 0 < e.left + e.width } }, 3: function (t, e, n) { "use strict"; n.d(e, "b", function () { return r }), n.d(e, "a", function () { return o }); var a = n(0); window.bkTags = window.bkTags || "|"; var r = function (t) { for (var e = document.querySelectorAll(t), n = [], r = 0; r < e.length; r++) { var o = e[r].innerText || e[r]; o = o.replace("'", "").replace(/[^0-9,a-zA-Z_]+/g, "_").toLowerCase(), n.push(o) } n.length && (window.bkTags += n.join("|") + "|") }, o = function (n, t) { var r = 1 < arguments.length && void 0 !== t ? t : "", o = window; function i() { "function" == typeof r && r(), o.bk_allow_multiple_calls = !0, o.bk_use_multiple_iframes = !0, bkTags && (bk_addPageCtx("tags1", bkTags), bk_addPageCtx("tags2", bkTags), bk_addPageCtx("tags3", bkTags)), bkTags && console.log("bkTags:", window.bkTags); var t, e = document.location; t = e.hostname + e.pathname, bk_addPageCtx("url1", t), bk_addPageCtx("url2", t), bk_addPageCtx("url3", t), t = e.pathname, bk_addPageCtx("path1", t), bk_addPageCtx("path2", t), bk_addPageCtx("path3", t), console.log("BK Site ID:", n), BKTAG.doTag(n, 4), console.log("BK fired") } !function () { var t = window; function e(t) { return t.map(function (t) { return t.toString() }) } function r() { return Object(a.d)("bk_dfp_logger=true") || Object(a.d)("nndebug=bk") } function n() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; r() && a.g.apply(void 0, [{ title: "BK DEBUG" }].concat(e)) } t.bk_gpt = t.bk_gpt || {}, t.bk_gpt.functions = t.bk_gpt.functions || {}, t.bk_gpt.data = t.bk_gpt.data || { bk_category_ids: [], bk_campaign_ids: [] }, t.bk_gpt.json_return_id = "67605", t.bk_gpt.wait_in_ms = 1e3, bk_gpt.functions.setStored = function (t, e) { if ("undefined" == typeof Storage) return n("LOCAL STORAGE: NOT SUPPORTED"), !1; n("LOCAL STORAGE: Storing '" + t + "' =>", JSON.stringify(e)), localStorage.setItem(t, JSON.stringify(e)) }, bk_gpt.functions.getStored = function (t) { return "undefined" == typeof Storage ? (n("LOCAL STORAGE: NOT SUPPORTED"), !1) : JSON.parse(localStorage.getItem(t)) || [] }, bk_gpt.functions.fetchStored = function () { n("LOCAL STORAGE: Retrieving"), bk_gpt.data.bk_campaign_ids = bk_gpt.functions.getStored("bk_campaign_ids"), 0 < bk_gpt.data.bk_campaign_ids.length ? n("LOCAL STORAGE: Retrieved following 'bk_campaign_ids':", bk_gpt.data.bk_campaign_ids) : n("LOCAL STORAGE: NO Campaign IDs found in local storage."), bk_gpt.data.bk_category_ids = bk_gpt.functions.getStored("bk_cat_ids"), 0 < bk_gpt.data.bk_category_ids.length ? n("LOCAL STORAGE: Retrieved following 'bk_category_ids':", bk_gpt.data.bk_category_ids) : n("LOCAL STORAGE: NO Category IDs found in local storage.") }, bk_gpt.functions.parseResults = function () { return void 0 !== window.bk_results && (void 0 === bk_results.campaigns[0] ? (n("No campaigns found."), !1) : (n("'bk_results' object found"), bk_gpt.data = { bk_category_ids: [], bk_campaign_ids: [] }, bk_results.campaigns.forEach(function (t) { bk_gpt.data.bk_campaign_ids.push(t.campaign), bk_gpt.data.bk_category_ids = t.categories.map(function (t) { return t.categoryID }) }), bk_gpt.functions.setStored("bk_cat_ids", bk_gpt.data.bk_category_ids), void bk_gpt.functions.setStored("bk_campaign_ids", bk_gpt.data.bk_campaign_ids))) }, bk_gpt.functions.setGptTargets = function () { if (n("BK", bk_gpt), bk_gpt.data.bk_campaign_ids ? (n("GPT SET: Campaigns", bk_gpt.data.bk_campaign_ids), googletag.pubads().setTargeting("bkcampids", e(bk_gpt.data.bk_campaign_ids))) : n("GPT: NO Campaigns. Not set"), bk_gpt.data.bk_category_ids ? (n("GPT SET: Categories", bk_gpt.data.bk_category_ids), googletag.pubads().setTargeting("bkcatids", e(bk_gpt.data.bk_category_ids))) : n("GPT: NO Categories. Not set"), r()) { googletag.pubads().setTargeting("bkdebugger", "true"); var t = googletag.pubads().getTargetingKeys(); n("GPT Found Target Keys:", t), t.forEach(function (t) { n("GPT Target: ".concat(t, " ="), googletag.pubads().getTargeting(t)) }) } }, bk_gpt.functions.callBlueKai = function (e) { window.bk_results ? (n("JSON Return tag found"), n("Parsing 'bk_results' directly"), bk_gpt.functions.parseResults()) : (n("JSON Return tag NOT found"), bk_gpt.functions.fetchStored(), n("Waiting " + bk_gpt.wait_in_ms + "ms before calling JSON Return Tag"), setTimeout(function () { n("Calling JSON Return tag"); var t = document.createElement("script"); t.type = "text/javascript", t.onload = function () { n("JSON Return tag loaded"), n("Parsing 'bk_results'"), bk_gpt.functions.parseResults() }, bk_gpt.functions.parseResults(), t.src = "//tags.bluekai.com/site/" + e + "?ret=js&limit=1&integration=dfp", document.head.appendChild(t) }, bk_gpt.wait_in_ms)), t.googletag = t.googletag || {}, googletag.cmd = googletag.cmd || [], googletag.cmd.push(bk_gpt.functions.setGptTargets) }, bk_gpt.functions.callBlueKai(bk_gpt.json_return_id) }(), function t() { if (!document.getElementsByTagName("body")[0]) return setTimeout(t, 50); var e, n; window.bk_async = i, e = document, (n = document.createElement("script")).async = !0, n.src = "//tags.bkrtx.com/js/bk-coretag.js", e.head.appendChild(n) }() } }, 5: function (t, e, n) { "use strict"; n.d(e, "a", function () { return o }); var d = n(0); function l(t) { return function (t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n } }(t) || function (t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } function r(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } var c = window; c.refreshLabels = function () { return [] }; var u = function () { function t() { !function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.adserverRequestSent = !1, this.bidders = ["a9", "prebid"], this.debugMode = !1, this.fallbackTimer = null, this.slots = [], this.speedTimer = null, this.callID = Math.random().toString(36).slice(-4).toUpperCase() } return function (t, e, n) { e && r(t.prototype, e), n && r(t, n) }(t, [{ key: "debug", value: function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; d.f.apply(void 0, ["nndebug=rm", { title: "nn__RequestManager[".concat(this.callID, "]:"), style: "font-weight:bold;font-size:13px;color:red" }].concat(e)) } }, { key: "allBiddersBack", value: function () { var e = this, t = this.bidders.map(function (t) { return e[t] }).filter(Boolean).length === this.bidders.length; return t } }, { key: "headerBidderBack", value: function (t) { !0 !== this.adserverRequestSent && (this[t] = !0, this.debug("Returned requests from Bidder: %c" + t, "color:#080;border:1px solid #080;padding:1px 2px"), this.allBiddersBack() && (this.debug("All bidders back! Sending ad call..."), this.sendAdserverRequest())) } }, { key: "removeBidder", value: function (t) { var e = this.bidders.indexOf(t); -1 < e && this.bidders.splice(e, 1) } }, { key: "resetRequestFlags", value: function () { this.adserverRequestSent = !1, c.pbjs && (pbjs.adserverRequestSent = !1) } }, { key: "resetKeyValues", value: function (t) { var n = this, r = 0 < arguments.length && void 0 !== t ? t : "hb_", e = l(this.slots).map(function (t) { return c.AdSlots.config[t].id }); googletag.pubads().getSlots().filter(function (t) { return e.includes(t.getSlotElementId()) }).forEach(function (e) { var t = e.getTargetingKeys().filter(function (t) { return t.substring(0, r.length) === r }); t.forEach(function (t) { e.clearTargeting(t) }), t && t.length && n.debug("Slot Name: %c" + e.getSlotElementId() + "%c", "font-weight:bold", "", "-- cleared key-values:", t) }) } }, { key: "timeAdCall", value: function (t) { var e = 0 < arguments.length && void 0 !== t && t; if (!this.debugMode || !c.performance) return "Timer not available. Sorry."; if (!this.speedTimer) return this.speedTimer = c.performance.now(); if (this.speedTimer && (this.speedTimer = c.performance.now() - this.speedTimer), e) { var n = Math.ceil(this.speedTimer) + "ms"; return this.speedTimer = null, n } } }, { key: "sendAdserverRequest", value: function () { var t = this; !0 !== this.adserverRequestSent && (this.adserverRequestSent = !0, c.pbjs && (pbjs.adserverRequestSent = !0), window.clearTimeout(this.fallbackTimer), googletag.cmd.push(function () { c.apstag && t.a9 && apstag.setDisplayBids(), c.pbjs && t.prebid && pbjs.setTargetingForGPTAsync(), displayAdSlots(t.slots), refreshAdSlots(t.slots), t.debug("AD CALL COMPLETE: ad tags + ad request done in (".concat(t.timeAdCall(!0), ")."), t.slots) })) } }, { key: "requestBids", value: function (t, e, n) { var r = this, o = 0 < arguments.length && void 0 !== t ? t : [], i = 1 < arguments.length && void 0 !== e ? e : [], a = 2 < arguments.length ? n : void 0; this.debug("Requested bidders", this.bidders), c.apstag && o.length && apstag.fetchBids({ slots: o, timeout: a }, function (t) { r.headerBidderBack("a9") }), c.pbjs && i.length && pbjs.que.push(function () { pbjs.removeAdUnit(), pbjs.addAdUnits(i), pbjs.setConfig({ bidderTimeout: a }), pbjs.requestBids({ labels: c.refreshLabels(), bidsBackHandler: function (t) { r.headerBidderBack("prebid") } }) }) } }]), t }(); function o() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1e3, n = new u; n.resetRequestFlags(); var r = e + 150; t && t.length && Array.isArray(t) || (t = Object.keys(c.AdSlots.slots)), n.debugMode = Object(d.d)("nndebug=rm") || d.b; var o = t.filter(function (t) { return !Object.keys(c.AdSlots.config).includes(t) }); if (o.length && n.debug("WARNING: These are INVALID slots. %cThey will NOT be called.%c", "font-weight:bold", "", o), t = t.filter(function (t) { return !o.includes(t) }), n.slots = l(t), t.length) { var i, a, s = t.map(function (t) { return c.AdSlots.config[t].id }); if (n.debug("Slot IDs to bid on:", s), c.apstag ? (i = [], Object.keys(c.AdSlots.config).forEach(function (t) { t = c.AdSlots.config[t], i.push({ slotID: t.id, slotName: t.path, sizes: t.sizes }) }), i = i.filter(function (t) { return s.includes(t.slotID) }), n.debug("Bidder (%ca9%c) Slots:", "font-weight:bold", "", i), n.resetKeyValues("amzn")) : n.removeBidder("a9"), c.AdSlots.prebid ? (a = JSON.parse(JSON.stringify(c.AdSlots.prebid.filter(function (t) { return s.includes(t.code) }))), n.debug("Bidder (%cprebid%c) Slots:", "font-weight:bold", "", a), n.resetKeyValues("hb_")) : n.removeBidder("prebid"), n.bidders.forEach(function (t) { n[t] = !1 }), n.fallbackTimer = window.setTimeout(function () { n.debug("Fallback Timeout reached:", r), n.sendAdserverRequest() }, r), n.timeAdCall(), !n.bidders.length) return n.debug("No bidders set -- going straight to ad call."), n.sendAdserverRequest(); n.requestBids(i, a, e) } else n.debug("%cWARNING: No slots to bid on. Ending call early.", "background:yellow;font-weight:bold") } function i() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []; "string" == typeof t && (t = [t]), o(t) } c.refreshBids = i, c.refreshAllBids = i }, 6: function (t, e) { window.AdSlots = window.AdSlots || { config: {}, slots: {} } }, 7: function (t, e, n) { "use strict"; t.exports = function (n) { var a = []; return a.toString = function () { return this.map(function (t) { var e = function (t, e) { var n = t[1] || "", r = t[3]; if (!r) return n; if (e && "function" == typeof btoa) { var o = function (t) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */" }(r), i = r.sources.map(function (t) { return "/*# sourceURL=" + r.sourceRoot + t + " */" }); return [n].concat(i).concat([o]).join("\n") } return [n].join("\n") }(t, n); return t[2] ? "@media " + t[2] + "{" + e + "}" : e }).join("") }, a.i = function (t, e) { "string" == typeof t && (t = [[null, t, ""]]); for (var n = {}, r = 0; r < this.length; r++) { var o = this[r][0]; null != o && (n[o] = !0) } for (r = 0; r < t.length; r++) { var i = t[r]; null != i[0] && n[i[0]] || (e && !i[2] ? i[2] = e : e && (i[2] = "(" + i[2] + ") and (" + e + ")"), a.push(i)) } }, a } }, 8: function (t, e, o) { "use strict"; var n, r, c = {}, i = function () { return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n }, a = (r = {}, function (t) { if (void 0 === r[t]) { var e = document.querySelector(t); if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try { e = e.contentDocument.head } catch (t) { e = null } r[t] = e } return r[t] }); function u(t, e) { for (var n = [], r = {}, o = 0; o < t.length; o++) { var i = t[o], a = e.base ? i[0] + e.base : i[0], s = { css: i[1], media: i[2], sourceMap: i[3] }; r[a] ? r[a].parts.push(s) : n.push(r[a] = { id: a, parts: [s] }) } return n } function g(t, e) { for (var n = 0; n < t.length; n++) { var r = t[n], o = c[r.id], i = 0; if (o) { for (o.refs++; i < o.parts.length; i++)o.parts[i](r.parts[i]); for (; i < r.parts.length; i++)o.parts.push(h(r.parts[i], e)) } else { for (var a = []; i < r.parts.length; i++)a.push(h(r.parts[i], e)); c[r.id] = { id: r.id, refs: 1, parts: a } } } } function s(e) { var n = document.createElement("style"); if (void 0 === e.attributes.nonce) { var t = o.nc; t && (e.attributes.nonce = t) } if (Object.keys(e.attributes).forEach(function (t) { n.setAttribute(t, e.attributes[t]) }), "function" == typeof e.insert) e.insert(n); else { var r = a(e.insert || "head"); if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); r.appendChild(n) } return n } var d, l = (d = [], function (t, e) { return d[t] = e, d.filter(Boolean).join("\n") }); function p(t, e, n, r) { var o = n ? "" : r.css; if (t.styleSheet) t.styleSheet.cssText = l(e, o); else { var i = document.createTextNode(o), a = t.childNodes; a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i) } } var f = null, b = 0; function h(e, t) { var n, r, o; if (t.singleton) { var i = b++; n = f = f || s(t), r = p.bind(null, n, i, !1), o = p.bind(null, n, i, !0) } else n = s(t), r = function (t, e, n) { var r = n.css, o = n.media, i = n.sourceMap; if (o && t.setAttribute("media", o), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = r; else { for (; t.firstChild;)t.removeChild(t.firstChild); t.appendChild(document.createTextNode(r)) } }.bind(null, n, t), o = function () { !function (t) { if (null === t.parentNode) return; t.parentNode.removeChild(t) }(n) }; return r(e), function (t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return; r(e = t) } else o() } } t.exports = function (t, d) { (d = d || {}).attributes = "object" == typeof d.attributes ? d.attributes : {}, d.singleton || "boolean" == typeof d.singleton || (d.singleton = i()); var l = u(t, d); return g(l, d), function (t) { for (var e = [], n = 0; n < l.length; n++) { var r = l[n], o = c[r.id]; o && (o.refs-- , e.push(o)) } t && g(u(t, d), d); for (var i = 0; i < e.length; i++) { var a = e[i]; if (0 === a.refs) { for (var s = 0; s < a.parts.length; s++)a.parts[s](); delete c[a.id] } } } } }, 9: function (t, e, n) { "use strict"; var r = n(2), o = n(0), i = window; Object(r.d)("//securepubads.g.doubleclick.net/tag/js/gpt.js"), i.googletag = i.googletag || { cmd: [] }, i.enableSingleRequest = !0, googletag.cmd.push(function () { Object(o.a)("GPT :: SSS setup started"), googletag.pubads().disableInitialLoad(); var t = i.location.pathname.substring(0, 40); googletag.pubads().setTargeting("url", t), Object(o.e)("Ad URL:", t), googletag.pubads().setTargeting("publica", "0"), o.c || (Object(o.a)("Collapse Empty Divs:", !!i.collapseEmptyDivs), googletag.pubads().collapseEmptyDivs(!!i.collapseEmptyDivs)), i.enableSingleRequest && (Object(o.a)("Single Request Mode = enabled"), googletag.pubads().enableSingleRequest()), googletag.enableServices(), googletag.pubads().addEventListener("slotRenderEnded", function (t) { o.c && t.isEmpty && console.warn("EMPTY Ad Slot (unfilled):", t.slot.getSlotElementId()) }) }) } });