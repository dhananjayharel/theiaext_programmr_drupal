import { injectable, inject } from "inversify";
import {  CommandService } from "@theia/core/lib/common";
import { FrontendApplicationContribution,FrontendApplication,PreferenceService} from "@theia/core/lib/browser";
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import { TerminalService } from '@theia/terminal/lib/browser/base/terminal-service';
import { TerminalWidget } from '@theia/terminal/lib/browser/base/terminal-widget';
import { TerminalWidgetFactoryOptions } from '@theia/terminal/lib/browser/terminal-widget-impl';
import { ContextKeyService } from '@theia/core/lib/browser/context-key-service';
import {ApplicationShell} from '@theia/core/lib/browser/shell/application-shell';
import {MiniBrowserOpenHandler} from '@theia/mini-browser/lib/browser/mini-browser-open-handler';
import { FileSystemWatcher } from '@theia/filesystem/lib/browser/filesystem-watcher';
import { FileSystem } from '@theia/filesystem/lib/common';
import URI from '@theia/core/lib/common/uri';
import {FileResource } from '@theia/filesystem/lib/browser/file-resource';
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry } from "@theia/core/lib/common";
import { MAIN_MENU_BAR } from '@theia/core';
import { QuickFileOpenService } from '@theia/file-search/lib/browser/quick-file-open';
import { EditorCommandContribution } from '@theia/editor/lib/browser/editor-command';


export const Programmr_drupalCommand = {
    id: 'Programmr_drupal.command',
    label: "Shows a message"
};

export const NpmstartExtensionCommand = {
    id: 'NpmstartExtension.command',
    label: "Shows a message"
};
export const NpmbuildExtensionCommand = {
    id: 'NpmbuildExtension.command',
    label: "Shows a message"
};
export const OpenUrlCommandCommand = {
    id: 'OpenUrlCommand.command',
    label: "Shows a message"
};


export namespace RunMenus {
    export const RUN = [...MAIN_MENU_BAR, '7_run'];
    export const RUN_NEW = [...RUN, '1_run'];
    export const BUILD_NEW = [...RUN, '3_run'];	
    export const RUN_TASKS = [...RUN, '2_run'];
	    export const OPEN_NEW = [...RUN, '4_run'];
   
}


@injectable()
export class Programmr_drupalCommandContribution implements FrontendApplicationContribution, CommandContribution {
	
	  myIp:string;
	interval:any;
    
	  @inject(FrontendApplicationStateService)
    protected readonly stateService: FrontendApplicationStateService;

    @inject(WorkspaceService)
    protected readonly workspaceService: WorkspaceService;
	
	 @inject(QuickFileOpenService)
    protected readonly quickFileOpenService: QuickFileOpenService;

  @inject(PreferenceService)
    protected readonly preferencesService: PreferenceService;		
	//@inject(OpenerService) protected readonly openerService: OpenerService;
    constructor(
       // @inject(MessageService) private readonly messageService: MessageService,
		@inject(TerminalService) protected readonly terminalService: TerminalService,
		   @inject(ContextKeyService) protected readonly contextKeyService: ContextKeyService,
		  @inject(CommandService) protected readonly commandService: CommandService,  	
			@inject(ApplicationShell) protected readonly shell: ApplicationShell,	
			@inject(MiniBrowserOpenHandler) protected readonly miniBrowser: MiniBrowserOpenHandler,	 
		@inject(FileSystem) protected readonly fileSystem: FileSystem,
        @inject(FileSystemWatcher) protected readonly watcher: FileSystemWatcher,
    ) { 
	
	 this.contextKeyService.createKey<boolean>('explorerViewletVisible', true);
	}


     //reg 
        registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(NpmstartExtensionCommand, {
            execute: () => {
				//this.messageService.info('Running...');
                //this.runSelectedText();
			}
        });
        registry.registerCommand(NpmbuildExtensionCommand, {
            execute: () => {
				//this.messageService.info('Building...');
						//this.readFileContents();	
                this.buildSelectedText(); 
                 //this.getMyIp();
				// console.log("IP"+ip);
				//this.envVariablesServer.getValue('HOME').then(value => {
			//this.messageService.info('ENV...'+value);
         //}); 
				//this.windowService.openNewWindow("http://www.programmr.com");
			}
        });	
            registry.registerCommand(OpenUrlCommandCommand, {
            execute: () => {
				//this.messageService.info('Opened in new tab...');
                 this.readFileContents();	

			}
        });	
		
    }	 
  
    async onStart(app: FrontendApplication): Promise<void> {
          console.log("onstartup");
		    this.shell.expandPanel('left');
            console.log("didnt work");			
            this.stateService.reachedState('ready').then(
                a => {
				    	console.log("reachedState");
						this.preferencesService.set(EditorCommandContribution.AUTOSAVE_PREFERENCE,'on');						
						const current = this.workspaceService.workspace;						
						//this.messageService.info('Running npm install...');
						console.log("workspaceURI"+current.uri);
					   console.log("hdei now")
					   	try{
								//console.log("menu"+document.querySelectorAll(".p-MenuBar-item"));
								let node : NodeListOf<Element> = document.querySelectorAll(".p-MenuBar-item");
								let el = node[node.length - 1] as HTMLElement;
								 el.style.display="none";
					  	}catch(e){
							console.log(e);
						}						
						this.shell.expandPanel('left');
						//dont fire  this.buildSelectedText();
						this.readFileContents();
                    	this.quickFileOpenService.openFile(new URI(current.uri+"/index.php"));
				}
            );
       
    }
	
	async readFileContents(): Promise<void>{
			const uri = new URI("/home/ubuntu/myip.txt");
				 const resource = new FileResource(uri, this.fileSystem, this.watcher);
				let contents = await resource.readContents();
				console.log(contents);
				this.myIp = contents.trim();
					console.log("ip=123213211["+this.myIp+"]");
		       this.monitorOutputUrl();
			   this.openUrlInPreview("http://www.skillstack.com/loading/");
	}
	 
	monitorOutputUrl(){
		this.interval = setInterval(()=>{
			this.checkHttpStatus();
		},3000);
		
	}
	
		checkHttpStatus() {
			  const request = new XMLHttpRequest();
              var that = this;
        request.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    console.log(this.response);
					const data = JSON.parse(this.response);
					if(data.status == '200'){
					console.log('open the url now');
					clearTimeout(that.interval);
					that.openUrlInPreview("http://"+that.myIp+"");					
					}
					
                } else {
                    throw(new Error('Could not fetch'));
                }
            }
        };

        request.open('GET', 'http://www.skillstack.com/api/candidates/gethttprequeststatusv2?url='+this.myIp+'&port=80', true);
        request.send();
		
	}
	
		 async openUrlInPreview(url): Promise<void> {
					   
				     console.log("open this url"+url);
					await this.miniBrowser.openPreview(url);
					console.log("opened");

					var ss = document.getElementsByClassName("p-MenuBar-item");
					console.log("ss"+ss);
				
		 }
				 
		 
	 		
	
	 async buildSelectedText(): Promise<void> {
					    let terminal = this.terminalService.currentTerminal;
				if (!terminal) {
					terminal = <TerminalWidget>await this.terminalService.newTerminal(<TerminalWidgetFactoryOptions>{ created: new Date().toString() });
					await terminal.start();
					this.terminalService.activateTerminal(terminal);
				}
				terminal.sendText("npm start\n");  
		 
	 }	
}

@injectable()
export class Programmr_drupalMenuContribution implements MenuContribution {
	


    registerMenus(menus: MenuModelRegistry): void {
		
		menus.registerSubmenu(RunMenus.RUN, 'Run');
        menus.registerMenuAction(RunMenus.OPEN_NEW, {
            commandId: OpenUrlCommandCommand.id,
            label: 'View Output',
            order: '2'
        });			
		

    }
}