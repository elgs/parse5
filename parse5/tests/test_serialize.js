import * as parse5 from '../lib/index.js';

const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');

// Serializes a document.
const html = parse5.serialize(document);

// Serializes the <html> element content.
const str = parse5.serialize(document.childNodes[1]);

console.log(str); //> '<head></head><body>Hi there!</body>'