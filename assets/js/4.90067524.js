(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{304:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return h})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(91),n(63),n(305),n(307),n(168),n(64),n(92),n(93),n(45),n(94),n(166);var i=/#.*$/,r=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return s.test(t)}function o(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function d(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=l(t);return a.test(r)?t:r+".html"+n}function f(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&l(t.path)===l(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var l=a[s];".."===l?r.pop():"."!==l&&r.push(l)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=l(e),r=0;r<t.length;r++)if(l(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:d(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,n,i){var r=n.pages,a=n.themeConfig,s=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return g(t);var l=s.sidebar||a.sidebar;if(l){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,l),o=u.base,c=u.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,o)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},305:function(t,e,n){"use strict";var i=n(163),r=n(5),a=n(13),s=n(23),l=n(164),u=n(165);i("match",1,(function(t,e,n){return[function(e){var n=s(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var s=r(t),o=String(this);if(!s.global)return u(s,o);var c=s.unicode;s.lastIndex=0;for(var d,f=[],p=0;null!==(d=u(s,o));){var h=String(d[0]);f[p]=h,""===h&&(s.lastIndex=l(o,a(s.lastIndex),c)),p++}return 0===p?null:f}]}))},306:function(t,e,n){},307:function(t,e,n){"use strict";var i=n(163),r=n(167),a=n(5),s=n(23),l=n(95),u=n(164),o=n(13),c=n(165),d=n(65),f=n(2),p=[].push,h=Math.min,g=!f((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(s(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);for(var l,u,o,c=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");(l=d.call(g,i))&&!((u=g.lastIndex)>h&&(c.push(i.slice(h,l.index)),l.length>1&&l.index<i.length&&p.apply(c,l.slice(1)),o=l[0].length,h=u,c.length>=a));)g.lastIndex===l.index&&g.lastIndex++;return h===i.length?!o&&g.test("")||c.push(""):c.push(i.slice(h)),c.length>a?c.slice(0,a):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var s=n(i,t,this,r,i!==e);if(s.done)return s.value;var d=a(t),f=String(this),p=l(d,RegExp),v=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),b=new p(g?d:"^(?:"+d.source+")",m),x=void 0===r?4294967295:r>>>0;if(0===x)return[];if(0===f.length)return null===c(b,f)?[f]:[];for(var _=0,k=0,y=[];k<f.length;){b.lastIndex=g?k:0;var C,$=c(b,g?f:f.slice(k));if(null===$||(C=h(o(b.lastIndex+(g?0:k)),f.length))===_)k=u(f,k,v);else{if(y.push(f.slice(_,k)),y.length===x)return y;for(var L=1;L<=$.length-1;L++)if(y.push($[L]),y.length===x)return y;k=_=C}}return y.push(f.slice(_)),y}]}),!g)},308:function(t,e){t.exports=function(t){return null==t}},310:function(t,e,n){"use strict";n(306)},313:function(t,e,n){"use strict";n(91),n(63);var i=n(308),r=n.n(i),a=n(304),s={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=r()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,s=e.docsBranch,l=void 0===s?"master":s,u=e.docsRepo,o=void 0===u?n:u;return"string"==typeof t?t:t&&o&&this.$page.relativePath?this.createEditLink(n,o,a,l,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){if(/bitbucket.org/.test(e))return e.replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(a.a,"")+"/-/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r:(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+r}}},l=(n(310),n(44)),u=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.a=u.exports},343:function(t,e,n){},422:function(t,e,n){"use strict";n(343)},444:function(t,e,n){"use strict";n.r(e);var i={components:{PageEdit:n(313).a}},r=(n(422),n(44)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("div",{staticClass:"theme-default-content",staticStyle:{"padding-bottom":"0px"}},[n("h1",[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),n("NewsPostMeta",{attrs:{date:t.$page.frontmatter.date}})],1),t._v(" "),n("Content",{staticClass:"theme-default-content",staticStyle:{"padding-top":"0px"}}),t._v(" "),n("PageEdit"),t._v(" "),t._t("bottom")],2)}),[],!1,null,"22624a70",null);e.default=a.exports}}]);