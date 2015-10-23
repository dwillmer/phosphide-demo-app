/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  listPlugins, loadPlugin
} from 'phosphide';


function main(): void {
  listPlugins().then(plugins => {
    console.log(plugins);
    loadPlugin('jupyter');
    loadPlugin('dockarea');
    loadPlugin('mainmenu');
  });
}

window.onload = main;

