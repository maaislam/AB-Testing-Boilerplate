// ==UserScript==
// @name         Echologyx Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simple AB Testing Boilerplate!
// @author       You
// @match        https://www.time4sleep.co.uk/
// ==/UserScript==

console.log('Tampermonkey is running...');
var headID = document.getElementsByTagName('head')[0];
var bodyID = document.getElementsByTagName('body')[0];
var link = document.createElement('link');
var script = document.createElement('script');
//var script1 = document.createElement('script');
link.type = 'text/css';
link.rel = 'stylesheet';
script.type = 'text/javascript';
//script1.type = 'text/javascript';
link.href = 'http://localhost:1234/main.39afc03c.css';
script.src = 'http://localhost:1234/src.e31bb0bc.js';
//script1.src = 'http://localhost:1234/main.39afc03c.js';

headID.appendChild(link);
bodyID.appendChild(script);
//bodyID.appendChild(script1);
