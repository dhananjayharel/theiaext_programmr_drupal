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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
var browser_2 = require("@theia/workspace/lib/browser");
var terminal_service_1 = require("@theia/terminal/lib/browser/base/terminal-service");
var context_key_service_1 = require("@theia/core/lib/browser/context-key-service");
var application_shell_1 = require("@theia/core/lib/browser/shell/application-shell");
var mini_browser_open_handler_1 = require("@theia/mini-browser/lib/browser/mini-browser-open-handler");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var common_2 = require("@theia/filesystem/lib/common");
var uri_1 = require("@theia/core/lib/common/uri");
var file_resource_1 = require("@theia/filesystem/lib/browser/file-resource");
var core_1 = require("@theia/core");
var quick_file_open_1 = require("@theia/file-search/lib/browser/quick-file-open");
var editor_command_1 = require("@theia/editor/lib/browser/editor-command");
exports.Programmr_drupalCommand = {
    id: 'Programmr_drupal.command',
    label: "Shows a message"
};
exports.NpmstartExtensionCommand = {
    id: 'NpmstartExtension.command',
    label: "Shows a message"
};
exports.NpmbuildExtensionCommand = {
    id: 'NpmbuildExtension.command',
    label: "Shows a message"
};
exports.OpenUrlCommandCommand = {
    id: 'OpenUrlCommand.command',
    label: "Shows a message"
};
var RunMenus;
(function (RunMenus) {
    RunMenus.RUN = __spread(core_1.MAIN_MENU_BAR, ['7_run']);
    RunMenus.RUN_NEW = __spread(RunMenus.RUN, ['1_run']);
    RunMenus.BUILD_NEW = __spread(RunMenus.RUN, ['3_run']);
    RunMenus.RUN_TASKS = __spread(RunMenus.RUN, ['2_run']);
    RunMenus.OPEN_NEW = __spread(RunMenus.RUN, ['4_run']);
})(RunMenus = exports.RunMenus || (exports.RunMenus = {}));
var Programmr_drupalCommandContribution = /** @class */ (function () {
    //@inject(OpenerService) protected readonly openerService: OpenerService;
    function Programmr_drupalCommandContribution(
    // @inject(MessageService) private readonly messageService: MessageService,
    terminalService, contextKeyService, commandService, shell, miniBrowser, fileSystem, watcher) {
        this.terminalService = terminalService;
        this.contextKeyService = contextKeyService;
        this.commandService = commandService;
        this.shell = shell;
        this.miniBrowser = miniBrowser;
        this.fileSystem = fileSystem;
        this.watcher = watcher;
        this.contextKeyService.createKey('explorerViewletVisible', true);
    }
    //reg 
    Programmr_drupalCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.NpmstartExtensionCommand, {
            execute: function () {
                //this.messageService.info('Running...');
                //this.runSelectedText();
            }
        });
        registry.registerCommand(exports.NpmbuildExtensionCommand, {
            execute: function () {
                //this.messageService.info('Building...');
                //this.readFileContents();	
                _this.buildSelectedText();
                //this.getMyIp();
                // console.log("IP"+ip);
                //this.envVariablesServer.getValue('HOME').then(value => {
                //this.messageService.info('ENV...'+value);
                //}); 
                //this.windowService.openNewWindow("http://www.programmr.com");
            }
        });
        registry.registerCommand(exports.OpenUrlCommandCommand, {
            execute: function () {
                //this.messageService.info('Opened in new tab...');
                _this.readFileContents();
            }
        });
    };
    Programmr_drupalCommandContribution.prototype.onStart = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("onstartup");
                this.shell.expandPanel('left');
                console.log("didnt work");
                this.stateService.reachedState('ready').then(function (a) {
                    console.log("reachedState");
                    _this.preferencesService.set(editor_command_1.EditorCommandContribution.AUTOSAVE_PREFERENCE, 'on');
                    var current = _this.workspaceService.workspace;
                    //this.messageService.info('Running npm install...');
                    console.log("workspaceURI" + current.uri);
                    console.log("hdei now");
                    try {
                        //console.log("menu"+document.querySelectorAll(".p-MenuBar-item"));
                        var node = document.querySelectorAll(".p-MenuBar-item");
                        var el = node[node.length - 1];
                        el.style.display = "none";
                    }
                    catch (e) {
                        console.log(e);
                    }
                    _this.shell.expandPanel('left');
                    //dont fire  this.buildSelectedText();
                    _this.readFileContents();
                    _this.quickFileOpenService.openFile(new uri_1.default(current.uri + "/index.php"));
                });
                return [2 /*return*/];
            });
        });
    };
    Programmr_drupalCommandContribution.prototype.readFileContents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, resource, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = new uri_1.default("/home/ubuntu/myip.txt");
                        resource = new file_resource_1.FileResource(uri, this.fileSystem, this.watcher);
                        return [4 /*yield*/, resource.readContents()];
                    case 1:
                        contents = _a.sent();
                        console.log(contents);
                        this.myIp = contents.trim();
                        console.log("ip=123213211[" + this.myIp + "]");
                        this.monitorOutputUrl();
                        this.openUrlInPreview("http://www.skillstack.com/loading/");
                        return [2 /*return*/];
                }
            });
        });
    };
    Programmr_drupalCommandContribution.prototype.monitorOutputUrl = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.checkHttpStatus();
        }, 3000);
    };
    Programmr_drupalCommandContribution.prototype.checkHttpStatus = function () {
        var request = new XMLHttpRequest();
        var that = this;
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    console.log(this.response);
                    var data = JSON.parse(this.response);
                    if (data.status == '200') {
                        console.log('open the url now');
                        clearTimeout(that.interval);
                        that.openUrlInPreview("http://" + that.myIp + "");
                    }
                }
                else {
                    throw (new Error('Could not fetch'));
                }
            }
        };
        request.open('GET', 'http://www.skillstack.com/api/candidates/gethttprequeststatusv2?url=' + this.myIp + '&port=80', true);
        request.send();
    };
    Programmr_drupalCommandContribution.prototype.openUrlInPreview = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ss;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("open this url" + url);
                        return [4 /*yield*/, this.miniBrowser.openPreview(url)];
                    case 1:
                        _a.sent();
                        console.log("opened");
                        ss = document.getElementsByClassName("p-MenuBar-item");
                        console.log("ss" + ss);
                        return [2 /*return*/];
                }
            });
        });
    };
    Programmr_drupalCommandContribution.prototype.buildSelectedText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var terminal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        terminal = this.terminalService.currentTerminal;
                        if (!!terminal) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.terminalService.newTerminal({ created: new Date().toString() })];
                    case 1:
                        terminal = (_a.sent());
                        return [4 /*yield*/, terminal.start()];
                    case 2:
                        _a.sent();
                        this.terminalService.activateTerminal(terminal);
                        _a.label = 3;
                    case 3:
                        terminal.sendText("npm start\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(frontend_application_state_1.FrontendApplicationStateService),
        __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
    ], Programmr_drupalCommandContribution.prototype, "stateService", void 0);
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], Programmr_drupalCommandContribution.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(quick_file_open_1.QuickFileOpenService),
        __metadata("design:type", quick_file_open_1.QuickFileOpenService)
    ], Programmr_drupalCommandContribution.prototype, "quickFileOpenService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], Programmr_drupalCommandContribution.prototype, "preferencesService", void 0);
    Programmr_drupalCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(terminal_service_1.TerminalService)),
        __param(1, inversify_1.inject(context_key_service_1.ContextKeyService)),
        __param(2, inversify_1.inject(common_1.CommandService)),
        __param(3, inversify_1.inject(application_shell_1.ApplicationShell)),
        __param(4, inversify_1.inject(mini_browser_open_handler_1.MiniBrowserOpenHandler)),
        __param(5, inversify_1.inject(common_2.FileSystem)),
        __param(6, inversify_1.inject(filesystem_watcher_1.FileSystemWatcher)),
        __metadata("design:paramtypes", [Object, context_key_service_1.ContextKeyService, Object, application_shell_1.ApplicationShell,
            mini_browser_open_handler_1.MiniBrowserOpenHandler, Object, filesystem_watcher_1.FileSystemWatcher])
    ], Programmr_drupalCommandContribution);
    return Programmr_drupalCommandContribution;
}());
exports.Programmr_drupalCommandContribution = Programmr_drupalCommandContribution;
var Programmr_drupalMenuContribution = /** @class */ (function () {
    function Programmr_drupalMenuContribution() {
    }
    Programmr_drupalMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerSubmenu(RunMenus.RUN, 'Run');
        menus.registerMenuAction(RunMenus.OPEN_NEW, {
            commandId: exports.OpenUrlCommandCommand.id,
            label: 'View Output',
            order: '2'
        });
    };
    Programmr_drupalMenuContribution = __decorate([
        inversify_1.injectable()
    ], Programmr_drupalMenuContribution);
    return Programmr_drupalMenuContribution;
}());
exports.Programmr_drupalMenuContribution = Programmr_drupalMenuContribution;
//# sourceMappingURL=programmr_drupal-contribution.js.map