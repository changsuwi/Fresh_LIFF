(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/profile.b9deb3c1.png"},24:function(e,t,a){e.exports=a.p+"static/media/album.6d004265.png"},25:function(e,t,a){e.exports=a.p+"static/media/bar.be02c313.png"},26:function(e,t,a){e.exports=a.p+"static/media/balloon.c86ec3d5.mp3"},27:function(e,t,a){e.exports=a.p+"static/media/score.9ba4dd8e.png"},28:function(e,t,a){e.exports=a(43)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),o=a.n(l),r=(a(33),a(6)),i=a(7),s=a(9),m=a(8),u=a(10),p=(a(34),a(2)),d=(a(35),a(21)),E=a.n(d),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"RoomCode"},c.a.createElement("div",{className:"roomEle"},c.a.createElement("div",null," room code "),c.a.createElement("input",{className:"roomCode",placeholder:"ex:12345"}),c.a.createElement("img",{className:"roomCodeProfile",src:E.a,alt:"Profile picture"}),c.a.createElement("input",{className:"profile",placeholder:"Nickname"}),c.a.createElement(p.b,{to:"/ChooseType"},c.a.createElement("button",null,"Enter"))))}}]),t}(n.Component),h=(a(40),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"ChooseType"},c.a.createElement("div",{className:"ChooseEle"},c.a.createElement("div",null,"Choose a category!"),c.a.createElement(p.b,{to:"/Play"},c.a.createElement("button",null,"K-pop")),c.a.createElement(p.b,{to:"/Play"},c.a.createElement("button",null,"Hip-hop")),c.a.createElement(p.b,{to:"/Play"},c.a.createElement("button",null,"Country")),c.a.createElement(p.b,{to:"/Play"},c.a.createElement("button",null,"90's"))))}}]),t}(n.Component)),f=(a(41),a(24)),v=a.n(f),y=a(25),j=a.n(y),O=a(26),N=a.n(O),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Play"},c.a.createElement("div",{className:"playEle"},c.a.createElement("img",{className:"progress",src:j.a,alt:"your progress"}),c.a.createElement("div",{className:"texts"},c.a.createElement("div",{className:"text"},"\u7b2c\u4e00\u9996\uff1a\u5982\u679c\u9047\u898b\u4f60"),c.a.createElement("div",{className:"text"},"\u7b2c\u4e8c\u9996\uff1a\u807d\u898b\u4e0b\u96e8\u7684\u8072\u97f3"),c.a.createElement("div",{className:"text"},"\u7b2c\u4e09\u9996\uff1a\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f\uff3f")),c.a.createElement("img",{className:"album",src:v.a,alt:"album picture"}),c.a.createElement("audio",{src:N.a,autoplay:"autoplay"}),c.a.createElement("div",{className:"time"},c.a.createElement("div",null,"\u5012\u6578\u8a08\u6642"),c.a.createElement("div",null,"00:30")),c.a.createElement("div",{className:"playAnswer"},c.a.createElement("input",{className:"profile",placeholder:"Your answer"}),c.a.createElement(p.b,{to:"/Score"},c.a.createElement("button",null," Go ")))))}}]),t}(n.Component),C=(a(42),a(27)),g=a.n(C),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){window.opener=null,window.open("","_self"),window.close()},a.state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Score"},c.a.createElement("img",{src:g.a,alt:"your score"}),c.a.createElement("div",{className:"scoreButton"},c.a.createElement(p.b,{to:"/ChooseType"},c.a.createElement("button",null,"\u518d\u73a9\u4e00\u6b21")),c.a.createElement("button",{onClick:this.handleClose},"\u96e2\u958b"),c.a.createElement("button",null,"\u5206\u4eab\u6210\u679c")))}}]),t}(n.Component),k=a(11),P=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement(k.d,null,c.a.createElement(k.b,{exact:!0,path:"/",component:b}),c.a.createElement(k.b,{exact:!0,path:"/ChooseType",component:h}),c.a.createElement(k.b,{exact:!0,path:"/Play",component:w}),c.a.createElement(k.b,{exact:!0,path:"/Score",component:x}),c.a.createElement(k.a,{from:"/",to:"/"})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.d3072d33.chunk.js.map