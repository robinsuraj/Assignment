/**
 * Created by Suraj on 04/03/2021.
 * bootstraping files for global use
 */

global.rootRequire = function (name) {
    return require(__dirname + "/" + name);
}

/**
 * __base for getting application base folder
 */

global.__base = __dirname + "/";


/**
 * _log for logging
 */
global._log = require('debug')('log');

