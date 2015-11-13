/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  fetchPlugins, loadPlugin, listPlugins
} from 'phosphor-plugins';

console.log("PLUGINS: " + listPlugins().toString());

fetchPlugins().then(plugins => {
  //loadPlugin('jupyter-js-services');
  return loadPlugin('phosphide').then(() => {
    return loadPlugin('jupyter-js-filebrowser-plugin').then(() => {
      return loadPlugin('jupyter-js-terminal-plugin');
    });
  });
})
.catch((error: any) => {
  console.log("ERROR loading: " + error.message);
});
