/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  PluginApplication
} from 'phosphide';

import {
  MenuPlugin
} from 'phosphide-menu';


function main(): void {
  var app = new PluginApplication(); 

  var mp = new MenuPlugin('menu');
  app.registerPlugin( mp );

}

window.onload = main;

