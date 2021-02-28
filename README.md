# parse5

Ported from inikulin/parse5 v6.0.1 but for Deno.

This project is a port from:

- parse5
- parse5-htmlparser2-tree-adapter

modules from inikulin/parse5 at v6.0.1.

Other modules involved with Node's stream api are not ported.

### Why?

- It runs natively in Browser.
- It works with Deno.
- It's pure Javascript, no Node API.

### Sample code

#### parse

```js
import * as parse5 from "https://deno.land/x/parse5/parse5/lib/index.js";

const document = parse5.parse(
  "<!DOCTYPE html><html><head></head><body>Hi there!</body></html>"
);
console.log(document.childNodes[1].tagName); //> 'html'
```

#### parseFragment

```js
import * as parse5 from "https://deno.land/x/parse5/parse5/lib/index.js";

const documentFragment = parse5.parseFragment("<table></table>");
console.log(documentFragment.childNodes[0].tagName); //> 'table'

// Parses the html fragment in the context of the parsed <table> element.
const trFragment = parse5.parseFragment(
  documentFragment.childNodes[0],
  "<tr><td>Shake it, baby</td></tr>"
);
console.log(trFragment.childNodes[0].childNodes[0].tagName); //> 'td'
```

#### serialize

```js
import * as parse5 from "https://deno.land/x/parse5/parse5/lib/index.js";

const document = parse5.parse(
  "<!DOCTYPE html><html><head></head><body>Hi there!</body></html>"
);
// Serializes a document.
const html = parse5.serialize(document);

// Serializes the <html> element content.
const str = parse5.serialize(document.childNodes[1]);
console.log(str); //> '<head></head><body>Hi there!</body>'
```

#### htmlparser2Adapter
```js
import * as parse5 from 'https://deno.land/x/parse5/parse5/lib/index.js';
import * as htmlparser2Adapter from 'https://deno.land/x/parse5/parse5-htmlparser2-tree-adapter/lib/index.js';

const document = parse5.parse('<div></div>', { treeAdapter: htmlparser2Adapter });
console.log(document);
```