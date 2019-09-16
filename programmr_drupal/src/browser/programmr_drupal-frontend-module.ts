/**
 * Generated using theia-extension-generator
 */

import { Programmr_drupalCommandContribution, Programmr_drupalMenuContribution } from './programmr_drupal-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import {FrontendApplicationContribution  } from "@theia/core/lib/browser";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(Programmr_drupalCommandContribution);
	 bind(FrontendApplicationContribution).to(Programmr_drupalCommandContribution);
    bind(MenuContribution).to(Programmr_drupalMenuContribution);
    
});