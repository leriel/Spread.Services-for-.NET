(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(3);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NS = exports.NAMESPACES = {
    HTML: 'http://www.w3.org/1999/xhtml',
    MATHML: 'http://www.w3.org/1998/Math/MathML',
    SVG: 'http://www.w3.org/2000/svg',
    XLINK: 'http://www.w3.org/1999/xlink',
    XML: 'http://www.w3.org/XML/1998/namespace',
    XMLNS: 'http://www.w3.org/2000/xmlns/'
};

exports.ATTRS = {
    TYPE: 'type',
    ACTION: 'action',
    ENCODING: 'encoding',
    PROMPT: 'prompt',
    NAME: 'name',
    COLOR: 'color',
    FACE: 'face',
    SIZE: 'size'
};

exports.DOCUMENT_MODE = {
    NO_QUIRKS: 'no-quirks',
    QUIRKS: 'quirks',
    LIMITED_QUIRKS: 'limited-quirks'
};

var $ = exports.TAG_NAMES = {
    A: 'a',
    ADDRESS: 'address',
    ANNOTATION_XML: 'annotation-xml',
    APPLET: 'applet',
    AREA: 'area',
    ARTICLE: 'article',
    ASIDE: 'aside',

    B: 'b',
    BASE: 'base',
    BASEFONT: 'basefont',
    BGSOUND: 'bgsound',
    BIG: 'big',
    BLOCKQUOTE: 'blockquote',
    BODY: 'body',
    BR: 'br',
    BUTTON: 'button',

    CAPTION: 'caption',
    CENTER: 'center',
    CODE: 'code',
    COL: 'col',
    COLGROUP: 'colgroup',

    DD: 'dd',
    DESC: 'desc',
    DETAILS: 'details',
    DIALOG: 'dialog',
    DIR: 'dir',
    DIV: 'div',
    DL: 'dl',
    DT: 'dt',

    EM: 'em',
    EMBED: 'embed',

    FIELDSET: 'fieldset',
    FIGCAPTION: 'figcaption',
    FIGURE: 'figure',
    FONT: 'font',
    FOOTER: 'footer',
    FOREIGN_OBJECT: 'foreignObject',
    FORM: 'form',
    FRAME: 'frame',
    FRAMESET: 'frameset',

    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    HEAD: 'head',
    HEADER: 'header',
    HGROUP: 'hgroup',
    HR: 'hr',
    HTML: 'html',

    I: 'i',
    IMG: 'img',
    IMAGE: 'image',
    INPUT: 'input',
    IFRAME: 'iframe',

    KEYGEN: 'keygen',

    LABEL: 'label',
    LI: 'li',
    LINK: 'link',
    LISTING: 'listing',

    MAIN: 'main',
    MALIGNMARK: 'malignmark',
    MARQUEE: 'marquee',
    MATH: 'math',
    MENU: 'menu',
    MENUITEM: 'menuitem',
    META: 'meta',
    MGLYPH: 'mglyph',
    MI: 'mi',
    MO: 'mo',
    MN: 'mn',
    MS: 'ms',
    MTEXT: 'mtext',

    NAV: 'nav',
    NOBR: 'nobr',
    NOFRAMES: 'noframes',
    NOEMBED: 'noembed',
    NOSCRIPT: 'noscript',

    OBJECT: 'object',
    OL: 'ol',
    OPTGROUP: 'optgroup',
    OPTION: 'option',

    P: 'p',
    PARAM: 'param',
    PLAINTEXT: 'plaintext',
    PRE: 'pre',

    RB: 'rb',
    RP: 'rp',
    RT: 'rt',
    RTC: 'rtc',
    RUBY: 'ruby',

    S: 's',
    SCRIPT: 'script',
    SECTION: 'section',
    SELECT: 'select',
    SOURCE: 'source',
    SMALL: 'small',
    SPAN: 'span',
    STRIKE: 'strike',
    STRONG: 'strong',
    STYLE: 'style',
    SUB: 'sub',
    SUMMARY: 'summary',
    SUP: 'sup',

    TABLE: 'table',
    TBODY: 'tbody',
    TEMPLATE: 'template',
    TEXTAREA: 'textarea',
    TFOOT: 'tfoot',
    TD: 'td',
    TH: 'th',
    THEAD: 'thead',
    TITLE: 'title',
    TR: 'tr',
    TRACK: 'track',
    TT: 'tt',

    U: 'u',
    UL: 'ul',

    SVG: 'svg',

    VAR: 'var',

    WBR: 'wbr',

    XMP: 'xmp'
};

var SPECIAL_ELEMENTS = exports.SPECIAL_ELEMENTS = Object.create(null);

SPECIAL_ELEMENTS[NS.HTML] = Object.create(null);
SPECIAL_ELEMENTS[NS.HTML][$.ADDRESS] = true;
SPECIAL_ELEMENTS[NS.HTML][$.APPLET] = true;
SPECIAL_ELEMENTS[NS.HTML][$.AREA] = true;
SPECIAL_ELEMENTS[NS.HTML][$.ARTICLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.ASIDE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BASE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BASEFONT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BGSOUND] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BLOCKQUOTE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BODY] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.BUTTON] = true;
SPECIAL_ELEMENTS[NS.HTML][$.CAPTION] = true;
SPECIAL_ELEMENTS[NS.HTML][$.CENTER] = true;
SPECIAL_ELEMENTS[NS.HTML][$.COL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.COLGROUP] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DETAILS] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DIR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DIV] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.DT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.EMBED] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FIELDSET] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FIGCAPTION] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FIGURE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FOOTER] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FORM] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FRAME] = true;
SPECIAL_ELEMENTS[NS.HTML][$.FRAMESET] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H1] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H2] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H3] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H4] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H5] = true;
SPECIAL_ELEMENTS[NS.HTML][$.H6] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HEAD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HEADER] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HGROUP] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.HTML] = true;
SPECIAL_ELEMENTS[NS.HTML][$.IFRAME] = true;
SPECIAL_ELEMENTS[NS.HTML][$.IMG] = true;
SPECIAL_ELEMENTS[NS.HTML][$.INPUT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.LI] = true;
SPECIAL_ELEMENTS[NS.HTML][$.LINK] = true;
SPECIAL_ELEMENTS[NS.HTML][$.LISTING] = true;
SPECIAL_ELEMENTS[NS.HTML][$.MAIN] = true;
SPECIAL_ELEMENTS[NS.HTML][$.MARQUEE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.MENU] = true;
SPECIAL_ELEMENTS[NS.HTML][$.META] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NAV] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NOEMBED] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NOFRAMES] = true;
SPECIAL_ELEMENTS[NS.HTML][$.NOSCRIPT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.OBJECT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.OL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.P] = true;
SPECIAL_ELEMENTS[NS.HTML][$.PARAM] = true;
SPECIAL_ELEMENTS[NS.HTML][$.PLAINTEXT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.PRE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SCRIPT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SECTION] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SELECT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SOURCE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.STYLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.SUMMARY] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TABLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TBODY] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TEMPLATE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TEXTAREA] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TFOOT] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TH] = true;
SPECIAL_ELEMENTS[NS.HTML][$.THEAD] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TITLE] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.TRACK] = true;
SPECIAL_ELEMENTS[NS.HTML][$.UL] = true;
SPECIAL_ELEMENTS[NS.HTML][$.WBR] = true;
SPECIAL_ELEMENTS[NS.HTML][$.XMP] = true;

SPECIAL_ELEMENTS[NS.MATHML] = Object.create(null);
SPECIAL_ELEMENTS[NS.MATHML][$.MI] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MO] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MN] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MS] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.MTEXT] = true;
SPECIAL_ELEMENTS[NS.MATHML][$.ANNOTATION_XML] = true;

SPECIAL_ELEMENTS[NS.SVG] = Object.create(null);
SPECIAL_ELEMENTS[NS.SVG][$.TITLE] = true;
SPECIAL_ELEMENTS[NS.SVG][$.FOREIGN_OBJECT] = true;
SPECIAL_ELEMENTS[NS.SVG][$.DESC] = true;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.REPLACEMENT_CHARACTER = '\uFFFD';

exports.CODE_POINTS = {
    EOF: -1,
    NULL: 0x00,
    TABULATION: 0x09,
    CARRIAGE_RETURN: 0x0D,
    LINE_FEED: 0x0A,
    FORM_FEED: 0x0C,
    SPACE: 0x20,
    EXCLAMATION_MARK: 0x21,
    QUOTATION_MARK: 0x22,
    NUMBER_SIGN: 0x23,
    AMPERSAND: 0x26,
    APOSTROPHE: 0x27,
    HYPHEN_MINUS: 0x2D,
    SOLIDUS: 0x2F,
    DIGIT_0: 0x30,
    DIGIT_9: 0x39,
    SEMICOLON: 0x3B,
    LESS_THAN_SIGN: 0x3C,
    EQUALS_SIGN: 0x3D,
    GREATER_THAN_SIGN: 0x3E,
    QUESTION_MARK: 0x3F,
    LATIN_CAPITAL_A: 0x41,
    LATIN_CAPITAL_F: 0x46,
    LATIN_CAPITAL_X: 0x58,
    LATIN_CAPITAL_Z: 0x5A,
    GRAVE_ACCENT: 0x60,
    LATIN_SMALL_A: 0x61,
    LATIN_SMALL_F: 0x66,
    LATIN_SMALL_X: 0x78,
    LATIN_SMALL_Z: 0x7A,
    REPLACEMENT_CHARACTER: 0xFFFD
};

exports.CODE_POINT_SEQUENCES = {
    DASH_DASH_STRING: [0x2D, 0x2D], //--
    DOCTYPE_STRING: [0x44, 0x4F, 0x43, 0x54, 0x59, 0x50, 0x45], //DOCTYPE
    CDATA_START_STRING: [0x5B, 0x43, 0x44, 0x41, 0x54, 0x41, 0x5B], //[CDATA[
    CDATA_END_STRING: [0x5D, 0x5D, 0x3E], //]]>
    SCRIPT_STRING: [0x73, 0x63, 0x72, 0x69, 0x70, 0x74], //script
    PUBLIC_STRING: [0x50, 0x55, 0x42, 0x4C, 0x49, 0x43], //PUBLIC
    SYSTEM_STRING: [0x53, 0x59, 0x53, 0x54, 0x45, 0x4D] //SYSTEM
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Preprocessor = __webpack_require__(94),
    locationInfoMixin = __webpack_require__(86),
    UNICODE = __webpack_require__(6),
    neTree = __webpack_require__(93);

//Aliases
var $ = UNICODE.CODE_POINTS,
    $$ = UNICODE.CODE_POINT_SEQUENCES;

//Replacement code points for numeric entities
var NUMERIC_ENTITY_REPLACEMENTS = {
    0x00: 0xFFFD, 0x0D: 0x000D, 0x80: 0x20AC, 0x81: 0x0081, 0x82: 0x201A, 0x83: 0x0192, 0x84: 0x201E,
    0x85: 0x2026, 0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02C6, 0x89: 0x2030, 0x8A: 0x0160, 0x8B: 0x2039,
    0x8C: 0x0152, 0x8D: 0x008D, 0x8E: 0x017D, 0x8F: 0x008F, 0x90: 0x0090, 0x91: 0x2018, 0x92: 0x2019,
    0x93: 0x201C, 0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014, 0x98: 0x02DC, 0x99: 0x2122,
    0x9A: 0x0161, 0x9B: 0x203A, 0x9C: 0x0153, 0x9D: 0x009D, 0x9E: 0x017E, 0x9F: 0x0178
};

// Named entity tree flags
var HAS_DATA_FLAG = 1 << 0;
var DATA_DUPLET_FLAG = 1 << 1;
var HAS_BRANCHES_FLAG = 1 << 2;
var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG;


//States
var DATA_STATE = 'DATA_STATE',
    CHARACTER_REFERENCE_IN_DATA_STATE = 'CHARACTER_REFERENCE_IN_DATA_STATE',
    RCDATA_STATE = 'RCDATA_STATE',
    CHARACTER_REFERENCE_IN_RCDATA_STATE = 'CHARACTER_REFERENCE_IN_RCDATA_STATE',
    RAWTEXT_STATE = 'RAWTEXT_STATE',
    SCRIPT_DATA_STATE = 'SCRIPT_DATA_STATE',
    PLAINTEXT_STATE = 'PLAINTEXT_STATE',
    TAG_OPEN_STATE = 'TAG_OPEN_STATE',
    END_TAG_OPEN_STATE = 'END_TAG_OPEN_STATE',
    TAG_NAME_STATE = 'TAG_NAME_STATE',
    RCDATA_LESS_THAN_SIGN_STATE = 'RCDATA_LESS_THAN_SIGN_STATE',
    RCDATA_END_TAG_OPEN_STATE = 'RCDATA_END_TAG_OPEN_STATE',
    RCDATA_END_TAG_NAME_STATE = 'RCDATA_END_TAG_NAME_STATE',
    RAWTEXT_LESS_THAN_SIGN_STATE = 'RAWTEXT_LESS_THAN_SIGN_STATE',
    RAWTEXT_END_TAG_OPEN_STATE = 'RAWTEXT_END_TAG_OPEN_STATE',
    RAWTEXT_END_TAG_NAME_STATE = 'RAWTEXT_END_TAG_NAME_STATE',
    SCRIPT_DATA_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE',
    SCRIPT_DATA_END_TAG_OPEN_STATE = 'SCRIPT_DATA_END_TAG_OPEN_STATE',
    SCRIPT_DATA_END_TAG_NAME_STATE = 'SCRIPT_DATA_END_TAG_NAME_STATE',
    SCRIPT_DATA_ESCAPE_START_STATE = 'SCRIPT_DATA_ESCAPE_START_STATE',
    SCRIPT_DATA_ESCAPE_START_DASH_STATE = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE',
    SCRIPT_DATA_ESCAPED_STATE = 'SCRIPT_DATA_ESCAPED_STATE',
    SCRIPT_DATA_ESCAPED_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_STATE',
    SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE',
    SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE',
    SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE',
    SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE',
    SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE',
    BEFORE_ATTRIBUTE_NAME_STATE = 'BEFORE_ATTRIBUTE_NAME_STATE',
    ATTRIBUTE_NAME_STATE = 'ATTRIBUTE_NAME_STATE',
    AFTER_ATTRIBUTE_NAME_STATE = 'AFTER_ATTRIBUTE_NAME_STATE',
    BEFORE_ATTRIBUTE_VALUE_STATE = 'BEFORE_ATTRIBUTE_VALUE_STATE',
    ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE',
    ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE',
    ATTRIBUTE_VALUE_UNQUOTED_STATE = 'ATTRIBUTE_VALUE_UNQUOTED_STATE',
    CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE = 'CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE',
    AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE',
    SELF_CLOSING_START_TAG_STATE = 'SELF_CLOSING_START_TAG_STATE',
    BOGUS_COMMENT_STATE = 'BOGUS_COMMENT_STATE',
    BOGUS_COMMENT_STATE_CONTINUATION = 'BOGUS_COMMENT_STATE_CONTINUATION',
    MARKUP_DECLARATION_OPEN_STATE = 'MARKUP_DECLARATION_OPEN_STATE',
    COMMENT_START_STATE = 'COMMENT_START_STATE',
    COMMENT_START_DASH_STATE = 'COMMENT_START_DASH_STATE',
    COMMENT_STATE = 'COMMENT_STATE',
    COMMENT_END_DASH_STATE = 'COMMENT_END_DASH_STATE',
    COMMENT_END_STATE = 'COMMENT_END_STATE',
    COMMENT_END_BANG_STATE = 'COMMENT_END_BANG_STATE',
    DOCTYPE_STATE = 'DOCTYPE_STATE',
    DOCTYPE_NAME_STATE = 'DOCTYPE_NAME_STATE',
    AFTER_DOCTYPE_NAME_STATE = 'AFTER_DOCTYPE_NAME_STATE',
    BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE',
    DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE',
    DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE',
    BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE',
    BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
    DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE',
    DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE',
    AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
    BOGUS_DOCTYPE_STATE = 'BOGUS_DOCTYPE_STATE',
    CDATA_SECTION_STATE = 'CDATA_SECTION_STATE';

//Utils

//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').
function isWhitespace(cp) {
    return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
}

function isAsciiDigit(cp) {
    return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
}

function isAsciiUpper(cp) {
    return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
}

function isAsciiLower(cp) {
    return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
}

function isAsciiLetter(cp) {
    return isAsciiLower(cp) || isAsciiUpper(cp);
}

function isAsciiAlphaNumeric(cp) {
    return isAsciiLetter(cp) || isAsciiDigit(cp);
}

function isDigit(cp, isHex) {
    return isAsciiDigit(cp) || isHex && (cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F ||
                                         cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F);
}

function isReservedCodePoint(cp) {
    return cp >= 0xD800 && cp <= 0xDFFF || cp > 0x10FFFF;
}

function toAsciiLowerCodePoint(cp) {
    return cp + 0x0020;
}

//NOTE: String.fromCharCode() function can handle only characters from BMP subset.
//So, we need to workaround this manually.
//(see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode#Getting_it_to_work_with_higher_values)
function toChar(cp) {
    if (cp <= 0xFFFF)
        return String.fromCharCode(cp);

    cp -= 0x10000;
    return String.fromCharCode(cp >>> 10 & 0x3FF | 0xD800) + String.fromCharCode(0xDC00 | cp & 0x3FF);
}

function toAsciiLowerChar(cp) {
    return String.fromCharCode(toAsciiLowerCodePoint(cp));
}

function findNamedEntityTreeBranch(nodeIx, cp) {
    var branchCount = neTree[++nodeIx],
        lo = ++nodeIx,
        hi = lo + branchCount - 1;

    while (lo <= hi) {
        var mid = lo + hi >>> 1,
            midCp = neTree[mid];

        if (midCp < cp)
            lo = mid + 1;

        else if (midCp > cp)
            hi = mid - 1;

        else
            return neTree[mid + branchCount];
    }

    return -1;
}


//Tokenizer
var Tokenizer = module.exports = function (options) {
    this.preprocessor = new Preprocessor();

    this.tokenQueue = [];

    this.allowCDATA = false;

    this.state = DATA_STATE;
    this.returnState = '';

    this.tempBuff = [];
    this.additionalAllowedCp = void 0;
    this.lastStartTagName = '';

    this.consumedAfterSnapshot = -1;
    this.active = false;

    this.currentCharacterToken = null;
    this.currentToken = null;
    this.currentAttr = null;

    if (options && options.locationInfo)
        locationInfoMixin.assign(this);
};

//Token types
Tokenizer.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
Tokenizer.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
Tokenizer.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
Tokenizer.START_TAG_TOKEN = 'START_TAG_TOKEN';
Tokenizer.END_TAG_TOKEN = 'END_TAG_TOKEN';
Tokenizer.COMMENT_TOKEN = 'COMMENT_TOKEN';
Tokenizer.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
Tokenizer.EOF_TOKEN = 'EOF_TOKEN';
Tokenizer.HIBERNATION_TOKEN = 'HIBERNATION_TOKEN';

//Tokenizer initial states for different modes
Tokenizer.MODE = Tokenizer.prototype.MODE = {
    DATA: DATA_STATE,
    RCDATA: RCDATA_STATE,
    RAWTEXT: RAWTEXT_STATE,
    SCRIPT_DATA: SCRIPT_DATA_STATE,
    PLAINTEXT: PLAINTEXT_STATE
};

//Static
Tokenizer.getTokenAttr = function (token, attrName) {
    for (var i = token.attrs.length - 1; i >= 0; i--) {
        if (token.attrs[i].name === attrName)
            return token.attrs[i].value;
    }

    return null;
};

//API
Tokenizer.prototype.getNextToken = function () {
    while (!this.tokenQueue.length && this.active) {
        this._hibernationSnapshot();

        var cp = this._consume();

        if (!this._ensureHibernation())
            this[this.state](cp);
    }

    return this.tokenQueue.shift();
};

Tokenizer.prototype.write = function (chunk, isLastChunk) {
    this.active = true;
    this.preprocessor.write(chunk, isLastChunk);
};

Tokenizer.prototype.insertHtmlAtCurrentPos = function (chunk) {
    this.active = true;
    this.preprocessor.insertHtmlAtCurrentPos(chunk);
};

//Hibernation
Tokenizer.prototype._hibernationSnapshot = function () {
    this.consumedAfterSnapshot = 0;
};

Tokenizer.prototype._ensureHibernation = function () {
    if (this.preprocessor.endOfChunkHit) {
        for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--)
            this.preprocessor.retreat();

        this.active = false;
        this.tokenQueue.push({type: Tokenizer.HIBERNATION_TOKEN});

        return true;
    }

    return false;
};


//Consumption
Tokenizer.prototype._consume = function () {
    this.consumedAfterSnapshot++;
    return this.preprocessor.advance();
};

Tokenizer.prototype._unconsume = function () {
    this.consumedAfterSnapshot--;
    this.preprocessor.retreat();
};

Tokenizer.prototype._unconsumeSeveral = function (count) {
    while (count--)
        this._unconsume();
};

Tokenizer.prototype._reconsumeInState = function (state) {
    this.state = state;
    this._unconsume();
};

Tokenizer.prototype._consumeSubsequentIfMatch = function (pattern, startCp, caseSensitive) {
    var consumedCount = 0,
        isMatch = true,
        patternLength = pattern.length,
        patternPos = 0,
        cp = startCp,
        patternCp = void 0;

    for (; patternPos < patternLength; patternPos++) {
        if (patternPos > 0) {
            cp = this._consume();
            consumedCount++;
        }

        if (cp === $.EOF) {
            isMatch = false;
            break;
        }

        patternCp = pattern[patternPos];

        if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
            isMatch = false;
            break;
        }
    }

    if (!isMatch)
        this._unconsumeSeveral(consumedCount);

    return isMatch;
};

//Lookahead
Tokenizer.prototype._lookahead = function () {
    var cp = this._consume();

    this._unconsume();

    return cp;
};

//Temp buffer
Tokenizer.prototype.isTempBufferEqualToScriptString = function () {
    if (this.tempBuff.length !== $$.SCRIPT_STRING.length)
        return false;

    for (var i = 0; i < this.tempBuff.length; i++) {
        if (this.tempBuff[i] !== $$.SCRIPT_STRING[i])
            return false;
    }

    return true;
};

//Token creation
Tokenizer.prototype._createStartTagToken = function () {
    this.currentToken = {
        type: Tokenizer.START_TAG_TOKEN,
        tagName: '',
        selfClosing: false,
        attrs: []
    };
};

Tokenizer.prototype._createEndTagToken = function () {
    this.currentToken = {
        type: Tokenizer.END_TAG_TOKEN,
        tagName: '',
        attrs: []
    };
};

Tokenizer.prototype._createCommentToken = function () {
    this.currentToken = {
        type: Tokenizer.COMMENT_TOKEN,
        data: ''
    };
};

Tokenizer.prototype._createDoctypeToken = function (initialName) {
    this.currentToken = {
        type: Tokenizer.DOCTYPE_TOKEN,
        name: initialName,
        forceQuirks: false,
        publicId: null,
        systemId: null
    };
};

Tokenizer.prototype._createCharacterToken = function (type, ch) {
    this.currentCharacterToken = {
        type: type,
        chars: ch
    };
};

//Tag attributes
Tokenizer.prototype._createAttr = function (attrNameFirstCh) {
    this.currentAttr = {
        name: attrNameFirstCh,
        value: ''
    };
};

Tokenizer.prototype._isDuplicateAttr = function () {
    return Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) !== null;
};

Tokenizer.prototype._leaveAttrName = function (toState) {
    this.state = toState;

    if (!this._isDuplicateAttr())
        this.currentToken.attrs.push(this.currentAttr);
};

Tokenizer.prototype._leaveAttrValue = function (toState) {
    this.state = toState;
};

//Appropriate end tag token
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#appropriate-end-tag-token)
Tokenizer.prototype._isAppropriateEndTagToken = function () {
    return this.lastStartTagName === this.currentToken.tagName;
};

//Token emission
Tokenizer.prototype._emitCurrentToken = function () {
    this._emitCurrentCharacterToken();

    //NOTE: store emited start tag's tagName to determine is the following end tag token is appropriate.
    if (this.currentToken.type === Tokenizer.START_TAG_TOKEN)
        this.lastStartTagName = this.currentToken.tagName;

    this.tokenQueue.push(this.currentToken);
    this.currentToken = null;
};

Tokenizer.prototype._emitCurrentCharacterToken = function () {
    if (this.currentCharacterToken) {
        this.tokenQueue.push(this.currentCharacterToken);
        this.currentCharacterToken = null;
    }
};

Tokenizer.prototype._emitEOFToken = function () {
    this._emitCurrentCharacterToken();
    this.tokenQueue.push({type: Tokenizer.EOF_TOKEN});
};

//Characters emission

//OPTIMIZATION: specification uses only one type of character tokens (one token per character).
//This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
//If we have a sequence of characters that belong to the same group, parser can process it
//as a single solid character token.
//So, there are 3 types of character tokens in parse5:
//1)NULL_CHARACTER_TOKEN - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
//2)WHITESPACE_CHARACTER_TOKEN - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
//3)CHARACTER_TOKEN - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
Tokenizer.prototype._appendCharToCurrentCharacterToken = function (type, ch) {
    if (this.currentCharacterToken && this.currentCharacterToken.type !== type)
        this._emitCurrentCharacterToken();

    if (this.currentCharacterToken)
        this.currentCharacterToken.chars += ch;

    else
        this._createCharacterToken(type, ch);
};

Tokenizer.prototype._emitCodePoint = function (cp) {
    var type = Tokenizer.CHARACTER_TOKEN;

    if (isWhitespace(cp))
        type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;

    else if (cp === $.NULL)
        type = Tokenizer.NULL_CHARACTER_TOKEN;

    this._appendCharToCurrentCharacterToken(type, toChar(cp));
};

Tokenizer.prototype._emitSeveralCodePoints = function (codePoints) {
    for (var i = 0; i < codePoints.length; i++)
        this._emitCodePoint(codePoints[i]);
};

//NOTE: used then we emit character explicitly. This is always a non-whitespace and a non-null character.
//So we can avoid additional checks here.
Tokenizer.prototype._emitChar = function (ch) {
    this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
};

//Character reference tokenization
Tokenizer.prototype._consumeNumericEntity = function (isHex) {
    var digits = '',
        nextCp = void 0;

    do {
        digits += toChar(this._consume());
        nextCp = this._lookahead();
    } while (nextCp !== $.EOF && isDigit(nextCp, isHex));

    if (this._lookahead() === $.SEMICOLON)
        this._consume();

    var referencedCp = parseInt(digits, isHex ? 16 : 10),
        replacement = NUMERIC_ENTITY_REPLACEMENTS[referencedCp];

    if (replacement)
        return replacement;

    if (isReservedCodePoint(referencedCp))
        return $.REPLACEMENT_CHARACTER;

    return referencedCp;
};

// NOTE: for the details on this algorithm see
// https://github.com/inikulin/parse5/tree/master/scripts/generate_named_entity_data/README.md
Tokenizer.prototype._consumeNamedEntity = function (inAttr) {
    var referencedCodePoints = null,
        referenceSize = 0,
        cp = null,
        consumedCount = 0,
        semicolonTerminated = false;

    for (var i = 0; i > -1;) {
        var current = neTree[i],
            inNode = current < MAX_BRANCH_MARKER_VALUE,
            nodeWithData = inNode && current & HAS_DATA_FLAG;

        if (nodeWithData) {
            referencedCodePoints = current & DATA_DUPLET_FLAG ? [neTree[++i], neTree[++i]] : [neTree[++i]];
            referenceSize = consumedCount;

            if (cp === $.SEMICOLON) {
                semicolonTerminated = true;
                break;
            }
        }

        cp = this._consume();
        consumedCount++;

        if (cp === $.EOF)
            break;

        if (inNode)
            i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;

        else
            i = cp === current ? ++i : -1;
    }


    if (referencedCodePoints) {
        if (!semicolonTerminated) {
            //NOTE: unconsume excess (e.g. 'it' in '&notit')
            this._unconsumeSeveral(consumedCount - referenceSize);

            //NOTE: If the character reference is being consumed as part of an attribute and the next character
            //is either a U+003D EQUALS SIGN character (=) or an alphanumeric ASCII character, then, for historical
            //reasons, all the characters that were matched after the U+0026 AMPERSAND character (&) must be
            //unconsumed, and nothing is returned.
            //However, if this next character is in fact a U+003D EQUALS SIGN character (=), then this is a
            //parse error, because some legacy user agents will misinterpret the markup in those cases.
            //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#tokenizing-character-references)
            if (inAttr) {
                var nextCp = this._lookahead();

                if (nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp)) {
                    this._unconsumeSeveral(referenceSize);
                    return null;
                }
            }
        }

        return referencedCodePoints;
    }

    this._unconsumeSeveral(consumedCount);

    return null;
};

Tokenizer.prototype._consumeCharacterReference = function (startCp, inAttr) {
    if (isWhitespace(startCp) || startCp === $.GREATER_THAN_SIGN ||
        startCp === $.AMPERSAND || startCp === this.additionalAllowedCp || startCp === $.EOF) {
        //NOTE: not a character reference. No characters are consumed, and nothing is returned.
        this._unconsume();
        return null;
    }

    if (startCp === $.NUMBER_SIGN) {
        //NOTE: we have a numeric entity candidate, now we should determine if it's hex or decimal
        var isHex = false,
            nextCp = this._lookahead();

        if (nextCp === $.LATIN_SMALL_X || nextCp === $.LATIN_CAPITAL_X) {
            this._consume();
            isHex = true;
        }

        nextCp = this._lookahead();

        //NOTE: if we have at least one digit this is a numeric entity for sure, so we consume it
        if (nextCp !== $.EOF && isDigit(nextCp, isHex))
            return [this._consumeNumericEntity(isHex)];

        //NOTE: otherwise this is a bogus number entity and a parse error. Unconsume the number sign
        //and the 'x'-character if appropriate.
        this._unconsumeSeveral(isHex ? 2 : 1);
        return null;
    }

    this._unconsume();

    return this._consumeNamedEntity(inAttr);
};

//State machine
var _ = Tokenizer.prototype;

//12.2.4.1 Data state
//------------------------------------------------------------------
_[DATA_STATE] = function dataState(cp) {
    this.preprocessor.dropParsedChunk();

    if (cp === $.AMPERSAND)
        this.state = CHARACTER_REFERENCE_IN_DATA_STATE;

    else if (cp === $.LESS_THAN_SIGN)
        this.state = TAG_OPEN_STATE;

    else if (cp === $.NULL)
        this._emitCodePoint(cp);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.2 Character reference in data state
//------------------------------------------------------------------
_[CHARACTER_REFERENCE_IN_DATA_STATE] = function characterReferenceInDataState(cp) {
    this.additionalAllowedCp = void 0;

    var referencedCodePoints = this._consumeCharacterReference(cp, false);

    if (!this._ensureHibernation()) {
        if (referencedCodePoints)
            this._emitSeveralCodePoints(referencedCodePoints);

        else
            this._emitChar('&');

        this.state = DATA_STATE;
    }
};


//12.2.4.3 RCDATA state
//------------------------------------------------------------------
_[RCDATA_STATE] = function rcdataState(cp) {
    this.preprocessor.dropParsedChunk();

    if (cp === $.AMPERSAND)
        this.state = CHARACTER_REFERENCE_IN_RCDATA_STATE;

    else if (cp === $.LESS_THAN_SIGN)
        this.state = RCDATA_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.4 Character reference in RCDATA state
//------------------------------------------------------------------
_[CHARACTER_REFERENCE_IN_RCDATA_STATE] = function characterReferenceInRcdataState(cp) {
    this.additionalAllowedCp = void 0;

    var referencedCodePoints = this._consumeCharacterReference(cp, false);

    if (!this._ensureHibernation()) {
        if (referencedCodePoints)
            this._emitSeveralCodePoints(referencedCodePoints);

        else
            this._emitChar('&');

        this.state = RCDATA_STATE;
    }
};


//12.2.4.5 RAWTEXT state
//------------------------------------------------------------------
_[RAWTEXT_STATE] = function rawtextState(cp) {
    this.preprocessor.dropParsedChunk();

    if (cp === $.LESS_THAN_SIGN)
        this.state = RAWTEXT_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.6 Script data state
//------------------------------------------------------------------
_[SCRIPT_DATA_STATE] = function scriptDataState(cp) {
    this.preprocessor.dropParsedChunk();

    if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.7 PLAINTEXT state
//------------------------------------------------------------------
_[PLAINTEXT_STATE] = function plaintextState(cp) {
    this.preprocessor.dropParsedChunk();

    if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._emitEOFToken();

    else
        this._emitCodePoint(cp);
};


//12.2.4.8 Tag open state
//------------------------------------------------------------------
_[TAG_OPEN_STATE] = function tagOpenState(cp) {
    if (cp === $.EXCLAMATION_MARK)
        this.state = MARKUP_DECLARATION_OPEN_STATE;

    else if (cp === $.SOLIDUS)
        this.state = END_TAG_OPEN_STATE;

    else if (isAsciiLetter(cp)) {
        this._createStartTagToken();
        this._reconsumeInState(TAG_NAME_STATE);
    }

    else if (cp === $.QUESTION_MARK)
        this._reconsumeInState(BOGUS_COMMENT_STATE);

    else {
        this._emitChar('<');
        this._reconsumeInState(DATA_STATE);
    }
};


//12.2.4.9 End tag open state
//------------------------------------------------------------------
_[END_TAG_OPEN_STATE] = function endTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
        this._createEndTagToken();
        this._reconsumeInState(TAG_NAME_STATE);
    }

    else if (cp === $.GREATER_THAN_SIGN)
        this.state = DATA_STATE;

    else if (cp === $.EOF) {
        this._reconsumeInState(DATA_STATE);
        this._emitChar('<');
        this._emitChar('/');
    }

    else
        this._reconsumeInState(BOGUS_COMMENT_STATE);
};


//12.2.4.10 Tag name state
//------------------------------------------------------------------
_[TAG_NAME_STATE] = function tagNameState(cp) {
    if (isWhitespace(cp))
        this.state = BEFORE_ATTRIBUTE_NAME_STATE;

    else if (cp === $.SOLIDUS)
        this.state = SELF_CLOSING_START_TAG_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (isAsciiUpper(cp))
        this.currentToken.tagName += toAsciiLowerChar(cp);

    else if (cp === $.NULL)
        this.currentToken.tagName += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentToken.tagName += toChar(cp);
};


//12.2.4.11 RCDATA less-than sign state
//------------------------------------------------------------------
_[RCDATA_LESS_THAN_SIGN_STATE] = function rcdataLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = RCDATA_END_TAG_OPEN_STATE;
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(RCDATA_STATE);
    }
};


//12.2.4.12 RCDATA end tag open state
//------------------------------------------------------------------
_[RCDATA_END_TAG_OPEN_STATE] = function rcdataEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
        this._createEndTagToken();
        this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(RCDATA_STATE);
    }
};


//12.2.4.13 RCDATA end tag name state
//------------------------------------------------------------------
_[RCDATA_END_TAG_NAME_STATE] = function rcdataEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            if (cp === $.GREATER_THAN_SIGN) {
                this.state = DATA_STATE;
                this._emitCurrentToken();
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(RCDATA_STATE);
    }
};


//12.2.4.14 RAWTEXT less-than sign state
//------------------------------------------------------------------
_[RAWTEXT_LESS_THAN_SIGN_STATE] = function rawtextLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = RAWTEXT_END_TAG_OPEN_STATE;
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(RAWTEXT_STATE);
    }
};


//12.2.4.15 RAWTEXT end tag open state
//------------------------------------------------------------------
_[RAWTEXT_END_TAG_OPEN_STATE] = function rawtextEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
        this._createEndTagToken();
        this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(RAWTEXT_STATE);
    }
};


//12.2.4.16 RAWTEXT end tag name state
//------------------------------------------------------------------
_[RAWTEXT_END_TAG_NAME_STATE] = function rawtextEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(RAWTEXT_STATE);
    }
};


//12.2.4.17 Script data less-than sign state
//------------------------------------------------------------------
_[SCRIPT_DATA_LESS_THAN_SIGN_STATE] = function scriptDataLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
    }

    else if (cp === $.EXCLAMATION_MARK) {
        this.state = SCRIPT_DATA_ESCAPE_START_STATE;
        this._emitChar('<');
        this._emitChar('!');
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(SCRIPT_DATA_STATE);
    }
};


//12.2.4.18 Script data end tag open state
//------------------------------------------------------------------
_[SCRIPT_DATA_END_TAG_OPEN_STATE] = function scriptDataEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
        this._createEndTagToken();
        this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(SCRIPT_DATA_STATE);
    }
};


//12.2.4.19 Script data end tag name state
//------------------------------------------------------------------
_[SCRIPT_DATA_END_TAG_NAME_STATE] = function scriptDataEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            else if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            else if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(SCRIPT_DATA_STATE);
    }
};


//12.2.4.20 Script data escape start state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPE_START_STATE] = function scriptDataEscapeStartState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
        this._emitChar('-');
    }

    else
        this._reconsumeInState(SCRIPT_DATA_STATE);
};


//12.2.4.21 Script data escape start dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPE_START_DASH_STATE] = function scriptDataEscapeStartDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
        this._emitChar('-');
    }

    else
        this._reconsumeInState(SCRIPT_DATA_STATE);
};


//12.2.4.22 Script data escaped state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_STATE] = function scriptDataEscapedState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._emitCodePoint(cp);
};


//12.2.4.23 Script data escaped dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_DASH_STATE] = function scriptDataEscapedDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.24 Script data escaped dash dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_DASH_DASH_STATE] = function scriptDataEscapedDashDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this._emitChar('-');

    else if (cp === $.LESS_THAN_SIGN)
        this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = SCRIPT_DATA_STATE;
        this._emitChar('>');
    }

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.25 Script data escaped less-than sign state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataEscapedLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
    }

    else if (isAsciiLetter(cp)) {
        this.tempBuff = [];
        this._emitChar('<');
        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
    }

    else {
        this._emitChar('<');
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
};


//12.2.4.26 Script data escaped end tag open state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE] = function scriptDataEscapedEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
        this._createEndTagToken();
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
    }

    else {
        this._emitChar('<');
        this._emitChar('/');
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
};


//12.2.4.27 Script data escaped end tag name state
//------------------------------------------------------------------
_[SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE] = function scriptDataEscapedEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
        this.currentToken.tagName += toAsciiLowerChar(cp);
        this.tempBuff.push(cp);
    }

    else if (isAsciiLower(cp)) {
        this.currentToken.tagName += toChar(cp);
        this.tempBuff.push(cp);
    }

    else {
        if (this._isAppropriateEndTagToken()) {
            if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
            }

            if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
            }

            if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
            }
        }

        this._emitChar('<');
        this._emitChar('/');
        this._emitSeveralCodePoints(this.tempBuff);
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
};


//12.2.4.28 Script data double escape start state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE] = function scriptDataDoubleEscapeStartState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
        this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }

    else if (isAsciiUpper(cp)) {
        this.tempBuff.push(toAsciiLowerCodePoint(cp));
        this._emitCodePoint(cp);
    }

    else if (isAsciiLower(cp)) {
        this.tempBuff.push(cp);
        this._emitCodePoint(cp);
    }

    else
        this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
};


//12.2.4.29 Script data double escaped state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_STATE] = function scriptDataDoubleEscapedState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
        this._emitChar('<');
    }

    else if (cp === $.NULL)
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._emitCodePoint(cp);
};


//12.2.4.30 Script data double escaped dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE] = function scriptDataDoubleEscapedDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
        this._emitChar('-');
    }

    else if (cp === $.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
        this._emitChar('<');
    }

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.31 Script data double escaped dash dash state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE] = function scriptDataDoubleEscapedDashDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this._emitChar('-');

    else if (cp === $.LESS_THAN_SIGN) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
        this._emitChar('<');
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = SCRIPT_DATA_STATE;
        this._emitChar('>');
    }

    else if (cp === $.NULL) {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitChar(UNICODE.REPLACEMENT_CHARACTER);
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
        this._emitCodePoint(cp);
    }
};


//12.2.4.32 Script data double escaped less-than sign state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataDoubleEscapedLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
        this.tempBuff = [];
        this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
        this._emitChar('/');
    }

    else
        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
};


//12.2.4.33 Script data double escape end state
//------------------------------------------------------------------
_[SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE] = function scriptDataDoubleEscapeEndState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
        this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

        this._emitCodePoint(cp);
    }

    else if (isAsciiUpper(cp)) {
        this.tempBuff.push(toAsciiLowerCodePoint(cp));
        this._emitCodePoint(cp);
    }

    else if (isAsciiLower(cp)) {
        this.tempBuff.push(cp);
        this._emitCodePoint(cp);
    }

    else
        this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
};


//12.2.4.34 Before attribute name state
//------------------------------------------------------------------
_[BEFORE_ATTRIBUTE_NAME_STATE] = function beforeAttributeNameState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF)
        this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);

    else if (cp === $.EQUALS_SIGN) {
        this._createAttr('=');
        this.state = ATTRIBUTE_NAME_STATE;
    }

    else {
        this._createAttr('');
        this._reconsumeInState(ATTRIBUTE_NAME_STATE);
    }
};


//12.2.4.35 Attribute name state
//------------------------------------------------------------------
_[ATTRIBUTE_NAME_STATE] = function attributeNameState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
        this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);
        this._unconsume();
    }

    else if (cp === $.EQUALS_SIGN)
        this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);

    else if (isAsciiUpper(cp))
        this.currentAttr.name += toAsciiLowerChar(cp);

    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN)
        this.currentAttr.name += toChar(cp);

    else if (cp === $.NULL)
        this.currentAttr.name += UNICODE.REPLACEMENT_CHARACTER;

    else
        this.currentAttr.name += toChar(cp);
};


//12.2.4.36 After attribute name state
//------------------------------------------------------------------
_[AFTER_ATTRIBUTE_NAME_STATE] = function afterAttributeNameState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.SOLIDUS)
        this.state = SELF_CLOSING_START_TAG_STATE;

    else if (cp === $.EQUALS_SIGN)
        this.state = BEFORE_ATTRIBUTE_VALUE_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else {
        this._createAttr('');
        this._reconsumeInState(ATTRIBUTE_NAME_STATE);
    }
};


//12.2.4.37 Before attribute value state
//------------------------------------------------------------------
_[BEFORE_ATTRIBUTE_VALUE_STATE] = function beforeAttributeValueState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.QUOTATION_MARK)
        this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;

    else if (cp === $.APOSTROPHE)
        this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;

    else
        this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
};


//12.2.4.38 Attribute value (double-quoted) state
//------------------------------------------------------------------
_[ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE] = function attributeValueDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK)
        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;

    else if (cp === $.AMPERSAND) {
        this.additionalAllowedCp = $.QUOTATION_MARK;
        this.returnState = this.state;
        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    }

    else if (cp === $.NULL)
        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentAttr.value += toChar(cp);
};


//12.2.4.39 Attribute value (single-quoted) state
//------------------------------------------------------------------
_[ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE] = function attributeValueSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE)
        this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;

    else if (cp === $.AMPERSAND) {
        this.additionalAllowedCp = $.APOSTROPHE;
        this.returnState = this.state;
        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    }

    else if (cp === $.NULL)
        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentAttr.value += toChar(cp);
};


//12.2.4.40 Attribute value (unquoted) state
//------------------------------------------------------------------
_[ATTRIBUTE_VALUE_UNQUOTED_STATE] = function attributeValueUnquotedState(cp) {
    if (isWhitespace(cp))
        this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);

    else if (cp === $.AMPERSAND) {
        this.additionalAllowedCp = $.GREATER_THAN_SIGN;
        this.returnState = this.state;
        this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this._leaveAttrValue(DATA_STATE);
        this._emitCurrentToken();
    }

    else if (cp === $.NULL)
        this.currentAttr.value += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN ||
             cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT)
        this.currentAttr.value += toChar(cp);

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this.currentAttr.value += toChar(cp);
};


//12.2.4.41 Character reference in attribute value state
//------------------------------------------------------------------
_[CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE] = function characterReferenceInAttributeValueState(cp) {
    var referencedCodePoints = this._consumeCharacterReference(cp, true);

    if (!this._ensureHibernation()) {
        if (referencedCodePoints) {
            for (var i = 0; i < referencedCodePoints.length; i++)
                this.currentAttr.value += toChar(referencedCodePoints[i]);
        }
        else
            this.currentAttr.value += '&';

        this.state = this.returnState;
    }
};


//12.2.4.42 After attribute value (quoted) state
//------------------------------------------------------------------
_[AFTER_ATTRIBUTE_VALUE_QUOTED_STATE] = function afterAttributeValueQuotedState(cp) {
    if (isWhitespace(cp))
        this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);

    else if (cp === $.SOLIDUS)
        this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);

    else if (cp === $.GREATER_THAN_SIGN) {
        this._leaveAttrValue(DATA_STATE);
        this._emitCurrentToken();
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
};


//12.2.4.43 Self-closing start tag state
//------------------------------------------------------------------
_[SELF_CLOSING_START_TAG_STATE] = function selfClosingStartTagState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.selfClosing = true;
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF)
        this._reconsumeInState(DATA_STATE);

    else
        this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
};


//12.2.4.44 Bogus comment state
//------------------------------------------------------------------
_[BOGUS_COMMENT_STATE] = function bogusCommentState() {
    this._createCommentToken();
    this._reconsumeInState(BOGUS_COMMENT_STATE_CONTINUATION);
};

//HACK: to support streaming and make BOGUS_COMMENT_STATE reentrant we've
//introduced BOGUS_COMMENT_STATE_CONTINUATION state which will not produce
//comment token on each call.
_[BOGUS_COMMENT_STATE_CONTINUATION] = function bogusCommentStateContinuation(cp) {
    while (true) {
        if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            break;
        }

        else if (cp === $.EOF) {
            this._reconsumeInState(DATA_STATE);
            break;
        }

        else {
            this.currentToken.data += cp === $.NULL ? UNICODE.REPLACEMENT_CHARACTER : toChar(cp);

            this._hibernationSnapshot();
            cp = this._consume();

            if (this._ensureHibernation())
                return;
        }
    }

    this._emitCurrentToken();
};

//12.2.4.45 Markup declaration open state
//------------------------------------------------------------------
_[MARKUP_DECLARATION_OPEN_STATE] = function markupDeclarationOpenState(cp) {
    var dashDashMatch = this._consumeSubsequentIfMatch($$.DASH_DASH_STRING, cp, true),
        doctypeMatch = !dashDashMatch && this._consumeSubsequentIfMatch($$.DOCTYPE_STRING, cp, false),
        cdataMatch = !dashDashMatch && !doctypeMatch &&
                     this.allowCDATA &&
                     this._consumeSubsequentIfMatch($$.CDATA_START_STRING, cp, true);

    if (!this._ensureHibernation()) {
        if (dashDashMatch) {
            this._createCommentToken();
            this.state = COMMENT_START_STATE;
        }

        else if (doctypeMatch)
            this.state = DOCTYPE_STATE;

        else if (cdataMatch)
            this.state = CDATA_SECTION_STATE;

        else
            this._reconsumeInState(BOGUS_COMMENT_STATE);
    }
};


//12.2.4.46 Comment start state
//------------------------------------------------------------------
_[COMMENT_START_STATE] = function commentStartState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_START_DASH_STATE;

    else if (cp === $.NULL) {
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.47 Comment start dash state
//------------------------------------------------------------------
_[COMMENT_START_DASH_STATE] = function commentStartDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_END_STATE;

    else if (cp === $.NULL) {
        this.currentToken.data += '-';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += '-';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.48 Comment state
//------------------------------------------------------------------
_[COMMENT_STATE] = function commentState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_END_DASH_STATE;

    else if (cp === $.NULL)
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.data += toChar(cp);
};


//12.2.4.49 Comment end dash state
//------------------------------------------------------------------
_[COMMENT_END_DASH_STATE] = function commentEndDashState(cp) {
    if (cp === $.HYPHEN_MINUS)
        this.state = COMMENT_END_STATE;

    else if (cp === $.NULL) {
        this.currentToken.data += '-';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += '-';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.50 Comment end state
//------------------------------------------------------------------
_[COMMENT_END_STATE] = function commentEndState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.EXCLAMATION_MARK)
        this.state = COMMENT_END_BANG_STATE;

    else if (cp === $.HYPHEN_MINUS)
        this.currentToken.data += '-';

    else if (cp === $.NULL) {
        this.currentToken.data += '--';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.EOF) {
        this._reconsumeInState(DATA_STATE);
        this._emitCurrentToken();
    }

    else {
        this.currentToken.data += '--';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.51 Comment end bang state
//------------------------------------------------------------------
_[COMMENT_END_BANG_STATE] = function commentEndBangState(cp) {
    if (cp === $.HYPHEN_MINUS) {
        this.currentToken.data += '--!';
        this.state = COMMENT_END_DASH_STATE;
    }

    else if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else if (cp === $.NULL) {
        this.currentToken.data += '--!';
        this.currentToken.data += UNICODE.REPLACEMENT_CHARACTER;
        this.state = COMMENT_STATE;
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else {
        this.currentToken.data += '--!';
        this.currentToken.data += toChar(cp);
        this.state = COMMENT_STATE;
    }
};


//12.2.4.52 DOCTYPE state
//------------------------------------------------------------------
_[DOCTYPE_STATE] = function doctypeState(cp) {
    if (isWhitespace(cp))
        return;

    else if (cp === $.GREATER_THAN_SIGN) {
        this._createDoctypeToken(null);
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this._createDoctypeToken(null);
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }
    else {
        this._createDoctypeToken('');
        this._reconsumeInState(DOCTYPE_NAME_STATE);
    }
};


//12.2.4.54 DOCTYPE name state
//------------------------------------------------------------------
_[DOCTYPE_NAME_STATE] = function doctypeNameState(cp) {
    if (isWhitespace(cp) || cp === $.GREATER_THAN_SIGN || cp === $.EOF)
        this._reconsumeInState(AFTER_DOCTYPE_NAME_STATE);

    else if (isAsciiUpper(cp))
        this.currentToken.name += toAsciiLowerChar(cp);

    else if (cp === $.NULL)
        this.currentToken.name += UNICODE.REPLACEMENT_CHARACTER;

    else
        this.currentToken.name += toChar(cp);
};


//12.2.4.55 After DOCTYPE name state
//------------------------------------------------------------------
_[AFTER_DOCTYPE_NAME_STATE] = function afterDoctypeNameState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        this._emitCurrentToken();
    }

    else {
        var publicMatch = this._consumeSubsequentIfMatch($$.PUBLIC_STRING, cp, false),
            systemMatch = !publicMatch && this._consumeSubsequentIfMatch($$.SYSTEM_STRING, cp, false);

        if (!this._ensureHibernation()) {
            if (publicMatch)
                this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;

            else if (systemMatch)
                this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

            else {
                this.currentToken.forceQuirks = true;
                this.state = BOGUS_DOCTYPE_STATE;
            }
        }
    }
};


//12.2.4.57 Before DOCTYPE public identifier state
//------------------------------------------------------------------
_[BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE] = function beforeDoctypePublicIdentifierState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.QUOTATION_MARK) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }

    else if (cp === $.APOSTROPHE) {
        this.currentToken.publicId = '';
        this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else {
        this.currentToken.forceQuirks = true;
        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
    }
};


//12.2.4.58 DOCTYPE public identifier (double-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypePublicIdentifierDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK)
        this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;

    else if (cp === $.NULL)
        this.currentToken.publicId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.publicId += toChar(cp);
};


//12.2.4.59 DOCTYPE public identifier (single-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypePublicIdentifierSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE)
        this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;

    else if (cp === $.NULL)
        this.currentToken.publicId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.publicId += toChar(cp);
};


//12.2.4.61 Between DOCTYPE public and system identifiers state
//------------------------------------------------------------------
_[BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE] = function betweenDoctypePublicAndSystemIdentifiersState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }


    else if (cp === $.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else {
        this.currentToken.forceQuirks = true;
        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
    }
};


//12.2.4.63 Before DOCTYPE system identifier state
//------------------------------------------------------------------
_[BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function beforeDoctypeSystemIdentifierState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.QUOTATION_MARK) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    }

    else if (cp === $.APOSTROPHE) {
        this.currentToken.systemId = '';
        this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    }

    else {
        this.currentToken.forceQuirks = true;
        this._reconsumeInState(BOGUS_DOCTYPE_STATE);
    }
};


//12.2.4.64 DOCTYPE system identifier (double-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypeSystemIdentifierDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK)
        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.NULL)
        this.currentToken.systemId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.systemId += toChar(cp);
};


//12.2.4.65 DOCTYPE system identifier (single-quoted) state
//------------------------------------------------------------------
_[DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypeSystemIdentifierSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE)
        this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;

    else if (cp === $.GREATER_THAN_SIGN) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.NULL)
        this.currentToken.systemId += UNICODE.REPLACEMENT_CHARACTER;

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.currentToken.systemId += toChar(cp);
};


//12.2.4.66 After DOCTYPE system identifier state
//------------------------------------------------------------------
_[AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function afterDoctypeSystemIdentifierState(cp) {
    if (isWhitespace(cp))
        return;

    if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this.currentToken.forceQuirks = true;
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }

    else
        this.state = BOGUS_DOCTYPE_STATE;
};


//12.2.4.67 Bogus DOCTYPE state
//------------------------------------------------------------------
_[BOGUS_DOCTYPE_STATE] = function bogusDoctypeState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
        this._emitCurrentToken();
        this.state = DATA_STATE;
    }

    else if (cp === $.EOF) {
        this._emitCurrentToken();
        this._reconsumeInState(DATA_STATE);
    }
};


//12.2.4.68 CDATA section state
//------------------------------------------------------------------
_[CDATA_SECTION_STATE] = function cdataSectionState(cp) {
    while (true) {
        if (cp === $.EOF) {
            this._reconsumeInState(DATA_STATE);
            break;
        }

        else {
            var cdataEndMatch = this._consumeSubsequentIfMatch($$.CDATA_END_STRING, cp, true);

            if (this._ensureHibernation())
                break;

            if (cdataEndMatch) {
                this.state = DATA_STATE;
                break;
            }

            this._emitCodePoint(cp);

            this._hibernationSnapshot();
            cp = this._consume();

            if (this._ensureHibernation())
                break;
        }
    }
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(81);
var Utility = (function () {
    function Utility() {
    }
    Utility.ExportExcel = function (ssjon, fileName) {
        var requestUrl = '/api/SpreadServices/ExportExcel';
        fetch(requestUrl, {
            method: 'POST',
            body: ssjon
        }).then(function (response) {
            var blob = response.blob();
            return blob;
        }).then(function (blob) {
            if (!fileName) {
                fileName = 'Spread.Services-exported.xlsx';
            }
            Utility.DownloadFile(blob, fileName, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        });
    };
    Utility.DownloadFile = function (data, filename, mime) {
        var blob = new Blob([data], { type: mime || 'application/octet-stream' });
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
            // IE workaround for "HTML7007: One or more blob URLs were 
            // revoked by closing the blob for which they were created. 
            // These URLs will no longer resolve as the data backing 
            // the URL has been freed."
            window.navigator.msSaveBlob(blob, filename);
        }
        else {
            var blobURL = window.URL.createObjectURL(blob);
            var tempLink = document.createElement('a');
            tempLink.href = blobURL;
            tempLink.setAttribute('download', filename);
            tempLink.setAttribute('target', '_blank');
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        }
    };
    return Utility;
}());
exports.Utility = Utility;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = [
	[
		"0",
		"\u0000",
		127,
		"€"
	],
	[
		"8140",
		"丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",
		5,
		"乲乴",
		9,
		"乿",
		6,
		"亇亊"
	],
	[
		"8180",
		"亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",
		6,
		"伋伌伒",
		4,
		"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",
		4,
		"佄佅佇",
		5,
		"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"
	],
	[
		"8240",
		"侤侫侭侰",
		4,
		"侶",
		8,
		"俀俁係俆俇俈俉俋俌俍俒",
		4,
		"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",
		11
	],
	[
		"8280",
		"個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",
		10,
		"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",
		4,
		"偖偗偘偙偛偝",
		7,
		"偦",
		5,
		"偭",
		8,
		"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",
		20,
		"傤傦傪傫傭",
		4,
		"傳",
		6,
		"傼"
	],
	[
		"8340",
		"傽",
		17,
		"僐",
		5,
		"僗僘僙僛",
		10,
		"僨僩僪僫僯僰僱僲僴僶",
		4,
		"僼",
		9,
		"儈"
	],
	[
		"8380",
		"儉儊儌",
		5,
		"儓",
		13,
		"儢",
		28,
		"兂兇兊兌兎兏児兒兓兗兘兙兛兝",
		4,
		"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",
		4,
		"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",
		5
	],
	[
		"8440",
		"凘凙凚凜凞凟凢凣凥",
		5,
		"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",
		5,
		"剋剎剏剒剓剕剗剘"
	],
	[
		"8480",
		"剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",
		9,
		"剾劀劃",
		4,
		"劉",
		6,
		"劑劒劔",
		6,
		"劜劤劥劦劧劮劯劰労",
		9,
		"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",
		5,
		"勠勡勢勣勥",
		10,
		"勱",
		7,
		"勻勼勽匁匂匃匄匇匉匊匋匌匎"
	],
	[
		"8540",
		"匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",
		9,
		"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"
	],
	[
		"8580",
		"厐",
		4,
		"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",
		6,
		"厷厸厹厺厼厽厾叀參",
		4,
		"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",
		4,
		"呣呥呧呩",
		7,
		"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"
	],
	[
		"8640",
		"咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",
		4,
		"哫哬哯哰哱哴",
		5,
		"哻哾唀唂唃唄唅唈唊",
		4,
		"唒唓唕",
		5,
		"唜唝唞唟唡唥唦"
	],
	[
		"8680",
		"唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",
		4,
		"啑啒啓啔啗",
		4,
		"啝啞啟啠啢啣啨啩啫啯",
		5,
		"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",
		6,
		"喨",
		8,
		"喲喴営喸喺喼喿",
		4,
		"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",
		4,
		"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",
		4,
		"嗿嘂嘃嘄嘅"
	],
	[
		"8740",
		"嘆嘇嘊嘋嘍嘐",
		7,
		"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",
		11,
		"噏",
		4,
		"噕噖噚噛噝",
		4
	],
	[
		"8780",
		"噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",
		7,
		"嚇",
		6,
		"嚐嚑嚒嚔",
		14,
		"嚤",
		10,
		"嚰",
		6,
		"嚸嚹嚺嚻嚽",
		12,
		"囋",
		8,
		"囕囖囘囙囜団囥",
		5,
		"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",
		6
	],
	[
		"8840",
		"園",
		9,
		"圝圞圠圡圢圤圥圦圧圫圱圲圴",
		4,
		"圼圽圿坁坃坄坅坆坈坉坋坒",
		4,
		"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"
	],
	[
		"8880",
		"垁垇垈垉垊垍",
		4,
		"垔",
		6,
		"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",
		8,
		"埄",
		6,
		"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",
		7,
		"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",
		4,
		"堫",
		4,
		"報堲堳場堶",
		7
	],
	[
		"8940",
		"堾",
		5,
		"塅",
		6,
		"塎塏塐塒塓塕塖塗塙",
		4,
		"塟",
		5,
		"塦",
		4,
		"塭",
		16,
		"塿墂墄墆墇墈墊墋墌"
	],
	[
		"8980",
		"墍",
		4,
		"墔",
		4,
		"墛墜墝墠",
		7,
		"墪",
		17,
		"墽墾墿壀壂壃壄壆",
		10,
		"壒壓壔壖",
		13,
		"壥",
		5,
		"壭壯壱売壴壵壷壸壺",
		7,
		"夃夅夆夈",
		4,
		"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"
	],
	[
		"8a40",
		"夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",
		4,
		"奡奣奤奦",
		12,
		"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"
	],
	[
		"8a80",
		"妧妬妭妰妱妳",
		5,
		"妺妼妽妿",
		6,
		"姇姈姉姌姍姎姏姕姖姙姛姞",
		4,
		"姤姦姧姩姪姫姭",
		11,
		"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",
		6,
		"娳娵娷",
		4,
		"娽娾娿婁",
		4,
		"婇婈婋",
		9,
		"婖婗婘婙婛",
		5
	],
	[
		"8b40",
		"婡婣婤婥婦婨婩婫",
		8,
		"婸婹婻婼婽婾媀",
		17,
		"媓",
		6,
		"媜",
		13,
		"媫媬"
	],
	[
		"8b80",
		"媭",
		4,
		"媴媶媷媹",
		4,
		"媿嫀嫃",
		5,
		"嫊嫋嫍",
		4,
		"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",
		4,
		"嫲",
		22,
		"嬊",
		11,
		"嬘",
		25,
		"嬳嬵嬶嬸",
		7,
		"孁",
		6
	],
	[
		"8c40",
		"孈",
		7,
		"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"
	],
	[
		"8c80",
		"寑寔",
		8,
		"寠寢寣實寧審",
		4,
		"寯寱",
		6,
		"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",
		6,
		"屰屲",
		6,
		"屻屼屽屾岀岃",
		4,
		"岉岊岋岎岏岒岓岕岝",
		4,
		"岤",
		4
	],
	[
		"8d40",
		"岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",
		5,
		"峌",
		5,
		"峓",
		5,
		"峚",
		6,
		"峢峣峧峩峫峬峮峯峱",
		9,
		"峼",
		4
	],
	[
		"8d80",
		"崁崄崅崈",
		5,
		"崏",
		4,
		"崕崗崘崙崚崜崝崟",
		4,
		"崥崨崪崫崬崯",
		4,
		"崵",
		7,
		"崿",
		7,
		"嵈嵉嵍",
		10,
		"嵙嵚嵜嵞",
		10,
		"嵪嵭嵮嵰嵱嵲嵳嵵",
		12,
		"嶃",
		21,
		"嶚嶛嶜嶞嶟嶠"
	],
	[
		"8e40",
		"嶡",
		21,
		"嶸",
		12,
		"巆",
		6,
		"巎",
		12,
		"巜巟巠巣巤巪巬巭"
	],
	[
		"8e80",
		"巰巵巶巸",
		4,
		"巿帀帄帇帉帊帋帍帎帒帓帗帞",
		7,
		"帨",
		4,
		"帯帰帲",
		4,
		"帹帺帾帿幀幁幃幆",
		5,
		"幍",
		6,
		"幖",
		4,
		"幜幝幟幠幣",
		14,
		"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",
		4,
		"庮",
		4,
		"庴庺庻庼庽庿",
		6
	],
	[
		"8f40",
		"廆廇廈廋",
		5,
		"廔廕廗廘廙廚廜",
		11,
		"廩廫",
		8,
		"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"
	],
	[
		"8f80",
		"弨弫弬弮弰弲",
		6,
		"弻弽弾弿彁",
		14,
		"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",
		5,
		"復徫徬徯",
		5,
		"徶徸徹徺徻徾",
		4,
		"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"
	],
	[
		"9040",
		"怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",
		4,
		"怶",
		4,
		"怽怾恀恄",
		6,
		"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"
	],
	[
		"9080",
		"悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",
		7,
		"惇惈惉惌",
		4,
		"惒惓惔惖惗惙惛惞惡",
		4,
		"惪惱惲惵惷惸惻",
		4,
		"愂愃愄愅愇愊愋愌愐",
		4,
		"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",
		18,
		"慀",
		6
	],
	[
		"9140",
		"慇慉態慍慏慐慒慓慔慖",
		6,
		"慞慟慠慡慣慤慥慦慩",
		6,
		"慱慲慳慴慶慸",
		18,
		"憌憍憏",
		4,
		"憕"
	],
	[
		"9180",
		"憖",
		6,
		"憞",
		8,
		"憪憫憭",
		9,
		"憸",
		5,
		"憿懀懁懃",
		4,
		"應懌",
		4,
		"懓懕",
		16,
		"懧",
		13,
		"懶",
		8,
		"戀",
		5,
		"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",
		4,
		"扂扄扅扆扊"
	],
	[
		"9240",
		"扏扐払扖扗扙扚扜",
		6,
		"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",
		5,
		"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"
	],
	[
		"9280",
		"拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",
		5,
		"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",
		7,
		"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",
		6,
		"採掤掦掫掯掱掲掵掶掹掻掽掿揀"
	],
	[
		"9340",
		"揁揂揃揅揇揈揊揋揌揑揓揔揕揗",
		6,
		"揟揢揤",
		4,
		"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",
		4,
		"損搎搑搒搕",
		5,
		"搝搟搢搣搤"
	],
	[
		"9380",
		"搥搧搨搩搫搮",
		5,
		"搵",
		4,
		"搻搼搾摀摂摃摉摋",
		6,
		"摓摕摖摗摙",
		4,
		"摟",
		7,
		"摨摪摫摬摮",
		9,
		"摻",
		6,
		"撃撆撈",
		8,
		"撓撔撗撘撚撛撜撝撟",
		4,
		"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",
		6,
		"擏擑擓擔擕擖擙據"
	],
	[
		"9440",
		"擛擜擝擟擠擡擣擥擧",
		24,
		"攁",
		7,
		"攊",
		7,
		"攓",
		4,
		"攙",
		8
	],
	[
		"9480",
		"攢攣攤攦",
		4,
		"攬攭攰攱攲攳攷攺攼攽敀",
		4,
		"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",
		14,
		"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",
		7,
		"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",
		7,
		"旡旣旤旪旫"
	],
	[
		"9540",
		"旲旳旴旵旸旹旻",
		4,
		"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",
		4,
		"昽昿晀時晄",
		6,
		"晍晎晐晑晘"
	],
	[
		"9580",
		"晙晛晜晝晞晠晢晣晥晧晩",
		4,
		"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",
		4,
		"暞",
		8,
		"暩",
		4,
		"暯",
		4,
		"暵暶暷暸暺暻暼暽暿",
		25,
		"曚曞",
		7,
		"曧曨曪",
		5,
		"曱曵曶書曺曻曽朁朂會"
	],
	[
		"9640",
		"朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",
		5,
		"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",
		4,
		"杝杢杣杤杦杧杫杬杮東杴杶"
	],
	[
		"9680",
		"杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",
		7,
		"柂柅",
		9,
		"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",
		7,
		"柾栁栂栃栄栆栍栐栒栔栕栘",
		4,
		"栞栟栠栢",
		6,
		"栫",
		6,
		"栴栵栶栺栻栿桇桋桍桏桒桖",
		5
	],
	[
		"9740",
		"桜桝桞桟桪桬",
		7,
		"桵桸",
		8,
		"梂梄梇",
		7,
		"梐梑梒梔梕梖梘",
		9,
		"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"
	],
	[
		"9780",
		"梹",
		6,
		"棁棃",
		5,
		"棊棌棎棏棐棑棓棔棖棗棙棛",
		4,
		"棡棢棤",
		9,
		"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",
		4,
		"椌椏椑椓",
		11,
		"椡椢椣椥",
		7,
		"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",
		16,
		"楕楖楘楙楛楜楟"
	],
	[
		"9840",
		"楡楢楤楥楧楨楩楪楬業楯楰楲",
		4,
		"楺楻楽楾楿榁榃榅榊榋榌榎",
		5,
		"榖榗榙榚榝",
		9,
		"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"
	],
	[
		"9880",
		"榾榿槀槂",
		7,
		"構槍槏槑槒槓槕",
		5,
		"槜槝槞槡",
		11,
		"槮槯槰槱槳",
		9,
		"槾樀",
		9,
		"樋",
		11,
		"標",
		5,
		"樠樢",
		5,
		"権樫樬樭樮樰樲樳樴樶",
		6,
		"樿",
		4,
		"橅橆橈",
		7,
		"橑",
		6,
		"橚"
	],
	[
		"9940",
		"橜",
		4,
		"橢橣橤橦",
		10,
		"橲",
		6,
		"橺橻橽橾橿檁檂檃檅",
		8,
		"檏檒",
		4,
		"檘",
		7,
		"檡",
		5
	],
	[
		"9980",
		"檧檨檪檭",
		114,
		"欥欦欨",
		6
	],
	[
		"9a40",
		"欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",
		11,
		"歚",
		7,
		"歨歩歫",
		13,
		"歺歽歾歿殀殅殈"
	],
	[
		"9a80",
		"殌殎殏殐殑殔殕殗殘殙殜",
		4,
		"殢",
		7,
		"殫",
		7,
		"殶殸",
		6,
		"毀毃毄毆",
		4,
		"毌毎毐毑毘毚毜",
		4,
		"毢",
		7,
		"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",
		6,
		"氈",
		4,
		"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",
		4,
		"汑汒汓汖汘"
	],
	[
		"9b40",
		"汙汚汢汣汥汦汧汫",
		4,
		"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"
	],
	[
		"9b80",
		"泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",
		5,
		"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",
		4,
		"涃涄涆涇涊涋涍涏涐涒涖",
		4,
		"涜涢涥涬涭涰涱涳涴涶涷涹",
		5,
		"淁淂淃淈淉淊"
	],
	[
		"9c40",
		"淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",
		7,
		"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"
	],
	[
		"9c80",
		"渶渷渹渻",
		7,
		"湅",
		7,
		"湏湐湑湒湕湗湙湚湜湝湞湠",
		10,
		"湬湭湯",
		14,
		"満溁溂溄溇溈溊",
		4,
		"溑",
		6,
		"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",
		5
	],
	[
		"9d40",
		"滰滱滲滳滵滶滷滸滺",
		7,
		"漃漄漅漇漈漊",
		4,
		"漐漑漒漖",
		9,
		"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",
		6,
		"漿潀潁潂"
	],
	[
		"9d80",
		"潃潄潅潈潉潊潌潎",
		9,
		"潙潚潛潝潟潠潡潣潤潥潧",
		5,
		"潯潰潱潳潵潶潷潹潻潽",
		6,
		"澅澆澇澊澋澏",
		12,
		"澝澞澟澠澢",
		4,
		"澨",
		10,
		"澴澵澷澸澺",
		5,
		"濁濃",
		5,
		"濊",
		6,
		"濓",
		10,
		"濟濢濣濤濥"
	],
	[
		"9e40",
		"濦",
		7,
		"濰",
		32,
		"瀒",
		7,
		"瀜",
		6,
		"瀤",
		6
	],
	[
		"9e80",
		"瀫",
		9,
		"瀶瀷瀸瀺",
		17,
		"灍灎灐",
		13,
		"灟",
		11,
		"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",
		12,
		"炰炲炴炵炶為炾炿烄烅烆烇烉烋",
		12,
		"烚"
	],
	[
		"9f40",
		"烜烝烞烠烡烢烣烥烪烮烰",
		6,
		"烸烺烻烼烾",
		10,
		"焋",
		4,
		"焑焒焔焗焛",
		10,
		"焧",
		7,
		"焲焳焴"
	],
	[
		"9f80",
		"焵焷",
		13,
		"煆煇煈煉煋煍煏",
		12,
		"煝煟",
		4,
		"煥煩",
		4,
		"煯煰煱煴煵煶煷煹煻煼煾",
		5,
		"熅",
		4,
		"熋熌熍熎熐熑熒熓熕熖熗熚",
		4,
		"熡",
		6,
		"熩熪熫熭",
		5,
		"熴熶熷熸熺",
		8,
		"燄",
		9,
		"燏",
		4
	],
	[
		"a040",
		"燖",
		9,
		"燡燢燣燤燦燨",
		5,
		"燯",
		9,
		"燺",
		11,
		"爇",
		19
	],
	[
		"a080",
		"爛爜爞",
		9,
		"爩爫爭爮爯爲爳爴爺爼爾牀",
		6,
		"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",
		4,
		"犌犎犐犑犓",
		11,
		"犠",
		11,
		"犮犱犲犳犵犺",
		6,
		"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"
	],
	[
		"a1a1",
		"　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",
		7,
		"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"
	],
	[
		"a2a1",
		"ⅰ",
		9
	],
	[
		"a2b1",
		"⒈",
		19,
		"⑴",
		19,
		"①",
		9
	],
	[
		"a2e5",
		"㈠",
		9
	],
	[
		"a2f1",
		"Ⅰ",
		11
	],
	[
		"a3a1",
		"！＂＃￥％",
		88,
		"￣"
	],
	[
		"a4a1",
		"ぁ",
		82
	],
	[
		"a5a1",
		"ァ",
		85
	],
	[
		"a6a1",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"a6c1",
		"α",
		16,
		"σ",
		6
	],
	[
		"a6e0",
		"︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"
	],
	[
		"a6ee",
		"︻︼︷︸︱"
	],
	[
		"a6f4",
		"︳︴"
	],
	[
		"a7a1",
		"А",
		5,
		"ЁЖ",
		25
	],
	[
		"a7d1",
		"а",
		5,
		"ёж",
		25
	],
	[
		"a840",
		"ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",
		35,
		"▁",
		6
	],
	[
		"a880",
		"█",
		7,
		"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"
	],
	[
		"a8a1",
		"āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"
	],
	[
		"a8bd",
		"ńň"
	],
	[
		"a8c0",
		"ɡ"
	],
	[
		"a8c5",
		"ㄅ",
		36
	],
	[
		"a940",
		"〡",
		8,
		"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"
	],
	[
		"a959",
		"℡㈱"
	],
	[
		"a95c",
		"‐"
	],
	[
		"a960",
		"ー゛゜ヽヾ〆ゝゞ﹉",
		9,
		"﹔﹕﹖﹗﹙",
		8
	],
	[
		"a980",
		"﹢",
		4,
		"﹨﹩﹪﹫"
	],
	[
		"a996",
		"〇"
	],
	[
		"a9a4",
		"─",
		75
	],
	[
		"aa40",
		"狜狝狟狢",
		5,
		"狪狫狵狶狹狽狾狿猀猂猄",
		5,
		"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",
		8
	],
	[
		"aa80",
		"獉獊獋獌獎獏獑獓獔獕獖獘",
		7,
		"獡",
		10,
		"獮獰獱"
	],
	[
		"ab40",
		"獲",
		11,
		"獿",
		4,
		"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",
		5,
		"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",
		4
	],
	[
		"ab80",
		"珋珌珎珒",
		6,
		"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",
		4
	],
	[
		"ac40",
		"珸",
		10,
		"琄琇琈琋琌琍琎琑",
		8,
		"琜",
		5,
		"琣琤琧琩琫琭琯琱琲琷",
		4,
		"琽琾琿瑀瑂",
		11
	],
	[
		"ac80",
		"瑎",
		6,
		"瑖瑘瑝瑠",
		12,
		"瑮瑯瑱",
		4,
		"瑸瑹瑺"
	],
	[
		"ad40",
		"瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",
		10,
		"璝璟",
		7,
		"璪",
		15,
		"璻",
		12
	],
	[
		"ad80",
		"瓈",
		9,
		"瓓",
		8,
		"瓝瓟瓡瓥瓧",
		6,
		"瓰瓱瓲"
	],
	[
		"ae40",
		"瓳瓵瓸",
		6,
		"甀甁甂甃甅",
		7,
		"甎甐甒甔甕甖甗甛甝甞甠",
		4,
		"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"
	],
	[
		"ae80",
		"畝",
		7,
		"畧畨畩畫",
		6,
		"畳畵當畷畺",
		4,
		"疀疁疂疄疅疇"
	],
	[
		"af40",
		"疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",
		4,
		"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"
	],
	[
		"af80",
		"瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"
	],
	[
		"b040",
		"癅",
		6,
		"癎",
		5,
		"癕癗",
		4,
		"癝癟癠癡癢癤",
		6,
		"癬癭癮癰",
		7,
		"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"
	],
	[
		"b080",
		"皜",
		7,
		"皥",
		8,
		"皯皰皳皵",
		9,
		"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"
	],
	[
		"b140",
		"盄盇盉盋盌盓盕盙盚盜盝盞盠",
		4,
		"盦",
		7,
		"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",
		10,
		"眛眜眝眞眡眣眤眥眧眪眫"
	],
	[
		"b180",
		"眬眮眰",
		4,
		"眹眻眽眾眿睂睄睅睆睈",
		7,
		"睒",
		7,
		"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"
	],
	[
		"b240",
		"睝睞睟睠睤睧睩睪睭",
		11,
		"睺睻睼瞁瞂瞃瞆",
		5,
		"瞏瞐瞓",
		11,
		"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",
		4
	],
	[
		"b280",
		"瞼瞾矀",
		12,
		"矎",
		8,
		"矘矙矚矝",
		4,
		"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"
	],
	[
		"b340",
		"矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",
		5,
		"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"
	],
	[
		"b380",
		"硛硜硞",
		11,
		"硯",
		7,
		"硸硹硺硻硽",
		6,
		"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"
	],
	[
		"b440",
		"碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",
		7,
		"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",
		9
	],
	[
		"b480",
		"磤磥磦磧磩磪磫磭",
		4,
		"磳磵磶磸磹磻",
		5,
		"礂礃礄礆",
		6,
		"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"
	],
	[
		"b540",
		"礍",
		5,
		"礔",
		9,
		"礟",
		4,
		"礥",
		14,
		"礵",
		4,
		"礽礿祂祃祄祅祇祊",
		8,
		"祔祕祘祙祡祣"
	],
	[
		"b580",
		"祤祦祩祪祫祬祮祰",
		6,
		"祹祻",
		4,
		"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"
	],
	[
		"b640",
		"禓",
		6,
		"禛",
		11,
		"禨",
		10,
		"禴",
		4,
		"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",
		5,
		"秠秡秢秥秨秪"
	],
	[
		"b680",
		"秬秮秱",
		6,
		"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",
		4,
		"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"
	],
	[
		"b740",
		"稝稟稡稢稤",
		14,
		"稴稵稶稸稺稾穀",
		5,
		"穇",
		9,
		"穒",
		4,
		"穘",
		16
	],
	[
		"b780",
		"穩",
		6,
		"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"
	],
	[
		"b840",
		"窣窤窧窩窪窫窮",
		4,
		"窴",
		10,
		"竀",
		10,
		"竌",
		9,
		"竗竘竚竛竜竝竡竢竤竧",
		5,
		"竮竰竱竲竳"
	],
	[
		"b880",
		"竴",
		4,
		"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"
	],
	[
		"b940",
		"笯笰笲笴笵笶笷笹笻笽笿",
		5,
		"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",
		10,
		"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",
		6,
		"箎箏"
	],
	[
		"b980",
		"箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",
		7,
		"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"
	],
	[
		"ba40",
		"篅篈築篊篋篍篎篏篐篒篔",
		4,
		"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",
		4,
		"篸篹篺篻篽篿",
		7,
		"簈簉簊簍簎簐",
		5,
		"簗簘簙"
	],
	[
		"ba80",
		"簚",
		4,
		"簠",
		5,
		"簨簩簫",
		12,
		"簹",
		5,
		"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"
	],
	[
		"bb40",
		"籃",
		9,
		"籎",
		36,
		"籵",
		5,
		"籾",
		9
	],
	[
		"bb80",
		"粈粊",
		6,
		"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",
		4,
		"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"
	],
	[
		"bc40",
		"粿糀糂糃糄糆糉糋糎",
		6,
		"糘糚糛糝糞糡",
		6,
		"糩",
		5,
		"糰",
		7,
		"糹糺糼",
		13,
		"紋",
		5
	],
	[
		"bc80",
		"紑",
		14,
		"紡紣紤紥紦紨紩紪紬紭紮細",
		6,
		"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"
	],
	[
		"bd40",
		"紷",
		54,
		"絯",
		7
	],
	[
		"bd80",
		"絸",
		32,
		"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"
	],
	[
		"be40",
		"継",
		12,
		"綧",
		6,
		"綯",
		42
	],
	[
		"be80",
		"線",
		32,
		"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"
	],
	[
		"bf40",
		"緻",
		62
	],
	[
		"bf80",
		"縺縼",
		4,
		"繂",
		4,
		"繈",
		21,
		"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"
	],
	[
		"c040",
		"繞",
		35,
		"纃",
		23,
		"纜纝纞"
	],
	[
		"c080",
		"纮纴纻纼绖绤绬绹缊缐缞缷缹缻",
		6,
		"罃罆",
		9,
		"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"
	],
	[
		"c140",
		"罖罙罛罜罝罞罠罣",
		4,
		"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",
		7,
		"羋羍羏",
		4,
		"羕",
		4,
		"羛羜羠羢羣羥羦羨",
		6,
		"羱"
	],
	[
		"c180",
		"羳",
		4,
		"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",
		4,
		"翖翗翙",
		5,
		"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"
	],
	[
		"c240",
		"翤翧翨翪翫翬翭翯翲翴",
		6,
		"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",
		5,
		"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"
	],
	[
		"c280",
		"聙聛",
		13,
		"聫",
		5,
		"聲",
		11,
		"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"
	],
	[
		"c340",
		"聾肁肂肅肈肊肍",
		5,
		"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",
		4,
		"胏",
		6,
		"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"
	],
	[
		"c380",
		"脌脕脗脙脛脜脝脟",
		12,
		"脭脮脰脳脴脵脷脹",
		4,
		"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"
	],
	[
		"c440",
		"腀",
		5,
		"腇腉腍腎腏腒腖腗腘腛",
		4,
		"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",
		4,
		"膉膋膌膍膎膐膒",
		5,
		"膙膚膞",
		4,
		"膤膥"
	],
	[
		"c480",
		"膧膩膫",
		7,
		"膴",
		5,
		"膼膽膾膿臄臅臇臈臉臋臍",
		6,
		"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"
	],
	[
		"c540",
		"臔",
		14,
		"臤臥臦臨臩臫臮",
		4,
		"臵",
		5,
		"臽臿舃與",
		4,
		"舎舏舑舓舕",
		5,
		"舝舠舤舥舦舧舩舮舲舺舼舽舿"
	],
	[
		"c580",
		"艀艁艂艃艅艆艈艊艌艍艎艐",
		7,
		"艙艛艜艝艞艠",
		7,
		"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"
	],
	[
		"c640",
		"艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"
	],
	[
		"c680",
		"苺苼",
		4,
		"茊茋茍茐茒茓茖茘茙茝",
		9,
		"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"
	],
	[
		"c740",
		"茾茿荁荂荄荅荈荊",
		4,
		"荓荕",
		4,
		"荝荢荰",
		6,
		"荹荺荾",
		6,
		"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",
		6,
		"莬莭莮"
	],
	[
		"c780",
		"莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"
	],
	[
		"c840",
		"菮華菳",
		4,
		"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",
		5,
		"萙萚萛萞",
		5,
		"萩",
		7,
		"萲",
		5,
		"萹萺萻萾",
		7,
		"葇葈葉"
	],
	[
		"c880",
		"葊",
		6,
		"葒",
		4,
		"葘葝葞葟葠葢葤",
		4,
		"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"
	],
	[
		"c940",
		"葽",
		4,
		"蒃蒄蒅蒆蒊蒍蒏",
		7,
		"蒘蒚蒛蒝蒞蒟蒠蒢",
		12,
		"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"
	],
	[
		"c980",
		"蓘",
		4,
		"蓞蓡蓢蓤蓧",
		4,
		"蓭蓮蓯蓱",
		10,
		"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"
	],
	[
		"ca40",
		"蔃",
		8,
		"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",
		8,
		"蔭",
		9,
		"蔾",
		4,
		"蕄蕅蕆蕇蕋",
		10
	],
	[
		"ca80",
		"蕗蕘蕚蕛蕜蕝蕟",
		4,
		"蕥蕦蕧蕩",
		8,
		"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"
	],
	[
		"cb40",
		"薂薃薆薈",
		6,
		"薐",
		10,
		"薝",
		6,
		"薥薦薧薩薫薬薭薱",
		5,
		"薸薺",
		6,
		"藂",
		6,
		"藊",
		4,
		"藑藒"
	],
	[
		"cb80",
		"藔藖",
		5,
		"藝",
		6,
		"藥藦藧藨藪",
		14,
		"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"
	],
	[
		"cc40",
		"藹藺藼藽藾蘀",
		4,
		"蘆",
		10,
		"蘒蘓蘔蘕蘗",
		15,
		"蘨蘪",
		13,
		"蘹蘺蘻蘽蘾蘿虀"
	],
	[
		"cc80",
		"虁",
		11,
		"虒虓處",
		4,
		"虛虜虝號虠虡虣",
		7,
		"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"
	],
	[
		"cd40",
		"虭虯虰虲",
		6,
		"蚃",
		6,
		"蚎",
		4,
		"蚔蚖",
		5,
		"蚞",
		4,
		"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",
		4,
		"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"
	],
	[
		"cd80",
		"蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"
	],
	[
		"ce40",
		"蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",
		6,
		"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",
		5,
		"蝡蝢蝦",
		7,
		"蝯蝱蝲蝳蝵"
	],
	[
		"ce80",
		"蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",
		4,
		"螔螕螖螘",
		6,
		"螠",
		4,
		"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"
	],
	[
		"cf40",
		"螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",
		4,
		"蟇蟈蟉蟌",
		4,
		"蟔",
		6,
		"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",
		9
	],
	[
		"cf80",
		"蟺蟻蟼蟽蟿蠀蠁蠂蠄",
		5,
		"蠋",
		7,
		"蠔蠗蠘蠙蠚蠜",
		4,
		"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"
	],
	[
		"d040",
		"蠤",
		13,
		"蠳",
		5,
		"蠺蠻蠽蠾蠿衁衂衃衆",
		5,
		"衎",
		5,
		"衕衖衘衚",
		6,
		"衦衧衪衭衯衱衳衴衵衶衸衹衺"
	],
	[
		"d080",
		"衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",
		4,
		"袝",
		4,
		"袣袥",
		5,
		"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"
	],
	[
		"d140",
		"袬袮袯袰袲",
		4,
		"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",
		4,
		"裠裡裦裧裩",
		6,
		"裲裵裶裷裺裻製裿褀褁褃",
		5
	],
	[
		"d180",
		"褉褋",
		4,
		"褑褔",
		4,
		"褜",
		4,
		"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"
	],
	[
		"d240",
		"褸",
		8,
		"襂襃襅",
		24,
		"襠",
		5,
		"襧",
		19,
		"襼"
	],
	[
		"d280",
		"襽襾覀覂覄覅覇",
		26,
		"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"
	],
	[
		"d340",
		"覢",
		30,
		"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",
		6
	],
	[
		"d380",
		"觻",
		4,
		"訁",
		5,
		"計",
		21,
		"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"
	],
	[
		"d440",
		"訞",
		31,
		"訿",
		8,
		"詉",
		21
	],
	[
		"d480",
		"詟",
		25,
		"詺",
		6,
		"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"
	],
	[
		"d540",
		"誁",
		7,
		"誋",
		7,
		"誔",
		46
	],
	[
		"d580",
		"諃",
		32,
		"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"
	],
	[
		"d640",
		"諤",
		34,
		"謈",
		27
	],
	[
		"d680",
		"謤謥謧",
		30,
		"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"
	],
	[
		"d740",
		"譆",
		31,
		"譧",
		4,
		"譭",
		25
	],
	[
		"d780",
		"讇",
		24,
		"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"
	],
	[
		"d840",
		"谸",
		8,
		"豂豃豄豅豈豊豋豍",
		7,
		"豖豗豘豙豛",
		5,
		"豣",
		6,
		"豬",
		6,
		"豴豵豶豷豻",
		6,
		"貃貄貆貇"
	],
	[
		"d880",
		"貈貋貍",
		6,
		"貕貖貗貙",
		20,
		"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"
	],
	[
		"d940",
		"貮",
		62
	],
	[
		"d980",
		"賭",
		32,
		"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"
	],
	[
		"da40",
		"贎",
		14,
		"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",
		8,
		"趂趃趆趇趈趉趌",
		4,
		"趒趓趕",
		9,
		"趠趡"
	],
	[
		"da80",
		"趢趤",
		12,
		"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"
	],
	[
		"db40",
		"跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",
		6,
		"踆踇踈踋踍踎踐踑踒踓踕",
		7,
		"踠踡踤",
		4,
		"踫踭踰踲踳踴踶踷踸踻踼踾"
	],
	[
		"db80",
		"踿蹃蹅蹆蹌",
		4,
		"蹓",
		5,
		"蹚",
		11,
		"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"
	],
	[
		"dc40",
		"蹳蹵蹷",
		4,
		"蹽蹾躀躂躃躄躆躈",
		6,
		"躑躒躓躕",
		6,
		"躝躟",
		11,
		"躭躮躰躱躳",
		6,
		"躻",
		7
	],
	[
		"dc80",
		"軃",
		10,
		"軏",
		21,
		"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"
	],
	[
		"dd40",
		"軥",
		62
	],
	[
		"dd80",
		"輤",
		32,
		"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"
	],
	[
		"de40",
		"轅",
		32,
		"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"
	],
	[
		"de80",
		"迉",
		4,
		"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"
	],
	[
		"df40",
		"這逜連逤逥逧",
		5,
		"逰",
		4,
		"逷逹逺逽逿遀遃遅遆遈",
		4,
		"過達違遖遙遚遜",
		5,
		"遤遦遧適遪遫遬遯",
		4,
		"遶",
		6,
		"遾邁"
	],
	[
		"df80",
		"還邅邆邇邉邊邌",
		4,
		"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"
	],
	[
		"e040",
		"郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",
		19,
		"鄚鄛鄜"
	],
	[
		"e080",
		"鄝鄟鄠鄡鄤",
		10,
		"鄰鄲",
		6,
		"鄺",
		8,
		"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"
	],
	[
		"e140",
		"酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",
		4,
		"醆醈醊醎醏醓",
		6,
		"醜",
		5,
		"醤",
		5,
		"醫醬醰醱醲醳醶醷醸醹醻"
	],
	[
		"e180",
		"醼",
		10,
		"釈釋釐釒",
		9,
		"針",
		8,
		"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"
	],
	[
		"e240",
		"釦",
		62
	],
	[
		"e280",
		"鈥",
		32,
		"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",
		5,
		"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"
	],
	[
		"e340",
		"鉆",
		45,
		"鉵",
		16
	],
	[
		"e380",
		"銆",
		7,
		"銏",
		24,
		"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"
	],
	[
		"e440",
		"銨",
		5,
		"銯",
		24,
		"鋉",
		31
	],
	[
		"e480",
		"鋩",
		32,
		"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"
	],
	[
		"e540",
		"錊",
		51,
		"錿",
		10
	],
	[
		"e580",
		"鍊",
		31,
		"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"
	],
	[
		"e640",
		"鍬",
		34,
		"鎐",
		27
	],
	[
		"e680",
		"鎬",
		29,
		"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"
	],
	[
		"e740",
		"鏎",
		7,
		"鏗",
		54
	],
	[
		"e780",
		"鐎",
		32,
		"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",
		6,
		"缪缫缬缭缯",
		4,
		"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"
	],
	[
		"e840",
		"鐯",
		14,
		"鐿",
		43,
		"鑬鑭鑮鑯"
	],
	[
		"e880",
		"鑰",
		20,
		"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"
	],
	[
		"e940",
		"锧锳锽镃镈镋镕镚镠镮镴镵長",
		7,
		"門",
		42
	],
	[
		"e980",
		"閫",
		32,
		"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"
	],
	[
		"ea40",
		"闌",
		27,
		"闬闿阇阓阘阛阞阠阣",
		6,
		"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"
	],
	[
		"ea80",
		"陘陙陚陜陝陞陠陣陥陦陫陭",
		4,
		"陳陸",
		12,
		"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"
	],
	[
		"eb40",
		"隌階隑隒隓隕隖隚際隝",
		9,
		"隨",
		7,
		"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",
		9,
		"雡",
		6,
		"雫"
	],
	[
		"eb80",
		"雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",
		4,
		"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"
	],
	[
		"ec40",
		"霡",
		8,
		"霫霬霮霯霱霳",
		4,
		"霺霻霼霽霿",
		18,
		"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",
		7
	],
	[
		"ec80",
		"靲靵靷",
		4,
		"靽",
		7,
		"鞆",
		4,
		"鞌鞎鞏鞐鞓鞕鞖鞗鞙",
		4,
		"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"
	],
	[
		"ed40",
		"鞞鞟鞡鞢鞤",
		6,
		"鞬鞮鞰鞱鞳鞵",
		46
	],
	[
		"ed80",
		"韤韥韨韮",
		4,
		"韴韷",
		23,
		"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"
	],
	[
		"ee40",
		"頏",
		62
	],
	[
		"ee80",
		"顎",
		32,
		"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",
		4,
		"钼钽钿铄铈",
		6,
		"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"
	],
	[
		"ef40",
		"顯",
		5,
		"颋颎颒颕颙颣風",
		37,
		"飏飐飔飖飗飛飜飝飠",
		4
	],
	[
		"ef80",
		"飥飦飩",
		30,
		"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",
		4,
		"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",
		8,
		"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"
	],
	[
		"f040",
		"餈",
		4,
		"餎餏餑",
		28,
		"餯",
		26
	],
	[
		"f080",
		"饊",
		9,
		"饖",
		12,
		"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",
		4,
		"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",
		6,
		"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"
	],
	[
		"f140",
		"馌馎馚",
		10,
		"馦馧馩",
		47
	],
	[
		"f180",
		"駙",
		32,
		"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"
	],
	[
		"f240",
		"駺",
		62
	],
	[
		"f280",
		"騹",
		32,
		"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"
	],
	[
		"f340",
		"驚",
		17,
		"驲骃骉骍骎骔骕骙骦骩",
		6,
		"骲骳骴骵骹骻骽骾骿髃髄髆",
		4,
		"髍髎髏髐髒體髕髖髗髙髚髛髜"
	],
	[
		"f380",
		"髝髞髠髢髣髤髥髧髨髩髪髬髮髰",
		8,
		"髺髼",
		6,
		"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"
	],
	[
		"f440",
		"鬇鬉",
		5,
		"鬐鬑鬒鬔",
		10,
		"鬠鬡鬢鬤",
		10,
		"鬰鬱鬳",
		7,
		"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",
		5
	],
	[
		"f480",
		"魛",
		32,
		"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"
	],
	[
		"f540",
		"魼",
		62
	],
	[
		"f580",
		"鮻",
		32,
		"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"
	],
	[
		"f640",
		"鯜",
		62
	],
	[
		"f680",
		"鰛",
		32,
		"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",
		5,
		"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",
		5,
		"鲥",
		4,
		"鲫鲭鲮鲰",
		7,
		"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"
	],
	[
		"f740",
		"鰼",
		62
	],
	[
		"f780",
		"鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",
		4,
		"鳈鳉鳑鳒鳚鳛鳠鳡鳌",
		4,
		"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"
	],
	[
		"f840",
		"鳣",
		62
	],
	[
		"f880",
		"鴢",
		32
	],
	[
		"f940",
		"鵃",
		62
	],
	[
		"f980",
		"鶂",
		32
	],
	[
		"fa40",
		"鶣",
		62
	],
	[
		"fa80",
		"鷢",
		32
	],
	[
		"fb40",
		"鸃",
		27,
		"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",
		9,
		"麀"
	],
	[
		"fb80",
		"麁麃麄麅麆麉麊麌",
		5,
		"麔",
		8,
		"麞麠",
		5,
		"麧麨麩麪"
	],
	[
		"fc40",
		"麫",
		8,
		"麵麶麷麹麺麼麿",
		4,
		"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",
		8,
		"黺黽黿",
		6
	],
	[
		"fc80",
		"鼆",
		4,
		"鼌鼏鼑鼒鼔鼕鼖鼘鼚",
		5,
		"鼡鼣",
		8,
		"鼭鼮鼰鼱"
	],
	[
		"fd40",
		"鼲",
		4,
		"鼸鼺鼼鼿",
		4,
		"齅",
		10,
		"齒",
		38
	],
	[
		"fd80",
		"齹",
		5,
		"龁龂龍",
		11,
		"龜龝龞龡",
		4,
		"郎凉秊裏隣"
	],
	[
		"fe40",
		"兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"
	]
];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * body.js
 *
 * Body interface provides common methods for Request and Response
 */

var convert = __webpack_require__(54).convert;
var bodyStream = __webpack_require__(80);
var PassThrough = __webpack_require__(4).PassThrough;
var FetchError = __webpack_require__(23);

module.exports = Body;

/**
 * Body class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body, opts) {

	opts = opts || {};

	this.body = body;
	this.bodyUsed = false;
	this.size = opts.size || 0;
	this.timeout = opts.timeout || 0;
	this._raw = [];
	this._abort = false;

}

/**
 * Decode response as json
 *
 * @return  Promise
 */
Body.prototype.json = function() {

	var self = this;

	return this._decode().then(function(buffer) {
		try {
			return JSON.parse(buffer.toString());
		} catch (err) {
			return Body.Promise.reject(new FetchError('invalid json response body at ' + self.url + ' reason: ' + err.message, 'invalid-json'));
		}
	});

};

/**
 * Decode response as text
 *
 * @return  Promise
 */
Body.prototype.text = function() {

	return this._decode().then(function(buffer) {
		return buffer.toString();
	});

};

/**
 * Decode response as buffer (non-spec api)
 *
 * @return  Promise
 */
Body.prototype.buffer = function() {

	return this._decode();

};

/**
 * Decode buffers into utf-8 string
 *
 * @return  Promise
 */
Body.prototype._decode = function() {

	var self = this;

	if (this.bodyUsed) {
		return Body.Promise.reject(new Error('body used already for: ' + this.url));
	}

	this.bodyUsed = true;
	this._bytes = 0;
	this._abort = false;
	this._raw = [];

	return new Body.Promise(function(resolve, reject) {
		var resTimeout;

		// body is string
		if (typeof self.body === 'string') {
			self._bytes = self.body.length;
			self._raw = [new Buffer(self.body)];
			return resolve(self._convert());
		}

		// body is buffer
		if (self.body instanceof Buffer) {
			self._bytes = self.body.length;
			self._raw = [self.body];
			return resolve(self._convert());
		}

		// allow timeout on slow response body
		if (self.timeout) {
			resTimeout = setTimeout(function() {
				self._abort = true;
				reject(new FetchError('response timeout at ' + self.url + ' over limit: ' + self.timeout, 'body-timeout'));
			}, self.timeout);
		}

		// handle stream error, such as incorrect content-encoding
		self.body.on('error', function(err) {
			reject(new FetchError('invalid response body at: ' + self.url + ' reason: ' + err.message, 'system', err));
		});

		// body is stream
		self.body.on('data', function(chunk) {
			if (self._abort || chunk === null) {
				return;
			}

			if (self.size && self._bytes + chunk.length > self.size) {
				self._abort = true;
				reject(new FetchError('content size at ' + self.url + ' over limit: ' + self.size, 'max-size'));
				return;
			}

			self._bytes += chunk.length;
			self._raw.push(chunk);
		});

		self.body.on('end', function() {
			if (self._abort) {
				return;
			}

			clearTimeout(resTimeout);
			resolve(self._convert());
		});
	});

};

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   String  encoding  Target encoding
 * @return  String
 */
Body.prototype._convert = function(encoding) {

	encoding = encoding || 'utf-8';

	var ct = this.headers.get('content-type');
	var charset = 'utf-8';
	var res, str;

	// header
	if (ct) {
		// skip encoding detection altogether if not html/xml/plain text
		if (!/text\/html|text\/plain|\+xml|\/xml/i.test(ct)) {
			return Buffer.concat(this._raw);
		}

		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	if (!res && this._raw.length > 0) {
		for (var i = 0; i < this._raw.length; i++) {
			str += this._raw[i].toString()
			if (str.length > 1024) {
				break;
			}
		}
		str = str.substr(0, 1024);
	}

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(
		Buffer.concat(this._raw)
		, encoding
		, charset
	);

};

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
Body.prototype._clone = function(instance) {
	var p1, p2;
	var body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (bodyStream(body) && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance.body = p1;
		body = p2;
	}

	return body;
}

// expose Promise
Body.Promise = global.Promise;


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

module.exports = Headers;

/**
 * Headers class
 *
 * @param   Object  headers  Response headers
 * @return  Void
 */
function Headers(headers) {

	var self = this;
	this._headers = {};

	// Headers
	if (headers instanceof Headers) {
		headers = headers.raw();
	}

	// plain object
	for (var prop in headers) {
		if (!headers.hasOwnProperty(prop)) {
			continue;
		}

		if (typeof headers[prop] === 'string') {
			this.set(prop, headers[prop]);

		} else if (typeof headers[prop] === 'number' && !isNaN(headers[prop])) {
			this.set(prop, headers[prop].toString());

		} else if (headers[prop] instanceof Array) {
			headers[prop].forEach(function(item) {
				self.append(prop, item.toString());
			});
		}
	}

}

/**
 * Return first header value given name
 *
 * @param   String  name  Header name
 * @return  Mixed
 */
Headers.prototype.get = function(name) {
	var list = this._headers[name.toLowerCase()];
	return list ? list[0] : null;
};

/**
 * Return all header values given name
 *
 * @param   String  name  Header name
 * @return  Array
 */
Headers.prototype.getAll = function(name) {
	if (!this.has(name)) {
		return [];
	}

	return this._headers[name.toLowerCase()];
};

/**
 * Iterate over all headers
 *
 * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
 * @param   Boolean   thisArg   `this` context for callback function
 * @return  Void
 */
Headers.prototype.forEach = function(callback, thisArg) {
	Object.getOwnPropertyNames(this._headers).forEach(function(name) {
		this._headers[name].forEach(function(value) {
			callback.call(thisArg, value, name, this)
		}, this)
	}, this)
}

/**
 * Overwrite header values given name
 *
 * @param   String  name   Header name
 * @param   String  value  Header value
 * @return  Void
 */
Headers.prototype.set = function(name, value) {
	this._headers[name.toLowerCase()] = [value];
};

/**
 * Append a value onto existing header
 *
 * @param   String  name   Header name
 * @param   String  value  Header value
 * @return  Void
 */
Headers.prototype.append = function(name, value) {
	if (!this.has(name)) {
		this.set(name, value);
		return;
	}

	this._headers[name.toLowerCase()].push(value);
};

/**
 * Check for header name existence
 *
 * @param   String   name  Header name
 * @return  Boolean
 */
Headers.prototype.has = function(name) {
	return this._headers.hasOwnProperty(name.toLowerCase());
};

/**
 * Delete all header values given name
 *
 * @param   String  name  Header name
 * @return  Void
 */
Headers.prototype['delete'] = function(name) {
	delete this._headers[name.toLowerCase()];
};

/**
 * Return raw headers (non-spec api)
 *
 * @return  Object
 */
Headers.prototype.raw = function() {
	return this._headers;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DOCUMENT_MODE = __webpack_require__(2).DOCUMENT_MODE;

//Const
var VALID_DOCTYPE_NAME = 'html',
    QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd',
    QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
        '+//silmaril//dtd html pro v0r11 19970101//en',
        '-//advasoft ltd//dtd html 3.0 aswedit + extensions//en',
        '-//as//dtd html 3.0 aswedit + extensions//en',
        '-//ietf//dtd html 2.0 level 1//en',
        '-//ietf//dtd html 2.0 level 2//en',
        '-//ietf//dtd html 2.0 strict level 1//en',
        '-//ietf//dtd html 2.0 strict level 2//en',
        '-//ietf//dtd html 2.0 strict//en',
        '-//ietf//dtd html 2.0//en',
        '-//ietf//dtd html 2.1e//en',
        '-//ietf//dtd html 3.0//en',
        '-//ietf//dtd html 3.0//en//',
        '-//ietf//dtd html 3.2 final//en',
        '-//ietf//dtd html 3.2//en',
        '-//ietf//dtd html 3//en',
        '-//ietf//dtd html level 0//en',
        '-//ietf//dtd html level 0//en//2.0',
        '-//ietf//dtd html level 1//en',
        '-//ietf//dtd html level 1//en//2.0',
        '-//ietf//dtd html level 2//en',
        '-//ietf//dtd html level 2//en//2.0',
        '-//ietf//dtd html level 3//en',
        '-//ietf//dtd html level 3//en//3.0',
        '-//ietf//dtd html strict level 0//en',
        '-//ietf//dtd html strict level 0//en//2.0',
        '-//ietf//dtd html strict level 1//en',
        '-//ietf//dtd html strict level 1//en//2.0',
        '-//ietf//dtd html strict level 2//en',
        '-//ietf//dtd html strict level 2//en//2.0',
        '-//ietf//dtd html strict level 3//en',
        '-//ietf//dtd html strict level 3//en//3.0',
        '-//ietf//dtd html strict//en',
        '-//ietf//dtd html strict//en//2.0',
        '-//ietf//dtd html strict//en//3.0',
        '-//ietf//dtd html//en',
        '-//ietf//dtd html//en//2.0',
        '-//ietf//dtd html//en//3.0',
        '-//metrius//dtd metrius presentational//en',
        '-//microsoft//dtd internet explorer 2.0 html strict//en',
        '-//microsoft//dtd internet explorer 2.0 html//en',
        '-//microsoft//dtd internet explorer 2.0 tables//en',
        '-//microsoft//dtd internet explorer 3.0 html strict//en',
        '-//microsoft//dtd internet explorer 3.0 html//en',
        '-//microsoft//dtd internet explorer 3.0 tables//en',
        '-//netscape comm. corp.//dtd html//en',
        '-//netscape comm. corp.//dtd strict html//en',
        '-//o\'reilly and associates//dtd html 2.0//en',
        '-//o\'reilly and associates//dtd html extended 1.0//en',
        '-//spyglass//dtd html 2.0 extended//en',
        '-//sq//dtd html 2.0 hotmetal + extensions//en',
        '-//sun microsystems corp.//dtd hotjava html//en',
        '-//sun microsystems corp.//dtd hotjava strict html//en',
        '-//w3c//dtd html 3 1995-03-24//en',
        '-//w3c//dtd html 3.2 draft//en',
        '-//w3c//dtd html 3.2 final//en',
        '-//w3c//dtd html 3.2//en',
        '-//w3c//dtd html 3.2s draft//en',
        '-//w3c//dtd html 4.0 frameset//en',
        '-//w3c//dtd html 4.0 transitional//en',
        '-//w3c//dtd html experimental 19960712//en',
        '-//w3c//dtd html experimental 970421//en',
        '-//w3c//dtd w3 html//en',
        '-//w3o//dtd w3 html 3.0//en',
        '-//w3o//dtd w3 html 3.0//en//',
        '-//webtechs//dtd mozilla html 2.0//en',
        '-//webtechs//dtd mozilla html//en'
    ],
    QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
        '-//w3c//dtd html 4.01 frameset//',
        '-//w3c//dtd html 4.01 transitional//'
    ]),
    QUIRKS_MODE_PUBLIC_IDS = [
        '-//w3o//dtd w3 html strict 3.0//en//',
        '-/w3c/dtd html 4.0 transitional/en',
        'html'
    ],
    LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = [
        '-//W3C//DTD XHTML 1.0 Frameset//',
        '-//W3C//DTD XHTML 1.0 Transitional//'
    ],
    LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
        '-//W3C//DTD HTML 4.01 Frameset//',
        '-//W3C//DTD HTML 4.01 Transitional//'
    ]);


//Utils
function enquoteDoctypeId(id) {
    var quote = id.indexOf('"') !== -1 ? '\'' : '"';

    return quote + id + quote;
}

function hasPrefix(publicId, prefixes) {
    for (var i = 0; i < prefixes.length; i++) {
        if (publicId.indexOf(prefixes[i]) === 0)
            return true;
    }

    return false;
}


//API
exports.getDocumentMode = function (name, publicId, systemId) {
    if (name !== VALID_DOCTYPE_NAME)
        return DOCUMENT_MODE.QUIRKS;

    if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID)
        return DOCUMENT_MODE.QUIRKS;

    if (publicId !== null) {
        publicId = publicId.toLowerCase();

        if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1)
            return DOCUMENT_MODE.QUIRKS;

        var prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;

        if (hasPrefix(publicId, prefixes))
            return DOCUMENT_MODE.QUIRKS;

        prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;

        if (hasPrefix(publicId, prefixes))
            return DOCUMENT_MODE.LIMITED_QUIRKS;
    }

    return DOCUMENT_MODE.NO_QUIRKS;
};

exports.serializeContent = function (name, publicId, systemId) {
    var str = '!DOCTYPE ';

    if (name)
        str += name;

    if (publicId !== null)
        str += ' PUBLIC ' + enquoteDoctypeId(publicId);

    else if (systemId !== null)
        str += ' SYSTEM';

    if (systemId !== null)
        str += ' ' + enquoteDoctypeId(systemId);

    return str;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function mergeOptions(defaults, options) {
    options = options || Object.create(null);

    return [defaults, options].reduce(function (merged, optObj) {
        Object.keys(optObj).forEach(function (key) {
            merged[key] = optObj[key];
        });

        return merged;
    }, Object.create(null));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Parser = __webpack_require__(25),
    Serializer = __webpack_require__(28);


// Shorthands
exports.parse = function parse(html, options) {
    var parser = new Parser(options);

    return parser.parse(html);
};

exports.parseFragment = function parseFragment(fragmentContext, html, options) {
    if (typeof fragmentContext === 'string') {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
    }

    var parser = new Parser(options);

    return parser.parseFragment(html, fragmentContext);
};

exports.serialize = function (node, options) {
    var serializer = new Serializer(node, options);

    return serializer.serialize();
};


// Tree adapters
exports.treeAdapters = {
    default: __webpack_require__(16),
    htmlparser2: __webpack_require__(95)
};


// Streaming
exports.ParserStream = __webpack_require__(27);
exports.PlainTextConversionStream = __webpack_require__(88);
exports.SerializerStream = __webpack_require__(92);
exports.SAXParser = __webpack_require__(90);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DOCUMENT_MODE = __webpack_require__(2).DOCUMENT_MODE;

//Node construction
exports.createDocument = function () {
    return {
        nodeName: '#document',
        mode: DOCUMENT_MODE.NO_QUIRKS,
        childNodes: []
    };
};

exports.createDocumentFragment = function () {
    return {
        nodeName: '#document-fragment',
        childNodes: []
    };
};

exports.createElement = function (tagName, namespaceURI, attrs) {
    return {
        nodeName: tagName,
        tagName: tagName,
        attrs: attrs,
        namespaceURI: namespaceURI,
        childNodes: [],
        parentNode: null
    };
};

exports.createCommentNode = function (data) {
    return {
        nodeName: '#comment',
        data: data,
        parentNode: null
    };
};

var createTextNode = function (value) {
    return {
        nodeName: '#text',
        value: value,
        parentNode: null
    };
};


//Tree mutation
var appendChild = exports.appendChild = function (parentNode, newNode) {
    parentNode.childNodes.push(newNode);
    newNode.parentNode = parentNode;
};

var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
    var insertionIdx = parentNode.childNodes.indexOf(referenceNode);

    parentNode.childNodes.splice(insertionIdx, 0, newNode);
    newNode.parentNode = parentNode;
};

exports.setTemplateContent = function (templateElement, contentElement) {
    templateElement.content = contentElement;
};

exports.getTemplateContent = function (templateElement) {
    return templateElement.content;
};

exports.setDocumentType = function (document, name, publicId, systemId) {
    var doctypeNode = null;

    for (var i = 0; i < document.childNodes.length; i++) {
        if (document.childNodes[i].nodeName === '#documentType') {
            doctypeNode = document.childNodes[i];
            break;
        }
    }

    if (doctypeNode) {
        doctypeNode.name = name;
        doctypeNode.publicId = publicId;
        doctypeNode.systemId = systemId;
    }

    else {
        appendChild(document, {
            nodeName: '#documentType',
            name: name,
            publicId: publicId,
            systemId: systemId
        });
    }
};

exports.setDocumentMode = function (document, mode) {
    document.mode = mode;
};

exports.getDocumentMode = function (document) {
    return document.mode;
};

exports.detachNode = function (node) {
    if (node.parentNode) {
        var idx = node.parentNode.childNodes.indexOf(node);

        node.parentNode.childNodes.splice(idx, 1);
        node.parentNode = null;
    }
};

exports.insertText = function (parentNode, text) {
    if (parentNode.childNodes.length) {
        var prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];

        if (prevNode.nodeName === '#text') {
            prevNode.value += text;
            return;
        }
    }

    appendChild(parentNode, createTextNode(text));
};

exports.insertTextBefore = function (parentNode, text, referenceNode) {
    var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];

    if (prevNode && prevNode.nodeName === '#text')
        prevNode.value += text;
    else
        insertBefore(parentNode, createTextNode(text), referenceNode);
};

exports.adoptAttributes = function (recipient, attrs) {
    var recipientAttrsMap = [];

    for (var i = 0; i < recipient.attrs.length; i++)
        recipientAttrsMap.push(recipient.attrs[i].name);

    for (var j = 0; j < attrs.length; j++) {
        if (recipientAttrsMap.indexOf(attrs[j].name) === -1)
            recipient.attrs.push(attrs[j]);
    }
};


//Tree traversing
exports.getFirstChild = function (node) {
    return node.childNodes[0];
};

exports.getChildNodes = function (node) {
    return node.childNodes;
};

exports.getParentNode = function (node) {
    return node.parentNode;
};

exports.getAttrList = function (element) {
    return element.attrs;
};

//Node data
exports.getTagName = function (element) {
    return element.tagName;
};

exports.getNamespaceURI = function (element) {
    return element.namespaceURI;
};

exports.getTextNodeContent = function (textNode) {
    return textNode.value;
};

exports.getCommentNodeContent = function (commentNode) {
    return commentNode.data;
};

exports.getDocumentTypeNodeName = function (doctypeNode) {
    return doctypeNode.name;
};

exports.getDocumentTypeNodePublicId = function (doctypeNode) {
    return doctypeNode.publicId;
};

exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
    return doctypeNode.systemId;
};

//Node types
exports.isTextNode = function (node) {
    return node.nodeName === '#text';
};

exports.isCommentNode = function (node) {
    return node.nodeName === '#comment';
};

exports.isDocumentTypeNode = function (node) {
    return node.nodeName === '#documentType';
};

exports.isElementNode = function (node) {
    return !!node.tagName;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(62);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Angular v4.1.2
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
	 true ? factory(exports, __webpack_require__(1), __webpack_require__(31), __webpack_require__(20), __webpack_require__(32), __webpack_require__(101), __webpack_require__(30), __webpack_require__(40), __webpack_require__(29), __webpack_require__(105), __webpack_require__(8), __webpack_require__(106), __webpack_require__(33), __webpack_require__(96)) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@angular/animations/browser', '@angular/common', '@angular/compiler', '@angular/http', '@angular/platform-browser/animations', 'rxjs/Observable', 'rxjs/Subject', 'url', 'rxjs/operator/filter', 'rxjs/operator/first', 'rxjs/operator/toPromise'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.platformServer = global.ng.platformServer || {}),global.ng.core,global.ng.platformBrowser,global._angular_animations_browser,global.ng.common,global.ng.compiler,global._angular_http,global._angular_platformBrowser_animations,global.rxjs_Observable,global.rxjs_Subject,global.url,global.rxjs_operator_filter,global.rxjs_operator_first,global.rxjs_operator_toPromise));
}(this, (function (exports,_angular_core,_angular_platformBrowser,_angular_animations_browser,_angular_common,_angular_compiler,_angular_http,_angular_platformBrowser_animations,rxjs_Observable,rxjs_Subject,url,rxjs_operator_filter,rxjs_operator_first,rxjs_operator_toPromise) { 'use strict';

var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.2
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var parse5 = __webpack_require__(15);
/**
 * Representation of the current platform state.
 *
 * \@experimental
 */
var PlatformState = (function () {
    /**
     * @param {?} _doc
     */
    function PlatformState(_doc) {
        this._doc = _doc;
    }
    /**
     * Renders the current state of the platform to string.
     * @return {?}
     */
    PlatformState.prototype.renderToString = function () { return _angular_platformBrowser.ɵgetDOM().getInnerHTML(this._doc); };
    /**
     * Returns the current DOM state.
     * @return {?}
     */
    PlatformState.prototype.getDocument = function () { return this._doc; };
    return PlatformState;
}());
PlatformState.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
PlatformState.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var xhr2 = __webpack_require__(100);
var isAbsoluteUrl = /^[a-zA-Z\-\+.]+:\/\//;
/**
 * @param {?} url
 * @return {?}
 */
function validateRequestUrl(url$$1) {
    if (!isAbsoluteUrl.test(url$$1)) {
        throw new Error("URLs requested via Http on the server must be absolute. URL: " + url$$1);
    }
}
var ServerXhr = (function () {
    function ServerXhr() {
    }
    /**
     * @return {?}
     */
    ServerXhr.prototype.build = function () { return new xhr2.XMLHttpRequest(); };
    return ServerXhr;
}());
ServerXhr.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
ServerXhr.ctorParameters = function () { return []; };
var ServerXsrfStrategy = (function () {
    function ServerXsrfStrategy() {
    }
    /**
     * @param {?} req
     * @return {?}
     */
    ServerXsrfStrategy.prototype.configureRequest = function (req) { };
    return ServerXsrfStrategy;
}());
ServerXsrfStrategy.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
ServerXsrfStrategy.ctorParameters = function () { return []; };
var ZoneMacroTaskConnection = (function () {
    /**
     * @param {?} request
     * @param {?} backend
     */
    function ZoneMacroTaskConnection(request, backend) {
        var _this = this;
        this.request = request;
        validateRequestUrl(request.url);
        this.response = new rxjs_Observable.Observable(function (observer) {
            var task = null;
            var scheduled = false;
            var sub = null;
            var savedResult = null;
            var savedError = null;
            var scheduleTask = function (_task) {
                task = _task;
                scheduled = true;
                _this.lastConnection = backend.createConnection(request);
                sub = _this.lastConnection.response
                    .subscribe(function (res) { return savedResult = res; }, function (err) {
                    if (!scheduled) {
                        throw new Error('invoke twice');
                    }
                    savedError = err;
                    scheduled = false;
                    task.invoke();
                }, function () {
                    if (!scheduled) {
                        throw new Error('invoke twice');
                    }
                    scheduled = false;
                    task.invoke();
                });
            };
            var cancelTask = function (_task) {
                if (!scheduled) {
                    return;
                }
                scheduled = false;
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            };
            var onComplete = function () {
                if (savedError !== null) {
                    observer.error(savedError);
                }
                else {
                    observer.next(savedResult);
                    observer.complete();
                }
            };
            // MockBackend is currently synchronous, which means that if scheduleTask is by
            // scheduleMacroTask, the request will hit MockBackend and the response will be
            // sent, causing task.invoke() to be called.
            var _task = Zone.current.scheduleMacroTask('ZoneMacroTaskConnection.subscribe', onComplete, {}, function () { return null; }, cancelTask);
            scheduleTask(_task);
            return function () {
                if (scheduled && task) {
                    task.zone.cancelTask(task);
                    scheduled = false;
                }
                if (sub) {
                    sub.unsubscribe();
                    sub = null;
                }
            };
        });
    }
    Object.defineProperty(ZoneMacroTaskConnection.prototype, "readyState", {
        /**
         * @return {?}
         */
        get: function () {
            return !!this.lastConnection ? this.lastConnection.readyState : _angular_http.ReadyState.Unsent;
        },
        enumerable: true,
        configurable: true
    });
    return ZoneMacroTaskConnection;
}());
var ZoneMacroTaskBackend = (function () {
    /**
     * @param {?} backend
     */
    function ZoneMacroTaskBackend(backend) {
        this.backend = backend;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    ZoneMacroTaskBackend.prototype.createConnection = function (request) {
        return new ZoneMacroTaskConnection(request, this.backend);
    };
    return ZoneMacroTaskBackend;
}());
/**
 * @param {?} xhrBackend
 * @param {?} options
 * @return {?}
 */
function httpFactory(xhrBackend, options) {
    var /** @type {?} */ macroBackend = new ZoneMacroTaskBackend(xhrBackend);
    return new _angular_http.Http(macroBackend, options);
}
var SERVER_HTTP_PROVIDERS = [
    { provide: _angular_http.Http, useFactory: httpFactory, deps: [_angular_http.XHRBackend, _angular_http.RequestOptions] },
    { provide: _angular_http.BrowserXhr, useClass: ServerXhr },
    { provide: _angular_http.XSRFStrategy, useClass: ServerXsrfStrategy },
];
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The DI token for setting the initial config for the platform.
 *
 * \@experimental
 */
var INITIAL_CONFIG = new _angular_core.InjectionToken('Server.INITIAL_CONFIG');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} urlStr
 * @return {?}
 */
function parseUrl(urlStr) {
    var /** @type {?} */ parsedUrl = url.parse(urlStr);
    return {
        pathname: parsedUrl.pathname || '',
        search: parsedUrl.search || '',
        hash: parsedUrl.hash || '',
    };
}
/**
 * Server-side implementation of URL state. Implements `pathname`, `search`, and `hash`
 * but not the state stack.
 */
var ServerPlatformLocation = (function () {
    /**
     * @param {?} _doc
     * @param {?} _config
     */
    function ServerPlatformLocation(_doc, _config) {
        this._doc = _doc;
        this._path = '/';
        this._search = '';
        this._hash = '';
        this._hashUpdate = new rxjs_Subject.Subject();
        var config = _config;
        if (!!config && !!config.url) {
            var parsedUrl = parseUrl(config.url);
            this._path = parsedUrl.pathname;
            this._search = parsedUrl.search;
            this._hash = parsedUrl.hash;
        }
    }
    /**
     * @return {?}
     */
    ServerPlatformLocation.prototype.getBaseHrefFromDOM = function () { return ((_angular_platformBrowser.ɵgetDOM().getBaseHref(this._doc))); };
    /**
     * @param {?} fn
     * @return {?}
     */
    ServerPlatformLocation.prototype.onPopState = function (fn) {
        // No-op: a state stack is not implemented, so
        // no events will ever come.
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ServerPlatformLocation.prototype.onHashChange = function (fn) { this._hashUpdate.subscribe(fn); };
    Object.defineProperty(ServerPlatformLocation.prototype, "pathname", {
        /**
         * @return {?}
         */
        get: function () { return this._path; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlatformLocation.prototype, "search", {
        /**
         * @return {?}
         */
        get: function () { return this._search; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlatformLocation.prototype, "hash", {
        /**
         * @return {?}
         */
        get: function () { return this._hash; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerPlatformLocation.prototype, "url", {
        /**
         * @return {?}
         */
        get: function () { return "" + this.pathname + this.search + this.hash; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} oldUrl
     * @return {?}
     */
    ServerPlatformLocation.prototype.setHash = function (value, oldUrl) {
        var _this = this;
        if (this._hash === value) {
            // Don't fire events if the hash has not changed.
            return;
        }
        this._hash = value;
        var /** @type {?} */ newUrl = this.url;
        scheduleMicroTask(function () { return _this._hashUpdate.next(/** @type {?} */ ({ type: 'hashchange', oldUrl: oldUrl, newUrl: newUrl })); });
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} newUrl
     * @return {?}
     */
    ServerPlatformLocation.prototype.replaceState = function (state, title, newUrl) {
        var /** @type {?} */ oldUrl = this.url;
        var /** @type {?} */ parsedUrl = parseUrl(newUrl);
        this._path = parsedUrl.pathname;
        this._search = parsedUrl.search;
        this.setHash(parsedUrl.hash, oldUrl);
    };
    /**
     * @param {?} state
     * @param {?} title
     * @param {?} newUrl
     * @return {?}
     */
    ServerPlatformLocation.prototype.pushState = function (state, title, newUrl) {
        this.replaceState(state, title, newUrl);
    };
    /**
     * @return {?}
     */
    ServerPlatformLocation.prototype.forward = function () { throw new Error('Not implemented'); };
    /**
     * @return {?}
     */
    ServerPlatformLocation.prototype.back = function () { throw new Error('Not implemented'); };
    return ServerPlatformLocation;
}());
ServerPlatformLocation.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
ServerPlatformLocation.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [INITIAL_CONFIG,] },] },
]; };
/**
 * @param {?} fn
 * @return {?}
 */
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var parse5$1 = __webpack_require__(15);
var treeAdapter;
var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex',
};
var mapProps = ['attribs', 'x-attribsNamespace', 'x-attribsPrefix'];
/**
 * @param {?} methodName
 * @return {?}
 */
function _notImplemented(methodName) {
    return new Error('This method is not implemented in Parse5DomAdapter: ' + methodName);
}
/**
 * @param {?} el
 * @param {?} name
 * @return {?}
 */
function _getElement(el, name) {
    for (var /** @type {?} */ i = 0; i < el.childNodes.length; i++) {
        var /** @type {?} */ node = el.childNodes[i];
        if (node.name === name) {
            return node;
        }
    }
    return null;
}
/**
 * Parses a document string to a Document object.
 * @param {?} html
 * @return {?}
 */
function parseDocument(html) {
    var /** @type {?} */ doc = parse5$1.parse(html, { treeAdapter: parse5$1.treeAdapters.htmlparser2 });
    var /** @type {?} */ docElement = _getElement(doc, 'html');
    doc['head'] = _getElement(docElement, 'head');
    doc['body'] = _getElement(docElement, 'body');
    doc['_window'] = {};
    return doc;
}
/**
 * A `DomAdapter` powered by the `parse5` NodeJS module.
 *
 * \@security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
var Parse5DomAdapter = (function (_super) {
    __extends(Parse5DomAdapter, _super);
    function Parse5DomAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    Parse5DomAdapter.makeCurrent = function () {
        treeAdapter = parse5$1.treeAdapters.htmlparser2;
        _angular_platformBrowser.ɵsetRootDomAdapter(new Parse5DomAdapter());
    };
    /**
     * @param {?} nodeA
     * @param {?} nodeB
     * @return {?}
     */
    Parse5DomAdapter.prototype.contains = function (nodeA, nodeB) {
        var /** @type {?} */ inner = nodeB;
        while (inner) {
            if (inner === nodeA)
                return true;
            inner = inner.parent;
        }
        return false;
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    Parse5DomAdapter.prototype.hasProperty = function (element, name) {
        return _HTMLElementPropertyList.indexOf(name) > -1;
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setProperty = function (el, name, value) {
        if (name === 'innerHTML') {
            this.setInnerHTML(el, value);
        }
        else if (name === 'innerText') {
            this.setText(el, value);
        }
        else if (name === 'className') {
            el.attribs['class'] = el.className = value;
        }
        else {
            el[name] = value;
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    Parse5DomAdapter.prototype.getProperty = function (el, name) { return el[name]; };
    /**
     * @param {?} error
     * @return {?}
     */
    Parse5DomAdapter.prototype.logError = function (error) { console.error(error); };
    /**
     * @param {?} error
     * @return {?}
     */
    Parse5DomAdapter.prototype.log = function (error) { console.log(error); };
    /**
     * @param {?} error
     * @return {?}
     */
    Parse5DomAdapter.prototype.logGroup = function (error) { console.error(error); };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.logGroupEnd = function () { };
    Object.defineProperty(Parse5DomAdapter.prototype, "attrToPropMap", {
        /**
         * @return {?}
         */
        get: function () { return _attrToPropMap; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    Parse5DomAdapter.prototype.querySelector = function (el, selector) {
        return this.querySelectorAll(el, selector)[0] || null;
    };
    /**
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    Parse5DomAdapter.prototype.querySelectorAll = function (el, selector) {
        var _this = this;
        var /** @type {?} */ res = [];
        var /** @type {?} */ _recursive = function (result, node, selector, matcher) {
            var /** @type {?} */ cNodes = node.childNodes;
            if (cNodes && cNodes.length > 0) {
                for (var /** @type {?} */ i = 0; i < cNodes.length; i++) {
                    var /** @type {?} */ childNode = cNodes[i];
                    if (_this.elementMatches(childNode, selector, matcher)) {
                        result.push(childNode);
                    }
                    _recursive(result, childNode, selector, matcher);
                }
            }
        };
        var /** @type {?} */ matcher = new _angular_compiler.SelectorMatcher();
        matcher.addSelectables(_angular_compiler.CssSelector.parse(selector));
        _recursive(res, el, selector, matcher);
        return res;
    };
    /**
     * @param {?} node
     * @param {?} selector
     * @param {?=} matcher
     * @return {?}
     */
    Parse5DomAdapter.prototype.elementMatches = function (node, selector, matcher) {
        if (matcher === void 0) { matcher = null; }
        if (this.isElementNode(node) && selector === '*') {
            return true;
        }
        var /** @type {?} */ result = false;
        if (selector && selector.charAt(0) == '#') {
            result = this.getAttribute(node, 'id') == selector.substring(1);
        }
        else if (selector) {
            if (!matcher) {
                matcher = new _angular_compiler.SelectorMatcher();
                matcher.addSelectables(_angular_compiler.CssSelector.parse(selector));
            }
            var /** @type {?} */ cssSelector = new _angular_compiler.CssSelector();
            cssSelector.setElement(this.tagName(node));
            if (node.attribs) {
                for (var /** @type {?} */ attrName in node.attribs) {
                    cssSelector.addAttribute(attrName, node.attribs[attrName]);
                }
            }
            var /** @type {?} */ classList = this.classList(node);
            for (var /** @type {?} */ i = 0; i < classList.length; i++) {
                cssSelector.addClassName(classList[i]);
            }
            matcher.match(cssSelector, function (selector, cb) { result = true; });
        }
        return result;
    };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    Parse5DomAdapter.prototype.on = function (el, evt, listener) {
        var /** @type {?} */ listenersMap = el._eventListenersMap;
        if (!listenersMap) {
            listenersMap = {};
            el._eventListenersMap = listenersMap;
        }
        var /** @type {?} */ listeners = listenersMap[evt] || [];
        listenersMap[evt] = listeners.concat([listener]);
    };
    /**
     * @param {?} el
     * @param {?} evt
     * @param {?} listener
     * @return {?}
     */
    Parse5DomAdapter.prototype.onAndCancel = function (el, evt, listener) {
        this.on(el, evt, listener);
        return function () { remove(/** @type {?} */ ((el._eventListenersMap[evt])), listener); };
    };
    /**
     * @param {?} el
     * @param {?} evt
     * @return {?}
     */
    Parse5DomAdapter.prototype.dispatchEvent = function (el, evt) {
        if (!evt.target) {
            evt.target = el;
        }
        if (el._eventListenersMap) {
            var /** @type {?} */ listeners = el._eventListenersMap[evt.type];
            if (listeners) {
                for (var /** @type {?} */ i = 0; i < listeners.length; i++) {
                    listeners[i](evt);
                }
            }
        }
        if (el.parent) {
            this.dispatchEvent(el.parent, evt);
        }
        if (el._window) {
            this.dispatchEvent(el._window, evt);
        }
    };
    /**
     * @param {?} eventType
     * @return {?}
     */
    Parse5DomAdapter.prototype.createMouseEvent = function (eventType) { return this.createEvent(eventType); };
    /**
     * @param {?} eventType
     * @return {?}
     */
    Parse5DomAdapter.prototype.createEvent = function (eventType) {
        var /** @type {?} */ event = ({
            type: eventType,
            defaultPrevented: false,
            preventDefault: function () { ((event)).defaultPrevented = true; }
        });
        return event;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Parse5DomAdapter.prototype.preventDefault = function (event) { event.returnValue = false; };
    /**
     * @param {?} event
     * @return {?}
     */
    Parse5DomAdapter.prototype.isPrevented = function (event) { return event.returnValue != null && !event.returnValue; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getInnerHTML = function (el) {
        return parse5$1.serialize(this.templateAwareRoot(el), { treeAdapter: treeAdapter });
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getTemplateContent = function (el) { return null; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getOuterHTML = function (el) {
        var /** @type {?} */ fragment = treeAdapter.createDocumentFragment();
        this.appendChild(fragment, el);
        return parse5$1.serialize(fragment, { treeAdapter: treeAdapter });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.nodeName = function (node) { return node.tagName; };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.nodeValue = function (node) { return node.nodeValue; };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.type = function (node) { throw _notImplemented('type'); };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.content = function (node) { return node.childNodes[0]; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.firstChild = function (el) { return el.firstChild; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.nextSibling = function (el) { return el.nextSibling; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.parentElement = function (el) { return el.parent; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.childNodes = function (el) { return el.childNodes; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.childNodesAsList = function (el) {
        var /** @type {?} */ childNodes = el.childNodes;
        var /** @type {?} */ res = new Array(childNodes.length);
        for (var /** @type {?} */ i = 0; i < childNodes.length; i++) {
            res[i] = childNodes[i];
        }
        return res;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.clearNodes = function (el) {
        while (el.childNodes.length > 0) {
            this.remove(el.childNodes[0]);
        }
    };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.appendChild = function (el, node) {
        this.remove(node);
        treeAdapter.appendChild(this.templateAwareRoot(el), node);
    };
    /**
     * @param {?} el
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.removeChild = function (el, node) {
        if (el.childNodes.indexOf(node) > -1) {
            this.remove(node);
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.remove = function (el) {
        var /** @type {?} */ parent = el.parent;
        if (parent) {
            var /** @type {?} */ index = parent.childNodes.indexOf(el);
            parent.childNodes.splice(index, 1);
        }
        var /** @type {?} */ prev = el.previousSibling;
        var /** @type {?} */ next = el.nextSibling;
        if (prev) {
            prev.next = next;
        }
        if (next) {
            next.prev = prev;
        }
        el.prev = null;
        el.next = null;
        el.parent = null;
        return el;
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} newNode
     * @return {?}
     */
    Parse5DomAdapter.prototype.insertBefore = function (parent, ref, newNode) {
        this.remove(newNode);
        if (ref) {
            treeAdapter.insertBefore(parent, newNode, ref);
        }
        else {
            this.appendChild(parent, newNode);
        }
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} nodes
     * @return {?}
     */
    Parse5DomAdapter.prototype.insertAllBefore = function (parent, ref, nodes) {
        var _this = this;
        nodes.forEach(function (n) { return _this.insertBefore(parent, ref, n); });
    };
    /**
     * @param {?} parent
     * @param {?} ref
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.insertAfter = function (parent, ref, node) {
        if (ref.nextSibling) {
            this.insertBefore(parent, ref.nextSibling, node);
        }
        else {
            this.appendChild(parent, node);
        }
    };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setInnerHTML = function (el, value) {
        this.clearNodes(el);
        var /** @type {?} */ content = parse5$1.parseFragment(value, { treeAdapter: treeAdapter });
        for (var /** @type {?} */ i = 0; i < content.childNodes.length; i++) {
            treeAdapter.appendChild(el, content.childNodes[i]);
        }
    };
    /**
     * @param {?} el
     * @param {?=} isRecursive
     * @return {?}
     */
    Parse5DomAdapter.prototype.getText = function (el, isRecursive) {
        if (this.isTextNode(el)) {
            return el.data;
        }
        if (this.isCommentNode(el)) {
            // In the DOM, comments within an element return an empty string for textContent
            // However, comment node instances return the comment content for textContent getter
            return isRecursive ? '' : el.data;
        }
        if (!el.childNodes || el.childNodes.length == 0) {
            return '';
        }
        var /** @type {?} */ textContent = '';
        for (var /** @type {?} */ i = 0; i < el.childNodes.length; i++) {
            textContent += this.getText(el.childNodes[i], true);
        }
        return textContent;
    };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setText = function (el, value) {
        if (this.isTextNode(el) || this.isCommentNode(el)) {
            el.data = value;
        }
        else {
            this.clearNodes(el);
            if (value !== '')
                treeAdapter.insertText(el, value);
        }
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getValue = function (el) { return el.value; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setValue = function (el, value) { el.value = value; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getChecked = function (el) { return el.checked; };
    /**
     * @param {?} el
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setChecked = function (el, value) { el.checked = value; };
    /**
     * @param {?} text
     * @return {?}
     */
    Parse5DomAdapter.prototype.createComment = function (text) { return treeAdapter.createCommentNode(text); };
    /**
     * @param {?} html
     * @return {?}
     */
    Parse5DomAdapter.prototype.createTemplate = function (html) {
        var /** @type {?} */ template = treeAdapter.createElement('template', 'http://www.w3.org/1999/xhtml', []);
        var /** @type {?} */ content = parse5$1.parseFragment(html, { treeAdapter: treeAdapter });
        treeAdapter.setTemplateContent(template, content);
        return template;
    };
    /**
     * @param {?} tagName
     * @return {?}
     */
    Parse5DomAdapter.prototype.createElement = function (tagName) {
        return treeAdapter.createElement(tagName, 'http://www.w3.org/1999/xhtml', []);
    };
    /**
     * @param {?} ns
     * @param {?} tagName
     * @return {?}
     */
    Parse5DomAdapter.prototype.createElementNS = function (ns, tagName) {
        return treeAdapter.createElement(tagName, ns, []);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    Parse5DomAdapter.prototype.createTextNode = function (text) {
        var /** @type {?} */ t = (this.createComment(text));
        t.type = 'text';
        return t;
    };
    /**
     * @param {?} attrName
     * @param {?} attrValue
     * @return {?}
     */
    Parse5DomAdapter.prototype.createScriptTag = function (attrName, attrValue) {
        return treeAdapter.createElement('script', 'http://www.w3.org/1999/xhtml', [{ name: attrName, value: attrValue }]);
    };
    /**
     * @param {?} css
     * @return {?}
     */
    Parse5DomAdapter.prototype.createStyleElement = function (css) {
        var /** @type {?} */ style = this.createElement('style');
        this.setText(style, css);
        return (style);
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.createShadowRoot = function (el) {
        el.shadowRoot = treeAdapter.createDocumentFragment();
        el.shadowRoot.parent = el;
        return el.shadowRoot;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getHost = function (el) { return el.host; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getDistributedNodes = function (el) { throw _notImplemented('getDistributedNodes'); };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.clone = function (node) {
        var /** @type {?} */ _recursive = function (node) {
            var /** @type {?} */ nodeClone = Object.create(Object.getPrototypeOf(node));
            for (var /** @type {?} */ prop in node) {
                var /** @type {?} */ desc = Object.getOwnPropertyDescriptor(node, prop);
                if (desc && 'value' in desc && typeof desc.value !== 'object') {
                    nodeClone[prop] = node[prop];
                }
            }
            nodeClone.parent = null;
            nodeClone.prev = null;
            nodeClone.next = null;
            nodeClone.children = null;
            mapProps.forEach(function (mapName) {
                if (node[mapName] != null) {
                    nodeClone[mapName] = {};
                    for (var /** @type {?} */ prop in node[mapName]) {
                        nodeClone[mapName][prop] = node[mapName][prop];
                    }
                }
            });
            var /** @type {?} */ cNodes = node.children;
            if (cNodes) {
                var /** @type {?} */ cNodesClone = new Array(cNodes.length);
                for (var /** @type {?} */ i = 0; i < cNodes.length; i++) {
                    var /** @type {?} */ childNode = cNodes[i];
                    var /** @type {?} */ childNodeClone = _recursive(childNode);
                    cNodesClone[i] = childNodeClone;
                    if (i > 0) {
                        childNodeClone.prev = cNodesClone[i - 1];
                        cNodesClone[i - 1].next = childNodeClone;
                    }
                    childNodeClone.parent = nodeClone;
                }
                nodeClone.children = cNodesClone;
            }
            return nodeClone;
        };
        return _recursive(node);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    Parse5DomAdapter.prototype.getElementsByClassName = function (element, name) {
        return this.querySelectorAll(element, '.' + name);
    };
    /**
     * @param {?} element
     * @param {?} name
     * @return {?}
     */
    Parse5DomAdapter.prototype.getElementsByTagName = function (element, name) {
        return this.querySelectorAll(element, name);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Parse5DomAdapter.prototype.classList = function (element) {
        var /** @type {?} */ classAttrValue = null;
        var /** @type {?} */ attributes = element.attribs;
        if (attributes && attributes['class'] != null) {
            classAttrValue = attributes['class'];
        }
        return classAttrValue ? classAttrValue.trim().split(/\s+/g) : [];
    };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    Parse5DomAdapter.prototype.addClass = function (element, className) {
        var /** @type {?} */ classList = this.classList(element);
        var /** @type {?} */ index = classList.indexOf(className);
        if (index == -1) {
            classList.push(className);
            element.attribs['class'] = element.className = classList.join(' ');
        }
    };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    Parse5DomAdapter.prototype.removeClass = function (element, className) {
        var /** @type {?} */ classList = this.classList(element);
        var /** @type {?} */ index = classList.indexOf(className);
        if (index > -1) {
            classList.splice(index, 1);
            element.attribs['class'] = element.className = classList.join(' ');
        }
    };
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    Parse5DomAdapter.prototype.hasClass = function (element, className) {
        return this.classList(element).indexOf(className) > -1;
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    Parse5DomAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
        var /** @type {?} */ value = this.getStyle(element, styleName) || '';
        return styleValue ? value == styleValue : value.length > 0;
    };
    /**
     * \@internal
     * @param {?} element
     * @return {?}
     */
    Parse5DomAdapter.prototype._readStyleAttribute = function (element) {
        var /** @type {?} */ styleMap = {};
        var /** @type {?} */ attributes = element.attribs;
        if (attributes && attributes['style'] != null) {
            var /** @type {?} */ styleAttrValue = attributes['style'];
            var /** @type {?} */ styleList = styleAttrValue.split(/;+/g);
            for (var /** @type {?} */ i = 0; i < styleList.length; i++) {
                if (styleList[i].length > 0) {
                    var /** @type {?} */ style = (styleList[i]);
                    var /** @type {?} */ colon = style.indexOf(':');
                    if (colon === -1) {
                        throw new Error("Invalid CSS style: " + style);
                    }
                    ((styleMap))[style.substr(0, colon).trim()] = style.substr(colon + 1).trim();
                }
            }
        }
        return styleMap;
    };
    /**
     * \@internal
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    Parse5DomAdapter.prototype._writeStyleAttribute = function (element, styleMap) {
        var /** @type {?} */ styleAttrValue = '';
        for (var /** @type {?} */ key in styleMap) {
            var /** @type {?} */ newValue = styleMap[key];
            if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
            }
        }
        element.attribs['style'] = styleAttrValue;
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    Parse5DomAdapter.prototype.setStyle = function (element, styleName, styleValue) {
        var /** @type {?} */ styleMap = this._readStyleAttribute(element);
        ((styleMap))[styleName] = styleValue;
        this._writeStyleAttribute(element, styleMap);
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    Parse5DomAdapter.prototype.removeStyle = function (element, styleName) { this.setStyle(element, styleName, null); };
    /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    Parse5DomAdapter.prototype.getStyle = function (element, styleName) {
        var /** @type {?} */ styleMap = this._readStyleAttribute(element);
        return styleMap.hasOwnProperty(styleName) ? ((styleMap))[styleName] : '';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Parse5DomAdapter.prototype.tagName = function (element) { return element.tagName == 'style' ? 'STYLE' : element.tagName; };
    /**
     * @param {?} element
     * @return {?}
     */
    Parse5DomAdapter.prototype.attributeMap = function (element) {
        var /** @type {?} */ res = new Map();
        var /** @type {?} */ elAttrs = treeAdapter.getAttrList(element);
        for (var /** @type {?} */ i = 0; i < elAttrs.length; i++) {
            var /** @type {?} */ attrib = elAttrs[i];
            res.set(attrib.name, attrib.value);
        }
        return res;
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    Parse5DomAdapter.prototype.hasAttribute = function (element, attribute) {
        return element.attribs && element.attribs[attribute] != null;
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    Parse5DomAdapter.prototype.hasAttributeNS = function (element, ns, attribute) {
        return this.hasAttribute(element, attribute);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    Parse5DomAdapter.prototype.getAttribute = function (element, attribute) {
        return this.hasAttribute(element, attribute) ? element.attribs[attribute] : null;
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @return {?}
     */
    Parse5DomAdapter.prototype.getAttributeNS = function (element, ns, attribute) {
        return this.getAttribute(element, attribute);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setAttribute = function (element, attribute, value) {
        if (attribute) {
            element.attribs[attribute] = value;
            if (attribute === 'class') {
                element.className = value;
            }
        }
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setAttributeNS = function (element, ns, attribute, value) {
        this.setAttribute(element, attribute, value);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    Parse5DomAdapter.prototype.removeAttribute = function (element, attribute) {
        if (attribute) {
            delete element.attribs[attribute];
        }
    };
    /**
     * @param {?} element
     * @param {?} ns
     * @param {?} name
     * @return {?}
     */
    Parse5DomAdapter.prototype.removeAttributeNS = function (element, ns, name) { throw 'not implemented'; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.templateAwareRoot = function (el) {
        return this.isTemplateElement(el) ? treeAdapter.getTemplateContent(el) : el;
    };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.createHtmlDocument = function () {
        var /** @type {?} */ newDoc = treeAdapter.createDocument();
        newDoc.title = 'fakeTitle';
        var /** @type {?} */ head = treeAdapter.createElement('head', null, []);
        var /** @type {?} */ body = treeAdapter.createElement('body', 'http://www.w3.org/1999/xhtml', []);
        this.appendChild(newDoc, head);
        this.appendChild(newDoc, body);
        newDoc['head'] = head;
        newDoc['body'] = body;
        newDoc['_window'] = {};
        return newDoc;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getBoundingClientRect = function (el) { return { left: 0, top: 0, width: 0, height: 0 }; };
    /**
     * @param {?} doc
     * @return {?}
     */
    Parse5DomAdapter.prototype.getTitle = function (doc) { return this.getText(this.getTitleNode(doc)) || ''; };
    /**
     * @param {?} doc
     * @param {?} newTitle
     * @return {?}
     */
    Parse5DomAdapter.prototype.setTitle = function (doc, newTitle) {
        this.setText(this.getTitleNode(doc), newTitle || '');
    };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.isTemplateElement = function (el) {
        return this.isElementNode(el) && this.tagName(el) === 'template';
    };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.isTextNode = function (node) { return treeAdapter.isTextNode(node); };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.isCommentNode = function (node) { return treeAdapter.isCommentNode(node); };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.isElementNode = function (node) { return node ? treeAdapter.isElementNode(node) : false; };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.hasShadowRoot = function (node) { return node.shadowRoot != null; };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.isShadowRoot = function (node) { return this.getShadowRoot(node) == node; };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.importIntoDoc = function (node) { return this.clone(node); };
    /**
     * @param {?} node
     * @return {?}
     */
    Parse5DomAdapter.prototype.adoptNode = function (node) { return node; };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getHref = function (el) { return this.getAttribute(el, 'href'); };
    /**
     * @param {?} el
     * @param {?} baseUrl
     * @param {?} href
     * @return {?}
     */
    Parse5DomAdapter.prototype.resolveAndSetHref = function (el, baseUrl, href) {
        if (href == null) {
            el.href = baseUrl;
        }
        else {
            el.href = baseUrl + '/../' + href;
        }
    };
    /**
     * \@internal
     * @param {?} parsedRules
     * @param {?=} css
     * @return {?}
     */
    Parse5DomAdapter.prototype._buildRules = function (parsedRules, css) {
        var /** @type {?} */ rules = [];
        for (var /** @type {?} */ i = 0; i < parsedRules.length; i++) {
            var /** @type {?} */ parsedRule = parsedRules[i];
            var /** @type {?} */ rule = {};
            rule['cssText'] = css;
            rule['style'] = { content: '', cssText: '' };
            if (parsedRule.type == 'rule') {
                rule['type'] = 1;
                rule['selectorText'] =
                    parsedRule.selectors.join(', '.replace(/\s{2,}/g, ' ')
                        .replace(/\s*~\s*/g, ' ~ ')
                        .replace(/\s*\+\s*/g, ' + ')
                        .replace(/\s*>\s*/g, ' > ')
                        .replace(/\[(\w+)=(\w+)\]/g, '[$1="$2"]'));
                if (parsedRule.declarations == null) {
                    continue;
                }
                for (var /** @type {?} */ j = 0; j < parsedRule.declarations.length; j++) {
                    var /** @type {?} */ declaration = parsedRule.declarations[j];
                    rule['style'] = declaration.property[declaration.value];
                    rule['style'].cssText += declaration.property + ': ' + declaration.value + ';';
                }
            }
            else if (parsedRule.type == 'media') {
                rule['type'] = 4;
                rule['media'] = { mediaText: parsedRule.media };
                if (parsedRule.rules) {
                    rule['cssRules'] = this._buildRules(parsedRule.rules);
                }
            }
            rules.push(rule);
        }
        return rules;
    };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.supportsDOMEvents = function () { return false; };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.supportsNativeShadowDOM = function () { return false; };
    /**
     * @param {?} doc
     * @param {?} target
     * @return {?}
     */
    Parse5DomAdapter.prototype.getGlobalEventTarget = function (doc, target) {
        if (target == 'window') {
            return ((doc))._window;
        }
        else if (target == 'document') {
            return doc;
        }
        else if (target == 'body') {
            return doc.body;
        }
    };
    /**
     * @param {?} doc
     * @return {?}
     */
    Parse5DomAdapter.prototype.getBaseHref = function (doc) {
        var /** @type {?} */ base = this.querySelector(doc, 'base');
        var /** @type {?} */ href = '';
        if (base) {
            href = this.getHref(base);
        }
        // TODO(alxhub): Need relative path logic from BrowserDomAdapter here?
        return href == null ? null : href;
    };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.resetBaseElement = function () { throw 'not implemented'; };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.getHistory = function () { throw 'not implemented'; };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.getLocation = function () { throw 'not implemented'; };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.getUserAgent = function () { return 'Fake user agent'; };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    Parse5DomAdapter.prototype.getData = function (el, name) { return this.getAttribute(el, 'data-' + name); };
    /**
     * @param {?} el
     * @return {?}
     */
    Parse5DomAdapter.prototype.getComputedStyle = function (el) { throw 'not implemented'; };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setData = function (el, name, value) { this.setAttribute(el, 'data-' + name, value); };
    /**
     * @param {?} path
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setGlobalVar = function (path, value) { _angular_platformBrowser.ɵsetValueOnPath(_angular_core.ɵglobal, path, value); };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.supportsWebAnimation = function () { return false; };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.performanceNow = function () { return Date.now(); };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.getAnimationPrefix = function () { return ''; };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.getTransitionEnd = function () { return 'transitionend'; };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.supportsAnimation = function () { return true; };
    /**
     * @param {?} el
     * @param {?} newNode
     * @param {?} oldNode
     * @return {?}
     */
    Parse5DomAdapter.prototype.replaceChild = function (el, newNode, oldNode) { throw new Error('not implemented'); };
    /**
     * @param {?} templateHtml
     * @return {?}
     */
    Parse5DomAdapter.prototype.parse = function (templateHtml) { throw new Error('not implemented'); };
    /**
     * @param {?} el
     * @param {?} methodName
     * @param {?} args
     * @return {?}
     */
    Parse5DomAdapter.prototype.invoke = function (el, methodName, args) { throw new Error('not implemented'); };
    /**
     * @param {?} event
     * @return {?}
     */
    Parse5DomAdapter.prototype.getEventKey = function (event) { throw new Error('not implemented'); };
    /**
     * @return {?}
     */
    Parse5DomAdapter.prototype.supportsCookies = function () { return false; };
    /**
     * @param {?} name
     * @return {?}
     */
    Parse5DomAdapter.prototype.getCookie = function (name) { throw new Error('not implemented'); };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Parse5DomAdapter.prototype.setCookie = function (name, value) { throw new Error('not implemented'); };
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @return {?}
     */
    Parse5DomAdapter.prototype.animate = function (element, keyframes, options) { throw new Error('not implemented'); };
    /**
     * @param {?} doc
     * @return {?}
     */
    Parse5DomAdapter.prototype.getTitleNode = function (doc) {
        var /** @type {?} */ title = this.querySelector(doc, 'title');
        if (!title) {
            title = (this.createElement('title'));
            this.appendChild(this.querySelector(doc, 'head'), title);
        }
        return title;
    };
    return Parse5DomAdapter;
}(_angular_platformBrowser.ɵDomAdapter));
// TODO: build a proper list, this one is all the keys of a HTMLInputElement
var _HTMLElementPropertyList = [
    'webkitEntries',
    'incremental',
    'webkitdirectory',
    'selectionDirection',
    'selectionEnd',
    'selectionStart',
    'labels',
    'validationMessage',
    'validity',
    'willValidate',
    'width',
    'valueAsNumber',
    'valueAsDate',
    'value',
    'useMap',
    'defaultValue',
    'type',
    'step',
    'src',
    'size',
    'required',
    'readOnly',
    'placeholder',
    'pattern',
    'name',
    'multiple',
    'min',
    'minLength',
    'maxLength',
    'max',
    'list',
    'indeterminate',
    'height',
    'formTarget',
    'formNoValidate',
    'formMethod',
    'formEnctype',
    'formAction',
    'files',
    'form',
    'disabled',
    'dirName',
    'checked',
    'defaultChecked',
    'autofocus',
    'autocomplete',
    'alt',
    'align',
    'accept',
    'onautocompleteerror',
    'onautocomplete',
    'onwaiting',
    'onvolumechange',
    'ontoggle',
    'ontimeupdate',
    'onsuspend',
    'onsubmit',
    'onstalled',
    'onshow',
    'onselect',
    'onseeking',
    'onseeked',
    'onscroll',
    'onresize',
    'onreset',
    'onratechange',
    'onprogress',
    'onplaying',
    'onplay',
    'onpause',
    'onmousewheel',
    'onmouseup',
    'onmouseover',
    'onmouseout',
    'onmousemove',
    'onmouseleave',
    'onmouseenter',
    'onmousedown',
    'onloadstart',
    'onloadedmetadata',
    'onloadeddata',
    'onload',
    'onkeyup',
    'onkeypress',
    'onkeydown',
    'oninvalid',
    'oninput',
    'onfocus',
    'onerror',
    'onended',
    'onemptied',
    'ondurationchange',
    'ondrop',
    'ondragstart',
    'ondragover',
    'ondragleave',
    'ondragenter',
    'ondragend',
    'ondrag',
    'ondblclick',
    'oncuechange',
    'oncontextmenu',
    'onclose',
    'onclick',
    'onchange',
    'oncanplaythrough',
    'oncanplay',
    'oncancel',
    'onblur',
    'onabort',
    'spellcheck',
    'isContentEditable',
    'contentEditable',
    'outerText',
    'innerText',
    'accessKey',
    'hidden',
    'webkitdropzone',
    'draggable',
    'tabIndex',
    'dir',
    'translate',
    'lang',
    'title',
    'childElementCount',
    'lastElementChild',
    'firstElementChild',
    'children',
    'onwebkitfullscreenerror',
    'onwebkitfullscreenchange',
    'nextElementSibling',
    'previousElementSibling',
    'onwheel',
    'onselectstart',
    'onsearch',
    'onpaste',
    'oncut',
    'oncopy',
    'onbeforepaste',
    'onbeforecut',
    'onbeforecopy',
    'shadowRoot',
    'dataset',
    'classList',
    'className',
    'outerHTML',
    'innerHTML',
    'scrollHeight',
    'scrollWidth',
    'scrollTop',
    'scrollLeft',
    'clientHeight',
    'clientWidth',
    'clientTop',
    'clientLeft',
    'offsetParent',
    'offsetHeight',
    'offsetWidth',
    'offsetTop',
    'offsetLeft',
    'localName',
    'prefix',
    'namespaceURI',
    'id',
    'style',
    'attributes',
    'tagName',
    'parentElement',
    'textContent',
    'baseURI',
    'ownerDocument',
    'nextSibling',
    'previousSibling',
    'lastChild',
    'firstChild',
    'childNodes',
    'parentNode',
    'nodeType',
    'nodeValue',
    'nodeName',
    'closure_lm_714617',
    '__jsaction',
];
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function remove(list, el) {
    var /** @type {?} */ index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var EMPTY_ARRAY = [];
var ServerRendererFactory2 = (function () {
    /**
     * @param {?} ngZone
     * @param {?} document
     * @param {?} sharedStylesHost
     */
    function ServerRendererFactory2(ngZone, document, sharedStylesHost) {
        this.ngZone = ngZone;
        this.document = document;
        this.sharedStylesHost = sharedStylesHost;
        this.rendererByCompId = new Map();
        this.schema = new _angular_compiler.DomElementSchemaRegistry();
        this.defaultRenderer = new DefaultServerRenderer2(document, ngZone, this.schema);
    }
    
    /**
     * @param {?} element
     * @param {?} type
     * @return {?}
     */
    ServerRendererFactory2.prototype.createRenderer = function (element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        switch (type.encapsulation) {
            case _angular_core.ViewEncapsulation.Native:
            case _angular_core.ViewEncapsulation.Emulated: {
                var /** @type {?} */ renderer = this.rendererByCompId.get(type.id);
                if (!renderer) {
                    renderer = new EmulatedEncapsulationServerRenderer2(this.document, this.ngZone, this.sharedStylesHost, this.schema, type);
                    this.rendererByCompId.set(type.id, renderer);
                }
                ((renderer)).applyToHost(element);
                return renderer;
            }
            case _angular_core.ViewEncapsulation.Native:
                throw new Error('Native encapsulation is not supported on the server!');
            default: {
                if (!this.rendererByCompId.has(type.id)) {
                    var /** @type {?} */ styles = _angular_platformBrowser.ɵflattenStyles(type.id, type.styles, []);
                    this.sharedStylesHost.addStyles(styles);
                    this.rendererByCompId.set(type.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
        }
    };
    return ServerRendererFactory2;
}());
ServerRendererFactory2.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
ServerRendererFactory2.ctorParameters = function () { return [
    { type: _angular_core.NgZone, },
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
    { type: _angular_platformBrowser.ɵSharedStylesHost, },
]; };
var DefaultServerRenderer2 = (function () {
    /**
     * @param {?} document
     * @param {?} ngZone
     * @param {?} schema
     */
    function DefaultServerRenderer2(document, ngZone, schema) {
        this.document = document;
        this.ngZone = ngZone;
        this.schema = schema;
        this.data = Object.create(null);
    }
    /**
     * @return {?}
     */
    DefaultServerRenderer2.prototype.destroy = function () { };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @param {?=} debugInfo
     * @return {?}
     */
    DefaultServerRenderer2.prototype.createElement = function (name, namespace, debugInfo) {
        if (namespace) {
            return _angular_platformBrowser.ɵgetDOM().createElementNS(_angular_platformBrowser.ɵNAMESPACE_URIS[namespace], name);
        }
        return _angular_platformBrowser.ɵgetDOM().createElement(name);
    };
    /**
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    DefaultServerRenderer2.prototype.createComment = function (value, debugInfo) { return _angular_platformBrowser.ɵgetDOM().createComment(value); };
    /**
     * @param {?} value
     * @param {?=} debugInfo
     * @return {?}
     */
    DefaultServerRenderer2.prototype.createText = function (value, debugInfo) { return _angular_platformBrowser.ɵgetDOM().createTextNode(value); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    DefaultServerRenderer2.prototype.appendChild = function (parent, newChild) { _angular_platformBrowser.ɵgetDOM().appendChild(parent, newChild); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    DefaultServerRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
        if (parent) {
            _angular_platformBrowser.ɵgetDOM().insertBefore(parent, refChild, newChild);
        }
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    DefaultServerRenderer2.prototype.removeChild = function (parent, oldChild) {
        if (parent) {
            _angular_platformBrowser.ɵgetDOM().removeChild(parent, oldChild);
        }
    };
    /**
     * @param {?} selectorOrNode
     * @param {?=} debugInfo
     * @return {?}
     */
    DefaultServerRenderer2.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
        var /** @type {?} */ el;
        if (typeof selectorOrNode === 'string') {
            el = _angular_platformBrowser.ɵgetDOM().querySelector(this.document, selectorOrNode);
            if (!el) {
                throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
            }
        }
        else {
            el = selectorOrNode;
        }
        _angular_platformBrowser.ɵgetDOM().clearNodes(el);
        return el;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultServerRenderer2.prototype.parentNode = function (node) { return _angular_platformBrowser.ɵgetDOM().parentElement(node); };
    /**
     * @param {?} node
     * @return {?}
     */
    DefaultServerRenderer2.prototype.nextSibling = function (node) { return _angular_platformBrowser.ɵgetDOM().nextSibling(node); };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    DefaultServerRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
        if (namespace) {
            _angular_platformBrowser.ɵgetDOM().setAttributeNS(el, _angular_platformBrowser.ɵNAMESPACE_URIS[namespace], namespace + ':' + name, value);
        }
        else {
            _angular_platformBrowser.ɵgetDOM().setAttribute(el, name, value);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    DefaultServerRenderer2.prototype.removeAttribute = function (el, name, namespace) {
        if (namespace) {
            _angular_platformBrowser.ɵgetDOM().removeAttributeNS(el, _angular_platformBrowser.ɵNAMESPACE_URIS[namespace], name);
        }
        else {
            _angular_platformBrowser.ɵgetDOM().removeAttribute(el, name);
        }
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultServerRenderer2.prototype.addClass = function (el, name) { _angular_platformBrowser.ɵgetDOM().addClass(el, name); };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    DefaultServerRenderer2.prototype.removeClass = function (el, name) { _angular_platformBrowser.ɵgetDOM().removeClass(el, name); };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    DefaultServerRenderer2.prototype.setStyle = function (el, style, value, flags) {
        _angular_platformBrowser.ɵgetDOM().setStyle(el, style, value);
    };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    DefaultServerRenderer2.prototype.removeStyle = function (el, style, flags) {
        _angular_platformBrowser.ɵgetDOM().removeStyle(el, style);
    };
    /**
     * @param {?} tagName
     * @param {?} propertyName
     * @return {?}
     */
    DefaultServerRenderer2.prototype._isSafeToReflectProperty = function (tagName, propertyName) {
        return this.schema.securityContext(tagName, propertyName, true) ===
            this.schema.securityContext(tagName, propertyName, false);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    DefaultServerRenderer2.prototype.setProperty = function (el, name, value) {
        checkNoSyntheticProp(name, 'property');
        _angular_platformBrowser.ɵgetDOM().setProperty(el, name, value);
        // Mirror property values for known HTML element properties in the attributes.
        var /** @type {?} */ tagName = ((el.tagName)).toLowerCase();
        if (value != null && (typeof value === 'number' || typeof value == 'string') &&
            this.schema.hasElement(tagName, EMPTY_ARRAY) &&
            this.schema.hasProperty(tagName, name, EMPTY_ARRAY) &&
            this._isSafeToReflectProperty(tagName, name)) {
            this.setAttribute(el, name, value.toString());
        }
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    DefaultServerRenderer2.prototype.setValue = function (node, value) { _angular_platformBrowser.ɵgetDOM().setText(node, value); };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    DefaultServerRenderer2.prototype.listen = function (target, eventName, callback) {
        var _this = this;
        // Note: We are not using the EventsPlugin here as this is not needed
        // to run our tests.
        checkNoSyntheticProp(eventName, 'listener');
        var /** @type {?} */ el = typeof target === 'string' ? _angular_platformBrowser.ɵgetDOM().getGlobalEventTarget(this.document, target) : target;
        var /** @type {?} */ outsideHandler = function (event) { return _this.ngZone.runGuarded(function () { return callback(event); }); };
        return this.ngZone.runOutsideAngular(function () { return _angular_platformBrowser.ɵgetDOM().onAndCancel(el, eventName, outsideHandler); });
    };
    return DefaultServerRenderer2;
}());
var AT_CHARCODE = '@'.charCodeAt(0);
/**
 * @param {?} name
 * @param {?} nameKind
 * @return {?}
 */
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
    }
}
var EmulatedEncapsulationServerRenderer2 = (function (_super) {
    __extends(EmulatedEncapsulationServerRenderer2, _super);
    /**
     * @param {?} document
     * @param {?} ngZone
     * @param {?} sharedStylesHost
     * @param {?} schema
     * @param {?} component
     */
    function EmulatedEncapsulationServerRenderer2(document, ngZone, sharedStylesHost, schema, component) {
        var _this = _super.call(this, document, ngZone, schema) || this;
        _this.component = component;
        var styles = _angular_platformBrowser.ɵflattenStyles(component.id, component.styles, []);
        sharedStylesHost.addStyles(styles);
        _this.contentAttr = _angular_platformBrowser.ɵshimContentAttribute(component.id);
        _this.hostAttr = _angular_platformBrowser.ɵshimHostAttribute(component.id);
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    EmulatedEncapsulationServerRenderer2.prototype.applyToHost = function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
    /**
     * @param {?} parent
     * @param {?} name
     * @return {?}
     */
    EmulatedEncapsulationServerRenderer2.prototype.createElement = function (parent, name) {
        var /** @type {?} */ el = _super.prototype.createElement.call(this, parent, name);
        _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
        return el;
    };
    return EmulatedEncapsulationServerRenderer2;
}(DefaultServerRenderer2));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ServerStylesHost = (function (_super) {
    __extends(ServerStylesHost, _super);
    /**
     * @param {?} doc
     * @param {?} transitionId
     */
    function ServerStylesHost(doc, transitionId) {
        var _this = _super.call(this) || this;
        _this.doc = doc;
        _this.transitionId = transitionId;
        _this.head = null;
        _this.head = _angular_platformBrowser.ɵgetDOM().getElementsByTagName(doc, 'head')[0];
        return _this;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    ServerStylesHost.prototype._addStyle = function (style) {
        var /** @type {?} */ adapter = (_angular_platformBrowser.ɵgetDOM());
        var /** @type {?} */ el = adapter.createElement('style');
        adapter.setText(el, style);
        if (!!this.transitionId) {
            adapter.setAttribute(el, 'ng-transition', this.transitionId);
        }
        adapter.appendChild(this.head, el);
    };
    /**
     * @param {?} additions
     * @return {?}
     */
    ServerStylesHost.prototype.onStylesAdded = function (additions) {
        var _this = this;
        additions.forEach(function (style) { return _this._addStyle(style); });
    };
    return ServerStylesHost;
}(_angular_platformBrowser.ɵSharedStylesHost));
ServerStylesHost.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
ServerStylesHost.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core.Inject, args: [_angular_platformBrowser.DOCUMENT,] },] },
    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [_angular_platformBrowser.ɵTRANSITION_ID,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var INTERNAL_SERVER_PLATFORM_PROVIDERS = [
    { provide: _angular_platformBrowser.DOCUMENT, useFactory: _document, deps: [_angular_core.Injector] },
    { provide: _angular_core.PLATFORM_ID, useValue: _angular_common.ɵPLATFORM_SERVER_ID },
    { provide: _angular_core.PLATFORM_INITIALIZER, useFactory: initParse5Adapter, multi: true, deps: [_angular_core.Injector] },
    { provide: _angular_common.PlatformLocation, useClass: ServerPlatformLocation }, PlatformState,
    // Add special provider that allows multiple instances of platformServer* to be created.
    { provide: _angular_core.ɵALLOW_MULTIPLE_PLATFORMS, useValue: true }
];
/**
 * @param {?} injector
 * @return {?}
 */
function initParse5Adapter(injector) {
    return function () { Parse5DomAdapter.makeCurrent(); };
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function instantiateServerRendererFactory(renderer, engine, zone) {
    return new _angular_platformBrowser_animations.ɵAnimationRendererFactory(renderer, engine, zone);
}
var SERVER_RENDER_PROVIDERS = [
    ServerRendererFactory2,
    {
        provide: _angular_core.RendererFactory2,
        useFactory: instantiateServerRendererFactory,
        deps: [ServerRendererFactory2, _angular_animations_browser.ɵAnimationEngine, _angular_core.NgZone]
    },
    ServerStylesHost,
    { provide: _angular_platformBrowser.ɵSharedStylesHost, useExisting: ServerStylesHost },
];
/**
 * The ng module for the server.
 *
 * \@experimental
 */
var ServerModule = (function () {
    function ServerModule() {
    }
    return ServerModule;
}());
ServerModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                exports: [_angular_platformBrowser.BrowserModule],
                imports: [_angular_http.HttpModule, _angular_platformBrowser_animations.NoopAnimationsModule],
                providers: [
                    SERVER_RENDER_PROVIDERS,
                    SERVER_HTTP_PROVIDERS,
                    { provide: _angular_core.Testability, useValue: null },
                ],
            },] },
];
/**
 * @nocollapse
 */
ServerModule.ctorParameters = function () { return []; };
/**
 * @param {?} injector
 * @return {?}
 */
function _document(injector) {
    var /** @type {?} */ config = injector.get(INITIAL_CONFIG, null);
    if (config && config.document) {
        return parseDocument(config.document);
    }
    else {
        return _angular_platformBrowser.ɵgetDOM().createHtmlDocument();
    }
}
/**
 * \@experimental
 */
var platformServer = _angular_core.createPlatformFactory(_angular_core.platformCore, 'server', INTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * The server platform that supports the runtime compiler.
 *
 * \@experimental
 */
var platformDynamicServer = _angular_core.createPlatformFactory(_angular_compiler.platformCoreDynamic, 'serverDynamic', INTERNAL_SERVER_PLATFORM_PROVIDERS);
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var parse5$2 = __webpack_require__(15);
/**
 * @param {?} platformFactory
 * @param {?} options
 * @return {?}
 */
function _getPlatform(platformFactory, options) {
    var /** @type {?} */ extraProviders = options.extraProviders ? options.extraProviders : [];
    return platformFactory([
        { provide: INITIAL_CONFIG, useValue: { document: options.document, url: options.url } },
        extraProviders
    ]);
}
/**
 * @template T
 * @param {?} platform
 * @param {?} moduleRefPromise
 * @return {?}
 */
function _render(platform, moduleRefPromise) {
    return moduleRefPromise.then(function (moduleRef) {
        var /** @type {?} */ transitionId = moduleRef.injector.get(_angular_platformBrowser.ɵTRANSITION_ID, null);
        if (!transitionId) {
            throw new Error("renderModule[Factory]() requires the use of BrowserModule.withServerTransition() to ensure\nthe server-rendered app can be properly bootstrapped into a client app.");
        }
        var /** @type {?} */ applicationRef = moduleRef.injector.get(_angular_core.ApplicationRef);
        return rxjs_operator_toPromise.toPromise
            .call(rxjs_operator_first.first.call(rxjs_operator_filter.filter.call(applicationRef.isStable, function (isStable) { return isStable; })))
            .then(function () {
            var /** @type {?} */ output = platform.injector.get(PlatformState).renderToString();
            platform.destroy();
            return output;
        });
    });
}
/**
 * Renders a Module to string.
 *
 * Do not use this in a production server environment. Use pre-compiled {\@link NgModuleFactory} with
 * {link renderModuleFactory} instead.
 *
 * \@experimental
 * @template T
 * @param {?} module
 * @param {?} options
 * @return {?}
 */
function renderModule(module, options) {
    var /** @type {?} */ platform = _getPlatform(platformDynamicServer, options);
    return _render(platform, platform.bootstrapModule(module));
}
/**
 * Renders a {\@link NgModuleFactory} to string.
 *
 * \@experimental
 * @template T
 * @param {?} moduleFactory
 * @param {?} options
 * @return {?}
 */
function renderModuleFactory(moduleFactory, options) {
    var /** @type {?} */ platform = _getPlatform(platformServer, options);
    return _render(platform, platform.bootstrapModuleFactory(moduleFactory));
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new _angular_core.Version('4.1.2');

exports.PlatformState = PlatformState;
exports.ServerModule = ServerModule;
exports.platformDynamicServer = platformDynamicServer;
exports.platformServer = platformServer;
exports.INITIAL_CONFIG = INITIAL_CONFIG;
exports.renderModule = renderModule;
exports.renderModuleFactory = renderModuleFactory;
exports.VERSION = VERSION;
exports.ɵINTERNAL_SERVER_PLATFORM_PROVIDERS = INTERNAL_SERVER_PLATFORM_PROVIDERS;
exports.ɵSERVER_RENDER_PROVIDERS = SERVER_RENDER_PROVIDERS;
exports.ɵServerRendererFactory2 = ServerRendererFactory2;
exports.ɵf = SERVER_HTTP_PROVIDERS;
exports.ɵc = ServerXhr;
exports.ɵd = ServerXsrfStrategy;
exports.ɵe = httpFactory;
exports.ɵa = instantiateServerRendererFactory;
exports.ɵb = ServerStylesHost;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-server.umd.js.map


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Angular v4.1.2
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
	 true ? factory(exports, __webpack_require__(102)) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/animations'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.animations = global.ng.animations || {}, global.ng.animations.browser = global.ng.animations.browser || {}),global.ng.animations));
}(this, (function (exports,_angular_animations) { 'use strict';

var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.2
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @experimental
 */
var NoopAnimationDriver = (function () {
    function NoopAnimationDriver() {
    }
    NoopAnimationDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        return new _angular_animations.NoopAnimationPlayer();
    };
    return NoopAnimationDriver;
}());
/**
 * @experimental
 */
var AnimationDriver = (function () {
    function AnimationDriver() {
    }
    return AnimationDriver;
}());
AnimationDriver.NOOP = new NoopAnimationDriver();
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @abstract
 */
var AnimationEngine = (function () {
    function AnimationEngine() {
    }
    /**
     * @abstract
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    AnimationEngine.prototype.registerTrigger = function (trigger, name) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    AnimationEngine.prototype.onInsert = function (element, domFn) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    AnimationEngine.prototype.onRemove = function (element, domFn) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    AnimationEngine.prototype.setProperty = function (element, property, value) { };
    /**
     * @abstract
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    AnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) { };
    /**
     * @abstract
     * @return {?}
     */
    AnimationEngine.prototype.flush = function () { };
    Object.defineProperty(AnimationEngine.prototype, "activePlayers", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('...'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationEngine.prototype, "queuedPlayers", {
        /**
         * @return {?}
         */
        get: function () { throw new Error('...'); },
        enumerable: true,
        configurable: true
    });
    return AnimationEngine;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ONE_SECOND = 1000;
/**
 * @param {?} exp
 * @param {?} errors
 * @return {?}
 */
function parseTimeExpression(exp, errors) {
    var /** @type {?} */ regex = /^([\.\d]+)(m?s)(?:\s+([\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
    var /** @type {?} */ duration;
    var /** @type {?} */ delay = 0;
    var /** @type {?} */ easing = null;
    if (typeof exp === 'string') {
        var /** @type {?} */ matches = exp.match(regex);
        if (matches === null) {
            errors.push("The provided timing value \"" + exp + "\" is invalid.");
            return { duration: 0, delay: 0, easing: null };
        }
        var /** @type {?} */ durationMatch = parseFloat(matches[1]);
        var /** @type {?} */ durationUnit = matches[2];
        if (durationUnit == 's') {
            durationMatch *= ONE_SECOND;
        }
        duration = Math.floor(durationMatch);
        var /** @type {?} */ delayMatch = matches[3];
        var /** @type {?} */ delayUnit = matches[4];
        if (delayMatch != null) {
            var /** @type {?} */ delayVal = parseFloat(delayMatch);
            if (delayUnit != null && delayUnit == 's') {
                delayVal *= ONE_SECOND;
            }
            delay = Math.floor(delayVal);
        }
        var /** @type {?} */ easingVal = matches[5];
        if (easingVal) {
            easing = easingVal;
        }
    }
    else {
        duration = (exp);
    }
    return { duration: duration, delay: delay, easing: easing };
}
/**
 * @param {?} styles
 * @return {?}
 */
function normalizeStyles(styles) {
    var /** @type {?} */ normalizedStyles = {};
    if (Array.isArray(styles)) {
        styles.forEach(function (data) { return copyStyles(data, false, normalizedStyles); });
    }
    else {
        copyStyles(styles, false, normalizedStyles);
    }
    return normalizedStyles;
}
/**
 * @param {?} styles
 * @param {?} readPrototype
 * @param {?=} destination
 * @return {?}
 */
function copyStyles(styles, readPrototype, destination) {
    if (destination === void 0) { destination = {}; }
    if (readPrototype) {
        // we make use of a for-in loop so that the
        // prototypically inherited properties are
        // revealed from the backFill map
        for (var /** @type {?} */ prop in styles) {
            destination[prop] = styles[prop];
        }
    }
    else {
        Object.keys(styles).forEach(function (prop) { return destination[prop] = styles[prop]; });
    }
    return destination;
}
/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function setStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(function (prop) { return element.style[prop] = styles[prop]; });
    }
}
/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function eraseStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach(function (prop) {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            element.style[prop] = '';
        });
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} visitor
 * @param {?} node
 * @param {?} context
 * @return {?}
 */
function visitAnimationNode(visitor, node, context) {
    switch (node.type) {
        case 0 /* State */:
            return visitor.visitState(/** @type {?} */ (node), context);
        case 1 /* Transition */:
            return visitor.visitTransition(/** @type {?} */ (node), context);
        case 2 /* Sequence */:
            return visitor.visitSequence(/** @type {?} */ (node), context);
        case 3 /* Group */:
            return visitor.visitGroup(/** @type {?} */ (node), context);
        case 4 /* Animate */:
            return visitor.visitAnimate(/** @type {?} */ (node), context);
        case 5 /* KeyframeSequence */:
            return visitor.visitKeyframeSequence(/** @type {?} */ (node), context);
        case 6 /* Style */:
            return visitor.visitStyle(/** @type {?} */ (node), context);
        default:
            throw new Error("Unable to resolve animation metadata node #" + node.type);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ANY_STATE = '*';
/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */
function parseTransitionExpr(transitionValue, errors) {
    var /** @type {?} */ expressions = [];
    if (typeof transitionValue == 'string') {
        ((transitionValue))
            .split(/\s*,\s*/)
            .forEach(function (str) { return parseInnerTransitionStr(str, expressions, errors); });
    }
    else {
        expressions.push(/** @type {?} */ (transitionValue));
    }
    return expressions;
}
/**
 * @param {?} eventStr
 * @param {?} expressions
 * @param {?} errors
 * @return {?}
 */
function parseInnerTransitionStr(eventStr, expressions, errors) {
    if (eventStr[0] == ':') {
        eventStr = parseAnimationAlias(eventStr, errors);
    }
    var /** @type {?} */ match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (match == null || match.length < 4) {
        errors.push("The provided transition expression \"" + eventStr + "\" is not supported");
        return expressions;
    }
    var /** @type {?} */ fromState = match[1];
    var /** @type {?} */ separator = match[2];
    var /** @type {?} */ toState = match[3];
    expressions.push(makeLambdaFromStates(fromState, toState));
    var /** @type {?} */ isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
    if (separator[0] == '<' && !isFullAnyStateExpr) {
        expressions.push(makeLambdaFromStates(toState, fromState));
    }
}
/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */
function parseAnimationAlias(alias, errors) {
    switch (alias) {
        case ':enter':
            return 'void => *';
        case ':leave':
            return '* => void';
        default:
            errors.push("The transition alias value \"" + alias + "\" is not supported");
            return '* => *';
    }
}
/**
 * @param {?} lhs
 * @param {?} rhs
 * @return {?}
 */
function makeLambdaFromStates(lhs, rhs) {
    return function (fromState, toState) {
        var /** @type {?} */ lhsMatch = lhs == ANY_STATE || lhs == fromState;
        var /** @type {?} */ rhsMatch = rhs == ANY_STATE || rhs == toState;
        return lhsMatch && rhsMatch;
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} keyframes
 * @param {?} duration
 * @param {?} delay
 * @param {?} easing
 * @return {?}
 */
function createTimelineInstruction(keyframes, duration, delay, easing) {
    return {
        type: 1 /* TimelineAnimation */,
        keyframes: keyframes,
        duration: duration,
        delay: delay,
        totalTime: duration + delay, easing: easing
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} ast
 * @param {?=} startingStyles
 * @param {?=} finalStyles
 * @return {?}
 */
function buildAnimationKeyframes(ast, startingStyles, finalStyles) {
    if (startingStyles === void 0) { startingStyles = {}; }
    if (finalStyles === void 0) { finalStyles = {}; }
    var /** @type {?} */ normalizedAst = Array.isArray(ast) ? _angular_animations.sequence(/** @type {?} */ (ast)) : (ast);
    return new AnimationTimelineVisitor().buildKeyframes(normalizedAst, startingStyles, finalStyles);
}
var AnimationTimelineContext = (function () {
    /**
     * @param {?} errors
     * @param {?} timelines
     * @param {?=} initialTimeline
     */
    function AnimationTimelineContext(errors, timelines, initialTimeline) {
        this.errors = errors;
        this.timelines = timelines;
        this.previousNode = ({});
        this.subContextCount = 0;
        this.currentTimeline = initialTimeline || new TimelineBuilder(0);
        timelines.push(this.currentTimeline);
    }
    /**
     * @return {?}
     */
    AnimationTimelineContext.prototype.createSubContext = function () {
        var /** @type {?} */ context = new AnimationTimelineContext(this.errors, this.timelines, this.currentTimeline.fork());
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        this.subContextCount++;
        return context;
    };
    /**
     * @param {?=} newTime
     * @return {?}
     */
    AnimationTimelineContext.prototype.transformIntoNewTimeline = function (newTime) {
        if (newTime === void 0) { newTime = 0; }
        this.currentTimeline = this.currentTimeline.fork(newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
    };
    /**
     * @param {?} time
     * @return {?}
     */
    AnimationTimelineContext.prototype.incrementTime = function (time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
    };
    return AnimationTimelineContext;
}());
var AnimationTimelineVisitor = (function () {
    function AnimationTimelineVisitor() {
    }
    /**
     * @param {?} ast
     * @param {?} startingStyles
     * @param {?} finalStyles
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.buildKeyframes = function (ast, startingStyles, finalStyles) {
        var /** @type {?} */ context = new AnimationTimelineContext([], []);
        context.currentTimeline.setStyles(startingStyles);
        visitAnimationNode(this, ast, context);
        // this checks to see if an actual animation happened
        var /** @type {?} */ timelines = context.timelines.filter(function (timeline) { return timeline.hasStyling(); });
        if (timelines.length && Object.keys(finalStyles).length) {
            var /** @type {?} */ tl = timelines[timelines.length - 1];
            if (!tl.allowOnlyTimelineStyles()) {
                tl.setStyles(finalStyles);
            }
        }
        return timelines.length ? timelines.map(function (timeline) { return timeline.buildKeyframes(); }) :
            [createTimelineInstruction([], 0, 0, '')];
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitState = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitTransition = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitSequence = function (ast, context) {
        var _this = this;
        var /** @type {?} */ subContextCount = context.subContextCount;
        if (context.previousNode.type == 6 /* Style */) {
            context.currentTimeline.forwardFrame();
            context.currentTimeline.snapshotCurrentStyles();
        }
        ast.steps.forEach(function (s) { return visitAnimationNode(_this, s, context); });
        // this means that some animation function within the sequence
        // ended up creating a sub timeline (which means the current
        // timeline cannot overlap with the contents of the sequence)
        if (context.subContextCount > subContextCount) {
            context.transformIntoNewTimeline();
        }
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitGroup = function (ast, context) {
        var _this = this;
        var /** @type {?} */ innerTimelines = [];
        var /** @type {?} */ furthestTime = context.currentTimeline.currentTime;
        ast.steps.forEach(function (s) {
            var /** @type {?} */ innerContext = context.createSubContext();
            visitAnimationNode(_this, s, innerContext);
            furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
            innerTimelines.push(innerContext.currentTimeline);
        });
        // this operation is run after the AST loop because otherwise
        // if the parent timeline's collected styles were updated then
        // it would pass in invalid data into the new-to-be forked items
        innerTimelines.forEach(function (timeline) { return context.currentTimeline.mergeTimelineCollectedStyles(timeline); });
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitAnimate = function (ast, context) {
        var /** @type {?} */ timings = ast.timings.hasOwnProperty('duration') ? (ast.timings) :
            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
        context.currentAnimateTimings = timings;
        if (timings.delay) {
            context.incrementTime(timings.delay);
            context.currentTimeline.snapshotCurrentStyles();
        }
        var /** @type {?} */ astType = ast.styles ? ast.styles.type : -1;
        if (astType == 5 /* KeyframeSequence */) {
            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
        }
        else {
            var /** @type {?} */ styleAst = (ast.styles);
            if (!styleAst) {
                var /** @type {?} */ newStyleData = {};
                if (timings.easing) {
                    newStyleData['easing'] = timings.easing;
                }
                styleAst = _angular_animations.style(newStyleData);
                ((styleAst))['treatAsEmptyStep'] = true;
            }
            context.incrementTime(timings.duration);
            if (styleAst) {
                this.visitStyle(styleAst, context);
            }
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitStyle = function (ast, context) {
        // this is a special case when a style() call is issued directly after
        // a call to animate(). If the clock is not forwarded by one frame then
        // the style() calls will be merged into the previous animate() call
        // which is incorrect.
        if (!context.currentAnimateTimings &&
            context.previousNode.type == 4 /* Animate */) {
            context.currentTimeline.forwardFrame();
        }
        var /** @type {?} */ normalizedStyles = normalizeStyles(ast.styles);
        var /** @type {?} */ easing = context.currentAnimateTimings && context.currentAnimateTimings.easing;
        this._applyStyles(normalizedStyles, easing, ((ast))['treatAsEmptyStep'] ? true : false, context);
        context.previousNode = ast;
    };
    /**
     * @param {?} styles
     * @param {?} easing
     * @param {?} treatAsEmptyStep
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype._applyStyles = function (styles, easing, treatAsEmptyStep, context) {
        if (styles.hasOwnProperty('easing')) {
            easing = easing || (styles['easing']);
            delete styles['easing'];
        }
        context.currentTimeline.setStyles(styles, easing, treatAsEmptyStep);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTimelineVisitor.prototype.visitKeyframeSequence = function (ast, context) {
        var _this = this;
        var /** @type {?} */ MAX_KEYFRAME_OFFSET = 1;
        var /** @type {?} */ limit = ast.steps.length - 1;
        var /** @type {?} */ firstKeyframe = ast.steps[0];
        var /** @type {?} */ offsetGap = 0;
        var /** @type {?} */ containsOffsets = getOffset(firstKeyframe) != null;
        if (!containsOffsets) {
            offsetGap = MAX_KEYFRAME_OFFSET / limit;
        }
        var /** @type {?} */ startTime = context.currentTimeline.duration;
        var /** @type {?} */ duration = ((context.currentAnimateTimings)).duration;
        var /** @type {?} */ innerContext = context.createSubContext();
        var /** @type {?} */ innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = ((context.currentAnimateTimings)).easing;
        ast.steps.forEach(function (step, i) {
            var /** @type {?} */ normalizedStyles = normalizeStyles(step.styles);
            var /** @type {?} */ offset = containsOffsets ?
                (step.offset != null ? step.offset : parseFloat(/** @type {?} */ (normalizedStyles['offset']))) :
                (i == limit ? MAX_KEYFRAME_OFFSET : i * offsetGap);
            innerTimeline.forwardTime(offset * duration);
            _this._applyStyles(normalizedStyles, null, false, innerContext);
        });
        // this will ensure that the parent timeline gets all the styles from
        // the child even if the new timeline below is not used
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        // we do this because the window between this timeline and the sub timeline
        // should ensure that the styles within are exactly the same as they were before
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
    };
    return AnimationTimelineVisitor;
}());
var TimelineBuilder = (function () {
    /**
     * @param {?} startTime
     * @param {?=} globalTimelineStyles
     */
    function TimelineBuilder(startTime, globalTimelineStyles) {
        this.startTime = startTime;
        this.duration = 0;
        this.easing = '';
        this._previousKeyframe = {};
        this._keyframes = new Map();
        this._styleSummary = {};
        this._backFill = {};
        this._currentEmptyStepKeyframe = null;
        this._localTimelineStyles = Object.create(this._backFill, {});
        this._globalTimelineStyles =
            globalTimelineStyles ? globalTimelineStyles : this._localTimelineStyles;
        this._loadKeyframe();
    }
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.hasStyling = function () { return this._keyframes.size > 1; };
    Object.defineProperty(TimelineBuilder.prototype, "currentTime", {
        /**
         * @return {?}
         */
        get: function () { return this.startTime + this.duration; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} currentTime
     * @return {?}
     */
    TimelineBuilder.prototype.fork = function (currentTime) {
        if (currentTime === void 0) { currentTime = 0; }
        return new TimelineBuilder(currentTime || this.currentTime, this._globalTimelineStyles);
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype._loadKeyframe = function () {
        if (this._currentKeyframe) {
            this._previousKeyframe = this._currentKeyframe;
        }
        this._currentKeyframe = ((this._keyframes.get(this.duration)));
        if (!this._currentKeyframe) {
            this._currentKeyframe = Object.create(this._backFill, {});
            this._keyframes.set(this.duration, this._currentKeyframe);
        }
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.forwardFrame = function () {
        this.duration++;
        this._loadKeyframe();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    TimelineBuilder.prototype.forwardTime = function (time) {
        this.duration = time;
        this._loadKeyframe();
    };
    /**
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    TimelineBuilder.prototype._updateStyle = function (prop, value) {
        this._localTimelineStyles[prop] = value; /** @type {?} */
        ((this._globalTimelineStyles))[prop] = value;
        this._styleSummary[prop] = { time: this.currentTime, value: value };
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.allowOnlyTimelineStyles = function () { return this._currentEmptyStepKeyframe !== this._currentKeyframe; };
    /**
     * @param {?} styles
     * @param {?=} easing
     * @param {?=} treatAsEmptyStep
     * @return {?}
     */
    TimelineBuilder.prototype.setStyles = function (styles, easing, treatAsEmptyStep) {
        var _this = this;
        if (easing === void 0) { easing = null; }
        if (treatAsEmptyStep === void 0) { treatAsEmptyStep = false; }
        if (easing) {
            ((this._previousKeyframe))['easing'] = easing;
        }
        if (treatAsEmptyStep) {
            // special case for animate(duration):
            // all missing styles are filled with a `*` value then
            // if any destination styles are filled in later on the same
            // keyframe then they will override the overridden styles
            // We use `_globalTimelineStyles` here because there may be
            // styles in previous keyframes that are not present in this timeline
            Object.keys(this._globalTimelineStyles).forEach(function (prop) {
                _this._backFill[prop] = _this._globalTimelineStyles[prop] || _angular_animations.AUTO_STYLE;
                _this._currentKeyframe[prop] = _angular_animations.AUTO_STYLE;
            });
            this._currentEmptyStepKeyframe = this._currentKeyframe;
        }
        else {
            Object.keys(styles).forEach(function (prop) {
                if (prop !== 'offset') {
                    var /** @type {?} */ val = styles[prop];
                    _this._currentKeyframe[prop] = val;
                    if (!_this._localTimelineStyles[prop]) {
                        _this._backFill[prop] = _this._globalTimelineStyles[prop] || _angular_animations.AUTO_STYLE;
                    }
                    _this._updateStyle(prop, val);
                }
            });
            Object.keys(this._localTimelineStyles).forEach(function (prop) {
                if (!_this._currentKeyframe.hasOwnProperty(prop)) {
                    _this._currentKeyframe[prop] = _this._localTimelineStyles[prop];
                }
            });
        }
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.snapshotCurrentStyles = function () { copyStyles(this._localTimelineStyles, false, this._currentKeyframe); };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.getFinalKeyframe = function () { return ((this._keyframes.get(this.duration))); };
    Object.defineProperty(TimelineBuilder.prototype, "properties", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ properties = [];
            for (var /** @type {?} */ prop in this._currentKeyframe) {
                properties.push(prop);
            }
            return properties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} timeline
     * @return {?}
     */
    TimelineBuilder.prototype.mergeTimelineCollectedStyles = function (timeline) {
        var _this = this;
        Object.keys(timeline._styleSummary).forEach(function (prop) {
            var /** @type {?} */ details0 = _this._styleSummary[prop];
            var /** @type {?} */ details1 = timeline._styleSummary[prop];
            if (!details0 || details1.time > details0.time) {
                _this._updateStyle(prop, details1.value);
            }
        });
    };
    /**
     * @return {?}
     */
    TimelineBuilder.prototype.buildKeyframes = function () {
        var _this = this;
        var /** @type {?} */ finalKeyframes = [];
        // special case for when there are only start/destination
        // styles but no actual animation animate steps...
        if (this.duration == 0) {
            var /** @type {?} */ targetKeyframe = this.getFinalKeyframe();
            var /** @type {?} */ firstKeyframe = copyStyles(targetKeyframe, true);
            firstKeyframe['offset'] = 0;
            finalKeyframes.push(firstKeyframe);
            var /** @type {?} */ lastKeyframe = copyStyles(targetKeyframe, true);
            lastKeyframe['offset'] = 1;
            finalKeyframes.push(lastKeyframe);
        }
        else {
            this._keyframes.forEach(function (keyframe, time) {
                var /** @type {?} */ finalKeyframe = copyStyles(keyframe, true);
                finalKeyframe['offset'] = time / _this.duration;
                finalKeyframes.push(finalKeyframe);
            });
        }
        return createTimelineInstruction(finalKeyframes, this.duration, this.startTime, this.easing);
    };
    return TimelineBuilder;
}());
/**
 * @param {?} ast
 * @return {?}
 */
function getOffset(ast) {
    var /** @type {?} */ offset = ast.offset;
    if (offset == null) {
        var /** @type {?} */ styles = ast.styles;
        if (Array.isArray(styles)) {
            for (var /** @type {?} */ i = 0; i < styles.length; i++) {
                var /** @type {?} */ o = (styles[i]['offset']);
                if (o != null) {
                    offset = o;
                    break;
                }
            }
        }
        else {
            offset = (styles['offset']);
        }
    }
    return ((offset));
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @return {?}
 */
function createTransitionInstruction(triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines) {
    return {
        type: 0 /* TransitionAnimation */,
        triggerName: triggerName,
        isRemovalTransition: isRemovalTransition,
        fromState: fromState,
        fromStyles: fromStyles,
        toState: toState,
        toStyles: toStyles,
        timelines: timelines
    };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationTransitionFactory = (function () {
    /**
     * @param {?} _triggerName
     * @param {?} ast
     * @param {?} matchFns
     * @param {?} _stateStyles
     */
    function AnimationTransitionFactory(_triggerName, ast, matchFns, _stateStyles) {
        this._triggerName = _triggerName;
        this.matchFns = matchFns;
        this._stateStyles = _stateStyles;
        var normalizedAst = Array.isArray(ast.animation) ?
            _angular_animations.sequence(ast.animation) :
            ast.animation;
        this._animationAst = normalizedAst;
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTransitionFactory.prototype.match = function (currentState, nextState) {
        if (!oneOrMoreTransitionsMatch(this.matchFns, currentState, nextState))
            return;
        var /** @type {?} */ backupStateStyles = this._stateStyles['*'] || {};
        var /** @type {?} */ currentStateStyles = this._stateStyles[currentState] || backupStateStyles;
        var /** @type {?} */ nextStateStyles = this._stateStyles[nextState] || backupStateStyles;
        var /** @type {?} */ timelines = buildAnimationKeyframes(this._animationAst, currentStateStyles, nextStateStyles);
        return createTransitionInstruction(this._triggerName, currentState, nextState, nextState === 'void', currentStateStyles, nextStateStyles, timelines);
    };
    return AnimationTransitionFactory;
}());
/**
 * @param {?} matchFns
 * @param {?} currentState
 * @param {?} nextState
 * @return {?}
 */
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState) {
    return matchFns.some(function (fn) { return fn(currentState, nextState); });
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} ast
 * @return {?}
 */
function validateAnimationSequence(ast) {
    var /** @type {?} */ normalizedAst = Array.isArray(ast) ? _angular_animations.sequence(/** @type {?} */ (ast)) : (ast);
    return new AnimationValidatorVisitor().validate(normalizedAst);
}
var AnimationValidatorVisitor = (function () {
    function AnimationValidatorVisitor() {
    }
    /**
     * @param {?} ast
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.validate = function (ast) {
        var /** @type {?} */ context = new AnimationValidatorContext();
        visitAnimationNode(this, ast, context);
        return context.errors;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitState = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitTransition = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitSequence = function (ast, context) {
        var _this = this;
        ast.steps.forEach(function (step) { return visitAnimationNode(_this, step, context); });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitGroup = function (ast, context) {
        var _this = this;
        var /** @type {?} */ currentTime = context.currentTime;
        var /** @type {?} */ furthestTime = 0;
        ast.steps.forEach(function (step) {
            context.currentTime = currentTime;
            visitAnimationNode(_this, step, context);
            furthestTime = Math.max(furthestTime, context.currentTime);
        });
        context.currentTime = furthestTime;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitAnimate = function (ast, context) {
        // we reassign the timings here so that they are not reparsed each
        // time an animation occurs
        context.currentAnimateTimings = ast.timings =
            parseTimeExpression(/** @type {?} */ (ast.timings), context.errors);
        var /** @type {?} */ astType = ast.styles && ast.styles.type;
        if (astType == 5 /* KeyframeSequence */) {
            this.visitKeyframeSequence(/** @type {?} */ (ast.styles), context);
        }
        else {
            context.currentTime +=
                context.currentAnimateTimings.duration + context.currentAnimateTimings.delay;
            if (astType == 6 /* Style */) {
                this.visitStyle(/** @type {?} */ (ast.styles), context);
            }
        }
        context.currentAnimateTimings = null;
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitStyle = function (ast, context) {
        var /** @type {?} */ styleData = normalizeStyles(ast.styles);
        var /** @type {?} */ timings = context.currentAnimateTimings;
        var /** @type {?} */ endTime = context.currentTime;
        var /** @type {?} */ startTime = context.currentTime;
        if (timings && startTime > 0) {
            startTime -= timings.duration + timings.delay;
        }
        Object.keys(styleData).forEach(function (prop) {
            var /** @type {?} */ collectedEntry = context.collectedStyles[prop];
            var /** @type {?} */ updateCollectedStyle = true;
            if (collectedEntry) {
                if (startTime != endTime && startTime >= collectedEntry.startTime &&
                    endTime <= collectedEntry.endTime) {
                    context.errors.push("The CSS property \"" + prop + "\" that exists between the times of \"" + collectedEntry.startTime + "ms\" and \"" + collectedEntry.endTime + "ms\" is also being animated in a parallel animation between the times of \"" + startTime + "ms\" and \"" + endTime + "ms\"");
                    updateCollectedStyle = false;
                }
                // we always choose the smaller start time value since we
                // want to have a record of the entire animation window where
                // the style property is being animated in between
                startTime = collectedEntry.startTime;
            }
            if (updateCollectedStyle) {
                context.collectedStyles[prop] = { startTime: startTime, endTime: endTime };
            }
        });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationValidatorVisitor.prototype.visitKeyframeSequence = function (ast, context) {
        var _this = this;
        var /** @type {?} */ totalKeyframesWithOffsets = 0;
        var /** @type {?} */ offsets = [];
        var /** @type {?} */ offsetsOutOfOrder = false;
        var /** @type {?} */ keyframesOutOfRange = false;
        var /** @type {?} */ previousOffset = 0;
        ast.steps.forEach(function (step) {
            var /** @type {?} */ styleData = normalizeStyles(step.styles);
            var /** @type {?} */ offset = 0;
            if (styleData.hasOwnProperty('offset')) {
                totalKeyframesWithOffsets++;
                offset = (styleData['offset']);
            }
            keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
            offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
            previousOffset = offset;
            offsets.push(offset);
        });
        if (keyframesOutOfRange) {
            context.errors.push("Please ensure that all keyframe offsets are between 0 and 1");
        }
        if (offsetsOutOfOrder) {
            context.errors.push("Please ensure that all keyframe offsets are in order");
        }
        var /** @type {?} */ length = ast.steps.length;
        var /** @type {?} */ generatedOffset = 0;
        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
            context.errors.push("Not all style() steps within the declared keyframes() contain offsets");
        }
        else if (totalKeyframesWithOffsets == 0) {
            generatedOffset = 1 / length;
        }
        var /** @type {?} */ limit = length - 1;
        var /** @type {?} */ currentTime = context.currentTime;
        var /** @type {?} */ animateDuration = ((context.currentAnimateTimings)).duration;
        ast.steps.forEach(function (step, i) {
            var /** @type {?} */ offset = generatedOffset > 0 ? (i == limit ? 1 : (generatedOffset * i)) : offsets[i];
            var /** @type {?} */ durationUpToThisFrame = offset * animateDuration;
            context.currentTime =
                currentTime + ((context.currentAnimateTimings)).delay + durationUpToThisFrame; /** @type {?} */
            ((context.currentAnimateTimings)).duration = durationUpToThisFrame;
            _this.visitStyle(step, context);
        });
    };
    return AnimationValidatorVisitor;
}());
var AnimationValidatorContext = (function () {
    function AnimationValidatorContext() {
        this.errors = [];
        this.currentTime = 0;
        this.collectedStyles = {};
    }
    return AnimationValidatorContext;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 * @param {?} name
 * @param {?} definitions
 * @return {?}
 */
function buildTrigger(name, definitions) {
    return new AnimationTriggerVisitor().buildTrigger(name, definitions);
}
/**
 * \@experimental Animation support is experimental.
 */
var AnimationTrigger = (function () {
    /**
     * @param {?} name
     * @param {?} states
     * @param {?} _transitionAsts
     */
    function AnimationTrigger(name, states, _transitionAsts) {
        var _this = this;
        this.name = name;
        this._transitionAsts = _transitionAsts;
        this.transitionFactories = [];
        this.states = {};
        Object.keys(states).forEach(function (stateName) { _this.states[stateName] = copyStyles(states[stateName], false); });
        var errors = [];
        _transitionAsts.forEach(function (ast) {
            var exprs = parseTransitionExpr(ast.expr, errors);
            var sequenceErrors = validateAnimationSequence(ast);
            if (sequenceErrors.length) {
                errors.push.apply(errors, sequenceErrors);
            }
            else {
                _this.transitionFactories.push(new AnimationTransitionFactory(_this.name, ast, exprs, states));
            }
        });
        if (errors.length) {
            var LINE_START = '\n - ';
            throw new Error("Animation parsing for the " + name + " trigger have failed:" + LINE_START + errors.join(LINE_START));
        }
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTrigger.prototype.createFallbackInstruction = function (currentState, nextState) {
        var /** @type {?} */ backupStateStyles = this.states['*'] || {};
        var /** @type {?} */ currentStateStyles = this.states[currentState] || backupStateStyles;
        var /** @type {?} */ nextStateStyles = this.states[nextState] || backupStateStyles;
        return createTransitionInstruction(this.name, currentState, nextState, nextState == 'void', currentStateStyles, nextStateStyles, []);
    };
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @return {?}
     */
    AnimationTrigger.prototype.matchTransition = function (currentState, nextState) {
        for (var /** @type {?} */ i = 0; i < this.transitionFactories.length; i++) {
            var /** @type {?} */ result = this.transitionFactories[i].match(currentState, nextState);
            if (result)
                return result;
        }
        return null;
    };
    return AnimationTrigger;
}());
var AnimationTriggerContext = (function () {
    function AnimationTriggerContext() {
        this.errors = [];
        this.states = {};
        this.transitions = [];
    }
    return AnimationTriggerContext;
}());
var AnimationTriggerVisitor = (function () {
    function AnimationTriggerVisitor() {
    }
    /**
     * @param {?} name
     * @param {?} definitions
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.buildTrigger = function (name, definitions) {
        var _this = this;
        var /** @type {?} */ context = new AnimationTriggerContext();
        definitions.forEach(function (def) { return visitAnimationNode(_this, def, context); });
        return new AnimationTrigger(name, context.states, context.transitions);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitState = function (ast, context) {
        var /** @type {?} */ styles = normalizeStyles(ast.styles.styles);
        ast.name.split(/\s*,\s*/).forEach(function (name) { context.states[name] = styles; });
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitTransition = function (ast, context) {
        context.transitions.push(ast);
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitSequence = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitGroup = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitAnimate = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitStyle = function (ast, context) {
        // these values are not visited in this AST
    };
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    AnimationTriggerVisitor.prototype.visitKeyframeSequence = function (ast, context) {
        // these values are not visited in this AST
    };
    return AnimationTriggerVisitor;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var MARKED_FOR_ANIMATION_CLASSNAME = 'ng-animating';
var MARKED_FOR_ANIMATION_SELECTOR = '.ng-animating';
var MARKED_FOR_REMOVAL = '$$ngRemove';
var VOID_STATE = 'void';
var DomAnimationEngine = (function () {
    /**
     * @param {?} _driver
     * @param {?} _normalizer
     */
    function DomAnimationEngine(_driver, _normalizer) {
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._flaggedInserts = new Set();
        this._queuedRemovals = new Map();
        this._queuedTransitionAnimations = [];
        this._activeTransitionAnimations = new Map();
        this._activeElementAnimations = new Map();
        this._elementTriggerStates = new Map();
        this._triggers = Object.create(null);
        this._triggerListeners = new Map();
        this._pendingListenerRemovals = new Map();
    }
    Object.defineProperty(DomAnimationEngine.prototype, "queuedPlayers", {
        /**
         * @return {?}
         */
        get: function () {
            return this._queuedTransitionAnimations.map(function (q) { return q.player; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DomAnimationEngine.prototype, "activePlayers", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ players = [];
            this._activeElementAnimations.forEach(function (activePlayers) { return players.push.apply(players, activePlayers); });
            return players;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    DomAnimationEngine.prototype.registerTrigger = function (trigger, name) {
        name = name || trigger.name;
        if (this._triggers[name]) {
            return;
        }
        this._triggers[name] = buildTrigger(name, trigger.definitions);
    };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    DomAnimationEngine.prototype.onInsert = function (element, domFn) {
        if (element['nodeType'] == 1) {
            this._flaggedInserts.add(element);
        }
        domFn();
    };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    DomAnimationEngine.prototype.onRemove = function (element, domFn) {
        var _this = this;
        if (element['nodeType'] != 1) {
            domFn();
            return;
        }
        var /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
        if (lookupRef) {
            var /** @type {?} */ possibleTriggers = Object.keys(lookupRef);
            var /** @type {?} */ hasRemoval = possibleTriggers.some(function (triggerName) {
                var /** @type {?} */ oldValue = ((lookupRef))[triggerName];
                var /** @type {?} */ instruction = _this._triggers[triggerName].matchTransition(oldValue, VOID_STATE);
                return !!instruction;
            });
            if (hasRemoval) {
                element[MARKED_FOR_REMOVAL] = true;
                this._queuedRemovals.set(element, domFn);
                return;
            }
        }
        // this means that there are no animations to take on this
        // leave operation therefore we should fire the done|start callbacks
        if (this._triggerListeners.has(element)) {
            element[MARKED_FOR_REMOVAL] = true;
            this._queuedRemovals.set(element, function () { });
        }
        this._onRemovalTransition(element).forEach(function (player) { return player.destroy(); });
        domFn();
    };
    /**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    DomAnimationEngine.prototype.setProperty = function (element, property, value) {
        var /** @type {?} */ trigger = this._triggers[property];
        if (!trigger) {
            throw new Error("The provided animation trigger \"" + property + "\" has not been registered!");
        }
        var /** @type {?} */ lookupRef = this._elementTriggerStates.get(element);
        if (!lookupRef) {
            this._elementTriggerStates.set(element, lookupRef = {});
        }
        var /** @type {?} */ oldValue = lookupRef.hasOwnProperty(property) ? lookupRef[property] : VOID_STATE;
        if (oldValue !== value) {
            value = normalizeTriggerValue(value);
            var /** @type {?} */ instruction = trigger.matchTransition(oldValue, value);
            if (!instruction) {
                // we do this to make sure we always have an animation player so
                // that callback operations are properly called
                instruction = trigger.createFallbackInstruction(oldValue, value);
            }
            this.animateTransition(element, instruction);
            lookupRef[property] = value;
        }
    };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    DomAnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) {
        var _this = this;
        if (!eventPhase) {
            throw new Error("Unable to listen on the animation trigger \"" + eventName + "\" because the provided event is undefined!");
        }
        if (!this._triggers[eventName]) {
            throw new Error("Unable to listen on the animation trigger event \"" + eventPhase + "\" because the animation trigger \"" + eventName + "\" doesn't exist!");
        }
        var /** @type {?} */ elementListeners = this._triggerListeners.get(element);
        if (!elementListeners) {
            this._triggerListeners.set(element, elementListeners = []);
        }
        validatePlayerEvent(eventName, eventPhase);
        var /** @type {?} */ tuple = ({ triggerName: eventName, phase: eventPhase, callback: callback });
        elementListeners.push(tuple);
        return function () {
            // this is queued up in the event that a removal animation is set
            // to fire on the element (the listeners need to be set during flush)
            getOrSetAsInMap(_this._pendingListenerRemovals, element, []).push(tuple);
        };
    };
    /**
     * @return {?}
     */
    DomAnimationEngine.prototype._clearPendingListenerRemovals = function () {
        var _this = this;
        this._pendingListenerRemovals.forEach(function (tuples, element) {
            var /** @type {?} */ elementListeners = _this._triggerListeners.get(element);
            if (elementListeners) {
                tuples.forEach(function (tuple) {
                    var /** @type {?} */ index = elementListeners.indexOf(tuple);
                    if (index >= 0) {
                        elementListeners.splice(index, 1);
                    }
                });
            }
        });
        this._pendingListenerRemovals.clear();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DomAnimationEngine.prototype._onRemovalTransition = function (element) {
        // when a parent animation is set to trigger a removal we want to
        // find all of the children that are currently animating and clear
        // them out by destroying each of them.
        var /** @type {?} */ elms = element.querySelectorAll(MARKED_FOR_ANIMATION_SELECTOR);
        var _loop_1 = function (i) {
            var /** @type {?} */ elm = elms[i];
            var /** @type {?} */ activePlayers = this_1._activeElementAnimations.get(elm);
            if (activePlayers) {
                activePlayers.forEach(function (player) { return player.destroy(); });
            }
            var /** @type {?} */ activeTransitions = this_1._activeTransitionAnimations.get(elm);
            if (activeTransitions) {
                Object.keys(activeTransitions).forEach(function (triggerName) {
                    var /** @type {?} */ player = activeTransitions[triggerName];
                    if (player) {
                        player.destroy();
                    }
                });
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ i = 0; i < elms.length; i++) {
            _loop_1(/** @type {?} */ i);
        }
        // we make a copy of the array because the actual source array is modified
        // each time a player is finished/destroyed (the forEach loop would fail otherwise)
        return copyArray(/** @type {?} */ ((this._activeElementAnimations.get(element))));
    };
    /**
     * @param {?} element
     * @param {?} instruction
     * @return {?}
     */
    DomAnimationEngine.prototype.animateTransition = function (element, instruction) {
        var _this = this;
        var /** @type {?} */ triggerName = instruction.triggerName;
        var /** @type {?} */ previousPlayers;
        if (instruction.isRemovalTransition) {
            previousPlayers = this._onRemovalTransition(element);
        }
        else {
            previousPlayers = [];
            var /** @type {?} */ existingTransitions = this._activeTransitionAnimations.get(element);
            var /** @type {?} */ existingPlayer = existingTransitions ? existingTransitions[triggerName] : null;
            if (existingPlayer) {
                previousPlayers.push(existingPlayer);
            }
        }
        // it's important to do this step before destroying the players
        // so that the onDone callback below won't fire before this
        eraseStyles(element, instruction.fromStyles);
        // we first run this so that the previous animation player
        // data can be passed into the successive animation players
        var /** @type {?} */ totalTime = 0;
        var /** @type {?} */ players = instruction.timelines.map(function (timelineInstruction, i) {
            totalTime = Math.max(totalTime, timelineInstruction.totalTime);
            return _this._buildPlayer(element, timelineInstruction, previousPlayers, i);
        });
        previousPlayers.forEach(function (previousPlayer) { return previousPlayer.destroy(); });
        var /** @type {?} */ player = optimizeGroupPlayer(players);
        player.onDone(function () {
            player.destroy();
            var /** @type {?} */ elmTransitionMap = _this._activeTransitionAnimations.get(element);
            if (elmTransitionMap) {
                delete elmTransitionMap[triggerName];
                if (Object.keys(elmTransitionMap).length == 0) {
                    _this._activeTransitionAnimations.delete(element);
                }
            }
            deleteFromArrayMap(_this._activeElementAnimations, element, player);
            setStyles(element, instruction.toStyles);
        });
        var /** @type {?} */ elmTransitionMap = getOrSetAsInMap(this._activeTransitionAnimations, element, {});
        elmTransitionMap[triggerName] = player;
        this._queuePlayer(element, triggerName, player, makeAnimationEvent(element, triggerName, instruction.fromState, instruction.toState, null, // this will be filled in during event creation
        totalTime));
        return player;
    };
    /**
     * @param {?} element
     * @param {?} instructions
     * @param {?=} previousPlayers
     * @return {?}
     */
    DomAnimationEngine.prototype.animateTimeline = function (element, instructions, previousPlayers) {
        var _this = this;
        if (previousPlayers === void 0) { previousPlayers = []; }
        var /** @type {?} */ players = instructions.map(function (instruction, i) {
            var /** @type {?} */ player = _this._buildPlayer(element, instruction, previousPlayers, i);
            player.onDestroy(function () { deleteFromArrayMap(_this._activeElementAnimations, element, player); });
            _this._markPlayerAsActive(element, player);
            return player;
        });
        return optimizeGroupPlayer(players);
    };
    /**
     * @param {?} element
     * @param {?} instruction
     * @param {?} previousPlayers
     * @param {?=} index
     * @return {?}
     */
    DomAnimationEngine.prototype._buildPlayer = function (element, instruction, previousPlayers, index) {
        if (index === void 0) { index = 0; }
        // only the very first animation can absorb the previous styles. This
        // is here to prevent the an overlap situation where a group animation
        // absorbs previous styles multiple times for the same element.
        if (index && previousPlayers.length) {
            previousPlayers = [];
        }
        return this._driver.animate(element, this._normalizeKeyframes(instruction.keyframes), instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    };
    /**
     * @param {?} keyframes
     * @return {?}
     */
    DomAnimationEngine.prototype._normalizeKeyframes = function (keyframes) {
        var _this = this;
        var /** @type {?} */ errors = [];
        var /** @type {?} */ normalizedKeyframes = [];
        keyframes.forEach(function (kf) {
            var /** @type {?} */ normalizedKeyframe = {};
            Object.keys(kf).forEach(function (prop) {
                var /** @type {?} */ normalizedProp = prop;
                var /** @type {?} */ normalizedValue = kf[prop];
                if (prop != 'offset') {
                    normalizedProp = _this._normalizer.normalizePropertyName(prop, errors);
                    normalizedValue =
                        _this._normalizer.normalizeStyleValue(prop, normalizedProp, kf[prop], errors);
                }
                normalizedKeyframe[normalizedProp] = normalizedValue;
            });
            normalizedKeyframes.push(normalizedKeyframe);
        });
        if (errors.length) {
            var /** @type {?} */ LINE_START = '\n - ';
            throw new Error("Unable to animate due to the following errors:" + LINE_START + errors.join(LINE_START));
        }
        return normalizedKeyframes;
    };
    /**
     * @param {?} element
     * @param {?} player
     * @return {?}
     */
    DomAnimationEngine.prototype._markPlayerAsActive = function (element, player) {
        var /** @type {?} */ elementAnimations = getOrSetAsInMap(this._activeElementAnimations, element, []);
        elementAnimations.push(player);
    };
    /**
     * @param {?} element
     * @param {?} triggerName
     * @param {?} player
     * @param {?} event
     * @return {?}
     */
    DomAnimationEngine.prototype._queuePlayer = function (element, triggerName, player, event) {
        var /** @type {?} */ tuple = ({ element: element, player: player, triggerName: triggerName, event: event });
        this._queuedTransitionAnimations.push(tuple);
        player.init();
        element.classList.add(MARKED_FOR_ANIMATION_CLASSNAME);
        player.onDone(function () { element.classList.remove(MARKED_FOR_ANIMATION_CLASSNAME); });
    };
    /**
     * @return {?}
     */
    DomAnimationEngine.prototype._flushQueuedAnimations = function () {
        var _loop_2 = function () {
            var _a = ((this_2._queuedTransitionAnimations.shift())), player = _a.player, element = _a.element, triggerName = _a.triggerName, event = _a.event;
            var /** @type {?} */ parent = element;
            while (parent = parent.parentNode) {
                // this means that a parent element will or will not
                // have its own animation operation which in this case
                // there's no point in even trying to do an animation
                if (parent[MARKED_FOR_REMOVAL])
                    return "continue-parentLoop";
            }
            var /** @type {?} */ listeners = this_2._triggerListeners.get(element);
            if (listeners) {
                listeners.forEach(function (tuple) {
                    if (tuple.triggerName == triggerName) {
                        listenOnPlayer(player, tuple.phase, event, tuple.callback);
                    }
                });
            }
            // if a removal exists for the given element then we need cancel
            // all the queued players so that a proper removal animation can go
            if (this_2._queuedRemovals.has(element)) {
                player.destroy();
                return "continue";
            }
            this_2._markPlayerAsActive(element, player);
            // in the event that an animation throws an error then we do
            // not want to re-run animations on any previous animations
            // if they have already been kicked off beforehand
            player.init();
            if (!player.hasStarted()) {
                player.play();
            }
        };
        var this_2 = this;
        parentLoop: while (this._queuedTransitionAnimations.length) {
            var state_1 = _loop_2();
            switch (state_1) {
                case "continue-parentLoop": continue parentLoop;
            }
        }
    };
    /**
     * @return {?}
     */
    DomAnimationEngine.prototype.flush = function () {
        var _this = this;
        var /** @type {?} */ leaveListeners = new Map();
        this._queuedRemovals.forEach(function (callback, element) {
            var /** @type {?} */ tuple = _this._pendingListenerRemovals.get(element);
            if (tuple) {
                leaveListeners.set(element, tuple);
                _this._pendingListenerRemovals.delete(element);
            }
        });
        this._clearPendingListenerRemovals();
        this._pendingListenerRemovals = leaveListeners;
        this._flushQueuedAnimations();
        var /** @type {?} */ flushAgain = false;
        this._queuedRemovals.forEach(function (callback, element) {
            // an item that was inserted/removed in the same flush means
            // that an animation should not happen anyway
            if (_this._flaggedInserts.has(element))
                return;
            var /** @type {?} */ parent = element;
            var /** @type {?} */ players = [];
            while (parent = parent.parentNode) {
                // there is no reason to even try to
                if (parent[MARKED_FOR_REMOVAL]) {
                    callback();
                    return;
                }
                var /** @type {?} */ match = _this._activeElementAnimations.get(parent);
                if (match) {
                    players.push.apply(players, match);
                    break;
                }
            }
            // the loop was unable to find an parent that is animating even
            // though this element has set to be removed, so the algorithm
            // should check to see if there are any triggers on the element
            // that are present to handle a leave animation and then setup
            // those players to facilitate the callback after done
            if (players.length == 0) {
                // this means that the element has valid state triggers
                var /** @type {?} */ stateDetails_1 = _this._elementTriggerStates.get(element);
                if (stateDetails_1) {
                    Object.keys(stateDetails_1).forEach(function (triggerName) {
                        flushAgain = true;
                        var /** @type {?} */ oldValue = stateDetails_1[triggerName];
                        var /** @type {?} */ instruction = _this._triggers[triggerName].matchTransition(oldValue, VOID_STATE);
                        if (instruction) {
                            players.push(_this.animateTransition(element, instruction));
                        }
                        else {
                            var /** @type {?} */ event = makeAnimationEvent(element, triggerName, oldValue, VOID_STATE, '', 0);
                            var /** @type {?} */ player = new _angular_animations.NoopAnimationPlayer();
                            _this._queuePlayer(element, triggerName, player, event);
                        }
                    });
                }
            }
            if (players.length) {
                optimizeGroupPlayer(players).onDone(callback);
            }
            else {
                callback();
            }
        });
        this._queuedRemovals.clear();
        this._flaggedInserts.clear();
        // this means that one or more leave animations were detected
        if (flushAgain) {
            this._flushQueuedAnimations();
            this._clearPendingListenerRemovals();
        }
    };
    return DomAnimationEngine;
}());
/**
 * @param {?} map
 * @param {?} key
 * @param {?} defaultValue
 * @return {?}
 */
function getOrSetAsInMap(map, key, defaultValue) {
    var /** @type {?} */ value = map.get(key);
    if (!value) {
        map.set(key, value = defaultValue);
    }
    return value;
}
/**
 * @param {?} map
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function deleteFromArrayMap(map, key, value) {
    var /** @type {?} */ arr = map.get(key);
    if (arr) {
        var /** @type {?} */ index = arr.indexOf(value);
        if (index >= 0) {
            arr.splice(index, 1);
            if (arr.length == 0) {
                map.delete(key);
            }
        }
    }
}
/**
 * @param {?} players
 * @return {?}
 */
function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new _angular_animations.NoopAnimationPlayer();
        case 1:
            return players[0];
        default:
            return new _angular_animations.ɵAnimationGroupPlayer(players);
    }
}
/**
 * @param {?} source
 * @return {?}
 */
function copyArray(source) {
    return source ? source.splice(0) : [];
}
/**
 * @param {?} triggerName
 * @param {?} eventName
 * @return {?}
 */
function validatePlayerEvent(triggerName, eventName) {
    switch (eventName) {
        case 'start':
        case 'done':
            return;
        default:
            throw new Error("The provided animation trigger event \"" + eventName + "\" for the animation trigger \"" + triggerName + "\" is not supported!");
    }
}
/**
 * @param {?} player
 * @param {?} eventName
 * @param {?} baseEvent
 * @param {?} callback
 * @return {?}
 */
function listenOnPlayer(player, eventName, baseEvent, callback) {
    switch (eventName) {
        case 'start':
            player.onStart(function () {
                var /** @type {?} */ event = copyAnimationEvent(baseEvent);
                event.phaseName = 'start';
                callback(event);
            });
            break;
        case 'done':
            player.onDone(function () {
                var /** @type {?} */ event = copyAnimationEvent(baseEvent);
                event.phaseName = 'done';
                callback(event);
            });
            break;
    }
}
/**
 * @param {?} e
 * @return {?}
 */
function copyAnimationEvent(e) {
    return makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, e.phaseName, e.totalTime);
}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName, totalTime) {
    return ({ element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime });
}
/**
 * @param {?} value
 * @return {?}
 */
function normalizeTriggerValue(value) {
    switch (typeof value) {
        case 'boolean':
            return value ? '1' : '0';
        default:
            return value ? value.toString() : null;
    }
}
/**
 * \@experimental Animation support is experimental.
 * @abstract
 */
var AnimationStyleNormalizer = (function () {
    function AnimationStyleNormalizer() {
    }
    /**
     * @abstract
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { };
    /**
     * @abstract
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) { };
    return AnimationStyleNormalizer;
}());
/**
 * \@experimental Animation support is experimental.
 */
var NoopAnimationStyleNormalizer = (function () {
    function NoopAnimationStyleNormalizer() {
    }
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    NoopAnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { return propertyName; };
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    NoopAnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
        return (value);
    };
    return NoopAnimationStyleNormalizer;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Animation = (function () {
    /**
     * @param {?} input
     */
    function Animation(input) {
        var ast = Array.isArray(input) ? _angular_animations.sequence(input) : input;
        var errors = validateAnimationSequence(ast);
        if (errors.length) {
            var errorMessage = "animation validation failed:\n" + errors.join("\n");
            throw new Error(errorMessage);
        }
        this._animationAst = ast;
    }
    /**
     * @param {?} startingStyles
     * @param {?} destinationStyles
     * @return {?}
     */
    Animation.prototype.buildTimelines = function (startingStyles, destinationStyles) {
        var /** @type {?} */ start = Array.isArray(startingStyles) ? normalizeStyles(startingStyles) : (startingStyles);
        var /** @type {?} */ dest = Array.isArray(destinationStyles) ? normalizeStyles(destinationStyles) : (destinationStyles);
        return buildAnimationKeyframes(this._animationAst, start, dest);
    };
    /**
     * @param {?} injector
     * @param {?} element
     * @param {?=} startingStyles
     * @param {?=} destinationStyles
     * @return {?}
     */
    Animation.prototype.create = function (injector, element, startingStyles, destinationStyles) {
        if (startingStyles === void 0) { startingStyles = {}; }
        if (destinationStyles === void 0) { destinationStyles = {}; }
        var /** @type {?} */ instructions = this.buildTimelines(startingStyles, destinationStyles);
        // note the code below is only here to make the tests happy (once the new renderer is
        // within core then the code below will interact with Renderer.transition(...))
        var /** @type {?} */ driver = injector.get(AnimationDriver);
        var /** @type {?} */ normalizer = injector.get(AnimationStyleNormalizer);
        var /** @type {?} */ engine = new DomAnimationEngine(driver, normalizer);
        return engine.animateTimeline(element, instructions);
    };
    return Animation;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsStyleNormalizer = (function (_super) {
    __extends(WebAnimationsStyleNormalizer, _super);
    function WebAnimationsStyleNormalizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    WebAnimationsStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
    };
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    WebAnimationsStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) {
        var /** @type {?} */ unit = '';
        var /** @type {?} */ strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
            if (typeof value === 'number') {
                unit = 'px';
            }
            else {
                var /** @type {?} */ valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
                    errors.push("Please provide a CSS unit value for " + userProvidedProperty + ":" + value);
                }
            }
        }
        return strVal + unit;
    };
    return WebAnimationsStyleNormalizer;
}(AnimationStyleNormalizer));
var DIMENSIONAL_PROP_MAP = makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent'
    .split(','));
/**
 * @param {?} keys
 * @return {?}
 */
function makeBooleanMap(keys) {
    var /** @type {?} */ map = {};
    keys.forEach(function (key) { return map[key] = true; });
    return map;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
/**
 * @param {?} input
 * @return {?}
 */
function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, function () {
        var m = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            m[_i] = arguments[_i];
        }
        return m[1].toUpperCase();
    });
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_STATE_VALUE = 'void';
var DEFAULT_STATE_STYLES = '*';
var NoopAnimationEngine = (function (_super) {
    __extends(NoopAnimationEngine, _super);
    function NoopAnimationEngine() {
        var _this = _super.apply(this, arguments) || this;
        _this._listeners = new Map();
        _this._changes = [];
        _this._flaggedRemovals = new Set();
        _this._onDoneFns = [];
        _this._triggerStyles = Object.create(null);
        return _this;
    }
    /**
     * @param {?} trigger
     * @param {?=} name
     * @return {?}
     */
    NoopAnimationEngine.prototype.registerTrigger = function (trigger, name) {
        name = name || trigger.name;
        if (this._triggerStyles[name]) {
            return;
        }
        var /** @type {?} */ stateMap = {};
        trigger.definitions.forEach(function (def) {
            if (def.type === 0 /* State */) {
                var /** @type {?} */ stateDef = (def);
                stateMap[stateDef.name] = normalizeStyles(stateDef.styles.styles);
            }
        });
        this._triggerStyles[name] = stateMap;
    };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    NoopAnimationEngine.prototype.onInsert = function (element, domFn) { domFn(); };
    /**
     * @param {?} element
     * @param {?} domFn
     * @return {?}
     */
    NoopAnimationEngine.prototype.onRemove = function (element, domFn) {
        domFn();
        if (element['nodeType'] == 1) {
            this._flaggedRemovals.add(element);
        }
    };
    /**
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    NoopAnimationEngine.prototype.setProperty = function (element, property, value) {
        var /** @type {?} */ storageProp = makeStorageProp(property);
        var /** @type {?} */ oldValue = element[storageProp] || DEFAULT_STATE_VALUE;
        this._changes.push(/** @type {?} */ ({ element: element, oldValue: oldValue, newValue: value, triggerName: property }));
        var /** @type {?} */ triggerStateStyles = this._triggerStyles[property] || {};
        var /** @type {?} */ fromStateStyles = triggerStateStyles[oldValue] || triggerStateStyles[DEFAULT_STATE_STYLES];
        if (fromStateStyles) {
            eraseStyles(element, fromStateStyles);
        }
        element[storageProp] = value;
        this._onDoneFns.push(function () {
            var /** @type {?} */ toStateStyles = triggerStateStyles[value] || triggerStateStyles[DEFAULT_STATE_STYLES];
            if (toStateStyles) {
                setStyles(element, toStateStyles);
            }
        });
    };
    /**
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    NoopAnimationEngine.prototype.listen = function (element, eventName, eventPhase, callback) {
        var /** @type {?} */ listeners = this._listeners.get(element);
        if (!listeners) {
            this._listeners.set(element, listeners = []);
        }
        var /** @type {?} */ tuple = ({ triggerName: eventName, eventPhase: eventPhase, callback: callback });
        listeners.push(tuple);
        return function () { return tuple.doRemove = true; };
    };
    /**
     * @return {?}
     */
    NoopAnimationEngine.prototype.flush = function () {
        var _this = this;
        var /** @type {?} */ onStartCallbacks = [];
        var /** @type {?} */ onDoneCallbacks = [];
        /**
         * @param {?} listener
         * @param {?} data
         * @return {?}
         */
        function handleListener(listener, data) {
            var /** @type {?} */ phase = listener.eventPhase;
            var /** @type {?} */ event = makeAnimationEvent$1(data.element, data.triggerName, data.oldValue, data.newValue, phase, 0);
            if (phase == 'start') {
                onStartCallbacks.push(function () { return listener.callback(event); });
            }
            else if (phase == 'done') {
                onDoneCallbacks.push(function () { return listener.callback(event); });
            }
        }
        this._changes.forEach(function (change) {
            var /** @type {?} */ element = change.element;
            var /** @type {?} */ listeners = _this._listeners.get(element);
            if (listeners) {
                listeners.forEach(function (listener) {
                    if (listener.triggerName == change.triggerName) {
                        handleListener(listener, change);
                    }
                });
            }
        });
        // upon removal ALL the animation triggers need to get fired
        this._flaggedRemovals.forEach(function (element) {
            var /** @type {?} */ listeners = _this._listeners.get(element);
            if (listeners) {
                listeners.forEach(function (listener) {
                    var /** @type {?} */ triggerName = listener.triggerName;
                    var /** @type {?} */ storageProp = makeStorageProp(triggerName);
                    handleListener(listener, /** @type {?} */ ({
                        element: element,
                        triggerName: triggerName,
                        oldValue: element[storageProp] || DEFAULT_STATE_VALUE,
                        newValue: DEFAULT_STATE_VALUE
                    }));
                });
            }
        });
        // remove all the listeners after everything is complete
        Array.from(this._listeners.keys()).forEach(function (element) {
            var /** @type {?} */ listenersToKeep = ((_this._listeners.get(element))).filter(function (l) { return !l.doRemove; });
            if (listenersToKeep.length) {
                _this._listeners.set(element, listenersToKeep);
            }
            else {
                _this._listeners.delete(element);
            }
        });
        onStartCallbacks.forEach(function (fn) { return fn(); });
        onDoneCallbacks.forEach(function (fn) { return fn(); });
        this._flaggedRemovals.clear();
        this._changes = [];
        this._onDoneFns.forEach(function (doneFn) { return doneFn(); });
        this._onDoneFns = [];
    };
    Object.defineProperty(NoopAnimationEngine.prototype, "activePlayers", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NoopAnimationEngine.prototype, "queuedPlayers", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    return NoopAnimationEngine;
}(AnimationEngine));
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} phaseName
 * @param {?} totalTime
 * @return {?}
 */
function makeAnimationEvent$1(element, triggerName, fromState, toState, phaseName, totalTime) {
    return ({ element: element, triggerName: triggerName, fromState: fromState, toState: toState, phaseName: phaseName, totalTime: totalTime });
}
/**
 * @param {?} property
 * @return {?}
 */
function makeStorageProp(property) {
    return '_@_' + property;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsPlayer = (function () {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @param {?=} previousPlayers
     */
    function WebAnimationsPlayer(element, keyframes, options, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        var _this = this;
        this.element = element;
        this.keyframes = keyframes;
        this.options = options;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._initialized = false;
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.time = 0;
        this.parentPlayer = null;
        this._duration = options['duration'];
        this._delay = options['delay'] || 0;
        this.time = this._duration + this._delay;
        this.previousStyles = {};
        previousPlayers.forEach(function (player) {
            var styles = player._captureStyles();
            Object.keys(styles).forEach(function (prop) { return _this.previousStyles[prop] = styles[prop]; });
        });
    }
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.init = function () {
        var _this = this;
        if (this._initialized)
            return;
        this._initialized = true;
        var /** @type {?} */ keyframes = this.keyframes.map(function (styles) {
            var /** @type {?} */ formattedKeyframe = {};
            Object.keys(styles).forEach(function (prop, index) {
                var /** @type {?} */ value = styles[prop];
                if (value == _angular_animations.AUTO_STYLE) {
                    value = _computeStyle(_this.element, prop);
                }
                if (value != undefined) {
                    formattedKeyframe[prop] = value;
                }
            });
            return formattedKeyframe;
        });
        var /** @type {?} */ previousStyleProps = Object.keys(this.previousStyles);
        if (previousStyleProps.length) {
            var /** @type {?} */ startingKeyframe_1 = keyframes[0];
            var /** @type {?} */ missingStyleProps_1 = [];
            previousStyleProps.forEach(function (prop) {
                if (!startingKeyframe_1.hasOwnProperty(prop)) {
                    missingStyleProps_1.push(prop);
                }
                startingKeyframe_1[prop] = _this.previousStyles[prop];
            });
            if (missingStyleProps_1.length) {
                var /** @type {?} */ self_1 = this;
                var _loop_3 = function () {
                    var /** @type {?} */ kf = keyframes[i];
                    missingStyleProps_1.forEach(function (prop) {
                        kf[prop] = _computeStyle(self_1.element, prop);
                    });
                };
                // tslint:disable-next-line
                for (var /** @type {?} */ i = 1; i < keyframes.length; i++) {
                    _loop_3();
                }
            }
        }
        this._player = this._triggerWebAnimation(this.element, keyframes, this.options);
        this._finalKeyframe =
            keyframes.length ? _copyKeyframeStyles(keyframes[keyframes.length - 1]) : {};
        // this is required so that the player doesn't start to animate right away
        this._resetDomPlayerState();
        this._player.addEventListener('finish', function () { return _this._onFinish(); });
    };
    /**
     * \@internal
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @return {?}
     */
    WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
        // jscompiler doesn't seem to know animate is a native property because it's not fully
        // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
        return (element['animate'](keyframes, options));
    };
    Object.defineProperty(WebAnimationsPlayer.prototype, "domPlayer", {
        /**
         * @return {?}
         */
        get: function () { return this._player; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onStart = function (fn) { this._onStartFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onDone = function (fn) { this._onDoneFns.push(fn); };
    /**
     * @param {?} fn
     * @return {?}
     */
    WebAnimationsPlayer.prototype.onDestroy = function (fn) { this._onDestroyFns.push(fn); };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.play = function () {
        this.init();
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
        }
        this._player.play();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.pause = function () {
        this.init();
        this._player.pause();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.finish = function () {
        this.init();
        this._onFinish();
        this._player.finish();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.reset = function () {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._resetDomPlayerState = function () {
        if (this._player) {
            this._player.cancel();
        }
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.restart = function () {
        this.reset();
        this.play();
    };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.hasStarted = function () { return this._started; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._resetDomPlayerState();
            this._onFinish();
            this._destroyed = true;
            this._onDestroyFns.forEach(function (fn) { return fn(); });
            this._onDestroyFns = [];
        }
    };
    /**
     * @param {?} p
     * @return {?}
     */
    WebAnimationsPlayer.prototype.setPosition = function (p) { this._player.currentTime = p * this.time; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype.getPosition = function () { return this._player.currentTime / this.time; };
    /**
     * @return {?}
     */
    WebAnimationsPlayer.prototype._captureStyles = function () {
        var _this = this;
        var /** @type {?} */ styles = {};
        if (this.hasStarted()) {
            Object.keys(this._finalKeyframe).forEach(function (prop) {
                if (prop != 'offset') {
                    styles[prop] =
                        _this._finished ? _this._finalKeyframe[prop] : _computeStyle(_this.element, prop);
                }
            });
        }
        return styles;
    };
    return WebAnimationsPlayer;
}());
/**
 * @param {?} element
 * @param {?} prop
 * @return {?}
 */
function _computeStyle(element, prop) {
    return ((window.getComputedStyle(element)))[prop];
}
/**
 * @param {?} styles
 * @return {?}
 */
function _copyKeyframeStyles(styles) {
    var /** @type {?} */ newStyles = {};
    Object.keys(styles).forEach(function (prop) {
        if (prop != 'offset') {
            newStyles[prop] = styles[prop];
        }
    });
    return newStyles;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var WebAnimationsDriver = (function () {
    function WebAnimationsDriver() {
    }
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
    WebAnimationsDriver.prototype.animate = function (element, keyframes, duration, delay, easing, previousPlayers) {
        if (previousPlayers === void 0) { previousPlayers = []; }
        var /** @type {?} */ playerOptions = { 'duration': duration, 'delay': delay, 'fill': 'forwards' };
        // we check for this to avoid having a null|undefined value be present
        // for the easing (which results in an error for certain browsers #9752)
        if (easing) {
            playerOptions['easing'] = easing;
        }
        var /** @type {?} */ previousWebAnimationPlayers = (previousPlayers.filter(function (player) { return player instanceof WebAnimationsPlayer; }));
        return new WebAnimationsPlayer(element, keyframes, playerOptions, previousWebAnimationPlayers);
    };
    return WebAnimationsDriver;
}());
/**
 * @return {?}
 */
function supportsWebAnimations() {
    return typeof Element !== 'undefined' && typeof ((Element)).prototype['animate'] === 'function';
}

exports.AnimationDriver = AnimationDriver;
exports.ɵAnimationEngine = AnimationEngine;
exports.ɵAnimation = Animation;
exports.ɵAnimationStyleNormalizer = AnimationStyleNormalizer;
exports.ɵNoopAnimationStyleNormalizer = NoopAnimationStyleNormalizer;
exports.ɵWebAnimationsStyleNormalizer = WebAnimationsStyleNormalizer;
exports.ɵNoopAnimationDriver = NoopAnimationDriver;
exports.ɵDomAnimationEngine = DomAnimationEngine;
exports.ɵNoopAnimationEngine = NoopAnimationEngine;
exports.ɵWebAnimationsDriver = WebAnimationsDriver;
exports.ɵsupportsWebAnimations = supportsWebAnimations;
exports.ɵWebAnimationsPlayer = WebAnimationsPlayer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=animations-browser.umd.js.map


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = [
	[
		"0",
		"\u0000",
		127
	],
	[
		"a140",
		"　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"
	],
	[
		"a1a1",
		"﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",
		4,
		"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"
	],
	[
		"a240",
		"＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",
		7,
		"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"
	],
	[
		"a2a1",
		"╮╰╯═╞╪╡◢◣◥◤╱╲╳０",
		9,
		"Ⅰ",
		9,
		"〡",
		8,
		"十卄卅Ａ",
		25,
		"ａ",
		21
	],
	[
		"a340",
		"ｗｘｙｚΑ",
		16,
		"Σ",
		6,
		"α",
		16,
		"σ",
		6,
		"ㄅ",
		10
	],
	[
		"a3a1",
		"ㄐ",
		25,
		"˙ˉˊˇˋ"
	],
	[
		"a3e1",
		"€"
	],
	[
		"a440",
		"一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"
	],
	[
		"a4a1",
		"丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"
	],
	[
		"a540",
		"世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"
	],
	[
		"a5a1",
		"央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"
	],
	[
		"a640",
		"共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"
	],
	[
		"a6a1",
		"式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"
	],
	[
		"a740",
		"作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"
	],
	[
		"a7a1",
		"均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"
	],
	[
		"a840",
		"杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"
	],
	[
		"a8a1",
		"芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"
	],
	[
		"a940",
		"咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"
	],
	[
		"a9a1",
		"屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"
	],
	[
		"aa40",
		"昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"
	],
	[
		"aaa1",
		"炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"
	],
	[
		"ab40",
		"陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"
	],
	[
		"aba1",
		"哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"
	],
	[
		"ac40",
		"拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"
	],
	[
		"aca1",
		"活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"
	],
	[
		"ad40",
		"耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"
	],
	[
		"ada1",
		"迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"
	],
	[
		"ae40",
		"哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"
	],
	[
		"aea1",
		"恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"
	],
	[
		"af40",
		"浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"
	],
	[
		"afa1",
		"砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"
	],
	[
		"b040",
		"虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"
	],
	[
		"b0a1",
		"陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"
	],
	[
		"b140",
		"娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"
	],
	[
		"b1a1",
		"情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"
	],
	[
		"b240",
		"毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"
	],
	[
		"b2a1",
		"瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"
	],
	[
		"b340",
		"莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"
	],
	[
		"b3a1",
		"部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"
	],
	[
		"b440",
		"婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"
	],
	[
		"b4a1",
		"插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"
	],
	[
		"b540",
		"溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"
	],
	[
		"b5a1",
		"窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"
	],
	[
		"b640",
		"詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"
	],
	[
		"b6a1",
		"間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"
	],
	[
		"b740",
		"媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"
	],
	[
		"b7a1",
		"楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"
	],
	[
		"b840",
		"睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"
	],
	[
		"b8a1",
		"腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"
	],
	[
		"b940",
		"辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"
	],
	[
		"b9a1",
		"飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"
	],
	[
		"ba40",
		"愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"
	],
	[
		"baa1",
		"滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"
	],
	[
		"bb40",
		"罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"
	],
	[
		"bba1",
		"說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"
	],
	[
		"bc40",
		"劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"
	],
	[
		"bca1",
		"慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"
	],
	[
		"bd40",
		"瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"
	],
	[
		"bda1",
		"翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"
	],
	[
		"be40",
		"輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"
	],
	[
		"bea1",
		"鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"
	],
	[
		"bf40",
		"濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"
	],
	[
		"bfa1",
		"縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"
	],
	[
		"c040",
		"錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"
	],
	[
		"c0a1",
		"嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"
	],
	[
		"c140",
		"瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"
	],
	[
		"c1a1",
		"薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"
	],
	[
		"c240",
		"駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"
	],
	[
		"c2a1",
		"癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"
	],
	[
		"c340",
		"鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"
	],
	[
		"c3a1",
		"獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"
	],
	[
		"c440",
		"願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"
	],
	[
		"c4a1",
		"纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"
	],
	[
		"c540",
		"護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"
	],
	[
		"c5a1",
		"禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"
	],
	[
		"c640",
		"讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"
	],
	[
		"c940",
		"乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"
	],
	[
		"c9a1",
		"氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"
	],
	[
		"ca40",
		"汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"
	],
	[
		"caa1",
		"吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"
	],
	[
		"cb40",
		"杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"
	],
	[
		"cba1",
		"芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"
	],
	[
		"cc40",
		"坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"
	],
	[
		"cca1",
		"怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"
	],
	[
		"cd40",
		"泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"
	],
	[
		"cda1",
		"矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"
	],
	[
		"ce40",
		"哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"
	],
	[
		"cea1",
		"峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"
	],
	[
		"cf40",
		"柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"
	],
	[
		"cfa1",
		"洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"
	],
	[
		"d040",
		"穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"
	],
	[
		"d0a1",
		"苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"
	],
	[
		"d140",
		"唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"
	],
	[
		"d1a1",
		"恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"
	],
	[
		"d240",
		"毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"
	],
	[
		"d2a1",
		"牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"
	],
	[
		"d340",
		"笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"
	],
	[
		"d3a1",
		"荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"
	],
	[
		"d440",
		"酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"
	],
	[
		"d4a1",
		"唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"
	],
	[
		"d540",
		"崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"
	],
	[
		"d5a1",
		"捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"
	],
	[
		"d640",
		"淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"
	],
	[
		"d6a1",
		"痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"
	],
	[
		"d740",
		"耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"
	],
	[
		"d7a1",
		"蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"
	],
	[
		"d840",
		"釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"
	],
	[
		"d8a1",
		"堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"
	],
	[
		"d940",
		"惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"
	],
	[
		"d9a1",
		"晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"
	],
	[
		"da40",
		"湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"
	],
	[
		"daa1",
		"琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"
	],
	[
		"db40",
		"罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"
	],
	[
		"dba1",
		"菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"
	],
	[
		"dc40",
		"軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"
	],
	[
		"dca1",
		"隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"
	],
	[
		"dd40",
		"媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"
	],
	[
		"dda1",
		"搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"
	],
	[
		"de40",
		"毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"
	],
	[
		"dea1",
		"煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"
	],
	[
		"df40",
		"稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"
	],
	[
		"dfa1",
		"腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"
	],
	[
		"e040",
		"觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"
	],
	[
		"e0a1",
		"遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"
	],
	[
		"e140",
		"凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"
	],
	[
		"e1a1",
		"寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"
	],
	[
		"e240",
		"榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"
	],
	[
		"e2a1",
		"漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"
	],
	[
		"e340",
		"禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"
	],
	[
		"e3a1",
		"耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"
	],
	[
		"e440",
		"裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"
	],
	[
		"e4a1",
		"銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"
	],
	[
		"e540",
		"噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"
	],
	[
		"e5a1",
		"憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"
	],
	[
		"e640",
		"澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"
	],
	[
		"e6a1",
		"獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"
	],
	[
		"e740",
		"膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"
	],
	[
		"e7a1",
		"蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"
	],
	[
		"e840",
		"踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"
	],
	[
		"e8a1",
		"銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"
	],
	[
		"e940",
		"噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"
	],
	[
		"e9a1",
		"憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"
	],
	[
		"ea40",
		"澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"
	],
	[
		"eaa1",
		"瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"
	],
	[
		"eb40",
		"蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"
	],
	[
		"eba1",
		"諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"
	],
	[
		"ec40",
		"錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"
	],
	[
		"eca1",
		"魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"
	],
	[
		"ed40",
		"檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"
	],
	[
		"eda1",
		"瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"
	],
	[
		"ee40",
		"蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"
	],
	[
		"eea1",
		"謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"
	],
	[
		"ef40",
		"鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"
	],
	[
		"efa1",
		"鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"
	],
	[
		"f040",
		"璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"
	],
	[
		"f0a1",
		"臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"
	],
	[
		"f140",
		"蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"
	],
	[
		"f1a1",
		"鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"
	],
	[
		"f240",
		"徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"
	],
	[
		"f2a1",
		"礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"
	],
	[
		"f340",
		"譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"
	],
	[
		"f3a1",
		"鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"
	],
	[
		"f440",
		"嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"
	],
	[
		"f4a1",
		"禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"
	],
	[
		"f540",
		"鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"
	],
	[
		"f5a1",
		"鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"
	],
	[
		"f640",
		"蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"
	],
	[
		"f6a1",
		"騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"
	],
	[
		"f740",
		"糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"
	],
	[
		"f7a1",
		"驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"
	],
	[
		"f840",
		"讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"
	],
	[
		"f8a1",
		"齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"
	],
	[
		"f940",
		"纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"
	],
	[
		"f9a1",
		"龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"
	]
];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = [
	[
		"a140",
		"",
		62
	],
	[
		"a180",
		"",
		32
	],
	[
		"a240",
		"",
		62
	],
	[
		"a280",
		"",
		32
	],
	[
		"a2ab",
		"",
		5
	],
	[
		"a2e3",
		"€"
	],
	[
		"a2ef",
		""
	],
	[
		"a2fd",
		""
	],
	[
		"a340",
		"",
		62
	],
	[
		"a380",
		"",
		31,
		"　"
	],
	[
		"a440",
		"",
		62
	],
	[
		"a480",
		"",
		32
	],
	[
		"a4f4",
		"",
		10
	],
	[
		"a540",
		"",
		62
	],
	[
		"a580",
		"",
		32
	],
	[
		"a5f7",
		"",
		7
	],
	[
		"a640",
		"",
		62
	],
	[
		"a680",
		"",
		32
	],
	[
		"a6b9",
		"",
		7
	],
	[
		"a6d9",
		"",
		6
	],
	[
		"a6ec",
		""
	],
	[
		"a6f3",
		""
	],
	[
		"a6f6",
		"",
		8
	],
	[
		"a740",
		"",
		62
	],
	[
		"a780",
		"",
		32
	],
	[
		"a7c2",
		"",
		14
	],
	[
		"a7f2",
		"",
		12
	],
	[
		"a896",
		"",
		10
	],
	[
		"a8bc",
		""
	],
	[
		"a8bf",
		"ǹ"
	],
	[
		"a8c1",
		""
	],
	[
		"a8ea",
		"",
		20
	],
	[
		"a958",
		""
	],
	[
		"a95b",
		""
	],
	[
		"a95d",
		""
	],
	[
		"a989",
		"〾⿰",
		11
	],
	[
		"a997",
		"",
		12
	],
	[
		"a9f0",
		"",
		14
	],
	[
		"aaa1",
		"",
		93
	],
	[
		"aba1",
		"",
		93
	],
	[
		"aca1",
		"",
		93
	],
	[
		"ada1",
		"",
		93
	],
	[
		"aea1",
		"",
		93
	],
	[
		"afa1",
		"",
		93
	],
	[
		"d7fa",
		"",
		4
	],
	[
		"f8a1",
		"",
		93
	],
	[
		"f9a1",
		"",
		93
	],
	[
		"faa1",
		"",
		93
	],
	[
		"fba1",
		"",
		93
	],
	[
		"fca1",
		"",
		93
	],
	[
		"fda1",
		"",
		93
	],
	[
		"fe50",
		"⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"
	],
	[
		"fe80",
		"䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",
		6,
		"䶮",
		93
	]
];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

module.exports = FetchError;

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {

	// hide custom error implementation details from end-users
	Error.captureStackTrace(this, this.constructor);

	this.name = this.constructor.name;
	this.message = message;
	this.type = type;

	// when err.type is `system`, err.code contains system error code
	if (systemError) {
		this.code = this.errno = systemError.code;
	}

}

__webpack_require__(5).inherits(FetchError, Error);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Tokenizer = __webpack_require__(7),
    HTML = __webpack_require__(2);

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES,
    ATTRS = HTML.ATTRS;


//MIME types
var MIME_TYPES = {
    TEXT_HTML: 'text/html',
    APPLICATION_XML: 'application/xhtml+xml'
};

//Attributes
var DEFINITION_URL_ATTR = 'definitionurl',
    ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL',
    SVG_ATTRS_ADJUSTMENT_MAP = {
        'attributename': 'attributeName',
        'attributetype': 'attributeType',
        'basefrequency': 'baseFrequency',
        'baseprofile': 'baseProfile',
        'calcmode': 'calcMode',
        'clippathunits': 'clipPathUnits',
        'diffuseconstant': 'diffuseConstant',
        'edgemode': 'edgeMode',
        'filterunits': 'filterUnits',
        'glyphref': 'glyphRef',
        'gradienttransform': 'gradientTransform',
        'gradientunits': 'gradientUnits',
        'kernelmatrix': 'kernelMatrix',
        'kernelunitlength': 'kernelUnitLength',
        'keypoints': 'keyPoints',
        'keysplines': 'keySplines',
        'keytimes': 'keyTimes',
        'lengthadjust': 'lengthAdjust',
        'limitingconeangle': 'limitingConeAngle',
        'markerheight': 'markerHeight',
        'markerunits': 'markerUnits',
        'markerwidth': 'markerWidth',
        'maskcontentunits': 'maskContentUnits',
        'maskunits': 'maskUnits',
        'numoctaves': 'numOctaves',
        'pathlength': 'pathLength',
        'patterncontentunits': 'patternContentUnits',
        'patterntransform': 'patternTransform',
        'patternunits': 'patternUnits',
        'pointsatx': 'pointsAtX',
        'pointsaty': 'pointsAtY',
        'pointsatz': 'pointsAtZ',
        'preservealpha': 'preserveAlpha',
        'preserveaspectratio': 'preserveAspectRatio',
        'primitiveunits': 'primitiveUnits',
        'refx': 'refX',
        'refy': 'refY',
        'repeatcount': 'repeatCount',
        'repeatdur': 'repeatDur',
        'requiredextensions': 'requiredExtensions',
        'requiredfeatures': 'requiredFeatures',
        'specularconstant': 'specularConstant',
        'specularexponent': 'specularExponent',
        'spreadmethod': 'spreadMethod',
        'startoffset': 'startOffset',
        'stddeviation': 'stdDeviation',
        'stitchtiles': 'stitchTiles',
        'surfacescale': 'surfaceScale',
        'systemlanguage': 'systemLanguage',
        'tablevalues': 'tableValues',
        'targetx': 'targetX',
        'targety': 'targetY',
        'textlength': 'textLength',
        'viewbox': 'viewBox',
        'viewtarget': 'viewTarget',
        'xchannelselector': 'xChannelSelector',
        'ychannelselector': 'yChannelSelector',
        'zoomandpan': 'zoomAndPan'
    },
    XML_ATTRS_ADJUSTMENT_MAP = {
        'xlink:actuate': {prefix: 'xlink', name: 'actuate', namespace: NS.XLINK},
        'xlink:arcrole': {prefix: 'xlink', name: 'arcrole', namespace: NS.XLINK},
        'xlink:href': {prefix: 'xlink', name: 'href', namespace: NS.XLINK},
        'xlink:role': {prefix: 'xlink', name: 'role', namespace: NS.XLINK},
        'xlink:show': {prefix: 'xlink', name: 'show', namespace: NS.XLINK},
        'xlink:title': {prefix: 'xlink', name: 'title', namespace: NS.XLINK},
        'xlink:type': {prefix: 'xlink', name: 'type', namespace: NS.XLINK},
        'xml:base': {prefix: 'xml', name: 'base', namespace: NS.XML},
        'xml:lang': {prefix: 'xml', name: 'lang', namespace: NS.XML},
        'xml:space': {prefix: 'xml', name: 'space', namespace: NS.XML},
        'xmlns': {prefix: '', name: 'xmlns', namespace: NS.XMLNS},
        'xmlns:xlink': {prefix: 'xmlns', name: 'xlink', namespace: NS.XMLNS}

    };

//SVG tag names adjustment map
var SVG_TAG_NAMES_ADJUSTMENT_MAP = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
    'altglyph': 'altGlyph',
    'altglyphdef': 'altGlyphDef',
    'altglyphitem': 'altGlyphItem',
    'animatecolor': 'animateColor',
    'animatemotion': 'animateMotion',
    'animatetransform': 'animateTransform',
    'clippath': 'clipPath',
    'feblend': 'feBlend',
    'fecolormatrix': 'feColorMatrix',
    'fecomponenttransfer': 'feComponentTransfer',
    'fecomposite': 'feComposite',
    'feconvolvematrix': 'feConvolveMatrix',
    'fediffuselighting': 'feDiffuseLighting',
    'fedisplacementmap': 'feDisplacementMap',
    'fedistantlight': 'feDistantLight',
    'feflood': 'feFlood',
    'fefunca': 'feFuncA',
    'fefuncb': 'feFuncB',
    'fefuncg': 'feFuncG',
    'fefuncr': 'feFuncR',
    'fegaussianblur': 'feGaussianBlur',
    'feimage': 'feImage',
    'femerge': 'feMerge',
    'femergenode': 'feMergeNode',
    'femorphology': 'feMorphology',
    'feoffset': 'feOffset',
    'fepointlight': 'fePointLight',
    'fespecularlighting': 'feSpecularLighting',
    'fespotlight': 'feSpotLight',
    'fetile': 'feTile',
    'feturbulence': 'feTurbulence',
    'foreignobject': 'foreignObject',
    'glyphref': 'glyphRef',
    'lineargradient': 'linearGradient',
    'radialgradient': 'radialGradient',
    'textpath': 'textPath'
};

//Tags that causes exit from foreign content
var EXITS_FOREIGN_CONTENT = Object.create(null);

EXITS_FOREIGN_CONTENT[$.B] = true;
EXITS_FOREIGN_CONTENT[$.BIG] = true;
EXITS_FOREIGN_CONTENT[$.BLOCKQUOTE] = true;
EXITS_FOREIGN_CONTENT[$.BODY] = true;
EXITS_FOREIGN_CONTENT[$.BR] = true;
EXITS_FOREIGN_CONTENT[$.CENTER] = true;
EXITS_FOREIGN_CONTENT[$.CODE] = true;
EXITS_FOREIGN_CONTENT[$.DD] = true;
EXITS_FOREIGN_CONTENT[$.DIV] = true;
EXITS_FOREIGN_CONTENT[$.DL] = true;
EXITS_FOREIGN_CONTENT[$.DT] = true;
EXITS_FOREIGN_CONTENT[$.EM] = true;
EXITS_FOREIGN_CONTENT[$.EMBED] = true;
EXITS_FOREIGN_CONTENT[$.H1] = true;
EXITS_FOREIGN_CONTENT[$.H2] = true;
EXITS_FOREIGN_CONTENT[$.H3] = true;
EXITS_FOREIGN_CONTENT[$.H4] = true;
EXITS_FOREIGN_CONTENT[$.H5] = true;
EXITS_FOREIGN_CONTENT[$.H6] = true;
EXITS_FOREIGN_CONTENT[$.HEAD] = true;
EXITS_FOREIGN_CONTENT[$.HR] = true;
EXITS_FOREIGN_CONTENT[$.I] = true;
EXITS_FOREIGN_CONTENT[$.IMG] = true;
EXITS_FOREIGN_CONTENT[$.LI] = true;
EXITS_FOREIGN_CONTENT[$.LISTING] = true;
EXITS_FOREIGN_CONTENT[$.MENU] = true;
EXITS_FOREIGN_CONTENT[$.META] = true;
EXITS_FOREIGN_CONTENT[$.NOBR] = true;
EXITS_FOREIGN_CONTENT[$.OL] = true;
EXITS_FOREIGN_CONTENT[$.P] = true;
EXITS_FOREIGN_CONTENT[$.PRE] = true;
EXITS_FOREIGN_CONTENT[$.RUBY] = true;
EXITS_FOREIGN_CONTENT[$.S] = true;
EXITS_FOREIGN_CONTENT[$.SMALL] = true;
EXITS_FOREIGN_CONTENT[$.SPAN] = true;
EXITS_FOREIGN_CONTENT[$.STRONG] = true;
EXITS_FOREIGN_CONTENT[$.STRIKE] = true;
EXITS_FOREIGN_CONTENT[$.SUB] = true;
EXITS_FOREIGN_CONTENT[$.SUP] = true;
EXITS_FOREIGN_CONTENT[$.TABLE] = true;
EXITS_FOREIGN_CONTENT[$.TT] = true;
EXITS_FOREIGN_CONTENT[$.U] = true;
EXITS_FOREIGN_CONTENT[$.UL] = true;
EXITS_FOREIGN_CONTENT[$.VAR] = true;

//Check exit from foreign content
exports.causesExit = function (startTagToken) {
    var tn = startTagToken.tagName;
    var isFontWithAttrs = tn === $.FONT && (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null ||
                                            Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null ||
                                            Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);

    return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
};

//Token adjustments
exports.adjustTokenMathMLAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
            break;
        }
    }
};

exports.adjustTokenSVGAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
        var adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

        if (adjustedAttrName)
            token.attrs[i].name = adjustedAttrName;
    }
};

exports.adjustTokenXMLAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
        var adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

        if (adjustedAttrEntry) {
            token.attrs[i].prefix = adjustedAttrEntry.prefix;
            token.attrs[i].name = adjustedAttrEntry.name;
            token.attrs[i].namespace = adjustedAttrEntry.namespace;
        }
    }
};

exports.adjustTokenSVGTagName = function (token) {
    var adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];

    if (adjustedTagName)
        token.tagName = adjustedTagName;
};

//Integration points
function isMathMLTextIntegrationPoint(tn, ns) {
    return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
}

function isHtmlIntegrationPoint(tn, ns, attrs) {
    if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].name === ATTRS.ENCODING) {
                var value = attrs[i].value.toLowerCase();

                return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
            }
        }
    }

    return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
}

exports.isIntegrationPoint = function (tn, ns, attrs, foreignNS) {
    if ((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs))
        return true;

    if ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns))
        return true;

    return false;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Tokenizer = __webpack_require__(7),
    OpenElementStack = __webpack_require__(26),
    FormattingElementList = __webpack_require__(87),
    locationInfoMixin = __webpack_require__(85),
    defaultTreeAdapter = __webpack_require__(16),
    doctype = __webpack_require__(13),
    foreignContent = __webpack_require__(24),
    mergeOptions = __webpack_require__(14),
    UNICODE = __webpack_require__(6),
    HTML = __webpack_require__(2);

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES,
    ATTRS = HTML.ATTRS;

var DEFAULT_OPTIONS = {
    locationInfo: false,
    treeAdapter: defaultTreeAdapter
};

//Misc constants
var HIDDEN_INPUT_TYPE = 'hidden';

//Adoption agency loops iteration count
var AA_OUTER_LOOP_ITER = 8,
    AA_INNER_LOOP_ITER = 3;

//Insertion modes
var INITIAL_MODE = 'INITIAL_MODE',
    BEFORE_HTML_MODE = 'BEFORE_HTML_MODE',
    BEFORE_HEAD_MODE = 'BEFORE_HEAD_MODE',
    IN_HEAD_MODE = 'IN_HEAD_MODE',
    AFTER_HEAD_MODE = 'AFTER_HEAD_MODE',
    IN_BODY_MODE = 'IN_BODY_MODE',
    TEXT_MODE = 'TEXT_MODE',
    IN_TABLE_MODE = 'IN_TABLE_MODE',
    IN_TABLE_TEXT_MODE = 'IN_TABLE_TEXT_MODE',
    IN_CAPTION_MODE = 'IN_CAPTION_MODE',
    IN_COLUMN_GROUP_MODE = 'IN_COLUMN_GROUP_MODE',
    IN_TABLE_BODY_MODE = 'IN_TABLE_BODY_MODE',
    IN_ROW_MODE = 'IN_ROW_MODE',
    IN_CELL_MODE = 'IN_CELL_MODE',
    IN_SELECT_MODE = 'IN_SELECT_MODE',
    IN_SELECT_IN_TABLE_MODE = 'IN_SELECT_IN_TABLE_MODE',
    IN_TEMPLATE_MODE = 'IN_TEMPLATE_MODE',
    AFTER_BODY_MODE = 'AFTER_BODY_MODE',
    IN_FRAMESET_MODE = 'IN_FRAMESET_MODE',
    AFTER_FRAMESET_MODE = 'AFTER_FRAMESET_MODE',
    AFTER_AFTER_BODY_MODE = 'AFTER_AFTER_BODY_MODE',
    AFTER_AFTER_FRAMESET_MODE = 'AFTER_AFTER_FRAMESET_MODE';

//Insertion mode reset map
var INSERTION_MODE_RESET_MAP = Object.create(null);

INSERTION_MODE_RESET_MAP[$.TR] = IN_ROW_MODE;
INSERTION_MODE_RESET_MAP[$.TBODY] =
INSERTION_MODE_RESET_MAP[$.THEAD] =
INSERTION_MODE_RESET_MAP[$.TFOOT] = IN_TABLE_BODY_MODE;
INSERTION_MODE_RESET_MAP[$.CAPTION] = IN_CAPTION_MODE;
INSERTION_MODE_RESET_MAP[$.COLGROUP] = IN_COLUMN_GROUP_MODE;
INSERTION_MODE_RESET_MAP[$.TABLE] = IN_TABLE_MODE;
INSERTION_MODE_RESET_MAP[$.BODY] = IN_BODY_MODE;
INSERTION_MODE_RESET_MAP[$.FRAMESET] = IN_FRAMESET_MODE;

//Template insertion mode switch map
var TEMPLATE_INSERTION_MODE_SWITCH_MAP = Object.create(null);

TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.CAPTION] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COLGROUP] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TBODY] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TFOOT] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.THEAD] = IN_TABLE_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COL] = IN_COLUMN_GROUP_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TR] = IN_TABLE_BODY_MODE;
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TD] =
TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TH] = IN_ROW_MODE;

//Token handlers map for insertion modes
var _ = Object.create(null);

_[INITIAL_MODE] = Object.create(null);
_[INITIAL_MODE][Tokenizer.CHARACTER_TOKEN] =
_[INITIAL_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInInitialMode;
_[INITIAL_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_[INITIAL_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[INITIAL_MODE][Tokenizer.DOCTYPE_TOKEN] = doctypeInInitialMode;
_[INITIAL_MODE][Tokenizer.START_TAG_TOKEN] =
_[INITIAL_MODE][Tokenizer.END_TAG_TOKEN] =
_[INITIAL_MODE][Tokenizer.EOF_TOKEN] = tokenInInitialMode;

_[BEFORE_HTML_MODE] = Object.create(null);
_[BEFORE_HTML_MODE][Tokenizer.CHARACTER_TOKEN] =
_[BEFORE_HTML_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHtml;
_[BEFORE_HTML_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_[BEFORE_HTML_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[BEFORE_HTML_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[BEFORE_HTML_MODE][Tokenizer.START_TAG_TOKEN] = startTagBeforeHtml;
_[BEFORE_HTML_MODE][Tokenizer.END_TAG_TOKEN] = endTagBeforeHtml;
_[BEFORE_HTML_MODE][Tokenizer.EOF_TOKEN] = tokenBeforeHtml;

_[BEFORE_HEAD_MODE] = Object.create(null);
_[BEFORE_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
_[BEFORE_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHead;
_[BEFORE_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
_[BEFORE_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[BEFORE_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[BEFORE_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagBeforeHead;
_[BEFORE_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagBeforeHead;
_[BEFORE_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenBeforeHead;

_[IN_HEAD_MODE] = Object.create(null);
_[IN_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInHead;
_[IN_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagInHead;
_[IN_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagInHead;
_[IN_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenInHead;

_[AFTER_HEAD_MODE] = Object.create(null);
_[AFTER_HEAD_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_HEAD_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterHead;
_[AFTER_HEAD_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[AFTER_HEAD_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[AFTER_HEAD_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_HEAD_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterHead;
_[AFTER_HEAD_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterHead;
_[AFTER_HEAD_MODE][Tokenizer.EOF_TOKEN] = tokenAfterHead;

_[IN_BODY_MODE] = Object.create(null);
_[IN_BODY_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagInBody;
_[IN_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagInBody;
_[IN_BODY_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[TEXT_MODE] = Object.create(null);
_[TEXT_MODE][Tokenizer.CHARACTER_TOKEN] =
_[TEXT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[TEXT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[TEXT_MODE][Tokenizer.COMMENT_TOKEN] =
_[TEXT_MODE][Tokenizer.DOCTYPE_TOKEN] =
_[TEXT_MODE][Tokenizer.START_TAG_TOKEN] = ignoreToken;
_[TEXT_MODE][Tokenizer.END_TAG_TOKEN] = endTagInText;
_[TEXT_MODE][Tokenizer.EOF_TOKEN] = eofInText;

_[IN_TABLE_MODE] = Object.create(null);
_[IN_TABLE_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_TABLE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[IN_TABLE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_[IN_TABLE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_TABLE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_TABLE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTable;
_[IN_TABLE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTable;
_[IN_TABLE_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_TABLE_TEXT_MODE] = Object.create(null);
_[IN_TABLE_TEXT_MODE][Tokenizer.CHARACTER_TOKEN] = characterInTableText;
_[IN_TABLE_TEXT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_TABLE_TEXT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInTableText;
_[IN_TABLE_TEXT_MODE][Tokenizer.COMMENT_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.DOCTYPE_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.START_TAG_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.END_TAG_TOKEN] =
_[IN_TABLE_TEXT_MODE][Tokenizer.EOF_TOKEN] = tokenInTableText;

_[IN_CAPTION_MODE] = Object.create(null);
_[IN_CAPTION_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_CAPTION_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_CAPTION_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_CAPTION_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_CAPTION_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_CAPTION_MODE][Tokenizer.START_TAG_TOKEN] = startTagInCaption;
_[IN_CAPTION_MODE][Tokenizer.END_TAG_TOKEN] = endTagInCaption;
_[IN_CAPTION_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_COLUMN_GROUP_MODE] = Object.create(null);
_[IN_COLUMN_GROUP_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_COLUMN_GROUP_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenInColumnGroup;
_[IN_COLUMN_GROUP_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_COLUMN_GROUP_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_COLUMN_GROUP_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_COLUMN_GROUP_MODE][Tokenizer.START_TAG_TOKEN] = startTagInColumnGroup;
_[IN_COLUMN_GROUP_MODE][Tokenizer.END_TAG_TOKEN] = endTagInColumnGroup;
_[IN_COLUMN_GROUP_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_TABLE_BODY_MODE] = Object.create(null);
_[IN_TABLE_BODY_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_TABLE_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[IN_TABLE_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_[IN_TABLE_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_TABLE_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_TABLE_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTableBody;
_[IN_TABLE_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTableBody;
_[IN_TABLE_BODY_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_ROW_MODE] = Object.create(null);
_[IN_ROW_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_ROW_MODE][Tokenizer.NULL_CHARACTER_TOKEN] =
_[IN_ROW_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
_[IN_ROW_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_ROW_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_ROW_MODE][Tokenizer.START_TAG_TOKEN] = startTagInRow;
_[IN_ROW_MODE][Tokenizer.END_TAG_TOKEN] = endTagInRow;
_[IN_ROW_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_CELL_MODE] = Object.create(null);
_[IN_CELL_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_CELL_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_CELL_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_CELL_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_CELL_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_CELL_MODE][Tokenizer.START_TAG_TOKEN] = startTagInCell;
_[IN_CELL_MODE][Tokenizer.END_TAG_TOKEN] = endTagInCell;
_[IN_CELL_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_SELECT_MODE] = Object.create(null);
_[IN_SELECT_MODE][Tokenizer.CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_SELECT_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_SELECT_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_SELECT_MODE][Tokenizer.START_TAG_TOKEN] = startTagInSelect;
_[IN_SELECT_MODE][Tokenizer.END_TAG_TOKEN] = endTagInSelect;
_[IN_SELECT_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_SELECT_IN_TABLE_MODE] = Object.create(null);
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInSelectInTable;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInSelectInTable;
_[IN_SELECT_IN_TABLE_MODE][Tokenizer.EOF_TOKEN] = eofInBody;

_[IN_TEMPLATE_MODE] = Object.create(null);
_[IN_TEMPLATE_MODE][Tokenizer.CHARACTER_TOKEN] = characterInBody;
_[IN_TEMPLATE_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_TEMPLATE_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[IN_TEMPLATE_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_TEMPLATE_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_TEMPLATE_MODE][Tokenizer.START_TAG_TOKEN] = startTagInTemplate;
_[IN_TEMPLATE_MODE][Tokenizer.END_TAG_TOKEN] = endTagInTemplate;
_[IN_TEMPLATE_MODE][Tokenizer.EOF_TOKEN] = eofInTemplate;

_[AFTER_BODY_MODE] = Object.create(null);
_[AFTER_BODY_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterBody;
_[AFTER_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[AFTER_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToRootHtmlElement;
_[AFTER_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterBody;
_[AFTER_BODY_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterBody;
_[AFTER_BODY_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[IN_FRAMESET_MODE] = Object.create(null);
_[IN_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
_[IN_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[IN_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[IN_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[IN_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[IN_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagInFrameset;
_[IN_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = endTagInFrameset;
_[IN_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[AFTER_FRAMESET_MODE] = Object.create(null);
_[AFTER_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[AFTER_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
_[AFTER_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendComment;
_[AFTER_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterFrameset;
_[AFTER_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = endTagAfterFrameset;
_[AFTER_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[AFTER_AFTER_BODY_MODE] = Object.create(null);
_[AFTER_AFTER_BODY_MODE][Tokenizer.CHARACTER_TOKEN] = tokenAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
_[AFTER_AFTER_BODY_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_AFTER_BODY_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.END_TAG_TOKEN] = tokenAfterAfterBody;
_[AFTER_AFTER_BODY_MODE][Tokenizer.EOF_TOKEN] = stopParsing;

_[AFTER_AFTER_FRAMESET_MODE] = Object.create(null);
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.CHARACTER_TOKEN] =
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.DOCTYPE_TOKEN] = ignoreToken;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.START_TAG_TOKEN] = startTagAfterAfterFrameset;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.END_TAG_TOKEN] = ignoreToken;
_[AFTER_AFTER_FRAMESET_MODE][Tokenizer.EOF_TOKEN] = stopParsing;


//Parser
var Parser = module.exports = function (options) {
    this.options = mergeOptions(DEFAULT_OPTIONS, options);

    this.treeAdapter = this.options.treeAdapter;
    this.pendingScript = null;

    if (this.options.locationInfo)
        locationInfoMixin.assign(this);
};

// API
Parser.prototype.parse = function (html) {
    var document = this.treeAdapter.createDocument();

    this._bootstrap(document, null);
    this.tokenizer.write(html, true);
    this._runParsingLoop(null);

    return document;
};

Parser.prototype.parseFragment = function (html, fragmentContext) {
    //NOTE: use <template> element as a fragment context if context element was not provided,
    //so we will parse in "forgiving" manner
    if (!fragmentContext)
        fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);

    //NOTE: create fake element which will be used as 'document' for fragment parsing.
    //This is important for jsdom there 'document' can't be recreated, therefore
    //fragment parsing causes messing of the main `document`.
    var documentMock = this.treeAdapter.createElement('documentmock', NS.HTML, []);

    this._bootstrap(documentMock, fragmentContext);

    if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE)
        this._pushTmplInsertionMode(IN_TEMPLATE_MODE);

    this._initTokenizerForFragmentParsing();
    this._insertFakeRootElement();
    this._resetInsertionMode();
    this._findFormInFragmentContext();
    this.tokenizer.write(html, true);
    this._runParsingLoop(null);

    var rootElement = this.treeAdapter.getFirstChild(documentMock),
        fragment = this.treeAdapter.createDocumentFragment();

    this._adoptNodes(rootElement, fragment);

    return fragment;
};

//Bootstrap parser
Parser.prototype._bootstrap = function (document, fragmentContext) {
    this.tokenizer = new Tokenizer(this.options);

    this.stopped = false;

    this.insertionMode = INITIAL_MODE;
    this.originalInsertionMode = '';

    this.document = document;
    this.fragmentContext = fragmentContext;

    this.headElement = null;
    this.formElement = null;

    this.openElements = new OpenElementStack(this.document, this.treeAdapter);
    this.activeFormattingElements = new FormattingElementList(this.treeAdapter);

    this.tmplInsertionModeStack = [];
    this.tmplInsertionModeStackTop = -1;
    this.currentTmplInsertionMode = null;

    this.pendingCharacterTokens = [];
    this.hasNonWhitespacePendingCharacterToken = false;

    this.framesetOk = true;
    this.skipNextNewLine = false;
    this.fosterParentingEnabled = false;
};

//Parsing loop
Parser.prototype._runParsingLoop  = function (scriptHandler) {
    while (!this.stopped) {
        this._setupTokenizerCDATAMode();

        var token = this.tokenizer.getNextToken();

        if (token.type === Tokenizer.HIBERNATION_TOKEN)
            break;

        if (this.skipNextNewLine) {
            this.skipNextNewLine = false;

            if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
                if (token.chars.length === 1)
                    continue;

                token.chars = token.chars.substr(1);
            }
        }

        this._processInputToken(token);

        if (scriptHandler && this.pendingScript)
            break;
    }
};

Parser.prototype.runParsingLoopForCurrentChunk = function (writeCallback, scriptHandler) {
    this._runParsingLoop(scriptHandler);

    if (scriptHandler && this.pendingScript) {
        var script = this.pendingScript;

        this.pendingScript = null;

        scriptHandler(script);

        return;
    }

    if (writeCallback)
        writeCallback();
};

//Text parsing
Parser.prototype._setupTokenizerCDATAMode = function () {
    var current = this._getAdjustedCurrentElement();

    this.tokenizer.allowCDATA = current && current !== this.document &&
                                this.treeAdapter.getNamespaceURI(current) !== NS.HTML && !this._isIntegrationPoint(current);
};

Parser.prototype._switchToTextParsing = function (currentToken, nextTokenizerState) {
    this._insertElement(currentToken, NS.HTML);
    this.tokenizer.state = nextTokenizerState;
    this.originalInsertionMode = this.insertionMode;
    this.insertionMode = TEXT_MODE;
};

Parser.prototype.switchToPlaintextParsing = function () {
    this.insertionMode = TEXT_MODE;
    this.originalInsertionMode = IN_BODY_MODE;
    this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
};

//Fragment parsing
Parser.prototype._getAdjustedCurrentElement = function () {
    return this.openElements.stackTop === 0 && this.fragmentContext ?
        this.fragmentContext :
        this.openElements.current;
};

Parser.prototype._findFormInFragmentContext = function () {
    var node = this.fragmentContext;

    do {
        if (this.treeAdapter.getTagName(node) === $.FORM) {
            this.formElement = node;
            break;
        }

        node = this.treeAdapter.getParentNode(node);
    } while (node);
};

Parser.prototype._initTokenizerForFragmentParsing = function () {
    if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
        var tn = this.treeAdapter.getTagName(this.fragmentContext);

        if (tn === $.TITLE || tn === $.TEXTAREA)
            this.tokenizer.state = Tokenizer.MODE.RCDATA;

        else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME ||
                 tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT)
            this.tokenizer.state = Tokenizer.MODE.RAWTEXT;

        else if (tn === $.SCRIPT)
            this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;

        else if (tn === $.PLAINTEXT)
            this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
    }
};

//Tree mutation
Parser.prototype._setDocumentType = function (token) {
    this.treeAdapter.setDocumentType(this.document, token.name, token.publicId, token.systemId);
};

Parser.prototype._attachElementToTree = function (element) {
    if (this._shouldFosterParentOnInsertion())
        this._fosterParentElement(element);

    else {
        var parent = this.openElements.currentTmplContent || this.openElements.current;

        this.treeAdapter.appendChild(parent, element);
    }
};

Parser.prototype._appendElement = function (token, namespaceURI) {
    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

    this._attachElementToTree(element);
};

Parser.prototype._insertElement = function (token, namespaceURI) {
    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

    this._attachElementToTree(element);
    this.openElements.push(element);
};

Parser.prototype._insertFakeElement = function (tagName) {
    var element = this.treeAdapter.createElement(tagName, NS.HTML, []);

    this._attachElementToTree(element);
    this.openElements.push(element);
};

Parser.prototype._insertTemplate = function (token) {
    var tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs),
        content = this.treeAdapter.createDocumentFragment();

    this.treeAdapter.setTemplateContent(tmpl, content);
    this._attachElementToTree(tmpl);
    this.openElements.push(tmpl);
};

Parser.prototype._insertFakeRootElement = function () {
    var element = this.treeAdapter.createElement($.HTML, NS.HTML, []);

    this.treeAdapter.appendChild(this.openElements.current, element);
    this.openElements.push(element);
};

Parser.prototype._appendCommentNode = function (token, parent) {
    var commentNode = this.treeAdapter.createCommentNode(token.data);

    this.treeAdapter.appendChild(parent, commentNode);
};

Parser.prototype._insertCharacters = function (token) {
    if (this._shouldFosterParentOnInsertion())
        this._fosterParentText(token.chars);

    else {
        var parent = this.openElements.currentTmplContent || this.openElements.current;

        this.treeAdapter.insertText(parent, token.chars);
    }
};

Parser.prototype._adoptNodes = function (donor, recipient) {
    while (true) {
        var child = this.treeAdapter.getFirstChild(donor);

        if (!child)
            break;

        this.treeAdapter.detachNode(child);
        this.treeAdapter.appendChild(recipient, child);
    }
};

//Token processing
Parser.prototype._shouldProcessTokenInForeignContent = function (token) {
    var current = this._getAdjustedCurrentElement();

    if (!current || current === this.document)
        return false;

    var ns = this.treeAdapter.getNamespaceURI(current);

    if (ns === NS.HTML)
        return false;

    if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML &&
        token.type === Tokenizer.START_TAG_TOKEN && token.tagName === $.SVG)
        return false;

    var isCharacterToken = token.type === Tokenizer.CHARACTER_TOKEN ||
                           token.type === Tokenizer.NULL_CHARACTER_TOKEN ||
                           token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN,
        isMathMLTextStartTag = token.type === Tokenizer.START_TAG_TOKEN &&
                               token.tagName !== $.MGLYPH &&
                               token.tagName !== $.MALIGNMARK;

    if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS.MATHML))
        return false;

    if ((token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS.HTML))
        return false;

    return token.type !== Tokenizer.EOF_TOKEN;
};

Parser.prototype._processToken = function (token) {
    _[this.insertionMode][token.type](this, token);
};

Parser.prototype._processTokenInBodyMode = function (token) {
    _[IN_BODY_MODE][token.type](this, token);
};

Parser.prototype._processTokenInForeignContent = function (token) {
    if (token.type === Tokenizer.CHARACTER_TOKEN)
        characterInForeignContent(this, token);

    else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN)
        nullCharacterInForeignContent(this, token);

    else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN)
        insertCharacters(this, token);

    else if (token.type === Tokenizer.COMMENT_TOKEN)
        appendComment(this, token);

    else if (token.type === Tokenizer.START_TAG_TOKEN)
        startTagInForeignContent(this, token);

    else if (token.type === Tokenizer.END_TAG_TOKEN)
        endTagInForeignContent(this, token);
};

Parser.prototype._processInputToken = function (token) {
    if (this._shouldProcessTokenInForeignContent(token))
        this._processTokenInForeignContent(token);

    else
        this._processToken(token);
};

//Integration points
Parser.prototype._isIntegrationPoint = function (element, foreignNS) {
    var tn = this.treeAdapter.getTagName(element),
        ns = this.treeAdapter.getNamespaceURI(element),
        attrs = this.treeAdapter.getAttrList(element);

    return foreignContent.isIntegrationPoint(tn, ns, attrs, foreignNS);
};

//Active formatting elements reconstruction
Parser.prototype._reconstructActiveFormattingElements = function () {
    var listLength = this.activeFormattingElements.length;

    if (listLength) {
        var unopenIdx = listLength,
            entry = null;

        do {
            unopenIdx--;
            entry = this.activeFormattingElements.entries[unopenIdx];

            if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
                unopenIdx++;
                break;
            }
        } while (unopenIdx > 0);

        for (var i = unopenIdx; i < listLength; i++) {
            entry = this.activeFormattingElements.entries[i];
            this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
            entry.element = this.openElements.current;
        }
    }
};

//Close elements
Parser.prototype._closeTableCell = function () {
    this.openElements.generateImpliedEndTags();
    this.openElements.popUntilTableCellPopped();
    this.activeFormattingElements.clearToLastMarker();
    this.insertionMode = IN_ROW_MODE;
};

Parser.prototype._closePElement = function () {
    this.openElements.generateImpliedEndTagsWithExclusion($.P);
    this.openElements.popUntilTagNamePopped($.P);
};

//Insertion modes
Parser.prototype._resetInsertionMode = function () {
    for (var i = this.openElements.stackTop, last = false; i >= 0; i--) {
        var element = this.openElements.items[i];

        if (i === 0) {
            last = true;

            if (this.fragmentContext)
                element = this.fragmentContext;
        }

        var tn = this.treeAdapter.getTagName(element),
            newInsertionMode = INSERTION_MODE_RESET_MAP[tn];

        if (newInsertionMode) {
            this.insertionMode = newInsertionMode;
            break;
        }

        else if (!last && (tn === $.TD || tn === $.TH)) {
            this.insertionMode = IN_CELL_MODE;
            break;
        }

        else if (!last && tn === $.HEAD) {
            this.insertionMode = IN_HEAD_MODE;
            break;
        }

        else if (tn === $.SELECT) {
            this._resetInsertionModeForSelect(i);
            break;
        }

        else if (tn === $.TEMPLATE) {
            this.insertionMode = this.currentTmplInsertionMode;
            break;
        }

        else if (tn === $.HTML) {
            this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
            break;
        }

        else if (last) {
            this.insertionMode = IN_BODY_MODE;
            break;
        }
    }
};

Parser.prototype._resetInsertionModeForSelect = function (selectIdx) {
    if (selectIdx > 0) {
        for (var i = selectIdx - 1; i > 0; i--) {
            var ancestor = this.openElements.items[i],
                tn = this.treeAdapter.getTagName(ancestor);

            if (tn === $.TEMPLATE)
                break;

            else if (tn === $.TABLE) {
                this.insertionMode = IN_SELECT_IN_TABLE_MODE;
                return;
            }
        }
    }

    this.insertionMode = IN_SELECT_MODE;
};

Parser.prototype._pushTmplInsertionMode = function (mode) {
    this.tmplInsertionModeStack.push(mode);
    this.tmplInsertionModeStackTop++;
    this.currentTmplInsertionMode = mode;
};

Parser.prototype._popTmplInsertionMode = function () {
    this.tmplInsertionModeStack.pop();
    this.tmplInsertionModeStackTop--;
    this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
};

//Foster parenting
Parser.prototype._isElementCausesFosterParenting = function (element) {
    var tn = this.treeAdapter.getTagName(element);

    return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
};

Parser.prototype._shouldFosterParentOnInsertion = function () {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
};

Parser.prototype._findFosterParentingLocation = function () {
    var location = {
        parent: null,
        beforeElement: null
    };

    for (var i = this.openElements.stackTop; i >= 0; i--) {
        var openElement = this.openElements.items[i],
            tn = this.treeAdapter.getTagName(openElement),
            ns = this.treeAdapter.getNamespaceURI(openElement);

        if (tn === $.TEMPLATE && ns === NS.HTML) {
            location.parent = this.treeAdapter.getTemplateContent(openElement);
            break;
        }

        else if (tn === $.TABLE) {
            location.parent = this.treeAdapter.getParentNode(openElement);

            if (location.parent)
                location.beforeElement = openElement;
            else
                location.parent = this.openElements.items[i - 1];

            break;
        }
    }

    if (!location.parent)
        location.parent = this.openElements.items[0];

    return location;
};

Parser.prototype._fosterParentElement = function (element) {
    var location = this._findFosterParentingLocation();

    if (location.beforeElement)
        this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
    else
        this.treeAdapter.appendChild(location.parent, element);
};

Parser.prototype._fosterParentText = function (chars) {
    var location = this._findFosterParentingLocation();

    if (location.beforeElement)
        this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
    else
        this.treeAdapter.insertText(location.parent, chars);
};

//Special elements
Parser.prototype._isSpecialElement = function (element) {
    var tn = this.treeAdapter.getTagName(element),
        ns = this.treeAdapter.getNamespaceURI(element);

    return HTML.SPECIAL_ELEMENTS[ns][tn];
};

//Adoption agency algorithm
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
//------------------------------------------------------------------

//Steps 5-8 of the algorithm
function aaObtainFormattingElementEntry(p, token) {
    var formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);

    if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            formattingElementEntry = null;
        }

        else if (!p.openElements.hasInScope(token.tagName))
            formattingElementEntry = null;
    }

    else
        genericEndTagInBody(p, token);

    return formattingElementEntry;
}

//Steps 9 and 10 of the algorithm
function aaObtainFurthestBlock(p, formattingElementEntry) {
    var furthestBlock = null;

    for (var i = p.openElements.stackTop; i >= 0; i--) {
        var element = p.openElements.items[i];

        if (element === formattingElementEntry.element)
            break;

        if (p._isSpecialElement(element))
            furthestBlock = element;
    }

    if (!furthestBlock) {
        p.openElements.popUntilElementPopped(formattingElementEntry.element);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
    }

    return furthestBlock;
}

//Step 13 of the algorithm
function aaInnerLoop(p, furthestBlock, formattingElement) {
    var lastElement = furthestBlock,
        nextElement = p.openElements.getCommonAncestor(furthestBlock);

    for (var i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        //NOTE: store next element for the next loop iteration (it may be deleted from the stack by step 9.5)
        nextElement = p.openElements.getCommonAncestor(element);

        var elementEntry = p.activeFormattingElements.getElementEntry(element),
            counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER,
            shouldRemoveFromOpenElements = !elementEntry || counterOverflow;

        if (shouldRemoveFromOpenElements) {
            if (counterOverflow)
                p.activeFormattingElements.removeEntry(elementEntry);

            p.openElements.remove(element);
        }

        else {
            element = aaRecreateElementFromEntry(p, elementEntry);

            if (lastElement === furthestBlock)
                p.activeFormattingElements.bookmark = elementEntry;

            p.treeAdapter.detachNode(lastElement);
            p.treeAdapter.appendChild(element, lastElement);
            lastElement = element;
        }
    }

    return lastElement;
}

//Step 13.7 of the algorithm
function aaRecreateElementFromEntry(p, elementEntry) {
    var ns = p.treeAdapter.getNamespaceURI(elementEntry.element),
        newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);

    p.openElements.replace(elementEntry.element, newElement);
    elementEntry.element = newElement;

    return newElement;
}

//Step 14 of the algorithm
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
    if (p._isElementCausesFosterParenting(commonAncestor))
        p._fosterParentElement(lastElement);

    else {
        var tn = p.treeAdapter.getTagName(commonAncestor),
            ns = p.treeAdapter.getNamespaceURI(commonAncestor);

        if (tn === $.TEMPLATE && ns === NS.HTML)
            commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);

        p.treeAdapter.appendChild(commonAncestor, lastElement);
    }
}

//Steps 15-19 of the algorithm
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
    var ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element),
        token = formattingElementEntry.token,
        newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);

    p._adoptNodes(furthestBlock, newElement);
    p.treeAdapter.appendChild(furthestBlock, newElement);

    p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
    p.activeFormattingElements.removeEntry(formattingElementEntry);

    p.openElements.remove(formattingElementEntry.element);
    p.openElements.insertAfter(furthestBlock, newElement);
}

//Algorithm entry point
function callAdoptionAgency(p, token) {
    var formattingElementEntry;

    for (var i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        formattingElementEntry = aaObtainFormattingElementEntry(p, token, formattingElementEntry);

        if (!formattingElementEntry)
            break;

        var furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);

        if (!furthestBlock)
            break;

        p.activeFormattingElements.bookmark = formattingElementEntry;

        var lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element),
            commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);

        p.treeAdapter.detachNode(lastElement);
        aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
    }
}


//Generic token handlers
//------------------------------------------------------------------
function ignoreToken() {
    //NOTE: do nothing =)
}

function appendComment(p, token) {
    p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
}

function appendCommentToRootHtmlElement(p, token) {
    p._appendCommentNode(token, p.openElements.items[0]);
}

function appendCommentToDocument(p, token) {
    p._appendCommentNode(token, p.document);
}

function insertCharacters(p, token) {
    p._insertCharacters(token);
}

function stopParsing(p) {
    p.stopped = true;
}

//12.2.5.4.1 The "initial" insertion mode
//------------------------------------------------------------------
function doctypeInInitialMode(p, token) {
    p._setDocumentType(token);

    var mode = token.forceQuirks ?
        HTML.DOCUMENT_MODE.QUIRKS :
        doctype.getDocumentMode(token.name, token.publicId, token.systemId);

    p.treeAdapter.setDocumentMode(p.document, mode);

    p.insertionMode = BEFORE_HTML_MODE;
}

function tokenInInitialMode(p, token) {
    p.treeAdapter.setDocumentMode(p.document, HTML.DOCUMENT_MODE.QUIRKS);
    p.insertionMode = BEFORE_HTML_MODE;
    p._processToken(token);
}


//12.2.5.4.2 The "before html" insertion mode
//------------------------------------------------------------------
function startTagBeforeHtml(p, token) {
    if (token.tagName === $.HTML) {
        p._insertElement(token, NS.HTML);
        p.insertionMode = BEFORE_HEAD_MODE;
    }

    else
        tokenBeforeHtml(p, token);
}

function endTagBeforeHtml(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR)
        tokenBeforeHtml(p, token);
}

function tokenBeforeHtml(p, token) {
    p._insertFakeRootElement();
    p.insertionMode = BEFORE_HEAD_MODE;
    p._processToken(token);
}


//12.2.5.4.3 The "before head" insertion mode
//------------------------------------------------------------------
function startTagBeforeHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.HEAD) {
        p._insertElement(token, NS.HTML);
        p.headElement = p.openElements.current;
        p.insertionMode = IN_HEAD_MODE;
    }

    else
        tokenBeforeHead(p, token);
}

function endTagBeforeHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR)
        tokenBeforeHead(p, token);
}

function tokenBeforeHead(p, token) {
    p._insertFakeElement($.HEAD);
    p.headElement = p.openElements.current;
    p.insertionMode = IN_HEAD_MODE;
    p._processToken(token);
}


//12.2.5.4.4 The "in head" insertion mode
//------------------------------------------------------------------
function startTagInHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META)
        p._appendElement(token, NS.HTML);

    else if (tn === $.TITLE)
        p._switchToTextParsing(token, Tokenizer.MODE.RCDATA);

    //NOTE: here we assume that we always act as an interactive user agent with enabled scripting, so we parse
    //<noscript> as a rawtext.
    else if (tn === $.NOSCRIPT || tn === $.NOFRAMES || tn === $.STYLE)
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);

    else if (tn === $.SCRIPT)
        p._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);

    else if (tn === $.TEMPLATE) {
        p._insertTemplate(token, NS.HTML);
        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
        p.insertionMode = IN_TEMPLATE_MODE;
        p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
    }

    else if (tn !== $.HEAD)
        tokenInHead(p, token);
}

function endTagInHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HEAD) {
        p.openElements.pop();
        p.insertionMode = AFTER_HEAD_MODE;
    }

    else if (tn === $.BODY || tn === $.BR || tn === $.HTML)
        tokenInHead(p, token);

    else if (tn === $.TEMPLATE && p.openElements.tmplCount > 0) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped($.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p._popTmplInsertionMode();
        p._resetInsertionMode();
    }
}

function tokenInHead(p, token) {
    p.openElements.pop();
    p.insertionMode = AFTER_HEAD_MODE;
    p._processToken(token);
}


//12.2.5.4.6 The "after head" insertion mode
//------------------------------------------------------------------
function startTagAfterHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.BODY) {
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
        p.insertionMode = IN_BODY_MODE;
    }

    else if (tn === $.FRAMESET) {
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
    }

    else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META ||
             tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
        p.openElements.push(p.headElement);
        startTagInHead(p, token);
        p.openElements.remove(p.headElement);
    }

    else if (tn !== $.HEAD)
        tokenAfterHead(p, token);
}

function endTagAfterHead(p, token) {
    var tn = token.tagName;

    if (tn === $.BODY || tn === $.HTML || tn === $.BR)
        tokenAfterHead(p, token);

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);
}

function tokenAfterHead(p, token) {
    p._insertFakeElement($.BODY);
    p.insertionMode = IN_BODY_MODE;
    p._processToken(token);
}


//12.2.5.4.7 The "in body" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
}

function characterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
    p.framesetOk = false;
}

function htmlStartTagInBody(p, token) {
    if (p.openElements.tmplCount === 0)
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
}

function bodyStartTagInBody(p, token) {
    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

    if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
    }
}

function framesetStartTagInBody(p, token) {
    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

    if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_FRAMESET_MODE;
    }
}

function addressStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
}

function numberedHeaderStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    var tn = p.openElements.currentTagName;

    if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
        p.openElements.pop();

    p._insertElement(token, NS.HTML);
}

function preStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.framesetOk = false;
}

function formStartTagInBody(p, token) {
    var inTemplate = p.openElements.tmplCount > 0;

    if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope($.P))
            p._closePElement();

        p._insertElement(token, NS.HTML);

        if (!inTemplate)
            p.formElement = p.openElements.current;
    }
}

function listItemStartTagInBody(p, token) {
    p.framesetOk = false;

    var tn = token.tagName;

    for (var i = p.openElements.stackTop; i >= 0; i--) {
        var element = p.openElements.items[i],
            elementTn = p.treeAdapter.getTagName(element),
            closeTn = null;

        if (tn === $.LI && elementTn === $.LI)
            closeTn = $.LI;

        else if ((tn === $.DD || tn === $.DT) && (elementTn === $.DD || elementTn === $.DT))
            closeTn = elementTn;

        if (closeTn) {
            p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
            p.openElements.popUntilTagNamePopped(closeTn);
            break;
        }

        if (elementTn !== $.ADDRESS && elementTn !== $.DIV && elementTn !== $.P && p._isSpecialElement(element))
            break;
    }

    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
}

function plaintextStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
    p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
}

function buttonStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped($.BUTTON);
    }

    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.framesetOk = false;
}

function aStartTagInBody(p, token) {
    var activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);

    if (activeElementEntry) {
        callAdoptionAgency(p, token);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
    }

    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function bStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function nobrStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    if (p.openElements.hasInScope($.NOBR)) {
        callAdoptionAgency(p, token);
        p._reconstructActiveFormattingElements();
    }

    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}

function appletStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.activeFormattingElements.insertMarker();
    p.framesetOk = false;
}

function tableStartTagInBody(p, token) {
    if (p.treeAdapter.getDocumentMode(p.document) !== HTML.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._insertElement(token, NS.HTML);
    p.framesetOk = false;
    p.insertionMode = IN_TABLE_MODE;
}

function areaStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, NS.HTML);
    p.framesetOk = false;
}

function inputStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, NS.HTML);

    var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

    if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE)
        p.framesetOk = false;

}

function paramStartTagInBody(p, token) {
    p._appendElement(token, NS.HTML);
}

function hrStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    if (p.openElements.currentTagName === $.MENUITEM)
        p.openElements.pop();

    p._appendElement(token, NS.HTML);
    p.framesetOk = false;
}

function imageStartTagInBody(p, token) {
    token.tagName = $.IMG;
    areaStartTagInBody(p, token);
}

function textareaStartTagInBody(p, token) {
    p._insertElement(token, NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.tokenizer.state = Tokenizer.MODE.RCDATA;
    p.originalInsertionMode = p.insertionMode;
    p.framesetOk = false;
    p.insertionMode = TEXT_MODE;
}

function xmpStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    p._reconstructActiveFormattingElements();
    p.framesetOk = false;
    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

function iframeStartTagInBody(p, token) {
    p.framesetOk = false;
    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

//NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
//<noembed> as a rawtext.
function noembedStartTagInBody(p, token) {
    p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
}

function selectStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
    p.framesetOk = false;

    if (p.insertionMode === IN_TABLE_MODE ||
        p.insertionMode === IN_CAPTION_MODE ||
        p.insertionMode === IN_TABLE_BODY_MODE ||
        p.insertionMode === IN_ROW_MODE ||
        p.insertionMode === IN_CELL_MODE)

        p.insertionMode = IN_SELECT_IN_TABLE_MODE;

    else
        p.insertionMode = IN_SELECT_MODE;
}

function optgroupStartTagInBody(p, token) {
    if (p.openElements.currentTagName === $.OPTION)
        p.openElements.pop();

    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
}

function rbStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.RUBY))
        p.openElements.generateImpliedEndTags();

    p._insertElement(token, NS.HTML);
}

function rtStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.RUBY))
        p.openElements.generateImpliedEndTagsWithExclusion($.RTC);

    p._insertElement(token, NS.HTML);
}

function menuitemStartTagInBody(p, token) {
    if (p.openElements.currentTagName === $.MENUITEM)
        p.openElements.pop();

    // TODO needs clarification, see https://github.com/whatwg/html/pull/907/files#r73505877
    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);
}

function menuStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P))
        p._closePElement();

    if (p.openElements.currentTagName === $.MENUITEM)
        p.openElements.pop();

    p._insertElement(token, NS.HTML);
}

function mathStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    foreignContent.adjustTokenMathMLAttrs(token);
    foreignContent.adjustTokenXMLAttrs(token);

    if (token.selfClosing)
        p._appendElement(token, NS.MATHML);
    else
        p._insertElement(token, NS.MATHML);
}

function svgStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    foreignContent.adjustTokenSVGAttrs(token);
    foreignContent.adjustTokenXMLAttrs(token);

    if (token.selfClosing)
        p._appendElement(token, NS.SVG);
    else
        p._insertElement(token, NS.SVG);
}

function genericStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, NS.HTML);
}

//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function startTagInBody(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
        case 1:
            if (tn === $.I || tn === $.S || tn === $.B || tn === $.U)
                bStartTagInBody(p, token);

            else if (tn === $.P)
                addressStartTagInBody(p, token);

            else if (tn === $.A)
                aStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        case 2:
            if (tn === $.DL || tn === $.OL || tn === $.UL)
                addressStartTagInBody(p, token);

            else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
                numberedHeaderStartTagInBody(p, token);

            else if (tn === $.LI || tn === $.DD || tn === $.DT)
                listItemStartTagInBody(p, token);

            else if (tn === $.EM || tn === $.TT)
                bStartTagInBody(p, token);

            else if (tn === $.BR)
                areaStartTagInBody(p, token);

            else if (tn === $.HR)
                hrStartTagInBody(p, token);

            else if (tn === $.RB)
                rbStartTagInBody(p, token);

            else if (tn === $.RT || tn === $.RP)
                rtStartTagInBody(p, token);

            else if (tn !== $.TH && tn !== $.TD && tn !== $.TR)
                genericStartTagInBody(p, token);

            break;

        case 3:
            if (tn === $.DIV || tn === $.DIR || tn === $.NAV)
                addressStartTagInBody(p, token);

            else if (tn === $.PRE)
                preStartTagInBody(p, token);

            else if (tn === $.BIG)
                bStartTagInBody(p, token);

            else if (tn === $.IMG || tn === $.WBR)
                areaStartTagInBody(p, token);

            else if (tn === $.XMP)
                xmpStartTagInBody(p, token);

            else if (tn === $.SVG)
                svgStartTagInBody(p, token);

            else if (tn === $.RTC)
                rbStartTagInBody(p, token);

            else if (tn !== $.COL)
                genericStartTagInBody(p, token);

            break;

        case 4:
            if (tn === $.HTML)
                htmlStartTagInBody(p, token);

            else if (tn === $.BASE || tn === $.LINK || tn === $.META)
                startTagInHead(p, token);

            else if (tn === $.BODY)
                bodyStartTagInBody(p, token);

            else if (tn === $.MAIN)
                addressStartTagInBody(p, token);

            else if (tn === $.FORM)
                formStartTagInBody(p, token);

            else if (tn === $.CODE || tn === $.FONT)
                bStartTagInBody(p, token);

            else if (tn === $.NOBR)
                nobrStartTagInBody(p, token);

            else if (tn === $.AREA)
                areaStartTagInBody(p, token);

            else if (tn === $.MATH)
                mathStartTagInBody(p, token);

            else if (tn === $.MENU)
                menuStartTagInBody(p, token);

            else if (tn !== $.HEAD)
                genericStartTagInBody(p, token);

            break;

        case 5:
            if (tn === $.STYLE || tn === $.TITLE)
                startTagInHead(p, token);

            else if (tn === $.ASIDE)
                addressStartTagInBody(p, token);

            else if (tn === $.SMALL)
                bStartTagInBody(p, token);

            else if (tn === $.TABLE)
                tableStartTagInBody(p, token);

            else if (tn === $.EMBED)
                areaStartTagInBody(p, token);

            else if (tn === $.INPUT)
                inputStartTagInBody(p, token);

            else if (tn === $.PARAM || tn === $.TRACK)
                paramStartTagInBody(p, token);

            else if (tn === $.IMAGE)
                imageStartTagInBody(p, token);

            else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD)
                genericStartTagInBody(p, token);

            break;

        case 6:
            if (tn === $.SCRIPT)
                startTagInHead(p, token);

            else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP)
                addressStartTagInBody(p, token);

            else if (tn === $.BUTTON)
                buttonStartTagInBody(p, token);

            else if (tn === $.STRIKE || tn === $.STRONG)
                bStartTagInBody(p, token);

            else if (tn === $.APPLET || tn === $.OBJECT)
                appletStartTagInBody(p, token);

            else if (tn === $.KEYGEN)
                areaStartTagInBody(p, token);

            else if (tn === $.SOURCE)
                paramStartTagInBody(p, token);

            else if (tn === $.IFRAME)
                iframeStartTagInBody(p, token);

            else if (tn === $.SELECT)
                selectStartTagInBody(p, token);

            else if (tn === $.OPTION)
                optgroupStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        case 7:
            if (tn === $.BGSOUND)
                startTagInHead(p, token);

            else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY)
                addressStartTagInBody(p, token);

            else if (tn === $.LISTING)
                preStartTagInBody(p, token);

            else if (tn === $.MARQUEE)
                appletStartTagInBody(p, token);

            else if (tn === $.NOEMBED)
                noembedStartTagInBody(p, token);

            else if (tn !== $.CAPTION)
                genericStartTagInBody(p, token);

            break;

        case 8:
            if (tn === $.BASEFONT)
                startTagInHead(p, token);

            else if (tn === $.MENUITEM)
                menuitemStartTagInBody(p, token);

            else if (tn === $.FRAMESET)
                framesetStartTagInBody(p, token);

            else if (tn === $.FIELDSET)
                addressStartTagInBody(p, token);

            else if (tn === $.TEXTAREA)
                textareaStartTagInBody(p, token);

            else if (tn === $.TEMPLATE)
                startTagInHead(p, token);

            else if (tn === $.NOSCRIPT)
                noembedStartTagInBody(p, token);

            else if (tn === $.OPTGROUP)
                optgroupStartTagInBody(p, token);

            else if (tn !== $.COLGROUP)
                genericStartTagInBody(p, token);

            break;

        case 9:
            if (tn === $.PLAINTEXT)
                plaintextStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION)
                addressStartTagInBody(p, token);

            else
                genericStartTagInBody(p, token);

            break;

        default:
            genericStartTagInBody(p, token);
    }
}

function bodyEndTagInBody(p) {
    if (p.openElements.hasInScope($.BODY))
        p.insertionMode = AFTER_BODY_MODE;
}

function htmlEndTagInBody(p, token) {
    if (p.openElements.hasInScope($.BODY)) {
        p.insertionMode = AFTER_BODY_MODE;
        p._processToken(token);
    }
}

function addressEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
    }
}

function formEndTagInBody(p) {
    var inTemplate = p.openElements.tmplCount > 0,
        formElement = p.formElement;

    if (!inTemplate)
        p.formElement = null;

    if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
        p.openElements.generateImpliedEndTags();

        if (inTemplate)
            p.openElements.popUntilTagNamePopped($.FORM);

        else
            p.openElements.remove(formElement);
    }
}

function pEndTagInBody(p) {
    if (!p.openElements.hasInButtonScope($.P))
        p._insertFakeElement($.P);

    p._closePElement();
}

function liEndTagInBody(p) {
    if (p.openElements.hasInListItemScope($.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion($.LI);
        p.openElements.popUntilTagNamePopped($.LI);
    }
}

function ddEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
    }
}

function numberedHeaderEndTagInBody(p) {
    if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
    }
}

function appletEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
    }
}

function brEndTagInBody(p) {
    p._reconstructActiveFormattingElements();
    p._insertFakeElement($.BR);
    p.openElements.pop();
    p.framesetOk = false;
}

function genericEndTagInBody(p, token) {
    var tn = token.tagName;

    for (var i = p.openElements.stackTop; i > 0; i--) {
        var element = p.openElements.items[i];

        if (p.treeAdapter.getTagName(element) === tn) {
            p.openElements.generateImpliedEndTagsWithExclusion(tn);
            p.openElements.popUntilElementPopped(element);
            break;
        }

        if (p._isSpecialElement(element))
            break;
    }
}

//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function endTagInBody(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
        case 1:
            if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U)
                callAdoptionAgency(p, token);

            else if (tn === $.P)
                pEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 2:
            if (tn === $.DL || tn === $.UL || tn === $.OL)
                addressEndTagInBody(p, token);

            else if (tn === $.LI)
                liEndTagInBody(p, token);

            else if (tn === $.DD || tn === $.DT)
                ddEndTagInBody(p, token);

            else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6)
                numberedHeaderEndTagInBody(p, token);

            else if (tn === $.BR)
                brEndTagInBody(p, token);

            else if (tn === $.EM || tn === $.TT)
                callAdoptionAgency(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 3:
            if (tn === $.BIG)
                callAdoptionAgency(p, token);

            else if (tn === $.DIR || tn === $.DIV || tn === $.NAV)
                addressEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 4:
            if (tn === $.BODY)
                bodyEndTagInBody(p, token);

            else if (tn === $.HTML)
                htmlEndTagInBody(p, token);

            else if (tn === $.FORM)
                formEndTagInBody(p, token);

            else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR)
                callAdoptionAgency(p, token);

            else if (tn === $.MAIN || tn === $.MENU)
                addressEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 5:
            if (tn === $.ASIDE)
                addressEndTagInBody(p, token);

            else if (tn === $.SMALL)
                callAdoptionAgency(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 6:
            if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP)
                addressEndTagInBody(p, token);

            else if (tn === $.APPLET || tn === $.OBJECT)
                appletEndTagInBody(p, token);

            else if (tn === $.STRIKE || tn === $.STRONG)
                callAdoptionAgency(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 7:
            if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY)
                addressEndTagInBody(p, token);

            else if (tn === $.MARQUEE)
                appletEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 8:
            if (tn === $.FIELDSET)
                addressEndTagInBody(p, token);

            else if (tn === $.TEMPLATE)
                endTagInHead(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION)
                addressEndTagInBody(p, token);

            else
                genericEndTagInBody(p, token);

            break;

        default :
            genericEndTagInBody(p, token);
    }
}

function eofInBody(p, token) {
    if (p.tmplInsertionModeStackTop > -1)
        eofInTemplate(p, token);

    else
        p.stopped = true;
}

//12.2.5.4.8 The "text" insertion mode
//------------------------------------------------------------------
function endTagInText(p, token) {
    if (token.tagName === $.SCRIPT)
        p.pendingScript = p.openElements.current;

    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
}


function eofInText(p, token) {
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
    p._processToken(token);
}


//12.2.5.4.9 The "in table" insertion mode
//------------------------------------------------------------------
function characterInTable(p, token) {
    var curTn = p.openElements.currentTagName;

    if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
        p.pendingCharacterTokens = [];
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = IN_TABLE_TEXT_MODE;
        p._processToken(token);
    }

    else
        tokenInTable(p, token);
}

function captionStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p.activeFormattingElements.insertMarker();
    p._insertElement(token, NS.HTML);
    p.insertionMode = IN_CAPTION_MODE;
}

function colgroupStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, NS.HTML);
    p.insertionMode = IN_COLUMN_GROUP_MODE;
}

function colStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertFakeElement($.COLGROUP);
    p.insertionMode = IN_COLUMN_GROUP_MODE;
    p._processToken(token);
}

function tbodyStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, NS.HTML);
    p.insertionMode = IN_TABLE_BODY_MODE;
}

function tdStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertFakeElement($.TBODY);
    p.insertionMode = IN_TABLE_BODY_MODE;
    p._processToken(token);
}

function tableStartTagInTable(p, token) {
    if (p.openElements.hasInTableScope($.TABLE)) {
        p.openElements.popUntilTagNamePopped($.TABLE);
        p._resetInsertionMode();
        p._processToken(token);
    }
}

function inputStartTagInTable(p, token) {
    var inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);

    if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE)
        p._appendElement(token, NS.HTML);

    else
        tokenInTable(p, token);
}

function formStartTagInTable(p, token) {
    if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
    }
}

function startTagInTable(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
        case 2:
            if (tn === $.TD || tn === $.TH || tn === $.TR)
                tdStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 3:
            if (tn === $.COL)
                colStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 4:
            if (tn === $.FORM)
                formStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 5:
            if (tn === $.TABLE)
                tableStartTagInTable(p, token);

            else if (tn === $.STYLE)
                startTagInHead(p, token);

            else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD)
                tbodyStartTagInTable(p, token);

            else if (tn === $.INPUT)
                inputStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 6:
            if (tn === $.SCRIPT)
                startTagInHead(p, token);

            else
                tokenInTable(p, token);

            break;

        case 7:
            if (tn === $.CAPTION)
                captionStartTagInTable(p, token);

            else
                tokenInTable(p, token);

            break;

        case 8:
            if (tn === $.COLGROUP)
                colgroupStartTagInTable(p, token);

            else if (tn === $.TEMPLATE)
                startTagInHead(p, token);

            else
                tokenInTable(p, token);

            break;

        default:
            tokenInTable(p, token);
    }

}

function endTagInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.TABLE)) {
            p.openElements.popUntilTagNamePopped($.TABLE);
            p._resetInsertionMode();
        }
    }

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML &&
             tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR)
        tokenInTable(p, token);
}

function tokenInTable(p, token) {
    var savedFosterParentingState = p.fosterParentingEnabled;

    p.fosterParentingEnabled = true;
    p._processTokenInBodyMode(token);
    p.fosterParentingEnabled = savedFosterParentingState;
}


//12.2.5.4.10 The "in table text" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
}

function characterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
    p.hasNonWhitespacePendingCharacterToken = true;
}

function tokenInTableText(p, token) {
    var i = 0;

    if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++)
            tokenInTable(p, p.pendingCharacterTokens[i]);
    }

    else {
        for (; i < p.pendingCharacterTokens.length; i++)
            p._insertCharacters(p.pendingCharacterTokens[i]);
    }

    p.insertionMode = p.originalInsertionMode;
    p._processToken(token);
}


//12.2.5.4.11 The "in caption" insertion mode
//------------------------------------------------------------------
function startTagInCaption(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
        tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope($.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped($.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
        }
    }

    else
        startTagInBody(p, token);
}

function endTagInCaption(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped($.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_TABLE_MODE;

            if (tn === $.TABLE)
                p._processToken(token);
        }
    }

    else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY &&
             tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR)
        endTagInBody(p, token);
}


//12.2.5.4.12 The "in column group" insertion mode
//------------------------------------------------------------------
function startTagInColumnGroup(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.COL)
        p._appendElement(token, NS.HTML);

    else if (tn === $.TEMPLATE)
        startTagInHead(p, token);

    else
        tokenInColumnGroup(p, token);
}

function endTagInColumnGroup(p, token) {
    var tn = token.tagName;

    if (tn === $.COLGROUP) {
        if (p.openElements.currentTagName === $.COLGROUP) {
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
        }
    }

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);

    else if (tn !== $.COL)
        tokenInColumnGroup(p, token);
}

function tokenInColumnGroup(p, token) {
    if (p.openElements.currentTagName === $.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = IN_TABLE_MODE;
        p._processToken(token);
    }
}

//12.2.5.4.13 The "in table body" insertion mode
//------------------------------------------------------------------
function startTagInTableBody(p, token) {
    var tn = token.tagName;

    if (tn === $.TR) {
        p.openElements.clearBackToTableBodyContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_ROW_MODE;
    }

    else if (tn === $.TH || tn === $.TD) {
        p.openElements.clearBackToTableBodyContext();
        p._insertFakeElement($.TR);
        p.insertionMode = IN_ROW_MODE;
        p._processToken(token);
    }

    else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP ||
             tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {

        if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
        }
    }

    else
        startTagInTable(p, token);
}

function endTagInTableBody(p, token) {
    var tn = token.tagName;

    if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn)) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
        }
    }

    else if (tn === $.TABLE) {
        if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
        }
    }

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP ||
             tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR)
        endTagInTable(p, token);
}

//12.2.5.4.14 The "in row" insertion mode
//------------------------------------------------------------------
function startTagInRow(p, token) {
    var tn = token.tagName;

    if (tn === $.TH || tn === $.TD) {
        p.openElements.clearBackToTableRowContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_CELL_MODE;
        p.activeFormattingElements.insertMarker();
    }

    else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
             tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
        }
    }

    else
        startTagInTable(p, token);
}

function endTagInRow(p, token) {
    var tn = token.tagName;

    if (tn === $.TR) {
        if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
        }
    }

    else if (tn === $.TABLE) {
        if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
        }
    }

    else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
        if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
        }
    }

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP ||
             tn !== $.HTML && tn !== $.TD && tn !== $.TH)
        endTagInTable(p, token);
}


//12.2.5.4.15 The "in cell" insertion mode
//------------------------------------------------------------------
function startTagInCell(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY ||
        tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {

        if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
            p._closeTableCell();
            p._processToken(token);
        }
    }

    else
        startTagInBody(p, token);
}

function endTagInCell(p, token) {
    var tn = token.tagName;

    if (tn === $.TD || tn === $.TH) {
        if (p.openElements.hasInTableScope(tn)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(tn);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_ROW_MODE;
        }
    }

    else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
        if (p.openElements.hasInTableScope(tn)) {
            p._closeTableCell();
            p._processToken(token);
        }
    }

    else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML)
        endTagInBody(p, token);
}

//12.2.5.4.16 The "in select" insertion mode
//------------------------------------------------------------------
function startTagInSelect(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION)
            p.openElements.pop();

        p._insertElement(token, NS.HTML);
    }

    else if (tn === $.OPTGROUP) {
        if (p.openElements.currentTagName === $.OPTION)
            p.openElements.pop();

        if (p.openElements.currentTagName === $.OPTGROUP)
            p.openElements.pop();

        p._insertElement(token, NS.HTML);
    }

    else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA || tn === $.SELECT) {
        if (p.openElements.hasInSelectScope($.SELECT)) {
            p.openElements.popUntilTagNamePopped($.SELECT);
            p._resetInsertionMode();

            if (tn !== $.SELECT)
                p._processToken(token);
        }
    }

    else if (tn === $.SCRIPT || tn === $.TEMPLATE)
        startTagInHead(p, token);
}

function endTagInSelect(p, token) {
    var tn = token.tagName;

    if (tn === $.OPTGROUP) {
        var prevOpenElement = p.openElements.items[p.openElements.stackTop - 1],
            prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);

        if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP)
            p.openElements.pop();

        if (p.openElements.currentTagName === $.OPTGROUP)
            p.openElements.pop();
    }

    else if (tn === $.OPTION) {
        if (p.openElements.currentTagName === $.OPTION)
            p.openElements.pop();
    }

    else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
        p.openElements.popUntilTagNamePopped($.SELECT);
        p._resetInsertionMode();
    }

    else if (tn === $.TEMPLATE)
        endTagInHead(p, token);
}

//12.2.5.4.17 The "in select in table" insertion mode
//------------------------------------------------------------------
function startTagInSelectInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT ||
        tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        p.openElements.popUntilTagNamePopped($.SELECT);
        p._resetInsertionMode();
        p._processToken(token);
    }

    else
        startTagInSelect(p, token);
}

function endTagInSelectInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT ||
        tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
        if (p.openElements.hasInTableScope(tn)) {
            p.openElements.popUntilTagNamePopped($.SELECT);
            p._resetInsertionMode();
            p._processToken(token);
        }
    }

    else
        endTagInSelect(p, token);
}

//12.2.5.4.18 The "in template" insertion mode
//------------------------------------------------------------------
function startTagInTemplate(p, token) {
    var tn = token.tagName;

    if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META ||
        tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE)
        startTagInHead(p, token);

    else {
        var newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;

        p._popTmplInsertionMode();
        p._pushTmplInsertionMode(newInsertionMode);
        p.insertionMode = newInsertionMode;
        p._processToken(token);
    }
}

function endTagInTemplate(p, token) {
    if (token.tagName === $.TEMPLATE)
        endTagInHead(p, token);
}

function eofInTemplate(p, token) {
    if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped($.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p._popTmplInsertionMode();
        p._resetInsertionMode();
        p._processToken(token);
    }

    else
        p.stopped = true;
}


//12.2.5.4.19 The "after body" insertion mode
//------------------------------------------------------------------
function startTagAfterBody(p, token) {
    if (token.tagName === $.HTML)
        startTagInBody(p, token);

    else
        tokenAfterBody(p, token);
}

function endTagAfterBody(p, token) {
    if (token.tagName === $.HTML) {
        if (!p.fragmentContext)
            p.insertionMode = AFTER_AFTER_BODY_MODE;
    }

    else
        tokenAfterBody(p, token);
}

function tokenAfterBody(p, token) {
    p.insertionMode = IN_BODY_MODE;
    p._processToken(token);
}

//12.2.5.4.20 The "in frameset" insertion mode
//------------------------------------------------------------------
function startTagInFrameset(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.FRAMESET)
        p._insertElement(token, NS.HTML);

    else if (tn === $.FRAME)
        p._appendElement(token, NS.HTML);

    else if (tn === $.NOFRAMES)
        startTagInHead(p, token);
}

function endTagInFrameset(p, token) {
    if (token.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();

        if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET)
            p.insertionMode = AFTER_FRAMESET_MODE;
    }
}

//12.2.5.4.21 The "after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterFrameset(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.NOFRAMES)
        startTagInHead(p, token);
}

function endTagAfterFrameset(p, token) {
    if (token.tagName === $.HTML)
        p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
}

//12.2.5.4.22 The "after after body" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterBody(p, token) {
    if (token.tagName === $.HTML)
        startTagInBody(p, token);

    else
        tokenAfterAfterBody(p, token);
}

function tokenAfterAfterBody(p, token) {
    p.insertionMode = IN_BODY_MODE;
    p._processToken(token);
}

//12.2.5.4.23 The "after after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterFrameset(p, token) {
    var tn = token.tagName;

    if (tn === $.HTML)
        startTagInBody(p, token);

    else if (tn === $.NOFRAMES)
        startTagInHead(p, token);
}


//12.2.5.5 The rules for parsing tokens in foreign content
//------------------------------------------------------------------
function nullCharacterInForeignContent(p, token) {
    token.chars = UNICODE.REPLACEMENT_CHARACTER;
    p._insertCharacters(token);
}

function characterInForeignContent(p, token) {
    p._insertCharacters(token);
    p.framesetOk = false;
}

function startTagInForeignContent(p, token) {
    if (foreignContent.causesExit(token) && !p.fragmentContext) {
        while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && !p._isIntegrationPoint(p.openElements.current))
            p.openElements.pop();

        p._processToken(token);
    }

    else {
        var current = p._getAdjustedCurrentElement(),
            currentNs = p.treeAdapter.getNamespaceURI(current);

        if (currentNs === NS.MATHML)
            foreignContent.adjustTokenMathMLAttrs(token);

        else if (currentNs === NS.SVG) {
            foreignContent.adjustTokenSVGTagName(token);
            foreignContent.adjustTokenSVGAttrs(token);
        }

        foreignContent.adjustTokenXMLAttrs(token);

        if (token.selfClosing)
            p._appendElement(token, currentNs);
        else
            p._insertElement(token, currentNs);
    }
}

function endTagInForeignContent(p, token) {
    for (var i = p.openElements.stackTop; i > 0; i--) {
        var element = p.openElements.items[i];

        if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
            p._processToken(token);
            break;
        }

        if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
            p.openElements.popUntilElementPopped(element);
            break;
        }
    }
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HTML = __webpack_require__(2);

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES;

//Element utils

//OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
//It's faster than using dictionary.
function isImpliedEndTagRequired(tn) {
    switch (tn.length) {
        case 1:
            return tn === $.P;

        case 2:
            return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;

        case 3:
            return tn === $.RTC;

        case 6:
            return tn === $.OPTION;

        case 8:
            return tn === $.OPTGROUP || tn === $.MENUITEM;
    }

    return false;
}

function isScopingElement(tn, ns) {
    switch (tn.length) {
        case 2:
            if (tn === $.TD || tn === $.TH)
                return ns === NS.HTML;

            else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS)
                return ns === NS.MATHML;

            break;

        case 4:
            if (tn === $.HTML)
                return ns === NS.HTML;

            else if (tn === $.DESC)
                return ns === NS.SVG;

            break;

        case 5:
            if (tn === $.TABLE)
                return ns === NS.HTML;

            else if (tn === $.MTEXT)
                return ns === NS.MATHML;

            else if (tn === $.TITLE)
                return ns === NS.SVG;

            break;

        case 6:
            return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;

        case 7:
            return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;

        case 8:
            return tn === $.TEMPLATE && ns === NS.HTML;

        case 13:
            return tn === $.FOREIGN_OBJECT && ns === NS.SVG;

        case 14:
            return tn === $.ANNOTATION_XML && ns === NS.MATHML;
    }

    return false;
}

//Stack of open elements
var OpenElementStack = module.exports = function (document, treeAdapter) {
    this.stackTop = -1;
    this.items = [];
    this.current = document;
    this.currentTagName = null;
    this.currentTmplContent = null;
    this.tmplCount = 0;
    this.treeAdapter = treeAdapter;
};

//Index of element
OpenElementStack.prototype._indexOf = function (element) {
    var idx = -1;

    for (var i = this.stackTop; i >= 0; i--) {
        if (this.items[i] === element) {
            idx = i;
            break;
        }
    }
    return idx;
};

//Update current element
OpenElementStack.prototype._isInTemplate = function () {
    return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
};

OpenElementStack.prototype._updateCurrentElement = function () {
    this.current = this.items[this.stackTop];
    this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);

    this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
};

//Mutations
OpenElementStack.prototype.push = function (element) {
    this.items[++this.stackTop] = element;
    this._updateCurrentElement();

    if (this._isInTemplate())
        this.tmplCount++;

};

OpenElementStack.prototype.pop = function () {
    this.stackTop--;

    if (this.tmplCount > 0 && this._isInTemplate())
        this.tmplCount--;

    this._updateCurrentElement();
};

OpenElementStack.prototype.replace = function (oldElement, newElement) {
    var idx = this._indexOf(oldElement);

    this.items[idx] = newElement;

    if (idx === this.stackTop)
        this._updateCurrentElement();
};

OpenElementStack.prototype.insertAfter = function (referenceElement, newElement) {
    var insertionIdx = this._indexOf(referenceElement) + 1;

    this.items.splice(insertionIdx, 0, newElement);

    if (insertionIdx === ++this.stackTop)
        this._updateCurrentElement();
};

OpenElementStack.prototype.popUntilTagNamePopped = function (tagName) {
    while (this.stackTop > -1) {
        var tn = this.currentTagName,
            ns = this.treeAdapter.getNamespaceURI(this.current);

        this.pop();

        if (tn === tagName && ns === NS.HTML)
            break;
    }
};

OpenElementStack.prototype.popUntilElementPopped = function (element) {
    while (this.stackTop > -1) {
        var poppedElement = this.current;

        this.pop();

        if (poppedElement === element)
            break;
    }
};

OpenElementStack.prototype.popUntilNumberedHeaderPopped = function () {
    while (this.stackTop > -1) {
        var tn = this.currentTagName,
            ns = this.treeAdapter.getNamespaceURI(this.current);

        this.pop();

        if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6 && ns === NS.HTML)
            break;
    }
};

OpenElementStack.prototype.popUntilTableCellPopped = function () {
    while (this.stackTop > -1) {
        var tn = this.currentTagName,
            ns = this.treeAdapter.getNamespaceURI(this.current);

        this.pop();

        if (tn === $.TD || tn === $.TH && ns === NS.HTML)
            break;
    }
};

OpenElementStack.prototype.popAllUpToHtmlElement = function () {
    //NOTE: here we assume that root <html> element is always first in the open element stack, so
    //we perform this fast stack clean up.
    this.stackTop = 0;
    this._updateCurrentElement();
};

OpenElementStack.prototype.clearBackToTableContext = function () {
    while (this.currentTagName !== $.TABLE &&
           this.currentTagName !== $.TEMPLATE &&
           this.currentTagName !== $.HTML ||
           this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML)
        this.pop();
};

OpenElementStack.prototype.clearBackToTableBodyContext = function () {
    while (this.currentTagName !== $.TBODY &&
           this.currentTagName !== $.TFOOT &&
           this.currentTagName !== $.THEAD &&
           this.currentTagName !== $.TEMPLATE &&
           this.currentTagName !== $.HTML ||
           this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML)
        this.pop();
};

OpenElementStack.prototype.clearBackToTableRowContext = function () {
    while (this.currentTagName !== $.TR &&
           this.currentTagName !== $.TEMPLATE &&
           this.currentTagName !== $.HTML ||
           this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML)
        this.pop();
};

OpenElementStack.prototype.remove = function (element) {
    for (var i = this.stackTop; i >= 0; i--) {
        if (this.items[i] === element) {
            this.items.splice(i, 1);
            this.stackTop--;
            this._updateCurrentElement();
            break;
        }
    }
};

//Search
OpenElementStack.prototype.tryPeekProperlyNestedBodyElement = function () {
    //Properly nested <body> element (should be second element in stack).
    var element = this.items[1];

    return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
};

OpenElementStack.prototype.contains = function (element) {
    return this._indexOf(element) > -1;
};

OpenElementStack.prototype.getCommonAncestor = function (element) {
    var elementIdx = this._indexOf(element);

    return --elementIdx >= 0 ? this.items[elementIdx] : null;
};

OpenElementStack.prototype.isRootHtmlElementCurrent = function () {
    return this.stackTop === 0 && this.currentTagName === $.HTML;
};

//Element in scope
OpenElementStack.prototype.hasInScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]),
            ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn === tagName && ns === NS.HTML)
            return true;

        if (isScopingElement(tn, ns))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasNumberedHeaderInScope = function () {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]),
            ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if ((tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) && ns === NS.HTML)
            return true;

        if (isScopingElement(tn, ns))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInListItemScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]),
            ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn === tagName && ns === NS.HTML)
            return true;

        if ((tn === $.UL || tn === $.OL) && ns === NS.HTML || isScopingElement(tn, ns))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInButtonScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]),
            ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (tn === tagName && ns === NS.HTML)
            return true;

        if (tn === $.BUTTON && ns === NS.HTML || isScopingElement(tn, ns))
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInTableScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]),
            ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (ns !== NS.HTML)
            continue;

        if (tn === tagName)
            return true;

        if (tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML)
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasTableBodyContextInTableScope = function () {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]),
            ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (ns !== NS.HTML)
            continue;

        if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT)
            return true;

        if (tn === $.TABLE || tn === $.HTML)
            return false;
    }

    return true;
};

OpenElementStack.prototype.hasInSelectScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
        var tn = this.treeAdapter.getTagName(this.items[i]),
            ns = this.treeAdapter.getNamespaceURI(this.items[i]);

        if (ns !== NS.HTML)
            continue;

        if (tn === tagName)
            return true;

        if (tn !== $.OPTION && tn !== $.OPTGROUP)
            return false;
    }

    return true;
};

//Implied end tags
OpenElementStack.prototype.generateImpliedEndTags = function () {
    while (isImpliedEndTagRequired(this.currentTagName))
        this.pop();
};

OpenElementStack.prototype.generateImpliedEndTagsWithExclusion = function (exclusionTagName) {
    while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName)
        this.pop();
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WritableStream = __webpack_require__(4).Writable,
    inherits = __webpack_require__(5).inherits,
    Parser = __webpack_require__(25);

var ParserStream = module.exports = function (options) {
    WritableStream.call(this);

    this.parser = new Parser(options);

    this.lastChunkWritten = false;
    this.writeCallback = null;
    this.pausedByScript = false;

    this.document = this.parser.treeAdapter.createDocument();

    this.pendingHtmlInsertions = [];

    this._resume = this._resume.bind(this);
    this._documentWrite = this._documentWrite.bind(this);
    this._scriptHandler = this._scriptHandler.bind(this);

    this.parser._bootstrap(this.document, null);
};

inherits(ParserStream, WritableStream);

//WritableStream implementation
ParserStream.prototype._write = function (chunk, encoding, callback) {
    this.writeCallback = callback;
    this.parser.tokenizer.write(chunk.toString('utf8'), this.lastChunkWritten);
    this._runParsingLoop();
};

ParserStream.prototype.end = function (chunk, encoding, callback) {
    this.lastChunkWritten = true;
    WritableStream.prototype.end.call(this, chunk, encoding, callback);
};

//Scriptable parser implementation
ParserStream.prototype._runParsingLoop = function () {
    this.parser.runParsingLoopForCurrentChunk(this.writeCallback, this._scriptHandler);
};

ParserStream.prototype._resume = function () {
    if (!this.pausedByScript)
        throw new Error('Parser was already resumed');

    while (this.pendingHtmlInsertions.length) {
        var html = this.pendingHtmlInsertions.pop();

        this.parser.tokenizer.insertHtmlAtCurrentPos(html);
    }

    this.pausedByScript = false;

    //NOTE: keep parsing if we don't wait for the next input chunk
    if (this.parser.tokenizer.active)
        this._runParsingLoop();
};

ParserStream.prototype._documentWrite = function (html) {
    if (!this.parser.stopped)
        this.pendingHtmlInsertions.push(html);
};

ParserStream.prototype._scriptHandler = function (scriptElement) {
    if (this.listeners('script').length) {
        this.pausedByScript = true;
        this.emit('script', scriptElement, this._documentWrite, this._resume);
    }
    else
        this._runParsingLoop();
};



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultTreeAdapter = __webpack_require__(16),
    doctype = __webpack_require__(13),
    mergeOptions = __webpack_require__(14),
    HTML = __webpack_require__(2);

//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES;

//Default serializer options
var DEFAULT_OPTIONS = {
    treeAdapter: defaultTreeAdapter
};

//Escaping regexes
var AMP_REGEX = /&/g,
    NBSP_REGEX = /\u00a0/g,
    DOUBLE_QUOTE_REGEX = /"/g,
    LT_REGEX = /</g,
    GT_REGEX = />/g;

//Serializer
var Serializer = module.exports = function (node, options) {
    this.options = mergeOptions(DEFAULT_OPTIONS, options);
    this.treeAdapter = this.options.treeAdapter;

    this.html = '';
    this.startNode = node;
};

// NOTE: exported as static method for the testing purposes
Serializer.escapeString = function (str, attrMode) {
    str = str
        .replace(AMP_REGEX, '&amp;')
        .replace(NBSP_REGEX, '&nbsp;');

    if (attrMode)
        str = str.replace(DOUBLE_QUOTE_REGEX, '&quot;');

    else {
        str = str
            .replace(LT_REGEX, '&lt;')
            .replace(GT_REGEX, '&gt;');
    }

    return str;
};


//API
Serializer.prototype.serialize = function () {
    this._serializeChildNodes(this.startNode);

    return this.html;
};


//Internals
Serializer.prototype._serializeChildNodes = function (parentNode) {
    var childNodes = this.treeAdapter.getChildNodes(parentNode);

    if (childNodes) {
        for (var i = 0, cnLength = childNodes.length; i < cnLength; i++) {
            var currentNode = childNodes[i];

            if (this.treeAdapter.isElementNode(currentNode))
                this._serializeElement(currentNode);

            else if (this.treeAdapter.isTextNode(currentNode))
                this._serializeTextNode(currentNode);

            else if (this.treeAdapter.isCommentNode(currentNode))
                this._serializeCommentNode(currentNode);

            else if (this.treeAdapter.isDocumentTypeNode(currentNode))
                this._serializeDocumentTypeNode(currentNode);
        }
    }
};

Serializer.prototype._serializeElement = function (node) {
    var tn = this.treeAdapter.getTagName(node),
        ns = this.treeAdapter.getNamespaceURI(node);

    this.html += '<' + tn;
    this._serializeAttributes(node);
    this.html += '>';

    if (tn !== $.AREA && tn !== $.BASE && tn !== $.BASEFONT && tn !== $.BGSOUND && tn !== $.BR && tn !== $.BR &&
        tn !== $.COL && tn !== $.EMBED && tn !== $.FRAME && tn !== $.HR && tn !== $.IMG && tn !== $.INPUT &&
        tn !== $.KEYGEN && tn !== $.LINK && tn !== $.MENUITEM && tn !== $.META && tn !== $.PARAM && tn !== $.SOURCE &&
        tn !== $.TRACK && tn !== $.WBR) {

        var childNodesHolder = tn === $.TEMPLATE && ns === NS.HTML ?
            this.treeAdapter.getTemplateContent(node) :
            node;

        this._serializeChildNodes(childNodesHolder);
        this.html += '</' + tn + '>';
    }
};

Serializer.prototype._serializeAttributes = function (node) {
    var attrs = this.treeAdapter.getAttrList(node);

    for (var i = 0, attrsLength = attrs.length; i < attrsLength; i++) {
        var attr = attrs[i],
            value = Serializer.escapeString(attr.value, true);

        this.html += ' ';

        if (!attr.namespace)
            this.html += attr.name;

        else if (attr.namespace === NS.XML)
            this.html += 'xml:' + attr.name;

        else if (attr.namespace === NS.XMLNS) {
            if (attr.name !== 'xmlns')
                this.html += 'xmlns:';

            this.html += attr.name;
        }

        else if (attr.namespace === NS.XLINK)
            this.html += 'xlink:' + attr.name;

        else
            this.html += attr.namespace + ':' + attr.name;

        this.html += '="' + value + '"';
    }
};

Serializer.prototype._serializeTextNode = function (node) {
    var content = this.treeAdapter.getTextNodeContent(node),
        parent = this.treeAdapter.getParentNode(node),
        parentTn = void 0;

    if (parent && this.treeAdapter.isElementNode(parent))
        parentTn = this.treeAdapter.getTagName(parent);

    if (parentTn === $.STYLE || parentTn === $.SCRIPT || parentTn === $.XMP || parentTn === $.IFRAME ||
        parentTn === $.NOEMBED || parentTn === $.NOFRAMES || parentTn === $.PLAINTEXT || parentTn === $.NOSCRIPT)

        this.html += content;

    else
        this.html += Serializer.escapeString(content, false);
};

Serializer.prototype._serializeCommentNode = function (node) {
    this.html += '<!--' + this.treeAdapter.getCommentNodeContent(node) + '-->';
};

Serializer.prototype._serializeDocumentTypeNode = function (node) {
    var name = this.treeAdapter.getDocumentTypeNodeName(node);

    this.html += '<' + doctype.serializeContent(name, null, null) + '>';
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(38);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(7);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(83);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var platform_server_1 = __webpack_require__(19);
var app_module_shared_1 = __webpack_require__(41);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: app_module_shared_1.sharedConfig.bootstrap,
        declarations: app_module_shared_1.sharedConfig.declarations,
        imports: [
            platform_server_1.ServerModule
        ].concat(app_module_shared_1.sharedConfig.imports)
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    // feature test for Symbol support
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var HashMap;
    (function (HashMap) {
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        HashMap.create = supportsCreate
            ? function () { return MakeDictionary(Object.create(null)); }
            : supportsProto
                ? function () { return MakeDictionary({ __proto__: null }); }
                : function () { return MakeDictionary({}); };
        HashMap.has = downLevel
            ? function (map, key) { return hasOwn.call(map, key); }
            : function (map, key) { return key in map; };
        HashMap.get = downLevel
            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
            : function (map, key) { return map[key]; };
    })(HashMap || (HashMap = {}));
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
    var Metadata = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param propertyKey (Optional) The property key to decorate.
      * @param attributes (Optional) The property descriptor for the target key.
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Example = Reflect.decorate(decoratorsArray, Example);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
      */
    function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsObject(target))
                throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
            if (IsNull(attributes))
                attributes = undefined;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
        }
        else {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsConstructor(target))
                throw new TypeError();
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
    // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class Example {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param propertyKey (Optional) The property key for the target.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, Example);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
      *
      */
    function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        if (!metadataMap.delete(metadataKey))
            return false;
        if (metadataMap.size > 0)
            return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
            return true;
        Metadata.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                    throw new TypeError();
                target = decorated;
            }
        }
        return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                    throw new TypeError();
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
            if (!Create)
                return undefined;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
            if (!Create)
                return undefined;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
    }
    // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
    }
    // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        return ToBoolean(metadataMap.has(MetadataKey));
    }
    // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
    }
    // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return undefined;
        return metadataMap.get(MetadataKey);
    }
    // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // 3.1.6.1 OrdinaryMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
            return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
            return ownKeys;
        if (ownKeys.length <= 0)
            return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
    function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
                keys.length = k;
                return keys;
            }
            var nextValue = IteratorValue(next);
            try {
                keys[k] = nextValue;
            }
            catch (e) {
                try {
                    IteratorClose(iterator);
                }
                finally {
                    throw e;
                }
            }
            k++;
        }
    }
    // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
    function Type(x) {
        if (x === null)
            return 1 /* Null */;
        switch (typeof x) {
            case "undefined": return 0 /* Undefined */;
            case "boolean": return 2 /* Boolean */;
            case "string": return 3 /* String */;
            case "symbol": return 4 /* Symbol */;
            case "number": return 5 /* Number */;
            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
            default: return 6 /* Object */;
        }
    }
    // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
    function IsNull(x) {
        return x === null;
    }
    // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive
    function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
            case 0 /* Undefined */: return input;
            case 1 /* Null */: return input;
            case 2 /* Boolean */: return input;
            case 3 /* String */: return input;
            case 4 /* Symbol */: return input;
            case 5 /* Number */: return input;
        }
        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
                throw new TypeError();
            return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
    function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                    return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        throw new TypeError();
    }
    // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean
    function ToBoolean(argument) {
        return !!argument;
    }
    // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring
    function ToString(argument) {
        return "" + argument;
    }
    // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey
    function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key))
            return key;
        return ToString(key);
    }
    // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray
    function IsArray(argument) {
        return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
                ? argument instanceof Array
                : Object.prototype.toString.call(argument) === "[object Array]";
    }
    // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable
    function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
    }
    // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor
    function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
    }
    // 7.2.7 IsPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-ispropertykey
    function IsPropertyKey(argument) {
        switch (Type(argument)) {
            case 3 /* String */: return true;
            case 4 /* Symbol */: return true;
            default: return false;
        }
    }
    // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod
    function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
            return undefined;
        if (!IsCallable(func))
            throw new TypeError();
        return func;
    }
    // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
    function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
            throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator))
            throw new TypeError();
        return iterator;
    }
    // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
    function IteratorValue(iterResult) {
        return iterResult.value;
    }
    // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep
    function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
    }
    // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose
    function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
            f.call(iterator);
    }
    // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
    function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
            return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype)
            return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
            return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O)
            return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (function () {
            function MapIterator(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
            }
            MapIterator.prototype["@@iterator"] = function () { return this; };
            MapIterator.prototype[iteratorSymbol] = function () { return this; };
            MapIterator.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    else {
                        this._index++;
                    }
                    return { value: result, done: false };
                }
                return { value: undefined, done: true };
            };
            MapIterator.prototype.throw = function (error) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                throw error;
            };
            MapIterator.prototype.return = function (value) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                return { value: value, done: true };
            };
            return MapIterator;
        }());
        return (function () {
            function Map() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            }
            Object.defineProperty(Map.prototype, "size", {
                get: function () { return this._keys.length; },
                enumerable: true,
                configurable: true
            });
            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
            Map.prototype.get = function (key) {
                var index = this._find(key, /*insert*/ false);
                return index >= 0 ? this._values[index] : undefined;
            };
            Map.prototype.set = function (key, value) {
                var index = this._find(key, /*insert*/ true);
                this._values[index] = value;
                return this;
            };
            Map.prototype.delete = function (key) {
                var index = this._find(key, /*insert*/ false);
                if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                        this._keys[i - 1] = this._keys[i];
                        this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    return true;
                }
                return false;
            };
            Map.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            };
            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
            Map.prototype["@@iterator"] = function () { return this.entries(); };
            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
            Map.prototype._find = function (key, insert) {
                if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                }
                return this._cacheIndex;
            };
            return Map;
        }());
        function getKey(key, _) {
            return key;
        }
        function getValue(_, value) {
            return value;
        }
        function getEntry(key, value) {
            return [key, value];
        }
    }
    // naive Set shim
    function CreateSetPolyfill() {
        return (function () {
            function Set() {
                this._map = new _Map();
            }
            Object.defineProperty(Set.prototype, "size", {
                get: function () { return this._map.size; },
                enumerable: true,
                configurable: true
            });
            Set.prototype.has = function (value) { return this._map.has(value); };
            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
            Set.prototype.delete = function (value) { return this._map.delete(value); };
            Set.prototype.clear = function () { this._map.clear(); };
            Set.prototype.keys = function () { return this._map.keys(); };
            Set.prototype.values = function () { return this._map.values(); };
            Set.prototype.entries = function () { return this._map.entries(); };
            Set.prototype["@@iterator"] = function () { return this.keys(); };
            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
            return Set;
        }());
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (function () {
            function WeakMap() {
                this._key = CreateUniqueKey();
            }
            WeakMap.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.has(table, this._key) : false;
            };
            WeakMap.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };
            WeakMap.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            };
            WeakMap.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? delete table[this._key] : false;
            };
            WeakMap.prototype.clear = function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            };
            return WeakMap;
        }());
        function CreateUniqueKey() {
            var key;
            do
                key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create)
                    return undefined;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 0xff | 0;
            return buffer;
        }
        function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                if (byte < 16)
                    result += "0";
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
    }
    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
    function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
    }
    // patch global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    if (hasOwn.call(Reflect, p)) {
                        __global.Reflect[p] = Reflect[p];
                    }
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof global !== "undefined" ? global :
        typeof self !== "undefined" ? self :
            Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(29);
var first_1 = __webpack_require__(33);
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(41);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(47);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @license Angular v4.1.2
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
	 true ? factory(exports, __webpack_require__(1), __webpack_require__(31), __webpack_require__(20)) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@angular/animations/browser'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.platformBrowser = global.ng.platformBrowser || {}, global.ng.platformBrowser.animations = global.ng.platformBrowser.animations || {}),global.ng.core,global.ng.platformBrowser,global.ng.animations.browser));
}(this, (function (exports,_angular_core,_angular_platformBrowser,_angular_animations_browser) { 'use strict';

var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.2
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AnimationRendererFactory = (function () {
    /**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     */
    function AnimationRendererFactory(delegate, _engine, _zone) {
        this.delegate = delegate;
        this._engine = _engine;
        this._zone = _zone;
    }
    /**
     * @param {?} hostElement
     * @param {?} type
     * @return {?}
     */
    AnimationRendererFactory.prototype.createRenderer = function (hostElement, type) {
        var _this = this;
        var /** @type {?} */ delegate = this.delegate.createRenderer(hostElement, type);
        if (!hostElement || !type || !type.data || !type.data['animation'])
            return delegate;
        var /** @type {?} */ namespaceId = type.id;
        var /** @type {?} */ animationTriggers = (type.data['animation']);
        animationTriggers.forEach(function (trigger) { return _this._engine.registerTrigger(trigger, namespaceify(namespaceId, trigger.name)); });
        return new AnimationRenderer(delegate, this._engine, this._zone, namespaceId);
    };
    return AnimationRendererFactory;
}());
AnimationRendererFactory.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
AnimationRendererFactory.ctorParameters = function () { return [
    { type: _angular_core.RendererFactory2, },
    { type: _angular_animations_browser.ɵAnimationEngine, },
    { type: _angular_core.NgZone, },
]; };
var AnimationRenderer = (function () {
    /**
     * @param {?} delegate
     * @param {?} _engine
     * @param {?} _zone
     * @param {?} _namespaceId
     */
    function AnimationRenderer(delegate, _engine, _zone, _namespaceId) {
        this.delegate = delegate;
        this._engine = _engine;
        this._zone = _zone;
        this._namespaceId = _namespaceId;
        this.destroyNode = null;
        this._flushPromise = null;
        this.destroyNode = this.delegate.destroyNode ? function (n) { return delegate.destroyNode(n); } : null;
    }
    Object.defineProperty(AnimationRenderer.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () { return this.delegate.data; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AnimationRenderer.prototype.destroy = function () { this.delegate.destroy(); };
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    AnimationRenderer.prototype.createElement = function (name, namespace) {
        return this.delegate.createElement(name, namespace);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.createComment = function (value) { return this.delegate.createComment(value); };
    /**
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.createText = function (value) { return this.delegate.createText(value); };
    /**
     * @param {?} selectorOrNode
     * @return {?}
     */
    AnimationRenderer.prototype.selectRootElement = function (selectorOrNode) {
        return this.delegate.selectRootElement(selectorOrNode);
    };
    /**
     * @param {?} node
     * @return {?}
     */
    AnimationRenderer.prototype.parentNode = function (node) { return this.delegate.parentNode(node); };
    /**
     * @param {?} node
     * @return {?}
     */
    AnimationRenderer.prototype.nextSibling = function (node) { return this.delegate.nextSibling(node); };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    AnimationRenderer.prototype.setAttribute = function (el, name, value, namespace) {
        this.delegate.setAttribute(el, name, value, namespace);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    AnimationRenderer.prototype.removeAttribute = function (el, name, namespace) {
        this.delegate.removeAttribute(el, name, namespace);
    };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    AnimationRenderer.prototype.addClass = function (el, name) { this.delegate.addClass(el, name); };
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    AnimationRenderer.prototype.removeClass = function (el, name) { this.delegate.removeClass(el, name); };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?} flags
     * @return {?}
     */
    AnimationRenderer.prototype.setStyle = function (el, style, value, flags) {
        this.delegate.setStyle(el, style, value, flags);
    };
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} flags
     * @return {?}
     */
    AnimationRenderer.prototype.removeStyle = function (el, style, flags) {
        this.delegate.removeStyle(el, style, flags);
    };
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.setValue = function (node, value) { this.delegate.setValue(node, value); };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    AnimationRenderer.prototype.appendChild = function (parent, newChild) {
        var _this = this;
        this._engine.onInsert(newChild, function () { return _this.delegate.appendChild(parent, newChild); });
        this._queueFlush();
    };
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    AnimationRenderer.prototype.insertBefore = function (parent, newChild, refChild) {
        var _this = this;
        this._engine.onInsert(newChild, function () { return _this.delegate.insertBefore(parent, newChild, refChild); });
        this._queueFlush();
    };
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @return {?}
     */
    AnimationRenderer.prototype.removeChild = function (parent, oldChild) {
        var _this = this;
        this._engine.onRemove(oldChild, function () {
            // Note: if an component element has a leave animation, and the component
            // a host leave animation, the view engine will call `removeChild` for the parent
            // component renderer as well as for the child component renderer.
            // Therefore, we need to check if we already removed the element.
            if (_this.delegate.parentNode(oldChild)) {
                _this.delegate.removeChild(parent, oldChild);
            }
        });
        this._queueFlush();
    };
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    AnimationRenderer.prototype.setProperty = function (el, name, value) {
        if (name.charAt(0) == '@') {
            this._engine.setProperty(el, namespaceify(this._namespaceId, name.substr(1)), value);
            this._queueFlush();
        }
        else {
            this.delegate.setProperty(el, name, value);
        }
    };
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    AnimationRenderer.prototype.listen = function (target, eventName, callback) {
        var _this = this;
        if (eventName.charAt(0) == '@') {
            var /** @type {?} */ element = resolveElementFromTarget(target);
            var _a = parseTriggerCallbackName(eventName.substr(1)), name = _a[0], phase = _a[1];
            return this._engine.listen(element, namespaceify(this._namespaceId, name), phase, function (event) {
                var /** @type {?} */ e = (event);
                if (e.triggerName) {
                    e.triggerName = deNamespaceify(_this._namespaceId, e.triggerName);
                }
                _this._zone.run(function () { return callback(event); });
            });
        }
        return this.delegate.listen(target, eventName, callback);
    };
    /**
     * @return {?}
     */
    AnimationRenderer.prototype._queueFlush = function () {
        var _this = this;
        if (!this._flushPromise) {
            this._zone.runOutsideAngular(function () {
                _this._flushPromise = Promise.resolve(null).then(function () {
                    _this._flushPromise = ((null));
                    _this._engine.flush();
                });
            });
        }
    };
    return AnimationRenderer;
}());
/**
 * @param {?} target
 * @return {?}
 */
function resolveElementFromTarget(target) {
    switch (target) {
        case 'body':
            return document.body;
        case 'document':
            return document;
        case 'window':
            return window;
        default:
            return target;
    }
}
/**
 * @param {?} triggerName
 * @return {?}
 */
function parseTriggerCallbackName(triggerName) {
    var /** @type {?} */ dotIndex = triggerName.indexOf('.');
    var /** @type {?} */ trigger = triggerName.substring(0, dotIndex);
    var /** @type {?} */ phase = triggerName.substr(dotIndex + 1);
    return [trigger, phase];
}
/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function namespaceify(namespaceId, value) {
    return namespaceId + "#" + value;
}
/**
 * @param {?} namespaceId
 * @param {?} value
 * @return {?}
 */
function deNamespaceify(namespaceId, value) {
    return value.replace(namespaceId + '#', '');
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var InjectableAnimationEngine = (function (_super) {
    __extends(InjectableAnimationEngine, _super);
    /**
     * @param {?} driver
     * @param {?} normalizer
     */
    function InjectableAnimationEngine(driver, normalizer) {
        return _super.call(this, driver, normalizer) || this;
    }
    return InjectableAnimationEngine;
}(_angular_animations_browser.ɵDomAnimationEngine));
InjectableAnimationEngine.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
InjectableAnimationEngine.ctorParameters = function () { return [
    { type: _angular_animations_browser.AnimationDriver, },
    { type: _angular_animations_browser.ɵAnimationStyleNormalizer, },
]; };
/**
 * @return {?}
 */
function instantiateSupportedAnimationDriver() {
    if (_angular_animations_browser.ɵsupportsWebAnimations()) {
        return new _angular_animations_browser.ɵWebAnimationsDriver();
    }
    return new _angular_animations_browser.ɵNoopAnimationDriver();
}
/**
 * @return {?}
 */
function instantiateDefaultStyleNormalizer() {
    return new _angular_animations_browser.ɵWebAnimationsStyleNormalizer();
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
var BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: _angular_animations_browser.AnimationDriver, useFactory: instantiateSupportedAnimationDriver },
    { provide: _angular_animations_browser.ɵAnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: _angular_animations_browser.ɵAnimationEngine, useClass: InjectableAnimationEngine }, {
        provide: _angular_core.RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [_angular_platformBrowser.ɵDomRendererFactory2, _angular_animations_browser.ɵAnimationEngine, _angular_core.NgZone]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: _angular_animations_browser.ɵAnimationEngine, useClass: _angular_animations_browser.ɵNoopAnimationEngine }, {
        provide: _angular_core.RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [_angular_platformBrowser.ɵDomRendererFactory2, _angular_animations_browser.ɵAnimationEngine, _angular_core.NgZone]
    }
];
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@experimental Animation support is experimental.
 */
var BrowserAnimationsModule = (function () {
    function BrowserAnimationsModule() {
    }
    return BrowserAnimationsModule;
}());
BrowserAnimationsModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_platformBrowser.BrowserModule],
                providers: BROWSER_ANIMATIONS_PROVIDERS,
            },] },
];
/**
 * @nocollapse
 */
BrowserAnimationsModule.ctorParameters = function () { return []; };
/**
 * \@experimental Animation support is experimental.
 */
var NoopAnimationsModule = (function () {
    function NoopAnimationsModule() {
    }
    return NoopAnimationsModule;
}());
NoopAnimationsModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_platformBrowser.BrowserModule],
                providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
            },] },
];
/**
 * @nocollapse
 */
NoopAnimationsModule.ctorParameters = function () { return []; };

exports.BrowserAnimationsModule = BrowserAnimationsModule;
exports.NoopAnimationsModule = NoopAnimationsModule;
exports.ɵAnimationRenderer = AnimationRenderer;
exports.ɵAnimationRendererFactory = AnimationRendererFactory;
exports.ɵe = BROWSER_ANIMATIONS_PROVIDERS;
exports.ɵf = BROWSER_NOOP_ANIMATIONS_PROVIDERS;
exports.ɵa = InjectableAnimationEngine;
exports.ɵc = instantiateDefaultStyleNormalizer;
exports.ɵd = instantiateRendererFactory;
exports.ɵb = instantiateSupportedAnimationDriver;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=platform-browser-animations.umd.js.map


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(104);
var app_component_1 = __webpack_require__(42);
var navmenu_component_1 = __webpack_require__(46);
var home_component_1 = __webpack_require__(45);
var excelTemplateDemo_component_1 = __webpack_require__(44);
var programmingDemo_component_1 = __webpack_require__(47);
var excelIODemo_component_1 = __webpack_require__(43);
var gc_spread_sheets_angular2_10_2_0_1 = __webpack_require__(48);
exports.sharedConfig = {
    bootstrap: [app_component_1.AppComponent],
    declarations: [
        app_component_1.AppComponent,
        navmenu_component_1.NavMenuComponent,
        excelIODemo_component_1.ExcelIODemoComponent,
        excelTemplateDemo_component_1.ExcelTemplateDemoComponent,
        programmingDemo_component_1.ProgrammingDemoComponent,
        home_component_1.HomeComponent,
    ],
    imports: [
        gc_spread_sheets_angular2_10_2_0_1.SpreadSheetsModule,
        router_1.RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'excelTemplateDemo', component: excelTemplateDemo_component_1.ExcelTemplateDemoComponent },
            { path: 'programmingDemo', component: programmingDemo_component_1.ProgrammingDemoComponent },
            { path: 'excelIODemo', component: excelIODemo_component_1.ExcelIODemoComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: __webpack_require__(56),
        styles: [__webpack_require__(97)]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var utility_1 = __webpack_require__(9);
var ExcelIODemoComponent = (function () {
    function ExcelIODemoComponent() {
    }
    ExcelIODemoComponent.prototype.getSpread = function ($event) {
        this.spread = $event.spread;
        var sheet = this.spread.getActiveSheet();
        sheet.addSpan(6, 3, 5, 10);
        var cell = sheet.getCell(6, 3);
        cell.text('Please choose an excel file(xlsx) to import!');
        cell.hAlign(GC.Spread.Sheets.HorizontalAlign.center);
        cell.vAlign(GC.Spread.Sheets.VerticalAlign.center);
        cell.font('bold 25px arial');
    };
    /**
     * Upload an excel file at client side, open the file at server side then transport the ssjson to client
     * @param e
     */
    ExcelIODemoComponent.prototype.importExcel = function (e) {
        var _this = this;
        var selectedFile = e.target.files[0];
        if (!selectedFile) {
            this.selectedFileName = null;
            return;
        }
        this.selectedFileName = selectedFile.name;
        var requestUrl = '/api/SpreadServices/ImportExcel';
        fetch(requestUrl, {
            method: 'POST',
            body: selectedFile
        }).then(function (response) { return response.json(); })
            .then(function (data) {
            _this.spread.fromJSON(data);
            //this.setState({ ssjson: data, loading: false });
        });
    };
    /**
     * Tranport ssjson from Spread.Sheets and save and download the excel file.
     * @param e
     */
    ExcelIODemoComponent.prototype.exportExcel = function (e) {
        var ssjson = JSON.stringify(this.spread.toJSON(null));
        utility_1.Utility.ExportExcel(ssjson, this.selectedFileName);
    };
    return ExcelIODemoComponent;
}());
ExcelIODemoComponent = __decorate([
    core_1.Component({
        selector: 'excelIODemo',
        template: __webpack_require__(57),
        styles: [__webpack_require__(98)]
    })
], ExcelIODemoComponent);
exports.ExcelIODemoComponent = ExcelIODemoComponent;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(30);
var utility_1 = __webpack_require__(9);
var ExcelTemplateDemoComponent = (function () {
    function ExcelTemplateDemoComponent(http, originUrl) {
        // this is a template excel file at server side
        this.templateName = 'SimpleInvoice.xlsx';
    }
    ExcelTemplateDemoComponent.prototype.getSpread = function ($event) {
        this.spread = $event.spread;
        this.loadSpreadFromTemplate();
    };
    ExcelTemplateDemoComponent.prototype.loadSpreadFromTemplate = function () {
        var _this = this;
        var requestUrl = '/api/SpreadServices/GetSSJsonFromTemplate/' + this.templateName;
        fetch(requestUrl, {
            method: 'Get'
        }).then(function (response) { return response.json(); })
            .then(function (data) {
            _this.spread.fromJSON(data);
        });
    };
    ExcelTemplateDemoComponent.prototype.exportExcel = function () {
        var ssjson = JSON.stringify(this.spread.toJSON(null));
        utility_1.Utility.ExportExcel(ssjson, this.templateName);
    };
    return ExcelTemplateDemoComponent;
}());
ExcelTemplateDemoComponent = __decorate([
    core_1.Component({
        selector: 'excelTemplateDemo',
        template: __webpack_require__(58)
    }),
    __param(1, core_1.Inject('ORIGIN_URL')),
    __metadata("design:paramtypes", [http_1.Http, String])
], ExcelTemplateDemoComponent);
exports.ExcelTemplateDemoComponent = ExcelTemplateDemoComponent;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var HomeComponent = (function () {
    function HomeComponent() {
        this.options = [
            { value: 'BidTracker', label: 'Bid Tracker' },
            { value: 'ToDoList', label: 'ToDo List' },
            { value: 'AddressBook', label: 'Address Book' }
        ];
        this.selectedValue = "BidTracker";
    }
    HomeComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedValue = newValue;
        // ... do other stuff here ...
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: __webpack_require__(59)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var NavMenuComponent = (function () {
    function NavMenuComponent() {
    }
    return NavMenuComponent;
}());
NavMenuComponent = __decorate([
    core_1.Component({
        selector: 'nav-menu',
        template: __webpack_require__(60),
        styles: [__webpack_require__(99)]
    })
], NavMenuComponent);
exports.NavMenuComponent = NavMenuComponent;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var utility_1 = __webpack_require__(9);
var ProgrammingDemoComponent = (function () {
    function ProgrammingDemoComponent() {
        this.options = [
            { value: 'BidTracker', label: 'Bid Tracker' },
            { value: 'ToDoList', label: 'ToDo List' },
            { value: 'AddressBook', label: 'Address Book' }
        ];
        this.selectedValue = "BidTracker";
    }
    ProgrammingDemoComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedValue = newValue;
        this.loadSpreadFromUseCase(this.selectedValue);
    };
    ProgrammingDemoComponent.prototype.getSpread = function ($event) {
        this.spread = $event.spread;
        this.loadSpreadFromUseCase(this.selectedValue);
    };
    ProgrammingDemoComponent.prototype.loadSpreadFromUseCase = function (caseName) {
        var _this = this;
        var requestUrl = '/api/SpreadServices/GetSSJsonFromUseCase/' + caseName;
        fetch(requestUrl, {
            method: 'Get'
        }).then(function (response) { return response.json(); })
            .then(function (data) {
            _this.spread.fromJSON(data);
        });
    };
    ProgrammingDemoComponent.prototype.exportExcel = function () {
        var ssjson = JSON.stringify(this.spread.toJSON(null));
        utility_1.Utility.ExportExcel(ssjson, this.selectedValue);
    };
    return ProgrammingDemoComponent;
}());
ProgrammingDemoComponent = __decorate([
    core_1.Component({
        selector: 'programmingDemo',
        template: __webpack_require__(61)
    }),
    __metadata("design:paramtypes", [])
], ProgrammingDemoComponent);
exports.ProgrammingDemoComponent = ProgrammingDemoComponent;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="./GC.Spread.Sheets.d.ts" />
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(32);
var ColumnComponent = (function () {
    function ColumnComponent() {
        this.changes = {};
    }
    ColumnComponent.prototype.onAttached = function (sheet, index) {
        this.sheet = sheet;
        this.index = index;
        this.onColumnChanged();
    };
    ColumnComponent.prototype.onColumnChanged = function () {
        if (this.sheet) {
            var sheet = this.sheet;
            sheet.suspendPaint();
            sheet.suspendEvent();
            var changes = this.changes;
            for (var changeName in changes) {
                var newValue = changes[changeName].currentValue;
                if (newValue === null || newValue === void 0) {
                    continue;
                }
                switch (changeName) {
                    case 'width':
                        sheet.setColumnWidth(this.index, newValue);
                        break;
                    case 'visible':
                        sheet.setColumnVisible(this.index, newValue);
                        break;
                    case 'resizable':
                        sheet.setColumnResizable(this.index, newValue);
                        break;
                    case 'autoFit':
                        if (newValue) {
                            sheet.autoFitColumn(this.index);
                        }
                        break;
                    case 'style':
                        sheet.setStyle(-1, this.index, newValue);
                        break;
                    case 'headerStyle':
                        sheet.setStyle(-1, this.index, newValue, GC.Spread.Sheets.SheetArea.colHeader);
                        break;
                    case 'cellType':
                        sheet.setCellType(-1, this.index, newValue);
                        break;
                    case 'formatter':
                        sheet.setFormatter(-1, this.index, newValue, GC.Spread.Sheets.SheetArea.viewport);
                        break;
                }
            }
            this.changes = {};
            sheet.resumeEvent();
            sheet.resumePaint();
        }
    };
    ColumnComponent.prototype.ngOnChanges = function (changes) {
        var changesCache = this.changes;
        for (var changeName in changes) {
            changesCache[changeName] = changes[changeName];
        }
        this.onColumnChanged();
    };
    return ColumnComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ColumnComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColumnComponent.prototype, "dataField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ColumnComponent.prototype, "headerText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColumnComponent.prototype, "visible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColumnComponent.prototype, "resizable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ColumnComponent.prototype, "autoFit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.Style)
], ColumnComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.CellTypes.Base)
], ColumnComponent.prototype, "cellType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.Style)
], ColumnComponent.prototype, "headerStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ColumnComponent.prototype, "formatter", void 0);
ColumnComponent = __decorate([
    core_1.Component({
        selector: 'gc-column',
        template: "\n        <ng-content></ng-content>\n    "
    })
], ColumnComponent);
exports.ColumnComponent = ColumnComponent;
var WorksheetComponent = (function () {
    function WorksheetComponent() {
        this.sheet = new GC.Spread.Sheets.Worksheet("");
    }
    WorksheetComponent.prototype.onAttached = function () {
        var _this = this;
        var sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        if (this.dataSource) {
            sheet.setDataSource(this.dataSource);
            this.columns.forEach(function (columnComponent, index) {
                if (columnComponent.dataField) {
                    sheet.bindColumn(index, {
                        name: columnComponent.dataField,
                        displayName: columnComponent.headerText
                    });
                }
            });
        }
        if (this.columns.length > 0) {
            sheet.setColumnCount(this.columns.length);
            this.columns.forEach(function (columnComponent, index) {
                columnComponent.onAttached(_this.sheet, index);
            });
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    };
    WorksheetComponent.prototype.getSheet = function () {
        return this.sheet;
    };
    WorksheetComponent.prototype.ngOnChanges = function (changes) {
        var sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        for (var changeName in changes) {
            var newValue = changes[changeName].currentValue;
            if (newValue === null || newValue === void 0) {
                continue;
            }
            switch (changeName) {
                case "rowCount":
                    sheet.setRowCount(newValue);
                    break;
                case "colCount":
                    sheet.setColumnCount(newValue);
                    break;
                case "name":
                    sheet.name(newValue);
                    break;
                case "frozenColumnCount":
                    sheet.frozenColumnCount(newValue);
                    break;
                case "frozenRowCount":
                    sheet.frozenRowCount(newValue);
                    break;
                case "frozenTrailingRowCount":
                    sheet.frozenTrailingRowCount(newValue);
                    break;
                case "frozenTrailingColumnCount":
                    sheet.frozenTrailingColumnCount(newValue);
                    break;
                case "selectionPolicy":
                    sheet.selectionPolicy(newValue);
                    break;
                case "selectionUnit":
                    sheet.selectionUnit(newValue);
                    break;
                case "zoom":
                    sheet.zoom(newValue);
                    break;
                case "currentTheme":
                    sheet.currentTheme(newValue);
                    break;
                case "defaultStyle":
                    sheet.setDefaultStyle(newValue);
                    break;
                case "rowOutlineInfo":
                    newValue.forEach(function (item) {
                        sheet.rowOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "columnOutlineInfo":
                    newValue.forEach(function (item) {
                        sheet.columnOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "showRowOutline":
                    sheet.showRowOutline(newValue);
                    break;
                case "showColumnOutline":
                    sheet.showColumnOutline(newValue);
                    break;
                default:
                    sheet.options[changeName] = newValue;
            }
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    };
    return WorksheetComponent;
}());
__decorate([
    core_1.ContentChildren(ColumnComponent),
    __metadata("design:type", core_1.QueryList)
], WorksheetComponent.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "rowCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "colCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorksheetComponent.prototype, "dataSource", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenColumnCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenRowCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingRowCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "frozenTrailingColumnCount", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "allowCellOverflow", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "frozenlineColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "sheetTabColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "selectionPolicy", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "selectionUnit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "zoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "currentTheme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "clipBoardOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "rowHeaderVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "colHeaderVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "rowHeaderAutoTextIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], WorksheetComponent.prototype, "colHeaderAutoTextIndex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "isProtected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "showRowOutline", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WorksheetComponent.prototype, "showColumnOutline", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "selectionBackColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorksheetComponent.prototype, "selectionBorderColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", GC.Spread.Sheets.Style)
], WorksheetComponent.prototype, "defaultStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WorksheetComponent.prototype, "rowOutlineInfo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WorksheetComponent.prototype, "columnOutlineInfo", void 0);
WorksheetComponent = __decorate([
    core_1.Component({
        selector: 'gc-worksheet',
        template: "\n        <ng-content></ng-content>\n    "
    }),
    __metadata("design:paramtypes", [])
], WorksheetComponent);
exports.WorksheetComponent = WorksheetComponent;
var SpreadSheetsComponent = (function () {
    function SpreadSheetsComponent(elRef) {
        this.style = {
            height: '620px',
            border: '1px solid gray'
        };
        //outputs events
        this.workbookInitialized = new core_1.EventEmitter();
        this.validationError = new core_1.EventEmitter();
        this.cellClick = new core_1.EventEmitter();
        this.cellDoubleClick = new core_1.EventEmitter();
        this.enterCell = new core_1.EventEmitter();
        this.leaveCell = new core_1.EventEmitter();
        this.valueChanged = new core_1.EventEmitter();
        this.topRowChanged = new core_1.EventEmitter();
        this.leftColumnChanged = new core_1.EventEmitter();
        this.invalidOperation = new core_1.EventEmitter();
        this.rangeFiltering = new core_1.EventEmitter();
        this.rangeFiltered = new core_1.EventEmitter();
        this.tableFiltering = new core_1.EventEmitter();
        this.tableFiltered = new core_1.EventEmitter();
        this.rangeSorting = new core_1.EventEmitter();
        this.rangeSorted = new core_1.EventEmitter();
        this.clipboardChanging = new core_1.EventEmitter();
        this.clipboardChanged = new core_1.EventEmitter();
        this.clipboardPasting = new core_1.EventEmitter();
        this.clipboardPasted = new core_1.EventEmitter();
        this.columnWidthChanging = new core_1.EventEmitter();
        this.columnWidthChanged = new core_1.EventEmitter();
        this.rowHeightChanging = new core_1.EventEmitter();
        this.rowHeightChanged = new core_1.EventEmitter();
        this.dragDropBlock = new core_1.EventEmitter();
        this.dragDropBlockCompleted = new core_1.EventEmitter();
        this.dragFillBlock = new core_1.EventEmitter();
        this.dragFillBlockCompleted = new core_1.EventEmitter();
        this.editStarting = new core_1.EventEmitter();
        this.editChange = new core_1.EventEmitter();
        this.editEnding = new core_1.EventEmitter();
        this.editEnd = new core_1.EventEmitter();
        this.editEnded = new core_1.EventEmitter();
        this.rangeGroupStateChanging = new core_1.EventEmitter();
        this.rangeGroupStateChanged = new core_1.EventEmitter();
        this.selectionChanging = new core_1.EventEmitter();
        this.selectionChanged = new core_1.EventEmitter();
        this.sheetTabClick = new core_1.EventEmitter();
        this.sheetTabDoubleClick = new core_1.EventEmitter();
        this.sheetNameChanging = new core_1.EventEmitter();
        this.sheetNameChanged = new core_1.EventEmitter();
        this.userZooming = new core_1.EventEmitter();
        this.userFormulaEntered = new core_1.EventEmitter();
        this.cellChanged = new core_1.EventEmitter();
        this.columnChanged = new core_1.EventEmitter();
        this.rowChanged = new core_1.EventEmitter();
        this.activeSheetChanging = new core_1.EventEmitter();
        this.activeSheetChanged = new core_1.EventEmitter();
        this.sparklineChanged = new core_1.EventEmitter();
        this.rangeChanged = new core_1.EventEmitter();
        this.buttonClicked = new core_1.EventEmitter();
        this.editorStatusChanged = new core_1.EventEmitter();
        this.floatingObjectChanged = new core_1.EventEmitter();
        this.floatingObjectSelectionChanged = new core_1.EventEmitter();
        this.pictureChanged = new core_1.EventEmitter();
        this.floatingObjectRemoving = new core_1.EventEmitter();
        this.floatingObjectRemoved = new core_1.EventEmitter();
        this.pictureSelectionChanged = new core_1.EventEmitter();
        this.floatingObjectLoaded = new core_1.EventEmitter();
        this.touchToolStripOpening = new core_1.EventEmitter();
        this.commentChanged = new core_1.EventEmitter();
        this.commentRemoving = new core_1.EventEmitter();
        this.commentRemoved = new core_1.EventEmitter();
        this.slicerChanged = new core_1.EventEmitter();
        this.elRef = elRef;
    }
    SpreadSheetsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var elRef = this.elRef;
        var dom = elRef.nativeElement;
        var hostElement = dom.querySelector('div');
        this.spread = new GC.Spread.Sheets.Workbook(hostElement, { sheetCount: 0 });
        this.setSpreadOptions();
        var sheets = this.sheets;
        sheets.forEach(function (sheetComponent, index) {
            _this.spread.addSheet(index, sheetComponent.getSheet());
            sheetComponent.onAttached();
        });
        // when there is no sheet, add default sheet to spread
        if (sheets.length === 0) {
            this.spread.addSheet(0, new GC.Spread.Sheets.Worksheet(""));
        }
        this.bindCustomEvent(this.spread);
        this.workbookInitialized.emit({ spread: this.spread });
    };
    SpreadSheetsComponent.prototype.bindCustomEvent = function (spread) {
        var _this = this;
        var customEventNameSpace = '.ng';
        var events = ['ValidationError', 'CellClick', 'CellDoubleClick', 'EnterCell',
            'LeaveCell', 'ValueChanged', 'TopRowChanged', 'LeftColumnChanged',
            'InvalidOperation', 'RangeFiltering', 'RangeFiltered', 'TableFiltering',
            'TableFiltered', 'RangeSorting', 'RangeSorted', 'ClipboardChanging',
            'ClipboardChanged', 'ClipboardPasting', 'ClipboardPasted', 'ColumnWidthChanging',
            'ColumnWidthChanged', 'RowHeightChanging', 'RowHeightChanged', 'DragDropBlock',
            'DragDropBlockCompleted', 'DragFillBlock', 'DragFillBlockCompleted', 'EditStarting',
            'EditChange', 'EditEnding', 'EditEnd', 'EditEnded', 'RangeGroupStateChanging',
            'RangeGroupStateChanged', 'SelectionChanging', 'SelectionChanged', 'SheetTabClick',
            'SheetTabDoubleClick', 'SheetNameChanging', 'SheetNameChanged',
            'UserZooming', 'UserFormulaEntered', 'CellChanged', 'ColumnChanged',
            'RowChanged', 'ActiveSheetChanging', 'ActiveSheetChanged',
            'SparklineChanged',
            'RangeChanged', 'ButtonClicked', 'EditorStatusChanged',
            'FloatingObjectChanged', 'FloatingObjectSelectionChanged', 'PictureChanged', 'FloatingObjectRemoving', 'FloatingObjectRemoved', 'PictureSelectionChanged',
            'FloatingObjectLoaded', 'TouchToolStripOpening', 'CommentChanged', 'CommentRemoving', 'CommentRemoved', 'SlicerChanged'];
        events.forEach(function (event) {
            spread.bind(event + customEventNameSpace, function (event, data) {
                var eventType = event.type;
                var camelCaseEvent = eventType[0].toLowerCase() + eventType.substr(1);
                _this[camelCaseEvent].emit(data);
            });
        });
    };
    SpreadSheetsComponent.prototype.setSpreadOptions = function () {
        var spread = this.spread;
        if (!this.spread) {
            return;
        }
        spread.suspendEvent();
        spread.suspendPaint();
        var options = this.spreadOptions;
        options && options.forEach(function (option) {
            if (option.name === 'name') {
                spread.name = option.value;
            }
            else {
                spread.options[option.name] = option.value;
            }
        });
        spread.resumePaint();
        spread.resumeEvent();
    };
    SpreadSheetsComponent.prototype.ngOnChanges = function (changes) {
        var options = [];
        for (var changeName in changes) {
            var newValue = changes[changeName].currentValue;
            if (newValue !== null && newValue !== void 0) {
                switch (changeName) {
                    case 'hostStyle':
                        this.style = newValue;
                        break;
                    case 'hostClass':
                        break;
                    default:
                        options.push({ name: changeName, value: newValue });
                }
            }
        }
        this.spreadOptions = options;
        this.setSpreadOptions();
    };
    SpreadSheetsComponent.prototype.ngOnDestroy = function () {
        this.spread.destroy();
    };
    return SpreadSheetsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserResize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserZoom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserEditFormula", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragFill", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "allowUserDragDrop", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "highlightInvalidData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "newTabVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabStripVisible", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "tabEditable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "autoFitType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "referenceStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "backColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "grayAreaBackColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showVerticalScrollbar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showHorizontalScrollbar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "hostStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "hostClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SpreadSheetsComponent.prototype, "backgroundImage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "backgroundImageLayout", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "showScrollTip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpreadSheetsComponent.prototype, "showResizeTip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragDropTip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SpreadSheetsComponent.prototype, "showDragFillTip", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "workbookInitialized", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "validationError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellDoubleClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "enterCell", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "leaveCell", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "valueChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "topRowChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "leftColumnChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "invalidOperation", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltering", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeFiltered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltering", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "tableFiltered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorting", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeSorted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasting", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "clipboardPasted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnWidthChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowHeightChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlock", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragDropBlockCompleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlock", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "dragFillBlockCompleted", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editStarting", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnding", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editEnded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeGroupStateChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "selectionChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetTabDoubleClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sheetNameChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "userZooming", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "userFormulaEntered", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "cellChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "columnChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rowChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanging", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "activeSheetChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "sparklineChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "rangeChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "buttonClicked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "editorStatusChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectSelectionChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoving", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectRemoved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "pictureSelectionChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "floatingObjectLoaded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "touchToolStripOpening", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoving", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "commentRemoved", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SpreadSheetsComponent.prototype, "slicerChanged", void 0);
__decorate([
    core_1.ContentChildren(WorksheetComponent),
    __metadata("design:type", core_1.QueryList)
], SpreadSheetsComponent.prototype, "sheets", void 0);
SpreadSheetsComponent = __decorate([
    core_1.Component({
        selector: 'gc-spread-sheets',
        template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"hostClass\">\n            <ng-content></ng-content>\n        </div>\n    "
    }),
    __param(0, core_1.Inject(core_1.ElementRef)),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SpreadSheetsComponent);
exports.SpreadSheetsComponent = SpreadSheetsComponent;
var SpreadSheetsModule = (function () {
    function SpreadSheetsModule() {
    }
    return SpreadSheetsModule;
}());
SpreadSheetsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent],
        exports: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent]
    })
], SpreadSheetsModule);
exports.SpreadSheetsModule = SpreadSheetsModule;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(36);
__webpack_require__(39);
__webpack_require__(37);
var core_1 = __webpack_require__(1);
var platform_server_1 = __webpack_require__(19);
var aspnet_prerendering_1 = __webpack_require__(38);
var app_module_server_1 = __webpack_require__(35);
core_1.enableProdMode();
exports.default = aspnet_prerendering_1.createServerRenderer(function (params) {
    var providers = [
        { provide: platform_server_1.INITIAL_CONFIG, useValue: { document: '<app></app>', url: params.url } },
        { provide: 'ORIGIN_URL', useValue: params.origin }
    ];
    return platform_server_1.platformDynamicServer(providers).bootstrapModule(app_module_server_1.AppModule).then(function (moduleRef) {
        var appRef = moduleRef.injector.get(core_1.ApplicationRef);
        var state = moduleRef.injector.get(platform_server_1.PlatformState);
        var zone = moduleRef.injector.get(core_1.NgZone);
        return new Promise(function (resolve, reject) {
            zone.onError.subscribe(function (errorInfo) { return reject(errorInfo); });
            appRef.isStable.first(function (isStable) { return isStable; }).subscribe(function () {
                // Because 'onStable' fires before 'onError', we have to delay slightly before
                // completing the request in case there's an error to report
                setImmediate(function () {
                    resolve({
                        html: state.renderToString()
                    });
                    moduleRef.destroy();
                });
            });
        });
    });
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, ".spread-div {\r\n    width: 100%;\r\n    height: 620px;\r\n    border: 1px solid gray;\r\n    margin-top: 5px;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iconvLite = __webpack_require__(78);
// Load Iconv from an external file to be able to disable Iconv for webpack
// Add /\/iconv-loader$/ to webpack.IgnorePlugin to ignore it
var Iconv = __webpack_require__(55);

// Expose to the world
module.exports.convert = convert;

/**
 * Convert encoding of an UTF-8 string or a buffer
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @param {Boolean} useLite If set to ture, force to use iconvLite
 * @return {Buffer} Encoded string
 */
function convert(str, to, from, useLite) {
    from = checkEncoding(from || 'UTF-8');
    to = checkEncoding(to || 'UTF-8');
    str = str || '';

    var result;

    if (from !== 'UTF-8' && typeof str === 'string') {
        str = new Buffer(str, 'binary');
    }

    if (from === to) {
        if (typeof str === 'string') {
            result = new Buffer(str);
        } else {
            result = str;
        }
    } else if (Iconv && !useLite) {
        try {
            result = convertIconv(str, to, from);
        } catch (E) {
            console.error(E);
            try {
                result = convertIconvLite(str, to, from);
            } catch (E) {
                console.error(E);
                result = str;
            }
        }
    } else {
        try {
            result = convertIconvLite(str, to, from);
        } catch (E) {
            console.error(E);
            result = str;
        }
    }


    if (typeof result === 'string') {
        result = new Buffer(result, 'utf-8');
    }

    return result;
}

/**
 * Convert encoding of a string with node-iconv (if available)
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @return {Buffer} Encoded string
 */
function convertIconv(str, to, from) {
    var response, iconv;
    iconv = new Iconv(from, to + '//TRANSLIT//IGNORE');
    response = iconv.convert(str);
    return response.slice(0, response.length);
}

/**
 * Convert encoding of astring with iconv-lite
 *
 * @param {String|Buffer} str String to be converted
 * @param {String} to Encoding to be converted to
 * @param {String} [from='UTF-8'] Encoding to be converted from
 * @return {Buffer} Encoded string
 */
function convertIconvLite(str, to, from) {
    if (to === 'UTF-8') {
        return iconvLite.decode(str, from);
    } else if (from === 'UTF-8') {
        return iconvLite.encode(str, to);
    } else {
        return iconvLite.encode(iconvLite.decode(str, from), to);
    }
}

/**
 * Converts charset name if needed
 *
 * @param {String} name Character set
 * @return {String} Character set name
 */
function checkEncoding(name) {
    return (name || '').toString().trim().
    replace(/^latin[\-_]?(\d+)$/i, 'ISO-8859-$1').
    replace(/^win(?:dows)?[\-_]?(\d+)$/i, 'WINDOWS-$1').
    replace(/^utf[\-_]?(\d+)$/i, 'UTF-$1').
    replace(/^ks_c_5601\-1987$/i, 'CP949').
    replace(/^us[\-_]?ascii$/i, 'ASCII').
    toUpperCase();
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var iconv_package;
var Iconv;

try {
    // this is to fool browserify so it doesn't try (in vain) to install iconv.
    iconv_package = 'iconv';
    Iconv = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Iconv;
} catch (E) {
    // node-iconv not present
}

module.exports = Iconv;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<div className='spread-page'>\r\n    <h1>Excel Input&Output Demo</h1>\r\n    <p>This example demonstrates how to use <strong>Spread.Services</strong> as server-side spreadsheet model, and use <strong>Spread.Sheets</strong> as the front-end side viewer and editor. </p>\r\n    <ul>\r\n        <li><strong>Spread.Services</strong> can import an excel file and export to ssjson format, then transport the ssjson to client-side.</li>\r\n        <li><strong>Spread.Sheets</strong> at client-side can receive and load the ssjson from server-side.</li>\r\n        <li>You can view the content of excel file through <strong>Spread.Sheets</strong>.</li>\r\n        <li>You can also make some changes to the content, and send the whole document as ssjson to <strong>Spread.Services</strong> at server-side.</li>\r\n        <li><strong>Spread.Services</strong> at server-side then load the ssjson and then save to excel file, you can download the modified excel file.</li>\r\n    </ul>\r\n    <br />\r\n    <div className='btn-group'>\r\n        <input className='btn btn-default btn-md' type='file' title='Import Excel' (change)=\"importExcel($event)\" value='Choose an excel file' />\r\n        <button className='btn btn-default btn-md' (click)=exportExcel($event)>Export Excel</button>\r\n    </div>\r\n    <gc-spread-sheets (workbookInitialized)=\"getSpread($event)\">\r\n        <gc-worksheet [rowCount]=\"100\" >\r\n        </gc-worksheet>\r\n    </gc-spread-sheets>\r\n</div>\r\n";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<div className='spread-page'>\r\n    <h1>Excel Template Demo</h1>\r\n    <p>This example demonstrates how to use <strong>Spread.Services</strong> as server spreadsheet model, and use <strong>Spread.Sheets</strong> as client side viewer or editor: </p>\r\n    <ul>\r\n        <li><strong>Spread.Services</strong> will first open an excel file existing on server.</li>\r\n        <li><strong>Spread.Services</strong> then inoke <strong>ToJson</strong> and transport the ssjson to client side.</li>\r\n        <li>In browser, <strong>Spread.Sheets</strong> will invoke <strong>fromJSON</strong> with the ssjson from server.</li>\r\n        <li>Then, you can see the content of the excel template in <strong>Spread.Sheets</strong>.</li>\r\n        <li>At same time, you can fill or edit data on the template through <strong>Spread.Sheets</strong>.</li>\r\n        <li>At last, you can download to view the changes in excel file.</li>\r\n    </ul>\r\n    <br />\r\n    <div className='btn-group'>\r\n        <button className='btn btn-default btn-md'  (click)=exportExcel($event)>Export Excel</button>\r\n    </div>\r\n    <gc-spread-sheets (workbookInitialized)=\"getSpread($event)\">\r\n        <gc-worksheet [rowCount]=\"100\">\r\n        </gc-worksheet>\r\n    </gc-spread-sheets>\r\n</div>";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>GrapeCity Spread.Services Asp.Net Core Demo!</h1>\r\n    <p>Welcome to Spread.Services Asp.net Core demo, you can learn how to progam with Spread.Services in Asp.Net Core at server side, and use React + Spread.Sheets at client side:</p>\r\n    <ul>\r\n        <li><a href='https://www.nuget.org/packages/Spread.Services/1.0.0-rc'>Spread.Services</a> is a new high performing, low memory server component with full API for server-side spreadsheet generation, manipulation, and serialization to various formats including xlsx and ssjson. Spread.Services targets .NET Standard 1.4 for multi-platform support including: .NET Framework, .NET Core, and Mono.</li>\r\n        <li><a href='http://spread.grapecity.com/Demos/JS/TutorialSample/'>Spread.Sheets</a> is the spreadsheet component of the SpreadJS product family. This enterprise-grade JavaScript spreadsheet displays and manages data much like Microsoft Excel. Popular features include a formula engine, sorting, filtering, input controls, sparklines, and native Excel input/output.</li>\r\n    </ul>\r\n    <p>You will explore some typical seneros about how to use Spread.Services together with Spread.Sheets:a</p>\r\n        <ul>\r\n            <li>In <a [routerLink]=\"['/excelTemplateDemo']\">Excel Template Demo</a>, you will learn how to open an excel template at server side with Spread.Services, then view or fill content for the template through Spread.Sheets at client side.</li>\r\n            <li>In <a [routerLink]=\"['/programmingDemo']\">Programming API Demo</a>, You will learn how to program with Spread.Services all yourself at server side, then view the result through Spread.Sheets at client side.</li>\r\n            <li>In <a [routerLink]=\"['/excelIODemo']\">Excel IO Demo</a>, you will learn how to upload an excel file from client and open the file using Spread.Services at server side, then view the result through Spread.Sheets at client side.</li>\r\n        </ul>\r\n    <p>You can find more resources about <strong>Spread.Services</strong> at:</p>\r\n    <ul>\r\n        <li><a href='http://spread.cloudapp.net/spreadservices'>Online Demo Site</a></li>\r\n        <li><a href='http://spread.grapecity.com'>Product Home Site</a></li>\r\n        <li><a href='https://nuget.org/packages/Spread.Services/'>Spread.Services Nuget Package Site</a></li>\r\n        <li><a href='http://spread.grapecity.com/spreadjs/sheets/'>Spread.Sheets Home Site</a></li>\r\n    </ul>\r\n</div>";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/home']\">Spread.Services</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/excelTemplateDemo']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Excel Template Demo\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/programmingDemo']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Programming API Demo\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/excelIODemo']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Excel IO Demo\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<div className='spread-page'>\r\n    <h1>Programming Demo</h1>\r\n    <p>This example demonstrates how to programme with <strong>Spread.Services</strong> to generate a complete spreadsheet model at server side, you can find how to use Spread.Services API in the SpreadServicesController.cs, we use <strong>Spread.Sheets</strong> as client side viewer. </p>\r\n    <ul>\r\n        <li>You can first program with <strong>Spread.Services</strong> at server side.</li>\r\n        <li><strong>Spread.Services</strong> then inoke <strong>ToJson</strong> and transport the ssjson to client side.</li>\r\n        <li>In browser, <strong>Spread.Sheets</strong> will invoke <strong>fromJSON</strong> with the ssjson from server.</li>\r\n        <li>Then, you can view the result in <strong>Spread.Sheets</strong> or download it as excel file.</li>\r\n    </ul>\r\n    <br />\r\n    <div className='btn-group'>\r\n        <select className='btn btn-default btn-md' type=\"string\" [(ngModel)]=\"selectedValue\" (ngModelChange)=\"onChange($event)\">\r\n            <option *ngFor=\"let option of options\" [ngValue]=\"option.value\">{{option.label}}</option>\r\n        </select>\r\n        <button className='btn btn-default btn-md' (click)=exportExcel($event)>Export Excel</button>\r\n    </div>\r\n    <gc-spread-sheets (workbookInitialized)=\"getSpread($event)\">\r\n        <gc-worksheet [rowCount]=\"100\">\r\n        </gc-worksheet>\r\n    </gc-spread-sheets>\r\n</div>";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(3).Buffer;

// Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
// Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
// To save memory and loading time, we read table files only when requested.

exports._dbcs = DBCSCodec;

var UNASSIGNED = -1,
    GB18030_CODE = -2,
    SEQ_START  = -10,
    NODE_START = -1000,
    UNASSIGNED_NODE = new Array(0x100),
    DEF_CHAR = -1;

for (var i = 0; i < 0x100; i++)
    UNASSIGNED_NODE[i] = UNASSIGNED;


// Class DBCSCodec reads and initializes mapping tables.
function DBCSCodec(codecOptions, iconv) {
    this.encodingName = codecOptions.encodingName;
    if (!codecOptions)
        throw new Error("DBCS codec is called without the data.")
    if (!codecOptions.table)
        throw new Error("Encoding '" + this.encodingName + "' has no data.");

    // Load tables.
    var mappingTable = codecOptions.table();


    // Decode tables: MBCS -> Unicode.

    // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
    // Trie root is decodeTables[0].
    // Values: >=  0 -> unicode character code. can be > 0xFFFF
    //         == UNASSIGNED -> unknown/unassigned sequence.
    //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
    //         <= NODE_START -> index of the next node in our trie to process next byte.
    //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
    this.decodeTables = [];
    this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.

    // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 
    this.decodeTableSeq = [];

    // Actual mapping tables consist of chunks. Use them to fill up decode tables.
    for (var i = 0; i < mappingTable.length; i++)
        this._addDecodeChunk(mappingTable[i]);

    this.defaultCharUnicode = iconv.defaultCharUnicode;

    
    // Encode tables: Unicode -> DBCS.

    // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
    // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
    // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
    //         == UNASSIGNED -> no conversion found. Output a default char.
    //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
    this.encodeTable = [];
    
    // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
    // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
    // means end of sequence (needed when one sequence is a strict subsequence of another).
    // Objects are kept separately from encodeTable to increase performance.
    this.encodeTableSeq = [];

    // Some chars can be decoded, but need not be encoded.
    var skipEncodeChars = {};
    if (codecOptions.encodeSkipVals)
        for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
            var val = codecOptions.encodeSkipVals[i];
            if (typeof val === 'number')
                skipEncodeChars[val] = true;
            else
                for (var j = val.from; j <= val.to; j++)
                    skipEncodeChars[j] = true;
        }
        
    // Use decode trie to recursively fill out encode tables.
    this._fillEncodeTable(0, 0, skipEncodeChars);

    // Add more encoding pairs when needed.
    if (codecOptions.encodeAdd) {
        for (var uChar in codecOptions.encodeAdd)
            if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar))
                this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
    }

    this.defCharSB  = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]['?'];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);


    // Load & create GB18030 tables when needed.
    if (typeof codecOptions.gb18030 === 'function') {
        this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.

        // Add GB18030 decode tables.
        var thirdByteNodeIdx = this.decodeTables.length;
        var thirdByteNode = this.decodeTables[thirdByteNodeIdx] = UNASSIGNED_NODE.slice(0);

        var fourthByteNodeIdx = this.decodeTables.length;
        var fourthByteNode = this.decodeTables[fourthByteNodeIdx] = UNASSIGNED_NODE.slice(0);

        for (var i = 0x81; i <= 0xFE; i++) {
            var secondByteNodeIdx = NODE_START - this.decodeTables[0][i];
            var secondByteNode = this.decodeTables[secondByteNodeIdx];
            for (var j = 0x30; j <= 0x39; j++)
                secondByteNode[j] = NODE_START - thirdByteNodeIdx;
        }
        for (var i = 0x81; i <= 0xFE; i++)
            thirdByteNode[i] = NODE_START - fourthByteNodeIdx;
        for (var i = 0x30; i <= 0x39; i++)
            fourthByteNode[i] = GB18030_CODE
    }        
}

DBCSCodec.prototype.encoder = DBCSEncoder;
DBCSCodec.prototype.decoder = DBCSDecoder;

// Decoder helpers
DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
    var bytes = [];
    for (; addr > 0; addr >>= 8)
        bytes.push(addr & 0xFF);
    if (bytes.length == 0)
        bytes.push(0);

    var node = this.decodeTables[0];
    for (var i = bytes.length-1; i > 0; i--) { // Traverse nodes deeper into the trie.
        var val = node[bytes[i]];

        if (val == UNASSIGNED) { // Create new node.
            node[bytes[i]] = NODE_START - this.decodeTables.length;
            this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
        }
        else if (val <= NODE_START) { // Existing node.
            node = this.decodeTables[NODE_START - val];
        }
        else
            throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
    }
    return node;
}


DBCSCodec.prototype._addDecodeChunk = function(chunk) {
    // First element of chunk is the hex mbcs code where we start.
    var curAddr = parseInt(chunk[0], 16);

    // Choose the decoding node where we'll write our chars.
    var writeTable = this._getDecodeTrieNode(curAddr);
    curAddr = curAddr & 0xFF;

    // Write all other elements of the chunk to the table.
    for (var k = 1; k < chunk.length; k++) {
        var part = chunk[k];
        if (typeof part === "string") { // String, write as-is.
            for (var l = 0; l < part.length;) {
                var code = part.charCodeAt(l++);
                if (0xD800 <= code && code < 0xDC00) { // Decode surrogate
                    var codeTrail = part.charCodeAt(l++);
                    if (0xDC00 <= codeTrail && codeTrail < 0xE000)
                        writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);
                    else
                        throw new Error("Incorrect surrogate pair in "  + this.encodingName + " at chunk " + chunk[0]);
                }
                else if (0x0FF0 < code && code <= 0x0FFF) { // Character sequence (our own encoding used)
                    var len = 0xFFF - code + 2;
                    var seq = [];
                    for (var m = 0; m < len; m++)
                        seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.

                    writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
                    this.decodeTableSeq.push(seq);
                }
                else
                    writeTable[curAddr++] = code; // Basic char
            }
        } 
        else if (typeof part === "number") { // Integer, meaning increasing sequence starting with prev character.
            var charCode = writeTable[curAddr - 1] + 1;
            for (var l = 0; l < part; l++)
                writeTable[curAddr++] = charCode++;
        }
        else
            throw new Error("Incorrect type '" + typeof part + "' given in "  + this.encodingName + " at chunk " + chunk[0]);
    }
    if (curAddr > 0xFF)
        throw new Error("Incorrect chunk in "  + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
}

// Encoder helpers
DBCSCodec.prototype._getEncodeBucket = function(uCode) {
    var high = uCode >> 8; // This could be > 0xFF because of astral characters.
    if (this.encodeTable[high] === undefined)
        this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.
    return this.encodeTable[high];
}

DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 0xFF;
    if (bucket[low] <= SEQ_START)
        this.encodeTableSeq[SEQ_START-bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
    else if (bucket[low] == UNASSIGNED)
        bucket[low] = dbcsCode;
}

DBCSCodec.prototype._setEncodeSequence = function(seq, dbcsCode) {
    
    // Get the root of character tree according to first character of the sequence.
    var uCode = seq[0];
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 0xFF;

    var node;
    if (bucket[low] <= SEQ_START) {
        // There's already a sequence with  - use it.
        node = this.encodeTableSeq[SEQ_START-bucket[low]];
    }
    else {
        // There was no sequence object - allocate a new one.
        node = {};
        if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.
        bucket[low] = SEQ_START - this.encodeTableSeq.length;
        this.encodeTableSeq.push(node);
    }

    // Traverse the character tree, allocating new nodes as needed.
    for (var j = 1; j < seq.length-1; j++) {
        var oldVal = node[uCode];
        if (typeof oldVal === 'object')
            node = oldVal;
        else {
            node = node[uCode] = {}
            if (oldVal !== undefined)
                node[DEF_CHAR] = oldVal
        }
    }

    // Set the leaf to given dbcsCode.
    uCode = seq[seq.length-1];
    node[uCode] = dbcsCode;
}

DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
    var node = this.decodeTables[nodeIdx];
    for (var i = 0; i < 0x100; i++) {
        var uCode = node[i];
        var mbCode = prefix + i;
        if (skipEncodeChars[mbCode])
            continue;

        if (uCode >= 0)
            this._setEncodeChar(uCode, mbCode);
        else if (uCode <= NODE_START)
            this._fillEncodeTable(NODE_START - uCode, mbCode << 8, skipEncodeChars);
        else if (uCode <= SEQ_START)
            this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
    }
}



// == Encoder ==================================================================

function DBCSEncoder(options, codec) {
    // Encoder state
    this.leadSurrogate = -1;
    this.seqObj = undefined;
    
    // Static data
    this.encodeTable = codec.encodeTable;
    this.encodeTableSeq = codec.encodeTableSeq;
    this.defaultCharSingleByte = codec.defCharSB;
    this.gb18030 = codec.gb18030;
}

DBCSEncoder.prototype.write = function(str) {
    var newBuf = new Buffer(str.length * (this.gb18030 ? 4 : 3)), 
        leadSurrogate = this.leadSurrogate,
        seqObj = this.seqObj, nextChar = -1,
        i = 0, j = 0;

    while (true) {
        // 0. Get next character.
        if (nextChar === -1) {
            if (i == str.length) break;
            var uCode = str.charCodeAt(i++);
        }
        else {
            var uCode = nextChar;
            nextChar = -1;    
        }

        // 1. Handle surrogates.
        if (0xD800 <= uCode && uCode < 0xE000) { // Char is one of surrogates.
            if (uCode < 0xDC00) { // We've got lead surrogate.
                if (leadSurrogate === -1) {
                    leadSurrogate = uCode;
                    continue;
                } else {
                    leadSurrogate = uCode;
                    // Double lead surrogate found.
                    uCode = UNASSIGNED;
                }
            } else { // We've got trail surrogate.
                if (leadSurrogate !== -1) {
                    uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
                    leadSurrogate = -1;
                } else {
                    // Incomplete surrogate pair - only trail surrogate found.
                    uCode = UNASSIGNED;
                }
                
            }
        }
        else if (leadSurrogate !== -1) {
            // Incomplete surrogate pair - only lead surrogate found.
            nextChar = uCode; uCode = UNASSIGNED; // Write an error, then current char.
            leadSurrogate = -1;
        }

        // 2. Convert uCode character.
        var dbcsCode = UNASSIGNED;
        if (seqObj !== undefined && uCode != UNASSIGNED) { // We are in the middle of the sequence
            var resCode = seqObj[uCode];
            if (typeof resCode === 'object') { // Sequence continues.
                seqObj = resCode;
                continue;

            } else if (typeof resCode == 'number') { // Sequence finished. Write it.
                dbcsCode = resCode;

            } else if (resCode == undefined) { // Current character is not part of the sequence.

                // Try default character for this sequence
                resCode = seqObj[DEF_CHAR];
                if (resCode !== undefined) {
                    dbcsCode = resCode; // Found. Write it.
                    nextChar = uCode; // Current character will be written too in the next iteration.

                } else {
                    // TODO: What if we have no default? (resCode == undefined)
                    // Then, we should write first char of the sequence as-is and try the rest recursively.
                    // Didn't do it for now because no encoding has this situation yet.
                    // Currently, just skip the sequence and write current char.
                }
            }
            seqObj = undefined;
        }
        else if (uCode >= 0) {  // Regular character
            var subtable = this.encodeTable[uCode >> 8];
            if (subtable !== undefined)
                dbcsCode = subtable[uCode & 0xFF];
            
            if (dbcsCode <= SEQ_START) { // Sequence start
                seqObj = this.encodeTableSeq[SEQ_START-dbcsCode];
                continue;
            }

            if (dbcsCode == UNASSIGNED && this.gb18030) {
                // Use GB18030 algorithm to find character(s) to write.
                var idx = findIdx(this.gb18030.uChars, uCode);
                if (idx != -1) {
                    var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600); dbcsCode = dbcsCode % 12600;
                    newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260); dbcsCode = dbcsCode % 1260;
                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10); dbcsCode = dbcsCode % 10;
                    newBuf[j++] = 0x30 + dbcsCode;
                    continue;
                }
            }
        }

        // 3. Write dbcsCode character.
        if (dbcsCode === UNASSIGNED)
            dbcsCode = this.defaultCharSingleByte;
        
        if (dbcsCode < 0x100) {
            newBuf[j++] = dbcsCode;
        }
        else if (dbcsCode < 0x10000) {
            newBuf[j++] = dbcsCode >> 8;   // high byte
            newBuf[j++] = dbcsCode & 0xFF; // low byte
        }
        else {
            newBuf[j++] = dbcsCode >> 16;
            newBuf[j++] = (dbcsCode >> 8) & 0xFF;
            newBuf[j++] = dbcsCode & 0xFF;
        }
    }

    this.seqObj = seqObj;
    this.leadSurrogate = leadSurrogate;
    return newBuf.slice(0, j);
}

DBCSEncoder.prototype.end = function() {
    if (this.leadSurrogate === -1 && this.seqObj === undefined)
        return; // All clean. Most often case.

    var newBuf = new Buffer(10), j = 0;

    if (this.seqObj) { // We're in the sequence.
        var dbcsCode = this.seqObj[DEF_CHAR];
        if (dbcsCode !== undefined) { // Write beginning of the sequence.
            if (dbcsCode < 0x100) {
                newBuf[j++] = dbcsCode;
            }
            else {
                newBuf[j++] = dbcsCode >> 8;   // high byte
                newBuf[j++] = dbcsCode & 0xFF; // low byte
            }
        } else {
            // See todo above.
        }
        this.seqObj = undefined;
    }

    if (this.leadSurrogate !== -1) {
        // Incomplete surrogate pair - only lead surrogate found.
        newBuf[j++] = this.defaultCharSingleByte;
        this.leadSurrogate = -1;
    }
    
    return newBuf.slice(0, j);
}

// Export for testing
DBCSEncoder.prototype.findIdx = findIdx;


// == Decoder ==================================================================

function DBCSDecoder(options, codec) {
    // Decoder state
    this.nodeIdx = 0;
    this.prevBuf = new Buffer(0);

    // Static data
    this.decodeTables = codec.decodeTables;
    this.decodeTableSeq = codec.decodeTableSeq;
    this.defaultCharUnicode = codec.defaultCharUnicode;
    this.gb18030 = codec.gb18030;
}

DBCSDecoder.prototype.write = function(buf) {
    var newBuf = new Buffer(buf.length*2),
        nodeIdx = this.nodeIdx, 
        prevBuf = this.prevBuf, prevBufOffset = this.prevBuf.length,
        seqStart = -this.prevBuf.length, // idx of the start of current parsed sequence.
        uCode;

    if (prevBufOffset > 0) // Make prev buf overlap a little to make it easier to slice later.
        prevBuf = Buffer.concat([prevBuf, buf.slice(0, 10)]);
    
    for (var i = 0, j = 0; i < buf.length; i++) {
        var curByte = (i >= 0) ? buf[i] : prevBuf[i + prevBufOffset];

        // Lookup in current trie node.
        var uCode = this.decodeTables[nodeIdx][curByte];

        if (uCode >= 0) { 
            // Normal character, just use it.
        }
        else if (uCode === UNASSIGNED) { // Unknown char.
            // TODO: Callback with seq.
            //var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
            i = seqStart; // Try to parse again, after skipping first byte of the sequence ('i' will be incremented by 'for' cycle).
            uCode = this.defaultCharUnicode.charCodeAt(0);
        }
        else if (uCode === GB18030_CODE) {
            var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
            var ptr = (curSeq[0]-0x81)*12600 + (curSeq[1]-0x30)*1260 + (curSeq[2]-0x81)*10 + (curSeq[3]-0x30);
            var idx = findIdx(this.gb18030.gbChars, ptr);
            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
        }
        else if (uCode <= NODE_START) { // Go to next trie node.
            nodeIdx = NODE_START - uCode;
            continue;
        }
        else if (uCode <= SEQ_START) { // Output a sequence of chars.
            var seq = this.decodeTableSeq[SEQ_START - uCode];
            for (var k = 0; k < seq.length - 1; k++) {
                uCode = seq[k];
                newBuf[j++] = uCode & 0xFF;
                newBuf[j++] = uCode >> 8;
            }
            uCode = seq[seq.length-1];
        }
        else
            throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);

        // Write the character to buffer, handling higher planes using surrogate pair.
        if (uCode > 0xFFFF) { 
            uCode -= 0x10000;
            var uCodeLead = 0xD800 + Math.floor(uCode / 0x400);
            newBuf[j++] = uCodeLead & 0xFF;
            newBuf[j++] = uCodeLead >> 8;

            uCode = 0xDC00 + uCode % 0x400;
        }
        newBuf[j++] = uCode & 0xFF;
        newBuf[j++] = uCode >> 8;

        // Reset trie node.
        nodeIdx = 0; seqStart = i+1;
    }

    this.nodeIdx = nodeIdx;
    this.prevBuf = (seqStart >= 0) ? buf.slice(seqStart) : prevBuf.slice(seqStart + prevBufOffset);
    return newBuf.slice(0, j).toString('ucs2');
}

DBCSDecoder.prototype.end = function() {
    var ret = '';

    // Try to parse all remaining chars.
    while (this.prevBuf.length > 0) {
        // Skip 1 character in the buffer.
        ret += this.defaultCharUnicode;
        var buf = this.prevBuf.slice(1);

        // Parse remaining as usual.
        this.prevBuf = new Buffer(0);
        this.nodeIdx = 0;
        if (buf.length > 0)
            ret += this.write(buf);
    }

    this.nodeIdx = 0;
    return ret;
}

// Binary search for GB18030. Returns largest i such that table[i] <= val.
function findIdx(table, val) {
    if (table[0] > val)
        return -1;

    var l = 0, r = table.length;
    while (l < r-1) { // always table[l] <= val < table[r]
        var mid = l + Math.floor((r-l+1)/2);
        if (table[mid] <= val)
            l = mid;
        else
            r = mid;
    }
    return l;
}



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Description of supported double byte encodings and aliases.
// Tables are not require()-d until they are needed to speed up library load.
// require()-s are direct to support Browserify.

module.exports = {
    
    // == Japanese/ShiftJIS ====================================================
    // All japanese encodings are based on JIS X set of standards:
    // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
    // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
    //              Has several variations in 1978, 1983, 1990 and 1997.
    // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
    // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
    //              2 planes, first is superset of 0208, second - revised 0212.
    //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)

    // Byte encodings are:
    //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
    //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
    //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
    //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
    //               0x00-0x7F       - lower part of 0201
    //               0x8E, 0xA1-0xDF - upper part of 0201
    //               (0xA1-0xFE)x2   - 0208 plane (94x94).
    //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
    //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
    //               Used as-is in ISO2022 family.
    //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
    //                0201-1976 Roman, 0208-1978, 0208-1983.
    //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
    //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
    //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
    //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
    //
    // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
    //
    // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html

    'shiftjis': {
        type: '_dbcs',
        table: function() { return __webpack_require__(73) },
        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
        encodeSkipVals: [{from: 0xED40, to: 0xF940}],
    },
    'csshiftjis': 'shiftjis',
    'mskanji': 'shiftjis',
    'sjis': 'shiftjis',
    'windows31j': 'shiftjis',
    'ms31j': 'shiftjis',
    'xsjis': 'shiftjis',
    'windows932': 'shiftjis',
    'ms932': 'shiftjis',
    '932': 'shiftjis',
    'cp932': 'shiftjis',

    'eucjp': {
        type: '_dbcs',
        table: function() { return __webpack_require__(71) },
        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
    },

    // TODO: KDDI extension to Shift_JIS
    // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
    // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.


    // == Chinese/GBK ==========================================================
    // http://en.wikipedia.org/wiki/GBK
    // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder

    // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
    'gb2312': 'cp936',
    'gb231280': 'cp936',
    'gb23121980': 'cp936',
    'csgb2312': 'cp936',
    'csiso58gb231280': 'cp936',
    'euccn': 'cp936',

    // Microsoft's CP936 is a subset and approximation of GBK.
    'windows936': 'cp936',
    'ms936': 'cp936',
    '936': 'cp936',
    'cp936': {
        type: '_dbcs',
        table: function() { return __webpack_require__(10) },
    },

    // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
    'gbk': {
        type: '_dbcs',
        table: function() { return __webpack_require__(10).concat(__webpack_require__(22)) },
    },
    'xgbk': 'gbk',
    'isoir58': 'gbk',

    // GB18030 is an algorithmic extension of GBK.
    // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
    // http://icu-project.org/docs/papers/gb18030.html
    // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
    // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
    'gb18030': {
        type: '_dbcs',
        table: function() { return __webpack_require__(10).concat(__webpack_require__(22)) },
        gb18030: function() { return __webpack_require__(72) },
        encodeSkipVals: [0x80],
        encodeAdd: {'€': 0xA2E3},
    },

    'chinese': 'gb18030',


    // == Korean ===============================================================
    // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
    'windows949': 'cp949',
    'ms949': 'cp949',
    '949': 'cp949',
    'cp949': {
        type: '_dbcs',
        table: function() { return __webpack_require__(70) },
    },

    'cseuckr': 'cp949',
    'csksc56011987': 'cp949',
    'euckr': 'cp949',
    'isoir149': 'cp949',
    'korean': 'cp949',
    'ksc56011987': 'cp949',
    'ksc56011989': 'cp949',
    'ksc5601': 'cp949',


    // == Big5/Taiwan/Hong Kong ================================================
    // There are lots of tables for Big5 and cp950. Please see the following links for history:
    // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
    // Variations, in roughly number of defined chars:
    //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
    //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
    //  * Big5-2003 (Taiwan standard) almost superset of cp950.
    //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
    //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
    //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
    //    Plus, it has 4 combining sequences.
    //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
    //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
    //    Implementations are not consistent within browsers; sometimes labeled as just big5.
    //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
    //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
    //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
    //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
    //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
    // 
    // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
    // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.

    'windows950': 'cp950',
    'ms950': 'cp950',
    '950': 'cp950',
    'cp950': {
        type: '_dbcs',
        table: function() { return __webpack_require__(21) },
    },

    // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
    'big5': 'big5hkscs',
    'big5hkscs': {
        type: '_dbcs',
        table: function() { return __webpack_require__(21).concat(__webpack_require__(69)) },
        encodeSkipVals: [0xa2cc],
    },

    'cnbig5': 'big5hkscs',
    'csbig5': 'big5hkscs',
    'xxbig5': 'big5hkscs',
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.
var modules = [
    __webpack_require__(65),
    __webpack_require__(74),
    __webpack_require__(75),
    __webpack_require__(66),
    __webpack_require__(68),
    __webpack_require__(67),
    __webpack_require__(62),
    __webpack_require__(63),
];

// Put all encoding/alias/codec definitions to single object and export it. 
for (var i = 0; i < modules.length; i++) {
    var module = modules[i];
    for (var enc in module)
        if (Object.prototype.hasOwnProperty.call(module, enc))
            exports[enc] = module[enc];
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(3).Buffer;

// Export Node.js internal encodings.

module.exports = {
    // Encodings
    utf8:   { type: "_internal", bomAware: true},
    cesu8:  { type: "_internal", bomAware: true},
    unicode11utf8: "utf8",

    ucs2:   { type: "_internal", bomAware: true},
    utf16le: "ucs2",

    binary: { type: "_internal" },
    iso88591: "binary",

    base64: { type: "_internal" },
    hex:    { type: "_internal" },

    // Codec.
    _internal: InternalCodec,
};

//------------------------------------------------------------------------------

function InternalCodec(codecOptions, iconv) {
    this.enc = codecOptions.encodingName;
    this.bomAware = codecOptions.bomAware;

    if (this.enc === "base64")
        this.encoder = InternalEncoderBase64;
    else if (this.enc === "cesu8") {
        this.enc = "utf8"; // Use utf8 for decoding.
        this.encoder = InternalEncoderCesu8;

        // Add decoder for versions of Node not supporting CESU-8
        if (new Buffer('eda0bdedb2a9', 'hex').toString() !== '💩') {
            this.decoder = InternalDecoderCesu8;
            this.defaultCharUnicode = iconv.defaultCharUnicode;
        }
    }
}

InternalCodec.prototype.encoder = InternalEncoder;
InternalCodec.prototype.decoder = InternalDecoder;

//------------------------------------------------------------------------------

// We use node.js internal decoder. Its signature is the same as ours.
var StringDecoder = __webpack_require__(108).StringDecoder;

if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
    StringDecoder.prototype.end = function() {};


function InternalDecoder(options, codec) {
    StringDecoder.call(this, codec.enc);
}

InternalDecoder.prototype = StringDecoder.prototype;


//------------------------------------------------------------------------------
// Encoder is mostly trivial

function InternalEncoder(options, codec) {
    this.enc = codec.enc;
}

InternalEncoder.prototype.write = function(str) {
    return new Buffer(str, this.enc);
}

InternalEncoder.prototype.end = function() {
}


//------------------------------------------------------------------------------
// Except base64 encoder, which must keep its state.

function InternalEncoderBase64(options, codec) {
    this.prevStr = '';
}

InternalEncoderBase64.prototype.write = function(str) {
    str = this.prevStr + str;
    var completeQuads = str.length - (str.length % 4);
    this.prevStr = str.slice(completeQuads);
    str = str.slice(0, completeQuads);

    return new Buffer(str, "base64");
}

InternalEncoderBase64.prototype.end = function() {
    return new Buffer(this.prevStr, "base64");
}


//------------------------------------------------------------------------------
// CESU-8 encoder is also special.

function InternalEncoderCesu8(options, codec) {
}

InternalEncoderCesu8.prototype.write = function(str) {
    var buf = new Buffer(str.length * 3), bufIdx = 0;
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        // Naive implementation, but it works because CESU-8 is especially easy
        // to convert from UTF-16 (which all JS strings are encoded in).
        if (charCode < 0x80)
            buf[bufIdx++] = charCode;
        else if (charCode < 0x800) {
            buf[bufIdx++] = 0xC0 + (charCode >>> 6);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
        }
        else { // charCode will always be < 0x10000 in javascript.
            buf[bufIdx++] = 0xE0 + (charCode >>> 12);
            buf[bufIdx++] = 0x80 + ((charCode >>> 6) & 0x3f);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
        }
    }
    return buf.slice(0, bufIdx);
}

InternalEncoderCesu8.prototype.end = function() {
}

//------------------------------------------------------------------------------
// CESU-8 decoder is not implemented in Node v4.0+

function InternalDecoderCesu8(options, codec) {
    this.acc = 0;
    this.contBytes = 0;
    this.accBytes = 0;
    this.defaultCharUnicode = codec.defaultCharUnicode;
}

InternalDecoderCesu8.prototype.write = function(buf) {
    var acc = this.acc, contBytes = this.contBytes, accBytes = this.accBytes, 
        res = '';
    for (var i = 0; i < buf.length; i++) {
        var curByte = buf[i];
        if ((curByte & 0xC0) !== 0x80) { // Leading byte
            if (contBytes > 0) { // Previous code is invalid
                res += this.defaultCharUnicode;
                contBytes = 0;
            }

            if (curByte < 0x80) { // Single-byte code
                res += String.fromCharCode(curByte);
            } else if (curByte < 0xE0) { // Two-byte code
                acc = curByte & 0x1F;
                contBytes = 1; accBytes = 1;
            } else if (curByte < 0xF0) { // Three-byte code
                acc = curByte & 0x0F;
                contBytes = 2; accBytes = 1;
            } else { // Four or more are not supported for CESU-8.
                res += this.defaultCharUnicode;
            }
        } else { // Continuation byte
            if (contBytes > 0) { // We're waiting for it.
                acc = (acc << 6) | (curByte & 0x3f);
                contBytes--; accBytes++;
                if (contBytes === 0) {
                    // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
                    if (accBytes === 2 && acc < 0x80 && acc > 0)
                        res += this.defaultCharUnicode;
                    else if (accBytes === 3 && acc < 0x800)
                        res += this.defaultCharUnicode;
                    else
                        // Actually add character.
                        res += String.fromCharCode(acc);
                }
            } else { // Unexpected continuation byte
                res += this.defaultCharUnicode;
            }
        }
    }
    this.acc = acc; this.contBytes = contBytes; this.accBytes = accBytes;
    return res;
}

InternalDecoderCesu8.prototype.end = function() {
    var res = 0;
    if (this.contBytes > 0)
        res += this.defaultCharUnicode;
    return res;
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(3).Buffer;

// Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
// correspond to encoded bytes (if 128 - then lower half is ASCII). 

exports._sbcs = SBCSCodec;
function SBCSCodec(codecOptions, iconv) {
    if (!codecOptions)
        throw new Error("SBCS codec is called without the data.")
    
    // Prepare char buffer for decoding.
    if (!codecOptions.chars || (codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256))
        throw new Error("Encoding '"+codecOptions.type+"' has incorrect 'chars' (must be of len 128 or 256)");
    
    if (codecOptions.chars.length === 128) {
        var asciiString = "";
        for (var i = 0; i < 128; i++)
            asciiString += String.fromCharCode(i);
        codecOptions.chars = asciiString + codecOptions.chars;
    }

    this.decodeBuf = new Buffer(codecOptions.chars, 'ucs2');
    
    // Encoding buffer.
    var encodeBuf = new Buffer(65536);
    encodeBuf.fill(iconv.defaultCharSingleByte.charCodeAt(0));

    for (var i = 0; i < codecOptions.chars.length; i++)
        encodeBuf[codecOptions.chars.charCodeAt(i)] = i;

    this.encodeBuf = encodeBuf;
}

SBCSCodec.prototype.encoder = SBCSEncoder;
SBCSCodec.prototype.decoder = SBCSDecoder;


function SBCSEncoder(options, codec) {
    this.encodeBuf = codec.encodeBuf;
}

SBCSEncoder.prototype.write = function(str) {
    var buf = new Buffer(str.length);
    for (var i = 0; i < str.length; i++)
        buf[i] = this.encodeBuf[str.charCodeAt(i)];
    
    return buf;
}

SBCSEncoder.prototype.end = function() {
}


function SBCSDecoder(options, codec) {
    this.decodeBuf = codec.decodeBuf;
}

SBCSDecoder.prototype.write = function(buf) {
    // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
    var decodeBuf = this.decodeBuf;
    var newBuf = new Buffer(buf.length*2);
    var idx1 = 0, idx2 = 0;
    for (var i = 0; i < buf.length; i++) {
        idx1 = buf[i]*2; idx2 = i*2;
        newBuf[idx2] = decodeBuf[idx1];
        newBuf[idx2+1] = decodeBuf[idx1+1];
    }
    return newBuf.toString('ucs2');
}

SBCSDecoder.prototype.end = function() {
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.
module.exports = {
  "437": "cp437",
  "737": "cp737",
  "775": "cp775",
  "850": "cp850",
  "852": "cp852",
  "855": "cp855",
  "856": "cp856",
  "857": "cp857",
  "858": "cp858",
  "860": "cp860",
  "861": "cp861",
  "862": "cp862",
  "863": "cp863",
  "864": "cp864",
  "865": "cp865",
  "866": "cp866",
  "869": "cp869",
  "874": "windows874",
  "922": "cp922",
  "1046": "cp1046",
  "1124": "cp1124",
  "1125": "cp1125",
  "1129": "cp1129",
  "1133": "cp1133",
  "1161": "cp1161",
  "1162": "cp1162",
  "1163": "cp1163",
  "1250": "windows1250",
  "1251": "windows1251",
  "1252": "windows1252",
  "1253": "windows1253",
  "1254": "windows1254",
  "1255": "windows1255",
  "1256": "windows1256",
  "1257": "windows1257",
  "1258": "windows1258",
  "28592": "iso88592",
  "28593": "iso88593",
  "28594": "iso88594",
  "28595": "iso88595",
  "28596": "iso88596",
  "28597": "iso88597",
  "28598": "iso88598",
  "28599": "iso88599",
  "28600": "iso885910",
  "28601": "iso885911",
  "28603": "iso885913",
  "28604": "iso885914",
  "28605": "iso885915",
  "28606": "iso885916",
  "windows874": {
    "type": "_sbcs",
    "chars": "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  },
  "win874": "windows874",
  "cp874": "windows874",
  "windows1250": {
    "type": "_sbcs",
    "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
  },
  "win1250": "windows1250",
  "cp1250": "windows1250",
  "windows1251": {
    "type": "_sbcs",
    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
  },
  "win1251": "windows1251",
  "cp1251": "windows1251",
  "windows1252": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "win1252": "windows1252",
  "cp1252": "windows1252",
  "windows1253": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
  },
  "win1253": "windows1253",
  "cp1253": "windows1253",
  "windows1254": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
  },
  "win1254": "windows1254",
  "cp1254": "windows1254",
  "windows1255": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹ�ֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
  },
  "win1255": "windows1255",
  "cp1255": "windows1255",
  "windows1256": {
    "type": "_sbcs",
    "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
  },
  "win1256": "windows1256",
  "cp1256": "windows1256",
  "windows1257": {
    "type": "_sbcs",
    "chars": "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
  },
  "win1257": "windows1257",
  "cp1257": "windows1257",
  "windows1258": {
    "type": "_sbcs",
    "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
  },
  "win1258": "windows1258",
  "cp1258": "windows1258",
  "iso88592": {
    "type": "_sbcs",
    "chars": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
  },
  "cp28592": "iso88592",
  "iso88593": {
    "type": "_sbcs",
    "chars": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
  },
  "cp28593": "iso88593",
  "iso88594": {
    "type": "_sbcs",
    "chars": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
  },
  "cp28594": "iso88594",
  "iso88595": {
    "type": "_sbcs",
    "chars": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
  },
  "cp28595": "iso88595",
  "iso88596": {
    "type": "_sbcs",
    "chars": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
  },
  "cp28596": "iso88596",
  "iso88597": {
    "type": "_sbcs",
    "chars": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
  },
  "cp28597": "iso88597",
  "iso88598": {
    "type": "_sbcs",
    "chars": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
  },
  "cp28598": "iso88598",
  "iso88599": {
    "type": "_sbcs",
    "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
  },
  "cp28599": "iso88599",
  "iso885910": {
    "type": "_sbcs",
    "chars": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
  },
  "cp28600": "iso885910",
  "iso885911": {
    "type": "_sbcs",
    "chars": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  },
  "cp28601": "iso885911",
  "iso885913": {
    "type": "_sbcs",
    "chars": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
  },
  "cp28603": "iso885913",
  "iso885914": {
    "type": "_sbcs",
    "chars": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
  },
  "cp28604": "iso885914",
  "iso885915": {
    "type": "_sbcs",
    "chars": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "cp28605": "iso885915",
  "iso885916": {
    "type": "_sbcs",
    "chars": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
  },
  "cp28606": "iso885916",
  "cp437": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm437": "cp437",
  "csibm437": "cp437",
  "cp737": {
    "type": "_sbcs",
    "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
  },
  "ibm737": "cp737",
  "csibm737": "cp737",
  "cp775": {
    "type": "_sbcs",
    "chars": "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
  },
  "ibm775": "cp775",
  "csibm775": "cp775",
  "cp850": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
  },
  "ibm850": "cp850",
  "csibm850": "cp850",
  "cp852": {
    "type": "_sbcs",
    "chars": "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
  },
  "ibm852": "cp852",
  "csibm852": "cp852",
  "cp855": {
    "type": "_sbcs",
    "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
  },
  "ibm855": "cp855",
  "csibm855": "cp855",
  "cp856": {
    "type": "_sbcs",
    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
  },
  "ibm856": "cp856",
  "csibm856": "cp856",
  "cp857": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
  },
  "ibm857": "cp857",
  "csibm857": "cp857",
  "cp858": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
  },
  "ibm858": "cp858",
  "csibm858": "cp858",
  "cp860": {
    "type": "_sbcs",
    "chars": "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm860": "cp860",
  "csibm860": "cp860",
  "cp861": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm861": "cp861",
  "csibm861": "cp861",
  "cp862": {
    "type": "_sbcs",
    "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm862": "cp862",
  "csibm862": "cp862",
  "cp863": {
    "type": "_sbcs",
    "chars": "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm863": "cp863",
  "csibm863": "cp863",
  "cp864": {
    "type": "_sbcs",
    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
  },
  "ibm864": "cp864",
  "csibm864": "cp864",
  "cp865": {
    "type": "_sbcs",
    "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
  },
  "ibm865": "cp865",
  "csibm865": "cp865",
  "cp866": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
  },
  "ibm866": "cp866",
  "csibm866": "cp866",
  "cp869": {
    "type": "_sbcs",
    "chars": "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
  },
  "ibm869": "cp869",
  "csibm869": "cp869",
  "cp922": {
    "type": "_sbcs",
    "chars": " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
  },
  "ibm922": "cp922",
  "csibm922": "cp922",
  "cp1046": {
    "type": "_sbcs",
    "chars": "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
  },
  "ibm1046": "cp1046",
  "csibm1046": "cp1046",
  "cp1124": {
    "type": "_sbcs",
    "chars": " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
  },
  "ibm1124": "cp1124",
  "csibm1124": "cp1124",
  "cp1125": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
  },
  "ibm1125": "cp1125",
  "csibm1125": "cp1125",
  "cp1129": {
    "type": "_sbcs",
    "chars": " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
  },
  "ibm1129": "cp1129",
  "csibm1129": "cp1129",
  "cp1133": {
    "type": "_sbcs",
    "chars": " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
  },
  "ibm1133": "cp1133",
  "csibm1133": "cp1133",
  "cp1161": {
    "type": "_sbcs",
    "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
  },
  "ibm1161": "cp1161",
  "csibm1161": "cp1161",
  "cp1162": {
    "type": "_sbcs",
    "chars": "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  },
  "ibm1162": "cp1162",
  "csibm1162": "cp1162",
  "cp1163": {
    "type": "_sbcs",
    "chars": " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
  },
  "ibm1163": "cp1163",
  "csibm1163": "cp1163",
  "maccroatian": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
  },
  "maccyrillic": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
  },
  "macgreek": {
    "type": "_sbcs",
    "chars": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
  },
  "maciceland": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macroman": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macromania": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macthai": {
    "type": "_sbcs",
    "chars": "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
  },
  "macturkish": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "macukraine": {
    "type": "_sbcs",
    "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
  },
  "koi8r": {
    "type": "_sbcs",
    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "koi8u": {
    "type": "_sbcs",
    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "koi8ru": {
    "type": "_sbcs",
    "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "koi8t": {
    "type": "_sbcs",
    "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
  },
  "armscii8": {
    "type": "_sbcs",
    "chars": " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
  },
  "rk1048": {
    "type": "_sbcs",
    "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
  },
  "tcvn": {
    "type": "_sbcs",
    "chars": "\u0000ÚỤ\u0003ỪỬỮ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010ỨỰỲỶỸÝỴ\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
  },
  "georgianacademy": {
    "type": "_sbcs",
    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "georgianps": {
    "type": "_sbcs",
    "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
  },
  "pt154": {
    "type": "_sbcs",
    "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
  },
  "viscii": {
    "type": "_sbcs",
    "chars": "\u0000\u0001Ẳ\u0003\u0004ẴẪ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013Ỷ\u0015\u0016\u0017\u0018Ỹ\u001a\u001b\u001c\u001dỴ\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
  },
  "iso646cn": {
    "type": "_sbcs",
    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
  },
  "iso646jp": {
    "type": "_sbcs",
    "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
  },
  "hproman8": {
    "type": "_sbcs",
    "chars": " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
  },
  "macintosh": {
    "type": "_sbcs",
    "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
  },
  "ascii": {
    "type": "_sbcs",
    "chars": "��������������������������������������������������������������������������������������������������������������������������������"
  },
  "tis620": {
    "type": "_sbcs",
    "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Manually added data to be used by sbcs codec in addition to generated one.

module.exports = {
    // Not supported by iconv, not sure why.
    "10029": "maccenteuro",
    "maccenteuro": {
        "type": "_sbcs",
        "chars": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
    },

    "808": "cp808",
    "ibm808": "cp808",
    "cp808": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
    },

    // Aliases of generated encodings.
    "ascii8bit": "ascii",
    "usascii": "ascii",
    "ansix34": "ascii",
    "ansix341968": "ascii",
    "ansix341986": "ascii",
    "csascii": "ascii",
    "cp367": "ascii",
    "ibm367": "ascii",
    "isoir6": "ascii",
    "iso646us": "ascii",
    "iso646irv": "ascii",
    "us": "ascii",

    "latin1": "iso88591",
    "latin2": "iso88592",
    "latin3": "iso88593",
    "latin4": "iso88594",
    "latin5": "iso88599",
    "latin6": "iso885910",
    "latin7": "iso885913",
    "latin8": "iso885914",
    "latin9": "iso885915",
    "latin10": "iso885916",

    "csisolatin1": "iso88591",
    "csisolatin2": "iso88592",
    "csisolatin3": "iso88593",
    "csisolatin4": "iso88594",
    "csisolatincyrillic": "iso88595",
    "csisolatinarabic": "iso88596",
    "csisolatingreek" : "iso88597",
    "csisolatinhebrew": "iso88598",
    "csisolatin5": "iso88599",
    "csisolatin6": "iso885910",

    "l1": "iso88591",
    "l2": "iso88592",
    "l3": "iso88593",
    "l4": "iso88594",
    "l5": "iso88599",
    "l6": "iso885910",
    "l7": "iso885913",
    "l8": "iso885914",
    "l9": "iso885915",
    "l10": "iso885916",

    "isoir14": "iso646jp",
    "isoir57": "iso646cn",
    "isoir100": "iso88591",
    "isoir101": "iso88592",
    "isoir109": "iso88593",
    "isoir110": "iso88594",
    "isoir144": "iso88595",
    "isoir127": "iso88596",
    "isoir126": "iso88597",
    "isoir138": "iso88598",
    "isoir148": "iso88599",
    "isoir157": "iso885910",
    "isoir166": "tis620",
    "isoir179": "iso885913",
    "isoir199": "iso885914",
    "isoir203": "iso885915",
    "isoir226": "iso885916",

    "cp819": "iso88591",
    "ibm819": "iso88591",
    "cp28591": "iso88591",
    "28591": "iso88591",

    "cyrillic": "iso88595",

    "arabic": "iso88596",
    "arabic8": "iso88596",
    "ecma114": "iso88596",
    "asmo708": "iso88596",

    "greek" : "iso88597",
    "greek8" : "iso88597",
    "ecma118" : "iso88597",
    "elot928" : "iso88597",

    "hebrew": "iso88598",
    "hebrew8": "iso88598",

    "turkish": "iso88599",
    "turkish8": "iso88599",

    "thai": "iso885911",
    "thai8": "iso885911",

    "celtic": "iso885914",
    "celtic8": "iso885914",
    "isoceltic": "iso885914",

    "tis6200": "tis620",
    "tis62025291": "tis620",
    "tis62025330": "tis620",

    "10000": "macroman",
    "10006": "macgreek",
    "10007": "maccyrillic",
    "10079": "maciceland",
    "10081": "macturkish",

    "cspc8codepage437": "cp437",
    "cspc775baltic": "cp775",
    "cspc850multilingual": "cp850",
    "cspcp852": "cp852",
    "cspc862latinhebrew": "cp862",
    "cpgr": "cp869",

    "msee": "cp1250",
    "mscyrl": "cp1251",
    "msansi": "cp1252",
    "msgreek": "cp1253",
    "msturk": "cp1254",
    "mshebr": "cp1255",
    "msarab": "cp1256",
    "winbaltrim": "cp1257",

    "cp20866": "koi8r",
    "20866": "koi8r",
    "ibm878": "koi8r",
    "cskoi8r": "koi8r",

    "cp21866": "koi8u",
    "21866": "koi8u",
    "ibm1168": "koi8u",

    "strk10482002": "rk1048",

    "tcvn5712": "tcvn",
    "tcvn57121": "tcvn",

    "gb198880": "iso646cn",
    "cn": "iso646cn",

    "csiso14jisc6220ro": "iso646jp",
    "jisc62201969ro": "iso646jp",
    "jp": "iso646jp",

    "cshproman8": "hproman8",
    "r8": "hproman8",
    "roman8": "hproman8",
    "xroman8": "hproman8",
    "ibm1051": "hproman8",

    "mac": "macintosh",
    "csmacintosh": "macintosh",
};



/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = [
	[
		"8740",
		"䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"
	],
	[
		"8767",
		"綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"
	],
	[
		"87a1",
		"𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"
	],
	[
		"8840",
		"㇀",
		4,
		"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"
	],
	[
		"88a1",
		"ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"
	],
	[
		"8940",
		"𪎩𡅅"
	],
	[
		"8943",
		"攊"
	],
	[
		"8946",
		"丽滝鵎釟"
	],
	[
		"894c",
		"𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"
	],
	[
		"89a1",
		"琑糼緍楆竉刧"
	],
	[
		"89ab",
		"醌碸酞肼"
	],
	[
		"89b0",
		"贋胶𠧧"
	],
	[
		"89b5",
		"肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"
	],
	[
		"89c1",
		"溚舾甙"
	],
	[
		"89c5",
		"䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"
	],
	[
		"8a40",
		"𧶄唥"
	],
	[
		"8a43",
		"𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"
	],
	[
		"8a64",
		"𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"
	],
	[
		"8a76",
		"䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"
	],
	[
		"8aa1",
		"𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"
	],
	[
		"8aac",
		"䠋𠆩㿺塳𢶍"
	],
	[
		"8ab2",
		"𤗈𠓼𦂗𠽌𠶖啹䂻䎺"
	],
	[
		"8abb",
		"䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"
	],
	[
		"8ac9",
		"𪘁𠸉𢫏𢳉"
	],
	[
		"8ace",
		"𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"
	],
	[
		"8adf",
		"𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"
	],
	[
		"8af6",
		"𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"
	],
	[
		"8b40",
		"𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"
	],
	[
		"8b55",
		"𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"
	],
	[
		"8ba1",
		"𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"
	],
	[
		"8bde",
		"𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"
	],
	[
		"8c40",
		"倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"
	],
	[
		"8ca1",
		"𣏹椙橃𣱣泿"
	],
	[
		"8ca7",
		"爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"
	],
	[
		"8cc9",
		"顨杫䉶圽"
	],
	[
		"8cce",
		"藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"
	],
	[
		"8ce6",
		"峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"
	],
	[
		"8d40",
		"𠮟"
	],
	[
		"8d42",
		"𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"
	],
	[
		"8da1",
		"㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"
	],
	[
		"8e40",
		"𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"
	],
	[
		"8ea1",
		"繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"
	],
	[
		"8f40",
		"蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"
	],
	[
		"8fa1",
		"𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"
	],
	[
		"9040",
		"趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"
	],
	[
		"90a1",
		"𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"
	],
	[
		"9140",
		"𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"
	],
	[
		"91a1",
		"鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"
	],
	[
		"9240",
		"𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"
	],
	[
		"92a1",
		"働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"
	],
	[
		"9340",
		"媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"
	],
	[
		"93a1",
		"摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"
	],
	[
		"9440",
		"銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"
	],
	[
		"94a1",
		"㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"
	],
	[
		"9540",
		"𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"
	],
	[
		"95a1",
		"衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"
	],
	[
		"9640",
		"桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"
	],
	[
		"96a1",
		"𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"
	],
	[
		"9740",
		"愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"
	],
	[
		"97a1",
		"𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"
	],
	[
		"9840",
		"𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"
	],
	[
		"98a1",
		"咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"
	],
	[
		"9940",
		"䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"
	],
	[
		"99a1",
		"䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"
	],
	[
		"9a40",
		"鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"
	],
	[
		"9aa1",
		"黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"
	],
	[
		"9b40",
		"𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"
	],
	[
		"9b62",
		"𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"
	],
	[
		"9ba1",
		"椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"
	],
	[
		"9c40",
		"嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"
	],
	[
		"9ca1",
		"㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"
	],
	[
		"9d40",
		"𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"
	],
	[
		"9da1",
		"辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"
	],
	[
		"9e40",
		"𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"
	],
	[
		"9ea1",
		"鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"
	],
	[
		"9ead",
		"𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"
	],
	[
		"9ec5",
		"㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"
	],
	[
		"9ef5",
		"噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"
	],
	[
		"9f40",
		"籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"
	],
	[
		"9f4f",
		"凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"
	],
	[
		"9fa1",
		"椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"
	],
	[
		"9fae",
		"酙隁酜"
	],
	[
		"9fb2",
		"酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"
	],
	[
		"9fc1",
		"𤤙盖鮝个𠳔莾衂"
	],
	[
		"9fc9",
		"届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"
	],
	[
		"9fdb",
		"歒酼龥鮗頮颴骺麨麄煺笔"
	],
	[
		"9fe7",
		"毺蠘罸"
	],
	[
		"9feb",
		"嘠𪙊蹷齓"
	],
	[
		"9ff0",
		"跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"
	],
	[
		"a040",
		"𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"
	],
	[
		"a055",
		"𡠻𦸅"
	],
	[
		"a058",
		"詾𢔛"
	],
	[
		"a05b",
		"惽癧髗鵄鍮鮏蟵"
	],
	[
		"a063",
		"蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"
	],
	[
		"a073",
		"坟慯抦戹拎㩜懢厪𣏵捤栂㗒"
	],
	[
		"a0a1",
		"嵗𨯂迚𨸹"
	],
	[
		"a0a6",
		"僙𡵆礆匲阸𠼻䁥"
	],
	[
		"a0ae",
		"矾"
	],
	[
		"a0b0",
		"糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"
	],
	[
		"a0d4",
		"覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"
	],
	[
		"a0e2",
		"罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"
	],
	[
		"a3c0",
		"␀",
		31,
		"␡"
	],
	[
		"c6a1",
		"①",
		9,
		"⑴",
		9,
		"ⅰ",
		9,
		"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",
		23
	],
	[
		"c740",
		"す",
		58,
		"ァアィイ"
	],
	[
		"c7a1",
		"ゥ",
		81,
		"А",
		5,
		"ЁЖ",
		4
	],
	[
		"c840",
		"Л",
		26,
		"ёж",
		25,
		"⇧↸↹㇏𠃌乚𠂊刂䒑"
	],
	[
		"c8a1",
		"龰冈龱𧘇"
	],
	[
		"c8cd",
		"￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"
	],
	[
		"c8f5",
		"ʃɐɛɔɵœøŋʊɪ"
	],
	[
		"f9fe",
		"￭"
	],
	[
		"fa40",
		"𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"
	],
	[
		"faa1",
		"鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"
	],
	[
		"fb40",
		"𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"
	],
	[
		"fba1",
		"𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"
	],
	[
		"fc40",
		"廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"
	],
	[
		"fca1",
		"𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"
	],
	[
		"fd40",
		"𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"
	],
	[
		"fda1",
		"𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"
	],
	[
		"fe40",
		"鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"
	],
	[
		"fea1",
		"𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"
	]
];

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = [
	[
		"0",
		"\u0000",
		127
	],
	[
		"8141",
		"갂갃갅갆갋",
		4,
		"갘갞갟갡갢갣갥",
		6,
		"갮갲갳갴"
	],
	[
		"8161",
		"갵갶갷갺갻갽갾갿걁",
		9,
		"걌걎",
		5,
		"걕"
	],
	[
		"8181",
		"걖걗걙걚걛걝",
		18,
		"걲걳걵걶걹걻",
		4,
		"겂겇겈겍겎겏겑겒겓겕",
		6,
		"겞겢",
		5,
		"겫겭겮겱",
		6,
		"겺겾겿곀곂곃곅곆곇곉곊곋곍",
		7,
		"곖곘",
		7,
		"곢곣곥곦곩곫곭곮곲곴곷",
		4,
		"곾곿괁괂괃괅괇",
		4,
		"괎괐괒괓"
	],
	[
		"8241",
		"괔괕괖괗괙괚괛괝괞괟괡",
		7,
		"괪괫괮",
		5
	],
	[
		"8261",
		"괶괷괹괺괻괽",
		6,
		"굆굈굊",
		5,
		"굑굒굓굕굖굗"
	],
	[
		"8281",
		"굙",
		7,
		"굢굤",
		7,
		"굮굯굱굲굷굸굹굺굾궀궃",
		4,
		"궊궋궍궎궏궑",
		10,
		"궞",
		5,
		"궥",
		17,
		"궸",
		7,
		"귂귃귅귆귇귉",
		6,
		"귒귔",
		7,
		"귝귞귟귡귢귣귥",
		18
	],
	[
		"8341",
		"귺귻귽귾긂",
		5,
		"긊긌긎",
		5,
		"긕",
		7
	],
	[
		"8361",
		"긝",
		18,
		"긲긳긵긶긹긻긼"
	],
	[
		"8381",
		"긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",
		4,
		"깞깢깣깤깦깧깪깫깭깮깯깱",
		6,
		"깺깾",
		5,
		"꺆",
		5,
		"꺍",
		46,
		"꺿껁껂껃껅",
		6,
		"껎껒",
		5,
		"껚껛껝",
		8
	],
	[
		"8441",
		"껦껧껩껪껬껮",
		5,
		"껵껶껷껹껺껻껽",
		8
	],
	[
		"8461",
		"꼆꼉꼊꼋꼌꼎꼏꼑",
		18
	],
	[
		"8481",
		"꼤",
		7,
		"꼮꼯꼱꼳꼵",
		6,
		"꼾꽀꽄꽅꽆꽇꽊",
		5,
		"꽑",
		10,
		"꽞",
		5,
		"꽦",
		18,
		"꽺",
		5,
		"꾁꾂꾃꾅꾆꾇꾉",
		6,
		"꾒꾓꾔꾖",
		5,
		"꾝",
		26,
		"꾺꾻꾽꾾"
	],
	[
		"8541",
		"꾿꿁",
		5,
		"꿊꿌꿏",
		4,
		"꿕",
		6,
		"꿝",
		4
	],
	[
		"8561",
		"꿢",
		5,
		"꿪",
		5,
		"꿲꿳꿵꿶꿷꿹",
		6,
		"뀂뀃"
	],
	[
		"8581",
		"뀅",
		6,
		"뀍뀎뀏뀑뀒뀓뀕",
		6,
		"뀞",
		9,
		"뀩",
		26,
		"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",
		29,
		"끾끿낁낂낃낅",
		6,
		"낎낐낒",
		5,
		"낛낝낞낣낤"
	],
	[
		"8641",
		"낥낦낧낪낰낲낶낷낹낺낻낽",
		6,
		"냆냊",
		5,
		"냒"
	],
	[
		"8661",
		"냓냕냖냗냙",
		6,
		"냡냢냣냤냦",
		10
	],
	[
		"8681",
		"냱",
		22,
		"넊넍넎넏넑넔넕넖넗넚넞",
		4,
		"넦넧넩넪넫넭",
		6,
		"넶넺",
		5,
		"녂녃녅녆녇녉",
		6,
		"녒녓녖녗녙녚녛녝녞녟녡",
		22,
		"녺녻녽녾녿놁놃",
		4,
		"놊놌놎놏놐놑놕놖놗놙놚놛놝"
	],
	[
		"8741",
		"놞",
		9,
		"놩",
		15
	],
	[
		"8761",
		"놹",
		18,
		"뇍뇎뇏뇑뇒뇓뇕"
	],
	[
		"8781",
		"뇖",
		5,
		"뇞뇠",
		7,
		"뇪뇫뇭뇮뇯뇱",
		7,
		"뇺뇼뇾",
		5,
		"눆눇눉눊눍",
		6,
		"눖눘눚",
		5,
		"눡",
		18,
		"눵",
		6,
		"눽",
		26,
		"뉙뉚뉛뉝뉞뉟뉡",
		6,
		"뉪",
		4
	],
	[
		"8841",
		"뉯",
		4,
		"뉶",
		5,
		"뉽",
		6,
		"늆늇늈늊",
		4
	],
	[
		"8861",
		"늏늒늓늕늖늗늛",
		4,
		"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"
	],
	[
		"8881",
		"늸",
		15,
		"닊닋닍닎닏닑닓",
		4,
		"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",
		6,
		"댒댖",
		5,
		"댝",
		54,
		"덗덙덚덝덠덡덢덣"
	],
	[
		"8941",
		"덦덨덪덬덭덯덲덳덵덶덷덹",
		6,
		"뎂뎆",
		5,
		"뎍"
	],
	[
		"8961",
		"뎎뎏뎑뎒뎓뎕",
		10,
		"뎢",
		5,
		"뎩뎪뎫뎭"
	],
	[
		"8981",
		"뎮",
		21,
		"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",
		18,
		"돽",
		18,
		"됑",
		6,
		"됙됚됛됝됞됟됡",
		6,
		"됪됬",
		7,
		"됵",
		15
	],
	[
		"8a41",
		"둅",
		10,
		"둒둓둕둖둗둙",
		6,
		"둢둤둦"
	],
	[
		"8a61",
		"둧",
		4,
		"둭",
		18,
		"뒁뒂"
	],
	[
		"8a81",
		"뒃",
		4,
		"뒉",
		19,
		"뒞",
		5,
		"뒥뒦뒧뒩뒪뒫뒭",
		7,
		"뒶뒸뒺",
		5,
		"듁듂듃듅듆듇듉",
		6,
		"듑듒듓듔듖",
		5,
		"듞듟듡듢듥듧",
		4,
		"듮듰듲",
		5,
		"듹",
		26,
		"딖딗딙딚딝"
	],
	[
		"8b41",
		"딞",
		5,
		"딦딫",
		4,
		"딲딳딵딶딷딹",
		6,
		"땂땆"
	],
	[
		"8b61",
		"땇땈땉땊땎땏땑땒땓땕",
		6,
		"땞땢",
		8
	],
	[
		"8b81",
		"땫",
		52,
		"떢떣떥떦떧떩떬떭떮떯떲떶",
		4,
		"떾떿뗁뗂뗃뗅",
		6,
		"뗎뗒",
		5,
		"뗙",
		18,
		"뗭",
		18
	],
	[
		"8c41",
		"똀",
		15,
		"똒똓똕똖똗똙",
		4
	],
	[
		"8c61",
		"똞",
		6,
		"똦",
		5,
		"똭",
		6,
		"똵",
		5
	],
	[
		"8c81",
		"똻",
		12,
		"뙉",
		26,
		"뙥뙦뙧뙩",
		50,
		"뚞뚟뚡뚢뚣뚥",
		5,
		"뚭뚮뚯뚰뚲",
		16
	],
	[
		"8d41",
		"뛃",
		16,
		"뛕",
		8
	],
	[
		"8d61",
		"뛞",
		17,
		"뛱뛲뛳뛵뛶뛷뛹뛺"
	],
	[
		"8d81",
		"뛻",
		4,
		"뜂뜃뜄뜆",
		33,
		"뜪뜫뜭뜮뜱",
		6,
		"뜺뜼",
		7,
		"띅띆띇띉띊띋띍",
		6,
		"띖",
		9,
		"띡띢띣띥띦띧띩",
		6,
		"띲띴띶",
		5,
		"띾띿랁랂랃랅",
		6,
		"랎랓랔랕랚랛랝랞"
	],
	[
		"8e41",
		"랟랡",
		6,
		"랪랮",
		5,
		"랶랷랹",
		8
	],
	[
		"8e61",
		"럂",
		4,
		"럈럊",
		19
	],
	[
		"8e81",
		"럞",
		13,
		"럮럯럱럲럳럵",
		6,
		"럾렂",
		4,
		"렊렋렍렎렏렑",
		6,
		"렚렜렞",
		5,
		"렦렧렩렪렫렭",
		6,
		"렶렺",
		5,
		"롁롂롃롅",
		11,
		"롒롔",
		7,
		"롞롟롡롢롣롥",
		6,
		"롮롰롲",
		5,
		"롹롺롻롽",
		7
	],
	[
		"8f41",
		"뢅",
		7,
		"뢎",
		17
	],
	[
		"8f61",
		"뢠",
		7,
		"뢩",
		6,
		"뢱뢲뢳뢵뢶뢷뢹",
		4
	],
	[
		"8f81",
		"뢾뢿룂룄룆",
		5,
		"룍룎룏룑룒룓룕",
		7,
		"룞룠룢",
		5,
		"룪룫룭룮룯룱",
		6,
		"룺룼룾",
		5,
		"뤅",
		18,
		"뤙",
		6,
		"뤡",
		26,
		"뤾뤿륁륂륃륅",
		6,
		"륍륎륐륒",
		5
	],
	[
		"9041",
		"륚륛륝륞륟륡",
		6,
		"륪륬륮",
		5,
		"륶륷륹륺륻륽"
	],
	[
		"9061",
		"륾",
		5,
		"릆릈릋릌릏",
		15
	],
	[
		"9081",
		"릟",
		12,
		"릮릯릱릲릳릵",
		6,
		"릾맀맂",
		5,
		"맊맋맍맓",
		4,
		"맚맜맟맠맢맦맧맩맪맫맭",
		6,
		"맶맻",
		4,
		"먂",
		5,
		"먉",
		11,
		"먖",
		33,
		"먺먻먽먾먿멁멃멄멅멆"
	],
	[
		"9141",
		"멇멊멌멏멐멑멒멖멗멙멚멛멝",
		6,
		"멦멪",
		5
	],
	[
		"9161",
		"멲멳멵멶멷멹",
		9,
		"몆몈몉몊몋몍",
		5
	],
	[
		"9181",
		"몓",
		20,
		"몪몭몮몯몱몳",
		4,
		"몺몼몾",
		5,
		"뫅뫆뫇뫉",
		14,
		"뫚",
		33,
		"뫽뫾뫿묁묂묃묅",
		7,
		"묎묐묒",
		5,
		"묙묚묛묝묞묟묡",
		6
	],
	[
		"9241",
		"묨묪묬",
		7,
		"묷묹묺묿",
		4,
		"뭆뭈뭊뭋뭌뭎뭑뭒"
	],
	[
		"9261",
		"뭓뭕뭖뭗뭙",
		7,
		"뭢뭤",
		7,
		"뭭",
		4
	],
	[
		"9281",
		"뭲",
		21,
		"뮉뮊뮋뮍뮎뮏뮑",
		18,
		"뮥뮦뮧뮩뮪뮫뮭",
		6,
		"뮵뮶뮸",
		7,
		"믁믂믃믅믆믇믉",
		6,
		"믑믒믔",
		35,
		"믺믻믽믾밁"
	],
	[
		"9341",
		"밃",
		4,
		"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"
	],
	[
		"9361",
		"밶밷밹",
		6,
		"뱂뱆뱇뱈뱊뱋뱎뱏뱑",
		8
	],
	[
		"9381",
		"뱚뱛뱜뱞",
		37,
		"벆벇벉벊벍벏",
		4,
		"벖벘벛",
		4,
		"벢벣벥벦벩",
		6,
		"벲벶",
		5,
		"벾벿볁볂볃볅",
		7,
		"볎볒볓볔볖볗볙볚볛볝",
		22,
		"볷볹볺볻볽"
	],
	[
		"9441",
		"볾",
		5,
		"봆봈봊",
		5,
		"봑봒봓봕",
		8
	],
	[
		"9461",
		"봞",
		5,
		"봥",
		6,
		"봭",
		12
	],
	[
		"9481",
		"봺",
		5,
		"뵁",
		6,
		"뵊뵋뵍뵎뵏뵑",
		6,
		"뵚",
		9,
		"뵥뵦뵧뵩",
		22,
		"붂붃붅붆붋",
		4,
		"붒붔붖붗붘붛붝",
		6,
		"붥",
		10,
		"붱",
		6,
		"붹",
		24
	],
	[
		"9541",
		"뷒뷓뷖뷗뷙뷚뷛뷝",
		11,
		"뷪",
		5,
		"뷱"
	],
	[
		"9561",
		"뷲뷳뷵뷶뷷뷹",
		6,
		"븁븂븄븆",
		5,
		"븎븏븑븒븓"
	],
	[
		"9581",
		"븕",
		6,
		"븞븠",
		35,
		"빆빇빉빊빋빍빏",
		4,
		"빖빘빜빝빞빟빢빣빥빦빧빩빫",
		4,
		"빲빶",
		4,
		"빾빿뺁뺂뺃뺅",
		6,
		"뺎뺒",
		5,
		"뺚",
		13,
		"뺩",
		14
	],
	[
		"9641",
		"뺸",
		23,
		"뻒뻓"
	],
	[
		"9661",
		"뻕뻖뻙",
		6,
		"뻡뻢뻦",
		5,
		"뻭",
		8
	],
	[
		"9681",
		"뻶",
		10,
		"뼂",
		5,
		"뼊",
		13,
		"뼚뼞",
		33,
		"뽂뽃뽅뽆뽇뽉",
		6,
		"뽒뽓뽔뽖",
		44
	],
	[
		"9741",
		"뾃",
		16,
		"뾕",
		8
	],
	[
		"9761",
		"뾞",
		17,
		"뾱",
		7
	],
	[
		"9781",
		"뾹",
		11,
		"뿆",
		5,
		"뿎뿏뿑뿒뿓뿕",
		6,
		"뿝뿞뿠뿢",
		89,
		"쀽쀾쀿"
	],
	[
		"9841",
		"쁀",
		16,
		"쁒",
		5,
		"쁙쁚쁛"
	],
	[
		"9861",
		"쁝쁞쁟쁡",
		6,
		"쁪",
		15
	],
	[
		"9881",
		"쁺",
		21,
		"삒삓삕삖삗삙",
		6,
		"삢삤삦",
		5,
		"삮삱삲삷",
		4,
		"삾샂샃샄샆샇샊샋샍샎샏샑",
		6,
		"샚샞",
		5,
		"샦샧샩샪샫샭",
		6,
		"샶샸샺",
		5,
		"섁섂섃섅섆섇섉",
		6,
		"섑섒섓섔섖",
		5,
		"섡섢섥섨섩섪섫섮"
	],
	[
		"9941",
		"섲섳섴섵섷섺섻섽섾섿셁",
		6,
		"셊셎",
		5,
		"셖셗"
	],
	[
		"9961",
		"셙셚셛셝",
		6,
		"셦셪",
		5,
		"셱셲셳셵셶셷셹셺셻"
	],
	[
		"9981",
		"셼",
		8,
		"솆",
		5,
		"솏솑솒솓솕솗",
		4,
		"솞솠솢솣솤솦솧솪솫솭솮솯솱",
		11,
		"솾",
		5,
		"쇅쇆쇇쇉쇊쇋쇍",
		6,
		"쇕쇖쇙",
		6,
		"쇡쇢쇣쇥쇦쇧쇩",
		6,
		"쇲쇴",
		7,
		"쇾쇿숁숂숃숅",
		6,
		"숎숐숒",
		5,
		"숚숛숝숞숡숢숣"
	],
	[
		"9a41",
		"숤숥숦숧숪숬숮숰숳숵",
		16
	],
	[
		"9a61",
		"쉆쉇쉉",
		6,
		"쉒쉓쉕쉖쉗쉙",
		6,
		"쉡쉢쉣쉤쉦"
	],
	[
		"9a81",
		"쉧",
		4,
		"쉮쉯쉱쉲쉳쉵",
		6,
		"쉾슀슂",
		5,
		"슊",
		5,
		"슑",
		6,
		"슙슚슜슞",
		5,
		"슦슧슩슪슫슮",
		5,
		"슶슸슺",
		33,
		"싞싟싡싢싥",
		5,
		"싮싰싲싳싴싵싷싺싽싾싿쌁",
		6,
		"쌊쌋쌎쌏"
	],
	[
		"9b41",
		"쌐쌑쌒쌖쌗쌙쌚쌛쌝",
		6,
		"쌦쌧쌪",
		8
	],
	[
		"9b61",
		"쌳",
		17,
		"썆",
		7
	],
	[
		"9b81",
		"썎",
		25,
		"썪썫썭썮썯썱썳",
		4,
		"썺썻썾",
		5,
		"쎅쎆쎇쎉쎊쎋쎍",
		50,
		"쏁",
		22,
		"쏚"
	],
	[
		"9c41",
		"쏛쏝쏞쏡쏣",
		4,
		"쏪쏫쏬쏮",
		5,
		"쏶쏷쏹",
		5
	],
	[
		"9c61",
		"쏿",
		8,
		"쐉",
		6,
		"쐑",
		9
	],
	[
		"9c81",
		"쐛",
		8,
		"쐥",
		6,
		"쐭쐮쐯쐱쐲쐳쐵",
		6,
		"쐾",
		9,
		"쑉",
		26,
		"쑦쑧쑩쑪쑫쑭",
		6,
		"쑶쑷쑸쑺",
		5,
		"쒁",
		18,
		"쒕",
		6,
		"쒝",
		12
	],
	[
		"9d41",
		"쒪",
		13,
		"쒹쒺쒻쒽",
		8
	],
	[
		"9d61",
		"쓆",
		25
	],
	[
		"9d81",
		"쓠",
		8,
		"쓪",
		5,
		"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",
		9,
		"씍씎씏씑씒씓씕",
		6,
		"씝",
		10,
		"씪씫씭씮씯씱",
		6,
		"씺씼씾",
		5,
		"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",
		6,
		"앲앶",
		5,
		"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"
	],
	[
		"9e41",
		"얖얙얚얛얝얞얟얡",
		7,
		"얪",
		9,
		"얶"
	],
	[
		"9e61",
		"얷얺얿",
		4,
		"엋엍엏엒엓엕엖엗엙",
		6,
		"엢엤엦엧"
	],
	[
		"9e81",
		"엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",
		6,
		"옚옝",
		6,
		"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",
		6,
		"왒왖",
		5,
		"왞왟왡",
		10,
		"왭왮왰왲",
		5,
		"왺왻왽왾왿욁",
		6,
		"욊욌욎",
		5,
		"욖욗욙욚욛욝",
		6,
		"욦"
	],
	[
		"9f41",
		"욨욪",
		5,
		"욲욳욵욶욷욻",
		4,
		"웂웄웆",
		5,
		"웎"
	],
	[
		"9f61",
		"웏웑웒웓웕",
		6,
		"웞웟웢",
		5,
		"웪웫웭웮웯웱웲"
	],
	[
		"9f81",
		"웳",
		4,
		"웺웻웼웾",
		5,
		"윆윇윉윊윋윍",
		6,
		"윖윘윚",
		5,
		"윢윣윥윦윧윩",
		6,
		"윲윴윶윸윹윺윻윾윿읁읂읃읅",
		4,
		"읋읎읐읙읚읛읝읞읟읡",
		6,
		"읩읪읬",
		7,
		"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",
		4,
		"잢잧",
		4,
		"잮잯잱잲잳잵잶잷"
	],
	[
		"a041",
		"잸잹잺잻잾쟂",
		5,
		"쟊쟋쟍쟏쟑",
		6,
		"쟙쟚쟛쟜"
	],
	[
		"a061",
		"쟞",
		5,
		"쟥쟦쟧쟩쟪쟫쟭",
		13
	],
	[
		"a081",
		"쟻",
		4,
		"젂젃젅젆젇젉젋",
		4,
		"젒젔젗",
		4,
		"젞젟젡젢젣젥",
		6,
		"젮젰젲",
		5,
		"젹젺젻젽젾젿졁",
		6,
		"졊졋졎",
		5,
		"졕",
		26,
		"졲졳졵졶졷졹졻",
		4,
		"좂좄좈좉좊좎",
		5,
		"좕",
		7,
		"좞좠좢좣좤"
	],
	[
		"a141",
		"좥좦좧좩",
		18,
		"좾좿죀죁"
	],
	[
		"a161",
		"죂죃죅죆죇죉죊죋죍",
		6,
		"죖죘죚",
		5,
		"죢죣죥"
	],
	[
		"a181",
		"죦",
		14,
		"죶",
		5,
		"죾죿줁줂줃줇",
		4,
		"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",
		9,
		"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"
	],
	[
		"a241",
		"줐줒",
		5,
		"줙",
		18
	],
	[
		"a261",
		"줭",
		6,
		"줵",
		18
	],
	[
		"a281",
		"쥈",
		7,
		"쥒쥓쥕쥖쥗쥙",
		6,
		"쥢쥤",
		7,
		"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"
	],
	[
		"a341",
		"쥱쥲쥳쥵",
		6,
		"쥽",
		10,
		"즊즋즍즎즏"
	],
	[
		"a361",
		"즑",
		6,
		"즚즜즞",
		16
	],
	[
		"a381",
		"즯",
		16,
		"짂짃짅짆짉짋",
		4,
		"짒짔짗짘짛！",
		58,
		"￦］",
		32,
		"￣"
	],
	[
		"a441",
		"짞짟짡짣짥짦짨짩짪짫짮짲",
		5,
		"짺짻짽짾짿쨁쨂쨃쨄"
	],
	[
		"a461",
		"쨅쨆쨇쨊쨎",
		5,
		"쨕쨖쨗쨙",
		12
	],
	[
		"a481",
		"쨦쨧쨨쨪",
		28,
		"ㄱ",
		93
	],
	[
		"a541",
		"쩇",
		4,
		"쩎쩏쩑쩒쩓쩕",
		6,
		"쩞쩢",
		5,
		"쩩쩪"
	],
	[
		"a561",
		"쩫",
		17,
		"쩾",
		5,
		"쪅쪆"
	],
	[
		"a581",
		"쪇",
		16,
		"쪙",
		14,
		"ⅰ",
		9
	],
	[
		"a5b0",
		"Ⅰ",
		9
	],
	[
		"a5c1",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"a5e1",
		"α",
		16,
		"σ",
		6
	],
	[
		"a641",
		"쪨",
		19,
		"쪾쪿쫁쫂쫃쫅"
	],
	[
		"a661",
		"쫆",
		5,
		"쫎쫐쫒쫔쫕쫖쫗쫚",
		5,
		"쫡",
		6
	],
	[
		"a681",
		"쫨쫩쫪쫫쫭",
		6,
		"쫵",
		18,
		"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",
		7
	],
	[
		"a741",
		"쬋",
		4,
		"쬑쬒쬓쬕쬖쬗쬙",
		6,
		"쬢",
		7
	],
	[
		"a761",
		"쬪",
		22,
		"쭂쭃쭄"
	],
	[
		"a781",
		"쭅쭆쭇쭊쭋쭍쭎쭏쭑",
		6,
		"쭚쭛쭜쭞",
		5,
		"쭥",
		7,
		"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",
		9,
		"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",
		9,
		"㎀",
		4,
		"㎺",
		5,
		"㎐",
		4,
		"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"
	],
	[
		"a841",
		"쭭",
		10,
		"쭺",
		14
	],
	[
		"a861",
		"쮉",
		18,
		"쮝",
		6
	],
	[
		"a881",
		"쮤",
		19,
		"쮹",
		11,
		"ÆÐªĦ"
	],
	[
		"a8a6",
		"Ĳ"
	],
	[
		"a8a8",
		"ĿŁØŒºÞŦŊ"
	],
	[
		"a8b1",
		"㉠",
		27,
		"ⓐ",
		25,
		"①",
		14,
		"½⅓⅔¼¾⅛⅜⅝⅞"
	],
	[
		"a941",
		"쯅",
		14,
		"쯕",
		10
	],
	[
		"a961",
		"쯠쯡쯢쯣쯥쯦쯨쯪",
		18
	],
	[
		"a981",
		"쯽",
		14,
		"찎찏찑찒찓찕",
		6,
		"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",
		27,
		"⒜",
		25,
		"⑴",
		14,
		"¹²³⁴ⁿ₁₂₃₄"
	],
	[
		"aa41",
		"찥찦찪찫찭찯찱",
		6,
		"찺찿",
		4,
		"챆챇챉챊챋챍챎"
	],
	[
		"aa61",
		"챏",
		4,
		"챖챚",
		5,
		"챡챢챣챥챧챩",
		6,
		"챱챲"
	],
	[
		"aa81",
		"챳챴챶",
		29,
		"ぁ",
		82
	],
	[
		"ab41",
		"첔첕첖첗첚첛첝첞첟첡",
		6,
		"첪첮",
		5,
		"첶첷첹"
	],
	[
		"ab61",
		"첺첻첽",
		6,
		"쳆쳈쳊",
		5,
		"쳑쳒쳓쳕",
		5
	],
	[
		"ab81",
		"쳛",
		8,
		"쳥",
		6,
		"쳭쳮쳯쳱",
		12,
		"ァ",
		85
	],
	[
		"ac41",
		"쳾쳿촀촂",
		5,
		"촊촋촍촎촏촑",
		6,
		"촚촜촞촟촠"
	],
	[
		"ac61",
		"촡촢촣촥촦촧촩촪촫촭",
		11,
		"촺",
		4
	],
	[
		"ac81",
		"촿",
		28,
		"쵝쵞쵟А",
		5,
		"ЁЖ",
		25
	],
	[
		"acd1",
		"а",
		5,
		"ёж",
		25
	],
	[
		"ad41",
		"쵡쵢쵣쵥",
		6,
		"쵮쵰쵲",
		5,
		"쵹",
		7
	],
	[
		"ad61",
		"춁",
		6,
		"춉",
		10,
		"춖춗춙춚춛춝춞춟"
	],
	[
		"ad81",
		"춠춡춢춣춦춨춪",
		5,
		"춱",
		18,
		"췅"
	],
	[
		"ae41",
		"췆",
		5,
		"췍췎췏췑",
		16
	],
	[
		"ae61",
		"췢",
		5,
		"췩췪췫췭췮췯췱",
		6,
		"췺췼췾",
		4
	],
	[
		"ae81",
		"츃츅츆츇츉츊츋츍",
		6,
		"츕츖츗츘츚",
		5,
		"츢츣츥츦츧츩츪츫"
	],
	[
		"af41",
		"츬츭츮츯츲츴츶",
		19
	],
	[
		"af61",
		"칊",
		13,
		"칚칛칝칞칢",
		5,
		"칪칬"
	],
	[
		"af81",
		"칮",
		5,
		"칶칷칹칺칻칽",
		6,
		"캆캈캊",
		5,
		"캒캓캕캖캗캙"
	],
	[
		"b041",
		"캚",
		5,
		"캢캦",
		5,
		"캮",
		12
	],
	[
		"b061",
		"캻",
		5,
		"컂",
		19
	],
	[
		"b081",
		"컖",
		13,
		"컦컧컩컪컭",
		6,
		"컶컺",
		5,
		"가각간갇갈갉갊감",
		7,
		"같",
		4,
		"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"
	],
	[
		"b141",
		"켂켃켅켆켇켉",
		6,
		"켒켔켖",
		5,
		"켝켞켟켡켢켣"
	],
	[
		"b161",
		"켥",
		6,
		"켮켲",
		5,
		"켹",
		11
	],
	[
		"b181",
		"콅",
		14,
		"콖콗콙콚콛콝",
		6,
		"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"
	],
	[
		"b241",
		"콭콮콯콲콳콵콶콷콹",
		6,
		"쾁쾂쾃쾄쾆",
		5,
		"쾍"
	],
	[
		"b261",
		"쾎",
		18,
		"쾢",
		5,
		"쾩"
	],
	[
		"b281",
		"쾪",
		5,
		"쾱",
		18,
		"쿅",
		6,
		"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"
	],
	[
		"b341",
		"쿌",
		19,
		"쿢쿣쿥쿦쿧쿩"
	],
	[
		"b361",
		"쿪",
		5,
		"쿲쿴쿶",
		5,
		"쿽쿾쿿퀁퀂퀃퀅",
		5
	],
	[
		"b381",
		"퀋",
		5,
		"퀒",
		5,
		"퀙",
		19,
		"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",
		4,
		"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"
	],
	[
		"b441",
		"퀮",
		5,
		"퀶퀷퀹퀺퀻퀽",
		6,
		"큆큈큊",
		5
	],
	[
		"b461",
		"큑큒큓큕큖큗큙",
		6,
		"큡",
		10,
		"큮큯"
	],
	[
		"b481",
		"큱큲큳큵",
		6,
		"큾큿킀킂",
		18,
		"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",
		4,
		"닳담답닷",
		4,
		"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"
	],
	[
		"b541",
		"킕",
		14,
		"킦킧킩킪킫킭",
		5
	],
	[
		"b561",
		"킳킶킸킺",
		5,
		"탂탃탅탆탇탊",
		5,
		"탒탖",
		4
	],
	[
		"b581",
		"탛탞탟탡탢탣탥",
		6,
		"탮탲",
		5,
		"탹",
		11,
		"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"
	],
	[
		"b641",
		"턅",
		7,
		"턎",
		17
	],
	[
		"b661",
		"턠",
		15,
		"턲턳턵턶턷턹턻턼턽턾"
	],
	[
		"b681",
		"턿텂텆",
		5,
		"텎텏텑텒텓텕",
		6,
		"텞텠텢",
		5,
		"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"
	],
	[
		"b741",
		"텮",
		13,
		"텽",
		6,
		"톅톆톇톉톊"
	],
	[
		"b761",
		"톋",
		20,
		"톢톣톥톦톧"
	],
	[
		"b781",
		"톩",
		6,
		"톲톴톶톷톸톹톻톽톾톿퇁",
		14,
		"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"
	],
	[
		"b841",
		"퇐",
		7,
		"퇙",
		17
	],
	[
		"b861",
		"퇫",
		8,
		"퇵퇶퇷퇹",
		13
	],
	[
		"b881",
		"툈툊",
		5,
		"툑",
		24,
		"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",
		4,
		"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"
	],
	[
		"b941",
		"툪툫툮툯툱툲툳툵",
		6,
		"툾퉀퉂",
		5,
		"퉉퉊퉋퉌"
	],
	[
		"b961",
		"퉍",
		14,
		"퉝",
		6,
		"퉥퉦퉧퉨"
	],
	[
		"b981",
		"퉩",
		22,
		"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",
		4,
		"받",
		4,
		"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"
	],
	[
		"ba41",
		"튍튎튏튒튓튔튖",
		5,
		"튝튞튟튡튢튣튥",
		6,
		"튭"
	],
	[
		"ba61",
		"튮튯튰튲",
		5,
		"튺튻튽튾틁틃",
		4,
		"틊틌",
		5
	],
	[
		"ba81",
		"틒틓틕틖틗틙틚틛틝",
		6,
		"틦",
		9,
		"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"
	],
	[
		"bb41",
		"틻",
		4,
		"팂팄팆",
		5,
		"팏팑팒팓팕팗",
		4,
		"팞팢팣"
	],
	[
		"bb61",
		"팤팦팧팪팫팭팮팯팱",
		6,
		"팺팾",
		5,
		"퍆퍇퍈퍉"
	],
	[
		"bb81",
		"퍊",
		31,
		"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"
	],
	[
		"bc41",
		"퍪",
		17,
		"퍾퍿펁펂펃펅펆펇"
	],
	[
		"bc61",
		"펈펉펊펋펎펒",
		5,
		"펚펛펝펞펟펡",
		6,
		"펪펬펮"
	],
	[
		"bc81",
		"펯",
		4,
		"펵펶펷펹펺펻펽",
		6,
		"폆폇폊",
		5,
		"폑",
		5,
		"샥샨샬샴샵샷샹섀섄섈섐섕서",
		4,
		"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"
	],
	[
		"bd41",
		"폗폙",
		7,
		"폢폤",
		7,
		"폮폯폱폲폳폵폶폷"
	],
	[
		"bd61",
		"폸폹폺폻폾퐀퐂",
		5,
		"퐉",
		13
	],
	[
		"bd81",
		"퐗",
		5,
		"퐞",
		25,
		"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"
	],
	[
		"be41",
		"퐸",
		7,
		"푁푂푃푅",
		14
	],
	[
		"be61",
		"푔",
		7,
		"푝푞푟푡푢푣푥",
		7,
		"푮푰푱푲"
	],
	[
		"be81",
		"푳",
		4,
		"푺푻푽푾풁풃",
		4,
		"풊풌풎",
		5,
		"풕",
		8,
		"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",
		6,
		"엌엎"
	],
	[
		"bf41",
		"풞",
		10,
		"풪",
		14
	],
	[
		"bf61",
		"풹",
		18,
		"퓍퓎퓏퓑퓒퓓퓕"
	],
	[
		"bf81",
		"퓖",
		5,
		"퓝퓞퓠",
		7,
		"퓩퓪퓫퓭퓮퓯퓱",
		6,
		"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",
		5,
		"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"
	],
	[
		"c041",
		"퓾",
		5,
		"픅픆픇픉픊픋픍",
		6,
		"픖픘",
		5
	],
	[
		"c061",
		"픞",
		25
	],
	[
		"c081",
		"픸픹픺픻픾픿핁핂핃핅",
		6,
		"핎핐핒",
		5,
		"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",
		7,
		"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"
	],
	[
		"c141",
		"핤핦핧핪핬핮",
		5,
		"핶핷핹핺핻핽",
		6,
		"햆햊햋"
	],
	[
		"c161",
		"햌햍햎햏햑",
		19,
		"햦햧"
	],
	[
		"c181",
		"햨",
		31,
		"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"
	],
	[
		"c241",
		"헊헋헍헎헏헑헓",
		4,
		"헚헜헞",
		5,
		"헦헧헩헪헫헭헮"
	],
	[
		"c261",
		"헯",
		4,
		"헶헸헺",
		5,
		"혂혃혅혆혇혉",
		6,
		"혒"
	],
	[
		"c281",
		"혖",
		5,
		"혝혞혟혡혢혣혥",
		7,
		"혮",
		9,
		"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"
	],
	[
		"c341",
		"혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",
		4
	],
	[
		"c361",
		"홢",
		4,
		"홨홪",
		5,
		"홲홳홵",
		11
	],
	[
		"c381",
		"횁횂횄횆",
		5,
		"횎횏횑횒횓횕",
		7,
		"횞횠횢",
		5,
		"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"
	],
	[
		"c441",
		"횫횭횮횯횱",
		7,
		"횺횼",
		7,
		"훆훇훉훊훋"
	],
	[
		"c461",
		"훍훎훏훐훒훓훕훖훘훚",
		5,
		"훡훢훣훥훦훧훩",
		4
	],
	[
		"c481",
		"훮훯훱훲훳훴훶",
		5,
		"훾훿휁휂휃휅",
		11,
		"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"
	],
	[
		"c541",
		"휕휖휗휚휛휝휞휟휡",
		6,
		"휪휬휮",
		5,
		"휶휷휹"
	],
	[
		"c561",
		"휺휻휽",
		6,
		"흅흆흈흊",
		5,
		"흒흓흕흚",
		4
	],
	[
		"c581",
		"흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",
		6,
		"흾흿힀힂",
		5,
		"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"
	],
	[
		"c641",
		"힍힎힏힑",
		6,
		"힚힜힞",
		5
	],
	[
		"c6a1",
		"퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"
	],
	[
		"c7a1",
		"퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"
	],
	[
		"c8a1",
		"혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"
	],
	[
		"caa1",
		"伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"
	],
	[
		"cba1",
		"匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"
	],
	[
		"cca1",
		"瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"
	],
	[
		"cda1",
		"棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"
	],
	[
		"cea1",
		"科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"
	],
	[
		"cfa1",
		"區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"
	],
	[
		"d0a1",
		"鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"
	],
	[
		"d1a1",
		"朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",
		5,
		"那樂",
		4,
		"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"
	],
	[
		"d2a1",
		"納臘蠟衲囊娘廊",
		4,
		"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",
		5,
		"駑魯",
		10,
		"濃籠聾膿農惱牢磊腦賂雷尿壘",
		7,
		"嫩訥杻紐勒",
		5,
		"能菱陵尼泥匿溺多茶"
	],
	[
		"d3a1",
		"丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"
	],
	[
		"d4a1",
		"棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"
	],
	[
		"d5a1",
		"蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"
	],
	[
		"d6a1",
		"煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"
	],
	[
		"d7a1",
		"遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"
	],
	[
		"d8a1",
		"立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"
	],
	[
		"d9a1",
		"蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"
	],
	[
		"daa1",
		"汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"
	],
	[
		"dba1",
		"發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"
	],
	[
		"dca1",
		"碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"
	],
	[
		"dda1",
		"孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"
	],
	[
		"dea1",
		"脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"
	],
	[
		"dfa1",
		"傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"
	],
	[
		"e0a1",
		"胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"
	],
	[
		"e1a1",
		"聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"
	],
	[
		"e2a1",
		"戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"
	],
	[
		"e3a1",
		"嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"
	],
	[
		"e4a1",
		"沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"
	],
	[
		"e5a1",
		"櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"
	],
	[
		"e6a1",
		"旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"
	],
	[
		"e7a1",
		"簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"
	],
	[
		"e8a1",
		"烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"
	],
	[
		"e9a1",
		"窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"
	],
	[
		"eaa1",
		"運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"
	],
	[
		"eba1",
		"濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"
	],
	[
		"eca1",
		"議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"
	],
	[
		"eda1",
		"立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"
	],
	[
		"eea1",
		"障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"
	],
	[
		"efa1",
		"煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"
	],
	[
		"f0a1",
		"靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"
	],
	[
		"f1a1",
		"踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"
	],
	[
		"f2a1",
		"咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"
	],
	[
		"f3a1",
		"鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"
	],
	[
		"f4a1",
		"責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"
	],
	[
		"f5a1",
		"椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"
	],
	[
		"f6a1",
		"贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"
	],
	[
		"f7a1",
		"鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"
	],
	[
		"f8a1",
		"阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"
	],
	[
		"f9a1",
		"品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"
	],
	[
		"faa1",
		"行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"
	],
	[
		"fba1",
		"形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"
	],
	[
		"fca1",
		"禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"
	],
	[
		"fda1",
		"爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"
	]
];

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = [
	[
		"0",
		"\u0000",
		127
	],
	[
		"8ea1",
		"｡",
		62
	],
	[
		"a1a1",
		"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
		9,
		"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"
	],
	[
		"a2a1",
		"◆□■△▲▽▼※〒→←↑↓〓"
	],
	[
		"a2ba",
		"∈∋⊆⊇⊂⊃∪∩"
	],
	[
		"a2ca",
		"∧∨￢⇒⇔∀∃"
	],
	[
		"a2dc",
		"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
	],
	[
		"a2f2",
		"Å‰♯♭♪†‡¶"
	],
	[
		"a2fe",
		"◯"
	],
	[
		"a3b0",
		"０",
		9
	],
	[
		"a3c1",
		"Ａ",
		25
	],
	[
		"a3e1",
		"ａ",
		25
	],
	[
		"a4a1",
		"ぁ",
		82
	],
	[
		"a5a1",
		"ァ",
		85
	],
	[
		"a6a1",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"a6c1",
		"α",
		16,
		"σ",
		6
	],
	[
		"a7a1",
		"А",
		5,
		"ЁЖ",
		25
	],
	[
		"a7d1",
		"а",
		5,
		"ёж",
		25
	],
	[
		"a8a1",
		"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
	],
	[
		"ada1",
		"①",
		19,
		"Ⅰ",
		9
	],
	[
		"adc0",
		"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
	],
	[
		"addf",
		"㍻〝〟№㏍℡㊤",
		4,
		"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
	],
	[
		"b0a1",
		"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
	],
	[
		"b1a1",
		"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"
	],
	[
		"b2a1",
		"押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
	],
	[
		"b3a1",
		"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"
	],
	[
		"b4a1",
		"粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
	],
	[
		"b5a1",
		"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"
	],
	[
		"b6a1",
		"供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
	],
	[
		"b7a1",
		"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"
	],
	[
		"b8a1",
		"検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
	],
	[
		"b9a1",
		"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"
	],
	[
		"baa1",
		"此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
	],
	[
		"bba1",
		"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"
	],
	[
		"bca1",
		"次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
	],
	[
		"bda1",
		"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"
	],
	[
		"bea1",
		"勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
	],
	[
		"bfa1",
		"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"
	],
	[
		"c0a1",
		"澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
	],
	[
		"c1a1",
		"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"
	],
	[
		"c2a1",
		"臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
	],
	[
		"c3a1",
		"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"
	],
	[
		"c4a1",
		"帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
	],
	[
		"c5a1",
		"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"
	],
	[
		"c6a1",
		"董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
	],
	[
		"c7a1",
		"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"
	],
	[
		"c8a1",
		"函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
	],
	[
		"c9a1",
		"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"
	],
	[
		"caa1",
		"福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
	],
	[
		"cba1",
		"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"
	],
	[
		"cca1",
		"漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
	],
	[
		"cda1",
		"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"
	],
	[
		"cea1",
		"痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
	],
	[
		"cfa1",
		"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
	],
	[
		"d0a1",
		"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
	],
	[
		"d1a1",
		"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"
	],
	[
		"d2a1",
		"辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
	],
	[
		"d3a1",
		"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"
	],
	[
		"d4a1",
		"圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
	],
	[
		"d5a1",
		"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"
	],
	[
		"d6a1",
		"屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
	],
	[
		"d7a1",
		"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"
	],
	[
		"d8a1",
		"悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
	],
	[
		"d9a1",
		"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"
	],
	[
		"daa1",
		"據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
	],
	[
		"dba1",
		"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"
	],
	[
		"dca1",
		"棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
	],
	[
		"dda1",
		"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"
	],
	[
		"dea1",
		"沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
	],
	[
		"dfa1",
		"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"
	],
	[
		"e0a1",
		"燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
	],
	[
		"e1a1",
		"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"
	],
	[
		"e2a1",
		"癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
	],
	[
		"e3a1",
		"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"
	],
	[
		"e4a1",
		"筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
	],
	[
		"e5a1",
		"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"
	],
	[
		"e6a1",
		"罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
	],
	[
		"e7a1",
		"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"
	],
	[
		"e8a1",
		"茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
	],
	[
		"e9a1",
		"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"
	],
	[
		"eaa1",
		"蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
	],
	[
		"eba1",
		"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"
	],
	[
		"eca1",
		"譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
	],
	[
		"eda1",
		"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"
	],
	[
		"eea1",
		"遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
	],
	[
		"efa1",
		"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"
	],
	[
		"f0a1",
		"陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
	],
	[
		"f1a1",
		"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"
	],
	[
		"f2a1",
		"髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
	],
	[
		"f3a1",
		"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"
	],
	[
		"f4a1",
		"堯槇遙瑤凜熙"
	],
	[
		"f9a1",
		"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"
	],
	[
		"faa1",
		"忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
	],
	[
		"fba1",
		"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"
	],
	[
		"fca1",
		"釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
	],
	[
		"fcf1",
		"ⅰ",
		9,
		"￢￤＇＂"
	],
	[
		"8fa2af",
		"˘ˇ¸˙˝¯˛˚～΄΅"
	],
	[
		"8fa2c2",
		"¡¦¿"
	],
	[
		"8fa2eb",
		"ºª©®™¤№"
	],
	[
		"8fa6e1",
		"ΆΈΉΊΪ"
	],
	[
		"8fa6e7",
		"Ό"
	],
	[
		"8fa6e9",
		"ΎΫ"
	],
	[
		"8fa6ec",
		"Ώ"
	],
	[
		"8fa6f1",
		"άέήίϊΐόςύϋΰώ"
	],
	[
		"8fa7c2",
		"Ђ",
		10,
		"ЎЏ"
	],
	[
		"8fa7f2",
		"ђ",
		10,
		"ўџ"
	],
	[
		"8fa9a1",
		"ÆĐ"
	],
	[
		"8fa9a4",
		"Ħ"
	],
	[
		"8fa9a6",
		"Ĳ"
	],
	[
		"8fa9a8",
		"ŁĿ"
	],
	[
		"8fa9ab",
		"ŊØŒ"
	],
	[
		"8fa9af",
		"ŦÞ"
	],
	[
		"8fa9c1",
		"æđðħıĳĸłŀŉŋøœßŧþ"
	],
	[
		"8faaa1",
		"ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"
	],
	[
		"8faaba",
		"ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"
	],
	[
		"8faba1",
		"áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"
	],
	[
		"8fabbd",
		"ġĥíìïîǐ"
	],
	[
		"8fabc5",
		"īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"
	],
	[
		"8fb0a1",
		"丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"
	],
	[
		"8fb1a1",
		"侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"
	],
	[
		"8fb2a1",
		"傒傓傔傖傛傜傞",
		4,
		"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"
	],
	[
		"8fb3a1",
		"凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"
	],
	[
		"8fb4a1",
		"匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"
	],
	[
		"8fb5a1",
		"咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"
	],
	[
		"8fb6a1",
		"嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",
		5,
		"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",
		4,
		"囱囫园"
	],
	[
		"8fb7a1",
		"囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",
		4,
		"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"
	],
	[
		"8fb8a1",
		"堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"
	],
	[
		"8fb9a1",
		"奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"
	],
	[
		"8fbaa1",
		"嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",
		4,
		"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"
	],
	[
		"8fbba1",
		"屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"
	],
	[
		"8fbca1",
		"巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",
		4,
		"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"
	],
	[
		"8fbda1",
		"彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",
		4,
		"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"
	],
	[
		"8fbea1",
		"悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",
		4,
		"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"
	],
	[
		"8fbfa1",
		"懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"
	],
	[
		"8fc0a1",
		"捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"
	],
	[
		"8fc1a1",
		"擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"
	],
	[
		"8fc2a1",
		"昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"
	],
	[
		"8fc3a1",
		"杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",
		4,
		"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"
	],
	[
		"8fc4a1",
		"棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"
	],
	[
		"8fc5a1",
		"樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"
	],
	[
		"8fc6a1",
		"歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"
	],
	[
		"8fc7a1",
		"泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"
	],
	[
		"8fc8a1",
		"湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"
	],
	[
		"8fc9a1",
		"濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",
		4,
		"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",
		4,
		"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"
	],
	[
		"8fcaa1",
		"煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"
	],
	[
		"8fcba1",
		"狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"
	],
	[
		"8fcca1",
		"珿琀琁琄琇琊琑琚琛琤琦琨",
		9,
		"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"
	],
	[
		"8fcda1",
		"甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",
		5,
		"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"
	],
	[
		"8fcea1",
		"瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",
		6,
		"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"
	],
	[
		"8fcfa1",
		"睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"
	],
	[
		"8fd0a1",
		"碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"
	],
	[
		"8fd1a1",
		"秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"
	],
	[
		"8fd2a1",
		"笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",
		5
	],
	[
		"8fd3a1",
		"籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"
	],
	[
		"8fd4a1",
		"綞綦綧綪綳綶綷綹緂",
		4,
		"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"
	],
	[
		"8fd5a1",
		"罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"
	],
	[
		"8fd6a1",
		"胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"
	],
	[
		"8fd7a1",
		"艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"
	],
	[
		"8fd8a1",
		"荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"
	],
	[
		"8fd9a1",
		"蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",
		4,
		"蕖蕙蕜",
		6,
		"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"
	],
	[
		"8fdaa1",
		"藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",
		4,
		"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"
	],
	[
		"8fdba1",
		"蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",
		6,
		"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"
	],
	[
		"8fdca1",
		"蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",
		4,
		"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"
	],
	[
		"8fdda1",
		"襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",
		4,
		"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"
	],
	[
		"8fdea1",
		"誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",
		4,
		"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"
	],
	[
		"8fdfa1",
		"貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"
	],
	[
		"8fe0a1",
		"踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"
	],
	[
		"8fe1a1",
		"轃轇轏轑",
		4,
		"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"
	],
	[
		"8fe2a1",
		"郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"
	],
	[
		"8fe3a1",
		"釂釃釅釓釔釗釙釚釞釤釥釩釪釬",
		5,
		"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",
		4,
		"鉻鉼鉽鉿銈銉銊銍銎銒銗"
	],
	[
		"8fe4a1",
		"銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",
		4,
		"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"
	],
	[
		"8fe5a1",
		"鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",
		4,
		"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"
	],
	[
		"8fe6a1",
		"镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"
	],
	[
		"8fe7a1",
		"霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"
	],
	[
		"8fe8a1",
		"頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",
		4,
		"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"
	],
	[
		"8fe9a1",
		"馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",
		4
	],
	[
		"8feaa1",
		"鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",
		4,
		"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"
	],
	[
		"8feba1",
		"鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",
		4,
		"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"
	],
	[
		"8feca1",
		"鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"
	],
	[
		"8feda1",
		"黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",
		4,
		"齓齕齖齗齘齚齝齞齨齩齭",
		4,
		"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"
	]
];

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
	"uChars": [
		128,
		165,
		169,
		178,
		184,
		216,
		226,
		235,
		238,
		244,
		248,
		251,
		253,
		258,
		276,
		284,
		300,
		325,
		329,
		334,
		364,
		463,
		465,
		467,
		469,
		471,
		473,
		475,
		477,
		506,
		594,
		610,
		712,
		716,
		730,
		930,
		938,
		962,
		970,
		1026,
		1104,
		1106,
		8209,
		8215,
		8218,
		8222,
		8231,
		8241,
		8244,
		8246,
		8252,
		8365,
		8452,
		8454,
		8458,
		8471,
		8482,
		8556,
		8570,
		8596,
		8602,
		8713,
		8720,
		8722,
		8726,
		8731,
		8737,
		8740,
		8742,
		8748,
		8751,
		8760,
		8766,
		8777,
		8781,
		8787,
		8802,
		8808,
		8816,
		8854,
		8858,
		8870,
		8896,
		8979,
		9322,
		9372,
		9548,
		9588,
		9616,
		9622,
		9634,
		9652,
		9662,
		9672,
		9676,
		9680,
		9702,
		9735,
		9738,
		9793,
		9795,
		11906,
		11909,
		11913,
		11917,
		11928,
		11944,
		11947,
		11951,
		11956,
		11960,
		11964,
		11979,
		12284,
		12292,
		12312,
		12319,
		12330,
		12351,
		12436,
		12447,
		12535,
		12543,
		12586,
		12842,
		12850,
		12964,
		13200,
		13215,
		13218,
		13253,
		13263,
		13267,
		13270,
		13384,
		13428,
		13727,
		13839,
		13851,
		14617,
		14703,
		14801,
		14816,
		14964,
		15183,
		15471,
		15585,
		16471,
		16736,
		17208,
		17325,
		17330,
		17374,
		17623,
		17997,
		18018,
		18212,
		18218,
		18301,
		18318,
		18760,
		18811,
		18814,
		18820,
		18823,
		18844,
		18848,
		18872,
		19576,
		19620,
		19738,
		19887,
		40870,
		59244,
		59336,
		59367,
		59413,
		59417,
		59423,
		59431,
		59437,
		59443,
		59452,
		59460,
		59478,
		59493,
		63789,
		63866,
		63894,
		63976,
		63986,
		64016,
		64018,
		64021,
		64025,
		64034,
		64037,
		64042,
		65074,
		65093,
		65107,
		65112,
		65127,
		65132,
		65375,
		65510,
		65536
	],
	"gbChars": [
		0,
		36,
		38,
		45,
		50,
		81,
		89,
		95,
		96,
		100,
		103,
		104,
		105,
		109,
		126,
		133,
		148,
		172,
		175,
		179,
		208,
		306,
		307,
		308,
		309,
		310,
		311,
		312,
		313,
		341,
		428,
		443,
		544,
		545,
		558,
		741,
		742,
		749,
		750,
		805,
		819,
		820,
		7922,
		7924,
		7925,
		7927,
		7934,
		7943,
		7944,
		7945,
		7950,
		8062,
		8148,
		8149,
		8152,
		8164,
		8174,
		8236,
		8240,
		8262,
		8264,
		8374,
		8380,
		8381,
		8384,
		8388,
		8390,
		8392,
		8393,
		8394,
		8396,
		8401,
		8406,
		8416,
		8419,
		8424,
		8437,
		8439,
		8445,
		8482,
		8485,
		8496,
		8521,
		8603,
		8936,
		8946,
		9046,
		9050,
		9063,
		9066,
		9076,
		9092,
		9100,
		9108,
		9111,
		9113,
		9131,
		9162,
		9164,
		9218,
		9219,
		11329,
		11331,
		11334,
		11336,
		11346,
		11361,
		11363,
		11366,
		11370,
		11372,
		11375,
		11389,
		11682,
		11686,
		11687,
		11692,
		11694,
		11714,
		11716,
		11723,
		11725,
		11730,
		11736,
		11982,
		11989,
		12102,
		12336,
		12348,
		12350,
		12384,
		12393,
		12395,
		12397,
		12510,
		12553,
		12851,
		12962,
		12973,
		13738,
		13823,
		13919,
		13933,
		14080,
		14298,
		14585,
		14698,
		15583,
		15847,
		16318,
		16434,
		16438,
		16481,
		16729,
		17102,
		17122,
		17315,
		17320,
		17402,
		17418,
		17859,
		17909,
		17911,
		17915,
		17916,
		17936,
		17939,
		17961,
		18664,
		18703,
		18814,
		18962,
		19043,
		33469,
		33470,
		33471,
		33484,
		33485,
		33490,
		33497,
		33501,
		33505,
		33513,
		33520,
		33536,
		33550,
		37845,
		37921,
		37948,
		38029,
		38038,
		38064,
		38065,
		38066,
		38069,
		38075,
		38076,
		38078,
		39108,
		39109,
		39113,
		39114,
		39115,
		39116,
		39265,
		39394,
		189000
	]
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = [
	[
		"0",
		"\u0000",
		128
	],
	[
		"a1",
		"｡",
		62
	],
	[
		"8140",
		"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
		9,
		"＋－±×"
	],
	[
		"8180",
		"÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"
	],
	[
		"81b8",
		"∈∋⊆⊇⊂⊃∪∩"
	],
	[
		"81c8",
		"∧∨￢⇒⇔∀∃"
	],
	[
		"81da",
		"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
	],
	[
		"81f0",
		"Å‰♯♭♪†‡¶"
	],
	[
		"81fc",
		"◯"
	],
	[
		"824f",
		"０",
		9
	],
	[
		"8260",
		"Ａ",
		25
	],
	[
		"8281",
		"ａ",
		25
	],
	[
		"829f",
		"ぁ",
		82
	],
	[
		"8340",
		"ァ",
		62
	],
	[
		"8380",
		"ム",
		22
	],
	[
		"839f",
		"Α",
		16,
		"Σ",
		6
	],
	[
		"83bf",
		"α",
		16,
		"σ",
		6
	],
	[
		"8440",
		"А",
		5,
		"ЁЖ",
		25
	],
	[
		"8470",
		"а",
		5,
		"ёж",
		7
	],
	[
		"8480",
		"о",
		17
	],
	[
		"849f",
		"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
	],
	[
		"8740",
		"①",
		19,
		"Ⅰ",
		9
	],
	[
		"875f",
		"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
	],
	[
		"877e",
		"㍻"
	],
	[
		"8780",
		"〝〟№㏍℡㊤",
		4,
		"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
	],
	[
		"889f",
		"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
	],
	[
		"8940",
		"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"
	],
	[
		"8980",
		"園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
	],
	[
		"8a40",
		"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"
	],
	[
		"8a80",
		"橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
	],
	[
		"8b40",
		"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"
	],
	[
		"8b80",
		"朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
	],
	[
		"8c40",
		"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"
	],
	[
		"8c80",
		"劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
	],
	[
		"8d40",
		"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"
	],
	[
		"8d80",
		"項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
	],
	[
		"8e40",
		"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"
	],
	[
		"8e80",
		"死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
	],
	[
		"8f40",
		"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"
	],
	[
		"8f80",
		"準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
	],
	[
		"9040",
		"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"
	],
	[
		"9080",
		"逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
	],
	[
		"9140",
		"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"
	],
	[
		"9180",
		"操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
	],
	[
		"9240",
		"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"
	],
	[
		"9280",
		"逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
	],
	[
		"9340",
		"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"
	],
	[
		"9380",
		"凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
	],
	[
		"9440",
		"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"
	],
	[
		"9480",
		"楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
	],
	[
		"9540",
		"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"
	],
	[
		"9580",
		"斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
	],
	[
		"9640",
		"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"
	],
	[
		"9680",
		"摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
	],
	[
		"9740",
		"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"
	],
	[
		"9780",
		"沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
	],
	[
		"9840",
		"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
	],
	[
		"989f",
		"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
	],
	[
		"9940",
		"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"
	],
	[
		"9980",
		"凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
	],
	[
		"9a40",
		"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"
	],
	[
		"9a80",
		"噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
	],
	[
		"9b40",
		"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"
	],
	[
		"9b80",
		"它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
	],
	[
		"9c40",
		"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"
	],
	[
		"9c80",
		"怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
	],
	[
		"9d40",
		"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"
	],
	[
		"9d80",
		"捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
	],
	[
		"9e40",
		"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"
	],
	[
		"9e80",
		"梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
	],
	[
		"9f40",
		"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"
	],
	[
		"9f80",
		"麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
	],
	[
		"e040",
		"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"
	],
	[
		"e080",
		"烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
	],
	[
		"e140",
		"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"
	],
	[
		"e180",
		"痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
	],
	[
		"e240",
		"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"
	],
	[
		"e280",
		"窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
	],
	[
		"e340",
		"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"
	],
	[
		"e380",
		"縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
	],
	[
		"e440",
		"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"
	],
	[
		"e480",
		"艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
	],
	[
		"e540",
		"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"
	],
	[
		"e580",
		"蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
	],
	[
		"e640",
		"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"
	],
	[
		"e680",
		"諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
	],
	[
		"e740",
		"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"
	],
	[
		"e780",
		"轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
	],
	[
		"e840",
		"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"
	],
	[
		"e880",
		"閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
	],
	[
		"e940",
		"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"
	],
	[
		"e980",
		"騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
	],
	[
		"ea40",
		"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"
	],
	[
		"ea80",
		"黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"
	],
	[
		"ed40",
		"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"
	],
	[
		"ed80",
		"塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
	],
	[
		"ee40",
		"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"
	],
	[
		"ee80",
		"蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
	],
	[
		"eeef",
		"ⅰ",
		9,
		"￢￤＇＂"
	],
	[
		"f040",
		"",
		62
	],
	[
		"f080",
		"",
		124
	],
	[
		"f140",
		"",
		62
	],
	[
		"f180",
		"",
		124
	],
	[
		"f240",
		"",
		62
	],
	[
		"f280",
		"",
		124
	],
	[
		"f340",
		"",
		62
	],
	[
		"f380",
		"",
		124
	],
	[
		"f440",
		"",
		62
	],
	[
		"f480",
		"",
		124
	],
	[
		"f540",
		"",
		62
	],
	[
		"f580",
		"",
		124
	],
	[
		"f640",
		"",
		62
	],
	[
		"f680",
		"",
		124
	],
	[
		"f740",
		"",
		62
	],
	[
		"f780",
		"",
		124
	],
	[
		"f840",
		"",
		62
	],
	[
		"f880",
		"",
		124
	],
	[
		"f940",
		""
	],
	[
		"fa40",
		"ⅰ",
		9,
		"Ⅰ",
		9,
		"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"
	],
	[
		"fa80",
		"兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"
	],
	[
		"fb40",
		"涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"
	],
	[
		"fb80",
		"祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"
	],
	[
		"fc40",
		"髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
	]
];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(3).Buffer;

// Note: UTF16-LE (or UCS2) codec is Node.js native. See encodings/internal.js

// == UTF16-BE codec. ==========================================================

exports.utf16be = Utf16BECodec;
function Utf16BECodec() {
}

Utf16BECodec.prototype.encoder = Utf16BEEncoder;
Utf16BECodec.prototype.decoder = Utf16BEDecoder;
Utf16BECodec.prototype.bomAware = true;


// -- Encoding

function Utf16BEEncoder() {
}

Utf16BEEncoder.prototype.write = function(str) {
    var buf = new Buffer(str, 'ucs2');
    for (var i = 0; i < buf.length; i += 2) {
        var tmp = buf[i]; buf[i] = buf[i+1]; buf[i+1] = tmp;
    }
    return buf;
}

Utf16BEEncoder.prototype.end = function() {
}


// -- Decoding

function Utf16BEDecoder() {
    this.overflowByte = -1;
}

Utf16BEDecoder.prototype.write = function(buf) {
    if (buf.length == 0)
        return '';

    var buf2 = new Buffer(buf.length + 1),
        i = 0, j = 0;

    if (this.overflowByte !== -1) {
        buf2[0] = buf[0];
        buf2[1] = this.overflowByte;
        i = 1; j = 2;
    }

    for (; i < buf.length-1; i += 2, j+= 2) {
        buf2[j] = buf[i+1];
        buf2[j+1] = buf[i];
    }

    this.overflowByte = (i == buf.length-1) ? buf[buf.length-1] : -1;

    return buf2.slice(0, j).toString('ucs2');
}

Utf16BEDecoder.prototype.end = function() {
}


// == UTF-16 codec =============================================================
// Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
// Defaults to UTF-16LE, as it's prevalent and default in Node.
// http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
// Decoder default can be changed: iconv.decode(buf, 'utf16', {defaultEncoding: 'utf-16be'});

// Encoder uses UTF-16LE and prepends BOM (which can be overridden with addBOM: false).

exports.utf16 = Utf16Codec;
function Utf16Codec(codecOptions, iconv) {
    this.iconv = iconv;
}

Utf16Codec.prototype.encoder = Utf16Encoder;
Utf16Codec.prototype.decoder = Utf16Decoder;


// -- Encoding (pass-through)

function Utf16Encoder(options, codec) {
    options = options || {};
    if (options.addBOM === undefined)
        options.addBOM = true;
    this.encoder = codec.iconv.getEncoder('utf-16le', options);
}

Utf16Encoder.prototype.write = function(str) {
    return this.encoder.write(str);
}

Utf16Encoder.prototype.end = function() {
    return this.encoder.end();
}


// -- Decoding

function Utf16Decoder(options, codec) {
    this.decoder = null;
    this.initialBytes = [];
    this.initialBytesLen = 0;

    this.options = options || {};
    this.iconv = codec.iconv;
}

Utf16Decoder.prototype.write = function(buf) {
    if (!this.decoder) {
        // Codec is not chosen yet. Accumulate initial bytes.
        this.initialBytes.push(buf);
        this.initialBytesLen += buf.length;
        
        if (this.initialBytesLen < 16) // We need more bytes to use space heuristic (see below)
            return '';

        // We have enough bytes -> detect endianness.
        var buf = Buffer.concat(this.initialBytes),
            encoding = detectEncoding(buf, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        this.initialBytes.length = this.initialBytesLen = 0;
    }

    return this.decoder.write(buf);
}

Utf16Decoder.prototype.end = function() {
    if (!this.decoder) {
        var buf = Buffer.concat(this.initialBytes),
            encoding = detectEncoding(buf, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);

        var res = this.decoder.write(buf),
            trail = this.decoder.end();

        return trail ? (res + trail) : res;
    }
    return this.decoder.end();
}

function detectEncoding(buf, defaultEncoding) {
    var enc = defaultEncoding || 'utf-16le';

    if (buf.length >= 2) {
        // Check BOM.
        if (buf[0] == 0xFE && buf[1] == 0xFF) // UTF-16BE BOM
            enc = 'utf-16be';
        else if (buf[0] == 0xFF && buf[1] == 0xFE) // UTF-16LE BOM
            enc = 'utf-16le';
        else {
            // No BOM found. Try to deduce encoding from initial content.
            // Most of the time, the content has ASCII chars (U+00**), but the opposite (U+**00) is uncommon.
            // So, we count ASCII as if it was LE or BE, and decide from that.
            var asciiCharsLE = 0, asciiCharsBE = 0, // Counts of chars in both positions
                _len = Math.min(buf.length - (buf.length % 2), 64); // Len is always even.

            for (var i = 0; i < _len; i += 2) {
                if (buf[i] === 0 && buf[i+1] !== 0) asciiCharsBE++;
                if (buf[i] !== 0 && buf[i+1] === 0) asciiCharsLE++;
            }

            if (asciiCharsBE > asciiCharsLE)
                enc = 'utf-16be';
            else if (asciiCharsBE < asciiCharsLE)
                enc = 'utf-16le';
        }
    }

    return enc;
}




/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(3).Buffer;

// UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
// See also below a UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3

exports.utf7 = Utf7Codec;
exports.unicode11utf7 = 'utf7'; // Alias UNICODE-1-1-UTF-7
function Utf7Codec(codecOptions, iconv) {
    this.iconv = iconv;
};

Utf7Codec.prototype.encoder = Utf7Encoder;
Utf7Codec.prototype.decoder = Utf7Decoder;
Utf7Codec.prototype.bomAware = true;


// -- Encoding

var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

function Utf7Encoder(options, codec) {
    this.iconv = codec.iconv;
}

Utf7Encoder.prototype.write = function(str) {
    // Naive implementation.
    // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
    return new Buffer(str.replace(nonDirectChars, function(chunk) {
        return "+" + (chunk === '+' ? '' : 
            this.iconv.encode(chunk, 'utf16-be').toString('base64').replace(/=+$/, '')) 
            + "-";
    }.bind(this)));
}

Utf7Encoder.prototype.end = function() {
}


// -- Decoding

function Utf7Decoder(options, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = '';
}

var base64Regex = /[A-Za-z0-9\/+]/;
var base64Chars = [];
for (var i = 0; i < 256; i++)
    base64Chars[i] = base64Regex.test(String.fromCharCode(i));

var plusChar = '+'.charCodeAt(0), 
    minusChar = '-'.charCodeAt(0),
    andChar = '&'.charCodeAt(0);

Utf7Decoder.prototype.write = function(buf) {
    var res = "", lastI = 0,
        inBase64 = this.inBase64,
        base64Accum = this.base64Accum;

    // The decoder is more involved as we must handle chunks in stream.

    for (var i = 0; i < buf.length; i++) {
        if (!inBase64) { // We're in direct mode.
            // Write direct chars until '+'
            if (buf[i] == plusChar) {
                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
                lastI = i+1;
                inBase64 = true;
            }
        } else { // We decode base64.
            if (!base64Chars[buf[i]]) { // Base64 ended.
                if (i == lastI && buf[i] == minusChar) {// "+-" -> "+"
                    res += "+";
                } else {
                    var b64str = base64Accum + buf.slice(lastI, i).toString();
                    res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
                }

                if (buf[i] != minusChar) // Minus is absorbed after base64.
                    i--;

                lastI = i+1;
                inBase64 = false;
                base64Accum = '';
            }
        }
    }

    if (!inBase64) {
        res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
    } else {
        var b64str = base64Accum + buf.slice(lastI).toString();

        var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
        b64str = b64str.slice(0, canBeDecoded);

        res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
    }

    this.inBase64 = inBase64;
    this.base64Accum = base64Accum;

    return res;
}

Utf7Decoder.prototype.end = function() {
    var res = "";
    if (this.inBase64 && this.base64Accum.length > 0)
        res = this.iconv.decode(new Buffer(this.base64Accum, 'base64'), "utf16-be");

    this.inBase64 = false;
    this.base64Accum = '';
    return res;
}


// UTF-7-IMAP codec.
// RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
// Differences:
//  * Base64 part is started by "&" instead of "+"
//  * Direct characters are 0x20-0x7E, except "&" (0x26)
//  * In Base64, "," is used instead of "/"
//  * Base64 must not be used to represent direct characters.
//  * No implicit shift back from Base64 (should always end with '-')
//  * String must end in non-shifted position.
//  * "-&" while in base64 is not allowed.


exports.utf7imap = Utf7IMAPCodec;
function Utf7IMAPCodec(codecOptions, iconv) {
    this.iconv = iconv;
};

Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
Utf7IMAPCodec.prototype.bomAware = true;


// -- Encoding

function Utf7IMAPEncoder(options, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = new Buffer(6);
    this.base64AccumIdx = 0;
}

Utf7IMAPEncoder.prototype.write = function(str) {
    var inBase64 = this.inBase64,
        base64Accum = this.base64Accum,
        base64AccumIdx = this.base64AccumIdx,
        buf = new Buffer(str.length*5 + 10), bufIdx = 0;

    for (var i = 0; i < str.length; i++) {
        var uChar = str.charCodeAt(i);
        if (0x20 <= uChar && uChar <= 0x7E) { // Direct character or '&'.
            if (inBase64) {
                if (base64AccumIdx > 0) {
                    bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
                    base64AccumIdx = 0;
                }

                buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
                inBase64 = false;
            }

            if (!inBase64) {
                buf[bufIdx++] = uChar; // Write direct character

                if (uChar === andChar)  // Ampersand -> '&-'
                    buf[bufIdx++] = minusChar;
            }

        } else { // Non-direct character
            if (!inBase64) {
                buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.
                inBase64 = true;
            }
            if (inBase64) {
                base64Accum[base64AccumIdx++] = uChar >> 8;
                base64Accum[base64AccumIdx++] = uChar & 0xFF;

                if (base64AccumIdx == base64Accum.length) {
                    bufIdx += buf.write(base64Accum.toString('base64').replace(/\//g, ','), bufIdx);
                    base64AccumIdx = 0;
                }
            }
        }
    }

    this.inBase64 = inBase64;
    this.base64AccumIdx = base64AccumIdx;

    return buf.slice(0, bufIdx);
}

Utf7IMAPEncoder.prototype.end = function() {
    var buf = new Buffer(10), bufIdx = 0;
    if (this.inBase64) {
        if (this.base64AccumIdx > 0) {
            bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
            this.base64AccumIdx = 0;
        }

        buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
        this.inBase64 = false;
    }

    return buf.slice(0, bufIdx);
}


// -- Decoding

function Utf7IMAPDecoder(options, codec) {
    this.iconv = codec.iconv;
    this.inBase64 = false;
    this.base64Accum = '';
}

var base64IMAPChars = base64Chars.slice();
base64IMAPChars[','.charCodeAt(0)] = true;

Utf7IMAPDecoder.prototype.write = function(buf) {
    var res = "", lastI = 0,
        inBase64 = this.inBase64,
        base64Accum = this.base64Accum;

    // The decoder is more involved as we must handle chunks in stream.
    // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).

    for (var i = 0; i < buf.length; i++) {
        if (!inBase64) { // We're in direct mode.
            // Write direct chars until '&'
            if (buf[i] == andChar) {
                res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
                lastI = i+1;
                inBase64 = true;
            }
        } else { // We decode base64.
            if (!base64IMAPChars[buf[i]]) { // Base64 ended.
                if (i == lastI && buf[i] == minusChar) { // "&-" -> "&"
                    res += "&";
                } else {
                    var b64str = base64Accum + buf.slice(lastI, i).toString().replace(/,/g, '/');
                    res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
                }

                if (buf[i] != minusChar) // Minus may be absorbed after base64.
                    i--;

                lastI = i+1;
                inBase64 = false;
                base64Accum = '';
            }
        }
    }

    if (!inBase64) {
        res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
    } else {
        var b64str = base64Accum + buf.slice(lastI).toString().replace(/,/g, '/');

        var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
        base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
        b64str = b64str.slice(0, canBeDecoded);

        res += this.iconv.decode(new Buffer(b64str, 'base64'), "utf16-be");
    }

    this.inBase64 = inBase64;
    this.base64Accum = base64Accum;

    return res;
}

Utf7IMAPDecoder.prototype.end = function() {
    var res = "";
    if (this.inBase64 && this.base64Accum.length > 0)
        res = this.iconv.decode(new Buffer(this.base64Accum, 'base64'), "utf16-be");

    this.inBase64 = false;
    this.base64Accum = '';
    return res;
}




/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BOMChar = '\uFEFF';

exports.PrependBOM = PrependBOMWrapper
function PrependBOMWrapper(encoder, options) {
    this.encoder = encoder;
    this.addBOM = true;
}

PrependBOMWrapper.prototype.write = function(str) {
    if (this.addBOM) {
        str = BOMChar + str;
        this.addBOM = false;
    }

    return this.encoder.write(str);
}

PrependBOMWrapper.prototype.end = function() {
    return this.encoder.end();
}


//------------------------------------------------------------------------------

exports.StripBOM = StripBOMWrapper;
function StripBOMWrapper(decoder, options) {
    this.decoder = decoder;
    this.pass = false;
    this.options = options || {};
}

StripBOMWrapper.prototype.write = function(buf) {
    var res = this.decoder.write(buf);
    if (this.pass || !res)
        return res;

    if (res[0] === BOMChar) {
        res = res.slice(1);
        if (typeof this.options.stripBOM === 'function')
            this.options.stripBOM();
    }

    this.pass = true;
    return res;
}

StripBOMWrapper.prototype.end = function() {
    return this.decoder.end();
}



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(3).Buffer;

// == Extend Node primitives to use iconv-lite =================================

module.exports = function (iconv) {
    var original = undefined; // Place to keep original methods.

    // Node authors rewrote Buffer internals to make it compatible with
    // Uint8Array and we cannot patch key functions since then.
    iconv.supportsNodeEncodingsExtension = !(new Buffer(0) instanceof Uint8Array);

    iconv.extendNodeEncodings = function extendNodeEncodings() {
        if (original) return;
        original = {};

        if (!iconv.supportsNodeEncodingsExtension) {
            console.error("ACTION NEEDED: require('iconv-lite').extendNodeEncodings() is not supported in your version of Node");
            console.error("See more info at https://github.com/ashtuchkin/iconv-lite/wiki/Node-v4-compatibility");
            return;
        }

        var nodeNativeEncodings = {
            'hex': true, 'utf8': true, 'utf-8': true, 'ascii': true, 'binary': true, 
            'base64': true, 'ucs2': true, 'ucs-2': true, 'utf16le': true, 'utf-16le': true,
        };

        Buffer.isNativeEncoding = function(enc) {
            return enc && nodeNativeEncodings[enc.toLowerCase()];
        }

        // -- SlowBuffer -----------------------------------------------------------
        var SlowBuffer = __webpack_require__(3).SlowBuffer;

        original.SlowBufferToString = SlowBuffer.prototype.toString;
        SlowBuffer.prototype.toString = function(encoding, start, end) {
            encoding = String(encoding || 'utf8').toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
                return original.SlowBufferToString.call(this, encoding, start, end);

            // Otherwise, use our decoding method.
            if (typeof start == 'undefined') start = 0;
            if (typeof end == 'undefined') end = this.length;
            return iconv.decode(this.slice(start, end), encoding);
        }

        original.SlowBufferWrite = SlowBuffer.prototype.write;
        SlowBuffer.prototype.write = function(string, offset, length, encoding) {
            // Support both (string, offset, length, encoding)
            // and the legacy (string, encoding, offset, length)
            if (isFinite(offset)) {
                if (!isFinite(length)) {
                    encoding = length;
                    length = undefined;
                }
            } else {  // legacy
                var swap = encoding;
                encoding = offset;
                offset = length;
                length = swap;
            }

            offset = +offset || 0;
            var remaining = this.length - offset;
            if (!length) {
                length = remaining;
            } else {
                length = +length;
                if (length > remaining) {
                    length = remaining;
                }
            }
            encoding = String(encoding || 'utf8').toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
                return original.SlowBufferWrite.call(this, string, offset, length, encoding);

            if (string.length > 0 && (length < 0 || offset < 0))
                throw new RangeError('attempt to write beyond buffer bounds');

            // Otherwise, use our encoding method.
            var buf = iconv.encode(string, encoding);
            if (buf.length < length) length = buf.length;
            buf.copy(this, offset, 0, length);
            return length;
        }

        // -- Buffer ---------------------------------------------------------------

        original.BufferIsEncoding = Buffer.isEncoding;
        Buffer.isEncoding = function(encoding) {
            return Buffer.isNativeEncoding(encoding) || iconv.encodingExists(encoding);
        }

        original.BufferByteLength = Buffer.byteLength;
        Buffer.byteLength = SlowBuffer.byteLength = function(str, encoding) {
            encoding = String(encoding || 'utf8').toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
                return original.BufferByteLength.call(this, str, encoding);

            // Slow, I know, but we don't have a better way yet.
            return iconv.encode(str, encoding).length;
        }

        original.BufferToString = Buffer.prototype.toString;
        Buffer.prototype.toString = function(encoding, start, end) {
            encoding = String(encoding || 'utf8').toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
                return original.BufferToString.call(this, encoding, start, end);

            // Otherwise, use our decoding method.
            if (typeof start == 'undefined') start = 0;
            if (typeof end == 'undefined') end = this.length;
            return iconv.decode(this.slice(start, end), encoding);
        }

        original.BufferWrite = Buffer.prototype.write;
        Buffer.prototype.write = function(string, offset, length, encoding) {
            var _offset = offset, _length = length, _encoding = encoding;
            // Support both (string, offset, length, encoding)
            // and the legacy (string, encoding, offset, length)
            if (isFinite(offset)) {
                if (!isFinite(length)) {
                    encoding = length;
                    length = undefined;
                }
            } else {  // legacy
                var swap = encoding;
                encoding = offset;
                offset = length;
                length = swap;
            }

            encoding = String(encoding || 'utf8').toLowerCase();

            // Use native conversion when possible
            if (Buffer.isNativeEncoding(encoding))
                return original.BufferWrite.call(this, string, _offset, _length, _encoding);

            offset = +offset || 0;
            var remaining = this.length - offset;
            if (!length) {
                length = remaining;
            } else {
                length = +length;
                if (length > remaining) {
                    length = remaining;
                }
            }

            if (string.length > 0 && (length < 0 || offset < 0))
                throw new RangeError('attempt to write beyond buffer bounds');

            // Otherwise, use our encoding method.
            var buf = iconv.encode(string, encoding);
            if (buf.length < length) length = buf.length;
            buf.copy(this, offset, 0, length);
            return length;

            // TODO: Set _charsWritten.
        }


        // -- Readable -------------------------------------------------------------
        if (iconv.supportsStreams) {
            var Readable = __webpack_require__(4).Readable;

            original.ReadableSetEncoding = Readable.prototype.setEncoding;
            Readable.prototype.setEncoding = function setEncoding(enc, options) {
                // Use our own decoder, it has the same interface.
                // We cannot use original function as it doesn't handle BOM-s.
                this._readableState.decoder = iconv.getDecoder(enc, options);
                this._readableState.encoding = enc;
            }

            Readable.prototype.collect = iconv._collect;
        }
    }

    // Remove iconv-lite Node primitive extensions.
    iconv.undoExtendNodeEncodings = function undoExtendNodeEncodings() {
        if (!iconv.supportsNodeEncodingsExtension)
            return;
        if (!original)
            throw new Error("require('iconv-lite').undoExtendNodeEncodings(): Nothing to undo; extendNodeEncodings() is not called.")

        delete Buffer.isNativeEncoding;

        var SlowBuffer = __webpack_require__(3).SlowBuffer;

        SlowBuffer.prototype.toString = original.SlowBufferToString;
        SlowBuffer.prototype.write = original.SlowBufferWrite;

        Buffer.isEncoding = original.BufferIsEncoding;
        Buffer.byteLength = original.BufferByteLength;
        Buffer.prototype.toString = original.BufferToString;
        Buffer.prototype.write = original.BufferWrite;

        if (iconv.supportsStreams) {
            var Readable = __webpack_require__(4).Readable;

            Readable.prototype.setEncoding = original.ReadableSetEncoding;
            delete Readable.prototype.collect;
        }

        original = undefined;
    }
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Some environments don't have global Buffer (e.g. React Native).
// Solution would be installing npm modules "buffer" and "stream" explicitly.
var Buffer = __webpack_require__(3).Buffer;

var bomHandling = __webpack_require__(76),
    iconv = module.exports;

// All codecs and aliases are kept here, keyed by encoding name/alias.
// They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
iconv.encodings = null;

// Characters emitted in case of error.
iconv.defaultCharUnicode = '�';
iconv.defaultCharSingleByte = '?';

// Public API.
iconv.encode = function encode(str, encoding, options) {
    str = "" + (str || ""); // Ensure string.

    var encoder = iconv.getEncoder(encoding, options);

    var res = encoder.write(str);
    var trail = encoder.end();
    
    return (trail && trail.length > 0) ? Buffer.concat([res, trail]) : res;
}

iconv.decode = function decode(buf, encoding, options) {
    if (typeof buf === 'string') {
        if (!iconv.skipDecodeWarning) {
            console.error('Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding');
            iconv.skipDecodeWarning = true;
        }

        buf = new Buffer("" + (buf || ""), "binary"); // Ensure buffer.
    }

    var decoder = iconv.getDecoder(encoding, options);

    var res = decoder.write(buf);
    var trail = decoder.end();

    return trail ? (res + trail) : res;
}

iconv.encodingExists = function encodingExists(enc) {
    try {
        iconv.getCodec(enc);
        return true;
    } catch (e) {
        return false;
    }
}

// Legacy aliases to convert functions
iconv.toEncoding = iconv.encode;
iconv.fromEncoding = iconv.decode;

// Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
iconv._codecDataCache = {};
iconv.getCodec = function getCodec(encoding) {
    if (!iconv.encodings)
        iconv.encodings = __webpack_require__(64); // Lazy load all encoding definitions.
    
    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
    var enc = (''+encoding).toLowerCase().replace(/[^0-9a-z]|:\d{4}$/g, "");

    // Traverse iconv.encodings to find actual codec.
    var codecOptions = {};
    while (true) {
        var codec = iconv._codecDataCache[enc];
        if (codec)
            return codec;

        var codecDef = iconv.encodings[enc];

        switch (typeof codecDef) {
            case "string": // Direct alias to other encoding.
                enc = codecDef;
                break;

            case "object": // Alias with options. Can be layered.
                for (var key in codecDef)
                    codecOptions[key] = codecDef[key];

                if (!codecOptions.encodingName)
                    codecOptions.encodingName = enc;
                
                enc = codecDef.type;
                break;

            case "function": // Codec itself.
                if (!codecOptions.encodingName)
                    codecOptions.encodingName = enc;

                // The codec function must load all tables and return object with .encoder and .decoder methods.
                // It'll be called only once (for each different options object).
                codec = new codecDef(codecOptions, iconv);

                iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.
                return codec;

            default:
                throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '"+enc+"')");
        }
    }
}

iconv.getEncoder = function getEncoder(encoding, options) {
    var codec = iconv.getCodec(encoding),
        encoder = new codec.encoder(options, codec);

    if (codec.bomAware && options && options.addBOM)
        encoder = new bomHandling.PrependBOM(encoder, options);

    return encoder;
}

iconv.getDecoder = function getDecoder(encoding, options) {
    var codec = iconv.getCodec(encoding),
        decoder = new codec.decoder(options, codec);

    if (codec.bomAware && !(options && options.stripBOM === false))
        decoder = new bomHandling.StripBOM(decoder, options);

    return decoder;
}


// Load extensions in Node. All of them are omitted in Browserify build via 'browser' field in package.json.
var nodeVer = typeof process !== 'undefined' && process.versions && process.versions.node;
if (nodeVer) {

    // Load streaming support in Node v0.10+
    var nodeVerArr = nodeVer.split(".").map(Number);
    if (nodeVerArr[0] > 0 || nodeVerArr[1] >= 10) {
        __webpack_require__(79)(iconv);
    }

    // Load Node primitive extensions.
    __webpack_require__(77)(iconv);
}

if (false) {
    console.error("iconv-lite warning: javascript files are loaded not with utf-8 encoding. See https://github.com/ashtuchkin/iconv-lite/wiki/Javascript-source-file-encodings for more info.");
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(3).Buffer,
    Transform = __webpack_require__(4).Transform;


// == Exports ==================================================================
module.exports = function(iconv) {
    
    // Additional Public API.
    iconv.encodeStream = function encodeStream(encoding, options) {
        return new IconvLiteEncoderStream(iconv.getEncoder(encoding, options), options);
    }

    iconv.decodeStream = function decodeStream(encoding, options) {
        return new IconvLiteDecoderStream(iconv.getDecoder(encoding, options), options);
    }

    iconv.supportsStreams = true;


    // Not published yet.
    iconv.IconvLiteEncoderStream = IconvLiteEncoderStream;
    iconv.IconvLiteDecoderStream = IconvLiteDecoderStream;
    iconv._collect = IconvLiteDecoderStream.prototype.collect;
};


// == Encoder stream =======================================================
function IconvLiteEncoderStream(conv, options) {
    this.conv = conv;
    options = options || {};
    options.decodeStrings = false; // We accept only strings, so we don't need to decode them.
    Transform.call(this, options);
}

IconvLiteEncoderStream.prototype = Object.create(Transform.prototype, {
    constructor: { value: IconvLiteEncoderStream }
});

IconvLiteEncoderStream.prototype._transform = function(chunk, encoding, done) {
    if (typeof chunk != 'string')
        return done(new Error("Iconv encoding stream needs strings as its input."));
    try {
        var res = this.conv.write(chunk);
        if (res && res.length) this.push(res);
        done();
    }
    catch (e) {
        done(e);
    }
}

IconvLiteEncoderStream.prototype._flush = function(done) {
    try {
        var res = this.conv.end();
        if (res && res.length) this.push(res);
        done();
    }
    catch (e) {
        done(e);
    }
}

IconvLiteEncoderStream.prototype.collect = function(cb) {
    var chunks = [];
    this.on('error', cb);
    this.on('data', function(chunk) { chunks.push(chunk); });
    this.on('end', function() {
        cb(null, Buffer.concat(chunks));
    });
    return this;
}


// == Decoder stream =======================================================
function IconvLiteDecoderStream(conv, options) {
    this.conv = conv;
    options = options || {};
    options.encoding = this.encoding = 'utf8'; // We output strings.
    Transform.call(this, options);
}

IconvLiteDecoderStream.prototype = Object.create(Transform.prototype, {
    constructor: { value: IconvLiteDecoderStream }
});

IconvLiteDecoderStream.prototype._transform = function(chunk, encoding, done) {
    if (!Buffer.isBuffer(chunk))
        return done(new Error("Iconv decoding stream needs buffers as its input."));
    try {
        var res = this.conv.write(chunk);
        if (res && res.length) this.push(res, this.encoding);
        done();
    }
    catch (e) {
        done(e);
    }
}

IconvLiteDecoderStream.prototype._flush = function(done) {
    try {
        var res = this.conv.end();
        if (res && res.length) this.push(res, this.encoding);                
        done();
    }
    catch (e) {
        done(e);
    }
}

IconvLiteDecoderStream.prototype.collect = function(cb) {
    var res = '';
    this.on('error', cb);
    this.on('data', function(chunk) { res += chunk; });
    this.on('end', function() {
        cb(null, res);
    });
    return this;
}



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStream = module.exports = function (stream) {
	return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
};

isStream.writable = function (stream) {
	return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
};

isStream.readable = function (stream) {
	return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
};

isStream.duplex = function (stream) {
	return isStream.writable(stream) && isStream.readable(stream);
};

isStream.transform = function (stream) {
	return isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var realFetch = __webpack_require__(82);
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
	global.Response = realFetch.Response;
	global.Headers = realFetch.Headers;
	global.Request = realFetch.Request;
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * index.js
 *
 * a request API compatible with window.fetch
 */

var parse_url = __webpack_require__(8).parse;
var resolve_url = __webpack_require__(8).resolve;
var http = __webpack_require__(18);
var https = __webpack_require__(34);
var zlib = __webpack_require__(109);
var stream = __webpack_require__(4);

var Body = __webpack_require__(11);
var Response = __webpack_require__(84);
var Headers = __webpack_require__(12);
var Request = __webpack_require__(83);
var FetchError = __webpack_require__(23);

// commonjs
module.exports = Fetch;
// es6 default export compatibility
module.exports.default = module.exports;

/**
 * Fetch class
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function Fetch(url, opts) {

	// allow call as function
	if (!(this instanceof Fetch))
		return new Fetch(url, opts);

	// allow custom promise
	if (!Fetch.Promise) {
		throw new Error('native promise missing, set Fetch.Promise to your favorite alternative');
	}

	Body.Promise = Fetch.Promise;

	var self = this;

	// wrap http.request into fetch
	return new Fetch.Promise(function(resolve, reject) {
		// build request object
		var options = new Request(url, opts);

		if (!options.protocol || !options.hostname) {
			throw new Error('only absolute urls are supported');
		}

		if (options.protocol !== 'http:' && options.protocol !== 'https:') {
			throw new Error('only http(s) protocols are supported');
		}

		var send;
		if (options.protocol === 'https:') {
			send = https.request;
		} else {
			send = http.request;
		}

		// normalize headers
		var headers = new Headers(options.headers);

		if (options.compress) {
			headers.set('accept-encoding', 'gzip,deflate');
		}

		if (!headers.has('user-agent')) {
			headers.set('user-agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
		}

		if (!headers.has('connection') && !options.agent) {
			headers.set('connection', 'close');
		}

		if (!headers.has('accept')) {
			headers.set('accept', '*/*');
		}

		// detect form data input from form-data module, this hack avoid the need to pass multipart header manually
		if (!headers.has('content-type') && options.body && typeof options.body.getBoundary === 'function') {
			headers.set('content-type', 'multipart/form-data; boundary=' + options.body.getBoundary());
		}

		// bring node-fetch closer to browser behavior by setting content-length automatically
		if (!headers.has('content-length') && /post|put|patch|delete/i.test(options.method)) {
			if (typeof options.body === 'string') {
				headers.set('content-length', Buffer.byteLength(options.body));
			// detect form data input from form-data module, this hack avoid the need to add content-length header manually
			} else if (options.body && typeof options.body.getLengthSync === 'function') {
				// for form-data 1.x
				if (options.body._lengthRetrievers && options.body._lengthRetrievers.length == 0) {
					headers.set('content-length', options.body.getLengthSync().toString());
				// for form-data 2.x
				} else if (options.body.hasKnownLength && options.body.hasKnownLength()) {
					headers.set('content-length', options.body.getLengthSync().toString());
				}
			// this is only necessary for older nodejs releases (before iojs merge)
			} else if (options.body === undefined || options.body === null) {
				headers.set('content-length', '0');
			}
		}

		options.headers = headers.raw();

		// http.request only support string as host header, this hack make custom host header possible
		if (options.headers.host) {
			options.headers.host = options.headers.host[0];
		}

		// send request
		var req = send(options);
		var reqTimeout;

		if (options.timeout) {
			req.once('socket', function(socket) {
				reqTimeout = setTimeout(function() {
					req.abort();
					reject(new FetchError('network timeout at: ' + options.url, 'request-timeout'));
				}, options.timeout);
			});
		}

		req.on('error', function(err) {
			clearTimeout(reqTimeout);
			reject(new FetchError('request to ' + options.url + ' failed, reason: ' + err.message, 'system', err));
		});

		req.on('response', function(res) {
			clearTimeout(reqTimeout);

			// handle redirect
			if (self.isRedirect(res.statusCode) && options.redirect !== 'manual') {
				if (options.redirect === 'error') {
					reject(new FetchError('redirect mode is set to error: ' + options.url, 'no-redirect'));
					return;
				}

				if (options.counter >= options.follow) {
					reject(new FetchError('maximum redirect reached at: ' + options.url, 'max-redirect'));
					return;
				}

				if (!res.headers.location) {
					reject(new FetchError('redirect location header missing at: ' + options.url, 'invalid-redirect'));
					return;
				}

				// per fetch spec, for POST request with 301/302 response, or any request with 303 response, use GET when following redirect
				if (res.statusCode === 303
					|| ((res.statusCode === 301 || res.statusCode === 302) && options.method === 'POST'))
				{
					options.method = 'GET';
					delete options.body;
					delete options.headers['content-length'];
				}

				options.counter++;

				resolve(Fetch(resolve_url(options.url, res.headers.location), options));
				return;
			}

			// normalize location header for manual redirect mode
			var headers = new Headers(res.headers);
			if (options.redirect === 'manual' && headers.has('location')) {
				headers.set('location', resolve_url(options.url, headers.get('location')));
			}

			// prepare response
			var body = res.pipe(new stream.PassThrough());
			var response_options = {
				url: options.url
				, status: res.statusCode
				, statusText: res.statusMessage
				, headers: headers
				, size: options.size
				, timeout: options.timeout
			};

			// response object
			var output;

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no content-encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!options.compress || options.method === 'HEAD' || !headers.has('content-encoding') || res.statusCode === 204 || res.statusCode === 304) {
				output = new Response(body, response_options);
				resolve(output);
				return;
			}

			// otherwise, check for gzip or deflate
			var name = headers.get('content-encoding');

			// for gzip
			if (name == 'gzip' || name == 'x-gzip') {
				body = body.pipe(zlib.createGunzip());
				output = new Response(body, response_options);
				resolve(output);
				return;

			// for deflate
			} else if (name == 'deflate' || name == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				var raw = res.pipe(new stream.PassThrough());
				raw.once('data', function(chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					output = new Response(body, response_options);
					resolve(output);
				});
				return;
			}

			// otherwise, use response as-is
			output = new Response(body, response_options);
			resolve(output);
			return;
		});

		// accept string, buffer or readable stream as body
		// per spec we will call tostring on non-stream objects
		if (typeof options.body === 'string') {
			req.write(options.body);
			req.end();
		} else if (options.body instanceof Buffer) {
			req.write(options.body);
			req.end();
		} else if (typeof options.body === 'object' && options.body.pipe) {
			options.body.pipe(req);
		} else if (typeof options.body === 'object') {
			req.write(options.body.toString());
			req.end();
		} else {
			req.end();
		}
	});

};

/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
Fetch.prototype.isRedirect = function(code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
}

// expose Promise
Fetch.Promise = global.Promise;
Fetch.Response = Response;
Fetch.Headers = Headers;
Fetch.Request = Request;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * request.js
 *
 * Request class contains server only options
 */

var parse_url = __webpack_require__(8).parse;
var Headers = __webpack_require__(12);
var Body = __webpack_require__(11);

module.exports = Request;

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
function Request(input, init) {
	var url, url_parsed;

	// normalize input
	if (!(input instanceof Request)) {
		url = input;
		url_parsed = parse_url(url);
		input = {};
	} else {
		url = input.url;
		url_parsed = parse_url(url);
	}

	// normalize init
	init = init || {};

	// fetch spec options
	this.method = init.method || input.method || 'GET';
	this.redirect = init.redirect || input.redirect || 'follow';
	this.headers = new Headers(init.headers || input.headers || {});
	this.url = url;

	// server only options
	this.follow = init.follow !== undefined ?
		init.follow : input.follow !== undefined ?
		input.follow : 20;
	this.compress = init.compress !== undefined ?
		init.compress : input.compress !== undefined ?
		input.compress : true;
	this.counter = init.counter || input.counter || 0;
	this.agent = init.agent || input.agent;

	Body.call(this, init.body || this._clone(input), {
		timeout: init.timeout || input.timeout || 0,
		size: init.size || input.size || 0
	});

	// server request options
	this.protocol = url_parsed.protocol;
	this.hostname = url_parsed.hostname;
	this.port = url_parsed.port;
	this.path = url_parsed.path;
	this.auth = url_parsed.auth;
}

Request.prototype = Object.create(Body.prototype);

/**
 * Clone this request
 *
 * @return  Request
 */
Request.prototype.clone = function() {
	return new Request(this);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * response.js
 *
 * Response class provides content decoding
 */

var http = __webpack_require__(18);
var Headers = __webpack_require__(12);
var Body = __webpack_require__(11);

module.exports = Response;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Response(body, opts) {

	opts = opts || {};

	this.url = opts.url;
	this.status = opts.status || 200;
	this.statusText = opts.statusText || http.STATUS_CODES[this.status];
	this.headers = new Headers(opts.headers);
	this.ok = this.status >= 200 && this.status < 300;

	Body.call(this, body, opts);

}

Response.prototype = Object.create(Body.prototype);

/**
 * Clone this response
 *
 * @return  Response
 */
Response.prototype.clone = function() {
	return new Response(this._clone(this), {
		url: this.url
		, status: this.status
		, statusText: this.statusText
		, headers: this.headers
		, ok: this.ok
	});
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OpenElementStack = __webpack_require__(26),
    Tokenizer = __webpack_require__(7),
    HTML = __webpack_require__(2);


//Aliases
var $ = HTML.TAG_NAMES;

exports.assign = function (parser) {
    //NOTE: obtain Parser proto this way to avoid module circular references
    var parserProto = Object.getPrototypeOf(parser),
        treeAdapter = parser.treeAdapter,
        attachableElementLocation = null,
        lastFosterParentingLocation = null,
        currentToken = null;

    function setEndLocation(element, closingToken) {
        var loc = element.__location;

        if (!loc)
            return;

        if (!loc.startTag) {
            loc.startTag = {
                line: loc.line,
                col: loc.col,
                startOffset: loc.startOffset,
                endOffset: loc.endOffset
            };

            if (loc.attrs)
                loc.startTag.attrs = loc.attrs;
        }

        if (closingToken.location) {
            var ctLocation = closingToken.location,
                tn = treeAdapter.getTagName(element),
            // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing tag and
            // for cases like <td> <p> </td> - 'p' closes without a closing tag
                isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN &&
                                  tn === closingToken.tagName;

            if (isClosingEndTag) {
                loc.endTag = {
                    line: ctLocation.line,
                    col: ctLocation.col,
                    startOffset: ctLocation.startOffset,
                    endOffset: ctLocation.endOffset
                };
            }

            if (isClosingEndTag)
                loc.endOffset = ctLocation.endOffset;
            else
                loc.endOffset = ctLocation.startOffset;
        }

        else if (closingToken.type === Tokenizer.EOF_TOKEN)
            loc.endOffset = parser.tokenizer.preprocessor.sourcePos;
    }

    //NOTE: patch _bootstrap method
    parser._bootstrap = function (document, fragmentContext) {
        parserProto._bootstrap.call(this, document, fragmentContext);

        attachableElementLocation = null;
        lastFosterParentingLocation = null;
        currentToken = null;

        //OpenElementStack
        parser.openElements.pop = function () {
            setEndLocation(this.current, currentToken);
            OpenElementStack.prototype.pop.call(this);
        };

        parser.openElements.popAllUpToHtmlElement = function () {
            for (var i = this.stackTop; i > 0; i--)
                setEndLocation(this.items[i], currentToken);

            OpenElementStack.prototype.popAllUpToHtmlElement.call(this);
        };

        parser.openElements.remove = function (element) {
            setEndLocation(element, currentToken);
            OpenElementStack.prototype.remove.call(this, element);
        };
    };

    parser._runParsingLoop = function (scriptHandler) {
        parserProto._runParsingLoop.call(this, scriptHandler);

        // NOTE: generate location info for elements
        // that remains on open element stack
        for (var i = parser.openElements.stackTop; i >= 0; i--)
            setEndLocation(parser.openElements.items[i], currentToken);
    };


    //Token processing
    parser._processTokenInForeignContent = function (token) {
        currentToken = token;
        parserProto._processTokenInForeignContent.call(this, token);
    };

    parser._processToken = function (token) {
        currentToken = token;
        parserProto._processToken.call(this, token);

        //NOTE: <body> and <html> are never popped from the stack, so we need to updated
        //their end location explicitly.
        if (token.type === Tokenizer.END_TAG_TOKEN &&
            (token.tagName === $.HTML ||
             token.tagName === $.BODY && this.openElements.hasInScope($.BODY))) {
            for (var i = this.openElements.stackTop; i >= 0; i--) {
                var element = this.openElements.items[i];

                if (this.treeAdapter.getTagName(element) === token.tagName) {
                    setEndLocation(element, token);
                    break;
                }
            }
        }
    };


    //Doctype
    parser._setDocumentType = function (token) {
        parserProto._setDocumentType.call(this, token);

        var documentChildren = this.treeAdapter.getChildNodes(this.document),
            cnLength = documentChildren.length;

        for (var i = 0; i < cnLength; i++) {
            var node = documentChildren[i];

            if (this.treeAdapter.isDocumentTypeNode(node)) {
                node.__location = token.location;
                break;
            }
        }
    };


    //Elements
    parser._attachElementToTree = function (element) {
        //NOTE: _attachElementToTree is called from _appendElement, _insertElement and _insertTemplate methods.
        //So we will use token location stored in this methods for the element.
        element.__location = attachableElementLocation || null;
        attachableElementLocation = null;
        parserProto._attachElementToTree.call(this, element);
    };

    parser._appendElement = function (token, namespaceURI) {
        attachableElementLocation = token.location;
        parserProto._appendElement.call(this, token, namespaceURI);
    };

    parser._insertElement = function (token, namespaceURI) {
        attachableElementLocation = token.location;
        parserProto._insertElement.call(this, token, namespaceURI);
    };

    parser._insertTemplate = function (token) {
        attachableElementLocation = token.location;
        parserProto._insertTemplate.call(this, token);

        var tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);

        tmplContent.__location = null;
    };

    parser._insertFakeRootElement = function () {
        parserProto._insertFakeRootElement.call(this);
        this.openElements.current.__location = null;
    };


    //Comments
    parser._appendCommentNode = function (token, parent) {
        parserProto._appendCommentNode.call(this, token, parent);

        var children = this.treeAdapter.getChildNodes(parent),
            commentNode = children[children.length - 1];

        commentNode.__location = token.location;
    };


    //Text
    parser._findFosterParentingLocation = function () {
        //NOTE: store last foster parenting location, so we will be able to find inserted text
        //in case of foster parenting
        lastFosterParentingLocation = parserProto._findFosterParentingLocation.call(this);
        return lastFosterParentingLocation;
    };

    parser._insertCharacters = function (token) {
        parserProto._insertCharacters.call(this, token);

        var hasFosterParent = this._shouldFosterParentOnInsertion(),
            parent = hasFosterParent && lastFosterParentingLocation.parent ||
                     this.openElements.currentTmplContent ||
                     this.openElements.current,
            siblings = this.treeAdapter.getChildNodes(parent),
            textNodeIdx = hasFosterParent && lastFosterParentingLocation.beforeElement ?
            siblings.indexOf(lastFosterParentingLocation.beforeElement) - 1 :
            siblings.length - 1,
            textNode = siblings[textNodeIdx];

        //NOTE: if we have location assigned by another token, then just update end position
        if (textNode.__location)
            textNode.__location.endOffset = token.location.endOffset;

        else
            textNode.__location = token.location;
    };
};



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UNICODE = __webpack_require__(6);

//Aliases
var $ = UNICODE.CODE_POINTS;


exports.assign = function (tokenizer) {
    //NOTE: obtain Tokenizer proto this way to avoid module circular references
    var tokenizerProto = Object.getPrototypeOf(tokenizer),
        tokenStartOffset = -1,
        tokenCol = -1,
        tokenLine = 1,
        isEol = false,
        lineStartPos = 0,
        col = -1,
        line = 1;

    function attachLocationInfo(token) {
        token.location = {
            line: tokenLine,
            col: tokenCol,
            startOffset: tokenStartOffset,
            endOffset: -1
        };
    }

    //NOTE: patch consumption method to track line/col information
    tokenizer._consume = function () {
        var cp = tokenizerProto._consume.call(this);

        //NOTE: LF should be in the last column of the line
        if (isEol) {
            isEol = false;
            line++;
            lineStartPos = this.preprocessor.sourcePos;
        }

        if (cp === $.LINE_FEED)
            isEol = true;

        col = this.preprocessor.sourcePos - lineStartPos + 1;

        return cp;
    };

    tokenizer._unconsume = function () {
        tokenizerProto._unconsume.call(this);
        isEol = false;

        col = this.preprocessor.sourcePos - lineStartPos + 1;
    };

    //NOTE: patch token creation methods and attach location objects
    tokenizer._createStartTagToken = function () {
        tokenizerProto._createStartTagToken.call(this);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createEndTagToken = function () {
        tokenizerProto._createEndTagToken.call(this);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createCommentToken = function () {
        tokenizerProto._createCommentToken.call(this);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createDoctypeToken = function (initialName) {
        tokenizerProto._createDoctypeToken.call(this, initialName);
        attachLocationInfo(this.currentToken);
    };

    tokenizer._createCharacterToken = function (type, ch) {
        tokenizerProto._createCharacterToken.call(this, type, ch);
        attachLocationInfo(this.currentCharacterToken);
    };

    tokenizer._createAttr = function (attrNameFirstCh) {
        tokenizerProto._createAttr.call(this, attrNameFirstCh);
        this.currentAttrLocation = {
            line: line,
            col: col,
            startOffset: this.preprocessor.sourcePos,
            endOffset: -1
        };
    };

    tokenizer._leaveAttrName = function (toState) {
        tokenizerProto._leaveAttrName.call(this, toState);
        this._attachCurrentAttrLocationInfo();
    };

    tokenizer._leaveAttrValue = function (toState) {
        tokenizerProto._leaveAttrValue.call(this, toState);
        this._attachCurrentAttrLocationInfo();
    };

    tokenizer._attachCurrentAttrLocationInfo = function () {
        this.currentAttrLocation.endOffset = this.preprocessor.sourcePos;

        if (!this.currentToken.location.attrs)
            this.currentToken.location.attrs = Object.create(null);

        this.currentToken.location.attrs[this.currentAttr.name] = this.currentAttrLocation;
    };

    //NOTE: patch token emission methods to determine end location
    tokenizer._emitCurrentToken = function () {
        //NOTE: if we have pending character token make it's end location equal to the
        //current token's start location.
        if (this.currentCharacterToken)
            this.currentCharacterToken.location.endOffset = this.currentToken.location.startOffset;

        this.currentToken.location.endOffset = this.preprocessor.sourcePos + 1;
        tokenizerProto._emitCurrentToken.call(this);
    };

    tokenizer._emitCurrentCharacterToken = function () {
        //NOTE: if we have character token and it's location wasn't set in the _emitCurrentToken(),
        //then set it's location at the current preprocessor position.
        //We don't need to increment preprocessor position, since character token
        //emission is always forced by the start of the next character token here.
        //So, we already have advanced position.
        if (this.currentCharacterToken && this.currentCharacterToken.location.endOffset === -1)
            this.currentCharacterToken.location.endOffset = this.preprocessor.sourcePos;

        tokenizerProto._emitCurrentCharacterToken.call(this);
    };

    //NOTE: patch initial states for each mode to obtain token start position
    Object.keys(tokenizerProto.MODE)

        .map(function (modeName) {
            return tokenizerProto.MODE[modeName];
        })

        .forEach(function (state) {
            tokenizer[state] = function (cp) {
                tokenStartOffset = this.preprocessor.sourcePos;
                tokenLine = line;
                tokenCol = col;
                tokenizerProto[state].call(this, cp);
            };
        });
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Const
var NOAH_ARK_CAPACITY = 3;

//List of formatting elements
var FormattingElementList = module.exports = function (treeAdapter) {
    this.length = 0;
    this.entries = [];
    this.treeAdapter = treeAdapter;
    this.bookmark = null;
};

//Entry types
FormattingElementList.MARKER_ENTRY = 'MARKER_ENTRY';
FormattingElementList.ELEMENT_ENTRY = 'ELEMENT_ENTRY';

//Noah Ark's condition
//OPTIMIZATION: at first we try to find possible candidates for exclusion using
//lightweight heuristics without thorough attributes check.
FormattingElementList.prototype._getNoahArkConditionCandidates = function (newElement) {
    var candidates = [];

    if (this.length >= NOAH_ARK_CAPACITY) {
        var neAttrsLength = this.treeAdapter.getAttrList(newElement).length,
            neTagName = this.treeAdapter.getTagName(newElement),
            neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);

        for (var i = this.length - 1; i >= 0; i--) {
            var entry = this.entries[i];

            if (entry.type === FormattingElementList.MARKER_ENTRY)
                break;

            var element = entry.element,
                elementAttrs = this.treeAdapter.getAttrList(element),
                isCandidate = this.treeAdapter.getTagName(element) === neTagName &&
                              this.treeAdapter.getNamespaceURI(element) === neNamespaceURI &&
                              elementAttrs.length === neAttrsLength;

            if (isCandidate)
                candidates.push({idx: i, attrs: elementAttrs});
        }
    }

    return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
};

FormattingElementList.prototype._ensureNoahArkCondition = function (newElement) {
    var candidates = this._getNoahArkConditionCandidates(newElement),
        cLength = candidates.length;

    if (cLength) {
        var neAttrs = this.treeAdapter.getAttrList(newElement),
            neAttrsLength = neAttrs.length,
            neAttrsMap = Object.create(null);

        //NOTE: build attrs map for the new element so we can perform fast lookups
        for (var i = 0; i < neAttrsLength; i++) {
            var neAttr = neAttrs[i];

            neAttrsMap[neAttr.name] = neAttr.value;
        }

        for (i = 0; i < neAttrsLength; i++) {
            for (var j = 0; j < cLength; j++) {
                var cAttr = candidates[j].attrs[i];

                if (neAttrsMap[cAttr.name] !== cAttr.value) {
                    candidates.splice(j, 1);
                    cLength--;
                }

                if (candidates.length < NOAH_ARK_CAPACITY)
                    return;
            }
        }

        //NOTE: remove bottommost candidates until Noah's Ark condition will not be met
        for (i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
            this.entries.splice(candidates[i].idx, 1);
            this.length--;
        }
    }
};

//Mutations
FormattingElementList.prototype.insertMarker = function () {
    this.entries.push({type: FormattingElementList.MARKER_ENTRY});
    this.length++;
};

FormattingElementList.prototype.pushElement = function (element, token) {
    this._ensureNoahArkCondition(element);

    this.entries.push({
        type: FormattingElementList.ELEMENT_ENTRY,
        element: element,
        token: token
    });

    this.length++;
};

FormattingElementList.prototype.insertElementAfterBookmark = function (element, token) {
    var bookmarkIdx = this.length - 1;

    for (; bookmarkIdx >= 0; bookmarkIdx--) {
        if (this.entries[bookmarkIdx] === this.bookmark)
            break;
    }

    this.entries.splice(bookmarkIdx + 1, 0, {
        type: FormattingElementList.ELEMENT_ENTRY,
        element: element,
        token: token
    });

    this.length++;
};

FormattingElementList.prototype.removeEntry = function (entry) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this.entries[i] === entry) {
            this.entries.splice(i, 1);
            this.length--;
            break;
        }
    }
};

FormattingElementList.prototype.clearToLastMarker = function () {
    while (this.length) {
        var entry = this.entries.pop();

        this.length--;

        if (entry.type === FormattingElementList.MARKER_ENTRY)
            break;
    }
};

//Search
FormattingElementList.prototype.getElementEntryInScopeWithTagName = function (tagName) {
    for (var i = this.length - 1; i >= 0; i--) {
        var entry = this.entries[i];

        if (entry.type === FormattingElementList.MARKER_ENTRY)
            return null;

        if (this.treeAdapter.getTagName(entry.element) === tagName)
            return entry;
    }

    return null;
};

FormattingElementList.prototype.getElementEntry = function (element) {
    for (var i = this.length - 1; i >= 0; i--) {
        var entry = this.entries[i];

        if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element)
            return entry;
    }

    return null;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ParserStream = __webpack_require__(27),
    inherits = __webpack_require__(5).inherits,
    $ = __webpack_require__(2).TAG_NAMES;

var PlainTextConversionStream = module.exports = function (options) {
    ParserStream.call(this, options);

    // NOTE: see https://html.spec.whatwg.org/#read-text
    this.parser._insertFakeElement($.HTML);
    this.parser._insertFakeElement($.HEAD);
    this.parser.openElements.pop();
    this.parser._insertFakeElement($.BODY);
    this.parser._insertFakeElement($.PRE);
    this.parser.treeAdapter.insertText(this.parser.openElements.current, '\n');
    this.parser.switchToPlaintextParsing();
};

inherits(PlainTextConversionStream, ParserStream);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WritableStream = __webpack_require__(4).Writable,
    util = __webpack_require__(5);

var DevNullStream = module.exports = function () {
    WritableStream.call(this);
};

util.inherits(DevNullStream, WritableStream);

DevNullStream.prototype._write = function (chunk, encoding, cb) {
    cb();
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TransformStream = __webpack_require__(4).Transform,
    DevNullStream = __webpack_require__(89),
    inherits = __webpack_require__(5).inherits,
    Tokenizer = __webpack_require__(7),
    ParserFeedbackSimulator = __webpack_require__(91),
    mergeOptions = __webpack_require__(14);

var DEFAULT_OPTIONS = {
    locationInfo: false
};

var SAXParser = module.exports = function (options) {
    TransformStream.call(this);

    this.options = mergeOptions(DEFAULT_OPTIONS, options);

    this.tokenizer = new Tokenizer(options);
    this.parserFeedbackSimulator = new ParserFeedbackSimulator(this.tokenizer);

    this.pendingText = null;
    this.currentTokenLocation = void 0;

    this.lastChunkWritten = false;
    this.stopped = false;

    // NOTE: always pipe stream to the /dev/null stream to avoid
    // `highWaterMark` hit even if we don't have consumers.
    // (see: https://github.com/inikulin/parse5/issues/97#issuecomment-171940774)
    this.pipe(new DevNullStream());
};

inherits(SAXParser, TransformStream);

//TransformStream implementation
SAXParser.prototype._transform = function (chunk, encoding, callback) {
    if (!this.stopped) {
        this.tokenizer.write(chunk.toString('utf8'), this.lastChunkWritten);
        this._runParsingLoop();
    }

    this.push(chunk);

    callback();
};

SAXParser.prototype._flush = function (callback) {
    callback();
};

SAXParser.prototype.end = function (chunk, encoding, callback) {
    this.lastChunkWritten = true;
    TransformStream.prototype.end.call(this, chunk, encoding, callback);
};

SAXParser.prototype.stop = function () {
    this.stopped = true;
};

//Internals
SAXParser.prototype._runParsingLoop = function () {
    do {
        var token = this.parserFeedbackSimulator.getNextToken();

        if (token.type === Tokenizer.HIBERNATION_TOKEN)
            break;

        if (token.type === Tokenizer.CHARACTER_TOKEN ||
            token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN ||
            token.type === Tokenizer.NULL_CHARACTER_TOKEN) {

            if (this.options.locationInfo) {
                if (this.pendingText === null)
                    this.currentTokenLocation = token.location;

                else
                    this.currentTokenLocation.endOffset = token.location.endOffset;
            }

            this.pendingText = (this.pendingText || '') + token.chars;
        }

        else {
            this._emitPendingText();
            this._handleToken(token);
        }
    } while (!this.stopped && token.type !== Tokenizer.EOF_TOKEN);
};

SAXParser.prototype._handleToken = function (token) {
    if (this.options.locationInfo)
        this.currentTokenLocation = token.location;

    if (token.type === Tokenizer.START_TAG_TOKEN)
        this.emit('startTag', token.tagName, token.attrs, token.selfClosing, this.currentTokenLocation);

    else if (token.type === Tokenizer.END_TAG_TOKEN)
        this.emit('endTag', token.tagName, this.currentTokenLocation);

    else if (token.type === Tokenizer.COMMENT_TOKEN)
        this.emit('comment', token.data, this.currentTokenLocation);

    else if (token.type === Tokenizer.DOCTYPE_TOKEN)
        this.emit('doctype', token.name, token.publicId, token.systemId, this.currentTokenLocation);
};

SAXParser.prototype._emitPendingText = function () {
    if (this.pendingText !== null) {
        this.emit('text', this.pendingText, this.currentTokenLocation);
        this.pendingText = null;
    }
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Tokenizer = __webpack_require__(7),
    foreignContent = __webpack_require__(24),
    UNICODE = __webpack_require__(6),
    HTML = __webpack_require__(2);


//Aliases
var $ = HTML.TAG_NAMES,
    NS = HTML.NAMESPACES;


//ParserFeedbackSimulator
//Simulates adjustment of the Tokenizer which performed by standard parser during tree construction.
var ParserFeedbackSimulator = module.exports = function (tokenizer) {
    this.tokenizer = tokenizer;

    this.namespaceStack = [];
    this.namespaceStackTop = -1;
    this._enterNamespace(NS.HTML);
};

ParserFeedbackSimulator.prototype.getNextToken = function () {
    var token = this.tokenizer.getNextToken();

    if (token.type === Tokenizer.START_TAG_TOKEN)
        this._handleStartTagToken(token);

    else if (token.type === Tokenizer.END_TAG_TOKEN)
        this._handleEndTagToken(token);

    else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN && this.inForeignContent) {
        token.type = Tokenizer.CHARACTER_TOKEN;
        token.chars = UNICODE.REPLACEMENT_CHARACTER;
    }

    else if (this.skipNextNewLine) {
        if (token.type !== Tokenizer.HIBERNATION_TOKEN)
            this.skipNextNewLine = false;

        if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
            if (token.chars.length === 1)
                return this.getNextToken();

            token.chars = token.chars.substr(1);
        }
    }

    return token;
};

//Namespace stack mutations
ParserFeedbackSimulator.prototype._enterNamespace = function (namespace) {
    this.namespaceStackTop++;
    this.namespaceStack.push(namespace);

    this.inForeignContent = namespace !== NS.HTML;
    this.currentNamespace = namespace;
    this.tokenizer.allowCDATA = this.inForeignContent;
};

ParserFeedbackSimulator.prototype._leaveCurrentNamespace = function () {
    this.namespaceStackTop--;
    this.namespaceStack.pop();

    this.currentNamespace = this.namespaceStack[this.namespaceStackTop];
    this.inForeignContent = this.currentNamespace !== NS.HTML;
    this.tokenizer.allowCDATA = this.inForeignContent;
};

//Token handlers
ParserFeedbackSimulator.prototype._ensureTokenizerMode = function (tn) {
    if (tn === $.TEXTAREA || tn === $.TITLE)
        this.tokenizer.state = Tokenizer.MODE.RCDATA;

    else if (tn === $.PLAINTEXT)
        this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;

    else if (tn === $.SCRIPT)
        this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;

    else if (tn === $.STYLE || tn === $.IFRAME || tn === $.XMP ||
             tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT)
        this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
};

ParserFeedbackSimulator.prototype._handleStartTagToken = function (token) {
    var tn = token.tagName;

    if (tn === $.SVG)
        this._enterNamespace(NS.SVG);

    else if (tn === $.MATH)
        this._enterNamespace(NS.MATHML);

    if (this.inForeignContent) {
        if (foreignContent.causesExit(token)) {
            this._leaveCurrentNamespace();
            return;
        }

        var currentNs = this.currentNamespace;

        if (currentNs === NS.MATHML)
            foreignContent.adjustTokenMathMLAttrs(token);

        else if (currentNs === NS.SVG) {
            foreignContent.adjustTokenSVGTagName(token);
            foreignContent.adjustTokenSVGAttrs(token);
        }

        foreignContent.adjustTokenXMLAttrs(token);

        tn = token.tagName;

        if (!token.selfClosing && foreignContent.isIntegrationPoint(tn, currentNs, token.attrs))
            this._enterNamespace(NS.HTML);
    }

    else {
        if (tn === $.PRE || tn === $.TEXTAREA || tn === $.LISTING)
            this.skipNextNewLine = true;

        else if (tn === $.IMAGE)
            token.tagName = $.IMG;

        this._ensureTokenizerMode(tn);
    }
};

ParserFeedbackSimulator.prototype._handleEndTagToken = function (token) {
    var tn = token.tagName;

    if (!this.inForeignContent) {
        var previousNs = this.namespaceStack[this.namespaceStackTop - 1];

        if (previousNs === NS.SVG && foreignContent.SVG_TAG_NAMES_ADJUSTMENT_MAP[tn])
            tn = foreignContent.SVG_TAG_NAMES_ADJUSTMENT_MAP[tn];

        //NOTE: check for exit from integration point
        if (foreignContent.isIntegrationPoint(tn, previousNs, token.attrs))
            this._leaveCurrentNamespace();
    }

    else if (tn === $.SVG && this.currentNamespace === NS.SVG ||
             tn === $.MATH && this.currentNamespace === NS.MATHML)
        this._leaveCurrentNamespace();

    // NOTE: adjust end tag name as well for consistency
    if (this.currentNamespace === NS.SVG)
        foreignContent.adjustTokenSVGTagName(token);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ReadableStream = __webpack_require__(4).Readable,
    inherits = __webpack_require__(5).inherits,
    Serializer = __webpack_require__(28);

var SerializerStream = module.exports = function (node, options) {
    ReadableStream.call(this);

    this.serializer = new Serializer(node, options);

    Object.defineProperty(this.serializer, 'html', {
        //NOTE: To make `+=` concat operator work properly we define
        //getter which always returns empty string
        get: function () {
            return '';
        },
        set: this.push.bind(this)
    });
};

inherits(SerializerStream, ReadableStream);

//Readable stream implementation
SerializerStream.prototype._read = function () {
    this.serializer.serialize();
    this.push(null);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//NOTE: this file contains auto-generated array mapped radix tree that is used for the named entity references consumption
//(details: https://github.com/inikulin/parse5/tree/master/scripts/generate_named_entity_data/README.md)
module.exports = new Uint16Array([4,52,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,106,303,412,810,1432,1701,1796,1987,2114,2360,2420,2484,3170,3251,4140,4393,4575,4610,5106,5512,5728,6117,6274,6315,6345,6427,6516,7002,7910,8733,9323,9870,10170,10631,10893,11318,11386,11467,12773,13092,14474,14922,15448,15542,16419,17666,18166,18611,19004,19095,19298,19397,4,16,69,77,97,98,99,102,103,108,109,110,111,112,114,115,116,117,140,150,158,169,176,194,199,210,216,222,226,242,256,266,283,294,108,105,103,5,198,1,59,148,1,198,80,5,38,1,59,156,1,38,99,117,116,101,5,193,1,59,167,1,193,114,101,118,101,59,1,258,4,2,105,121,182,191,114,99,5,194,1,59,189,1,194,59,1,1040,114,59,3,55349,56580,114,97,118,101,5,192,1,59,208,1,192,112,104,97,59,1,913,97,99,114,59,1,256,100,59,1,10835,4,2,103,112,232,237,111,110,59,1,260,102,59,3,55349,56632,112,108,121,70,117,110,99,116,105,111,110,59,1,8289,105,110,103,5,197,1,59,264,1,197,4,2,99,115,272,277,114,59,3,55349,56476,105,103,110,59,1,8788,105,108,100,101,5,195,1,59,292,1,195,109,108,5,196,1,59,301,1,196,4,8,97,99,101,102,111,114,115,117,321,350,354,383,388,394,400,405,4,2,99,114,327,336,107,115,108,97,115,104,59,1,8726,4,2,118,119,342,345,59,1,10983,101,100,59,1,8966,121,59,1,1041,4,3,99,114,116,362,369,379,97,117,115,101,59,1,8757,110,111,117,108,108,105,115,59,1,8492,97,59,1,914,114,59,3,55349,56581,112,102,59,3,55349,56633,101,118,101,59,1,728,99,114,59,1,8492,109,112,101,113,59,1,8782,4,14,72,79,97,99,100,101,102,104,105,108,111,114,115,117,442,447,456,504,542,547,569,573,577,616,678,784,790,796,99,121,59,1,1063,80,89,5,169,1,59,454,1,169,4,3,99,112,121,464,470,497,117,116,101,59,1,262,4,2,59,105,476,478,1,8914,116,97,108,68,105,102,102,101,114,101,110,116,105,97,108,68,59,1,8517,108,101,121,115,59,1,8493,4,4,97,101,105,111,514,520,530,535,114,111,110,59,1,268,100,105,108,5,199,1,59,528,1,199,114,99,59,1,264,110,105,110,116,59,1,8752,111,116,59,1,266,4,2,100,110,553,560,105,108,108,97,59,1,184,116,101,114,68,111,116,59,1,183,114,59,1,8493,105,59,1,935,114,99,108,101,4,4,68,77,80,84,591,596,603,609,111,116,59,1,8857,105,110,117,115,59,1,8854,108,117,115,59,1,8853,105,109,101,115,59,1,8855,111,4,2,99,115,623,646,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8754,101,67,117,114,108,121,4,2,68,81,658,671,111,117,98,108,101,81,117,111,116,101,59,1,8221,117,111,116,101,59,1,8217,4,4,108,110,112,117,688,701,736,753,111,110,4,2,59,101,696,698,1,8759,59,1,10868,4,3,103,105,116,709,717,722,114,117,101,110,116,59,1,8801,110,116,59,1,8751,111,117,114,73,110,116,101,103,114,97,108,59,1,8750,4,2,102,114,742,745,59,1,8450,111,100,117,99,116,59,1,8720,110,116,101,114,67,108,111,99,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8755,111,115,115,59,1,10799,99,114,59,3,55349,56478,112,4,2,59,67,803,805,1,8915,97,112,59,1,8781,4,11,68,74,83,90,97,99,101,102,105,111,115,834,850,855,860,865,888,903,916,921,1011,1415,4,2,59,111,840,842,1,8517,116,114,97,104,100,59,1,10513,99,121,59,1,1026,99,121,59,1,1029,99,121,59,1,1039,4,3,103,114,115,873,879,883,103,101,114,59,1,8225,114,59,1,8609,104,118,59,1,10980,4,2,97,121,894,900,114,111,110,59,1,270,59,1,1044,108,4,2,59,116,910,912,1,8711,97,59,1,916,114,59,3,55349,56583,4,2,97,102,927,998,4,2,99,109,933,992,114,105,116,105,99,97,108,4,4,65,68,71,84,950,957,978,985,99,117,116,101,59,1,180,111,4,2,116,117,964,967,59,1,729,98,108,101,65,99,117,116,101,59,1,733,114,97,118,101,59,1,96,105,108,100,101,59,1,732,111,110,100,59,1,8900,102,101,114,101,110,116,105,97,108,68,59,1,8518,4,4,112,116,117,119,1021,1026,1048,1249,102,59,3,55349,56635,4,3,59,68,69,1034,1036,1041,1,168,111,116,59,1,8412,113,117,97,108,59,1,8784,98,108,101,4,6,67,68,76,82,85,86,1065,1082,1101,1189,1211,1236,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8751,111,4,2,116,119,1089,1092,59,1,168,110,65,114,114,111,119,59,1,8659,4,2,101,111,1107,1141,102,116,4,3,65,82,84,1117,1124,1136,114,114,111,119,59,1,8656,105,103,104,116,65,114,114,111,119,59,1,8660,101,101,59,1,10980,110,103,4,2,76,82,1149,1177,101,102,116,4,2,65,82,1158,1165,114,114,111,119,59,1,10232,105,103,104,116,65,114,114,111,119,59,1,10234,105,103,104,116,65,114,114,111,119,59,1,10233,105,103,104,116,4,2,65,84,1199,1206,114,114,111,119,59,1,8658,101,101,59,1,8872,112,4,2,65,68,1218,1225,114,114,111,119,59,1,8657,111,119,110,65,114,114,111,119,59,1,8661,101,114,116,105,99,97,108,66,97,114,59,1,8741,110,4,6,65,66,76,82,84,97,1264,1292,1299,1352,1391,1408,114,114,111,119,4,3,59,66,85,1276,1278,1283,1,8595,97,114,59,1,10515,112,65,114,114,111,119,59,1,8693,114,101,118,101,59,1,785,101,102,116,4,3,82,84,86,1310,1323,1334,105,103,104,116,86,101,99,116,111,114,59,1,10576,101,101,86,101,99,116,111,114,59,1,10590,101,99,116,111,114,4,2,59,66,1345,1347,1,8637,97,114,59,1,10582,105,103,104,116,4,2,84,86,1362,1373,101,101,86,101,99,116,111,114,59,1,10591,101,99,116,111,114,4,2,59,66,1384,1386,1,8641,97,114,59,1,10583,101,101,4,2,59,65,1399,1401,1,8868,114,114,111,119,59,1,8615,114,114,111,119,59,1,8659,4,2,99,116,1421,1426,114,59,3,55349,56479,114,111,107,59,1,272,4,16,78,84,97,99,100,102,103,108,109,111,112,113,115,116,117,120,1466,1470,1478,1489,1515,1520,1525,1536,1544,1593,1609,1617,1650,1664,1668,1677,71,59,1,330,72,5,208,1,59,1476,1,208,99,117,116,101,5,201,1,59,1487,1,201,4,3,97,105,121,1497,1503,1512,114,111,110,59,1,282,114,99,5,202,1,59,1510,1,202,59,1,1069,111,116,59,1,278,114,59,3,55349,56584,114,97,118,101,5,200,1,59,1534,1,200,101,109,101,110,116,59,1,8712,4,2,97,112,1550,1555,99,114,59,1,274,116,121,4,2,83,86,1563,1576,109,97,108,108,83,113,117,97,114,101,59,1,9723,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9643,4,2,103,112,1599,1604,111,110,59,1,280,102,59,3,55349,56636,115,105,108,111,110,59,1,917,117,4,2,97,105,1624,1640,108,4,2,59,84,1631,1633,1,10869,105,108,100,101,59,1,8770,108,105,98,114,105,117,109,59,1,8652,4,2,99,105,1656,1660,114,59,1,8496,109,59,1,10867,97,59,1,919,109,108,5,203,1,59,1675,1,203,4,2,105,112,1683,1689,115,116,115,59,1,8707,111,110,101,110,116,105,97,108,69,59,1,8519,4,5,99,102,105,111,115,1713,1717,1722,1762,1791,121,59,1,1060,114,59,3,55349,56585,108,108,101,100,4,2,83,86,1732,1745,109,97,108,108,83,113,117,97,114,101,59,1,9724,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9642,4,3,112,114,117,1770,1775,1781,102,59,3,55349,56637,65,108,108,59,1,8704,114,105,101,114,116,114,102,59,1,8497,99,114,59,1,8497,4,12,74,84,97,98,99,100,102,103,111,114,115,116,1822,1827,1834,1848,1855,1877,1882,1887,1890,1896,1978,1984,99,121,59,1,1027,5,62,1,59,1832,1,62,109,109,97,4,2,59,100,1843,1845,1,915,59,1,988,114,101,118,101,59,1,286,4,3,101,105,121,1863,1869,1874,100,105,108,59,1,290,114,99,59,1,284,59,1,1043,111,116,59,1,288,114,59,3,55349,56586,59,1,8921,112,102,59,3,55349,56638,101,97,116,101,114,4,6,69,70,71,76,83,84,1915,1933,1944,1953,1959,1971,113,117,97,108,4,2,59,76,1925,1927,1,8805,101,115,115,59,1,8923,117,108,108,69,113,117,97,108,59,1,8807,114,101,97,116,101,114,59,1,10914,101,115,115,59,1,8823,108,97,110,116,69,113,117,97,108,59,1,10878,105,108,100,101,59,1,8819,99,114,59,3,55349,56482,59,1,8811,4,8,65,97,99,102,105,111,115,117,2005,2012,2026,2032,2036,2049,2073,2089,82,68,99,121,59,1,1066,4,2,99,116,2018,2023,101,107,59,1,711,59,1,94,105,114,99,59,1,292,114,59,1,8460,108,98,101,114,116,83,112,97,99,101,59,1,8459,4,2,112,114,2055,2059,102,59,1,8461,105,122,111,110,116,97,108,76,105,110,101,59,1,9472,4,2,99,116,2079,2083,114,59,1,8459,114,111,107,59,1,294,109,112,4,2,68,69,2097,2107,111,119,110,72,117,109,112,59,1,8782,113,117,97,108,59,1,8783,4,14,69,74,79,97,99,100,102,103,109,110,111,115,116,117,2144,2149,2155,2160,2171,2189,2194,2198,2209,2245,2307,2329,2334,2341,99,121,59,1,1045,108,105,103,59,1,306,99,121,59,1,1025,99,117,116,101,5,205,1,59,2169,1,205,4,2,105,121,2177,2186,114,99,5,206,1,59,2184,1,206,59,1,1048,111,116,59,1,304,114,59,1,8465,114,97,118,101,5,204,1,59,2207,1,204,4,3,59,97,112,2217,2219,2238,1,8465,4,2,99,103,2225,2229,114,59,1,298,105,110,97,114,121,73,59,1,8520,108,105,101,115,59,1,8658,4,2,116,118,2251,2281,4,2,59,101,2257,2259,1,8748,4,2,103,114,2265,2271,114,97,108,59,1,8747,115,101,99,116,105,111,110,59,1,8898,105,115,105,98,108,101,4,2,67,84,2293,2300,111,109,109,97,59,1,8291,105,109,101,115,59,1,8290,4,3,103,112,116,2315,2320,2325,111,110,59,1,302,102,59,3,55349,56640,97,59,1,921,99,114,59,1,8464,105,108,100,101,59,1,296,4,2,107,109,2347,2352,99,121,59,1,1030,108,5,207,1,59,2358,1,207,4,5,99,102,111,115,117,2372,2386,2391,2397,2414,4,2,105,121,2378,2383,114,99,59,1,308,59,1,1049,114,59,3,55349,56589,112,102,59,3,55349,56641,4,2,99,101,2403,2408,114,59,3,55349,56485,114,99,121,59,1,1032,107,99,121,59,1,1028,4,7,72,74,97,99,102,111,115,2436,2441,2446,2452,2467,2472,2478,99,121,59,1,1061,99,121,59,1,1036,112,112,97,59,1,922,4,2,101,121,2458,2464,100,105,108,59,1,310,59,1,1050,114,59,3,55349,56590,112,102,59,3,55349,56642,99,114,59,3,55349,56486,4,11,74,84,97,99,101,102,108,109,111,115,116,2508,2513,2520,2562,2585,2981,2986,3004,3011,3146,3167,99,121,59,1,1033,5,60,1,59,2518,1,60,4,5,99,109,110,112,114,2532,2538,2544,2548,2558,117,116,101,59,1,313,98,100,97,59,1,923,103,59,1,10218,108,97,99,101,116,114,102,59,1,8466,114,59,1,8606,4,3,97,101,121,2570,2576,2582,114,111,110,59,1,317,100,105,108,59,1,315,59,1,1051,4,2,102,115,2591,2907,116,4,10,65,67,68,70,82,84,85,86,97,114,2614,2663,2672,2728,2735,2760,2820,2870,2888,2895,4,2,110,114,2620,2633,103,108,101,66,114,97,99,107,101,116,59,1,10216,114,111,119,4,3,59,66,82,2644,2646,2651,1,8592,97,114,59,1,8676,105,103,104,116,65,114,114,111,119,59,1,8646,101,105,108,105,110,103,59,1,8968,111,4,2,117,119,2679,2692,98,108,101,66,114,97,99,107,101,116,59,1,10214,110,4,2,84,86,2699,2710,101,101,86,101,99,116,111,114,59,1,10593,101,99,116,111,114,4,2,59,66,2721,2723,1,8643,97,114,59,1,10585,108,111,111,114,59,1,8970,105,103,104,116,4,2,65,86,2745,2752,114,114,111,119,59,1,8596,101,99,116,111,114,59,1,10574,4,2,101,114,2766,2792,101,4,3,59,65,86,2775,2777,2784,1,8867,114,114,111,119,59,1,8612,101,99,116,111,114,59,1,10586,105,97,110,103,108,101,4,3,59,66,69,2806,2808,2813,1,8882,97,114,59,1,10703,113,117,97,108,59,1,8884,112,4,3,68,84,86,2829,2841,2852,111,119,110,86,101,99,116,111,114,59,1,10577,101,101,86,101,99,116,111,114,59,1,10592,101,99,116,111,114,4,2,59,66,2863,2865,1,8639,97,114,59,1,10584,101,99,116,111,114,4,2,59,66,2881,2883,1,8636,97,114,59,1,10578,114,114,111,119,59,1,8656,105,103,104,116,97,114,114,111,119,59,1,8660,115,4,6,69,70,71,76,83,84,2922,2936,2947,2956,2962,2974,113,117,97,108,71,114,101,97,116,101,114,59,1,8922,117,108,108,69,113,117,97,108,59,1,8806,114,101,97,116,101,114,59,1,8822,101,115,115,59,1,10913,108,97,110,116,69,113,117,97,108,59,1,10877,105,108,100,101,59,1,8818,114,59,3,55349,56591,4,2,59,101,2992,2994,1,8920,102,116,97,114,114,111,119,59,1,8666,105,100,111,116,59,1,319,4,3,110,112,119,3019,3110,3115,103,4,4,76,82,108,114,3030,3058,3070,3098,101,102,116,4,2,65,82,3039,3046,114,114,111,119,59,1,10229,105,103,104,116,65,114,114,111,119,59,1,10231,105,103,104,116,65,114,114,111,119,59,1,10230,101,102,116,4,2,97,114,3079,3086,114,114,111,119,59,1,10232,105,103,104,116,97,114,114,111,119,59,1,10234,105,103,104,116,97,114,114,111,119,59,1,10233,102,59,3,55349,56643,101,114,4,2,76,82,3123,3134,101,102,116,65,114,114,111,119,59,1,8601,105,103,104,116,65,114,114,111,119,59,1,8600,4,3,99,104,116,3154,3158,3161,114,59,1,8466,59,1,8624,114,111,107,59,1,321,59,1,8810,4,8,97,99,101,102,105,111,115,117,3188,3192,3196,3222,3227,3237,3243,3248,112,59,1,10501,121,59,1,1052,4,2,100,108,3202,3213,105,117,109,83,112,97,99,101,59,1,8287,108,105,110,116,114,102,59,1,8499,114,59,3,55349,56592,110,117,115,80,108,117,115,59,1,8723,112,102,59,3,55349,56644,99,114,59,1,8499,59,1,924,4,9,74,97,99,101,102,111,115,116,117,3271,3276,3283,3306,3422,3427,4120,4126,4137,99,121,59,1,1034,99,117,116,101,59,1,323,4,3,97,101,121,3291,3297,3303,114,111,110,59,1,327,100,105,108,59,1,325,59,1,1053,4,3,103,115,119,3314,3380,3415,97,116,105,118,101,4,3,77,84,86,3327,3340,3365,101,100,105,117,109,83,112,97,99,101,59,1,8203,104,105,4,2,99,110,3348,3357,107,83,112,97,99,101,59,1,8203,83,112,97,99,101,59,1,8203,101,114,121,84,104,105,110,83,112,97,99,101,59,1,8203,116,101,100,4,2,71,76,3389,3405,114,101,97,116,101,114,71,114,101,97,116,101,114,59,1,8811,101,115,115,76,101,115,115,59,1,8810,76,105,110,101,59,1,10,114,59,3,55349,56593,4,4,66,110,112,116,3437,3444,3460,3464,114,101,97,107,59,1,8288,66,114,101,97,107,105,110,103,83,112,97,99,101,59,1,160,102,59,1,8469,4,13,59,67,68,69,71,72,76,78,80,82,83,84,86,3492,3494,3517,3536,3578,3657,3685,3784,3823,3860,3915,4066,4107,1,10988,4,2,111,117,3500,3510,110,103,114,117,101,110,116,59,1,8802,112,67,97,112,59,1,8813,111,117,98,108,101,86,101,114,116,105,99,97,108,66,97,114,59,1,8742,4,3,108,113,120,3544,3552,3571,101,109,101,110,116,59,1,8713,117,97,108,4,2,59,84,3561,3563,1,8800,105,108,100,101,59,3,8770,824,105,115,116,115,59,1,8708,114,101,97,116,101,114,4,7,59,69,70,71,76,83,84,3600,3602,3609,3621,3631,3637,3650,1,8815,113,117,97,108,59,1,8817,117,108,108,69,113,117,97,108,59,3,8807,824,114,101,97,116,101,114,59,3,8811,824,101,115,115,59,1,8825,108,97,110,116,69,113,117,97,108,59,3,10878,824,105,108,100,101,59,1,8821,117,109,112,4,2,68,69,3666,3677,111,119,110,72,117,109,112,59,3,8782,824,113,117,97,108,59,3,8783,824,101,4,2,102,115,3692,3724,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3709,3711,3717,1,8938,97,114,59,3,10703,824,113,117,97,108,59,1,8940,115,4,6,59,69,71,76,83,84,3739,3741,3748,3757,3764,3777,1,8814,113,117,97,108,59,1,8816,114,101,97,116,101,114,59,1,8824,101,115,115,59,3,8810,824,108,97,110,116,69,113,117,97,108,59,3,10877,824,105,108,100,101,59,1,8820,101,115,116,101,100,4,2,71,76,3795,3812,114,101,97,116,101,114,71,114,101,97,116,101,114,59,3,10914,824,101,115,115,76,101,115,115,59,3,10913,824,114,101,99,101,100,101,115,4,3,59,69,83,3838,3840,3848,1,8832,113,117,97,108,59,3,10927,824,108,97,110,116,69,113,117,97,108,59,1,8928,4,2,101,105,3866,3881,118,101,114,115,101,69,108,101,109,101,110,116,59,1,8716,103,104,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3900,3902,3908,1,8939,97,114,59,3,10704,824,113,117,97,108,59,1,8941,4,2,113,117,3921,3973,117,97,114,101,83,117,4,2,98,112,3933,3952,115,101,116,4,2,59,69,3942,3945,3,8847,824,113,117,97,108,59,1,8930,101,114,115,101,116,4,2,59,69,3963,3966,3,8848,824,113,117,97,108,59,1,8931,4,3,98,99,112,3981,4000,4045,115,101,116,4,2,59,69,3990,3993,3,8834,8402,113,117,97,108,59,1,8840,99,101,101,100,115,4,4,59,69,83,84,4015,4017,4025,4037,1,8833,113,117,97,108,59,3,10928,824,108,97,110,116,69,113,117,97,108,59,1,8929,105,108,100,101,59,3,8831,824,101,114,115,101,116,4,2,59,69,4056,4059,3,8835,8402,113,117,97,108,59,1,8841,105,108,100,101,4,4,59,69,70,84,4080,4082,4089,4100,1,8769,113,117,97,108,59,1,8772,117,108,108,69,113,117,97,108,59,1,8775,105,108,100,101,59,1,8777,101,114,116,105,99,97,108,66,97,114,59,1,8740,99,114,59,3,55349,56489,105,108,100,101,5,209,1,59,4135,1,209,59,1,925,4,14,69,97,99,100,102,103,109,111,112,114,115,116,117,118,4170,4176,4187,4205,4212,4217,4228,4253,4259,4292,4295,4316,4337,4346,108,105,103,59,1,338,99,117,116,101,5,211,1,59,4185,1,211,4,2,105,121,4193,4202,114,99,5,212,1,59,4200,1,212,59,1,1054,98,108,97,99,59,1,336,114,59,3,55349,56594,114,97,118,101,5,210,1,59,4226,1,210,4,3,97,101,105,4236,4241,4246,99,114,59,1,332,103,97,59,1,937,99,114,111,110,59,1,927,112,102,59,3,55349,56646,101,110,67,117,114,108,121,4,2,68,81,4272,4285,111,117,98,108,101,81,117,111,116,101,59,1,8220,117,111,116,101,59,1,8216,59,1,10836,4,2,99,108,4301,4306,114,59,3,55349,56490,97,115,104,5,216,1,59,4314,1,216,105,4,2,108,109,4323,4332,100,101,5,213,1,59,4330,1,213,101,115,59,1,10807,109,108,5,214,1,59,4344,1,214,101,114,4,2,66,80,4354,4380,4,2,97,114,4360,4364,114,59,1,8254,97,99,4,2,101,107,4372,4375,59,1,9182,101,116,59,1,9140,97,114,101,110,116,104,101,115,105,115,59,1,9180,4,9,97,99,102,104,105,108,111,114,115,4413,4422,4426,4431,4435,4438,4448,4471,4561,114,116,105,97,108,68,59,1,8706,121,59,1,1055,114,59,3,55349,56595,105,59,1,934,59,1,928,117,115,77,105,110,117,115,59,1,177,4,2,105,112,4454,4467,110,99,97,114,101,112,108,97,110,101,59,1,8460,102,59,1,8473,4,4,59,101,105,111,4481,4483,4526,4531,1,10939,99,101,100,101,115,4,4,59,69,83,84,4498,4500,4507,4519,1,8826,113,117,97,108,59,1,10927,108,97,110,116,69,113,117,97,108,59,1,8828,105,108,100,101,59,1,8830,109,101,59,1,8243,4,2,100,112,4537,4543,117,99,116,59,1,8719,111,114,116,105,111,110,4,2,59,97,4555,4557,1,8759,108,59,1,8733,4,2,99,105,4567,4572,114,59,3,55349,56491,59,1,936,4,4,85,102,111,115,4585,4594,4599,4604,79,84,5,34,1,59,4592,1,34,114,59,3,55349,56596,112,102,59,1,8474,99,114,59,3,55349,56492,4,12,66,69,97,99,101,102,104,105,111,114,115,117,4636,4642,4650,4681,4704,4763,4767,4771,5047,5069,5081,5094,97,114,114,59,1,10512,71,5,174,1,59,4648,1,174,4,3,99,110,114,4658,4664,4668,117,116,101,59,1,340,103,59,1,10219,114,4,2,59,116,4675,4677,1,8608,108,59,1,10518,4,3,97,101,121,4689,4695,4701,114,111,110,59,1,344,100,105,108,59,1,342,59,1,1056,4,2,59,118,4710,4712,1,8476,101,114,115,101,4,2,69,85,4722,4748,4,2,108,113,4728,4736,101,109,101,110,116,59,1,8715,117,105,108,105,98,114,105,117,109,59,1,8651,112,69,113,117,105,108,105,98,114,105,117,109,59,1,10607,114,59,1,8476,111,59,1,929,103,104,116,4,8,65,67,68,70,84,85,86,97,4792,4840,4849,4905,4912,4972,5022,5040,4,2,110,114,4798,4811,103,108,101,66,114,97,99,107,101,116,59,1,10217,114,111,119,4,3,59,66,76,4822,4824,4829,1,8594,97,114,59,1,8677,101,102,116,65,114,114,111,119,59,1,8644,101,105,108,105,110,103,59,1,8969,111,4,2,117,119,4856,4869,98,108,101,66,114,97,99,107,101,116,59,1,10215,110,4,2,84,86,4876,4887,101,101,86,101,99,116,111,114,59,1,10589,101,99,116,111,114,4,2,59,66,4898,4900,1,8642,97,114,59,1,10581,108,111,111,114,59,1,8971,4,2,101,114,4918,4944,101,4,3,59,65,86,4927,4929,4936,1,8866,114,114,111,119,59,1,8614,101,99,116,111,114,59,1,10587,105,97,110,103,108,101,4,3,59,66,69,4958,4960,4965,1,8883,97,114,59,1,10704,113,117,97,108,59,1,8885,112,4,3,68,84,86,4981,4993,5004,111,119,110,86,101,99,116,111,114,59,1,10575,101,101,86,101,99,116,111,114,59,1,10588,101,99,116,111,114,4,2,59,66,5015,5017,1,8638,97,114,59,1,10580,101,99,116,111,114,4,2,59,66,5033,5035,1,8640,97,114,59,1,10579,114,114,111,119,59,1,8658,4,2,112,117,5053,5057,102,59,1,8477,110,100,73,109,112,108,105,101,115,59,1,10608,105,103,104,116,97,114,114,111,119,59,1,8667,4,2,99,104,5087,5091,114,59,1,8475,59,1,8625,108,101,68,101,108,97,121,101,100,59,1,10740,4,13,72,79,97,99,102,104,105,109,111,113,115,116,117,5134,5150,5157,5164,5198,5203,5259,5265,5277,5283,5374,5380,5385,4,2,67,99,5140,5146,72,99,121,59,1,1065,121,59,1,1064,70,84,99,121,59,1,1068,99,117,116,101,59,1,346,4,5,59,97,101,105,121,5176,5178,5184,5190,5195,1,10940,114,111,110,59,1,352,100,105,108,59,1,350,114,99,59,1,348,59,1,1057,114,59,3,55349,56598,111,114,116,4,4,68,76,82,85,5216,5227,5238,5250,111,119,110,65,114,114,111,119,59,1,8595,101,102,116,65,114,114,111,119,59,1,8592,105,103,104,116,65,114,114,111,119,59,1,8594,112,65,114,114,111,119,59,1,8593,103,109,97,59,1,931,97,108,108,67,105,114,99,108,101,59,1,8728,112,102,59,3,55349,56650,4,2,114,117,5289,5293,116,59,1,8730,97,114,101,4,4,59,73,83,85,5306,5308,5322,5367,1,9633,110,116,101,114,115,101,99,116,105,111,110,59,1,8851,117,4,2,98,112,5329,5347,115,101,116,4,2,59,69,5338,5340,1,8847,113,117,97,108,59,1,8849,101,114,115,101,116,4,2,59,69,5358,5360,1,8848,113,117,97,108,59,1,8850,110,105,111,110,59,1,8852,99,114,59,3,55349,56494,97,114,59,1,8902,4,4,98,99,109,112,5395,5420,5475,5478,4,2,59,115,5401,5403,1,8912,101,116,4,2,59,69,5411,5413,1,8912,113,117,97,108,59,1,8838,4,2,99,104,5426,5468,101,101,100,115,4,4,59,69,83,84,5440,5442,5449,5461,1,8827,113,117,97,108,59,1,10928,108,97,110,116,69,113,117,97,108,59,1,8829,105,108,100,101,59,1,8831,84,104,97,116,59,1,8715,59,1,8721,4,3,59,101,115,5486,5488,5507,1,8913,114,115,101,116,4,2,59,69,5498,5500,1,8835,113,117,97,108,59,1,8839,101,116,59,1,8913,4,11,72,82,83,97,99,102,104,105,111,114,115,5536,5546,5552,5567,5579,5602,5607,5655,5695,5701,5711,79,82,78,5,222,1,59,5544,1,222,65,68,69,59,1,8482,4,2,72,99,5558,5563,99,121,59,1,1035,121,59,1,1062,4,2,98,117,5573,5576,59,1,9,59,1,932,4,3,97,101,121,5587,5593,5599,114,111,110,59,1,356,100,105,108,59,1,354,59,1,1058,114,59,3,55349,56599,4,2,101,105,5613,5631,4,2,114,116,5619,5627,101,102,111,114,101,59,1,8756,97,59,1,920,4,2,99,110,5637,5647,107,83,112,97,99,101,59,3,8287,8202,83,112,97,99,101,59,1,8201,108,100,101,4,4,59,69,70,84,5668,5670,5677,5688,1,8764,113,117,97,108,59,1,8771,117,108,108,69,113,117,97,108,59,1,8773,105,108,100,101,59,1,8776,112,102,59,3,55349,56651,105,112,108,101,68,111,116,59,1,8411,4,2,99,116,5717,5722,114,59,3,55349,56495,114,111,107,59,1,358,4,14,97,98,99,100,102,103,109,110,111,112,114,115,116,117,5758,5789,5805,5823,5830,5835,5846,5852,5921,5937,6089,6095,6101,6108,4,2,99,114,5764,5774,117,116,101,5,218,1,59,5772,1,218,114,4,2,59,111,5781,5783,1,8607,99,105,114,59,1,10569,114,4,2,99,101,5796,5800,121,59,1,1038,118,101,59,1,364,4,2,105,121,5811,5820,114,99,5,219,1,59,5818,1,219,59,1,1059,98,108,97,99,59,1,368,114,59,3,55349,56600,114,97,118,101,5,217,1,59,5844,1,217,97,99,114,59,1,362,4,2,100,105,5858,5905,101,114,4,2,66,80,5866,5892,4,2,97,114,5872,5876,114,59,1,95,97,99,4,2,101,107,5884,5887,59,1,9183,101,116,59,1,9141,97,114,101,110,116,104,101,115,105,115,59,1,9181,111,110,4,2,59,80,5913,5915,1,8899,108,117,115,59,1,8846,4,2,103,112,5927,5932,111,110,59,1,370,102,59,3,55349,56652,4,8,65,68,69,84,97,100,112,115,5955,5985,5996,6009,6026,6033,6044,6075,114,114,111,119,4,3,59,66,68,5967,5969,5974,1,8593,97,114,59,1,10514,111,119,110,65,114,114,111,119,59,1,8645,111,119,110,65,114,114,111,119,59,1,8597,113,117,105,108,105,98,114,105,117,109,59,1,10606,101,101,4,2,59,65,6017,6019,1,8869,114,114,111,119,59,1,8613,114,114,111,119,59,1,8657,111,119,110,97,114,114,111,119,59,1,8661,101,114,4,2,76,82,6052,6063,101,102,116,65,114,114,111,119,59,1,8598,105,103,104,116,65,114,114,111,119,59,1,8599,105,4,2,59,108,6082,6084,1,978,111,110,59,1,933,105,110,103,59,1,366,99,114,59,3,55349,56496,105,108,100,101,59,1,360,109,108,5,220,1,59,6115,1,220,4,9,68,98,99,100,101,102,111,115,118,6137,6143,6148,6152,6166,6250,6255,6261,6267,97,115,104,59,1,8875,97,114,59,1,10987,121,59,1,1042,97,115,104,4,2,59,108,6161,6163,1,8873,59,1,10982,4,2,101,114,6172,6175,59,1,8897,4,3,98,116,121,6183,6188,6238,97,114,59,1,8214,4,2,59,105,6194,6196,1,8214,99,97,108,4,4,66,76,83,84,6209,6214,6220,6231,97,114,59,1,8739,105,110,101,59,1,124,101,112,97,114,97,116,111,114,59,1,10072,105,108,100,101,59,1,8768,84,104,105,110,83,112,97,99,101,59,1,8202,114,59,3,55349,56601,112,102,59,3,55349,56653,99,114,59,3,55349,56497,100,97,115,104,59,1,8874,4,5,99,101,102,111,115,6286,6292,6298,6303,6309,105,114,99,59,1,372,100,103,101,59,1,8896,114,59,3,55349,56602,112,102,59,3,55349,56654,99,114,59,3,55349,56498,4,4,102,105,111,115,6325,6330,6333,6339,114,59,3,55349,56603,59,1,926,112,102,59,3,55349,56655,99,114,59,3,55349,56499,4,9,65,73,85,97,99,102,111,115,117,6365,6370,6375,6380,6391,6405,6410,6416,6422,99,121,59,1,1071,99,121,59,1,1031,99,121,59,1,1070,99,117,116,101,5,221,1,59,6389,1,221,4,2,105,121,6397,6402,114,99,59,1,374,59,1,1067,114,59,3,55349,56604,112,102,59,3,55349,56656,99,114,59,3,55349,56500,109,108,59,1,376,4,8,72,97,99,100,101,102,111,115,6445,6450,6457,6472,6477,6501,6505,6510,99,121,59,1,1046,99,117,116,101,59,1,377,4,2,97,121,6463,6469,114,111,110,59,1,381,59,1,1047,111,116,59,1,379,4,2,114,116,6483,6497,111,87,105,100,116,104,83,112,97,99,101,59,1,8203,97,59,1,918,114,59,1,8488,112,102,59,1,8484,99,114,59,3,55349,56501,4,16,97,98,99,101,102,103,108,109,110,111,112,114,115,116,117,119,6550,6561,6568,6612,6622,6634,6645,6672,6699,6854,6870,6923,6933,6963,6974,6983,99,117,116,101,5,225,1,59,6559,1,225,114,101,118,101,59,1,259,4,6,59,69,100,105,117,121,6582,6584,6588,6591,6600,6609,1,8766,59,3,8766,819,59,1,8767,114,99,5,226,1,59,6598,1,226,116,101,5,180,1,59,6607,1,180,59,1,1072,108,105,103,5,230,1,59,6620,1,230,4,2,59,114,6628,6630,1,8289,59,3,55349,56606,114,97,118,101,5,224,1,59,6643,1,224,4,2,101,112,6651,6667,4,2,102,112,6657,6663,115,121,109,59,1,8501,104,59,1,8501,104,97,59,1,945,4,2,97,112,6678,6692,4,2,99,108,6684,6688,114,59,1,257,103,59,1,10815,5,38,1,59,6697,1,38,4,2,100,103,6705,6737,4,5,59,97,100,115,118,6717,6719,6724,6727,6734,1,8743,110,100,59,1,10837,59,1,10844,108,111,112,101,59,1,10840,59,1,10842,4,7,59,101,108,109,114,115,122,6753,6755,6758,6762,6814,6835,6848,1,8736,59,1,10660,101,59,1,8736,115,100,4,2,59,97,6770,6772,1,8737,4,8,97,98,99,100,101,102,103,104,6790,6793,6796,6799,6802,6805,6808,6811,59,1,10664,59,1,10665,59,1,10666,59,1,10667,59,1,10668,59,1,10669,59,1,10670,59,1,10671,116,4,2,59,118,6821,6823,1,8735,98,4,2,59,100,6830,6832,1,8894,59,1,10653,4,2,112,116,6841,6845,104,59,1,8738,59,1,197,97,114,114,59,1,9084,4,2,103,112,6860,6865,111,110,59,1,261,102,59,3,55349,56658,4,7,59,69,97,101,105,111,112,6886,6888,6891,6897,6900,6904,6908,1,8776,59,1,10864,99,105,114,59,1,10863,59,1,8778,100,59,1,8779,115,59,1,39,114,111,120,4,2,59,101,6917,6919,1,8776,113,59,1,8778,105,110,103,5,229,1,59,6931,1,229,4,3,99,116,121,6941,6946,6949,114,59,3,55349,56502,59,1,42,109,112,4,2,59,101,6957,6959,1,8776,113,59,1,8781,105,108,100,101,5,227,1,59,6972,1,227,109,108,5,228,1,59,6981,1,228,4,2,99,105,6989,6997,111,110,105,110,116,59,1,8755,110,116,59,1,10769,4,16,78,97,98,99,100,101,102,105,107,108,110,111,112,114,115,117,7036,7041,7119,7135,7149,7155,7219,7224,7347,7354,7463,7489,7786,7793,7814,7866,111,116,59,1,10989,4,2,99,114,7047,7094,107,4,4,99,101,112,115,7058,7064,7073,7080,111,110,103,59,1,8780,112,115,105,108,111,110,59,1,1014,114,105,109,101,59,1,8245,105,109,4,2,59,101,7088,7090,1,8765,113,59,1,8909,4,2,118,119,7100,7105,101,101,59,1,8893,101,100,4,2,59,103,7113,7115,1,8965,101,59,1,8965,114,107,4,2,59,116,7127,7129,1,9141,98,114,107,59,1,9142,4,2,111,121,7141,7146,110,103,59,1,8780,59,1,1073,113,117,111,59,1,8222,4,5,99,109,112,114,116,7167,7181,7188,7193,7199,97,117,115,4,2,59,101,7176,7178,1,8757,59,1,8757,112,116,121,118,59,1,10672,115,105,59,1,1014,110,111,117,59,1,8492,4,3,97,104,119,7207,7210,7213,59,1,946,59,1,8502,101,101,110,59,1,8812,114,59,3,55349,56607,103,4,7,99,111,115,116,117,118,119,7241,7262,7288,7305,7328,7335,7340,4,3,97,105,117,7249,7253,7258,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,4,3,100,112,116,7270,7275,7281,111,116,59,1,10752,108,117,115,59,1,10753,105,109,101,115,59,1,10754,4,2,113,116,7294,7300,99,117,112,59,1,10758,97,114,59,1,9733,114,105,97,110,103,108,101,4,2,100,117,7318,7324,111,119,110,59,1,9661,112,59,1,9651,112,108,117,115,59,1,10756,101,101,59,1,8897,101,100,103,101,59,1,8896,97,114,111,119,59,1,10509,4,3,97,107,111,7362,7436,7458,4,2,99,110,7368,7432,107,4,3,108,115,116,7377,7386,7394,111,122,101,110,103,101,59,1,10731,113,117,97,114,101,59,1,9642,114,105,97,110,103,108,101,4,4,59,100,108,114,7411,7413,7419,7425,1,9652,111,119,110,59,1,9662,101,102,116,59,1,9666,105,103,104,116,59,1,9656,107,59,1,9251,4,2,49,51,7442,7454,4,2,50,52,7448,7451,59,1,9618,59,1,9617,52,59,1,9619,99,107,59,1,9608,4,2,101,111,7469,7485,4,2,59,113,7475,7478,3,61,8421,117,105,118,59,3,8801,8421,116,59,1,8976,4,4,112,116,119,120,7499,7504,7517,7523,102,59,3,55349,56659,4,2,59,116,7510,7512,1,8869,111,109,59,1,8869,116,105,101,59,1,8904,4,12,68,72,85,86,98,100,104,109,112,116,117,118,7549,7571,7597,7619,7655,7660,7682,7708,7715,7721,7728,7750,4,4,76,82,108,114,7559,7562,7565,7568,59,1,9559,59,1,9556,59,1,9558,59,1,9555,4,5,59,68,85,100,117,7583,7585,7588,7591,7594,1,9552,59,1,9574,59,1,9577,59,1,9572,59,1,9575,4,4,76,82,108,114,7607,7610,7613,7616,59,1,9565,59,1,9562,59,1,9564,59,1,9561,4,7,59,72,76,82,104,108,114,7635,7637,7640,7643,7646,7649,7652,1,9553,59,1,9580,59,1,9571,59,1,9568,59,1,9579,59,1,9570,59,1,9567,111,120,59,1,10697,4,4,76,82,108,114,7670,7673,7676,7679,59,1,9557,59,1,9554,59,1,9488,59,1,9484,4,5,59,68,85,100,117,7694,7696,7699,7702,7705,1,9472,59,1,9573,59,1,9576,59,1,9516,59,1,9524,105,110,117,115,59,1,8863,108,117,115,59,1,8862,105,109,101,115,59,1,8864,4,4,76,82,108,114,7738,7741,7744,7747,59,1,9563,59,1,9560,59,1,9496,59,1,9492,4,7,59,72,76,82,104,108,114,7766,7768,7771,7774,7777,7780,7783,1,9474,59,1,9578,59,1,9569,59,1,9566,59,1,9532,59,1,9508,59,1,9500,114,105,109,101,59,1,8245,4,2,101,118,7799,7804,118,101,59,1,728,98,97,114,5,166,1,59,7812,1,166,4,4,99,101,105,111,7824,7829,7834,7846,114,59,3,55349,56503,109,105,59,1,8271,109,4,2,59,101,7841,7843,1,8765,59,1,8909,108,4,3,59,98,104,7855,7857,7860,1,92,59,1,10693,115,117,98,59,1,10184,4,2,108,109,7872,7885,108,4,2,59,101,7879,7881,1,8226,116,59,1,8226,112,4,3,59,69,101,7894,7896,7899,1,8782,59,1,10926,4,2,59,113,7905,7907,1,8783,59,1,8783,4,15,97,99,100,101,102,104,105,108,111,114,115,116,117,119,121,7942,8021,8075,8080,8121,8126,8157,8279,8295,8430,8446,8485,8491,8707,8726,4,3,99,112,114,7950,7956,8007,117,116,101,59,1,263,4,6,59,97,98,99,100,115,7970,7972,7977,7984,7998,8003,1,8745,110,100,59,1,10820,114,99,117,112,59,1,10825,4,2,97,117,7990,7994,112,59,1,10827,112,59,1,10823,111,116,59,1,10816,59,3,8745,65024,4,2,101,111,8013,8017,116,59,1,8257,110,59,1,711,4,4,97,101,105,117,8031,8046,8056,8061,4,2,112,114,8037,8041,115,59,1,10829,111,110,59,1,269,100,105,108,5,231,1,59,8054,1,231,114,99,59,1,265,112,115,4,2,59,115,8069,8071,1,10828,109,59,1,10832,111,116,59,1,267,4,3,100,109,110,8088,8097,8104,105,108,5,184,1,59,8095,1,184,112,116,121,118,59,1,10674,116,5,162,2,59,101,8112,8114,1,162,114,100,111,116,59,1,183,114,59,3,55349,56608,4,3,99,101,105,8134,8138,8154,121,59,1,1095,99,107,4,2,59,109,8146,8148,1,10003,97,114,107,59,1,10003,59,1,967,114,4,7,59,69,99,101,102,109,115,8174,8176,8179,8258,8261,8268,8273,1,9675,59,1,10691,4,3,59,101,108,8187,8189,8193,1,710,113,59,1,8791,101,4,2,97,100,8200,8223,114,114,111,119,4,2,108,114,8210,8216,101,102,116,59,1,8634,105,103,104,116,59,1,8635,4,5,82,83,97,99,100,8235,8238,8241,8246,8252,59,1,174,59,1,9416,115,116,59,1,8859,105,114,99,59,1,8858,97,115,104,59,1,8861,59,1,8791,110,105,110,116,59,1,10768,105,100,59,1,10991,99,105,114,59,1,10690,117,98,115,4,2,59,117,8288,8290,1,9827,105,116,59,1,9827,4,4,108,109,110,112,8305,8326,8376,8400,111,110,4,2,59,101,8313,8315,1,58,4,2,59,113,8321,8323,1,8788,59,1,8788,4,2,109,112,8332,8344,97,4,2,59,116,8339,8341,1,44,59,1,64,4,3,59,102,108,8352,8354,8358,1,8705,110,59,1,8728,101,4,2,109,120,8365,8371,101,110,116,59,1,8705,101,115,59,1,8450,4,2,103,105,8382,8395,4,2,59,100,8388,8390,1,8773,111,116,59,1,10861,110,116,59,1,8750,4,3,102,114,121,8408,8412,8417,59,3,55349,56660,111,100,59,1,8720,5,169,2,59,115,8424,8426,1,169,114,59,1,8471,4,2,97,111,8436,8441,114,114,59,1,8629,115,115,59,1,10007,4,2,99,117,8452,8457,114,59,3,55349,56504,4,2,98,112,8463,8474,4,2,59,101,8469,8471,1,10959,59,1,10961,4,2,59,101,8480,8482,1,10960,59,1,10962,100,111,116,59,1,8943,4,7,100,101,108,112,114,118,119,8507,8522,8536,8550,8600,8697,8702,97,114,114,4,2,108,114,8516,8519,59,1,10552,59,1,10549,4,2,112,115,8528,8532,114,59,1,8926,99,59,1,8927,97,114,114,4,2,59,112,8545,8547,1,8630,59,1,10557,4,6,59,98,99,100,111,115,8564,8566,8573,8587,8592,8596,1,8746,114,99,97,112,59,1,10824,4,2,97,117,8579,8583,112,59,1,10822,112,59,1,10826,111,116,59,1,8845,114,59,1,10821,59,3,8746,65024,4,4,97,108,114,118,8610,8623,8663,8672,114,114,4,2,59,109,8618,8620,1,8631,59,1,10556,121,4,3,101,118,119,8632,8651,8656,113,4,2,112,115,8639,8645,114,101,99,59,1,8926,117,99,99,59,1,8927,101,101,59,1,8910,101,100,103,101,59,1,8911,101,110,5,164,1,59,8670,1,164,101,97,114,114,111,119,4,2,108,114,8684,8690,101,102,116,59,1,8630,105,103,104,116,59,1,8631,101,101,59,1,8910,101,100,59,1,8911,4,2,99,105,8713,8721,111,110,105,110,116,59,1,8754,110,116,59,1,8753,108,99,116,121,59,1,9005,4,19,65,72,97,98,99,100,101,102,104,105,106,108,111,114,115,116,117,119,122,8773,8778,8783,8821,8839,8854,8887,8914,8930,8944,9036,9041,9058,9197,9227,9258,9281,9297,9305,114,114,59,1,8659,97,114,59,1,10597,4,4,103,108,114,115,8793,8799,8805,8809,103,101,114,59,1,8224,101,116,104,59,1,8504,114,59,1,8595,104,4,2,59,118,8816,8818,1,8208,59,1,8867,4,2,107,108,8827,8834,97,114,111,119,59,1,10511,97,99,59,1,733,4,2,97,121,8845,8851,114,111,110,59,1,271,59,1,1076,4,3,59,97,111,8862,8864,8880,1,8518,4,2,103,114,8870,8876,103,101,114,59,1,8225,114,59,1,8650,116,115,101,113,59,1,10871,4,3,103,108,109,8895,8902,8907,5,176,1,59,8900,1,176,116,97,59,1,948,112,116,121,118,59,1,10673,4,2,105,114,8920,8926,115,104,116,59,1,10623,59,3,55349,56609,97,114,4,2,108,114,8938,8941,59,1,8643,59,1,8642,4,5,97,101,103,115,118,8956,8986,8989,8996,9001,109,4,3,59,111,115,8965,8967,8983,1,8900,110,100,4,2,59,115,8975,8977,1,8900,117,105,116,59,1,9830,59,1,9830,59,1,168,97,109,109,97,59,1,989,105,110,59,1,8946,4,3,59,105,111,9009,9011,9031,1,247,100,101,5,247,2,59,111,9020,9022,1,247,110,116,105,109,101,115,59,1,8903,110,120,59,1,8903,99,121,59,1,1106,99,4,2,111,114,9048,9053,114,110,59,1,8990,111,112,59,1,8973,4,5,108,112,116,117,119,9070,9076,9081,9130,9144,108,97,114,59,1,36,102,59,3,55349,56661,4,5,59,101,109,112,115,9093,9095,9109,9116,9122,1,729,113,4,2,59,100,9102,9104,1,8784,111,116,59,1,8785,105,110,117,115,59,1,8760,108,117,115,59,1,8724,113,117,97,114,101,59,1,8865,98,108,101,98,97,114,119,101,100,103,101,59,1,8966,110,4,3,97,100,104,9153,9160,9172,114,114,111,119,59,1,8595,111,119,110,97,114,114,111,119,115,59,1,8650,97,114,112,111,111,110,4,2,108,114,9184,9190,101,102,116,59,1,8643,105,103,104,116,59,1,8642,4,2,98,99,9203,9211,107,97,114,111,119,59,1,10512,4,2,111,114,9217,9222,114,110,59,1,8991,111,112,59,1,8972,4,3,99,111,116,9235,9248,9252,4,2,114,121,9241,9245,59,3,55349,56505,59,1,1109,108,59,1,10742,114,111,107,59,1,273,4,2,100,114,9264,9269,111,116,59,1,8945,105,4,2,59,102,9276,9278,1,9663,59,1,9662,4,2,97,104,9287,9292,114,114,59,1,8693,97,114,59,1,10607,97,110,103,108,101,59,1,10662,4,2,99,105,9311,9315,121,59,1,1119,103,114,97,114,114,59,1,10239,4,18,68,97,99,100,101,102,103,108,109,110,111,112,113,114,115,116,117,120,9361,9376,9398,9439,9444,9447,9462,9495,9531,9585,9598,9614,9659,9755,9771,9792,9808,9826,4,2,68,111,9367,9372,111,116,59,1,10871,116,59,1,8785,4,2,99,115,9382,9392,117,116,101,5,233,1,59,9390,1,233,116,101,114,59,1,10862,4,4,97,105,111,121,9408,9414,9430,9436,114,111,110,59,1,283,114,4,2,59,99,9421,9423,1,8790,5,234,1,59,9428,1,234,108,111,110,59,1,8789,59,1,1101,111,116,59,1,279,59,1,8519,4,2,68,114,9453,9458,111,116,59,1,8786,59,3,55349,56610,4,3,59,114,115,9470,9472,9482,1,10906,97,118,101,5,232,1,59,9480,1,232,4,2,59,100,9488,9490,1,10902,111,116,59,1,10904,4,4,59,105,108,115,9505,9507,9515,9518,1,10905,110,116,101,114,115,59,1,9191,59,1,8467,4,2,59,100,9524,9526,1,10901,111,116,59,1,10903,4,3,97,112,115,9539,9544,9564,99,114,59,1,275,116,121,4,3,59,115,118,9554,9556,9561,1,8709,101,116,59,1,8709,59,1,8709,112,4,2,49,59,9571,9583,4,2,51,52,9577,9580,59,1,8196,59,1,8197,1,8195,4,2,103,115,9591,9594,59,1,331,112,59,1,8194,4,2,103,112,9604,9609,111,110,59,1,281,102,59,3,55349,56662,4,3,97,108,115,9622,9635,9640,114,4,2,59,115,9629,9631,1,8917,108,59,1,10723,117,115,59,1,10865,105,4,3,59,108,118,9649,9651,9656,1,949,111,110,59,1,949,59,1,1013,4,4,99,115,117,118,9669,9686,9716,9747,4,2,105,111,9675,9680,114,99,59,1,8790,108,111,110,59,1,8789,4,2,105,108,9692,9696,109,59,1,8770,97,110,116,4,2,103,108,9705,9710,116,114,59,1,10902,101,115,115,59,1,10901,4,3,97,101,105,9724,9729,9734,108,115,59,1,61,115,116,59,1,8799,118,4,2,59,68,9741,9743,1,8801,68,59,1,10872,112,97,114,115,108,59,1,10725,4,2,68,97,9761,9766,111,116,59,1,8787,114,114,59,1,10609,4,3,99,100,105,9779,9783,9788,114,59,1,8495,111,116,59,1,8784,109,59,1,8770,4,2,97,104,9798,9801,59,1,951,5,240,1,59,9806,1,240,4,2,109,114,9814,9822,108,5,235,1,59,9820,1,235,111,59,1,8364,4,3,99,105,112,9834,9838,9843,108,59,1,33,115,116,59,1,8707,4,2,101,111,9849,9859,99,116,97,116,105,111,110,59,1,8496,110,101,110,116,105,97,108,101,59,1,8519,4,12,97,99,101,102,105,106,108,110,111,112,114,115,9896,9910,9914,9921,9954,9960,9967,9989,9994,10027,10036,10164,108,108,105,110,103,100,111,116,115,101,113,59,1,8786,121,59,1,1092,109,97,108,101,59,1,9792,4,3,105,108,114,9929,9935,9950,108,105,103,59,1,64259,4,2,105,108,9941,9945,103,59,1,64256,105,103,59,1,64260,59,3,55349,56611,108,105,103,59,1,64257,108,105,103,59,3,102,106,4,3,97,108,116,9975,9979,9984,116,59,1,9837,105,103,59,1,64258,110,115,59,1,9649,111,102,59,1,402,4,2,112,114,10000,10005,102,59,3,55349,56663,4,2,97,107,10011,10016,108,108,59,1,8704,4,2,59,118,10022,10024,1,8916,59,1,10969,97,114,116,105,110,116,59,1,10765,4,2,97,111,10042,10159,4,2,99,115,10048,10155,4,6,49,50,51,52,53,55,10062,10102,10114,10135,10139,10151,4,6,50,51,52,53,54,56,10076,10083,10086,10093,10096,10099,5,189,1,59,10081,1,189,59,1,8531,5,188,1,59,10091,1,188,59,1,8533,59,1,8537,59,1,8539,4,2,51,53,10108,10111,59,1,8532,59,1,8534,4,3,52,53,56,10122,10129,10132,5,190,1,59,10127,1,190,59,1,8535,59,1,8540,53,59,1,8536,4,2,54,56,10145,10148,59,1,8538,59,1,8541,56,59,1,8542,108,59,1,8260,119,110,59,1,8994,99,114,59,3,55349,56507,4,17,69,97,98,99,100,101,102,103,105,106,108,110,111,114,115,116,118,10206,10217,10247,10254,10268,10273,10358,10363,10374,10380,10385,10406,10458,10464,10470,10497,10610,4,2,59,108,10212,10214,1,8807,59,1,10892,4,3,99,109,112,10225,10231,10244,117,116,101,59,1,501,109,97,4,2,59,100,10239,10241,1,947,59,1,989,59,1,10886,114,101,118,101,59,1,287,4,2,105,121,10260,10265,114,99,59,1,285,59,1,1075,111,116,59,1,289,4,4,59,108,113,115,10283,10285,10288,10308,1,8805,59,1,8923,4,3,59,113,115,10296,10298,10301,1,8805,59,1,8807,108,97,110,116,59,1,10878,4,4,59,99,100,108,10318,10320,10324,10345,1,10878,99,59,1,10921,111,116,4,2,59,111,10332,10334,1,10880,4,2,59,108,10340,10342,1,10882,59,1,10884,4,2,59,101,10351,10354,3,8923,65024,115,59,1,10900,114,59,3,55349,56612,4,2,59,103,10369,10371,1,8811,59,1,8921,109,101,108,59,1,8503,99,121,59,1,1107,4,4,59,69,97,106,10395,10397,10400,10403,1,8823,59,1,10898,59,1,10917,59,1,10916,4,4,69,97,101,115,10416,10419,10434,10453,59,1,8809,112,4,2,59,112,10426,10428,1,10890,114,111,120,59,1,10890,4,2,59,113,10440,10442,1,10888,4,2,59,113,10448,10450,1,10888,59,1,8809,105,109,59,1,8935,112,102,59,3,55349,56664,97,118,101,59,1,96,4,2,99,105,10476,10480,114,59,1,8458,109,4,3,59,101,108,10489,10491,10494,1,8819,59,1,10894,59,1,10896,5,62,6,59,99,100,108,113,114,10512,10514,10527,10532,10538,10545,1,62,4,2,99,105,10520,10523,59,1,10919,114,59,1,10874,111,116,59,1,8919,80,97,114,59,1,10645,117,101,115,116,59,1,10876,4,5,97,100,101,108,115,10557,10574,10579,10599,10605,4,2,112,114,10563,10570,112,114,111,120,59,1,10886,114,59,1,10616,111,116,59,1,8919,113,4,2,108,113,10586,10592,101,115,115,59,1,8923,108,101,115,115,59,1,10892,101,115,115,59,1,8823,105,109,59,1,8819,4,2,101,110,10616,10626,114,116,110,101,113,113,59,3,8809,65024,69,59,3,8809,65024,4,10,65,97,98,99,101,102,107,111,115,121,10653,10658,10713,10718,10724,10760,10765,10786,10850,10875,114,114,59,1,8660,4,4,105,108,109,114,10668,10674,10678,10684,114,115,112,59,1,8202,102,59,1,189,105,108,116,59,1,8459,4,2,100,114,10690,10695,99,121,59,1,1098,4,3,59,99,119,10703,10705,10710,1,8596,105,114,59,1,10568,59,1,8621,97,114,59,1,8463,105,114,99,59,1,293,4,3,97,108,114,10732,10748,10754,114,116,115,4,2,59,117,10741,10743,1,9829,105,116,59,1,9829,108,105,112,59,1,8230,99,111,110,59,1,8889,114,59,3,55349,56613,115,4,2,101,119,10772,10779,97,114,111,119,59,1,10533,97,114,111,119,59,1,10534,4,5,97,109,111,112,114,10798,10803,10809,10839,10844,114,114,59,1,8703,116,104,116,59,1,8763,107,4,2,108,114,10816,10827,101,102,116,97,114,114,111,119,59,1,8617,105,103,104,116,97,114,114,111,119,59,1,8618,102,59,3,55349,56665,98,97,114,59,1,8213,4,3,99,108,116,10858,10863,10869,114,59,3,55349,56509,97,115,104,59,1,8463,114,111,107,59,1,295,4,2,98,112,10881,10887,117,108,108,59,1,8259,104,101,110,59,1,8208,4,15,97,99,101,102,103,105,106,109,110,111,112,113,115,116,117,10925,10936,10958,10977,10990,11001,11039,11045,11101,11192,11220,11226,11237,11285,11299,99,117,116,101,5,237,1,59,10934,1,237,4,3,59,105,121,10944,10946,10955,1,8291,114,99,5,238,1,59,10953,1,238,59,1,1080,4,2,99,120,10964,10968,121,59,1,1077,99,108,5,161,1,59,10975,1,161,4,2,102,114,10983,10986,59,1,8660,59,3,55349,56614,114,97,118,101,5,236,1,59,10999,1,236,4,4,59,105,110,111,11011,11013,11028,11034,1,8520,4,2,105,110,11019,11024,110,116,59,1,10764,116,59,1,8749,102,105,110,59,1,10716,116,97,59,1,8489,108,105,103,59,1,307,4,3,97,111,112,11053,11092,11096,4,3,99,103,116,11061,11065,11088,114,59,1,299,4,3,101,108,112,11073,11076,11082,59,1,8465,105,110,101,59,1,8464,97,114,116,59,1,8465,104,59,1,305,102,59,1,8887,101,100,59,1,437,4,5,59,99,102,111,116,11113,11115,11121,11136,11142,1,8712,97,114,101,59,1,8453,105,110,4,2,59,116,11129,11131,1,8734,105,101,59,1,10717,100,111,116,59,1,305,4,5,59,99,101,108,112,11154,11156,11161,11179,11186,1,8747,97,108,59,1,8890,4,2,103,114,11167,11173,101,114,115,59,1,8484,99,97,108,59,1,8890,97,114,104,107,59,1,10775,114,111,100,59,1,10812,4,4,99,103,112,116,11202,11206,11211,11216,121,59,1,1105,111,110,59,1,303,102,59,3,55349,56666,97,59,1,953,114,111,100,59,1,10812,117,101,115,116,5,191,1,59,11235,1,191,4,2,99,105,11243,11248,114,59,3,55349,56510,110,4,5,59,69,100,115,118,11261,11263,11266,11271,11282,1,8712,59,1,8953,111,116,59,1,8949,4,2,59,118,11277,11279,1,8948,59,1,8947,59,1,8712,4,2,59,105,11291,11293,1,8290,108,100,101,59,1,297,4,2,107,109,11305,11310,99,121,59,1,1110,108,5,239,1,59,11316,1,239,4,6,99,102,109,111,115,117,11332,11346,11351,11357,11363,11380,4,2,105,121,11338,11343,114,99,59,1,309,59,1,1081,114,59,3,55349,56615,97,116,104,59,1,567,112,102,59,3,55349,56667,4,2,99,101,11369,11374,114,59,3,55349,56511,114,99,121,59,1,1112,107,99,121,59,1,1108,4,8,97,99,102,103,104,106,111,115,11404,11418,11433,11438,11445,11450,11455,11461,112,112,97,4,2,59,118,11413,11415,1,954,59,1,1008,4,2,101,121,11424,11430,100,105,108,59,1,311,59,1,1082,114,59,3,55349,56616,114,101,101,110,59,1,312,99,121,59,1,1093,99,121,59,1,1116,112,102,59,3,55349,56668,99,114,59,3,55349,56512,4,23,65,66,69,72,97,98,99,100,101,102,103,104,106,108,109,110,111,112,114,115,116,117,118,11515,11538,11544,11555,11560,11721,11780,11818,11868,12136,12160,12171,12203,12208,12246,12275,12327,12509,12523,12569,12641,12732,12752,4,3,97,114,116,11523,11528,11532,114,114,59,1,8666,114,59,1,8656,97,105,108,59,1,10523,97,114,114,59,1,10510,4,2,59,103,11550,11552,1,8806,59,1,10891,97,114,59,1,10594,4,9,99,101,103,109,110,112,113,114,116,11580,11586,11594,11600,11606,11624,11627,11636,11694,117,116,101,59,1,314,109,112,116,121,118,59,1,10676,114,97,110,59,1,8466,98,100,97,59,1,955,103,4,3,59,100,108,11615,11617,11620,1,10216,59,1,10641,101,59,1,10216,59,1,10885,117,111,5,171,1,59,11634,1,171,114,4,8,59,98,102,104,108,112,115,116,11655,11657,11669,11673,11677,11681,11685,11690,1,8592,4,2,59,102,11663,11665,1,8676,115,59,1,10527,115,59,1,10525,107,59,1,8617,112,59,1,8619,108,59,1,10553,105,109,59,1,10611,108,59,1,8610,4,3,59,97,101,11702,11704,11709,1,10923,105,108,59,1,10521,4,2,59,115,11715,11717,1,10925,59,3,10925,65024,4,3,97,98,114,11729,11734,11739,114,114,59,1,10508,114,107,59,1,10098,4,2,97,107,11745,11758,99,4,2,101,107,11752,11755,59,1,123,59,1,91,4,2,101,115,11764,11767,59,1,10635,108,4,2,100,117,11774,11777,59,1,10639,59,1,10637,4,4,97,101,117,121,11790,11796,11811,11815,114,111,110,59,1,318,4,2,100,105,11802,11807,105,108,59,1,316,108,59,1,8968,98,59,1,123,59,1,1083,4,4,99,113,114,115,11828,11832,11845,11864,97,59,1,10550,117,111,4,2,59,114,11840,11842,1,8220,59,1,8222,4,2,100,117,11851,11857,104,97,114,59,1,10599,115,104,97,114,59,1,10571,104,59,1,8626,4,5,59,102,103,113,115,11880,11882,12008,12011,12031,1,8804,116,4,5,97,104,108,114,116,11895,11913,11935,11947,11996,114,114,111,119,4,2,59,116,11905,11907,1,8592,97,105,108,59,1,8610,97,114,112,111,111,110,4,2,100,117,11925,11931,111,119,110,59,1,8637,112,59,1,8636,101,102,116,97,114,114,111,119,115,59,1,8647,105,103,104,116,4,3,97,104,115,11959,11974,11984,114,114,111,119,4,2,59,115,11969,11971,1,8596,59,1,8646,97,114,112,111,111,110,115,59,1,8651,113,117,105,103,97,114,114,111,119,59,1,8621,104,114,101,101,116,105,109,101,115,59,1,8907,59,1,8922,4,3,59,113,115,12019,12021,12024,1,8804,59,1,8806,108,97,110,116,59,1,10877,4,5,59,99,100,103,115,12043,12045,12049,12070,12083,1,10877,99,59,1,10920,111,116,4,2,59,111,12057,12059,1,10879,4,2,59,114,12065,12067,1,10881,59,1,10883,4,2,59,101,12076,12079,3,8922,65024,115,59,1,10899,4,5,97,100,101,103,115,12095,12103,12108,12126,12131,112,112,114,111,120,59,1,10885,111,116,59,1,8918,113,4,2,103,113,12115,12120,116,114,59,1,8922,103,116,114,59,1,10891,116,114,59,1,8822,105,109,59,1,8818,4,3,105,108,114,12144,12150,12156,115,104,116,59,1,10620,111,111,114,59,1,8970,59,3,55349,56617,4,2,59,69,12166,12168,1,8822,59,1,10897,4,2,97,98,12177,12198,114,4,2,100,117,12184,12187,59,1,8637,4,2,59,108,12193,12195,1,8636,59,1,10602,108,107,59,1,9604,99,121,59,1,1113,4,5,59,97,99,104,116,12220,12222,12227,12235,12241,1,8810,114,114,59,1,8647,111,114,110,101,114,59,1,8990,97,114,100,59,1,10603,114,105,59,1,9722,4,2,105,111,12252,12258,100,111,116,59,1,320,117,115,116,4,2,59,97,12267,12269,1,9136,99,104,101,59,1,9136,4,4,69,97,101,115,12285,12288,12303,12322,59,1,8808,112,4,2,59,112,12295,12297,1,10889,114,111,120,59,1,10889,4,2,59,113,12309,12311,1,10887,4,2,59,113,12317,12319,1,10887,59,1,8808,105,109,59,1,8934,4,8,97,98,110,111,112,116,119,122,12345,12359,12364,12421,12446,12467,12474,12490,4,2,110,114,12351,12355,103,59,1,10220,114,59,1,8701,114,107,59,1,10214,103,4,3,108,109,114,12373,12401,12409,101,102,116,4,2,97,114,12382,12389,114,114,111,119,59,1,10229,105,103,104,116,97,114,114,111,119,59,1,10231,97,112,115,116,111,59,1,10236,105,103,104,116,97,114,114,111,119,59,1,10230,112,97,114,114,111,119,4,2,108,114,12433,12439,101,102,116,59,1,8619,105,103,104,116,59,1,8620,4,3,97,102,108,12454,12458,12462,114,59,1,10629,59,3,55349,56669,117,115,59,1,10797,105,109,101,115,59,1,10804,4,2,97,98,12480,12485,115,116,59,1,8727,97,114,59,1,95,4,3,59,101,102,12498,12500,12506,1,9674,110,103,101,59,1,9674,59,1,10731,97,114,4,2,59,108,12517,12519,1,40,116,59,1,10643,4,5,97,99,104,109,116,12535,12540,12548,12561,12564,114,114,59,1,8646,111,114,110,101,114,59,1,8991,97,114,4,2,59,100,12556,12558,1,8651,59,1,10605,59,1,8206,114,105,59,1,8895,4,6,97,99,104,105,113,116,12583,12589,12594,12597,12614,12635,113,117,111,59,1,8249,114,59,3,55349,56513,59,1,8624,109,4,3,59,101,103,12606,12608,12611,1,8818,59,1,10893,59,1,10895,4,2,98,117,12620,12623,59,1,91,111,4,2,59,114,12630,12632,1,8216,59,1,8218,114,111,107,59,1,322,5,60,8,59,99,100,104,105,108,113,114,12660,12662,12675,12680,12686,12692,12698,12705,1,60,4,2,99,105,12668,12671,59,1,10918,114,59,1,10873,111,116,59,1,8918,114,101,101,59,1,8907,109,101,115,59,1,8905,97,114,114,59,1,10614,117,101,115,116,59,1,10875,4,2,80,105,12711,12716,97,114,59,1,10646,4,3,59,101,102,12724,12726,12729,1,9667,59,1,8884,59,1,9666,114,4,2,100,117,12739,12746,115,104,97,114,59,1,10570,104,97,114,59,1,10598,4,2,101,110,12758,12768,114,116,110,101,113,113,59,3,8808,65024,69,59,3,8808,65024,4,14,68,97,99,100,101,102,104,105,108,110,111,112,115,117,12803,12809,12893,12908,12914,12928,12933,12937,13011,13025,13032,13049,13052,13069,68,111,116,59,1,8762,4,4,99,108,112,114,12819,12827,12849,12887,114,5,175,1,59,12825,1,175,4,2,101,116,12833,12836,59,1,9794,4,2,59,101,12842,12844,1,10016,115,101,59,1,10016,4,2,59,115,12855,12857,1,8614,116,111,4,4,59,100,108,117,12869,12871,12877,12883,1,8614,111,119,110,59,1,8615,101,102,116,59,1,8612,112,59,1,8613,107,101,114,59,1,9646,4,2,111,121,12899,12905,109,109,97,59,1,10793,59,1,1084,97,115,104,59,1,8212,97,115,117,114,101,100,97,110,103,108,101,59,1,8737,114,59,3,55349,56618,111,59,1,8487,4,3,99,100,110,12945,12954,12985,114,111,5,181,1,59,12952,1,181,4,4,59,97,99,100,12964,12966,12971,12976,1,8739,115,116,59,1,42,105,114,59,1,10992,111,116,5,183,1,59,12983,1,183,117,115,4,3,59,98,100,12995,12997,13000,1,8722,59,1,8863,4,2,59,117,13006,13008,1,8760,59,1,10794,4,2,99,100,13017,13021,112,59,1,10971,114,59,1,8230,112,108,117,115,59,1,8723,4,2,100,112,13038,13044,101,108,115,59,1,8871,102,59,3,55349,56670,59,1,8723,4,2,99,116,13058,13063,114,59,3,55349,56514,112,111,115,59,1,8766,4,3,59,108,109,13077,13079,13087,1,956,116,105,109,97,112,59,1,8888,97,112,59,1,8888,4,24,71,76,82,86,97,98,99,100,101,102,103,104,105,106,108,109,111,112,114,115,116,117,118,119,13142,13165,13217,13229,13247,13330,13359,13414,13420,13508,13513,13579,13602,13626,13631,13762,13767,13855,13936,13995,14214,14285,14312,14432,4,2,103,116,13148,13152,59,3,8921,824,4,2,59,118,13158,13161,3,8811,8402,59,3,8811,824,4,3,101,108,116,13173,13200,13204,102,116,4,2,97,114,13181,13188,114,114,111,119,59,1,8653,105,103,104,116,97,114,114,111,119,59,1,8654,59,3,8920,824,4,2,59,118,13210,13213,3,8810,8402,59,3,8810,824,105,103,104,116,97,114,114,111,119,59,1,8655,4,2,68,100,13235,13241,97,115,104,59,1,8879,97,115,104,59,1,8878,4,5,98,99,110,112,116,13259,13264,13270,13275,13308,108,97,59,1,8711,117,116,101,59,1,324,103,59,3,8736,8402,4,5,59,69,105,111,112,13287,13289,13293,13298,13302,1,8777,59,3,10864,824,100,59,3,8779,824,115,59,1,329,114,111,120,59,1,8777,117,114,4,2,59,97,13316,13318,1,9838,108,4,2,59,115,13325,13327,1,9838,59,1,8469,4,2,115,117,13336,13344,112,5,160,1,59,13342,1,160,109,112,4,2,59,101,13352,13355,3,8782,824,59,3,8783,824,4,5,97,101,111,117,121,13371,13385,13391,13407,13411,4,2,112,114,13377,13380,59,1,10819,111,110,59,1,328,100,105,108,59,1,326,110,103,4,2,59,100,13399,13401,1,8775,111,116,59,3,10861,824,112,59,1,10818,59,1,1085,97,115,104,59,1,8211,4,7,59,65,97,100,113,115,120,13436,13438,13443,13466,13472,13478,13494,1,8800,114,114,59,1,8663,114,4,2,104,114,13450,13454,107,59,1,10532,4,2,59,111,13460,13462,1,8599,119,59,1,8599,111,116,59,3,8784,824,117,105,118,59,1,8802,4,2,101,105,13484,13489,97,114,59,1,10536,109,59,3,8770,824,105,115,116,4,2,59,115,13503,13505,1,8708,59,1,8708,114,59,3,55349,56619,4,4,69,101,115,116,13523,13527,13563,13568,59,3,8807,824,4,3,59,113,115,13535,13537,13559,1,8817,4,3,59,113,115,13545,13547,13551,1,8817,59,3,8807,824,108,97,110,116,59,3,10878,824,59,3,10878,824,105,109,59,1,8821,4,2,59,114,13574,13576,1,8815,59,1,8815,4,3,65,97,112,13587,13592,13597,114,114,59,1,8654,114,114,59,1,8622,97,114,59,1,10994,4,3,59,115,118,13610,13612,13623,1,8715,4,2,59,100,13618,13620,1,8956,59,1,8954,59,1,8715,99,121,59,1,1114,4,7,65,69,97,100,101,115,116,13647,13652,13656,13661,13665,13737,13742,114,114,59,1,8653,59,3,8806,824,114,114,59,1,8602,114,59,1,8229,4,4,59,102,113,115,13675,13677,13703,13725,1,8816,116,4,2,97,114,13684,13691,114,114,111,119,59,1,8602,105,103,104,116,97,114,114,111,119,59,1,8622,4,3,59,113,115,13711,13713,13717,1,8816,59,3,8806,824,108,97,110,116,59,3,10877,824,4,2,59,115,13731,13734,3,10877,824,59,1,8814,105,109,59,1,8820,4,2,59,114,13748,13750,1,8814,105,4,2,59,101,13757,13759,1,8938,59,1,8940,105,100,59,1,8740,4,2,112,116,13773,13778,102,59,3,55349,56671,5,172,3,59,105,110,13787,13789,13829,1,172,110,4,4,59,69,100,118,13800,13802,13806,13812,1,8713,59,3,8953,824,111,116,59,3,8949,824,4,3,97,98,99,13820,13823,13826,59,1,8713,59,1,8951,59,1,8950,105,4,2,59,118,13836,13838,1,8716,4,3,97,98,99,13846,13849,13852,59,1,8716,59,1,8958,59,1,8957,4,3,97,111,114,13863,13892,13899,114,4,4,59,97,115,116,13874,13876,13883,13888,1,8742,108,108,101,108,59,1,8742,108,59,3,11005,8421,59,3,8706,824,108,105,110,116,59,1,10772,4,3,59,99,101,13907,13909,13914,1,8832,117,101,59,1,8928,4,2,59,99,13920,13923,3,10927,824,4,2,59,101,13929,13931,1,8832,113,59,3,10927,824,4,4,65,97,105,116,13946,13951,13971,13982,114,114,59,1,8655,114,114,4,3,59,99,119,13961,13963,13967,1,8603,59,3,10547,824,59,3,8605,824,103,104,116,97,114,114,111,119,59,1,8603,114,105,4,2,59,101,13990,13992,1,8939,59,1,8941,4,7,99,104,105,109,112,113,117,14011,14036,14060,14080,14085,14090,14106,4,4,59,99,101,114,14021,14023,14028,14032,1,8833,117,101,59,1,8929,59,3,10928,824,59,3,55349,56515,111,114,116,4,2,109,112,14045,14050,105,100,59,1,8740,97,114,97,108,108,101,108,59,1,8742,109,4,2,59,101,14067,14069,1,8769,4,2,59,113,14075,14077,1,8772,59,1,8772,105,100,59,1,8740,97,114,59,1,8742,115,117,4,2,98,112,14098,14102,101,59,1,8930,101,59,1,8931,4,3,98,99,112,14114,14157,14171,4,4,59,69,101,115,14124,14126,14130,14133,1,8836,59,3,10949,824,59,1,8840,101,116,4,2,59,101,14141,14144,3,8834,8402,113,4,2,59,113,14151,14153,1,8840,59,3,10949,824,99,4,2,59,101,14164,14166,1,8833,113,59,3,10928,824,4,4,59,69,101,115,14181,14183,14187,14190,1,8837,59,3,10950,824,59,1,8841,101,116,4,2,59,101,14198,14201,3,8835,8402,113,4,2,59,113,14208,14210,1,8841,59,3,10950,824,4,4,103,105,108,114,14224,14228,14238,14242,108,59,1,8825,108,100,101,5,241,1,59,14236,1,241,103,59,1,8824,105,97,110,103,108,101,4,2,108,114,14254,14269,101,102,116,4,2,59,101,14263,14265,1,8938,113,59,1,8940,105,103,104,116,4,2,59,101,14279,14281,1,8939,113,59,1,8941,4,2,59,109,14291,14293,1,957,4,3,59,101,115,14301,14303,14308,1,35,114,111,59,1,8470,112,59,1,8199,4,9,68,72,97,100,103,105,108,114,115,14332,14338,14344,14349,14355,14369,14376,14408,14426,97,115,104,59,1,8877,97,114,114,59,1,10500,112,59,3,8781,8402,97,115,104,59,1,8876,4,2,101,116,14361,14365,59,3,8805,8402,59,3,62,8402,110,102,105,110,59,1,10718,4,3,65,101,116,14384,14389,14393,114,114,59,1,10498,59,3,8804,8402,4,2,59,114,14399,14402,3,60,8402,105,101,59,3,8884,8402,4,2,65,116,14414,14419,114,114,59,1,10499,114,105,101,59,3,8885,8402,105,109,59,3,8764,8402,4,3,65,97,110,14440,14445,14468,114,114,59,1,8662,114,4,2,104,114,14452,14456,107,59,1,10531,4,2,59,111,14462,14464,1,8598,119,59,1,8598,101,97,114,59,1,10535,4,18,83,97,99,100,101,102,103,104,105,108,109,111,112,114,115,116,117,118,14512,14515,14535,14560,14597,14603,14618,14643,14657,14662,14701,14741,14747,14769,14851,14877,14907,14916,59,1,9416,4,2,99,115,14521,14531,117,116,101,5,243,1,59,14529,1,243,116,59,1,8859,4,2,105,121,14541,14557,114,4,2,59,99,14548,14550,1,8858,5,244,1,59,14555,1,244,59,1,1086,4,5,97,98,105,111,115,14572,14577,14583,14587,14591,115,104,59,1,8861,108,97,99,59,1,337,118,59,1,10808,116,59,1,8857,111,108,100,59,1,10684,108,105,103,59,1,339,4,2,99,114,14609,14614,105,114,59,1,10687,59,3,55349,56620,4,3,111,114,116,14626,14630,14640,110,59,1,731,97,118,101,5,242,1,59,14638,1,242,59,1,10689,4,2,98,109,14649,14654,97,114,59,1,10677,59,1,937,110,116,59,1,8750,4,4,97,99,105,116,14672,14677,14693,14698,114,114,59,1,8634,4,2,105,114,14683,14687,114,59,1,10686,111,115,115,59,1,10683,110,101,59,1,8254,59,1,10688,4,3,97,101,105,14709,14714,14719,99,114,59,1,333,103,97,59,1,969,4,3,99,100,110,14727,14733,14736,114,111,110,59,1,959,59,1,10678,117,115,59,1,8854,112,102,59,3,55349,56672,4,3,97,101,108,14755,14759,14764,114,59,1,10679,114,112,59,1,10681,117,115,59,1,8853,4,7,59,97,100,105,111,115,118,14785,14787,14792,14831,14837,14841,14848,1,8744,114,114,59,1,8635,4,4,59,101,102,109,14802,14804,14817,14824,1,10845,114,4,2,59,111,14811,14813,1,8500,102,59,1,8500,5,170,1,59,14822,1,170,5,186,1,59,14829,1,186,103,111,102,59,1,8886,114,59,1,10838,108,111,112,101,59,1,10839,59,1,10843,4,3,99,108,111,14859,14863,14873,114,59,1,8500,97,115,104,5,248,1,59,14871,1,248,108,59,1,8856,105,4,2,108,109,14884,14893,100,101,5,245,1,59,14891,1,245,101,115,4,2,59,97,14901,14903,1,8855,115,59,1,10806,109,108,5,246,1,59,14914,1,246,98,97,114,59,1,9021,4,12,97,99,101,102,104,105,108,109,111,114,115,117,14948,14992,14996,15033,15038,15068,15090,15189,15192,15222,15427,15441,114,4,4,59,97,115,116,14959,14961,14976,14989,1,8741,5,182,2,59,108,14968,14970,1,182,108,101,108,59,1,8741,4,2,105,108,14982,14986,109,59,1,10995,59,1,11005,59,1,8706,121,59,1,1087,114,4,5,99,105,109,112,116,15009,15014,15019,15024,15027,110,116,59,1,37,111,100,59,1,46,105,108,59,1,8240,59,1,8869,101,110,107,59,1,8241,114,59,3,55349,56621,4,3,105,109,111,15046,15057,15063,4,2,59,118,15052,15054,1,966,59,1,981,109,97,116,59,1,8499,110,101,59,1,9742,4,3,59,116,118,15076,15078,15087,1,960,99,104,102,111,114,107,59,1,8916,59,1,982,4,2,97,117,15096,15119,110,4,2,99,107,15103,15115,107,4,2,59,104,15110,15112,1,8463,59,1,8462,118,59,1,8463,115,4,9,59,97,98,99,100,101,109,115,116,15140,15142,15148,15151,15156,15168,15171,15179,15184,1,43,99,105,114,59,1,10787,59,1,8862,105,114,59,1,10786,4,2,111,117,15162,15165,59,1,8724,59,1,10789,59,1,10866,110,5,177,1,59,15177,1,177,105,109,59,1,10790,119,111,59,1,10791,59,1,177,4,3,105,112,117,15200,15208,15213,110,116,105,110,116,59,1,10773,102,59,3,55349,56673,110,100,5,163,1,59,15220,1,163,4,10,59,69,97,99,101,105,110,111,115,117,15244,15246,15249,15253,15258,15334,15347,15367,15416,15421,1,8826,59,1,10931,112,59,1,10935,117,101,59,1,8828,4,2,59,99,15264,15266,1,10927,4,6,59,97,99,101,110,115,15280,15282,15290,15299,15303,15329,1,8826,112,112,114,111,120,59,1,10935,117,114,108,121,101,113,59,1,8828,113,59,1,10927,4,3,97,101,115,15311,15319,15324,112,112,114,111,120,59,1,10937,113,113,59,1,10933,105,109,59,1,8936,105,109,59,1,8830,109,101,4,2,59,115,15342,15344,1,8242,59,1,8473,4,3,69,97,115,15355,15358,15362,59,1,10933,112,59,1,10937,105,109,59,1,8936,4,3,100,102,112,15375,15378,15404,59,1,8719,4,3,97,108,115,15386,15392,15398,108,97,114,59,1,9006,105,110,101,59,1,8978,117,114,102,59,1,8979,4,2,59,116,15410,15412,1,8733,111,59,1,8733,105,109,59,1,8830,114,101,108,59,1,8880,4,2,99,105,15433,15438,114,59,3,55349,56517,59,1,968,110,99,115,112,59,1,8200,4,6,102,105,111,112,115,117,15462,15467,15472,15478,15485,15491,114,59,3,55349,56622,110,116,59,1,10764,112,102,59,3,55349,56674,114,105,109,101,59,1,8279,99,114,59,3,55349,56518,4,3,97,101,111,15499,15520,15534,116,4,2,101,105,15506,15515,114,110,105,111,110,115,59,1,8461,110,116,59,1,10774,115,116,4,2,59,101,15528,15530,1,63,113,59,1,8799,116,5,34,1,59,15540,1,34,4,21,65,66,72,97,98,99,100,101,102,104,105,108,109,110,111,112,114,115,116,117,120,15586,15609,15615,15620,15796,15855,15893,15931,15977,16001,16039,16183,16204,16222,16228,16285,16312,16318,16363,16408,16416,4,3,97,114,116,15594,15599,15603,114,114,59,1,8667,114,59,1,8658,97,105,108,59,1,10524,97,114,114,59,1,10511,97,114,59,1,10596,4,7,99,100,101,110,113,114,116,15636,15651,15656,15664,15687,15696,15770,4,2,101,117,15642,15646,59,3,8765,817,116,101,59,1,341,105,99,59,1,8730,109,112,116,121,118,59,1,10675,103,4,4,59,100,101,108,15675,15677,15680,15683,1,10217,59,1,10642,59,1,10661,101,59,1,10217,117,111,5,187,1,59,15694,1,187,114,4,11,59,97,98,99,102,104,108,112,115,116,119,15721,15723,15727,15739,15742,15746,15750,15754,15758,15763,15767,1,8594,112,59,1,10613,4,2,59,102,15733,15735,1,8677,115,59,1,10528,59,1,10547,115,59,1,10526,107,59,1,8618,112,59,1,8620,108,59,1,10565,105,109,59,1,10612,108,59,1,8611,59,1,8605,4,2,97,105,15776,15781,105,108,59,1,10522,111,4,2,59,110,15788,15790,1,8758,97,108,115,59,1,8474,4,3,97,98,114,15804,15809,15814,114,114,59,1,10509,114,107,59,1,10099,4,2,97,107,15820,15833,99,4,2,101,107,15827,15830,59,1,125,59,1,93,4,2,101,115,15839,15842,59,1,10636,108,4,2,100,117,15849,15852,59,1,10638,59,1,10640,4,4,97,101,117,121,15865,15871,15886,15890,114,111,110,59,1,345,4,2,100,105,15877,15882,105,108,59,1,343,108,59,1,8969,98,59,1,125,59,1,1088,4,4,99,108,113,115,15903,15907,15914,15927,97,59,1,10551,100,104,97,114,59,1,10601,117,111,4,2,59,114,15922,15924,1,8221,59,1,8221,104,59,1,8627,4,3,97,99,103,15939,15966,15970,108,4,4,59,105,112,115,15950,15952,15957,15963,1,8476,110,101,59,1,8475,97,114,116,59,1,8476,59,1,8477,116,59,1,9645,5,174,1,59,15975,1,174,4,3,105,108,114,15985,15991,15997,115,104,116,59,1,10621,111,111,114,59,1,8971,59,3,55349,56623,4,2,97,111,16007,16028,114,4,2,100,117,16014,16017,59,1,8641,4,2,59,108,16023,16025,1,8640,59,1,10604,4,2,59,118,16034,16036,1,961,59,1,1009,4,3,103,110,115,16047,16167,16171,104,116,4,6,97,104,108,114,115,116,16063,16081,16103,16130,16143,16155,114,114,111,119,4,2,59,116,16073,16075,1,8594,97,105,108,59,1,8611,97,114,112,111,111,110,4,2,100,117,16093,16099,111,119,110,59,1,8641,112,59,1,8640,101,102,116,4,2,97,104,16112,16120,114,114,111,119,115,59,1,8644,97,114,112,111,111,110,115,59,1,8652,105,103,104,116,97,114,114,111,119,115,59,1,8649,113,117,105,103,97,114,114,111,119,59,1,8605,104,114,101,101,116,105,109,101,115,59,1,8908,103,59,1,730,105,110,103,100,111,116,115,101,113,59,1,8787,4,3,97,104,109,16191,16196,16201,114,114,59,1,8644,97,114,59,1,8652,59,1,8207,111,117,115,116,4,2,59,97,16214,16216,1,9137,99,104,101,59,1,9137,109,105,100,59,1,10990,4,4,97,98,112,116,16238,16252,16257,16278,4,2,110,114,16244,16248,103,59,1,10221,114,59,1,8702,114,107,59,1,10215,4,3,97,102,108,16265,16269,16273,114,59,1,10630,59,3,55349,56675,117,115,59,1,10798,105,109,101,115,59,1,10805,4,2,97,112,16291,16304,114,4,2,59,103,16298,16300,1,41,116,59,1,10644,111,108,105,110,116,59,1,10770,97,114,114,59,1,8649,4,4,97,99,104,113,16328,16334,16339,16342,113,117,111,59,1,8250,114,59,3,55349,56519,59,1,8625,4,2,98,117,16348,16351,59,1,93,111,4,2,59,114,16358,16360,1,8217,59,1,8217,4,3,104,105,114,16371,16377,16383,114,101,101,59,1,8908,109,101,115,59,1,8906,105,4,4,59,101,102,108,16394,16396,16399,16402,1,9657,59,1,8885,59,1,9656,116,114,105,59,1,10702,108,117,104,97,114,59,1,10600,59,1,8478,4,19,97,98,99,100,101,102,104,105,108,109,111,112,113,114,115,116,117,119,122,16459,16466,16472,16572,16590,16672,16687,16746,16844,16850,16924,16963,16988,17115,17121,17154,17206,17614,17656,99,117,116,101,59,1,347,113,117,111,59,1,8218,4,10,59,69,97,99,101,105,110,112,115,121,16494,16496,16499,16513,16518,16531,16536,16556,16564,16569,1,8827,59,1,10932,4,2,112,114,16505,16508,59,1,10936,111,110,59,1,353,117,101,59,1,8829,4,2,59,100,16524,16526,1,10928,105,108,59,1,351,114,99,59,1,349,4,3,69,97,115,16544,16547,16551,59,1,10934,112,59,1,10938,105,109,59,1,8937,111,108,105,110,116,59,1,10771,105,109,59,1,8831,59,1,1089,111,116,4,3,59,98,101,16582,16584,16587,1,8901,59,1,8865,59,1,10854,4,7,65,97,99,109,115,116,120,16606,16611,16634,16642,16646,16652,16668,114,114,59,1,8664,114,4,2,104,114,16618,16622,107,59,1,10533,4,2,59,111,16628,16630,1,8600,119,59,1,8600,116,5,167,1,59,16640,1,167,105,59,1,59,119,97,114,59,1,10537,109,4,2,105,110,16659,16665,110,117,115,59,1,8726,59,1,8726,116,59,1,10038,114,4,2,59,111,16679,16682,3,55349,56624,119,110,59,1,8994,4,4,97,99,111,121,16697,16702,16716,16739,114,112,59,1,9839,4,2,104,121,16708,16713,99,121,59,1,1097,59,1,1096,114,116,4,2,109,112,16724,16729,105,100,59,1,8739,97,114,97,108,108,101,108,59,1,8741,5,173,1,59,16744,1,173,4,2,103,109,16752,16770,109,97,4,3,59,102,118,16762,16764,16767,1,963,59,1,962,59,1,962,4,8,59,100,101,103,108,110,112,114,16788,16790,16795,16806,16817,16828,16832,16838,1,8764,111,116,59,1,10858,4,2,59,113,16801,16803,1,8771,59,1,8771,4,2,59,69,16812,16814,1,10910,59,1,10912,4,2,59,69,16823,16825,1,10909,59,1,10911,101,59,1,8774,108,117,115,59,1,10788,97,114,114,59,1,10610,97,114,114,59,1,8592,4,4,97,101,105,116,16860,16883,16891,16904,4,2,108,115,16866,16878,108,115,101,116,109,105,110,117,115,59,1,8726,104,112,59,1,10803,112,97,114,115,108,59,1,10724,4,2,100,108,16897,16900,59,1,8739,101,59,1,8995,4,2,59,101,16910,16912,1,10922,4,2,59,115,16918,16920,1,10924,59,3,10924,65024,4,3,102,108,112,16932,16938,16958,116,99,121,59,1,1100,4,2,59,98,16944,16946,1,47,4,2,59,97,16952,16954,1,10692,114,59,1,9023,102,59,3,55349,56676,97,4,2,100,114,16970,16985,101,115,4,2,59,117,16978,16980,1,9824,105,116,59,1,9824,59,1,8741,4,3,99,115,117,16996,17028,17089,4,2,97,117,17002,17015,112,4,2,59,115,17009,17011,1,8851,59,3,8851,65024,112,4,2,59,115,17022,17024,1,8852,59,3,8852,65024,117,4,2,98,112,17035,17062,4,3,59,101,115,17043,17045,17048,1,8847,59,1,8849,101,116,4,2,59,101,17056,17058,1,8847,113,59,1,8849,4,3,59,101,115,17070,17072,17075,1,8848,59,1,8850,101,116,4,2,59,101,17083,17085,1,8848,113,59,1,8850,4,3,59,97,102,17097,17099,17112,1,9633,114,4,2,101,102,17106,17109,59,1,9633,59,1,9642,59,1,9642,97,114,114,59,1,8594,4,4,99,101,109,116,17131,17136,17142,17148,114,59,3,55349,56520,116,109,110,59,1,8726,105,108,101,59,1,8995,97,114,102,59,1,8902,4,2,97,114,17160,17172,114,4,2,59,102,17167,17169,1,9734,59,1,9733,4,2,97,110,17178,17202,105,103,104,116,4,2,101,112,17188,17197,112,115,105,108,111,110,59,1,1013,104,105,59,1,981,115,59,1,175,4,5,98,99,109,110,112,17218,17351,17420,17423,17427,4,9,59,69,100,101,109,110,112,114,115,17238,17240,17243,17248,17261,17267,17279,17285,17291,1,8834,59,1,10949,111,116,59,1,10941,4,2,59,100,17254,17256,1,8838,111,116,59,1,10947,117,108,116,59,1,10945,4,2,69,101,17273,17276,59,1,10955,59,1,8842,108,117,115,59,1,10943,97,114,114,59,1,10617,4,3,101,105,117,17299,17335,17339,116,4,3,59,101,110,17308,17310,17322,1,8834,113,4,2,59,113,17317,17319,1,8838,59,1,10949,101,113,4,2,59,113,17330,17332,1,8842,59,1,10955,109,59,1,10951,4,2,98,112,17345,17348,59,1,10965,59,1,10963,99,4,6,59,97,99,101,110,115,17366,17368,17376,17385,17389,17415,1,8827,112,112,114,111,120,59,1,10936,117,114,108,121,101,113,59,1,8829,113,59,1,10928,4,3,97,101,115,17397,17405,17410,112,112,114,111,120,59,1,10938,113,113,59,1,10934,105,109,59,1,8937,105,109,59,1,8831,59,1,8721,103,59,1,9834,4,13,49,50,51,59,69,100,101,104,108,109,110,112,115,17455,17462,17469,17476,17478,17481,17496,17509,17524,17530,17536,17548,17554,5,185,1,59,17460,1,185,5,178,1,59,17467,1,178,5,179,1,59,17474,1,179,1,8835,59,1,10950,4,2,111,115,17487,17491,116,59,1,10942,117,98,59,1,10968,4,2,59,100,17502,17504,1,8839,111,116,59,1,10948,115,4,2,111,117,17516,17520,108,59,1,10185,98,59,1,10967,97,114,114,59,1,10619,117,108,116,59,1,10946,4,2,69,101,17542,17545,59,1,10956,59,1,8843,108,117,115,59,1,10944,4,3,101,105,117,17562,17598,17602,116,4,3,59,101,110,17571,17573,17585,1,8835,113,4,2,59,113,17580,17582,1,8839,59,1,10950,101,113,4,2,59,113,17593,17595,1,8843,59,1,10956,109,59,1,10952,4,2,98,112,17608,17611,59,1,10964,59,1,10966,4,3,65,97,110,17622,17627,17650,114,114,59,1,8665,114,4,2,104,114,17634,17638,107,59,1,10534,4,2,59,111,17644,17646,1,8601,119,59,1,8601,119,97,114,59,1,10538,108,105,103,5,223,1,59,17664,1,223,4,13,97,98,99,100,101,102,104,105,111,112,114,115,119,17694,17709,17714,17737,17742,17749,17754,17860,17905,17957,17964,18090,18122,4,2,114,117,17700,17706,103,101,116,59,1,8982,59,1,964,114,107,59,1,9140,4,3,97,101,121,17722,17728,17734,114,111,110,59,1,357,100,105,108,59,1,355,59,1,1090,111,116,59,1,8411,108,114,101,99,59,1,8981,114,59,3,55349,56625,4,4,101,105,107,111,17764,17805,17836,17851,4,2,114,116,17770,17786,101,4,2,52,102,17777,17780,59,1,8756,111,114,101,59,1,8756,97,4,3,59,115,118,17795,17797,17802,1,952,121,109,59,1,977,59,1,977,4,2,99,110,17811,17831,107,4,2,97,115,17818,17826,112,112,114,111,120,59,1,8776,105,109,59,1,8764,115,112,59,1,8201,4,2,97,115,17842,17846,112,59,1,8776,105,109,59,1,8764,114,110,5,254,1,59,17858,1,254,4,3,108,109,110,17868,17873,17901,100,101,59,1,732,101,115,5,215,3,59,98,100,17884,17886,17898,1,215,4,2,59,97,17892,17894,1,8864,114,59,1,10801,59,1,10800,116,59,1,8749,4,3,101,112,115,17913,17917,17953,97,59,1,10536,4,4,59,98,99,102,17927,17929,17934,17939,1,8868,111,116,59,1,9014,105,114,59,1,10993,4,2,59,111,17945,17948,3,55349,56677,114,107,59,1,10970,97,59,1,10537,114,105,109,101,59,1,8244,4,3,97,105,112,17972,17977,18082,100,101,59,1,8482,4,7,97,100,101,109,112,115,116,17993,18051,18056,18059,18066,18072,18076,110,103,108,101,4,5,59,100,108,113,114,18009,18011,18017,18032,18035,1,9653,111,119,110,59,1,9663,101,102,116,4,2,59,101,18026,18028,1,9667,113,59,1,8884,59,1,8796,105,103,104,116,4,2,59,101,18045,18047,1,9657,113,59,1,8885,111,116,59,1,9708,59,1,8796,105,110,117,115,59,1,10810,108,117,115,59,1,10809,98,59,1,10701,105,109,101,59,1,10811,101,122,105,117,109,59,1,9186,4,3,99,104,116,18098,18111,18116,4,2,114,121,18104,18108,59,3,55349,56521,59,1,1094,99,121,59,1,1115,114,111,107,59,1,359,4,2,105,111,18128,18133,120,116,59,1,8812,104,101,97,100,4,2,108,114,18143,18154,101,102,116,97,114,114,111,119,59,1,8606,105,103,104,116,97,114,114,111,119,59,1,8608,4,18,65,72,97,98,99,100,102,103,104,108,109,111,112,114,115,116,117,119,18204,18209,18214,18234,18250,18268,18292,18308,18319,18343,18379,18397,18413,18504,18547,18553,18584,18603,114,114,59,1,8657,97,114,59,1,10595,4,2,99,114,18220,18230,117,116,101,5,250,1,59,18228,1,250,114,59,1,8593,114,4,2,99,101,18241,18245,121,59,1,1118,118,101,59,1,365,4,2,105,121,18256,18265,114,99,5,251,1,59,18263,1,251,59,1,1091,4,3,97,98,104,18276,18281,18287,114,114,59,1,8645,108,97,99,59,1,369,97,114,59,1,10606,4,2,105,114,18298,18304,115,104,116,59,1,10622,59,3,55349,56626,114,97,118,101,5,249,1,59,18317,1,249,4,2,97,98,18325,18338,114,4,2,108,114,18332,18335,59,1,8639,59,1,8638,108,107,59,1,9600,4,2,99,116,18349,18374,4,2,111,114,18355,18369,114,110,4,2,59,101,18363,18365,1,8988,114,59,1,8988,111,112,59,1,8975,114,105,59,1,9720,4,2,97,108,18385,18390,99,114,59,1,363,5,168,1,59,18395,1,168,4,2,103,112,18403,18408,111,110,59,1,371,102,59,3,55349,56678,4,6,97,100,104,108,115,117,18427,18434,18445,18470,18475,18494,114,114,111,119,59,1,8593,111,119,110,97,114,114,111,119,59,1,8597,97,114,112,111,111,110,4,2,108,114,18457,18463,101,102,116,59,1,8639,105,103,104,116,59,1,8638,117,115,59,1,8846,105,4,3,59,104,108,18484,18486,18489,1,965,59,1,978,111,110,59,1,965,112,97,114,114,111,119,115,59,1,8648,4,3,99,105,116,18512,18537,18542,4,2,111,114,18518,18532,114,110,4,2,59,101,18526,18528,1,8989,114,59,1,8989,111,112,59,1,8974,110,103,59,1,367,114,105,59,1,9721,99,114,59,3,55349,56522,4,3,100,105,114,18561,18566,18572,111,116,59,1,8944,108,100,101,59,1,361,105,4,2,59,102,18579,18581,1,9653,59,1,9652,4,2,97,109,18590,18595,114,114,59,1,8648,108,5,252,1,59,18601,1,252,97,110,103,108,101,59,1,10663,4,15,65,66,68,97,99,100,101,102,108,110,111,112,114,115,122,18643,18648,18661,18667,18847,18851,18857,18904,18909,18915,18931,18937,18943,18949,18996,114,114,59,1,8661,97,114,4,2,59,118,18656,18658,1,10984,59,1,10985,97,115,104,59,1,8872,4,2,110,114,18673,18679,103,114,116,59,1,10652,4,7,101,107,110,112,114,115,116,18695,18704,18711,18720,18742,18754,18810,112,115,105,108,111,110,59,1,1013,97,112,112,97,59,1,1008,111,116,104,105,110,103,59,1,8709,4,3,104,105,114,18728,18732,18735,105,59,1,981,59,1,982,111,112,116,111,59,1,8733,4,2,59,104,18748,18750,1,8597,111,59,1,1009,4,2,105,117,18760,18766,103,109,97,59,1,962,4,2,98,112,18772,18791,115,101,116,110,101,113,4,2,59,113,18784,18787,3,8842,65024,59,3,10955,65024,115,101,116,110,101,113,4,2,59,113,18803,18806,3,8843,65024,59,3,10956,65024,4,2,104,114,18816,18822,101,116,97,59,1,977,105,97,110,103,108,101,4,2,108,114,18834,18840,101,102,116,59,1,8882,105,103,104,116,59,1,8883,121,59,1,1074,97,115,104,59,1,8866,4,3,101,108,114,18865,18884,18890,4,3,59,98,101,18873,18875,18880,1,8744,97,114,59,1,8891,113,59,1,8794,108,105,112,59,1,8942,4,2,98,116,18896,18901,97,114,59,1,124,59,1,124,114,59,3,55349,56627,116,114,105,59,1,8882,115,117,4,2,98,112,18923,18927,59,3,8834,8402,59,3,8835,8402,112,102,59,3,55349,56679,114,111,112,59,1,8733,116,114,105,59,1,8883,4,2,99,117,18955,18960,114,59,3,55349,56523,4,2,98,112,18966,18981,110,4,2,69,101,18973,18977,59,3,10955,65024,59,3,8842,65024,110,4,2,69,101,18988,18992,59,3,10956,65024,59,3,8843,65024,105,103,122,97,103,59,1,10650,4,7,99,101,102,111,112,114,115,19020,19026,19061,19066,19072,19075,19089,105,114,99,59,1,373,4,2,100,105,19032,19055,4,2,98,103,19038,19043,97,114,59,1,10847,101,4,2,59,113,19050,19052,1,8743,59,1,8793,101,114,112,59,1,8472,114,59,3,55349,56628,112,102,59,3,55349,56680,59,1,8472,4,2,59,101,19081,19083,1,8768,97,116,104,59,1,8768,99,114,59,3,55349,56524,4,14,99,100,102,104,105,108,109,110,111,114,115,117,118,119,19125,19146,19152,19157,19173,19176,19192,19197,19202,19236,19252,19269,19286,19291,4,3,97,105,117,19133,19137,19142,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,116,114,105,59,1,9661,114,59,3,55349,56629,4,2,65,97,19163,19168,114,114,59,1,10234,114,114,59,1,10231,59,1,958,4,2,65,97,19182,19187,114,114,59,1,10232,114,114,59,1,10229,97,112,59,1,10236,105,115,59,1,8955,4,3,100,112,116,19210,19215,19230,111,116,59,1,10752,4,2,102,108,19221,19225,59,3,55349,56681,117,115,59,1,10753,105,109,101,59,1,10754,4,2,65,97,19242,19247,114,114,59,1,10233,114,114,59,1,10230,4,2,99,113,19258,19263,114,59,3,55349,56525,99,117,112,59,1,10758,4,2,112,116,19275,19281,108,117,115,59,1,10756,114,105,59,1,9651,101,101,59,1,8897,101,100,103,101,59,1,8896,4,8,97,99,101,102,105,111,115,117,19316,19335,19349,19357,19362,19367,19373,19379,99,4,2,117,121,19323,19332,116,101,5,253,1,59,19330,1,253,59,1,1103,4,2,105,121,19341,19346,114,99,59,1,375,59,1,1099,110,5,165,1,59,19355,1,165,114,59,3,55349,56630,99,121,59,1,1111,112,102,59,3,55349,56682,99,114,59,3,55349,56526,4,2,99,109,19385,19389,121,59,1,1102,108,5,255,1,59,19395,1,255,4,10,97,99,100,101,102,104,105,111,115,119,19419,19426,19441,19446,19462,19467,19472,19480,19486,19492,99,117,116,101,59,1,378,4,2,97,121,19432,19438,114,111,110,59,1,382,59,1,1079,111,116,59,1,380,4,2,101,116,19452,19458,116,114,102,59,1,8488,97,59,1,950,114,59,3,55349,56631,99,121,59,1,1078,103,114,97,114,114,59,1,8669,112,102,59,3,55349,56683,99,114,59,3,55349,56527,4,2,106,110,19498,19501,59,1,8205,106,59,1,8204]);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UNICODE = __webpack_require__(6);

//Aliases
var $ = UNICODE.CODE_POINTS;

//Utils

//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').
function isSurrogatePair(cp1, cp2) {
    return cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF;
}

function getSurrogatePairCodePoint(cp1, cp2) {
    return (cp1 - 0xD800) * 0x400 + 0x2400 + cp2;
}


//Const
var DEFAULT_BUFFER_WATERLINE = 1 << 16;


//Preprocessor
//NOTE: HTML input preprocessing
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
var Preprocessor = module.exports = function () {
    this.html = null;

    this.pos = -1;
    this.lastGapPos = -1;
    this.lastCharPos = -1;
    this.droppedBufferSize = 0;

    this.gapStack = [];

    this.skipNextNewLine = false;

    this.lastChunkWritten = false;
    this.endOfChunkHit = false;
    this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
};

Object.defineProperty(Preprocessor.prototype, 'sourcePos', {
    get: function () {
        return this.droppedBufferSize + this.pos;
    }
});

Preprocessor.prototype.dropParsedChunk = function () {
    if (this.pos > this.bufferWaterline) {
        this.lastCharPos -= this.pos;
        this.droppedBufferSize += this.pos;
        this.html = this.html.substring(this.pos);
        this.pos = 0;
        this.lastGapPos = -1;
        this.gapStack = [];
    }
};

Preprocessor.prototype._addGap = function () {
    this.gapStack.push(this.lastGapPos);
    this.lastGapPos = this.pos;
};

Preprocessor.prototype._processHighRangeCodePoint = function (cp) {
    //NOTE: try to peek a surrogate pair
    if (this.pos !== this.lastCharPos) {
        var nextCp = this.html.charCodeAt(this.pos + 1);

        if (isSurrogatePair(cp, nextCp)) {
            //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
            this.pos++;
            cp = getSurrogatePairCodePoint(cp, nextCp);

            //NOTE: add gap that should be avoided during retreat
            this._addGap();
        }
    }

    // NOTE: we've hit the end of chunk, stop processing at this point
    else if (!this.lastChunkWritten) {
        this.endOfChunkHit = true;
        return $.EOF;
    }

    return cp;
};

Preprocessor.prototype.write = function (chunk, isLastChunk) {
    if (this.html)
        this.html += chunk;

    else
        this.html = chunk;

    this.lastCharPos = this.html.length - 1;
    this.endOfChunkHit = false;
    this.lastChunkWritten = isLastChunk;
};

Preprocessor.prototype.insertHtmlAtCurrentPos = function (chunk) {
    this.html = this.html.substring(0, this.pos + 1) +
                chunk +
                this.html.substring(this.pos + 1, this.html.length);

    this.lastCharPos = this.html.length - 1;
    this.endOfChunkHit = false;
};


Preprocessor.prototype.advance = function () {
    this.pos++;

    if (this.pos > this.lastCharPos) {
        if (!this.lastChunkWritten)
            this.endOfChunkHit = true;

        return $.EOF;
    }

    var cp = this.html.charCodeAt(this.pos);

    //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
    //must be ignored.
    if (this.skipNextNewLine && cp === $.LINE_FEED) {
        this.skipNextNewLine = false;
        this._addGap();
        return this.advance();
    }

    //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
    if (cp === $.CARRIAGE_RETURN) {
        this.skipNextNewLine = true;
        return $.LINE_FEED;
    }

    this.skipNextNewLine = false;

    //OPTIMIZATION: first perform check if the code point in the allowed range that covers most common
    //HTML input (e.g. ASCII codes) to avoid performance-cost operations for high-range code points.
    return cp >= 0xD800 ? this._processHighRangeCodePoint(cp) : cp;
};

Preprocessor.prototype.retreat = function () {
    if (this.pos === this.lastGapPos) {
        this.lastGapPos = this.gapStack.pop();
        this.pos--;
    }

    this.pos--;
};



/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var doctype = __webpack_require__(13),
    DOCUMENT_MODE = __webpack_require__(2).DOCUMENT_MODE;


//Conversion tables for DOM Level1 structure emulation
var nodeTypes = {
    element: 1,
    text: 3,
    cdata: 4,
    comment: 8
};

var nodePropertyShorthands = {
    tagName: 'name',
    childNodes: 'children',
    parentNode: 'parent',
    previousSibling: 'prev',
    nextSibling: 'next',
    nodeValue: 'data'
};

//Node
var Node = function (props) {
    for (var key in props) {
        if (props.hasOwnProperty(key))
            this[key] = props[key];
    }
};

Node.prototype = {
    get firstChild() {
        var children = this.children;

        return children && children[0] || null;
    },

    get lastChild() {
        var children = this.children;

        return children && children[children.length - 1] || null;
    },

    get nodeType() {
        return nodeTypes[this.type] || nodeTypes.element;
    }
};

Object.keys(nodePropertyShorthands).forEach(function (key) {
    var shorthand = nodePropertyShorthands[key];

    Object.defineProperty(Node.prototype, key, {
        get: function () {
            return this[shorthand] || null;
        },
        set: function (val) {
            this[shorthand] = val;
            return val;
        }
    });
});


//Node construction
exports.createDocument = function () {
    return new Node({
        type: 'root',
        name: 'root',
        parent: null,
        prev: null,
        next: null,
        children: [],
        'x-mode': DOCUMENT_MODE.NO_QUIRKS
    });
};

exports.createDocumentFragment = function () {
    return new Node({
        type: 'root',
        name: 'root',
        parent: null,
        prev: null,
        next: null,
        children: []
    });
};

exports.createElement = function (tagName, namespaceURI, attrs) {
    var attribs = Object.create(null),
        attribsNamespace = Object.create(null),
        attribsPrefix = Object.create(null);

    for (var i = 0; i < attrs.length; i++) {
        var attrName = attrs[i].name;

        attribs[attrName] = attrs[i].value;
        attribsNamespace[attrName] = attrs[i].namespace;
        attribsPrefix[attrName] = attrs[i].prefix;
    }

    return new Node({
        type: tagName === 'script' || tagName === 'style' ? tagName : 'tag',
        name: tagName,
        namespace: namespaceURI,
        attribs: attribs,
        'x-attribsNamespace': attribsNamespace,
        'x-attribsPrefix': attribsPrefix,
        children: [],
        parent: null,
        prev: null,
        next: null
    });
};

exports.createCommentNode = function (data) {
    return new Node({
        type: 'comment',
        data: data,
        parent: null,
        prev: null,
        next: null
    });
};

var createTextNode = function (value) {
    return new Node({
        type: 'text',
        data: value,
        parent: null,
        prev: null,
        next: null
    });
};


//Tree mutation
var appendChild = exports.appendChild = function (parentNode, newNode) {
    var prev = parentNode.children[parentNode.children.length - 1];

    if (prev) {
        prev.next = newNode;
        newNode.prev = prev;
    }

    parentNode.children.push(newNode);
    newNode.parent = parentNode;
};

var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
    var insertionIdx = parentNode.children.indexOf(referenceNode),
        prev = referenceNode.prev;

    if (prev) {
        prev.next = newNode;
        newNode.prev = prev;
    }

    referenceNode.prev = newNode;
    newNode.next = referenceNode;

    parentNode.children.splice(insertionIdx, 0, newNode);
    newNode.parent = parentNode;
};

exports.setTemplateContent = function (templateElement, contentElement) {
    appendChild(templateElement, contentElement);
};

exports.getTemplateContent = function (templateElement) {
    return templateElement.children[0];
};

exports.setDocumentType = function (document, name, publicId, systemId) {
    var data = doctype.serializeContent(name, publicId, systemId),
        doctypeNode = null;

    for (var i = 0; i < document.children.length; i++) {
        if (document.children[i].type === 'directive' && document.children[i].name === '!doctype') {
            doctypeNode = document.children[i];
            break;
        }
    }

    if (doctypeNode) {
        doctypeNode.data = data;
        doctypeNode['x-name'] = name;
        doctypeNode['x-publicId'] = publicId;
        doctypeNode['x-systemId'] = systemId;
    }

    else {
        appendChild(document, new Node({
            type: 'directive',
            name: '!doctype',
            data: data,
            'x-name': name,
            'x-publicId': publicId,
            'x-systemId': systemId
        }));
    }

};

exports.setDocumentMode = function (document, mode) {
    document['x-mode'] = mode;
};

exports.getDocumentMode = function (document) {
    return document['x-mode'];
};

exports.detachNode = function (node) {
    if (node.parent) {
        var idx = node.parent.children.indexOf(node),
            prev = node.prev,
            next = node.next;

        node.prev = null;
        node.next = null;

        if (prev)
            prev.next = next;

        if (next)
            next.prev = prev;

        node.parent.children.splice(idx, 1);
        node.parent = null;
    }
};

exports.insertText = function (parentNode, text) {
    var lastChild = parentNode.children[parentNode.children.length - 1];

    if (lastChild && lastChild.type === 'text')
        lastChild.data += text;
    else
        appendChild(parentNode, createTextNode(text));
};

exports.insertTextBefore = function (parentNode, text, referenceNode) {
    var prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];

    if (prevNode && prevNode.type === 'text')
        prevNode.data += text;
    else
        insertBefore(parentNode, createTextNode(text), referenceNode);
};

exports.adoptAttributes = function (recipient, attrs) {
    for (var i = 0; i < attrs.length; i++) {
        var attrName = attrs[i].name;

        if (typeof recipient.attribs[attrName] === 'undefined') {
            recipient.attribs[attrName] = attrs[i].value;
            recipient['x-attribsNamespace'][attrName] = attrs[i].namespace;
            recipient['x-attribsPrefix'][attrName] = attrs[i].prefix;
        }
    }
};


//Tree traversing
exports.getFirstChild = function (node) {
    return node.children[0];
};

exports.getChildNodes = function (node) {
    return node.children;
};

exports.getParentNode = function (node) {
    return node.parent;
};

exports.getAttrList = function (element) {
    var attrList = [];

    for (var name in element.attribs) {
        attrList.push({
            name: name,
            value: element.attribs[name],
            namespace: element['x-attribsNamespace'][name],
            prefix: element['x-attribsPrefix'][name]
        });
    }

    return attrList;
};


//Node data
exports.getTagName = function (element) {
    return element.name;
};

exports.getNamespaceURI = function (element) {
    return element.namespace;
};

exports.getTextNodeContent = function (textNode) {
    return textNode.data;
};

exports.getCommentNodeContent = function (commentNode) {
    return commentNode.data;
};

exports.getDocumentTypeNodeName = function (doctypeNode) {
    return doctypeNode['x-name'];
};

exports.getDocumentTypeNodePublicId = function (doctypeNode) {
    return doctypeNode['x-publicId'];
};

exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
    return doctypeNode['x-systemId'];
};


//Node types
exports.isTextNode = function (node) {
    return node.type === 'text';
};

exports.isCommentNode = function (node) {
    return node.type === 'comment';
};

exports.isDocumentTypeNode = function (node) {
    return node.type === 'directive' && node.name === '!doctype';
};

exports.isElementNode = function (node) {
    return !!node.attribs;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(103);
/* tslint:enable:max-line-length */
/**
 * Converts an Observable sequence to a ES2015 compliant promise.
 *
 * @example
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Rejected Promise
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .throw(new Error('woops'))
 *   .toPromise();
 *
 * source
 *   .then((value) => console.log('Value: %s', value))
 *   .catch((err) => console.log('Error: %s', err));
 * // => Error: Error: woops
 *
 * // Setting via the config
 * Rx.config.Promise = RSVP.Promise;
 *
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Setting via the method
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise(RSVP.Promise);
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * @param PromiseCtor promise The constructor of the promise. If not provided,
 * it will look for a constructor first in Rx.config.Promise then fall back to
 * the native Promise constructor if available.
 * @return {Promise<T>} An ES2015 compatible promise with the last value from
 * the observable sequence.
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(50);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(51);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(52);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.12.2
(function() {
  var InvalidStateError, NetworkError, ProgressEvent, SecurityError, SyntaxError, XMLHttpRequest, XMLHttpRequestEventTarget, XMLHttpRequestUpload, http, https, os, url,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  XMLHttpRequestEventTarget = (function() {
    function XMLHttpRequestEventTarget() {
      this.onloadstart = null;
      this.onprogress = null;
      this.onabort = null;
      this.onerror = null;
      this.onload = null;
      this.ontimeout = null;
      this.onloadend = null;
      this._listeners = {};
    }

    XMLHttpRequestEventTarget.prototype.onloadstart = null;

    XMLHttpRequestEventTarget.prototype.onprogress = null;

    XMLHttpRequestEventTarget.prototype.onabort = null;

    XMLHttpRequestEventTarget.prototype.onerror = null;

    XMLHttpRequestEventTarget.prototype.onload = null;

    XMLHttpRequestEventTarget.prototype.ontimeout = null;

    XMLHttpRequestEventTarget.prototype.onloadend = null;

    XMLHttpRequestEventTarget.prototype.addEventListener = function(eventType, listener) {
      var base;
      eventType = eventType.toLowerCase();
      (base = this._listeners)[eventType] || (base[eventType] = []);
      this._listeners[eventType].push(listener);
      return void 0;
    };

    XMLHttpRequestEventTarget.prototype.removeEventListener = function(eventType, listener) {
      var index;
      eventType = eventType.toLowerCase();
      if (this._listeners[eventType]) {
        index = this._listeners[eventType].indexOf(listener);
        if (index !== -1) {
          this._listeners[eventType].splice(index, 1);
        }
      }
      return void 0;
    };

    XMLHttpRequestEventTarget.prototype.dispatchEvent = function(event) {
      var eventType, j, len, listener, listeners;
      event.currentTarget = event.target = this;
      eventType = event.type;
      if (listeners = this._listeners[eventType]) {
        for (j = 0, len = listeners.length; j < len; j++) {
          listener = listeners[j];
          listener.call(this, event);
        }
      }
      if (listener = this["on" + eventType]) {
        listener.call(this, event);
      }
      return void 0;
    };

    return XMLHttpRequestEventTarget;

  })();

  http = __webpack_require__(18);

  https = __webpack_require__(34);

  os = __webpack_require__(107);

  url = __webpack_require__(8);

  XMLHttpRequest = (function(superClass) {
    extend(XMLHttpRequest, superClass);

    function XMLHttpRequest(options) {
      XMLHttpRequest.__super__.constructor.call(this);
      this.onreadystatechange = null;
      this._anonymous = options && options.anon;
      this.readyState = XMLHttpRequest.UNSENT;
      this.response = null;
      this.responseText = '';
      this.responseType = '';
      this.responseURL = '';
      this.status = 0;
      this.statusText = '';
      this.timeout = 0;
      this.upload = new XMLHttpRequestUpload(this);
      this._method = null;
      this._url = null;
      this._sync = false;
      this._headers = null;
      this._loweredHeaders = null;
      this._mimeOverride = null;
      this._request = null;
      this._response = null;
      this._responseParts = null;
      this._responseHeaders = null;
      this._aborting = null;
      this._error = null;
      this._loadedBytes = 0;
      this._totalBytes = 0;
      this._lengthComputable = false;
    }

    XMLHttpRequest.prototype.onreadystatechange = null;

    XMLHttpRequest.prototype.readyState = null;

    XMLHttpRequest.prototype.response = null;

    XMLHttpRequest.prototype.responseText = null;

    XMLHttpRequest.prototype.responseType = null;

    XMLHttpRequest.prototype.status = null;

    XMLHttpRequest.prototype.timeout = null;

    XMLHttpRequest.prototype.upload = null;

    XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
      var xhrUrl;
      method = method.toUpperCase();
      if (method in this._restrictedMethods) {
        throw new SecurityError("HTTP method " + method + " is not allowed in XHR");
      }
      xhrUrl = this._parseUrl(url);
      if (async === void 0) {
        async = true;
      }
      switch (this.readyState) {
        case XMLHttpRequest.UNSENT:
        case XMLHttpRequest.OPENED:
        case XMLHttpRequest.DONE:
          null;
          break;
        case XMLHttpRequest.HEADERS_RECEIVED:
        case XMLHttpRequest.LOADING:
          null;
      }
      this._method = method;
      this._url = xhrUrl;
      this._sync = !async;
      this._headers = {};
      this._loweredHeaders = {};
      this._mimeOverride = null;
      this._setReadyState(XMLHttpRequest.OPENED);
      this._request = null;
      this._response = null;
      this.status = 0;
      this.statusText = '';
      this._responseParts = [];
      this._responseHeaders = null;
      this._loadedBytes = 0;
      this._totalBytes = 0;
      this._lengthComputable = false;
      return void 0;
    };

    XMLHttpRequest.prototype.setRequestHeader = function(name, value) {
      var loweredName;
      if (this.readyState !== XMLHttpRequest.OPENED) {
        throw new InvalidStateError("XHR readyState must be OPENED");
      }
      loweredName = name.toLowerCase();
      if (this._restrictedHeaders[loweredName] || /^sec\-/.test(loweredName) || /^proxy-/.test(loweredName)) {
        console.warn("Refused to set unsafe header \"" + name + "\"");
        return void 0;
      }
      value = value.toString();
      if (loweredName in this._loweredHeaders) {
        name = this._loweredHeaders[loweredName];
        this._headers[name] = this._headers[name] + ', ' + value;
      } else {
        this._loweredHeaders[loweredName] = name;
        this._headers[name] = value;
      }
      return void 0;
    };

    XMLHttpRequest.prototype.send = function(data) {
      if (this.readyState !== XMLHttpRequest.OPENED) {
        throw new InvalidStateError("XHR readyState must be OPENED");
      }
      if (this._request) {
        throw new InvalidStateError("send() already called");
      }
      switch (this._url.protocol) {
        case 'file:':
          this._sendFile(data);
          break;
        case 'http:':
        case 'https:':
          this._sendHttp(data);
          break;
        default:
          throw new NetworkError("Unsupported protocol " + this._url.protocol);
      }
      return void 0;
    };

    XMLHttpRequest.prototype.abort = function() {
      if (!this._request) {
        return;
      }
      this._request.abort();
      this._setError();
      this._dispatchProgress('abort');
      this._dispatchProgress('loadend');
      return void 0;
    };

    XMLHttpRequest.prototype.getResponseHeader = function(name) {
      var loweredName;
      if (!this._responseHeaders) {
        return null;
      }
      loweredName = name.toLowerCase();
      if (loweredName in this._responseHeaders) {
        return this._responseHeaders[loweredName];
      } else {
        return null;
      }
    };

    XMLHttpRequest.prototype.getAllResponseHeaders = function() {
      var lines, name, value;
      if (!this._responseHeaders) {
        return '';
      }
      lines = (function() {
        var ref, results;
        ref = this._responseHeaders;
        results = [];
        for (name in ref) {
          value = ref[name];
          results.push(name + ": " + value);
        }
        return results;
      }).call(this);
      return lines.join("\r\n");
    };

    XMLHttpRequest.prototype.overrideMimeType = function(newMimeType) {
      if (this.readyState === XMLHttpRequest.LOADING || this.readyState === XMLHttpRequest.DONE) {
        throw new InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
      }
      this._mimeOverride = newMimeType.toLowerCase();
      return void 0;
    };

    XMLHttpRequest.prototype.nodejsSet = function(options) {
      var baseUrl, parsedUrl;
      if ('httpAgent' in options) {
        this.nodejsHttpAgent = options.httpAgent;
      }
      if ('httpsAgent' in options) {
        this.nodejsHttpsAgent = options.httpsAgent;
      }
      if ('baseUrl' in options) {
        baseUrl = options.baseUrl;
        if (baseUrl !== null) {
          parsedUrl = url.parse(baseUrl, false, true);
          if (!parsedUrl.protocol) {
            throw new SyntaxError("baseUrl must be an absolute URL");
          }
        }
        this.nodejsBaseUrl = baseUrl;
      }
      return void 0;
    };

    XMLHttpRequest.nodejsSet = function(options) {
      XMLHttpRequest.prototype.nodejsSet(options);
      return void 0;
    };

    XMLHttpRequest.prototype.UNSENT = 0;

    XMLHttpRequest.UNSENT = 0;

    XMLHttpRequest.prototype.OPENED = 1;

    XMLHttpRequest.OPENED = 1;

    XMLHttpRequest.prototype.HEADERS_RECEIVED = 2;

    XMLHttpRequest.HEADERS_RECEIVED = 2;

    XMLHttpRequest.prototype.LOADING = 3;

    XMLHttpRequest.LOADING = 3;

    XMLHttpRequest.prototype.DONE = 4;

    XMLHttpRequest.DONE = 4;

    XMLHttpRequest.prototype.nodejsHttpAgent = http.globalAgent;

    XMLHttpRequest.prototype.nodejsHttpsAgent = https.globalAgent;

    XMLHttpRequest.prototype.nodejsBaseUrl = null;

    XMLHttpRequest.prototype._restrictedMethods = {
      CONNECT: true,
      TRACE: true,
      TRACK: true
    };

    XMLHttpRequest.prototype._restrictedHeaders = {
      'accept-charset': true,
      'accept-encoding': true,
      'access-control-request-headers': true,
      'access-control-request-method': true,
      connection: true,
      'content-length': true,
      cookie: true,
      cookie2: true,
      date: true,
      dnt: true,
      expect: true,
      host: true,
      'keep-alive': true,
      origin: true,
      referer: true,
      te: true,
      trailer: true,
      'transfer-encoding': true,
      upgrade: true,
      'user-agent': true,
      via: true
    };

    XMLHttpRequest.prototype._privateHeaders = {
      'set-cookie': true,
      'set-cookie2': true
    };

    XMLHttpRequest.prototype._userAgent = ("Mozilla/5.0 (" + (os.type()) + " " + (os.arch()) + ") ") + ("node.js/" + process.versions.node + " v8/" + process.versions.v8);

    XMLHttpRequest.prototype._setReadyState = function(newReadyState) {
      var event;
      this.readyState = newReadyState;
      event = new ProgressEvent('readystatechange');
      this.dispatchEvent(event);
      return void 0;
    };

    XMLHttpRequest.prototype._sendFile = function() {
      if (this._url.method !== 'GET') {
        throw new NetworkError('The file protocol only supports GET');
      }
      throw new Error("Protocol file: not implemented");
    };

    XMLHttpRequest.prototype._sendHttp = function(data) {
      if (this._sync) {
        throw new Error("Synchronous XHR processing not implemented");
      }
      if ((data != null) && (this._method === 'GET' || this._method === 'HEAD')) {
        console.warn("Discarding entity body for " + this._method + " requests");
        data = null;
      } else {
        data || (data = '');
      }
      this.upload._setData(data);
      this._finalizeHeaders();
      this._sendHxxpRequest();
      return void 0;
    };

    XMLHttpRequest.prototype._sendHxxpRequest = function() {
      var agent, hxxp, request;
      if (this._url.protocol === 'http:') {
        hxxp = http;
        agent = this.nodejsHttpAgent;
      } else {
        hxxp = https;
        agent = this.nodejsHttpsAgent;
      }
      request = hxxp.request({
        hostname: this._url.hostname,
        port: this._url.port,
        path: this._url.path,
        auth: this._url.auth,
        method: this._method,
        headers: this._headers,
        agent: agent
      });
      this._request = request;
      if (this.timeout) {
        request.setTimeout(this.timeout, (function(_this) {
          return function() {
            return _this._onHttpTimeout(request);
          };
        })(this));
      }
      request.on('response', (function(_this) {
        return function(response) {
          return _this._onHttpResponse(request, response);
        };
      })(this));
      request.on('error', (function(_this) {
        return function(error) {
          return _this._onHttpRequestError(request, error);
        };
      })(this));
      this.upload._startUpload(request);
      if (this._request === request) {
        this._dispatchProgress('loadstart');
      }
      return void 0;
    };

    XMLHttpRequest.prototype._finalizeHeaders = function() {
      this._headers['Connection'] = 'keep-alive';
      this._headers['Host'] = this._url.host;
      if (this._anonymous) {
        this._headers['Referer'] = 'about:blank';
      }
      this._headers['User-Agent'] = this._userAgent;
      this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
      return void 0;
    };

    XMLHttpRequest.prototype._onHttpResponse = function(request, response) {
      var lengthString;
      if (this._request !== request) {
        return;
      }
      switch (response.statusCode) {
        case 301:
        case 302:
        case 303:
        case 307:
        case 308:
          this._url = this._parseUrl(response.headers['location']);
          this._method = 'GET';
          if ('content-type' in this._loweredHeaders) {
            delete this._headers[this._loweredHeaders['content-type']];
            delete this._loweredHeaders['content-type'];
          }
          if ('Content-Type' in this._headers) {
            delete this._headers['Content-Type'];
          }
          delete this._headers['Content-Length'];
          this.upload._reset();
          this._finalizeHeaders();
          this._sendHxxpRequest();
          return;
      }
      this._response = response;
      this._response.on('data', (function(_this) {
        return function(data) {
          return _this._onHttpResponseData(response, data);
        };
      })(this));
      this._response.on('end', (function(_this) {
        return function() {
          return _this._onHttpResponseEnd(response);
        };
      })(this));
      this._response.on('close', (function(_this) {
        return function() {
          return _this._onHttpResponseClose(response);
        };
      })(this));
      this.responseURL = this._url.href.split('#')[0];
      this.status = this._response.statusCode;
      this.statusText = http.STATUS_CODES[this.status];
      this._parseResponseHeaders(response);
      if (lengthString = this._responseHeaders['content-length']) {
        this._totalBytes = parseInt(lengthString);
        this._lengthComputable = true;
      } else {
        this._lengthComputable = false;
      }
      return this._setReadyState(XMLHttpRequest.HEADERS_RECEIVED);
    };

    XMLHttpRequest.prototype._onHttpResponseData = function(response, data) {
      if (this._response !== response) {
        return;
      }
      this._responseParts.push(data);
      this._loadedBytes += data.length;
      if (this.readyState !== XMLHttpRequest.LOADING) {
        this._setReadyState(XMLHttpRequest.LOADING);
      }
      return this._dispatchProgress('progress');
    };

    XMLHttpRequest.prototype._onHttpResponseEnd = function(response) {
      if (this._response !== response) {
        return;
      }
      this._parseResponse();
      this._request = null;
      this._response = null;
      this._setReadyState(XMLHttpRequest.DONE);
      this._dispatchProgress('load');
      return this._dispatchProgress('loadend');
    };

    XMLHttpRequest.prototype._onHttpResponseClose = function(response) {
      var request;
      if (this._response !== response) {
        return;
      }
      request = this._request;
      this._setError();
      request.abort();
      this._setReadyState(XMLHttpRequest.DONE);
      this._dispatchProgress('error');
      return this._dispatchProgress('loadend');
    };

    XMLHttpRequest.prototype._onHttpTimeout = function(request) {
      if (this._request !== request) {
        return;
      }
      this._setError();
      request.abort();
      this._setReadyState(XMLHttpRequest.DONE);
      this._dispatchProgress('timeout');
      return this._dispatchProgress('loadend');
    };

    XMLHttpRequest.prototype._onHttpRequestError = function(request, error) {
      if (this._request !== request) {
        return;
      }
      this._setError();
      request.abort();
      this._setReadyState(XMLHttpRequest.DONE);
      this._dispatchProgress('error');
      return this._dispatchProgress('loadend');
    };

    XMLHttpRequest.prototype._dispatchProgress = function(eventType) {
      var event;
      event = new ProgressEvent(eventType);
      event.lengthComputable = this._lengthComputable;
      event.loaded = this._loadedBytes;
      event.total = this._totalBytes;
      this.dispatchEvent(event);
      return void 0;
    };

    XMLHttpRequest.prototype._setError = function() {
      this._request = null;
      this._response = null;
      this._responseHeaders = null;
      this._responseParts = null;
      return void 0;
    };

    XMLHttpRequest.prototype._parseUrl = function(urlString) {
      var absoluteUrlString, index, password, user, xhrUrl;
      if (this.nodejsBaseUrl === null) {
        absoluteUrlString = urlString;
      } else {
        absoluteUrlString = url.resolve(this.nodejsBaseUrl, urlString);
      }
      xhrUrl = url.parse(absoluteUrlString, false, true);
      xhrUrl.hash = null;
      if (xhrUrl.auth && ((typeof user !== "undefined" && user !== null) || (typeof password !== "undefined" && password !== null))) {
        index = xhrUrl.auth.indexOf(':');
        if (index === -1) {
          if (!user) {
            user = xhrUrl.auth;
          }
        } else {
          if (!user) {
            user = xhrUrl.substring(0, index);
          }
          if (!password) {
            password = xhrUrl.substring(index + 1);
          }
        }
      }
      if (user || password) {
        xhrUrl.auth = user + ":" + password;
      }
      return xhrUrl;
    };

    XMLHttpRequest.prototype._parseResponseHeaders = function(response) {
      var loweredName, name, ref, value;
      this._responseHeaders = {};
      ref = response.headers;
      for (name in ref) {
        value = ref[name];
        loweredName = name.toLowerCase();
        if (this._privateHeaders[loweredName]) {
          continue;
        }
        if (this._mimeOverride !== null && loweredName === 'content-type') {
          value = this._mimeOverride;
        }
        this._responseHeaders[loweredName] = value;
      }
      if (this._mimeOverride !== null && !('content-type' in this._responseHeaders)) {
        this._responseHeaders['content-type'] = this._mimeOverride;
      }
      return void 0;
    };

    XMLHttpRequest.prototype._parseResponse = function() {
      var arrayBuffer, buffer, i, j, jsonError, ref, view;
      if (Buffer.concat) {
        buffer = Buffer.concat(this._responseParts);
      } else {
        buffer = this._concatBuffers(this._responseParts);
      }
      this._responseParts = null;
      switch (this.responseType) {
        case 'text':
          this._parseTextResponse(buffer);
          break;
        case 'json':
          this.responseText = null;
          try {
            this.response = JSON.parse(buffer.toString('utf-8'));
          } catch (error1) {
            jsonError = error1;
            this.response = null;
          }
          break;
        case 'buffer':
          this.responseText = null;
          this.response = buffer;
          break;
        case 'arraybuffer':
          this.responseText = null;
          arrayBuffer = new ArrayBuffer(buffer.length);
          view = new Uint8Array(arrayBuffer);
          for (i = j = 0, ref = buffer.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            view[i] = buffer[i];
          }
          this.response = arrayBuffer;
          break;
        default:
          this._parseTextResponse(buffer);
      }
      return void 0;
    };

    XMLHttpRequest.prototype._parseTextResponse = function(buffer) {
      var e;
      try {
        this.responseText = buffer.toString(this._parseResponseEncoding());
      } catch (error1) {
        e = error1;
        this.responseText = buffer.toString('binary');
      }
      this.response = this.responseText;
      return void 0;
    };

    XMLHttpRequest.prototype._parseResponseEncoding = function() {
      var contentType, encoding, match;
      encoding = null;
      if (contentType = this._responseHeaders['content-type']) {
        if (match = /\;\s*charset\=(.*)$/.exec(contentType)) {
          return match[1];
        }
      }
      return 'utf-8';
    };

    XMLHttpRequest.prototype._concatBuffers = function(buffers) {
      var buffer, j, k, len, len1, length, target;
      if (buffers.length === 0) {
        return new Buffer(0);
      }
      if (buffers.length === 1) {
        return buffers[0];
      }
      length = 0;
      for (j = 0, len = buffers.length; j < len; j++) {
        buffer = buffers[j];
        length += buffer.length;
      }
      target = new Buffer(length);
      length = 0;
      for (k = 0, len1 = buffers.length; k < len1; k++) {
        buffer = buffers[k];
        buffer.copy(target, length);
        length += buffer.length;
      }
      return target;
    };

    return XMLHttpRequest;

  })(XMLHttpRequestEventTarget);

  module.exports = XMLHttpRequest;

  XMLHttpRequest.XMLHttpRequest = XMLHttpRequest;

  SecurityError = (function(superClass) {
    extend(SecurityError, superClass);

    function SecurityError() {
      SecurityError.__super__.constructor.apply(this, arguments);
    }

    return SecurityError;

  })(Error);

  XMLHttpRequest.SecurityError = SecurityError;

  InvalidStateError = (function(superClass) {
    extend(InvalidStateError, superClass);

    function InvalidStateError() {
      InvalidStateError.__super__.constructor.apply(this, arguments);
    }

    return InvalidStateError;

  })(Error);

  InvalidStateError = (function(superClass) {
    extend(InvalidStateError, superClass);

    function InvalidStateError() {
      return InvalidStateError.__super__.constructor.apply(this, arguments);
    }

    return InvalidStateError;

  })(Error);

  XMLHttpRequest.InvalidStateError = InvalidStateError;

  NetworkError = (function(superClass) {
    extend(NetworkError, superClass);

    function NetworkError() {
      NetworkError.__super__.constructor.apply(this, arguments);
    }

    return NetworkError;

  })(Error);

  XMLHttpRequest.SyntaxError = SyntaxError;

  SyntaxError = (function(superClass) {
    extend(SyntaxError, superClass);

    function SyntaxError() {
      SyntaxError.__super__.constructor.apply(this, arguments);
    }

    return SyntaxError;

  })(Error);

  ProgressEvent = (function() {
    function ProgressEvent(type) {
      this.type = type;
      this.target = null;
      this.currentTarget = null;
      this.lengthComputable = false;
      this.loaded = 0;
      this.total = 0;
    }

    ProgressEvent.prototype.bubbles = false;

    ProgressEvent.prototype.cancelable = false;

    ProgressEvent.prototype.target = null;

    ProgressEvent.prototype.loaded = null;

    ProgressEvent.prototype.lengthComputable = null;

    ProgressEvent.prototype.total = null;

    return ProgressEvent;

  })();

  XMLHttpRequest.ProgressEvent = ProgressEvent;

  XMLHttpRequestUpload = (function(superClass) {
    extend(XMLHttpRequestUpload, superClass);

    function XMLHttpRequestUpload(request) {
      XMLHttpRequestUpload.__super__.constructor.call(this);
      this._request = request;
      this._reset();
    }

    XMLHttpRequestUpload.prototype._reset = function() {
      this._contentType = null;
      this._body = null;
      return void 0;
    };

    XMLHttpRequestUpload.prototype._setData = function(data) {
      var body, i, j, k, offset, ref, ref1, view;
      if (typeof data === 'undefined' || data === null) {
        return;
      }
      if (typeof data === 'string') {
        if (data.length !== 0) {
          this._contentType = 'text/plain;charset=UTF-8';
        }
        this._body = new Buffer(data, 'utf8');
      } else if (Buffer.isBuffer(data)) {
        this._body = data;
      } else if (data instanceof ArrayBuffer) {
        body = new Buffer(data.byteLength);
        view = new Uint8Array(data);
        for (i = j = 0, ref = data.byteLength; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
          body[i] = view[i];
        }
        this._body = body;
      } else if (data.buffer && data.buffer instanceof ArrayBuffer) {
        body = new Buffer(data.byteLength);
        offset = data.byteOffset;
        view = new Uint8Array(data.buffer);
        for (i = k = 0, ref1 = data.byteLength; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
          body[i] = view[i + offset];
        }
        this._body = body;
      } else {
        throw new Error("Unsupported send() data " + data);
      }
      return void 0;
    };

    XMLHttpRequestUpload.prototype._finalizeHeaders = function(headers, loweredHeaders) {
      if (this._contentType) {
        if (!('content-type' in loweredHeaders)) {
          headers['Content-Type'] = this._contentType;
        }
      }
      if (this._body) {
        headers['Content-Length'] = this._body.length.toString();
      }
      return void 0;
    };

    XMLHttpRequestUpload.prototype._startUpload = function(request) {
      if (this._body) {
        request.write(this._body);
      }
      request.end();
      return void 0;
    };

    return XMLHttpRequestUpload;

  })(XMLHttpRequestEventTarget);

  XMLHttpRequest.XMLHttpRequestUpload = XMLHttpRequestUpload;

}).call(this);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(20);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(36);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(40);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(82);

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })
/******/ ])));