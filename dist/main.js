import * as e from "react";
import t, { cloneElement as n, createContext as r, isValidElement as i, useContext as a, useEffect as o, useImperativeHandle as s, useLayoutEffect as c, useRef as l, useState as u } from "react";
import { CheckIcon as d, ChevronDownIcon as f } from "lucide-react";
import { createPortal as p } from "react-dom";
//#region \0rolldown/runtime.js
var m = Object.create, h = Object.defineProperty, g = Object.getOwnPropertyDescriptor, _ = Object.getOwnPropertyNames, v = Object.getPrototypeOf, y = Object.prototype.hasOwnProperty, b = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), x = (e, t) => {
	let n = {};
	for (var r in e) h(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || h(n, Symbol.toStringTag, { value: "Module" }), n;
}, S = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = _(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !y.call(e, s) && s !== n && h(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = g(t, s)) || r.enumerable
	});
	return e;
}, C = (e, t, n) => (n = e == null ? {} : m(v(e)), S(t || !e || !e.__esModule ? h(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), w = /* @__PURE__ */ b(((t, n) => {
	n.exports = { ...e };
})), T = /* @__PURE__ */ b(((e) => {
	var t = w().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	e.c = function(e) {
		return t.H.useMemoCache(e);
	};
})), E = /* @__PURE__ */ b(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = w().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		e.c = function(e) {
			var n = t.H;
			return n === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), n.useMemoCache(e);
		};
	})();
})), D = (/* @__PURE__ */ b(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = T() : t.exports = E();
})))(), O = {
	View: "_onyx-ui_View_-qlIB",
	horizontal: "_onyx-ui_horizontal_PcIrb",
	absolute: "_onyx-ui_absolute_MRtrq",
	sticky: "_onyx-ui_sticky_N5dr-",
	opacityOnPress: "_onyx-ui_opacityOnPress_kDEzd",
	zindex_1: "_onyx-ui_zindex_1_xjmHa",
	zindex_2: "_onyx-ui_zindex_2_rAZX5",
	zindex_3: "_onyx-ui_zindex_3_podrP",
	flex: "_onyx-ui_flex_0re1O",
	wrap: "_onyx-ui_wrap_qasS2",
	heavyShadow: "_onyx-ui_heavyShadow_o564H",
	shadow: "_onyx-ui_shadow_Xo0fT",
	pointer: "_onyx-ui_pointer_bdMFA"
}, k = {
	primary: "_onyx-ui_primary_s-a4c",
	content: "_onyx-ui_content_BN7L-",
	panel: "_onyx-ui_panel_fBl9j",
	gutter: "_onyx-ui_gutter_OKVXG",
	icon: "_onyx-ui_icon_jFwkM",
	divider: "_onyx-ui_divider_fFRlb",
	selected: "_onyx-ui_selected_NKdwV",
	highlight: "_onyx-ui_highlight_fdlLN",
	black: "_onyx-ui_black_A7jCG",
	white: "_onyx-ui_white_SeOJx",
	"gray-0": "_onyx-ui_gray-0_cNbkJ",
	"gray-1": "_onyx-ui_gray-1_SZKzT",
	"gray-2": "_onyx-ui_gray-2_3JetF",
	"blue-5": "_onyx-ui_blue-5_WsXQB"
}, A = {
	_0px: "_onyx-ui__0px_bYrmY",
	_1px: "_onyx-ui__1px_fJLSW",
	_2px: "_onyx-ui__2px_hLI9L",
	_4px: "_onyx-ui__4px_foWKi",
	_8px: "_onyx-ui__8px_ib1gh",
	_12px: "_onyx-ui__12px_4fma8",
	_16px: "_onyx-ui__16px_cqo2h",
	_24px: "_onyx-ui__24px_BBVNI",
	_32px: "_onyx-ui__32px_xH1yq",
	_0px_0px: "_onyx-ui__0px_0px_OCiFV",
	_0px_1px: "_onyx-ui__0px_1px_hNhPT",
	_0px_2px: "_onyx-ui__0px_2px_UQQc5",
	_0px_4px: "_onyx-ui__0px_4px_dRlHK",
	_0px_8px: "_onyx-ui__0px_8px_cdIC2",
	_0px_12px: "_onyx-ui__0px_12px_v4L3J",
	_0px_16px: "_onyx-ui__0px_16px_MSDYY",
	_0px_24px: "_onyx-ui__0px_24px_zcVHw",
	_0px_32px: "_onyx-ui__0px_32px_zdzFk",
	_1px_0px: "_onyx-ui__1px_0px_uZdzF",
	_1px_1px: "_onyx-ui__1px_1px_-bWfN",
	_1px_2px: "_onyx-ui__1px_2px_Ml35W",
	_1px_4px: "_onyx-ui__1px_4px_jr2jj",
	_1px_8px: "_onyx-ui__1px_8px_pgsjW",
	_1px_12px: "_onyx-ui__1px_12px_9ROkF",
	_1px_16px: "_onyx-ui__1px_16px_YZBnZ",
	_1px_24px: "_onyx-ui__1px_24px_rD-Pb",
	_1px_32px: "_onyx-ui__1px_32px_D99fO",
	_2px_0px: "_onyx-ui__2px_0px_-LWP4",
	_2px_1px: "_onyx-ui__2px_1px_WFuRp",
	_2px_2px: "_onyx-ui__2px_2px_eAXfd",
	_2px_4px: "_onyx-ui__2px_4px_jEPtn",
	_2px_8px: "_onyx-ui__2px_8px_ml3P7",
	_2px_12px: "_onyx-ui__2px_12px_-p2Cb",
	_2px_16px: "_onyx-ui__2px_16px_4XUkT",
	_2px_24px: "_onyx-ui__2px_24px_1crvU",
	_2px_32px: "_onyx-ui__2px_32px_vwsmA",
	_4px_0px: "_onyx-ui__4px_0px_ovhBh",
	_4px_1px: "_onyx-ui__4px_1px_na46Q",
	_4px_2px: "_onyx-ui__4px_2px_yejSx",
	_4px_4px: "_onyx-ui__4px_4px_xd7RB",
	_4px_8px: "_onyx-ui__4px_8px_xUfE1",
	_4px_12px: "_onyx-ui__4px_12px_0sBH7",
	_4px_16px: "_onyx-ui__4px_16px_poncj",
	_4px_24px: "_onyx-ui__4px_24px_NUZ6T",
	_4px_32px: "_onyx-ui__4px_32px_Y6y9e",
	_8px_0px: "_onyx-ui__8px_0px_ovVKE",
	_8px_1px: "_onyx-ui__8px_1px_cZe-U",
	_8px_2px: "_onyx-ui__8px_2px_oqXdV",
	_8px_4px: "_onyx-ui__8px_4px_1EWew",
	_8px_8px: "_onyx-ui__8px_8px_wUYW3",
	_8px_12px: "_onyx-ui__8px_12px_-bcrU",
	_8px_16px: "_onyx-ui__8px_16px_l9s5R",
	_8px_24px: "_onyx-ui__8px_24px_oqv5s",
	_8px_32px: "_onyx-ui__8px_32px_Dn7TZ",
	_12px_0px: "_onyx-ui__12px_0px_3V1wW",
	_12px_1px: "_onyx-ui__12px_1px_P---c",
	_12px_2px: "_onyx-ui__12px_2px_MR1RH",
	_12px_4px: "_onyx-ui__12px_4px_45t73",
	_12px_8px: "_onyx-ui__12px_8px_JDpAc",
	_12px_12px: "_onyx-ui__12px_12px_jXv0y",
	_12px_16px: "_onyx-ui__12px_16px_Ea-F1",
	_12px_24px: "_onyx-ui__12px_24px_X0y5l",
	_12px_32px: "_onyx-ui__12px_32px_gLIvJ",
	_16px_0px: "_onyx-ui__16px_0px_hJo-e",
	_16px_1px: "_onyx-ui__16px_1px_PsHmY",
	_16px_2px: "_onyx-ui__16px_2px_nm94w",
	_16px_4px: "_onyx-ui__16px_4px_A53b0",
	_16px_8px: "_onyx-ui__16px_8px_QfPuP",
	_16px_12px: "_onyx-ui__16px_12px_AV15x",
	_16px_16px: "_onyx-ui__16px_16px_Bo4v3",
	_16px_24px: "_onyx-ui__16px_24px_RgMSS",
	_16px_32px: "_onyx-ui__16px_32px_KDejT",
	_24px_0px: "_onyx-ui__24px_0px_ilg04",
	_24px_1px: "_onyx-ui__24px_1px_jwGqd",
	_24px_2px: "_onyx-ui__24px_2px_znT-O",
	_24px_4px: "_onyx-ui__24px_4px_5ll7k",
	_24px_8px: "_onyx-ui__24px_8px_9Nm7R",
	_24px_12px: "_onyx-ui__24px_12px_Nz5dW",
	_24px_16px: "_onyx-ui__24px_16px_cOBAh",
	_24px_24px: "_onyx-ui__24px_24px_njhS9",
	_24px_32px: "_onyx-ui__24px_32px_NHSdL",
	_32px_0px: "_onyx-ui__32px_0px_8woTP",
	_32px_1px: "_onyx-ui__32px_1px_MYEIV",
	_32px_2px: "_onyx-ui__32px_2px_1sNzL",
	_32px_4px: "_onyx-ui__32px_4px_Hzg7h",
	_32px_8px: "_onyx-ui__32px_8px_dpzZi",
	_32px_12px: "_onyx-ui__32px_12px_P4I-7",
	_32px_16px: "_onyx-ui__32px_16px_UzG5L",
	_32px_24px: "_onyx-ui__32px_24px_q6eBr",
	_32px_32px: "_onyx-ui__32px_32px_ga1Kr"
}, j = {
	_0px: "_onyx-ui__0px_Rv6vt",
	_1px: "_onyx-ui__1px_3FO6W",
	_2px: "_onyx-ui__2px_k48n7",
	_4px: "_onyx-ui__4px_-aSKz",
	_8px: "_onyx-ui__8px_YukcA",
	_12px: "_onyx-ui__12px_1UEph",
	_16px: "_onyx-ui__16px_CeEiq",
	_24px: "_onyx-ui__24px_iuCg1",
	_32px: "_onyx-ui__32px_2oKG1",
	_0px_0px: "_onyx-ui__0px_0px_nPbbP",
	_0px_1px: "_onyx-ui__0px_1px_VRnqm",
	_0px_2px: "_onyx-ui__0px_2px_ys96H",
	_0px_4px: "_onyx-ui__0px_4px_TxMj2",
	_0px_8px: "_onyx-ui__0px_8px_Qmg6I",
	_0px_12px: "_onyx-ui__0px_12px_pPyHM",
	_0px_16px: "_onyx-ui__0px_16px_32lAC",
	_0px_24px: "_onyx-ui__0px_24px_eyA4p",
	_0px_32px: "_onyx-ui__0px_32px_s1YJ5",
	_1px_0px: "_onyx-ui__1px_0px_6PvSm",
	_1px_1px: "_onyx-ui__1px_1px_oM3lT",
	_1px_2px: "_onyx-ui__1px_2px_cvVdz",
	_1px_4px: "_onyx-ui__1px_4px_MVgIb",
	_1px_8px: "_onyx-ui__1px_8px_eTzFf",
	_1px_12px: "_onyx-ui__1px_12px_D5JOp",
	_1px_16px: "_onyx-ui__1px_16px_k0Tr8",
	_1px_24px: "_onyx-ui__1px_24px_mt98o",
	_1px_32px: "_onyx-ui__1px_32px_eXmWW",
	_2px_0px: "_onyx-ui__2px_0px_MduDZ",
	_2px_1px: "_onyx-ui__2px_1px_GjOrF",
	_2px_2px: "_onyx-ui__2px_2px_2N54M",
	_2px_4px: "_onyx-ui__2px_4px_QYYul",
	_2px_8px: "_onyx-ui__2px_8px_SQv1q",
	_2px_12px: "_onyx-ui__2px_12px_BQYfe",
	_2px_16px: "_onyx-ui__2px_16px_e99RO",
	_2px_24px: "_onyx-ui__2px_24px_7iH1H",
	_2px_32px: "_onyx-ui__2px_32px_CtX-2",
	_4px_0px: "_onyx-ui__4px_0px_WKw-z",
	_4px_1px: "_onyx-ui__4px_1px_cJ6L-",
	_4px_2px: "_onyx-ui__4px_2px_BXvol",
	_4px_4px: "_onyx-ui__4px_4px_JySk6",
	_4px_8px: "_onyx-ui__4px_8px_CMh8g",
	_4px_12px: "_onyx-ui__4px_12px_eX4RE",
	_4px_16px: "_onyx-ui__4px_16px_Ucu2W",
	_4px_24px: "_onyx-ui__4px_24px_sxrce",
	_4px_32px: "_onyx-ui__4px_32px_EWLM3",
	_8px_0px: "_onyx-ui__8px_0px_ZmcWW",
	_8px_1px: "_onyx-ui__8px_1px_ReIRZ",
	_8px_2px: "_onyx-ui__8px_2px_-1yDZ",
	_8px_4px: "_onyx-ui__8px_4px_dJO30",
	_8px_8px: "_onyx-ui__8px_8px_8IZ8-",
	_8px_12px: "_onyx-ui__8px_12px_Ff0fa",
	_8px_16px: "_onyx-ui__8px_16px_ofL2J",
	_8px_24px: "_onyx-ui__8px_24px_ghGiC",
	_8px_32px: "_onyx-ui__8px_32px_hcB-D",
	_12px_0px: "_onyx-ui__12px_0px_0xaRD",
	_12px_1px: "_onyx-ui__12px_1px_AMQ1o",
	_12px_2px: "_onyx-ui__12px_2px_keQIu",
	_12px_4px: "_onyx-ui__12px_4px_Uw7V4",
	_12px_8px: "_onyx-ui__12px_8px_pVY-9",
	_12px_12px: "_onyx-ui__12px_12px_aWQts",
	_12px_16px: "_onyx-ui__12px_16px_ylEu1",
	_12px_24px: "_onyx-ui__12px_24px_rpY1-",
	_12px_32px: "_onyx-ui__12px_32px_PzkrL",
	_16px_0px: "_onyx-ui__16px_0px_YsEjh",
	_16px_1px: "_onyx-ui__16px_1px_TCT6G",
	_16px_2px: "_onyx-ui__16px_2px_Jnf8Q",
	_16px_4px: "_onyx-ui__16px_4px_fhTAi",
	_16px_8px: "_onyx-ui__16px_8px_VSQgr",
	_16px_12px: "_onyx-ui__16px_12px_HLhFK",
	_16px_16px: "_onyx-ui__16px_16px_Y3S3Q",
	_16px_24px: "_onyx-ui__16px_24px_VbJBB",
	_16px_32px: "_onyx-ui__16px_32px_rN74C",
	_24px_0px: "_onyx-ui__24px_0px_QESMd",
	_24px_1px: "_onyx-ui__24px_1px_ZjusK",
	_24px_2px: "_onyx-ui__24px_2px_FCqDV",
	_24px_4px: "_onyx-ui__24px_4px_2gTrb",
	_24px_8px: "_onyx-ui__24px_8px_8Flvi",
	_24px_12px: "_onyx-ui__24px_12px_zvVvD",
	_24px_16px: "_onyx-ui__24px_16px_lyBI2",
	_24px_24px: "_onyx-ui__24px_24px_qsLpl",
	_24px_32px: "_onyx-ui__24px_32px_0i09u",
	_32px_0px: "_onyx-ui__32px_0px_zl60d",
	_32px_1px: "_onyx-ui__32px_1px_g7-MA",
	_32px_2px: "_onyx-ui__32px_2px_oumfO",
	_32px_4px: "_onyx-ui__32px_4px_JvGAZ",
	_32px_8px: "_onyx-ui__32px_8px_ljVaC",
	_32px_12px: "_onyx-ui__32px_12px_zHoeQ",
	_32px_16px: "_onyx-ui__32px_16px_qIJ-m",
	_32px_24px: "_onyx-ui__32px_24px_RLRVU",
	_32px_32px: "_onyx-ui__32px_32px_tW-R-"
}, M = {
	top: "_onyx-ui_top_99pO4",
	negative: "_onyx-ui_negative_pu7O-",
	bottom: "_onyx-ui_bottom_Q8--x",
	left: "_onyx-ui_left_Z41Ey",
	right: "_onyx-ui_right_1VFwX",
	top_bottom: "_onyx-ui_top_bottom_1X6Pe",
	top_right_bottom_left: "_onyx-ui_top_right_bottom_left_5KilU",
	none: "_onyx-ui_none_O96-o"
}, N = {
	_max: "_onyx-ui__max_zJyU-",
	_0px: "_onyx-ui__0px_thl5s",
	_1px: "_onyx-ui__1px_tTrNE",
	_2px: "_onyx-ui__2px_-l9qL",
	_4px: "_onyx-ui__4px_DLC9z",
	_8px: "_onyx-ui__8px_Cn68V",
	_12px: "_onyx-ui__12px_iezV-",
	_16px: "_onyx-ui__16px_9hafA",
	_24px: "_onyx-ui__24px_0n-2R",
	_32px: "_onyx-ui__32px_4AJZQ",
	_48px: "_onyx-ui__48px_VJYHH"
}, P = {
	left: "_onyx-ui_left_lBtdU",
	right: "_onyx-ui_right_GIf75",
	top: "_onyx-ui_top_Qzlxt",
	bottom: "_onyx-ui_bottom_E281x",
	top_left: "_onyx-ui_top_left_HwlIc",
	top_center: "_onyx-ui_top_center_xOdXq",
	top_right: "_onyx-ui_top_right_ny-r-",
	top_justify: "_onyx-ui_top_justify_vdAjU",
	middle_left: "_onyx-ui_middle_left_g-LQe",
	middle_center: "_onyx-ui_middle_center_PR0Oh",
	middle_right: "_onyx-ui_middle_right_oiLp0",
	middle_justify: "_onyx-ui_middle_justify_g19gJ",
	bottom_left: "_onyx-ui_bottom_left_y-8dI",
	bottom_center: "_onyx-ui_bottom_center_Y83MC",
	bottom_right: "_onyx-ui_bottom_right_ZNEJQ",
	bottom_justify: "_onyx-ui_bottom_justify_-cvH-"
}, F = {
	left: "_onyx-ui_left_Rvtwr",
	right: "_onyx-ui_right_-m6bb",
	top: "_onyx-ui_top_p9hzO",
	bottom: "_onyx-ui_bottom_bSXIO",
	top_left: "_onyx-ui_top_left_QXaXK",
	top_center: "_onyx-ui_top_center_3xvSp",
	top_right: "_onyx-ui_top_right_IkhKg",
	middle_left: "_onyx-ui_middle_left_9dtae",
	middle_center: "_onyx-ui_middle_center_fWemA",
	middle_right: "_onyx-ui_middle_right_gqmaR",
	bottom_left: "_onyx-ui_bottom_left_GG3pW",
	bottom_center: "_onyx-ui_bottom_center_C80Re",
	bottom_right: "_onyx-ui_bottom_right_eusYV"
}, I = {
	primary: "_onyx-ui_primary_Obpgx",
	panel: "_onyx-ui_panel_cDvWc",
	divider: "_onyx-ui_divider_5ZVQ9",
	gutter: "_onyx-ui_gutter_Zs0-C",
	selected: "_onyx-ui_selected_dssRO",
	highlight: "_onyx-ui_highlight_VM6hc",
	"gray-0": "_onyx-ui_gray-0_gq2kw",
	"gray-1": "_onyx-ui_gray-1_FmiDf",
	"gray-2": "_onyx-ui_gray-2_KYZNn"
}, L = /* @__PURE__ */ b(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), R = /* @__PURE__ */ b(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case x: return e.displayName || "Context";
				case b: return (e._context.displayName || "Context") + ".Consumer";
				case S:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === _) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: h,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function d(e, n, i, o, l, d) {
			var p = n.children;
			if (p !== void 0) if (o) if (M(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (j.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), R[p + o] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), s(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, p, i, a(), l, d);
		}
		function f(e) {
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = w(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = m.react_stack_bottom_frame.bind(m, o)(), L = N(i(o)), R = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), z = (/* @__PURE__ */ b(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = L() : t.exports = R();
})))(), ee = t.createContext({ parentFillColor: void 0 });
function B(e) {
	let t = (0, D.c)(57), n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8], u = t[9], d = t[10], f = t[11], p = t[12], m = t[13], h = t[14], g = t[15], _ = t[16], v = t[17], y = t[18], b = t[19], x = t[20], S = t[21], C = t[22], w = t[23]) : ({as: i, flex: f, wrap: C, horizontal: p, absolute: n, sticky: b, opacityOnPress: h, zIndex: w, shadow: v, cursor: u, padding: g, spacing: y, border: a, negativeBorder: m, align: r, fillColor: d, borderColor: o, cornerRadius: l, tooltip: S, style: x, className: c, children: s, ..._} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l, t[9] = u, t[10] = d, t[11] = f, t[12] = p, t[13] = m, t[14] = h, t[15] = g, t[16] = _, t[17] = v, t[18] = y, t[19] = b, t[20] = x, t[21] = S, t[22] = C, t[23] = w);
	let T = i ?? "div", E = f && O.flex, L = C && O.wrap, R = n && O.absolute, B = b && O.sticky, V = h && O.opacityOnPress, ne = w && O[`zindex_${w}`], H = p && O.horizontal, re = v === "heavy" ? O.heavyShadow : v && O.shadow, ie = u && O[u], U = g && A[`_${g.replace(/ /, "_")}`], ae = y && j[`_${y.replace(/ /, "_")}`], oe = a && M[a === !0 ? "top_right_bottom_left" : a.replace(/ /, "_")], se = m && M.negative, ce = r && (p ? P[r.replace(/ /, "_")] : F[r.replace(/ /, "_")]), le = d && k[d], ue = l && N[`_${l}`], de = o && I[o], fe;
	t[24] !== c || t[25] !== E || t[26] !== U || t[27] !== ae || t[28] !== oe || t[29] !== se || t[30] !== ce || t[31] !== le || t[32] !== ue || t[33] !== de || t[34] !== L || t[35] !== R || t[36] !== B || t[37] !== V || t[38] !== ne || t[39] !== H || t[40] !== re || t[41] !== ie ? (fe = [
		O.View,
		E,
		L,
		R,
		B,
		V,
		ne,
		H,
		re,
		ie,
		U,
		ae,
		oe,
		se,
		ce,
		le,
		ue,
		de,
		c
	].filter(te), t[24] = c, t[25] = E, t[26] = U, t[27] = ae, t[28] = oe, t[29] = se, t[30] = ce, t[31] = le, t[32] = ue, t[33] = de, t[34] = L, t[35] = R, t[36] = B, t[37] = V, t[38] = ne, t[39] = H, t[40] = re, t[41] = ie, t[42] = fe) : fe = t[42];
	let pe = fe.join(" "), me;
	t[43] === x ? me = t[44] : (me = { ...x }, t[43] = x, t[44] = me);
	let he = me, ge;
	t[45] === d ? ge = t[46] : (ge = { parentFillColor: d }, t[45] = d, t[46] = ge);
	let _e = ge, ve;
	t[47] !== T || t[48] !== s || t[49] !== _ || t[50] !== S || t[51] !== pe || t[52] !== he ? (ve = /* @__PURE__ */ (0, z.jsx)(T, {
		className: pe,
		style: he,
		title: S,
		..._,
		children: s
	}), t[47] = T, t[48] = s, t[49] = _, t[50] = S, t[51] = pe, t[52] = he, t[53] = ve) : ve = t[53];
	let ye;
	return t[54] !== ve || t[55] !== _e ? (ye = /* @__PURE__ */ (0, z.jsx)(ee, {
		value: _e,
		children: ve
	}), t[54] = ve, t[55] = _e, t[56] = ye) : ye = t[56], ye;
}
function te(e) {
	return e;
}
var V = {
	Text: "_onyx-ui_Text_N3t1U",
	select: "_onyx-ui_select_ky1qN",
	light: "_onyx-ui_light_IbzVh",
	lighter: "_onyx-ui_lighter_DTRvS",
	caps: "_onyx-ui_caps_Gy2yt",
	ellipsis: "_onyx-ui_ellipsis_31RAb"
}, ne = {
	_12px: "_onyx-ui__12px_BF6bk",
	_14px: "_onyx-ui__14px_3aMJ0",
	_18px: "_onyx-ui__18px_XtZG-",
	_24px: "_onyx-ui__24px_fwBNW",
	_32px: "_onyx-ui__32px_mh4EG"
}, H = {
	_300: "_onyx-ui__300_imdej",
	_400: "_onyx-ui__400_9-vuA",
	_500: "_onyx-ui__500_9rCUP",
	_600: "_onyx-ui__600_8vDNo",
	_700: "_onyx-ui__700_4dk7T"
}, re = {
	primary: "_onyx-ui_primary_2fg9l",
	content: "_onyx-ui_content_j0S5i",
	text: "_onyx-ui_text_ir-25",
	highlight: "_onyx-ui_highlight_i7woj",
	black: "_onyx-ui_black_Kk3sT",
	white: "_onyx-ui_white_fi2iy",
	"gray-0": "_onyx-ui_gray-0_B2s7p",
	"gray-1": "_onyx-ui_gray-1_qm8JY",
	"gray-2": "_onyx-ui_gray-2_as6tW",
	"gray-3": "_onyx-ui_gray-3_f6hVZ",
	"gray-4": "_onyx-ui_gray-4_pTthK",
	"gray-5": "_onyx-ui_gray-5_GUxiA",
	"gray-6": "_onyx-ui_gray-6_oi-dI",
	"gray-7": "_onyx-ui_gray-7_rSy7P",
	"gray-8": "_onyx-ui_gray-8_JlZRp",
	"gray-9": "_onyx-ui_gray-9_goyha",
	"blue-5": "_onyx-ui_blue-5_t3PoA",
	"indigo-4": "_onyx-ui_indigo-4_vZJ3E",
	"green-4": "_onyx-ui_green-4_Nb9c2",
	"red-4": "_onyx-ui_red-4_ng-uw",
	"grape-4": "_onyx-ui_grape-4_Vu5AE",
	"cyan-4": "_onyx-ui_cyan-4_ewydl",
	"violet-2": "_onyx-ui_violet-2_Rb1tU",
	"blue-2": "_onyx-ui_blue-2_9hso7",
	"teal-2": "_onyx-ui_teal-2_jHoty",
	"lime-3": "_onyx-ui_lime-3_H6TLo",
	"orange-4": "_onyx-ui_orange-4_vZWWW"
}, ie = t.createContext({ textParent: !1 });
function U(e) {
	let t = (0, D.c)(45), n, r, i, o, s, c, l, u, d, f, p, m;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12]) : ({as: n, light: d, caps: i, bold: r, select: p, ellipsis: s, fontSize: c, fontWeight: l, textColor: m, innerStyle: u, children: o, ...f} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = s, t[6] = c, t[7] = l, t[8] = u, t[9] = d, t[10] = f, t[11] = p, t[12] = m);
	let { textParent: h } = a(ie), g = r && H.bold, _ = d && V.light, v = i && V.caps, y = c && ne[`_${c}`], b = l && H[`_${l}`], x = m && re[m], S;
	t[13] !== g || t[14] !== _ || t[15] !== v || t[16] !== y || t[17] !== b || t[18] !== x ? (S = [
		g,
		_,
		v,
		y,
		b,
		x
	].filter(oe), t[13] = g, t[14] = _, t[15] = v, t[16] = y, t[17] = b, t[18] = x, t[19] = S) : S = t[19];
	let C = S.join(" ");
	if (h) {
		let e = n ?? "span", r;
		return t[20] !== e || t[21] !== o || t[22] !== f || t[23] !== C ? (r = /* @__PURE__ */ (0, z.jsx)(e, {
			className: C,
			...f,
			children: o
		}), t[20] = e, t[21] = o, t[22] = f, t[23] = C, t[24] = r) : r = t[24], r;
	}
	let w = p && V.select, T = s && V.ellipsis, E = d && c === "18px" ? V.lighter : d && V.light, O = i && V.caps, k = r && H._600, A = c && ne[`_${c}`] || ne._14px, j = l && H[`_${l}`], M = m && re[m] || re.text, N;
	t[25] !== E || t[26] !== O || t[27] !== k || t[28] !== A || t[29] !== j || t[30] !== M || t[31] !== w || t[32] !== T ? (N = [
		V.Text,
		w,
		T,
		E,
		O,
		k,
		A,
		j,
		M
	].filter(ae), t[25] = E, t[26] = O, t[27] = k, t[28] = A, t[29] = j, t[30] = M, t[31] = w, t[32] = T, t[33] = N) : N = t[33];
	let P = N.join(" "), F = n, I = P + " " + C, L;
	t[34] === Symbol.for("react.memo_cache_sentinel") ? (L = { textParent: !0 }, t[34] = L) : L = t[34];
	let R;
	t[35] === o ? R = t[36] : (R = /* @__PURE__ */ (0, z.jsx)(ie, {
		value: L,
		children: o
	}), t[35] = o, t[36] = R);
	let ee;
	t[37] !== u || t[38] !== I || t[39] !== R ? (ee = /* @__PURE__ */ (0, z.jsx)("span", {
		className: I,
		style: u,
		children: R
	}), t[37] = u, t[38] = I, t[39] = R, t[40] = ee) : ee = t[40];
	let te;
	return t[41] !== f || t[42] !== F || t[43] !== ee ? (te = /* @__PURE__ */ (0, z.jsx)(B, {
		as: F,
		...f,
		children: ee
	}), t[41] = f, t[42] = F, t[43] = ee, t[44] = te) : te = t[44], te;
}
function ae(e) {
	return e;
}
function oe(e) {
	return e;
}
var se = {
	Icon: "_onyx-ui_Icon_CezUJ",
	light: "_onyx-ui_light_4wb4K"
};
//#endregion
//#region src/components/icon/Icon.tsx
function ce(e) {
	let t = (0, D.c)(16), n, r, i, a, o, s;
	if (t[0] !== e) {
		let { ref: c, light: l, icon: u, color: d, size: f, className: p, ...m } = e;
		i = l, n = u, s = d, o = f, r = p, a = m, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s;
	} else n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6];
	let c = s === void 0 ? "gray-7" : s, l = c && re[c], u = i && se.light, d;
	t[7] !== r || t[8] !== l || t[9] !== u ? (d = [
		se.Icon,
		l,
		u,
		r
	].filter(le), t[7] = r, t[8] = l, t[9] = u, t[10] = d) : d = t[10];
	let f = d.join(" "), p;
	return t[11] !== n || t[12] !== f || t[13] !== a || t[14] !== o ? (p = /* @__PURE__ */ (0, z.jsx)(n, {
		size: o,
		className: f,
		...a
	}), t[11] = n, t[12] = f, t[13] = a, t[14] = o, t[15] = p) : p = t[15], p;
}
function le(e) {
	return e;
}
var ue = {
	Button: "_onyx-ui_Button_2sngS",
	hover: "_onyx-ui_hover_kN2-Z",
	selected: "_onyx-ui_selected_LLwtV",
	primary: "_onyx-ui_primary_b-5q5",
	solid: "_onyx-ui_solid_fI6Ci"
}, de = ({ parentFillColor: e, solid: t, primary: n, hover: r, selected: i }) => {
	switch (!0) {
		case i: return "selected";
		case !r && t && n: return "primary";
		case t: return e === "panel" ? "icon" : "gutter";
		case r: return;
	}
}, fe = ({ primary: e, solid: t }) => {
	switch (!0) {
		case t && e: return "content";
		case e: return "primary";
	}
};
function pe(e) {
	let t = (0, D.c)(63), n, r, i, o, u, d, f, p, m, h, g, _, v, y, b;
	if (t[0] !== e) {
		let { ref: a, solid: s, primary: c, hover: l, icon: x, iconColor: S, iconFill: C, rightIcon: w, round: T, bold: E, fontWeight: D, selected: O, opacityOnPress: k, className: A, children: j, ...M } = e;
		h = a, y = s, p = c, o = l, u = x, d = S, f = C, g = w, _ = T, b = E, i = D, v = O, r = A, n = j, m = M, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = u, t[6] = d, t[7] = f, t[8] = p, t[9] = m, t[10] = h, t[11] = g, t[12] = _, t[13] = v, t[14] = y, t[15] = b;
	} else n = t[1], r = t[2], i = t[3], o = t[4], u = t[5], d = t[6], f = t[7], p = t[8], m = t[9], h = t[10], g = t[11], _ = t[12], v = t[13], y = t[14], b = t[15];
	let x = b === void 0 ? !0 : b, S = l(null), C = y && ue.solid, w = p && ue.primary, T = o && ue.hover, E = v && ue.selected, O;
	t[16] !== r || t[17] !== C || t[18] !== w || t[19] !== T || t[20] !== E ? (O = [
		ue.Button,
		C,
		w,
		T,
		E,
		r
	].filter(me), t[16] = r, t[17] = C, t[18] = w, t[19] = T, t[20] = E, t[21] = O) : O = t[21];
	let k = O.join(" "), { parentFillColor: A } = a(ee), j;
	t[22] !== o || t[23] !== A || t[24] !== p || t[25] !== v || t[26] !== y ? (j = de({
		parentFillColor: A,
		solid: y,
		primary: p,
		hover: o,
		selected: v
	}), t[22] = o, t[23] = A, t[24] = p, t[25] = v, t[26] = y, t[27] = j) : j = t[27];
	let M = j, N;
	t[28] !== o || t[29] !== p || t[30] !== v || t[31] !== y ? (N = fe({
		solid: y,
		primary: p,
		hover: o,
		selected: v
	}), t[28] = o, t[29] = p, t[30] = v, t[31] = y, t[32] = N) : N = t[32];
	let P = N, F;
	t[33] === Symbol.for("react.memo_cache_sentinel") ? (F = () => S.current, t[33] = F) : F = t[33], s(h, F);
	let I;
	t[34] === A ? I = t[35] : (I = () => {
		S.current && S.current.style.setProperty("--hover-color", `var(--${A === "panel" ? "icon" : "gutter"}-color)`);
	}, t[34] = A, t[35] = I);
	let L;
	t[36] !== M || t[37] !== A ? (L = [M, A], t[36] = M, t[37] = A, t[38] = L) : L = t[38], c(I, L);
	let R = n ? "8px 12px" : "8px", te = _ ? "max" : "2px", V;
	t[39] !== n || t[40] !== u || t[41] !== d || t[42] !== f || t[43] !== P ? (V = u && /* @__PURE__ */ (0, z.jsx)(ce, {
		icon: u,
		size: 16,
		color: d ?? P,
		fill: f ? "currentColor" : "none",
		style: {
			strokeWidth: 2.5,
			marginTop: -2,
			marginBottom: -2,
			marginLeft: n ? 0 : -2,
			marginRight: 0
		}
	}), t[39] = n, t[40] = u, t[41] = d, t[42] = f, t[43] = P, t[44] = V) : V = t[44];
	let ne;
	t[45] !== x || t[46] !== n || t[47] !== i || t[48] !== P ? (ne = typeof n == "string" ? /* @__PURE__ */ (0, z.jsx)(U, {
		bold: x,
		fontWeight: i,
		textColor: P,
		style: { textAlign: "left" },
		children: n
	}) : n, t[45] = x, t[46] = n, t[47] = i, t[48] = P, t[49] = ne) : ne = t[49];
	let H;
	t[50] !== n || t[51] !== g || t[52] !== P ? (H = g && /* @__PURE__ */ (0, z.jsx)(B, {
		flex: !0,
		align: "middle right",
		children: /* @__PURE__ */ (0, z.jsx)(ce, {
			icon: g,
			size: 16,
			color: P,
			style: {
				strokeWidth: 2.5,
				marginTop: -2,
				marginBottom: -2,
				marginRight: n ? -3 : 0,
				justifySelf: "flex-end"
			}
		})
	}), t[50] = n, t[51] = g, t[52] = P, t[53] = H) : H = t[53];
	let re;
	return t[54] !== k || t[55] !== M || t[56] !== m || t[57] !== R || t[58] !== te || t[59] !== V || t[60] !== ne || t[61] !== H ? (re = /* @__PURE__ */ (0, z.jsxs)(B, {
		ref: S,
		horizontal: !0,
		as: "button",
		type: "button",
		cursor: "pointer",
		padding: R,
		spacing: "8px",
		align: "middle center",
		cornerRadius: te,
		fillColor: M,
		className: k,
		...m,
		children: [
			V,
			ne,
			H
		]
	}), t[54] = k, t[55] = M, t[56] = m, t[57] = R, t[58] = te, t[59] = V, t[60] = ne, t[61] = H, t[62] = re) : re = t[62], re;
}
function me(e) {
	return e;
}
pe.Menu = function({ solid: e, cornerRadius: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, z.jsx)(Ee, {
		anchor: "bottom left",
		...r,
		children: /* @__PURE__ */ (0, z.jsx)(pe, {
			solid: e,
			rightIcon: f,
			cornerRadius: t,
			children: n
		})
	});
};
var he = {
	Input: "_onyx-ui_Input_MpxTL",
	flush: "_onyx-ui_flush_4zQD9"
}, ge = (e) => {
	let t = (0, D.c)(41), n, r, i, a, o, s, d, f, p, m;
	if (t[0] !== e) {
		let { label: c, value: l, lines: u, border: h, flush: g, icon: _, placeholder: v, changeOnEnter: y, innerStyle: b, onValueChange: x, ...S } = e;
		s = c, n = l, m = h, i = g, a = _, f = v, r = y, o = b, d = x, p = S, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = d, t[8] = f, t[9] = p, t[10] = m;
	} else n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], d = t[7], f = t[8], p = t[9], m = t[10];
	let h = m === void 0 ? !0 : m, [g, _] = u(n), v = l(null), y;
	t[11] !== r || t[12] !== d || t[13] !== g ? (y = (e) => {
		let t = e.currentTarget;
		r && e.key === "Enter" && g && (e.preventDefault(), d?.(g), t.value = "");
	}, t[11] = r, t[12] = d, t[13] = g, t[14] = y) : y = t[14];
	let b = y, x;
	t[15] === Symbol.for("react.memo_cache_sentinel") ? (x = (e) => {
		_(e.currentTarget.value);
	}, t[15] = x) : x = t[15];
	let S = x, C;
	t[16] !== d || t[17] !== g ? (C = () => {
		g && d?.(g);
	}, t[16] = d, t[17] = g, t[18] = C) : C = t[18];
	let w = C, T;
	t[19] === Symbol.for("react.memo_cache_sentinel") ? (T = () => {
		v.current && (v.current.style.height = "", v.current.style.height = `${v.current.scrollHeight}px`);
	}, t[19] = T) : T = t[19], c(T);
	let E = i && he.flush, O;
	t[20] === E ? O = t[21] : (O = [he.Input, E].filter(_e), t[20] = E, t[21] = O);
	let k = O.join(" "), A;
	t[22] === a ? A = t[23] : (A = a && /* @__PURE__ */ (0, z.jsx)(ce, {
		icon: a,
		size: 20
	}), t[22] = a, t[23] = A);
	let j;
	t[24] === o ? j = t[25] : (j = {
		background: "transparent",
		...o
	}, t[24] = o, t[25] = j);
	let M;
	t[26] !== w || t[27] !== b || t[28] !== f || t[29] !== j || t[30] !== g ? (M = /* @__PURE__ */ (0, z.jsx)("textarea", {
		ref: v,
		value: g,
		name: "textarea",
		placeholder: f,
		style: j,
		onKeyDown: b,
		onChange: S,
		onBlur: w
	}), t[26] = w, t[27] = b, t[28] = f, t[29] = j, t[30] = g, t[31] = M) : M = t[31];
	let N;
	t[32] !== h || t[33] !== k || t[34] !== p || t[35] !== M || t[36] !== A ? (N = /* @__PURE__ */ (0, z.jsxs)(B, {
		horizontal: !0,
		border: h,
		align: "middle left",
		padding: "4px 8px",
		spacing: "4px",
		className: k,
		...p,
		children: [A, M]
	}), t[32] = h, t[33] = k, t[34] = p, t[35] = M, t[36] = A, t[37] = N) : N = t[37];
	let P;
	return t[38] !== s || t[39] !== N ? (P = /* @__PURE__ */ (0, z.jsx)(Fe, {
		flex: !0,
		label: s,
		children: N
	}), t[38] = s, t[39] = N, t[40] = P) : P = t[40], P;
};
function _e(e) {
	return e;
}
//#endregion
//#region src/components/divider/Divider.tsx
function ve(e) {
	let t = (0, D.c)(8), n, r;
	t[0] === e ? (n = t[1], r = t[2]) : ({style: r, ...n} = e, t[0] = e, t[1] = n, t[2] = r);
	let i;
	t[3] === r ? i = t[4] : (i = {
		...r,
		minWidth: 1,
		minHeight: 1
	}, t[3] = r, t[4] = i);
	let a;
	return t[5] !== n || t[6] !== i ? (a = /* @__PURE__ */ (0, z.jsx)(B, {
		fillColor: "divider",
		style: i,
		...n
	}), t[5] = n, t[6] = i, t[7] = a) : a = t[7], a;
}
var ye = { List: "_onyx-ui_List_FXNAH" };
//#endregion
//#region src/components/list/List.tsx
function be(e) {
	let n = (0, D.c)(8), r, i;
	n[0] === e ? (r = n[1], i = n[2]) : ({children: r, ...i} = e, n[0] = e, n[1] = r, n[2] = i);
	let a;
	n[3] === r ? a = n[4] : (a = t.Children.map(r, xe), n[3] = r, n[4] = a);
	let o;
	return n[5] !== i || n[6] !== a ? (o = /* @__PURE__ */ (0, z.jsx)(B, {
		border: !0,
		cornerRadius: "4px",
		className: ye.List,
		...i,
		children: a
	}), n[5] = i, n[6] = a, n[7] = o) : o = n[7], o;
}
function xe(e, n) {
	return t.isValidElement(e) && /* @__PURE__ */ (0, z.jsxs)(t.Fragment, { children: [n > 0 && /* @__PURE__ */ (0, z.jsx)(ve, {}), e] }, n);
}
//#endregion
//#region src/components/popover/Popover.tsx
function Se({ content: e, isVisible: n, anchor: r, noPortal: i, children: a }) {
	let o = l(null), s = l(null);
	c(() => {
		let e = o.current?.closest("#window")?.querySelector("#overlay");
		if (i && n && o.current && s.current) {
			let t = o.current.getBoundingClientRect(), n = s.current.getBoundingClientRect(), i = e.getBoundingClientRect();
			r === "top right" ? (s.current.style.left = `${t.width}px`, s.current.style.top = `${t.top - n.top}px`) : (s.current.style.left = `${t.left + 1 - i.left}px`, s.current.style.top = `${t.bottom + 0 - i.top}px`);
		} else if (n && o.current && s.current) {
			let t = o.current.getBoundingClientRect(), n = e.getBoundingClientRect();
			r === "top right" ? (s.current.style.left = `${t.right - n.left}px`, s.current.style.top = `${t.top - 8 - n.top}px`) : (s.current.style.left = `${t.left + 1 - n.left}px`, s.current.style.top = `${t.bottom + 0 - n.top}px`);
		}
	}, [
		r,
		n,
		i
	]);
	let u = o.current?.closest("#window")?.querySelector("#overlay"), d = t.Children.only(a), f = /* @__PURE__ */ (0, z.jsx)(B, {
		ref: s,
		absolute: !0,
		shadow: !0,
		fillColor: "content",
		cornerRadius: "4px",
		style: { pointerEvents: "auto" },
		children: e
	});
	return /* @__PURE__ */ (0, z.jsxs)(z.Fragment, { children: [
		t.isValidElement(d) && t.cloneElement(d, {
			ref: o,
			opacityOnPress: !0
		}),
		i && n && u && f,
		!i && n && u && p(f, u)
	] });
}
//#endregion
//#region src/components/menu/Menu.tsx
function Ce(e) {
	let t = (0, D.c)(4), { label: n } = e, r, i;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { margin: "8px 16px" }, i = {
		fontSize: 11,
		lineHeight: "17px",
		whiteSpace: "nowrap"
	}, t[0] = r, t[1] = i) : (r = t[0], i = t[1]);
	let a;
	return t[2] === n ? a = t[3] : (a = /* @__PURE__ */ (0, z.jsx)(U, {
		light: !0,
		caps: !0,
		style: r,
		innerStyle: i,
		children: n
	}), t[2] = n, t[3] = a), a;
}
function we() {
	let e = (0, D.c)(1), t;
	return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = /* @__PURE__ */ (0, z.jsx)(ve, { style: { margin: "8px" } }), e[0] = t) : t = e[0], t;
}
function Te(e) {
	let t = (0, D.c)(19), n, r, i, a, o, s, c;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7]) : ({title: s, value: c, style: o, children: n, onClick: r, onSelect: i, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c);
	let l;
	t[8] !== r || t[9] !== i || t[10] !== c ? (l = (e) => {
		r?.(e), i?.(c);
	}, t[8] = r, t[9] = i, t[10] = c, t[11] = l) : l = t[11];
	let u = l, d;
	t[12] === o ? d = t[13] : (d = {
		whiteSpace: "nowrap",
		...o
	}, t[12] = o, t[13] = d);
	let f = s ?? n, p;
	return t[14] !== u || t[15] !== a || t[16] !== d || t[17] !== f ? (p = /* @__PURE__ */ (0, z.jsx)(pe, {
		hover: !0,
		align: "middle left",
		cornerRadius: "0px",
		style: d,
		onClick: u,
		...a,
		children: f
	}), t[14] = u, t[15] = a, t[16] = d, t[17] = f, t[18] = p) : p = t[18], p;
}
function Ee(e) {
	let r = (0, D.c)(22), a, s, c, d;
	r[0] === e ? (a = r[1], s = r[2], c = r[3], d = r[4]) : ({items: s, children: a, onSelect: c, ...d} = e, r[0] = e, r[1] = a, r[2] = s, r[3] = c, r[4] = d);
	let f = l(null), [p, m] = u(!1), h;
	r[5] === Symbol.for("react.memo_cache_sentinel") ? (h = (e) => {
		f.current?.contains(e.target) || m(!1);
	}, r[5] = h) : h = r[5];
	let g = h, _, v;
	r[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = () => (document.addEventListener("pointerdown", g), () => {
		document.removeEventListener("pointerdown", g);
	}), v = [], r[6] = _, r[7] = v) : (_ = r[6], v = r[7]), o(_, v);
	let y;
	r[8] === c ? y = r[9] : (y = (e) => {
		m(!1), c?.(e);
	}, r[8] = c, r[9] = y);
	let b = y, x;
	if (r[10] !== b || r[11] !== s) {
		let e;
		r[13] === b ? e = r[14] : (e = (e, t) => i(e) && n(e, {
			key: t,
			onSelect: (...t) => {
				let n = t;
				b(...n), e.props.onSelect?.(...n);
			}
		}), r[13] = b, r[14] = e), x = s.map(e), r[10] = b, r[11] = s, r[12] = x;
	} else x = r[12];
	let S;
	r[15] === x ? S = r[16] : (S = /* @__PURE__ */ (0, z.jsx)(B, {
		ref: f,
		padding: "8px 0px",
		children: x
	}), r[15] = x, r[16] = S);
	let C = S, w;
	if (r[17] !== a || r[18] !== p || r[19] !== C || r[20] !== d) {
		let e = t.Children.only(a);
		w = /* @__PURE__ */ (0, z.jsx)(Se, {
			isVisible: p,
			content: C,
			...d,
			children: t.isValidElement(e) && t.cloneElement(e, {
				cursor: "pointer",
				solid: p || e.props.solid,
				onClick: () => {
					m(De);
				}
			})
		}), r[17] = a, r[18] = p, r[19] = C, r[20] = d, r[21] = w;
	} else w = r[21];
	return w;
}
function De(e) {
	return !e;
}
Ee.Item = Te, Ee.Divider = we, Ee.Group = Ce;
//#endregion
//#region src/components/checkbox/Checkbox.tsx
function Oe(e) {
	let t = (0, D.c)(17), { label: n, value: r, onValueChange: i } = e, a;
	t[0] === i ? a = t[1] : (a = (e) => {
		i?.(e.currentTarget.checked);
	}, t[0] = i, t[1] = a);
	let o = a, s = r ? "primary" : "divider", c;
	t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = {
		width: 24,
		height: 24
	}, t[2] = c) : c = t[2];
	let l;
	t[3] !== o || t[4] !== r ? (l = /* @__PURE__ */ (0, z.jsx)(B, {
		absolute: !0,
		as: "input",
		type: "checkbox",
		checked: r,
		onChange: o
	}), t[3] = o, t[4] = r, t[5] = l) : l = t[5];
	let u;
	t[6] === r ? u = t[7] : (u = r && /* @__PURE__ */ (0, z.jsx)(ce, {
		icon: d,
		size: 20,
		color: "white"
	}), t[6] = r, t[7] = u);
	let f;
	t[8] !== s || t[9] !== l || t[10] !== u ? (f = /* @__PURE__ */ (0, z.jsxs)(B, {
		fillColor: s,
		cornerRadius: "2px",
		align: "middle center",
		style: c,
		children: [l, u]
	}), t[8] = s, t[9] = l, t[10] = u, t[11] = f) : f = t[11];
	let p;
	t[12] === n ? p = t[13] : (p = /* @__PURE__ */ (0, z.jsx)(U, { children: n }), t[12] = n, t[13] = p);
	let m;
	return t[14] !== f || t[15] !== p ? (m = /* @__PURE__ */ (0, z.jsx)(Fe, { children: /* @__PURE__ */ (0, z.jsxs)(B, {
		horizontal: !0,
		spacing: "8px",
		align: "middle left",
		children: [f, p]
	}) }), t[14] = f, t[15] = p, t[16] = m) : m = t[16], m;
}
//#endregion
//#region src/components/select/Select.tsx
function ke(e) {
	let t = (0, D.c)(12), n, r, i, a;
	if (t[0] !== e) {
		let { label: o, value: s, onClick: c, onSelect: l, ...u } = e;
		n = o, a = s, r = l, i = u, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a;
	} else n = t[1], r = t[2], i = t[3], a = t[4];
	let o;
	t[5] !== r || t[6] !== a ? (o = () => {
		r?.(a);
	}, t[5] = r, t[6] = a, t[7] = o) : o = t[7];
	let s = o, c;
	return t[8] !== s || t[9] !== n || t[10] !== i ? (c = /* @__PURE__ */ (0, z.jsx)(Ee.Item, {
		title: n,
		onClick: s,
		...i
	}), t[8] = s, t[9] = n, t[10] = i, t[11] = c) : c = t[11], c;
}
function Ae({ label: e, value: t, options: n, onValueChange: r, ...i }) {
	let a = (e) => {
		r?.(e);
	}, o = n.flatMap((e, r) => {
		switch (!0) {
			case "options" in e: return [
				r !== 0 && /* @__PURE__ */ (0, z.jsx)(Ee.Divider, {}),
				...e.label ? [/* @__PURE__ */ (0, z.jsx)(Ee.Group, { label: e.label })] : [],
				...e.options.map((e) => /* @__PURE__ */ (0, z.jsx)(ke, {
					selected: e.value === t,
					icon: e.icon,
					iconColor: e.iconColor,
					iconFill: e.iconFill,
					label: e.label,
					value: e.value,
					tooltip: e.tooltip,
					onSelect: a
				})),
				r !== n.length - 1 && !("options" in n[r]) && /* @__PURE__ */ (0, z.jsx)(Ee.Divider, {})
			].filter((e) => e !== !1);
			default: return /* @__PURE__ */ (0, z.jsx)(ke, {
				selected: e.value === t,
				icon: e.icon,
				iconColor: e.iconColor,
				iconFill: e.iconFill,
				label: e.label,
				value: e.value,
				tooltip: e.tooltip,
				onSelect: a
			});
		}
	}), s = n.reduce((e, n) => "options" in n ? n.options.find((e) => e.value === t) ?? e : n.value === t ? n : e, {});
	return /* @__PURE__ */ (0, z.jsx)(B, {
		style: { marginBottom: -9 },
		children: /* @__PURE__ */ (0, z.jsx)(Ee, {
			items: o,
			...i,
			children: /* @__PURE__ */ (0, z.jsx)(Fe, {
				chevron: !0,
				label: e,
				children: /* @__PURE__ */ (0, z.jsxs)(B, {
					horizontal: !0,
					spacing: "4px",
					align: "middle left",
					style: { padding: "0 0 8px 0" },
					children: ["icon" in s && s.icon && /* @__PURE__ */ (0, z.jsx)(ce, {
						icon: s.icon,
						color: s.iconColor,
						fill: s.iconFill ? "currentColor" : "none",
						size: 14,
						style: { margin: "-2px 0" }
					}), /* @__PURE__ */ (0, z.jsx)(U, { children: s.label })]
				})
			})
		})
	});
}
//#endregion
//#region src/components/form/Form.tsx
function je() {}
var Me = r({
	fields: {},
	onFieldChange: () => void 0
});
function Ne(e) {
	let n = (0, D.c)(8), { name: r, children: i } = e, { fields: o, onFieldChange: s } = a(Me), c;
	n[0] !== r || n[1] !== s ? (c = (e) => {
		s(r, e);
	}, n[0] = r, n[1] = s, n[2] = c) : c = n[2];
	let l = c, u;
	if (n[3] !== i || n[4] !== o || n[5] !== l || n[6] !== r) {
		let e = t.Children.only(i);
		u = t.isValidElement(e) && t.cloneElement(e, {
			value: o[r],
			onValueChange: l
		}), n[3] = i, n[4] = o, n[5] = l, n[6] = r, n[7] = u;
	} else u = n[7];
	return u;
}
Ne.withComponent = (e) => ({ name: t, ...n }) => /* @__PURE__ */ (0, z.jsx)(Pe.Field, {
	name: t,
	children: /* @__PURE__ */ (0, z.jsx)(e, { ...n })
});
function Pe(e) {
	let t = (0, D.c)(14), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({fields: r, children: n, onFieldChange: a, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let o = a === void 0 ? je : a, s;
	t[5] !== r || t[6] !== o ? (s = {
		fields: r,
		onFieldChange: o
	}, t[5] = r, t[6] = o, t[7] = s) : s = t[7];
	let c = s, l;
	t[8] !== n || t[9] !== i ? (l = /* @__PURE__ */ (0, z.jsx)(B, {
		as: "form",
		...i,
		children: n
	}), t[8] = n, t[9] = i, t[10] = l) : l = t[10];
	let u;
	return t[11] !== c || t[12] !== l ? (u = /* @__PURE__ */ (0, z.jsx)(Me, {
		value: c,
		children: l
	}), t[11] = c, t[12] = l, t[13] = u) : u = t[13], u;
}
Pe.Field = Ne;
//#endregion
//#region src/components/label/Label.tsx
function Fe(e) {
	let t = (0, D.c)(14), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({label: i, chevron: n, children: r, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let o;
	t[5] !== n || t[6] !== i ? (o = i && /* @__PURE__ */ (0, z.jsxs)(B, {
		horizontal: !0,
		spacing: "4px",
		align: "middle left",
		children: [/* @__PURE__ */ (0, z.jsx)(U, {
			light: !0,
			caps: !0,
			innerStyle: {
				fontSize: 11,
				lineHeight: "17px"
			},
			children: i
		}), n && /* @__PURE__ */ (0, z.jsx)(ce, {
			icon: f,
			size: 16,
			style: {
				opacity: .6,
				margin: -4,
				strokeWidth: 1
			}
		})]
	}), t[5] = n, t[6] = i, t[7] = o) : o = t[7];
	let s;
	t[8] === r ? s = t[9] : (s = /* @__PURE__ */ (0, z.jsx)(B, { children: r }), t[8] = r, t[9] = s);
	let c;
	return t[10] !== a || t[11] !== o || t[12] !== s ? (c = /* @__PURE__ */ (0, z.jsxs)(B, {
		as: "label",
		cursor: "pointer",
		spacing: "8px",
		...a,
		children: [o, s]
	}), t[10] = a, t[11] = o, t[12] = s, t[13] = c) : c = t[13], c;
}
var Ie = {
	Image: "_onyx-ui_Image_FmDOS",
	border: "_onyx-ui_border_rttIj",
	Stack: "_onyx-ui_Stack_4xsQe",
	StackItem: "_onyx-ui_StackItem_QKBcL"
};
//#endregion
//#region src/components/avatar/Avatar.tsx
function Le(e) {
	let t = (0, D.c)(24), n, r, i, a, o;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({name: a, label: i, imageOnly: r, imageBorder: n, ...o} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
	let s;
	t[6] === a ? s = t[7] : (s = a?.split(" ").map(ze).join(""), t[6] = a, t[7] = s);
	let c = s, l = n && Ie.border, u;
	t[8] === l ? u = t[9] : (u = [Ie.Image, l].filter(Re), t[8] = l, t[9] = u);
	let d = u.join(" "), f;
	t[10] === c ? f = t[11] : (f = /* @__PURE__ */ (0, z.jsx)(U, {
		fontSize: "12px",
		fontWeight: "600",
		children: c
	}), t[10] = c, t[11] = f);
	let p;
	t[12] !== n || t[13] !== d || t[14] !== f ? (p = /* @__PURE__ */ (0, z.jsx)(B, {
		border: n,
		borderColor: "primary",
		cornerRadius: "max",
		fillColor: "icon",
		align: "middle center",
		className: d,
		children: f
	}), t[12] = n, t[13] = d, t[14] = f, t[15] = p) : p = t[15];
	let m;
	t[16] !== r || t[17] !== i || t[18] !== a ? (m = !r && /* @__PURE__ */ (0, z.jsxs)(B, {
		spacing: "8px",
		align: "middle left",
		style: { gap: 6 },
		children: [/* @__PURE__ */ (0, z.jsx)(U, { children: a }), /* @__PURE__ */ (0, z.jsx)(U, {
			light: !0,
			fontSize: "12px",
			children: i
		})]
	}), t[16] = r, t[17] = i, t[18] = a, t[19] = m) : m = t[19];
	let h;
	return t[20] !== o || t[21] !== p || t[22] !== m ? (h = /* @__PURE__ */ (0, z.jsxs)(B, {
		horizontal: !0,
		spacing: "8px",
		...o,
		children: [p, m]
	}), t[20] = o, t[21] = p, t[22] = m, t[23] = h) : h = t[23], h;
}
function Re(e) {
	return e;
}
function ze(e) {
	return e[0].toUpperCase();
}
Le.Stack = function({ children: e, ...n }) {
	let r = t.Children.toArray(e);
	return /* @__PURE__ */ (0, z.jsxs)(B, {
		horizontal: !0,
		className: Ie.Stack,
		...n,
		children: [t.Children.map(e, (e) => t.isValidElement(e) && t.cloneElement(e, { className: Ie.StackItem })), r.length === 0 && /* @__PURE__ */ (0, z.jsx)(B, {
			cornerRadius: "max",
			className: Ie.Image,
			style: { border: "1px dashed var(--divider-color)" }
		})]
	});
};
var Be = { text: "_onyx-ui_text_-bQVx" };
//#endregion
//#region src/components/chip/Chip.tsx
function Ve(e) {
	let t = (0, D.c)(27), n, r, i, a, o, s, c, l;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8]) : ({light: s, icon: i, iconSize: o, iconColor: a, fillColor: r, children: n, style: l, ...c} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l);
	let u;
	t[9] !== i || t[10] !== a || t[11] !== o || t[12] !== s ? (u = i && /* @__PURE__ */ (0, z.jsx)(ce, {
		icon: i,
		size: o ?? 14,
		color: a,
		style: {
			margin: "-2px 0",
			opacity: s ? .6 : void 0
		}
	}), t[9] = i, t[10] = a, t[11] = o, t[12] = s, t[13] = u) : u = t[13];
	let d = r ? "2px 4px" : void 0, f = r ? "-2px 0" : void 0, p;
	t[14] !== l || t[15] !== f ? (p = {
		margin: f,
		...l
	}, t[14] = l, t[15] = f, t[16] = p) : p = t[16];
	let m;
	t[17] !== n || t[18] !== r || t[19] !== s || t[20] !== c || t[21] !== d || t[22] !== p ? (m = /* @__PURE__ */ (0, z.jsx)(U, {
		light: s,
		fillColor: r,
		cornerRadius: "2px",
		padding: d,
		className: Be.text,
		style: p,
		...c,
		children: n
	}), t[17] = n, t[18] = r, t[19] = s, t[20] = c, t[21] = d, t[22] = p, t[23] = m) : m = t[23];
	let h;
	return t[24] !== u || t[25] !== m ? (h = /* @__PURE__ */ (0, z.jsxs)(B, {
		horizontal: !0,
		spacing: "4px",
		align: "middle left",
		children: [u, m]
	}), t[24] = u, t[25] = m, t[26] = h) : h = t[26], h;
}
//#endregion
//#region src/components/tabs/Tabs.tsx
function He(e) {
	let t = (0, D.c)(16), n, r, i, a, o;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({index: r, selected: o, children: n, onTabSelect: i, ...a} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
	let s;
	t[6] !== r || t[7] !== i ? (s = () => {
		i(r);
	}, t[6] = r, t[7] = i, t[8] = s) : s = t[8];
	let c = s, l = !o, u = o ? "primary" : void 0, d;
	t[9] === Symbol.for("react.memo_cache_sentinel") ? (d = { paddingBottom: 8 }, t[9] = d) : d = t[9];
	let f;
	return t[10] !== n || t[11] !== c || t[12] !== a || t[13] !== l || t[14] !== u ? (f = /* @__PURE__ */ (0, z.jsx)(U, {
		opacityOnPress: !0,
		light: l,
		fontSize: "18px",
		cursor: "pointer",
		negativeBorder: !0,
		border: "bottom",
		borderColor: u,
		style: d,
		onClick: c,
		...a,
		children: n
	}), t[10] = n, t[11] = c, t[12] = a, t[13] = l, t[14] = u, t[15] = f) : f = t[15], f;
}
function Ue(e) {
	let t = (0, D.c)(15), n, r, i, a;
	t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({selectedTabIndex: a, children: n, onTabSelect: r, ...i} = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
	let o;
	if (t[5] !== n || t[6] !== r || t[7] !== a) {
		let e;
		t[9] !== r || t[10] !== a ? (e = (e, t) => {
			let { title: n } = e;
			return /* @__PURE__ */ (0, z.jsx)(He, {
				index: t,
				selected: t === a,
				onTabSelect: r,
				children: n
			}, t);
		}, t[9] = r, t[10] = a, t[11] = e) : e = t[11], o = n.map(e), t[5] = n, t[6] = r, t[7] = a, t[8] = o;
	} else o = t[8];
	let s;
	return t[12] !== i || t[13] !== o ? (s = /* @__PURE__ */ (0, z.jsx)(B, {
		horizontal: !0,
		spacing: "16px",
		...i,
		children: o
	}), t[12] = i, t[13] = o, t[14] = s) : s = t[14], s;
}
Ue.Panel = function({ active: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, z.jsx)(B, {
		padding: "16px",
		style: {
			flexShrink: 0,
			flexBasis: "100%",
			overflowY: "auto",
			scrollSnapAlign: "start"
		},
		...n,
		children: e && t
	});
};
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function We(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var Ge = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ke = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, qe = {};
function Je(e, t) {
	return ((t || qe).jsx ? Ke : Ge).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var Ye = /[ \t\n\f\r]/g;
function Xe(e) {
	return typeof e == "object" ? e.type === "text" ? Ze(e.value) : !1 : Ze(e);
}
function Ze(e) {
	return e.replace(Ye, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var Qe = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Qe.prototype.normal = {}, Qe.prototype.property = {}, Qe.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function $e(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Qe(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function et(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var W = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
W.prototype.attribute = "", W.prototype.booleanish = !1, W.prototype.boolean = !1, W.prototype.commaOrSpaceSeparated = !1, W.prototype.commaSeparated = !1, W.prototype.defined = !1, W.prototype.mustUseProperty = !1, W.prototype.number = !1, W.prototype.overloadedBoolean = !1, W.prototype.property = "", W.prototype.spaceSeparated = !1, W.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var tt = /* @__PURE__ */ x({
	boolean: () => G,
	booleanish: () => K,
	commaOrSpaceSeparated: () => at,
	commaSeparated: () => it,
	number: () => q,
	overloadedBoolean: () => rt,
	spaceSeparated: () => J
}), nt = 0, G = ot(), K = ot(), rt = ot(), q = ot(), J = ot(), it = ot(), at = ot();
function ot() {
	return 2 ** ++nt;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var st = Object.keys(tt), ct = class extends W {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), lt(this, "space", r), typeof n == "number") for (; ++i < st.length;) {
			let e = st[i];
			lt(this, st[i], (n & tt[e]) === tt[e]);
		}
	}
};
ct.prototype.defined = !0;
function lt(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function ut(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new ct(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[et(r)] = r, n[et(a.attribute)] = r;
	}
	return new Qe(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var dt = ut({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: K,
		ariaAutoComplete: null,
		ariaBusy: K,
		ariaChecked: K,
		ariaColCount: q,
		ariaColIndex: q,
		ariaColSpan: q,
		ariaControls: J,
		ariaCurrent: null,
		ariaDescribedBy: J,
		ariaDetails: null,
		ariaDisabled: K,
		ariaDropEffect: J,
		ariaErrorMessage: null,
		ariaExpanded: K,
		ariaFlowTo: J,
		ariaGrabbed: K,
		ariaHasPopup: null,
		ariaHidden: K,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: J,
		ariaLevel: q,
		ariaLive: null,
		ariaModal: K,
		ariaMultiLine: K,
		ariaMultiSelectable: K,
		ariaOrientation: null,
		ariaOwns: J,
		ariaPlaceholder: null,
		ariaPosInSet: q,
		ariaPressed: K,
		ariaReadOnly: K,
		ariaRelevant: null,
		ariaRequired: K,
		ariaRoleDescription: J,
		ariaRowCount: q,
		ariaRowIndex: q,
		ariaRowSpan: q,
		ariaSelected: K,
		ariaSetSize: q,
		ariaSort: null,
		ariaValueMax: q,
		ariaValueMin: q,
		ariaValueNow: q,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function ft(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function pt(e, t) {
	return ft(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var mt = ut({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: it,
		acceptCharset: J,
		accessKey: J,
		action: null,
		allow: null,
		allowFullScreen: G,
		allowPaymentRequest: G,
		allowUserMedia: G,
		alt: null,
		as: null,
		async: G,
		autoCapitalize: null,
		autoComplete: J,
		autoFocus: G,
		autoPlay: G,
		blocking: J,
		capture: null,
		charSet: null,
		checked: G,
		cite: null,
		className: J,
		cols: q,
		colSpan: null,
		content: null,
		contentEditable: K,
		controls: G,
		controlsList: J,
		coords: q | it,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: G,
		defer: G,
		dir: null,
		dirName: null,
		disabled: G,
		download: rt,
		draggable: K,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: G,
		formTarget: null,
		headers: J,
		height: q,
		hidden: rt,
		high: q,
		href: null,
		hrefLang: null,
		htmlFor: J,
		httpEquiv: J,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: G,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: G,
		itemId: null,
		itemProp: J,
		itemRef: J,
		itemScope: G,
		itemType: J,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: G,
		low: q,
		manifest: null,
		max: null,
		maxLength: q,
		media: null,
		method: null,
		min: null,
		minLength: q,
		multiple: G,
		muted: G,
		name: null,
		nonce: null,
		noModule: G,
		noValidate: G,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: G,
		optimum: q,
		pattern: null,
		ping: J,
		placeholder: null,
		playsInline: G,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: G,
		referrerPolicy: null,
		rel: J,
		required: G,
		reversed: G,
		rows: q,
		rowSpan: q,
		sandbox: J,
		scope: null,
		scoped: G,
		seamless: G,
		selected: G,
		shadowRootClonable: G,
		shadowRootDelegatesFocus: G,
		shadowRootMode: null,
		shape: null,
		size: q,
		sizes: null,
		slot: null,
		span: q,
		spellCheck: K,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: q,
		step: null,
		style: null,
		tabIndex: q,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: G,
		useMap: null,
		value: K,
		width: q,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: J,
		axis: null,
		background: null,
		bgColor: null,
		border: q,
		borderColor: null,
		bottomMargin: q,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: G,
		declare: G,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: q,
		leftMargin: q,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: q,
		marginWidth: q,
		noResize: G,
		noHref: G,
		noShade: G,
		noWrap: G,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: q,
		rules: null,
		scheme: null,
		scrolling: K,
		standby: null,
		summary: null,
		text: null,
		topMargin: q,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: q,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: G,
		disableRemotePlayback: G,
		prefix: null,
		property: null,
		results: q,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: pt
}), ht = ut({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: at,
		accentHeight: q,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: q,
		amplitude: q,
		arabicForm: null,
		ascent: q,
		attributeName: null,
		attributeType: null,
		azimuth: q,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: q,
		by: null,
		calcMode: null,
		capHeight: q,
		className: J,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: q,
		diffuseConstant: q,
		direction: null,
		display: null,
		dur: null,
		divisor: q,
		dominantBaseline: null,
		download: G,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: q,
		enableBackground: null,
		end: null,
		event: null,
		exponent: q,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: q,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: it,
		g2: it,
		glyphName: it,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: q,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: q,
		horizOriginX: q,
		horizOriginY: q,
		id: null,
		ideographic: q,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: q,
		k: q,
		k1: q,
		k2: q,
		k3: q,
		k4: q,
		kernelMatrix: at,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: q,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: q,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: q,
		overlineThickness: q,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: q,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: J,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: q,
		pointsAtY: q,
		pointsAtZ: q,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: at,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: at,
		rev: at,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: at,
		requiredFeatures: at,
		requiredFonts: at,
		requiredFormats: at,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: q,
		specularExponent: q,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: q,
		strikethroughThickness: q,
		string: null,
		stroke: null,
		strokeDashArray: at,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: q,
		strokeOpacity: q,
		strokeWidth: null,
		style: null,
		surfaceScale: q,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: at,
		tabIndex: q,
		tableValues: null,
		target: null,
		targetX: q,
		targetY: q,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: at,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: q,
		underlineThickness: q,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: q,
		values: null,
		vAlphabetic: q,
		vMathematical: q,
		vectorEffect: null,
		vHanging: q,
		vIdeographic: q,
		version: null,
		vertAdvY: q,
		vertOriginX: q,
		vertOriginY: q,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: q,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: ft
}), gt = ut({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), _t = ut({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: pt
}), vt = ut({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), yt = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, bt = /[A-Z]/g, xt = /-[a-z]/g, St = /^data[-\w.:]+$/i;
function Ct(e, t) {
	let n = et(t), r = t, i = W;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && St.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(xt, Tt);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!xt.test(e)) {
				let n = e.replace(bt, wt);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = ct;
	}
	return new i(r, t);
}
function wt(e) {
	return "-" + e.toLowerCase();
}
function Tt(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var Et = $e([
	dt,
	mt,
	gt,
	_t,
	vt
], "html"), Dt = $e([
	dt,
	ht,
	gt,
	_t,
	vt
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function Ot(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var kt = /* @__PURE__ */ b(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g, u = "\n", d = "/", f = "*", p = "", m = "comment", h = "declaration";
	function g(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, g = 1;
		function v(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf(u);
			g = ~n ? e.length - n : g + e.length;
		}
		function y() {
			var e = {
				line: l,
				column: g
			};
			return function(t) {
				return t.position = new b(e), C(), t;
			};
		}
		function b(e) {
			this.start = e, this.end = {
				line: l,
				column: g
			}, this.source = t.source;
		}
		b.prototype.content = e;
		function x(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + g + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = g, r.source = e, !t.silent) throw r;
		}
		function S(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return v(r), e = e.slice(r.length), n;
			}
		}
		function C() {
			S(i);
		}
		function w(e) {
			var t;
			for (e ||= []; t = T();) t !== !1 && e.push(t);
			return e;
		}
		function T() {
			var t = y();
			if (!(d != e.charAt(0) || f != e.charAt(1))) {
				for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));) ++n;
				if (n += 2, p === e.charAt(n - 1)) return x("End of comment missing");
				var r = e.slice(2, n - 2);
				return g += 2, v(r), e = e.slice(n), g += 2, t({
					type: m,
					comment: r
				});
			}
		}
		function E() {
			var e = y(), t = S(a);
			if (t) {
				if (T(), !S(o)) return x("property missing ':'");
				var r = S(s), i = e({
					type: h,
					property: _(t[0].replace(n, p)),
					value: r ? _(r[0].replace(n, p)) : p
				});
				return S(c), i;
			}
		}
		function D() {
			var e = [];
			w(e);
			for (var t; t = E();) t !== !1 && (e.push(t), w(e));
			return e;
		}
		return C(), D();
	}
	function _(e) {
		return e ? e.replace(l, p) : p;
	}
	t.exports = g;
})), At = /* @__PURE__ */ b(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(kt());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), jt = /* @__PURE__ */ b(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), Mt = /* @__PURE__ */ b(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(At()), r = jt();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), Nt = Ft("end"), Pt = Ft("start");
function Ft(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function It(e) {
	let t = Pt(e), n = Nt(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function Lt(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? zt(e.position) : "start" in e || "end" in e ? zt(e) : "line" in e || "column" in e ? Rt(e) : "";
}
function Rt(e) {
	return Bt(e && e.line) + ":" + Bt(e && e.column);
}
function zt(e) {
	return Rt(e && e.start) + "-" + Rt(e && e.end);
}
function Bt(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var Y = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = Lt(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
Y.prototype.file = "", Y.prototype.name = "", Y.prototype.reason = "", Y.prototype.message = "", Y.prototype.stack = "", Y.prototype.column = void 0, Y.prototype.line = void 0, Y.prototype.ancestors = void 0, Y.prototype.cause = void 0, Y.prototype.fatal = void 0, Y.prototype.place = void 0, Y.prototype.ruleId = void 0, Y.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var Vt = /* @__PURE__ */ C(Mt(), 1), Ht = {}.hasOwnProperty, Ut = /* @__PURE__ */ new Map(), Wt = /[A-Z]/g, Gt = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), Kt = new Set(["td", "th"]), qt = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Jt(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = on(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = an(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? Dt : Et,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Yt(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Yt(e, t, n) {
	if (t.type === "element") return Xt(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Zt(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return $t(e, t, n);
	if (t.type === "mdxjsEsm") return Qt(e, t);
	if (t.type === "root") return en(e, t, n);
	if (t.type === "text") return tn(e, t);
}
function Xt(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Dt, e.schema = i), e.ancestors.push(t);
	let a = fn(e, t.tagName, !1), o = sn(e, t), s = ln(e, t);
	return Gt.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !Xe(e) : !0;
	})), nn(e, o, a, t), rn(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Zt(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	pn(e, t.position);
}
function Qt(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	pn(e, t.position);
}
function $t(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = Dt, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : fn(e, t.name, !0), o = cn(e, t), s = ln(e, t);
	return nn(e, o, a, t), rn(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function en(e, t, n) {
	let r = {};
	return rn(r, ln(e, t)), e.create(t, e.Fragment, r, n);
}
function tn(e, t) {
	return t.value;
}
function nn(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function rn(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function an(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function on(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = Pt(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function sn(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && Ht.call(t.properties, i)) {
		let a = un(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && Kt.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function cn(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else pn(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else pn(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function ln(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : Ut;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Yt(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function un(e, t, n) {
	let r = Ct(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? We(n) : Ot(n)), r.property === "style") {
			let t = typeof n == "object" ? n : dn(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = mn(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? yt[r.property] || r.property : r.attribute, n];
	}
}
function dn(e, t) {
	try {
		return (0, Vt.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new Y("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = qt + "#cannot-parse-style-attribute", r;
	}
}
function fn(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = Je(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = Je(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return Ht.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	pn(e);
}
function pn(e, t) {
	let n = new Y("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = qt + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function mn(e) {
	let t = {}, n;
	for (n in e) Ht.call(e, n) && (t[hn(n)] = e[n]);
	return t;
}
function hn(e) {
	let t = e.replace(Wt, gn);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function gn(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var _n = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, vn = {};
function yn(e, t) {
	let n = t || vn;
	return bn(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function bn(e, t, n) {
	if (Sn(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return xn(e.children, t, n);
	}
	return Array.isArray(e) ? xn(e, t, n) : "";
}
function xn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = bn(e[i], t, n);
	return r.join("");
}
function Sn(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var Cn = document.createElement("i");
function wn(e) {
	let t = "&" + e + ";";
	Cn.innerHTML = t;
	let n = Cn.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function Tn(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function En(e, t) {
	return e.length > 0 ? (Tn(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var Dn = {}.hasOwnProperty;
function On(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) kn(t, e[n]);
	return t;
}
function kn(e, t) {
	let n;
	for (n in t) {
		let r = (Dn.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			Dn.call(r, a) || (r[a] = []);
			let e = i[a];
			An(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function An(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	Tn(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function jn(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function Mn(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var Nn = Hn(/[A-Za-z]/), Pn = Hn(/[\dA-Za-z]/), Fn = Hn(/[#-'*+\--9=?A-Z^-~]/);
function In(e) {
	return e !== null && (e < 32 || e === 127);
}
var Ln = Hn(/\d/), Rn = Hn(/[\dA-Fa-f]/), zn = Hn(/[!-/:-@[-`{-~]/);
function X(e) {
	return e !== null && e < -2;
}
function Z(e) {
	return e !== null && (e < 0 || e === 32);
}
function Q(e) {
	return e === -2 || e === -1 || e === 32;
}
var Bn = Hn(/\p{P}|\p{S}/u), Vn = Hn(/\s/);
function Hn(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function Un(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && Pn(e.charCodeAt(n + 1)) && Pn(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function $(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Q(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Q(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var Wn = { tokenize: Gn };
function Gn(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return X(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var Kn = { tokenize: Jn }, qn = { tokenize: Yn };
function Jn(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return Tn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(qn, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(qn, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return X(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			Tn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Yn(e, t, n) {
	return $(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function Xn(e) {
	if (e === null || Z(e) || Vn(e)) return 1;
	if (Bn(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function Zn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var Qn = {
	name: "attention",
	resolveAll: $n,
	tokenize: er
};
function $n(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			tr(d, -c), tr(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = En(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = En(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = En(l, Zn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = En(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = En(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, Tn(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function er(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Xn(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Xn(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function tr(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var nr = {
	name: "autolink",
	tokenize: rr
};
function rr(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return Nn(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || Pn(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || Pn(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || In(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : Fn(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return Pn(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || Pn(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var ir = {
	partial: !0,
	tokenize: ar
};
function ar(e, t, n) {
	return r;
	function r(t) {
		return Q(t) ? $(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || X(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var or = {
	continuation: { tokenize: cr },
	exit: lr,
	name: "blockQuote",
	tokenize: sr
};
function sr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Q(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function cr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Q(t) ? $(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(or, t, n)(r);
	}
}
function lr(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var ur = {
	name: "characterEscape",
	tokenize: dr
};
function dr(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return zn(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var fr = {
	name: "characterReference",
	tokenize: pr
};
function pr(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = Pn, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Rn, u) : (e.enter("characterReferenceValue"), a = 7, o = Ln, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === Pn && !wn(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var mr = {
	partial: !0,
	tokenize: _r
}, hr = {
	concrete: !0,
	name: "codeFenced",
	tokenize: gr
};
function gr(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || X(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(mr, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || X(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || X(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || X(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Q(t) ? $(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || X(t) ? e.check(mr, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || X(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Q(t) ? $(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || X(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function _r(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var vr = {
	name: "codeIndented",
	tokenize: br
}, yr = {
	partial: !0,
	tokenize: xr
};
function br(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : X(t) ? e.attempt(yr, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || X(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function xr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : X(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var Sr = {
	name: "codeText",
	previous: wr,
	resolve: Cr,
	tokenize: Tr
};
function Cr(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function wr(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Tr(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || X(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Er = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && Dr(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), Dr(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Dr(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			Dr(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			Dr(this.left, t.reverse());
		}
	}
};
function Dr(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function Or(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Er(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, kr(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return Tn(e, 0, Infinity, u.slice(0)), !l;
}
function kr(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var Ar = {
	resolve: Mr,
	tokenize: Nr
}, jr = {
	partial: !0,
	tokenize: Pr
};
function Mr(e) {
	return Or(e), e;
}
function Nr(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : X(t) ? e.check(jr, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function Pr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || X(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function Fr(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || In(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || X(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || Z(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || In(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function Ir(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : X(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || X(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !Q(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function Lr(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || X(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function Rr(e, t) {
	let n;
	return r;
	function r(i) {
		return X(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? $(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var zr = {
	name: "definition",
	tokenize: Vr
}, Br = {
	partial: !0,
	tokenize: Hr
};
function Vr(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Ir.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = Mn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return Z(t) ? Rr(e, l)(t) : l(t);
	}
	function l(t) {
		return Fr(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Br, d, d)(t);
	}
	function d(t) {
		return Q(t) ? $(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || X(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Hr(e, t, n) {
	return r;
	function r(t) {
		return Z(t) ? Rr(e, i)(t) : n(t);
	}
	function i(t) {
		return Lr(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Q(t) ? $(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || X(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var Ur = {
	name: "hardBreakEscape",
	tokenize: Wr
};
function Wr(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return X(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var Gr = {
	name: "headingAtx",
	resolve: Kr,
	tokenize: qr
};
function Kr(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, Tn(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function qr(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || Z(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || X(n) ? (e.exit("atxHeading"), t(n)) : Q(n) ? $(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || Z(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var Jr = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Yr = [
	"pre",
	"script",
	"style",
	"textarea"
], Xr = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: $r,
	tokenize: ei
}, Zr = {
	partial: !0,
	tokenize: ni
}, Qr = {
	partial: !0,
	tokenize: ti
};
function $r(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function ei(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : I) : Nn(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : Nn(a) ? (e.consume(a), i = 4, r.interrupt ? t : I) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : I) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return Nn(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || Z(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Yr.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : Jr.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || Pn(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Q(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || Nn(t) ? (e.consume(t), b) : Q(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Pn(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Q(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Q(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || X(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || Z(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Q(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || X(t) ? O(t) : Q(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), M) : t === 60 && i === 1 ? (e.consume(t), N) : t === 62 && i === 4 ? (e.consume(t), L) : t === 63 && i === 3 ? (e.consume(t), I) : t === 93 && i === 5 ? (e.consume(t), F) : X(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Zr, R, k)(t)) : t === null || X(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(Qr, A, R)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j;
	}
	function j(t) {
		return t === null || X(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function M(t) {
		return t === 45 ? (e.consume(t), I) : O(t);
	}
	function N(t) {
		return t === 47 ? (e.consume(t), o = "", P) : O(t);
	}
	function P(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Yr.includes(n) ? (e.consume(t), L) : O(t);
		}
		return Nn(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), P) : O(t);
	}
	function F(t) {
		return t === 93 ? (e.consume(t), I) : O(t);
	}
	function I(t) {
		return t === 62 ? (e.consume(t), L) : t === 45 && i === 2 ? (e.consume(t), I) : O(t);
	}
	function L(t) {
		return t === null || X(t) ? (e.exit("htmlFlowData"), R(t)) : (e.consume(t), L);
	}
	function R(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function ti(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function ni(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(ir, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var ri = {
	name: "htmlText",
	tokenize: ii
};
function ii(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : Nn(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : Nn(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : X(t) ? (o = d, N(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? M(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : X(t) ? (o = h, N(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? M(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? M(t) : X(t) ? (o = v, N(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : X(t) ? (o = y, N(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? M(e) : y(e);
	}
	function x(t) {
		return Nn(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || Pn(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return X(t) ? (o = C, N(t)) : Q(t) ? (e.consume(t), C) : M(t);
	}
	function w(t) {
		return t === 45 || Pn(t) ? (e.consume(t), w) : t === 47 || t === 62 || Z(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), M) : t === 58 || t === 95 || Nn(t) ? (e.consume(t), E) : X(t) ? (o = T, N(t)) : Q(t) ? (e.consume(t), T) : M(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Pn(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : X(t) ? (o = D, N(t)) : Q(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : X(t) ? (o = O, N(t)) : Q(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, j) : t === null ? n(t) : X(t) ? (o = k, N(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || Z(t) ? T(t) : (e.consume(t), A);
	}
	function j(e) {
		return e === 47 || e === 62 || Z(e) ? T(e) : n(e);
	}
	function M(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function N(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), P;
	}
	function P(t) {
		return Q(t) ? $(e, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : F(t);
	}
	function F(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var ai = {
	name: "labelEnd",
	resolveAll: li,
	resolveTo: ui,
	tokenize: di
}, oi = { tokenize: fi }, si = { tokenize: pi }, ci = { tokenize: mi };
function li(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && Tn(e, 0, e.length, n), e;
}
function ui(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = En(s, e.slice(a + 1, a + r + 3)), s = En(s, [[
		"enter",
		u,
		t
	]]), s = En(s, Zn(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = En(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = En(s, e.slice(o + 1)), s = En(s, [[
		"exit",
		c,
		t
	]]), Tn(e, a, e.length, s), e;
}
function di(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Mn(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(oi, u, o ? u : d)(t) : t === 91 ? e.attempt(si, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(ci, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function fi(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return Z(t) ? Rr(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : Fr(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return Z(t) ? Rr(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? Lr(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return Z(t) ? Rr(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function pi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Ir.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(Mn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function mi(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var hi = {
	name: "labelStartImage",
	resolveAll: ai.resolveAll,
	tokenize: gi
};
function gi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var _i = {
	name: "labelStartLink",
	resolveAll: ai.resolveAll,
	tokenize: vi
};
function vi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var yi = {
	name: "lineEnding",
	tokenize: bi
};
function bi(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var xi = {
	name: "thematicBreak",
	tokenize: Si
};
function Si(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || X(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Q(t) ? $(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var Ci = {
	continuation: { tokenize: Di },
	exit: ki,
	name: "list",
	tokenize: Ei
}, wi = {
	partial: !0,
	tokenize: Ai
}, Ti = {
	partial: !0,
	tokenize: Oi
};
function Ei(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : Ln(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(xi, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return Ln(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(ir, r.interrupt ? n : u, e.attempt(wi, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Q(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function Di(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(ir, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ti, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, $(e, e.attempt(Ci, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Oi(e, t, n) {
	let r = this;
	return $(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function ki(e) {
	e.exit(this.containerState.type);
}
function Ai(e, t, n) {
	let r = this;
	return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var ji = {
	name: "setextUnderline",
	resolveTo: Mi,
	tokenize: Ni
};
function Mi(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function Ni(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Q(t) ? $(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || X(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var Pi = { tokenize: Fi };
function Fi(e) {
	let t = this, n = e.attempt(ir, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ar, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var Ii = { resolveAll: Bi() }, Li = zi("string"), Ri = zi("text");
function zi(e) {
	return {
		resolveAll: Bi(e === "text" ? Vi : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Bi(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Vi(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var Hi = /* @__PURE__ */ x({
	attentionMarkers: () => Xi,
	contentInitial: () => Wi,
	disable: () => Zi,
	document: () => Ui,
	flow: () => Ki,
	flowInitial: () => Gi,
	insideSpan: () => Yi,
	string: () => qi,
	text: () => Ji
}), Ui = {
	42: Ci,
	43: Ci,
	45: Ci,
	48: Ci,
	49: Ci,
	50: Ci,
	51: Ci,
	52: Ci,
	53: Ci,
	54: Ci,
	55: Ci,
	56: Ci,
	57: Ci,
	62: or
}, Wi = { 91: zr }, Gi = {
	[-2]: vr,
	[-1]: vr,
	32: vr
}, Ki = {
	35: Gr,
	42: xi,
	45: [ji, xi],
	60: Xr,
	61: ji,
	95: xi,
	96: hr,
	126: hr
}, qi = {
	38: fr,
	92: ur
}, Ji = {
	[-5]: yi,
	[-4]: yi,
	[-3]: yi,
	33: hi,
	38: fr,
	42: Qn,
	60: [nr, ri],
	91: _i,
	92: [Ur, ur],
	93: ai,
	95: Qn,
	96: Sr
}, Yi = { null: [Qn, Ii] }, Xi = { null: [42, 95] }, Zi = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function Qi(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = En(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Zn(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return ea(p(e), t);
	}
	function p(e) {
		return $i(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		X(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && Tn(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function $i(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function ea(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function ta(e) {
	let t = {
		constructs: On([Hi, ...(e || {}).extensions || []]),
		content: n(Wn),
		defined: [],
		document: n(Kn),
		flow: n(Pi),
		lazy: {},
		string: n(Li),
		text: n(Ri)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Qi(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function na(e) {
	for (; !Or(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var ra = /[\0\t\n\r]/g;
function ia() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (ra.lastIndex = u, c = ra.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var aa = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function oa(e) {
	return e.replace(aa, sa);
}
function sa(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return jn(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return wn(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var ca = {}.hasOwnProperty;
function la(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), ua(n)(na(ta(n).document().write(ia()(e, t, !0))));
}
function ua(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(de),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(se),
			blockQuote: a(re),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(ie),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(ie, o),
			codeText: a(U, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(ae),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(oe),
			hardBreakEscape: a(ce),
			hardBreakTrailing: a(ce),
			htmlFlow: a(le, o),
			htmlFlowData: T,
			htmlText: a(le, o),
			htmlTextData: T,
			image: a(ue),
			label: o,
			link: a(de),
			listItem: a(pe),
			listItemValue: f,
			listOrdered: a(fe, d),
			listUnordered: a(fe),
			paragraph: a(me),
			reference: z,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(se),
			strong: a(he),
			thematicBreak: a(_e)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: H,
			autolinkProtocol: ne,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: B,
			characterReferenceMarkerNumeric: B,
			characterReferenceValue: te,
			characterReference: V,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(j),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(O),
			hardBreakTrailing: c(O),
			htmlFlow: c(k),
			htmlFlowData: E,
			htmlText: c(A),
			htmlTextData: E,
			image: c(N),
			label: F,
			labelText: P,
			lineEnding: D,
			link: c(M),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: ee,
			resourceDestinationString: I,
			resourceTitleString: L,
			resource: R,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	fa(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			ca.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || ma).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: da(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: da(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: da(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || ma).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + Lt({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = da(e.end);
	}
	function u() {
		return yn(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Mn(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = ge(), n.position = {
			start: da(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = da(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = da(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function O() {
		this.data.atHardBreak = !0;
	}
	function k() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function j() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function M() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function N() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function P(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = oa(t), n.identifier = Mn(t).toLowerCase();
	}
	function F() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function I() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function L() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function R() {
		this.data.inReference = void 0;
	}
	function z() {
		this.data.referenceType = "collapsed";
	}
	function ee(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Mn(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function B(e) {
		this.data.characterReferenceType = e.type;
	}
	function te(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = jn(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = wn(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function V(e) {
		let t = this.stack.pop();
		t.position.end = da(e.end);
	}
	function ne(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function H(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function re() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function ie() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function U() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function ae() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function oe() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function se() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function ce() {
		return { type: "break" };
	}
	function le() {
		return {
			type: "html",
			value: ""
		};
	}
	function ue() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function de() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function fe(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function pe(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function me() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function he() {
		return {
			type: "strong",
			children: []
		};
	}
	function ge() {
		return {
			type: "text",
			value: ""
		};
	}
	function _e() {
		return { type: "thematicBreak" };
	}
}
function da(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function fa(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? fa(e, r) : pa(e, r);
	}
}
function pa(e, t) {
	let n;
	for (n in t) if (ca.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function ma(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + Lt({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + Lt({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + Lt({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function ha(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return la(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function ga(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function _a(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function va(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function ya(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function ba(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function xa(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Un(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function Sa(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function Ca(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function wa(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function Ta(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return wa(e, t);
	let i = {
		src: Un(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function Ea(e, t) {
	let n = { src: Un(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function Da(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function Oa(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return wa(e, t);
	let i = { href: Un(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function ka(e, t) {
	let n = { href: Un(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function Aa(e, t, n) {
	let r = e.all(t), i = n ? ja(n) : Ma(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function ja(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = Ma(n[r]);
	}
	return t;
}
function Ma(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function Na(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function Pa(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function Fa(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function Ia(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function La(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = Pt(t.children[1]), o = Nt(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function Ra(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function za(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/trim-lines/index.js
var Ba = 9, Va = 32;
function Ha(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(Ua(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(Ua(t.slice(i), i > 0, !1)), a.join("");
}
function Ua(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Ba || t === Va;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Ba || t === Va;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function Wa(e, t) {
	let n = {
		type: "text",
		value: Ha(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Ga(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var Ka = {
	blockquote: ga,
	break: _a,
	code: va,
	delete: ya,
	emphasis: ba,
	footnoteReference: xa,
	heading: Sa,
	html: Ca,
	imageReference: Ta,
	image: Ea,
	inlineCode: Da,
	linkReference: Oa,
	link: ka,
	listItem: Aa,
	list: Na,
	paragraph: Pa,
	root: Fa,
	strong: Ia,
	table: La,
	tableCell: za,
	tableRow: Ra,
	text: Wa,
	thematicBreak: Ga,
	toml: qa,
	yaml: qa,
	definition: qa,
	footnoteDefinition: qa
};
function qa() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var Ja = typeof self == "object" ? self : globalThis, Ya = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new Ja[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new Ja[a](o), i);
	};
	return r;
}, Xa = (e) => Ya(/* @__PURE__ */ new Map(), e)(0), Za = "", { toString: Qa } = {}, { keys: $a } = Object, eo = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = Qa.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Za];
		case "Object": return [2, Za];
		case "Date": return [3, Za];
		case "RegExp": return [4, Za];
		case "Map": return [5, Za];
		case "Set": return [6, Za];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, to = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), no = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = eo(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of $a(r)) (e || !to(eo(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(to(eo(n)) || to(eo(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !to(eo(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, ro = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return no(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, io = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Xa(ro(e, t)) : structuredClone(e) : (e, t) => Xa(ro(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function ao(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function oo(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function so(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || ao, r = e.options.footnoteBackLabel || oo, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = Un(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...io(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var co = (function(e) {
	if (e == null) return mo;
	if (typeof e == "function") return po(e);
	if (typeof e == "object") return Array.isArray(e) ? lo(e) : uo(e);
	if (typeof e == "string") return fo(e);
	throw Error("Expected function, string, or object as test");
});
function lo(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = co(e[n]);
	return po(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function uo(e) {
	let t = e;
	return po(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function fo(e) {
	return po(t);
	function t(t) {
		return t && t.type === e;
	}
}
function po(e) {
	return t;
	function t(t, n, r) {
		return !!(ho(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function mo() {
	return !0;
}
function ho(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function go(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var _o = [];
function vo(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = co(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + go(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = _o, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = yo(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function yo(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? _o : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function bo(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), vo(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var xo = {}.hasOwnProperty, So = {};
function Co(e, t) {
	let n = t || So, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: To,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Ka,
			...n.handlers
		},
		one: o,
		options: n,
		patch: wo,
		wrap: Do
	};
	return bo(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (xo.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = io(n);
				return r.children = a.all(e), r;
			}
			return io(e);
		}
		return (a.options.unknownHandler || Eo)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = Oo(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = Oo(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function wo(e, t) {
	e.position && (t.position = It(e));
}
function To(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, io(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Eo(e, t) {
	let n = t.data || {}, r = "value" in t && !(xo.call(n, "hProperties") || xo.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function Do(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function Oo(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function ko(e, t) {
	let n = Co(e, t), r = n.one(e, void 0), i = so(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function Ao(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = ko(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return ko(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function jo(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var Mo = /* @__PURE__ */ b(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
}));
//#endregion
//#region node_modules/is-plain-obj/index.js
function No(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function Po() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? Fo(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function Fo(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var Io = {
	basename: Lo,
	dirname: Ro,
	extname: zo,
	join: Bo,
	sep: "/"
};
function Lo(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	Uo(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function Ro(e) {
	if (Uo(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function zo(e) {
	Uo(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Bo(...e) {
	let t = -1, n;
	for (; ++t < e.length;) Uo(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Vo(n);
}
function Vo(e) {
	Uo(e);
	let t = e.codePointAt(0) === 47, n = Ho(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Ho(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (c = n.lastIndexOf("/"), c !== n.length - 1) {
							c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function Uo(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var Wo = { cwd: Go };
function Go() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function Ko(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function qo(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Ko(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return Jo(e);
}
function Jo(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region node_modules/vfile/lib/index.js
var Yo = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], Xo = class {
	constructor(e) {
		let t;
		t = e ? Ko(e) ? { path: e } : typeof e == "string" || es(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : Wo.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < Yo.length;) {
			let e = Yo[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) Yo.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? Io.basename(this.path) : void 0;
	}
	set basename(e) {
		Qo(e, "basename"), Zo(e, "basename"), this.path = Io.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? Io.dirname(this.path) : void 0;
	}
	set dirname(e) {
		$o(this.basename, "dirname"), this.path = Io.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? Io.extname(this.path) : void 0;
	}
	set extname(e) {
		if (Zo(e, "extname"), $o(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = Io.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		Ko(e) && (e = qo(e)), Qo(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? Io.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Qo(e, "stem"), Zo(e, "stem"), this.path = Io.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new Y(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function Zo(e, t) {
	if (e && e.includes(Io.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + Io.sep + "`");
}
function Qo(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function $o(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function es(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var ts = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), ns = /* @__PURE__ */ C(Mo(), 1), rs = {}.hasOwnProperty, is = new class e extends ts {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Po();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, ns.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (ss("data", this.frozen), this.namespace[e] = t, this) : rs.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (ss("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = us(e), n = this.parser || this.Parser;
		return as("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), as("process", this.parser || this.Parser), os("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = us(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				fs(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), as("processSync", this.parser || this.Parser), os("processSync", this.compiler || this.Compiler), this.process(e, r), ls("processSync", "process", t), n;
		function r(e, r) {
			t = !0, jo(e), n = r;
		}
	}
	run(e, t, n) {
		cs(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = us(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), ls("runSync", "run", n), r;
		function i(e, t) {
			jo(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = us(t), r = this.compiler || this.Compiler;
		return os("stringify", r), cs(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (ss("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				s(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, ns.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				No(o) && No(r) && (r = (0, ns.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function as(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function os(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function ss(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function cs(e) {
	if (!No(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function ls(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function us(e) {
	return ds(e) ? e : new Xo(e);
}
function ds(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function fs(e) {
	return typeof e == "string" || ps(e);
}
function ps(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var ms = [], hs = { allowDangerousHtml: !0 }, gs = /^(https?|ircs?|mailto|xmpp)$/i, _s = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function vs(e) {
	let t = ys(e), n = bs(e);
	return xs(t.runSync(t.parse(n), n), e);
}
function ys(e) {
	let t = e.rehypePlugins || ms, n = e.remarkPlugins || ms, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...hs
	} : hs;
	return is().use(ha).use(n).use(Ao, r).use(t);
}
function bs(e) {
	let t = e.children || "", n = new Xo();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function xs(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || Ss;
	for (let e of _s) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return bo(e, l), Jt(e, {
		Fragment: z.Fragment,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: z.jsx,
		jsxs: z.jsxs,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in _n) if (Object.hasOwn(_n, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = _n[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function Ss(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || gs.test(e.slice(0, t)) ? e : "";
}
var Cs = { Markdown: "_onyx-ui_Markdown_4qDhu" }, ws = {
	h1({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, z.jsx)(U, {
			as: "h1",
			fontSize: "32px",
			fontWeight: "300",
			children: n
		});
	},
	h2({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, z.jsx)(U, {
			as: "h2",
			fontSize: "24px",
			fontWeight: "600",
			children: n
		});
	},
	h3({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, z.jsx)(U, {
			as: "h2",
			fontSize: "18px",
			fontWeight: "500",
			children: n
		});
	},
	p({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, z.jsx)(U, {
			as: "p",
			children: n
		});
	},
	ul({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, z.jsx)(B, {
			as: "ul",
			children: n
		});
	},
	li({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, z.jsx)(U, {
			as: "li",
			children: n
		});
	},
	code({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ (0, z.jsx)(U, {
			border: !0,
			as: "code",
			fillColor: "panel",
			cornerRadius: "2px",
			padding: "16px",
			children: n
		});
	}
};
function Ts() {
	let e = (0, D.c)(3), [t, n] = u(), r;
	e[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
		(async () => {
			n(await (await fetch("https://webdav.mike-austin.com/Learning Kopi.md")).text());
		})();
	}, e[0] = r) : r = e[0], o(r);
	let i;
	return e[1] === t ? i = e[2] : (i = /* @__PURE__ */ (0, z.jsx)(B, {
		flex: !0,
		padding: "16px",
		className: Cs.Markdown,
		children: /* @__PURE__ */ (0, z.jsx)(vs, {
			components: ws,
			children: t
		})
	}), e[1] = t, e[2] = i), i;
}
//#endregion
export { Le as Avatar, pe as Button, Oe as Checkbox, Ve as Chip, ve as Divider, Pe as Form, ce as Icon, ge as Input, Fe as Label, be as List, Ts as Markdown, Ee as Menu, Se as Popover, Ae as Select, Ue as Tabs, U as Text, B as View };
