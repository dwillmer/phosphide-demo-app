/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';

import {
  registerPlugin
} from 'phosphor-plugins';


registerPlugin('phosphide');
// registerPlugin('jupyter-js-filebrowser-plugin');
registerPlugin('jupyter-js-editor-plugin');
// registerPlugin('jupyter-js-terminal-plugin');


// fetchPlugins().then(plugins => {
//   return loadPlugin('phosphide').then(() => {
//     return loadPlugin('jupyter-js-filebrowser-plugin').then(() => {
//       return loadPlugin('jupyter-js-editor-plugin').then(() => {
//         return loadPlugin('jupyter-js-terminal-plugin');
//       });
//     });
//   });
// })
// .catch((error: any) => {
//   console.log("ERROR loading: " + error.message);
// });
