
// Global Killswitch
if (Drupal.jsEnabled) {
$(document).ready(function() {
    $("body").append($("#memcache-devel"));
  });
}
;
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
(function() {var d=void 0,g=!0,h=null,k=!1,l=encodeURIComponent,m=window,n=document;function p(a,b){return a.load=b}var r="push",s="replace",t="charAt",v="indexOf",w="ServiceBase",x="name",y="getTime",z="length",A="prototype",B="setTimeout",C="loader",D="substring",E="join",F="toLowerCase";function G(a){return a in H?H[a]:H[a]=-1!=navigator.userAgent[F]()[v](a)}var H={};function I(a,b){var c=function(){};c.prototype=b[A];a.T=b[A];a.prototype=new c}
function J(a,b,c){var e=Array[A].slice.call(arguments,2)||[];return function(){var c=e.concat(Array[A].slice.call(arguments));return a.apply(b,c)}}function K(a){a=Error(a);a.toString=function(){return this.message};return a}function L(a,b){for(var c=a.split(/\./),e=m,f=0;f<c[z]-1;f++)e[c[f]]||(e[c[f]]={}),e=e[c[f]];e[c[c[z]-1]]=b}function aa(a,b,c){a[b]=c}if(!M)var M=L;if(!N)var N=aa;google[C].v={};M("google.loader.callbacks",google[C].v);var O={},P={};google[C].eval={};M("google.loader.eval",google[C].eval);
p(google,function(a,b,c){function e(a){var b=a.split(".");if(2<b[z])throw K("Module: '"+a+"' not found!");"undefined"!=typeof b[1]&&(f=b[0],c.packages=c.packages||[],c.packages[r](b[1]))}var f=a;c=c||{};if(a instanceof Array||a&&"object"==typeof a&&"function"==typeof a[E]&&"function"==typeof a.reverse)for(var j=0;j<a[z];j++)e(a[j]);else e(a);if(a=O[":"+f]){c&&(!c.language&&c.locale)&&(c.language=c.locale);c&&"string"==typeof c.callback&&(j=c.callback,j.match(/^[[\]A-Za-z0-9._]+$/)&&(j=m.eval(j),c.callback=
j));if((j=c&&c.callback!=h)&&!a.s(b))throw K("Module: '"+f+"' must be loaded before DOM onLoad!");j?a.m(b,c)?m[B](c.callback,0):a.load(b,c):a.m(b,c)||a.load(b,c)}else throw K("Module: '"+f+"' not found!");});M("google.load",google.load);
google.S=function(a,b){b?(0==Q[z]&&(R(m,"load",S),!G("msie")&&!G("safari")&&!G("konqueror")&&G("mozilla")||m.opera?m.addEventListener("DOMContentLoaded",S,k):G("msie")?n.write("<script defer onreadystatechange='google.loader.domReady()' src=//:>\x3c/script>"):(G("safari")||G("konqueror"))&&m[B](ba,10)),Q[r](a)):R(m,"load",a)};M("google.setOnLoadCallback",google.S);
function R(a,b,c){if(a.addEventListener)a.addEventListener(b,c,k);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var e=a["on"+b];if(e!=h){var f=[c,e];c=function(){for(var a=0;a<f[z];a++)f[a]()}}a["on"+b]=c}}var Q=[];google[C].O=function(){var a=m.event.srcElement;"complete"==a.readyState&&(a.onreadystatechange=h,a.parentNode.removeChild(a),S())};M("google.loader.domReady",google[C].O);var ca={loaded:g,complete:g};function ba(){ca[n.readyState]?S():0<Q[z]&&m[B](ba,10)}
function S(){for(var a=0;a<Q[z];a++)Q[a]();Q.length=0}google[C].d=function(a,b,c){if(c){var e;"script"==a?(e=n.createElement("script"),e.type="text/javascript",e.src=b):"css"==a&&(e=n.createElement("link"),e.type="text/css",e.href=b,e.rel="stylesheet");(a=n.getElementsByTagName("head")[0])||(a=n.body.parentNode.appendChild(n.createElement("head")));a.appendChild(e)}else"script"==a?n.write('<script src="'+b+'" type="text/javascript">\x3c/script>'):"css"==a&&n.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
M("google.loader.writeLoadTag",google[C].d);google[C].P=function(a){P=a};M("google.loader.rfm",google[C].P);google[C].R=function(a){for(var b in a)"string"==typeof b&&(b&&":"==b[t](0)&&!O[b])&&(O[b]=new T(b[D](1),a[b]))};M("google.loader.rpl",google[C].R);google[C].Q=function(a){if((a=a.specs)&&a[z])for(var b=0;b<a[z];++b){var c=a[b];"string"==typeof c?O[":"+c]=new V(c):(c=new W(c[x],c.baseSpec,c.customSpecs),O[":"+c[x]]=c)}};M("google.loader.rm",google[C].Q);google[C].loaded=function(a){O[":"+a.module].l(a)};
M("google.loader.loaded",google[C].loaded);google[C].N=function(){return"qid="+((new Date)[y]().toString(16)+Math.floor(1E7*Math.random()).toString(16))};M("google.loader.createGuidArg_",google[C].N);L("google_exportSymbol",L);L("google_exportProperty",aa);google[C].a={};M("google.loader.themes",google[C].a);google[C].a.H="//www.google.com/cse/style/look/bubblegum.css";N(google[C].a,"BUBBLEGUM",google[C].a.H);google[C].a.J="//www.google.com/cse/style/look/greensky.css";N(google[C].a,"GREENSKY",google[C].a.J);
google[C].a.I="//www.google.com/cse/style/look/espresso.css";N(google[C].a,"ESPRESSO",google[C].a.I);google[C].a.L="//www.google.com/cse/style/look/shiny.css";N(google[C].a,"SHINY",google[C].a.L);google[C].a.K="//www.google.com/cse/style/look/minimalist.css";N(google[C].a,"MINIMALIST",google[C].a.K);google[C].a.M="//www.google.com/cse/style/look/v2/default.css";N(google[C].a,"V2_DEFAULT",google[C].a.M);function V(a){this.b=a;this.o=[];this.n={};this.e={};this.f={};this.j=g;this.c=-1}
V[A].g=function(a,b){var c="";b!=d&&(b.language!=d&&(c+="&hl="+l(b.language)),b.nocss!=d&&(c+="&output="+l("nocss="+b.nocss)),b.nooldnames!=d&&(c+="&nooldnames="+l(b.nooldnames)),b.packages!=d&&(c+="&packages="+l(b.packages)),b.callback!=h&&(c+="&async=2"),b.style!=d&&(c+="&style="+l(b.style)),b.noexp!=d&&(c+="&noexp=true"),b.other_params!=d&&(c+="&"+b.other_params));if(!this.j){google[this.b]&&google[this.b].JSHash&&(c+="&sig="+l(google[this.b].JSHash));var e=[],f;for(f in this.n)":"==f[t](0)&&e[r](f[D](1));
for(f in this.e)":"==f[t](0)&&this.e[f]&&e[r](f[D](1));c+="&have="+l(e[E](","))}return google[C][w]+"/?file="+this.b+"&v="+a+google[C].AdditionalParams+c};V[A].t=function(a){var b=h;a&&(b=a.packages);var c=h;if(b)if("string"==typeof b)c=[a.packages];else if(b[z]){c=[];for(a=0;a<b[z];a++)"string"==typeof b[a]&&c[r](b[a][s](/^\s*|\s*$/,"")[F]())}c||(c=["default"]);b=[];for(a=0;a<c[z];a++)this.n[":"+c[a]]||b[r](c[a]);return b};
p(V[A],function(a,b){var c=this.t(b),e=b&&b.callback!=h;if(e)var f=new X(b.callback);for(var j=[],q=c[z]-1;0<=q;q--){var u=c[q];e&&f.A(u);if(this.e[":"+u])c.splice(q,1),e&&this.f[":"+u][r](f);else j[r](u)}if(c[z]){b&&b.packages&&(b.packages=c.sort()[E](","));for(q=0;q<j[z];q++)u=j[q],this.f[":"+u]=[],e&&this.f[":"+u][r](f);if(!b&&P[":"+this.b]!=h&&P[":"+this.b].versions[":"+a]!=h&&!google[C].AdditionalParams&&this.j){c=P[":"+this.b];google[this.b]=google[this.b]||{};for(var U in c.properties)U&&":"==
U[t](0)&&(google[this.b][U[D](1)]=c.properties[U]);google[C].d("script",google[C][w]+c.path+c.js,e);c.css&&google[C].d("css",google[C][w]+c.path+c.css,e)}else(!b||!b.autoloaded)&&google[C].d("script",this.g(a,b),e);this.j&&(this.j=k,this.c=(new Date)[y](),1!=this.c%100&&(this.c=-1));for(q=0;q<j[z];q++)u=j[q],this.e[":"+u]=g}});
V[A].l=function(a){-1!=this.c&&(da("al_"+this.b,"jl."+((new Date)[y]()-this.c),g),this.c=-1);this.o=this.o.concat(a.components);google[C][this.b]||(google[C][this.b]={});google[C][this.b].packages=this.o.slice(0);for(var b=0;b<a.components[z];b++){this.n[":"+a.components[b]]=g;this.e[":"+a.components[b]]=k;var c=this.f[":"+a.components[b]];if(c){for(var e=0;e<c[z];e++)c[e].B(a.components[b]);delete this.f[":"+a.components[b]]}}};V[A].m=function(a,b){return 0==this.t(b)[z]};V[A].s=function(){return g};
function X(a){this.D=a;this.q={};this.r=0}X[A].A=function(a){this.r++;this.q[":"+a]=g};X[A].B=function(a){this.q[":"+a]&&(this.q[":"+a]=k,this.r--,0==this.r&&m[B](this.D,0))};function W(a,b,c){this.name=a;this.C=b;this.p=c;this.u=this.h=k;this.k=[];google[C].v[this[x]]=J(this.l,this)}I(W,V);p(W[A],function(a,b){var c=b&&b.callback!=h;c?(this.k[r](b.callback),b.callback="google.loader.callbacks."+this[x]):this.h=g;(!b||!b.autoloaded)&&google[C].d("script",this.g(a,b),c)});W[A].m=function(a,b){return b&&b.callback!=h?this.u:this.h};W[A].l=function(){this.u=g;for(var a=0;a<this.k[z];a++)m[B](this.k[a],0);this.k=[]};
var Y=function(a,b){return a.string?l(a.string)+"="+l(b):a.regex?b[s](/(^.*$)/,a.regex):""};W[A].g=function(a,b){return this.F(this.w(a),a,b)};
W[A].F=function(a,b,c){var e="";a.key&&(e+="&"+Y(a.key,google[C].ApiKey));a.version&&(e+="&"+Y(a.version,b));b=google[C].Secure&&a.ssl?a.ssl:a.uri;if(c!=h)for(var f in c)a.params[f]?e+="&"+Y(a.params[f],c[f]):"other_params"==f?e+="&"+c[f]:"base_domain"==f&&(b="http://"+c[f]+a.uri[D](a.uri[v]("/",7)));google[this[x]]={};-1==b[v]("?")&&e&&(e="?"+e[D](1));return b+e};W[A].s=function(a){return this.w(a).deferred};W[A].w=function(a){if(this.p)for(var b=0;b<this.p[z];++b){var c=this.p[b];if(RegExp(c.pattern).test(a))return c}return this.C};function T(a,b){this.b=a;this.i=b;this.h=k}I(T,V);p(T[A],function(a,b){this.h=g;google[C].d("script",this.g(a,b),k)});T[A].m=function(){return this.h};T[A].l=function(){};T[A].g=function(a,b){if(!this.i.versions[":"+a]){if(this.i.aliases){var c=this.i.aliases[":"+a];c&&(a=c)}if(!this.i.versions[":"+a])throw K("Module: '"+this.b+"' with version '"+a+"' not found!");}return google[C].GoogleApisBase+"/libs/"+this.b+"/"+a+"/"+this.i.versions[":"+a][b&&b.uncompressed?"uncompressed":"compressed"]};
T[A].s=function(){return k};var ea=k,Z=[],fa=(new Date)[y](),ha=function(){ea||(R(m,"unload",ga),ea=g)},ia=function(a,b){ha();if(!google[C].Secure&&(!google[C].Options||google[C].Options.csi===k)){for(var c=0;c<a[z];c++)a[c]=l(a[c][F]()[s](/[^a-z0-9_.]+/g,"_"));for(c=0;c<b[z];c++)b[c]=l(b[c][F]()[s](/[^a-z0-9_.]+/g,"_"));m[B](J($,h,"//gg.google.com/csi?s=uds&v=2&action="+a[E](",")+"&it="+b[E](",")),1E4)}},da=function(a,b,c){c?ia([a],[b]):(ha(),Z[r]("r"+Z[z]+"="+l(a+(b?"|"+b:""))),m[B](ga,5<Z[z]?0:15E3))},ga=function(){if(Z[z]){var a=
google[C][w];0==a[v]("http:")&&(a=a[s](/^http:/,"https:"));$(a+"/stats?"+Z[E]("&")+"&nc="+(new Date)[y]()+"_"+((new Date)[y]()-fa));Z.length=0}},$=function(a){var b=new Image,c=$.G++;$.z[c]=b;b.onload=b.onerror=function(){delete $.z[c]};b.src=a;b=h};$.z={};$.G=0;L("google.loader.recordCsiStat",ia);L("google.loader.recordStat",da);L("google.loader.createImageForLogging",$);

}) ();google.loader.rm({"specs":["feeds","spreadsheets","gdata","visualization",{"name":"sharing","baseSpec":{"uri":"http://www.google.com/s2/sharing/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},"search","orkut","ads","elements",{"name":"books","baseSpec":{"uri":"http://books.google.com/books/api.js","ssl":"https://encrypted.google.com/books/api.js","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},{"name":"friendconnect","baseSpec":{"uri":"http://www.google.com/friendconnect/script/friendconnect.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},"identitytoolkit","ima",{"name":"maps","baseSpec":{"uri":"http://maps.google.com/maps?file\u003dgoogleapi","ssl":"https://maps-api-ssl.google.com/maps?file\u003dgoogleapi","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"uri":"http://maps.googleapis.com/maps/api/js","ssl":"https://maps.googleapis.com/maps/api/js","version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},"payments","wave","annotations_v2","earth","language",{"name":"annotations","baseSpec":{"uri":"http://www.google.com/reviews/scripts/annotations_bootstrap.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"},"country":{"string":"gl"}}}},"picker"]});
google.loader.rfm({":search":{"versions":{":1":"1",":1.0":"1"},"path":"/api/search/1.0/981037b0e11ff304c7b2bfd67d56a506/","js":"default+en.I.js","css":"default+en.css","properties":{":JSHash":"981037b0e11ff304c7b2bfd67d56a506",":NoOldNames":false,":Version":"1.0"}},":language":{"versions":{":1":"1",":1.0":"1"},"path":"/api/language/1.0/5c0e5bb3f3395bbb139742509e2bb268/","js":"default+en.I.js","properties":{":JSHash":"5c0e5bb3f3395bbb139742509e2bb268",":Version":"1.0"}},":feeds":{"versions":{":1":"1",":1.0":"1"},"path":"/api/feeds/1.0/77f89919ef841f93359ce886504e4e3f/","js":"default+en.I.js","css":"default+en.css","properties":{":JSHash":"77f89919ef841f93359ce886504e4e3f",":Version":"1.0"}},":spreadsheets":{"versions":{":0":"1",":0.4":"1"},"path":"/api/spreadsheets/0.4/87ff7219e9f8a8164006cbf28d5e911a/","js":"default.I.js","properties":{":JSHash":"87ff7219e9f8a8164006cbf28d5e911a",":Version":"0.4"}},":ima":{"versions":{":3":"1",":3.0":"1"},"path":"/api/ima/3.0/28a914332232c9a8ac0ae8da68b1006e/","js":"default.I.js","properties":{":JSHash":"28a914332232c9a8ac0ae8da68b1006e",":Version":"3.0"}},":wave":{"versions":{":1":"1",":1.0":"1"},"path":"/api/wave/1.0/3b6f7573ff78da6602dda5e09c9025bf/","js":"default.I.js","properties":{":JSHash":"3b6f7573ff78da6602dda5e09c9025bf",":Version":"1.0"}},":annotations":{"versions":{":1":"1",":1.0":"1"},"path":"/api/annotations/1.0/632d801f04d14d064b3a2e4290697a29/","js":"default+en.I.js","properties":{":JSHash":"632d801f04d14d064b3a2e4290697a29",":Version":"1.0"}},":earth":{"versions":{":1":"1",":1.0":"1"},"path":"/api/earth/1.0/109c7b2bae7fe6cc34ea875176165d81/","js":"default.I.js","properties":{":JSHash":"109c7b2bae7fe6cc34ea875176165d81",":Version":"1.0"}},":picker":{"versions":{":1":"1",":1.0":"1"},"path":"/api/picker/1.0/05c87704cd84b49307c16b1e4e9aee7c/","js":"default.I.js","css":"default.css","properties":{":JSHash":"05c87704cd84b49307c16b1e4e9aee7c",":Version":"1.0"}}});
google.loader.rpl({":scriptaculous":{"versions":{":1.8.3":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.9.0":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.2":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.1":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"}},"aliases":{":1.8":"1.8.3",":1":"1.9.0",":1.9":"1.9.0"}},":yui":{"versions":{":2.6.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.9.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.7.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.0r4":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.2r1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":3.3.0":{"uncompressed":"build/yui/yui.js","compressed":"build/yui/yui-min.js"}},"aliases":{":3":"3.3.0",":2":"2.9.0",":2.7":"2.7.0",":2.8.2":"2.8.2r1",":2.6":"2.6.0",":2.9":"2.9.0",":2.8":"2.8.2r1",":2.8.0":"2.8.0r4",":3.3":"3.3.0"}},":swfobject":{"versions":{":2.1":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"},":2.2":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"}},"aliases":{":2":"2.2"}},":webfont":{"versions":{":1.0.28":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.27":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.29":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.12":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.13":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.14":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.15":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.10":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.11":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.2":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.1":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.0":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.6":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.19":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.5":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.18":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.4":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.17":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.3":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.16":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.9":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.21":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.22":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.25":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.26":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.23":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.24":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"}},"aliases":{":1":"1.0.29",":1.0":"1.0.29"}},":ext-core":{"versions":{":3.1.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"},":3.0.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"}},"aliases":{":3":"3.1.0",":3.0":"3.0.0",":3.1":"3.1.0"}},":mootools":{"versions":{":1.3.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.3":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.4":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.5":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"}},"aliases":{":1":"1.1.2",":1.11":"1.1.1",":1.4":"1.4.2",":1.3":"1.3.2",":1.2":"1.2.5",":1.1":"1.1.2"}},":jqueryui":{"versions":{":1.8.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.15":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.14":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.13":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.12":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.11":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.10":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.17":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.16":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.6.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.9":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.7":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.8":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.5":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.6":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.4":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"}},"aliases":{":1.8":"1.8.17",":1.7":"1.7.3",":1.6":"1.6.0",":1":"1.8.17",":1.5":"1.5.3",":1.8.3":"1.8.4"}},":chrome-frame":{"versions":{":1.0.2":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.1":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.0":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"}},"aliases":{":1":"1.0.2",":1.0":"1.0.2"}},":prototype":{"versions":{":1.7.0.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.2":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.1.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.3":{"uncompressed":"prototype.js","compressed":"prototype.js"}},"aliases":{":1.7":"1.7.0.0",":1.6.1":"1.6.1.0",":1":"1.7.0.0",":1.6":"1.6.1.0",":1.7.0":"1.7.0.0",":1.6.0":"1.6.0.3"}},":jquery":{"versions":{":1.6.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.7.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.7.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.6":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"}},"aliases":{":1.7":"1.7.1",":1.6":"1.6.4",":1":"1.7.1",":1.5":"1.5.2",":1.4":"1.4.4",":1.3":"1.3.2",":1.2":"1.2.6"}},":dojo":{"versions":{":1.3.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.1.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.2":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.7.2":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.7.0":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.7.1":{"uncompressed":"dojo/dojo.js.uncompressed.js","compressed":"dojo/dojo.js"},":1.4.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"}},"aliases":{":1.7":"1.7.2",":1":"1.6.1",":1.6":"1.6.1",":1.5":"1.5.1",":1.4":"1.4.3",":1.3":"1.3.2",":1.2":"1.2.3",":1.1":"1.1.1"}}});
}
;
(function ($) {

Drupal.toolbar = Drupal.toolbar || {};

/**
 * Attach toggling behavior and notify the overlay of the toolbar.
 */
Drupal.behaviors.toolbar = {
  attach: function(context) {

    // Set the initial state of the toolbar.
    $('#toolbar', context).once('toolbar', Drupal.toolbar.init);

    // Toggling toolbar drawer.
    $('#toolbar a.toggle', context).once('toolbar-toggle').click(function(e) {
      Drupal.toolbar.toggle();
      // Allow resize event handlers to recalculate sizes/positions.
      $(window).triggerHandler('resize');
      return false;
    });
  }
};

/**
 * Retrieve last saved cookie settings and set up the initial toolbar state.
 */
Drupal.toolbar.init = function() {
  // Retrieve the collapsed status from a stored cookie.
  var collapsed = $.cookie('Drupal.toolbar.collapsed');

  // Expand or collapse the toolbar based on the cookie value.
  if (collapsed == 1) {
    Drupal.toolbar.collapse();
  }
  else {
    Drupal.toolbar.expand();
  }
};

/**
 * Collapse the toolbar.
 */
Drupal.toolbar.collapse = function() {
  var toggle_text = Drupal.t('Show shortcuts');
  $('#toolbar div.toolbar-drawer').addClass('collapsed');
  $('#toolbar a.toggle')
    .removeClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').removeClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    1,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Expand the toolbar.
 */
Drupal.toolbar.expand = function() {
  var toggle_text = Drupal.t('Hide shortcuts');
  $('#toolbar div.toolbar-drawer').removeClass('collapsed');
  $('#toolbar a.toggle')
    .addClass('toggle-active')
    .attr('title',  toggle_text)
    .html(toggle_text);
  $('body').addClass('toolbar-drawer').css('paddingTop', Drupal.toolbar.height());
  $.cookie(
    'Drupal.toolbar.collapsed',
    0,
    {
      path: Drupal.settings.basePath,
      // The cookie should "never" expire.
      expires: 36500
    }
  );
};

/**
 * Toggle the toolbar.
 */
Drupal.toolbar.toggle = function() {
  if ($('#toolbar div.toolbar-drawer').hasClass('collapsed')) {
    Drupal.toolbar.expand();
  }
  else {
    Drupal.toolbar.collapse();
  }
};

Drupal.toolbar.height = function() {
  var $toolbar = $('#toolbar');
  var height = $toolbar.outerHeight();
  // In modern browsers (including IE9), when box-shadow is defined, use the
  // normal height.
  var cssBoxShadowValue = $toolbar.css('box-shadow');
  var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
  // In IE8 and below, we use the shadow filter to apply box-shadow styles to
  // the toolbar. It adds some extra height that we need to remove.
  if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test($toolbar.css('filter'))) {
    height -= $toolbar[0].filters.item("DXImageTransform.Microsoft.Shadow").strength;
  }
  return height;
};

})(jQuery);
;
