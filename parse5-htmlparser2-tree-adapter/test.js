// deno run test.js

import * as parse5 from 'https://deno.land/x/parse5/parse5/lib/index.js';
import * as htmlparser2Adapter from 'https://deno.land/x/parse5/parse5-htmlparser2-tree-adapter/lib/index.js';

const document = parse5.parse('<div></div>', { treeAdapter: htmlparser2Adapter });
console.log(document);