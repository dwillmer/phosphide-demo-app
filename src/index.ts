/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  PluginApplication, ExtensionDelegate
} from 'phosphide';

import {
  MenuPlugin
} from 'phosphide-menu';

import {
  DockAreaPlugin
} from 'phosphide-dockarea';

import {
  JupyterNotebookPlugin
} from 'phosphide-jupyter';


function main(): void {
  var app = new PluginApplication(); 

  var mp = new MenuPlugin('mainmenu');
  app.registerPlugin(mp);

  var da = new DockAreaPlugin('dockarea');
  app.registerPlugin(da);

  var jn = new JupyterNotebookPlugin('jupyter');
  app.registerPlugin(jn);

}

window.onload = main;

