"use strict";
/**
 * Generated using theia-extension-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var programmr_drupal_contribution_1 = require("./programmr_drupal-contribution");
var common_1 = require("@theia/core/lib/common");
var browser_1 = require("@theia/core/lib/browser");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(programmr_drupal_contribution_1.Programmr_drupalCommandContribution);
    bind(browser_1.FrontendApplicationContribution).to(programmr_drupal_contribution_1.Programmr_drupalCommandContribution);
    bind(common_1.MenuContribution).to(programmr_drupal_contribution_1.Programmr_drupalMenuContribution);
});
//# sourceMappingURL=programmr_drupal-frontend-module.js.map