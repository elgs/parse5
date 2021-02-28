import * as parse5 from 'https://deno.land/x/parse5/parse5/lib/index.js';

const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');

console.log(document.childNodes[1].tagName); //> 'html'
