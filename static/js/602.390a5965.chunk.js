"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{602:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var t=n(439),s=n(689),a=n(87),i=n(791),c="MoviesInfo_MoviesInfo__XVELf",u="MoviesInfo_MoviesInfoImg__l98tc",o=n(10),l=n(184),f=function(e){var r=e.movie,n=r.title,t=r.overview,s=r.genres,a=void 0===s?[]:s,i=r.poster_path,f=r.vote_average,d=i?o.f_+i:"https://img.myloview.ru/posters/play-button-icon-media-player-sign-400-172071437.jpg",v=Math.floor(10*f);return(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("img",{src:d,alt:"",className:u}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:n}),(0,l.jsxs)("p",{children:["User score: ",v,"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:t}),(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)("p",{children:a.map((function(e){return e.name})).join(", ")})]})]})},d="MovieDetails_Link__aMqle",v="MovieDetails_LinkStyled__0gwjZ",p="MovieDetails_LinkStyledList__osg94",h="MovieDetails_AdditionalLinkStyled__qgWU4",m=function(){var e,r,n=(0,i.useState)([]),c=(0,t.Z)(n,2),u=c[0],m=c[1],x=(0,s.UO)().movieId,_=(0,s.TH)(),j=(0,i.useRef)(null!==(e=null===(r=_.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){(0,o.TP)(x).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))}),[x]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.rU,{to:j.current,className:d,children:"Go back"}),(0,l.jsx)(f,{movie:u,movieId:x}),(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("h2",{children:"Additional information"}),(0,l.jsxs)("ul",{className:p,children:[(0,l.jsx)("li",{className:v,children:(0,l.jsx)(a.rU,{to:"cast",className:d,children:"Cast"})}),(0,l.jsx)("li",{className:v,children:(0,l.jsx)(a.rU,{to:"reviews ",className:d,children:"Reviews"})})]})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(s.j3,{})})]})}},10:function(e,r,n){n.d(r,{Df:function(){return f},M1:function(){return h},Op:function(){return d},TP:function(){return v},f_:function(){return c},tx:function(){return p}});var t=n(861),s=n(757),a=n.n(s),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"948e549260c255039d2eaf2f177abd8e"};var c="https://image.tmdb.org/t/p/w500",u="trending/all/day",o="search/movie",l="movie/",f=function(){var e=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(u);case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{query:r}},e.next=3,i.Z.get(o,n);case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(l+r);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(l+r+"/reviews");case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(l+r+"/credits");case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.390a5965.chunk.js.map