if(!window['googleLT_']){window['googleLT_']=(new Date()).getTime();}if (!window['google']) {
window['google'] = {};
}
if (!window['google']['loader']) {
window['google']['loader'] = {};
google.loader.ServiceBase = 'https://www.google.com/uds';
google.loader.GoogleApisBase = 'https://ajax.googleapis.com/ajax';
google.loader.ApiKey = 'notsupplied';
google.loader.KeyVerified = true;
google.loader.LoadFailure = false;
google.loader.Secure = true;
google.loader.GoogleLocale = 'www.google.com';
google.loader.ClientLocation = null;
google.loader.AdditionalParams = '';
(function() {var d=void 0,g=!0,h=null,l=!1,m=encodeURIComponent,n=window,p=document;function q(a,b){return a.load=b}var s="push",t="replace",u="charAt",w="indexOf",x="ServiceBase",y="name",z="getTime",A="length",B="prototype",C="setTimeout",D="loader",E="substring",F="join",G="toLowerCase";function H(a){return a in I?I[a]:I[a]=-1!=navigator.userAgent[G]()[w](a)}var I={};function J(a,b){var c=function(){};c.prototype=b[B];a.T=b[B];a.prototype=new c}
function aa(a,b,c){var e=Array[B].slice.call(arguments,2)||[];return function(){var c=e.concat(Array[B].slice.call(arguments));return a.apply(b,c)}}function K(a){a=Error(a);a.toString=function(){return this.message};return a}function L(a,b){for(var c=a.split(/\./),e=n,f=0;f<c[A]-1;f++)e[c[f]]||(e[c[f]]={}),e=e[c[f]];e[c[c[A]-1]]=b}function ba(a,b,c){a[b]=c}if(!M)var M=L;if(!N)var N=ba;google[D].v={};M("google.loader.callbacks",google[D].v);var O={},P={};google[D].eval={};M("google.loader.eval",google[D].eval);
q(google,function(a,b,c){function e(a){var b=a.split(".");if(2<b[A])throw K("Module: '"+a+"' not found!");"undefined"!=typeof b[1]&&(f=b[0],c.packages=c.packages||[],c.packages[s](b[1]))}var f=a;c=c||{};if(a instanceof Array||a&&"object"==typeof a&&"function"==typeof a[F]&&"function"==typeof a.reverse)for(var k=0;k<a[A];k++)e(a[k]);else e(a);if(a=O[":"+f]){c&&(!c.language&&c.locale)&&(c.language=c.locale);c&&"string"==typeof c.callback&&(k=c.callback,k.match(/^[[\]A-Za-z0-9._]+$/)&&(k=n.eval(k),c.callback=
k));if((k=c&&c.callback!=h)&&!a.s(b))throw K("Module: '"+f+"' must be loaded before DOM onLoad!");k?a.m(b,c)?n[C](c.callback,0):a.load(b,c):a.m(b,c)||a.load(b,c)}else throw K("Module: '"+f+"' not found!");});M("google.load",google.load);
google.S=function(a,b){b?(0==Q[A]&&(R(n,"load",S),!H("msie")&&!H("safari")&&!H("konqueror")&&H("mozilla")||n.opera?n.addEventListener("DOMContentLoaded",S,l):H("msie")?p.write("<script defer onreadystatechange='google.loader.domReady()' src=//:>\x3c/script>"):(H("safari")||H("konqueror"))&&n[C](ca,10)),Q[s](a)):R(n,"load",a)};M("google.setOnLoadCallback",google.S);
function R(a,b,c){if(a.addEventListener)a.addEventListener(b,c,l);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var e=a["on"+b];a["on"+b]=e!=h?da([c,e]):c}}function da(a){return function(){for(var b=0;b<a[A];b++)a[b]()}}var Q=[];google[D].O=function(){var a=n.event.srcElement;"complete"==a.readyState&&(a.onreadystatechange=h,a.parentNode.removeChild(a),S())};M("google.loader.domReady",google[D].O);var ea={loaded:g,complete:g};function ca(){ea[p.readyState]?S():0<Q[A]&&n[C](ca,10)}
function S(){for(var a=0;a<Q[A];a++)Q[a]();Q.length=0}google[D].d=function(a,b,c){if(c){var e;"script"==a?(e=p.createElement("script"),e.type="text/javascript",e.src=b):"css"==a&&(e=p.createElement("link"),e.type="text/css",e.href=b,e.rel="stylesheet");(a=p.getElementsByTagName("head")[0])||(a=p.body.parentNode.appendChild(p.createElement("head")));a.appendChild(e)}else"script"==a?p.write('<script src="'+b+'" type="text/javascript">\x3c/script>'):"css"==a&&p.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
M("google.loader.writeLoadTag",google[D].d);google[D].P=function(a){P=a};M("google.loader.rfm",google[D].P);google[D].R=function(a){for(var b in a)"string"==typeof b&&(b&&":"==b[u](0)&&!O[b])&&(O[b]=new T(b[E](1),a[b]))};M("google.loader.rpl",google[D].R);google[D].Q=function(a){if((a=a.specs)&&a[A])for(var b=0;b<a[A];++b){var c=a[b];"string"==typeof c?O[":"+c]=new U(c):(c=new W(c[y],c.baseSpec,c.customSpecs),O[":"+c[y]]=c)}};M("google.loader.rm",google[D].Q);google[D].loaded=function(a){O[":"+a.module].l(a)};
M("google.loader.loaded",google[D].loaded);google[D].N=function(){return"qid="+((new Date)[z]().toString(16)+Math.floor(1E7*Math.random()).toString(16))};M("google.loader.createGuidArg_",google[D].N);L("google_exportSymbol",L);L("google_exportProperty",ba);google[D].a={};M("google.loader.themes",google[D].a);google[D].a.H="//www.google.com/cse/style/look/bubblegum.css";N(google[D].a,"BUBBLEGUM",google[D].a.H);google[D].a.J="//www.google.com/cse/style/look/greensky.css";N(google[D].a,"GREENSKY",google[D].a.J);
google[D].a.I="//www.google.com/cse/style/look/espresso.css";N(google[D].a,"ESPRESSO",google[D].a.I);google[D].a.L="//www.google.com/cse/style/look/shiny.css";N(google[D].a,"SHINY",google[D].a.L);google[D].a.K="//www.google.com/cse/style/look/minimalist.css";N(google[D].a,"MINIMALIST",google[D].a.K);google[D].a.M="//www.google.com/cse/style/look/v2/default.css";N(google[D].a,"V2_DEFAULT",google[D].a.M);function U(a){this.b=a;this.o=[];this.n={};this.e={};this.f={};this.j=g;this.c=-1}
U[B].g=function(a,b){var c="";b!=d&&(b.language!=d&&(c+="&hl="+m(b.language)),b.nocss!=d&&(c+="&output="+m("nocss="+b.nocss)),b.nooldnames!=d&&(c+="&nooldnames="+m(b.nooldnames)),b.packages!=d&&(c+="&packages="+m(b.packages)),b.callback!=h&&(c+="&async=2"),b.style!=d&&(c+="&style="+m(b.style)),b.noexp!=d&&(c+="&noexp=true"),b.other_params!=d&&(c+="&"+b.other_params));if(!this.j){google[this.b]&&google[this.b].JSHash&&(c+="&sig="+m(google[this.b].JSHash));var e=[],f;for(f in this.n)":"==f[u](0)&&e[s](f[E](1));
for(f in this.e)":"==f[u](0)&&this.e[f]&&e[s](f[E](1));c+="&have="+m(e[F](","))}return google[D][x]+"/?file="+this.b+"&v="+a+google[D].AdditionalParams+c};U[B].t=function(a){var b=h;a&&(b=a.packages);var c=h;if(b)if("string"==typeof b)c=[a.packages];else if(b[A]){c=[];for(a=0;a<b[A];a++)"string"==typeof b[a]&&c[s](b[a][t](/^\s*|\s*$/,"")[G]())}c||(c=["default"]);b=[];for(a=0;a<c[A];a++)this.n[":"+c[a]]||b[s](c[a]);return b};
q(U[B],function(a,b){var c=this.t(b),e=b&&b.callback!=h;if(e)var f=new X(b.callback);for(var k=[],r=c[A]-1;0<=r;r--){var v=c[r];e&&f.A(v);if(this.e[":"+v])c.splice(r,1),e&&this.f[":"+v][s](f);else k[s](v)}if(c[A]){b&&b.packages&&(b.packages=c.sort()[F](","));for(r=0;r<k[A];r++)v=k[r],this.f[":"+v]=[],e&&this.f[":"+v][s](f);if(!b&&P[":"+this.b]!=h&&P[":"+this.b].versions[":"+a]!=h&&!google[D].AdditionalParams&&this.j){c=P[":"+this.b];google[this.b]=google[this.b]||{};for(var V in c.properties)V&&":"==
V[u](0)&&(google[this.b][V[E](1)]=c.properties[V]);google[D].d("script",google[D][x]+c.path+c.js,e);c.css&&google[D].d("css",google[D][x]+c.path+c.css,e)}else(!b||!b.autoloaded)&&google[D].d("script",this.g(a,b),e);this.j&&(this.j=l,this.c=(new Date)[z](),1!=this.c%100&&(this.c=-1));for(r=0;r<k[A];r++)v=k[r],this.e[":"+v]=g}});
U[B].l=function(a){-1!=this.c&&(fa("al_"+this.b,"jl."+((new Date)[z]()-this.c),g),this.c=-1);this.o=this.o.concat(a.components);google[D][this.b]||(google[D][this.b]={});google[D][this.b].packages=this.o.slice(0);for(var b=0;b<a.components[A];b++){this.n[":"+a.components[b]]=g;this.e[":"+a.components[b]]=l;var c=this.f[":"+a.components[b]];if(c){for(var e=0;e<c[A];e++)c[e].B(a.components[b]);delete this.f[":"+a.components[b]]}}};U[B].m=function(a,b){return 0==this.t(b)[A]};U[B].s=function(){return g};
function X(a){this.D=a;this.q={};this.r=0}X[B].A=function(a){this.r++;this.q[":"+a]=g};X[B].B=function(a){this.q[":"+a]&&(this.q[":"+a]=l,this.r--,0==this.r&&n[C](this.D,0))};function W(a,b,c){this.name=a;this.C=b;this.p=c;this.u=this.h=l;this.k=[];google[D].v[this[y]]=aa(this.l,this)}J(W,U);q(W[B],function(a,b){var c=b&&b.callback!=h;c?(this.k[s](b.callback),b.callback="google.loader.callbacks."+this[y]):this.h=g;(!b||!b.autoloaded)&&google[D].d("script",this.g(a,b),c)});W[B].m=function(a,b){return b&&b.callback!=h?this.u:this.h};W[B].l=function(){this.u=g;for(var a=0;a<this.k[A];a++)n[C](this.k[a],0);this.k=[]};
var Y=function(a,b){return a.string?m(a.string)+"="+m(b):a.regex?b[t](/(^.*$)/,a.regex):""};W[B].g=function(a,b){return this.F(this.w(a),a,b)};
W[B].F=function(a,b,c){var e="";a.key&&(e+="&"+Y(a.key,google[D].ApiKey));a.version&&(e+="&"+Y(a.version,b));b=google[D].Secure&&a.ssl?a.ssl:a.uri;if(c!=h)for(var f in c)a.params[f]?e+="&"+Y(a.params[f],c[f]):"other_params"==f?e+="&"+c[f]:"base_domain"==f&&(b="http://"+c[f]+a.uri[E](a.uri[w]("/",7)));google[this[y]]={};-1==b[w]("?")&&e&&(e="?"+e[E](1));return b+e};W[B].s=function(a){return this.w(a).deferred};W[B].w=function(a){if(this.p)for(var b=0;b<this.p[A];++b){var c=this.p[b];if(RegExp(c.pattern).test(a))return c}return this.C};function T(a,b){this.b=a;this.i=b;this.h=l}J(T,U);q(T[B],function(a,b){this.h=g;google[D].d("script",this.g(a,b),l)});T[B].m=function(){return this.h};T[B].l=function(){};T[B].g=function(a,b){if(!this.i.versions[":"+a]){if(this.i.aliases){var c=this.i.aliases[":"+a];c&&(a=c)}if(!this.i.versions[":"+a])throw K("Module: '"+this.b+"' with version '"+a+"' not found!");}return google[D].GoogleApisBase+"/libs/"+this.b+"/"+a+"/"+this.i.versions[":"+a][b&&b.uncompressed?"uncompressed":"compressed"]};
T[B].s=function(){return l};var ga=l,Z=[],ha=(new Date)[z](),ja=function(){ga||(R(n,"unload",ia),ga=g)},ka=function(a,b){ja();if(!google[D].Secure&&(!google[D].Options||google[D].Options.csi===l)){for(var c=0;c<a[A];c++)a[c]=m(a[c][G]()[t](/[^a-z0-9_.]+/g,"_"));for(c=0;c<b[A];c++)b[c]=m(b[c][G]()[t](/[^a-z0-9_.]+/g,"_"));n[C](aa($,h,"//gg.google.com/csi?s=uds&v=2&action="+a[F](",")+"&it="+b[F](",")),1E4)}},fa=function(a,b,c){c?ka([a],[b]):(ja(),Z[s]("r"+Z[A]+"="+m(a+(b?"|"+b:""))),n[C](ia,5<Z[A]?0:15E3))},ia=function(){if(Z[A]){var a=
google[D][x];0==a[w]("http:")&&(a=a[t](/^http:/,"https:"));$(a+"/stats?"+Z[F]("&")+"&nc="+(new Date)[z]()+"_"+((new Date)[z]()-ha));Z.length=0}},$=function(a){var b=new Image,c=$.G++;$.z[c]=b;b.onload=b.onerror=function(){delete $.z[c]};b.src=a;b=h};$.z={};$.G=0;L("google.loader.recordCsiStat",ka);L("google.loader.recordStat",fa);L("google.loader.createImageForLogging",$);

}) ();google.loader.rm({"specs":["feeds","spreadsheets","gdata","visualization",{"name":"sharing","baseSpec":{"uri":"http://www.google.com/s2/sharing/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},"search","orkut","ads","elements",{"name":"books","baseSpec":{"uri":"http://books.google.com/books/api.js","ssl":"https://encrypted.google.com/books/api.js","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},{"name":"friendconnect","baseSpec":{"uri":"http://www.google.com/friendconnect/script/friendconnect.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},"identitytoolkit","ima",{"name":"maps","baseSpec":{"uri":"http://maps.google.com/maps?file\u003dgoogleapi","ssl":"https://maps-api-ssl.google.com/maps?file\u003dgoogleapi","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"uri":"http://maps.googleapis.com/maps/api/js","ssl":"https://maps.googleapis.com/maps/api/js","version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},"payments","wave","annotations_v2","earth","language",{"name":"annotations","baseSpec":{"uri":"http://www.google.com/reviews/scripts/annotations_bootstrap.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"},"country":{"string":"gl"}}}},"picker"]});
google.loader.rfm({":search":{"versions":{":1":"1",":1.0":"1"},"path":"/api/search/1.0/d369d8abd543e83f65f7875493a3cf13/","js":"default+en.I.js","css":"default+en.css","properties":{":JSHash":"d369d8abd543e83f65f7875493a3cf13",":NoOldNames":false,":Version":"1.0"}},":language":{"versions":{":1":"1",":1.0":"1"},"path":"/api/language/1.0/f7a156df16b25154ba5d46841b009d9d/","js":"default+en.I.js","properties":{":JSHash":"f7a156df16b25154ba5d46841b009d9d",":Version":"1.0"}},":feeds":{"versions":{":1":"1",":1.0":"1"},"path":"/api/feeds/1.0/77f89919ef841f93359ce886504e4e3f/","js":"default+en.I.js","css":"default+en.css","properties":{":JSHash":"77f89919ef841f93359ce886504e4e3f",":Version":"1.0"}},":spreadsheets":{"versions":{":0":"1",":0.4":"1"},"path":"/api/spreadsheets/0.4/87ff7219e9f8a8164006cbf28d5e911a/","js":"default.I.js","properties":{":JSHash":"87ff7219e9f8a8164006cbf28d5e911a",":Version":"0.4"}},":ima":{"versions":{":3":"1",":3.0":"1"},"path":"/api/ima/3.0/28a914332232c9a8ac0ae8da68b1006e/","js":"default.I.js","properties":{":JSHash":"28a914332232c9a8ac0ae8da68b1006e",":Version":"3.0"}},":wave":{"versions":{":1":"1",":1.0":"1"},"path":"/api/wave/1.0/3b6f7573ff78da6602dda5e09c9025bf/","js":"default.I.js","properties":{":JSHash":"3b6f7573ff78da6602dda5e09c9025bf",":Version":"1.0"}},":annotations":{"versions":{":1":"1",":1.0":"1"},"path":"/api/annotations/1.0/632d801f04d14d064b3a2e4290697a29/","js":"default+en.I.js","properties":{":JSHash":"632d801f04d14d064b3a2e4290697a29",":Version":"1.0"}},":earth":{"versions":{":1":"1",":1.0":"1"},"path":"/api/earth/1.0/109c7b2bae7fe6cc34ea875176165d81/","js":"default.I.js","properties":{":JSHash":"109c7b2bae7fe6cc34ea875176165d81",":Version":"1.0"}},":picker":{"versions":{":1":"1",":1.0":"1"},"path":"/api/picker/1.0/42a2a86b86ddf2c07febb7138a175941/","js":"default.I.js","css":"default.css","properties":{":JSHash":"42a2a86b86ddf2c07febb7138a175941",":Version":"1.0"}}});
google.loader.rpl({":scriptaculous":{"versions":{":1.8.3":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.9.0":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.2":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.1":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"}},"aliases":{":1.8":"1.8.3",":1":"1.9.0",":1.9":"1.9.0"}},":yui":{"versions":{":2.6.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.9.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.7.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.0r4":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.2r1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":3.3.0":{"uncompressed":"build/yui/yui.js","compressed":"build/yui/yui-min.js"}},"aliases":{":3":"3.3.0",":2":"2.9.0",":2.7":"2.7.0",":2.8.2":"2.8.2r1",":2.6":"2.6.0",":2.9":"2.9.0",":2.8":"2.8.2r1",":2.8.0":"2.8.0r4",":3.3":"3.3.0"}},":swfobject":{"versions":{":2.1":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"},":2.2":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"}},"aliases":{":2":"2.2"}},":webfont":{"versions":{":1.0.28":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.27":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.29":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.12":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.13":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.14":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.15":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.10":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.11":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.2":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.1":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.0":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.6":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.19":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.5":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.18":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.4":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.17":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.3":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.16":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.9":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.21":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.22":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.25":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.26":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.23":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.24":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"}},"aliases":{":1":"1.0.29",":1.0":"1.0.29"}},":ext-core":{"versions":{":3.1.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"},":3.0.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"}},"aliases":{":3":"3.1.0",":3.0":"3.0.0",":3.1":"3.1.0"}},":mootools":{"versions":{":1.3.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.3":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.4":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.5":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"}},"aliases":{":1":"1.1.2",":1.11":"1.1.1",":1.4":"1.4.2",":1.3":"1.3.2",":1.2":"1.2.5",":1.1":"1.1.2"}},":jqueryui":{"versions":{":1.8.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.15":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.14":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.13":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.12":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.11":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.10":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.17":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.16":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.6.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.9":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.7":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.8":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.5":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.6":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.4":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"}},"aliases":{":1.8":"1.8.17",":1.7":"1.7.3",":1.6":"1.6.0",":1":"1.8.17",":1.5":"1.5.3",":1.8.3":"1.8.4"}},":chrome-frame":{"versions":{":1.0.2":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.1":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.0":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"}},"aliases":{":1":"1.0.2",":1.0":"1.0.2"}},":dojo":{"versions":{":1.3.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.1.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.2":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.7.2":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.7.0":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.7.1":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.4.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"}},"aliases":{":1.7":"1.7.2",":1":"1.6.1",":1.6":"1.6.1",":1.5":"1.5.1",":1.4":"1.4.3",":1.3":"1.3.2",":1.2":"1.2.3",":1.1":"1.1.1"}},":jquery":{"versions":{":1.6.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.7.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.7.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.6":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"}},"aliases":{":1.7":"1.7.1",":1.6":"1.6.4",":1":"1.7.1",":1.5":"1.5.2",":1.4":"1.4.4",":1.3":"1.3.2",":1.2":"1.2.6"}},":prototype":{"versions":{":1.7.0.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.2":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.1.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.3":{"uncompressed":"prototype.js","compressed":"prototype.js"}},"aliases":{":1.7":"1.7.0.0",":1.6.1":"1.6.1.0",":1":"1.7.0.0",":1.6":"1.6.1.0",":1.7.0":"1.7.0.0",":1.6.0":"1.6.0.3"}}});
}
;
(function($) {
	$.dateRange = function(startDate, endDate) {
		var start = new Date(startDate)
		,   end = new Date(endDate)
		,   startYear = start.getFullYear()
		,   endYear = end.getFullYear()
		,   startMonth = start.toDateString().substr(4, 3)
		,   endMonth = end.toDateString().substr(4, 3)
		,   startDay = start.getDate()
		,   endDay = end.getDate()
		;
	if (startYear === endYear) {
			if (startMonth === endMonth) {
				if (startDay === endDay) {
					return startDay + ' ' + startMonth + ' ' + startYear;
				} else {
					return startDay + '-' + endDay + ' ' + startMonth + ' ' + startYear;
				}
			} else {
				return startDay + ' ' + startMonth + ' - ' + endDay + ' ' + endMonth + ' ' + startYear;
			}
		} else {
			return startDay + ' ' + startMonth + ' ' + startYear + ' - ' + endDay + ' ' + endMonth + ' ' + endYear;
		}
	};

	$.formatPrice = function(price) {
		price = price.toString().replace(/(\d+)(\d\d\d)($|\.\d\d)/, '$1,$2$3');
		if (price.match(/\.\d+/) === null) {
			price += '.00';
		}
		return '£' + price;
	};

	$.priceOptions = function(offers, date, lastBookingDate, soldOut) {
		var minFinalPrice
		,   maxFinalPrice
		,   countFinalPrice = 0
		,   minCurrentPrice
		,   currentPriceEndDate
		,   countCurrentPrice = 0
		,   formattedPrice = ''
		;
		$(offers).each(function () {
			var offer = this
			,   price = offer.price
			,   until = new Date(offer.validThrough)
			;
			if (soldOut || (offer.inventoryLevel > 0 && until.toString() >= lastBookingDate.toString())) {
				countFinalPrice++;
				if (minFinalPrice === undefined || minFinalPrice > price) {
					minFinalPrice = price;
				}
				if (maxFinalPrice === undefined || maxFinalPrice < price) {
					maxFinalPrice = price;
				}
			}
			if (offer.inventoryLevel > 0 && until > date) {
				if (currentPriceEndDate === undefined || currentPriceEndDate > until) {
					minCurrentPrice = price;
					currentPriceEndDate = until;
					countCurrentPrice = 1;
				} else if (currentPriceEndDate.toString() === until.toString()) {
					countCurrentPrice++;
					if (minCurrentPrice === undefined || minCurrentPrice > price) {
						minCurrentPrice = price;
					}
				}
			}
		});
		// generate the formatted price
		if (minCurrentPrice < minFinalPrice) {
			formattedPrice = '<strike>' + (countFinalPrice > 1 ? 'from ' : '') + $.formatPrice(minFinalPrice) + '</strike> ';
			formattedPrice += '<em>' + (minCurrentPrice === 0 ? 'free' : (countCurrentPrice > 1 ? 'from ' : '') + $.formatPrice(minCurrentPrice) + ' (until ' + currentPriceEndDate.getDate() + ' ' + currentPriceEndDate.toString().substr(4, 3)) + ')</em>';
		} else if (minFinalPrice === 0) {
			if (maxFinalPrice === 0) {
				formattedPrice = 'free';
			} else {
				formattedPrice = '<strike>' + $.formatPrice(maxFinalPrice) + '</strike> <em>free</em>';
			}
		} else if (countFinalPrice > 1) {
			formattedPrice = 'from ' + $.formatPrice(minFinalPrice);
		} else {
			formattedPrice = $.formatPrice(minFinalPrice);
		}
		return formattedPrice;
	};

	$.eventTable = function(ids, pages, events, date) {
		var table = ''
		,   eventList = []
		;

		// create a list of the events that we want to list
		$(ids).each(function (i) {
			var id = this
			,   comId = id.replace(/\.co\.uk/, '.com')
			,   event = events[id] || events[comId]
			,   page = pages[i]
			;
			if (event !== undefined) {
				event['@id'] = id;
				event['describedBy'] = page;
				eventList.push(event);
			}
			return true;
		});

		// create the table
		table += '<table class="table">';
		table += '<thead><tr><th>Course Date</th><th>Location</th><th>Price</th><th></th>';
		if (pages.length === ids.length) {
			table += '<th></th>';
		}
		table += '</tr></thead>';
		table += '<tbody>';
		if (eventList.length === 0) {
			table += '<tr><td colspan="5">This course is not scheduled to run again soon</td></tr>';
		} else {
			$(eventList).each(function () {
				var event = this
				,   soldOut = true
				,   lastBookingDate
				;
				$(event.offers).each(function () {
					var offer = this
					,   until = offer.validThrough !== undefined ? new Date(offer.validThrough) : undefined
					;
					if (offer.inventoryLevel > 0) {
						soldOut = false;
					}
					if (lastBookingDate === undefined || (until > lastBookingDate && (offer.inventoryLevel > 0 || offer.price > 0))) {
						lastBookingDate = until
					}
					return true;
				});
				table += '<tr>';
				table += '<td>' + $.dateRange(event.startDate, event.endDate) + '</td>';
				table += '<td>' + event.location.name + '</td>';
				table += '<td>' + $.priceOptions(event.offers, date, lastBookingDate, soldOut) + '</td>';
				if (pages.length === ids.length) {
					table += '<td><a href="' + event['describedBy'] + '" class="btn btn-small btn-info">More Details</a></td>'; 
				}
				table += '<td>' + (soldOut ? 'Sold Out' : '<a href="' + event['@id'] + '" class="btn btn-small btn-primary">Book Now</a>') + '</td>';
				table += '</tr>';
				return true;
			});
		}
		table += '</tbody>';
		table += '</table>';
		return table;
	};

	$.fn.eventTable = function(options) {
		var $table = $(this)
		,   data = options.data
		,   date = options.date || new Date()
		,   ids = []
		,   pages = []
		;
		$table
			.find('tbody tr')
			.each(function () {
				var $row = $(this)
				,   id = $row.find('td:last a').attr('href')
				,   page = $row.find('td:eq(2) a').attr('href')
				;
				ids.push(id);
				if (page !== id) {
					pages.push(page);
				}
			});
		$table.replaceWith($.eventTable(ids, pages, data, date));
		return $table;
	};
})(jQuery);;
