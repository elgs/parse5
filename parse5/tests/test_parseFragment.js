import * as parse5 from 'https://deno.land/x/parse5/parse5/lib/index.js';

const documentFragment = parse5.parseFragment('<table></table>');

console.log(documentFragment.childNodes[0].tagName); //> 'table'

// Parses the html fragment in the context of the parsed <table> element.
const trFragment = parse5.parseFragment(documentFragment.childNodes[0], '<tr><td>Shake it, baby</td></tr>');

console.log(trFragment.childNodes[0].childNodes[0].tagName); //> 'td'