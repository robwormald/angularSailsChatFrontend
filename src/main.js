//import config
import {config} from './config';
import {run} from './run';

import {ChatService} from './ChatService';
import {AppController} from './app/app';

//declare app stuff
const app_name = 'sailsChatDemo';
const app = angular.module(app_name,['ui.router','ngMaterial','sails.io']);

//register stuff...
app.controller('AppController',AppController);
app.service('ChatService',ChatService);


app.config(config);
app.run(run);

export const main = () => {
  console.info('bootstrapping main module...');
  angular.bootstrap(document,[app_name]);
  console.info('main module bootstrapped...');
}
