/// <reference path="../typings/index.d.ts"/>

import 'core-js/client/shim';
import 'zone.js/dist/zone';
import 'moment/src/moment';

// Import auth libraries
import './vendor/jsbn';
import './vendor/jsbn2';
import './vendor/sjcl';
import './vendor/amazon-cognito-identity';

import '@angular/common';
import 'rxjs';

import './index.scss';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app';

declare var process: any;
declare var jsbn: any;
declare var jsbn2: any;
declare var sjcl: any;
declare var amazonCognitoIdentity: any;

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity; // tslint:disable-line:no-string-literal
  require('zone.js/dist/long-stack-trace-zone'); // tslint:disable-line:no-var-requires
}

platformBrowserDynamic().bootstrapModule(AppModule);
