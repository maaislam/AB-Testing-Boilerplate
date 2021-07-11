// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       https://www.time4sleep.co.uk/
// ==/UserScript==

console.log('testing;smfkgmskmg;sg');
var headID = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'http://localhost:1234/main.39afc03c.css';
var script = document.createElement('script');
var script1 = document.createElement('script');
script.type = 'text/javascript';
script1.type = 'text/javascript';
script.src = 'http://localhost:1234/src.e31bb0bc.js';
script1.src = 'http://localhost:1234/main.39afc03c.js';

headID.appendChild(link);
document.body.appendChild(script);
document.body.appendChild(script1);
