import { c as e } from "react/compiler-runtime";
import t, { cloneElement as n, createContext as r, createElement as i, forwardRef as a, isValidElement as o, useCallback as s, useContext as c, useEffect as l, useImperativeHandle as u, useLayoutEffect as d, useRef as f, useState as p } from "react";
import { createPortal as m } from "react-dom";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var v = Object.create, y = Object.defineProperty, b = Object.getOwnPropertyDescriptor, x = Object.getOwnPropertyNames, S = Object.getPrototypeOf, C = Object.prototype.hasOwnProperty, w = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), T = (e, t) => {
	let n = {};
	for (var r in e) y(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || y(n, Symbol.toStringTag, { value: "Module" }), n;
}, E = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = x(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !C.call(e, s) && s !== n && y(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = b(t, s)) || r.enumerable
	});
	return e;
}, D = (e, t, n) => (n = e == null ? {} : v(S(e)), E(t || !e || !e.__esModule ? y(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), O = {
	View: "_onyx-ui_View_-qlIB",
	tooltip: "_onyx-ui_tooltip_9QoQZ",
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
	pointer: "_onyx-ui_pointer_bdMFA",
	fadeIn: "_onyx-ui_fadeIn_rlN6H"
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
	"gray-3": "_onyx-ui_gray-3_HFEgY",
	"gray-4": "_onyx-ui_gray-4_LOWCM",
	"blue-5": "_onyx-ui_blue-5_WsXQB",
	"indigo-4": "_onyx-ui_indigo-4_XiJDJ",
	"green-4": "_onyx-ui_green-4_G1TFI",
	"red-4": "_onyx-ui_red-4_4jQqw",
	"grape-4": "_onyx-ui_grape-4_PS8Hc",
	"cyan-4": "_onyx-ui_cyan-4_uZ19N",
	"violet-2": "_onyx-ui_violet-2_Gj3Id",
	"blue-2": "_onyx-ui_blue-2_OvAbV",
	"teal-2": "_onyx-ui_teal-2_NPdHu",
	"lime-3": "_onyx-ui_lime-3_nEnqH",
	"orange-4": "_onyx-ui_orange-4_m-giT"
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
}, ee = {
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
}, j = {
	top: "_onyx-ui_top_99pO4",
	negative: "_onyx-ui_negative_pu7O-",
	bottom: "_onyx-ui_bottom_Q8--x",
	left: "_onyx-ui_left_Z41Ey",
	right: "_onyx-ui_right_1VFwX",
	top_bottom: "_onyx-ui_top_bottom_1X6Pe",
	top_right_bottom_left: "_onyx-ui_top_right_bottom_left_5KilU",
	none: "_onyx-ui_none_O96-o"
}, M = {
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
}, N = {
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
}, te = {
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
}, P = {
	primary: "_onyx-ui_primary_Obpgx",
	panel: "_onyx-ui_panel_cDvWc",
	divider: "_onyx-ui_divider_5ZVQ9",
	gutter: "_onyx-ui_gutter_Zs0-C",
	selected: "_onyx-ui_selected_dssRO",
	highlight: "_onyx-ui_highlight_VM6hc",
	"gray-0": "_onyx-ui_gray-0_gq2kw",
	"gray-1": "_onyx-ui_gray-1_FmiDf",
	"gray-2": "_onyx-ui_gray-2_KYZNn"
}, ne = t.createContext({ parentFillColor: void 0 });
function F(t) {
	let n = e(77), r, i, a, o, s, c, l, u, v, y, b, x, S, C, w, T, E, D, F, I, L, R, z, B, V;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], v = n[9], y = n[10], b = n[11], x = n[12], S = n[13], C = n[14], w = n[15], T = n[16], E = n[17], D = n[18], F = n[19], I = n[20], L = n[21], R = n[22], z = n[23], B = n[24], V = n[25]) : ({as: a, flex: b, wrap: B, horizontal: x, absolute: r, sticky: F, opacityOnPress: C, zIndex: V, shadow: E, cursor: v, padding: w, spacing: D, border: o, negativeBorder: S, align: i, fillColor: y, borderColor: s, cornerRadius: u, tooltip: z, tooltipAnchor: L, tooltipOffset: R, style: I, className: l, children: c, ...T} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = v, n[10] = y, n[11] = b, n[12] = x, n[13] = S, n[14] = C, n[15] = w, n[16] = T, n[17] = E, n[18] = D, n[19] = F, n[20] = I, n[21] = L, n[22] = R, n[23] = z, n[24] = B, n[25] = V);
	let [H, ie] = p(!1), U = f(null), W = f(null), ae, oe;
	n[26] === H ? (ae = n[27], oe = n[28]) : (ae = () => {
		if (H && U.current && W.current) {
			let e = U.current.getBoundingClientRect(), t = W.current.getBoundingClientRect();
			W.current.style.left = `${e.left - (t.width - e.width) / 2}px`, W.current.style.top = `${e.top - t.height - 8}px`, console.log("here");
		}
	}, oe = [H], n[26] = H, n[27] = ae, n[28] = oe), d(ae, oe);
	let se = a ?? "div", ce = b && O.flex, le = B && O.wrap, ue = r && O.absolute, de = F && O.sticky, fe = C && O.opacityOnPress, pe = V && O[`zindex_${V}`], me = x && O.horizontal, he = E === "heavy" ? O.heavyShadow : E && O.shadow, ge = v && O[v], _e = w && A[`_${w.replace(/ /, "_")}`], ve = D && ee[`_${D.replace(/ /, "_")}`], ye = o && j[o === !0 ? "top_right_bottom_left" : o.replace(/ /, "_")], be = S && j.negative, xe = i && (x ? N[i.replace(/ /, "_")] : te[i.replace(/ /, "_")]), Se = y && k[y], Ce = u && M[`_${u}`], we = s && P[s], Te;
	n[29] !== l || n[30] !== pe || n[31] !== me || n[32] !== he || n[33] !== ge || n[34] !== _e || n[35] !== ve || n[36] !== ye || n[37] !== be || n[38] !== xe || n[39] !== Se || n[40] !== Ce || n[41] !== we || n[42] !== ce || n[43] !== le || n[44] !== ue || n[45] !== de || n[46] !== fe ? (Te = [
		O.View,
		ce,
		le,
		ue,
		de,
		fe,
		pe,
		me,
		he,
		ge,
		_e,
		ve,
		ye,
		be,
		xe,
		Se,
		Ce,
		we,
		l
	].filter(re), n[29] = l, n[30] = pe, n[31] = me, n[32] = he, n[33] = ge, n[34] = _e, n[35] = ve, n[36] = ye, n[37] = be, n[38] = xe, n[39] = Se, n[40] = Ce, n[41] = we, n[42] = ce, n[43] = le, n[44] = ue, n[45] = de, n[46] = fe, n[47] = Te) : Te = n[47];
	let Ee = Te.join(" "), De;
	n[48] === I ? De = n[49] : (De = { ...I }, n[48] = I, n[49] = De);
	let Oe = De, ke;
	n[50] === y ? ke = n[51] : (ke = { parentFillColor: y }, n[50] = y, n[51] = ke);
	let Ae = ke, je;
	if (n[52] !== se || n[53] !== c || n[54] !== H || n[55] !== T || n[56] !== z || n[57] !== Ee || n[58] !== Ae || n[59] !== Oe) {
		let e = document.querySelector("#overlay"), t;
		n[61] === z ? t = n[62] : (t = /* @__PURE__ */ g("div", {
			ref: W,
			className: O.tooltip,
			children: z
		}), n[61] = z, n[62] = t);
		let r = t, i, a;
		n[63] === z ? (i = n[64], a = n[65]) : (i = () => z && ie(!0), a = () => z && ie(!1), n[63] = z, n[64] = i, n[65] = a);
		let o;
		n[66] !== se || n[67] !== c || n[68] !== T || n[69] !== i || n[70] !== a || n[71] !== Ee || n[72] !== Oe ? (o = /* @__PURE__ */ g(se, {
			ref: U,
			className: Ee,
			style: Oe,
			onMouseEnter: i,
			onMouseLeave: a,
			...T,
			children: c
		}), n[66] = se, n[67] = c, n[68] = T, n[69] = i, n[70] = a, n[71] = Ee, n[72] = Oe, n[73] = o) : o = n[73];
		let s;
		n[74] !== o || n[75] !== Ae ? (s = /* @__PURE__ */ g(ne, {
			value: Ae,
			children: o
		}), n[74] = o, n[75] = Ae, n[76] = s) : s = n[76], je = /* @__PURE__ */ _(h, { children: [s, H && e && m(r, e)] }), n[52] = se, n[53] = c, n[54] = H, n[55] = T, n[56] = z, n[57] = Ee, n[58] = Ae, n[59] = Oe, n[60] = je;
	} else je = n[60];
	return je;
}
function re(e) {
	return e;
}
var I = {
	Text: "_onyx-ui_Text_N3t1U",
	select: "_onyx-ui_select_ky1qN",
	light: "_onyx-ui_light_IbzVh",
	lighter: "_onyx-ui_lighter_DTRvS",
	caps: "_onyx-ui_caps_Gy2yt",
	ellipsis: "_onyx-ui_ellipsis_31RAb"
}, L = {
	_12px: "_onyx-ui__12px_BF6bk",
	_14px: "_onyx-ui__14px_3aMJ0",
	_18px: "_onyx-ui__18px_XtZG-",
	_24px: "_onyx-ui__24px_fwBNW",
	_32px: "_onyx-ui__32px_mh4EG"
}, R = {
	_300: "_onyx-ui__300_imdej",
	_400: "_onyx-ui__400_9-vuA",
	_500: "_onyx-ui__500_9rCUP",
	_600: "_onyx-ui__600_8vDNo",
	_700: "_onyx-ui__700_4dk7T"
}, z = {
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
}, B = t.createContext({ textParent: !1 });
function V(t) {
	let n = e(45), r, i, a, o, s, l, u, d, f, p, m, h;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], l = n[6], u = n[7], d = n[8], f = n[9], p = n[10], m = n[11], h = n[12]) : ({as: r, light: f, caps: a, bold: i, select: m, ellipsis: s, fontSize: l, fontWeight: u, textColor: h, innerStyle: d, children: o, ...p} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = l, n[7] = u, n[8] = d, n[9] = f, n[10] = p, n[11] = m, n[12] = h);
	let { textParent: _ } = c(B), v = i && R.bold, y = f && I.light, b = a && I.caps, x = l && L[`_${l}`], S = u && R[`_${u}`], C = h && z[h], w;
	n[13] !== v || n[14] !== y || n[15] !== b || n[16] !== x || n[17] !== S || n[18] !== C ? (w = [
		v,
		y,
		b,
		x,
		S,
		C
	].filter(ie), n[13] = v, n[14] = y, n[15] = b, n[16] = x, n[17] = S, n[18] = C, n[19] = w) : w = n[19];
	let T = w.join(" ");
	if (_) {
		let e = r ?? "span", t;
		return n[20] !== e || n[21] !== o || n[22] !== p || n[23] !== T ? (t = /* @__PURE__ */ g(e, {
			className: T,
			...p,
			children: o
		}), n[20] = e, n[21] = o, n[22] = p, n[23] = T, n[24] = t) : t = n[24], t;
	}
	let E = m && I.select, D = s && I.ellipsis, O = f && l === "18px" ? I.lighter : f && I.light, k = a && I.caps, A = i && R._600, ee = l && L[`_${l}`] || L._14px, j = u && R[`_${u}`], M = h && z[h] || z.text, N;
	n[25] !== O || n[26] !== k || n[27] !== A || n[28] !== ee || n[29] !== j || n[30] !== M || n[31] !== E || n[32] !== D ? (N = [
		I.Text,
		E,
		D,
		O,
		k,
		A,
		ee,
		j,
		M
	].filter(H), n[25] = O, n[26] = k, n[27] = A, n[28] = ee, n[29] = j, n[30] = M, n[31] = E, n[32] = D, n[33] = N) : N = n[33];
	let te = N.join(" "), P = r, ne = te + " " + T, re;
	n[34] === Symbol.for("react.memo_cache_sentinel") ? (re = { textParent: !0 }, n[34] = re) : re = n[34];
	let V;
	n[35] === o ? V = n[36] : (V = /* @__PURE__ */ g(B, {
		value: re,
		children: o
	}), n[35] = o, n[36] = V);
	let U;
	n[37] !== d || n[38] !== ne || n[39] !== V ? (U = /* @__PURE__ */ g("span", {
		className: ne,
		style: d,
		children: V
	}), n[37] = d, n[38] = ne, n[39] = V, n[40] = U) : U = n[40];
	let W;
	return n[41] !== p || n[42] !== P || n[43] !== U ? (W = /* @__PURE__ */ g(F, {
		as: P,
		...p,
		children: U
	}), n[41] = p, n[42] = P, n[43] = U, n[44] = W) : W = n[44], W;
}
function H(e) {
	return e;
}
function ie(e) {
	return e;
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var U = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), W = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ae = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), oe = (e) => {
	let t = ae(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, se = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, ce = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, le = r({}), ue = () => c(le), de = a(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: a = "", children: o, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = ue() ?? {}, h = r ?? f ? Number(n ?? d) * 24 / Number(t ?? u) : n ?? d;
	return i("svg", {
		ref: l,
		...se,
		width: t ?? u ?? se.width,
		height: t ?? u ?? se.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: U("lucide", m, a),
		...!o && !ce(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => i(e, t)), ...Array.isArray(o) ? o : [o]]);
}), fe = (e, t) => {
	let n = a(({ className: n, ...r }, a) => i(de, {
		ref: a,
		iconNode: t,
		className: U(`lucide-${W(oe(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = oe(e), n;
}, pe = fe("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), me = fe("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), he = {
	Icon: "_onyx-ui_Icon_CezUJ",
	light: "_onyx-ui_light_4wb4K",
	bleed: "_onyx-ui_bleed_Gv7vD"
};
//#endregion
//#region src/components/icon/Icon.tsx
function ge(t) {
	let n = e(18), r, i, a, o, s, c, l;
	if (n[0] !== t) {
		let { ref: e, light: u, icon: d, color: f, size: p, bleed: m, className: h, ...g } = t;
		o = u, r = d, l = f, c = p, i = m, a = h, s = g, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l;
	} else r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7];
	let u = l === void 0 ? "gray-7" : l, d = u && z[u], f = o && he.light, p = i && he.bleed, m;
	n[8] !== a || n[9] !== d || n[10] !== f || n[11] !== p ? (m = [
		he.Icon,
		d,
		f,
		p,
		a
	].filter(_e), n[8] = a, n[9] = d, n[10] = f, n[11] = p, n[12] = m) : m = n[12];
	let h = m.join(" "), _;
	return n[13] !== r || n[14] !== h || n[15] !== s || n[16] !== c ? (_ = /* @__PURE__ */ g(r, {
		size: c,
		className: h,
		...s
	}), n[13] = r, n[14] = h, n[15] = s, n[16] = c, n[17] = _) : _ = n[17], _;
}
function _e(e) {
	return e;
}
var ve = {
	Button: "_onyx-ui_Button_2sngS",
	hover: "_onyx-ui_hover_kN2-Z",
	selected: "_onyx-ui_selected_LLwtV",
	primary: "_onyx-ui_primary_b-5q5",
	solid: "_onyx-ui_solid_fI6Ci"
}, ye = ({ parentFillColor: e, solid: t, primary: n, hover: r, selected: i }) => {
	switch (!0) {
		case i: return "selected";
		case !r && t && n: return "primary";
		case t: return e === "panel" ? "icon" : "gutter";
		case r: return;
	}
}, be = ({ primary: e, solid: t }) => {
	switch (!0) {
		case t && e: return "content";
		case e: return "primary";
	}
};
function xe(t) {
	let n = e(65), r, i, a, o, s, l, p, m, h, v, y, b, x, S, C, w;
	if (n[0] !== t) {
		let { ref: e, type: c, solid: u, primary: d, hover: f, icon: g, iconColor: _, iconFill: T, rightIcon: E, round: D, bold: O, fontWeight: k, selected: A, opacityOnPress: ee, className: j, children: M, ...N } = t;
		v = e, C = c, S = u, m = d, o = f, s = g, l = _, p = T, y = E, b = D, w = O, a = k, x = A, i = j, r = M, h = N, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = l, n[7] = p, n[8] = m, n[9] = h, n[10] = v, n[11] = y, n[12] = b, n[13] = x, n[14] = S, n[15] = C, n[16] = w;
	} else r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], l = n[6], p = n[7], m = n[8], h = n[9], v = n[10], y = n[11], b = n[12], x = n[13], S = n[14], C = n[15], w = n[16];
	let T = C === void 0 ? "button" : C, E = w === void 0 ? !0 : w, D = f(null), O = S && ve.solid, k = m && ve.primary, A = o && ve.hover, ee = x && ve.selected, j;
	n[17] !== i || n[18] !== O || n[19] !== k || n[20] !== A || n[21] !== ee ? (j = [
		ve.Button,
		O,
		k,
		A,
		ee,
		i
	].filter(Se), n[17] = i, n[18] = O, n[19] = k, n[20] = A, n[21] = ee, n[22] = j) : j = n[22];
	let M = j.join(" "), { parentFillColor: N } = c(ne), te;
	n[23] !== o || n[24] !== N || n[25] !== m || n[26] !== x || n[27] !== S ? (te = ye({
		parentFillColor: N,
		solid: S,
		primary: m,
		hover: o,
		selected: x
	}), n[23] = o, n[24] = N, n[25] = m, n[26] = x, n[27] = S, n[28] = te) : te = n[28];
	let P = te, re;
	n[29] !== o || n[30] !== m || n[31] !== x || n[32] !== S ? (re = be({
		solid: S,
		primary: m,
		hover: o,
		selected: x
	}), n[29] = o, n[30] = m, n[31] = x, n[32] = S, n[33] = re) : re = n[33];
	let I = re, L;
	n[34] === Symbol.for("react.memo_cache_sentinel") ? (L = () => D.current, n[34] = L) : L = n[34], u(v, L);
	let R;
	n[35] === N ? R = n[36] : (R = () => {
		D.current && D.current.style.setProperty("--hover-color", `var(--${N === "panel" ? "icon" : "gutter"}-color)`);
	}, n[35] = N, n[36] = R);
	let z;
	n[37] !== P || n[38] !== N ? (z = [P, N], n[37] = P, n[38] = N, n[39] = z) : z = n[39], d(R, z);
	let B = r ? "8px 12px" : "8px", H = b ? "max" : "2px", ie;
	n[40] !== r || n[41] !== s || n[42] !== l || n[43] !== p || n[44] !== I ? (ie = s && /* @__PURE__ */ g(ge, {
		bleed: !0,
		icon: s,
		size: 16,
		color: l ?? I,
		fill: p ? "currentColor" : "none",
		style: {
			marginLeft: r ? 0 : -2,
			marginRight: 0
		}
	}), n[40] = r, n[41] = s, n[42] = l, n[43] = p, n[44] = I, n[45] = ie) : ie = n[45];
	let U;
	n[46] !== E || n[47] !== r || n[48] !== a || n[49] !== I ? (U = typeof r == "string" ? /* @__PURE__ */ g(V, {
		bold: !a && E,
		fontWeight: a,
		textColor: I,
		style: { textAlign: "left" },
		children: r
	}) : r, n[46] = E, n[47] = r, n[48] = a, n[49] = I, n[50] = U) : U = n[50];
	let W;
	n[51] !== r || n[52] !== y || n[53] !== I ? (W = y && /* @__PURE__ */ g(F, {
		flex: !0,
		align: "middle right",
		children: /* @__PURE__ */ g(ge, {
			bleed: !0,
			icon: y,
			size: 16,
			color: I,
			style: {
				strokeWidth: 2.5,
				marginRight: r ? -3 : 0,
				justifySelf: "flex-end"
			}
		})
	}), n[51] = r, n[52] = y, n[53] = I, n[54] = W) : W = n[54];
	let ae;
	return n[55] !== M || n[56] !== P || n[57] !== h || n[58] !== B || n[59] !== H || n[60] !== ie || n[61] !== U || n[62] !== W || n[63] !== T ? (ae = /* @__PURE__ */ _(F, {
		ref: D,
		horizontal: !0,
		as: "button",
		type: T,
		cursor: "pointer",
		padding: B,
		spacing: "8px",
		align: "middle center",
		cornerRadius: H,
		fillColor: P,
		className: M,
		...h,
		children: [
			ie,
			U,
			W
		]
	}), n[55] = M, n[56] = P, n[57] = h, n[58] = B, n[59] = H, n[60] = ie, n[61] = U, n[62] = W, n[63] = T, n[64] = ae) : ae = n[64], ae;
}
function Se(e) {
	return e;
}
xe.Menu = function({ solid: e, cornerRadius: t, children: n, ...r }) {
	return /* @__PURE__ */ g(Fe, {
		anchor: "bottom left",
		...r,
		children: /* @__PURE__ */ g(xe, {
			solid: e,
			rightIcon: me,
			cornerRadius: t,
			children: n
		})
	});
};
var Ce = {
	Input: "_onyx-ui_Input_MpxTL",
	flush: "_onyx-ui_flush_4zQD9"
}, we = (t) => {
	let n = e(50), r, i, a, o, s, c, l, m, h, v, y, b, x;
	if (n[0] !== t) {
		let { label: e, value: u, lines: d, border: f, flush: p, multiline: g, icon: _, inputRef: S, placeholder: C, autoFocus: w, changeOnEnter: T, innerStyle: E, onValueChange: D, ...O } = t;
		m = e, r = u, x = f, o = p, h = g, s = _, l = S, y = C, i = w, a = T, c = E, v = D, b = O, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = m, n[9] = h, n[10] = v, n[11] = y, n[12] = b, n[13] = x;
	} else r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], m = n[8], h = n[9], v = n[10], y = n[11], b = n[12], x = n[13];
	let S = x === void 0 ? !0 : x, [C, w] = p(r), [T, E] = p(r), D = f(null), O;
	n[14] === Symbol.for("react.memo_cache_sentinel") ? (O = () => D.current, n[14] = O) : O = n[14], u(l, O), r !== T && (E(C), w(r));
	let k;
	n[15] !== v || n[16] !== C ? (k = (e) => {
		e.key === "Enter" && C !== void 0 && v?.(C);
	}, n[15] = v, n[16] = C, n[17] = k) : k = n[17];
	let A = k, ee;
	n[18] !== a || n[19] !== v || n[20] !== C ? (ee = (e) => {
		let t = e.currentTarget;
		a === !0 && e.key === "Enter" && C !== void 0 && (e.preventDefault(), v?.(C), t.value = "");
	}, n[18] = a, n[19] = v, n[20] = C, n[21] = ee) : ee = n[21];
	let j = ee, M;
	n[22] === Symbol.for("react.memo_cache_sentinel") ? (M = (e) => {
		w(e.currentTarget.value);
	}, n[22] = M) : M = n[22];
	let N = M, te;
	n[23] !== v || n[24] !== C ? (te = () => {
		C !== void 0 && v?.(C);
	}, n[23] = v, n[24] = C, n[25] = te) : te = n[25];
	let P = te, ne;
	n[26] === h ? ne = n[27] : (ne = () => {
		h === !0 && D.current && (D.current.style.height = "", D.current.style.height = `${D.current.scrollHeight}px`);
	}, n[26] = h, n[27] = ne), d(ne);
	let re = o === !0 && Ce.flush, I;
	n[28] === re ? I = n[29] : (I = [Ce.Input, re].filter(Te), n[28] = re, n[29] = I);
	let L = I.join(" "), R;
	n[30] !== i || n[31] !== P || n[32] !== A || n[33] !== j || n[34] !== c || n[35] !== h || n[36] !== y || n[37] !== C ? (R = h === !0 ? /* @__PURE__ */ g("textarea", {
		ref: D,
		autoFocus: i,
		value: C,
		placeholder: y,
		style: {
			background: "transparent",
			...c
		},
		onKeyDown: j,
		onChange: N,
		onBlur: P
	}) : /* @__PURE__ */ g("input", {
		ref: D,
		autoFocus: i,
		value: C,
		placeholder: y,
		style: {
			background: "transparent",
			...c
		},
		onKeyDown: A,
		onChange: N,
		onBlur: P
	}), n[30] = i, n[31] = P, n[32] = A, n[33] = j, n[34] = c, n[35] = h, n[36] = y, n[37] = C, n[38] = R) : R = n[38];
	let z = R, B;
	n[39] === s ? B = n[40] : (B = s && /* @__PURE__ */ g(ge, {
		icon: s,
		size: 20
	}), n[39] = s, n[40] = B);
	let V;
	n[41] !== S || n[42] !== L || n[43] !== z || n[44] !== b || n[45] !== B ? (V = /* @__PURE__ */ _(F, {
		horizontal: !0,
		border: S,
		align: "middle left",
		padding: "4px 8px",
		spacing: "4px",
		className: L,
		...b,
		children: [B, z]
	}), n[41] = S, n[42] = L, n[43] = z, n[44] = b, n[45] = B, n[46] = V) : V = n[46];
	let H;
	return n[47] !== m || n[48] !== V ? (H = /* @__PURE__ */ g(Ue, {
		flex: !0,
		label: m,
		children: V
	}), n[47] = m, n[48] = V, n[49] = H) : H = n[49], H;
};
function Te(e) {
	return e !== !1;
}
//#endregion
//#region src/components/toggle/Toggle.tsx
function Ee(t) {
	let n = e(14), { value: r, icon: i, iconColor: a, children: o, onValueChange: s } = t, c;
	n[0] !== s || n[1] !== r ? (c = () => {
		s?.(!r);
	}, n[0] = s, n[1] = r, n[2] = c) : c = n[2];
	let l = c, u = !r, d = r ? a : void 0, f;
	n[3] !== i || n[4] !== u || n[5] !== d ? (f = /* @__PURE__ */ g(ge, {
		bleed: !0,
		light: u,
		icon: i,
		size: 14,
		color: d
	}), n[3] = i, n[4] = u, n[5] = d, n[6] = f) : f = n[6];
	let p = !r, m;
	n[7] !== o || n[8] !== p ? (m = /* @__PURE__ */ g(V, {
		light: p,
		ellipsis: !0,
		children: o
	}), n[7] = o, n[8] = p, n[9] = m) : m = n[9];
	let h;
	return n[10] !== l || n[11] !== f || n[12] !== m ? (h = /* @__PURE__ */ _(F, {
		horizontal: !0,
		opacityOnPress: !0,
		spacing: "4px",
		align: "middle left",
		cursor: "pointer",
		onClick: l,
		children: [f, m]
	}), n[10] = l, n[11] = f, n[12] = m, n[13] = h) : h = n[13], h;
}
//#endregion
//#region src/components/divider/Divider.tsx
function De(t) {
	let n = e(8), r, i;
	n[0] === t ? (r = n[1], i = n[2]) : ({style: i, ...r} = t, n[0] = t, n[1] = r, n[2] = i);
	let a;
	n[3] === i ? a = n[4] : (a = {
		...i,
		minWidth: 1,
		minHeight: 1
	}, n[3] = i, n[4] = a);
	let o;
	return n[5] !== r || n[6] !== a ? (o = /* @__PURE__ */ g(F, {
		fillColor: "divider",
		style: a,
		...r
	}), n[5] = r, n[6] = a, n[7] = o) : o = n[7], o;
}
var Oe = { List: "_onyx-ui_List_FXNAH" };
//#endregion
//#region src/components/list/List.tsx
function ke(n) {
	let r = e(8), i, a;
	r[0] === n ? (i = r[1], a = r[2]) : ({children: i, ...a} = n, r[0] = n, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t.Children.map(i, Ae), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== o ? (s = /* @__PURE__ */ g(F, {
		border: !0,
		cornerRadius: "4px",
		className: Oe.List,
		...a,
		children: o
	}), r[5] = a, r[6] = o, r[7] = s) : s = r[7], s;
}
function Ae(e, n) {
	return t.isValidElement(e) && /* @__PURE__ */ _(t.Fragment, { children: [n > 0 && /* @__PURE__ */ g(De, {}), e] }, e.key);
}
//#endregion
//#region src/components/popover/Popover.tsx
function je({ ref: e, content: n, isVisible: r, anchor: i = "bottom left", offsetTop: a = 0, noPortal: o, children: s }) {
	let c = f(null), l = f(null);
	u(e, () => c.current), d(() => {
		let e = c.current?.closest("#window")?.querySelector("#overlay");
		if (o && r && c.current && l.current) {
			let t = c.current.getBoundingClientRect(), n = l.current.getBoundingClientRect(), r = e.getBoundingClientRect();
			i === "top right" ? (l.current.style.left = `${t.width}px`, l.current.style.top = `${t.top - n.top}px`) : (l.current.style.left = `${t.left + 1 - r.left}px`, l.current.style.top = `${t.bottom + 0 - r.top}px`);
		} else if (r && c.current && l.current) {
			let t = c.current.getBoundingClientRect(), n = l.current.getBoundingClientRect(), r = e.getBoundingClientRect();
			i === "top right" ? (l.current.style.left = `${t.right - r.left}px`, l.current.style.top = `${t.top - 8 - r.top + a}px`) : i === "bottom right" ? (l.current.style.left = `${t.right - n.width}px`, l.current.style.top = `${t.top + t.height + a}px`) : i === "bottom left" && (l.current.style.left = `${t.left + 1 - r.left}px`, l.current.style.top = `${t.bottom + 0 - r.top + a}px`);
		}
	}, [
		i,
		r,
		o,
		a
	]);
	let p = c.current?.closest("#window")?.querySelector("#overlay"), v = t.Children.only(s), y = /* @__PURE__ */ g(F, {
		ref: l,
		absolute: !0,
		shadow: !0,
		fillColor: "content",
		cornerRadius: "4px",
		style: { pointerEvents: "auto" },
		children: n
	});
	return /* @__PURE__ */ _(h, { children: [
		t.isValidElement(v) && t.cloneElement(v, {
			ref: c,
			opacityOnPress: !0
		}),
		o && r && p && y,
		!o && r && p && m(y, p)
	] });
}
//#endregion
//#region src/components/menu/Menu.tsx
function Me(t) {
	let n = e(4), { label: r } = t, i, a;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { margin: "8px 12px" }, a = {
		fontSize: 11,
		lineHeight: "17px",
		whiteSpace: "nowrap"
	}, n[0] = i, n[1] = a) : (i = n[0], a = n[1]);
	let o;
	return n[2] === r ? o = n[3] : (o = /* @__PURE__ */ g(V, {
		light: !0,
		caps: !0,
		style: i,
		innerStyle: a,
		children: r
	}), n[2] = r, n[3] = o), o;
}
function Ne() {
	let t = e(1), n;
	return t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = /* @__PURE__ */ g(De, { style: { margin: "8px 12px" } }), t[0] = n) : n = t[0], n;
}
function Pe(t) {
	let n = e(19), r, i, a, o, s, c, l;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7]) : ({title: c, value: l, style: s, children: r, onClick: i, onSelect: a, ...o} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l);
	let u;
	n[8] !== i || n[9] !== a || n[10] !== l ? (u = (e) => {
		i?.(e), a?.(l);
	}, n[8] = i, n[9] = a, n[10] = l, n[11] = u) : u = n[11];
	let d = u, f;
	n[12] === s ? f = n[13] : (f = {
		whiteSpace: "nowrap",
		...s
	}, n[12] = s, n[13] = f);
	let p = c ?? r, m;
	return n[14] !== d || n[15] !== o || n[16] !== f || n[17] !== p ? (m = /* @__PURE__ */ g(xe, {
		hover: !0,
		align: "middle left",
		fontWeight: "400",
		cornerRadius: "0px",
		style: f,
		onClick: d,
		...o,
		children: p
	}), n[14] = d, n[15] = o, n[16] = f, n[17] = p, n[18] = m) : m = n[18], m;
}
function Fe({ items: e, header: r, footer: i, children: a, onItemSelect: c, onVisibilityChange: u, ...d }) {
	let m = f(null), v = f(null), [y, b] = p(!1), x = s((e) => {
		!m.current?.contains(e.target) && !v.current?.contains(e.target) && (b(!1), u?.(!1));
	}, [u]);
	l(() => (document.addEventListener("pointerdown", x), () => {
		document.removeEventListener("pointerdown", x);
	}), [x]);
	let S = (e) => {
		b(!1), u?.(!1), c?.(e);
	}, C = /* @__PURE__ */ _(F, {
		ref: v,
		children: [
			r && /* @__PURE__ */ _(h, { children: [r, /* @__PURE__ */ g(De, {})] }),
			/* @__PURE__ */ g(F, {
				padding: "8px 0px",
				children: e.map((e, t) => o(e) && n(e, {
					key: t,
					onSelect: (...t) => {
						S(...t), e.props.onSelect?.(...t);
					}
				}))
			}),
			i && /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(De, {}), i] })
		]
	}), w = t.Children.only(a);
	return /* @__PURE__ */ g(je, {
		isVisible: y,
		content: C,
		...d,
		children: t.isValidElement(w) && t.cloneElement(w, {
			ref: m,
			cursor: "pointer",
			solid: y || w.props.solid,
			onClick: () => {
				b((e) => !e);
			}
		})
	});
}
Fe.Item = Pe, Fe.Divider = Ne, Fe.Group = Me;
//#endregion
//#region src/components/checkbox/Checkbox.tsx
function Ie(t) {
	let n = e(18), { label: r, value: i, onValueChange: a } = t, o;
	n[0] === a ? o = n[1] : (o = (e) => {
		a?.(e.currentTarget.checked);
	}, n[0] = a, n[1] = o);
	let s = o, c = !i, l = i ? "primary" : void 0, u;
	n[2] === Symbol.for("react.memo_cache_sentinel") ? (u = {
		width: 24,
		height: 24
	}, n[2] = u) : u = n[2];
	let d;
	n[3] !== s || n[4] !== i ? (d = /* @__PURE__ */ g(F, {
		absolute: !0,
		as: "input",
		type: "checkbox",
		checked: i,
		onChange: s
	}), n[3] = s, n[4] = i, n[5] = d) : d = n[5];
	let f;
	n[6] === i ? f = n[7] : (f = i && /* @__PURE__ */ g(ge, {
		icon: pe,
		size: 20,
		color: "white"
	}), n[6] = i, n[7] = f);
	let p;
	n[8] !== c || n[9] !== l || n[10] !== d || n[11] !== f ? (p = /* @__PURE__ */ _(F, {
		border: c,
		fillColor: l,
		cornerRadius: "2px",
		align: "middle center",
		style: u,
		children: [d, f]
	}), n[8] = c, n[9] = l, n[10] = d, n[11] = f, n[12] = p) : p = n[12];
	let m;
	n[13] === r ? m = n[14] : (m = /* @__PURE__ */ g(V, { children: r }), n[13] = r, n[14] = m);
	let h;
	return n[15] !== p || n[16] !== m ? (h = /* @__PURE__ */ g(Ue, {
		as: "label",
		children: /* @__PURE__ */ _(F, {
			horizontal: !0,
			opacityOnPress: !0,
			spacing: "8px",
			align: "middle left",
			children: [p, m]
		})
	}), n[15] = p, n[16] = m, n[17] = h) : h = n[17], h;
}
//#endregion
//#region src/components/select/Select.tsx
function Le(t) {
	let n = e(12), r, i, a, o;
	if (n[0] !== t) {
		let { label: e, value: s, onClick: c, onSelect: l, ...u } = t;
		r = e, o = s, i = l, a = u, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o;
	} else r = n[1], i = n[2], a = n[3], o = n[4];
	let s;
	n[5] !== i || n[6] !== o ? (s = () => {
		i?.(o);
	}, n[5] = i, n[6] = o, n[7] = s) : s = n[7];
	let c = s, l;
	return n[8] !== c || n[9] !== r || n[10] !== a ? (l = /* @__PURE__ */ g(Fe.Item, {
		title: r,
		onClick: c,
		...a
	}), n[8] = c, n[9] = r, n[10] = a, n[11] = l) : l = n[11], l;
}
function Re({ label: e, value: t, options: n, onValueChange: r, ...i }) {
	let a = (e) => {
		e !== t && r?.(e);
	}, o = n.flatMap((e, r) => {
		switch (!0) {
			case "options" in e: return [
				r !== 0 && /* @__PURE__ */ g(Fe.Divider, {}),
				...e.label ? [/* @__PURE__ */ g(Fe.Group, { label: e.label })] : [],
				...e.options.map((e) => /* @__PURE__ */ g(Le, {
					selected: e.value === t,
					icon: e.icon,
					iconColor: e.iconColor,
					iconFill: e.iconFill,
					label: e.label,
					value: e.value,
					tooltip: e.tooltip,
					tooltipAnchor: "right",
					onSelect: a
				})),
				r !== n.length - 1 && !("options" in n[r]) && /* @__PURE__ */ g(Fe.Divider, {})
			].filter((e) => e !== !1);
			default: return /* @__PURE__ */ g(Le, {
				selected: e.value === t,
				icon: e.icon,
				iconColor: e.iconColor,
				iconFill: e.iconFill,
				label: e.label,
				value: e.value,
				tooltip: e.tooltip,
				tooltipAnchor: e.tooltipAnchor,
				onSelect: a
			});
		}
	}), s = n.flatMap((e) => "options" in e ? e.options : [e]).find((e) => e.value === t);
	return /* @__PURE__ */ g(F, { children: /* @__PURE__ */ g(Fe, {
		items: o,
		offsetTop: 8,
		...i,
		children: /* @__PURE__ */ g(Ue, {
			chevron: !0,
			label: e,
			children: s ? /* @__PURE__ */ _(F, {
				horizontal: !0,
				spacing: "4px",
				align: "middle left",
				children: ["icon" in s && s.icon && /* @__PURE__ */ g(ge, {
					icon: s.icon,
					color: s.iconColor,
					fill: s.iconFill ? "currentColor" : "none",
					size: 14,
					style: { margin: "-2px 0" }
				}), /* @__PURE__ */ g(V, { children: s.label })]
			}) : /* @__PURE__ */ g(F, {
				horizontal: !0,
				children: /* @__PURE__ */ _(V, { children: [t, " — Value"] })
			})
		})
	}) });
}
//#endregion
//#region src/components/form/Form.tsx
function ze() {}
var Be = r({
	fields: {},
	onFieldChange: () => void 0
});
function Ve(n) {
	let r = e(8), { name: i, children: a } = n, { fields: o, onFieldChange: s } = c(Be), l;
	r[0] !== i || r[1] !== s ? (l = (e) => {
		s(i, e);
	}, r[0] = i, r[1] = s, r[2] = l) : l = r[2];
	let u = l, d;
	if (r[3] !== a || r[4] !== o || r[5] !== u || r[6] !== i) {
		let e = t.Children.only(a);
		d = t.isValidElement(e) && t.cloneElement(e, {
			value: o[i],
			onValueChange: u
		}), r[3] = a, r[4] = o, r[5] = u, r[6] = i, r[7] = d;
	} else d = r[7];
	return d;
}
Ve.withComponent = (e) => ({ name: t, ...n }) => /* @__PURE__ */ g(He.Field, {
	name: t,
	children: /* @__PURE__ */ g(e, {
		name: t,
		...n
	})
});
function He(t) {
	let n = e(14), r, i, a, o;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4]) : ({fields: i, children: r, onFieldChange: o, ...a} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o);
	let s = o === void 0 ? ze : o, c;
	n[5] !== i || n[6] !== s ? (c = {
		fields: i,
		onFieldChange: s
	}, n[5] = i, n[6] = s, n[7] = c) : c = n[7];
	let l = c, u;
	n[8] !== r || n[9] !== a ? (u = /* @__PURE__ */ g(F, {
		as: "form",
		...a,
		children: r
	}), n[8] = r, n[9] = a, n[10] = u) : u = n[10];
	let d;
	return n[11] !== l || n[12] !== u ? (d = /* @__PURE__ */ g(Be, {
		value: l,
		children: u
	}), n[11] = l, n[12] = u, n[13] = d) : d = n[13], d;
}
He.Field = Ve;
//#endregion
//#region src/components/label/Label.tsx
function Ue(t) {
	let n = e(14), r, i, a, o;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4]) : ({label: a, chevron: r, children: i, ...o} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o);
	let s;
	n[5] !== r || n[6] !== a ? (s = a && /* @__PURE__ */ _(F, {
		horizontal: !0,
		spacing: "4px",
		align: "middle left",
		children: [/* @__PURE__ */ g(V, {
			light: !0,
			caps: !0,
			innerStyle: {
				fontSize: 11,
				lineHeight: "17px"
			},
			children: a
		}), r && /* @__PURE__ */ g(ge, {
			icon: me,
			size: 16,
			style: {
				opacity: .6,
				margin: -4,
				strokeWidth: 1
			}
		})]
	}), n[5] = r, n[6] = a, n[7] = s) : s = n[7];
	let c;
	n[8] === i ? c = n[9] : (c = /* @__PURE__ */ g(F, { children: i }), n[8] = i, n[9] = c);
	let l;
	return n[10] !== o || n[11] !== s || n[12] !== c ? (l = /* @__PURE__ */ _(F, {
		spacing: "8px",
		...o,
		children: [s, c]
	}), n[10] = o, n[11] = s, n[12] = c, n[13] = l) : l = n[13], l;
}
var We = {
	Image: "_onyx-ui_Image_FmDOS",
	border: "_onyx-ui_border_rttIj",
	Stack: "_onyx-ui_Stack_4xsQe",
	StackItem: "_onyx-ui_StackItem_QKBcL"
};
//#endregion
//#region src/components/avatar/Avatar.tsx
function Ge(t) {
	let n = e(30), r, i, a, o, s, c, l;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7]) : ({name: s, label: o, badge: r, imageOnly: a, imageBorder: i, imageFillColor: l, ...c} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l);
	let u = l === void 0 ? "icon" : l, d;
	n[8] === s ? d = n[9] : (d = s?.split(" ").map(qe).join(""), n[8] = s, n[9] = d);
	let f = d, p = i && We.border, m;
	n[10] === p ? m = n[11] : (m = [We.Image, p].filter(Ke), n[10] = p, n[11] = m);
	let h = m.join(" "), v;
	n[12] === f ? v = n[13] : (v = /* @__PURE__ */ g(V, {
		fontSize: "12px",
		fontWeight: "600",
		children: f
	}), n[12] = f, n[13] = v);
	let y;
	n[14] === r ? y = n[15] : (y = r && /* @__PURE__ */ g(ge, {
		icon: r,
		size: 14,
		color: "primary",
		fill: "white",
		style: {
			position: "absolute",
			top: -1,
			left: -1
		}
	}), n[14] = r, n[15] = y);
	let b;
	n[16] !== i || n[17] !== h || n[18] !== u || n[19] !== v || n[20] !== y ? (b = /* @__PURE__ */ _(F, {
		border: i,
		borderColor: "primary",
		cornerRadius: "max",
		fillColor: u,
		align: "middle center",
		className: h,
		children: [v, y]
	}), n[16] = i, n[17] = h, n[18] = u, n[19] = v, n[20] = y, n[21] = b) : b = n[21];
	let x;
	n[22] !== a || n[23] !== o || n[24] !== s ? (x = !a && /* @__PURE__ */ _(F, {
		spacing: "8px",
		align: "middle left",
		children: [/* @__PURE__ */ g(V, { children: s }), o && /* @__PURE__ */ g(V, {
			light: !0,
			fontSize: "12px",
			children: o
		})]
	}), n[22] = a, n[23] = o, n[24] = s, n[25] = x) : x = n[25];
	let S;
	return n[26] !== c || n[27] !== b || n[28] !== x ? (S = /* @__PURE__ */ _(F, {
		horizontal: !0,
		spacing: "8px",
		align: "middle left",
		...c,
		children: [b, x]
	}), n[26] = c, n[27] = b, n[28] = x, n[29] = S) : S = n[29], S;
}
function Ke(e) {
	return e;
}
function qe(e) {
	return e[0].toUpperCase();
}
Ge.Stack = function({ children: e, ...n }) {
	let r = t.Children.toArray(e);
	return /* @__PURE__ */ _(F, {
		horizontal: !0,
		className: We.Stack,
		...n,
		children: [t.Children.map(e, (e) => t.isValidElement(e) && t.cloneElement(e, { className: We.StackItem })), r.length === 0 && /* @__PURE__ */ g(F, {
			cornerRadius: "max",
			className: We.Image,
			style: { border: "1px dashed var(--divider-color)" }
		})]
	});
};
var Je = { text: "_onyx-ui_text_-bQVx" };
//#endregion
//#region src/components/chip/Chip.tsx
function Ye(t) {
	let n = e(39), r, i, a, o, s, c, u, d, p, m, h, v, y;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], u = n[7], d = n[8], p = n[9], m = n[10], h = n[11], v = n[12], y = n[13]) : ({ref: h, icon: a, iconSize: c, iconColor: o, iconLight: s, fillColor: i, outlineColor: y, opacityOnPress: p, children: r, style: v, onPointerDown: d, onClick: u, ...m} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = u, n[8] = d, n[9] = p, n[10] = m, n[11] = h, n[12] = v, n[13] = y);
	let b = y === void 0 ? "content" : y, x = f(null), S, C;
	n[14] !== i || n[15] !== b ? (S = () => {
		x.current && i && x.current.style.setProperty("--outline-color", `var(--${b}-color)`);
	}, C = [i, b], n[14] = i, n[15] = b, n[16] = S, n[17] = C) : (S = n[16], C = n[17]), l(S, C);
	let w;
	n[18] !== a || n[19] !== o || n[20] !== s || n[21] !== c ? (w = a && /* @__PURE__ */ g(ge, {
		bleed: !0,
		icon: a,
		size: c ?? 14,
		color: o,
		style: { opacity: s ? .6 : void 0 }
	}), n[18] = a, n[19] = o, n[20] = s, n[21] = c, n[22] = w) : w = n[22];
	let T = i ? "2px 4px" : void 0, E = i ? "-2px 0" : void 0, D;
	n[23] !== v || n[24] !== E ? (D = {
		margin: E,
		...v
	}, n[23] = v, n[24] = E, n[25] = D) : D = n[25];
	let O;
	n[26] !== r || n[27] !== i || n[28] !== m || n[29] !== T || n[30] !== D ? (O = /* @__PURE__ */ g(V, {
		ref: x,
		fillColor: i,
		cornerRadius: "2px",
		padding: T,
		className: Je.text,
		style: D,
		...m,
		children: r
	}), n[26] = r, n[27] = i, n[28] = m, n[29] = T, n[30] = D, n[31] = O) : O = n[31];
	let k;
	return n[32] !== u || n[33] !== d || n[34] !== p || n[35] !== h || n[36] !== w || n[37] !== O ? (k = /* @__PURE__ */ _(F, {
		horizontal: !0,
		ref: h,
		spacing: "4px",
		align: "middle left",
		opacityOnPress: p,
		onPointerDown: d,
		onClick: u,
		children: [w, O]
	}), n[32] = u, n[33] = d, n[34] = p, n[35] = h, n[36] = w, n[37] = O, n[38] = k) : k = n[38], k;
}
//#endregion
//#region src/components/tabs/Tabs.tsx
function Xe(t) {
	let n = e(16), r, i, a, o, s;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5]) : ({index: i, selected: s, children: r, onTabSelect: a, ...o} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s);
	let c;
	n[6] !== i || n[7] !== a ? (c = () => {
		a(i);
	}, n[6] = i, n[7] = a, n[8] = c) : c = n[8];
	let l = c, u = !s, d = s ? "primary" : void 0, f;
	n[9] === Symbol.for("react.memo_cache_sentinel") ? (f = { paddingBottom: 8 }, n[9] = f) : f = n[9];
	let p;
	return n[10] !== r || n[11] !== l || n[12] !== o || n[13] !== u || n[14] !== d ? (p = /* @__PURE__ */ g(V, {
		opacityOnPress: !0,
		light: u,
		fontSize: "18px",
		cursor: "pointer",
		negativeBorder: !0,
		border: "bottom",
		borderColor: d,
		style: f,
		onClick: l,
		...o,
		children: r
	}), n[10] = r, n[11] = l, n[12] = o, n[13] = u, n[14] = d, n[15] = p) : p = n[15], p;
}
function Ze(t) {
	let n = e(15), r, i, a, o;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4]) : ({selectedTabIndex: o, children: r, onTabSelect: i, ...a} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o);
	let s;
	if (n[5] !== r || n[6] !== i || n[7] !== o) {
		let e;
		n[9] !== i || n[10] !== o ? (e = (e, t) => {
			let { title: n } = e;
			return /* @__PURE__ */ g(Xe, {
				index: t,
				selected: t === o,
				onTabSelect: i,
				children: n
			}, t);
		}, n[9] = i, n[10] = o, n[11] = e) : e = n[11], s = r.map(e), n[5] = r, n[6] = i, n[7] = o, n[8] = s;
	} else s = n[8];
	let c;
	return n[12] !== a || n[13] !== s ? (c = /* @__PURE__ */ g(F, {
		horizontal: !0,
		spacing: "16px",
		...a,
		children: s
	}), n[12] = a, n[13] = s, n[14] = c) : c = n[14], c;
}
Ze.Panel = function({ active: e, children: t, ...n }) {
	return /* @__PURE__ */ g(F, {
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
function Qe(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var $e = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, et = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, tt = {};
function nt(e, t) {
	return ((t || tt).jsx ? et : $e).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var rt = /[ \t\n\f\r]/g;
function it(e) {
	return typeof e == "object" ? e.type === "text" ? at(e.value) : !1 : at(e);
}
function at(e) {
	return e.replace(rt, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var ot = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
ot.prototype.normal = {}, ot.prototype.property = {}, ot.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function st(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new ot(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function ct(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var lt = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
lt.prototype.attribute = "", lt.prototype.booleanish = !1, lt.prototype.boolean = !1, lt.prototype.commaOrSpaceSeparated = !1, lt.prototype.commaSeparated = !1, lt.prototype.defined = !1, lt.prototype.mustUseProperty = !1, lt.prototype.number = !1, lt.prototype.overloadedBoolean = !1, lt.prototype.property = "", lt.prototype.spaceSeparated = !1, lt.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var ut = /* @__PURE__ */ T({
	boolean: () => G,
	booleanish: () => K,
	commaOrSpaceSeparated: () => mt,
	commaSeparated: () => pt,
	number: () => q,
	overloadedBoolean: () => ft,
	spaceSeparated: () => J
}), dt = 0, G = ht(), K = ht(), ft = ht(), q = ht(), J = ht(), pt = ht(), mt = ht();
function ht() {
	return 2 ** ++dt;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var gt = Object.keys(ut), _t = class extends lt {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), vt(this, "space", r), typeof n == "number") for (; ++i < gt.length;) {
			let e = gt[i];
			vt(this, gt[i], (n & ut[e]) === ut[e]);
		}
	}
};
_t.prototype.defined = !0;
function vt(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function yt(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new _t(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[ct(r)] = r, n[ct(a.attribute)] = r;
	}
	return new ot(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var bt = yt({
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
function xt(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function St(e, t) {
	return xt(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Ct = yt({
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
		accept: pt,
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
		coords: q | pt,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: G,
		defer: G,
		dir: null,
		dirName: null,
		disabled: G,
		download: ft,
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
		hidden: ft,
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
	transform: St
}), wt = yt({
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
		about: mt,
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
		g1: pt,
		g2: pt,
		glyphName: pt,
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
		kernelMatrix: mt,
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
		property: mt,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: mt,
		rev: mt,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: mt,
		requiredFeatures: mt,
		requiredFonts: mt,
		requiredFormats: mt,
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
		strokeDashArray: mt,
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
		systemLanguage: mt,
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
		typeOf: mt,
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
	transform: xt
}), Tt = yt({
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
}), Et = yt({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: St
}), Dt = yt({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Ot = {
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
}, kt = /[A-Z]/g, At = /-[a-z]/g, jt = /^data[-\w.:]+$/i;
function Mt(e, t) {
	let n = ct(t), r = t, i = lt;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && jt.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(At, Pt);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!At.test(e)) {
				let n = e.replace(kt, Nt);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = _t;
	}
	return new i(r, t);
}
function Nt(e) {
	return "-" + e.toLowerCase();
}
function Pt(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var Ft = st([
	bt,
	Ct,
	Tt,
	Et,
	Dt
], "html"), It = st([
	bt,
	wt,
	Tt,
	Et,
	Dt
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function Lt(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var Rt = /* @__PURE__ */ w(((e, t) => {
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
})), zt = /* @__PURE__ */ w(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(Rt());
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
})), Bt = /* @__PURE__ */ w(((e) => {
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
})), Vt = /* @__PURE__ */ w(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(zt()), r = Bt();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), Ht = Wt("end"), Ut = Wt("start");
function Wt(e) {
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
function Gt(e) {
	let t = Ut(e), n = Ht(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function Kt(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Jt(e.position) : "start" in e || "end" in e ? Jt(e) : "line" in e || "column" in e ? qt(e) : "";
}
function qt(e) {
	return Yt(e && e.line) + ":" + Yt(e && e.column);
}
function Jt(e) {
	return qt(e && e.start) + "-" + qt(e && e.end);
}
function Yt(e) {
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
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = Kt(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
Y.prototype.file = "", Y.prototype.name = "", Y.prototype.reason = "", Y.prototype.message = "", Y.prototype.stack = "", Y.prototype.column = void 0, Y.prototype.line = void 0, Y.prototype.ancestors = void 0, Y.prototype.cause = void 0, Y.prototype.fatal = void 0, Y.prototype.place = void 0, Y.prototype.ruleId = void 0, Y.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var Xt = /* @__PURE__ */ D(Vt(), 1), Zt = {}.hasOwnProperty, Qt = /* @__PURE__ */ new Map(), $t = /[A-Z]/g, en = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), tn = new Set(["td", "th"]);
function nn(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = mn(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = pn(n, t.jsx, t.jsxs);
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
		schema: t.space === "svg" ? It : Ft,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = rn(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function rn(e, t, n) {
	if (t.type === "element") return an(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return on(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return cn(e, t, n);
	if (t.type === "mdxjsEsm") return sn(e, t);
	if (t.type === "root") return ln(e, t, n);
	if (t.type === "text") return un(e, t);
}
function an(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = It, e.schema = i), e.ancestors.push(t);
	let a = bn(e, t.tagName, !1), o = hn(e, t), s = _n(e, t);
	return en.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !it(e) : !0;
	})), dn(e, o, a, t), fn(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function on(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	xn(e, t.position);
}
function sn(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	xn(e, t.position);
}
function cn(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = It, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : bn(e, t.name, !0), o = gn(e, t), s = _n(e, t);
	return dn(e, o, a, t), fn(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function ln(e, t, n) {
	let r = {};
	return fn(r, _n(e, t)), e.create(t, e.Fragment, r, n);
}
function un(e, t) {
	return t.value;
}
function dn(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function fn(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function pn(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function mn(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = Ut(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function hn(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && Zt.call(t.properties, i)) {
		let a = vn(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && tn.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function gn(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else xn(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else xn(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function _n(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : Qt;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = rn(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function vn(e, t, n) {
	let r = Mt(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? Qe(n) : Lt(n)), r.property === "style") {
			let t = typeof n == "object" ? n : yn(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Sn(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Ot[r.property] || r.property : r.attribute, n];
	}
}
function yn(e, t) {
	try {
		return (0, Xt.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new Y("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute", r;
	}
}
function bn(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = nt(e[n]) ? {
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
	} else r = nt(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return Zt.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	xn(e);
}
function xn(e, t) {
	let n = new Y("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Sn(e) {
	let t = {}, n;
	for (n in e) Zt.call(e, n) && (t[Cn(n)] = e[n]);
	return t;
}
function Cn(e) {
	let t = e.replace($t, wn);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function wn(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Tn = {
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
}, En = {};
function Dn(e, t) {
	let n = t || En;
	return On(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function On(e, t, n) {
	if (An(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return kn(e.children, t, n);
	}
	return Array.isArray(e) ? kn(e, t, n) : "";
}
function kn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = On(e[i], t, n);
	return r.join("");
}
function An(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var jn = document.createElement("i");
function Mn(e) {
	let t = "&" + e + ";";
	jn.innerHTML = t;
	let n = jn.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function Nn(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Pn(e, t) {
	return e.length > 0 ? (Nn(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var Fn = {}.hasOwnProperty;
function In(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) Ln(t, e[n]);
	return t;
}
function Ln(e, t) {
	let n;
	for (n in t) {
		let r = (Fn.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			Fn.call(r, a) || (r[a] = []);
			let e = i[a];
			Rn(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function Rn(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	Nn(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function zn(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function Bn(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var Vn = Xn(/[A-Za-z]/), Hn = Xn(/[\dA-Za-z]/), Un = Xn(/[#-'*+\--9=?A-Z^-~]/);
function Wn(e) {
	return e !== null && (e < 32 || e === 127);
}
var Gn = Xn(/\d/), Kn = Xn(/[\dA-Fa-f]/), qn = Xn(/[!-/:-@[-`{-~]/);
function X(e) {
	return e !== null && e < -2;
}
function Z(e) {
	return e !== null && (e < 0 || e === 32);
}
function Q(e) {
	return e === -2 || e === -1 || e === 32;
}
var Jn = Xn(/\p{P}|\p{S}/u), Yn = Xn(/\s/);
function Xn(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function Zn(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && Hn(e.charCodeAt(n + 1)) && Hn(e.charCodeAt(n + 2))) i = 2;
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
var Qn = { tokenize: $n };
function $n(e) {
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
var er = { tokenize: nr }, tr = { tokenize: rr };
function nr(e) {
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
			return Nn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(tr, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(tr, p, m)(n);
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
			Nn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
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
function rr(e, t, n) {
	return $(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function ir(e) {
	if (e === null || Z(e) || Yn(e)) return 1;
	if (Jn(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function ar(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var or = {
	name: "attention",
	resolveAll: sr,
	tokenize: cr
};
function sr(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			lr(d, -c), lr(f, c), o = {
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
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = Pn(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = Pn(l, [
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
			]), l = Pn(l, ar(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = Pn(l, [
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
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = Pn(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, Nn(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function cr(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = ir(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = ir(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function lr(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var ur = {
	name: "autolink",
	tokenize: dr
};
function dr(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return Vn(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || Hn(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || Hn(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || Wn(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : Un(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return Hn(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || Hn(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var fr = {
	partial: !0,
	tokenize: pr
};
function pr(e, t, n) {
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
var mr = {
	continuation: { tokenize: gr },
	exit: _r,
	name: "blockQuote",
	tokenize: hr
};
function hr(e, t, n) {
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
function gr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Q(t) ? $(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(mr, t, n)(r);
	}
}
function _r(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var vr = {
	name: "characterEscape",
	tokenize: yr
};
function yr(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return qn(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var br = {
	name: "characterReference",
	tokenize: xr
};
function xr(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = Hn, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Kn, u) : (e.enter("characterReferenceValue"), a = 7, o = Gn, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === Hn && !Mn(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Sr = {
	partial: !0,
	tokenize: Tr
}, Cr = {
	concrete: !0,
	name: "codeFenced",
	tokenize: wr
};
function wr(e, t, n) {
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
		return n === null || X(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Sr, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
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
		return t === null || X(t) ? e.check(Sr, h, b)(t) : (e.enter("codeFlowValue"), y(t));
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
function Tr(e, t, n) {
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
var Er = {
	name: "codeIndented",
	tokenize: Or
}, Dr = {
	partial: !0,
	tokenize: kr
};
function Or(e, t, n) {
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
		return t === null ? c(t) : X(t) ? e.attempt(Dr, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || X(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function kr(e, t, n) {
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
var Ar = {
	name: "codeText",
	previous: Mr,
	resolve: jr,
	tokenize: Nr
};
function jr(e) {
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
function Mr(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Nr(e, t, n) {
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
var Pr = class {
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
		return n && Fr(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), Fr(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Fr(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			Fr(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			Fr(this.left, t.reverse());
		}
	}
};
function Fr(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function Ir(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Pr(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Lr(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return Nn(e, 0, Infinity, u.slice(0)), !l;
}
function Lr(e, t) {
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
var Rr = {
	resolve: Br,
	tokenize: Vr
}, zr = {
	partial: !0,
	tokenize: Hr
};
function Br(e) {
	return Ir(e), e;
}
function Vr(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : X(t) ? e.check(zr, o, a)(t) : (e.consume(t), i);
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
function Hr(e, t, n) {
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
function Ur(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || Wn(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
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
		return !u && (i === null || i === 41 || Z(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || Wn(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function Wr(e, t, n, r, i, a) {
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
function Gr(e, t, n, r, i, a) {
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
function Kr(e, t) {
	let n;
	return r;
	function r(i) {
		return X(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? $(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var qr = {
	name: "definition",
	tokenize: Yr
}, Jr = {
	partial: !0,
	tokenize: Xr
};
function Yr(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Wr.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = Bn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return Z(t) ? Kr(e, l)(t) : l(t);
	}
	function l(t) {
		return Ur(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Jr, d, d)(t);
	}
	function d(t) {
		return Q(t) ? $(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || X(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Xr(e, t, n) {
	return r;
	function r(t) {
		return Z(t) ? Kr(e, i)(t) : n(t);
	}
	function i(t) {
		return Gr(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
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
var Zr = {
	name: "hardBreakEscape",
	tokenize: Qr
};
function Qr(e, t, n) {
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
var $r = {
	name: "headingAtx",
	resolve: ei,
	tokenize: ti
};
function ei(e, t) {
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
	}, Nn(e, r, n - r + 1, [
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
function ti(e, t, n) {
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
var ni = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), ri = [
	"pre",
	"script",
	"style",
	"textarea"
], ii = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: si,
	tokenize: ci
}, ai = {
	partial: !0,
	tokenize: ui
}, oi = {
	partial: !0,
	tokenize: li
};
function si(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function ci(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : P) : Vn(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : Vn(a) ? (e.consume(a), i = 4, r.interrupt ? t : P) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : P) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return Vn(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || Z(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && ri.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : ni.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || Hn(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Q(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || Vn(t) ? (e.consume(t), b) : Q(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Hn(t) ? (e.consume(t), b) : x(t);
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
		return t === 45 && i === 2 ? (e.consume(t), j) : t === 60 && i === 1 ? (e.consume(t), M) : t === 62 && i === 4 ? (e.consume(t), ne) : t === 63 && i === 3 ? (e.consume(t), P) : t === 93 && i === 5 ? (e.consume(t), te) : X(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ai, F, k)(t)) : t === null || X(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(oi, A, F)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ee;
	}
	function ee(t) {
		return t === null || X(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function j(t) {
		return t === 45 ? (e.consume(t), P) : O(t);
	}
	function M(t) {
		return t === 47 ? (e.consume(t), o = "", N) : O(t);
	}
	function N(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return ri.includes(n) ? (e.consume(t), ne) : O(t);
		}
		return Vn(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), N) : O(t);
	}
	function te(t) {
		return t === 93 ? (e.consume(t), P) : O(t);
	}
	function P(t) {
		return t === 62 ? (e.consume(t), ne) : t === 45 && i === 2 ? (e.consume(t), P) : O(t);
	}
	function ne(t) {
		return t === null || X(t) ? (e.exit("htmlFlowData"), F(t)) : (e.consume(t), ne);
	}
	function F(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function li(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return X(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function ui(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(fr, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var di = {
	name: "htmlText",
	tokenize: fi
};
function fi(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : Vn(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : Vn(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : X(t) ? (o = d, M(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? j(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : X(t) ? (o = h, M(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? j(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? j(t) : X(t) ? (o = v, M(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : X(t) ? (o = y, M(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? j(e) : y(e);
	}
	function x(t) {
		return Vn(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || Hn(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return X(t) ? (o = C, M(t)) : Q(t) ? (e.consume(t), C) : j(t);
	}
	function w(t) {
		return t === 45 || Hn(t) ? (e.consume(t), w) : t === 47 || t === 62 || Z(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), j) : t === 58 || t === 95 || Vn(t) ? (e.consume(t), E) : X(t) ? (o = T, M(t)) : Q(t) ? (e.consume(t), T) : j(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || Hn(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : X(t) ? (o = D, M(t)) : Q(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : X(t) ? (o = O, M(t)) : Q(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, ee) : t === null ? n(t) : X(t) ? (o = k, M(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || Z(t) ? T(t) : (e.consume(t), A);
	}
	function ee(e) {
		return e === 47 || e === 62 || Z(e) ? T(e) : n(e);
	}
	function j(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function M(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N;
	}
	function N(t) {
		return Q(t) ? $(e, te, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : te(t);
	}
	function te(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var pi = {
	name: "labelEnd",
	resolveAll: _i,
	resolveTo: vi,
	tokenize: yi
}, mi = { tokenize: bi }, hi = { tokenize: xi }, gi = { tokenize: Si };
function _i(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && Nn(e, 0, e.length, n), e;
}
function vi(e, t) {
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
	]], s = Pn(s, e.slice(a + 1, a + r + 3)), s = Pn(s, [[
		"enter",
		u,
		t
	]]), s = Pn(s, ar(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = Pn(s, [
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
	]), s = Pn(s, e.slice(o + 1)), s = Pn(s, [[
		"exit",
		c,
		t
	]]), Nn(e, a, e.length, s), e;
}
function yi(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Bn(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(mi, u, o ? u : d)(t) : t === 91 ? e.attempt(hi, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(gi, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function bi(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return Z(t) ? Kr(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : Ur(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return Z(t) ? Kr(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? Gr(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return Z(t) ? Kr(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function xi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Wr.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(Bn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Si(e, t, n) {
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
var Ci = {
	name: "labelStartImage",
	resolveAll: pi.resolveAll,
	tokenize: wi
};
function wi(e, t, n) {
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
var Ti = {
	name: "labelStartLink",
	resolveAll: pi.resolveAll,
	tokenize: Ei
};
function Ei(e, t, n) {
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
var Di = {
	name: "lineEnding",
	tokenize: Oi
};
function Oi(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var ki = {
	name: "thematicBreak",
	tokenize: Ai
};
function Ai(e, t, n) {
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
var ji = {
	continuation: { tokenize: Fi },
	exit: Li,
	name: "list",
	tokenize: Pi
}, Mi = {
	partial: !0,
	tokenize: Ri
}, Ni = {
	partial: !0,
	tokenize: Ii
};
function Pi(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : Gn(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(ki, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return Gn(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(fr, r.interrupt ? n : u, e.attempt(Mi, f, d));
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
function Fi(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(fr, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ni, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, $(e, e.attempt(ji, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function Ii(e, t, n) {
	let r = this;
	return $(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Li(e) {
	e.exit(this.containerState.type);
}
function Ri(e, t, n) {
	let r = this;
	return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var zi = {
	name: "setextUnderline",
	resolveTo: Bi,
	tokenize: Vi
};
function Bi(e, t) {
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
function Vi(e, t, n) {
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
var Hi = { tokenize: Ui };
function Ui(e) {
	let t = this, n = e.attempt(fr, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Rr, i)), "linePrefix")));
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
var Wi = { resolveAll: Ji() }, Gi = qi("string"), Ki = qi("text");
function qi(e) {
	return {
		resolveAll: Ji(e === "text" ? Yi : void 0),
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
function Ji(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Yi(e, t) {
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
var Xi = /* @__PURE__ */ T({
	attentionMarkers: () => ia,
	contentInitial: () => Qi,
	disable: () => aa,
	document: () => Zi,
	flow: () => ea,
	flowInitial: () => $i,
	insideSpan: () => ra,
	string: () => ta,
	text: () => na
}), Zi = {
	42: ji,
	43: ji,
	45: ji,
	48: ji,
	49: ji,
	50: ji,
	51: ji,
	52: ji,
	53: ji,
	54: ji,
	55: ji,
	56: ji,
	57: ji,
	62: mr
}, Qi = { 91: qr }, $i = {
	[-2]: Er,
	[-1]: Er,
	32: Er
}, ea = {
	35: $r,
	42: ki,
	45: [zi, ki],
	60: ii,
	61: zi,
	95: ki,
	96: Cr,
	126: Cr
}, ta = {
	38: br,
	92: vr
}, na = {
	[-5]: Di,
	[-4]: Di,
	[-3]: Di,
	33: Ci,
	38: br,
	42: or,
	60: [ur, di],
	91: Ti,
	92: [Zr, vr],
	93: pi,
	95: or,
	96: Ar
}, ra = { null: [or, Wi] }, ia = { null: [42, 95] }, aa = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function oa(e, t, n) {
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
		return o = Pn(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = ar(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return ca(p(e), t);
	}
	function p(e) {
		return sa(o, e);
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
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && Nn(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
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
function sa(e, t) {
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
function ca(e, t) {
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
function la(e) {
	let t = {
		constructs: In([Xi, ...(e || {}).extensions || []]),
		content: n(Qn),
		defined: [],
		document: n(er),
		flow: n(Hi),
		lazy: {},
		string: n(Gi),
		text: n(Ki)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return oa(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function ua(e) {
	for (; !Ir(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var da = /[\0\t\n\r]/g;
function fa() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (da.lastIndex = u, c = da.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
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
var pa = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ma(e) {
	return e.replace(pa, ha);
}
function ha(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return zn(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Mn(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var ga = {}.hasOwnProperty;
function _a(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), va(n)(ua(la(n).document().write(fa()(e, t, !0))));
}
function va(e) {
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
			autolink: a(ue),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(oe),
			blockQuote: a(H),
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
			definition: a(W),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(ae),
			hardBreakEscape: a(se),
			hardBreakTrailing: a(se),
			htmlFlow: a(ce, o),
			htmlFlowData: T,
			htmlText: a(ce, o),
			htmlTextData: T,
			image: a(le),
			label: o,
			link: a(ue),
			listItem: a(fe),
			listItemValue: f,
			listOrdered: a(de, d),
			listUnordered: a(de),
			paragraph: a(pe),
			reference: re,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(oe),
			strong: a(me),
			thematicBreak: a(ge)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: V,
			autolinkProtocol: B,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: L,
			characterReferenceMarkerNumeric: L,
			characterReferenceValue: R,
			characterReference: z,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(ee),
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
			image: c(M),
			label: te,
			labelText: N,
			lineEnding: D,
			link: c(j),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: I,
			resourceDestinationString: P,
			resourceTitleString: ne,
			resource: F,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	ba(t, (e || {}).mdastExtensions || []);
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
			ga.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Sa).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: ya(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: ya(e.length > 0 ? e[e.length - 2][1].end : {
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
			start: ya(t.start),
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
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Sa).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + Kt({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = ya(e.end);
	}
	function u() {
		return Dn(this.stack.pop());
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
		n.label = t, n.identifier = Bn(this.sliceSerialize(e)).toLowerCase();
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
		(!n || n.type !== "text") && (n = he(), n.position = {
			start: ya(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = ya(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = ya(e.end), this.data.atHardBreak = void 0;
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
	function ee() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function j() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function M() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function N(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = ma(t), n.identifier = Bn(t).toLowerCase();
	}
	function te() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function P() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function ne() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function F() {
		this.data.inReference = void 0;
	}
	function re() {
		this.data.referenceType = "collapsed";
	}
	function I(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Bn(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function L(e) {
		this.data.characterReferenceType = e.type;
	}
	function R(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = zn(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Mn(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function z(e) {
		let t = this.stack.pop();
		t.position.end = ya(e.end);
	}
	function B(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function V(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function H() {
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
	function W() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function ae() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function oe() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function se() {
		return { type: "break" };
	}
	function ce() {
		return {
			type: "html",
			value: ""
		};
	}
	function le() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function ue() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function de(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function fe(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function pe() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function me() {
		return {
			type: "strong",
			children: []
		};
	}
	function he() {
		return {
			type: "text",
			value: ""
		};
	}
	function ge() {
		return { type: "thematicBreak" };
	}
}
function ya(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function ba(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? ba(e, r) : xa(e, r);
	}
}
function xa(e, t) {
	let n;
	for (n in t) if (ga.call(t, n)) switch (n) {
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
function Sa(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + Kt({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + Kt({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + Kt({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function Ca(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return _a(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function wa(e, t) {
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
function Ta(e, t) {
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
function Ea(e, t) {
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
function Da(e, t) {
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
function Oa(e, t) {
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
function ka(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Zn(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
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
function Aa(e, t) {
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
function ja(e, t) {
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
function Ma(e, t) {
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
function Na(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Ma(e, t);
	let i = {
		src: Zn(r.url || ""),
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
function Pa(e, t) {
	let n = { src: Zn(t.url) };
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
function Fa(e, t) {
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
function Ia(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return Ma(e, t);
	let i = { href: Zn(r.url || "") };
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
function La(e, t) {
	let n = { href: Zn(t.url) };
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
function Ra(e, t, n) {
	let r = e.all(t), i = n ? za(n) : Ba(t), a = {}, o = [];
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
function za(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = Ba(n[r]);
	}
	return t;
}
function Ba(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function Va(e, t) {
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
function Ha(e, t) {
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
function Ua(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function Wa(e, t) {
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
function Ga(e, t) {
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
		}, a = Ut(t.children[1]), o = Ht(t.children[t.children.length - 1]);
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
function Ka(e, t, n) {
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
function qa(e, t) {
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
var Ja = 9, Ya = 32;
function Xa(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(Za(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(Za(t.slice(i), i > 0, !1)), a.join("");
}
function Za(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Ja || t === Ya;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Ja || t === Ya;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function Qa(e, t) {
	let n = {
		type: "text",
		value: Xa(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function $a(e, t) {
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
var eo = {
	blockquote: wa,
	break: Ta,
	code: Ea,
	delete: Da,
	emphasis: Oa,
	footnoteReference: ka,
	heading: Aa,
	html: ja,
	imageReference: Na,
	image: Pa,
	inlineCode: Fa,
	linkReference: Ia,
	link: La,
	listItem: Ra,
	list: Va,
	paragraph: Ha,
	root: Ua,
	strong: Wa,
	table: Ga,
	tableCell: qa,
	tableRow: Ka,
	text: Qa,
	thematicBreak: $a,
	toml: to,
	yaml: to,
	definition: to,
	footnoteDefinition: to
};
function to() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var no = typeof self == "object" ? self : globalThis, ro = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new no[e](t);
}, io = (e, t) => {
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
				return n(ro(e, t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(ro(a, o), i);
	};
	return r;
}, ao = (e) => io(/* @__PURE__ */ new Map(), e)(0), oo = "", { toString: so } = {}, { keys: co } = Object, lo = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = so.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, oo];
		case "Object": return [2, oo];
		case "Date": return [3, oo];
		case "RegExp": return [4, oo];
		case "Map": return [5, oo];
		case "Set": return [6, oo];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, uo = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), fo = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = lo(r);
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
				for (let t of co(r)) (e || !uo(lo(r[t]))) && n.push([a(t), a(r[t])]);
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
				for (let [n, i] of r) (e || !(uo(lo(n)) || uo(lo(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !uo(lo(n))) && t.push(a(n));
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
}, po = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return fo(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, mo = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? ao(po(e, t)) : structuredClone(e) : (e, t) => ao(po(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function ho(e, t) {
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
function go(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function _o(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || ho, r = e.options.footnoteBackLabel || go, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = Zn(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
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
					...mo(o),
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
var vo = (function(e) {
	if (e == null) return Co;
	if (typeof e == "function") return So(e);
	if (typeof e == "object") return Array.isArray(e) ? yo(e) : bo(e);
	if (typeof e == "string") return xo(e);
	throw Error("Expected function, string, or object as test");
});
function yo(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = vo(e[n]);
	return So(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function bo(e) {
	let t = e;
	return So(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function xo(e) {
	return So(t);
	function t(t) {
		return t && t.type === e;
	}
}
function So(e) {
	return t;
	function t(t, n, r) {
		return !!(wo(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Co() {
	return !0;
}
function wo(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function To(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var Eo = [];
function Do(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = vo(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + To(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = Eo, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Oo(n(e, c)), l[0] === !1)) return l;
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
function Oo(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? Eo : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function ko(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Do(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var Ao = {}.hasOwnProperty, jo = {};
function Mo(e, t) {
	let n = t || jo, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: Po,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...eo,
			...n.handlers
		},
		one: o,
		options: n,
		patch: No,
		wrap: Io
	};
	return ko(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Ao.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = mo(n);
				return r.children = a.all(e), r;
			}
			return mo(e);
		}
		return (a.options.unknownHandler || Fo)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = Lo(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = Lo(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function No(e, t) {
	e.position && (t.position = Gt(e));
}
function Po(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, mo(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Fo(e, t) {
	let n = t.data || {}, r = "value" in t && !(Ao.call(n, "hProperties") || Ao.call(n, "hChildren")) ? {
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
function Io(e, t) {
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
function Lo(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function Ro(e, t) {
	let n = Mo(e, t), r = n.one(e, void 0), i = _o(n), a = Array.isArray(r) ? {
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
function zo(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = Ro(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return Ro(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function Bo(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var Vo = /* @__PURE__ */ w(((e, t) => {
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
function Ho(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function Uo() {
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
			t = o, s ? Wo(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function Wo(e, t) {
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
var Go = {
	basename: Ko,
	dirname: qo,
	extname: Jo,
	join: Yo,
	sep: "/"
};
function Ko(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	Qo(e);
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
function qo(e) {
	if (Qo(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Jo(e) {
	Qo(e);
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
function Yo(...e) {
	let t = -1, n;
	for (; ++t < e.length;) Qo(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Xo(n);
}
function Xo(e) {
	Qo(e);
	let t = e.codePointAt(0) === 47, n = Zo(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Zo(e, t) {
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
function Qo(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var $o = { cwd: es };
function es() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function ts(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function ns(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!ts(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return rs(e);
}
function rs(e) {
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
var is = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], as = class {
	constructor(e) {
		let t;
		t = e ? ts(e) ? { path: e } : typeof e == "string" || ls(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : $o.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < is.length;) {
			let e = is[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) is.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? Go.basename(this.path) : void 0;
	}
	set basename(e) {
		ss(e, "basename"), os(e, "basename"), this.path = Go.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? Go.dirname(this.path) : void 0;
	}
	set dirname(e) {
		cs(this.basename, "dirname"), this.path = Go.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? Go.extname(this.path) : void 0;
	}
	set extname(e) {
		if (os(e, "extname"), cs(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = Go.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		ts(e) && (e = ns(e)), ss(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? Go.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		ss(e, "stem"), os(e, "stem"), this.path = Go.join(this.dirname || "", e + (this.extname || ""));
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
function os(e, t) {
	if (e && e.includes(Go.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + Go.sep + "`");
}
function ss(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function cs(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function ls(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var us = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), ds = /* @__PURE__ */ D(Vo(), 1), fs = {}.hasOwnProperty, ps = new class e extends us {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Uo();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, ds.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (gs("data", this.frozen), this.namespace[e] = t, this) : fs.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (gs("data", this.frozen), this.namespace = e, this) : this.namespace;
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
		let t = ys(e), n = this.parser || this.Parser;
		return ms("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), ms("process", this.parser || this.Parser), hs("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = ys(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				xs(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), ms("processSync", this.parser || this.Parser), hs("processSync", this.compiler || this.Compiler), this.process(e, r), vs("processSync", "process", t), n;
		function r(e, r) {
			t = !0, Bo(e), n = r;
		}
	}
	run(e, t, n) {
		_s(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = ys(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), vs("runSync", "run", n), r;
		function i(e, t) {
			Bo(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = ys(t), r = this.compiler || this.Compiler;
		return hs("stringify", r), _s(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (gs("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
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
			o(e.plugins), e.settings && (r.settings = (0, ds.default)(!0, r.settings, e.settings));
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
				Ho(o) && Ho(r) && (r = (0, ds.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function ms(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function hs(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function gs(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function _s(e) {
	if (!Ho(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function vs(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function ys(e) {
	return bs(e) ? e : new as(e);
}
function bs(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function xs(e) {
	return typeof e == "string" || Ss(e);
}
function Ss(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Cs = [], ws = { allowDangerousHtml: !0 }, Ts = /^(https?|ircs?|mailto|xmpp)$/i, Es = [
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
function Ds(e) {
	let t = Os(e), n = ks(e);
	return As(t.runSync(t.parse(n), n), e);
}
function Os(e) {
	let t = e.rehypePlugins || Cs, n = e.remarkPlugins || Cs, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...ws
	} : ws;
	return ps().use(Ca).use(n).use(zo, r).use(t);
}
function ks(e) {
	let t = e.children || "", n = new as();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function As(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || js;
	for (let e of Es) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return ko(e, l), nn(e, {
		Fragment: h,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: g,
		jsxs: _,
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
			for (t in Tn) if (Object.hasOwn(Tn, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Tn[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function js(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Ts.test(e.slice(0, t)) ? e : "";
}
var Ms = { Markdown: "_onyx-ui_Markdown_4qDhu" }, Ns = {
	h1({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ g(V, {
			as: "h1",
			fontSize: "32px",
			fontWeight: "300",
			children: n
		});
	},
	h2({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ g(V, {
			as: "h2",
			fontSize: "24px",
			fontWeight: "600",
			children: n
		});
	},
	h3({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ g(V, {
			as: "h2",
			fontSize: "18px",
			fontWeight: "500",
			children: n
		});
	},
	p({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ g(V, {
			as: "p",
			children: n
		});
	},
	ul({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ g(F, {
			as: "ul",
			children: n
		});
	},
	li({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ g(V, {
			as: "li",
			children: n
		});
	},
	code({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ g(V, {
			border: !0,
			as: "code",
			fillColor: "panel",
			cornerRadius: "2px",
			padding: "16px",
			children: n
		});
	}
};
function Ps() {
	let t = e(3), [n, r] = p(), i;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
		(async () => {
			r(await (await fetch("https://webdav.mike-austin.com/Learning Kopi.md")).text());
		})();
	}, t[0] = i) : i = t[0], l(i);
	let a;
	return t[1] === n ? a = t[2] : (a = /* @__PURE__ */ g(F, {
		flex: !0,
		padding: "16px",
		className: Ms.Markdown,
		children: /* @__PURE__ */ g(Ds, {
			components: Ns,
			children: n
		})
	}), t[1] = n, t[2] = a), a;
}
//#endregion
export { Ge as Avatar, xe as Button, Ie as Checkbox, Ye as Chip, De as Divider, He as Form, ge as Icon, we as Input, Ue as Label, ke as List, Ps as Markdown, Fe as Menu, je as Popover, Re as Select, Ze as Tabs, V as Text, Ee as Toggle, F as View };
