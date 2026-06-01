import { c as e } from "react/compiler-runtime";
import t, { cloneElement as n, createContext as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useImperativeHandle as c, useLayoutEffect as l, useRef as u, useState as d } from "react";
import { createPortal as f } from "react-dom";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
import { CheckIcon as g, ChevronDownIcon as _ } from "lucide-react";
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
	fadeIn: "_onyx-ui_fadeIn_rlN6H",
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
	"gray-3": "_onyx-ui_gray-3_HFEgY",
	"gray-4": "_onyx-ui_gray-4_LOWCM",
	"gray-5": "_onyx-ui_gray-5_PuUxt",
	"gray-6": "_onyx-ui_gray-6_ck02v",
	"gray-7": "_onyx-ui_gray-7_I-f9x",
	"gray-8": "_onyx-ui_gray-8_iu9vd",
	"gray-9": "_onyx-ui_gray-9_qnZ5u",
	"blue-5": "_onyx-ui_blue-5_WsXQB",
	"indigo-4": "_onyx-ui_indigo-4_XiJDJ",
	"green-4": "_onyx-ui_green-4_G1TFI",
	"red-4": "_onyx-ui_red-4_4jQqw",
	"grape-4": "_onyx-ui_grape-4_PS8Hc",
	"cyan-4": "_onyx-ui_cyan-4_uZ19N",
	"green-5": "_onyx-ui_green-5_Wk-JR",
	"green-6": "_onyx-ui_green-6_LZWbv",
	"violet-2": "_onyx-ui_violet-2_Gj3Id",
	"blue-2": "_onyx-ui_blue-2_OvAbV",
	"teal-2": "_onyx-ui_teal-2_NPdHu",
	"lime-3": "_onyx-ui_lime-3_nEnqH",
	"orange-4": "_onyx-ui_orange-4_m-giT",
	"red-0": "_onyx-ui_red-0_jhGdH",
	"red-1": "_onyx-ui_red-1_yUDwc",
	"red-2": "_onyx-ui_red-2_-VgZm",
	"pink-0": "_onyx-ui_pink-0_KToEp",
	"pink-1": "_onyx-ui_pink-1_7KiDL",
	"pink-2": "_onyx-ui_pink-2_Uiwde",
	"grape-0": "_onyx-ui_grape-0_37-77",
	"grape-1": "_onyx-ui_grape-1_3Drf3",
	"grape-2": "_onyx-ui_grape-2_FeM6I",
	"violet-0": "_onyx-ui_violet-0_-eBAz",
	"violet-1": "_onyx-ui_violet-1_EPNeY",
	"indigo-0": "_onyx-ui_indigo-0_IKdhW",
	"indigo-1": "_onyx-ui_indigo-1_Gg6i0",
	"indigo-2": "_onyx-ui_indigo-2_b4Nz7",
	"blue-0": "_onyx-ui_blue-0_wYMES",
	"blue-1": "_onyx-ui_blue-1_w0CLj",
	"cyan-0": "_onyx-ui_cyan-0_78-8V",
	"cyan-1": "_onyx-ui_cyan-1_F0aBY",
	"cyan-2": "_onyx-ui_cyan-2_avZQd",
	"teal-0": "_onyx-ui_teal-0_AWFps",
	"teal-1": "_onyx-ui_teal-1_nIyZn",
	"green-0": "_onyx-ui_green-0_tUSTX",
	"green-1": "_onyx-ui_green-1_3W1uD",
	"green-2": "_onyx-ui_green-2_gb9Hv",
	"lime-0": "_onyx-ui_lime-0_3Cthn",
	"lime-1": "_onyx-ui_lime-1_hkoQy",
	"lime-2": "_onyx-ui_lime-2_9ib1B",
	"yellow-0": "_onyx-ui_yellow-0_-l-3r",
	"yellow-1": "_onyx-ui_yellow-1_Or8Om",
	"yellow-2": "_onyx-ui_yellow-2_RXXPj",
	"orange-0": "_onyx-ui_orange-0_eWWzv",
	"orange-1": "_onyx-ui_orange-1_hYzhr",
	"orange-2": "_onyx-ui_orange-2_zVcWN"
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
}, P = {
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
}, F = {
	primary: "_onyx-ui_primary_Obpgx",
	panel: "_onyx-ui_panel_cDvWc",
	divider: "_onyx-ui_divider_5ZVQ9",
	gutter: "_onyx-ui_gutter_Zs0-C",
	selected: "_onyx-ui_selected_dssRO",
	highlight: "_onyx-ui_highlight_VM6hc",
	"gray-0": "_onyx-ui_gray-0_gq2kw",
	"gray-1": "_onyx-ui_gray-1_FmiDf",
	"gray-2": "_onyx-ui_gray-2_KYZNn",
	"gray-3": "_onyx-ui_gray-3_qkCMy",
	"gray-4": "_onyx-ui_gray-4_2wOcT",
	"gray-5": "_onyx-ui_gray-5_cARjd",
	"gray-6": "_onyx-ui_gray-6_ihKbc",
	"gray-7": "_onyx-ui_gray-7_aAN3D",
	"gray-8": "_onyx-ui_gray-8_LF-5e",
	"gray-9": "_onyx-ui_gray-9_orod-",
	"green-5": "_onyx-ui_green-5_pVYH0",
	"green-6": "_onyx-ui_green-6_X8zBj"
}, te = t.createContext({ parentFillColor: void 0 });
function I(t) {
	let n = e(80), r, i, a, o, s, g, _, v, y, b, x, S, C, w, T, E, D, I, R, z, B, V, ne, H, re, ie;
	if (n[0] !== t) {
		let { ref: e, as: c, flex: l, wrap: u, horizontal: d, absolute: f, sticky: p, active: m, opacityOnPress: h, zIndex: O, shadow: k, cursor: A, padding: ee, spacing: j, border: M, negativeBorder: N, align: P, fillColor: F, borderColor: te, cornerRadius: L, tooltip: U, tooltipAnchor: W, tooltipOffset: ae, style: oe, className: se, children: ce, ...G } = t;
		D = e, a = c, x = l, re = u, S = d, r = f, z = p, w = h, ie = O, I = k, y = A, T = ee, R = j, o = M, C = N, i = P, b = F, s = te, v = L, H = U, V = W, ne = ae, B = oe, _ = se, g = ce, E = G, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = g, n[7] = _, n[8] = v, n[9] = y, n[10] = b, n[11] = x, n[12] = S, n[13] = C, n[14] = w, n[15] = T, n[16] = E, n[17] = D, n[18] = I, n[19] = R, n[20] = z, n[21] = B, n[22] = V, n[23] = ne, n[24] = H, n[25] = re, n[26] = ie;
	} else r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], g = n[6], _ = n[7], v = n[8], y = n[9], b = n[10], x = n[11], S = n[12], C = n[13], w = n[14], T = n[15], E = n[16], D = n[17], I = n[18], R = n[19], z = n[20], B = n[21], V = n[22], ne = n[23], H = n[24], re = n[25], ie = n[26];
	let U = V === void 0 ? "top" : V, [W, ae] = d(!1), oe = u(null), se = u(null), ce;
	n[27] === Symbol.for("react.memo_cache_sentinel") ? (ce = () => oe.current, n[27] = ce) : ce = n[27], c(D, ce);
	let G, le;
	n[28] !== W || n[29] !== U ? (G = () => {
		if (W && oe.current && se.current) {
			let e = oe.current.getBoundingClientRect(), t = se.current.getBoundingClientRect();
			U === "top" ? (se.current.style.left = `${e.left - (t.width - e.width) / 2}px`, se.current.style.top = `${e.top - t.height - 8}px`) : U === "right" && (se.current.style.left = `${e.right + 8}px`, se.current.style.top = `${e.top - (t.height - e.height) / 2}px`);
		}
	}, le = [W, U], n[28] = W, n[29] = U, n[30] = G, n[31] = le) : (G = n[30], le = n[31]), l(G, le);
	let ue = a ?? "div", de = x && O.flex, fe = re && O.wrap, pe = r && O.absolute, me = z && O.sticky, he = w && O.opacityOnPress, ge = ie && O[`zindex_${ie}`], _e = S && O.horizontal, ve = I === "heavy" ? O.heavyShadow : I && O.shadow, ye = y && O[y], be = T && A[`_${T.replace(/ /, "_")}`], xe = R && ee[`_${R.replace(/ /, "_")}`], Se = o && j[o === !0 ? "top_right_bottom_left" : o.replace(/ /, "_")], Ce = C && j.negative, we = i && (S ? N[i.replace(/ /, "_")] : P[i.replace(/ /, "_")]), Te = b && k[b], Ee = v && M[`_${v}`], De = s && F[s], Oe;
	n[32] !== _ || n[33] !== he || n[34] !== ge || n[35] !== _e || n[36] !== ve || n[37] !== ye || n[38] !== be || n[39] !== xe || n[40] !== Se || n[41] !== Ce || n[42] !== we || n[43] !== Te || n[44] !== Ee || n[45] !== De || n[46] !== de || n[47] !== fe || n[48] !== pe || n[49] !== me ? (Oe = [
		O.View,
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
		Te,
		Ee,
		De,
		_
	].filter(L), n[32] = _, n[33] = he, n[34] = ge, n[35] = _e, n[36] = ve, n[37] = ye, n[38] = be, n[39] = xe, n[40] = Se, n[41] = Ce, n[42] = we, n[43] = Te, n[44] = Ee, n[45] = De, n[46] = de, n[47] = fe, n[48] = pe, n[49] = me, n[50] = Oe) : Oe = n[50];
	let ke = Oe.join(" "), Ae;
	n[51] === B ? Ae = n[52] : (Ae = { ...B }, n[51] = B, n[52] = Ae);
	let je = Ae, Me;
	n[53] === b ? Me = n[54] : (Me = { parentFillColor: b }, n[53] = b, n[54] = Me);
	let Ne = Me, Pe;
	if (n[55] !== ue || n[56] !== g || n[57] !== W || n[58] !== E || n[59] !== H || n[60] !== ke || n[61] !== Ne || n[62] !== je) {
		let e = document.querySelector("#overlay"), t;
		n[64] === H ? t = n[65] : (t = /* @__PURE__ */ m("div", {
			ref: se,
			className: O.tooltip,
			children: H
		}), n[64] = H, n[65] = t);
		let r = t, i, a;
		n[66] === H ? (i = n[67], a = n[68]) : (i = () => H && ae(!0), a = () => H && ae(!1), n[66] = H, n[67] = i, n[68] = a);
		let o;
		n[69] !== ue || n[70] !== g || n[71] !== E || n[72] !== i || n[73] !== a || n[74] !== ke || n[75] !== je ? (o = /* @__PURE__ */ m(ue, {
			ref: oe,
			className: ke,
			style: je,
			onMouseEnter: i,
			onMouseLeave: a,
			...E,
			children: g
		}), n[69] = ue, n[70] = g, n[71] = E, n[72] = i, n[73] = a, n[74] = ke, n[75] = je, n[76] = o) : o = n[76];
		let s;
		n[77] !== o || n[78] !== Ne ? (s = /* @__PURE__ */ m(te, {
			value: Ne,
			children: o
		}), n[77] = o, n[78] = Ne, n[79] = s) : s = n[79], Pe = /* @__PURE__ */ h(p, { children: [s, W && e && f(r, e)] }), n[55] = ue, n[56] = g, n[57] = W, n[58] = E, n[59] = H, n[60] = ke, n[61] = Ne, n[62] = je, n[63] = Pe;
	} else Pe = n[63];
	return Pe;
}
function L(e) {
	return e;
}
var R = {
	Text: "_onyx-ui_Text_N3t1U",
	select: "_onyx-ui_select_ky1qN",
	light: "_onyx-ui_light_IbzVh",
	lighter: "_onyx-ui_lighter_DTRvS",
	caps: "_onyx-ui_caps_Gy2yt",
	ellipsis: "_onyx-ui_ellipsis_31RAb"
}, z = {
	_12px: "_onyx-ui__12px_BF6bk",
	_14px: "_onyx-ui__14px_3aMJ0",
	_18px: "_onyx-ui__18px_XtZG-",
	_24px: "_onyx-ui__24px_fwBNW",
	_32px: "_onyx-ui__32px_mh4EG"
}, B = {
	_300: "_onyx-ui__300_imdej",
	_400: "_onyx-ui__400_9-vuA",
	_500: "_onyx-ui__500_9rCUP",
	_600: "_onyx-ui__600_8vDNo",
	_700: "_onyx-ui__700_4dk7T"
}, V = {
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
	"red-5": "_onyx-ui_red-5_aeTce",
	"grape-4": "_onyx-ui_grape-4_Vu5AE",
	"cyan-4": "_onyx-ui_cyan-4_ewydl",
	"violet-2": "_onyx-ui_violet-2_Rb1tU",
	"blue-2": "_onyx-ui_blue-2_9hso7",
	"teal-2": "_onyx-ui_teal-2_jHoty",
	"lime-3": "_onyx-ui_lime-3_H6TLo",
	"orange-4": "_onyx-ui_orange-4_vZWWW",
	"green-5": "_onyx-ui_green-5_oAm9v",
	"green-6": "_onyx-ui_green-6_58sIS",
	"lime-5": "_onyx-ui_lime-5_ypZPK",
	"lime-6": "_onyx-ui_lime-6_D-QtP"
}, ne = t.createContext({ textParent: !1 });
function H(t) {
	let n = e(45), r, i, a, s, c, l, u, d, f, p, h, g;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], s = n[4], c = n[5], l = n[6], u = n[7], d = n[8], f = n[9], p = n[10], h = n[11], g = n[12]) : ({as: r, light: f, caps: a, bold: i, select: h, ellipsis: c, fontSize: l, fontWeight: u, textColor: g, innerStyle: d, children: s, ...p} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = s, n[5] = c, n[6] = l, n[7] = u, n[8] = d, n[9] = f, n[10] = p, n[11] = h, n[12] = g);
	let { textParent: _ } = o(ne), v = i && B.bold, y = f && R.light, b = a && R.caps, x = l && z[`_${l}`], S = u && B[`_${u}`], C = g && V[g], w;
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
		return n[20] !== e || n[21] !== s || n[22] !== p || n[23] !== T ? (t = /* @__PURE__ */ m(e, {
			className: T,
			...p,
			children: s
		}), n[20] = e, n[21] = s, n[22] = p, n[23] = T, n[24] = t) : t = n[24], t;
	}
	let E = h && R.select, D = c && R.ellipsis, O = f && l === "18px" ? R.lighter : f && R.light, k = a && R.caps, A = i && B._600, ee = l && z[`_${l}`] || z._14px, j = u && B[`_${u}`], M = g && V[g] || V.text, N;
	n[25] !== O || n[26] !== k || n[27] !== A || n[28] !== ee || n[29] !== j || n[30] !== M || n[31] !== E || n[32] !== D ? (N = [
		R.Text,
		E,
		D,
		O,
		k,
		A,
		ee,
		j,
		M
	].filter(re), n[25] = O, n[26] = k, n[27] = A, n[28] = ee, n[29] = j, n[30] = M, n[31] = E, n[32] = D, n[33] = N) : N = n[33];
	let P = N.join(" "), F = r, te = P + " " + T, L;
	n[34] === Symbol.for("react.memo_cache_sentinel") ? (L = { textParent: !0 }, n[34] = L) : L = n[34];
	let H;
	n[35] === s ? H = n[36] : (H = /* @__PURE__ */ m(ne, {
		value: L,
		children: s
	}), n[35] = s, n[36] = H);
	let U;
	n[37] !== d || n[38] !== te || n[39] !== H ? (U = /* @__PURE__ */ m("span", {
		className: te,
		style: d,
		children: H
	}), n[37] = d, n[38] = te, n[39] = H, n[40] = U) : U = n[40];
	let W;
	return n[41] !== p || n[42] !== F || n[43] !== U ? (W = /* @__PURE__ */ m(I, {
		as: F,
		...p,
		children: U
	}), n[41] = p, n[42] = F, n[43] = U, n[44] = W) : W = n[44], W;
}
function re(e) {
	return e;
}
function ie(e) {
	return e;
}
var U = {
	Icon: "_onyx-ui_Icon_CezUJ",
	light: "_onyx-ui_light_4wb4K",
	bleed: "_onyx-ui_bleed_Gv7vD"
};
//#endregion
//#region src/components/icon/Icon.tsx
function W(t) {
	let n = e(18), r, i, a, o, s, c, l;
	if (n[0] !== t) {
		let { ref: e, light: u, icon: d, color: f, size: p, bleed: m, className: h, ...g } = t;
		o = u, r = d, l = f, c = p, i = m, a = h, s = g, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l;
	} else r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7];
	let u = l === void 0 ? "gray-7" : l, d = u && V[u], f = o && U.light, p = i && U.bleed, h;
	n[8] !== a || n[9] !== d || n[10] !== f || n[11] !== p ? (h = [
		U.Icon,
		d,
		f,
		p,
		a
	].filter(ae), n[8] = a, n[9] = d, n[10] = f, n[11] = p, n[12] = h) : h = n[12];
	let g = h.join(" "), _;
	return n[13] !== r || n[14] !== g || n[15] !== s || n[16] !== c ? (_ = /* @__PURE__ */ m(r, {
		size: c,
		className: g,
		...s
	}), n[13] = r, n[14] = g, n[15] = s, n[16] = c, n[17] = _) : _ = n[17], _;
}
function ae(e) {
	return e;
}
var oe = {
	Button: "_onyx-ui_Button_2sngS",
	hover: "_onyx-ui_hover_kN2-Z",
	selected: "_onyx-ui_selected_LLwtV",
	primary: "_onyx-ui_primary_b-5q5",
	solid: "_onyx-ui_solid_fI6Ci"
}, se = ({ parentFillColor: e, solid: t, primary: n, hover: r, selected: i }) => {
	switch (!0) {
		case i: return "selected";
		case !r && t && n: return "primary";
		case t: return e === "panel" ? "icon" : "gutter";
		case r: return;
	}
}, ce = ({ primary: e, solid: t }) => {
	switch (!0) {
		case t && e: return "content";
		case e: return "primary";
	}
};
function G(t) {
	let n = e(66), r, i, a, s, d, f, p, g, _, v, y, b, x, S, C, w, T;
	if (n[0] !== t) {
		let { ref: e, type: o, solid: c, primary: l, hover: u, active: m, icon: h, iconColor: E, iconFill: D, rightIcon: O, round: k, bold: A, fontWeight: ee, selected: j, opacityOnPress: M, className: N, children: P, ...F } = t;
		y = e, w = o, C = c, _ = l, d = u, r = m, f = h, p = E, g = D, b = O, x = k, T = A, s = ee, S = j, a = N, i = P, v = F, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = s, n[5] = d, n[6] = f, n[7] = p, n[8] = g, n[9] = _, n[10] = v, n[11] = y, n[12] = b, n[13] = x, n[14] = S, n[15] = C, n[16] = w, n[17] = T;
	} else r = n[1], i = n[2], a = n[3], s = n[4], d = n[5], f = n[6], p = n[7], g = n[8], _ = n[9], v = n[10], y = n[11], b = n[12], x = n[13], S = n[14], C = n[15], w = n[16], T = n[17];
	let E = w === void 0 ? "button" : w, D = T === void 0 ? !0 : T, O = u(null), k = (C || r) && oe.solid, A = _ && oe.primary, ee = d && oe.hover, j = S && oe.selected, M;
	n[18] !== a || n[19] !== k || n[20] !== A || n[21] !== ee || n[22] !== j ? (M = [
		oe.Button,
		k,
		A,
		ee,
		j,
		a
	].filter(le), n[18] = a, n[19] = k, n[20] = A, n[21] = ee, n[22] = j, n[23] = M) : M = n[23];
	let N = M.join(" "), { parentFillColor: P } = o(te), F;
	n[24] !== d || n[25] !== P || n[26] !== _ || n[27] !== S || n[28] !== C ? (F = se({
		parentFillColor: P,
		solid: C,
		primary: _,
		hover: d,
		selected: S
	}), n[24] = d, n[25] = P, n[26] = _, n[27] = S, n[28] = C, n[29] = F) : F = n[29];
	let L = F, R;
	n[30] !== d || n[31] !== _ || n[32] !== S || n[33] !== C ? (R = ce({
		solid: C,
		primary: _,
		hover: d,
		selected: S
	}), n[30] = d, n[31] = _, n[32] = S, n[33] = C, n[34] = R) : R = n[34];
	let z = R, B;
	n[35] === Symbol.for("react.memo_cache_sentinel") ? (B = () => O.current, n[35] = B) : B = n[35], c(y, B);
	let V;
	n[36] === P ? V = n[37] : (V = () => {
		O.current && O.current.style.setProperty("--hover-color", `var(--${P === "panel" ? "icon" : "gutter"}-color)`);
	}, n[36] = P, n[37] = V);
	let ne;
	n[38] !== L || n[39] !== P ? (ne = [L, P], n[38] = L, n[39] = P, n[40] = ne) : ne = n[40], l(V, ne);
	let re = i ? "8px 12px" : "8px", ie = x ? "max" : "2px", U;
	n[41] !== i || n[42] !== f || n[43] !== p || n[44] !== g || n[45] !== z ? (U = f && /* @__PURE__ */ m(W, {
		bleed: !0,
		icon: f,
		size: 16,
		color: p ?? z,
		fill: g ? "currentColor" : "none",
		style: {
			marginLeft: i ? 0 : -2,
			marginRight: 0
		}
	}), n[41] = i, n[42] = f, n[43] = p, n[44] = g, n[45] = z, n[46] = U) : U = n[46];
	let ae;
	n[47] !== D || n[48] !== i || n[49] !== s || n[50] !== z ? (ae = typeof i == "string" ? /* @__PURE__ */ m(H, {
		bold: !s && D,
		fontWeight: s,
		textColor: z,
		style: { textAlign: "left" },
		children: i
	}) : i, n[47] = D, n[48] = i, n[49] = s, n[50] = z, n[51] = ae) : ae = n[51];
	let G;
	n[52] !== i || n[53] !== b || n[54] !== z ? (G = b && /* @__PURE__ */ m(I, {
		flex: !0,
		align: "middle right",
		children: /* @__PURE__ */ m(W, {
			bleed: !0,
			icon: b,
			size: 16,
			color: z,
			style: {
				strokeWidth: 2.5,
				marginRight: i ? -3 : 0,
				justifySelf: "flex-end"
			}
		})
	}), n[52] = i, n[53] = b, n[54] = z, n[55] = G) : G = n[55];
	let ue;
	return n[56] !== N || n[57] !== L || n[58] !== v || n[59] !== re || n[60] !== ie || n[61] !== U || n[62] !== ae || n[63] !== G || n[64] !== E ? (ue = /* @__PURE__ */ h(I, {
		ref: O,
		horizontal: !0,
		as: "button",
		type: E,
		cursor: "pointer",
		padding: re,
		spacing: "8px",
		align: "middle center",
		cornerRadius: ie,
		fillColor: L,
		className: N,
		...v,
		children: [
			U,
			ae,
			G
		]
	}), n[56] = N, n[57] = L, n[58] = v, n[59] = re, n[60] = ie, n[61] = U, n[62] = ae, n[63] = G, n[64] = E, n[65] = ue) : ue = n[65], ue;
}
function le(e) {
	return e;
}
G.Menu = function({ solid: e, cornerRadius: t, children: n, ...r }) {
	return /* @__PURE__ */ m(Se, {
		anchor: "bottom left",
		...r,
		children: /* @__PURE__ */ m(G, {
			solid: e,
			rightIcon: _,
			cornerRadius: t,
			children: n
		})
	});
};
var ue = {
	Input: "_onyx-ui_Input_MpxTL",
	flush: "_onyx-ui_flush_4zQD9"
}, de = (t) => {
	let n = e(52), r, i, a, o, s, f, p, g, _, v, y, b, x, S;
	if (n[0] !== t) {
		let { label: e, value: c, lines: l, border: u, flush: d, multiline: m, icon: h, inputRef: C, placeholder: w, autoFocus: T, changeOnEnter: E, innerStyle: D, onKeyDown: O, onValueChange: k, ...A } = t;
		g = e, r = c, S = u, o = d, _ = m, s = h, p = C, b = w, i = T, a = E, f = D, v = O, y = k, x = A, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = f, n[7] = p, n[8] = g, n[9] = _, n[10] = v, n[11] = y, n[12] = b, n[13] = x, n[14] = S;
	} else r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], f = n[6], p = n[7], g = n[8], _ = n[9], v = n[10], y = n[11], b = n[12], x = n[13], S = n[14];
	let C = S === void 0 ? !0 : S, [w, T] = d(r), [E, D] = d(r), O = u(null), k;
	n[15] === Symbol.for("react.memo_cache_sentinel") ? (k = () => O.current, n[15] = k) : k = n[15], c(p, k), r !== E && (D(w), T(r));
	let A;
	n[16] !== v || n[17] !== y || n[18] !== w ? (A = (e) => {
		v?.(e), e.key === "Enter" && w !== void 0 && y?.(w);
	}, n[16] = v, n[17] = y, n[18] = w, n[19] = A) : A = n[19];
	let ee = A, j;
	n[20] !== a || n[21] !== y || n[22] !== w ? (j = (e) => {
		let t = e.currentTarget;
		a === !0 && e.key === "Enter" && w !== void 0 && (e.preventDefault(), y?.(w), t.value = "");
	}, n[20] = a, n[21] = y, n[22] = w, n[23] = j) : j = n[23];
	let M = j, N;
	n[24] === Symbol.for("react.memo_cache_sentinel") ? (N = (e) => {
		T(e.currentTarget.value);
	}, n[24] = N) : N = n[24];
	let P = N, F;
	n[25] !== y || n[26] !== w ? (F = () => {
		w !== void 0 && y?.(w);
	}, n[25] = y, n[26] = w, n[27] = F) : F = n[27];
	let te = F, L;
	n[28] === _ ? L = n[29] : (L = () => {
		_ === !0 && O.current && (O.current.style.height = "", O.current.style.height = `${O.current.scrollHeight}px`);
	}, n[28] = _, n[29] = L), l(L);
	let R = o === !0 && ue.flush, z;
	n[30] === R ? z = n[31] : (z = [ue.Input, R].filter(fe), n[30] = R, n[31] = z);
	let B = z.join(" "), V;
	n[32] !== i || n[33] !== te || n[34] !== ee || n[35] !== M || n[36] !== f || n[37] !== _ || n[38] !== b || n[39] !== w ? (V = _ === !0 ? /* @__PURE__ */ m("textarea", {
		ref: O,
		autoFocus: i,
		value: w,
		placeholder: b,
		style: {
			background: "transparent",
			...f
		},
		onKeyDown: M,
		onChange: P,
		onBlur: te
	}) : /* @__PURE__ */ m("input", {
		ref: O,
		autoFocus: i,
		value: w,
		placeholder: b,
		style: {
			background: "transparent",
			...f
		},
		onKeyDown: ee,
		onChange: P,
		onBlur: te
	}), n[32] = i, n[33] = te, n[34] = ee, n[35] = M, n[36] = f, n[37] = _, n[38] = b, n[39] = w, n[40] = V) : V = n[40];
	let ne = V, H;
	n[41] === s ? H = n[42] : (H = s && /* @__PURE__ */ m(W, {
		icon: s,
		size: 20
	}), n[41] = s, n[42] = H);
	let re;
	n[43] !== C || n[44] !== B || n[45] !== ne || n[46] !== x || n[47] !== H ? (re = /* @__PURE__ */ h(I, {
		horizontal: !0,
		border: C,
		align: "middle left",
		padding: "4px 8px",
		spacing: "4px",
		className: B,
		...x,
		children: [H, ne]
	}), n[43] = C, n[44] = B, n[45] = ne, n[46] = x, n[47] = H, n[48] = re) : re = n[48];
	let ie;
	return n[49] !== g || n[50] !== re ? (ie = /* @__PURE__ */ m(Ae, {
		flex: !0,
		label: g,
		children: re
	}), n[49] = g, n[50] = re, n[51] = ie) : ie = n[51], ie;
};
function fe(e) {
	return e !== !1;
}
//#endregion
//#region src/components/toggle/Toggle.tsx
function pe(t) {
	let n = e(14), { value: r, icon: i, iconColor: a, children: o, onValueChange: s } = t, c;
	n[0] !== s || n[1] !== r ? (c = () => {
		s?.(!r);
	}, n[0] = s, n[1] = r, n[2] = c) : c = n[2];
	let l = c, u = !r, d = r ? a : void 0, f;
	n[3] !== i || n[4] !== u || n[5] !== d ? (f = /* @__PURE__ */ m(W, {
		bleed: !0,
		light: u,
		icon: i,
		size: 14,
		color: d
	}), n[3] = i, n[4] = u, n[5] = d, n[6] = f) : f = n[6];
	let p = !r, g;
	n[7] !== o || n[8] !== p ? (g = /* @__PURE__ */ m(H, {
		light: p,
		ellipsis: !0,
		children: o
	}), n[7] = o, n[8] = p, n[9] = g) : g = n[9];
	let _;
	return n[10] !== l || n[11] !== f || n[12] !== g ? (_ = /* @__PURE__ */ h(I, {
		horizontal: !0,
		opacityOnPress: !0,
		spacing: "4px",
		align: "middle left",
		cursor: "pointer",
		onClick: l,
		children: [f, g]
	}), n[10] = l, n[11] = f, n[12] = g, n[13] = _) : _ = n[13], _;
}
//#endregion
//#region src/components/divider/Divider.tsx
function me(t) {
	let n = e(8), r, i;
	n[0] === t ? (r = n[1], i = n[2]) : ({style: i, ...r} = t, n[0] = t, n[1] = r, n[2] = i);
	let a;
	n[3] === i ? a = n[4] : (a = {
		...i,
		minWidth: 1,
		minHeight: 1
	}, n[3] = i, n[4] = a);
	let o;
	return n[5] !== r || n[6] !== a ? (o = /* @__PURE__ */ m(I, {
		fillColor: "divider",
		style: a,
		...r
	}), n[5] = r, n[6] = a, n[7] = o) : o = n[7], o;
}
var he = { List: "_onyx-ui_List_FXNAH" };
//#endregion
//#region src/components/list/List.tsx
function ge(n) {
	let r = e(8), i, a;
	r[0] === n ? (i = r[1], a = r[2]) : ({children: i, ...a} = n, r[0] = n, r[1] = i, r[2] = a);
	let o;
	r[3] === i ? o = r[4] : (o = t.Children.map(i, _e), r[3] = i, r[4] = o);
	let s;
	return r[5] !== a || r[6] !== o ? (s = /* @__PURE__ */ m(I, {
		border: !0,
		cornerRadius: "4px",
		className: he.List,
		...a,
		children: o
	}), r[5] = a, r[6] = o, r[7] = s) : s = r[7], s;
}
function _e(e, n) {
	return t.isValidElement(e) && /* @__PURE__ */ h(t.Fragment, { children: [n > 0 && /* @__PURE__ */ m(me, {}), e] }, e.key);
}
//#endregion
//#region src/components/popover/Popover.tsx
function ve({ ref: e, content: n, isVisible: r, anchor: i = "bottom left", offsetTop: a = 0, noPortal: o, children: s }) {
	let d = u(null), g = u(null);
	c(e, () => d.current), l(() => {
		let e = d.current?.closest("#window")?.querySelector("#overlay");
		if (o && r && d.current && g.current) {
			let t = d.current.getBoundingClientRect(), n = g.current.getBoundingClientRect(), r = e.getBoundingClientRect();
			i === "top right" ? (g.current.style.left = `${t.width}px`, g.current.style.top = `${t.top - n.top}px`) : (g.current.style.left = `${t.left + 1 - r.left}px`, g.current.style.top = `${t.bottom + 0 - r.top}px`);
		} else if (r && d.current && g.current) {
			let t = d.current.getBoundingClientRect(), n = g.current.getBoundingClientRect(), r = e.getBoundingClientRect();
			i === "top right" ? (g.current.style.left = `${t.right - r.left}px`, g.current.style.top = `${t.top - 8 - r.top + a}px`) : i === "bottom right" ? (g.current.style.left = `${t.right - n.width}px`, g.current.style.top = `${t.top + t.height + a}px`) : i === "bottom left" && (g.current.style.left = `${t.left + 1 - r.left}px`, g.current.style.top = `${t.bottom + 0 - r.top + a}px`);
		}
	}, [
		i,
		r,
		o,
		a
	]);
	let _ = d.current?.closest("#window")?.querySelector("#overlay"), v = t.Children.only(s), y = /* @__PURE__ */ m(I, {
		ref: g,
		absolute: !0,
		shadow: !0,
		fillColor: "content",
		cornerRadius: "4px",
		style: { pointerEvents: "auto" },
		children: n
	});
	return /* @__PURE__ */ h(p, { children: [
		t.isValidElement(v) && t.cloneElement(v, {
			ref: d,
			opacityOnPress: !0
		}),
		o && r && _ && y,
		!o && r && _ && f(y, _)
	] });
}
//#endregion
//#region src/components/menu/Menu.tsx
function ye(t) {
	let n = e(4), { label: r } = t, i, a;
	n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { margin: "8px 12px" }, a = {
		fontSize: 11,
		lineHeight: "17px",
		whiteSpace: "nowrap"
	}, n[0] = i, n[1] = a) : (i = n[0], a = n[1]);
	let o;
	return n[2] === r ? o = n[3] : (o = /* @__PURE__ */ m(H, {
		light: !0,
		caps: !0,
		style: i,
		innerStyle: a,
		children: r
	}), n[2] = r, n[3] = o), o;
}
function be() {
	let t = e(1), n;
	return t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = /* @__PURE__ */ m(me, { style: { margin: "8px 12px" } }), t[0] = n) : n = t[0], n;
}
function xe(t) {
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
	let p = c ?? r, h;
	return n[14] !== d || n[15] !== o || n[16] !== f || n[17] !== p ? (h = /* @__PURE__ */ m(G, {
		hover: !0,
		align: "middle left",
		fontWeight: "400",
		cornerRadius: "0px",
		style: f,
		onClick: d,
		...o,
		children: p
	}), n[14] = d, n[15] = o, n[16] = f, n[17] = p, n[18] = h) : h = n[18], h;
}
function Se({ items: e, header: r, footer: o, children: c, onItemSelect: l, onVisibilityChange: f, ...g }) {
	let _ = u(null), v = u(null), [y, b] = d(!1), x = a((e) => {
		!_.current?.contains(e.target) && !v.current?.contains(e.target) && (b(!1), f?.(!1));
	}, [f]);
	s(() => (document.addEventListener("pointerdown", x), () => {
		document.removeEventListener("pointerdown", x);
	}), [x]);
	let S = (e) => {
		b(!1), f?.(!1), l?.(e);
	}, C = /* @__PURE__ */ h(I, {
		ref: v,
		children: [
			r && /* @__PURE__ */ h(p, { children: [r, /* @__PURE__ */ m(me, {})] }),
			/* @__PURE__ */ m(I, {
				padding: "8px 0px",
				children: e.map((e, t) => i(e) && n(e, {
					key: t,
					onSelect: (...t) => {
						S(...t), e.props.onSelect?.(...t);
					}
				}))
			}),
			o && /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(me, {}), o] })
		]
	}), w = t.Children.only(c);
	return /* @__PURE__ */ m(ve, {
		isVisible: y,
		content: C,
		...g,
		children: t.isValidElement(w) && t.cloneElement(w, {
			ref: _,
			cursor: "pointer",
			active: y || w.props.active,
			onClick: () => {
				b((e) => !e);
			}
		})
	});
}
Se.Item = xe, Se.Divider = be, Se.Group = ye;
//#endregion
//#region src/components/checkbox/Checkbox.tsx
function Ce(t) {
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
	n[3] !== s || n[4] !== i ? (d = /* @__PURE__ */ m(I, {
		absolute: !0,
		as: "input",
		type: "checkbox",
		checked: i,
		onChange: s
	}), n[3] = s, n[4] = i, n[5] = d) : d = n[5];
	let f;
	n[6] === i ? f = n[7] : (f = i && /* @__PURE__ */ m(W, {
		icon: g,
		size: 20,
		color: "white"
	}), n[6] = i, n[7] = f);
	let p;
	n[8] !== c || n[9] !== l || n[10] !== d || n[11] !== f ? (p = /* @__PURE__ */ h(I, {
		border: c,
		fillColor: l,
		cornerRadius: "2px",
		align: "middle center",
		style: u,
		children: [d, f]
	}), n[8] = c, n[9] = l, n[10] = d, n[11] = f, n[12] = p) : p = n[12];
	let _;
	n[13] === r ? _ = n[14] : (_ = /* @__PURE__ */ m(H, { children: r }), n[13] = r, n[14] = _);
	let v;
	return n[15] !== p || n[16] !== _ ? (v = /* @__PURE__ */ m(Ae, {
		as: "label",
		children: /* @__PURE__ */ h(I, {
			horizontal: !0,
			opacityOnPress: !0,
			spacing: "8px",
			align: "middle left",
			children: [p, _]
		})
	}), n[15] = p, n[16] = _, n[17] = v) : v = n[17], v;
}
//#endregion
//#region src/components/select/Select.tsx
function we(t) {
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
	return n[8] !== c || n[9] !== r || n[10] !== a ? (l = /* @__PURE__ */ m(Se.Item, {
		title: r,
		onClick: c,
		...a
	}), n[8] = c, n[9] = r, n[10] = a, n[11] = l) : l = n[11], l;
}
function Te({ label: e, value: t, options: n, onValueChange: r, ...i }) {
	let a = (e) => {
		e !== t && r?.(e);
	}, o = n.flatMap((e, r) => {
		switch (!0) {
			case "options" in e: return [
				r !== 0 && /* @__PURE__ */ m(Se.Divider, {}),
				...e.label ? [/* @__PURE__ */ m(Se.Group, { label: e.label })] : [],
				...e.options.map((e) => /* @__PURE__ */ m(we, {
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
				r !== n.length - 1 && !("options" in n[r]) && /* @__PURE__ */ m(Se.Divider, {})
			].filter((e) => e !== !1);
			default: return /* @__PURE__ */ m(we, {
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
	return /* @__PURE__ */ m(I, { children: /* @__PURE__ */ m(Se, {
		items: o,
		offsetTop: 8,
		...i,
		children: /* @__PURE__ */ m(Ae, {
			chevron: !0,
			label: e,
			children: s ? /* @__PURE__ */ h(I, {
				horizontal: !0,
				spacing: "4px",
				align: "middle left",
				children: ["icon" in s && s.icon && /* @__PURE__ */ m(W, {
					icon: s.icon,
					color: s.iconColor,
					fill: s.iconFill ? "currentColor" : "none",
					size: 14,
					style: { margin: "-2px 0" }
				}), /* @__PURE__ */ m(H, { children: s.label })]
			}) : /* @__PURE__ */ m(I, {
				horizontal: !0,
				children: /* @__PURE__ */ h(H, { children: [t, " — Value"] })
			})
		})
	}) });
}
//#endregion
//#region src/components/form/Form.tsx
function Ee() {}
var De = r({
	fields: {},
	onFieldChange: () => void 0
});
function Oe(n) {
	let r = e(8), { name: i, children: a } = n, { fields: s, onFieldChange: c } = o(De), l;
	r[0] !== i || r[1] !== c ? (l = (e) => {
		c(i, e);
	}, r[0] = i, r[1] = c, r[2] = l) : l = r[2];
	let u = l, d;
	if (r[3] !== a || r[4] !== s || r[5] !== u || r[6] !== i) {
		let e = t.Children.only(a);
		d = t.isValidElement(e) && t.cloneElement(e, {
			value: s[i],
			onValueChange: u
		}), r[3] = a, r[4] = s, r[5] = u, r[6] = i, r[7] = d;
	} else d = r[7];
	return d;
}
Oe.withComponent = (e) => ({ name: t, ...n }) => /* @__PURE__ */ m(ke.Field, {
	name: t,
	children: /* @__PURE__ */ m(e, {
		name: t,
		...n
	})
});
function ke(t) {
	let n = e(14), r, i, a, o;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4]) : ({fields: i, children: r, onFieldChange: o, ...a} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o);
	let s = o === void 0 ? Ee : o, c;
	n[5] !== i || n[6] !== s ? (c = {
		fields: i,
		onFieldChange: s
	}, n[5] = i, n[6] = s, n[7] = c) : c = n[7];
	let l = c, u;
	n[8] !== r || n[9] !== a ? (u = /* @__PURE__ */ m(I, {
		as: "form",
		...a,
		children: r
	}), n[8] = r, n[9] = a, n[10] = u) : u = n[10];
	let d;
	return n[11] !== l || n[12] !== u ? (d = /* @__PURE__ */ m(De, {
		value: l,
		children: u
	}), n[11] = l, n[12] = u, n[13] = d) : d = n[13], d;
}
ke.Field = Oe;
//#endregion
//#region src/components/label/Label.tsx
function Ae(t) {
	let n = e(14), r, i, a, o;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4]) : ({label: a, chevron: r, children: i, ...o} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o);
	let s;
	n[5] !== r || n[6] !== a ? (s = a && /* @__PURE__ */ h(I, {
		horizontal: !0,
		spacing: "4px",
		align: "middle left",
		children: [/* @__PURE__ */ m(H, {
			light: !0,
			caps: !0,
			innerStyle: {
				fontSize: 11,
				lineHeight: "17px"
			},
			children: a
		}), r && /* @__PURE__ */ m(W, {
			icon: _,
			size: 16,
			style: {
				opacity: .6,
				margin: -4,
				strokeWidth: 1
			}
		})]
	}), n[5] = r, n[6] = a, n[7] = s) : s = n[7];
	let c;
	n[8] === i ? c = n[9] : (c = /* @__PURE__ */ m(I, { children: i }), n[8] = i, n[9] = c);
	let l;
	return n[10] !== o || n[11] !== s || n[12] !== c ? (l = /* @__PURE__ */ h(I, {
		spacing: "8px",
		...o,
		children: [s, c]
	}), n[10] = o, n[11] = s, n[12] = c, n[13] = l) : l = n[13], l;
}
var je = {
	Image: "_onyx-ui_Image_FmDOS",
	border: "_onyx-ui_border_rttIj",
	Stack: "_onyx-ui_Stack_4xsQe",
	StackItem: "_onyx-ui_StackItem_QKBcL"
};
//#endregion
//#region src/components/avatar/Avatar.tsx
function Me(t) {
	let n = e(32), r, i, a, o, s, c, l, u;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8]) : ({name: c, label: s, badge: r, chevron: i, imageOnly: o, imageBorder: a, imageFillColor: u, ...l} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u);
	let d = u === void 0 ? "icon" : u, f;
	n[9] === c ? f = n[10] : (f = c?.split(" ").map(Pe).join(""), n[9] = c, n[10] = f);
	let p = f, g = a && je.border, v;
	n[11] === g ? v = n[12] : (v = [je.Image, g].filter(Ne), n[11] = g, n[12] = v);
	let y = v.join(" "), b;
	n[13] === p ? b = n[14] : (b = /* @__PURE__ */ m(H, {
		fontSize: "12px",
		fontWeight: "600",
		children: p
	}), n[13] = p, n[14] = b);
	let x;
	n[15] === r ? x = n[16] : (x = r && /* @__PURE__ */ m(W, {
		icon: r,
		size: 14,
		color: "primary",
		fill: "white",
		style: {
			position: "absolute",
			top: -1,
			left: -1
		}
	}), n[15] = r, n[16] = x);
	let S;
	n[17] !== a || n[18] !== y || n[19] !== d || n[20] !== b || n[21] !== x ? (S = /* @__PURE__ */ h(I, {
		border: a,
		borderColor: "primary",
		cornerRadius: "max",
		fillColor: d,
		align: "middle center",
		className: y,
		children: [b, x]
	}), n[17] = a, n[18] = y, n[19] = d, n[20] = b, n[21] = x, n[22] = S) : S = n[22];
	let C;
	n[23] !== i || n[24] !== o || n[25] !== s || n[26] !== c ? (C = !o && /* @__PURE__ */ h(I, {
		spacing: "8px",
		align: "middle left",
		children: [/* @__PURE__ */ h(I, {
			horizontal: !0,
			spacing: "4px",
			align: "middle left",
			children: [/* @__PURE__ */ m(H, { children: c }), i && /* @__PURE__ */ m(W, {
				icon: _,
				size: 16,
				style: {
					margin: -4,
					strokeWidth: 1
				}
			})]
		}), s && /* @__PURE__ */ m(H, {
			light: !0,
			fontSize: "12px",
			children: s
		})]
	}), n[23] = i, n[24] = o, n[25] = s, n[26] = c, n[27] = C) : C = n[27];
	let w;
	return n[28] !== l || n[29] !== S || n[30] !== C ? (w = /* @__PURE__ */ h(I, {
		horizontal: !0,
		spacing: "8px",
		align: "middle left",
		...l,
		children: [S, C]
	}), n[28] = l, n[29] = S, n[30] = C, n[31] = w) : w = n[31], w;
}
function Ne(e) {
	return e;
}
function Pe(e) {
	return e[0].toUpperCase();
}
Me.Stack = function({ children: e, ...n }) {
	let r = t.Children.toArray(e);
	return /* @__PURE__ */ h(I, {
		horizontal: !0,
		className: je.Stack,
		...n,
		children: [t.Children.map(e, (e) => t.isValidElement(e) && t.cloneElement(e, { className: je.StackItem })), r.length === 0 && /* @__PURE__ */ m(I, {
			cornerRadius: "max",
			className: je.Image,
			style: { border: "1px dashed var(--divider-color)" }
		})]
	});
};
var Fe = { text: "_onyx-ui_text_-bQVx" };
//#endregion
//#region src/components/chip/Chip.tsx
function Ie(t) {
	let n = e(39), r, i, a, o, c, l, d, f, p, g, _, v, y;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], c = n[5], l = n[6], d = n[7], f = n[8], p = n[9], g = n[10], _ = n[11], v = n[12], y = n[13]) : ({ref: _, icon: a, iconSize: l, iconColor: o, iconLight: c, fillColor: i, outlineColor: y, opacityOnPress: p, children: r, style: v, onPointerDown: f, onClick: d, ...g} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = c, n[6] = l, n[7] = d, n[8] = f, n[9] = p, n[10] = g, n[11] = _, n[12] = v, n[13] = y);
	let b = y === void 0 ? "content" : y, x = u(null), S, C;
	n[14] !== i || n[15] !== b ? (S = () => {
		x.current && i && x.current.style.setProperty("--outline-color", `var(--${b}-color)`);
	}, C = [i, b], n[14] = i, n[15] = b, n[16] = S, n[17] = C) : (S = n[16], C = n[17]), s(S, C);
	let w;
	n[18] !== a || n[19] !== o || n[20] !== c || n[21] !== l ? (w = a && /* @__PURE__ */ m(W, {
		bleed: !0,
		icon: a,
		size: l ?? 14,
		color: o,
		style: { opacity: c ? .6 : void 0 }
	}), n[18] = a, n[19] = o, n[20] = c, n[21] = l, n[22] = w) : w = n[22];
	let T = i ? "2px 4px" : void 0, E = i ? "-2px 0" : void 0, D;
	n[23] !== v || n[24] !== E ? (D = {
		margin: E,
		...v
	}, n[23] = v, n[24] = E, n[25] = D) : D = n[25];
	let O;
	n[26] !== r || n[27] !== i || n[28] !== g || n[29] !== T || n[30] !== D ? (O = /* @__PURE__ */ m(H, {
		ref: x,
		fillColor: i,
		cornerRadius: "2px",
		padding: T,
		className: Fe.text,
		style: D,
		...g,
		children: r
	}), n[26] = r, n[27] = i, n[28] = g, n[29] = T, n[30] = D, n[31] = O) : O = n[31];
	let k;
	return n[32] !== d || n[33] !== f || n[34] !== p || n[35] !== _ || n[36] !== w || n[37] !== O ? (k = /* @__PURE__ */ h(I, {
		horizontal: !0,
		ref: _,
		spacing: "4px",
		align: "middle left",
		opacityOnPress: p,
		onPointerDown: f,
		onClick: d,
		children: [w, O]
	}), n[32] = d, n[33] = f, n[34] = p, n[35] = _, n[36] = w, n[37] = O, n[38] = k) : k = n[38], k;
}
//#endregion
//#region src/components/tabs/Tabs.tsx
function Le(t) {
	let n = e(16), r, i, a, o, s;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5]) : ({index: i, selected: s, children: r, onTabSelect: a, ...o} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s);
	let c;
	n[6] !== i || n[7] !== a ? (c = () => {
		a(i);
	}, n[6] = i, n[7] = a, n[8] = c) : c = n[8];
	let l = c, u = !s, d = s ? "primary" : void 0, f;
	n[9] === Symbol.for("react.memo_cache_sentinel") ? (f = { paddingBottom: 8 }, n[9] = f) : f = n[9];
	let p;
	return n[10] !== r || n[11] !== l || n[12] !== o || n[13] !== u || n[14] !== d ? (p = /* @__PURE__ */ m(H, {
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
function Re(t) {
	let n = e(15), r, i, a, o;
	n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4]) : ({selectedTabIndex: o, children: r, onTabSelect: i, ...a} = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o);
	let s;
	if (n[5] !== r || n[6] !== i || n[7] !== o) {
		let e;
		n[9] !== i || n[10] !== o ? (e = (e, t) => {
			let { title: n } = e;
			return /* @__PURE__ */ m(Le, {
				index: t,
				selected: t === o,
				onTabSelect: i,
				children: n
			}, t);
		}, n[9] = i, n[10] = o, n[11] = e) : e = n[11], s = r.map(e), n[5] = r, n[6] = i, n[7] = o, n[8] = s;
	} else s = n[8];
	let c;
	return n[12] !== a || n[13] !== s ? (c = /* @__PURE__ */ m(I, {
		horizontal: !0,
		spacing: "16px",
		...a,
		children: s
	}), n[12] = a, n[13] = s, n[14] = c) : c = n[14], c;
}
Re.Panel = function({ active: e, children: t, ...n }) {
	return /* @__PURE__ */ m(I, {
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
function ze(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var Be = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ve = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, He = {};
function Ue(e, t) {
	return ((t || He).jsx ? Ve : Be).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var We = /[ \t\n\f\r]/g;
function Ge(e) {
	return typeof e == "object" ? e.type === "text" ? Ke(e.value) : !1 : Ke(e);
}
function Ke(e) {
	return e.replace(We, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var qe = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
qe.prototype.normal = {}, qe.prototype.property = {}, qe.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function Je(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new qe(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function Ye(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var Xe = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
Xe.prototype.attribute = "", Xe.prototype.booleanish = !1, Xe.prototype.boolean = !1, Xe.prototype.commaOrSpaceSeparated = !1, Xe.prototype.commaSeparated = !1, Xe.prototype.defined = !1, Xe.prototype.mustUseProperty = !1, Xe.prototype.number = !1, Xe.prototype.overloadedBoolean = !1, Xe.prototype.property = "", Xe.prototype.spaceSeparated = !1, Xe.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var Ze = /* @__PURE__ */ T({
	boolean: () => K,
	booleanish: () => q,
	commaOrSpaceSeparated: () => tt,
	commaSeparated: () => et,
	number: () => J,
	overloadedBoolean: () => $e,
	spaceSeparated: () => Y
}), Qe = 0, K = nt(), q = nt(), $e = nt(), J = nt(), Y = nt(), et = nt(), tt = nt();
function nt() {
	return 2 ** ++Qe;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var rt = Object.keys(Ze), it = class extends Xe {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), at(this, "space", r), typeof n == "number") for (; ++i < rt.length;) {
			let e = rt[i];
			at(this, rt[i], (n & Ze[e]) === Ze[e]);
		}
	}
};
it.prototype.defined = !0;
function at(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function ot(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new it(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Ye(r)] = r, n[Ye(a.attribute)] = r;
	}
	return new qe(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var st = ot({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: q,
		ariaAutoComplete: null,
		ariaBusy: q,
		ariaChecked: q,
		ariaColCount: J,
		ariaColIndex: J,
		ariaColSpan: J,
		ariaControls: Y,
		ariaCurrent: null,
		ariaDescribedBy: Y,
		ariaDetails: null,
		ariaDisabled: q,
		ariaDropEffect: Y,
		ariaErrorMessage: null,
		ariaExpanded: q,
		ariaFlowTo: Y,
		ariaGrabbed: q,
		ariaHasPopup: null,
		ariaHidden: q,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: Y,
		ariaLevel: J,
		ariaLive: null,
		ariaModal: q,
		ariaMultiLine: q,
		ariaMultiSelectable: q,
		ariaOrientation: null,
		ariaOwns: Y,
		ariaPlaceholder: null,
		ariaPosInSet: J,
		ariaPressed: q,
		ariaReadOnly: q,
		ariaRelevant: null,
		ariaRequired: q,
		ariaRoleDescription: Y,
		ariaRowCount: J,
		ariaRowIndex: J,
		ariaRowSpan: J,
		ariaSelected: q,
		ariaSetSize: J,
		ariaSort: null,
		ariaValueMax: J,
		ariaValueMin: J,
		ariaValueNow: J,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function ct(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function lt(e, t) {
	return ct(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var ut = ot({
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
		accept: et,
		acceptCharset: Y,
		accessKey: Y,
		action: null,
		allow: null,
		allowFullScreen: K,
		allowPaymentRequest: K,
		allowUserMedia: K,
		alt: null,
		as: null,
		async: K,
		autoCapitalize: null,
		autoComplete: Y,
		autoFocus: K,
		autoPlay: K,
		blocking: Y,
		capture: null,
		charSet: null,
		checked: K,
		cite: null,
		className: Y,
		cols: J,
		colSpan: null,
		content: null,
		contentEditable: q,
		controls: K,
		controlsList: Y,
		coords: J | et,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: K,
		defer: K,
		dir: null,
		dirName: null,
		disabled: K,
		download: $e,
		draggable: q,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: K,
		formTarget: null,
		headers: Y,
		height: J,
		hidden: $e,
		high: J,
		href: null,
		hrefLang: null,
		htmlFor: Y,
		httpEquiv: Y,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: K,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: K,
		itemId: null,
		itemProp: Y,
		itemRef: Y,
		itemScope: K,
		itemType: Y,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: K,
		low: J,
		manifest: null,
		max: null,
		maxLength: J,
		media: null,
		method: null,
		min: null,
		minLength: J,
		multiple: K,
		muted: K,
		name: null,
		nonce: null,
		noModule: K,
		noValidate: K,
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
		open: K,
		optimum: J,
		pattern: null,
		ping: Y,
		placeholder: null,
		playsInline: K,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: K,
		referrerPolicy: null,
		rel: Y,
		required: K,
		reversed: K,
		rows: J,
		rowSpan: J,
		sandbox: Y,
		scope: null,
		scoped: K,
		seamless: K,
		selected: K,
		shadowRootClonable: K,
		shadowRootDelegatesFocus: K,
		shadowRootMode: null,
		shape: null,
		size: J,
		sizes: null,
		slot: null,
		span: J,
		spellCheck: q,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: J,
		step: null,
		style: null,
		tabIndex: J,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: K,
		useMap: null,
		value: q,
		width: J,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: Y,
		axis: null,
		background: null,
		bgColor: null,
		border: J,
		borderColor: null,
		bottomMargin: J,
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
		compact: K,
		declare: K,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: J,
		leftMargin: J,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: J,
		marginWidth: J,
		noResize: K,
		noHref: K,
		noShade: K,
		noWrap: K,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: J,
		rules: null,
		scheme: null,
		scrolling: q,
		standby: null,
		summary: null,
		text: null,
		topMargin: J,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: J,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: K,
		disableRemotePlayback: K,
		prefix: null,
		property: null,
		results: J,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: lt
}), dt = ot({
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
		about: tt,
		accentHeight: J,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: J,
		amplitude: J,
		arabicForm: null,
		ascent: J,
		attributeName: null,
		attributeType: null,
		azimuth: J,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: J,
		by: null,
		calcMode: null,
		capHeight: J,
		className: Y,
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
		descent: J,
		diffuseConstant: J,
		direction: null,
		display: null,
		dur: null,
		divisor: J,
		dominantBaseline: null,
		download: K,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: J,
		enableBackground: null,
		end: null,
		event: null,
		exponent: J,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: J,
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
		g1: et,
		g2: et,
		glyphName: et,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: J,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: J,
		horizOriginX: J,
		horizOriginY: J,
		id: null,
		ideographic: J,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: J,
		k: J,
		k1: J,
		k2: J,
		k3: J,
		k4: J,
		kernelMatrix: tt,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: J,
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
		mediaSize: J,
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
		overlinePosition: J,
		overlineThickness: J,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: J,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: Y,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: J,
		pointsAtY: J,
		pointsAtZ: J,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: tt,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: tt,
		rev: tt,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: tt,
		requiredFeatures: tt,
		requiredFonts: tt,
		requiredFormats: tt,
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
		specularConstant: J,
		specularExponent: J,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: J,
		strikethroughThickness: J,
		string: null,
		stroke: null,
		strokeDashArray: tt,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: J,
		strokeOpacity: J,
		strokeWidth: null,
		style: null,
		surfaceScale: J,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: tt,
		tabIndex: J,
		tableValues: null,
		target: null,
		targetX: J,
		targetY: J,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: tt,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: J,
		underlineThickness: J,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: J,
		values: null,
		vAlphabetic: J,
		vMathematical: J,
		vectorEffect: null,
		vHanging: J,
		vIdeographic: J,
		version: null,
		vertAdvY: J,
		vertOriginX: J,
		vertOriginY: J,
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
		xHeight: J,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: ct
}), ft = ot({
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
}), pt = ot({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: lt
}), mt = ot({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), ht = {
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
}, gt = /[A-Z]/g, _t = /-[a-z]/g, vt = /^data[-\w.:]+$/i;
function yt(e, t) {
	let n = Ye(t), r = t, i = Xe;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && vt.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(_t, xt);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!_t.test(e)) {
				let n = e.replace(gt, bt);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = it;
	}
	return new i(r, t);
}
function bt(e) {
	return "-" + e.toLowerCase();
}
function xt(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var St = Je([
	st,
	ut,
	ft,
	pt,
	mt
], "html"), Ct = Je([
	st,
	dt,
	ft,
	pt,
	mt
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function wt(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/cjs/index.js
var Tt = /* @__PURE__ */ w(((e, t) => {
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
})), Et = /* @__PURE__ */ w(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(Tt());
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
})), Dt = /* @__PURE__ */ w(((e) => {
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
})), Ot = /* @__PURE__ */ w(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(Et()), r = Dt();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), kt = jt("end"), At = jt("start");
function jt(e) {
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
function Mt(e) {
	let t = At(e), n = kt(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function Nt(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ft(e.position) : "start" in e || "end" in e ? Ft(e) : "line" in e || "column" in e ? Pt(e) : "";
}
function Pt(e) {
	return It(e && e.line) + ":" + It(e && e.column);
}
function Ft(e) {
	return Pt(e && e.start) + "-" + Pt(e && e.end);
}
function It(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var X = class extends Error {
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
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = Nt(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
X.prototype.file = "", X.prototype.name = "", X.prototype.reason = "", X.prototype.message = "", X.prototype.stack = "", X.prototype.column = void 0, X.prototype.line = void 0, X.prototype.ancestors = void 0, X.prototype.cause = void 0, X.prototype.fatal = void 0, X.prototype.place = void 0, X.prototype.ruleId = void 0, X.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var Lt = /* @__PURE__ */ D(Ot(), 1), Rt = {}.hasOwnProperty, zt = /* @__PURE__ */ new Map(), Bt = /[A-Z]/g, Vt = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), Ht = new Set(["td", "th"]);
function Ut(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = en(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = $t(n, t.jsx, t.jsxs);
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
		schema: t.space === "svg" ? Ct : St,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Wt(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Wt(e, t, n) {
	if (t.type === "element") return Gt(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Kt(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return Jt(e, t, n);
	if (t.type === "mdxjsEsm") return qt(e, t);
	if (t.type === "root") return Yt(e, t, n);
	if (t.type === "text") return Xt(e, t);
}
function Gt(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Ct, e.schema = i), e.ancestors.push(t);
	let a = sn(e, t.tagName, !1), o = tn(e, t), s = rn(e, t);
	return Vt.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !Ge(e) : !0;
	})), Zt(e, o, a, t), Qt(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Kt(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	cn(e, t.position);
}
function qt(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	cn(e, t.position);
}
function Jt(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = Ct, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : sn(e, t.name, !0), o = nn(e, t), s = rn(e, t);
	return Zt(e, o, a, t), Qt(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Yt(e, t, n) {
	let r = {};
	return Qt(r, rn(e, t)), e.create(t, e.Fragment, r, n);
}
function Xt(e, t) {
	return t.value;
}
function Zt(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Qt(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function $t(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function en(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = At(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function tn(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && Rt.call(t.properties, i)) {
		let a = an(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && Ht.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function nn(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else cn(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else cn(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function rn(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : zt;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Wt(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function an(e, t, n) {
	let r = yt(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? ze(n) : wt(n)), r.property === "style") {
			let t = typeof n == "object" ? n : on(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = ln(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? ht[r.property] || r.property : r.attribute, n];
	}
}
function on(e, t) {
	try {
		return (0, Lt.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new X("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute", r;
	}
}
function sn(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = Ue(e[n]) ? {
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
	} else r = Ue(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return Rt.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	cn(e);
}
function cn(e, t) {
	let n = new X("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function ln(e) {
	let t = {}, n;
	for (n in e) Rt.call(e, n) && (t[un(n)] = e[n]);
	return t;
}
function un(e) {
	let t = e.replace(Bt, dn);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function dn(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var fn = {
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
}, pn = {};
function mn(e, t) {
	let n = t || pn;
	return hn(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function hn(e, t, n) {
	if (_n(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return gn(e.children, t, n);
	}
	return Array.isArray(e) ? gn(e, t, n) : "";
}
function gn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = hn(e[i], t, n);
	return r.join("");
}
function _n(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var vn = document.createElement("i");
function yn(e) {
	let t = "&" + e + ";";
	vn.innerHTML = t;
	let n = vn.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function bn(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function xn(e, t) {
	return e.length > 0 ? (bn(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var Sn = {}.hasOwnProperty;
function Cn(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) wn(t, e[n]);
	return t;
}
function wn(e, t) {
	let n;
	for (n in t) {
		let r = (Sn.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			Sn.call(r, a) || (r[a] = []);
			let e = i[a];
			Tn(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function Tn(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	bn(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function En(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function Dn(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var On = Rn(/[A-Za-z]/), kn = Rn(/[\dA-Za-z]/), An = Rn(/[#-'*+\--9=?A-Z^-~]/);
function jn(e) {
	return e !== null && (e < 32 || e === 127);
}
var Mn = Rn(/\d/), Nn = Rn(/[\dA-Fa-f]/), Pn = Rn(/[!-/:-@[-`{-~]/);
function Z(e) {
	return e !== null && e < -2;
}
function Fn(e) {
	return e !== null && (e < 0 || e === 32);
}
function Q(e) {
	return e === -2 || e === -1 || e === 32;
}
var In = Rn(/\p{P}|\p{S}/u), Ln = Rn(/\s/);
function Rn(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function zn(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && kn(e.charCodeAt(n + 1)) && kn(e.charCodeAt(n + 2))) i = 2;
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
var Bn = { tokenize: Vn };
function Vn(e) {
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
		return Z(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var Hn = { tokenize: Wn }, Un = { tokenize: Gn };
function Wn(e) {
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
			return bn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Un, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Un, p, m)(n);
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
		return Z(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
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
			bn(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
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
function Gn(e, t, n) {
	return $(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function Kn(e) {
	if (e === null || Fn(e) || Ln(e)) return 1;
	if (In(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function qn(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var Jn = {
	name: "attention",
	resolveAll: Yn,
	tokenize: Xn
};
function Yn(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Zn(d, -c), Zn(f, c), o = {
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
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = xn(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = xn(l, [
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
			]), l = xn(l, qn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = xn(l, [
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
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = xn(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, bn(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Xn(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Kn(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Kn(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Zn(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var Qn = {
	name: "autolink",
	tokenize: $n
};
function $n(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return On(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || kn(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || kn(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || jn(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : An(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return kn(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || kn(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var er = {
	partial: !0,
	tokenize: tr
};
function tr(e, t, n) {
	return r;
	function r(t) {
		return Q(t) ? $(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || Z(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var nr = {
	continuation: { tokenize: ir },
	exit: ar,
	name: "blockQuote",
	tokenize: rr
};
function rr(e, t, n) {
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
function ir(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Q(t) ? $(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(nr, t, n)(r);
	}
}
function ar(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var or = {
	name: "characterEscape",
	tokenize: sr
};
function sr(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return Pn(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var cr = {
	name: "characterReference",
	tokenize: lr
};
function lr(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = kn, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = Nn, u) : (e.enter("characterReferenceValue"), a = 7, o = Mn, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === kn && !yn(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var ur = {
	partial: !0,
	tokenize: pr
}, dr = {
	concrete: !0,
	name: "codeFenced",
	tokenize: fr
};
function fr(e, t, n) {
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
		return n === null || Z(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(ur, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || Z(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
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
		return t === null || Z(t) ? e.check(ur, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || Z(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
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
			return r === null || Z(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function pr(e, t, n) {
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
var mr = {
	name: "codeIndented",
	tokenize: gr
}, hr = {
	partial: !0,
	tokenize: _r
};
function gr(e, t, n) {
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
		return t === null ? c(t) : Z(t) ? e.attempt(hr, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || Z(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function _r(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : Z(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var vr = {
	name: "codeText",
	previous: br,
	resolve: yr,
	tokenize: xr
};
function yr(e) {
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
function br(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function xr(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || Z(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var Sr = class {
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
		return n && Cr(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), Cr(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), Cr(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			Cr(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			Cr(this.left, t.reverse());
		}
	}
};
function Cr(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function wr(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new Sr(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Tr(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return bn(e, 0, Infinity, u.slice(0)), !l;
}
function Tr(e, t) {
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
var Er = {
	resolve: Or,
	tokenize: kr
}, Dr = {
	partial: !0,
	tokenize: Ar
};
function Or(e) {
	return wr(e), e;
}
function kr(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : Z(t) ? e.check(Dr, o, a)(t) : (e.consume(t), i);
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
function Ar(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || Z(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function jr(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || jn(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || Z(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || Fn(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || jn(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function Mr(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : Z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || Z(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !Q(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function Nr(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || Z(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function Pr(e, t) {
	let n;
	return r;
	function r(i) {
		return Z(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? $(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var Fr = {
	name: "definition",
	tokenize: Lr
}, Ir = {
	partial: !0,
	tokenize: Rr
};
function Lr(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Mr.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = Dn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return Fn(t) ? Pr(e, l)(t) : l(t);
	}
	function l(t) {
		return jr(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Ir, d, d)(t);
	}
	function d(t) {
		return Q(t) ? $(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || Z(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Rr(e, t, n) {
	return r;
	function r(t) {
		return Fn(t) ? Pr(e, i)(t) : n(t);
	}
	function i(t) {
		return Nr(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Q(t) ? $(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || Z(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var zr = {
	name: "hardBreakEscape",
	tokenize: Br
};
function Br(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return Z(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var Vr = {
	name: "headingAtx",
	resolve: Hr,
	tokenize: Ur
};
function Hr(e, t) {
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
	}, bn(e, r, n - r + 1, [
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
function Ur(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || Fn(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || Z(n) ? (e.exit("atxHeading"), t(n)) : Q(n) ? $(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || Fn(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var Wr = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Gr = [
	"pre",
	"script",
	"style",
	"textarea"
], Kr = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: Yr,
	tokenize: Xr
}, qr = {
	partial: !0,
	tokenize: Qr
}, Jr = {
	partial: !0,
	tokenize: Zr
};
function Yr(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Xr(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : F) : On(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : On(a) ? (e.consume(a), i = 4, r.interrupt ? t : F) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : F) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return On(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || Fn(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Gr.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : Wr.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || kn(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Q(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || On(t) ? (e.consume(t), b) : Q(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || kn(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Q(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Q(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || Z(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || Fn(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Q(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || Z(t) ? O(t) : Q(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), j) : t === 60 && i === 1 ? (e.consume(t), M) : t === 62 && i === 4 ? (e.consume(t), te) : t === 63 && i === 3 ? (e.consume(t), F) : t === 93 && i === 5 ? (e.consume(t), P) : Z(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(qr, I, k)(t)) : t === null || Z(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(Jr, A, I)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ee;
	}
	function ee(t) {
		return t === null || Z(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function j(t) {
		return t === 45 ? (e.consume(t), F) : O(t);
	}
	function M(t) {
		return t === 47 ? (e.consume(t), o = "", N) : O(t);
	}
	function N(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Gr.includes(n) ? (e.consume(t), te) : O(t);
		}
		return On(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), N) : O(t);
	}
	function P(t) {
		return t === 93 ? (e.consume(t), F) : O(t);
	}
	function F(t) {
		return t === 62 ? (e.consume(t), te) : t === 45 && i === 2 ? (e.consume(t), F) : O(t);
	}
	function te(t) {
		return t === null || Z(t) ? (e.exit("htmlFlowData"), I(t)) : (e.consume(t), te);
	}
	function I(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Zr(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function Qr(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(er, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var $r = {
	name: "htmlText",
	tokenize: ei
};
function ei(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : On(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : On(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : Z(t) ? (o = d, M(t)) : (e.consume(t), d);
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
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : Z(t) ? (o = h, M(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? j(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? j(t) : Z(t) ? (o = v, M(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : Z(t) ? (o = y, M(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? j(e) : y(e);
	}
	function x(t) {
		return On(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || kn(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return Z(t) ? (o = C, M(t)) : Q(t) ? (e.consume(t), C) : j(t);
	}
	function w(t) {
		return t === 45 || kn(t) ? (e.consume(t), w) : t === 47 || t === 62 || Fn(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), j) : t === 58 || t === 95 || On(t) ? (e.consume(t), E) : Z(t) ? (o = T, M(t)) : Q(t) ? (e.consume(t), T) : j(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || kn(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : Z(t) ? (o = D, M(t)) : Q(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : Z(t) ? (o = O, M(t)) : Q(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, ee) : t === null ? n(t) : Z(t) ? (o = k, M(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || Fn(t) ? T(t) : (e.consume(t), A);
	}
	function ee(e) {
		return e === 47 || e === 62 || Fn(e) ? T(e) : n(e);
	}
	function j(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function M(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N;
	}
	function N(t) {
		return Q(t) ? $(e, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : P(t);
	}
	function P(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var ti = {
	name: "labelEnd",
	resolveAll: ai,
	resolveTo: oi,
	tokenize: si
}, ni = { tokenize: ci }, ri = { tokenize: li }, ii = { tokenize: ui };
function ai(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && bn(e, 0, e.length, n), e;
}
function oi(e, t) {
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
	]], s = xn(s, e.slice(a + 1, a + r + 3)), s = xn(s, [[
		"enter",
		u,
		t
	]]), s = xn(s, qn(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = xn(s, [
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
	]), s = xn(s, e.slice(o + 1)), s = xn(s, [[
		"exit",
		c,
		t
	]]), bn(e, a, e.length, s), e;
}
function si(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(Dn(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(ni, u, o ? u : d)(t) : t === 91 ? e.attempt(ri, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(ii, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function ci(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return Fn(t) ? Pr(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : jr(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return Fn(t) ? Pr(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? Nr(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return Fn(t) ? Pr(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function li(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Mr.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(Dn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function ui(e, t, n) {
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
var di = {
	name: "labelStartImage",
	resolveAll: ti.resolveAll,
	tokenize: fi
};
function fi(e, t, n) {
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
var pi = {
	name: "labelStartLink",
	resolveAll: ti.resolveAll,
	tokenize: mi
};
function mi(e, t, n) {
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
var hi = {
	name: "lineEnding",
	tokenize: gi
};
function gi(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var _i = {
	name: "thematicBreak",
	tokenize: vi
};
function vi(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || Z(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Q(t) ? $(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var yi = {
	continuation: { tokenize: Ci },
	exit: Ti,
	name: "list",
	tokenize: Si
}, bi = {
	partial: !0,
	tokenize: Ei
}, xi = {
	partial: !0,
	tokenize: wi
};
function Si(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : Mn(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(_i, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return Mn(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(er, r.interrupt ? n : u, e.attempt(bi, f, d));
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
function Ci(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(er, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(xi, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, $(e, e.attempt(yi, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function wi(e, t, n) {
	let r = this;
	return $(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function Ti(e) {
	e.exit(this.containerState.type);
}
function Ei(e, t, n) {
	let r = this;
	return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var Di = {
	name: "setextUnderline",
	resolveTo: Oi,
	tokenize: ki
};
function Oi(e, t) {
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
function ki(e, t, n) {
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
		return r === null || Z(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var Ai = { tokenize: ji };
function ji(e) {
	let t = this, n = e.attempt(er, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Er, i)), "linePrefix")));
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
var Mi = { resolveAll: Ii() }, Ni = Fi("string"), Pi = Fi("text");
function Fi(e) {
	return {
		resolveAll: Ii(e === "text" ? Li : void 0),
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
function Ii(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Li(e, t) {
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
var Ri = /* @__PURE__ */ T({
	attentionMarkers: () => Ki,
	contentInitial: () => Bi,
	disable: () => qi,
	document: () => zi,
	flow: () => Hi,
	flowInitial: () => Vi,
	insideSpan: () => Gi,
	string: () => Ui,
	text: () => Wi
}), zi = {
	42: yi,
	43: yi,
	45: yi,
	48: yi,
	49: yi,
	50: yi,
	51: yi,
	52: yi,
	53: yi,
	54: yi,
	55: yi,
	56: yi,
	57: yi,
	62: nr
}, Bi = { 91: Fr }, Vi = {
	[-2]: mr,
	[-1]: mr,
	32: mr
}, Hi = {
	35: Vr,
	42: _i,
	45: [Di, _i],
	60: Kr,
	61: Di,
	95: _i,
	96: dr,
	126: dr
}, Ui = {
	38: cr,
	92: or
}, Wi = {
	[-5]: hi,
	[-4]: hi,
	[-3]: hi,
	33: di,
	38: cr,
	42: Jn,
	60: [Qn, $r],
	91: pi,
	92: [zr, or],
	93: ti,
	95: Jn,
	96: vr
}, Gi = { null: [Jn, Mi] }, Ki = { null: [42, 95] }, qi = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function Ji(e, t, n) {
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
		return o = xn(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = qn(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Xi(p(e), t);
	}
	function p(e) {
		return Yi(o, e);
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
		Z(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
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
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && bn(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
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
function Yi(e, t) {
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
function Xi(e, t) {
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
function Zi(e) {
	let t = {
		constructs: Cn([Ri, ...(e || {}).extensions || []]),
		content: n(Bn),
		defined: [],
		document: n(Hn),
		flow: n(Ai),
		lazy: {},
		string: n(Ni),
		text: n(Pi)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Ji(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function Qi(e) {
	for (; !wr(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var $i = /[\0\t\n\r]/g;
function ea() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if ($i.lastIndex = u, c = $i.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
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
var ta = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function na(e) {
	return e.replace(ta, ra);
}
function ra(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return En(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return yn(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var ia = {}.hasOwnProperty;
function aa(e, t, n) {
	return t && typeof t == "object" && (n = t, t = void 0), oa(n)(Qi(Zi(n).document().write(ea()(e, t, !0))));
}
function oa(e) {
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
			autolink: a(le),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(oe),
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
			image: a(G),
			label: o,
			link: a(le),
			listItem: a(de),
			listItemValue: f,
			listOrdered: a(ue, d),
			listUnordered: a(ue),
			paragraph: a(fe),
			reference: L,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(oe),
			strong: a(pe),
			thematicBreak: a(he)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: H,
			autolinkProtocol: ne,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: z,
			characterReferenceMarkerNumeric: z,
			characterReferenceValue: B,
			characterReference: V,
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
			label: P,
			labelText: N,
			lineEnding: D,
			link: c(j),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: R,
			resourceDestinationString: F,
			resourceTitleString: te,
			resource: I,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	ca(t, (e || {}).mdastExtensions || []);
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
			ia.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || ua).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: sa(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: sa(e.length > 0 ? e[e.length - 2][1].end : {
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
			start: sa(t.start),
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
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || ua).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + Nt({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = sa(e.end);
	}
	function u() {
		return mn(this.stack.pop());
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
		n.label = t, n.identifier = Dn(this.sliceSerialize(e)).toLowerCase();
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
		(!n || n.type !== "text") && (n = me(), n.position = {
			start: sa(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = sa(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = sa(e.end), this.data.atHardBreak = void 0;
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
		n.label = na(t), n.identifier = Dn(t).toLowerCase();
	}
	function P() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function F() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function te() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function I() {
		this.data.inReference = void 0;
	}
	function L() {
		this.data.referenceType = "collapsed";
	}
	function R(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = Dn(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function z(e) {
		this.data.characterReferenceType = e.type;
	}
	function B(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = En(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = yn(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function V(e) {
		let t = this.stack.pop();
		t.position.end = sa(e.end);
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
	function G() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function le() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function ue(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function de(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function fe() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function pe() {
		return {
			type: "strong",
			children: []
		};
	}
	function me() {
		return {
			type: "text",
			value: ""
		};
	}
	function he() {
		return { type: "thematicBreak" };
	}
}
function sa(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function ca(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? ca(e, r) : la(e, r);
	}
}
function la(e, t) {
	let n;
	for (n in t) if (ia.call(t, n)) switch (n) {
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
function ua(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + Nt({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + Nt({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + Nt({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function da(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return aa(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function fa(e, t) {
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
function pa(e, t) {
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
function ma(e, t) {
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
function ha(e, t) {
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
function ga(e, t) {
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
function _a(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = zn(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
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
function va(e, t) {
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
function ya(e, t) {
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
function ba(e, t) {
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
function xa(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return ba(e, t);
	let i = {
		src: zn(r.url || ""),
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
function Sa(e, t) {
	let n = { src: zn(t.url) };
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
function Ca(e, t) {
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
function wa(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return ba(e, t);
	let i = { href: zn(r.url || "") };
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
function Ta(e, t) {
	let n = { href: zn(t.url) };
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
function Ea(e, t, n) {
	let r = e.all(t), i = n ? Da(n) : Oa(t), a = {}, o = [];
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
function Da(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = Oa(n[r]);
	}
	return t;
}
function Oa(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function ka(e, t) {
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
function Aa(e, t) {
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
function ja(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function Ma(e, t) {
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
function Na(e, t) {
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
		}, a = At(t.children[1]), o = kt(t.children[t.children.length - 1]);
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
function Pa(e, t, n) {
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
function Fa(e, t) {
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
var Ia = 9, La = 32;
function Ra(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(za(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(za(t.slice(i), i > 0, !1)), a.join("");
}
function za(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Ia || t === La;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Ia || t === La;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function Ba(e, t) {
	let n = {
		type: "text",
		value: Ra(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Va(e, t) {
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
var Ha = {
	blockquote: fa,
	break: pa,
	code: ma,
	delete: ha,
	emphasis: ga,
	footnoteReference: _a,
	heading: va,
	html: ya,
	imageReference: xa,
	image: Sa,
	inlineCode: Ca,
	linkReference: wa,
	link: Ta,
	listItem: Ea,
	list: ka,
	paragraph: Aa,
	root: ja,
	strong: Ma,
	table: Na,
	tableCell: Fa,
	tableRow: Pa,
	text: Ba,
	thematicBreak: Va,
	toml: Ua,
	yaml: Ua,
	definition: Ua,
	footnoteDefinition: Ua
};
function Ua() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var Wa = typeof self == "object" ? self : globalThis, Ga = (e, t) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new Wa[e](t);
}, Ka = (e, t) => {
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
				return n(Ga(e, t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(Ga(a, o), i);
	};
	return r;
}, qa = (e) => Ka(/* @__PURE__ */ new Map(), e)(0), Ja = "", { toString: Ya } = {}, { keys: Xa } = Object, Za = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = Ya.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Ja];
		case "Object": return [2, Ja];
		case "Date": return [3, Ja];
		case "RegExp": return [4, Ja];
		case "Map": return [5, Ja];
		case "Set": return [6, Ja];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Qa = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), $a = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = Za(r);
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
				for (let t of Xa(r)) (e || !Qa(Za(r[t]))) && n.push([a(t), a(r[t])]);
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
				for (let [n, i] of r) (e || !(Qa(Za(n)) || Qa(Za(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Qa(Za(n))) && t.push(a(n));
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
}, eo = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return $a(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, to = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? qa(eo(e, t)) : structuredClone(e) : (e, t) => qa(eo(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function no(e, t) {
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
function ro(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function io(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || no, r = e.options.footnoteBackLabel || ro, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = zn(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
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
					...to(o),
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
var ao = (function(e) {
	if (e == null) return uo;
	if (typeof e == "function") return lo(e);
	if (typeof e == "object") return Array.isArray(e) ? oo(e) : so(e);
	if (typeof e == "string") return co(e);
	throw Error("Expected function, string, or object as test");
});
function oo(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = ao(e[n]);
	return lo(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function so(e) {
	let t = e;
	return lo(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function co(e) {
	return lo(t);
	function t(t) {
		return t && t.type === e;
	}
}
function lo(e) {
	return t;
	function t(t, n, r) {
		return !!(fo(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function uo() {
	return !0;
}
function fo(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function po(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var mo = [];
function ho(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = ao(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + po(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = mo, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = go(n(e, c)), l[0] === !1)) return l;
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
function go(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? mo : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function _o(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), ho(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var vo = {}.hasOwnProperty, yo = {};
function bo(e, t) {
	let n = t || yo, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: So,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Ha,
			...n.handlers
		},
		one: o,
		options: n,
		patch: xo,
		wrap: wo
	};
	return _o(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (vo.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = to(n);
				return r.children = a.all(e), r;
			}
			return to(e);
		}
		return (a.options.unknownHandler || Co)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = To(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = To(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function xo(e, t) {
	e.position && (t.position = Mt(e));
}
function So(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, to(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Co(e, t) {
	let n = t.data || {}, r = "value" in t && !(vo.call(n, "hProperties") || vo.call(n, "hChildren")) ? {
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
function wo(e, t) {
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
function To(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function Eo(e, t) {
	let n = bo(e, t), r = n.one(e, void 0), i = io(n), a = Array.isArray(r) ? {
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
function Do(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = Eo(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return Eo(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function Oo(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var ko = /* @__PURE__ */ w(((e, t) => {
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
function Ao(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function jo() {
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
			t = o, s ? Mo(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function Mo(e, t) {
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
var No = {
	basename: Po,
	dirname: Fo,
	extname: Io,
	join: Lo,
	sep: "/"
};
function Po(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	Bo(e);
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
function Fo(e) {
	if (Bo(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Io(e) {
	Bo(e);
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
function Lo(...e) {
	let t = -1, n;
	for (; ++t < e.length;) Bo(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Ro(n);
}
function Ro(e) {
	Bo(e);
	let t = e.codePointAt(0) === 47, n = zo(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function zo(e, t) {
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
function Bo(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var Vo = { cwd: Ho };
function Ho() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function Uo(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function Wo(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Uo(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return Go(e);
}
function Go(e) {
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
var Ko = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], qo = class {
	constructor(e) {
		let t;
		t = e ? Uo(e) ? { path: e } : typeof e == "string" || Zo(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : Vo.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < Ko.length;) {
			let e = Ko[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) Ko.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? No.basename(this.path) : void 0;
	}
	set basename(e) {
		Yo(e, "basename"), Jo(e, "basename"), this.path = No.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? No.dirname(this.path) : void 0;
	}
	set dirname(e) {
		Xo(this.basename, "dirname"), this.path = No.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? No.extname(this.path) : void 0;
	}
	set extname(e) {
		if (Jo(e, "extname"), Xo(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = No.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		Uo(e) && (e = Wo(e)), Yo(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? No.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Yo(e, "stem"), Jo(e, "stem"), this.path = No.join(this.dirname || "", e + (this.extname || ""));
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
		let r = new X(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function Jo(e, t) {
	if (e && e.includes(No.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + No.sep + "`");
}
function Yo(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function Xo(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function Zo(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var Qo = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), $o = /* @__PURE__ */ D(ko(), 1), es = {}.hasOwnProperty, ts = new class e extends Qo {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = jo();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, $o.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (is("data", this.frozen), this.namespace[e] = t, this) : es.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (is("data", this.frozen), this.namespace = e, this) : this.namespace;
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
		let t = ss(e), n = this.parser || this.Parser;
		return ns("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), ns("process", this.parser || this.Parser), rs("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = ss(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				ls(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), ns("processSync", this.parser || this.Parser), rs("processSync", this.compiler || this.Compiler), this.process(e, r), os("processSync", "process", t), n;
		function r(e, r) {
			t = !0, Oo(e), n = r;
		}
	}
	run(e, t, n) {
		as(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = ss(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), os("runSync", "run", n), r;
		function i(e, t) {
			Oo(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = ss(t), r = this.compiler || this.Compiler;
		return rs("stringify", r), as(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (is("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
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
			o(e.plugins), e.settings && (r.settings = (0, $o.default)(!0, r.settings, e.settings));
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
				Ao(o) && Ao(r) && (r = (0, $o.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function ns(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function rs(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function is(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function as(e) {
	if (!Ao(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function os(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function ss(e) {
	return cs(e) ? e : new qo(e);
}
function cs(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function ls(e) {
	return typeof e == "string" || us(e);
}
function us(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var ds = [], fs = { allowDangerousHtml: !0 }, ps = /^(https?|ircs?|mailto|xmpp)$/i, ms = [
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
function hs(e) {
	let t = gs(e), n = _s(e);
	return vs(t.runSync(t.parse(n), n), e);
}
function gs(e) {
	let t = e.rehypePlugins || ds, n = e.remarkPlugins || ds, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...fs
	} : fs;
	return ts().use(da).use(n).use(Do, r).use(t);
}
function _s(e) {
	let t = e.children || "", n = new qo();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function vs(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || ys;
	for (let e of ms) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return _o(e, l), Ut(e, {
		Fragment: p,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: m,
		jsxs: h,
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
			for (t in fn) if (Object.hasOwn(fn, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = fn[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function ys(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || ps.test(e.slice(0, t)) ? e : "";
}
var bs = { Markdown: "_onyx-ui_Markdown_4qDhu" }, xs = {
	h1({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ m(H, {
			as: "h1",
			fontSize: "32px",
			fontWeight: "300",
			children: n
		});
	},
	h2({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ m(H, {
			as: "h2",
			fontSize: "24px",
			fontWeight: "600",
			children: n
		});
	},
	h3({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ m(H, {
			as: "h2",
			fontSize: "18px",
			fontWeight: "500",
			children: n
		});
	},
	p({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ m(H, {
			as: "p",
			children: n
		});
	},
	ul({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ m(I, {
			as: "ul",
			children: n
		});
	},
	li({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ m(H, {
			as: "li",
			children: n
		});
	},
	code({ node: e, className: t, children: n, ...r }) {
		return /* @__PURE__ */ m(H, {
			border: !0,
			as: "code",
			fillColor: "panel",
			cornerRadius: "2px",
			padding: "16px",
			children: n
		});
	}
};
function Ss() {
	let t = e(3), [n, r] = d(), i;
	t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
		(async () => {
			r(await (await fetch("https://webdav.mike-austin.com/Learning Kopi.md")).text());
		})();
	}, t[0] = i) : i = t[0], s(i);
	let a;
	return t[1] === n ? a = t[2] : (a = /* @__PURE__ */ m(I, {
		flex: !0,
		padding: "16px",
		className: bs.Markdown,
		children: /* @__PURE__ */ m(hs, {
			components: xs,
			children: n
		})
	}), t[1] = n, t[2] = a), a;
}
//#endregion
export { Me as Avatar, G as Button, Ce as Checkbox, Ie as Chip, me as Divider, ke as Form, W as Icon, de as Input, Ae as Label, ge as List, Ss as Markdown, Se as Menu, ve as Popover, Te as Select, Re as Tabs, H as Text, pe as Toggle, I as View };
