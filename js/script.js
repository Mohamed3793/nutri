function _typeof3(t)
{
	return (_typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t)
	{
		return typeof t
	} : function(t)
	{
		return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
	})(t)
}! function(t)
{
	var e = {};

	function i(n)
	{
		if (e[n]) return e[n].exports;
		var r = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
	}
	i.m = t, i.c = e, i.d = function(t, e, n)
	{
		i.o(t, e) || Object.defineProperty(t, e,
		{
			enumerable: !0,
			get: n
		})
	}, i.r = function(t)
	{
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag,
		{
			value: "Module"
		}), Object.defineProperty(t, "__esModule",
		{
			value: !0
		})
	}, i.t = function(t, e)
	{
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == _typeof3(t) && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default",
			{
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var r in t) i.d(n, r, function(e)
			{
				return t[e]
			}.bind(null, r));
		return n
	}, i.n = function(t)
	{
		var e = t && t.__esModule ? function()
		{
			return t.default
		} : function()
		{
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e)
	{
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "/", i(i.s = 9)
}(
{
	9: function(t, e, i)
	{
		t.exports = i("E/LR")
	},
	DuwC: function DuwC(module, exports, __webpack_require__)
	{
		(function(global)
		{
			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, require, require, e;

			function _typeof2(t)
			{
				return (_typeof2 = "function" == typeof Symbol && "symbol" == _typeof3(Symbol.iterator) ? function(t)
				{
					return _typeof3(t)
				} : function(t)
				{
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof3(t)
				})(t)
			}
			e = function e()
			{
				var define, module, exports;
				return function t(e, i, n)
				{
					function r(o, a)
					{
						if (!i[o])
						{
							if (!e[o])
							{
								if (!a && "function" == typeof require && require) return require(o, !0);
								if (s) return s(o, !0);
								var l = new Error("Cannot find module '" + o + "'");
								throw l.code = "MODULE_NOT_FOUND", l
							}
							var c = i[o] = {
								exports: {}
							};
							e[o][0].call(c.exports, function(t)
							{
								return r(e[o][1][t] || t)
							}, c, c.exports, t, e, i, n)
						}
						return i[o].exports
					}
					for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
					return r
				}(
				{
					1: [function(t, e, i)
						{
							"use strict";
							var n = t("../src/store-engine"),
								r = t("../storages/all"),
								s = [t("../plugins/json2")];
							e.exports = n.createStore(r, s)
					},
						{
							"../plugins/json2": 2,
							"../src/store-engine": 4,
							"../storages/all": 6
					}],
					2: [function(t, e, i)
						{
							"use strict";
							e.exports = function()
							{
								return t("./lib/json2"), {}
							}
					},
						{
							"./lib/json2": 3
					}],
					3: [function(require, module, exports)
						{
							"use strict";
							var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(t)
							{
								return _typeof2(t)
							} : function(t)
							{
								return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t)
							};
							"object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}),
							function()
							{
								function f(t)
								{
									return t < 10 ? "0" + t : t
								}

								function this_value()
								{
									return this.valueOf()
								}

								function quote(t)
								{
									return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function(t)
									{
										var e = meta[t];
										return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0)
												.toString(16))
											.slice(-4)
									}) + '"' : '"' + t + '"'
								}

								function str(t, e)
								{
									var i, n, r, s, o, a = gap,
										l = e[t];
									switch (l && "object" === (void 0 === l ? "undefined" : _typeof(l)) && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), void 0 === l ? "undefined" : _typeof(l))
									{
										case "string":
											return quote(l);
										case "number":
											return isFinite(l) ? String(l) : "null";
										case "boolean":
										case "null":
											return String(l);
										case "object":
											if (!l) return "null";
											if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l))
											{
												for (s = l.length, i = 0; i < s; i += 1) o[i] = str(i, l) || "null";
												return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]", gap = a, r
											}
											if (rep && "object" === (void 0 === rep ? "undefined" : _typeof(rep)))
												for (s = rep.length, i = 0; i < s; i += 1) "string" == typeof rep[i] && (r = str(n = rep[i], l)) && o.push(quote(n) + (gap ? ": " : ":") + r);
											else
												for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (r = str(n, l)) && o.push(quote(n) + (gap ? ": " : ":") + r);
											return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}", gap = a, r
									}
								}
								var rx_one = /^[\],:{}\s]*$/,
									rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
									rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
									rx_four = /(?:^|:|,)(?:\s*\[)+/g,
									rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
									rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
									gap, indent, meta, rep;
								"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function()
								{
									return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
								}, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = {
									"\b": "\\b",
									"\t": "\\t",
									"\n": "\\n",
									"\f": "\\f",
									"\r": "\\r",
									'"': '\\"',
									"\\": "\\\\"
								}, JSON.stringify = function(t, e, i)
								{
									var n;
									if (gap = "", indent = "", "number" == typeof i)
										for (n = 0; n < i; n += 1) indent += " ";
									else "string" == typeof i && (indent = i);
									if (rep = e, e && "function" != typeof e && ("object" !== (void 0 === e ? "undefined" : _typeof(e)) || "number" != typeof e.length)) throw new Error("JSON.stringify");
									return str("",
									{
										"": t
									})
								}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver)
								{
									function walk(t, e)
									{
										var i, n, r = t[e];
										if (r && "object" === (void 0 === r ? "undefined" : _typeof(r)))
											for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (void 0 !== (n = walk(r, i)) ? r[i] = n : delete r[i]);
										return reviver.call(t, e, r)
									}
									var j;
									if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(t)
										{
											return "\\u" + ("0000" + t.charCodeAt(0)
													.toString(16))
												.slice(-4)
										})), rx_one.test(text.replace(rx_two, "@")
											.replace(rx_three, "]")
											.replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk(
									{
										"": j
									}, "") : j;
									throw new SyntaxError("JSON.parse")
								})
							}()
					}, {}],
					4: [function(t, e, i)
						{
							"use strict";

							function n(t, e)
							{
								var i = a(
								{
									_seenPlugins: [],
									_namespacePrefix: "",
									_namespaceRegexp: null,
									_legalNamespace: /^[a-zA-Z0-9_\-]+$/,
									_storage: function()
									{
										if (!this.enabled) throw new Error("store.js: No supported storage has been added! Add one (e.g store.addStorage(require('store/storages/cookieStorage')) or use a build with more built-in storages (e.g https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)");
										return this._storage.resolved
									},
									_testStorage: function(t)
									{
										try
										{
											var e = "__storejs__test__";
											t.write(e, e);
											var i = t.read(e) === e;
											return t.remove(e), i
										}
										catch (t)
										{
											return !1
										}
									},
									_assignPluginFnProp: function(t, e)
									{
										var i = this[e];
										this[e] = function()
										{
											function e()
											{
												if (i)
												{
													var t = i.apply(r, e.args);
													return delete e.args, t
												}
											}
											var n = Array.prototype.slice.call(arguments, 0),
												r = this,
												s = [e].concat(n);
											return e.args = n, t.apply(r, s)
										}
									},
									_serialize: function(t)
									{
										return JSON.stringify(t)
									},
									_deserialize: function(t, e)
									{
										if (!t) return e;
										var i = "";
										try
										{
											i = JSON.parse(t)
										}
										catch (e)
										{
											i = t
										}
										return void 0 !== i ? i : e
									}
								}, d);
								return o(t, function(t)
								{
									i.addStorage(t)
								}), o(e, function(t)
								{
									i.addPlugin(t)
								}), i
							}
							var r = t("./util"),
								s = r.pluck,
								o = r.each,
								a = r.create,
								l = r.isList,
								c = r.isFunction,
								u = r.isObject;
							e.exports = {
								createStore: n
							};
							var d = {
								version: "2.0.3",
								enabled: !1,
								storage: null,
								addStorage: function(t)
								{
									this.enabled || this._testStorage(t) && (this._storage.resolved = t, this.enabled = !0, this.storage = t.name)
								},
								addPlugin: function(t)
								{
									var e = this;
									if (l(t)) o(t, function(t)
									{
										e.addPlugin(t)
									});
									else if (!s(this._seenPlugins, function(e)
										{
											return t === e
										}))
									{
										if (this._seenPlugins.push(t), !c(t)) throw new Error("Plugins must be function values that return objects");
										var i = t.call(this);
										if (!u(i)) throw new Error("Plugins must return an object of function properties");
										o(i, function(i, n)
										{
											if (!c(i)) throw new Error("Bad plugin property: " + n + " from plugin " + t.name + ". Plugins should only return functions.");
											e._assignPluginFnProp(i, n)
										})
									}
								},
								get: function(t, e)
								{
									var i = this._storage()
										.read(this._namespacePrefix + t);
									return this._deserialize(i, e)
								},
								set: function(t, e)
								{
									return void 0 === e ? this.remove(t) : (this._storage()
										.write(this._namespacePrefix + t, this._serialize(e)), e)
								},
								remove: function(t)
								{
									this._storage()
										.remove(this._namespacePrefix + t)
								},
								each: function(t)
								{
									var e = this;
									this._storage()
										.each(function(i, n)
										{
											t(e._deserialize(i), n.replace(e._namespaceRegexp, ""))
										})
								},
								clearAll: function()
								{
									this._storage()
										.clearAll()
								},
								hasNamespace: function(t)
								{
									return this._namespacePrefix == "__storejs_" + t + "_"
								},
								namespace: function(t)
								{
									if (!this._legalNamespace.test(t)) throw new Error("store.js namespaces can only have alhpanumerics + underscores and dashes");
									var e = "__storejs_" + t + "_";
									return a(this,
									{
										_namespacePrefix: e,
										_namespaceRegexp: e ? new RegExp("^" + e) : null
									})
								},
								createStore: function(t, e)
								{
									return n(t, e)
								}
							}
					},
						{
							"./util": 5
					}],
					5: [function(t, e, i)
						{
							(function(t)
							{
								"use strict";

								function i(t, e)
								{
									return Array.prototype.slice.call(t, e || 0)
								}

								function n(t, e)
								{
									r(t, function(t, i)
									{
										return e(t, i), !1
									})
								}

								function r(t, e)
								{
									if (s(t))
									{
										for (var i = 0; i < t.length; i++)
											if (e(t[i], i)) return t[i]
									}
									else
										for (var n in t)
											if (t.hasOwnProperty(n) && e(t[n], n)) return t[n]
								}

								function s(t)
								{
									return null != t && "function" != typeof t && "number" == typeof t.length
								}
								var o = Object.assign ? Object.assign : function(t, e, i, r)
									{
										for (var s = 1; s < arguments.length; s++) n(Object(arguments[s]), function(e, i)
										{
											t[i] = e
										});
										return t
									},
									a = function()
									{
										if (Object.create) return function(t, e, n, r)
										{
											var s = i(arguments, 1);
											return o.apply(this, [Object.create(t)].concat(s))
										};
										var t = function() {};
										return function(e, n, r, s)
										{
											var a = i(arguments, 1);
											return t.prototype = e, o.apply(this, [new t].concat(a))
										}
									}(),
									l = String.prototype.trim ? function(t)
									{
										return String.prototype.trim.call(t)
									} : function(t)
									{
										return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
									},
									c = "undefined" != typeof window ? window : t;
								e.exports = {
									assign: o,
									create: a,
									trim: l,
									bind: function(t, e)
									{
										return function()
										{
											return e.apply(t, Array.prototype.slice.call(arguments, 0))
										}
									},
									slice: i,
									each: n,
									map: function(t, e)
									{
										var i = s(t) ? [] : {};
										return r(t, function(t, n)
										{
											return i[n] = e(t, n), !1
										}), i
									},
									pluck: r,
									isList: s,
									isFunction: function(t)
									{
										return t && "[object Function]" === {}.toString.call(t)
									},
									isObject: function(t)
									{
										return t && "[object Object]" === {}.toString.call(t)
									},
									Global: c
								}
							})
							.call(this, void 0 !== global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {}],
					6: [function(t, e, i)
						{
							"use strict";
							e.exports = {
								localStorage: t("./localStorage"),
								"oldFF-globalStorage": t("./oldFF-globalStorage"),
								"oldIE-userDataStorage": t("./oldIE-userDataStorage"),
								cookieStorage: t("./cookieStorage"),
								sessionStorage: t("./sessionStorage"),
								memoryStorage: t("./memoryStorage")
							}
					},
						{
							"./cookieStorage": 7,
							"./localStorage": 8,
							"./memoryStorage": 9,
							"./oldFF-globalStorage": 10,
							"./oldIE-userDataStorage": 11,
							"./sessionStorage": 12
					}],
					7: [function(t, e, i)
						{
							"use strict";

							function n(t)
							{
								for (var e = c.cookie.split(/; ?/g), i = e.length - 1; i >= 0; i--)
									if (l(e[i]))
									{
										var n = e[i].split("="),
											r = unescape(n[0]);
										t(unescape(n[1]), r)
									}
							}

							function r(t)
							{
								t && s(t) && (c.cookie = escape(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
							}

							function s(t)
							{
								return new RegExp("(?:^|;\\s*)" + escape(t)
										.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")
									.test(c.cookie)
							}
							var o = t("../src/util"),
								a = o.Global,
								l = o.trim;
							e.exports = {
								name: "cookieStorage",
								read: function(t)
								{
									if (!t || !s(t)) return null;
									var e = "(?:^|.*;\\s*)" + escape(t)
										.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
									return unescape(c.cookie.replace(new RegExp(e), "$1"))
								},
								write: function(t, e)
								{
									t && (c.cookie = escape(t) + "=" + escape(e) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")
								},
								each: n,
								remove: r,
								clearAll: function()
								{
									n(function(t, e)
									{
										r(e)
									})
								}
							};
							var c = a.document
					},
						{
							"../src/util": 5
					}],
					8: [function(t, e, i)
						{
							"use strict";

							function n()
							{
								return s.localStorage
							}

							function r(t)
							{
								return n()
									.getItem(t)
							}
							var s = t("../src/util")
								.Global;
							e.exports = {
								name: "localStorage",
								read: r,
								write: function(t, e)
								{
									return n()
										.setItem(t, e)
								},
								each: function(t)
								{
									for (var e = n()
											.length - 1; e >= 0; e--)
									{
										var i = n()
											.key(e);
										t(r(i), i)
									}
								},
								remove: function(t)
								{
									return n()
										.removeItem(t)
								},
								clearAll: function()
								{
									return n()
										.clear()
								}
							}
					},
						{
							"../src/util": 5
					}],
					9: [function(t, e, i)
						{
							"use strict";
							e.exports = {
								name: "memoryStorage",
								read: function(t)
								{
									return n[t]
								},
								write: function(t, e)
								{
									n[t] = e
								},
								each: function(t)
								{
									for (var e in n) n.hasOwnProperty(e) && t(n[e], e)
								},
								remove: function(t)
								{
									delete n[t]
								},
								clearAll: function(t)
								{
									n = {}
								}
							};
							var n = {}
					}, {}],
					10: [function(t, e, i)
						{
							"use strict";

							function n(t)
							{
								for (var e = s.length - 1; e >= 0; e--)
								{
									var i = s.key(e);
									t(s[i], i)
								}
							}
							var r = t("../src/util")
								.Global;
							e.exports = {
								name: "oldFF-globalStorage",
								read: function(t)
								{
									return s[t]
								},
								write: function(t, e)
								{
									s[t] = e
								},
								each: n,
								remove: function(t)
								{
									return s.removeItem(t)
								},
								clearAll: function()
								{
									n(function(t, e)
									{
										delete s[t]
									})
								}
							};
							var s = r.globalStorage
					},
						{
							"../src/util": 5
					}],
					11: [function(t, e, i)
						{
							"use strict";

							function n(t)
							{
								return t.replace(/^d/, "___$&")
									.replace(c, "___")
							}
							var r = t("../src/util")
								.Global;
							e.exports = {
								name: "oldIE-userDataStorage",
								write: function(t, e)
								{
									if (!l)
									{
										var i = n(t);
										a(function(t)
										{
											t.setAttribute(i, e), t.save(s)
										})
									}
								},
								read: function(t)
								{
									if (!l)
									{
										var e = n(t),
											i = null;
										return a(function(t)
										{
											i = t.getAttribute(e)
										}), i
									}
								},
								each: function(t)
								{
									a(function(e)
									{
										for (var i = e.XMLDocument.documentElement.attributes, n = i.length - 1; n >= 0; n--)
										{
											var r = i[n];
											t(e.getAttribute(r.name), r.name)
										}
									})
								},
								remove: function(t)
								{
									var e = n(t);
									a(function(t)
									{
										t.removeAttribute(e), t.save(s)
									})
								},
								clearAll: function()
								{
									a(function(t)
									{
										var e = t.XMLDocument.documentElement.attributes;
										t.load(s);
										for (var i = e.length - 1; i >= 0; i--) t.removeAttribute(e[i].name);
										t.save(s)
									})
								}
							};
							var s = "storejs",
								o = r.document,
								a = function()
								{
									if (!o || !o.documentElement || !o.documentElement.addBehavior) return null;
									var t, e, i, n = "script";
									try
									{
										(e = new ActiveXObject("htmlfile"))
										.open(), e.write("<" + n + ">document.w=window</" + n + '><iframe src="/favicon.ico"></iframe>'), e.close(), t = e.w.frames[0].document, i = t.createElement("div")
									}
									catch (e)
									{
										i = o.createElement("div"), t = o.body
									}
									return function(e)
									{
										var n = [].slice.call(arguments, 0);
										n.unshift(i), t.appendChild(i), i.addBehavior("#default#userData"), i.load(s), e.apply(this, n), t.removeChild(i)
									}
								}(),
								l = (r.navigator ? r.navigator.userAgent : "")
								.match(/ (MSIE 8|MSIE 9|MSIE 10)\./),
								c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
					},
						{
							"../src/util": 5
					}],
					12: [function(t, e, i)
						{
							"use strict";

							function n()
							{
								return s.sessionStorage
							}

							function r(t)
							{
								return n()
									.getItem(t)
							}
							var s = t("../src/util")
								.Global;
							e.exports = {
								name: "sessionStorage",
								read: r,
								write: function(t, e)
								{
									return n()
										.setItem(t, e)
								},
								each: function(t)
								{
									for (var e = n()
											.length - 1; e >= 0; e--)
									{
										var i = n()
											.key(e);
										t(r(i), i)
									}
								},
								remove: function(t)
								{
									return n()
										.removeItem(t)
								},
								clearAll: function()
								{
									return n()
										.clear()
								}
							}
					},
						{
							"../src/util": 5
					}]
				}, {}, [1])(1)
			}, "object" == _typeof2(exports) && void 0 !== module ? module.exports = e() : (__WEBPACK_AMD_DEFINE_ARRAY__ = [], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = e) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
		})
		.call(this, __webpack_require__("yLpj"))
	},
	"E/LR": function(t, e, i)
	{
		window.store = i("DuwC")
	},
	yLpj: function(t, e)
	{
		var i;
		i = function()
		{
			return this
		}();
		try
		{
			i = i || new Function("return this")()
		}
		catch (t)
		{
			"object" == ("undefined" == typeof window ? "undefined" : _typeof3(window)) && (i = window)
		}
		t.exports = i
	}
}),
function(t, e)
{
	void 0 === t && (t = window), "function" == typeof define && define.amd ? define([], function()
	{
		return t.svg4everybody = e()
	}) : "object" == ("undefined" == typeof module ? "undefined" : _typeof3(module)) && module.exports ? module.exports = e() : t.svg4everybody = e()
}(void 0, function()
{
	function t(t, e, i)
	{
		if (i)
		{
			var n = document.createDocumentFragment(),
				r = !e.hasAttribute("viewBox") && i.getAttribute("viewBox");
			r && e.setAttribute("viewBox", r);
			for (var s = i.cloneNode(!0); s.childNodes.length;) n.appendChild(s.firstChild);
			t.appendChild(n)
		}
	}

	function e(e)
	{
		e.onreadystatechange = function()
		{
			if (4 === e.readyState)
			{
				var i = e._cachedDocument;
				i || ((i = e._cachedDocument = document.implementation.createHTMLDocument(""))
						.body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0)
					.map(function(n)
					{
						var r = e._cachedTarget[n.id];
						r || (r = e._cachedTarget[n.id] = i.getElementById(n.id)), t(n.parent, n.svg, r)
					})
			}
		}, e.onreadystatechange()
	}
	return function(i)
	{
		var n, r = Object(i),
			s = window.top !== window.self;
		n = "polyfill" in r ? r.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && s;
		var o = {},
			a = window.requestAnimationFrame || setTimeout,
			l = document.getElementsByTagName("use"),
			c = 0;
		n && function i()
		{
			for (var s = 0; s < l.length;)
			{
				var u = l[s],
					d = u.parentNode,
					h = function(t)
					{
						for (var e = d;
							"svg" !== e.nodeName.toLowerCase() && (e = e.parentNode););
						return e
					}(),
					f = u.getAttribute("xlink:href") || u.getAttribute("href");
				if (!f && r.attributeName && (f = u.getAttribute(r.attributeName)), h && f)
				{
					if (n)
						if (!r.validate || r.validate(f, h, u))
						{
							d.removeChild(u);
							var p = f.split("#"),
								m = p.shift(),
								g = p.join("#");
							if (m.length)
							{
								var v = o[m];
								v || ((v = o[m] = new XMLHttpRequest)
									.open("GET", m), v.send(), v._embeds = []), v._embeds.push(
								{
									parent: d,
									svg: h,
									id: g
								}), e(v)
							}
							else t(d, h, document.getElementById(g))
						}
					else ++s, ++c
				}
				else ++s
			}(!l.length || l.length - c > 0) && a(i, 67)
		}()
	}
}),
function(t, e)
{
	"use strict";
	"object" == ("undefined" == typeof module ? "undefined" : _typeof3(module)) && "object" == _typeof3(module.exports) ? module.exports = t.document ? e(t, !0) : function(t)
	{
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : void 0, function(t, e)
{
	"use strict";

	function i(t, e)
	{
		var i = (e = e || Y)
			.createElement("script");
		i.text = t, e.head.appendChild(i)
			.parentNode.removeChild(i)
	}

	function n(t)
	{
		var e = !!t && "length" in t && t.length,
			i = at.type(t);
		return "function" !== i && !at.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}

	function r(t, e)
	{
		return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
	}

	function s(t, e, i)
	{
		return at.isFunction(e) ? at.grep(t, function(t, n)
		{
			return !!e.call(t, n, t) !== i
		}) : e.nodeType ? at.grep(t, function(t)
		{
			return t === e !== i
		}) : "string" != typeof e ? at.grep(t, function(t)
		{
			return tt.call(e, t) > -1 !== i
		}) : vt.test(e) ? at.filter(e, t, i) : (e = at.filter(e, t), at.grep(t, function(t)
		{
			return tt.call(e, t) > -1 !== i && 1 === t.nodeType
		}))
	}

	function o(t, e)
	{
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}

	function a(t)
	{
		return t
	}

	function l(t)
	{
		throw t
	}

	function c(t, e, i, n)
	{
		var r;
		try
		{
			t && at.isFunction(r = t.promise) ? r.call(t)
				.done(e)
				.fail(i) : t && at.isFunction(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
		}
		catch (t)
		{
			i.apply(void 0, [t])
		}
	}

	function u()
	{
		Y.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), at.ready()
	}

	function d()
	{
		this.expando = at.expando + d.uid++
	}

	function h(t, e, i)
	{
		var n;
		if (void 0 === i && 1 === t.nodeType)
			if (n = "data-" + e.replace(Et, "-$&")
				.toLowerCase(), "string" == typeof(i = t.getAttribute(n)))
			{
				try
				{
					i = function(t)
					{
						return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ft.test(t) ? JSON.parse(t) : t)
					}(i)
				}
				catch (t) {}
				Pt.set(t, e, i)
			}
		else i = void 0;
		return i
	}

	function f(t, e, i, n)
	{
		var r, s = 1,
			o = 20,
			a = n ? function()
			{
				return n.cur()
			} : function()
			{
				return at.css(t, e, "")
			},
			l = a(),
			c = i && i[3] || (at.cssNumber[e] ? "" : "px"),
			u = (at.cssNumber[e] || "px" !== c && +l) && Dt.exec(at.css(t, e));
		if (u && u[3] !== c)
		{
			c = c || u[3], i = i || [], u = +l || 1;
			do {
				u /= s = s || ".5", at.style(t, e, u + c)
			} while (s !== (s = a() / l) && 1 !== s && --o)
		}
		return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
	}

	function p(t)
	{
		var e, i = t.ownerDocument,
			n = t.nodeName,
			r = Rt[n];
		return r || (e = i.body.appendChild(i.createElement(n)), r = at.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Rt[n] = r, r)
	}

	function m(t, e)
	{
		for (var i, n, r = [], s = 0, o = t.length; s < o; s++)(n = t[s])
			.style && (i = n.style.display, e ? ("none" === i && (r[s] = At.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && Mt(n) && (r[s] = p(n))) : "none" !== i && (r[s] = "none", At.set(n, "display", i)));
		for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
		return t
	}

	function g(t, e)
	{
		var i;
		return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && r(t, e) ? at.merge([t], i) : i
	}

	function v(t, e)
	{
		for (var i = 0, n = t.length; i < n; i++) At.set(t[i], "globalEval", !e || At.get(e[i], "globalEval"))
	}

	function y(t, e, i, n, r)
	{
		for (var s, o, a, l, c, u, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
			if ((s = t[f]) || 0 === s)
				if ("object" === at.type(s)) at.merge(h, s.nodeType ? [s] : s);
				else if (It.test(s))
		{
			for (o = o || d.appendChild(e.createElement("div")), a = (Lt.exec(s) || ["", ""])[1].toLowerCase(), l = qt[a] || qt._default, o.innerHTML = l[1] + at.htmlPrefilter(s) + l[2], u = l[0]; u--;) o = o.lastChild;
			at.merge(h, o.childNodes), (o = d.firstChild)
				.textContent = ""
		}
		else h.push(e.createTextNode(s));
		for (d.textContent = "", f = 0; s = h[f++];)
			if (n && at.inArray(s, n) > -1) r && r.push(s);
			else if (c = at.contains(s.ownerDocument, s), o = g(d.appendChild(s), "script"), c && v(o), i)
			for (u = 0; s = o[u++];) Bt.test(s.type || "") && i.push(s);
		return d
	}

	function _()
	{
		return !0
	}

	function x()
	{
		return !1
	}

	function b()
	{
		try
		{
			return Y.activeElement
		}
		catch (t) {}
	}

	function w(t, e, i, n, r, s)
	{
		var o, a;
		if ("object" == _typeof3(e))
		{
			for (a in "string" != typeof i && (n = n || i, i = void 0), e) w(t, a, i, n, e[a], s);
			return t
		}
		if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = x;
		else if (!r) return t;
		return 1 === s && (o = r, (r = function(t)
			{
				return at()
					.off(t), o.apply(this, arguments)
			})
			.guid = o.guid || (o.guid = at.guid++)), t.each(function()
		{
			at.event.add(this, e, r, n, i)
		})
	}

	function T(t, e)
	{
		return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") && at(">tbody", t)[0] || t
	}

	function k(t)
	{
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function C(t)
	{
		var e = Yt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function S(t, e)
	{
		var i, n, r, s, o, a, l, c;
		if (1 === e.nodeType)
		{
			if (At.hasData(t) && (s = At.access(t), o = At.set(e, s), c = s.events))
				for (r in delete o.handle, o.events = {}, c)
					for (i = 0, n = c[r].length; i < n; i++) at.event.add(e, r, c[r][i]);
			Pt.hasData(t) && (a = Pt.access(t), l = at.extend({}, a), Pt.set(e, l))
		}
	}

	function A(t, e)
	{
		var i = e.nodeName.toLowerCase();
		"input" === i && Nt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
	}

	function P(t, e, n, r)
	{
		e = J.apply([], e);
		var s, o, a, l, c, u, d = 0,
			h = t.length,
			f = h - 1,
			p = e[0],
			m = at.isFunction(p);
		if (m || h > 1 && "string" == typeof p && !ot.checkClone && Gt.test(p)) return t.each(function(i)
		{
			var s = t.eq(i);
			m && (e[0] = p.call(this, i, s.html())), P(s, e, n, r)
		});
		if (h && (o = (s = y(e, t[0].ownerDocument, !1, t, r))
				.firstChild, 1 === s.childNodes.length && (s = o), o || r))
		{
			for (l = (a = at.map(g(s, "script"), k))
				.length; d < h; d++) c = s, d !== f && (c = at.clone(c, !0, !0), l && at.merge(a, g(c, "script"))), n.call(t[d], c, d);
			if (l)
				for (u = a[a.length - 1].ownerDocument, at.map(a, C), d = 0; d < l; d++) c = a[d], Bt.test(c.type || "") && !At.access(c, "globalEval") && at.contains(u, c) && (c.src ? at._evalUrl && at._evalUrl(c.src) : i(c.textContent.replace(Zt, ""), u))
		}
		return t
	}

	function F(t, e, i)
	{
		for (var n, r = e ? at.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || at.cleanData(g(n)), n.parentNode && (i && at.contains(n.ownerDocument, n) && v(g(n, "script")), n.parentNode.removeChild(n));
		return t
	}

	function E(t, e, i)
	{
		var n, r, s, o, a = t.style;
		return (i = i || Kt(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || at.contains(t.ownerDocument, t) || (o = at.style(t, e)), !ot.pixelMarginRight() && Jt.test(o) && Qt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
	}

	function $(t, e)
	{
		return {
			get: function()
			{
				if (!t()) return (this.get = e)
					.apply(this, arguments);
				delete this.get
			}
		}
	}

	function D(t)
	{
		var e = at.cssProps[t];
		return e || (e = at.cssProps[t] = function(t)
		{
			if (t in se) return t;
			for (var e = t[0].toUpperCase() + t.slice(1), i = re.length; i--;)
				if ((t = re[i] + e) in se) return t
		}(t) || t), e
	}

	function O(t, e, i)
	{
		var n = Dt.exec(e);
		return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
	}

	function M(t, e, i, n, r)
	{
		var s, o = 0;
		for (s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === i && (o += at.css(t, i + Ot[s], !0, r)), n ? ("content" === i && (o -= at.css(t, "padding" + Ot[s], !0, r)), "margin" !== i && (o -= at.css(t, "border" + Ot[s] + "Width", !0, r))) : (o += at.css(t, "padding" + Ot[s], !0, r), "padding" !== i && (o += at.css(t, "border" + Ot[s] + "Width", !0, r)));
		return o
	}

	function j(t, e, i)
	{
		var n, r = Kt(t),
			s = E(t, e, r),
			o = "border-box" === at.css(t, "boxSizing", !1, r);
		return Jt.test(s) ? s : (n = o && (ot.boxSizingReliable() || s === t.style[e]), "auto" === s && (s = t["offset" + e[0].toUpperCase() + e.slice(1)]), (s = parseFloat(s) || 0) + M(t, e, i || (o ? "border" : "content"), n, r) + "px")
	}

	function R(t, e, i, n, r)
	{
		return new R.prototype.init(t, e, i, n, r)
	}

	function N()
	{
		ae && (!1 === Y.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(N) : t.setTimeout(N, at.fx.interval), at.fx.tick())
	}

	function L()
	{
		return t.setTimeout(function()
		{
			oe = void 0
		}), oe = at.now()
	}

	function B(t, e)
	{
		var i, n = 0,
			r = {
				height: t
			};
		for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = Ot[n])] = r["padding" + i] = t;
		return e && (r.opacity = r.width = t), r
	}

	function q(t, e, i)
	{
		for (var n, r = (I.tweeners[e] || [])
				.concat(I.tweeners["*"]), s = 0, o = r.length; s < o; s++)
			if (n = r[s].call(i, e, t)) return n
	}

	function I(t, e, i)
	{
		var n, r, s = 0,
			o = I.prefilters.length,
			a = at.Deferred()
			.always(function()
			{
				delete l.elem
			}),
			l = function()
			{
				if (r) return !1;
				for (var e = oe || L(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++) c.tweens[s].run(n);
				return a.notifyWith(t, [c, n, i]), n < 1 && o ? i : (o || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
			},
			c = a.promise(
			{
				elem: t,
				props: at.extend({}, e),
				opts: at.extend(!0,
				{
					specialEasing: {},
					easing: at.easing._default
				}, i),
				originalProperties: e,
				originalOptions: i,
				startTime: oe || L(),
				duration: i.duration,
				tweens: [],
				createTween: function(e, i)
				{
					var n = at.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function(e)
				{
					var i = 0,
						n = e ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; i < n; i++) c.tweens[i].run(1);
					return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
				}
			}),
			u = c.props;
		for (function(t, e)
			{
				var i, n, r, s, o;
				for (i in t)
					if (r = e[n = at.camelCase(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = at.cssHooks[n]) && "expand" in o)
						for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r);
					else e[n] = r
			}(u, c.opts.specialEasing); s < o; s++)
			if (n = I.prefilters[s].call(c, t, u, c.opts)) return at.isFunction(n.stop) && (at._queueHooks(c.elem, c.opts.queue)
				.stop = at.proxy(n.stop, n)), n;
		return at.map(u, q, c), at.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress)
			.done(c.opts.done, c.opts.complete)
			.fail(c.opts.fail)
			.always(c.opts.always), at.fx.timer(at.extend(l,
			{
				elem: t,
				anim: c,
				queue: c.opts.queue
			})), c
	}

	function z(t)
	{
		return (t.match(wt) || [])
			.join(" ")
	}

	function H(t)
	{
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function X(t, e, i, n)
	{
		var r;
		if (Array.isArray(e)) at.each(e, function(e, r)
		{
			i || _e.test(t) ? n(t, r) : X(t + "[" + ("object" == _typeof3(r) && null != r ? e : "") + "]", r, i, n)
		});
		else if (i || "object" !== at.type(e)) n(t, e);
		else
			for (r in e) X(t + "[" + r + "]", e[r], i, n)
	}

	function W(t)
	{
		return function(e, i)
		{
			"string" != typeof e && (i = e, e = "*");
			var n, r = 0,
				s = e.toLowerCase()
				.match(wt) || [];
			if (at.isFunction(i))
				for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || [])
						.unshift(i)) : (t[n] = t[n] || [])
					.push(i)
		}
	}

	function U(t, e, i, n)
	{
		function r(a)
		{
			var l;
			return s[a] = !0, at.each(t[a] || [], function(t, a)
			{
				var c = a(e, i, n);
				return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		var s = {},
			o = t === Ee;
		return r(e.dataTypes[0]) || !s["*"] && r("*")
	}

	function V(t, e)
	{
		var i, n, r = at.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
		return n && at.extend(!0, t, n), t
	}
	var G = [],
		Y = t.document,
		Z = Object.getPrototypeOf,
		Q = G.slice,
		J = G.concat,
		K = G.push,
		tt = G.indexOf,
		et = {},
		it = et.toString,
		nt = et.hasOwnProperty,
		rt = nt.toString,
		st = rt.call(Object),
		ot = {},
		at = function t(e, i)
		{
			return new t.fn.init(e, i)
		},
		lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ct = /^-ms-/,
		ut = /-([a-z])/g,
		dt = function(t, e)
		{
			return e.toUpperCase()
		};
	at.fn = at.prototype = {
		jquery: "3.2.1",
		constructor: at,
		length: 0,
		toArray: function()
		{
			return Q.call(this)
		},
		get: function(t)
		{
			return null == t ? Q.call(this) : t < 0 ? this[t + this.length] : this[t]
		},
		pushStack: function(t)
		{
			var e = at.merge(this.constructor(), t);
			return e.prevObject = this, e
		},
		each: function(t)
		{
			return at.each(this, t)
		},
		map: function(t)
		{
			return this.pushStack(at.map(this, function(e, i)
			{
				return t.call(e, i, e)
			}))
		},
		slice: function()
		{
			return this.pushStack(Q.apply(this, arguments))
		},
		first: function()
		{
			return this.eq(0)
		},
		last: function()
		{
			return this.eq(-1)
		},
		eq: function(t)
		{
			var e = this.length,
				i = +t + (t < 0 ? e : 0);
			return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
		},
		end: function()
		{
			return this.prevObject || this.constructor()
		},
		push: K,
		sort: G.sort,
		splice: G.splice
	}, at.extend = at.fn.extend = function()
	{
		var t, e, i, n, r, s, o = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == _typeof3(o) || at.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
			if (null != (t = arguments[a]))
				for (e in t) i = o[e], o !== (n = t[e]) && (c && n && (at.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && at.isPlainObject(i) ? i : {}, o[e] = at.extend(c, s, n)) : void 0 !== n && (o[e] = n));
		return o
	}, at.extend(
	{
		expando: "jQuery" + ("3.2.1" + Math.random())
			.replace(/\D/g, ""),
		isReady: !0,
		error: function(t)
		{
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t)
		{
			return "function" === at.type(t)
		},
		isWindow: function(t)
		{
			return null != t && t === t.window
		},
		isNumeric: function(t)
		{
			var e = at.type(t);
			return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
		},
		isPlainObject: function(t)
		{
			var e, i;
			return !(!t || "[object Object]" !== it.call(t) || (e = Z(t)) && ("function" != typeof(i = nt.call(e, "constructor") && e.constructor) || rt.call(i) !== st))
		},
		isEmptyObject: function(t)
		{
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function(t)
		{
			return null == t ? t + "" : "object" == _typeof3(t) || "function" == typeof t ? et[it.call(t)] || "object" : _typeof3(t)
		},
		globalEval: function(t)
		{
			i(t)
		},
		camelCase: function(t)
		{
			return t.replace(ct, "ms-")
				.replace(ut, dt)
		},
		each: function(t, e)
		{
			var i, r = 0;
			if (n(t))
				for (i = t.length; r < i && !1 !== e.call(t[r], r, t[r]); r++);
			else
				for (r in t)
					if (!1 === e.call(t[r], r, t[r])) break;
			return t
		},
		trim: function(t)
		{
			return null == t ? "" : (t + "")
				.replace(lt, "")
		},
		makeArray: function(t, e)
		{
			var i = e || [];
			return null != t && (n(Object(t)) ? at.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
		},
		inArray: function(t, e, i)
		{
			return null == e ? -1 : tt.call(e, t, i)
		},
		merge: function(t, e)
		{
			for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
			return t.length = r, t
		},
		grep: function(t, e, i)
		{
			for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
			return n
		},
		map: function(t, e, i)
		{
			var r, s, o = 0,
				a = [];
			if (n(t))
				for (r = t.length; o < r; o++) null != (s = e(t[o], o, i)) && a.push(s);
			else
				for (o in t) null != (s = e(t[o], o, i)) && a.push(s);
			return J.apply([], a)
		},
		guid: 1,
		proxy: function(t, e)
		{
			var i, n, r;
			if ("string" == typeof e && (i = t[e], e = t, t = i), at.isFunction(t)) return n = Q.call(arguments, 2), (r = function()
				{
					return t.apply(e || this, n.concat(Q.call(arguments)))
				})
				.guid = t.guid = t.guid || at.guid++, r
		},
		now: Date.now,
		support: ot
	}), "function" == typeof Symbol && (at.fn[Symbol.iterator] = G[Symbol.iterator]), at.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e)
	{
		et["[object " + e + "]"] = e.toLowerCase()
	});
	var ht = function(t)
	{
		function e(t, e, i, n)
		{
			var r, s, o, a, l, c, u, h = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (i = i || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return i;
			if (!n && ((e ? e.ownerDocument || e : B) !== $ && E(e), e = e || $, O))
			{
				if (11 !== p && (l = mt.exec(t)))
					if (r = l[1])
					{
						if (9 === p)
						{
							if (!(o = e.getElementById(r))) return i;
							if (o.id === r) return i.push(o), i
						}
						else if (h && (o = h.getElementById(r)) && N(e, o) && o.id === r) return i.push(o), i
					}
				else
				{
					if (l[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
					if ((r = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)), i
				}
				if (x.qsa && !X[t + " "] && (!M || !M.test(t)))
				{
					if (1 !== p) h = e, u = t;
					else if ("object" !== e.nodeName.toLowerCase())
					{
						for ((a = e.getAttribute("id")) ? a = a.replace(_t, xt) : e.setAttribute("id", a = L), s = (c = k(t))
							.length; s--;) c[s] = "#" + a + " " + f(c[s]);
						u = c.join(","), h = gt.test(t) && d(e.parentNode) || e
					}
					if (u) try
					{
						return Z.apply(i, h.querySelectorAll(u)), i
					}
					catch (t) {}
					finally
					{
						a === L && e.removeAttribute("id")
					}
				}
			}
			return S(t.replace(st, "$1"), e, i, n)
		}

		function i()
		{
			var t = [];
			return function e(i, n)
			{
				return t.push(i + " ") > b.cacheLength && delete e[t.shift()], e[i + " "] = n
			}
		}

		function n(t)
		{
			return t[L] = !0, t
		}

		function r(t)
		{
			var e = $.createElement("fieldset");
			try
			{
				return !!t(e)
			}
			catch (t)
			{
				return !1
			}
			finally
			{
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function s(t, e)
		{
			for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
		}

		function o(t, e)
		{
			var i = e && t,
				n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === e) return -1;
			return t ? 1 : -1
		}

		function a(t)
		{
			return function(e)
			{
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function l(t)
		{
			return function(e)
			{
				var i = e.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && e.type === t
			}
		}

		function c(t)
		{
			return function(e)
			{
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && wt(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function u(t)
		{
			return n(function(e)
			{
				return e = +e, n(function(i, n)
				{
					for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
				})
			})
		}

		function d(t)
		{
			return t && void 0 !== t.getElementsByTagName && t
		}

		function h() {}

		function f(t)
		{
			for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
			return n
		}

		function p(t, e, i)
		{
			var n = e.dir,
				r = e.next,
				s = r || n,
				o = i && "parentNode" === s,
				a = I++;
			return e.first ? function(e, i, r)
			{
				for (; e = e[n];)
					if (1 === e.nodeType || o) return t(e, i, r);
				return !1
			} : function(e, i, l)
			{
				var c, u, d, h = [q, a];
				if (l)
				{
					for (; e = e[n];)
						if ((1 === e.nodeType || o) && t(e, i, l)) return !0
				}
				else
					for (; e = e[n];)
						if (1 === e.nodeType || o)
							if (u = (d = e[L] || (e[L] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[n] || e;
							else
							{
								if ((c = u[s]) && c[0] === q && c[1] === a) return h[2] = c[2];
								if (u[s] = h, h[2] = t(e, i, l)) return !0
							} return !1
			}
		}

		function m(t)
		{
			return t.length > 1 ? function(e, i, n)
			{
				for (var r = t.length; r--;)
					if (!t[r](e, i, n)) return !1;
				return !0
			} : t[0]
		}

		function g(t, e, i, n, r)
		{
			for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), c && e.push(a)));
			return o
		}

		function v(t, i, r, s, o, a)
		{
			return s && !s[L] && (s = v(s)), o && !o[L] && (o = v(o, a)), n(function(n, a, l, c)
			{
				var u, d, h, f = [],
					p = [],
					m = a.length,
					v = n || function(t, i, n)
					{
						for (var r = 0, s = i.length; r < s; r++) e(t, i[r], n);
						return n
					}(i || "*", l.nodeType ? [l] : l, []),
					y = !t || !n && i ? v : g(v, f, t, l, c),
					_ = r ? o || (n ? t : m || s) ? [] : a : y;
				if (r && r(y, _, l, c), s)
					for (u = g(_, p), s(u, [], l, c), d = u.length; d--;)(h = u[d]) && (_[p[d]] = !(y[p[d]] = h));
				if (n)
				{
					if (o || t)
					{
						if (o)
						{
							for (u = [], d = _.length; d--;)(h = _[d]) && u.push(y[d] = h);
							o(null, _ = [], u, c)
						}
						for (d = _.length; d--;)(h = _[d]) && (u = o ? J(n, h) : f[d]) > -1 && (n[u] = !(a[u] = h))
					}
				}
				else _ = g(_ === a ? _.splice(m, _.length) : _), o ? o(null, a, _, c) : Z.apply(a, _)
			})
		}

		function y(t)
		{
			for (var e, i, n, r = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = p(function(t)
				{
					return t === e
				}, o, !0), c = p(function(t)
				{
					return J(e, t) > -1
				}, o, !0), u = [function(t, i, n)
					{
						var r = !s && (n || i !== A) || ((e = i)
							.nodeType ? l(t, i, n) : c(t, i, n));
						return e = null, r
				}]; a < r; a++)
				if (i = b.relative[t[a].type]) u = [p(m(u), i)];
				else
				{
					if ((i = b.filter[t[a].type].apply(null, t[a].matches))[L])
					{
						for (n = ++a; n < r && !b.relative[t[n].type]; n++);
						return v(a > 1 && m(u), a > 1 && f(t.slice(0, a - 1)
								.concat(
								{
									value: " " === t[a - 2].type ? "*" : ""
								}))
							.replace(st, "$1"), i, a < n && y(t.slice(a, n)), n < r && y(t = t.slice(n)), n < r && f(t))
					}
					u.push(i)
				} return m(u)
		}
		var _, x, b, w, T, k, C, S, A, P, F, E, $, D, O, M, j, R, N, L = "sizzle" + 1 * new Date,
			B = t.document,
			q = 0,
			I = 0,
			z = i(),
			H = i(),
			X = i(),
			W = function(t, e)
			{
				return t === e && (F = !0), 0
			},
			U = {}.hasOwnProperty,
			V = [],
			G = V.pop,
			Y = V.push,
			Z = V.push,
			Q = V.slice,
			J = function(t, e)
			{
				for (var i = 0, n = t.length; i < n; i++)
					if (t[i] === e) return i;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			tt = "[\\x20\\t\\r\\n\\f]",
			et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
			nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
			rt = new RegExp(tt + "+", "g"),
			st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
			ot = new RegExp("^" + tt + "*," + tt + "*"),
			at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
			lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
			ct = new RegExp(nt),
			ut = new RegExp("^" + et + "$"),
			dt = {
				ID: new RegExp("^#(" + et + ")"),
				CLASS: new RegExp("^\\.(" + et + ")"),
				TAG: new RegExp("^(" + et + "|[*])"),
				ATTR: new RegExp("^" + it),
				PSEUDO: new RegExp("^" + nt),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
			},
			ht = /^(?:input|select|textarea|button)$/i,
			ft = /^h\d$/i,
			pt = /^[^{]+\{\s*\[native \w/,
			mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			gt = /[+~]/,
			vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
			yt = function(t, e, i)
			{
				var n = "0x" + e - 65536;
				return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			_t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			xt = function(t, e)
			{
				return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1)
					.toString(16) + " " : "\\" + t
			},
			bt = function()
			{
				E()
			},
			wt = p(function(t)
			{
				return !0 === t.disabled && ("form" in t || "label" in t)
			},
			{
				dir: "parentNode",
				next: "legend"
			});
		try
		{
			Z.apply(V = Q.call(B.childNodes), B.childNodes), V[B.childNodes.length].nodeType
		}
		catch (t)
		{
			Z = {
				apply: V.length ? function(t, e)
				{
					Y.apply(t, Q.call(e))
				} : function(t, e)
				{
					for (var i = t.length, n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}
		for (_ in x = e.support = {}, T = e.isXML = function(t)
			{
				var e = t && (t.ownerDocument || t)
					.documentElement;
				return !!e && "HTML" !== e.nodeName
			}, E = e.setDocument = function(t)
			{
				var e, i, n = t ? t.ownerDocument || t : B;
				return n !== $ && 9 === n.nodeType && n.documentElement ? (D = ($ = n)
					.documentElement, O = !T($), B !== $ && (i = $.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", bt, !1) : i.attachEvent && i.attachEvent("onunload", bt)), x.attributes = r(function(t)
					{
						return t.className = "i", !t.getAttribute("className")
					}), x.getElementsByTagName = r(function(t)
					{
						return t.appendChild($.createComment("")), !t.getElementsByTagName("*")
							.length
					}), x.getElementsByClassName = pt.test($.getElementsByClassName), x.getById = r(function(t)
					{
						return D.appendChild(t)
							.id = L, !$.getElementsByName || !$.getElementsByName(L)
							.length
					}), x.getById ? (b.filter.ID = function(t)
					{
						var e = t.replace(vt, yt);
						return function(t)
						{
							return t.getAttribute("id") === e
						}
					}, b.find.ID = function(t, e)
					{
						if (void 0 !== e.getElementById && O)
						{
							var i = e.getElementById(t);
							return i ? [i] : []
						}
					}) : (b.filter.ID = function(t)
					{
						var e = t.replace(vt, yt);
						return function(t)
						{
							var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
							return i && i.value === e
						}
					}, b.find.ID = function(t, e)
					{
						if (void 0 !== e.getElementById && O)
						{
							var i, n, r, s = e.getElementById(t);
							if (s)
							{
								if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
								for (r = e.getElementsByName(t), n = 0; s = r[n++];)
									if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
							}
							return []
						}
					}), b.find.TAG = x.getElementsByTagName ? function(t, e)
					{
						return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
					} : function(t, e)
					{
						var i, n = [],
							r = 0,
							s = e.getElementsByTagName(t);
						if ("*" === t)
						{
							for (; i = s[r++];) 1 === i.nodeType && n.push(i);
							return n
						}
						return s
					}, b.find.CLASS = x.getElementsByClassName && function(t, e)
					{
						if (void 0 !== e.getElementsByClassName && O) return e.getElementsByClassName(t)
					}, j = [], M = [], (x.qsa = pt.test($.querySelectorAll)) && (r(function(t)
					{
						D.appendChild(t)
							.innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']")
							.length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]")
							.length || M.push("\\[" + tt + "*(?:value|" + K + ")"), t.querySelectorAll("[id~=" + L + "-]")
							.length || M.push("~="), t.querySelectorAll(":checked")
							.length || M.push(":checked"), t.querySelectorAll("a#" + L + "+*")
							.length || M.push(".#.+[+~]")
					}), r(function(t)
					{
						t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var e = $.createElement("input");
						e.setAttribute("type", "hidden"), t.appendChild(e)
							.setAttribute("name", "D"), t.querySelectorAll("[name=d]")
							.length && M.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled")
							.length && M.push(":enabled", ":disabled"), D.appendChild(t)
							.disabled = !0, 2 !== t.querySelectorAll(":disabled")
							.length && M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
					})), (x.matchesSelector = pt.test(R = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t)
					{
						x.disconnectedMatch = R.call(t, "*"), R.call(t, "[s!='']:x"), j.push("!=", nt)
					}), M = M.length && new RegExp(M.join("|")), j = j.length && new RegExp(j.join("|")), e = pt.test(D.compareDocumentPosition), N = e || pt.test(D.contains) ? function(t, e)
					{
						var i = 9 === t.nodeType ? t.documentElement : t,
							n = e && e.parentNode;
						return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
					} : function(t, e)
					{
						if (e)
							for (; e = e.parentNode;)
								if (e === t) return !0;
						return !1
					}, W = e ? function(t, e)
					{
						if (t === e) return F = !0, 0;
						var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
						return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === $ || t.ownerDocument === B && N(B, t) ? -1 : e === $ || e.ownerDocument === B && N(B, e) ? 1 : P ? J(P, t) - J(P, e) : 0 : 4 & i ? -1 : 1)
					} : function(t, e)
					{
						if (t === e) return F = !0, 0;
						var i, n = 0,
							r = t.parentNode,
							s = e.parentNode,
							a = [t],
							l = [e];
						if (!r || !s) return t === $ ? -1 : e === $ ? 1 : r ? -1 : s ? 1 : P ? J(P, t) - J(P, e) : 0;
						if (r === s) return o(t, e);
						for (i = t; i = i.parentNode;) a.unshift(i);
						for (i = e; i = i.parentNode;) l.unshift(i);
						for (; a[n] === l[n];) n++;
						return n ? o(a[n], l[n]) : a[n] === B ? -1 : l[n] === B ? 1 : 0
					}, $) : $
			}, e.matches = function(t, i)
			{
				return e(t, null, null, i)
			}, e.matchesSelector = function(t, i)
			{
				if ((t.ownerDocument || t) !== $ && E(t), i = i.replace(lt, "='$1']"), x.matchesSelector && O && !X[i + " "] && (!j || !j.test(i)) && (!M || !M.test(i))) try
				{
					var n = R.call(t, i);
					if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
				}
				catch (t) {}
				return e(i, $, null, [t])
					.length > 0
			}, e.contains = function(t, e)
			{
				return (t.ownerDocument || t) !== $ && E(t), N(t, e)
			}, e.attr = function(t, e)
			{
				(t.ownerDocument || t) !== $ && E(t);
				var i = b.attrHandle[e.toLowerCase()],
					n = i && U.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
				return void 0 !== n ? n : x.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}, e.escape = function(t)
			{
				return (t + "")
					.replace(_t, xt)
			}, e.error = function(t)
			{
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, e.uniqueSort = function(t)
			{
				var e, i = [],
					n = 0,
					r = 0;
				if (F = !x.detectDuplicates, P = !x.sortStable && t.slice(0), t.sort(W), F)
				{
					for (; e = t[r++];) e === t[r] && (n = i.push(r));
					for (; n--;) t.splice(i[n], 1)
				}
				return P = null, t
			}, w = e.getText = function(t)
			{
				var e, i = "",
					n = 0,
					r = t.nodeType;
				if (r)
				{
					if (1 === r || 9 === r || 11 === r)
					{
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += w(t)
					}
					else if (3 === r || 4 === r) return t.nodeValue
				}
				else
					for (; e = t[n++];) i += w(e);
				return i
			}, (b = e.selectors = {
				cacheLength: 50,
				createPseudo: n,
				match: dt,
				attrHandle: {},
				find: {},
				relative:
				{
					">":
					{
						dir: "parentNode",
						first: !0
					},
					" ":
					{
						dir: "parentNode"
					},
					"+":
					{
						dir: "previousSibling",
						first: !0
					},
					"~":
					{
						dir: "previousSibling"
					}
				},
				preFilter:
				{
					ATTR: function(t)
					{
						return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "")
							.replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t)
					{
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
					},
					PSEUDO: function(t)
					{
						var e, i = !t[6] && t[2];
						return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
					}
				},
				filter:
				{
					TAG: function(t)
					{
						var e = t.replace(vt, yt)
							.toLowerCase();
						return "*" === t ? function()
						{
							return !0
						} : function(t)
						{
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t)
					{
						var e = z[t + " "];
						return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && z(t, function(t)
						{
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(t, i, n)
					{
						return function(r)
						{
							var s = e.attr(r, t);
							return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(rt, " ") + " ")
								.indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
						}
					},
					CHILD: function(t, e, i, n, r)
					{
						var s = "nth" !== t.slice(0, 3),
							o = "last" !== t.slice(-4),
							a = "of-type" === e;
						return 1 === n && 0 === r ? function(t)
						{
							return !!t.parentNode
						} : function(e, i, l)
						{
							var c, u, d, h, f, p, m = s !== o ? "nextSibling" : "previousSibling",
								g = e.parentNode,
								v = a && e.nodeName.toLowerCase(),
								y = !l && !a,
								_ = !1;
							if (g)
							{
								if (s)
								{
									for (; m;)
									{
										for (h = e; h = h[m];)
											if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
										p = m = "only" === t && !p && "nextSibling"
									}
									return !0
								}
								if (p = [o ? g.firstChild : g.lastChild], o && y)
								{
									for (_ = (f = (c = (u = (d = (h = g)[L] || (h[L] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === q && c[1]) && c[2], h = f && g.childNodes[f]; h = ++f && h && h[m] || (_ = f = 0) || p.pop();)
										if (1 === h.nodeType && ++_ && h === e)
										{
											u[t] = [q, f, _];
											break
										}
								}
								else if (y && (_ = f = (c = (u = (d = (h = e)[L] || (h[L] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === q && c[1]), !1 === _)
									for (;
										(h = ++f && h && h[m] || (_ = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((u = (d = h[L] || (h[L] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [q, _]), h !== e)););
								return (_ -= r) === n || _ % n == 0 && _ / n >= 0
							}
						}
					},
					PSEUDO: function(t, i)
					{
						var r, s = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
						return s[L] ? s(i) : s.length > 1 ? (r = [t, t, "", i], b.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e)
						{
							for (var n, r = s(t, i), o = r.length; o--;) t[n = J(t, r[o])] = !(e[n] = r[o])
						}) : function(t)
						{
							return s(t, 0, r)
						}) : s
					}
				},
				pseudos:
				{
					not: n(function(t)
					{
						var e = [],
							i = [],
							r = C(t.replace(st, "$1"));
						return r[L] ? n(function(t, e, i, n)
						{
							for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
						}) : function(t, n, s)
						{
							return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
						}
					}),
					has: n(function(t)
					{
						return function(i)
						{
							return e(t, i)
								.length > 0
						}
					}),
					contains: n(function(t)
					{
						return t = t.replace(vt, yt),
							function(e)
							{
								return (e.textContent || e.innerText || w(e))
									.indexOf(t) > -1
							}
					}),
					lang: n(function(t)
					{
						return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt)
							.toLowerCase(),
							function(e)
							{
								var i;
								do {
									if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e)
					{
						var i = t.location && t.location.hash;
						return i && i.slice(1) === e.id
					},
					root: function(t)
					{
						return t === D
					},
					focus: function(t)
					{
						return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: c(!1),
					disabled: c(!0),
					checked: function(t)
					{
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function(t)
					{
						return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
					},
					empty: function(t)
					{
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t)
					{
						return !b.pseudos.empty(t)
					},
					header: function(t)
					{
						return ft.test(t.nodeName)
					},
					input: function(t)
					{
						return ht.test(t.nodeName)
					},
					button: function(t)
					{
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t)
					{
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: u(function()
					{
						return [0]
					}),
					last: u(function(t, e)
					{
						return [e - 1]
					}),
					eq: u(function(t, e, i)
					{
						return [i < 0 ? i + e : i]
					}),
					even: u(function(t, e)
					{
						for (var i = 0; i < e; i += 2) t.push(i);
						return t
					}),
					odd: u(function(t, e)
					{
						for (var i = 1; i < e; i += 2) t.push(i);
						return t
					}),
					lt: u(function(t, e, i)
					{
						for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
						return t
					}),
					gt: u(function(t, e, i)
					{
						for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
						return t
					})
				}
			})
			.pseudos.nth = b.pseudos.eq,
			{
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[_] = a(_);
		for (_ in
			{
				submit: !0,
				reset: !0
			}) b.pseudos[_] = l(_);
		return h.prototype = b.filters = b.pseudos, b.setFilters = new h, k = e.tokenize = function(t, i)
			{
				var n, r, s, o, a, l, c, u = H[t + " "];
				if (u) return i ? 0 : u.slice(0);
				for (a = t, l = [], c = b.preFilter; a;)
				{
					for (o in n && !(r = ot.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = at.exec(a)) && (n = r.shift(), s.push(
						{
							value: n,
							type: r[0].replace(st, " ")
						}), a = a.slice(n.length)), b.filter) !(r = dt[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(), s.push(
					{
						value: n,
						type: o,
						matches: r
					}), a = a.slice(n.length));
					if (!n) break
				}
				return i ? a.length : a ? e.error(t) : H(t, l)
					.slice(0)
			}, C = e.compile = function(t, i)
			{
				var r, s = [],
					o = [],
					a = X[t + " "];
				if (!a)
				{
					for (i || (i = k(t)), r = i.length; r--;)(a = y(i[r]))[L] ? s.push(a) : o.push(a);
					(a = X(t, function(t, i)
					{
						var r = i.length > 0,
							s = t.length > 0,
							o = function(n, o, a, l, c)
							{
								var u, d, h, f = 0,
									p = "0",
									m = n && [],
									v = [],
									y = A,
									_ = n || s && b.find.TAG("*", c),
									x = q += null == y ? 1 : Math.random() || .1,
									w = _.length;
								for (c && (A = o === $ || o || c); p !== w && null != (u = _[p]); p++)
								{
									if (s && u)
									{
										for (d = 0, o || u.ownerDocument === $ || (E(u), a = !O); h = t[d++];)
											if (h(u, o || $, a))
											{
												l.push(u);
												break
											} c && (q = x)
									}
									r && ((u = !h && u) && f--, n && m.push(u))
								}
								if (f += p, r && p !== f)
								{
									for (d = 0; h = i[d++];) h(m, v, o, a);
									if (n)
									{
										if (f > 0)
											for (; p--;) m[p] || v[p] || (v[p] = G.call(l));
										v = g(v)
									}
									Z.apply(l, v), c && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
								}
								return c && (q = x, A = y), m
							};
						return r ? n(o) : o
					}(o, s)))
					.selector = t
				}
				return a
			}, S = e.select = function(t, e, i, n)
			{
				var r, s, o, a, l, c = "function" == typeof t && t,
					u = !n && k(t = c.selector || t);
				if (i = i || [], 1 === u.length)
				{
					if ((s = u[0] = u[0].slice(0))
						.length > 2 && "ID" === (o = s[0])
						.type && 9 === e.nodeType && O && b.relative[s[1].type])
					{
						if (!(e = (b.find.ID(o.matches[0].replace(vt, yt), e) || [])[0])) return i;
						c && (e = e.parentNode), t = t.slice(s.shift()
							.value.length)
					}
					for (r = dt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
						if ((l = b.find[a]) && (n = l(o.matches[0].replace(vt, yt), gt.test(s[0].type) && d(e.parentNode) || e)))
						{
							if (s.splice(r, 1), !(t = n.length && f(s))) return Z.apply(i, n), i;
							break
						}
				}
				return (c || C(t, u))(n, e, !O, i, !e || gt.test(t) && d(e.parentNode) || e), i
			}, x.sortStable = L.split("")
			.sort(W)
			.join("") === L, x.detectDuplicates = !!F, E(), x.sortDetached = r(function(t)
			{
				return 1 & t.compareDocumentPosition($.createElement("fieldset"))
			}), r(function(t)
			{
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			}) || s("type|href|height|width", function(t, e, i)
			{
				if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			}), x.attributes && r(function(t)
			{
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			}) || s("value", function(t, e, i)
			{
				if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
			}), r(function(t)
			{
				return null == t.getAttribute("disabled")
			}) || s(K, function(t, e, i)
			{
				var n;
				if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}), e
	}(t);
	at.find = ht, at.expr = ht.selectors, at.expr[":"] = at.expr.pseudos, at.uniqueSort = at.unique = ht.uniqueSort, at.text = ht.getText, at.isXMLDoc = ht.isXML, at.contains = ht.contains, at.escapeSelector = ht.escape;
	var ft = function(t, e, i)
		{
			for (var n = [], r = void 0 !== i;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType)
				{
					if (r && at(t)
						.is(i)) break;
					n.push(t)
				} return n
		},
		pt = function(t, e)
		{
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		},
		mt = at.expr.match.needsContext,
		gt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		vt = /^.[^:#\[\.,]*$/;
	at.filter = function(t, e, i)
	{
		var n = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? at.find.matchesSelector(n, t) ? [n] : [] : at.find.matches(t, at.grep(e, function(t)
		{
			return 1 === t.nodeType
		}))
	}, at.fn.extend(
	{
		find: function(t)
		{
			var e, i, n = this.length,
				r = this;
			if ("string" != typeof t) return this.pushStack(at(t)
				.filter(function()
				{
					for (e = 0; e < n; e++)
						if (at.contains(r[e], this)) return !0
				}));
			for (i = this.pushStack([]), e = 0; e < n; e++) at.find(t, r[e], i);
			return n > 1 ? at.uniqueSort(i) : i
		},
		filter: function(t)
		{
			return this.pushStack(s(this, t || [], !1))
		},
		not: function(t)
		{
			return this.pushStack(s(this, t || [], !0))
		},
		is: function(t)
		{
			return !!s(this, "string" == typeof t && mt.test(t) ? at(t) : t || [], !1)
				.length
		}
	});
	var yt, _t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(at.fn.init = function(t, e, i)
	{
		var n, r;
		if (!t) return this;
		if (i = i || yt, "string" == typeof t)
		{
			if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : _t.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i)
				.find(t) : this.constructor(e)
				.find(t);
			if (n[1])
			{
				if (e = e instanceof at ? e[0] : e, at.merge(this, at.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Y, !0)), gt.test(n[1]) && at.isPlainObject(e))
					for (n in e) at.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
				return this
			}
			return (r = Y.getElementById(n[2])) && (this[0] = r, this.length = 1), this
		}
		return t.nodeType ? (this[0] = t, this.length = 1, this) : at.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(at) : at.makeArray(t, this)
	})
	.prototype = at.fn, yt = at(Y);
	var xt = /^(?:parents|prev(?:Until|All))/,
		bt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	at.fn.extend(
	{
		has: function(t)
		{
			var e = at(t, this),
				i = e.length;
			return this.filter(function()
			{
				for (var t = 0; t < i; t++)
					if (at.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e)
		{
			var i, n = 0,
				r = this.length,
				s = [],
				o = "string" != typeof t && at(t);
			if (!mt.test(t))
				for (; n < r; n++)
					for (i = this[n]; i && i !== e; i = i.parentNode)
						if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && at.find.matchesSelector(i, t)))
						{
							s.push(i);
							break
						} return this.pushStack(s.length > 1 ? at.uniqueSort(s) : s)
		},
		index: function(t)
		{
			return t ? "string" == typeof t ? tt.call(at(t), this[0]) : tt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first()
				.prevAll()
				.length : -1
		},
		add: function(t, e)
		{
			return this.pushStack(at.uniqueSort(at.merge(this.get(), at(t, e))))
		},
		addBack: function(t)
		{
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), at.each(
	{
		parent: function(t)
		{
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t)
		{
			return ft(t, "parentNode")
		},
		parentsUntil: function(t, e, i)
		{
			return ft(t, "parentNode", i)
		},
		next: function(t)
		{
			return o(t, "nextSibling")
		},
		prev: function(t)
		{
			return o(t, "previousSibling")
		},
		nextAll: function(t)
		{
			return ft(t, "nextSibling")
		},
		prevAll: function(t)
		{
			return ft(t, "previousSibling")
		},
		nextUntil: function(t, e, i)
		{
			return ft(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i)
		{
			return ft(t, "previousSibling", i)
		},
		siblings: function(t)
		{
			return pt((t.parentNode || {})
				.firstChild, t)
		},
		children: function(t)
		{
			return pt(t.firstChild)
		},
		contents: function(t)
		{
			return r(t, "iframe") ? t.contentDocument : (r(t, "template") && (t = t.content || t), at.merge([], t.childNodes))
		}
	}, function(t, e)
	{
		at.fn[t] = function(i, n)
		{
			var r = at.map(this, e, i);
			return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = at.filter(n, r)), this.length > 1 && (bt[t] || at.uniqueSort(r), xt.test(t) && r.reverse()), this.pushStack(r)
		}
	});
	var wt = /[^\x20\t\r\n\f]+/g;
	at.Callbacks = function(t)
	{
		t = "string" == typeof t ? function(t)
		{
			var e = {};
			return at.each(t.match(wt) || [], function(t, i)
			{
				e[i] = !0
			}), e
		}(t) : at.extend({}, t);
		var e, i, n, r, s = [],
			o = [],
			a = -1,
			l = function()
			{
				for (r = r || t.once, n = e = !0; o.length; a = -1)
					for (i = o.shift(); ++a < s.length;) !1 === s[a].apply(i[0], i[1]) && t.stopOnFalse && (a = s.length, i = !1);
				t.memory || (i = !1), e = !1, r && (s = i ? [] : "")
			},
			c = {
				add: function()
				{
					return s && (i && !e && (a = s.length - 1, o.push(i)), function e(i)
					{
						at.each(i, function(i, n)
						{
							at.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== at.type(n) && e(n)
						})
					}(arguments), i && !e && l()), this
				},
				remove: function()
				{
					return at.each(arguments, function(t, e)
					{
						for (var i;
							(i = at.inArray(e, s, i)) > -1;) s.splice(i, 1), i <= a && a--
					}), this
				},
				has: function(t)
				{
					return t ? at.inArray(t, s) > -1 : s.length > 0
				},
				empty: function()
				{
					return s && (s = []), this
				},
				disable: function()
				{
					return r = o = [], s = i = "", this
				},
				disabled: function()
				{
					return !s
				},
				lock: function()
				{
					return r = o = [], i || e || (s = i = ""), this
				},
				locked: function()
				{
					return !!r
				},
				fireWith: function(t, i)
				{
					return r || (i = [t, (i = i || [])
						.slice ? i.slice() : i
					], o.push(i), e || l()), this
				},
				fire: function()
				{
					return c.fireWith(this, arguments), this
				},
				fired: function()
				{
					return !!n
				}
			};
		return c
	}, at.extend(
	{
		Deferred: function(e)
		{
			var i = [
					["notify", "progress", at.Callbacks("memory"), at.Callbacks("memory"), 2],
					["resolve", "done", at.Callbacks("once memory"), at.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", at.Callbacks("once memory"), at.Callbacks("once memory"), 1, "rejected"]
				],
				n = "pending",
				r = {
					state: function()
					{
						return n
					},
					always: function()
					{
						return s.done(arguments)
							.fail(arguments), this
					},
					catch: function(t)
					{
						return r.then(null, t)
					},
					pipe: function()
					{
						var t = arguments;
						return at.Deferred(function(e)
							{
								at.each(i, function(i, n)
								{
									var r = at.isFunction(t[n[4]]) && t[n[4]];
									s[n[1]](function()
									{
										var t = r && r.apply(this, arguments);
										t && at.isFunction(t.promise) ? t.promise()
											.progress(e.notify)
											.done(e.resolve)
											.fail(e.reject) : e[n[0] + "With"](this, r ? [t] : arguments)
									})
								}), t = null
							})
							.promise()
					},
					then: function(e, n, r)
					{
						function s(e, i, n, r)
						{
							return function()
							{
								var c = this,
									u = arguments,
									d = function()
									{
										var t, d;
										if (!(e < o))
										{
											if ((t = n.apply(c, u)) === i.promise()) throw new TypeError("Thenable self-resolution");
											d = t && ("object" == _typeof3(t) || "function" == typeof t) && t.then, at.isFunction(d) ? r ? d.call(t, s(o, i, a, r), s(o, i, l, r)) : (o++, d.call(t, s(o, i, a, r), s(o, i, l, r), s(o, i, a, i.notifyWith))) : (n !== a && (c = void 0, u = [t]), (r || i.resolveWith)(c, u))
										}
									},
									h = r ? d : function()
									{
										try
										{
											d()
										}
										catch (t)
										{
											at.Deferred.exceptionHook && at.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= o && (n !== l && (c = void 0, u = [t]), i.rejectWith(c, u))
										}
									};
								e ? h() : (at.Deferred.getStackHook && (h.stackTrace = at.Deferred.getStackHook()), t.setTimeout(h))
							}
						}
						var o = 0;
						return at.Deferred(function(t)
							{
								i[0][3].add(s(0, t, at.isFunction(r) ? r : a, t.notifyWith)), i[1][3].add(s(0, t, at.isFunction(e) ? e : a)), i[2][3].add(s(0, t, at.isFunction(n) ? n : l))
							})
							.promise()
					},
					promise: function(t)
					{
						return null != t ? at.extend(t, r) : r
					}
				},
				s = {};
			return at.each(i, function(t, e)
			{
				var o = e[2],
					a = e[5];
				r[e[1]] = o.add, a && o.add(function()
				{
					n = a
				}, i[3 - t][2].disable, i[0][2].lock), o.add(e[3].fire), s[e[0]] = function()
				{
					return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[e[0] + "With"] = o.fireWith
			}), r.promise(s), e && e.call(s, s), s
		},
		when: function(t)
		{
			var e = arguments.length,
				i = e,
				n = Array(i),
				r = Q.call(arguments),
				s = at.Deferred(),
				o = function(t)
				{
					return function(i)
					{
						n[t] = this, r[t] = arguments.length > 1 ? Q.call(arguments) : i, --e || s.resolveWith(n, r)
					}
				};
			if (e <= 1 && (c(t, s.done(o(i))
					.resolve, s.reject, !e), "pending" === s.state() || at.isFunction(r[i] && r[i].then))) return s.then();
			for (; i--;) c(r[i], o(i), s.reject);
			return s.promise()
		}
	});
	var Tt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	at.Deferred.exceptionHook = function(e, i)
	{
		t.console && t.console.warn && e && Tt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
	}, at.readyException = function(e)
	{
		t.setTimeout(function()
		{
			throw e
		})
	};
	var kt = at.Deferred();
	at.fn.ready = function(t)
	{
		return kt.then(t)
			.catch(function(t)
			{
				at.readyException(t)
			}), this
	}, at.extend(
	{
		isReady: !1,
		readyWait: 1,
		ready: function(t)
		{
			(!0 === t ? --at.readyWait : at.isReady) || (at.isReady = !0, !0 !== t && --at.readyWait > 0 || kt.resolveWith(Y, [at]))
		}
	}), at.ready.then = kt.then, "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? t.setTimeout(at.ready) : (Y.addEventListener("DOMContentLoaded", u), t.addEventListener("load", u));
	var Ct = function t(e, i, n, r, s, o, a)
		{
			var l = 0,
				c = e.length,
				u = null == n;
			if ("object" === at.type(n))
				for (l in s = !0, n) t(e, i, l, n[l], !0, o, a);
			else if (void 0 !== r && (s = !0, at.isFunction(r) || (a = !0), u && (a ? (i.call(e, r), i = null) : (u = i, i = function(t, e, i)
				{
					return u.call(at(t), i)
				})), i))
				for (; l < c; l++) i(e[l], n, a ? r : r.call(e[l], l, i(e[l], n)));
			return s ? e : u ? i.call(e) : c ? i(e[0], n) : o
		},
		St = function(t)
		{
			return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
		};
	d.uid = 1, d.prototype = {
		cache: function(t)
		{
			var e = t[this.expando];
			return e || (e = {}, St(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando,
			{
				value: e,
				configurable: !0
			}))), e
		},
		set: function(t, e, i)
		{
			var n, r = this.cache(t);
			if ("string" == typeof e) r[at.camelCase(e)] = i;
			else
				for (n in e) r[at.camelCase(n)] = e[n];
			return r
		},
		get: function(t, e)
		{
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][at.camelCase(e)]
		},
		access: function(t, e, i)
		{
			return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
		},
		remove: function(t, e)
		{
			var i, n = t[this.expando];
			if (void 0 !== n)
			{
				if (void 0 !== e)
				{
					i = (e = Array.isArray(e) ? e.map(at.camelCase) : (e = at.camelCase(e)) in n ? [e] : e.match(wt) || [])
						.length;
					for (; i--;) delete n[e[i]]
				}(void 0 === e || at.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function(t)
		{
			var e = t[this.expando];
			return void 0 !== e && !at.isEmptyObject(e)
		}
	};
	var At = new d,
		Pt = new d,
		Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Et = /[A-Z]/g;
	at.extend(
	{
		hasData: function(t)
		{
			return Pt.hasData(t) || At.hasData(t)
		},
		data: function(t, e, i)
		{
			return Pt.access(t, e, i)
		},
		removeData: function(t, e)
		{
			Pt.remove(t, e)
		},
		_data: function(t, e, i)
		{
			return At.access(t, e, i)
		},
		_removeData: function(t, e)
		{
			At.remove(t, e)
		}
	}), at.fn.extend(
	{
		data: function(t, e)
		{
			var i, n, r, s = this[0],
				o = s && s.attributes;
			if (void 0 === t)
			{
				if (this.length && (r = Pt.get(s), 1 === s.nodeType && !At.get(s, "hasDataAttrs")))
				{
					for (i = o.length; i--;) o[i] && 0 === (n = o[i].name)
						.indexOf("data-") && (n = at.camelCase(n.slice(5)), h(s, n, r[n]));
					At.set(s, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == _typeof3(t) ? this.each(function()
			{
				Pt.set(this, t)
			}) : Ct(this, function(e)
			{
				var i;
				if (s && void 0 === e)
				{
					if (void 0 !== (i = Pt.get(s, t))) return i;
					if (void 0 !== (i = h(s, t))) return i
				}
				else this.each(function()
				{
					Pt.set(this, t, e)
				})
			}, null, e, arguments.length > 1, null, !0)
		},
		removeData: function(t)
		{
			return this.each(function()
			{
				Pt.remove(this, t)
			})
		}
	}), at.extend(
	{
		queue: function(t, e, i)
		{
			var n;
			if (t) return e = (e || "fx") + "queue", n = At.get(t, e), i && (!n || Array.isArray(i) ? n = At.access(t, e, at.makeArray(i)) : n.push(i)), n || []
		},
		dequeue: function(t, e)
		{
			e = e || "fx";
			var i = at.queue(t, e),
				n = i.length,
				r = i.shift(),
				s = at._queueHooks(t, e);
			"inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function()
			{
				at.dequeue(t, e)
			}, s)), !n && s && s.empty.fire()
		},
		_queueHooks: function(t, e)
		{
			var i = e + "queueHooks";
			return At.get(t, i) || At.access(t, i,
			{
				empty: at.Callbacks("once memory")
					.add(function()
					{
						At.remove(t, [e + "queue", i])
					})
			})
		}
	}), at.fn.extend(
	{
		queue: function(t, e)
		{
			var i = 2;
			return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? at.queue(this[0], t) : void 0 === e ? this : this.each(function()
			{
				var i = at.queue(this, t, e);
				at._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && at.dequeue(this, t)
			})
		},
		dequeue: function(t)
		{
			return this.each(function()
			{
				at.dequeue(this, t)
			})
		},
		clearQueue: function(t)
		{
			return this.queue(t || "fx", [])
		},
		promise: function(t, e)
		{
			var i, n = 1,
				r = at.Deferred(),
				s = this,
				o = this.length,
				a = function()
				{
					--n || r.resolveWith(s, [s])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = At.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
			return a(), r.promise(e)
		}
	});
	var $t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Dt = new RegExp("^(?:([+-])=|)(" + $t + ")([a-z%]*)$", "i"),
		Ot = ["Top", "Right", "Bottom", "Left"],
		Mt = function(t, e)
		{
			return "none" === (t = e || t)
				.style.display || "" === t.style.display && at.contains(t.ownerDocument, t) && "none" === at.css(t, "display")
		},
		jt = function(t, e, i, n)
		{
			var r, s, o = {};
			for (s in e) o[s] = t.style[s], t.style[s] = e[s];
			for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
			return r
		},
		Rt = {};
	at.fn.extend(
	{
		show: function()
		{
			return m(this, !0)
		},
		hide: function()
		{
			return m(this)
		},
		toggle: function(t)
		{
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function()
			{
				Mt(this) ? at(this)
					.show() : at(this)
					.hide()
			})
		}
	});
	var Nt = /^(?:checkbox|radio)$/i,
		Lt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Bt = /^$|\/(?:java|ecma)script/i,
		qt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	qt.optgroup = qt.option, qt.tbody = qt.tfoot = qt.colgroup = qt.caption = qt.thead, qt.th = qt.td;
	var It = /<|&#?\w+;/;
	! function()
	{
		var t = Y.createDocumentFragment()
			.appendChild(Y.createElement("div")),
			e = Y.createElement("input");
		e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), ot.checkClone = t.cloneNode(!0)
			.cloneNode(!0)
			.lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ot.noCloneChecked = !!t.cloneNode(!0)
			.lastChild.defaultValue
	}();
	var zt = Y.documentElement,
		Ht = /^key/,
		Xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Wt = /^([^.]*)(?:\.(.+)|)/;
	at.event = {
		global: {},
		add: function(t, e, i, n, r)
		{
			var s, o, a, l, c, u, d, h, f, p, m, g = At.get(t);
			if (g)
				for (i.handler && (i = (s = i)
						.handler, r = s.selector), r && at.find.matchesSelector(zt, r), i.guid || (i.guid = at.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e)
					{
						return void 0 !== at && at.event.triggered !== e.type ? at.event.dispatch.apply(t, arguments) : void 0
					}), c = (e = (e || "")
						.match(wt) || [""])
					.length; c--;) f = m = (a = Wt.exec(e[c]) || [])[1], p = (a[2] || "")
					.split(".")
					.sort(), f && (d = at.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = at.event.special[f] || {}, u = at.extend(
					{
						type: f,
						origType: m,
						data: n,
						handler: i,
						guid: i.guid,
						selector: r,
						needsContext: r && at.expr.match.needsContext.test(r),
						namespace: p.join(".")
					}, s), (h = l[f]) || ((h = l[f] = [])
						.delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, p, o) || t.addEventListener && t.addEventListener(f, o)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), at.event.global[f] = !0)
		},
		remove: function(t, e, i, n, r)
		{
			var s, o, a, l, c, u, d, h, f, p, m, g = At.hasData(t) && At.get(t);
			if (g && (l = g.events))
			{
				for (c = (e = (e || "")
						.match(wt) || [""])
					.length; c--;)
					if (f = m = (a = Wt.exec(e[c]) || [])[1], p = (a[2] || "")
						.split(".")
						.sort(), f)
					{
						for (d = at.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = h.length; s--;) u = h[s], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
						o && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || at.removeEvent(t, f, g.handle), delete l[f])
					}
				else
					for (f in l) at.event.remove(t, f + e[c], i, n, !0);
				at.isEmptyObject(l) && At.remove(t, "handle events")
			}
		},
		dispatch: function(t)
		{
			var e, i, n, r, s, o, a = at.event.fix(t),
				l = new Array(arguments.length),
				c = (At.get(this, "events") || {})[a.type] || [],
				u = at.event.special[a.type] || {};
			for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
			if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a))
			{
				for (o = at.event.handlers.call(this, a, c), e = 0;
					(r = o[e++]) && !a.isPropagationStopped();)
					for (a.currentTarget = r.elem, i = 0;
						(s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((at.event.special[s.origType] || {})
							.handle || s.handler)
						.apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, a), a.result
			}
		},
		handlers: function(t, e)
		{
			var i, n, r, s, o, a = [],
				l = e.delegateCount,
				c = t.target;
			if (l && c.nodeType && !("click" === t.type && t.button >= 1))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled))
					{
						for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = e[i])
							.selector + " "] && (o[r] = n.needsContext ? at(r, this)
							.index(c) > -1 : at.find(r, this, null, [c])
							.length), o[r] && s.push(n);
						s.length && a.push(
						{
							elem: c,
							handlers: s
						})
					} return c = this, l < e.length && a.push(
			{
				elem: c,
				handlers: e.slice(l)
			}), a
		},
		addProp: function(t, e)
		{
			Object.defineProperty(at.Event.prototype, t,
			{
				enumerable: !0,
				configurable: !0,
				get: at.isFunction(e) ? function()
				{
					if (this.originalEvent) return e(this.originalEvent)
				} : function()
				{
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e)
				{
					Object.defineProperty(this, t,
					{
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(t)
		{
			return t[at.expando] ? t : new at.Event(t)
		},
		special:
		{
			load:
			{
				noBubble: !0
			},
			focus:
			{
				trigger: function()
				{
					if (this !== b() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur:
			{
				trigger: function()
				{
					if (this === b() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click:
			{
				trigger: function()
				{
					if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
				},
				_default: function(t)
				{
					return r(t.target, "a")
				}
			},
			beforeunload:
			{
				postDispatch: function(t)
				{
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, at.removeEvent = function(t, e, i)
	{
		t.removeEventListener && t.removeEventListener(e, i)
	}, at.Event = function(t, e)
	{
		if (!(this instanceof at.Event)) return new at.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _ : x, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && at.extend(this, e), this.timeStamp = t && t.timeStamp || at.now(), this[at.expando] = !0
	}, at.Event.prototype = {
		constructor: at.Event,
		isDefaultPrevented: x,
		isPropagationStopped: x,
		isImmediatePropagationStopped: x,
		isSimulated: !1,
		preventDefault: function()
		{
			var t = this.originalEvent;
			this.isDefaultPrevented = _, t && !this.isSimulated && t.preventDefault()
		},
		stopPropagation: function()
		{
			var t = this.originalEvent;
			this.isPropagationStopped = _, t && !this.isSimulated && t.stopPropagation()
		},
		stopImmediatePropagation: function()
		{
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = _, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, at.each(
	{
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(t)
		{
			var e = t.button;
			return null == t.which && Ht.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Xt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
		}
	}, at.event.addProp), at.each(
	{
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, e)
	{
		at.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t)
			{
				var i, n = t.relatedTarget,
					r = t.handleObj;
				return n && (n === this || at.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
			}
		}
	}), at.fn.extend(
	{
		on: function(t, e, i, n)
		{
			return w(this, t, e, i, n)
		},
		one: function(t, e, i, n)
		{
			return w(this, t, e, i, n, 1)
		},
		off: function(t, e, i)
		{
			var n, r;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj, at(t.delegateTarget)
				.off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" == _typeof3(t))
			{
				for (r in t) this.off(r, e, t[r]);
				return this
			}
			return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = x), this.each(function()
			{
				at.event.remove(this, t, i, e)
			})
		}
	});
	var Ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Vt = /<script|<style|<link/i,
		Gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Yt = /^true\/(.*)/,
		Zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	at.extend(
	{
		htmlPrefilter: function(t)
		{
			return t.replace(Ut, "<$1></$2>")
		},
		clone: function(t, e, i)
		{
			var n, r, s, o, a = t.cloneNode(!0),
				l = at.contains(t.ownerDocument, t);
			if (!(ot.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || at.isXMLDoc(t)))
				for (o = g(a), n = 0, r = (s = g(t))
					.length; n < r; n++) A(s[n], o[n]);
			if (e)
				if (i)
					for (s = s || g(t), o = o || g(a), n = 0, r = s.length; n < r; n++) S(s[n], o[n]);
				else S(t, a);
			return (o = g(a, "script"))
				.length > 0 && v(o, !l && g(t, "script")), a
		},
		cleanData: function(t)
		{
			for (var e, i, n, r = at.event.special, s = 0; void 0 !== (i = t[s]); s++)
				if (St(i))
				{
					if (e = i[At.expando])
					{
						if (e.events)
							for (n in e.events) r[n] ? at.event.remove(i, n) : at.removeEvent(i, n, e.handle);
						i[At.expando] = void 0
					}
					i[Pt.expando] && (i[Pt.expando] = void 0)
				}
		}
	}), at.fn.extend(
	{
		detach: function(t)
		{
			return F(this, t, !0)
		},
		remove: function(t)
		{
			return F(this, t)
		},
		text: function(t)
		{
			return Ct(this, function(t)
			{
				return void 0 === t ? at.text(this) : this.empty()
					.each(function()
					{
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
					})
			}, null, t, arguments.length)
		},
		append: function()
		{
			return P(this, arguments, function(t)
			{
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t)
					.appendChild(t)
			})
		},
		prepend: function()
		{
			return P(this, arguments, function(t)
			{
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
				{
					var e = T(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function()
		{
			return P(this, arguments, function(t)
			{
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function()
		{
			return P(this, arguments, function(t)
			{
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function()
		{
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (at.cleanData(g(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e)
		{
			return t = null != t && t, e = null == e ? t : e, this.map(function()
			{
				return at.clone(this, t, e)
			})
		},
		html: function(t)
		{
			return Ct(this, function(t)
			{
				var e = this[0] || {},
					i = 0,
					n = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !Vt.test(t) && !qt[(Lt.exec(t) || ["", ""])[1].toLowerCase()])
				{
					t = at.htmlPrefilter(t);
					try
					{
						for (; i < n; i++) 1 === (e = this[i] || {})
							.nodeType && (at.cleanData(g(e, !1)), e.innerHTML = t);
						e = 0
					}
					catch (t) {}
				}
				e && this.empty()
					.append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function()
		{
			var t = [];
			return P(this, arguments, function(e)
			{
				var i = this.parentNode;
				at.inArray(this, t) < 0 && (at.cleanData(g(this)), i && i.replaceChild(e, this))
			}, t)
		}
	}), at.each(
	{
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e)
	{
		at.fn[t] = function(t)
		{
			for (var i, n = [], r = at(t), s = r.length - 1, o = 0; o <= s; o++) i = o === s ? this : this.clone(!0), at(r[o])[e](i), K.apply(n, i.get());
			return this.pushStack(n)
		}
	});
	var Qt = /^margin/,
		Jt = new RegExp("^(" + $t + ")(?!px)[a-z%]+$", "i"),
		Kt = function(e)
		{
			var i = e.ownerDocument.defaultView;
			return i && i.opener || (i = t), i.getComputedStyle(e)
		};
	! function()
	{
		function e()
		{
			if (a)
			{
				a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", zt.appendChild(o);
				var e = t.getComputedStyle(a);
				i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, zt.removeChild(o), a = null
			}
		}
		var i, n, r, s, o = Y.createElement("div"),
			a = Y.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0)
			.style.backgroundClip = "", ot.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), at.extend(ot,
			{
				pixelPosition: function()
				{
					return e(), i
				},
				boxSizingReliable: function()
				{
					return e(), n
				},
				pixelMarginRight: function()
				{
					return e(), r
				},
				reliableMarginLeft: function()
				{
					return e(), s
				}
			}))
	}();
	var te = /^(none|table(?!-c[ea]).+)/,
		ee = /^--/,
		ie = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ne = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		re = ["Webkit", "Moz", "ms"],
		se = Y.createElement("div")
		.style;
	at.extend(
		{
			cssHooks:
			{
				opacity:
				{
					get: function(t, e)
					{
						if (e)
						{
							var i = E(t, "opacity");
							return "" === i ? "1" : i
						}
					}
				}
			},
			cssNumber:
			{
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps:
			{
				float: "cssFloat"
			},
			style: function(t, e, i, n)
			{
				if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style)
				{
					var r, s, o, a = at.camelCase(e),
						l = ee.test(e),
						c = t.style;
					if (l || (e = D(a)), o = at.cssHooks[e] || at.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : c[e];
					"string" == (s = _typeof3(i)) && (r = Dt.exec(i)) && r[1] && (i = f(t, e, r), s = "number"), null != i && i == i && ("number" === s && (i += r && r[3] || (at.cssNumber[a] ? "" : "px")), ot.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
				}
			},
			css: function(t, e, i, n)
			{
				var r, s, o, a = at.camelCase(e);
				return ee.test(e) || (e = D(a)), (o = at.cssHooks[e] || at.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = E(t, e, n)), "normal" === r && e in ne && (r = ne[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
			}
		}), at.each(["height", "width"], function(t, e)
		{
			at.cssHooks[e] = {
				get: function(t, i, n)
				{
					if (i) return !te.test(at.css(t, "display")) || t.getClientRects()
						.length && t.getBoundingClientRect()
						.width ? j(t, e, n) : jt(t, ie, function()
						{
							return j(t, e, n)
						})
				},
				set: function(t, i, n)
				{
					var r, s = n && Kt(t),
						o = n && M(t, e, n, "border-box" === at.css(t, "boxSizing", !1, s), s);
					return o && (r = Dt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = at.css(t, e)), O(0, i, o)
				}
			}
		}), at.cssHooks.marginLeft = $(ot.reliableMarginLeft, function(t, e)
		{
			if (e) return (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect()
				.left - jt(t,
				{
					marginLeft: 0
				}, function()
				{
					return t.getBoundingClientRect()
						.left
				})) + "px"
		}), at.each(
		{
			margin: "",
			padding: "",
			border: "Width"
		}, function(t, e)
		{
			at.cssHooks[t + e] = {
				expand: function(i)
				{
					for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[t + Ot[n] + e] = s[n] || s[n - 2] || s[0];
					return r
				}
			}, Qt.test(t) || (at.cssHooks[t + e].set = O)
		}), at.fn.extend(
		{
			css: function(t, e)
			{
				return Ct(this, function(t, e, i)
				{
					var n, r, s = {},
						o = 0;
					if (Array.isArray(e))
					{
						for (n = Kt(t), r = e.length; o < r; o++) s[e[o]] = at.css(t, e[o], !1, n);
						return s
					}
					return void 0 !== i ? at.style(t, e, i) : at.css(t, e)
				}, t, e, arguments.length > 1)
			}
		}), at.Tween = R, (R.prototype = {
			constructor: R,
			init: function(t, e, i, n, r, s)
			{
				this.elem = t, this.prop = i, this.easing = r || at.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (at.cssNumber[i] ? "" : "px")
			},
			cur: function()
			{
				var t = R.propHooks[this.prop];
				return t && t.get ? t.get(this) : R.propHooks._default.get(this)
			},
			run: function(t)
			{
				var e, i = R.propHooks[this.prop];
				return this.options.duration ? this.pos = e = at.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
			}
		})
		.init.prototype = R.prototype, (R.propHooks = {
			_default:
			{
				get: function(t)
				{
					var e;
					return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = at.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
				},
				set: function(t)
				{
					at.fx.step[t.prop] ? at.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[at.cssProps[t.prop]] && !at.cssHooks[t.prop] ? t.elem[t.prop] = t.now : at.style(t.elem, t.prop, t.now + t.unit)
				}
			}
		})
		.scrollTop = R.propHooks.scrollLeft = {
			set: function(t)
			{
				t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
			}
		}, at.easing = {
			linear: function(t)
			{
				return t
			},
			swing: function(t)
			{
				return .5 - Math.cos(t * Math.PI) / 2
			},
			_default: "swing"
		}, at.fx = R.prototype.init, at.fx.step = {};
	var oe, ae, le = /^(?:toggle|show|hide)$/,
		ce = /queueHooks$/;
	at.Animation = at.extend(I,
		{
			tweeners:
			{
				"*": [function(t, e)
					{
						var i = this.createTween(t, e);
						return f(i.elem, t, Dt.exec(e), i), i
				}]
			},
			tweener: function(t, e)
			{
				at.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(wt);
				for (var i, n = 0, r = t.length; n < r; n++) i = t[n], I.tweeners[i] = I.tweeners[i] || [], I.tweeners[i].unshift(e)
			},
			prefilters: [function(t, e, i)
				{
					var n, r, s, o, a, l, c, u, d = "width" in e || "height" in e,
						h = this,
						f = {},
						p = t.style,
						g = t.nodeType && Mt(t),
						v = At.get(t, "fxshow");
					for (n in i.queue || (null == (o = at._queueHooks(t, "fx"))
							.unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function()
							{
								o.unqueued || a()
							}), o.unqueued++, h.always(function()
							{
								h.always(function()
								{
									o.unqueued--, at.queue(t, "fx")
										.length || o.empty.fire()
								})
							})), e)
						if (r = e[n], le.test(r))
						{
							if (delete e[n], s = s || "toggle" === r, r === (g ? "hide" : "show"))
							{
								if ("show" !== r || !v || void 0 === v[n]) continue;
								g = !0
							}
							f[n] = v && v[n] || at.style(t, n)
						} if ((l = !at.isEmptyObject(e)) || !at.isEmptyObject(f))
						for (n in d && 1 === t.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = At.get(t, "display")), "none" === (u = at.css(t, "display")) && (c ? u = c : (m([t], !0), c = t.style.display || c, u = at.css(t, "display"), m([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === at.css(t, "float") && (l || (h.done(function()
							{
								p.display = c
							}), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function()
							{
								p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
							})), l = !1, f) l || (v ? "hidden" in v && (g = v.hidden) : v = At.access(t, "fxshow",
						{
							display: c
						}), s && (v.hidden = !g), g && m([t], !0), h.done(function()
						{
							for (n in g || m([t]), At.remove(t, "fxshow"), f) at.style(t, n, f[n])
						})), l = q(g ? v[n] : 0, n, h), n in v || (v[n] = l.start, g && (l.end = l.start, l.start = 0))
			}],
			prefilter: function(t, e)
			{
				e ? I.prefilters.unshift(t) : I.prefilters.push(t)
			}
		}), at.speed = function(t, e, i)
		{
			var n = t && "object" == _typeof3(t) ? at.extend({}, t) :
			{
				complete: i || !i && e || at.isFunction(t) && t,
				duration: t,
				easing: i && e || e && !at.isFunction(e) && e
			};
			return at.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in at.fx.speeds ? n.duration = at.fx.speeds[n.duration] : n.duration = at.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function()
			{
				at.isFunction(n.old) && n.old.call(this), n.queue && at.dequeue(this, n.queue)
			}, n
		}, at.fn.extend(
		{
			fadeTo: function(t, e, i, n)
			{
				return this.filter(Mt)
					.css("opacity", 0)
					.show()
					.end()
					.animate(
					{
						opacity: e
					}, t, i, n)
			},
			animate: function(t, e, i, n)
			{
				var r = at.isEmptyObject(t),
					s = at.speed(e, i, n),
					o = function()
					{
						var e = I(this, at.extend({}, t), s);
						(r || At.get(this, "finish")) && e.stop(!0)
					};
				return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
			},
			stop: function(t, e, i)
			{
				var n = function(t)
				{
					var e = t.stop;
					delete t.stop, e(i)
				};
				return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function()
				{
					var e = !0,
						r = null != t && t + "queueHooks",
						s = at.timers,
						o = At.get(this);
					if (r) o[r] && o[r].stop && n(o[r]);
					else
						for (r in o) o[r] && o[r].stop && ce.test(r) && n(o[r]);
					for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
					!e && i || at.dequeue(this, t)
				})
			},
			finish: function(t)
			{
				return !1 !== t && (t = t || "fx"), this.each(function()
				{
					var e, i = At.get(this),
						n = i[t + "queue"],
						r = i[t + "queueHooks"],
						s = at.timers,
						o = n ? n.length : 0;
					for (i.finish = !0, at.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete i.finish
				})
			}
		}), at.each(["toggle", "show", "hide"], function(t, e)
		{
			var i = at.fn[e];
			at.fn[e] = function(t, n, r)
			{
				return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(B(e, !0), t, n, r)
			}
		}), at.each(
		{
			slideDown: B("show"),
			slideUp: B("hide"),
			slideToggle: B("toggle"),
			fadeIn:
			{
				opacity: "show"
			},
			fadeOut:
			{
				opacity: "hide"
			},
			fadeToggle:
			{
				opacity: "toggle"
			}
		}, function(t, e)
		{
			at.fn[t] = function(t, i, n)
			{
				return this.animate(e, t, i, n)
			}
		}), at.timers = [], at.fx.tick = function()
		{
			var t, e = 0,
				i = at.timers;
			for (oe = at.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
			i.length || at.fx.stop(), oe = void 0
		}, at.fx.timer = function(t)
		{
			at.timers.push(t), at.fx.start()
		}, at.fx.interval = 13, at.fx.start = function()
		{
			ae || (ae = !0, N())
		}, at.fx.stop = function()
		{
			ae = null
		}, at.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, at.fn.delay = function(e, i)
		{
			return e = at.fx && at.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n)
			{
				var r = t.setTimeout(i, e);
				n.stop = function()
				{
					t.clearTimeout(r)
				}
			})
		},
		function()
		{
			var t = Y.createElement("input"),
				e = Y.createElement("select")
				.appendChild(Y.createElement("option"));
			t.type = "checkbox", ot.checkOn = "" !== t.value, ot.optSelected = e.selected, (t = Y.createElement("input"))
				.value = "t", t.type = "radio", ot.radioValue = "t" === t.value
		}();
	var ue, de = at.expr.attrHandle;
	at.fn.extend(
	{
		attr: function(t, e)
		{
			return Ct(this, at.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t)
		{
			return this.each(function()
			{
				at.removeAttr(this, t)
			})
		}
	}), at.extend(
	{
		attr: function(t, e, i)
		{
			var n, r, s = t.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? at.prop(t, e, i) : (1 === s && at.isXMLDoc(t) || (r = at.attrHooks[e.toLowerCase()] || (at.expr.match.bool.test(e) ? ue : void 0)), void 0 !== i ? null === i ? void at.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = at.find.attr(t, e)) ? void 0 : n)
		},
		attrHooks:
		{
			type:
			{
				set: function(t, e)
				{
					if (!ot.radioValue && "radio" === e && r(t, "input"))
					{
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		},
		removeAttr: function(t, e)
		{
			var i, n = 0,
				r = e && e.match(wt);
			if (r && 1 === t.nodeType)
				for (; i = r[n++];) t.removeAttribute(i)
		}
	}), ue = {
		set: function(t, e, i)
		{
			return !1 === e ? at.removeAttr(t, i) : t.setAttribute(i, i), i
		}
	}, at.each(at.expr.match.bool.source.match(/\w+/g), function(t, e)
	{
		var i = de[e] || at.find.attr;
		de[e] = function(t, e, n)
		{
			var r, s, o = e.toLowerCase();
			return n || (s = de[o], de[o] = r, r = null != i(t, e, n) ? o : null, de[o] = s), r
		}
	});
	var he = /^(?:input|select|textarea|button)$/i,
		fe = /^(?:a|area)$/i;
	at.fn.extend(
	{
		prop: function(t, e)
		{
			return Ct(this, at.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t)
		{
			return this.each(function()
			{
				delete this[at.propFix[t] || t]
			})
		}
	}), at.extend(
	{
		prop: function(t, e, i)
		{
			var n, r, s = t.nodeType;
			if (3 !== s && 8 !== s && 2 !== s) return 1 === s && at.isXMLDoc(t) || (e = at.propFix[e] || e, r = at.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
		},
		propHooks:
		{
			tabIndex:
			{
				get: function(t)
				{
					var e = at.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : he.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix:
		{
			for: "htmlFor",
			class: "className"
		}
	}), ot.optSelected || (at.propHooks.selected = {
		get: function(t)
		{
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function(t)
		{
			var e = t.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), at.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function()
	{
		at.propFix[this.toLowerCase()] = this
	}), at.fn.extend(
	{
		addClass: function(t)
		{
			var e, i, n, r, s, o, a, l = 0;
			if (at.isFunction(t)) return this.each(function(e)
			{
				at(this)
					.addClass(t.call(this, e, H(this)))
			});
			if ("string" == typeof t && t)
				for (e = t.match(wt) || []; i = this[l++];)
					if (r = H(i), n = 1 === i.nodeType && " " + z(r) + " ")
					{
						for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
						r !== (a = z(n)) && i.setAttribute("class", a)
					} return this
		},
		removeClass: function(t)
		{
			var e, i, n, r, s, o, a, l = 0;
			if (at.isFunction(t)) return this.each(function(e)
			{
				at(this)
					.removeClass(t.call(this, e, H(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t)
				for (e = t.match(wt) || []; i = this[l++];)
					if (r = H(i), n = 1 === i.nodeType && " " + z(r) + " ")
					{
						for (o = 0; s = e[o++];)
							for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
						r !== (a = z(n)) && i.setAttribute("class", a)
					} return this
		},
		toggleClass: function(t, e)
		{
			var i = _typeof3(t);
			return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : at.isFunction(t) ? this.each(function(i)
			{
				at(this)
					.toggleClass(t.call(this, i, H(this), e), e)
			}) : this.each(function()
			{
				var e, n, r, s;
				if ("string" === i)
					for (n = 0, r = at(this), s = t.match(wt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
				else void 0 !== t && "boolean" !== i || ((e = H(this)) && At.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : At.get(this, "__className__") || ""))
			})
		},
		hasClass: function(t)
		{
			var e, i, n = 0;
			for (e = " " + t + " "; i = this[n++];)
				if (1 === i.nodeType && (" " + z(H(i)) + " ")
					.indexOf(e) > -1) return !0;
			return !1
		}
	});
	var pe = /\r/g;
	at.fn.extend(
	{
		val: function(t)
		{
			var e, i, n, r = this[0];
			return arguments.length ? (n = at.isFunction(t), this.each(function(i)
			{
				var r;
				1 === this.nodeType && (null == (r = n ? t.call(this, i, at(this)
					.val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = at.map(r, function(t)
				{
					return null == t ? "" : t + ""
				})), (e = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
			})) : r ? (e = at.valHooks[r.type] || at.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(pe, "") : null == i ? "" : i : void 0
		}
	}), at.extend(
	{
		valHooks:
		{
			option:
			{
				get: function(t)
				{
					var e = at.find.attr(t, "value");
					return null != e ? e : z(at.text(t))
				}
			},
			select:
			{
				get: function(t)
				{
					var e, i, n, s = t.options,
						o = t.selectedIndex,
						a = "select-one" === t.type,
						l = a ? null : [],
						c = a ? o + 1 : s.length;
					for (n = o < 0 ? c : a ? o : 0; n < c; n++)
						if (((i = s[n])
								.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !r(i.parentNode, "optgroup")))
						{
							if (e = at(i)
								.val(), a) return e;
							l.push(e)
						} return l
				},
				set: function(t, e)
				{
					for (var i, n, r = t.options, s = at.makeArray(e), o = r.length; o--;)((n = r[o])
						.selected = at.inArray(at.valHooks.option.get(n), s) > -1) && (i = !0);
					return i || (t.selectedIndex = -1), s
				}
			}
		}
	}), at.each(["radio", "checkbox"], function()
	{
		at.valHooks[this] = {
			set: function(t, e)
			{
				if (Array.isArray(e)) return t.checked = at.inArray(at(t)
					.val(), e) > -1
			}
		}, ot.checkOn || (at.valHooks[this].get = function(t)
		{
			return null === t.getAttribute("value") ? "on" : t.value
		})
	});
	var me = /^(?:focusinfocus|focusoutblur)$/;
	at.extend(at.event,
	{
		trigger: function(e, i, n, r)
		{
			var s, o, a, l, c, u, d, h = [n || Y],
				f = nt.call(e, "type") ? e.type : e,
				p = nt.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = a = n = n || Y, 3 !== n.nodeType && 8 !== n.nodeType && !me.test(f + at.event.triggered) && (f.indexOf(".") > -1 && (f = (p = f.split("."))
						.shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, (e = e[at.expando] ? e : new at.Event(f, "object" == _typeof3(e) && e))
					.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : at.makeArray(i, [e]), d = at.event.special[f] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, i)))
			{
				if (!r && !d.noBubble && !at.isWindow(n))
				{
					for (l = d.delegateType || f, me.test(l + f) || (o = o.parentNode); o; o = o.parentNode) h.push(o), a = o;
					a === (n.ownerDocument || Y) && h.push(a.defaultView || a.parentWindow || t)
				}
				for (s = 0;
					(o = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : d.bindType || f, (u = (At.get(o, "events") || {})[e.type] && At.get(o, "handle")) && u.apply(o, i), (u = c && o[c]) && u.apply && St(o) && (e.result = u.apply(o, i), !1 === e.result && e.preventDefault());
				return e.type = f, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), i) || !St(n) || c && at.isFunction(n[f]) && !at.isWindow(n) && ((a = n[c]) && (n[c] = null), at.event.triggered = f, n[f](), at.event.triggered = void 0, a && (n[c] = a)), e.result
			}
		},
		simulate: function(t, e, i)
		{
			var n = at.extend(new at.Event, i,
			{
				type: t,
				isSimulated: !0
			});
			at.event.trigger(n, null, e)
		}
	}), at.fn.extend(
	{
		trigger: function(t, e)
		{
			return this.each(function()
			{
				at.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e)
		{
			var i = this[0];
			if (i) return at.event.trigger(t, e, i, !0)
		}
	}), at.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e)
	{
		at.fn[e] = function(t, i)
		{
			return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
		}
	}), at.fn.extend(
	{
		hover: function(t, e)
		{
			return this.mouseenter(t)
				.mouseleave(e || t)
		}
	}), ot.focusin = "onfocusin" in t, ot.focusin || at.each(
	{
		focus: "focusin",
		blur: "focusout"
	}, function(t, e)
	{
		var i = function(t)
		{
			at.event.simulate(e, t.target, at.event.fix(t))
		};
		at.event.special[e] = {
			setup: function()
			{
				var n = this.ownerDocument || this,
					r = At.access(n, e);
				r || n.addEventListener(t, i, !0), At.access(n, e, (r || 0) + 1)
			},
			teardown: function()
			{
				var n = this.ownerDocument || this,
					r = At.access(n, e) - 1;
				r ? At.access(n, e, r) : (n.removeEventListener(t, i, !0), At.remove(n, e))
			}
		}
	});
	var ge = t.location,
		ve = at.now(),
		ye = /\?/;
	at.parseXML = function(e)
	{
		var i;
		if (!e || "string" != typeof e) return null;
		try
		{
			i = (new t.DOMParser)
				.parseFromString(e, "text/xml")
		}
		catch (t)
		{
			i = void 0
		}
		return i && !i.getElementsByTagName("parsererror")
			.length || at.error("Invalid XML: " + e), i
	};
	var _e = /\[\]$/,
		xe = /\r?\n/g,
		be = /^(?:submit|button|image|reset|file)$/i,
		we = /^(?:input|select|textarea|keygen)/i;
	at.param = function(t, e)
	{
		var i, n = [],
			r = function(t, e)
			{
				var i = at.isFunction(e) ? e() : e;
				n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
			};
		if (Array.isArray(t) || t.jquery && !at.isPlainObject(t)) at.each(t, function()
		{
			r(this.name, this.value)
		});
		else
			for (i in t) X(i, t[i], e, r);
		return n.join("&")
	}, at.fn.extend(
	{
		serialize: function()
		{
			return at.param(this.serializeArray())
		},
		serializeArray: function()
		{
			return this.map(function()
				{
					var t = at.prop(this, "elements");
					return t ? at.makeArray(t) : this
				})
				.filter(function()
				{
					var t = this.type;
					return this.name && !at(this)
						.is(":disabled") && we.test(this.nodeName) && !be.test(t) && (this.checked || !Nt.test(t))
				})
				.map(function(t, e)
				{
					var i = at(this)
						.val();
					return null == i ? null : Array.isArray(i) ? at.map(i, function(t)
					{
						return {
							name: e.name,
							value: t.replace(xe, "\r\n")
						}
					}) :
					{
						name: e.name,
						value: i.replace(xe, "\r\n")
					}
				})
				.get()
		}
	});
	var Te = /%20/g,
		ke = /#.*$/,
		Ce = /([?&])_=[^&]*/,
		Se = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ae = /^(?:GET|HEAD)$/,
		Pe = /^\/\//,
		Fe = {},
		Ee = {},
		$e = "*/".concat("*"),
		De = Y.createElement("a");
	De.href = ge.href, at.extend(
	{
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings:
		{
			url: ge.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ge.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts:
			{
				"*": $e,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents:
			{
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields:
			{
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters:
			{
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": at.parseXML
			},
			flatOptions:
			{
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e)
		{
			return e ? V(V(t, at.ajaxSettings), e) : V(at.ajaxSettings, t)
		},
		ajaxPrefilter: W(Fe),
		ajaxTransport: W(Ee),
		ajax: function(e, i)
		{
			function n(e, i, n, a)
			{
				var c, h, f, x, b, w = i;
				u || (u = !0, l && t.clearTimeout(l), r = void 0, o = a || "", T.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, n && (x = function(t, e, i)
				{
					for (var n, r, s, o, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
					if (n)
						for (r in a)
							if (a[r] && a[r].test(n))
							{
								l.unshift(r);
								break
							} if (l[0] in i) s = l[0];
					else
					{
						for (r in i)
						{
							if (!l[0] || t.converters[r + " " + l[0]])
							{
								s = r;
								break
							}
							o || (o = r)
						}
						s = s || o
					}
					if (s) return s !== l[0] && l.unshift(s), i[s]
				}(p, T, n)), x = function(t, e, i, n)
				{
					var r, s, o, a, l, c = {},
						u = t.dataTypes.slice();
					if (u[1])
						for (o in t.converters) c[o.toLowerCase()] = t.converters[o];
					for (s = u.shift(); s;)
						if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())
							if ("*" === s) s = l;
							else if ("*" !== l && l !== s)
					{
						if (!(o = c[l + " " + s] || c["* " + s]))
							for (r in c)
								if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]]))
								{
									!0 === o ? o = c[r] : !0 !== c[r] && (s = a[0], u.unshift(a[1]));
									break
								} if (!0 !== o)
							if (o && t.throws) e = o(e);
							else try
							{
								e = o(e)
							}
						catch (t)
						{
							return {
								state: "parsererror",
								error: o ? t : "No conversion from " + l + " to " + s
							}
						}
					}
					return {
						state: "success",
						data: e
					}
				}(p, x, T, c), c ? (p.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (at.lastModified[s] = b), (b = T.getResponseHeader("etag")) && (at.etag[s] = b)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = x.state, h = x.data, c = !(f = x.error))) : (f = w, !e && w || (w = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (i || w) + "", c ? v.resolveWith(m, [h, w, T]) : v.rejectWith(m, [T, w, f]), T.statusCode(_), _ = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, p, c ? h : f]), y.fireWith(m, [T, w]), d && (g.trigger("ajaxComplete", [T, p]), --at.active || at.event.trigger("ajaxStop")))
			}
			"object" == _typeof3(e) && (i = e, e = void 0), i = i || {};
			var r, s, o, a, l, c, u, d, h, f, p = at.ajaxSetup({}, i),
				m = p.context || p,
				g = p.context && (m.nodeType || m.jquery) ? at(m) : at.event,
				v = at.Deferred(),
				y = at.Callbacks("once memory"),
				_ = p.statusCode || {},
				x = {},
				b = {},
				w = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(t)
					{
						var e;
						if (u)
						{
							if (!a)
								for (a = {}; e = Se.exec(o);) a[e[1].toLowerCase()] = e[2];
							e = a[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function()
					{
						return u ? o : null
					},
					setRequestHeader: function(t, e)
					{
						return null == u && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t, x[t] = e), this
					},
					overrideMimeType: function(t)
					{
						return null == u && (p.mimeType = t), this
					},
					statusCode: function(t)
					{
						var e;
						if (t)
							if (u) T.always(t[T.status]);
							else
								for (e in t) _[e] = [_[e], t[e]];
						return this
					},
					abort: function(t)
					{
						var e = t || w;
						return r && r.abort(e), n(0, e), this
					}
				};
			if (v.promise(T), p.url = ((e || p.url || ge.href) + "")
				.replace(Pe, ge.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*")
				.toLowerCase()
				.match(wt) || [""], null == p.crossDomain)
			{
				c = Y.createElement("a");
				try
				{
					c.href = p.url, c.href = c.href, p.crossDomain = De.protocol + "//" + De.host != c.protocol + "//" + c.host
				}
				catch (t)
				{
					p.crossDomain = !0
				}
			}
			if (p.data && p.processData && "string" != typeof p.data && (p.data = at.param(p.data, p.traditional)), U(Fe, p, i, T), u) return T;
			for (h in (d = at.event && p.global) && 0 == at.active++ && at.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ae.test(p.type), s = p.url.replace(ke, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "")
				.indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Te, "+")) : (f = p.url.slice(s.length), p.data && (s += (ye.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Ce, "$1"), f = (ye.test(s) ? "&" : "?") + "_=" + ve++ + f), p.url = s + f), p.ifModified && (at.lastModified[s] && T.setRequestHeader("If-Modified-Since", at.lastModified[s]), at.etag[s] && T.setRequestHeader("If-None-Match", at.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(h, p.headers[h]);
			if (p.beforeSend && (!1 === p.beforeSend.call(m, T, p) || u)) return T.abort();
			if (w = "abort", y.add(p.complete), T.done(p.success), T.fail(p.error), r = U(Ee, p, i, T))
			{
				if (T.readyState = 1, d && g.trigger("ajaxSend", [T, p]), u) return T;
				p.async && p.timeout > 0 && (l = t.setTimeout(function()
				{
					T.abort("timeout")
				}, p.timeout));
				try
				{
					u = !1, r.send(x, n)
				}
				catch (t)
				{
					if (u) throw t;
					n(-1, t)
				}
			}
			else n(-1, "No Transport");
			return T
		},
		getJSON: function(t, e, i)
		{
			return at.get(t, e, i, "json")
		},
		getScript: function(t, e)
		{
			return at.get(t, void 0, e, "script")
		}
	}), at.each(["get", "post"], function(t, e)
	{
		at[e] = function(t, i, n, r)
		{
			return at.isFunction(i) && (r = r || n, n = i, i = void 0), at.ajax(at.extend(
			{
				url: t,
				type: e,
				dataType: r,
				data: i,
				success: n
			}, at.isPlainObject(t) && t))
		}
	}), at._evalUrl = function(t)
	{
		return at.ajax(
		{
			url: t,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, at.fn.extend(
	{
		wrapAll: function(t)
		{
			var e;
			return this[0] && (at.isFunction(t) && (t = t.call(this[0])), e = at(t, this[0].ownerDocument)
				.eq(0)
				.clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function()
				{
					for (var t = this; t.firstElementChild;) t = t.firstElementChild;
					return t
				})
				.append(this)), this
		},
		wrapInner: function(t)
		{
			return at.isFunction(t) ? this.each(function(e)
			{
				at(this)
					.wrapInner(t.call(this, e))
			}) : this.each(function()
			{
				var e = at(this),
					i = e.contents();
				i.length ? i.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t)
		{
			var e = at.isFunction(t);
			return this.each(function(i)
			{
				at(this)
					.wrapAll(e ? t.call(this, i) : t)
			})
		},
		unwrap: function(t)
		{
			return this.parent(t)
				.not("body")
				.each(function()
				{
					at(this)
						.replaceWith(this.childNodes)
				}), this
		}
	}), at.expr.pseudos.hidden = function(t)
	{
		return !at.expr.pseudos.visible(t)
	}, at.expr.pseudos.visible = function(t)
	{
		return !!(t.offsetWidth || t.offsetHeight || t.getClientRects()
			.length)
	}, at.ajaxSettings.xhr = function()
	{
		try
		{
			return new t.XMLHttpRequest
		}
		catch (t) {}
	};
	var Oe = {
			0: 200,
			1223: 204
		},
		Me = at.ajaxSettings.xhr();
	ot.cors = !!Me && "withCredentials" in Me, ot.ajax = Me = !!Me, at.ajaxTransport(function(e)
	{
		var i, n;
		if (ot.cors || Me && !e.crossDomain) return {
			send: function(r, s)
			{
				var o, a = e.xhr();
				if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (o in e.xhrFields) a[o] = e.xhrFields[o];
				for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(o, r[o]);
				i = function(t)
				{
					return function()
					{
						i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Oe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ?
						{
							binary: a.response
						} :
						{
							text: a.responseText
						}, a.getAllResponseHeaders()))
					}
				}, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function()
				{
					4 === a.readyState && t.setTimeout(function()
					{
						i && n()
					})
				}, i = i("abort");
				try
				{
					a.send(e.hasContent && e.data || null)
				}
				catch (t)
				{
					if (i) throw t
				}
			},
			abort: function()
			{
				i && i()
			}
		}
	}), at.ajaxPrefilter(function(t)
	{
		t.crossDomain && (t.contents.script = !1)
	}), at.ajaxSetup(
	{
		accepts:
		{
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents:
		{
			script: /\b(?:java|ecma)script\b/
		},
		converters:
		{
			"text script": function(t)
			{
				return at.globalEval(t), t
			}
		}
	}), at.ajaxPrefilter("script", function(t)
	{
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), at.ajaxTransport("script", function(t)
	{
		var e, i;
		if (t.crossDomain) return {
			send: function(n, r)
			{
				e = at("<script>")
					.prop(
					{
						charset: t.scriptCharset,
						src: t.url
					})
					.on("load error", i = function(t)
					{
						e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
					}), Y.head.appendChild(e[0])
			},
			abort: function()
			{
				i && i()
			}
		}
	});
	var je = [],
		Re = /(=)\?(?=&|$)|\?\?/;
	at.ajaxSetup(
	{
		jsonp: "callback",
		jsonpCallback: function()
		{
			var t = je.pop() || at.expando + "_" + ve++;
			return this[t] = !0, t
		}
	}), at.ajaxPrefilter("json jsonp", function(e, i, n)
	{
		var r, s, o, a = !1 !== e.jsonp && (Re.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "")
			.indexOf("application/x-www-form-urlencoded") && Re.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = at.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Re, "$1" + r) : !1 !== e.jsonp && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function()
		{
			return o || at.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", s = t[r], t[r] = function()
		{
			o = arguments
		}, n.always(function()
		{
			void 0 === s ? at(t)
				.removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, je.push(r)), o && at.isFunction(s) && s(o[0]), o = s = void 0
		}), "script"
	}), ot.createHTMLDocument = function()
	{
		var t = Y.implementation.createHTMLDocument("")
			.body;
		return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
	}(), at.parseHTML = function(t, e, i)
	{
		return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (ot.createHTMLDocument ? ((n = (e = Y.implementation.createHTMLDocument(""))
				.createElement("base"))
			.href = Y.location.href, e.head.appendChild(n)) : e = Y), s = !i && [], (r = gt.exec(t)) ? [e.createElement(r[1])] : (r = y([t], e, s), s && s.length && at(s)
			.remove(), at.merge([], r.childNodes)));
		var n, r, s
	}, at.fn.load = function(t, e, i)
	{
		var n, r, s, o = this,
			a = t.indexOf(" ");
		return a > -1 && (n = z(t.slice(a)), t = t.slice(0, a)), at.isFunction(e) ? (i = e, e = void 0) : e && "object" == _typeof3(e) && (r = "POST"), o.length > 0 && at.ajax(
			{
				url: t,
				type: r || "GET",
				dataType: "html",
				data: e
			})
			.done(function(t)
			{
				s = arguments, o.html(n ? at("<div>")
					.append(at.parseHTML(t))
					.find(n) : t)
			})
			.always(i && function(t, e)
			{
				o.each(function()
				{
					i.apply(this, s || [t.responseText, e, t])
				})
			}), this
	}, at.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e)
	{
		at.fn[e] = function(t)
		{
			return this.on(e, t)
		}
	}), at.expr.pseudos.animated = function(t)
	{
		return at.grep(at.timers, function(e)
			{
				return t === e.elem
			})
			.length
	}, at.offset = {
		setOffset: function(t, e, i)
		{
			var n, r, s, o, a, l, c = at.css(t, "position"),
				u = at(t),
				d = {};
			"static" === c && (t.style.position = "relative"), a = u.offset(), s = at.css(t, "top"), l = at.css(t, "left"), ("absolute" === c || "fixed" === c) && (s + l)
				.indexOf("auto") > -1 ? (o = (n = u.position())
					.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), at.isFunction(e) && (e = e.call(t, i, at.extend({}, a))), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, at.fn.extend(
	{
		offset: function(t)
		{
			if (arguments.length) return void 0 === t ? this : this.each(function(e)
			{
				at.offset.setOffset(this, t, e)
			});
			var e, i, n, r, s = this[0];
			return s ? s.getClientRects()
				.length ? (n = s.getBoundingClientRect(), i = (e = s.ownerDocument)
					.documentElement, r = e.defaultView,
					{
						top: n.top + r.pageYOffset - i.clientTop,
						left: n.left + r.pageXOffset - i.clientLeft
					}) :
				{
					top: 0,
					left: 0
				} : void 0
		},
		position: function()
		{
			if (this[0])
			{
				var t, e, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === at.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), r(t[0], "html") || (n = t.offset()), n = {
					top: n.top + at.css(t[0], "borderTopWidth", !0),
					left: n.left + at.css(t[0], "borderLeftWidth", !0)
				}),
				{
					top: e.top - n.top - at.css(i, "marginTop", !0),
					left: e.left - n.left - at.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function()
		{
			return this.map(function()
			{
				for (var t = this.offsetParent; t && "static" === at.css(t, "position");) t = t.offsetParent;
				return t || zt
			})
		}
	}), at.each(
	{
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, e)
	{
		var i = "pageYOffset" === e;
		at.fn[t] = function(n)
		{
			return Ct(this, function(t, n, r)
			{
				var s;
				if (at.isWindow(t) ? s = t : 9 === t.nodeType && (s = t.defaultView), void 0 === r) return s ? s[e] : t[n];
				s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r
			}, t, n, arguments.length)
		}
	}), at.each(["top", "left"], function(t, e)
	{
		at.cssHooks[e] = $(ot.pixelPosition, function(t, i)
		{
			if (i) return i = E(t, e), Jt.test(i) ? at(t)
				.position()[e] + "px" : i
		})
	}), at.each(
	{
		Height: "height",
		Width: "width"
	}, function(t, e)
	{
		at.each(
		{
			padding: "inner" + t,
			content: e,
			"": "outer" + t
		}, function(i, n)
		{
			at.fn[n] = function(r, s)
			{
				var o = arguments.length && (i || "boolean" != typeof r),
					a = i || (!0 === r || !0 === s ? "margin" : "border");
				return Ct(this, function(e, i, r)
				{
					var s;
					return at.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? at.css(e, i, a) : at.style(e, i, r, a)
				}, e, o ? r : void 0, o)
			}
		})
	}), at.fn.extend(
	{
		bind: function(t, e, i)
		{
			return this.on(t, null, e, i)
		},
		unbind: function(t, e)
		{
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n)
		{
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i)
		{
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
		}
	}), at.holdReady = function(t)
	{
		t ? at.readyWait++ : at.ready(!0)
	}, at.isArray = Array.isArray, at.parseJSON = JSON.parse, at.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function()
	{
		return at
	});
	var Ne = t.jQuery,
		Le = t.$;
	return at.noConflict = function(e)
	{
		return t.$ === at && (t.$ = Le), e && t.jQuery === at && (t.jQuery = Ne), at
	}, e || (t.jQuery = t.$ = at), at
}),
function(t)
{
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == ("undefined" == typeof module ? "undefined" : _typeof3(module)) && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t)
{
	t.extend(t.fn,
	{
		validate: function(e)
		{
			if (this.length)
			{
				var i = t.data(this[0], "validator");
				return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e)
				{
					i.submitButton = e.currentTarget, t(this)
						.hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this)
						.attr("formnovalidate") && (i.cancelSubmit = !0)
				}), this.on("submit.validate", function(e)
				{
					function n()
					{
						var n, r;
						return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = t("<input type='hidden'/>")
							.attr("name", i.submitButton.name)
							.val(t(i.submitButton)
								.val())
							.appendTo(i.currentForm)), !i.settings.submitHandler || (r = i.settings.submitHandler.call(i, i.currentForm, e), n && n.remove(), void 0 !== r && r)
					}
					return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
				})), i)
			}
			e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
		},
		valid: function()
		{
			var e, i, n;
			return t(this[0])
				.is("form") ? e = this.validate()
				.form() : (n = [], e = !0, i = t(this[0].form)
					.validate(), this.each(function()
					{
						(e = i.element(this) && e) || (n = n.concat(i.errorList))
					}), i.errorList = n), e
		},
		rules: function(e, i)
		{
			var n, r, s, o, a, l, c = this[0];
			if (null != c && (!c.form && c.hasAttribute("contenteditable") && (c.form = this.closest("form")[0], c.name = this.attr("name")), null != c.form))
			{
				if (e) switch (n = t.data(c.form, "validator")
					.settings, r = n.rules, s = t.validator.staticRules(c), e)
				{
					case "add":
						t.extend(s, t.validator.normalizeRule(i)), delete s.messages, r[c.name] = s, i.messages && (n.messages[c.name] = t.extend(n.messages[c.name], i.messages));
						break;
					case "remove":
						return i ? (l = {}, t.each(i.split(/\s/), function(t, e)
						{
							l[e] = s[e], delete s[e]
						}), l) : (delete r[c.name], s)
				}
				return (o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(c), t.validator.attributeRules(c), t.validator.dataRules(c), t.validator.staticRules(c)), c))
					.required && (a = o.required, delete o.required, o = t.extend(
					{
						required: a
					}, o)), o.remote && (a = o.remote, delete o.remote, o = t.extend(o,
					{
						remote: a
					})), o
			}
		}
	}), t.extend(t.expr.pseudos || t.expr[":"],
	{
		blank: function(e)
		{
			return !t.trim("" + t(e)
				.val())
		},
		filled: function(e)
		{
			var i = t(e)
				.val();
			return null !== i && !!t.trim("" + i)
		},
		unchecked: function(e)
		{
			return !t(e)
				.prop("checked")
		}
	}), t.validator = function(e, i)
	{
		this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
	}, t.validator.format = function(e, i)
	{
		return 1 === arguments.length ? function()
		{
			var i = t.makeArray(arguments);
			return i.unshift(e), t.validator.format.apply(this, i)
		} : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments)
			.slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i)
		{
			e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function()
			{
				return i
			})
		}), e)
	}, t.extend(t.validator,
	{
		defaults:
		{
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: t([]),
			errorLabelContainer: t([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t)
			{
				this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
			},
			onfocusout: function(t)
			{
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(e, i)
			{
				9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
			},
			onclick: function(t)
			{
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(e, i, n)
			{
				"radio" === e.type ? this.findByName(e.name)
					.addClass(i)
					.removeClass(n) : t(e)
					.addClass(i)
					.removeClass(n)
			},
			unhighlight: function(e, i, n)
			{
				"radio" === e.type ? this.findByName(e.name)
					.removeClass(i)
					.addClass(n) : t(e)
					.removeClass(i)
					.addClass(n)
			}
		},
		setDefaults: function(e)
		{
			t.extend(t.validator.defaults, e)
		},
		messages:
		{
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: t.validator.format("Please enter no more than {0} characters."),
			minlength: t.validator.format("Please enter at least {0} characters."),
			rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
			range: t.validator.format("Please enter a value between {0} and {1}."),
			max: t.validator.format("Please enter a value less than or equal to {0}."),
			min: t.validator.format("Please enter a value greater than or equal to {0}."),
			step: t.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype:
		{
			init: function()
			{
				function e(e)
				{
					!this.form && this.hasAttribute("contenteditable") && (this.form = t(this)
						.closest("form")[0], this.name = t(this)
						.attr("name"));
					var i = t.data(this.form, "validator"),
						n = "on" + e.type.replace(/^validate/, ""),
						r = i.settings;
					r[n] && !t(this)
						.is(r.ignore) && r[n].call(i, this, e)
				}
				this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer)
					.add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var i, n = this.groups = {};
				t.each(this.settings.groups, function(e, i)
					{
						"string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i)
						{
							n[i] = e
						})
					}), i = this.settings.rules, t.each(i, function(e, n)
					{
						i[e] = t.validator.normalizeRule(n)
					}), t(this.currentForm)
					.on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e)
					.on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm)
					.on("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function()
			{
				return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm)
					.triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function()
			{
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function(e)
			{
				var i, n, r = this.clean(e),
					s = this.validationTargetFor(r),
					o = this,
					a = !0;
				return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = t(s), (n = this.groups[s.name]) && t.each(this.groups, function(t, e)
					{
						e === n && t !== s.name && (r = o.validationTargetFor(o.clean(o.findByName(t)))) && r.name in o.invalid && (o.currentElements.push(r), a = o.check(r) && a)
					}), i = !1 !== this.check(s), a = a && i, this.invalid[s.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e)
					.attr("aria-invalid", !i)), a
			},
			showErrors: function(e)
			{
				if (e)
				{
					var i = this;
					t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e)
					{
						return {
							message: t,
							element: i.findByName(e)[0]
						}
					}), this.successList = t.grep(this.successList, function(t)
					{
						return !(t.name in e)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function()
			{
				t.fn.resetForm && t(this.currentForm)
					.resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var e = this.elements()
					.removeData("previousValue")
					.removeAttr("aria-invalid");
				this.resetElements(e)
			},
			resetElements: function(t)
			{
				var e;
				if (this.settings.unhighlight)
					for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name)
						.removeClass(this.settings.validClass);
				else t.removeClass(this.settings.errorClass)
					.removeClass(this.settings.validClass)
			},
			numberOfInvalids: function()
			{
				return this.objectLength(this.invalid)
			},
			objectLength: function(t)
			{
				var e, i = 0;
				for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
				return i
			},
			hideErrors: function()
			{
				this.hideThese(this.toHide)
			},
			hideThese: function(t)
			{
				t.not(this.containers)
					.text(""), this.addWrapper(t)
					.hide()
			},
			valid: function()
			{
				return 0 === this.size()
			},
			size: function()
			{
				return this.errorList.length
			},
			focusInvalid: function()
			{
				if (this.settings.focusInvalid) try
				{
					t(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
						.filter(":visible")
						.focus()
						.trigger("focusin")
				}
				catch (t) {}
			},
			findLastActive: function()
			{
				var e = this.lastActive;
				return e && 1 === t.grep(this.errorList, function(t)
					{
						return t.element.name === e.name
					})
					.length && e
			},
			elements: function()
			{
				var e = this,
					i = {};
				return t(this.currentForm)
					.find("input, select, textarea, [contenteditable]")
					.not(":submit, :reset, :image, :disabled")
					.not(this.settings.ignore)
					.filter(function()
					{
						var n = this.name || t(this)
							.attr("name");
						return !n && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this)
							.closest("form")[0], this.name = n), !(n in i || !e.objectLength(t(this)
							.rules()) || (i[n] = !0, 0))
					})
			},
			clean: function(e)
			{
				return t(e)[0]
			},
			errors: function()
			{
				var e = this.settings.errorClass.split(" ")
					.join(".");
				return t(this.settings.errorElement + "." + e, this.errorContext)
			},
			resetInternals: function()
			{
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
			},
			reset: function()
			{
				this.resetInternals(), this.currentElements = t([])
			},
			prepareForm: function()
			{
				this.reset(), this.toHide = this.errors()
					.add(this.containers)
			},
			prepareElement: function(t)
			{
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(e)
			{
				var i, n, r = t(e),
					s = e.type;
				return "radio" === s || "checkbox" === s ? this.findByName(e.name)
					.filter(":checked")
					.val() : "number" === s && void 0 !== e.validity ? e.validity.badInput ? "NaN" : r.val() : (i = e.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/")) >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\")) >= 0 ? i.substr(n + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
			},
			check: function(e)
			{
				e = this.validationTargetFor(this.clean(e));
				var i, n, r, s, o = t(e)
					.rules(),
					a = t.map(o, function(t, e)
					{
						return e
					})
					.length,
					l = !1,
					c = this.elementValue(e);
				if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s)
				{
					if ("string" != typeof(c = s.call(e, c))) throw new TypeError("The normalizer should return a string value.");
					delete o.normalizer
				}
				for (n in o)
				{
					r = {
						method: n,
						parameters: o[n]
					};
					try
					{
						if ("dependency-mismatch" === (i = t.validator.methods[n].call(this, c, e, r.parameters)) && 1 === a)
						{
							l = !0;
							continue
						}
						if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if (!i) return this.formatAndAdd(e, r), !1
					}
					catch (t)
					{
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."), t
					}
				}
				if (!l) return this.objectLength(o) && this.successList.push(e), !0
			},
			customDataMessage: function(e, i)
			{
				return t(e)
					.data("msg" + i.charAt(0)
						.toUpperCase() + i.substring(1)
						.toLowerCase()) || t(e)
					.data("msg")
			},
			customMessage: function(t, e)
			{
				var i = this.settings.messages[t];
				return i && (i.constructor === String ? i : i[e])
			},
			findDefined: function()
			{
				for (var t = 0; t < arguments.length; t++)
					if (void 0 !== arguments[t]) return arguments[t]
			},
			defaultMessage: function(e, i)
			{
				"string" == typeof i && (i = {
					method: i
				});
				var n = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
					r = /\$?\{(\d+)\}/g;
				return "function" == typeof n ? n = n.call(this, i.parameters, e) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)), n
			},
			formatAndAdd: function(t, e)
			{
				var i = this.defaultMessage(t, e);
				this.errorList.push(
				{
					message: i,
					element: t,
					method: e.method
				}), this.errorMap[t.name] = i, this.submitted[t.name] = i
			},
			addWrapper: function(t)
			{
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function()
			{
				var t, e, i;
				for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
				if (this.settings.unhighlight)
					for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow)
					.show()
			},
			validElements: function()
			{
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function()
			{
				return t(this.errorList)
					.map(function()
					{
						return this.element
					})
			},
			showLabel: function(e, i)
			{
				var n, r, s, o, a = this.errorsFor(e),
					l = this.idOrName(e),
					c = t(e)
					.attr("aria-describedby");
				a.length ? (a.removeClass(this.settings.validClass)
					.addClass(this.settings.errorClass), a.html(i)) : (n = a = t("<" + this.settings.errorElement + ">")
					.attr("id", l + "-error")
					.addClass(this.settings.errorClass)
					.html(i || ""), this.settings.wrapper && (n = a.hide()
						.show()
						.wrap("<" + this.settings.wrapper + "/>")
						.parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, t(e)) : n.insertAfter(e), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']")
					.length && (s = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (c += " " + s) : c = s, t(e)
						.attr("aria-describedby", c), (r = this.groups[e.name]) && (o = this, t.each(o.groups, function(e, i)
						{
							i === r && t("[name='" + o.escapeCssMeta(e) + "']", o.currentForm)
								.attr("aria-describedby", a.attr("id"))
						})))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
			},
			errorsFor: function(e)
			{
				var i = this.escapeCssMeta(this.idOrName(e)),
					n = t(e)
					.attr("aria-describedby"),
					r = "label[for='" + i + "'], label[for='" + i + "'] *";
				return n && (r = r + ", #" + this.escapeCssMeta(n)
						.replace(/\s+/g, ", #")), this.errors()
					.filter(r)
			},
			escapeCssMeta: function(t)
			{
				return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(t)
			{
				return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
			},
			validationTargetFor: function(e)
			{
				return this.checkable(e) && (e = this.findByName(e.name)), t(e)
					.not(this.settings.ignore)[0]
			},
			checkable: function(t)
			{
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(e)
			{
				return t(this.currentForm)
					.find("[name='" + this.escapeCssMeta(e) + "']")
			},
			getLength: function(e, i)
			{
				switch (i.nodeName.toLowerCase())
				{
					case "select":
						return t("option:selected", i)
							.length;
					case "input":
						if (this.checkable(i)) return this.findByName(i.name)
							.filter(":checked")
							.length
				}
				return e.length
			},
			depend: function(t, e)
			{
				return !this.dependTypes[_typeof3(t)] || this.dependTypes[_typeof3(t)](t, e)
			},
			dependTypes:
			{
				boolean: function(t)
				{
					return t
				},
				string: function(e, i)
				{
					return !!t(e, i.form)
						.length
				},
				function: function(t, e)
				{
					return t(e)
				}
			},
			optional: function(e)
			{
				var i = this.elementValue(e);
				return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
			},
			startRequest: function(e)
			{
				this.pending[e.name] || (this.pendingRequest++, t(e)
					.addClass(this.settings.pendingClass), this.pending[e.name] = !0)
			},
			stopRequest: function(e, i)
			{
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e)
					.removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm)
						.submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm)
						.remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm)
						.triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(e, i)
			{
				return i = "string" == typeof i && i || "remote", t.data(e, "previousValue") || t.data(e, "previousValue",
				{
					old: null,
					valid: !0,
					message: this.defaultMessage(e,
					{
						method: i
					})
				})
			},
			destroy: function()
			{
				this.resetForm(), t(this.currentForm)
					.off(".validate")
					.removeData("validator")
					.find(".validate-equalTo-blur")
					.off(".validate-equalTo")
					.removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings:
		{
			required:
			{
				required: !0
			},
			email:
			{
				email: !0
			},
			url:
			{
				url: !0
			},
			date:
			{
				date: !0
			},
			dateISO:
			{
				dateISO: !0
			},
			number:
			{
				number: !0
			},
			digits:
			{
				digits: !0
			},
			creditcard:
			{
				creditcard: !0
			}
		},
		addClassRules: function(e, i)
		{
			e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
		},
		classRules: function(e)
		{
			var i = {},
				n = t(e)
				.attr("class");
			return n && t.each(n.split(" "), function()
			{
				this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
			}), i
		},
		normalizeAttributeRule: function(t, e, i, n)
		{
			/min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
		},
		attributeRules: function(e)
		{
			var i, n, r = {},
				s = t(e),
				o = e.getAttribute("type");
			for (i in t.validator.methods) "required" === i ? ("" === (n = e.getAttribute(i)) && (n = !0), n = !!n) : n = s.attr(i), this.normalizeAttributeRule(r, o, i, n);
			return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
		},
		dataRules: function(e)
		{
			var i, n, r = {},
				s = t(e),
				o = e.getAttribute("type");
			for (i in t.validator.methods) n = s.data("rule" + i.charAt(0)
				.toUpperCase() + i.substring(1)
				.toLowerCase()), this.normalizeAttributeRule(r, o, i, n);
			return r
		},
		staticRules: function(e)
		{
			var i = {},
				n = t.data(e.form, "validator");
			return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
		},
		normalizeRules: function(e, i)
		{
			return t.each(e, function(n, r)
			{
				if (!1 !== r)
				{
					if (r.param || r.depends)
					{
						var s = !0;
						switch (_typeof3(r.depends))
						{
							case "string":
								s = !!t(r.depends, i.form)
									.length;
								break;
							case "function":
								s = r.depends.call(i, i)
						}
						s ? e[n] = void 0 === r.param || r.param : (t.data(i.form, "validator")
							.resetElements(t(i)), delete e[n])
					}
				}
				else delete e[n]
			}), t.each(e, function(n, r)
			{
				e[n] = t.isFunction(r) && "normalizer" !== n ? r(i) : r
			}), t.each(["minlength", "maxlength"], function()
			{
				e[this] && (e[this] = Number(e[this]))
			}), t.each(["rangelength", "range"], function()
			{
				var i;
				e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "")
					.split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
			}), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
		},
		normalizeRule: function(e)
		{
			if ("string" == typeof e)
			{
				var i = {};
				t.each(e.split(/\s/), function()
				{
					i[this] = !0
				}), e = i
			}
			return e
		},
		addMethod: function(e, i, n)
		{
			t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
		},
		methods:
		{
			required: function(e, i, n)
			{
				if (!this.depend(n, i)) return "dependency-mismatch";
				if ("select" === i.nodeName.toLowerCase())
				{
					var r = t(i)
						.val();
					return r && r.length > 0
				}
				return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0
			},
			email: function(t, e)
			{
				return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
			},
			url: function(t, e)
			{
				return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
			},
			date: function(t, e)
			{
				return this.optional(e) || !/Invalid|NaN/.test(new Date(t)
					.toString())
			},
			dateISO: function(t, e)
			{
				return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
			},
			number: function(t, e)
			{
				return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function(t, e)
			{
				return this.optional(e) || /^\d+$/.test(t)
			},
			minlength: function(e, i, n)
			{
				var r = t.isArray(e) ? e.length : this.getLength(e, i);
				return this.optional(i) || r >= n
			},
			maxlength: function(e, i, n)
			{
				var r = t.isArray(e) ? e.length : this.getLength(e, i);
				return this.optional(i) || r <= n
			},
			rangelength: function(e, i, n)
			{
				var r = t.isArray(e) ? e.length : this.getLength(e, i);
				return this.optional(i) || r >= n[0] && r <= n[1]
			},
			min: function(t, e, i)
			{
				return this.optional(e) || t >= i
			},
			max: function(t, e, i)
			{
				return this.optional(e) || t <= i
			},
			range: function(t, e, i)
			{
				return this.optional(e) || t >= i[0] && t <= i[1]
			},
			step: function(e, i, n)
			{
				var r, s = t(i)
					.attr("type"),
					o = "Step attribute on input type " + s + " is not supported.",
					a = new RegExp("\\b" + s + "\\b"),
					l = function(t)
					{
						var e = ("" + t)
							.match(/(?:\.(\d+))?$/);
						return e && e[1] ? e[1].length : 0
					},
					c = function(t)
					{
						return Math.round(t * Math.pow(10, r))
					},
					u = !0;
				if (s && !a.test(["text", "number", "range"].join())) throw new Error(o);
				return r = l(n), (l(e) > r || c(e) % c(n) != 0) && (u = !1), this.optional(i) || u
			},
			equalTo: function(e, i, n)
			{
				var r = t(n);
				return this.settings.onfocusout && r.not(".validate-equalTo-blur")
					.length && r.addClass("validate-equalTo-blur")
					.on("blur.validate-equalTo", function()
					{
						t(i)
							.valid()
					}), e === r.val()
			},
			remote: function(e, i, n, r)
			{
				if (this.optional(i)) return "dependency-mismatch";
				r = "string" == typeof r && r || "remote";
				var s, o, a, l = this.previousValue(i, r);
				return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, n = "string" == typeof n &&
				{
					url: n
				} || n, a = t.param(t.extend(
				{
					data: e
				}, n.data)), l.old === a ? l.valid : (l.old = a, s = this, this.startRequest(i), (o = {})[i.name] = e, t.ajax(t.extend(!0,
				{
					mode: "abort",
					port: "validate" + i.name,
					dataType: "json",
					data: o,
					context: s.currentForm,
					success: function(t)
					{
						var n, o, a, c = !0 === t || "true" === t;
						s.settings.messages[i.name][r] = l.originalMessage, c ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(i), s.formSubmitted = a, s.successList.push(i), s.invalid[i.name] = !1, s.showErrors()) : (n = {}, o = t || s.defaultMessage(i,
						{
							method: r,
							parameters: e
						}), n[i.name] = l.message = o, s.invalid[i.name] = !0, s.showErrors(n)), l.valid = c, s.stopRequest(i, c)
					}
				}, n)), "pending")
			}
		}
	});
	var e, i = {};
	return t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n)
	{
		var r = t.port;
		"abort" === t.mode && (i[r] && i[r].abort(), i[r] = n)
	}) : (e = t.ajax, t.ajax = function(n)
	{
		var r = ("mode" in n ? n : t.ajaxSettings)
			.mode,
			s = ("port" in n ? n : t.ajaxSettings)
			.port;
		return "abort" === r ? (i[s] && i[s].abort(), i[s] = e.apply(this, arguments), i[s]) : e.apply(this, arguments)
	}), t
}),
function(t, e, i)
{
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof3(exports)) ? module.exports = t(require("jquery")) : t(e || i)
}(function(t)
{
	var e = function(e, i, n)
	{
		var r = {
			invalid: [],
			getCaret: function()
			{
				try
				{
					var t, i = 0,
						n = e.get(0),
						s = document.selection,
						o = n.selectionStart;
					return s && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = s.createRange())
						.moveStart("character", -r.val()
							.length), i = t.text.length) : (o || "0" === o) && (i = o), i
				}
				catch (t) {}
			},
			setCaret: function(t)
			{
				try
				{
					if (e.is(":focus"))
					{
						var i, n = e.get(0);
						n.setSelectionRange ? n.setSelectionRange(t, t) : ((i = n.createTextRange())
							.collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select())
					}
				}
				catch (t) {}
			},
			events: function()
			{
				e.on("keydown.mask", function(t)
					{
						e.data("mask-keycode", t.keyCode || t.which), e.data("mask-previus-value", e.val()), e.data("mask-previus-caret-pos", r.getCaret()), r.maskDigitPosMapOld = r.maskDigitPosMap
					})
					.on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", r.behaviour)
					.on("paste.mask drop.mask", function()
					{
						setTimeout(function()
						{
							e.keydown()
								.keyup()
						}, 100)
					})
					.on("change.mask", function()
					{
						e.data("changed", !0)
					})
					.on("blur.mask", function()
					{
						a === r.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1)
					})
					.on("blur.mask", function()
					{
						a = r.val()
					})
					.on("focus.mask", function(e)
					{
						!0 === n.selectOnFocus && t(e.target)
							.select()
					})
					.on("focusout.mask", function()
					{
						n.clearIfNotMatch && !s.test(r.val()) && r.val("")
					})
			},
			getRegexMask: function()
			{
				for (var t, e, n, r, s, a, l = [], c = 0; c < i.length; c++)(t = o.translation[i.charAt(c)]) ? (e = t.pattern.toString()
					.replace(/.{1}$|^.{1}/g, ""), n = t.optional, (r = t.recursive) ? (l.push(i.charAt(c)), s = {
						digit: i.charAt(c),
						pattern: e
					}) : l.push(n || r ? e + "?" : e)) : l.push(i.charAt(c)
					.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
				return a = l.join(""), s && (a = a.replace(new RegExp("(" + s.digit + "(.*" + s.digit + ")?)"), "($1)?")
					.replace(new RegExp(s.digit, "g"), s.pattern)), new RegExp(a)
			},
			destroyEvents: function()
			{
				e.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
			},
			val: function(t)
			{
				var i, n = e.is("input") ? "val" : "text";
				return arguments.length > 0 ? (e[n]() !== t && e[n](t), i = e) : i = e[n](), i
			},
			calculateCaretPosition: function()
			{
				var t = e.data("mask-previus-value") || "",
					i = r.getMasked(),
					n = r.getCaret();
				if (t !== i)
				{
					var s = e.data("mask-previus-caret-pos") || 0,
						o = i.length,
						a = t.length,
						l = 0,
						c = 0,
						u = 0,
						d = 0,
						h = 0;
					for (h = n; h < o && r.maskDigitPosMap[h]; h++) c++;
					for (h = n - 1; h >= 0 && r.maskDigitPosMap[h]; h--) l++;
					for (h = n - 1; h >= 0; h--) r.maskDigitPosMap[h] && u++;
					for (h = s - 1; h >= 0; h--) r.maskDigitPosMapOld[h] && d++;
					if (n > a) n = 10 * o;
					else if (s >= n && s !== a)
					{
						if (!r.maskDigitPosMapOld[n])
						{
							var f = n;
							n -= d - u, n -= l, r.maskDigitPosMap[n] && (n = f)
						}
					}
					else n > s && (n += u - d, n += c)
				}
				return n
			},
			behaviour: function(i)
			{
				i = i || window.event, r.invalid = [];
				var n = e.data("mask-keycode");
				if (-1 === t.inArray(n, o.byPassKeys))
				{
					var s = r.getMasked(),
						a = r.getCaret();
					return setTimeout(function()
					{
						r.setCaret(r.calculateCaretPosition())
					}, 10), r.val(s), r.setCaret(a), r.callbacks(i)
				}
			},
			getMasked: function(t, e)
			{
				var s, a, l, c = [],
					u = void 0 === e ? r.val() : e + "",
					d = 0,
					h = i.length,
					f = 0,
					p = u.length,
					m = 1,
					g = "push",
					v = -1,
					y = 0,
					_ = [];
				for (n.reverse ? (g = "unshift", m = -1, s = 0, d = h - 1, f = p - 1, a = function()
					{
						return d > -1 && f > -1
					}) : (s = h - 1, a = function()
					{
						return d < h && f < p
					}); a();)
				{
					var x = i.charAt(d),
						b = u.charAt(f),
						w = o.translation[x];
					w ? (b.match(w.pattern) ? (c[g](b), w.recursive && (-1 === v ? v = d : d === s && (d = v - m), s === v && (d -= m)), d += m) : b === l ? (y--, l = void 0) : w.optional ? (d += m, f -= m) : w.fallback ? (c[g](w.fallback), d += m, f -= m) : r.invalid.push(
					{
						p: f,
						v: b,
						e: w.pattern
					}), f += m) : (t || c[g](x), b === x ? (_.push(f), f += m) : (l = x, _.push(f + y), y++), d += m)
				}
				var T = i.charAt(s);
				h !== p + 1 || o.translation[T] || c.push(T);
				var k = c.join("");
				return r.mapMaskdigitPositions(k, _, p), k
			},
			mapMaskdigitPositions: function(t, e, i)
			{
				var s = n.reverse ? t.length - i : 0;
				r.maskDigitPosMap = {};
				for (var o = 0; o < e.length; o++) r.maskDigitPosMap[e[o] + s] = 1
			},
			callbacks: function(t)
			{
				var s = r.val(),
					o = s !== a,
					l = [s, t, e, n],
					c = function(t, e, i)
					{
						"function" == typeof n[t] && e && n[t].apply(this, i)
					};
				c("onChange", !0 === o, l), c("onKeyPress", !0 === o, l), c("onComplete", s.length === i.length, l), c("onInvalid", r.invalid.length > 0, [s, t, e, r.invalid, n])
			}
		};
		e = t(e);
		var s, o = this,
			a = r.val();
		i = "function" == typeof i ? i(r.val(), void 0, e, n) : i, o.mask = i, o.options = n, o.remove = function()
		{
			var t = r.getCaret();
			return r.destroyEvents(), r.val(o.getCleanVal()), r.setCaret(t), e
		}, o.getCleanVal = function()
		{
			return r.getMasked(!0)
		}, o.getMaskedVal = function(t)
		{
			return r.getMasked(!1, t)
		}, o.init = function(a)
		{
			if (a = a || !1, n = n || {}, o.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, o.byPassKeys = t.jMaskGlobals.byPassKeys, o.translation = t.extend({}, t.jMaskGlobals.translation, n.translation), o = t.extend(!0, {}, o, n), s = r.getRegexMask(), a) r.events(), r.val(r.getMasked());
			else
			{
				n.placeholder && e.attr("placeholder", n.placeholder), e.data("mask") && e.attr("autocomplete", "off");
				for (var l = 0, c = !0; l < i.length; l++)
				{
					var u = o.translation[i.charAt(l)];
					if (u && u.recursive)
					{
						c = !1;
						break
					}
				}
				c && e.attr("maxlength", i.length), r.destroyEvents(), r.events();
				var d = r.getCaret();
				r.val(r.getMasked()), r.setCaret(d)
			}
		}, o.init(!e.is("input"))
	};
	t.maskWatchers = {};
	var i = function()
		{
			var i = t(this),
				r = {},
				s = "data-mask-",
				o = i.attr("data-mask");
			if (i.attr(s + "reverse") && (r.reverse = !0), i.attr(s + "clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === i.attr(s + "selectonfocus") && (r.selectOnFocus = !0), n(i, o, r)) return i.data("mask", new e(this, o, r))
		},
		n = function(e, i, n)
		{
			n = n || {};
			var r = t(e)
				.data("mask"),
				s = JSON.stringify,
				o = t(e)
				.val() || t(e)
				.text();
			try
			{
				return "function" == typeof i && (i = i(o)), "object" != _typeof3(r) || s(r.options) !== s(n) || r.mask !== i
			}
			catch (t) {}
		};
	t.fn.mask = function(i, r)
	{
		r = r || {};
		var s = this.selector,
			o = t.jMaskGlobals,
			a = o.watchInterval,
			l = r.watchInputs || o.watchInputs,
			c = function()
			{
				if (n(this, i, r)) return t(this)
					.data("mask", new e(this, i, r))
			};
		return t(this)
			.each(c), s && "" !== s && l && (clearInterval(t.maskWatchers[s]), t.maskWatchers[s] = setInterval(function()
			{
				t(document)
					.find(s)
					.each(c)
			}, a)), this
	}, t.fn.masked = function(t)
	{
		return this.data("mask")
			.getMaskedVal(t)
	}, t.fn.unmask = function()
	{
		return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function()
		{
			var e = t(this)
				.data("mask");
			e && e.remove()
				.removeData("mask")
		})
	}, t.fn.cleanVal = function()
	{
		return this.data("mask")
			.getCleanVal()
	}, t.applyDataMask = function(e)
	{
		((e = e || t.jMaskGlobals.maskElements) instanceof t ? e : t(e))
		.filter(t.jMaskGlobals.dataMaskAttr)
			.each(i)
	};
	var r = {
		maskElements: "input,td,span,div",
		dataMaskAttr: "*[data-mask]",
		dataMask: !0,
		watchInterval: 300,
		watchInputs: !0,
		useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && function(t)
		{
			var e, i = document.createElement("div");
			return (e = (t = "on" + t) in i) || (i.setAttribute(t, "return;"), e = "function" == typeof i[t]), i = null, e
		}("input"),
		watchDataMask: !1,
		byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
		translation:
		{
			0:
			{
				pattern: /\d/
			},
			9:
			{
				pattern: /\d/,
				optional: !0
			},
			"#":
			{
				pattern: /\d/,
				recursive: !0
			},
			A:
			{
				pattern: /[a-zA-Z0-9]/
			},
			S:
			{
				pattern: /[a-zA-Z]/
			}
		}
	};
	t.jMaskGlobals = t.jMaskGlobals || {}, (r = t.jMaskGlobals = t.extend(!0, {}, r, t.jMaskGlobals))
		.dataMask && t.applyDataMask(), setInterval(function()
		{
			t.jMaskGlobals.watchDataMask && t.applyDataMask()
		}, r.watchInterval)
}, window.jQuery, window.Zepto),
function(t)
{
	t.fn.viewportChecker = function(e)
	{
		var i = {
			classToAdd: "visible",
			classToRemove: "invisible",
			classToAddForFullView: "full-visible",
			removeClassAfterAnimation: !1,
			offset: 100,
			repeat: !1,
			invertBottomOffset: !0,
			callbackFunction: function(t, e) {},
			scrollHorizontal: !1,
			scrollBox: window
		};
		t.extend(i, e);
		var n = this,
			r = {
				height: t(i.scrollBox)
					.height(),
				width: t(i.scrollBox)
					.width()
			};
		return this.checkElements = function()
			{
				var e, s;
				i.scrollHorizontal ? (e = Math.max(t("html")
					.scrollLeft(), t("body")
					.scrollLeft(), t(window)
					.scrollLeft()), s = e + r.width) : (e = Math.max(t("html")
					.scrollTop(), t("body")
					.scrollTop(), t(window)
					.scrollTop()), s = e + r.height), n.each(function()
				{
					var n = t(this),
						o = {},
						a = {};
					if (n.data("vp-add-class") && (a.classToAdd = n.data("vp-add-class")), n.data("vp-remove-class") && (a.classToRemove = n.data("vp-remove-class")), n.data("vp-add-class-full-view") && (a.classToAddForFullView = n.data("vp-add-class-full-view")), n.data("vp-keep-add-class") && (a.removeClassAfterAnimation = n.data("vp-remove-after-animation")), n.data("vp-offset") && (a.offset = n.data("vp-offset")), n.data("vp-repeat") && (a.repeat = n.data("vp-repeat")), n.data("vp-scrollHorizontal") && (a.scrollHorizontal = n.data("vp-scrollHorizontal")), n.data("vp-invertBottomOffset") && (a.scrollHorizontal = n.data("vp-invertBottomOffset")), t.extend(o, i), t.extend(o, a), !n.data("vp-animated") || o.repeat)
					{
						String(o.offset)
							.indexOf("%") > 0 && (o.offset = parseInt(o.offset) / 100 * r.height);
						var l = o.scrollHorizontal ? n.offset()
							.left : n.offset()
							.top,
							c = o.scrollHorizontal ? l + n.width() : l + n.height(),
							u = Math.round(l) + o.offset,
							d = o.scrollHorizontal ? u + n.width() : u + n.height();
						o.invertBottomOffset && (d -= 2 * o.offset), u < s && d > e ? (n.removeClass(o.classToRemove), n.addClass(o.classToAdd), o.callbackFunction(n, "add"), c <= s && l >= e ? n.addClass(o.classToAddForFullView) : n.removeClass(o.classToAddForFullView), n.data("vp-animated", !0), o.removeClassAfterAnimation && n.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function()
						{
							n.removeClass(o.classToAdd)
						})) : n.hasClass(o.classToAdd) && o.repeat && (n.removeClass(o.classToAdd + " " + o.classToAddForFullView), o.callbackFunction(n, "remove"), n.data("vp-animated", !1))
					}
				})
			}, ("ontouchstart" in window || "onmsgesturechange" in window) && t(document)
			.bind("touchmove MSPointerMove pointermove", this.checkElements), t(i.scrollBox)
			.bind("load scroll", this.checkElements), t(window)
			.resize(function(e)
			{
				r = {
					height: t(i.scrollBox)
						.height(),
					width: t(i.scrollBox)
						.width()
				}, n.checkElements()
			}), this.checkElements(), this
	}
}(jQuery),
function()
{
	window.mediaCheck = function(options)
	{
		var breakpoints, checkQuery, convertEmToPx, createListener, getPXValue, hasMatchMedia, i, mmListener, mq, mqChange;
		if (mq = void 0, mqChange = void 0, createListener = void 0, convertEmToPx = void 0, getPXValue = void 0, hasMatchMedia = void 0 !== window.matchMedia && !!window.matchMedia("!")
			.addListener) return mqChange = function(t, e)
		{
			return t.matches ? "function" == typeof e.entry && e.entry(t) : "function" == typeof e.exit && e.exit(t), "function" == typeof e.both ? e.both(t) : void 0
		}, (createListener = function()
		{
			return (mq = window.matchMedia(options.media))
				.addListener(function()
				{
					return mqChange(mq, options)
				}), window.addEventListener("orientationchange", function()
				{
					return mq = window.matchMedia(options.media), mqChange(mq, options)
				}, !1), mqChange(mq, options)
		})();
		for (i in breakpoints = {}, mqChange = function(t, e)
			{
				return t.matches ? "function" != typeof e.entry || !1 !== breakpoints[e.media] && null != breakpoints[e.media] || e.entry(t) : "function" != typeof e.exit || !0 !== breakpoints[e.media] && null != breakpoints[e.media] || e.exit(t), "function" == typeof e.both && e.both(t), breakpoints[e.media] = t.matches
			}, convertEmToPx = function(t)
			{
				var e, i;
				return e = void 0, (e = document.createElement("div"))
					.style.width = "1em", e.style.position = "absolute", document.body.appendChild(e), i = t * e.offsetWidth, document.body.removeChild(e), i
			}, getPXValue = function(t, e)
			{
				var i;
				switch (i = void 0, e)
				{
					case "em":
						i = convertEmToPx(t);
						break;
					default:
						i = t
				}
				return i
			}, options) breakpoints[options.media] = null;
		return checkQuery = function checkQuery(parts)
		{
			var constraint, dimension, matches, ratio, value, windowHeight, windowWidth;
			return constraint = parts[1], dimension = parts[2], value = parts[4] ? getPXValue(parseInt(parts[3], 10), parts[4]) : parts[3], windowWidth = window.innerWidth || document.documentElement.clientWidth, windowHeight = window.innerHeight || document.documentElement.clientHeight, "width" === dimension ? matches = "max" === constraint && value > windowWidth || "min" === constraint && windowWidth > value : "height" === dimension ? matches = "max" === constraint && value > windowHeight || "min" === constraint && windowHeight > value : "aspect-ratio" === dimension && (ratio = windowWidth / windowHeight, matches = "max" === constraint && eval(ratio) < eval(value) || "min" === constraint && eval(ratio) > eval(value)), matches
		}, mmListener = function()
		{
			var t, e, i, n, r;
			for (t = !0, n = 0, r = (e = options.media.split(/\sand\s|,\s/))
				.length; r > n; n++) i = e[n].match(/\((.*?)-(.*?):\s([\d\/]*)(\w*)\)/), checkQuery(i) || (t = !1);
			return mqChange(
			{
				media: options.media,
				matches: t
			}, options)
		}, window.addEventListener ? window.addEventListener("resize", mmListener, !1) : window.attachEvent && window.attachEvent("onresize", mmListener), mmListener()
	}
}.call(void 0);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : window;
(_gsScope._gsQueue || (_gsScope._gsQueue = []))
.push(function()
	{
		"use strict";
		var t, e, i, n, r, s, o, a, l, c, u, d, h, f;
		_gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i)
			{
				var n = function(t)
					{
						var e, i = [],
							n = t.length;
						for (e = 0; e !== n; i.push(t[e++]));
						return i
					},
					r = function(t, e, i)
					{
						var n, r, s = t.cycle;
						for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
						delete t.cycle
					},
					s = function t(e, n, r)
					{
						i.call(this, e, n, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = t.prototype.render
					},
					o = i._internals,
					a = o.isSelector,
					l = o.isArray,
					c = s.prototype = i.to({}, .1, {}),
					u = [];
				s.version = "1.20.3", c.constructor = s, c.kill()
					._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function()
					{
						return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
					}, c.updateTo = function(t, e)
					{
						var n, r = this.ratio,
							s = this.vars.immediateRender || t.immediateRender;
						for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[n] = t[n];
						if (this._initted || s)
							if (e) this._initted = !1, s && this.render(0, !0, !0);
							else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998)
						{
							var o = this._totalTime;
							this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
						}
						else if (this._initted = !1, this._init(), this._time > 0 || s)
							for (var a, l = 1 / (1 - r), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
						return this
					}, c.render = function(t, e, n)
					{
						this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
						var r, s, a, l, c, u, d, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
							m = this._time,
							g = this._totalTime,
							v = this._cycle,
							y = this._duration,
							_ = this._rawPrevTime;
						if (t >= p - 1e-7 && t >= 0 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (_ < 0 || t <= 0 && t >= -1e-7 || 1e-10 === _ && "isPause" !== this.data) && _ !== t && (n = !0, _ > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = h = !e || t || _ === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && _ > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (_ >= 0 && (n = !0), this._rawPrevTime = h = !e || t || _ === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease, this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)), this.ratio = f ? 1 - f.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !f ? (c = this._time / y, (1 === (u = this._easeType) || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === (d = this._easePower) ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : f || (this.ratio = this._ease.getRatio(this._time / y))), m !== this._time || n || v !== this._cycle)
						{
							if (!this._initted)
							{
								if (this._init(), !this._initted || this._gc) return;
								if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = _, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
								!this._time || r || f ? r && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
							}
							for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
							this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== g || s) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== h && (this._rawPrevTime = 0)))
						}
						else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
					}, s.to = function(t, e, i)
					{
						return new s(t, e, i)
					}, s.from = function(t, e, i)
					{
						return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
					}, s.fromTo = function(t, e, i, n)
					{
						return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
					}, s.staggerTo = s.allTo = function(t, e, o, c, d, h, f)
					{
						c = c || 0;
						var p, m, g, v, y = 0,
							_ = [],
							x = function()
							{
								o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), d.apply(f || o.callbackScope || this, h || u)
							},
							b = o.cycle,
							w = o.startAt && o.startAt.cycle;
						for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], c < 0 && ((t = n(t))
								.reverse(), c *= -1), p = t.length - 1, g = 0; g <= p; g++)
						{
							for (v in m = {}, o) m[v] = o[v];
							if (b && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), w)
							{
								for (v in w = m.startAt = {}, o.startAt) w[v] = o.startAt[v];
								r(m.startAt, t, g)
							}
							m.delay = y + (m.delay || 0), g === p && d && (m.onComplete = x), _[g] = new s(t[g], e, m), y += c
						}
						return _
					}, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a)
					{
						return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
					}, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l)
					{
						return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
					}, s.delayedCall = function(t, e, i, n, r)
					{
						return new s(e, 0,
						{
							delay: t,
							onComplete: e,
							onCompleteParams: i,
							callbackScope: n,
							onReverseComplete: e,
							onReverseCompleteParams: i,
							immediateRender: !1,
							useFrames: r,
							overwrite: 0
						})
					}, s.set = function(t, e)
					{
						return new s(t, 0, e)
					}, s.isTweening = function(t)
					{
						return i.getTweensOf(t, !0)
							.length > 0
					};
				var d = function t(e, n)
					{
						for (var r = [], s = 0, o = e._first; o;) o instanceof i ? r[s++] = o : (n && (r[s++] = o), s = (r = r.concat(t(o, n)))
							.length), o = o._next;
						return r
					},
					h = s.getAllTweens = function(e)
					{
						return d(t._rootTimeline, e)
							.concat(d(t._rootFramesTimeline, e))
					};
				s.killAll = function(t, i, n, r)
				{
					null == i && (i = !0), null == n && (n = !0);
					var s, o, a, l = h(0 != r),
						c = l.length,
						u = i && n && r;
					for (a = 0; a < c; a++) o = l[a], (u || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
				}, s.killChildTweensOf = function(t, e)
				{
					if (null != t)
					{
						var r, c, u, d, h, f = o.tweenLookup;
						if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
							for (d = t.length; --d > -1;) s.killChildTweensOf(t[d], e);
						else
						{
							for (u in r = [], f)
								for (c = f[u].target.parentNode; c;) c === t && (r = r.concat(f[u].tweens)), c = c.parentNode;
							for (h = r.length, d = 0; d < h; d++) e && r[d].totalTime(r[d].totalDuration()), r[d]._enabled(!1, !1)
						}
					}
				};
				var f = function(t, i, n, r)
				{
					i = !1 !== i, n = !1 !== n;
					for (var s, o, a = h(r = !1 !== r), l = i && n && r, c = a.length; --c > -1;) o = a[c], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
				};
				return s.pauseAll = function(t, e, i)
				{
					f(!0, t, e, i)
				}, s.resumeAll = function(t, e, i)
				{
					f(!1, t, e, i)
				}, s.globalTimeScale = function(e)
				{
					var n = t._rootTimeline,
						r = i.ticker.time;
					return arguments.length ? (e = e || 1e-10, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
				}, c.progress = function(t, e)
				{
					return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
				}, c.totalProgress = function(t, e)
				{
					return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
				}, c.time = function(t, e)
				{
					return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
				}, c.duration = function(e)
				{
					return arguments.length ? t.prototype.duration.call(this, e) : this._duration
				}, c.totalDuration = function(t)
				{
					return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
				}, c.repeat = function(t)
				{
					return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
				}, c.repeatDelay = function(t)
				{
					return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
				}, c.yoyo = function(t)
				{
					return arguments.length ? (this._yoyo = t, this) : this._yoyo
				}, s
			}, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i)
			{
				var n = function(t)
					{
						e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
						var i, n, r = this.vars;
						for (n in r) i = r[n], a(i) && -1 !== i.join("")
							.indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
						a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
					},
					r = i._internals,
					s = n._internals = {},
					o = r.isSelector,
					a = r.isArray,
					l = r.lazyTweens,
					c = r.lazyRender,
					u = _gsScope._gsDefine.globals,
					d = function(t)
					{
						var e, i = {};
						for (e in t) i[e] = t[e];
						return i
					},
					h = function(t, e, i)
					{
						var n, r, s = t.cycle;
						for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
						delete t.cycle
					},
					f = s.pauseCallback = function() {},
					p = function(t)
					{
						var e, i = [],
							n = t.length;
						for (e = 0; e !== n; i.push(t[e++]));
						return i
					},
					m = n.prototype = new e;
				return n.version = "1.20.3", m.constructor = n, m.kill()
					._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, r)
					{
						var s = n.repeat && u.TweenMax || i;
						return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
					}, m.from = function(t, e, n, r)
					{
						return this.add((n.repeat && u.TweenMax || i)
							.from(t, e, n), r)
					}, m.fromTo = function(t, e, n, r, s)
					{
						var o = r.repeat && u.TweenMax || i;
						return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
					}, m.staggerTo = function(t, e, r, s, a, l, c, u)
					{
						var f, m, g = new n(
							{
								onComplete: l,
								onCompleteParams: c,
								callbackScope: u,
								smoothChildTiming: this.smoothChildTiming
							}),
							v = r.cycle;
						for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = p(t)), (s = s || 0) < 0 && ((t = p(t))
								.reverse(), s *= -1), m = 0; m < t.length; m++)(f = d(r))
							.startAt && (f.startAt = d(f.startAt), f.startAt.cycle && h(f.startAt, t, m)), v && (h(f, t, m), null != f.duration && (e = f.duration, delete f.duration)), g.to(t[m], e, f, m * s);
						return this.add(g, a)
					}, m.staggerFrom = function(t, e, i, n, r, s, o, a)
					{
						return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
					}, m.staggerFromTo = function(t, e, i, n, r, s, o, a, l)
					{
						return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
					}, m.call = function(t, e, n, r)
					{
						return this.add(i.delayedCall(0, t, e, n), r)
					}, m.set = function(t, e, n)
					{
						return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
					}, n.exportRoot = function(t, e)
					{
						null == (t = t || {})
							.smoothChildTiming && (t.smoothChildTiming = !0);
						var r, s, o, a, l = new n(t),
							c = l._timeline;
						for (null == e && (e = !0), c._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = c._time, o = c._first; o;) a = o._next, e && o instanceof i && o.target === o.vars.onComplete || ((s = o._startTime - o._delay) < 0 && (r = 1), l.add(o, s)), o = a;
						return c.add(l, 0), r && l.totalDuration(), l
					}, m.add = function(r, s, o, l)
					{
						var c, u, d, h, f, p;
						if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t))
						{
							if (r instanceof Array || r && r.push && a(r))
							{
								for (o = o || "normal", l = l || 0, c = s, u = r.length, d = 0; d < u; d++) a(h = r[d]) && (h = new n(
								{
									tweens: h
								})), this.add(h, c), "string" != typeof h && "function" != typeof h && ("sequence" === o ? c = h._startTime + h.totalDuration() / h._timeScale : "start" === o && (h._startTime -= h.delay())), c += l;
								return this._uncache(!0)
							}
							if ("string" == typeof r) return this.addLabel(r, s);
							if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
							r = i.delayedCall(0, r)
						}
						if (e.prototype.add.call(this, r, s), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
							for (p = (f = this)
								.rawTime() > r._startTime; f._timeline;) p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
						return this
					}, m.remove = function(e)
					{
						if (e instanceof t)
						{
							this._remove(e, !1);
							var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
							return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
						}
						if (e instanceof Array || e && e.push && a(e))
						{
							for (var n = e.length; --n > -1;) this.remove(e[n]);
							return this
						}
						return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
					}, m._remove = function(t, i)
					{
						return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
					}, m.append = function(t, e)
					{
						return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
					}, m.insert = m.insertMultiple = function(t, e, i, n)
					{
						return this.add(t, e || 0, i, n)
					}, m.appendMultiple = function(t, e, i, n)
					{
						return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
					}, m.addLabel = function(t, e)
					{
						return this._labels[t] = this._parseTimeOrLabel(e), this
					}, m.addPause = function(t, e, n, r)
					{
						var s = i.delayedCall(0, f, n, r || this);
						return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
					}, m.removeLabel = function(t)
					{
						return delete this._labels[t], this
					}, m.getLabelTime = function(t)
					{
						return null != this._labels[t] ? this._labels[t] : -1
					}, m._parseTimeOrLabel = function(e, i, n, r)
					{
						var s, o;
						if (r instanceof t && r.timeline === this) this.remove(r);
						else if (r && (r instanceof Array || r.push && a(r)))
							for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
						if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent()
							.endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
						if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s);
						else
						{
							if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
							i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
						}
						return Number(e) + i
					}, m.seek = function(t, e)
					{
						return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
					}, m.stop = function()
					{
						return this.paused(!0)
					}, m.gotoAndPlay = function(t, e)
					{
						return this.play(t, e)
					}, m.gotoAndStop = function(t, e)
					{
						return this.pause(t, e)
					}, m.render = function(t, e, i)
					{
						this._gc && this._enabled(!0, !1);
						var n, r, s, o, a, u, d, h = this._time,
							f = this._dirty ? this.totalDuration() : this._totalDuration,
							p = this._startTime,
							m = this._timeScale,
							g = this._paused;
						if (h !== this._time && (t += this._time - h), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
						else if (t < 1e-7)
							if (this._totalTime = this._time = 0, (0 !== h || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
							else
							{
								if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
									for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
								t = 0, this._initted || (a = !0)
							}
						else
						{
							if (this._hasPause && !this._forcingPlayhead && !e)
							{
								if (t >= h)
									for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
								else
									for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
								u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
							}
							this._totalTime = this._time = this._rawPrevTime = t
						}
						if (this._time !== h && this._first || i || a || u)
						{
							if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== h && t > 0 && (this._active = !0), 0 === h && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (d = this._time) >= h)
								for (n = this._first; n && (s = n._next, d === this._time && (!this._paused || g));)(n._active || n._startTime <= d && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
							else
								for (n = this._last; n && (s = n._prev, d === this._time && (!this._paused || g));)
								{
									if (n._active || n._startTime <= h && !n._paused && !n._gc)
									{
										if (u === n)
										{
											for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
											u = null, this.pause()
										}
										n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
									}
									n = s
								}
							this._onUpdate && (e || (l.length && c(), this._callback("onUpdate"))), o && (this._gc || p !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (r && (l.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
						}
					}, m._hasPausedChild = function()
					{
						for (var t = this._first; t;)
						{
							if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
							t = t._next
						}
						return !1
					}, m.getChildren = function(t, e, n, r)
					{
						r = r || -9999999999;
						for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? !1 !== e && (s[a++] = o) : (!1 !== n && (s[a++] = o), !1 !== t && (a = (s = s.concat(o.getChildren(!0, e, n)))
							.length))), o = o._next;
						return s
					}, m.getTweensOf = function(t, e)
					{
						var n, r, s = this._gc,
							o = [],
							a = 0;
						for (s && this._enabled(!0, !0), r = (n = i.getTweensOf(t))
							.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
						return s && this._enabled(!1, !0), o
					}, m.recent = function()
					{
						return this._recent
					}, m._contains = function(t)
					{
						for (var e = t.timeline; e;)
						{
							if (e === this) return !0;
							e = e.timeline
						}
						return !1
					}, m.shiftChildren = function(t, e, i)
					{
						i = i || 0;
						for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
						if (e)
							for (n in s) s[n] >= i && (s[n] += t);
						return this._uncache(!0)
					}, m._kill = function(t, e)
					{
						if (!t && !e) return this._enabled(!1, !1);
						for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
						return r
					}, m.clear = function(t)
					{
						var e = this.getChildren(!1, !0, !0),
							i = e.length;
						for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
						return !1 !== t && (this._labels = {}), this._uncache(!0)
					}, m.invalidate = function()
					{
						for (var e = this._first; e;) e.invalidate(), e = e._next;
						return t.prototype.invalidate.call(this)
					}, m._enabled = function(t, i)
					{
						if (t === this._gc)
							for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
						return e.prototype._enabled.call(this, t, i)
					}, m.totalTime = function(e, i, n)
					{
						this._forcingPlayhead = !0;
						var r = t.prototype.totalTime.apply(this, arguments);
						return this._forcingPlayhead = !1, r
					}, m.duration = function(t)
					{
						return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
					}, m.totalDuration = function(t)
					{
						if (!arguments.length)
						{
							if (this._dirty)
							{
								for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = e;
								this._duration = this._totalDuration = n, this._dirty = !1
							}
							return this._totalDuration
						}
						return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
					}, m.paused = function(e)
					{
						if (!e)
							for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
						return t.prototype.paused.apply(this, arguments)
					}, m.usesFrames = function()
					{
						for (var e = this._timeline; e._timeline;) e = e._timeline;
						return e === t._rootFramesTimeline
					}, m.rawTime = function(t)
					{
						return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
					}, n
			}, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i)
			{
				var n = function(e)
					{
						t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
					},
					r = e._internals,
					s = r.lazyTweens,
					o = r.lazyRender,
					a = _gsScope._gsDefine.globals,
					l = new i(null, null, 1, 0),
					c = n.prototype = new t;
				return c.constructor = n, c.kill()
					._gc = !1, n.version = "1.20.3", c.invalidate = function()
					{
						return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
					}, c.addCallback = function(t, i, n, r)
					{
						return this.add(e.delayedCall(0, t, n, r), i)
					}, c.removeCallback = function(t, e)
					{
						if (t)
							if (null == e) this._kill(null, t);
							else
								for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
						return this
					}, c.removePause = function(e)
					{
						return this.removeCallback(t._internals.pauseCallback, e)
					}, c.tweenTo = function(t, i)
					{
						i = i || {};
						var n, r, s, o = {
								ease: l,
								useFrames: this.usesFrames(),
								immediateRender: !1
							},
							c = i.repeat && a.TweenMax || e;
						for (r in i) o[r] = i[r];
						return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new c(this, n, o), o.onStart = function()
						{
							s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
						}, s
					}, c.tweenFromTo = function(t, e, i)
					{
						i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
							onComplete: this.seek,
							onCompleteParams: [t],
							callbackScope: this
						}, i.immediateRender = !1 !== i.immediateRender;
						var n = this.tweenTo(e, i);
						return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
					}, c.render = function(t, e, i)
					{
						this._gc && this._enabled(!0, !1);
						var n, r, a, l, c, u, d, h, f = this._time,
							p = this._dirty ? this.totalDuration() : this._totalDuration,
							m = this._duration,
							g = this._totalTime,
							v = this._startTime,
							y = this._timeScale,
							_ = this._rawPrevTime,
							x = this._paused,
							b = this._cycle;
						if (f !== this._time && (t += this._time - f), t >= p - 1e-7 && t >= 0) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", c = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || _ < 0 || 1e-10 === _) && _ !== t && this._first && (c = !0, _ > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
						else if (t < 1e-7)
							if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === m && 1e-10 !== _ && (_ > 0 || t < 0 && _ >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (c = r = !0, l = "onReverseComplete") : _ >= 0 && this._first && (c = !0), this._rawPrevTime = t;
							else
							{
								if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
									for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
								t = 0, this._initted || (c = !0)
							}
						else if (0 === m && _ < 0 && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = m + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e)
						{
							if ((t = this._time) >= f || this._repeat && b !== this._cycle)
								for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
							else
								for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
							d && d._startTime < m && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
						}
						if (this._cycle !== b && !this._locked)
						{
							var w = this._yoyo && 0 != (1 & b),
								T = w === (this._yoyo && 0 != (1 & this._cycle)),
								k = this._totalTime,
								C = this._cycle,
								S = this._rawPrevTime,
								A = this._time;
							if (this._totalTime = b * m, this._cycle < b ? w = !w : this._totalTime += m, this._time = f, this._rawPrevTime = 0 === m ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, f = w ? 0 : m, this.render(f, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = C, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
							if (T && (this._cycle = b, this._locked = !0, f = w ? m + 1e-4 : -1e-4, this.render(f, !0, !1)), this._locked = !1, this._paused && !x) return;
							this._time = A, this._totalTime = k, this._cycle = C, this._rawPrevTime = S
						}
						if (this._time !== f && this._first || i || c || d)
						{
							if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (h = this._time) >= f)
								for (n = this._first; n && (a = n._next, h === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
							else
								for (n = this._last; n && (a = n._prev, h === this._time && (!this._paused || x));)
								{
									if (n._active || n._startTime <= f && !n._paused && !n._gc)
									{
										if (d === n)
										{
											for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
											d = null, this.pause()
										}
										n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
									}
									n = a
								}
							this._onUpdate && (e || (s.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (s.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
						}
						else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
					}, c.getActive = function(t, e, i)
					{
						null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
						var n, r, s = [],
							o = this.getChildren(t, e, i),
							a = 0,
							l = o.length;
						for (n = 0; n < l; n++)(r = o[n])
							.isActive() && (s[a++] = r);
						return s
					}, c.getLabelAfter = function(t)
					{
						t || 0 !== t && (t = this._time);
						var e, i = this.getLabelsArray(),
							n = i.length;
						for (e = 0; e < n; e++)
							if (i[e].time > t) return i[e].name;
						return null
					}, c.getLabelBefore = function(t)
					{
						null == t && (t = this._time);
						for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
							if (e[i].time < t) return e[i].name;
						return null
					}, c.getLabelsArray = function()
					{
						var t, e = [],
							i = 0;
						for (t in this._labels) e[i++] = {
							time: this._labels[t],
							name: t
						};
						return e.sort(function(t, e)
						{
							return t.time - e.time
						}), e
					}, c.invalidate = function()
					{
						return this._locked = !1, t.prototype.invalidate.call(this)
					}, c.progress = function(t, e)
					{
						return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
					}, c.totalProgress = function(t, e)
					{
						return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
					}, c.totalDuration = function(e)
					{
						return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
					}, c.time = function(t, e)
					{
						return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
					}, c.repeat = function(t)
					{
						return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
					}, c.repeatDelay = function(t)
					{
						return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
					}, c.yoyo = function(t)
					{
						return arguments.length ? (this._yoyo = t, this) : this._yoyo
					}, c.currentLabel = function(t)
					{
						return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
					}, n
			}, !0), t = 180 / Math.PI, e = [], i = [], n = [], r = {}, s = _gsScope._gsDefine.globals, o = function(t, e, i, n)
			{
				i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
			}, a = function(t, e, i, n)
			{
				var r = {
						a: t
					},
					s = {},
					o = {},
					a = {
						c: n
					},
					l = (t + e) / 2,
					c = (e + i) / 2,
					u = (i + n) / 2,
					d = (l + c) / 2,
					h = (c + u) / 2,
					f = (h - d) / 8;
				return r.b = l + (t - l) / 4, s.b = d + f, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (d + h) / 2, o.b = h - f, a.b = u + (n - u) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
			}, l = function(t, r, s, o, l)
			{
				var c, u, d, h, f, p, m, g, v, y, _, x, b, w = t.length - 1,
					T = 0,
					k = t[0].a;
				for (c = 0; c < w; c++) u = (f = t[T])
					.a, d = f.d, h = t[T + 1].d, l ? (_ = e[c], b = ((x = i[c]) + _) * r * .25 / (o ? .5 : n[c] || .5), g = d - ((p = d - (d - u) * (o ? .5 * r : 0 !== _ ? b / _ : 0)) + (((m = d + (h - d) * (o ? .5 * r : 0 !== x ? b / x : 0)) - p) * (3 * _ / (_ + x) + .5) / 4 || 0))) : g = d - ((p = d - (d - u) * r * .5) + (m = d + (h - d) * r * .5)) / 2, p += g, m += g, f.c = v = p, f.b = 0 !== c ? k : k = f.a + .6 * (f.c - f.a), f.da = d - u, f.ca = v - u, f.ba = k - u, s ? (y = a(u, k, v, d), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, k = m;
				(f = t[T])
				.b = k, f.c = k + .4 * (f.d - k), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = k - f.a, s && (y = a(f.a, k, f.c, f.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
			}, c = function(t, n, r, s)
			{
				var a, l, c, u, d, h, f = [];
				if (s)
					for (l = (t = [s].concat(t))
						.length; --l > -1;) "string" == typeof(h = t[l][n]) && "=" === h.charAt(1) && (t[l][n] = s[n] + Number(h.charAt(0) + h.substr(2)));
				if ((a = t.length - 2) < 0) return f[0] = new o(t[0][n], 0, 0, t[0][n]), f;
				for (l = 0; l < a; l++) c = t[l][n], u = t[l + 1][n], f[l] = new o(c, 0, 0, u), r && (d = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (d - u) * (d - u));
				return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
			}, u = function(t, s, o, a, u, d)
			{
				var h, f, p, m, g, v, y, _, x = {},
					b = [],
					w = d || t[0];
				for (f in u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1), t[0]) b.push(f);
				if (t.length > 1)
				{
					for (_ = t[t.length - 1], y = !0, h = b.length; --h > -1;)
						if (f = b[h], Math.abs(w[f] - _[f]) > .05)
						{
							y = !1;
							break
						} y && (t = t.concat(), d && t.unshift(d), t.push(t[1]), d = t[t.length - 3])
				}
				for (e.length = i.length = n.length = 0, h = b.length; --h > -1;) f = b[h], r[f] = -1 !== u.indexOf("," + f + ","), x[f] = c(t, f, r[f], d);
				for (h = e.length; --h > -1;) e[h] = Math.sqrt(e[h]), i[h] = Math.sqrt(i[h]);
				if (!a)
				{
					for (h = b.length; --h > -1;)
						if (r[f])
							for (v = (p = x[b[h]])
								.length - 1, m = 0; m < v; m++) g = p[m + 1].da / i[m] + p[m].da / e[m] || 0, n[m] = (n[m] || 0) + g * g;
					for (h = n.length; --h > -1;) n[h] = Math.sqrt(n[h])
				}
				for (h = b.length, m = o ? 4 : 1; --h > -1;) p = x[f = b[h]], l(p, s, o, a, r[f]), y && (p.splice(0, m), p.splice(p.length - m, m));
				return x
			}, d = function(t, e, i)
			{
				for (var n, r, s, o, a, l, c, u, d, h, f, p = 1 / i, m = t.length; --m > -1;)
					for (s = (h = t[m])
						.a, o = h.d - s, a = h.c - s, l = h.b - s, n = r = 0, u = 1; u <= i; u++) n = r - (r = ((c = p * u) * c * o + 3 * (d = 1 - c) * (c * a + d * l)) * c), e[f = m * i + u - 1] = (e[f] || 0) + n * n
			}, h = _gsScope._gsDefine.plugin(
			{
				propName: "bezier",
				priority: -1,
				version: "1.3.8",
				API: 2,
				global: !0,
				init: function(t, e, i)
				{
					this._target = t, e instanceof Array && (e = {
						values: e
					}), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
					var n, r, s, a, l, c = e.values || [],
						h = {},
						f = c[0],
						p = e.autoRotate || i.vars.orientToBezier;
					for (n in this._autoRotate = p ? p instanceof Array ? p : [
							["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
						] : null, f) this._props.push(n);
					for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), l || h[n] !== c[0][n] && (l = h);
					if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(c, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i)
						{
							var n, r, s, a, l, c, u, d, h, f, p, m = {},
								g = "cubic" === (e = e || "soft") ? 3 : 2,
								v = "soft" === e,
								y = [];
							if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
							for (h in t[0]) y.push(h);
							for (c = y.length; --c > -1;)
							{
								for (m[h = y[c]] = l = [], f = 0, d = t.length, u = 0; u < d; u++) n = null == i ? t[u][h] : "string" == typeof(p = t[u][h]) && "=" === p.charAt(1) ? i[h] + Number(p.charAt(0) + p.substr(2)) : Number(p), v && u > 1 && u < d - 1 && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
								for (d = f - g + 1, f = 0, u = 0; u < d; u += g) n = l[u], r = l[u + 1], s = l[u + 2], a = 2 === g ? 0 : l[u + 3], l[f++] = p = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
								l.length = f
							}
							return m
						}(c, e.type, h), this._segCount = this._beziers[n].length, this._timeRes)
					{
						var m = function(t, e)
						{
							var i, n, r, s, o = [],
								a = [],
								l = 0,
								c = 0,
								u = (e = e >> 0 || 6) - 1,
								h = [],
								f = [];
							for (i in t) d(t[i], o, e);
							for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), f[s = n % e] = l, s === u && (c += l, h[s = n / e >> 0] = f, a[s] = c, l = 0, f = []);
							return {
								length: c,
								lengths: a,
								segments: h
							}
						}(this._beziers, this._timeRes);
						this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
					}
					if (p = this._autoRotate)
						for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;)
						{
							for (a = 0; a < 3; a++) n = p[s][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
							n = p[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
						}
					return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
				},
				set: function(e)
				{
					var i, n, r, s, o, a, l, c, u, d, h = this._segCount,
						f = this._func,
						p = this._target,
						m = e !== this._startRatio;
					if (this._timeRes)
					{
						if (u = this._lengths, d = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < h - 1)
						{
							for (c = h - 1; r < c && (this._l2 = u[++r]) <= e;);
							this._l1 = u[r - 1], this._li = r, this._curSeg = d = this._segments[r], this._s2 = d[this._s1 = this._si = 0]
						}
						else if (e < this._l1 && r > 0)
						{
							for (; r > 0 && (this._l1 = u[--r]) >= e;);
							0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = d = this._segments[r], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
						}
						if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < d.length - 1)
						{
							for (c = d.length - 1; r < c && (this._s2 = d[++r]) <= e;);
							this._s1 = d[r - 1], this._si = r
						}
						else if (e < this._s1 && r > 0)
						{
							for (; r > 0 && (this._s1 = d[--r]) >= e;);
							0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = d[r], this._si = r
						}
						a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
					}
					else a = (e - (i = e < 0 ? 0 : e >= 1 ? h - 1 : h * e >> 0) * (1 / h)) * h;
					for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], l = (a * a * (o = this._beziers[s][i])
						.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, p)), f[s] ? p[s](l) : p[s] = l;
					if (this._autoRotate)
					{
						var g, v, y, _, x, b, w, T = this._autoRotate;
						for (r = T.length; --r > -1;) s = T[r][2], b = T[r][3] || 0, w = !0 === T[r][4] ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, v += ((_ = o.b + (o.c - o.b) * a) - v) * a, _ += (o.c + (o.d - o.c) * a - _) * a, y = g.a + (g.b - g.a) * a, y += ((x = g.b + (g.c - g.b) * a) - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - y, _ - v) * w + b : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, p)), f[s] ? p[s](l) : p[s] = l)
					}
				}
			}), f = h.prototype, h.bezierThrough = u, h.cubicToQuadratic = a, h._autoCSS = !0, h.quadraticToCubic = function(t, e, i)
			{
				return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
			}, h._cssRegister = function()
			{
				var t = s.CSSPlugin;
				if (t)
				{
					var e = t._internals,
						i = e._parseToProxy,
						n = e._setPluginRatio,
						r = e.CSSPropTween;
					e._registerComplexSpecialProp("bezier",
					{
						parser: function(t, e, s, o, a, l)
						{
							e instanceof Array && (e = {
								values: e
							}), l = new h;
							var c, u, d, f = e.values,
								p = f.length - 1,
								m = [],
								g = {};
							if (p < 0) return a;
							for (c = 0; c <= p; c++) d = i(t, f[c], o, a, l, p !== c), m[c] = d.end;
							for (u in e) g[u] = e[u];
							return g.values = m, (a = new r(t, "bezier", 0, 0, d.pt, 2))
								.data = d, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != d.end.left ? [
									["left", "top", "rotation", c, !1]
								] : null != d.end.x && [
									["x", "y", "rotation", c, !1]
								]), g.autoRotate && (o._transform || o._enableTransforms(!1), d.autoRotate = o._target._gsTransform, d.proxy.rotation = d.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(d.proxy, g, o._tween), a
						}
					})
				}
			}, f._mod = function(t)
			{
				for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
			}, f._kill = function(t)
			{
				var e, i, n = this._props;
				for (e in this._beziers)
					if (e in t)
						for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
				if (n = this._autoRotate)
					for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
				return this._super._kill.call(this, t)
			}, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e)
			{
				var i, n, r, s, o = function e()
					{
						t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = e.prototype.setRatio
					},
					a = _gsScope._gsDefine.globals,
					l = {},
					c = o.prototype = new t("css");
				c.constructor = o, o.version = "1.20.3", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, o.suffixMap = {
					top: c = "px",
					right: c,
					bottom: c,
					left: c,
					width: c,
					height: c,
					fontSize: c,
					padding: c,
					margin: c,
					perspective: c,
					lineHeight: ""
				};
				var u, d, h, f, p, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
					_ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
					x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
					b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
					w = /(?:\d|\-|\+|=|#|\.)*/g,
					T = /opacity *= *([^)]*)/i,
					k = /opacity:([^;]*)/i,
					C = /alpha\(opacity *=.+?\)/i,
					S = /^(rgb|hsl)/,
					A = /([A-Z])/g,
					P = /-([a-z])/gi,
					F = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
					E = function(t, e)
					{
						return e.toUpperCase()
					},
					$ = /(?:Left|Right|Width)/i,
					D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
					O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
					M = /,(?=[^\)]*(?:\(|$))/gi,
					j = /[\s,\(]/i,
					R = Math.PI / 180,
					N = 180 / Math.PI,
					L = {},
					B = {
						style: {}
					},
					q = _gsScope.document ||
					{
						createElement: function()
						{
							return B
						}
					},
					I = function(t, e)
					{
						return q.createElementNS ? q.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : q.createElement(t)
					},
					z = I("div"),
					H = I("img"),
					X = o._internals = {
						_specialProps: l
					},
					W = (_gsScope.navigator || {})
					.userAgent || "",
					U = function()
					{
						var t = W.indexOf("Android"),
							e = I("a");
						return h = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), p = h && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, f = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
					}(),
					V = function(t)
					{
						return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
					},
					G = function(t)
					{
						_gsScope.console && console.log(t)
					},
					Y = "",
					Z = "",
					Q = function(t, e)
					{
						var i, n, r = (e = e || z)
							.style;
						if (void 0 !== r[t]) return t;
						for (t = t.charAt(0)
							.toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
						return n >= 0 ? (Y = "-" + (Z = 3 === n ? "ms" : i[n])
							.toLowerCase() + "-", Z + t) : null
					},
					J = q.defaultView ? q.defaultView.getComputedStyle : function() {},
					K = o.getStyle = function(t, e, i, n, r)
					{
						var s;
						return U || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || J(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1")
							.toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : V(t)
					},
					tt = X.convertToPixels = function(t, i, n, r, s)
					{
						if ("px" === r || !r && "lineHeight" !== i) return n;
						if ("auto" === r || !n) return 0;
						var a, l, c, u = $.test(i),
							d = t,
							h = z.style,
							f = n < 0,
							p = 1 === n;
						if (f && (n = -n), p && (n *= 100), "lineHeight" !== i || r)
							if ("%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
							else
							{
								if (h.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== r && d.appendChild && "v" !== r.charAt(0) && "rem" !== r) h[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
								else
								{
									if (d = t.parentNode || q.body, -1 !== K(d, "display")
										.indexOf("flex") && (h.position = "absolute"), l = d._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
									h[u ? "width" : "height"] = n + r
								}
								d.appendChild(z), a = parseFloat(z[u ? "offsetWidth" : "offsetHeight"]), d.removeChild(z), u && "%" === r && !1 !== o.cacheWidths && ((l = d._gsCache = d._gsCache || {})
									.time = c, l.width = a / n * 100), 0 !== a || s || (a = tt(t, i, n, r, !0))
							}
						else l = J(t)
							.lineHeight, t.style.lineHeight = n, a = parseFloat(J(t)
								.lineHeight), t.style.lineHeight = l;
						return p && (a /= 100), f ? -a : a
					},
					et = X.calculateOffset = function(t, e, i)
					{
						if ("absolute" !== K(t, "position", i)) return 0;
						var n = "left" === e ? "Left" : "Top",
							r = K(t, "margin" + n, i);
						return t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(w, "")) || 0)
					},
					it = function(t, e)
					{
						var i, n, r, s = {};
						if (e = e || J(t, null))
							if (i = e.length)
								for (; --i > -1;) - 1 !== (r = e[i])
									.indexOf("-transform") && Ft !== r || (s[r.replace(P, E)] = e.getPropertyValue(r));
							else
								for (i in e) - 1 !== i.indexOf("Transform") && Pt !== i || (s[i] = e[i]);
						else if (e = t.currentStyle || t.style)
							for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(P, E)] = e[i]);
						return U || (s.opacity = V(t)), n = It(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, $t && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
					},
					nt = function(t, e, i, n, r)
					{
						var s, o, a, l = {},
							c = t.style;
						for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(b, "") ? s : 0 : et(t, o), void 0 !== c[o] && (a = new yt(c, o, c[o], a))));
						if (n)
							for (o in n) "className" !== o && (l[o] = n[o]);
						return {
							difs: l,
							firstMPT: a
						}
					},
					rt = {
						width: ["Left", "Right"],
						height: ["Top", "Bottom"]
					},
					st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
					ot = function(t, e, i)
					{
						if ("svg" === (t.nodeName + "")
							.toLowerCase()) return (i || J(t))[e] || 0;
						if (t.getCTM && Lt(t)) return t.getBBox()[e] || 0;
						var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
							r = rt[e],
							s = r.length;
						for (i = i || J(t, null); --s > -1;) n -= parseFloat(K(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(K(t, "border" + r[s] + "Width", i, !0)) || 0;
						return n
					},
					at = function t(e, i)
					{
						if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
						null != e && "" !== e || (e = "0 0");
						var n, r = e.split(" "),
							s = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : r[0],
							o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : r[1];
						if (r.length > 3 && !i)
						{
							for (r = e.split(", ")
								.join(",")
								.split(","), e = [], n = 0; n < r.length; n++) e.push(t(r[n]));
							return e.join(",")
						}
						return null == o ? o = "center" === s ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "")
							.indexOf("=")) && (s = "50%"), e = s + " " + o + (r.length > 2 ? " " + r[2] : ""), i && (i.oxp = -1 !== s.indexOf("%"), i.oyp = -1 !== o.indexOf("%"), i.oxr = "=" === s.charAt(1), i.oyr = "=" === o.charAt(1), i.ox = parseFloat(s.replace(b, "")), i.oy = parseFloat(o.replace(b, "")), i.v = e), i || e
					},
					lt = function(t, e)
					{
						return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
					},
					ct = function(t, e)
					{
						return "function" == typeof t && (t = t(v, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
					},
					ut = function(t, e, i, n)
					{
						var r, s, o, a, l;
						return "function" == typeof t && (t = t(v, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r) != o % 180 && (o = o < 0 ? o + r : o - r), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < 1e-6 && a > -1e-6 && (a = 0), a
					},
					dt = {
						aqua: [0, 255, 255],
						lime: [0, 255, 0],
						silver: [192, 192, 192],
						black: [0, 0, 0],
						maroon: [128, 0, 0],
						teal: [0, 128, 128],
						blue: [0, 0, 255],
						navy: [0, 0, 128],
						white: [255, 255, 255],
						fuchsia: [255, 0, 255],
						olive: [128, 128, 0],
						yellow: [255, 255, 0],
						orange: [255, 165, 0],
						gray: [128, 128, 128],
						purple: [128, 0, 128],
						green: [0, 128, 0],
						red: [255, 0, 0],
						pink: [255, 192, 203],
						cyan: [0, 255, 255],
						transparent: [255, 255, 255, 0]
					},
					ht = function(t, e, i)
					{
						return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
					},
					ft = o.parseColor = function(t, e)
					{
						var i, n, r, s, o, a, l, c, u, d, h;
						if (t)
							if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
							else
							{
								if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
								else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
								else if ("hsl" === t.substr(0, 3))
									if (i = h = t.match(y), e)
									{
										if (-1 !== t.indexOf("=")) return t.match(_)
									}
								else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(i[3])), i[0] = ht(o + 1 / 3, n, r), i[1] = ht(o, n, r), i[2] = ht(o - 1 / 3, n, r);
								else i = t.match(y) || dt.transparent;
								i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
							}
						else i = dt.black;
						return e && !h && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = ((c = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2, c === u ? o = a = 0 : (d = c - u, a = l > .5 ? d / (2 - c - u) : d / (c + u), o = c === n ? (r - s) / d + (r < s ? 6 : 0) : c === r ? (s - n) / d + 2 : (n - r) / d + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
					},
					pt = function(t, e)
					{
						var i, n, r, s = t.match(mt) || [],
							o = 0,
							a = "";
						if (!s.length) return t;
						for (i = 0; i < s.length; i++) n = s[i], o += (r = t.substr(o, t.indexOf(n, o) - o))
							.length + n.length, 3 === (n = ft(n, e))
							.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
						return a + t.substr(o)
					},
					mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
				for (c in dt) mt += "|" + c + "\\b";
				mt = new RegExp(mt + ")", "gi"), o.colorStringFilter = function(t)
				{
					var e, i = t[0] + " " + t[1];
					mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = pt(t[0], e), t[1] = pt(t[1], e)), mt.lastIndex = 0
				}, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
				var gt = function(t, e, i, n)
					{
						if (null == t) return function(t)
						{
							return t
						};
						var r, s = e ? (t.match(mt) || [""])[0] : "",
							o = t.split(s)
							.join("")
							.match(x) || [],
							a = t.substr(0, t.indexOf(o[0])),
							l = ")" === t.charAt(t.length - 1) ? ")" : "",
							c = -1 !== t.indexOf(" ") ? " " : ",",
							u = o.length,
							d = u > 0 ? o[0].replace(y, "") : "";
						return u ? r = e ? function(t)
						{
							var e, h, f, p;
							if ("number" == typeof t) t += d;
							else if (n && M.test(t))
							{
								for (p = t.replace(M, "|")
									.split("|"), f = 0; f < p.length; f++) p[f] = r(p[f]);
								return p.join(",")
							}
							if (e = (t.match(mt) || [s])[0], f = (h = t.split(e)
									.join("")
									.match(x) || [])
								.length, u > f--)
								for (; ++f < u;) h[f] = i ? h[(f - 1) / 2 | 0] : o[f];
							return a + h.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
						} : function(t)
						{
							var e, s, h;
							if ("number" == typeof t) t += d;
							else if (n && M.test(t))
							{
								for (s = t.replace(M, "|")
									.split("|"), h = 0; h < s.length; h++) s[h] = r(s[h]);
								return s.join(",")
							}
							if (h = (e = t.match(x) || [])
								.length, u > h--)
								for (; ++h < u;) e[h] = i ? e[(h - 1) / 2 | 0] : o[h];
							return a + e.join(c) + l
						} : function(t)
						{
							return t
						}
					},
					vt = function(t)
					{
						return t = t.split(","),
							function(e, i, n, r, s, o, a)
							{
								var l, c = (i + "")
									.split(" ");
								for (a = {}, l = 0; l < 4; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
								return r.parse(e, a, s, o)
							}
					},
					yt = (X._setPluginRatio = function(t)
					{
						this.plugin.setRatio(t);
						for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
						if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
							for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;)
							{
								if ((i = l.t)
									.type)
								{
									if (1 === i.type)
									{
										for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
										i[s] = r
									}
								}
								else i[s] = i.s + i.xs0;
								l = l._next
							}
					}, function(t, e, i, n, r)
					{
						this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
					}),
					_t = (X._parseToProxy = function(t, e, i, n, r, s)
					{
						var o, a, l, c, u, d = n,
							h = {},
							f = {},
							p = i._transform,
							m = L;
						for (i._transform = null, L = e, n = u = i.parse(t, e, n, r), L = m, s && (i._transform = p, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;)
						{
							if (n.type <= 1 && (f[a = n.p] = n.s + n.c, h[a] = n.s, s || (c = new yt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
								for (o = n.l; --o > 0;) l = "xn" + o, f[a = n.p + "_" + l] = n.data[l], h[a] = n[l], s || (c = new yt(n, l, a, c, n.rxp[l]));
							n = n._next
						}
						return {
							proxy: h,
							end: f,
							firstMPT: c,
							pt: u
						}
					}, X.CSSPropTween = function(t, e, n, r, o, a, l, c, u, d, h)
					{
						this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof _t || s.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === d ? n : d, this.e = void 0 === h ? n + r : h, o && (this._next = o, o._prev = this)
					}),
					xt = function(t, e, i, n, r, s)
					{
						var o = new _t(t, e, i, n - i, r, -1, s);
						return o.b = i, o.e = o.xs0 = n, o
					},
					bt = o.parseComplex = function(t, e, i, n, r, s, a, l, c, d)
					{
						i = i || s || "", "function" == typeof n && (n = n(v, g)), a = new _t(t, e, 0, 0, a, d ? 2 : 1, null, !1, l, i, n), n += "", r && mt.test(n + i) && (o.colorStringFilter(n = [i, n]), i = n[0], n = n[1]);
						var h, f, p, m, x, b, w, T, k, C, S, A, P, F = i.split(", ")
							.join(",")
							.split(" "),
							E = n.split(", ")
							.join(",")
							.split(" "),
							$ = F.length,
							D = !1 !== u;
						for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i)
								.indexOf("rgb") || -1 !== (n + i)
								.indexOf("hsl") ? (F = F.join(" ")
									.replace(M, ", ")
									.split(" "), E = E.join(" ")
									.replace(M, ", ")
									.split(" ")) : (F = F.join(" ")
									.split(",")
									.join(", ")
									.split(" "), E = E.join(" ")
									.split(",")
									.join(", ")
									.split(" ")), $ = F.length), $ !== E.length && ($ = (F = (s || "")
									.split(" "))
								.length), a.plugin = c, a.setRatio = d, mt.lastIndex = 0, h = 0; h < $; h++)
							if (m = F[h], x = E[h], (T = parseFloat(m)) || 0 === T) a.appendXtra("", T, lt(x, T), x.replace(_, ""), D && -1 !== x.indexOf("px"), !0);
							else if (r && mt.test(m)) A = ")" + ((A = x.indexOf(")") + 1) ? x.substr(A) : ""), P = -1 !== x.indexOf("hsl") && U, C = x, m = ft(m, P), x = ft(x, P), (k = m.length + x.length > 6) && !U && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(E[h])
							.join("transparent")) : (U || (k = !1), P ? a.appendXtra(C.substr(0, C.indexOf("hsl")) + (k ? "hsla(" : "hsl("), m[0], lt(x[0], m[0]), ",", !1, !0)
							.appendXtra("", m[1], lt(x[1], m[1]), "%,", !1)
							.appendXtra("", m[2], lt(x[2], m[2]), k ? "%," : "%" + A, !1) : a.appendXtra(C.substr(0, C.indexOf("rgb")) + (k ? "rgba(" : "rgb("), m[0], x[0] - m[0], ",", !0, !0)
							.appendXtra("", m[1], x[1] - m[1], ",", !0)
							.appendXtra("", m[2], x[2] - m[2], k ? "," : A, !0), k && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (x.length < 4 ? 1 : x[3]) - m, A, !1))), mt.lastIndex = 0;
						else if (b = m.match(y))
						{
							if (!(w = x.match(_)) || w.length !== b.length) return a;
							for (p = 0, f = 0; f < b.length; f++) S = b[f], C = m.indexOf(S, p), a.appendXtra(m.substr(p, C - p), Number(S), lt(w[f], S), "", D && "px" === m.substr(C + S.length, 2), 0 === f), p = C + S.length;
							a["xs" + a.l] += m.substr(p)
						}
						else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
						if (-1 !== n.indexOf("=") && a.data)
						{
							for (A = a.xs0 + a.data.s, h = 1; h < a.l; h++) A += a["xs" + h] + a.data["xn" + h];
							a.e = A + a["xs" + h]
						}
						return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
					},
					wt = 9;
				for ((c = _t.prototype)
					.l = c.pr = 0; --wt > 0;) c["xn" + wt] = 0, c["xs" + wt] = "";
				c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(t, e, i, n, r, s)
				{
					var o = this.l;
					return this["xs" + o] += s && (o || this["xs" + o]) ? " " + t : t || "", i || 0 === o || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = n || "", o > 0 ? (this.data["xn" + o] = e + i, this.rxp["xn" + o] = r, this["xn" + o] = e, this.plugin || (this.xfirst = new _t(this, "xn" + o, e, i, this.xfirst || this, 0, this.n, r, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {
						s: e + i
					}, this.rxp = {}, this.s = e, this.c = i, this.r = r, this)) : (this["xs" + o] += e + (n || ""), this)
				};
				var Tt = function(t, e)
					{
						e = e || {}, this.p = e.prefix && Q(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
					},
					kt = X._registerComplexSpecialProp = function(t, e, i)
					{
						"object" != _typeof3(e) && (e = {
							parser: i
						});
						var n, r = t.split(","),
							s = e.defaultValue;
						for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new Tt(r[n], e)
					},
					Ct = X._registerPluginProp = function(t)
					{
						if (!l[t])
						{
							var e = t.charAt(0)
								.toUpperCase() + t.substr(1) + "Plugin";
							kt(t,
							{
								parser: function(t, i, n, r, s, o, c)
								{
									var u = a.com.greensock.plugins[e];
									return u ? (u._cssRegister(), l[n].parse(t, i, n, r, s, o, c)) : (G("Error: " + e + " js file not loaded."), s)
								}
							})
						}
					};
				(c = Tt.prototype)
				.parseComplex = function(t, e, i, n, r, s)
				{
					var o, a, l, c, u, d, h = this.keyword;
					if (this.multi && (M.test(i) || M.test(e) ? (a = e.replace(M, "|")
							.split("|"), l = i.replace(M, "|")
							.split("|")) : h && (a = [e], l = [i])), l)
					{
						for (c = l.length > a.length ? l.length : a.length, o = 0; o < c; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, h && (u = e.indexOf(h)) !== (d = i.indexOf(h)) && (-1 === d ? a[o] = a[o].split(h)
							.join("") : -1 === u && (a[o] += " " + h));
						e = a.join(", "), i = l.join(", ")
					}
					return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
				}, c.parse = function(t, e, i, n, s, o, a)
				{
					return this.parseComplex(t.style, this.format(K(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
				}, o.registerSpecialProp = function(t, e, i)
				{
					kt(t,
					{
						parser: function(t, n, r, s, o, a, l)
						{
							var c = new _t(t, r, 0, 0, o, 2, r, !1, i);
							return c.plugin = a, c.setRatio = e(t, n, s._tween, r), c
						},
						priority: i
					})
				}, o.useSVGTransformAttr = !0;
				var St, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
					Pt = Q("transform"),
					Ft = Y + "transform",
					Et = Q("transformOrigin"),
					$t = null !== Q("perspective"),
					Dt = X.Transform = function()
					{
						this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !$t) && (o.defaultForce3D || "auto")
					},
					Ot = _gsScope.SVGElement,
					Mt = function(t, e, i)
					{
						var n, r = q.createElementNS("http://www.w3.org/2000/svg", t),
							s = /([a-z])([A-Z])/g;
						for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2")
							.toLowerCase(), i[n]);
						return e.appendChild(r), r
					},
					jt = q.documentElement || {},
					Rt = function()
					{
						var t, e, i, n = m || /Android/i.test(W) && !_gsScope.chrome;
						return q.createElementNS && !n && (t = Mt("svg", jt), i = (e = Mt("rect", t,
							{
								width: 100,
								height: 50,
								x: 100
							}))
							.getBoundingClientRect()
							.width, e.style[Et] = "50% 50%", e.style[Pt] = "scaleX(0.5)", n = i === e.getBoundingClientRect()
							.width && !(f && $t), jt.removeChild(t)), n
					}(),
					Nt = function(t, e, i, n, r, s)
					{
						var a, l, c, u, d, h, f, p, m, g, v, y, _, x, b = t._gsTransform,
							w = qt(t, !0);
						b && (_ = b.xOrigin, x = b.yOrigin), (!n || (a = n.split(" "))
							.length < 2) && (0 === (f = t.getBBox())
							.x && 0 === f.y && f.width + f.height === 0 && (f = {
								x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
								y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
								width: 0,
								height: 0
							}), a = [(-1 !== (e = at(e)
								.split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(a[0]), i.yOrigin = d = parseFloat(a[1]), n && w !== Bt && (h = w[0], f = w[1], p = w[2], m = w[3], g = w[4], v = w[5], (y = h * m - f * p) && (l = u * (m / y) + d * (-p / y) + (p * v - m * g) / y, c = u * (-f / y) + d * (h / y) - (h * v - f * g) / y, u = i.xOrigin = a[0] = l, d = i.yOrigin = a[1] = c)), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || !1 !== r && !1 !== o.defaultSmoothOrigin ? (l = u - _, c = d - x, b.xOffset += l * w[0] + c * w[2] - l, b.yOffset += l * w[1] + c * w[3] - c) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
					},
					Lt = function(t)
					{
						return !(!Ot || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t)
						{
							try
							{
								return t.getBBox()
							}
							catch (e)
							{
								return function t(e)
								{
									var i, n = I("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
										r = this.parentNode,
										s = this.nextSibling,
										o = this.style.cssText;
									if (jt.appendChild(n), n.appendChild(this), this.style.display = "block", e) try
									{
										i = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = t
									}
									catch (e) {}
									else this._originalGetBBox && (i = this._originalGetBBox());
									return s ? r.insertBefore(this, s) : r.appendChild(this), jt.removeChild(n), this.style.cssText = o, i
								}.call(t, !0)
							}
						}(t))
					},
					Bt = [1, 0, 0, 1, 0, 0],
					qt = function(t, e)
					{
						var i, n, r, s, o, a, l = t._gsTransform || new Dt,
							c = t.style;
						if (Pt ? n = K(t, Ft, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(D)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Pt || !(a = !J(t) || "none" === J(t)
								.display) && t.parentNode || (a && (s = c.display, c.display = "block"), t.parentNode || (o = 1, jt.appendChild(t)), i = !(n = K(t, Ft, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? c.display = s : a && Xt(c, "display"), o && jt.removeChild(t)), (l.svg || t.getCTM && Lt(t)) && (i && -1 !== (c[Pt] + "")
								.indexOf("matrix") && (n = c[Pt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi)
									.join(",") + ")", i = 0))), i) return Bt;
						for (r = (n || "")
							.match(y) || [], wt = r.length; --wt > -1;) s = Number(r[wt]), r[wt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
						return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
					},
					It = X.getTransform = function(t, i, n, r)
					{
						if (t._gsTransform && n && !r) return t._gsTransform;
						var s, a, l, c, u, d, h = n && t._gsTransform || new Dt,
							f = h.scaleX < 0,
							p = $t && (parseFloat(K(t, Et, i, !1, "0 0 0")
								.split(" ")[2]) || h.zOrigin) || 0,
							m = parseFloat(o.defaultTransformPerspective) || 0;
						if (h.svg = !(!t.getCTM || !Lt(t)), h.svg && (Nt(t, K(t, Et, i, !1, "50% 50%") + "", h, t.getAttribute("data-svg-origin")), St = o.useSVGTransformAttr || Rt), (s = qt(t)) !== Bt)
						{
							if (16 === s.length)
							{
								var g, v, y, _, x, b = s[0],
									w = s[1],
									T = s[2],
									k = s[3],
									C = s[4],
									S = s[5],
									A = s[6],
									P = s[7],
									F = s[8],
									E = s[9],
									$ = s[10],
									D = s[12],
									O = s[13],
									M = s[14],
									j = s[11],
									R = Math.atan2(A, $);
								h.zOrigin && (D = F * (M = -h.zOrigin) - s[12], O = E * M - s[13], M = $ * M + h.zOrigin - s[14]), h.rotationX = R * N, R && (g = C * (_ = Math.cos(-R)) + F * (x = Math.sin(-R)), v = S * _ + E * x, y = A * _ + $ * x, F = C * -x + F * _, E = S * -x + E * _, $ = A * -x + $ * _, j = P * -x + j * _, C = g, S = v, A = y), R = Math.atan2(-T, $), h.rotationY = R * N, R && (v = w * (_ = Math.cos(-R)) - E * (x = Math.sin(-R)), y = T * _ - $ * x, E = w * x + E * _, $ = T * x + $ * _, j = k * x + j * _, b = g = b * _ - F * x, w = v, T = y), R = Math.atan2(w, b), h.rotation = R * N, R && (g = b * (_ = Math.cos(R)) + w * (x = Math.sin(R)), v = C * _ + S * x, y = F * _ + E * x, w = w * _ - b * x, S = S * _ - C * x, E = E * _ - F * x, b = g, C = v, F = y), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), R = Math.atan2(C, S), h.scaleX = (1e5 * Math.sqrt(b * b + w * w + T * T) + .5 | 0) / 1e5, h.scaleY = (1e5 * Math.sqrt(S * S + A * A) + .5 | 0) / 1e5, h.scaleZ = (1e5 * Math.sqrt(F * F + E * E + $ * $) + .5 | 0) / 1e5, b /= h.scaleX, C /= h.scaleY, w /= h.scaleX, S /= h.scaleY, Math.abs(R) > 2e-5 ? (h.skewX = R * N, C = 0, "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(R))) : h.skewX = 0, h.perspective = j ? 1 / (j < 0 ? -j : j) : 0, h.x = D, h.y = O, h.z = M, h.svg && (h.x -= h.xOrigin - (h.xOrigin * b - h.yOrigin * C), h.y -= h.yOrigin - (h.yOrigin * w - h.xOrigin * S))
							}
							else if (!$t || r || !s.length || h.x !== s[4] || h.y !== s[5] || !h.rotationX && !h.rotationY)
							{
								var L = s.length >= 6,
									B = L ? s[0] : 1,
									q = s[1] || 0,
									I = s[2] || 0,
									z = L ? s[3] : 1;
								h.x = s[4] || 0, h.y = s[5] || 0, l = Math.sqrt(B * B + q * q), c = Math.sqrt(z * z + I * I), u = B || q ? Math.atan2(q, B) * N : h.rotation || 0, d = I || z ? Math.atan2(I, z) * N + u : h.skewX || 0, h.scaleX = l, h.scaleY = c, h.rotation = u, h.skewX = d, $t && (h.rotationX = h.rotationY = h.z = 0, h.perspective = m, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * B + h.yOrigin * I), h.y -= h.yOrigin - (h.xOrigin * q + h.yOrigin * z))
							}
							for (a in Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (f ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180)), h.zOrigin = p, h) h[a] < 2e-5 && h[a] > -2e-5 && (h[a] = 0)
						}
						return n && (t._gsTransform = h, h.svg && (St && t.style[Pt] ? e.delayedCall(.001, function()
						{
							Xt(t.style, Pt)
						}) : !St && t.getAttribute("transform") && e.delayedCall(.001, function()
						{
							t.removeAttribute("transform")
						}))), h
					},
					zt = X.set3DTransformRatio = X.setTransformRatio = function(t)
					{
						var e, i, n, r, s, o, a, l, c, u, d, h, p, m, g, v, y, _, x, b, w, T = this.data,
							k = this.t.style,
							C = T.rotation,
							S = T.rotationX,
							A = T.rotationY,
							P = T.scaleX,
							F = T.scaleY,
							E = T.scaleZ,
							$ = T.x,
							D = T.y,
							O = T.z,
							M = T.svg,
							j = T.perspective,
							N = T.force3D,
							L = T.skewY,
							B = T.skewX;
						if (L && (B += L, C += L), !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || O || j || A || S || 1 !== E) || St && M || !$t) C || B || M ? (C *= R, b = B * R, w = 1e5, i = Math.cos(C) * P, s = Math.sin(C) * P, n = Math.sin(C - b) * -F, o = Math.cos(C - b) * F, b && "simple" === T.skewType && (e = Math.tan(b - L * R), n *= e = Math.sqrt(1 + e * e), o *= e, L && (e = Math.tan(L * R), i *= e = Math.sqrt(1 + e * e), s *= e)), M && ($ += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset, D += T.yOrigin - (T.xOrigin * s + T.yOrigin * o) + T.yOffset, St && (T.xPercent || T.yPercent) && (g = this.t.getBBox(), $ += .01 * T.xPercent * g.width, D += .01 * T.yPercent * g.height), $ < (g = 1e-6) && $ > -g && ($ = 0), D < g && D > -g && (D = 0)), x = (i * w | 0) / w + "," + (s * w | 0) / w + "," + (n * w | 0) / w + "," + (o * w | 0) / w + "," + $ + "," + D + ")", M && St ? this.t.setAttribute("transform", "matrix(" + x) : k[Pt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + x) : k[Pt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + P + ",0,0," + F + "," + $ + "," + D + ")";
						else
						{
							if (f && (P < (g = 1e-4) && P > -g && (P = E = 2e-5), F < g && F > -g && (F = E = 2e-5), !j || T.z || T.rotationX || T.rotationY || (j = 0)), C || B) C *= R, v = i = Math.cos(C), y = s = Math.sin(C), B && (C -= B * R, v = Math.cos(C), y = Math.sin(C), "simple" === T.skewType && (e = Math.tan((B - L) * R), v *= e = Math.sqrt(1 + e * e), y *= e, T.skewY && (e = Math.tan(L * R), i *= e = Math.sqrt(1 + e * e), s *= e))), n = -y, o = v;
							else
							{
								if (!(A || S || 1 !== E || j || M)) return void(k[Pt] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + $ + "px," + D + "px," + O + "px)" + (1 !== P || 1 !== F ? " scale(" + P + "," + F + ")" : ""));
								i = o = 1, n = s = 0
							}
							u = 1, r = a = l = c = d = h = 0, p = j ? -1 / j : 0, m = T.zOrigin, g = 1e-6, (C = A * R) && (v = Math.cos(C), l = -(y = Math.sin(C)), d = p * -y, r = i * y, a = s * y, u = v, p *= v, i *= v, s *= v), (C = S * R) && (e = n * (v = Math.cos(C)) + r * (y = Math.sin(C)), _ = o * v + a * y, c = u * y, h = p * y, r = n * -y + r * v, a = o * -y + a * v, u *= v, p *= v, n = e, o = _), 1 !== E && (r *= E, a *= E, u *= E, p *= E), 1 !== F && (n *= F, o *= F, c *= F, h *= F), 1 !== P && (i *= P, s *= P, l *= P, d *= P), (m || M) && (m && ($ += r * -m, D += a * -m, O += u * -m + m), M && ($ += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset, D += T.yOrigin - (T.xOrigin * s + T.yOrigin * o) + T.yOffset), $ < g && $ > -g && ($ = "0"), D < g && D > -g && (D = "0"), O < g && O > -g && (O = 0)), x = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < g && i > -g ? "0" : i) + "," + (s < g && s > -g ? "0" : s) + "," + (l < g && l > -g ? "0" : l), x += "," + (d < g && d > -g ? "0" : d) + "," + (n < g && n > -g ? "0" : n) + "," + (o < g && o > -g ? "0" : o), S || A || 1 !== E ? (x += "," + (c < g && c > -g ? "0" : c) + "," + (h < g && h > -g ? "0" : h) + "," + (r < g && r > -g ? "0" : r), x += "," + (a < g && a > -g ? "0" : a) + "," + (u < g && u > -g ? "0" : u) + "," + (p < g && p > -g ? "0" : p) + ",") : x += ",0,0,0,0,1,0,", x += $ + "," + D + "," + O + "," + (j ? 1 + -O / j : 1) + ")", k[Pt] = x
						}
					};
				(c = Dt.prototype)
				.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, kt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
				{
					parser: function(t, e, i, n, s, a, l)
					{
						if (n._lastParsedTransform === l) return s;
						n._lastParsedTransform = l;
						var c, u = l.scale && "function" == typeof l.scale ? l.scale : 0;
						"function" == typeof l[i] && (c = l[i], l[i] = e), u && (l.scale = u(v, t));
						var d, h, f, p, m, y, _, x, b, w = t._gsTransform,
							T = t.style,
							k = At.length,
							C = l,
							S = {},
							A = "transformOrigin",
							P = It(t, r, !0, C.parseTransform),
							F = C.transform && ("function" == typeof C.transform ? C.transform(v, g) : C.transform);
						if (P.skewType = C.skewType || P.skewType || o.defaultSkewType, n._transform = P, F && "string" == typeof F && Pt)(h = z.style)[Pt] = F, h.display = "block", h.position = "absolute", q.body.appendChild(z), d = It(z, null, !1), "simple" === P.skewType && (d.scaleY *= Math.cos(d.skewX * R)), P.svg && (y = P.xOrigin, _ = P.yOrigin, d.x -= P.xOffset, d.y -= P.yOffset, (C.transformOrigin || C.svgOrigin) && (F = {}, Nt(t, at(C.transformOrigin), F, C.svgOrigin, C.smoothOrigin, !0), y = F.xOrigin, _ = F.yOrigin, d.x -= F.xOffset - P.xOffset, d.y -= F.yOffset - P.yOffset), (y || _) && (x = qt(z, !0), d.x -= y - (y * x[0] + _ * x[2]), d.y -= _ - (y * x[1] + _ * x[3]))), q.body.removeChild(z), d.perspective || (d.perspective = P.perspective), null != C.xPercent && (d.xPercent = ct(C.xPercent, P.xPercent)), null != C.yPercent && (d.yPercent = ct(C.yPercent, P.yPercent));
						else if ("object" == _typeof3(C))
						{
							if (d = {
									scaleX: ct(null != C.scaleX ? C.scaleX : C.scale, P.scaleX),
									scaleY: ct(null != C.scaleY ? C.scaleY : C.scale, P.scaleY),
									scaleZ: ct(C.scaleZ, P.scaleZ),
									x: ct(C.x, P.x),
									y: ct(C.y, P.y),
									z: ct(C.z, P.z),
									xPercent: ct(C.xPercent, P.xPercent),
									yPercent: ct(C.yPercent, P.yPercent),
									perspective: ct(C.transformPerspective, P.perspective)
								}, null != (m = C.directionalRotation))
								if ("object" == _typeof3(m))
									for (h in m) C[h] = m[h];
								else C.rotation = m;
							"string" == typeof C.x && -1 !== C.x.indexOf("%") && (d.x = 0, d.xPercent = ct(C.x, P.xPercent)), "string" == typeof C.y && -1 !== C.y.indexOf("%") && (d.y = 0, d.yPercent = ct(C.y, P.yPercent)), d.rotation = ut("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : P.rotation, P.rotation, "rotation", S), $t && (d.rotationX = ut("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", S), d.rotationY = ut("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", S)), d.skewX = ut(C.skewX, P.skewX), d.skewY = ut(C.skewY, P.skewY)
						}
						for ($t && null != C.force3D && (P.force3D = C.force3D, p = !0), (f = P.force3D || P.z || P.rotationX || P.rotationY || d.z || d.rotationX || d.rotationY || d.perspective) || null == C.scale || (d.scaleZ = 1); --k > -1;)((F = d[b = At[k]] - P[b]) > 1e-6 || F < -1e-6 || null != C[b] || null != L[b]) && (p = !0, s = new _t(P, b, P[b], F, s), b in S && (s.e = S[b]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
						return F = C.transformOrigin, P.svg && (F || C.svgOrigin) && (y = P.xOffset, _ = P.yOffset, Nt(t, at(F), d, C.svgOrigin, C.smoothOrigin), s = xt(P, "xOrigin", (w ? P : d)
							.xOrigin, d.xOrigin, s, A), s = xt(P, "yOrigin", (w ? P : d)
							.yOrigin, d.yOrigin, s, A), y === P.xOffset && _ === P.yOffset || (s = xt(P, "xOffset", w ? y : P.xOffset, P.xOffset, s, A), s = xt(P, "yOffset", w ? _ : P.yOffset, P.yOffset, s, A)), F = "0px 0px"), (F || $t && f && P.zOrigin) && (Pt ? (p = !0, b = Et, F = (F || K(t, b, r, !1, "50% 50%")) + "", (s = new _t(T, b, 0, 0, s, -1, A))
							.b = T[b], s.plugin = a, $t ? (h = P.zOrigin, F = F.split(" "), P.zOrigin = (F.length > 2 && (0 === h || "0px" !== F[2]) ? parseFloat(F[2]) : h) || 0, s.xs0 = s.e = F[0] + " " + (F[1] || "50%") + " 0px", (s = new _t(P, "zOrigin", 0, 0, s, -1, s.n))
								.b = h, s.xs0 = s.e = P.zOrigin) : s.xs0 = s.e = F) : at(F + "", P)), p && (n._transformType = P.svg && St || !f && 3 !== this._transformType ? 2 : 3), c && (l[i] = c), u && (l.scale = u), s
					},
					prefix: !0
				}), kt("boxShadow",
				{
					defaultValue: "0px 0px 0px 0px #999",
					prefix: !0,
					color: !0,
					multi: !0,
					keyword: "inset"
				}), kt("borderRadius",
				{
					defaultValue: "0px",
					parser: function(t, e, i, s, o, a)
					{
						e = this.format(e);
						var l, c, u, d, h, f, p, m, g, v, y, _, x, b, w, T, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
							C = t.style;
						for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < k.length; c++) this.p.indexOf("border") && (k[c] = Q(k[c])), -1 !== (h = d = K(t, k[c], r, !1, "0px"))
							.indexOf(" ") && (h = (d = h.split(" "))[0], d = d[1]), f = u = l[c], p = parseFloat(h), _ = h.substr((p + "")
								.length), (x = "=" === f.charAt(1)) ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), y = f.substr((m + "")
								.length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f), y = f.substr((m + "")
								.length)), "" === y && (y = n[i] || _), y !== _ && (b = tt(t, "borderLeft", p, _), w = tt(t, "borderTop", p, _), "%" === y ? (h = b / g * 100 + "%", d = w / v * 100 + "%") : "em" === y ? (h = b / (T = tt(t, "borderLeft", 1, "em")) + "em", d = w / T + "em") : (h = b + "px", d = w + "px"), x && (f = parseFloat(h) + m + y, u = parseFloat(d) + m + y)), o = bt(C, k[c], h + " " + d, f + " " + u, !1, "0px", o);
						return o
					},
					prefix: !0,
					formatter: gt("0px 0px 0px 0px", !1, !0)
				}), kt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
				{
					defaultValue: "0px",
					parser: function(t, e, i, n, s, o)
					{
						return bt(t.style, i, this.format(K(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
					},
					prefix: !0,
					formatter: gt("0px 0px", !1, !0)
				}), kt("backgroundPosition",
				{
					defaultValue: "0 0",
					parser: function(t, e, i, n, s, o)
					{
						var a, l, c, u, d, h, f = "background-position",
							p = r || J(t, null),
							g = this.format((p ? m ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
							v = this.format(e);
						if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",")
							.length < 2 && (h = K(t, "backgroundImage")
								.replace(F, "")) && "none" !== h)
						{
							for (a = g.split(" "), l = v.split(" "), H.setAttribute("src", h), c = 2; --c > -1;)(u = -1 !== (g = a[c])
								.indexOf("%")) != (-1 !== l[c].indexOf("%")) && (d = 0 === c ? t.offsetWidth - H.width : t.offsetHeight - H.height, a[c] = u ? parseFloat(g) / 100 * d + "px" : parseFloat(g) / d * 100 + "%");
							g = a.join(" ")
						}
						return this.parseComplex(t.style, g, v, s, o)
					},
					formatter: at
				}), kt("backgroundSize",
				{
					defaultValue: "0 0",
					formatter: function(t)
					{
						return at(-1 === (t += "")
							.indexOf(" ") ? t + " " + t : t)
					}
				}), kt("perspective",
				{
					defaultValue: "0px",
					prefix: !0
				}), kt("perspectiveOrigin",
				{
					defaultValue: "50% 50%",
					prefix: !0
				}), kt("transformStyle",
				{
					prefix: !0
				}), kt("backfaceVisibility",
				{
					prefix: !0
				}), kt("userSelect",
				{
					prefix: !0
				}), kt("margin",
				{
					parser: vt("marginTop,marginRight,marginBottom,marginLeft")
				}), kt("padding",
				{
					parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
				}), kt("clip",
				{
					defaultValue: "rect(0px,0px,0px,0px)",
					parser: function(t, e, i, n, s, o)
					{
						var a, l, c;
						return m < 9 ? (l = t.currentStyle, c = m < 8 ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e)
							.split(",")
							.join(c)) : (a = this.format(K(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
					}
				}), kt("textShadow",
				{
					defaultValue: "0px 0px 0px #999",
					color: !0,
					multi: !0
				}), kt("autoRound,strictUnits",
				{
					parser: function(t, e, i, n, r)
					{
						return r
					}
				}), kt("border",
				{
					defaultValue: "0px solid #000",
					parser: function(t, e, i, n, s, o)
					{
						var a = K(t, "borderTopWidth", r, !1, "0px"),
							l = this.format(e)
							.split(" "),
							c = l[0].replace(w, "");
						return "px" !== c && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", r, !1, "solid") + " " + K(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
					},
					color: !0,
					formatter: function(t)
					{
						var e = t.split(" ");
						return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
					}
				}), kt("borderWidth",
				{
					parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
				}), kt("float,cssFloat,styleFloat",
				{
					parser: function(t, e, i, n, r, s)
					{
						var o = t.style,
							a = "cssFloat" in o ? "cssFloat" : "styleFloat";
						return new _t(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
					}
				});
				var Ht = function(t)
				{
					var e, i = this.t,
						n = i.filter || K(this.data, "filter") || "",
						r = this.s + this.c * t | 0;
					100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
				};
				kt("opacity,alpha,autoAlpha",
				{
					defaultValue: "1",
					parser: function(t, e, i, n, s, o)
					{
						var a = parseFloat(K(t, "opacity", r, !1, "1")),
							l = t.style,
							c = "autoAlpha" === i;
						return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === K(t, "visibility", r) && 0 !== e && (a = 0), U ? s = new _t(l, "opacity", a, e - a, s) : ((s = new _t(l, "opacity", 100 * a, 100 * (e - a), s))
							.xn1 = c ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Ht), c && ((s = new _t(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"))
							.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
					}
				});
				var Xt = function(t, e)
					{
						e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(A, "-$1")
							.toLowerCase())) : t.removeAttribute(e))
					},
					Wt = function(t)
					{
						if (this.t._gsClassPT = this, 1 === t || 0 === t)
						{
							this.t.setAttribute("class", 0 === t ? this.b : this.e);
							for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Xt(i, e.p), e = e._next;
							1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
						}
						else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
					};
				kt("className",
				{
					parser: function(t, e, n, s, o, a, l)
					{
						var c, u, d, h, f, p = t.getAttribute("class") || "",
							m = t.style.cssText;
						if ((o = s._classNamePT = new _t(t, n, 0, 0, o, 2))
							.setRatio = Wt, o.pr = -11, i = !0, o.b = p, u = it(t, r), d = t._gsClassPT)
						{
							for (h = {}, f = d.data; f;) h[f.p] = 1, f = f._next;
							d.setRatio(1)
						}
						return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), c = nt(t, u, it(t), l, h), t.setAttribute("class", p), o.data = c.firstMPT, t.style.cssText = m, o.xfirst = s.parse(t, c.difs, o, a)
					}
				});
				var Ut = function(t)
				{
					if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data)
					{
						var e, i, n, r, s, o = this.t.style,
							a = l.transform.parse;
						if ("all" === this.e) o.cssText = "", r = !0;
						else
							for (n = (e = this.e.split(" ")
									.join("")
									.split(","))
								.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Et : l[i].p), Xt(o, i);
						r && (Xt(o, Pt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
					}
				};
				for (kt("clearProps",
					{
						parser: function(t, e, n, r, s)
						{
							return (s = new _t(t, n, 0, 0, s, 2))
								.setRatio = Ut, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
						}
					}), c = "bezier,throwProps,physicsProps,physics2D".split(","), wt = c.length; wt--;) Ct(c[wt]);
				(c = o.prototype)
				._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(t, e, a, c)
				{
					if (!t.nodeType) return !1;
					this._target = g = t, this._tween = a, this._vars = e, v = c, u = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = J(t, ""), s = this._overwriteProps;
					var f, y, _, x, b, C, S, A, P, F = t.style;
					if (d && "" === F.zIndex && ("auto" !== (f = K(t, "zIndex", r)) && "" !== f || this._addLazySet(F, "zIndex", 0)), "string" == typeof e && (x = F.cssText, f = it(t, r), F.cssText = x + ";" + e, f = nt(t, f, it(t))
							.difs, !U && k.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, F.cssText = x), e.className ? this._firstPT = y = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = y = this.parse(t, e, null), this._transformType)
					{
						for (P = 3 === this._transformType, Pt ? h && (d = !0, "" === F.zIndex && ("auto" !== (S = K(t, "zIndex", r)) && "" !== S || this._addLazySet(F, "zIndex", 0)), p && this._addLazySet(F, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : F.zoom = 1, _ = y; _ && _._next;) _ = _._next;
						A = new _t(t, "transform", 0, 0, null, 2), this._linkCSSP(A, null, _), A.setRatio = Pt ? zt : function(t)
						{
							var e, i, n = this.data,
								r = -n.rotation * R,
								s = r + n.skewX * R,
								o = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
								a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
								l = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5,
								c = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5,
								u = this.t.style,
								d = this.t.currentStyle;
							if (d)
							{
								i = a, a = -l, l = -i, e = d.filter, u.filter = "";
								var h, f, p = this.t.offsetWidth,
									g = this.t.offsetHeight,
									v = "absolute" !== d.position,
									y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + c,
									_ = n.x + p * n.xPercent / 100,
									x = n.y + g * n.yPercent / 100;
								if (null != n.ox && (_ += (h = (n.oxp ? p * n.ox * .01 : n.ox) - p / 2) - (h * o + (f = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2) * a), x += f - (h * l + f * c)), y += v ? ", Dx=" + ((h = p / 2) - (h * o + (f = g / 2) * a) + _) + ", Dy=" + (f - (h * l + f * c) + x) + ")" : ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(O, y) : u.filter = y + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === a && 0 === l && 1 === c && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !v)
								{
									var b, k, C, S = m < 8 ? 1 : -1;
									for (h = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((p - ((o < 0 ? -o : o) * p + (a < 0 ? -a : a) * g)) / 2 + _), n.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (l < 0 ? -l : l) * p)) / 2 + x), wt = 0; wt < 4; wt++) C = (i = -1 !== (b = d[k = st[wt]])
										.indexOf("px") ? parseFloat(b) : tt(this.t, k, parseFloat(b), b.replace(w, "")) || 0) !== n[k] ? wt < 2 ? -n.ieOffsetX : -n.ieOffsetY : wt < 2 ? h - n.ieOffsetX : f - n.ieOffsetY, u[k] = (n[k] = Math.round(i - C * (0 === wt || 2 === wt ? 1 : S))) + "px"
								}
							}
						}, A.data = this._transform || It(t, r, !0), A.tween = a, A.pr = -1, s.pop()
					}
					if (i)
					{
						for (; y;)
						{
							for (C = y._next, _ = x; _ && _.pr > y.pr;) _ = _._next;
							(y._prev = _ ? _._prev : b) ? y._prev._next = y: x = y, (y._next = _) ? _._prev = y : b = y, y = C
						}
						this._firstPT = x
					}
					return !0
				}, c.parse = function(t, e, i, s)
				{
					var o, a, c, d, h, f, p, m, y, _, x = t.style;
					for (o in e)
					{
						if ("function" == typeof(f = e[o]) && (f = f(v, g)), a = l[o]) i = a.parse(t, f, o, this, i, s, e);
						else
						{
							if ("--" === o.substr(0, 2))
							{
								this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", J(t)
									.getPropertyValue(o) + "", f + "", o, !1, o);
								continue
							}
							h = K(t, o, r) + "", y = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || y && S.test(f) ? (y || (f = ((f = ft(f))
								.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = bt(x, o, h, f, !0, "transparent", i, 0, s)) : y && j.test(f) ? i = bt(x, o, h, f, !0, null, i, 0, s) : (p = (c = parseFloat(h)) || 0 === c ? h.substr((c + "")
									.length) : "", "" !== h && "auto" !== h || ("width" === o || "height" === o ? (c = ot(t, o, r), p = "px") : "left" === o || "top" === o ? (c = et(t, o, r), p = "px") : (c = "opacity" !== o ? 0 : 1, p = "")), (_ = y && "=" === f.charAt(1)) ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), m = f.replace(w, "")) : (d = parseFloat(f), m = y ? f.replace(w, "") : ""), "" === m && (m = o in n ? n[o] : p), f = d || 0 === d ? (_ ? d + c : d) + m : e[o], p !== m && ("" === m && "lineHeight" !== o || (d || 0 === d) && c && (c = tt(t, o, c, p), "%" === m ? (c /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (h = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= tt(t, o, 1, m) : "px" !== m && (d = tt(t, o, d, m), m = "px"), _ && (d || 0 === d) && (f = d + c + m))), _ && (d += c), !c && 0 !== c || !d && 0 !== d ? void 0 !== x[o] && (f || f + "" != "NaN" && null != f) ? (i = new _t(x, o, d || c || 0, 0, i, -1, o, !1, 0, h, f))
								.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : h : G("invalid " + o + " tween value: " + e[o]) : (i = new _t(x, o, c, d - c, i, 0, o, !1 !== u && ("px" === m || "zIndex" === o), 0, h, f))
								.xs0 = m)
						}
						s && i && !i.plugin && (i.plugin = s)
					}
					return i
				}, c.setRatio = function(t)
				{
					var e, i, n, r = this._firstPT;
					if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
						if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
							for (; r;)
							{
								if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type)
									if (1 === r.type)
										if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
										else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
								else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
								else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
								else
								{
									for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
									r.t[r.p] = i
								}
								else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
								else r.t[r.p] = e + r.xs0;
								r = r._next
							}
					else
						for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
					else
						for (; r;)
						{
							if (2 !== r.type)
								if (r.r && -1 !== r.type)
									if (e = Math.round(r.s + r.c), r.type)
									{
										if (1 === r.type)
										{
											for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
											r.t[r.p] = i
										}
									}
							else r.t[r.p] = e + r.xs0;
							else r.t[r.p] = r.e;
							else r.setRatio(t);
							r = r._next
						}
				}, c._enableTransforms = function(t)
				{
					this._transform = this._transform || It(this._target, r, !0), this._transformType = this._transform.svg && St || !t && 3 !== this._transformType ? 2 : 3
				};
				var Vt = function(t)
				{
					this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
				};
				c._addLazySet = function(t, e, i)
				{
					var n = this._firstPT = new _t(t, e, 0, 0, this._firstPT, 2);
					n.e = i, n.setRatio = Vt, n.data = this
				}, c._linkCSSP = function(t, e, i, n)
				{
					return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
				}, c._mod = function(t)
				{
					for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
				}, c._kill = function(e)
				{
					var i, n, r, s = e;
					if (e.autoAlpha || e.alpha)
					{
						for (n in s = {}, e) s[n] = e[n];
						s.opacity = 1, s.autoAlpha && (s.visibility = 1)
					}
					for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
					return t.prototype._kill.call(this, s)
				};
				var Gt = function t(e, i, n)
				{
					var r, s, o, a;
					if (e.slice)
						for (s = e.length; --s > -1;) t(e[s], i, n);
					else
						for (s = (r = e.childNodes)
							.length; --s > -1;) a = (o = r[s])
							.type, o.style && (i.push(it(o)), n && n.push(o)), 1 !== a && 9 !== a && 11 !== a || !o.childNodes.length || t(o, i, n)
				};
				return o.cascadeTo = function(t, i, n)
				{
					var r, s, o, a, l = e.to(t, i, n),
						c = [l],
						u = [],
						d = [],
						h = [],
						f = e._internals.reservedProps;
					for (t = l._targets || l.target, Gt(t, u, h), l.render(i, !0, !0), Gt(t, d), l.render(0, !0, !0), l._enabled(!0), r = h.length; --r > -1;)
						if ((s = nt(h[r], u[r], d[r]))
							.firstMPT)
						{
							for (o in s = s.difs, n) f[o] && (s[o] = n[o]);
							for (o in a = {}, s) a[o] = u[r][o];
							c.push(e.fromTo(h[r], i, a, s))
						} return c
				}, t.activate([o]), o
			}, !0),
			function()
			{
				var t = function(t)
					{
						for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
					},
					e = _gsScope._gsDefine.plugin(
					{
						propName: "roundProps",
						version: "1.6.0",
						priority: -1,
						API: 2,
						init: function(t, e, i)
						{
							return this._tween = i, !0
						}
					})
					.prototype;
				e._onInitAllProps = function()
				{
					for (var e, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = Math.round;
					for (o = s.length; --o > -1;)
						for (e = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[e] = l)), i = n;
					return !1
				}, e._add = function(t, e, i, n)
				{
					this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
				}
			}(), _gsScope._gsDefine.plugin(
			{
				propName: "attr",
				API: 2,
				version: "0.6.1",
				init: function(t, e, i, n)
				{
					var r, s;
					if ("function" != typeof t.setAttribute) return !1;
					for (r in e) "function" == typeof(s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
					return !0
				}
			}), _gsScope._gsDefine.plugin(
			{
				propName: "directionalRotation",
				version: "0.3.1",
				API: 2,
				init: function(t, e, i, n)
				{
					"object" != _typeof3(e) && (e = {
						rotation: e
					}), this.finals = {};
					var r, s, o, a, l, c, u = !0 === e.useRadians ? 2 * Math.PI : 360;
					for (r in e) "useRadians" !== r && ("function" == typeof(a = e[r]) && (a = a(n, t)), s = (c = (a + "")
						.split("_"))[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, c.length && (-1 !== (s = c.join("_"))
						.indexOf("short") && (l %= u) != l % (u / 2) && (l = l < 0 ? l + u : l - u), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
					return !0
				},
				set: function(t)
				{
					var e;
					if (1 !== t) this._super.setRatio.call(this, t);
					else
						for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
				}
			})
			._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t)
			{
				var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
					s = r.com.greensock,
					o = 2 * Math.PI,
					a = Math.PI / 2,
					l = s._class,
					c = function(e, i)
					{
						var n = l("easing." + e, function() {}, !0),
							r = n.prototype = new t;
						return r.constructor = n, r.getRatio = i, n
					},
					u = t.register || function() {},
					d = function(t, e, i, n, r)
					{
						var s = l("easing." + t,
						{
							easeOut: new e,
							easeIn: new i,
							easeInOut: new n
						}, !0);
						return u(s, t), s
					},
					h = function(t, e, i)
					{
						this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
					},
					f = function(e, i)
					{
						var n = l("easing." + e, function(t)
							{
								this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
							}, !0),
							r = n.prototype = new t;
						return r.constructor = n, r.getRatio = i, r.config = function(t)
						{
							return new n(t)
						}, n
					},
					p = d("Back", f("BackOut", function(t)
					{
						return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
					}), f("BackIn", function(t)
					{
						return t * t * ((this._p1 + 1) * t - this._p1)
					}), f("BackInOut", function(t)
					{
						return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
					})),
					m = l("easing.SlowMo", function(t, e, i)
					{
						e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
					}, !0),
					g = m.prototype = new t;
				return g.constructor = m, g.getRatio = function(t)
					{
						var e = t + (.5 - t) * this._p;
						return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
					}, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i)
					{
						return new m(t, e, i)
					}, (g = (e = l("easing.SteppedEase", function(t, e)
						{
							t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
						}, !0))
						.prototype = new t)
					.constructor = e, g.getRatio = function(t)
					{
						return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
					}, g.config = e.config = function(t, i)
					{
						return new e(t, i)
					}, i = l("easing.RoughEase", function(e)
					{
						for (var i, n, r, s, o, a, l = (e = e || {})
								.taper || "none", c = [], u = 0, d = 0 | (e.points || 20), f = d, p = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / d * f, n = g ? g.getRatio(i) : i, r = "none" === l ? v : "out" === l ? (s = 1 - i) * s * v : "in" === l ? i * i * v : i < .5 ? (s = 2 * i) * s * .5 * v : (s = 2 * (1 - i)) * s * .5 * v, p ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), c[u++] = {
							x: i,
							y: n
						};
						for (c.sort(function(t, e)
							{
								return t.x - e.x
							}), a = new h(1, 1, null), f = d; --f > -1;) o = c[f], a = new h(o.x, o.y, a);
						this._prev = new h(0, 0, 0 !== a.t ? a : a.next)
					}, !0), (g = i.prototype = new t)
					.constructor = i, g.getRatio = function(t)
					{
						var e = this._prev;
						if (t > e.t)
						{
							for (; e.next && t >= e.t;) e = e.next;
							e = e.prev
						}
						else
							for (; e.prev && t <= e.t;) e = e.prev;
						return this._prev = e, e.v + (t - e.t) / e.gap * e.c
					}, g.config = function(t)
					{
						return new i(t)
					}, i.ease = new i, d("Bounce", c("BounceOut", function(t)
					{
						return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
					}), c("BounceIn", function(t)
					{
						return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
					}), c("BounceInOut", function(t)
					{
						var e = t < .5;
						return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
					})), d("Circ", c("CircOut", function(t)
					{
						return Math.sqrt(1 - (t -= 1) * t)
					}), c("CircIn", function(t)
					{
						return -(Math.sqrt(1 - t * t) - 1)
					}), c("CircInOut", function(t)
					{
						return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
					})), d("Elastic", (n = function(e, i, n)
					{
						var r = l("easing." + e, function(t, e)
							{
								this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
							}, !0),
							s = r.prototype = new t;
						return s.constructor = r, s.getRatio = i, s.config = function(t, e)
						{
							return new r(t, e)
						}, r
					})("ElasticOut", function(t)
					{
						return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
					}, .3), n("ElasticIn", function(t)
					{
						return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
					}, .3), n("ElasticInOut", function(t)
					{
						return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
					}, .45)), d("Expo", c("ExpoOut", function(t)
					{
						return 1 - Math.pow(2, -10 * t)
					}), c("ExpoIn", function(t)
					{
						return Math.pow(2, 10 * (t - 1)) - .001
					}), c("ExpoInOut", function(t)
					{
						return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
					})), d("Sine", c("SineOut", function(t)
					{
						return Math.sin(t * a)
					}), c("SineIn", function(t)
					{
						return 1 - Math.cos(t * a)
					}), c("SineInOut", function(t)
					{
						return -.5 * (Math.cos(Math.PI * t) - 1)
					})), l("easing.EaseLookup",
					{
						find: function(e)
						{
							return t.map[e]
						}
					}, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), p
			}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function(t, e)
	{
		"use strict";
		var i = {},
			n = t.document,
			r = t.GreenSockGlobals = t.GreenSockGlobals || t;
		if (!r.TweenLite)
		{
			var s, o, a, l, c, u = function(t)
				{
					var e, i = t.split("."),
						n = r;
					for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
					return n
				},
				d = u("com.greensock"),
				h = function(t)
				{
					var e, i = [],
						n = t.length;
					for (e = 0; e !== n; i.push(t[e++]));
					return i
				},
				f = function() {},
				p = function()
				{
					var t = Object.prototype.toString,
						e = t.call([]);
					return function(i)
					{
						return null != i && (i instanceof Array || "object" == _typeof3(i) && !!i.push && t.call(i) === e)
					}
				}(),
				m = {},
				g = function n(s, o, a, l)
				{
					this.sc = m[s] ? m[s].sc : [], m[s] = this, this.gsClass = null, this.func = a;
					var c = [];
					this.check = function(d)
					{
						for (var h, f, p, g, v = o.length, y = v; --v > -1;)(h = m[o[v]] || new n(o[v], []))
							.gsClass ? (c[v] = h.gsClass, y--) : d && h.sc.push(this);
						if (0 === y && a)
						{
							if (p = (f = ("com.greensock." + s)
									.split("."))
								.pop(), g = u(f.join("."))[p] = this.gsClass = a.apply(a, c), l)
								if (r[p] = i[p] = g, "undefined" != typeof module && module.exports)
									if (s === e)
										for (v in module.exports = i[e] = g, i) g[v] = i[v];
									else i[e] && (i[e][p] = g);
							else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".")
								.pop(), [],
								function()
								{
									return g
								});
							for (v = 0; v < this.sc.length; v++) this.sc[v].check()
						}
					}, this.check(!0)
				},
				v = t._gsDefine = function(t, e, i, n)
				{
					return new g(t, e, i, n)
				},
				y = d._class = function(t, e, i)
				{
					return e = e || function() {}, v(t, [], function()
					{
						return e
					}, i), e
				};
			v.globals = r;
			var _ = [0, 0, 1, 1],
				x = y("easing.Ease", function(t, e, i, n)
				{
					this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
				}, !0),
				b = x.map = {},
				w = x.register = function(t, e, i, n)
				{
					for (var r, s, o, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut")
							.split(","); --c > -1;)
						for (s = l[c], r = n ? y("easing." + s, null, !0) : d.easing[s] || {}, o = u.length; --o > -1;) a = u[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t
				};
			for ((a = x.prototype)
				._calcEnd = !1, a.getRatio = function(t)
				{
					if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
					var e = this._type,
						i = this._power,
						n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
					return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
				}, o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"])
				.length; --o > -1;) a = s[o] + ",Power" + o, w(new x(null, null, 1, o), a, "easeOut", !0), w(new x(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), w(new x(null, null, 3, o), a, "easeInOut");
			b.linear = d.easing.Linear.easeIn, b.swing = d.easing.Quad.easeInOut;
			var T = y("events.EventDispatcher", function(t)
			{
				this._listeners = {}, this._eventTarget = t || this
			});
			(a = T.prototype)
			.addEventListener = function(t, e, i, n, r)
			{
				r = r || 0;
				var s, o, a = this._listeners[t],
					u = 0;
				for (this !== l || c || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(s = a[o])
					.c === e && s.s === i ? a.splice(o, 1) : 0 === u && s.pr < r && (u = o + 1);
				a.splice(u, 0,
				{
					c: e,
					s: i,
					up: n,
					pr: r
				})
			}, a.removeEventListener = function(t, e)
			{
				var i, n = this._listeners[t];
				if (n)
					for (i = n.length; --i > -1;)
						if (n[i].c === e) return void n.splice(i, 1)
			}, a.dispatchEvent = function(t)
			{
				var e, i, n, r = this._listeners[t];
				if (r)
					for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i,
					{
						type: t,
						target: i
					}) : n.c.call(n.s || i))
			};
			var k = t.requestAnimationFrame,
				C = t.cancelAnimationFrame,
				S = Date.now || function()
				{
					return (new Date)
						.getTime()
				},
				A = S();
			for (o = (s = ["ms", "moz", "webkit", "o"])
				.length; --o > -1 && !k;) k = t[s[o] + "RequestAnimationFrame"], C = t[s[o] + "CancelAnimationFrame"] || t[s[o] + "CancelRequestAnimationFrame"];
			y("Ticker", function(t, e)
				{
					var i, r, s, o, a, u = this,
						d = S(),
						h = !(!1 === e || !k) && "auto",
						p = 500,
						m = 33,
						g = function t(e)
						{
							var n, l, c = S() - A;
							c > p && (d += c - m), A += c, u.time = (A - d) / 1e3, n = u.time - a, (!i || n > 0 || !0 === e) && (u.frame++, a += n + (n >= o ? .004 : o - n), l = !0), !0 !== e && (s = r(t)), l && u.dispatchEvent("tick")
						};
					T.call(u), u.time = u.frame = 0, u.tick = function()
					{
						g(!0)
					}, u.lagSmoothing = function(t, e)
					{
						if (!arguments.length) return p < 1e10;
						p = t || 1e10, m = Math.min(e, p, 0)
					}, u.sleep = function()
					{
						null != s && (h && C ? C(s) : clearTimeout(s), r = f, s = null, u === l && (c = !1))
					}, u.wake = function(t)
					{
						null !== s ? u.sleep() : t ? d += -A + (A = S()) : u.frame > 10 && (A = S() - p + 5), r = 0 === i ? f : h && k ? k : function(t)
						{
							return setTimeout(t, 1e3 * (a - u.time) + 1 | 0)
						}, u === l && (c = !0), g(2)
					}, u.fps = function(t)
					{
						if (!arguments.length) return i;
						o = 1 / ((i = t) || 60), a = this.time + o, u.wake()
					}, u.useRAF = function(t)
					{
						if (!arguments.length) return h;
						u.sleep(), h = t, u.fps(i)
					}, u.fps(t), setTimeout(function()
					{
						"auto" === h && u.frame < 5 && "hidden" !== n.visibilityState && u.useRAF(!1)
					}, 1500)
				}), (a = d.Ticker.prototype = new d.events.EventDispatcher)
				.constructor = d.Ticker;
			var P = y("core.Animation", function(t, e)
			{
				if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, U)
				{
					c || l.wake();
					var i = this.vars.useFrames ? W : U;
					i.add(this, i._time), this.vars.paused && this.paused(!0)
				}
			});
			l = P.ticker = new d.Ticker, (a = P.prototype)
				._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
			(function t()
			{
				c && S() - A > 2e3 && ("hidden" !== n.visibilityState || !l.lagSmoothing()) && l.wake();
				var e = setTimeout(t, 2e3);
				e.unref && e.unref()
			})(), a.play = function(t, e)
			{
				return null != t && this.seek(t, e), this.reversed(!1)
					.paused(!1)
			}, a.pause = function(t, e)
			{
				return null != t && this.seek(t, e), this.paused(!0)
			}, a.resume = function(t, e)
			{
				return null != t && this.seek(t, e), this.paused(!1)
			}, a.seek = function(t, e)
			{
				return this.totalTime(Number(t), !1 !== e)
			}, a.restart = function(t, e)
			{
				return this.reversed(!1)
					.paused(!1)
					.totalTime(t ? -this._delay : 0, !1 !== e, !0)
			}, a.reverse = function(t, e)
			{
				return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0)
					.paused(!1)
			}, a.render = function(t, e, i) {}, a.invalidate = function()
			{
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
			}, a.isActive = function()
			{
				var t, e = this._timeline,
					i = this._startTime;
				return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
			}, a._enabled = function(t, e)
			{
				return c || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
			}, a._kill = function(t, e)
			{
				return this._enabled(!1, !1)
			}, a.kill = function(t, e)
			{
				return this._kill(t, e), this
			}, a._uncache = function(t)
			{
				for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
				return this
			}, a._swapSelfInParams = function(t)
			{
				for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
				return i
			}, a._callback = function(t)
			{
				var e = this.vars,
					i = e[t],
					n = e[t + "Params"],
					r = e[t + "Scope"] || e.callbackScope || this;
				switch (n ? n.length : 0)
				{
					case 0:
						i.call(r);
						break;
					case 1:
						i.call(r, n[0]);
						break;
					case 2:
						i.call(r, n[0], n[1]);
						break;
					default:
						i.apply(r, n)
				}
			}, a.eventCallback = function(t, e, i, n)
			{
				if ("on" === (t || "")
					.substr(0, 2))
				{
					var r = this.vars;
					if (1 === arguments.length) return r[t];
					null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("")
						.indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
				}
				return this
			}, a.delay = function(t)
			{
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
			}, a.duration = function(t)
			{
				return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, a.totalDuration = function(t)
			{
				return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
			}, a.time = function(t, e)
			{
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
			}, a.totalTime = function(t, e, i)
			{
				if (c || l.wake(), !arguments.length) return this._totalTime;
				if (this._timeline)
				{
					if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)
					{
						this._dirty && this.totalDuration();
						var n = this._totalDuration,
							r = this._timeline;
						if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
							for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
					}
					this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (D.length && G(), this.render(t, e, !1), D.length && G())
				}
				return this
			}, a.progress = a.totalProgress = function(t, e)
			{
				var i = this.duration();
				return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
			}, a.startTime = function(t)
			{
				return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
			}, a.endTime = function(t)
			{
				return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
			}, a.timeScale = function(t)
			{
				if (!arguments.length) return this._timeScale;
				var e, i;
				for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
				return this
			}, a.reversed = function(t)
			{
				return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, a.paused = function(t)
			{
				if (!arguments.length) return this._paused;
				var e, i, n = this._timeline;
				return t != this._paused && n && (c || t || l.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
			};
			var F = y("core.SimpleTimeline", function(t)
			{
				P.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			(a = F.prototype = new P)
			.constructor = F, a.kill()
				._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, i, n)
				{
					var r, s;
					if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
						for (s = t._startTime; r && r._startTime > s;) r = r._prev;
					return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
				}, a._remove = function(t, e)
				{
					return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
				}, a.render = function(t, e, i)
				{
					var n, r = this._first;
					for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
				}, a.rawTime = function()
				{
					return c || l.wake(), this._totalTime
				};
			var E = y("TweenLite", function(e, i, n)
				{
					if (P.call(this, i, n), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
					this.target = e = "string" != typeof e ? e : E.selector(e) || e;
					var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
						l = this.vars.overwrite;
					if (this._overwrite = l = null == l ? X[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
						for (this._targets = o = h(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)(s = o[r]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(h(s))) : (this._siblings[r] = Y(s, this, !1), 1 === l && this._siblings[r].length > 1 && Q(s, this, null, 1, this._siblings[r])) : "string" == typeof(s = o[r--] = E.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
					else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && Q(e, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
				}, !0),
				$ = function(e)
				{
					return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
				};
			(a = E.prototype = new P)
			.constructor = E, a.kill()
				._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, E.version = "1.20.3", E.defaultEase = a._ease = new x(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = l, E.autoSleep = 120, E.lagSmoothing = function(t, e)
				{
					l.lagSmoothing(t, e)
				}, E.selector = t.$ || t.jQuery || function(e)
				{
					var i = t.$ || t.jQuery;
					return i ? (E.selector = i, i(e)) : void 0 === n ? e : n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
				};
			var D = [],
				O = {},
				M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				j = /[\+-]=-?[\.\d]/,
				R = function(t)
				{
					for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
				},
				N = function(t, e, i, n)
				{
					var r, s, o, a, l, c, u, d = [],
						h = 0,
						f = "",
						p = 0;
					for (d.start = t, d.end = e, t = d[0] = t + "", e = d[1] = e + "", i && (i(d), t = d[0], e = d[1]), d.length = 0, r = t.match(M) || [], s = e.match(M) || [], n && (n._next = null, n.blob = 1, d._firstPT = d._applyPT = n), l = s.length, a = 0; a < l; a++) u = s[a], f += (c = e.substr(h, e.indexOf(u, h) - h)) || !a ? c : ",", h += c.length, p ? p = (p + 1) % 5 : "rgba(" === c.substr(-5) && (p = 1), u === r[a] || r.length <= a ? f += u : (f && (d.push(f), f = ""), o = parseFloat(r[a]), d.push(o), d._firstPT = {
						_next: d._firstPT,
						t: d,
						p: d.length - 1,
						s: o,
						c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
						f: 0,
						m: p && p < 4 ? Math.round : 0
					}), h += u.length;
					return (f += e.substr(h)) && d.push(f), d.setRatio = R, j.test(e) && (d.end = null), d
				},
				L = function(t, e, i, n, r, s, o, a, l)
				{
					"function" == typeof n && (n = n(l || 0, t));
					var c = _typeof3(t[e]),
						u = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
						d = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
						h = "string" == typeof n && "=" === n.charAt(1),
						f = {
							t: t,
							p: e,
							s: d,
							f: "function" === c,
							pg: 0,
							n: r || e,
							m: s ? "function" == typeof s ? s : Math.round : 0,
							pr: 0,
							c: h ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - d || 0
						};
					if (("number" != typeof d || "number" != typeof n && !h) && (o || isNaN(d) || !h && isNaN(n) || "boolean" == typeof d || "boolean" == typeof n ? (f.fp = o, f = {
							t: N(d, h ? parseFloat(f.s) + f.c : n, a || E.defaultStringFilter, f),
							p: "setRatio",
							s: 0,
							c: 1,
							f: 2,
							pg: 0,
							n: r || e,
							pr: 0,
							m: 0
						}) : (f.s = parseFloat(d), h || (f.c = parseFloat(n) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
				},
				B = E._internals = {
					isArray: p,
					isSelector: $,
					lazyTweens: D,
					blobDif: N
				},
				q = E._plugins = {},
				I = B.tweenLookup = {},
				z = 0,
				H = B.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1,
					yoyoEase: 1
				},
				X = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					true: 1,
					false: 0
				},
				W = P._rootFramesTimeline = new F,
				U = P._rootTimeline = new F,
				V = 30,
				G = B.lazyRender = function()
				{
					var t, e = D.length;
					for (O = {}; --e > -1;)(t = D[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
					D.length = 0
				};
			U._startTime = l.time, W._startTime = l.frame, U._active = W._active = !0, setTimeout(G, 1), P._updateRoot = E.render = function()
			{
				var t, e, i;
				if (D.length && G(), U.render((l.time - U._startTime) * U._timeScale, !1, !1), W.render((l.frame - W._startTime) * W._timeScale, !1, !1), D.length && G(), l.frame >= V)
				{
					for (i in V = l.frame + (parseInt(E.autoSleep, 10) || 120), I)
					{
						for (t = (e = I[i].tweens)
							.length; --t > -1;) e[t]._gc && e.splice(t, 1);
						0 === e.length && delete I[i]
					}
					if ((!(i = U._first) || i._paused) && E.autoSleep && !W._first && 1 === l._listeners.tick.length)
					{
						for (; i && i._paused;) i = i._next;
						i || l.sleep()
					}
				}
			}, l.addEventListener("tick", P._updateRoot);
			var Y = function(t, e, i)
				{
					var n, r, s = t._gsTweenID;
					if (I[s || (t._gsTweenID = s = "t" + z++)] || (I[s] = {
							target: t,
							tweens: []
						}), e && ((n = I[s].tweens)[r = n.length] = e, i))
						for (; --r > -1;) n[r] === e && n.splice(r, 1);
					return I[s].tweens
				},
				Z = function(t, e, i, n)
				{
					var r, s, o = t.vars.onOverwrite;
					return o && (r = o(t, e, i, n)), (o = E.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
				},
				Q = function(t, e, i, n, r)
				{
					var s, o, a, l;
					if (1 === n || n >= 4)
					{
						for (l = r.length, s = 0; s < l; s++)
							if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
							else if (5 === n) break;
						return o
					}
					var c, u = e._startTime + 1e-10,
						d = [],
						h = 0,
						f = 0 === e._duration;
					for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || J(e, 0, f), 0 === J(a, c, f) && (d[h++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((f || !a._initted) && u - a._startTime <= 2e-10 || (d[h++] = a)));
					for (s = h; --s > -1;)
						if (a = d[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted)
						{
							if (2 !== n && !Z(a, e)) continue;
							a._enabled(!1, !1) && (o = !0)
						} return o
				},
				J = function(t, e, i)
				{
					for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;)
					{
						if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
						n = n._timeline
					}
					return (s /= r) > e ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10
				};
			a._init = function()
			{
				var t, e, i, n, r, s, o = this.vars,
					a = this._overwrittenProps,
					l = this._duration,
					c = !!o.immediateRender,
					u = o.ease;
				if (o.startAt)
				{
					for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, o.startAt) r[n] = o.startAt[n];
					if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = E.to(this.target, 0, r), c)
						if (this._time > 0) this._startAt = null;
						else if (0 !== l) return
				}
				else if (o.runBackwards && 0 !== l)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else
					{
						for (n in 0 !== this._time && (c = !1), i = {}, o) H[n] && "autoCSS" !== n || (i[n] = o[n]);
						if (i.overwrite = 0, i.data = "isFromStart", i.lazy = c && !1 !== o.lazy, i.immediateRender = c, this._startAt = E.to(this.target, 0, i), c)
						{
							if (0 === this._time) return
						}
						else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					} if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, o.easeParams) : b[u] || E.defaultEase : E.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
				else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
				if (e && E._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
					for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
				this._onUpdate = o.onUpdate, this._initted = !0
			}, a._initProps = function(e, i, n, r, s)
			{
				var o, a, l, c, u, d;
				if (null == e) return !1;
				for (o in O[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && q.css && !1 !== this.vars.autoCSS && function(t, e)
					{
						var i, n = {};
						for (i in t) H[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = t[i], delete t[i]);
						t.css = n
					}(this.vars, e), this.vars)
					if (d = this.vars[o], H[o]) d && (d instanceof Array || d.push && p(d)) && -1 !== d.join("")
						.indexOf("{self}") && (this.vars[o] = d = this._swapSelfInParams(d, this));
					else if (q[o] && (c = new q[o])
					._onInitTween(e, this.vars[o], this, s))
				{
					for (this._firstPT = u = {
							_next: this._firstPT,
							t: c,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: o,
							pg: 1,
							pr: c._priority,
							m: 0
						}, a = c._overwriteProps.length; --a > -1;) i[c._overwriteProps[a]] = this._firstPT;
					(c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
				}
				else i[o] = L.call(this, e, o, "get", d, o, 0, null, this.vars.stringFilter, s);
				return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && Q(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (O[e._gsTweenID] = !0), l)
			}, a.render = function(t, e, i)
			{
				var n, r, s, o, a = this._time,
					l = this._duration,
					c = this._rawPrevTime;
				if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (c < 0 || t <= 0 && t >= -1e-7 || 1e-10 === c && "isPause" !== this.data) && c !== t && (i = !0, c > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || c === t ? t : 1e-10);
				else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (1e-10 !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || c === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
				else if (this._totalTime = this._time = t, this._easeType)
				{
					var u = t / l,
						d = this._easeType,
						h = this._easePower;
					(1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === h ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : t / l < .5 ? u / 2 : 1 - u / 2
				}
				else this.ratio = this._ease.getRatio(t / l);
				if (this._time !== a || i)
				{
					if (!this._initted)
					{
						if (this._init(), !this._initted || this._gc) return;
						if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, D.push(this), void(this._lazy = [t, e]);
						this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
					this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== o && (this._rawPrevTime = 0)))
				}
			}, a._kill = function(t, e, i)
			{
				if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
				var n, r, s, o, a, l, c, u, d, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
				if ((p(e) || $(e)) && "number" != typeof e[0])
					for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
				else
				{
					if (this._targets)
					{
						for (n = this._targets.length; --n > -1;)
							if (e === this._targets[n])
							{
								a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
								break
							}
					}
					else
					{
						if (e !== this.target) return !1;
						a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
					}
					if (a)
					{
						if (c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != _typeof3(t) || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite))
						{
							for (s in c) a[s] && (d || (d = []), d.push(s));
							if ((d || !t) && !Z(this, i, e, d)) return !1
						}
						for (s in c)(o = a[s]) && (h && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(c) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), u && (r[s] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return l
			}, a.invalidate = function()
			{
				return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
			}, a._enabled = function(t, e)
			{
				if (c || l.wake(), t && this._gc)
				{
					var i, n = this._targets;
					if (n)
						for (i = n.length; --i > -1;) this._siblings[i] = Y(n[i], this, !0);
					else this._siblings = Y(this.target, this, !0)
				}
				return P.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
			}, E.to = function(t, e, i)
			{
				return new E(t, e, i)
			}, E.from = function(t, e, i)
			{
				return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i)
			}, E.fromTo = function(t, e, i, n)
			{
				return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n)
			}, E.delayedCall = function(t, e, i, n, r)
			{
				return new E(e, 0,
				{
					delay: t,
					onComplete: e,
					onCompleteParams: i,
					callbackScope: n,
					onReverseComplete: e,
					onReverseCompleteParams: i,
					immediateRender: !1,
					lazy: !1,
					useFrames: r,
					overwrite: 0
				})
			}, E.set = function(t, e)
			{
				return new E(t, 0, e)
			}, E.getTweensOf = function(t, e)
			{
				if (null == t) return [];
				var i, n, r, s;
				if (t = "string" != typeof t ? t : E.selector(t) || t, (p(t) || $(t)) && "number" != typeof t[0])
				{
					for (i = t.length, n = []; --i > -1;) n = n.concat(E.getTweensOf(t[i], e));
					for (i = n.length; --i > -1;)
						for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
				}
				else if (t._gsTweenID)
					for (i = (n = Y(t)
							.concat())
						.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
				return n || []
			}, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i)
			{
				"object" == _typeof3(e) && (i = e, e = !1);
				for (var n = E.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
			};
			var K = y("plugins.TweenPlugin", function(t, e)
			{
				this._overwriteProps = (t || "")
					.split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = K.prototype
			}, !0);
			if (a = K.prototype, K.version = "1.19.0", K.API = 2, a._firstPT = null, a._addTween = L, a.setRatio = R, a._kill = function(t)
				{
					var e, i = this._overwriteProps,
						n = this._firstPT;
					if (null != t[this._propName]) this._overwriteProps = [];
					else
						for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
					for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
					return !1
				}, a._mod = a._roundProps = function(t)
				{
					for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_")
						.join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
				}, E._onPluginEvent = function(t, e)
				{
					var i, n, r, s, o, a = e._firstPT;
					if ("_onInitAllProps" === t)
					{
						for (; a;)
						{
							for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
							(a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
						}
						a = e._firstPT = r
					}
					for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
					return i
				}, K.activate = function(t)
				{
					for (var e = t.length; --e > -1;) t[e].API === K.API && (q[(new t[e])
						._propName] = t[e]);
					return !0
				}, v.plugin = function(t)
				{
					if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
					var e, i = t.propName,
						n = t.priority || 0,
						r = t.overwriteProps,
						s = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_mod",
							mod: "_mod",
							initAll: "_onInitAllProps"
						},
						o = y("plugins." + i.charAt(0)
							.toUpperCase() + i.substr(1) + "Plugin",
							function()
							{
								K.call(this, i, n), this._overwriteProps = r || []
							}, !0 === t.global),
						a = o.prototype = new K(i);
					for (e in a.constructor = o, o.API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
					return o.version = t.version, K.activate([o]), o
				}, s = t._gsQueue)
			{
				for (o = 0; o < s.length; o++) s[o]();
				for (a in m) m[a].func || t.console.log("GSAP encountered missing dependency: " + a)
			}
			c = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : window, "TweenMax"),
	function(t)
	{
		t.fn.niceSelect = function(e)
		{
			function i(e)
			{
				e.after(t("<div></div>")
					.addClass("nice-select")
					.addClass(e.attr("class") || "")
					.addClass(e.attr("disabled") ? "disabled" : "")
					.attr("tabindex", e.attr("disabled") ? null : "0")
					.html('<span class="current"></span><ul class="list"></ul>'));
				var i = e.next(),
					n = e.find("option"),
					r = e.find("option:selected");
				i.find(".current")
					.html(r.data("display") || r.text()), n.each(function(e)
					{
						var n = t(this),
							r = n.data("display");
						i.find("ul")
							.append(t("<li></li>")
								.attr("data-value", n.val())
								.attr("data-display", r || null)
								.addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : ""))
								.html(n.text()))
					})
			}
			if ("string" == typeof e) return "update" == e ? this.each(function()
			{
				var e = t(this),
					n = t(this)
					.next(".nice-select"),
					r = n.hasClass("open");
				n.length && (n.remove(), i(e), r && e.next()
					.trigger("click"))
			}) : "destroy" == e ? (this.each(function()
				{
					var e = t(this),
						i = t(this)
						.next(".nice-select");
					i.length && (i.remove(), e.css("display", ""))
				}), 0 == t(".nice-select")
				.length && t(document)
				.off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
			this.hide(), this.each(function()
				{
					var e = t(this);
					e.next()
						.hasClass("nice-select") || i(e)
				}), t(document)
				.off(".nice_select"), t(document)
				.on("click.nice_select", ".nice-select", function(e)
				{
					var i = t(this);
					t(".nice-select")
						.not(i)
						.removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus")
							.removeClass("focus"), i.find(".selected")
							.addClass("focus")) : i.focus()
				}), t(document)
				.on("click.nice_select", function(e)
				{
					0 === t(e.target)
						.closest(".nice-select")
						.length && t(".nice-select")
						.removeClass("open")
						.find(".option")
				}), t(document)
				.on("click.nice_select", ".nice-select .option:not(.disabled)", function(e)
				{
					var i = t(this),
						n = i.closest(".nice-select");
					n.find(".selected")
						.removeClass("selected"), i.addClass("selected");
					var r = i.data("display") || i.text();
					n.find(".current")
						.text(r), n.prev("select")
						.val(i.data("value"))
						.trigger("change")
				}), t(document)
				.on("keydown.nice_select", ".nice-select", function(e)
				{
					var i = t(this),
						n = t(i.find(".focus") || i.find(".list .option.selected"));
					if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
					if (40 == e.keyCode)
					{
						if (i.hasClass("open"))
						{
							var r = n.nextAll(".option:not(.disabled)")
								.first();
							r.length > 0 && (i.find(".focus")
								.removeClass("focus"), r.addClass("focus"))
						}
						else i.trigger("click");
						return !1
					}
					if (38 == e.keyCode)
					{
						if (i.hasClass("open"))
						{
							var s = n.prevAll(".option:not(.disabled)")
								.first();
							s.length > 0 && (i.find(".focus")
								.removeClass("focus"), s.addClass("focus"))
						}
						else i.trigger("click");
						return !1
					}
					if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
					else if (9 == e.keyCode && i.hasClass("open")) return !1
				});
			var n = document.createElement("a")
				.style;
			return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && t("html")
				.addClass("no-csspointerevents"), this
		}
	}(jQuery),
	function(t)
	{
		var e, i, n = "0.5.0",
			r = "hasOwnProperty",
			s = /[\.\/]/,
			o = /\s*,\s*/,
			a = function(t, e)
			{
				return t - e
			},
			l = {
				n: {}
			},
			c = function()
			{
				for (var t = 0, e = this.length; e > t; t++)
					if (void 0 !== this[t]) return this[t]
			},
			u = function()
			{
				for (var t = this.length; --t;)
					if (void 0 !== this[t]) return this[t]
			},
			d = Object.prototype.toString,
			h = String,
			f = Array.isArray || function(t)
			{
				return t instanceof Array || "[object Array]" == d.call(t)
			};
		eve = function(t)
		{
			function e(e, i)
			{
				return t.apply(this, arguments)
			}
			return e.toString = function()
			{
				return t.toString()
			}, e
		}(function(t, n)
		{
			var r, s = i,
				o = Array.prototype.slice.call(arguments, 2),
				l = eve.listeners(t),
				d = 0,
				h = [],
				f = {},
				p = [],
				m = e;
			p.firstDefined = c, p.lastDefined = u, e = t, i = 0;
			for (var g = 0, v = l.length; v > g; g++) "zIndex" in l[g] && (h.push(l[g].zIndex), l[g].zIndex < 0 && (f[l[g].zIndex] = l[g]));
			for (h.sort(a); h[d] < 0;)
				if (r = f[h[d++]], p.push(r.apply(n, o)), i) return i = s, p;
			for (g = 0; v > g; g++)
				if ("zIndex" in (r = l[g]))
					if (r.zIndex == h[d])
					{
						if (p.push(r.apply(n, o)), i) break;
						do {
							if ((r = f[h[++d]]) && p.push(r.apply(n, o)), i) break
						} while (r)
					}
			else f[r.zIndex] = r;
			else if (p.push(r.apply(n, o)), i) break;
			return i = s, e = m, p
		}), eve._events = l, eve.listeners = function(t)
		{
			var e, i, n, r, o, a, c, u, d = f(t) ? t : t.split(s),
				h = l,
				p = [h],
				m = [];
			for (r = 0, o = d.length; o > r; r++)
			{
				for (u = [], a = 0, c = p.length; c > a; a++)
					for (i = [(h = p[a].n)[d[r]], h["*"]], n = 2; n--;)(e = i[n]) && (u.push(e), m = m.concat(e.f || []));
				p = u
			}
			return m
		}, eve.separator = function(t)
		{
			t ? (t = "[" + (t = h(t)
				.replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]", s = new RegExp(t)) : s = /[\.\/]/
		}, eve.on = function(t, e)
		{
			if ("function" != typeof e) return function() {};
			for (var i = f(t) ? f(t[0]) ? t : [t] : h(t)
					.split(o), n = 0, r = i.length; r > n; n++) ! function(t)
			{
				for (var i, n = f(t) ? t : h(t)
						.split(s), r = l, o = 0, a = n.length; a > o; o++) r = (r = r.n)
					.hasOwnProperty(n[o]) && r[n[o]] || (r[n[o]] = {
						n: {}
					});
				for (r.f = r.f || [], o = 0, a = r.f.length; a > o; o++)
					if (r.f[o] == e)
					{
						i = !0;
						break
					}! i && r.f.push(e)
			}(i[n]);
			return function(t)
			{
				+t == +t && (e.zIndex = +t)
			}
		}, eve.f = function(t)
		{
			var e = [].slice.call(arguments, 1);
			return function()
			{
				eve.apply(null, [t, null].concat(e)
					.concat([].slice.call(arguments, 0)))
			}
		}, eve.stop = function()
		{
			i = 1
		}, eve.nt = function(t)
		{
			var i = f(e) ? e.join(".") : e;
			return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)")
				.test(i) : i
		}, eve.nts = function()
		{
			return f(e) ? e : e.split(s)
		}, eve.off = eve.unbind = function(t, e)
		{
			if (t)
			{
				var i = f(t) ? f(t[0]) ? t : [t] : h(t)
					.split(o);
				if (i.length > 1)
					for (var n = 0, a = i.length; a > n; n++) eve.off(i[n], e);
				else
				{
					i = f(t) ? t : h(t)
						.split(s);
					var c, u, d, p, m, g = [l],
						v = [];
					for (n = 0, a = i.length; a > n; n++)
						for (p = 0; p < g.length; p += d.length - 2)
						{
							if (d = [p, 1], c = g[p].n, "*" != i[n]) c[i[n]] && (d.push(c[i[n]]), v.unshift(
							{
								n: c,
								name: i[n]
							}));
							else
								for (u in c) c[r](u) && (d.push(c[u]), v.unshift(
								{
									n: c,
									name: u
								}));
							g.splice.apply(g, d)
						}
					for (n = 0, a = g.length; a > n; n++)
						for (c = g[n]; c.n;)
						{
							if (e)
							{
								if (c.f)
								{
									for (p = 0, m = c.f.length; m > p; p++)
										if (c.f[p] == e)
										{
											c.f.splice(p, 1);
											break
										}! c.f.length && delete c.f
								}
								for (u in c.n)
									if (c.n[r](u) && c.n[u].f)
									{
										var y = c.n[u].f;
										for (p = 0, m = y.length; m > p; p++)
											if (y[p] == e)
											{
												y.splice(p, 1);
												break
											}! y.length && delete c.n[u].f
									}
							}
							else
								for (u in delete c.f, c.n) c.n[r](u) && c.n[u].f && delete c.n[u].f;
							c = c.n
						}
					t: for (n = 0, a = v.length; a > n; n++)
					{
						for (u in (c = v[n])
							.n[c.name].f) continue t;
						for (u in c.n[c.name].n) continue t;
						delete c.n[c.name]
					}
				}
			}
			else eve._events = l = {
				n: {}
			}
		}, eve.once = function(t, e)
		{
			return eve.on(t, function i()
			{
				return eve.off(t, i), e.apply(this, arguments)
			})
		}, eve.version = n, eve.toString = function()
		{
			return "You are running Eve " + n
		}, "undefined" != typeof module && module.exports ? module.exports = eve : "function" == typeof define && define.amd ? define("eve", [], function()
		{
			return eve
		}) : t.eve = eve
	}(this),
	function(t, e)
	{
		if ("function" == typeof define && define.amd) define(["eve"], function(i)
		{
			return e(t, i)
		});
		else if ("undefined" != typeof exports)
		{
			var i = require("eve");
			module.exports = e(t, i)
		}
		else e(t, t.eve)
	}(window || this, function(t, e)
	{
		var i = function(e)
			{
				var i, n = {},
					r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t)
					{
						return setTimeout(t, 16, (new Date)
							.getTime()), !0
					},
					s = Array.isArray || function(t)
					{
						return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
					},
					o = 0,
					a = "M" + (+new Date)
					.toString(36),
					l = function()
					{
						return a + (o++)
							.toString(36)
					},
					c = Date.now || function()
					{
						return +new Date
					},
					u = function(t)
					{
						var e = this;
						if (null == t) return e.s;
						var i = e.s - t;
						e.b += e.dur * i, e.B += e.dur * i, e.s = t
					},
					d = function(t)
					{
						return null == t ? this.spd : void(this.spd = t)
					},
					h = function(t)
					{
						var e = this;
						return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
					},
					f = function()
					{
						var t = this;
						delete n[t.id], t.update(), e("mina.stop." + t.id, t)
					},
					p = function()
					{
						var t = this;
						t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
					},
					m = function()
					{
						var t = this;
						t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t, v())
					},
					g = function()
					{
						var t, e = this;
						if (s(e.start))
						{
							t = [];
							for (var i = 0, n = e.start.length; n > i; i++) t[i] = +e.start[i] + (e.end[i] - e.start[i]) * e.easing(e.s)
						}
						else t = +e.start + (e.end - e.start) * e.easing(e.s);
						e.set(t)
					},
					v = function t(s)
					{
						if (s)
						{
							var o = 0;
							for (var a in n)
								if (n.hasOwnProperty(a))
								{
									var l = n[a],
										c = l.get();
									o++, l.s = (c - l.b) / (l.dur / l.spd), l.s >= 1 && (delete n[a], l.s = 1, o--, function(t)
									{
										setTimeout(function()
										{
											e("mina.finish." + t.id, t)
										})
									}(l)), l.update()
								} i = !!o && r(t)
						}
						else i || (i = r(t))
					},
					y = function t(e, i, r, s, o, a, c)
					{
						var y = {
							id: l(),
							start: e,
							end: i,
							b: r,
							s: 0,
							dur: s - r,
							spd: 1,
							get: o,
							set: a,
							easing: c || t.linear,
							status: u,
							speed: d,
							duration: h,
							stop: f,
							pause: p,
							resume: m,
							update: g
						};
						n[y.id] = y;
						var _, x = 0;
						for (_ in n)
							if (n.hasOwnProperty(_) && 2 == ++x) break;
						return 1 == x && v(), y
					};
				return y.time = c, y.getById = function(t)
				{
					return n[t] || null
				}, y.linear = function(t)
				{
					return t
				}, y.easeout = function(t)
				{
					return Math.pow(t, 1.7)
				}, y.easein = function(t)
				{
					return Math.pow(t, .48)
				}, y.easeinout = function(t)
				{
					if (1 == t) return 1;
					if (0 == t) return 0;
					var e = .48 - t / 1.04,
						i = Math.sqrt(.1734 + e * e),
						n = i - e,
						r = -i - e,
						s = Math.pow(Math.abs(n), 1 / 3) * (0 > n ? -1 : 1) + Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1) + .5;
					return 3 * (1 - s) * s * s + s * s * s
				}, y.backin = function(t)
				{
					if (1 == t) return 1;
					var e = 1.70158;
					return t * t * ((e + 1) * t - e)
				}, y.backout = function(t)
				{
					if (0 == t) return 0;
					var e = 1.70158;
					return (t -= 1) * t * ((e + 1) * t + e) + 1
				}, y.elastic = function(t)
				{
					return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
				}, y.bounce = function(t)
				{
					var e, i = 7.5625,
						n = 2.75;
					return 1 / n > t ? e = i * t * t : 2 / n > t ? e = i * (t -= 1.5 / n) * t + .75 : 2.5 / n > t ? e = i * (t -= 2.25 / n) * t + .9375 : e = i * (t -= 2.625 / n) * t + .984375, e
				}, t.mina = y, y
			}(void 0 === e ? function() {} : e),
			n = function(t)
			{
				function i(t, e)
				{
					if (t)
					{
						if (t.nodeType) return f(t);
						if (r(t, "array") && i.set) return i.set.apply(i, t);
						if (t instanceof c) return t;
						if (null == e) return f(t = p.doc.querySelector(String(t)))
					}
					return new h(t = null == t ? "100%" : t, e = null == e ? "100%" : e)
				}

				function n(t, e)
				{
					if (e)
					{
						if ("#text" == t && (t = p.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = p.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = n(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(R, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(N, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue : null;
						if (1 == t.nodeType)
						{
							for (var i in e)
								if (e[m](i))
								{
									var r = v(e[i]);
									r ? "xlink:" == i.substring(0, 6) ? t.setAttributeNS(R, i.substring(6), r) : "xml:" == i.substring(0, 4) ? t.setAttributeNS(N, i.substring(4), r) : t.setAttribute(i, r) : t.removeAttribute(i)
								}
						}
						else "text" in e && (t.nodeValue = e.text)
					}
					else t = p.doc.createElementNS(N, t);
					return t
				}

				function r(t, e)
				{
					return "finite" == (e = v.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == _typeof3(t) && null !== t || "object" == e && t === Object(t) || S.call(t)
						.slice(8, -1)
						.toLowerCase() == e)
				}

				function s(t, e, i)
				{
					return function n()
					{
						var r = Array.prototype.slice.call(arguments, 0),
							s = r.join("â€"),
							o = n.cache = n.cache || {},
							a = n.count = n.count || [];
						return o[m](s) ? (function(t, e)
						{
							for (var i = 0, n = t.length; n > i; i++)
								if (t[i] === e) return t.push(t.splice(i, 1)[0])
						}(a, s), i ? i(o[s]) : o[s]) : (a.length >= 1e3 && delete o[a.shift()], a.push(s), o[s] = t.apply(e, r), i ? i(o[s]) : o[s])
					}
				}

				function o(t)
				{
					return t % 360 * k / 180
				}

				function a(t)
				{
					return t.node.ownerSVGElement && f(t.node.ownerSVGElement) || i.select("svg")
				}

				function l(t)
				{
					r(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
					for (var e = 0, i = 0, n = this.node; this[e];) delete this[e++];
					for (e = 0; e < t.length; e++) "set" == t[e].type ? t[e].forEach(function(t)
					{
						n.appendChild(t.node)
					}) : n.appendChild(t[e].node);
					var s = n.childNodes;
					for (e = 0; e < s.length; e++) this[i++] = f(s[e]);
					return this
				}

				function c(t)
				{
					if (t.snap in L) return L[t.snap];
					var e;
					try
					{
						e = t.ownerSVGElement
					}
					catch (t) {}
					this.node = t, e && (this.paper = new h(e)), this.type = t.tagName || t.nodeName;
					var i = this.id = j(this);
					if (this.anims = {}, this._ = {
							transform: []
						}, t.snap = i, L[i] = this, "g" == this.type && (this.add = l), this.type in
						{
							g: 1,
							mask: 1,
							pattern: 1,
							symbol: 1
						})
						for (var n in h.prototype) h.prototype[m](n) && (this[n] = h.prototype[n])
				}

				function u(t)
				{
					this.node = t
				}

				function d(t, e)
				{
					var i = n(t);
					return e.appendChild(i), f(i)
				}

				function h(t, e)
				{
					var i, r, s, o = h.prototype;
					if (t && t.tagName && "svg" == t.tagName.toLowerCase())
					{
						if (t.snap in L) return L[t.snap];
						var a = t.ownerDocument;
						for (var l in i = new c(t), r = t.getElementsByTagName("desc")[0], s = t.getElementsByTagName("defs")[0], r || ((r = n("desc"))
								.appendChild(a.createTextNode("Created with Snap")), i.node.appendChild(r)), s || (s = n("defs"), i.node.appendChild(s)), i.defs = s, o) o[m](l) && (i[l] = o[l]);
						i.paper = i.root = i
					}
					else n((i = d("svg", p.doc.body))
						.node,
						{
							height: e,
							version: 1.1,
							width: t,
							xmlns: N
						});
					return i
				}

				function f(t)
				{
					return t ? t instanceof c || t instanceof u ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new h(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new h(t.contentDocument.getElementsByTagName("svg")[0]) : new c(t) : t
				}
				i.version = "0.5.1", i.toString = function()
				{
					return "Snap v" + this.version
				}, i._ = {};
				var p = {
					win: t.window,
					doc: t.window.document
				};
				i._.glob = p;
				var m = "hasOwnProperty",
					v = String,
					y = parseFloat,
					_ = parseInt,
					x = Math,
					b = x.max,
					w = x.min,
					T = x.abs,
					k = (x.pow, x.PI),
					C = (x.round, ""),
					S = Object.prototype.toString,
					A = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
					P = (i._.separator = /[,\s]+/, /[\s]*,[\s]*/),
					F = {
						hs: 1,
						rg: 1
					},
					E = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
					$ = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
					D = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
					O = 0,
					M = "S" + (+new Date)
					.toString(36),
					j = function(t)
					{
						return (t && t.type ? t.type : C) + M + (O++)
							.toString(36)
					},
					R = "http://www.w3.org/1999/xlink",
					N = "http://www.w3.org/2000/svg",
					L = {};
				i.url = function(t)
				{
					return "url('#" + t + "')"
				}, i._.$ = n, i._.id = j, i.format = function()
				{
					var t = /\{([^\}]+)\}/g,
						e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
						i = function(t, i, n)
						{
							var r = n;
							return i.replace(e, function(t, e, i, n, s)
							{
								e = e || n, r && (e in r && (r = r[e]), "function" == typeof r && s && (r = r()))
							}), r = (null == r || r == n ? t : r) + ""
						};
					return function(e, n)
					{
						return v(e)
							.replace(t, function(t, e)
							{
								return i(t, e, n)
							})
					}
				}(), i._.clone = function t(e)
				{
					if ("function" == typeof e || Object(e) !== e) return e;
					var i = new e.constructor;
					for (var n in e) e[m](n) && (i[n] = t(e[n]));
					return i
				}, i._.cacher = s, i.rad = o, i.deg = function(t)
				{
					return 180 * t / k % 360
				}, i.sin = function(t)
				{
					return x.sin(i.rad(t))
				}, i.tan = function(t)
				{
					return x.tan(i.rad(t))
				}, i.cos = function(t)
				{
					return x.cos(i.rad(t))
				}, i.asin = function(t)
				{
					return i.deg(x.asin(t))
				}, i.acos = function(t)
				{
					return i.deg(x.acos(t))
				}, i.atan = function(t)
				{
					return i.deg(x.atan(t))
				}, i.atan2 = function(t)
				{
					return i.deg(x.atan2(t))
				}, i.angle = function t(e, i, n, r, s, o)
				{
					if (null == s)
					{
						var a = e - n,
							l = i - r;
						return a || l ? (180 + 180 * x.atan2(-l, -a) / k + 360) % 360 : 0
					}
					return t(e, i, s, o) - t(n, r, s, o)
				}, i.len = function(t, e, n, r)
				{
					return Math.sqrt(i.len2(t, e, n, r))
				}, i.len2 = function(t, e, i, n)
				{
					return (t - i) * (t - i) + (e - n) * (e - n)
				}, i.closestPoint = function(t, e, i)
				{
					function n(t)
					{
						var n = t.x - e,
							r = t.y - i;
						return n * n + r * r
					}
					for (var r, s, o, a, l = t.node, c = l.getTotalLength(), u = c / l.pathSegList.numberOfItems * .125, d = 1 / 0, h = 0; c >= h; h += u)(a = n(o = l.getPointAtLength(h))) < d && (r = o, s = h, d = a);
					for (u *= .5; u > .5;)
					{
						var f, p, m, g, v, y;
						(m = s - u) >= 0 && (v = n(f = l.getPointAtLength(m))) < d ? (r = f, s = m, d = v) : (g = s + u) <= c && (y = n(p = l.getPointAtLength(g))) < d ? (r = p, s = g, d = y) : u *= .5
					}
					return {
						x: r.x,
						y: r.y,
						length: s,
						distance: Math.sqrt(d)
					}
				}, i.is = r, i.snapTo = function(t, e, i)
				{
					if (i = r(i, "finite") ? i : 10, r(t, "array"))
					{
						for (var n = t.length; n--;)
							if (T(t[n] - e) <= i) return t[n]
					}
					else
					{
						var s = e % (t = +t);
						if (i > s) return e - s;
						if (s > t - i) return e - s + t
					}
					return e
				}, i.getRGB = s(function(t)
				{
					if (!t || (t = v(t))
						.indexOf("-") + 1) return {
						r: -1,
						g: -1,
						b: -1,
						hex: "none",
						error: 1,
						toString: z
					};
					if ("none" == t) return {
						r: -1,
						g: -1,
						b: -1,
						hex: "none",
						toString: z
					};
					if (!(F[m](t.toLowerCase()
							.substring(0, 2)) || "#" == t.charAt()) && (t = B(t)), !t) return {
						r: -1,
						g: -1,
						b: -1,
						hex: "none",
						error: 1,
						toString: z
					};
					var e, n, s, o, a, l, c = t.match(A);
					return c ? (c[2] && (s = _(c[2].substring(5), 16), n = _(c[2].substring(3, 5), 16), e = _(c[2].substring(1, 3), 16)), c[3] && (s = _((a = c[3].charAt(3)) + a, 16), n = _((a = c[3].charAt(2)) + a, 16), e = _((a = c[3].charAt(1)) + a, 16)), c[4] && (l = c[4].split(P), e = y(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), n = y(l[1]), "%" == l[1].slice(-1) && (n *= 2.55), s = y(l[2]), "%" == l[2].slice(-1) && (s *= 2.55), "rgba" == c[1].toLowerCase()
						.slice(0, 4) && (o = y(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100)), c[5] ? (l = c[5].split(P), e = y(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = y(l[1]), "%" == l[1].slice(-1) && (n /= 100), s = y(l[2]), "%" == l[2].slice(-1) && (s /= 100), ("deg" == l[0].slice(-3) || "Â°" == l[0].slice(-1)) && (e /= 360), "hsba" == c[1].toLowerCase()
						.slice(0, 4) && (o = y(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), i.hsb2rgb(e, n, s, o)) : c[6] ? (l = c[6].split(P), e = y(l[0]), "%" == l[0].slice(-1) && (e /= 100), n = y(l[1]), "%" == l[1].slice(-1) && (n /= 100), s = y(l[2]), "%" == l[2].slice(-1) && (s /= 100), ("deg" == l[0].slice(-3) || "Â°" == l[0].slice(-1)) && (e /= 360), "hsla" == c[1].toLowerCase()
						.slice(0, 4) && (o = y(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), i.hsl2rgb(e, n, s, o)) : (e = w(x.round(e), 255), n = w(x.round(n), 255), s = w(x.round(s), 255), o = w(b(o, 0), 1), (c = {
							r: e,
							g: n,
							b: s,
							toString: z
						})
						.hex = "#" + (16777216 | s | n << 8 | e << 16)
						.toString(16)
						.slice(1), c.opacity = r(o, "finite") ? o : 1, c)) :
					{
						r: -1,
						g: -1,
						b: -1,
						hex: "none",
						error: 1,
						toString: z
					}
				}, i), i.hsb = s(function(t, e, n)
				{
					return i.hsb2rgb(t, e, n)
						.hex
				}), i.hsl = s(function(t, e, n)
				{
					return i.hsl2rgb(t, e, n)
						.hex
				}), i.rgb = s(function(t, e, i, n)
				{
					if (r(n, "finite"))
					{
						var s = x.round;
						return "rgba(" + [s(t), s(e), s(i), +n.toFixed(2)] + ")"
					}
					return "#" + (16777216 | i | e << 8 | t << 16)
						.toString(16)
						.slice(1)
				});
				var B = function(t)
					{
						var e = p.doc.getElementsByTagName("head")[0] || p.doc.getElementsByTagName("svg")[0],
							i = "rgb(255, 0, 0)";
						return (B = s(function(t)
						{
							if ("red" == t.toLowerCase()) return i;
							e.style.color = i, e.style.color = t;
							var n = p.doc.defaultView.getComputedStyle(e, C)
								.getPropertyValue("color");
							return n == i ? null : n
						}))(t)
					},
					q = function()
					{
						return "hsb(" + [this.h, this.s, this.b] + ")"
					},
					I = function()
					{
						return "hsl(" + [this.h, this.s, this.l] + ")"
					},
					z = function()
					{
						return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
					},
					H = function(t, e, n)
					{
						if (null == e && r(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && r(t, string))
						{
							var s = i.getRGB(t);
							t = s.r, e = s.g, n = s.b
						}
						return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
					},
					X = function(t, e, n, s)
					{
						var o = {
							r: t = x.round(255 * t),
							g: e = x.round(255 * e),
							b: n = x.round(255 * n),
							opacity: r(s, "finite") ? s : 1,
							hex: i.rgb(t, e, n),
							toString: z
						};
						return r(s, "finite") && (o.opacity = s), o
					};
				i.color = function(t)
				{
					var e;
					return r(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : r(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (r(t, "string") && (t = i.getRGB(t)), r(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : ((t = {
							hex: "none"
						})
						.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = z, t
				}, i.hsb2rgb = function(t, e, i, n)
				{
					var s, o, a, l, c;
					return r(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, n = t.o, t = t.h), l = (c = i * e) * (1 - T((t = (t *= 360) % 360 / 60) % 2 - 1)), s = o = a = i - c, X(s += [c, l, 0, 0, l, c][t = ~~t], o += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], n)
				}, i.hsl2rgb = function(t, e, i, n)
				{
					var s, o, a, l, c;
					return r(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), l = (c = 2 * e * (.5 > i ? i : 1 - i)) * (1 - T((t = (t *= 360) % 360 / 60) % 2 - 1)), s = o = a = i - c / 2, X(s += [c, l, 0, 0, l, c][t = ~~t], o += [l, c, c, l, 0, 0][t], a += [0, 0, l, c, c, l][t], n)
				}, i.rgb2hsb = function(t, e, i)
				{
					var n, r;
					return t = (i = H(t, e, i))[0], e = i[1], i = i[2],
					{
						h: ((0 == (r = (n = b(t, e, i)) - w(t, e, i)) ? null : n == t ? (e - i) / r : n == e ? (i - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360,
						s: 0 == r ? 0 : r / n,
						b: n,
						toString: q
					}
				}, i.rgb2hsl = function(t, e, i)
				{
					var n, r, s, o;
					return t = (i = H(t, e, i))[0], e = i[1], i = i[2], n = ((r = b(t, e, i)) + (s = w(t, e, i))) / 2,
					{
						h: ((0 == (o = r - s) ? null : r == t ? (e - i) / o : r == e ? (i - t) / o + 2 : (t - e) / o + 4) + 360) % 6 * 60 / 360,
						s: 0 == o ? 0 : .5 > n ? o / (2 * n) : o / (2 - 2 * n),
						l: n,
						toString: I
					}
				}, i.parsePathString = function(t)
				{
					if (!t) return null;
					var e = i.path(t);
					if (e.arr) return i.path.clone(e.arr);
					var n = {
							a: 7,
							c: 6,
							o: 2,
							h: 1,
							l: 2,
							m: 2,
							r: 4,
							q: 4,
							s: 4,
							t: 2,
							v: 1,
							u: 3,
							z: 0
						},
						s = [];
					return r(t, "array") && r(t[0], "array") && (s = i.path.clone(t)), s.length || v(t)
						.replace(E, function(t, e, i)
						{
							var r = [],
								o = e.toLowerCase();
							if (i.replace(D, function(t, e)
								{
									e && r.push(+e)
								}), "m" == o && r.length > 2 && (s.push([e].concat(r.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == r.length && s.push([e, r[0]]), "r" == o) s.push([e].concat(r));
							else
								for (; r.length >= n[o] && (s.push([e].concat(r.splice(0, n[o]))), n[o]););
						}), s.toString = i.path.toString, e.arr = i.path.clone(s), s
				};
				var W = i.parseTransformString = function(t)
				{
					if (!t) return null;
					var e = [];
					return r(t, "array") && r(t[0], "array") && (e = i.path.clone(t)), e.length || v(t)
						.replace($, function(t, i, n)
						{
							var r = [];
							i.toLowerCase(), n.replace(D, function(t, e)
							{
								e && r.push(+e)
							}), e.push([i].concat(r))
						}), e.toString = i.path.toString, e
				};
				i._.svgTransform2string = function(t)
				{
					var e = [];
					return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, i, n)
					{
						return n = n.split(/\s*,\s*|\s+/), "rotate" == i && 1 == n.length && n.push(0, 0), "scale" == i && (n.length > 2 ? n = n.slice(0, 2) : 2 == n.length && n.push(0, 0), 1 == n.length && n.push(n[0], 0, 0)), "skewX" == i ? e.push(["m", 1, 0, x.tan(o(n[0])), 1, 0, 0]) : "skewY" == i ? e.push(["m", 1, x.tan(o(n[0])), 0, 1, 0, 0]) : e.push([i.charAt(0)].concat(n)), t
					}), e
				}, i._.rgTransform = /^[a-z][\s]*-?\.?\d/i, i._.transform2matrix = function(t, e)
				{
					var n = W(t),
						r = new i.Matrix;
					if (n)
						for (var s = 0, o = n.length; o > s; s++)
						{
							var a, l, c, u, d, h = n[s],
								f = h.length,
								p = v(h[0])
								.toLowerCase(),
								m = h[0] != p,
								g = m ? r.invert() : 0;
							"t" == p && 2 == f ? r.translate(h[1], 0) : "t" == p && 3 == f ? m ? (a = g.x(0, 0), l = g.y(0, 0), c = g.x(h[1], h[2]), u = g.y(h[1], h[2]), r.translate(c - a, u - l)) : r.translate(h[1], h[2]) : "r" == p ? 2 == f ? (d = d || e, r.rotate(h[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f && (m ? (c = g.x(h[2], h[3]), u = g.y(h[2], h[3]), r.rotate(h[1], c, u)) : r.rotate(h[1], h[2], h[3])) : "s" == p ? 2 == f || 3 == f ? (d = d || e, r.scale(h[1], h[f - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == f ? m ? (c = g.x(h[2], h[3]), u = g.y(h[2], h[3]), r.scale(h[1], h[1], c, u)) : r.scale(h[1], h[1], h[2], h[3]) : 5 == f && (m ? (c = g.x(h[3], h[4]), u = g.y(h[3], h[4]), r.scale(h[1], h[2], c, u)) : r.scale(h[1], h[2], h[3], h[4])) : "m" == p && 7 == f && r.add(h[1], h[2], h[3], h[4], h[5], h[6])
						}
					return r
				}, i._unit2px = function(t, e, i)
				{
					function r(t)
					{
						if (null == t) return C;
						if (t == +t) return t;
						n(u,
						{
							width: t
						});
						try
						{
							return u.getBBox()
								.width
						}
						catch (t)
						{
							return 0
						}
					}

					function s(t)
					{
						if (null == t) return C;
						if (t == +t) return t;
						n(u,
						{
							height: t
						});
						try
						{
							return u.getBBox()
								.height
						}
						catch (t)
						{
							return 0
						}
					}

					function o(n, r)
					{
						null == e ? c[n] = r(t.attr(n) || 0) : n == e && (c = r(null == i ? t.attr(n) || 0 : i))
					}
					var l = a(t)
						.node,
						c = {},
						u = l.querySelector(".svg---mgr");
					switch (u || (u = n("rect"), n(u,
					{
						x: -9e9,
						y: -9e9,
						width: 10,
						height: 10,
						class: "svg---mgr",
						fill: "none"
					}), l.appendChild(u)), t.type)
					{
						case "rect":
							o("rx", r), o("ry", s);
						case "image":
							o("width", r), o("height", s);
						case "text":
							o("x", r), o("y", s);
							break;
						case "circle":
							o("cx", r), o("cy", s), o("r", r);
							break;
						case "ellipse":
							o("cx", r), o("cy", s), o("rx", r), o("ry", s);
							break;
						case "line":
							o("x1", r), o("x2", r), o("y1", s), o("y2", s);
							break;
						case "marker":
							o("refX", r), o("markerWidth", r), o("refY", s), o("markerHeight", s);
							break;
						case "radialGradient":
							o("fx", r), o("fy", s);
							break;
						case "tspan":
							o("dx", r), o("dy", s);
							break;
						default:
							o(e, r)
					}
					return l.removeChild(u), c
				}, p.doc.contains || p.doc.compareDocumentPosition, i._.getSomeDefs = function(t)
				{
					var e = t.node.ownerSVGElement && f(t.node.ownerSVGElement) || t.node.parentNode && f(t.node.parentNode) || i.select("svg") || i(0, 0),
						n = e.select("defs"),
						r = null != n && n.node;
					return r || (r = d("defs", e.node)
						.node), r
				}, i._.getSomeSVG = a, i.select = function(t)
				{
					return t = v(t)
						.replace(/([^\\]):/g, "$1\\:"), f(p.doc.querySelector(t))
				}, i.selectAll = function(t)
				{
					for (var e = p.doc.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(f(e[r]));
					return n
				}, setInterval(function()
				{
					for (var t in L)
						if (L[m](t))
						{
							var e = L[t],
								i = e.node;
							("svg" != e.type && !i.ownerSVGElement || "svg" == e.type && (!i.parentNode || "ownerSVGElement" in i.parentNode && !i.ownerSVGElement)) && delete L[t]
						}
				}, 1e4), c.prototype.attr = function(t, i)
				{
					var n = this,
						s = n.node;
					if (!t)
					{
						if (1 != s.nodeType) return {
							text: s.nodeValue
						};
						for (var o = s.attributes, a = {}, l = 0, c = o.length; c > l; l++) a[o[l].nodeName] = o[l].nodeValue;
						return a
					}
					if (r(t, "string"))
					{
						if (!(arguments.length > 1)) return e("snap.util.getattr." + t, n)
							.firstDefined();
						var u = {};
						u[t] = i, t = u
					}
					for (var d in t) t[m](d) && e("snap.util.attr." + d, n, t[d]);
					return n
				}, i.parse = function(t)
				{
					var e = p.doc.createDocumentFragment(),
						i = !0,
						n = p.doc.createElement("div");
					if ((t = v(t))
						.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", i = !1), n.innerHTML = t, t = n.getElementsByTagName("svg")[0])
						if (i) e = t;
						else
							for (; t.firstChild;) e.appendChild(t.firstChild);
					return new u(e)
				}, i.fragment = function()
				{
					for (var t = Array.prototype.slice.call(arguments, 0), e = p.doc.createDocumentFragment(), n = 0, r = t.length; r > n; n++)
					{
						var s = t[n];
						s.node && s.node.nodeType && e.appendChild(s.node), s.nodeType && e.appendChild(s), "string" == typeof s && e.appendChild(i.parse(s)
							.node)
					}
					return new u(e)
				}, i._.make = d, i._.wrap = f, h.prototype.el = function(t, e)
				{
					var i = d(t, this.node);
					return e && i.attr(e), i
				}, c.prototype.children = function()
				{
					for (var t = [], e = this.node.childNodes, n = 0, r = e.length; r > n; n++) t[n] = i(e[n]);
					return t
				}, c.prototype.toJSON = function()
				{
					var t = [];
					return function t(e, i)
					{
						for (var n = 0, r = e.length; r > n; n++)
						{
							var s = {
									type: e[n].type,
									attr: e[n].attr()
								},
								o = e[n].children();
							i.push(s), o.length && t(o, s.childNodes = [])
						}
					}([this], t), t[0]
				}, e.on("snap.util.getattr", function()
				{
					var t = e.nt(),
						i = (t = t.substring(t.lastIndexOf(".") + 1))
						.replace(/[A-Z]/g, function(t)
						{
							return "-" + t.toLowerCase()
						});
					return U[m](i) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null)
						.getPropertyValue(i) : n(this.node, t)
				});
				var U = {
					"alignment-baseline": 0,
					"baseline-shift": 0,
					clip: 0,
					"clip-path": 0,
					"clip-rule": 0,
					color: 0,
					"color-interpolation": 0,
					"color-interpolation-filters": 0,
					"color-profile": 0,
					"color-rendering": 0,
					cursor: 0,
					direction: 0,
					display: 0,
					"dominant-baseline": 0,
					"enable-background": 0,
					fill: 0,
					"fill-opacity": 0,
					"fill-rule": 0,
					filter: 0,
					"flood-color": 0,
					"flood-opacity": 0,
					font: 0,
					"font-family": 0,
					"font-size": 0,
					"font-size-adjust": 0,
					"font-stretch": 0,
					"font-style": 0,
					"font-variant": 0,
					"font-weight": 0,
					"glyph-orientation-horizontal": 0,
					"glyph-orientation-vertical": 0,
					"image-rendering": 0,
					kerning: 0,
					"letter-spacing": 0,
					"lighting-color": 0,
					marker: 0,
					"marker-end": 0,
					"marker-mid": 0,
					"marker-start": 0,
					mask: 0,
					opacity: 0,
					overflow: 0,
					"pointer-events": 0,
					"shape-rendering": 0,
					"stop-color": 0,
					"stop-opacity": 0,
					stroke: 0,
					"stroke-dasharray": 0,
					"stroke-dashoffset": 0,
					"stroke-linecap": 0,
					"stroke-linejoin": 0,
					"stroke-miterlimit": 0,
					"stroke-opacity": 0,
					"stroke-width": 0,
					"text-anchor": 0,
					"text-decoration": 0,
					"text-rendering": 0,
					"unicode-bidi": 0,
					visibility: 0,
					"word-spacing": 0,
					"writing-mode": 0
				};
				e.on("snap.util.attr", function(t)
				{
					var i = e.nt(),
						r = {};
					r[i = i.substring(i.lastIndexOf(".") + 1)] = t;
					var s = i.replace(/-(\w)/gi, function(t, e)
						{
							return e.toUpperCase()
						}),
						o = i.replace(/[A-Z]/g, function(t)
						{
							return "-" + t.toLowerCase()
						});
					U[m](o) ? this.node.style[s] = null == t ? C : t : n(this.node, r)
				}), h.prototype, i.ajax = function(t, i, n, s)
				{
					var o = new XMLHttpRequest,
						a = j();
					if (o)
					{
						if (r(i, "function")) s = n, n = i, i = null;
						else if (r(i, "object"))
						{
							var l = [];
							for (var c in i) i.hasOwnProperty(c) && l.push(encodeURIComponent(c) + "=" + encodeURIComponent(i[c]));
							i = l.join("&")
						}
						return o.open(i ? "POST" : "GET", t, !0), i && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), n && (e.once("snap.ajax." + a + ".0", n), e.once("snap.ajax." + a + ".200", n), e.once("snap.ajax." + a + ".304", n)), o.onreadystatechange = function()
						{
							4 == o.readyState && e("snap.ajax." + a + "." + o.status, s, o)
						}, 4 == o.readyState ? o : (o.send(i), o)
					}
				}, i.load = function(t, e, n)
				{
					i.ajax(t, function(t)
					{
						var r = i.parse(t.responseText);
						n ? e.call(n, r) : e(r)
					})
				};
				var V = function(t)
				{
					var e = t.getBoundingClientRect(),
						i = t.ownerDocument,
						n = i.body,
						r = i.documentElement,
						s = r.clientTop || n.clientTop || 0,
						o = r.clientLeft || n.clientLeft || 0;
					return {
						y: e.top + (g.win.pageYOffset || r.scrollTop || n.scrollTop) - s,
						x: e.left + (g.win.pageXOffset || r.scrollLeft || n.scrollLeft) - o
					}
				};
				return i.getElementByPoint = function(t, e)
				{
					var i = (this.canvas, p.doc.elementFromPoint(t, e));
					if (p.win.opera && "svg" == i.tagName)
					{
						var n = V(i),
							r = i.createSVGRect();
						r.x = t - n.x, r.y = e - n.y, r.width = r.height = 1;
						var s = i.getIntersectionList(r, null);
						s.length && (i = s[s.length - 1])
					}
					return i ? f(i) : null
				}, i.plugin = function(t)
				{
					t(i, c, h, p, u)
				}, p.win.Snap = i, i
			}(t || this);
		return n.plugin(function(i, n, r, s, o)
		{
			function a(t, e)
			{
				if (null == e)
				{
					var n = !0;
					if (!(e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new i.Matrix;
					e = i._.svgTransform2string(e)
				}
				else e = i._.rgTransform.test(e) ? d(e)
					.replace(/\.{3}|\u2026/g, t._.transform || "") : i._.svgTransform2string(e), u(e, "array") && (e = i.path ? i.path.toString.call(e) : d(e)), t._.transform = e;
				var r = i._.transform2matrix(e, t.getBBox(1));
				return n ? r : void(t.matrix = r)
			}

			function l(t)
			{
				return function()
				{
					var e = t ? "<" + this.type : "",
						i = this.node.attributes,
						n = this.node.childNodes;
					if (t)
						for (var r = 0, s = i.length; s > r; r++) e += " " + i[r].name + '="' + i[r].value.replace(/"/g, '\\"') + '"';
					if (n.length)
					{
						for (t && (e += ">"), r = 0, s = n.length; s > r; r++) 3 == n[r].nodeType ? e += n[r].nodeValue : 1 == n[r].nodeType && (e += g(n[r])
							.toString());
						t && (e += "</" + this.type + ">")
					}
					else t && (e += "/>");
					return e
				}
			}
			var c = n.prototype,
				u = i.is,
				d = String,
				h = i._unit2px,
				f = i._.$,
				p = i._.make,
				m = i._.getSomeDefs,
				g = i._.wrap;
			c.getBBox = function(t)
			{
				if ("tspan" == this.type) return i._.box(this.node.getClientRects()
					.item(0));
				if (!i.Matrix || !i.path) return this.node.getBBox();
				var e = this,
					n = new i.Matrix;
				if (e.removed) return i._.box();
				for (;
					"use" == e.type;)
					if (t || (n = n.add(e.transform()
							.localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
					else
					{
						var r = e.attr("xlink:href");
						e = e.original = e.node.ownerDocument.getElementById(r.substring(r.indexOf("#") + 1))
					} var s = e._,
					o = i.path.get[e.type] || i.path.get.deflt;
				try
				{
					return t ? (s.bboxwt = o ? i.path.getBBox(e.realPath = o(e)) : i._.box(e.node.getBBox()), i._.box(s.bboxwt)) : (e.realPath = o(e), e.matrix = e.transform()
						.localMatrix, s.bbox = i.path.getBBox(i.path.map(e.realPath, n.add(e.matrix))), i._.box(s.bbox))
				}
				catch (t)
				{
					return i._.box()
				}
			};
			var v = function()
			{
				return this.string
			};
			c.transform = function(t)
			{
				var e = this._;
				if (null == t)
				{
					for (var n, r = this, s = new i.Matrix(this.node.getCTM()), o = a(this), l = [o], c = new i.Matrix, u = o.toTransformString(), h = d(o) == d(this.matrix) ? d(e.transform) : u;
						"svg" != r.type && (r = r.parent());) l.push(a(r));
					for (n = l.length; n--;) c.add(l[n]);
					return {
						string: h,
						globalMatrix: s,
						totalMatrix: c,
						localMatrix: o,
						diffMatrix: s.clone()
							.add(o.invert()),
						global: s.toTransformString(),
						total: c.toTransformString(),
						local: u,
						toString: v
					}
				}
				return t instanceof i.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : a(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? f(this.node,
				{
					gradientTransform: this.matrix
				}) : "pattern" == this.type ? f(this.node,
				{
					patternTransform: this.matrix
				}) : f(this.node,
				{
					transform: this.matrix
				})), this
			}, c.parent = function()
			{
				return g(this.node.parentNode)
			}, c.append = c.add = function(t)
			{
				if (t)
				{
					if ("set" == t.type)
					{
						var e = this;
						return t.forEach(function(t)
						{
							e.add(t)
						}), this
					}
					t = g(t), this.node.appendChild(t.node), t.paper = this.paper
				}
				return this
			}, c.appendTo = function(t)
			{
				return t && (t = g(t))
					.append(this), this
			}, c.prepend = function(t)
			{
				if (t)
				{
					if ("set" == t.type)
					{
						var e, i = this;
						return t.forEach(function(t)
						{
							e ? e.after(t) : i.prepend(t), e = t
						}), this
					}
					var n = (t = g(t))
						.parent();
					this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent()
						.add(), n && n.add()
				}
				return this
			}, c.prependTo = function(t)
			{
				return (t = g(t))
					.prepend(this), this
			}, c.before = function(t)
			{
				if ("set" == t.type)
				{
					var e = this;
					return t.forEach(function(t)
						{
							var i = t.parent();
							e.node.parentNode.insertBefore(t.node, e.node), i && i.add()
						}), this.parent()
						.add(), this
				}
				var i = (t = g(t))
					.parent();
				return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent()
					.add(), i && i.add(), t.paper = this.paper, this
			}, c.after = function(t)
			{
				var e = (t = g(t))
					.parent();
				return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent()
					.add(), e && e.add(), t.paper = this.paper, this
			}, c.insertBefore = function(t)
			{
				t = g(t);
				var e = this.parent();
				return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent()
					.add(), this
			}, c.insertAfter = function(t)
			{
				t = g(t);
				var e = this.parent();
				return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent()
					.add(), this
			}, c.remove = function()
			{
				var t = this.parent();
				return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
			}, c.select = function(t)
			{
				return g(this.node.querySelector(t))
			}, c.selectAll = function(t)
			{
				for (var e = this.node.querySelectorAll(t), n = (i.set || Array)(), r = 0; r < e.length; r++) n.push(g(e[r]));
				return n
			}, c.asPX = function(t, e)
			{
				return null == e && (e = this.attr(t)), +h(this, t, e)
			}, c.use = function()
			{
				var t, e = this.node.id;
				return e || (e = this.id, f(this.node,
				{
					id: e
				})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? p(this.type, this.node.parentNode) : p("use", this.node.parentNode), f(t.node,
				{
					"xlink:href": "#" + e
				}), t.original = this, t
			}, c.clone = function()
			{
				var t = g(this.node.cloneNode(!0));
				return f(t.node, "id") && f(t.node,
					{
						id: t.id
					}),
					function(t)
					{
						function e(t, e)
						{
							var n = f(t.node, e);
							(n = (n = n && n.match(o)) && n[2]) && "#" == n.charAt() && (n = n.substring(1)) && (l[n] = (l[n] || [])
								.concat(function(n)
								{
									var r = {};
									r[e] = i.url(n), f(t.node, r)
								}))
						}

						function n(t)
						{
							var e = f(t.node, "xlink:href");
							e && "#" == e.charAt() && (e = e.substring(1)) && (l[e] = (l[e] || [])
								.concat(function(e)
								{
									t.attr("xlink:href", "#" + e)
								}))
						}
						for (var r, s = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, a = [], l = {}, c = 0, u = s.length; u > c; c++)
						{
							e(r = s[c], "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
							var d = f(r.node, "id");
							d && (f(r.node,
							{
								id: r.id
							}), a.push(
							{
								old: d,
								id: r.id
							}))
						}
						for (c = 0, u = a.length; u > c; c++)
						{
							var h = l[a[c].old];
							if (h)
								for (var p = 0, m = h.length; m > p; p++) h[p](a[c].id)
						}
					}(t), t.insertAfter(this), t
			}, c.toDefs = function()
			{
				return m(this)
					.appendChild(this.node), this
			}, c.pattern = c.toPattern = function(t, e, i, n)
			{
				var r = p("pattern", m(this));
				return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, t = t.x), f(r.node,
				{
					x: t,
					y: e,
					width: i,
					height: n,
					patternUnits: "userSpaceOnUse",
					id: r.id,
					viewBox: [t, e, i, n].join(" ")
				}), r.node.appendChild(this.node), r
			}, c.marker = function(t, e, i, n, r, s)
			{
				var o = p("marker", m(this));
				return null == t && (t = this.getBBox()), u(t, "object") && "x" in t && (e = t.y, i = t.width, n = t.height, r = t.refX || t.cx, s = t.refY || t.cy, t = t.x), f(o.node,
				{
					viewBox: [t, e, i, n].join(" "),
					markerWidth: i,
					markerHeight: n,
					orient: "auto",
					refX: r || 0,
					refY: s || 0,
					id: o.id
				}), o.node.appendChild(this.node), o
			};
			var y = {};
			c.data = function(t, n)
			{
				var r = y[this.id] = y[this.id] || {};
				if (0 == arguments.length) return e("snap.data.get." + this.id, this, r, null), r;
				if (1 == arguments.length)
				{
					if (i.is(t, "object"))
					{
						for (var s in t) t.hasOwnProperty(s) && this.data(s, t[s]);
						return this
					}
					return e("snap.data.get." + this.id, this, r[t], t), r[t]
				}
				return r[t] = n, e("snap.data.set." + this.id, this, n, t), this
			}, c.removeData = function(t)
			{
				return null == t ? y[this.id] = {} : y[this.id] && delete y[this.id][t], this
			}, c.outerSVG = c.toString = l(1), c.innerSVG = l(), c.toDataURL = function()
			{
				if (t && t.btoa)
				{
					var e = this.getBBox(),
						n = i.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',
						{
							x: +e.x.toFixed(3),
							y: +e.y.toFixed(3),
							width: +e.width.toFixed(3),
							height: +e.height.toFixed(3),
							contents: this.outerSVG()
						});
					return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
				}
			}, o.prototype.select = c.select, o.prototype.selectAll = c.selectAll
		}), n.plugin(function(t, n, r, s, o)
		{
			function a(t, e, i)
			{
				return function(n)
				{
					var r = n.slice(t, e);
					return 1 == r.length && (r = r[0]), i ? i(r) : r
				}
			}
			var l = n.prototype,
				c = t.is,
				u = String,
				d = "hasOwnProperty",
				h = function(t, e, n, r)
				{
					"function" != typeof n || n.length || (r = n, n = i.linear), this.attr = t, this.dur = e, n && (this.easing = n), r && (this.callback = r)
				};
			t._.Animation = h, t.animation = function(t, e, i, n)
			{
				return new h(t, e, i, n)
			}, l.inAnim = function()
			{
				var t = this,
					e = [];
				for (var i in t.anims) t.anims[d](i) && function(t)
				{
					e.push(
					{
						anim: new h(t._attrs, t.dur, t.easing, t._callback),
						mina: t,
						curStatus: t.status(),
						status: function(e)
						{
							return t.status(e)
						},
						stop: function()
						{
							t.stop()
						}
					})
				}(t.anims[i]);
				return e
			}, t.animate = function(t, n, r, s, o, a)
			{
				"function" != typeof o || o.length || (a = o, o = i.linear);
				var l = i.time(),
					c = i(t, n, l, l + s, i.time, r, o);
				return a && e.once("mina.finish." + c.id, a), c
			}, l.stop = function()
			{
				for (var t = this.inAnim(), e = 0, i = t.length; i > e; e++) t[e].stop();
				return this
			}, l.animate = function(t, n, r, s)
			{
				"function" != typeof r || r.length || (s = r, r = i.linear), t instanceof h && (s = t.callback, r = t.easing, n = t.dur, t = t.attr);
				var o, l, f, p, m = [],
					g = [],
					v = {},
					y = this;
				for (var _ in t)
					if (t[d](_))
					{
						y.equal ? (o = (p = y.equal(_, u(t[_])))
							.from, l = p.to, f = p.f) : (o = +y.attr(_), l = +t[_]);
						var x = c(o, "array") ? o.length : 1;
						v[_] = a(m.length, m.length + x, f), m = m.concat(o), g = g.concat(l)
					} var b = i.time(),
					w = i(m, g, b, b + n, i.time, function(t)
					{
						var e = {};
						for (var i in v) v[d](i) && (e[i] = v[i](t));
						y.attr(e)
					}, r);
				return y.anims[w.id] = w, w._attrs = t, w._callback = s, e("snap.animcreated." + y.id, w), e.once("mina.finish." + w.id, function()
				{
					e.off("mina.*." + w.id), delete y.anims[w.id], s && s.call(y)
				}), e.once("mina.stop." + w.id, function()
				{
					e.off("mina.*." + w.id), delete y.anims[w.id]
				}), y
			}
		}), n.plugin(function(t, e, i, n, r)
		{
			function s(t, e, i, n, r, s)
			{
				return null == e && "[object SVGMatrix]" == o.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +n, this.e = +r, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
			}
			var o = Object.prototype.toString,
				a = String,
				l = Math;
			! function(e)
			{
				function i(t)
				{
					return t[0] * t[0] + t[1] * t[1]
				}

				function n(t)
				{
					var e = l.sqrt(i(t));
					t[0] && (t[0] /= e), t[1] && (t[1] /= e)
				}
				e.add = function(t, e, i, n, r, o)
				{
					if (t && t instanceof s) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
					var a = t * this.a + e * this.c,
						l = t * this.b + e * this.d;
					return this.e += r * this.a + o * this.c, this.f += r * this.b + o * this.d, this.c = i * this.a + n * this.c, this.d = i * this.b + n * this.d, this.a = a, this.b = l, this
				}, s.prototype.multLeft = function(t, e, i, n, r, o)
				{
					if (t && t instanceof s) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
					var a = t * this.a + i * this.b,
						l = t * this.c + i * this.d,
						c = t * this.e + i * this.f + r;
					return this.b = e * this.a + n * this.b, this.d = e * this.c + n * this.d, this.f = e * this.e + n * this.f + o, this.a = a, this.c = l, this.e = c, this
				}, e.invert = function()
				{
					var t = this,
						e = t.a * t.d - t.b * t.c;
					return new s(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
				}, e.clone = function()
				{
					return new s(this.a, this.b, this.c, this.d, this.e, this.f)
				}, e.translate = function(t, e)
				{
					return this.e += t * this.a + e * this.c, this.f += t * this.b + e * this.d, this
				}, e.scale = function(t, e, i, n)
				{
					return null == e && (e = t), (i || n) && this.translate(i, n), this.a *= t, this.b *= t, this.c *= e, this.d *= e, (i || n) && this.translate(-i, -n), this
				}, e.rotate = function(e, i, n)
				{
					e = t.rad(e), i = i || 0, n = n || 0;
					var r = +l.cos(e)
						.toFixed(9),
						s = +l.sin(e)
						.toFixed(9);
					return this.add(r, s, -s, r, i, n), this.add(1, 0, 0, 1, -i, -n)
				}, e.skewX = function(t)
				{
					return this.skew(t, 0)
				}, e.skewY = function(t)
				{
					return this.skew(0, t)
				}, e.skew = function(e, i)
				{
					e = e || 0, i = i || 0, e = t.rad(e), i = t.rad(i);
					var n = l.tan(e)
						.toFixed(9),
						r = l.tan(i)
						.toFixed(9);
					return this.add(1, r, n, 1, 0, 0)
				}, e.x = function(t, e)
				{
					return t * this.a + e * this.c + this.e
				}, e.y = function(t, e)
				{
					return t * this.b + e * this.d + this.f
				}, e.get = function(t)
				{
					return +this[a.fromCharCode(97 + t)].toFixed(4)
				}, e.toString = function()
				{
					return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
				}, e.offset = function()
				{
					return [this.e.toFixed(4), this.f.toFixed(4)]
				}, e.determinant = function()
				{
					return this.a * this.d - this.b * this.c
				}, e.split = function()
				{
					var e = {};
					e.dx = this.e, e.dy = this.f;
					var r = [
						[this.a, this.b],
						[this.c, this.d]
					];
					e.scalex = l.sqrt(i(r[0])), n(r[0]), e.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1], r[1] = [r[1][0] - r[0][0] * e.shear, r[1][1] - r[0][1] * e.shear], e.scaley = l.sqrt(i(r[1])), n(r[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
					var s = r[0][1],
						o = r[1][1];
					return 0 > o ? (e.rotate = t.deg(l.acos(o)), 0 > s && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(l.asin(s)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
				}, e.toTransformString = function(t)
				{
					var e = t || this.split();
					return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : "") + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : ""))
				}
			}(s.prototype), t.Matrix = s, t.matrix = function(t, e, i, n, r, o)
			{
				return new s(t, e, i, n, r, o)
			}
		}), n.plugin(function(t, i, n, r, s)
		{
			function o(n)
			{
				return function(r)
				{
					if (e.stop(), r instanceof s && 1 == r.node.childNodes.length && ("radialGradient" == r.node.firstChild.tagName || "linearGradient" == r.node.firstChild.tagName || "pattern" == r.node.firstChild.tagName) && (r = r.node.firstChild, h(this)
							.appendChild(r), r = u(r)), r instanceof i)
						if ("radialGradient" == r.type || "linearGradient" == r.type || "pattern" == r.type)
						{
							r.node.id || p(r.node,
							{
								id: r.id
							});
							var o = m(r.node.id)
						}
					else o = r.attr(n);
					else if ((o = t.color(r))
						.error)
					{
						var a = t(h(this)
								.ownerSVGElement)
							.gradient(r);
						a ? (a.node.id || p(a.node,
						{
							id: a.id
						}), o = m(a.node.id)) : o = r
					}
					else o = g(o);
					var l = {};
					l[n] = o, p(this.node, l), this.node.style[n] = y
				}
			}

			function a(t)
			{
				e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
			}

			function l()
			{
				return e.stop(), this.node.style.fontSize
			}
			var c = t._.make,
				u = t._.wrap,
				d = t.is,
				h = t._.getSomeDefs,
				f = /^url\((['"]?)([^)]+)\1\)$/,
				p = t._.$,
				m = t.url,
				g = String,
				v = t._.separator,
				y = "";
			t.deurl = function(t)
				{
					var e = String(t)
						.match(f);
					return e ? e[2] : t
				}, e.on("snap.util.attr.mask", function(t)
				{
					if (t instanceof i || t instanceof s)
					{
						if (e.stop(), t instanceof s && 1 == t.node.childNodes.length && (t = t.node.firstChild, h(this)
								.appendChild(t), t = u(t)), "mask" == t.type) var n = t;
						else(n = c("mask", h(this)))
							.node.appendChild(t.node);
						!n.node.id && p(n.node,
						{
							id: n.id
						}), p(this.node,
						{
							mask: m(n.id)
						})
					}
				}),
				function(t)
				{
					e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
				}(function(t)
				{
					if (t instanceof i || t instanceof s)
					{
						e.stop();
						for (var n, r = t.node; r;)
						{
							if ("clipPath" === r.nodeName)
							{
								n = new i(r);
								break
							}
							if ("svg" === r.nodeName)
							{
								n = void 0;
								break
							}
							r = r.parentNode
						}
						n || ((n = c("clipPath", h(this)))
							.node.appendChild(t.node), !n.node.id && p(n.node,
							{
								id: n.id
							})), p(this.node,
						{
							"clip-path": m(n.node.id || n.id)
						})
					}
				}), e.on("snap.util.attr.fill", o("fill")), e.on("snap.util.attr.stroke", o("stroke"));
			var _ = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
			e.on("snap.util.grad.parse", function(t)
				{
					function e(t, e)
					{
						for (var i = (e - a) / (t - l), n = l; t > n; n++) s[n].offset = +(+a + i * (n - l))
							.toFixed(2);
						l = t, a = e
					}
					var i = (t = g(t))
						.match(_);
					if (!i) return null;
					var n = i[1],
						r = i[2],
						s = i[3];
					1 == (r = r.split(/\s*,\s*/)
							.map(function(t)
							{
								return +t == t ? +t : t
							}))
						.length && 0 == r[0] && (r = []);
					var o = (s = (s = s.split("-"))
							.map(function(t)
							{
								var e = {
									color: (t = t.split(":"))[0]
								};
								return t[1] && (e.offset = parseFloat(t[1])), e
							}))
						.length,
						a = 0,
						l = 0;
					o--;
					for (var c = 0; o > c; c++) "offset" in s[c] && e(c, s[c].offset);
					return s[o].offset = s[o].offset || 100, e(o, s[o].offset),
					{
						type: n,
						params: r,
						stops: s
					}
				}), e.on("snap.util.attr.d", function(i)
				{
					e.stop(), d(i, "array") && d(i[0], "array") && (i = t.path.toString.call(i)), (i = g(i))
						.match(/[ruo]/i) && (i = t.path.toAbsolute(i)), p(this.node,
						{
							d: i
						})
				})(-1), e.on("snap.util.attr.#text", function(t)
				{
					e.stop(), t = g(t);
					for (var i = r.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
					this.node.appendChild(i)
				})(-1), e.on("snap.util.attr.path", function(t)
				{
					e.stop(), this.attr(
					{
						d: t
					})
				})(-1), e.on("snap.util.attr.class", function(t)
				{
					e.stop(), this.node.className.baseVal = t
				})(-1), e.on("snap.util.attr.viewBox", function(t)
				{
					var i;
					i = d(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : d(t, "array") ? t.join(" ") : t, p(this.node,
					{
						viewBox: i
					}), e.stop()
				})(-1), e.on("snap.util.attr.transform", function(t)
				{
					this.transform(t), e.stop()
				})(-1), e.on("snap.util.attr.r", function(t)
				{
					"rect" == this.type && (e.stop(), p(this.node,
					{
						rx: t,
						ry: t
					}))
				})(-1), e.on("snap.util.attr.textpath", function(t)
				{
					if (e.stop(), "text" == this.type)
					{
						var n, r, s;
						if (!t && this.textPath)
						{
							for (r = this.textPath; r.node.firstChild;) this.node.appendChild(r.node.firstChild);
							return r.remove(), void delete this.textPath
						}
						if (d(t, "string"))
						{
							var o = h(this),
								a = u(o.parentNode)
								.path(t);
							o.appendChild(a.node), n = a.id, a.attr(
							{
								id: n
							})
						}
						else(t = u(t)) instanceof i && ((n = t.attr("id")) || (n = t.id, t.attr(
						{
							id: n
						})));
						if (n)
							if (r = this.textPath, s = this.node, r) r.attr(
							{
								"xlink:href": "#" + n
							});
							else
							{
								for (r = p("textPath",
									{
										"xlink:href": "#" + n
									}); s.firstChild;) r.appendChild(s.firstChild);
								s.appendChild(r), this.textPath = u(r)
							}
					}
				})(-1), e.on("snap.util.attr.text", function(t)
				{
					if ("text" == this.type)
					{
						for (var i = this.node; i.firstChild;) i.removeChild(i.firstChild);
						for (var n = function t(e)
							{
								var i = p("tspan");
								if (d(e, "array"))
									for (var n = 0; n < e.length; n++) i.appendChild(t(e[n]));
								else i.appendChild(r.doc.createTextNode(e));
								return i.normalize && i.normalize(), i
							}(t); n.firstChild;) i.appendChild(n.firstChild)
					}
					e.stop()
				})(-1), e.on("snap.util.attr.fontSize", a)(-1), e.on("snap.util.attr.font-size", a)(-1), e.on("snap.util.getattr.transform", function()
				{
					return e.stop(), this.transform()
				})(-1), e.on("snap.util.getattr.textpath", function()
				{
					return e.stop(), this.textPath
				})(-1),
				function()
				{
					function i(i)
					{
						return function()
						{
							e.stop();
							var n = r.doc.defaultView.getComputedStyle(this.node, null)
								.getPropertyValue("marker-" + i);
							return "none" == n ? n : t(r.doc.getElementById(n.match(f)[1]))
						}
					}

					function n(t)
					{
						return function(i)
						{
							e.stop();
							var n = "marker" + t.charAt(0)
								.toUpperCase() + t.substring(1);
							if ("" != i && i)
							{
								if ("marker" == i.type)
								{
									var r = i.node.id;
									return r || p(i.node,
									{
										id: i.id
									}), void(this.node.style[n] = m(r))
								}
							}
							else this.node.style[n] = "none"
						}
					}
					e.on("snap.util.getattr.marker-end", i("end"))(-1), e.on("snap.util.getattr.markerEnd", i("end"))(-1), e.on("snap.util.getattr.marker-start", i("start"))(-1), e.on("snap.util.getattr.markerStart", i("start"))(-1), e.on("snap.util.getattr.marker-mid", i("mid"))(-1), e.on("snap.util.getattr.markerMid", i("mid"))(-1), e.on("snap.util.attr.marker-end", n("end"))(-1), e.on("snap.util.attr.markerEnd", n("end"))(-1), e.on("snap.util.attr.marker-start", n("start"))(-1), e.on("snap.util.attr.markerStart", n("start"))(-1), e.on("snap.util.attr.marker-mid", n("mid"))(-1), e.on("snap.util.attr.markerMid", n("mid"))(-1)
				}(), e.on("snap.util.getattr.r", function()
				{
					return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (e.stop(), p(this.node, "rx")) : void 0
				})(-1), e.on("snap.util.getattr.text", function()
				{
					if ("text" == this.type || "tspan" == this.type)
					{
						e.stop();
						var t = function t(e)
						{
							for (var i = [], n = e.childNodes, r = 0, s = n.length; s > r; r++)
							{
								var o = n[r];
								3 == o.nodeType && i.push(o.nodeValue), "tspan" == o.tagName && (1 == o.childNodes.length && 3 == o.firstChild.nodeType ? i.push(o.firstChild.nodeValue) : i.push(t(o)))
							}
							return i
						}(this.node);
						return 1 == t.length ? t[0] : t
					}
				})(-1), e.on("snap.util.getattr.#text", function()
				{
					return this.node.textContent
				})(-1), e.on("snap.util.getattr.fill", function(i)
				{
					if (!i)
					{
						e.stop();
						var n = e("snap.util.getattr.fill", this, !0)
							.firstDefined();
						return t(t.deurl(n)) || n
					}
				})(-1), e.on("snap.util.getattr.stroke", function(i)
				{
					if (!i)
					{
						e.stop();
						var n = e("snap.util.getattr.stroke", this, !0)
							.firstDefined();
						return t(t.deurl(n)) || n
					}
				})(-1), e.on("snap.util.getattr.viewBox", function()
				{
					e.stop();
					var i = p(this.node, "viewBox");
					return i ? (i = i.split(v), t._.box(+i[0], +i[1], +i[2], +i[3])) : void 0
				})(-1), e.on("snap.util.getattr.points", function()
				{
					var t = p(this.node, "points");
					return e.stop(), t ? t.split(v) : void 0
				})(-1), e.on("snap.util.getattr.path", function()
				{
					var t = p(this.node, "d");
					return e.stop(), t
				})(-1), e.on("snap.util.getattr.class", function()
				{
					return this.node.className.baseVal
				})(-1), e.on("snap.util.getattr.fontSize", l)(-1), e.on("snap.util.getattr.font-size", l)(-1)
		}), n.plugin(function(t, e, i, n, r)
		{
			var s = /\S+/g,
				o = String,
				a = e.prototype;
			a.addClass = function(t)
			{
				var e, i, n, r = o(t || "")
					.match(s) || [],
					a = this.node,
					l = a.className.baseVal,
					c = l.match(s) || [];
				if (r.length)
				{
					for (e = 0; i = r[e++];) ~c.indexOf(i) || c.push(i);
					l != (n = c.join(" ")) && (a.className.baseVal = n)
				}
				return this
			}, a.removeClass = function(t)
			{
				var e, i, n, r, a = o(t || "")
					.match(s) || [],
					l = this.node,
					c = l.className.baseVal,
					u = c.match(s) || [];
				if (u.length)
				{
					for (e = 0; n = a[e++];) ~(i = u.indexOf(n)) && u.splice(i, 1);
					c != (r = u.join(" ")) && (l.className.baseVal = r)
				}
				return this
			}, a.hasClass = function(t)
			{
				return !!~(this.node.className.baseVal.match(s) || [])
					.indexOf(t)
			}, a.toggleClass = function(t, e)
			{
				if (null != e) return e ? this.addClass(t) : this.removeClass(t);
				var i, n, r, o, a = (t || "")
					.match(s) || [],
					l = this.node,
					c = l.className.baseVal,
					u = c.match(s) || [];
				for (i = 0; r = a[i++];) ~(n = u.indexOf(r)) ? u.splice(n, 1) : u.push(r);
				return c != (o = u.join(" ")) && (l.className.baseVal = o), this
			}
		}), n.plugin(function(t, i, n, r, s)
		{
			function o(t)
			{
				return t
			}

			function a(t)
			{
				return function(e)
				{
					return +e.toFixed(3) + t
				}
			}
			var l = {
					"+": function(t, e)
					{
						return t + e
					},
					"-": function(t, e)
					{
						return t - e
					},
					"/": function(t, e)
					{
						return t / e
					},
					"*": function(t, e)
					{
						return t * e
					}
				},
				c = String,
				u = /[a-z]+$/i,
				d = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
			e.on("snap.util.attr", function(t)
			{
				var i = c(t)
					.match(d);
				if (i)
				{
					var n = e.nt(),
						r = n.substring(n.lastIndexOf(".") + 1),
						s = this.attr(r),
						o = {};
					e.stop();
					var a = i[3] || "",
						h = s.match(u),
						f = l[i[1]];
					if (h && h == a ? t = f(parseFloat(s), +i[2]) : (s = this.asPX(r), t = f(this.asPX(r), this.asPX(r, i[2] + a))), isNaN(s) || isNaN(t)) return;
					o[r] = t, this.attr(o)
				}
			})(-10), e.on("snap.util.equal", function(t, i)
			{
				var n = c(this.attr(t) || ""),
					r = c(i)
					.match(d);
				if (r)
				{
					e.stop();
					var s = r[3] || "",
						h = n.match(u),
						f = l[r[1]];
					return h && h == s ?
					{
						from: parseFloat(n),
						to: f(parseFloat(n), +r[2]),
						f: a(h)
					} :
					{
						from: n = this.asPX(t),
						to: f(n, this.asPX(t, r[2] + s)),
						f: o
					}
				}
			})(-10)
		}), n.plugin(function(i, n, r, s, o)
		{
			var a = r.prototype,
				l = i.is;
			a.rect = function(t, e, i, n, r, s)
			{
				var o;
				return null == s && (s = r), l(t, "object") && "[object Object]" == t ? o = t : null != t && (o = {
					x: t,
					y: e,
					width: i,
					height: n
				}, null != r && (o.rx = r, o.ry = s)), this.el("rect", o)
			}, a.circle = function(t, e, i)
			{
				var n;
				return l(t, "object") && "[object Object]" == t ? n = t : null != t && (n = {
					cx: t,
					cy: e,
					r: i
				}), this.el("circle", n)
			};
			var c = function()
			{
				function t()
				{
					this.parentNode.removeChild(this)
				}
				return function(e, i)
				{
					var n = s.doc.createElement("img"),
						r = s.doc.body;
					n.style.cssText = "position:absolute;left:-9999em;top:-9999em", n.onload = function()
					{
						i.call(n), n.onload = n.onerror = null, r.removeChild(n)
					}, n.onerror = t, r.appendChild(n), n.src = e
				}
			}();
			a.image = function(t, e, n, r, s)
				{
					var o = this.el("image");
					if (l(t, "object") && "src" in t) o.attr(t);
					else if (null != t)
					{
						var a = {
							"xlink:href": t,
							preserveAspectRatio: "none"
						};
						null != e && null != n && (a.x = e, a.y = n), null != r && null != s ? (a.width = r, a.height = s) : c(t, function()
						{
							i._.$(o.node,
							{
								width: this.offsetWidth,
								height: this.offsetHeight
							})
						}), i._.$(o.node, a)
					}
					return o
				}, a.ellipse = function(t, e, i, n)
				{
					var r;
					return l(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
						cx: t,
						cy: e,
						rx: i,
						ry: n
					}), this.el("ellipse", r)
				}, a.path = function(t)
				{
					var e;
					return l(t, "object") && !l(t, "array") ? e = t : t && (e = {
						d: t
					}), this.el("path", e)
				}, a.group = a.g = function(t)
				{
					var e = this.el("g");
					return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
				}, a.svg = function(t, e, i, n, r, s, o, a)
				{
					var c = {};
					return l(t, "object") && null == e ? c = t : (null != t && (c.x = t), null != e && (c.y = e), null != i && (c.width = i), null != n && (c.height = n), null != r && null != s && null != o && null != a && (c.viewBox = [r, s, o, a])), this.el("svg", c)
				}, a.mask = function(t)
				{
					var e = this.el("mask");
					return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
				}, a.ptrn = function(t, e, i, n, r, s, o, a)
				{
					if (l(t, "object")) var c = t;
					else c = {
						patternUnits: "userSpaceOnUse"
					}, t && (c.x = t), e && (c.y = e), null != i && (c.width = i), null != n && (c.height = n), c.viewBox = null != r && null != s && null != o && null != a ? [r, s, o, a] : [t || 0, e || 0, i || 0, n || 0];
					return this.el("pattern", c)
				}, a.use = function(t)
				{
					return null != t ? (t instanceof n && (t.attr("id") || t.attr(
						{
							id: i._.id(t)
						}), t = t.attr("id")), "#" == String(t)
						.charAt() && (t = t.substring(1)), this.el("use",
						{
							"xlink:href": "#" + t
						})) : n.prototype.use.call(this)
				}, a.symbol = function(t, e, i, n)
				{
					var r = {};
					return null != t && null != e && null != i && null != n && (r.viewBox = [t, e, i, n]), this.el("symbol", r)
				}, a.text = function(t, e, i)
				{
					var n = {};
					return l(t, "object") ? n = t : null != t && (n = {
						x: t,
						y: e,
						text: i || ""
					}), this.el("text", n)
				}, a.line = function(t, e, i, n)
				{
					var r = {};
					return l(t, "object") ? r = t : null != t && (r = {
						x1: t,
						x2: i,
						y1: e,
						y2: n
					}), this.el("line", r)
				}, a.polyline = function(t)
				{
					arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
					var e = {};
					return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {
						points: t
					}), this.el("polyline", e)
				}, a.polygon = function(t)
				{
					arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
					var e = {};
					return l(t, "object") && !l(t, "array") ? e = t : null != t && (e = {
						points: t
					}), this.el("polygon", e)
				},
				function()
				{
					function n()
					{
						return this.selectAll("stop")
					}

					function r(t, e)
					{
						var n = u("stop"),
							r = {
								offset: +e + "%"
							};
						t = i.color(t), r["stop-color"] = t.hex, t.opacity < 1 && (r["stop-opacity"] = t.opacity), u(n, r);
						for (var s, o = this.stops(), a = 0; a < o.length; a++)
						{
							if (parseFloat(o[a].attr("offset")) > e)
							{
								this.node.insertBefore(n, o[a].node), s = !0;
								break
							}
						}
						return s || this.node.appendChild(n), this
					}

					function s()
					{
						if ("linearGradient" == this.type)
						{
							var t = u(this.node, "x1") || 0,
								e = u(this.node, "x2") || 1,
								n = u(this.node, "y1") || 0,
								r = u(this.node, "y2") || 0;
							return i._.box(t, n, math.abs(e - t), math.abs(r - n))
						}
						var s = this.node.cx || .5,
							o = this.node.cy || .5,
							a = this.node.r || 0;
						return i._.box(s - a, o - a, 2 * a, 2 * a)
					}

					function o(t)
					{
						var n = t,
							r = this.stops();
						if ("string" == typeof t && (n = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t)
								.firstDefined()
								.stops), i.is(n, "array"))
						{
							for (var s = 0; s < r.length; s++)
								if (n[s])
								{
									var o = i.color(n[s].color),
										a = {
											offset: n[s].offset + "%"
										};
									a["stop-color"] = o.hex, o.opacity < 1 && (a["stop-opacity"] = o.opacity), r[s].attr(a)
								}
							else r[s].remove();
							for (s = r.length; s < n.length; s++) this.addStop(n[s].color, n[s].offset);
							return this
						}
					}

					function l(t, e, a, l, c)
					{
						var d = i._.make("linearGradient", t);
						return d.stops = n, d.addStop = r, d.getBBox = s, d.setStops = o, null != e && u(d.node,
						{
							x1: e,
							y1: a,
							x2: l,
							y2: c
						}), d
					}

					function c(t, e, o, a, l, c)
					{
						var d = i._.make("radialGradient", t);
						return d.stops = n, d.addStop = r, d.getBBox = s, null != e && u(d.node,
						{
							cx: e,
							cy: o,
							r: a
						}), null != l && null != c && u(d.node,
						{
							fx: l,
							fy: c
						}), d
					}
					var u = i._.$;
					a.gradient = function(t)
					{
						return function(t, i)
						{
							var n, r = e("snap.util.grad.parse", null, i)
								.firstDefined();
							if (!r) return null;
							r.params.unshift(t), n = "l" == r.type.toLowerCase() ? l.apply(0, r.params) : c.apply(0, r.params), r.type != r.type.toLowerCase() && u(n.node,
							{
								gradientUnits: "userSpaceOnUse"
							});
							for (var s = r.stops, o = s.length, a = 0; o > a; a++)
							{
								var d = s[a];
								n.addStop(d.color, d.offset)
							}
							return n
						}(this.defs, t)
					}, a.gradientLinear = function(t, e, i, n)
					{
						return l(this.defs, t, e, i, n)
					}, a.gradientRadial = function(t, e, i, n, r)
					{
						return c(this.defs, t, e, i, n, r)
					}, a.toString = function()
					{
						var t, e = this.node.ownerDocument,
							n = e.createDocumentFragment(),
							r = e.createElement("div"),
							s = this.node.cloneNode(!0);
						return n.appendChild(r), r.appendChild(s), i._.$(s,
						{
							xmlns: "http://www.w3.org/2000/svg"
						}), t = r.innerHTML, n.removeChild(n.firstChild), t
					}, a.toDataURL = function()
					{
						return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
					}, a.clear = function()
					{
						for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call(
						{
							node: e
						}), e = t
					}
				}()
		}), n.plugin(function(t, e, i, n)
		{
			function r(t)
			{
				var e = r.ps = r.ps || {};
				return e[t] ? e[t].sleep = 100 : e[t] = {
					sleep: 100
				}, setTimeout(function()
				{
					for (var i in e) e[D](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
				}), e[t]
			}

			function s(t, e, i, n)
			{
				return null == t && (t = e = i = n = 0), null == e && (e = t.y, i = t.width, n = t.height, t = t.x),
				{
					x: t,
					y: e,
					width: i,
					w: i,
					height: n,
					h: n,
					x2: t + i,
					y2: e + n,
					cx: t + i / 2,
					cy: e + n / 2,
					r1: j.min(i, n) / 2,
					r2: j.max(i, n) / 2,
					r0: j.sqrt(i * i + n * n) / 2,
					path: x(t, e, i, n),
					vb: [t, e, i, n].join(" ")
				}
			}

			function o()
			{
				return this.join(",")
					.replace(O, "$1")
			}

			function a(t)
			{
				var e = $(t);
				return e.toString = o, e
			}

			function l(t, e, i, n, r, s, o, a, l)
			{
				return null == l ? m(t, e, i, n, r, s, o, a) : u(t, e, i, n, r, s, o, a, function(t, e, i, n, r, s, o, a, l)
				{
					if (!(0 > l || m(t, e, i, n, r, s, o, a) < l))
					{
						var c, u = .5,
							d = 1 - u;
						for (c = m(t, e, i, n, r, s, o, a, d); q(c - l) > .01;) c = m(t, e, i, n, r, s, o, a, d += (l > c ? 1 : -1) * (u /= 2));
						return d
					}
				}(t, e, i, n, r, s, o, a, l))
			}

			function c(i, n)
			{
				function r(t)
				{
					return +(+t)
						.toFixed(3)
				}
				return t._.cacher(function(t, s, o)
				{
					t instanceof e && (t = t.attr("d"));
					for (var a, c, d, h, f, p = "", m = {}, g = 0, v = 0, y = (t = A(t))
							.length; y > v; v++)
					{
						if ("M" == (d = t[v])[0]) a = +d[1], c = +d[2];
						else
						{
							if (g + (h = l(a, c, d[1], d[2], d[3], d[4], d[5], d[6])) > s)
							{
								if (n && !m.start)
								{
									if (p += ["C" + r((f = l(a, c, d[1], d[2], d[3], d[4], d[5], d[6], s - g))
											.start.x), r(f.start.y), r(f.m.x), r(f.m.y), r(f.x), r(f.y)], o) return p;
									m.start = p, p = ["M" + r(f.x), r(f.y) + "C" + r(f.n.x), r(f.n.y), r(f.end.x), r(f.end.y), r(d[5]), r(d[6])].join(), g += h, a = +d[5], c = +d[6];
									continue
								}
								if (!i && !n) return l(a, c, d[1], d[2], d[3], d[4], d[5], d[6], s - g)
							}
							g += h, a = +d[5], c = +d[6]
						}
						p += d.shift() + d
					}
					return m.end = p, i ? g : n ? m : u(a, c, d[0], d[1], d[2], d[3], d[4], d[5], 1)
				}, null, t._.clone)
			}

			function u(t, e, i, n, r, s, o, a, l)
			{
				var c = 1 - l,
					u = B(c, 3),
					d = B(c, 2),
					h = l * l,
					f = h * l,
					p = t + 2 * l * (i - t) + h * (r - 2 * i + t),
					m = e + 2 * l * (n - e) + h * (s - 2 * n + e),
					g = i + 2 * l * (r - i) + h * (o - 2 * r + i),
					v = n + 2 * l * (s - n) + h * (a - 2 * s + n);
				return {
					x: u * t + 3 * d * l * i + 3 * c * l * l * r + f * o,
					y: u * e + 3 * d * l * n + 3 * c * l * l * s + f * a,
					m:
					{
						x: p,
						y: m
					},
					n:
					{
						x: g,
						y: v
					},
					start:
					{
						x: c * t + l * i,
						y: c * e + l * n
					},
					end:
					{
						x: c * r + l * o,
						y: c * s + l * a
					},
					alpha: 90 - 180 * j.atan2(p - g, m - v) / R
				}
			}

			function d(e, i, n, r, o, a, l, c)
			{
				t.is(e, "array") || (e = [e, i, n, r, o, a, l, c]);
				var u = S.apply(null, e);
				return s(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y)
			}

			function h(t, e, i)
			{
				return e >= t.x && e <= t.x + t.width && i >= t.y && i <= t.y + t.height
			}

			function f(t, e)
			{
				return t = s(t), h(e = s(e), t.x, t.y) || h(e, t.x2, t.y) || h(e, t.x, t.y2) || h(e, t.x2, t.y2) || h(t, e.x, e.y) || h(t, e.x2, e.y) || h(t, e.x, e.y2) || h(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
			}

			function p(t, e, i, n, r)
			{
				return t * (t * (-3 * e + 9 * i - 9 * n + 3 * r) + 6 * e - 12 * i + 6 * n) - 3 * e + 3 * i
			}

			function m(t, e, i, n, r, s, o, a, l)
			{
				null == l && (l = 1);
				for (var c = (l = l > 1 ? 1 : 0 > l ? 0 : l) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], h = 0, f = 0; 12 > f; f++)
				{
					var m = c * u[f] + c,
						g = p(m, t, i, r, o),
						v = p(m, e, n, s, a),
						y = g * g + v * v;
					h += d[f] * j.sqrt(y)
				}
				return c * h
			}

			function g(t, e, i, n, r, s, o, a)
			{
				if (!(L(t, i) < N(r, o) || N(t, i) > L(r, o) || L(e, n) < N(s, a) || N(e, n) > L(s, a)))
				{
					var l = (t - i) * (s - a) - (e - n) * (r - o);
					if (l)
					{
						var c = ((t * n - e * i) * (r - o) - (t - i) * (r * a - s * o)) / l,
							u = ((t * n - e * i) * (s - a) - (e - n) * (r * a - s * o)) / l,
							d = +c.toFixed(2),
							h = +u.toFixed(2);
						if (!(d < +N(t, i)
								.toFixed(2) || d > +L(t, i)
								.toFixed(2) || d < +N(r, o)
								.toFixed(2) || d > +L(r, o)
								.toFixed(2) || h < +N(e, n)
								.toFixed(2) || h > +L(e, n)
								.toFixed(2) || h < +N(s, a)
								.toFixed(2) || h > +L(s, a)
								.toFixed(2))) return {
							x: c,
							y: u
						}
					}
				}
			}

			function v(t, e, i)
			{
				if (!f(d(t), d(e))) return i ? 0 : [];
				for (var n = ~~(m.apply(0, t) / 8), r = ~~(m.apply(0, e) / 8), s = [], o = [], a = {}, l = i ? 0 : [], c = 0; n + 1 > c; c++)
				{
					var h = u.apply(0, t.concat(c / n));
					s.push(
					{
						x: h.x,
						y: h.y,
						t: c / n
					})
				}
				for (c = 0; r + 1 > c; c++) h = u.apply(0, e.concat(c / r)), o.push(
				{
					x: h.x,
					y: h.y,
					t: c / r
				});
				for (c = 0; n > c; c++)
					for (var p = 0; r > p; p++)
					{
						var v = s[c],
							y = s[c + 1],
							_ = o[p],
							x = o[p + 1],
							b = q(y.x - v.x) < .001 ? "y" : "x",
							w = q(x.x - _.x) < .001 ? "y" : "x",
							T = g(v.x, v.y, y.x, y.y, _.x, _.y, x.x, x.y);
						if (T)
						{
							if (a[T.x.toFixed(4)] == T.y.toFixed(4)) continue;
							a[T.x.toFixed(4)] = T.y.toFixed(4);
							var k = v.t + q((T[b] - v[b]) / (y[b] - v[b])) * (y.t - v.t),
								C = _.t + q((T[w] - _[w]) / (x[w] - _[w])) * (x.t - _.t);
							k >= 0 && 1 >= k && C >= 0 && 1 >= C && (i ? l++ : l.push(
							{
								x: T.x,
								y: T.y,
								t1: k,
								t2: C
							}))
						}
					}
				return l
			}

			function y(t, e, i)
			{
				t = A(t), e = A(e);
				for (var n, r, s, o, a, l, c, u, d, h, f = i ? 0 : [], p = 0, m = t.length; m > p; p++)
				{
					var g = t[p];
					if ("M" == g[0]) n = a = g[1], r = l = g[2];
					else
					{
						"C" == g[0] ? (d = [n, r].concat(g.slice(1)), n = d[6], r = d[7]) : (d = [n, r, n, r, a, l, a, l], n = a, r = l);
						for (var y = 0, _ = e.length; _ > y; y++)
						{
							var x = e[y];
							if ("M" == x[0]) s = c = x[1], o = u = x[2];
							else
							{
								"C" == x[0] ? (h = [s, o].concat(x.slice(1)), s = h[6], o = h[7]) : (h = [s, o, s, o, c, u, c, u], s = c, o = u);
								var b = v(d, h, i);
								if (i) f += b;
								else
								{
									for (var w = 0, T = b.length; T > w; w++) b[w].segment1 = p, b[w].segment2 = y, b[w].bez1 = d, b[w].bez2 = h;
									f = f.concat(b)
								}
							}
						}
					}
				}
				return f
			}

			function _(t)
			{
				var e = r(t);
				if (e.bbox) return $(e.bbox);
				if (!t) return s();
				for (var i, n = 0, o = 0, a = [], l = [], c = 0, u = (t = A(t))
						.length; u > c; c++)
					if ("M" == (i = t[c])[0]) n = i[1], o = i[2], a.push(n), l.push(o);
					else
					{
						var d = S(n, o, i[1], i[2], i[3], i[4], i[5], i[6]);
						a = a.concat(d.min.x, d.max.x), l = l.concat(d.min.y, d.max.y), n = i[5], o = i[6]
					} var h = N.apply(0, a),
					f = N.apply(0, l),
					p = s(h, f, L.apply(0, a) - h, L.apply(0, l) - f);
				return e.bbox = $(p), p
			}

			function x(t, e, i, n, r)
			{
				if (r) return [
					["M", +t + +r, e],
					["l", i - 2 * r, 0],
					["a", r, r, 0, 0, 1, r, r],
					["l", 0, n - 2 * r],
					["a", r, r, 0, 0, 1, -r, r],
					["l", 2 * r - i, 0],
					["a", r, r, 0, 0, 1, -r, -r],
					["l", 0, 2 * r - n],
					["a", r, r, 0, 0, 1, r, -r],
					["z"]
				];
				var s = [
					["M", t, e],
					["l", i, 0],
					["l", 0, n],
					["l", -i, 0],
					["z"]
				];
				return s.toString = o, s
			}

			function b(t, e, i, n, r)
			{
				if (null == r && null == n && (n = i), t = +t, e = +e, i = +i, n = +n, null != r) var s = Math.PI / 180,
					a = t + i * Math.cos(-n * s),
					l = t + i * Math.cos(-r * s),
					c = [
						["M", a, e + i * Math.sin(-n * s)],
						["A", i, i, 0, +(r - n > 180), 0, l, e + i * Math.sin(-r * s)]
					];
				else c = [
					["M", t, e],
					["m", 0, -n],
					["a", i, n, 0, 1, 1, 0, 2 * n],
					["a", i, n, 0, 1, 1, 0, -2 * n],
					["z"]
				];
				return c.toString = o, c
			}

			function w(e)
			{
				var i = r(e);
				if (i.abs) return a(i.abs);
				if (E(e, "array") && E(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [
					["M", 0, 0]
				];
				var n, s = [],
					l = 0,
					c = 0,
					u = 0,
					d = 0,
					h = 0;
				"M" == e[0][0] && (u = l = +e[0][1], d = c = +e[0][2], h++, s[0] = ["M", l, c]);
				for (var f, p, m = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), g = h, v = e.length; v > g; g++)
				{
					if (s.push(f = []), (n = (p = e[g])[0]) != n.toUpperCase()) switch (f[0] = n.toUpperCase(), f[0])
					{
						case "A":
							f[1] = p[1], f[2] = p[2], f[3] = p[3], f[4] = p[4], f[5] = p[5], f[6] = +p[6] + l, f[7] = +p[7] + c;
							break;
						case "V":
							f[1] = +p[1] + c;
							break;
						case "H":
							f[1] = +p[1] + l;
							break;
						case "R":
							for (var y = [l, c].concat(p.slice(1)), _ = 2, x = y.length; x > _; _++) y[_] = +y[_] + l, y[++_] = +y[_] + c;
							s.pop(), s = s.concat(P(y, m));
							break;
						case "O":
							s.pop(), (y = b(l, c, p[1], p[2]))
								.push(y[0]), s = s.concat(y);
							break;
						case "U":
							s.pop(), s = s.concat(b(l, c, p[1], p[2], p[3])), f = ["U"].concat(s[s.length - 1].slice(-2));
							break;
						case "M":
							u = +p[1] + l, d = +p[2] + c;
						default:
							for (_ = 1, x = p.length; x > _; _++) f[_] = +p[_] + (_ % 2 ? l : c)
					}
					else if ("R" == n) y = [l, c].concat(p.slice(1)), s.pop(), s = s.concat(P(y, m)), f = ["R"].concat(p.slice(-2));
					else if ("O" == n) s.pop(), (y = b(l, c, p[1], p[2]))
						.push(y[0]), s = s.concat(y);
					else if ("U" == n) s.pop(), s = s.concat(b(l, c, p[1], p[2], p[3])), f = ["U"].concat(s[s.length - 1].slice(-2));
					else
						for (var w = 0, T = p.length; T > w; w++) f[w] = p[w];
					if ("O" != (n = n.toUpperCase())) switch (f[0])
					{
						case "Z":
							l = +u, c = +d;
							break;
						case "H":
							l = f[1];
							break;
						case "V":
							c = f[1];
							break;
						case "M":
							u = f[f.length - 2], d = f[f.length - 1];
						default:
							l = f[f.length - 2], c = f[f.length - 1]
					}
				}
				return s.toString = o, i.abs = a(s), s
			}

			function T(t, e, i, n)
			{
				return [t, e, i, n, i, n]
			}

			function k(t, e, i, n, r, s)
			{
				var o = 1 / 3,
					a = 2 / 3;
				return [o * t + a * i, o * e + a * n, o * r + a * i, o * s + a * n, r, s]
			}

			function C(e, i, n, r, s, o, a, l, c, u)
			{
				var d, h = 120 * R / 180,
					f = R / 180 * (+s || 0),
					p = [],
					m = t._.cacher(function(t, e, i)
					{
						return {
							x: t * j.cos(i) - e * j.sin(i),
							y: t * j.sin(i) + e * j.cos(i)
						}
					});
				if (!n || !r) return [e, i, l, c, l, c];
				if (u) k = u[0], S = u[1], w = u[2], T = u[3];
				else
				{
					e = (d = m(e, i, -f))
						.x, i = d.y, l = (d = m(l, c, -f))
						.x, c = d.y;
					var g = (j.cos(R / 180 * s), j.sin(R / 180 * s), (e - l) / 2),
						v = (i - c) / 2,
						y = g * g / (n * n) + v * v / (r * r);
					y > 1 && (n *= y = j.sqrt(y), r *= y);
					var _ = n * n,
						x = r * r,
						b = (o == a ? -1 : 1) * j.sqrt(q((_ * x - _ * v * v - x * g * g) / (_ * v * v + x * g * g))),
						w = b * n * v / r + (e + l) / 2,
						T = b * -r * g / n + (i + c) / 2,
						k = j.asin(((i - T) / r)
							.toFixed(9)),
						S = j.asin(((c - T) / r)
							.toFixed(9));
					0 > (k = w > e ? R - k : k) && (k = 2 * R + k), 0 > (S = w > l ? R - S : S) && (S = 2 * R + S), a && k > S && (k -= 2 * R), !a && S > k && (S -= 2 * R)
				}
				var A = S - k;
				if (q(A) > h)
				{
					var P = S,
						F = l,
						E = c;
					S = k + h * (a && S > k ? 1 : -1), p = C(l = w + n * j.cos(S), c = T + r * j.sin(S), n, r, s, 0, a, F, E, [S, P, w, T])
				}
				A = S - k;
				var $ = j.cos(k),
					D = j.sin(k),
					O = j.cos(S),
					M = j.sin(S),
					N = j.tan(A / 4),
					L = 4 / 3 * n * N,
					B = 4 / 3 * r * N,
					I = [e, i],
					z = [e + L * D, i - B * $],
					H = [l + L * M, c - B * O],
					X = [l, c];
				if (z[0] = 2 * I[0] - z[0], z[1] = 2 * I[1] - z[1], u) return [z, H, X].concat(p);
				for (var W = [], U = 0, V = (p = [z, H, X].concat(p)
							.join()
							.split(","))
						.length; V > U; U++) W[U] = U % 2 ? m(p[U - 1], p[U], f)
					.y : m(p[U], p[U + 1], f)
					.x;
				return W
			}

			function S(t, e, i, n, r, s, o, a)
			{
				for (var l, c, u, d, h, f, p, m, g = [], v = [
						[],
						[]
					], y = 0; 2 > y; ++y)
					if (0 == y ? (c = 6 * t - 12 * i + 6 * r, l = -3 * t + 9 * i - 9 * r + 3 * o, u = 3 * i - 3 * t) : (c = 6 * e - 12 * n + 6 * s, l = -3 * e + 9 * n - 9 * s + 3 * a, u = 3 * n - 3 * e), q(l) < 1e-12)
					{
						if (q(c) < 1e-12) continue;
						(d = -u / c) > 0 && 1 > d && g.push(d)
					}
				else p = c * c - 4 * u * l, m = j.sqrt(p), 0 > p || ((h = (-c + m) / (2 * l)) > 0 && 1 > h && g.push(h), (f = (-c - m) / (2 * l)) > 0 && 1 > f && g.push(f));
				for (var _, x = g.length, b = x; x--;) _ = 1 - (d = g[x]), v[0][x] = _ * _ * _ * t + 3 * _ * _ * d * i + 3 * _ * d * d * r + d * d * d * o, v[1][x] = _ * _ * _ * e + 3 * _ * _ * d * n + 3 * _ * d * d * s + d * d * d * a;
				return v[0][b] = t, v[1][b] = e, v[0][b + 1] = o, v[1][b + 1] = a, v[0].length = v[1].length = b + 2,
				{
					min:
					{
						x: N.apply(0, v[0]),
						y: N.apply(0, v[1])
					},
					max:
					{
						x: L.apply(0, v[0]),
						y: L.apply(0, v[1])
					}
				}
			}

			function A(t, e)
			{
				var i = !e && r(t);
				if (!e && i.curve) return a(i.curve);
				for (var n = w(t), s = e && w(e), o = {
						x: 0,
						y: 0,
						bx: 0,
						by: 0,
						X: 0,
						Y: 0,
						qx: null,
						qy: null
					}, l = {
						x: 0,
						y: 0,
						bx: 0,
						by: 0,
						X: 0,
						Y: 0,
						qx: null,
						qy: null
					}, c = function(t, e, i)
					{
						var n, r;
						if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
						switch (!(t[0] in
						{
							T: 1,
							Q: 1
						}) && (e.qx = e.qy = null), t[0])
						{
							case "M":
								e.X = t[1], e.Y = t[2];
								break;
							case "A":
								t = ["C"].concat(C.apply(0, [e.x, e.y].concat(t.slice(1))));
								break;
							case "S":
								"C" == i || "S" == i ? (n = 2 * e.x - e.bx, r = 2 * e.y - e.by) : (n = e.x, r = e.y), t = ["C", n, r].concat(t.slice(1));
								break;
							case "T":
								"Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(k(e.x, e.y, e.qx, e.qy, t[1], t[2]));
								break;
							case "Q":
								e.qx = t[1], e.qy = t[2], t = ["C"].concat(k(e.x, e.y, t[1], t[2], t[3], t[4]));
								break;
							case "L":
								t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
								break;
							case "H":
								t = ["C"].concat(T(e.x, e.y, t[1], e.y));
								break;
							case "V":
								t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
								break;
							case "Z":
								t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
						}
						return t
					}, u = function(t, e)
					{
						if (t[e].length > 7)
						{
							t[e].shift();
							for (var i = t[e]; i.length;) h[e] = "A", s && (f[e] = "A"), t.splice(e++, 0, ["C"].concat(i.splice(0, 6)));
							t.splice(e, 1), v = L(n.length, s && s.length || 0)
						}
					}, d = function(t, e, i, r, o)
					{
						t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), i.bx = 0, i.by = 0, i.x = t[o][1], i.y = t[o][2], v = L(n.length, s && s.length || 0))
					}, h = [], f = [], p = "", m = "", g = 0, v = L(n.length, s && s.length || 0); v > g; g++)
				{
					n[g] && (p = n[g][0]), "C" != p && (h[g] = p, g && (m = h[g - 1])), n[g] = c(n[g], o, m), "A" != h[g] && "C" == p && (h[g] = "C"), u(n, g), s && (s[g] && (p = s[g][0]), "C" != p && (f[g] = p, g && (m = f[g - 1])), s[g] = c(s[g], l, m), "A" != f[g] && "C" == p && (f[g] = "C"), u(s, g)), d(n, s, o, l, g), d(s, n, l, o, g);
					var y = n[g],
						_ = s && s[g],
						x = y.length,
						b = s && _.length;
					o.x = y[x - 2], o.y = y[x - 1], o.bx = M(y[x - 4]) || o.x, o.by = M(y[x - 3]) || o.y, l.bx = s && (M(_[b - 4]) || l.x), l.by = s && (M(_[b - 3]) || l.y), l.x = s && _[b - 2], l.y = s && _[b - 1]
				}
				return s || (i.curve = a(n)), s ? [n, s] : n
			}

			function P(t, e)
			{
				for (var i = [], n = 0, r = t.length; r - 2 * !e > n; n += 2)
				{
					var s = [
						{
							x: +t[n - 2],
							y: +t[n - 1]
					},
						{
							x: +t[n],
							y: +t[n + 1]
					},
						{
							x: +t[n + 2],
							y: +t[n + 3]
					},
						{
							x: +t[n + 4],
							y: +t[n + 5]
					}];
					e ? n ? r - 4 == n ? s[3] = {
						x: +t[0],
						y: +t[1]
					} : r - 2 == n && (s[2] = {
						x: +t[0],
						y: +t[1]
					}, s[3] = {
						x: +t[2],
						y: +t[3]
					}) : s[0] = {
						x: +t[r - 2],
						y: +t[r - 1]
					} : r - 4 == n ? s[3] = s[2] : n || (s[0] = {
						x: +t[n],
						y: +t[n + 1]
					}), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
				}
				return i
			}
			var F = e.prototype,
				E = t.is,
				$ = t._.clone,
				D = "hasOwnProperty",
				O = /,?([a-z]),?/gi,
				M = parseFloat,
				j = Math,
				R = j.PI,
				N = j.min,
				L = j.max,
				B = j.pow,
				q = j.abs,
				I = c(1),
				z = c(),
				H = c(0, 1),
				X = t._unit2px,
				W = {
					path: function(t)
					{
						return t.attr("path")
					},
					circle: function(t)
					{
						var e = X(t);
						return b(e.cx, e.cy, e.r)
					},
					ellipse: function(t)
					{
						var e = X(t);
						return b(e.cx || 0, e.cy || 0, e.rx, e.ry)
					},
					rect: function(t)
					{
						var e = X(t);
						return x(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
					},
					image: function(t)
					{
						var e = X(t);
						return x(e.x || 0, e.y || 0, e.width, e.height)
					},
					line: function(t)
					{
						return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
					},
					polyline: function(t)
					{
						return "M" + t.attr("points")
					},
					polygon: function(t)
					{
						return "M" + t.attr("points") + "z"
					},
					deflt: function(t)
					{
						var e = t.node.getBBox();
						return x(e.x, e.y, e.width, e.height)
					}
				};
			t.path = r, t.path.getTotalLength = I, t.path.getPointAtLength = z, t.path.getSubpath = function(t, e, i)
			{
				if (this.getTotalLength(t) - i < 1e-6) return H(t, e)
					.end;
				var n = H(t, i, 1);
				return e ? H(n, e)
					.end : n
			}, F.getTotalLength = function()
			{
				return this.node.getTotalLength ? this.node.getTotalLength() : void 0
			}, F.getPointAtLength = function(t)
			{
				return z(this.attr("d"), t)
			}, F.getSubpath = function(e, i)
			{
				return t.path.getSubpath(this.attr("d"), e, i)
			}, t._.box = s, t.path.findDotsAtSegment = u, t.path.bezierBBox = d, t.path.isPointInsideBBox = h, t.closest = function(e, i, n, r)
			{
				for (var o = 100, a = s(e - o / 2, i - o / 2, o, o), l = [], c = n[0].hasOwnProperty("x") ? function(t)
					{
						return {
							x: n[t].x,
							y: n[t].y
						}
					} : function(t)
					{
						return {
							x: n[t],
							y: r[t]
						}
					}, u = 0; 1e6 >= o && !u;)
				{
					for (var d = 0, f = n.length; f > d; d++)
					{
						var p = c(d);
						if (h(a, p.x, p.y))
						{
							u++, l.push(p);
							break
						}
					}
					u || (a = s(e - (o *= 2) / 2, i - o / 2, o, o))
				}
				if (1e6 != o)
				{
					var m, g = 1 / 0;
					for (d = 0, f = l.length; f > d; d++)
					{
						var v = t.len(e, i, l[d].x, l[d].y);
						g > v && (g = v, l[d].len = v, m = l[d])
					}
					return m
				}
			}, t.path.isBBoxIntersect = f, t.path.intersection = function(t, e)
			{
				return y(t, e)
			}, t.path.intersectionNumber = function(t, e)
			{
				return y(t, e, 1)
			}, t.path.isPointInside = function(t, e, i)
			{
				var n = _(t);
				return h(n, e, i) && y(t, [
					["M", e, i],
					["H", n.x2 + 10]
				], 1) % 2 == 1
			}, t.path.getBBox = _, t.path.get = W, t.path.toRelative = function(e)
			{
				var i = r(e),
					n = String.prototype.toLowerCase;
				if (i.rel) return a(i.rel);
				t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
				var s = [],
					l = 0,
					c = 0,
					u = 0,
					d = 0,
					h = 0;
				"M" == e[0][0] && (u = l = e[0][1], d = c = e[0][2], h++, s.push(["M", l, c]));
				for (var f = h, p = e.length; p > f; f++)
				{
					var m = s[f] = [],
						g = e[f];
					if (g[0] != n.call(g[0])) switch (m[0] = n.call(g[0]), m[0])
					{
						case "a":
							m[1] = g[1], m[2] = g[2], m[3] = g[3], m[4] = g[4], m[5] = g[5], m[6] = +(g[6] - l)
								.toFixed(3), m[7] = +(g[7] - c)
								.toFixed(3);
							break;
						case "v":
							m[1] = +(g[1] - c)
								.toFixed(3);
							break;
						case "m":
							u = g[1], d = g[2];
						default:
							for (var v = 1, y = g.length; y > v; v++) m[v] = +(g[v] - (v % 2 ? l : c))
								.toFixed(3)
					}
					else
					{
						m = s[f] = [], "m" == g[0] && (u = g[1] + l, d = g[2] + c);
						for (var _ = 0, x = g.length; x > _; _++) s[f][_] = g[_]
					}
					var b = s[f].length;
					switch (s[f][0])
					{
						case "z":
							l = u, c = d;
							break;
						case "h":
							l += +s[f][b - 1];
							break;
						case "v":
							c += +s[f][b - 1];
							break;
						default:
							l += +s[f][b - 2], c += +s[f][b - 1]
					}
				}
				return s.toString = o, i.rel = a(s), s
			}, t.path.toAbsolute = w, t.path.toCubic = A, t.path.map = function(t, e)
			{
				if (!e) return t;
				var i, n, r, s, o, a, l;
				for (r = 0, o = (t = A(t))
					.length; o > r; r++)
					for (s = 1, a = (l = t[r])
						.length; a > s; s += 2) i = e.x(l[s], l[s + 1]), n = e.y(l[s], l[s + 1]), l[s] = i, l[s + 1] = n;
				return t
			}, t.path.toString = o, t.path.clone = a
		}), n.plugin(function(t, n, r, s)
		{
			var o = Math.max,
				a = Math.min,
				l = function(t)
				{
					if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)
						for (var e = 0, i = t.length; i > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
				},
				c = l.prototype;
			c.push = function()
			{
				for (var t, e, i = 0, n = arguments.length; n > i; i++)(t = arguments[i]) && (this[e = this.items.length] = this.items[e] = t, this.length++);
				return this
			}, c.pop = function()
			{
				return this.length && delete this[this.length--], this.items.pop()
			}, c.forEach = function(t, e)
			{
				for (var i = 0, n = this.items.length; n > i; i++)
					if (!1 === t.call(e, this.items[i], i)) return this;
				return this
			}, c.animate = function(n, r, s, o)
			{
				"function" != typeof s || s.length || (o = s, s = i.linear), n instanceof t._.Animation && (o = n.callback, s = n.easing, r = s.dur, n = n.attr);
				var a = arguments;
				if (t.is(n, "array") && t.is(a[a.length - 1], "array")) var l = !0;
				var c, u = function()
					{
						c ? this.b = c : c = this.b
					},
					d = 0,
					h = this,
					f = o && function()
					{
						++d == h.length && o.call(this)
					};
				return this.forEach(function(t, i)
				{
					e.once("snap.animcreated." + t.id, u), l ? a[i] && t.animate.apply(t, a[i]) : t.animate(n, r, s, f)
				})
			}, c.remove = function()
			{
				for (; this.length;) this.pop()
					.remove();
				return this
			}, c.bind = function(t, e, i)
			{
				var n = {};
				if ("function" == typeof e) this.bindings[t] = e;
				else
				{
					var r = i || t;
					this.bindings[t] = function(t)
					{
						n[r] = t, e.attr(n)
					}
				}
				return this
			}, c.attr = function(t)
			{
				var e = {};
				for (var i in t) this.bindings[i] ? this.bindings[i](t[i]) : e[i] = t[i];
				for (var n = 0, r = this.items.length; r > n; n++) this.items[n].attr(e);
				return this
			}, c.clear = function()
			{
				for (; this.length;) this.pop()
			}, c.splice = function(t, e, i)
			{
				t = 0 > t ? o(this.length + t, 0) : t, e = o(0, a(this.length - t, e));
				var n, r = [],
					s = [],
					c = [];
				for (n = 2; n < arguments.length; n++) c.push(arguments[n]);
				for (n = 0; e > n; n++) s.push(this[t + n]);
				for (; n < this.length - t; n++) r.push(this[t + n]);
				var u = c.length;
				for (n = 0; n < u + r.length; n++) this.items[t + n] = this[t + n] = u > n ? c[n] : r[n - u];
				for (n = this.items.length = this.length -= e - u; this[n];) delete this[n++];
				return new l(s)
			}, c.exclude = function(t)
			{
				for (var e = 0, i = this.length; i > e; e++)
					if (this[e] == t) return this.splice(e, 1), !0;
				return !1
			}, c.insertAfter = function(t)
			{
				for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
				return this
			}, c.getBBox = function()
			{
				for (var t = [], e = [], i = [], n = [], r = this.items.length; r--;)
					if (!this.items[r].removed)
					{
						var s = this.items[r].getBBox();
						t.push(s.x), e.push(s.y), i.push(s.x + s.width), n.push(s.y + s.height)
					} return {
					x: t = a.apply(0, t),
					y: e = a.apply(0, e),
					x2: i = o.apply(0, i),
					y2: n = o.apply(0, n),
					width: i - t,
					height: n - e,
					cx: t + (i - t) / 2,
					cy: e + (n - e) / 2
				}
			}, c.clone = function(t)
			{
				t = new l;
				for (var e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].clone());
				return t
			}, c.toString = function()
			{
				return "Snapâ€˜s set"
			}, c.type = "set", t.Set = l, t.set = function()
			{
				var t = new l;
				return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
			}
		}), n.plugin(function(t, i, n, r)
		{
			function s(t)
			{
				var e = t[0];
				switch (e.toLowerCase())
				{
					case "t":
						return [e, 0, 0];
					case "m":
						return [e, 1, 0, 0, 1, 0, 0];
					case "r":
						return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
					case "s":
						return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
				}
			}

			function o(e, i, n)
			{
				e = e || new t.Matrix, i = i || new t.Matrix, e = t.parseTransformString(e.toTransformString()) || [], i = t.parseTransformString(i.toTransformString()) || [];
				for (var r, o, a, l, c = Math.max(e.length, i.length), u = [], f = [], p = 0; c > p; p++)
				{
					if (a = e[p] || s(i[p]), l = i[p] || s(a), a[0] != l[0] || "r" == a[0].toLowerCase() && (a[2] != l[2] || a[3] != l[3]) || "s" == a[0].toLowerCase() && (a[3] != l[3] || a[4] != l[4]))
					{
						e = t._.transform2matrix(e, n()), i = t._.transform2matrix(i, n()), u = [
							["m", e.a, e.b, e.c, e.d, e.e, e.f]
						], f = [
							["m", i.a, i.b, i.c, i.d, i.e, i.f]
						];
						break
					}
					for (u[p] = [], f[p] = [], r = 0, o = Math.max(a.length, l.length); o > r; r++) r in a && (u[p][r] = a[r]), r in l && (f[p][r] = l[r])
				}
				return {
					from: h(u),
					to: h(f),
					f: d(u)
				}
			}

			function a(t)
			{
				return t
			}

			function l(t)
			{
				return function(e)
				{
					return +e.toFixed(3) + t
				}
			}

			function c(t)
			{
				return t.join(" ")
			}

			function u(e)
			{
				return t.rgb(e[0], e[1], e[2], e[3])
			}

			function d(t)
			{
				var e, i, n, r, s, o, a = 0,
					l = [];
				for (e = 0, i = t.length; i > e; e++)
				{
					for (s = "[", o = ['"' + t[e][0] + '"'], n = 1, r = t[e].length; r > n; n++) o[n] = "val[" + a++ + "]";
					s += o + "]", l[e] = s
				}
				return Function("val", "return Snap.path.toString.call([" + l + "])")
			}

			function h(t)
			{
				for (var e = [], i = 0, n = t.length; n > i; i++)
					for (var r = 1, s = t[i].length; s > r; r++) e.push(t[i][r]);
				return e
			}

			function f(t)
			{
				return isFinite(t)
			}
			var p = {},
				m = /[%a-z]+$/i,
				g = String;
			p.stroke = p.fill = "colour", i.prototype.equal = function(t, i)
			{
				return e("snap.util.equal", this, t, i)
					.firstDefined()
			}, e.on("snap.util.equal", function(e, i)
			{
				var n, r, s = g(this.attr(e) || ""),
					v = this;
				if ("colour" == p[e]) return n = t.color(s), r = t.color(i),
				{
					from: [n.r, n.g, n.b, n.opacity],
					to: [r.r, r.g, r.b, r.opacity],
					f: u
				};
				if ("viewBox" == e) return {
					from: n = this.attr(e)
						.vb.split(" ")
						.map(Number),
					to: r = i.split(" ")
						.map(Number),
					f: c
				};
				if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof i && (i = g(i)
					.replace(/\.{3}|\u2026/g, s)), o(s = this.matrix, i = t._.rgTransform.test(i) ? t._.transform2matrix(i, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(i), this.getBBox()), function()
				{
					return v.getBBox(1)
				});
				if ("d" == e || "path" == e) return {
					from: h((n = t.path.toCubic(s, i))[0]),
					to: h(n[1]),
					f: d(n[0])
				};
				if ("points" == e) return {
					from: n = g(s)
						.split(t._.separator),
					to: r = g(i)
						.split(t._.separator),
					f: function(t)
					{
						return t
					}
				};
				if (f(s) && f(i)) return {
					from: parseFloat(s),
					to: parseFloat(i),
					f: a
				};
				var y = s.match(m),
					_ = g(i)
					.match(m);
				return y && function(e, i)
				{
					return !(!t.is(e, "array") || !t.is(i, "array")) && e.toString() == i.toString()
				}(y, _) ?
				{
					from: parseFloat(s),
					to: parseFloat(i),
					f: l(y)
				} :
				{
					from: this.asPX(e),
					to: this.asPX(e, i),
					f: a
				}
			})
		}), n.plugin(function(t, i, n, r)
		{
			for (var s = i.prototype, o = ("createTouch" in r.doc), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {
					mousedown: "touchstart",
					mousemove: "touchmove",
					mouseup: "touchend"
				}, c = function(t, e)
				{
					var i = "y" == t ? "scrollTop" : "scrollLeft",
						n = e && e.node ? e.node.ownerDocument : r.doc;
					return n[i in n.documentElement ? "documentElement" : "body"][i]
				}, u = function()
				{
					return this.originalEvent.preventDefault()
				}, d = function()
				{
					return this.originalEvent.stopPropagation()
				}, h = function(t, e, i, n)
				{
					var r = o && l[e] ? l[e] : e,
						s = function(r)
						{
							var s = c("y", n),
								a = c("x", n);
							if (o && l.hasOwnProperty(e))
								for (var h = 0, f = r.targetTouches && r.targetTouches.length; f > h; h++)
									if (r.targetTouches[h].target == t || t.contains(r.targetTouches[h].target))
									{
										var p = r;
										(r = r.targetTouches[h])
										.originalEvent = p, r.preventDefault = u, r.stopPropagation = d;
										break
									} var m = r.clientX + a,
								g = r.clientY + s;
							return i.call(n, r, m, g)
						};
					return e !== r && t.addEventListener(e, s, !1), t.addEventListener(r, s, !1),
						function()
						{
							return e !== r && t.removeEventListener(e, s, !1), t.removeEventListener(r, s, !1), !0
						}
				}, f = [], p = function(t)
				{
					for (var i, n = t.clientX, r = t.clientY, s = c("y"), a = c("x"), l = f.length; l--;)
					{
						if (i = f[l], o)
						{
							for (var u, d = t.touches && t.touches.length; d--;)
								if ((u = t.touches[d])
									.identifier == i.el._drag.id || i.el.node.contains(u.target))
								{
									n = u.clientX, r = u.clientY, (t.originalEvent ? t.originalEvent : t)
										.preventDefault();
									break
								}
						}
						else t.preventDefault();
						var h = i.el.node;
						h.nextSibling, h.parentNode, h.style.display, n += a, r += s, e("snap.drag.move." + i.el.id, i.move_scope || i.el, n - i.el._drag.x, r - i.el._drag.y, n, r, t)
					}
				}, m = function i(n)
				{
					t.unmousemove(p)
						.unmouseup(i);
					for (var r, s = f.length; s--;)(r = f[s])
						.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n), e.off("snap.drag.*." + r.el.id);
					f = []
				}, g = a.length; g--;) ! function(e)
			{
				t[e] = s[e] = function(i, n)
				{
					if (t.is(i, "function")) this.events = this.events || [], this.events.push(
					{
						name: e,
						f: i,
						unbind: h(this.node || document, e, i, n || this)
					});
					else
						for (var r = 0, s = this.events.length; s > r; r++)
							if (this.events[r].name == e) try
							{
								this.events[r].f.call(this)
							}
					catch (t) {}
					return this
				}, t["un" + e] = s["un" + e] = function(t)
				{
					for (var i = this.events || [], n = i.length; n--;)
						if (i[n].name == e && (i[n].f == t || !t)) return i[n].unbind(), i.splice(n, 1), !i.length && delete this.events, this;
					return this
				}
			}(a[g]);
			s.hover = function(t, e, i, n)
			{
				return this.mouseover(t, i)
					.mouseout(e, n || i)
			}, s.unhover = function(t, e)
			{
				return this.unmouseover(t)
					.unmouseout(e)
			};
			var v = [];
			s.drag = function(i, n, r, s, o, a)
			{
				function l(l, c, u)
				{
					(l.originalEvent || l)
					.preventDefault(), d._drag.x = c, d._drag.y = u, d._drag.id = l.identifier, !f.length && t.mousemove(p)
						.mouseup(m), f.push(
						{
							el: d,
							move_scope: s,
							start_scope: o,
							end_scope: a
						}), n && e.on("snap.drag.start." + d.id, n), i && e.on("snap.drag.move." + d.id, i), r && e.on("snap.drag.end." + d.id, r), e("snap.drag.start." + d.id, o || s || d, c, u, l)
				}

				function c(t, i, n)
				{
					e("snap.draginit." + d.id, d, t, i, n)
				}
				var u, d = this;
				return arguments.length ? (e.on("snap.draginit." + d.id, l), d._drag = {}, v.push(
				{
					el: d,
					start: l,
					init: c
				}), d.mousedown(c), d) : d.drag(function(t, e)
				{
					this.attr(
					{
						transform: u + (u ? "T" : "t") + [t, e]
					})
				}, function()
				{
					u = this.transform()
						.local
				})
			}, s.undrag = function()
			{
				for (var i = v.length; i--;) v[i].el == this && (this.unmousedown(v[i].init), v.splice(i, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
				return !v.length && t.unmousemove(p)
					.unmouseup(m), this
			}
		}), n.plugin(function(t, i, n, r)
		{
			var s = (i.prototype, n.prototype),
				o = /^\s*url\((.+)\)/,
				a = String,
				l = t._.$;
			t.filter = {}, s.filter = function(e)
			{
				var n = this;
				"svg" != n.type && (n = n.paper);
				var r = t.parse(a(e)),
					s = t._.id(),
					o = (n.node.offsetWidth, n.node.offsetHeight, l("filter"));
				return l(o,
				{
					id: s,
					filterUnits: "userSpaceOnUse"
				}), o.appendChild(r.node), n.defs.appendChild(o), new i(o)
			}, e.on("snap.util.getattr.filter", function()
			{
				e.stop();
				var i = l(this.node, "filter");
				if (i)
				{
					var n = a(i)
						.match(o);
					return n && t.select(n[1])
				}
			}), e.on("snap.util.attr.filter", function(n)
			{
				if (n instanceof i && "filter" == n.type)
				{
					e.stop();
					var r = n.node.id;
					r || (l(n.node,
					{
						id: n.id
					}), r = n.id), l(this.node,
					{
						filter: t.url(r)
					})
				}
				n && "none" != n || (e.stop(), this.node.removeAttribute("filter"))
			}), t.filter.blur = function(e, i)
			{
				null == e && (e = 2);
				var n = null == i ? e : [e, i];
				return t.format('<feGaussianBlur stdDeviation="{def}"/>',
				{
					def: n
				})
			}, t.filter.blur.toString = function()
			{
				return this()
			}, t.filter.shadow = function(e, i, n, r, s)
			{
				return null == s && (null == r ? (s = n, n = 4, r = "#000") : (s = r, r = n, n = 4)), null == n && (n = 4), null == s && (s = 1), null == e && (e = 0, i = 2), null == i && (i = e), r = t.color(r), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',
				{
					color: r,
					dx: e,
					dy: i,
					blur: n,
					opacity: s
				})
			}, t.filter.shadow.toString = function()
			{
				return this()
			}, t.filter.grayscale = function(e)
			{
				return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',
				{
					a: .2126 + .7874 * (1 - e),
					b: .7152 - .7152 * (1 - e),
					c: .0722 - .0722 * (1 - e),
					d: .2126 - .2126 * (1 - e),
					e: .7152 + .2848 * (1 - e),
					f: .0722 - .0722 * (1 - e),
					g: .2126 - .2126 * (1 - e),
					h: .0722 + .9278 * (1 - e)
				})
			}, t.filter.grayscale.toString = function()
			{
				return this()
			}, t.filter.sepia = function(e)
			{
				return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',
				{
					a: .393 + .607 * (1 - e),
					b: .769 - .769 * (1 - e),
					c: .189 - .189 * (1 - e),
					d: .349 - .349 * (1 - e),
					e: .686 + .314 * (1 - e),
					f: .168 - .168 * (1 - e),
					g: .272 - .272 * (1 - e),
					h: .534 - .534 * (1 - e),
					i: .131 + .869 * (1 - e)
				})
			}, t.filter.sepia.toString = function()
			{
				return this()
			}, t.filter.saturate = function(e)
			{
				return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>',
				{
					amount: 1 - e
				})
			}, t.filter.saturate.toString = function()
			{
				return this()
			}, t.filter.hueRotate = function(e)
			{
				return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>',
				{
					angle: e
				})
			}, t.filter.hueRotate.toString = function()
			{
				return this()
			}, t.filter.invert = function(e)
			{
				return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',
				{
					amount: e,
					amount2: 1 - e
				})
			}, t.filter.invert.toString = function()
			{
				return this()
			}, t.filter.brightness = function(e)
			{
				return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',
				{
					amount: e
				})
			}, t.filter.brightness.toString = function()
			{
				return this()
			}, t.filter.contrast = function(e)
			{
				return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',
				{
					amount: e,
					amount2: .5 - e / 2
				})
			}, t.filter.contrast.toString = function()
			{
				return this()
			}
		}), n.plugin(function(t, e, i, n, r)
		{
			var s = t._.box,
				o = t.is,
				a = /^[^a-z]*([tbmlrc])/i,
				l = function()
				{
					return "T" + this.dx + "," + this.dy
				};
			e.prototype.getAlign = function(t, e)
			{
				null == e && o(t, "string") && (e = t, t = null);
				var i = (t = t || this.paper)
					.getBBox ? t.getBBox() : s(t),
					n = this.getBBox(),
					r = {};
				switch (e = (e = e && e.match(a)) ? e[1].toLowerCase() : "c")
				{
					case "t":
						r.dx = 0, r.dy = i.y - n.y;
						break;
					case "b":
						r.dx = 0, r.dy = i.y2 - n.y2;
						break;
					case "m":
						r.dx = 0, r.dy = i.cy - n.cy;
						break;
					case "l":
						r.dx = i.x - n.x, r.dy = 0;
						break;
					case "r":
						r.dx = i.x2 - n.x2, r.dy = 0;
						break;
					default:
						r.dx = i.cx - n.cx, r.dy = 0
				}
				return r.toString = l, r
			}, e.prototype.align = function(t, e)
			{
				return this.transform("..." + this.getAlign(t, e))
			}
		}), n.plugin(function(e, i, n, r)
		{
			function s(t)
			{
				t = t.split(/(?=#)/);
				var e = new String(t[5]);
				return e[50] = t[0], e[100] = t[1], e[200] = t[2], e[300] = t[3], e[400] = t[4], e[500] = t[5], e[600] = t[6], e[700] = t[7], e[800] = t[8], e[900] = t[9], t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]), e
			}
			e.mui = {}, e.flat = {}, e.mui.red = s("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"), e.mui.pink = s("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"), e.mui.purple = s("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"), e.mui.deeppurple = s("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"), e.mui.indigo = s("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"), e.mui.blue = s("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"), e.mui.lightblue = s("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"), e.mui.cyan = s("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"), e.mui.teal = s("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"), e.mui.green = s("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"), e.mui.lightgreen = s("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"), e.mui.lime = s("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"), e.mui.yellow = s("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"), e.mui.amber = s("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"), e.mui.orange = s("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"), e.mui.deeporange = s("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"), e.mui.brown = s("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"), e.mui.grey = s("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"), e.mui.bluegrey = s("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"), e.flat.turquoise = "#1abc9c", e.flat.greensea = "#16a085", e.flat.sunflower = "#f1c40f", e.flat.orange = "#f39c12", e.flat.emerland = "#2ecc71", e.flat.nephritis = "#27ae60", e.flat.carrot = "#e67e22", e.flat.pumpkin = "#d35400", e.flat.peterriver = "#3498db", e.flat.belizehole = "#2980b9", e.flat.alizarin = "#e74c3c", e.flat.pomegranate = "#c0392b", e.flat.amethyst = "#9b59b6", e.flat.wisteria = "#8e44ad", e.flat.clouds = "#ecf0f1", e.flat.silver = "#bdc3c7", e.flat.wetasphalt = "#34495e", e.flat.midnightblue = "#2c3e50", e.flat.concrete = "#95a5a6", e.flat.asbestos = "#7f8c8d", e.importMUIColors = function()
			{
				for (var i in e.mui) e.mui.hasOwnProperty(i) && (t[i] = e.mui[i])
			}
		}), n
	});
var _createClass = function()
{
	function t(t, e)
	{
		for (var i, n = 0; n < e.length; n++)(i = e[n])
			.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
	}
	return function(e, i, n)
	{
		return i && t(e.prototype, i), n && t(e, n), e
	}
}();

function _classCallCheck(t, e)
{
	if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
var FixedHeader = function()
{
	function t(e)
	{
		return _classCallCheck(this, t), e || (e = {}), this.parent = e.parent, this.header = e.header, this.offsetTop = e.offsetTop || 0, this.offsetTopResponsive = e.offsetTopResponsive || 0, this.fixedClass = e.fixedClass || "fixed", this.absoluteClass = e.absoluteClass || "absolute", this.$parent = "string" == typeof this.parent ? document.querySelector(this.parent) : this.parent, this.$header = "string" == typeof this.header ? document.querySelector(this.header) : this.header, this.parentOffsetTop = 0, this.$parent ? this.$header ? void this.init() : (console.warn("Fixed header: element", this.header, "is not defined"), !1) : (console.warn("Fixed parent: element", this.parent, "is not defined"), !1)
	}
	return _createClass(t, [
		{
			key: "init",
			value: function()
			{
				this.parentOffsetTop = this.getOffsetTop(this.$parent), this.update()
			}
	},
		{
			key: "setPosition",
			value: function()
			{
				var t = window.pageYOffset,
					e = this.parentOffsetTop,
					i = t - e,
					n = 992 > window.innerWidth ? this.offsetTopResponsive : this.offsetTop;
				if (i >= -n)
				{
					var r = this.$parent.clientHeight + e - n,
						s = this.getComponentStyles(this.$parent);
					this.$header.style.width = "inherit", this.$header.parentNode.style.height = this.$header.clientHeight + "px", t <= r - this.$header.clientHeight ? (this.$header.style.position = "fixed", this.$header.style.top = n + "px", this.$header.classList.add(this.fixedClass), this.$header.classList.remove(this.absoluteClass)) : (this.$header.style.position = "absolute", this.$header.style.top = this.$parent.clientHeight - this.$header.clientHeight + "px", this.$header.classList.remove(this.fixedClass), this.$header.classList.add(this.absoluteClass)), this.$header.parentNode.style.width = s.w - (s.pl + s.pr) + "px"
				}
				else 0 > i && (this.$header.style.position = "relative", this.$header.parentNode.style.width = "100%", this.$header.style.top = "0px", this.$header.classList.remove(this.fixedClass), this.$header.classList.remove(this.absoluteClass))
			}
	},
		{
			key: "update",
			value: function(t)
			{
				t || (t = {});
				var e = t,
					i = e.resize,
					n = e.offsetTop,
					r = e.offsetTopResponsive;
				n && (this.offsetTop = n), n && (this.offsetTopResponsive = r), i ? this.debounce(this.setPosition(), 100) : this.setPosition()
			}
	},
		{
			key: "debounce",
			value: function(t, e, i)
			{
				var n;
				return function()
				{
					var r = this,
						s = arguments,
						o = i && !n;
					clearTimeout(n), n = setTimeout(function()
					{
						n = null, i || t.apply(r, s)
					}, e), o && t.apply(r, s)
				}
			}
	},
		{
			key: "getComponentStyles",
			value: function(t)
			{
				return {
					pl: parseFloat(window.getComputedStyle(t)
						.getPropertyValue("padding-left")),
					pr: parseFloat(window.getComputedStyle(t)
						.getPropertyValue("padding-right")),
					w: parseFloat(window.getComputedStyle(t)
						.getPropertyValue("width"))
				}
			}
	},
		{
			key: "getOffsetTop",
			value: function(t)
			{
				var e = 0;
				if (t.offsetParent)
					do {
						e += t.offsetTop, t = t.offsetParent
					} while (t);
				return 0 > e ? 0 : e
			}
	}]), t
}();
! function(t)
{
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t)
{
	"use strict";
	var e = window.Slick || {};
	(e = function()
	{
		var e = 0;
		return function(i, n)
		{
			var r, s = this;
			s.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: t(i),
					appendDots: t(i),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
					nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function(e, i)
					{
						return t('<button type="button" />')
							.text(i + 1)
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
					fade: !1,
					focusOnSelect: !1,
					focusOnChange: !1,
					infinite: !0,
					initialSlide: 0,
					lazyLoad: "ondemand",
					mobileFirst: !1,
					pauseOnHover: !0,
					pauseOnFocus: !0,
					pauseOnDotsHover: !1,
					respondTo: "window",
					responsive: null,
					rows: 1,
					rtl: !1,
					slide: "",
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 500,
					swipe: !0,
					swipeToSlide: !1,
					touchMove: !0,
					touchThreshold: 5,
					useCSS: !0,
					useTransform: !0,
					variableWidth: !1,
					vertical: !1,
					verticalSwiping: !1,
					waitForAnimate: !0,
					zIndex: 1e3
				}, s.initials = {
					animating: !1,
					dragging: !1,
					autoPlayTimer: null,
					currentDirection: 0,
					currentLeft: null,
					currentSlide: 0,
					direction: 1,
					$dots: null,
					listWidth: null,
					listHeight: null,
					loadIndex: 0,
					$nextArrow: null,
					$prevArrow: null,
					scrolling: !1,
					slideCount: null,
					slideWidth: null,
					$slideTrack: null,
					$slides: null,
					sliding: !1,
					slideOffset: 0,
					swipeLeft: null,
					swiping: !1,
					$list: null,
					touchObject: {},
					transformsEnabled: !1,
					unslicked: !1
				}, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, r = t(i)
				.data("slick") || {}, s.options = t.extend({}, s.defaults, n, r), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = e++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
		}
	}())
	.prototype.activateADA = function()
	{
		this.$slideTrack.find(".slick-active")
			.attr(
			{
				"aria-hidden": "false"
			})
			.find("a, input, button, select")
			.attr(
			{
				tabindex: "0"
			})
	}, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n)
	{
		var r = this;
		if ("boolean" == typeof i) n = i, i = null;
		else if (i < 0 || i >= r.slideCount) return !1;
		r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e)
			.appendTo(r.$slideTrack) : n ? t(e)
			.insertBefore(r.$slides.eq(i)) : t(e)
			.insertAfter(r.$slides.eq(i)) : !0 === n ? t(e)
			.prependTo(r.$slideTrack) : t(e)
			.appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide)
			.detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, i)
			{
				t(i)
					.attr("data-slick-index", e)
			}), r.$slidesCache = r.$slides, r.reinit()
	}, e.prototype.animateHeight = function()
	{
		var t = this;
		if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical)
		{
			var e = t.$slides.eq(t.currentSlide)
				.outerHeight(!0);
			t.$list.animate(
			{
				height: e
			}, t.options.speed)
		}
	}, e.prototype.animateSlide = function(e, i)
	{
		var n = {},
			r = this;
		r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (e = -e), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate(
		{
			left: e
		}, r.options.speed, r.options.easing, i) : r.$slideTrack.animate(
		{
			top: e
		}, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), t(
			{
				animStart: r.currentLeft
			})
			.animate(
			{
				animStart: e
			},
			{
				duration: r.options.speed,
				easing: r.options.easing,
				step: function(t)
				{
					t = Math.ceil(t), !1 === r.options.vertical ? (n[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(n))
				},
				complete: function()
				{
					i && i.call()
				}
			})) : (r.applyTransition(), e = Math.ceil(e), !1 === r.options.vertical ? n[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function()
		{
			r.disableTransition(), i.call()
		}, r.options.speed))
	}, e.prototype.getNavTarget = function()
	{
		var e = this.options.asNavFor;
		return e && null !== e && (e = t(e)
			.not(this.$slider)), e
	}, e.prototype.asNavFor = function(e)
	{
		var i = this.getNavTarget();
		null !== i && "object" === _typeof3(i) && i.each(function()
		{
			var i = t(this)
				.slick("getSlick");
			i.unslicked || i.slideHandler(e, !0)
		})
	}, e.prototype.applyTransition = function(t)
	{
		var e = this,
			i = {};
		!1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t)
			.css(i)
	}, e.prototype.autoPlay = function()
	{
		var t = this;
		t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
	}, e.prototype.autoPlayClear = function()
	{
		this.autoPlayTimer && clearInterval(this.autoPlayTimer)
	}, e.prototype.autoPlayIterator = function()
	{
		var t = this,
			e = t.currentSlide + t.options.slidesToScroll;
		t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
	}, e.prototype.buildArrows = function()
	{
		var e = this;
		!0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow)
			.addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow)
			.addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden")
				.removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden")
				.removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled")
				.attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow)
			.addClass("slick-hidden")
			.attr(
			{
				"aria-disabled": "true",
				tabindex: "-1"
			}))
	}, e.prototype.buildDots = function()
	{
		var e, i, n = this;
		if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow)
		{
			for (n.$slider.addClass("slick-dotted"), i = t("<ul />")
				.addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />")
				.append(n.options.customPaging.call(this, n, e)));
			n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li")
				.first()
				.addClass("slick-active")
		}
	}, e.prototype.buildOut = function()
	{
		var e = this;
		e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)")
			.addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i)
			{
				t(i)
					.attr("data-slick-index", e)
					.data("originalStyling", t(i)
						.attr("style") || "")
			}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>')
			.appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>')
			.parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>')
			.parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider)
			.not("[src]")
			.addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
	}, e.prototype.buildRows = function()
	{
		var t, e, i, n, r, s, o, a = this;
		if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 0)
		{
			for (o = a.options.slidesPerRow * a.options.rows, r = Math.ceil(s.length / o), t = 0; t < r; t++)
			{
				var l = document.createElement("div");
				for (e = 0; e < a.options.rows; e++)
				{
					var c = document.createElement("div");
					for (i = 0; i < a.options.slidesPerRow; i++)
					{
						var u = t * o + (e * a.options.slidesPerRow + i);
						s.get(u) && c.appendChild(s.get(u))
					}
					l.appendChild(c)
				}
				n.appendChild(l)
			}
			a.$slider.empty()
				.append(n), a.$slider.children()
				.children()
				.children()
				.css(
				{
					width: 100 / a.options.slidesPerRow + "%",
					display: "inline-block"
				})
		}
	}, e.prototype.checkResponsive = function(e, i)
	{
		var n, r, s, o = this,
			a = !1,
			l = o.$slider.width(),
			c = window.innerWidth || t(window)
			.width();
		if ("window" === o.respondTo ? s = c : "slider" === o.respondTo ? s = l : "min" === o.respondTo && (s = Math.min(c, l)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive)
		{
			for (n in r = null, o.breakpoints) o.breakpoints.hasOwnProperty(n) && (!1 === o.originalSettings.mobileFirst ? s < o.breakpoints[n] && (r = o.breakpoints[n]) : s > o.breakpoints[n] && (r = o.breakpoints[n]));
			null !== r ? null !== o.activeBreakpoint ? (r !== o.activeBreakpoint || i) && (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[r]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = r) : (o.activeBreakpoint = r, "unslick" === o.breakpointSettings[r] ? o.unslick(r) : (o.options = t.extend({}, o.originalSettings, o.breakpointSettings[r]), !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e)), a = r) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === e && (o.currentSlide = o.options.initialSlide), o.refresh(e), a = r), e || !1 === a || o.$slider.trigger("breakpoint", [o, a])
		}
	}, e.prototype.changeSlide = function(e, i)
	{
		var n, r, s = this,
			o = t(e.currentTarget);
		switch (o.is("a") && e.preventDefault(), o.is("li") || (o = o.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message)
		{
			case "previous":
				r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
				break;
			case "next":
				r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
				break;
			case "index":
				var a = 0 === e.data.index ? 0 : e.data.index || o.index() * s.options.slidesToScroll;
				s.slideHandler(s.checkNavigable(a), !1, i), o.children()
					.trigger("focus");
				break;
			default:
				return
		}
	}, e.prototype.checkNavigable = function(t)
	{
		var e, i;
		if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
		else
			for (var n in e)
			{
				if (t < e[n])
				{
					t = i;
					break
				}
				i = e[n]
			}
		return t
	}, e.prototype.cleanUpEvents = function()
	{
		var e = this;
		e.options.dots && null !== e.$dots && (t("li", e.$dots)
				.off("click.slick", e.changeSlide)
				.off("mouseenter.slick", t.proxy(e.interrupt, e, !0))
				.off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document)
			.off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack)
			.children()
			.off("click.slick", e.selectHandler), t(window)
			.off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window)
			.off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack)
			.off("dragstart", e.preventDefault), t(window)
			.off("load.slick.slick-" + e.instanceUid, e.setPosition)
	}, e.prototype.cleanUpSlideEvents = function()
	{
		var e = this;
		e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
	}, e.prototype.cleanUpRows = function()
	{
		var t, e = this;
		e.options.rows > 0 && ((t = e.$slides.children()
				.children())
			.removeAttr("style"), e.$slider.empty()
			.append(t))
	}, e.prototype.clickHandler = function(t)
	{
		!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
	}, e.prototype.destroy = function(e)
	{
		var i = this;
		i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider)
			.detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden")
				.removeAttr("aria-hidden aria-disabled tabindex")
				.css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden")
				.removeAttr("aria-hidden aria-disabled tabindex")
				.css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current")
				.removeAttr("aria-hidden")
				.removeAttr("data-slick-index")
				.each(function()
				{
					t(this)
						.attr("style", t(this)
							.data("originalStyling"))
				}), i.$slideTrack.children(this.options.slide)
				.detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
	}, e.prototype.disableTransition = function(t)
	{
		var e = this,
			i = {};
		i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t)
			.css(i)
	}, e.prototype.fadeSlide = function(t, e)
	{
		var i = this;
		!1 === i.cssTransitions ? (i.$slides.eq(t)
			.css(
			{
				zIndex: i.options.zIndex
			}), i.$slides.eq(t)
			.animate(
			{
				opacity: 1
			}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t)
			.css(
			{
				opacity: 1,
				zIndex: i.options.zIndex
			}), e && setTimeout(function()
			{
				i.disableTransition(t), e.call()
			}, i.options.speed))
	}, e.prototype.fadeSlideOut = function(t)
	{
		var e = this;
		!1 === e.cssTransitions ? e.$slides.eq(t)
			.animate(
			{
				opacity: 0,
				zIndex: e.options.zIndex - 2
			}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t)
				.css(
				{
					opacity: 0,
					zIndex: e.options.zIndex - 2
				}))
	}, e.prototype.filterSlides = e.prototype.slickFilter = function(t)
	{
		var e = this;
		null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide)
			.detach(), e.$slidesCache.filter(t)
			.appendTo(e.$slideTrack), e.reinit())
	}, e.prototype.focusHandler = function()
	{
		var e = this;
		e.$slider.off("focus.slick blur.slick")
			.on("focus.slick blur.slick", "*", function(i)
			{
				i.stopImmediatePropagation();
				var n = t(this);
				setTimeout(function()
				{
					e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
				}, 0)
			})
	}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function()
	{
		return this.currentSlide
	}, e.prototype.getDotCount = function()
	{
		var t = this,
			e = 0,
			i = 0,
			n = 0;
		if (!0 === t.options.infinite)
			if (t.slideCount <= t.options.slidesToShow) ++n;
			else
				for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		else if (!0 === t.options.centerMode) n = t.slideCount;
		else if (t.options.asNavFor)
			for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
		else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
		return n - 1
	}, e.prototype.getLeft = function(t)
	{
		var e, i, n, r, s = this,
			o = 0;
		return s.slideOffset = 0, i = s.$slides.first()
			.outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, r = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? r = -1.5 : 1 === s.options.slidesToShow && (r = -2)), o = i * s.options.slidesToShow * r), s.slideCount % s.options.slidesToScroll != 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, o = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, o = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, o = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, o = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + o, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide")
				.eq(t) : s.$slideTrack.children(".slick-slide")
				.eq(t + s.options.slidesToShow), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide")
					.eq(t) : s.$slideTrack.children(".slick-slide")
					.eq(t + s.options.slidesToShow + 1), e = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
	}, e.prototype.getOption = e.prototype.slickGetOption = function(t)
	{
		return this.options[t]
	}, e.prototype.getNavigableIndexes = function()
	{
		var t, e = this,
			i = 0,
			n = 0,
			r = [];
		for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
		return r
	}, e.prototype.getSlick = function()
	{
		return this
	}, e.prototype.getSlideCount = function()
	{
		var e, i, n = this;
		return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide")
			.each(function(r, s)
			{
				if (s.offsetLeft - i + t(s)
					.outerWidth() / 2 > -1 * n.swipeLeft) return e = s, !1
			}), Math.abs(t(e)
				.attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
	}, e.prototype.goTo = e.prototype.slickGoTo = function(t, e)
	{
		this.changeSlide(
		{
			data:
			{
				message: "index",
				index: parseInt(t)
			}
		}, e)
	}, e.prototype.init = function(e)
	{
		var i = this;
		t(i.$slider)
			.hasClass("slick-initialized") || (t(i.$slider)
				.addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
	}, e.prototype.initADA = function()
	{
		var e = this,
			i = Math.ceil(e.slideCount / e.options.slidesToShow),
			n = e.getNavigableIndexes()
			.filter(function(t)
			{
				return t >= 0 && t < e.slideCount
			});
		e.$slides.add(e.$slideTrack.find(".slick-cloned"))
			.attr(
			{
				"aria-hidden": "true",
				tabindex: "-1"
			})
			.find("a, input, button, select")
			.attr(
			{
				tabindex: "-1"
			}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned"))
				.each(function(i)
				{
					var r = n.indexOf(i);
					if (t(this)
						.attr(
						{
							role: "tabpanel",
							id: "slick-slide" + e.instanceUid + i,
							tabindex: -1
						}), -1 !== r)
					{
						var s = "slick-slide-control" + e.instanceUid + r;
						t("#" + s)
							.length && t(this)
							.attr(
							{
								"aria-describedby": s
							})
					}
				}), e.$dots.attr("role", "tablist")
				.find("li")
				.each(function(r)
				{
					var s = n[r];
					t(this)
						.attr(
						{
							role: "presentation"
						}), t(this)
						.find("button")
						.first()
						.attr(
						{
							role: "tab",
							id: "slick-slide-control" + e.instanceUid + r,
							"aria-controls": "slick-slide" + e.instanceUid + s,
							"aria-label": r + 1 + " of " + i,
							"aria-selected": null,
							tabindex: "-1"
						})
				})
				.eq(e.currentSlide)
				.find("button")
				.attr(
				{
					"aria-selected": "true",
					tabindex: "0"
				})
				.end());
		for (var r = e.currentSlide, s = r + e.options.slidesToShow; r < s; r++) e.options.focusOnChange ? e.$slides.eq(r)
			.attr(
			{
				tabindex: "0"
			}) : e.$slides.eq(r)
			.removeAttr("tabindex");
		e.activateADA()
	}, e.prototype.initArrowEvents = function()
	{
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick")
			.on("click.slick",
			{
				message: "previous"
			}, t.changeSlide), t.$nextArrow.off("click.slick")
			.on("click.slick",
			{
				message: "next"
			}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
	}, e.prototype.initDotEvents = function()
	{
		var e = this;
		!0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots)
				.on("click.slick",
				{
					message: "index"
				}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots)
			.on("mouseenter.slick", t.proxy(e.interrupt, e, !0))
			.on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
	}, e.prototype.initSlideEvents = function()
	{
		var e = this;
		e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
	}, e.prototype.initializeEvents = function()
	{
		var e = this;
		e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick",
			{
				action: "start"
			}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick",
			{
				action: "move"
			}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick",
			{
				action: "end"
			}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick",
			{
				action: "end"
			}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document)
			.on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack)
			.children()
			.on("click.slick", e.selectHandler), t(window)
			.on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window)
			.on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack)
			.on("dragstart", e.preventDefault), t(window)
			.on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
	}, e.prototype.initUI = function()
	{
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
	}, e.prototype.keyHandler = function(t)
	{
		var e = this;
		t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide(
		{
			data:
			{
				message: !0 === e.options.rtl ? "next" : "previous"
			}
		}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide(
		{
			data:
			{
				message: !0 === e.options.rtl ? "previous" : "next"
			}
		}))
	}, e.prototype.lazyLoad = function()
	{
		var e, i, n, r = this;

		function s(e)
		{
			t("img[data-lazy]", e)
				.each(function()
				{
					var e = t(this),
						i = t(this)
						.attr("data-lazy"),
						n = t(this)
						.attr("data-srcset"),
						s = t(this)
						.attr("data-sizes") || r.$slider.attr("data-sizes"),
						o = document.createElement("img");
					o.onload = function()
					{
						e.animate(
						{
							opacity: 0
						}, 100, function()
						{
							n && (e.attr("srcset", n), s && e.attr("sizes", s)), e.attr("src", i)
								.animate(
								{
									opacity: 1
								}, 200, function()
								{
									e.removeAttr("data-lazy data-srcset data-sizes")
										.removeClass("slick-loading")
								}), r.$slider.trigger("lazyLoaded", [r, e, i])
						})
					}, o.onerror = function()
					{
						e.removeAttr("data-lazy")
							.removeClass("slick-loading")
							.addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
					}, o.src = i
				})
		}
		if (!0 === r.options.centerMode ? !0 === r.options.infinite ? n = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, n <= r.slideCount && n++)), e = r.$slider.find(".slick-slide")
			.slice(i, n), "anticipated" === r.options.lazyLoad)
			for (var o = i - 1, a = n, l = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) o < 0 && (o = r.slideCount - 1), e = (e = e.add(l.eq(o)))
				.add(l.eq(a)), o--, a++;
		s(e), r.slideCount <= r.options.slidesToShow ? s(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? s(r.$slider.find(".slick-cloned")
			.slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && s(r.$slider.find(".slick-cloned")
			.slice(-1 * r.options.slidesToShow))
	}, e.prototype.loadSlider = function()
	{
		var t = this;
		t.setPosition(), t.$slideTrack.css(
		{
			opacity: 1
		}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
	}, e.prototype.next = e.prototype.slickNext = function()
	{
		this.changeSlide(
		{
			data:
			{
				message: "next"
			}
		})
	}, e.prototype.orientationChange = function()
	{
		this.checkResponsive(), this.setPosition()
	}, e.prototype.pause = e.prototype.slickPause = function()
	{
		this.autoPlayClear(), this.paused = !0
	}, e.prototype.play = e.prototype.slickPlay = function()
	{
		var t = this;
		t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
	}, e.prototype.postSlide = function(e)
	{
		var i = this;
		i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide))
			.attr("tabindex", 0)
			.focus()))
	}, e.prototype.prev = e.prototype.slickPrev = function()
	{
		this.changeSlide(
		{
			data:
			{
				message: "previous"
			}
		})
	}, e.prototype.preventDefault = function(t)
	{
		t.preventDefault()
	}, e.prototype.progressiveLazyLoad = function(e)
	{
		e = e || 1;
		var i, n, r, s, o, a = this,
			l = t("img[data-lazy]", a.$slider);
		l.length ? (i = l.first(), n = i.attr("data-lazy"), r = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (o = document.createElement("img"))
			.onload = function()
			{
				r && (i.attr("srcset", r), s && i.attr("sizes", s)), i.attr("src", n)
					.removeAttr("data-lazy data-srcset data-sizes")
					.removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
			}, o.onerror = function()
			{
				e < 3 ? setTimeout(function()
				{
					a.progressiveLazyLoad(e + 1)
				}, 500) : (i.removeAttr("data-lazy")
					.removeClass("slick-loading")
					.addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
			}, o.src = n) : a.$slider.trigger("allImagesLoaded", [a])
	}, e.prototype.refresh = function(e)
	{
		var i, n, r = this;
		n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), t.extend(r, r.initials,
		{
			currentSlide: i
		}), r.init(), e || r.changeSlide(
		{
			data:
			{
				message: "index",
				index: i
			}
		}, !1)
	}, e.prototype.registerBreakpoints = function()
	{
		var e, i, n, r = this,
			s = r.options.responsive || null;
		if ("array" === t.type(s) && s.length)
		{
			for (e in r.respondTo = r.options.respondTo || "window", s)
				if (n = r.breakpoints.length - 1, s.hasOwnProperty(e))
				{
					for (i = s[e].breakpoint; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
					r.breakpoints.push(i), r.breakpointSettings[i] = s[e].settings
				} r.breakpoints.sort(function(t, e)
			{
				return r.options.mobileFirst ? t - e : e - t
			})
		}
	}, e.prototype.reinit = function()
	{
		var e = this;
		e.$slides = e.$slideTrack.children(e.options.slide)
			.addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack)
			.children()
			.on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
	}, e.prototype.resize = function()
	{
		var e = this;
		t(window)
			.width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function()
			{
				e.windowWidth = t(window)
					.width(), e.checkResponsive(), e.unslicked || e.setPosition()
			}, 50))
	}, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i)
	{
		var n = this;
		if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
		n.unload(), !0 === i ? n.$slideTrack.children()
			.remove() : n.$slideTrack.children(this.options.slide)
			.eq(t)
			.remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide)
			.detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
	}, e.prototype.setCSS = function(t)
	{
		var e, i, n = this,
			r = {};
		!0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {}, !1 === n.cssTransitions ? (r[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(r)))
	}, e.prototype.setDimensions = function()
	{
		var t = this;
		!1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css(
		{
			padding: "0px " + t.options.centerPadding
		}) : (t.$list.height(t.$slides.first()
			.outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css(
		{
			padding: t.options.centerPadding + " 0px"
		})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide")
			.length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first()
			.outerHeight(!0) * t.$slideTrack.children(".slick-slide")
			.length)));
		var e = t.$slides.first()
			.outerWidth(!0) - t.$slides.first()
			.width();
		!1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide")
			.width(t.slideWidth - e)
	}, e.prototype.setFade = function()
	{
		var e, i = this;
		i.$slides.each(function(n, r)
			{
				e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(r)
					.css(
					{
						position: "relative",
						right: e,
						top: 0,
						zIndex: i.options.zIndex - 2,
						opacity: 0
					}) : t(r)
					.css(
					{
						position: "relative",
						left: e,
						top: 0,
						zIndex: i.options.zIndex - 2,
						opacity: 0
					})
			}), i.$slides.eq(i.currentSlide)
			.css(
			{
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
	}, e.prototype.setHeight = function()
	{
		var t = this;
		if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical)
		{
			var e = t.$slides.eq(t.currentSlide)
				.outerHeight(!0);
			t.$list.css("height", e)
		}
	}, e.prototype.setOption = e.prototype.slickSetOption = function()
	{
		var e, i, n, r, s, o = this,
			a = !1;
		if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], r = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) o.options[n] = r;
		else if ("multiple" === s) t.each(n, function(t, e)
		{
			o.options[t] = e
		});
		else if ("responsive" === s)
			for (i in r)
				if ("array" !== t.type(o.options.responsive)) o.options.responsive = [r[i]];
				else
				{
					for (e = o.options.responsive.length - 1; e >= 0;) o.options.responsive[e].breakpoint === r[i].breakpoint && o.options.responsive.splice(e, 1), e--;
					o.options.responsive.push(r[i])
				} a && (o.unload(), o.reinit())
	}, e.prototype.setPosition = function()
	{
		var t = this;
		t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
	}, e.prototype.setProps = function()
	{
		var t = this,
			e = document.body.style;
		t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
	}, e.prototype.setSlideClasses = function(t)
	{
		var e, i, n, r, s = this;
		if (i = s.$slider.find(".slick-slide")
			.removeClass("slick-active slick-center slick-current")
			.attr("aria-hidden", "true"), s.$slides.eq(t)
			.addClass("slick-current"), !0 === s.options.centerMode)
		{
			var o = s.options.slidesToShow % 2 == 0 ? 1 : 0;
			e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e + o, t + e + 1)
					.addClass("slick-active")
					.attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1 + o, n + e + 2)
						.addClass("slick-active")
						.attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow)
					.addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow)
					.addClass("slick-center")), s.$slides.eq(t)
				.addClass("slick-center")
		}
		else t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow)
			.addClass("slick-active")
			.attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active")
			.attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - r), n + r)
				.addClass("slick-active")
				.attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow)
				.addClass("slick-active")
				.attr("aria-hidden", "false"));
		"ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
	}, e.prototype.setupInfinite = function()
	{
		var e, i, n, r = this;
		if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (i = null, r.slideCount > r.options.slidesToShow))
		{
			for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - n; e -= 1) i = e - 1, t(r.$slides[i])
				.clone(!0)
				.attr("id", "")
				.attr("data-slick-index", i - r.slideCount)
				.prependTo(r.$slideTrack)
				.addClass("slick-cloned");
			for (e = 0; e < n + r.slideCount; e += 1) i = e, t(r.$slides[i])
				.clone(!0)
				.attr("id", "")
				.attr("data-slick-index", i + r.slideCount)
				.appendTo(r.$slideTrack)
				.addClass("slick-cloned");
			r.$slideTrack.find(".slick-cloned")
				.find("[id]")
				.each(function()
				{
					t(this)
						.attr("id", "")
				})
		}
	}, e.prototype.interrupt = function(t)
	{
		t || this.autoPlay(), this.interrupted = t
	}, e.prototype.selectHandler = function(e)
	{
		var i = this,
			n = t(e.target)
			.is(".slick-slide") ? t(e.target) : t(e.target)
			.parents(".slick-slide"),
			r = parseInt(n.attr("data-slick-index"));
		r || (r = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(r, !1, !0) : i.slideHandler(r)
	}, e.prototype.slideHandler = function(t, e, i)
	{
		var n, r, s, o, a, l, c = this;
		if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
			if (!1 === e && c.asNavFor(t), n = t, a = c.getLeft(n), o = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? o : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(o, function()
			{
				c.postSlide(n)
			}) : c.postSlide(n));
			else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(o, function()
		{
			c.postSlide(n)
		}) : c.postSlide(n));
		else
		{
			if (c.options.autoplay && clearInterval(c.autoPlayTimer), r = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), s = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget())
					.slick("getSlick"))
				.slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(r, function()
			{
				c.postSlide(r)
			})) : c.postSlide(r), void c.animateHeight();
			!0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, function()
			{
				c.postSlide(r)
			}) : c.postSlide(r)
		}
	}, e.prototype.startLoad = function()
	{
		var t = this;
		!0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
	}, e.prototype.swipeDirection = function()
	{
		var t, e, i, n, r = this;
		return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && n >= 315 ? !1 === r.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
	}, e.prototype.swipeEnd = function(t)
	{
		var e, i, n = this;
		if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
		if (n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
		if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe)
		{
			switch (i = n.swipeDirection())
			{
				case "left":
				case "down":
					e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
					break;
				case "right":
				case "up":
					e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
			}
			"vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
		}
		else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
	}, e.prototype.swipeHandler = function(t)
	{
		var e = this;
		if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action)
		{
			case "start":
				e.swipeStart(t);
				break;
			case "move":
				e.swipeMove(t);
				break;
			case "end":
				e.swipeEnd(t)
		}
	}, e.prototype.swipeMove = function(t)
	{
		var e, i, n, r, s, o, a = this;
		return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), o = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && o > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = o), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * r : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
	}, e.prototype.swipeStart = function(t)
	{
		var e, i = this;
		if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
		void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
	}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function()
	{
		var t = this;
		null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide)
			.detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
	}, e.prototype.unload = function()
	{
		var e = this;
		t(".slick-cloned", e.$slider)
			.remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current")
			.attr("aria-hidden", "true")
			.css("width", "")
	}, e.prototype.unslick = function(t)
	{
		var e = this;
		e.$slider.trigger("unslick", [e, t]), e.destroy()
	}, e.prototype.updateArrows = function()
	{
		var t = this;
		Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled")
			.attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled")
			.attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled")
				.attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled")
				.attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled")
				.attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled")
				.attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled")
				.attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled")
				.attr("aria-disabled", "false")))
	}, e.prototype.updateDots = function()
	{
		var t = this;
		null !== t.$dots && (t.$dots.find("li")
			.removeClass("slick-active")
			.end(), t.$dots.find("li")
			.eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
			.addClass("slick-active"))
	}, e.prototype.visibility = function()
	{
		var t = this;
		t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
	}, t.fn.slick = function()
	{
		var t, i, n = this,
			r = arguments[0],
			s = Array.prototype.slice.call(arguments, 1),
			o = n.length;
		for (t = 0; t < o; t++)
			if ("object" == _typeof3(r) || void 0 === r ? n[t].slick = new e(n[t], r) : i = n[t].slick[r].apply(n[t].slick, s), void 0 !== i) return i;
		return n
	}
}),
function()
{
	"use strict";
	$.validator.setDefaults(
	{
		errorClass: "a-input__input--error"
	}), $.validator.addMethod("valueNotEquals", function(t, e, i)
	{
		return i !== t
	}, "Please select question");
	var t = {
			input: ".js-input",
			validFields: ".js-valid",
			select: ".js-select",
			init: function()
			{
				$(this.validFields)
					.addClass("valid"), $(this.input)
					.each(function(t, e)
					{
						var i = $(e)
							.data("format");
						$(e)
							.val() && $(e)
							.addClass("valid"), i && $(e)
							.mask(i)
					}), $(this.select)
					.niceSelect()
			}
		},
		e = function()
		{
			$('a[href^="#"]:not([href="#"])')
				.click(function(t)
				{
					t.preventDefault(), $("html, body")
						.animate(
						{
							scrollTop: $($(this)
									.attr("href"))
								.offset()
								.top
						}, 3e3)
				})
		},
		i = {
			dom:
			{
				progressBar: ".js-progress-bar",
				progressLine: ".js-progress-line",
				progressDots: ".js-progress-dots",
				progressActiveDot: ".m-progress-bar__dot--active",
				progressPercent: ".js-progress-percent",
				progressActiveDotMod: "m-progress-bar__dot--active",
				progressPreviousDotMod: "m-progress-bar__dot--previous"
			},
			timeline: new TimelineLite,
			percentage:
			{
				percent: 0
			},
			init: function()
			{
				var t = this,
					e = this.checkState();
				$(window)
					.resize(function()
					{
						t.onResize()
					}), !1 !== e && (this.timeline.add("progress", 0), this.timeline.to(this.percentage, 2,
						{
							percent: this.percentage.percent + this.getPercentage(),
							onUpdate: function()
							{
								$(t.dom.progressPercent)
									.text(parseInt(t.percentage.percent))
							}
						})
						.to(this.dom.progressLine, 2,
						{
							width: this.getLineWidth(),
							onComplete: function()
							{
								$(t.dom.progressActiveDot)
									.removeClass(t.dom.progressActiveDotMod)
									.addClass(t.dom.progressPreviousDotMod)
									.next()
									.addClass(t.dom.progressActiveDotMod), t.animated = !0
							}
						}, "progress"))
			},
			onResize: function()
			{
				$(this.dom.progressLine)
					.css("width", $(this.dom.progressActiveDot)
						.position()
						.left)
			},
			checkState: function()
			{
				var t = $(this.dom.progressBar)
					.data("step"),
					e = $(this.dom.progressDots + " > *")
					.last()
					.index();
				return t > e + 1 && (console.warn("Current data-step grether than total dots elements. Current step changed to max step."), t = e + 1), 1 === t ? (this.setStateByIndex(0), !1) : (this.setStateByIndex(t - 2), this.setPercentage(), !0)
			},
			setStateByIndex: function(t)
			{
				$(this.dom.progressDots + " > *")
					.eq(t)
					.addClass(this.dom.progressActiveDotMod)
					.next()
					.prev()
					.prevAll()
					.css("transition", "none")
					.addClass(this.dom.progressPreviousDotMod), $(this.dom.progressLine)
					.css("width", $(this.dom.progressActiveDot)
						.position()
						.left + "px")
			},
			setPercentage: function()
			{
				var t = this.getPercentage() * $(this.dom.progressActiveDot)
					.index();
				this.percentage.percent = t, $(this.dom.progressPercent)
					.text(t)
			},
			getPercentage: function()
			{
				return 100 / $(this.dom.progressDots + " > *")
					.length
			},
			getLineWidth: function()
			{
				return $(this.dom.progressActiveDot)
					.position()
					.left + ($(this.dom.progressDots + " > *")
						.eq(1)
						.position()
						.left - $(this.dom.progressDots + " > *")
						.eq(0)
						.position()
						.left) + 10
			}
		},
		n = {
			dom:
			{
				buttonGender: ".js-button-gender",
				buttonCircles: ".js-button-circle",
				buttonCircleMain: ".js-button-circle-main"
			},
			tweenline: new TimelineLite,
			init: function()
			{
				var t = this;
				this.tweenline.staggerTo($(this.dom.buttonCircles), 1,
					{
						scale: .95,
						opacity: .05,
						repeat: -1,
						ease: Sine.easeInOut,
						yoyo: !0
					}, .3), $(this.dom.buttonGender)
					.hover(function()
					{
						t.tweenline.pause(), TweenMax.to($(this)
							.find(t.dom.buttonCircleMain), .35,
							{
								opacity: 1
							})
					}, function()
					{
						t.tweenline.play(), TweenMax.to($(this)
							.find(t.dom.buttonCircleMain), .35,
							{
								opacity: .9
							})
					})
			}
		},
		r = {
			dom:
			{
				selectGender: ".js-select-gender",
				selectGenderButton: ".js-select-gender-button"
			},
			init: function()
			{
				var t = this;
				$(this.dom.selectGenderButton)
					.on("click", function(e)
					{
						"men" === this.value && $(t.dom.selectGender)
							.attr("action", $(t.dom.selectGender)
								.prop("action") + "/men")
					})
			}
		},
		s = {
			dom:
			{
				modal: ".js-modal",
				modalContent: ".js-modal-content > *",
				modalCloseTrigger: ".js-modal-close"
			},
			init: function()
			{
				var t = this,
					e = this;
				$("[data-modal-trigger]")
					.on("click", function(t)
					{
						t.stopPropagation(), t.preventDefault();
						var i = $(this)
							.data("modal-trigger");
						$("body")
							.css("overflow", "hidden"), e.openModal(i)
					}), $(this.dom.modalCloseTrigger)
					.on("click", function(e)
					{
						e.preventDefault(), e.stopPropagation(), t.closeModals()
					}), $(this.dom.modal)
					.on("click", function()
					{
						t.closeModals()
					}), $(this.dom.modalContent)
					.on("click", function(t)
					{
						t.preventDefault(), t.stopPropagation()
					})
			},
			openModal: function(t)
			{
				$(this.dom.modal + '[data-modal="' + t + '"]')
					.fadeIn("slow")
			},
			closeModals: function()
			{
				$(this.dom.modal)
					.fadeOut("fast"), $("body")
					.css("overflow", "auto")
			}
		},
		o = 480,
		a = 1270,
		l = {
			modal: ".js-meal-modal",
			container: ".js-meal-modal-container",
			content: ".js-meal-modal-content",
			image: ".js-modal-image",
			title: ".js-modal-title",
			time: ".js-modal-time",
			relativeUserCalories: ".js-modal-relative-user-calories",
			close: ".js-modal-close",
			products: ".js-modal-products",
			preparations: ".js-modal-preparations",
			init: function()
			{
				var t = this;
				$(this.close)
					.on("click", function()
					{
						return t.closeModal()
					}), $(this.modal)
					.on("click", function()
					{
						return t.closeModal()
					}), $(this.content)
					.on("click", function(t)
					{
						return t.stopPropagation()
					})
			},
			openModal: function(t)
			{
				var e = this;
				$("body")
					.css("overflow", "hidden"), t.image ? $(this.image)
					.css("background-image", t.image) : $(this.image)
					.css("background-image", 'url("' + $(this.image)
						.data("default-image-url") + '")'), $(this.title)
					.text(t.title), $(this.time)
					.text(t.time), $(this.relativeUserCalories)
					.text(t.relativeUserCalories);
				var i = $(this.relativeUserCalories),
					n = i.closest(".o-meal-modal__timer");
				t.relativeUserCalories.indexOf("-") > -1 ? (n.show(), i.text(t.relativeUserCalories)) : n.hide(), $(this.products)
					.empty(), t.products.forEach(function(t)
					{
						$(e.products)
							.append(e.addProduct(t))
					}), $(this.preparations)
					.empty()
					.append(t.preparations), $(this.modal)
					.addClass("o-meal-modal--opened")
			},
			closeModal: function()
			{
				$("body")
					.css("overflow", "auto"), $(this.modal)
					.removeClass("o-meal-modal--opened")
			},
			addProduct: function(t)
			{
				return '\n      <div class="o-meal-modal__product">\n        <div class="o-meal-modal__product-count">\n          <span>' + t.count + " </span>\n          <span>" + (t.unit ? t.unit : "&nbsp;") + '</span>\n        </div>\n        <div class="o-meal-modal__product-name ' + (t.nameHighlighted ? "hl" : "") + '">' + t.name + "</div>\n      </div>\n    "
			}
		},
		c = {
			col: ".js-meal-col",
			row: ".js-meal-row",
			body: ".js-meal-body",
			items: ".js-meal-items",
			item: ".js-meal-item",
			overlay: ".js-meal-overlay",
			day: ".js-meal-day",
			head: ".js-meal-head",
			init: function()
			{
				var t = this;

				function e()
				{
					var t = {
						image: $(this)
							.find(".js-item-image")
							.css("background-image"),
						title: $(this)
							.find(".js-item-title")
							.text(),
						time: $(this)
							.find(".js-item-time")
							.text(),
						relativeUserCalories: $(this)
							.find(".js-item-relative-user-calories")
							.text(),
						products: [],
						preparations: $(this)
							.find(".js-item-preparations")
							.html()
					};
					$(this)
						.find(".js-item-products")
						.children()
						.each(function(e, i)
						{
							var n = $(i)
								.find(".js-item-product-count")
								.text(),
								r = $(i)
								.find(".js-item-product-unit")
								.text(),
								s = $(i)
								.find(".js-item-product-name")
								.text(),
								o = $(i)
								.find(".js-item-product-name")
								.hasClass("hl");
							t.products.push(
							{
								count: n,
								unit: r,
								name: s,
								nameHighlighted: o
							})
						}), l.openModal(t)
				}
				l.init();
				var i = this;
				$(document)
					.on("mouseleave", this.body, function()
					{
						i.mouseLeaveBody(i)
					}), $(document)
					.on("mouseenter", this.row, function(t)
					{
						i.mouseEnterRow(i, this)
					}), $(document)
					.on("mouseleave", this.row, function(t)
					{
						i.mouseLeaveBody(i, this)
					}), $(document)
					.on("mouseenter", this.item, function(t)
					{
						t.preventDefault(), i.mouseEnterItem(i, this)
					}), $(document)
					.on("mouseleave", this.item, function(t)
					{
						t.preventDefault(), i.mouseLeaveItem(i, this)
					}), mediaCheck(
					{
						media: "(max-width: " + a + "px)",
						entry: function()
						{
							$(t.body)
								.off("click", t.item, e)
						},
						exit: function()
						{
							$(t.body)
								.on("click", t.item, e)
						}
					})
			},
			mouseLeaveBody: function(t)
			{
				$(t.item)
					.removeClass("m-meal-item--disabled")
					.removeClass("m-meal-item--hovered"), $(t.day)
					.removeClass("a-meal-day--hovered"), $(t.head)
					.removeClass("a-meal-food--active")
			},
			mouseEnterItem: function(t, e)
			{
				var i = $(e)
					.data("col");
				$(t.head)
					.removeClass("a-meal-food--active"), $(t.head + '[data-col="' + i + '"]')
					.addClass("a-meal-food--active"), $(e)
					.addClass("m-meal-item--hovered")
			},
			mouseLeaveItem: function(t, e)
			{
				$(e)
					.removeClass("m-meal-item--hovered")
			},
			mouseEnterRow: function(t, e)
			{
				var i = $(e)
					.find(t.day),
					n = $(e)
					.find(t.items)
					.children(t.col)
					.children(t.item);
				i.addClass("a-meal-day--hovered"), $(t.item)
					.addClass("m-meal-item--disabled"), n.removeClass("m-meal-item--disabled")
			}
		},
		u = {
			day: ".js-meal-day",
			items: ".js-meal-items",
			item: ".js-meal-item",
			details: ".js-meal-details",
			init: function()
			{
				var t = this,
					e = this;

				function i()
				{
					$(this)
						.find(e.details)
						.stop()
						.slideToggle(), $(this)
						.toggleClass("m-meal-item--active")
						.css("opacity", "1"), $(e.item)
						.not(this)
						.removeClass("m-meal-item--active")
						.css("opacity", "0.5")
						.find(e.details)
						.slideUp(), Array.from(document.querySelectorAll(e.item))
						.some(function(t)
						{
							return $(t)
								.hasClass("m-meal-item--active")
						}) || $(e.item)
						.each(function(t, e)
						{
							return e.style.opacity = 1
						})
				}

				function n()
				{
					$(".js-meal-items")
						.stop()
						.slideUp(400, function()
						{
							$(this)
								.css("height", "")
						}), $(this)
						.parent()
						.siblings(e.items)
						.stop()
						.slideToggle(400, function()
						{
							$(this)
								.css("height", "")
						});
					var t = $(this)
						.hasClass("a-meal-day--active");
					$(".js-meal-day")
						.removeClass("a-meal-day--active"), $(this)
						.toggleClass("a-meal-day--active", !t)
				}
				$(this.day)
					.removeClass("a-meal-day--active"), $(this.item)
					.removeClass("m-meal-item--active"), $(this.items)
					.css("display", "none"), mediaCheck(
					{
						media: "(max-width: " + a + "px)",
						entry: function()
						{
							$(t.day)
								.removeClass("a-meal-day--active"), $(t.item)
								.removeClass("m-meal-item--active"), $(t.items)
								.css("display", "none"), $(document)
								.off("click", t.item, i), $(document)
								.off("click", t.day, n), $(document)
								.on("click", t.item, i), $(document)
								.on("click", t.day, n), $(document)
								.on("click", t.details, function(t)
								{
									return t.stopPropagation()
								})
						},
						exit: function()
						{
							$(document)
								.off("click", t.item, i), $(document)
								.off("click", t.day, n), $(t.items)
								.css("display", "flex"), $(t.details)
								.css("display", "none")
						}
					})
			}
		},
		d = {
			dom:
			{
				sectionParallax: ".js-section-parallax",
				image1: ".js-parallax-style-1",
				image2: ".js-parallax-style-2",
				image3: ".js-parallax-style-3",
				image4: ".js-parallax-style-4",
				image5: ".js-parallax-style-5"
			},
			init: function()
			{
				var t = this,
					e = $(this.dom.sectionParallax)
					.width(),
					i = $(this.dom.sectionParallax)
					.height();
				$(window)
					.on("mousemove", function(n)
					{
						var r, s, o = n.pageX,
							a = n.pageY;
						r = e / 2 - o, s = i / 2 - a, TweenMax.to(t.dom.image1, 1,
						{
							css:
							{
								transform: "translateX(" + r / 20 + "px) translateY(" + s / 20 + "px)"
							},
							ease: Expo.easeOut,
							overwrite: "all"
						}), TweenMax.to(t.dom.image2, 1,
						{
							css:
							{
								transform: "translateX(" + r / 50 + "px) translateY(" + s / 15 + "px)"
							},
							ease: Expo.easeOut,
							overwrite: "all"
						}), TweenMax.to(t.dom.image3, 1,
						{
							css:
							{
								transform: "translateX(" + r / 80 + "px) translateY(" + s / 20 + "px)"
							},
							ease: Expo.easeOut,
							overwrite: "all"
						}), TweenMax.to(t.dom.image4, 1,
						{
							css:
							{
								transform: "translateX(" + r / 30 + "px) translateY(" + s / 50 + "px)"
							},
							ease: Expo.easeOut,
							overwrite: "all"
						}), TweenMax.to(t.dom.image5, 1,
						{
							css:
							{
								transform: "translateX(" + r / 15 + "px) translateY(" + s / 30 + "px)"
							},
							ease: Expo.easeOut,
							overwrite: "all"
						})
					})
			}
		},
		h = {
			classes:
			{
				root: ".js-email-check",
				close: ".js-email-check-close",
				form: ".js-email-check-form"
			},
			init: function()
			{
				var t = this;
				$(this.classes.close)
					.on("click", function()
					{
						$(t.classes.root)
							.hide()
					}), $(this.classes.form)
					.validate(
					{
						errorClass: "a-input__input--error",
						rules:
						{
							email:
							{
								required: !0,
								email: !0
							}
						}
					})
			}
		},
		f = {
			dom:
			{
				formCheckboxes: ".js-form-checkboxes"
			},
			init: function()
			{
				var t = this,
					e = $(this.dom.formCheckboxes)
					.find("input");
				e.change(function()
				{
					"none" === $(this)
						.val() ? (e.prop("checked", !1), $(this)
							.prop("checked", !0)) : $(t.dom.formCheckboxes)
						.find('input[value="none"]')
						.prop("checked", !1)
				})
			}
		},
		p = {
			classes:
			{
				form: ".js-measurments-form"
			},
			init: function()
			{
				$(this.classes.form)
					.validate(
					{
						errorClass: "a-input__input--error",
						rules:
						{
							imperial_age:
							{
								number: !0,
								required: !0,
								min: 14,
								max: 99,
								digits: !0
							},
							metric_age:
							{
								number: !0,
								required: !0,
								min: 14,
								max: 99,
								digits: !0
							},
							height_cm:
							{
								number: !0,
								required: !0,
								range: [135, 255],
								onlyOneDigitAfterTheDecimalPoint: !0
							},
							height_ft:
							{
								number: !0,
								required: !0,
								range: [4, 8],
								digits: !0
							},
							height_inch:
							{
								number: !0,
								range: [0, 11],
								digits: !0
							},
							weight_kg:
							{
								number: !0,
								required: !0,
								range: [40, 180],
								onlyOneDigitAfterTheDecimalPoint: !0
							},
							weight_target_kg:
							{
								number: !0,
								required: !0,
								range: [40, 180],
								onlyOneDigitAfterTheDecimalPoint: !0
							},
							weight_lb:
							{
								number: !0,
								required: !0,
								range: [90, 400],
								onlyOneDigitAfterTheDecimalPoint: !0
							},
							weight_target_lb:
							{
								number: !0,
								required: !0,
								range: [90, 400],
								onlyOneDigitAfterTheDecimalPoint: !0
							}
						}
					})
			}
		};
	var m = {
			dom:
			{
				blockProcessing: ".js-block-processing",
				processingPercentage: ".js-processing-percentage",
				processingPath: ".js-processing-path",
				processingSlider: ".js-processing-slider",
				processingButton: ".js-processing-button"
			},
			percentage:
			{
				value: 0
			},
			tl: new TimelineLite,
			init: function()
			{
				var t = this;
				$(window)
					.on("load", function()
					{
						t.animation()
					}), $(window)
					.resize(function()
					{
						return t.checkSize()
					})
			},
			checkSize: function()
			{
				window.innerWidth > o ? TweenMax.set(this.dom.processingSlider,
				{
					y: 0
				}) : TweenMax.set(this.dom.processingSlider,
				{
					x: 0
				})
			},
			animation: function()
			{
				var t = this,
					e = this,
					i = $(this.dom.processingSlider)
					.children()
					.length,
					n = i,
					r = parseInt(100 / (n - 1)),
					s = r;
				this.tl.add("circle", 0), this.tl.to(this.percentage, 10,
					{
						value: 100,
						onUpdate: function()
						{
							var a = parseInt(t.percentage.value),
								l = $(t.dom.processingSlider)
								.children()
								.length - n + 1,
								c = $(t.dom.processingSlider)
								.children()
								.outerHeight(),
								u = $(t.dom.processingSlider)
								.children()
								.width();
							window.innerWidth > o ? c = 0 : u = 0, $(t.dom.processingPercentage)
								.text(a), s === a && (TweenMax.to(t.dom.processingSlider, (10 / i)
										.toFixed(2),
										{
											ease: "Expo.easeInOut",
											x: -u * l,
											y: -c * l
										}), $(e.dom.processingSlider)
									.children()
									.removeClass("active")
									.removeClass("small")
									.removeClass("invisible"), $(e.dom.processingSlider)
									.children()
									.eq(l)
									.addClass("active")
									.next()
									.next()
									.addClass("small")
									.nextAll()
									.addClass("invisible"), $(e.dom.processingSlider)
									.children()
									.eq(l)
									.prev()
									.prev()
									.addClass("small")
									.prevAll()
									.addClass("invisible"), n -= 1, s += r)
						},
						onComplete: function()
						{
							window.agreement_button && clearInterval(window.agreement_button), window.agreement_button = setInterval(function()
							{
								if (window.generateDietSuccess)
								{
									clearInterval(window.agreement_button);
									var t = $("#processing");
									!0 === t.data("autoredirect") ? window.location.href = window.getHost() + t.data("href") : ($(".m-block-processing__items")
										.animate(
										{
											height: "50px"
										}, 800), (i = $("#messenger-checkbox-confirmation"))
										.parent()
										.fadeIn(), i.on("click", function(t)
										{
											t.preventDefault(), window.saveCheckboxPluginData(), window.confirmOptIn && window.confirmOptIn(), window.location.href = window.getHost() + $("#processing")
												.data("href")
										}), e = $(".fb-messenger-checkbox")
										.offset()
										.top, $("html, body")
										.animate(
										{
											scrollTop: e
										}, 2500))
								}
								var e, i
							}, 60)
						}
					})
					.to(this.dom.processingPath, 10,
					{
						strokeDashoffset: 629
					}, "circle")
			}
		},
		g = function()
		{
			m.init()
		},
		v = {
			dom:
			{
				paycode: ".js-paycode",
				paycodePrintBtn: ".js-paycode-print"
			},
			init: function()
			{
				var t = this;
				$(document)
					.on("click", this.dom.paycodePrintBtn, function(e)
					{
						e.preventDefault(), t.print(t.dom.paycode)
					})
			},
			print: function(t)
			{
				var e = window.open("", "PRINT", "height=400,width=600");
				return e.document.write("<html><head><title>" + document.title + "</title>"), e.document.write("</head><body >"), e.document.write('<h1 style="text-align: center;">Payment code</h1>'), e.document.write('<h2 style="text-align: center; max-width: 300px; margin: auto; border-radius: 20px; padding: 20px; border: 1px solid rgba(0,0,0,0.5)">' + $(t)
					.text() + "</h2>"), e.document.write("</body></html>"), e.document.close(), e.focus(), e.print(), e.close(), !0
			}
		},
		y = {
			dom:
			{
				formContacts: "#contact"
			},
			init: function()
			{
				$(this.dom.formContacts)
					.validate(
					{
						rules:
						{
							name:
							{
								required: !0
							},
							question:
							{
								valueNotEquals: ""
							},
							email:
							{
								email: !0,
								required: !0
							},
							message:
							{
								required: !0,
								minlength: 10
							}
						}
					})
			}
		},
		_ = {
			dom:
			{
				blockVideo: ".js-block-video",
				playBtn: ".js-video-play",
				playBtnBg: ".js-video-play-bg"
			},
			init: function()
			{
				var t = this.dom,
					e = $(t.blockVideo)
					.data("source");
				$(t.playBtn)
					.hover(function()
					{
						TweenMax.to(t.playBtnBg, .35,
						{
							scale: 2.5,
							ease: Sine.easeInOut
						})
					}, function()
					{
						TweenMax.to(t.playBtnBg, .35,
						{
							scale: 0,
							ease: Sine.easeOut
						})
					}), $(t.playBtn)
					.on("click", function()
					{
						$(this)
							.fadeOut("fast", function()
							{
								$(t.blockVideo)
									.empty()
									.append('<iframe width="100%" id="video" height="100%" src="https://www.youtube.com/embed/' + e + '?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
							})
					})
			}
		},
		x = {
			dom:
			{
				collapseSelector: ".js-faq",
				collapseContent: ".m-item-faq__content",
				collapseHeader: ".m-item-faq__header",
				collapseOpened: "m-item-faq--opened"
			},
			init: function()
			{
				var t = this.dom;
				$(t.collapseHeader)
					.on("click", function()
					{
						var e = $(this)
							.closest(t.collapseSelector);
						e.hasClass(t.collapseOpened) ? (e.removeClass(t.collapseOpened), e.find(t.collapseContent)
							.stop()
							.slideUp()) : (e.addClass(t.collapseOpened), e.find(t.collapseContent)
							.stop()
							.slideDown())
					})
			}
		},
		b = function()
		{
			var t = $(".js-discount-time"),
				e = t.data("seconds"),
				i = setInterval(function()
				{
					Math.floor(e / 3600);
					var n = Math.floor(e % 3600 / 60),
						r = Math.floor(e % 3600 % 60);
					r < 10 && (r = "0" + r);
					t.text((n > 10 ? n : "0" + n) + ":" + r), 0 == e ? clearInterval(i) : e--
				}, 1e3)
		},
		w = function()
		{
			if ($(".o-section-summary")
				.length)
			{
				var t = $(".js-bmi-item-color"),
					e = new Snap("#graph-bmi"),
					i = e.select("#colored"),
					n = i.getTotalLength(),
					r = e.select(".circle"),
					s = getAnswersData("bmi"),
					o = n / (50 / s),
					a = i.getPointAtLength(o);
				s >= 0 && s <= 15 && t.css(
				{
					color: "#00ADEE",
					fill: "#00ADEE"
				}), s >= 15 && s <= 25 && t.css(
				{
					color: "#3A9864",
					fill: "#3A9864"
				}), s >= 25 && s <= 30 && t.css(
				{
					color: "#81C22F",
					fill: "#81C22F"
				}), s >= 30 && s <= 40 && t.css(
				{
					color: "#F3AE04",
					fill: "#F3AE04"
				}), s >= 40 && s <= 50 && t.css(
				{
					color: "#C21300",
					fill: "#C21300"
				}), r.attr(
				{
					cx: a.x,
					cy: a.y - 6
				})
			}
		},
		T = {
			dom:
			{
				itemSummary: ".js-item-summary",
				items: ".js-graph-2-items",
				item: ".js-graph-2-item",
				itemActive: ".m-item-summary__graph-2-item--active",
				text: ".js-item-color-graph-2",
				years: ".js-item-year-graph-2",
				itemActiveClass: "m-item-summary__graph-2-item--active"
			},
			colors: ["#AFEF31", "#F3DA1A", "#FFBB42", "#F94B2C"],
			init: function()
			{
				var t = this;
				this.initGraph2($(this.dom.itemActive)), $(this.dom.items)
					.viewportChecker(
					{
						callbackFunction: function()
						{
							return t.setGraph2(t.getNumberOfGraph2())
						}
					})
			},
			getNumberOfGraph2: function()
			{
				var t = 0,
					e = $(this.dom.items)
					.data("years");
				return e >= 30 && (t = 1), e >= 45 && (t = 2), e >= 64 && (t = 3), t
			},
			moveGraph2: function(t)
			{
				TweenMax.to(t.children(), 1,
				{
					scale: 1,
					opacity: 1,
					y: 0
				}), TweenMax.to(t.next()
					.children(), 1,
					{
						scale: .7,
						opacity: .5,
						y: -30
					}), TweenMax.to(t.next()
					.next()
					.children(), 1,
					{
						scale: .5,
						opacity: .2,
						y: -50
					}), TweenMax.to(t.prev()
					.children(), 1,
					{
						scale: .7,
						opacity: .5,
						y: -30
					}), TweenMax.to(t.prev()
					.prev()
					.children(), 1,
					{
						scale: .5,
						opacity: .2,
						y: -50
					}), TweenMax.to(t.prev()
					.prev()
					.prevAll()
					.children(), 1,
					{
						scale: 0
					}), TweenMax.to(t.next()
					.next()
					.nextAll()
					.children(), 1,
					{
						scale: 0
					})
			},
			initGraph2: function(t)
			{
				TweenMax.set(t.children(),
				{
					scale: 1,
					opacity: 1,
					y: 0
				}), TweenMax.set(t.next()
					.children(),
					{
						scale: .7,
						opacity: .5,
						y: -30
					}), TweenMax.set(t.next()
					.next()
					.children(),
					{
						scale: .5,
						opacity: .2,
						y: -50
					}), TweenMax.set(t.prev()
					.children(),
					{
						scale: .7,
						opacity: .5,
						y: -30
					}), TweenMax.set(t.prev()
					.prev()
					.children(),
					{
						scale: .5,
						opacity: .2,
						y: -50
					}), TweenMax.set(t.prev()
					.prev()
					.prevAll()
					.children(),
					{
						scale: 0
					}), TweenMax.set(t.next()
					.next()
					.nextAll()
					.children(),
					{
						scale: 0
					})
			},
			setGraph2: function(t)
			{
				var e = this,
					i = $(this.dom.items),
					n = $(this.dom.item),
					r = this.dom.itemActiveClass,
					s = n.width(),
					o = t,
					a = {
						value: 0,
						current: 0
					},
					l = setInterval(function()
					{
						t > 0 ? (n.removeClass(r), a.current = $(e.dom.items)
							.data("years") / o, TweenMax.to(i, 1,
							{
								x: -s,
								onStart: function()
								{
									n.eq(t - o + 1)
										.addClass(r), $(e.dom.text)
										.css("color", e.colors[t - o + 1]), e.moveGraph2($(e.dom.itemActive))
								},
								onComplete: function()
								{
									o -= 1, s += n.width(), 0 === o && clearInterval(l)
								}
							}), TweenMax.to(a, 1,
							{
								value: a.current,
								onUpdate: function()
								{
									$(e.dom.years)
										.text(parseInt(a.value))
								}
							})) : TweenMax.to(a, 1,
						{
							value: $(e.dom.items)
								.data("years"),
							onUpdate: function()
							{
								$(e.dom.years)
									.text(parseInt(a.value))
							}
						})
					}, 1200)
			}
		},
		k = {
			dom:
			{
				count: ".js-graph-6-count"
			},
			currentCount:
			{
				value: 0
			},
			init: function()
			{
				var t = this;
				$(this.dom.count)
					.viewportChecker(
					{
						callbackFunction: function()
						{
							return t.animateCount()
						}
					})
			},
			animateCount: function()
			{
				var t = this,
					e = $(this.dom.count);
				TweenMax.to(this.currentCount, 4,
				{
					value: e.data("count"),
					ease: Expo.easeInOut,
					onUpdate: function()
					{
						e.text(parseInt(t.currentCount.value))
					}
				})
			}
		},
		C = {
			types: [".js-ketogenic-fats", ".js-ketogenic-protein", ".js-ketogenic-carbs"],
			common: ".js-ketogenic-type",
			currentIndex: 0,
			delay: 3e3,
			HIDDEN: "ketogenic-hidden",
			interval: void 0,
			init: function()
			{
				var t = this;
				this.changeCurrentType(function(e)
				{
					t.animateCurrent(e)
				})
			},
			changeCurrentType: function(t)
			{
				var e = this;
				t && t(this.currentIndex), this.currentIndex++, this.currentIndex == this.types.length && (this.currentIndex = 0), setTimeout(function()
				{
					return e.changeCurrentType(function(t)
					{
						return e.animateCurrent(t)
					})
				}, this.delay)
			},
			animateCurrent: function(t)
			{
				$(this.common)
					.addClass(this.HIDDEN), $(this.types[t])
					.removeClass(this.HIDDEN)
			}
		},
		S = {
			init: function()
			{
				this.helpBlock(), w(), T.init(), k.init(), C.init()
			},
			helpBlock: function()
			{
				$(".js-help-btn")
					.on("click", function(t)
					{
						t.preventDefault(), $(this)
							.closest(".m-item-summary")
							.toggleClass("m-item-summary--active")
					})
			}
		},
		A = {
			classes:
			{
				tab: ".js-custom-tab",
				tabActive: "custom-tabs__tab--active"
			},
			defaultTabIndex: 0,
			tabs: [],
			init: function()
			{
				var t = this,
					e = this;
				$(this.classes.tab)
					.each(function(i, n)
					{
						$(n)
							.hasClass("custom-tabs__tab--active") && (e.defaultTabIndex = i), t.tabs.push($(n)
								.attr("href"))
					}), this.setTab(this.defaultTabIndex), $(this.classes.tab)
					.off("click"), $(this.classes.tab)
					.on("click", function(t)
					{
						t.stopPropagation(), t.preventDefault(), e.setTab($(this)
							.index())
					});
				/*
				var i = getAnswers()
					.measurements;
				if (i)
				{
					var n = i[Object.keys(i)[0]].name;
					$(this.classes.tab + '[data-measurements="' + n + '"]')
						.click()
				}
				*/
			},
			setTab: function(t)
			{
				var e = this;
				this.tabs.forEach(function(i, n)
				{
					var r = $(e.classes.tab)[n];
					n !== t ? ($(i)
						.css("display", "none"), $(r)
						.removeClass(e.classes.tabActive)) : ($(i)
						.fadeIn(), $(r)
						.addClass(e.classes.tabActive))
				})
			}
		},
		P = {
			dom:
			{
				recipe: ".js-recipe",
				recipeSide: ".js-recipe-side",
				recipeTitle: ".js-recipe-title",
				recipeProgress: ".js-header-progress",
				headerParent: ".js-header-parent",
				header: ".js-header"
			},
			init: function()
			{
				var t = this;
				if (document.querySelector(this.dom.recipe))
				{
					var e, i = document.documentElement,
						n = document.body,
						r = "scrollTop",
						s = "scrollHeight",
						o = document.querySelector(this.dom.recipeProgress);
					window.addEventListener("scroll", function(t)
					{
						e = (i[r] || n[r]) / ((i[s] || n[s]) - i.clientHeight) * 100, o.style.width = e + "%"
					});
					for (var a = new FixedHeader(
						{
							parent: this.dom.headerParent,
							header: this.dom.header
						}), l = document.querySelectorAll(this.dom.recipeSide), c = [], u = 0; u < l.length; u++)
					{
						var d = l[u].querySelector(t.dom.recipeTitle);
						c.push(new FixedHeader(
						{
							parent: l[u],
							header: d,
							offsetTop: 130,
							offsetTopResponsive: 80
						}))
					}
					t.ieFix(c[0], c[1], a), window.addEventListener("scroll", function(e)
					{
						c[0].update(), c[1].update(), a.update(), t.ieFix(c[0], c[1], a)
					}), window.addEventListener("resize", function()
					{
						c[0].update(
						{
							resize: !0
						}), c[1].update(
						{
							resize: !0
						}), a.update(
						{
							resize: !0
						}), t.ieFix(c[0], c[1], a)
					})
				}
			},
			ieFix: function(t)
			{
				if (isIE10 || isIE11)
					for (var e = 0; e < arguments.length; e++) $(arguments[e].header)
						.parent()
						.width($(arguments[e].parent)
							.width())
			}
		},
		F = {
			videoSelector: ".js-video",
			playBtn: ".js-video-play",
			init: function()
			{
				var t = this,
					e = $(this.videoSelector)
					.data("source");
				document.querySelector(".js-video-modal") && $(".js-video-modal")
					.modalVideo(), $(this.playBtn)
					.on("click", function()
					{
						$(t.videoSelector)
							.html('<iframe width="100%" id="video" height="100%" src="https://www.youtube.com/embed/' + e + '?autoplay=1&rel=0&amp;controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
					})
			}
		};
	$(function()
	{
		var o = $("body")
			.data("page");
		svg4everybody(), e(), t.init(), n.init(), s.init(), r.init(), d.init(), f.init(), p.init(), $("#processing .m-block-processing__circle")
			.length && g(), v.init(), y.init(), _.init(), h.init(), x.init(), b(), ["main", "mealplan"].some(function(t)
			{
				return t === o
			}) && S.init(), c.init(), u.init(), ["step-", "step-1", "step-2", "step-3", "step-4", "step-5", "step-6", "step-7", "step-8", "step-9", "step-10", "step-11"].some(function(t)
			{
				return t === o
			}) && i.init(), A.init(), P.init(), F.init()
	})
}();
