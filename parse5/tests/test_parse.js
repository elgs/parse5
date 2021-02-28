import * as parse5 from '../lib/index.js';

const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');

console.log(document.childNodes[1].tagName); //> 'html'
