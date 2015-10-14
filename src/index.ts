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

import {
  DockAreaPlugin
} from 'phosphide-dockarea';


function main(): void {
  var app = new PluginApplication(); 

  // This is the very naive way of registering plugins,
  // it's just used here to demo the functionality, but
  // shouldn't be used in real apps.
  var mp = new MenuPlugin('mainmenu');
  app.registerPlugin(mp);

  var da = new DockAreaPlugin('dockarea');
  app.registerPlugin(da);

}

window.onload = main;

