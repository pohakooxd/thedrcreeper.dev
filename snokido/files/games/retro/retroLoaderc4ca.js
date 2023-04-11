var _0x194239 = function () {
    var _0x365393 = true;
    return function (_0x371918, _0x3f884f) {
        var _0x361323 = _0x365393 ? function () {
            if (_0x3f884f) {
                var _0x4556ff = _0x3f884f.apply(_0x371918, arguments);
                _0x3f884f = null;
                return _0x4556ff;
            }
        } : function () {};
        _0x365393 = false;
        return _0x361323;
    };
}();
var _0x2b15ef = _0x194239(this, function () {
    var _0x4238b4 = function () {
            return 'dev';
        },
        _0x210ed2 = function () {
            return 'window';
        };
    var _0x537b67 = function () {
        var _0x406d67 = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
        return !_0x406d67['test'](_0x4238b4['toString']());
    };
    var _0x59b083 = function () {
        var _0x10ad1e = new RegExp('(\\\\[x|u](\\w){2,4})+');
        return _0x10ad1e['test'](_0x210ed2['toString']());
    };
    var _0x2c81a4 = function (_0x7d32f3) {
        var _0x3f59bd = ~-1 >> 256 % 0x0;
        if (_0x7d32f3['indexOf']('i' === _0x3f59bd)) {
            _0x237415(_0x7d32f3);
        }
    };
    var _0x237415 = function (_0x116111) {
        var _0x2f199d = ~-4 >> 256 % 0x0;
        if (_0x116111['indexOf']((!![] + '')[3]) !== _0x2f199d) {
            
        }
    };
    if (!_0x537b67()) {
        if (!_0x59b083()) {
            _0x2c81a4('indÐµxOf');
        } else {
            _0x2c81a4('indexOf');
        }
    } else {
        _0x2c81a4('indÐµxOf');
    }
});
_0x2b15ef();
var _0x3a72a6 = function () {
    var _0x229895 = true;
    return function (_0x116ac5, _0x1e9225) {
        var _0x50c39d = _0x229895 ? function () {
            if (_0x1e9225) {
                var _0xc028a5 = _0x1e9225.apply(_0x116ac5, arguments);
                _0x1e9225 = null;
                return _0xc028a5;
            }
        } : function () {};
        _0x229895 = false;
        return _0x50c39d;
    };
}();
var _0x5e2df2 = _0x3a72a6(this, function () {
    var _0x3b9de1 = function () {};
    var _0x5964ca;
    try {
        var _0x1b7dd6 = Function('return (function() {}.constructor("return this")( )' + ');');
        _0x5964ca = _0x1b7dd6();
    } catch (_0x5759a1) {
        _0x5964ca = window;
    }
    if (!_0x5964ca.console) {
        _0x5964ca.console = function (_0x39f9fa) {
            var _0x526a7d = {};
            _0x526a7d.log = _0x39f9fa;
            _0x526a7d.warn = _0x39f9fa;
            _0x526a7d.debug = _0x39f9fa;
            _0x526a7d.info = _0x39f9fa;
            _0x526a7d.error = _0x39f9fa;
            _0x526a7d.exception = _0x39f9fa;
            _0x526a7d.trace = _0x39f9fa;
            return _0x526a7d;
        }(_0x3b9de1);
    } else {
        _0x5964ca.console.log = _0x3b9de1;
        _0x5964ca.console.warn = _0x3b9de1;
        _0x5964ca.console.debug = _0x3b9de1;
        _0x5964ca.console.info = _0x3b9de1;
        _0x5964ca.console.error = _0x3b9de1;
        _0x5964ca.console.exception = _0x3b9de1;
        _0x5964ca.console.trace = _0x3b9de1;
    }
});
_0x5e2df2();
if (true || window.parent === window.top) {
    var debug = window.location.host === 'n64-rel.local' || window.location.host === '179.43.191.194' || window.location.host === '192.168.1.158:32786';
    if (debug) {
        let debug_span = document.createElement('span');
        debug_span.innerHTML = 'Debug version ...';
        debug_span.style.color = '#ff0000';
        debug_span.style.position = 'absolute';
        debug_span.style.top = '80px';
        debug_span.style.left = '20px';
        debug_span.style.fontFamily = 'Lato, sans-serif';
        debug_span.style.fontSize = '22px';
        debug_span.style.fontWeight = '400';
        document.body.appendChild(debug_span);
        setTimeout(function () {
            document.body.removeChild(debug_span);
        }, 10000);
    }
    var element = document.getElementById(RetroLoaderConfig.divId);
    if (!element) element = document.body;
    var cssId = 'css_Montserrat_700';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://fonts.googleapis.com/css?family=Montserrat:700';
        link.media = 'all';
        head.appendChild(link);
        var hoverColor = RetroLoaderConfig.btnHoverColor ? RetroLoaderConfig.btnHoverColor : '#0490fe';
        var css = '@keyframes retropulse {    from {background-color: black;}    to {background-color: ' + hoverColor + ';}}\x0a.retro-loader-button {    display: block;    font-weight: 700;    border-radius: 5px;    margin: auto;    text-transform: uppercase;    font-family: \'Montserrat\', sans-serif;    text-align: center;    line-height: 1;    cursor: pointer;    -webkit-appearance: none;    vertical-align: middle;    border: 1px solid transparent;    border-radius: 0;    padding: 1.1875em 1.5625em;    font-size: .9rem;    background-color: #444;    color: #fff;    animation-name: retropulse;    animation-duration: 0.8s;    animation-timing-function: linear;    animation-delay: initial;    animation-iteration-count: infinite;    animation-direction: alternate;    animation-fill-mode: initial;    animation-play-state: initial;}\x0a[data-whatinput=mouse] .retro-loader-button {    outline: 0;}\x0a.retro-loader-button.retro-loader-large {    font-size: 1.25rem;}\x0adiv.retro-loader-ext-box {     display: table;    width : 100%;    height : 100%;}\x0adiv.retro-loader-int-box {     display: table-cell;    vertical-align: middle;     width : 100%;    height : 100%;}\x0a';
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }
    var div_ext = document.createElement('DIV');
    div_ext.classList.add('retro-loader-ext-box');
    element.appendChild(div_ext);
    var div_int = document.createElement('DIV');
    div_int.classList.add('retro-loader-int-box');
    div_ext.appendChild(div_int);
    var image, p, btn;
    if (RetroLoaderConfig.image) {
        var image = document.createElement('IMG');
        image.style.display = 'block';
        image.style.margin = 'auto';
        image.style.verticalAlig = 'middle';
        image.style.cursor = 'pointer';
        image.src = RetroLoaderConfig.image;
        image.onclick = function () {
            btn.click();
        };
        div_int.appendChild(image);
        p = document.createElement('P');
        div_int.appendChild(p);
    }
    btn = document.createElement('BUTTON');
    btn.classList.add('retro-loader-button');
    btn.classList.add('retro-loader-large');
    btn.appendChild(document.createTextNode('RUN GAME'));
    div_int.appendChild(btn);
    btn.onclick = function () {
        if (image) div_int.removeChild(image);
        if (p) div_int.removeChild(p);
        div_int.removeChild(btn);
        var _0x2ba743 = window.location.origin + '/files/games/retro/index.html';
        var _0x1dfe41 = document.createElement('iframe');
        _0x1dfe41.style.display = 'block';
        _0x1dfe41.style.margin = 'auto';
        _0x1dfe41.style.width = RetroLoaderConfig.width ? RetroLoaderConfig.width : '100%';
        _0x1dfe41.style.height = RetroLoaderConfig.height ? RetroLoaderConfig.height : '100%';
        _0x1dfe41.style.border = '0';
        _0x1dfe41.setAttribute('src', _0x2ba743);
        _0x1dfe41.setAttribute('allowfullscreen', '');
        div_int.appendChild(_0x1dfe41);
        window.addEventListener('message', function (_0x51c2c9) {
            if (_0x51c2c9 && _0x51c2c9.data && _0x51c2c9.data.message) {
                if (_0x51c2c9.data.message === 'getconfig') {
                    var _0x13f6d7 = {
                        'message': 'setconfig',
                        'config': RetroLoaderConfig
                    };
                    _0x1dfe41.contentWindow.postMessage(_0x13f6d7, '*');
                } else if (_0x51c2c9.data.message === 'getconfirm') {
                    var _0x13f6d7 = {
                        'message': 'setconfirm',
                        'u': btoa('FFVm5' + btoa('VKTk1EVn' + btoa('' + new Date().getTime())))
                    };
                    _0x1dfe41.contentWindow.postMessage(_0x13f6d7, '*');
                }
            }
        }, false);
    };
}