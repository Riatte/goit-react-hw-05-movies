"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{10:function(t,r,e){e.d(r,{Df:function(){return p},M1:function(){return l},Op:function(){return d},TP:function(){return v},f_:function(){return s},tx:function(){return h}});var n=e(861),u=e(757),a=e.n(u),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"948e549260c255039d2eaf2f177abd8e"};var s="https://image.tmdb.org/t/p/w500",i="trending/all/day",o="search/movie",f="movie/",p=function(){var t=(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(i);case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(a().mark((function t(r){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={params:{query:r}},t.next=3,c.Z.get(o,e);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(f+r);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(f+r+"/reviews");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(f+r+"/credits");case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},168:function(t,r,e){e.r(r),e.d(r,{default:function(){return o}});var n=e(439),u=e(10),a=e(689),c=e(791),s="Reviews_ReviewsStyled__WRekk",i=e(184),o=function(){var t=(0,c.useState)([]),r=(0,n.Z)(t,2),e=r[0],o=r[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.tx)(f).then((function(t){return o(t)})).catch((function(t){return console.log(t)}))}),[f]),(0,i.jsx)("div",{className:s,children:e.length>0?(0,i.jsx)("ul",{children:e.map((function(t){var r=t.id,e=t.author,n=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:e}),(0,i.jsx)("p",{children:n})]},r)}))}):(0,i.jsx)("b",{children:"NO reviews!"})})}}}]);
//# sourceMappingURL=168.0bd78ada.chunk.js.map