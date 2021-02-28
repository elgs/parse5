// deno run test.js

import * as parse5 from '../parse5/lib/index.js';
import * as htmlparser2Adapter from './lib/index.js';

const document = parse5.parse('<div></div>', { treeAdapter: htmlparser2Adapter });
console.log(document);