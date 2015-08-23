var scrypt = function(successCallback, errorCallback, message, salt, options) {
    if (typeof errorCallback != "function")  {
        console.error("ScryptPlugin.scrypt failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.error("ScryptPlugin.scrypt failure: success callback parameter must be a function");
        return;
    }
    options = options || {};
    if (options.N && !(typeof options.N == 'number' && Math.floor(options.N) == options.N && options.N > 0)){
        console.error('ScryptPlugin.scrypt failure: when defined, options.N must be a strictly positive integer number');
        return;
    }
    if (options.dkLen && !(typeof options.dkLen == 'number' && Math.floor(options.dkLen) == options.dkLen && options.dkLen > 0)){
        console.error('ScryptPlugin.scrypt failure: when defined, options.dkLen must be a strictly positive integer number');
        return;
    }
    if (options.r && !(typeof options.r == 'number' && Math.floor(options.r) == options.r && options.r > 0)){
        console.error('ScryptPlugin.scrypt failure: when defined, options.r must be a strictly positive integer number');
        return;
    }
    if (options.p && !(typeof options.p == 'number' && Math.floor(options.p) == options.p && options.p > 0)){
        console.error('ScryptPlugin.scrypt failure: when defined, options.p must be a strictly positive integer number');
        return;
    }
    cordova.exec(successCallback, errorCallback, "ScryptPlugin", "scrypt", [message, salt, options]);
};


if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.scrypt) {
    window.plugins.scrypt = scrypt;
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = scrypt;
}
