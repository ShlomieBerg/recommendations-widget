!function(){var e,n={365:function(e,n,t){"use strict";var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,".feed-container { \n    padding: 44px 100px 0 100px;\n}\n.feed-title {\n    font-size: 12px;\n    width: 100%;\n    margin: 0 0 2% 2%;\n}\n\n.widget-container {\n    width: 100%;\n    display: block;\n}\n.widget {\n    width: 200px;;\n    height: 300px;\n    border: 1px solid #ccc;\n    color: #000000;\n    -webkit-border-radius: 6px;\n       -moz-border-radius: 6px;\n            border-radius: 6px;\n    margin: 0 0 2% 2%; \n    float: left;\n}\n\n.widget a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n.widget-thumbnail {\n    width: 100%;\n    min-height: 200px;\n    -webkit-background-size: cover;\n       -moz-background-size: cover;\n         -o-background-size: cover;\n            background-size: cover;\n    background-position: center;\n}\n.widget-branding {\n    font-size: 11px;\n    padding: 6px 6px 4px 6px;\n    min-height: 30px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n}\n\n.widget-name {\n    font-size: 13px;\n    padding: 4px 6px 6px 6px;\n    min-height: 70px;\n    overflow: hidden;\n    -o-text-overflow: ellipsis;\n       text-overflow: ellipsis;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n         box-sizing: border-box;\n}\n\n@media (max-width: 640px) {\n    .feed-container { \n        padding: 44px 50px 0 50px;\n    }\n\n    .widget {\n        width: 250px;\n    }\n}",""]),n.A=i},314:function(e){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:function(e){"use strict";e.exports=function(e){return e[1]}},788:function(e,n,t){"use strict";t.r(n);var r=t(72),o=t.n(r),a=t(825),i=t.n(a),d=t(659),c=t.n(d),s=t(56),u=t.n(s),l=t(540),p=t.n(l),f=t(113),m=t.n(f),g=t(365),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(g.A,v),n.default=g.A&&g.A.locals?g.A.locals:void 0},72:function(e){"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],u=a[s]||0,l="".concat(s," ").concat(u);a[s]=u+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=d,n.splice(d,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=r(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},659:function(e){"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:function(e){"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:function(e,n,t){"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:function(e){"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},672:function(){var e,n;e=window.widgetsApi||(window.widgetsApi={}),n={publisherId:{paramName:"publisher id",default:"feed"},apiKey:{paramName:"app.apikey",default:"143ca6bf153893c690249736df6a383615bb9e92"},appType:{paramName:"app.type",default:"desktop"},appName:{paramName:"app.name",default:"msn-casualgames-sudoku-us"},recCount:{paramName:"rec.count",default:"12"},sourceType:{paramName:"source.type",default:"text"},sourceId:{paramName:"source.id",default:"https://www.microsoft.com/en-us/p/microsoft-sudoku/9wzdncrfhv60"},sourceUrl:{paramName:"source.url",default:"https://www.microsoft.com/en-us/p/microsoft-sudoku/9wzdncrfhv60"},userSession:{paramName:"user.session",default:"init"}},e.buildUrl=function(){var e=window.widgetsConfig||{},t=[];for(var r in n){var o=e[r]||n[r].default;t.push(encodeURIComponent(n[r].paramName)+"="+encodeURIComponent(o))}return"https://api.taboola.com//1.2/json/feed/recommendations.get?"+t.join("&")},e.fetchData=function(e,n){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status)try{var e=JSON.parse(t.responseText);n(e)}catch(e){console.error("Failed to parse response")}else console.error("API request failed")},t.send()}},267:function(){(window.widgetsApi||(window.widgetsApi={})).renderOrganicWidget=function(e,n){if(e.thumbnail.length&&e.name){var t=new Image;t.src=e.thumbnail[0].url,t.onload=function(){var t=document.createElement("div");t.className="widget";var r=document.createElement("a");r.href=e.url,r.target="_self";var o=document.createElement("div");o.className="widget-thumbnail",o.style.backgroundImage="url("+e.thumbnail[0].url+")";var a=document.createElement("div");a.textContent=e.name,a.className="widget-name",r.appendChild(o),r.appendChild(a),t.appendChild(r),n(t)},t.onerror=function(){console.error("Image failed to load: "+e.thumbnail[0].url),n(null)}}else n(null)}},45:function(){(window.widgetsApi||(window.widgetsApi={})).renderSponsoredWidget=function(e,n){if(e.thumbnail.length&&e.name&&e.branding){var t=new Image;t.src=e.thumbnail[0].url,t.onload=function(){var t=document.createElement("div");t.className="widget";var r=document.createElement("a");r.href=e.url,r.target="_blank";var o=document.createElement("div");o.className="widget-thumbnail",o.style.backgroundImage="url("+e.thumbnail[0].url+")";var a=document.createElement("div");a.textContent=e.branding,a.className="widget-branding";var i=document.createElement("div");i.textContent=e.name,i.className="widget-name",r.appendChild(o),r.appendChild(a),r.appendChild(i),t.appendChild(r),n(t)},t.onerror=function(){console.error("Image failed to load: "+e.thumbnail[0].url),n(null)}}else n(null)}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={id:e,exports:{}};return n[e](a,a.exports,r),a.exports}r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0,r(788),r(672),r(267),r(45),e=window.widgetsApi||(window.widgetsApi={}),document.addEventListener("DOMContentLoaded",(function(){var n=document.getElementById("feed-container"),t=e.buildUrl();e.fetchData(t,(function(t){if(t&&t.list&&t.list.length)for(var r=document.createDocumentFragment(),o=0,a=!1,i=t.list.length,d=0;d<t.list.length;d++){var c=t.list[d];switch(c.origin){case"organic":e.renderOrganicWidget(c,s);break;case"sponsored":e.renderSponsoredWidget(c,s);break;default:console.warn("Item type: "+c.type+" is not supported"),s(null)}}else console.error("No data received");function s(e){e&&(r.appendChild(e),a=!0),++o===i&&a&&function(e){var t=document.createDocumentFragment(),r=document.createElement("div");r.className="feed-title",r.textContent="Taboola feed";var o=document.createElement("div");o.className="widget-container",o.appendChild(e),t.appendChild(r),t.appendChild(o),n.appendChild(t)}(r)}}))}))}();