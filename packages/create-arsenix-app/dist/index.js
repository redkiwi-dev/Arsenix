#!/usr/bin/env node
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { program } from "commander";
import fs from "fs";
import path from "path";
import url from "url";
var programInfo = {
    name: "create-arsenix-app",
    description: "Framework for build React libraries",
    version: "1.0.0"
};
program.name(programInfo.name).description(programInfo.description).version(programInfo.version);
program.argument("project-name").option("project-name", "<project-name> [options]", "my-lib").option("-p, --package-manager [npm/yarn/pnpm/bun]", "choose the package manager", "npm").action(run);
function run(name) {
    return _run.apply(this, arguments);
}
function _run() {
    _run = _async_to_generator(function(name) {
        var currentModuleUrl, currentModulePath, appBaseDir, cwd, fullPath, dirExists, templatePath;
        function logInfo() {
            console.log("directory: ".concat(fullPath));
            console.log("".concat(programInfo.name, " version: ").concat(programInfo.version));
        }
        function copyDir(fromPath, toPath) {
            return _copyDir.apply(this, arguments);
        }
        function _copyDir() {
            _copyDir = _async_to_generator(function(fromPath, toPath) {
                var files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, filePath, stat, err, err1;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                10,
                                ,
                                11
                            ]);
                            fs.mkdirSync(toPath);
                            files = fs.readdirSync(fromPath);
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                7,
                                8,
                                9
                            ]);
                            _iterator = files[Symbol.iterator]();
                            _state.label = 2;
                        case 2:
                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                3,
                                6
                            ];
                            file = _step.value;
                            filePath = path.join(fromPath, file);
                            stat = fs.statSync(filePath);
                            if (!stat.isDirectory()) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                copyDir(filePath, path.join(toPath, file))
                            ];
                        case 3:
                            _state.sent();
                            return [
                                3,
                                5
                            ];
                        case 4:
                            fs.copyFileSync(filePath, path.join(toPath, file));
                            _state.label = 5;
                        case 5:
                            _iteratorNormalCompletion = true;
                            return [
                                3,
                                2
                            ];
                        case 6:
                            return [
                                3,
                                9
                            ];
                        case 7:
                            err = _state.sent();
                            _didIteratorError = true;
                            _iteratorError = err;
                            return [
                                3,
                                9
                            ];
                        case 8:
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                            return [
                                7
                            ];
                        case 9:
                            return [
                                3,
                                11
                            ];
                        case 10:
                            err1 = _state.sent();
                            console.error("error: failed to copy template \n");
                            console.error(err1);
                            logInfo();
                            fs.rmdirSync(toPath);
                            return [
                                3,
                                11
                            ];
                        case 11:
                            return [
                                2
                            ];
                    }
                });
            });
            return _copyDir.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    currentModuleUrl = new URL(import.meta.url);
                    currentModulePath = url.fileURLToPath(currentModuleUrl);
                    appBaseDir = path.dirname(currentModulePath);
                    cwd = process.cwd();
                    fullPath = path.resolve(cwd, name);
                    dirExists = fs.existsSync(fullPath);
                    if (dirExists) {
                        console.error("error: directory already exists \n");
                        logInfo();
                        return [
                            2
                        ];
                    }
                    templatePath = path.join(appBaseDir, "..", "templates", "default");
                    return [
                        4,
                        copyDir(templatePath, fullPath)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    // 4. add the neccessary depencies based on the options
    // 5. test if the package manager works by checking the version
    // - if it does run the installation command
    // - if it doesn't switch back to the npm
    // 6. log the current status
    });
    return _run.apply(this, arguments);
}
program.parse();
