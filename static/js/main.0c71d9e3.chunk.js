(this.webpackJsonpour_game_ranking=this.webpackJsonpour_game_ranking||[]).push([[0],{38:function(e,a,s){},48:function(e,a,s){"use strict";s.r(a);var c=s(1),r=s(2),l=s.n(r),t=s(28),i=s.n(t),n=(s(38),s(6)),o=s(7),m=s(5),j=s(21);s(18);j.a.initializeApp({apiKey:"AIzaSyCHFG4J2mf_3Axbo8ND7diX2nOZm293gsk",authDomain:"our-game-ranking.firebaseapp.com",databaseURL:"https://our-game-ranking-default-rtdb.europe-west1.firebasedatabase.app",projectId:"our-game-ranking",storageBucket:"our-game-ranking.appspot.com",messagingSenderId:"118353229617",appId:"1:118353229617:web:8fc80354023366c55c6210"});var _=j.a,d=(s(27),Object(r.createContext)()),g=function(e){var a=e.children,s=Object(r.useState)([]),l=Object(m.a)(s,2),t=l[0],i=l[1],n=Object(r.useState)([]),o=Object(m.a)(n,2),j=o[0],g=o[1],b=Object(r.useState)([]),O=Object(m.a)(b,2),p=O[0],h=O[1],u=Object(r.useState)([]),f=Object(m.a)(u,2),x=f[0],P=f[1],N=Object(r.useState)([]),v=Object(m.a)(N,2),k=v[0],A=v[1],G=Object(r.useState)([]),W=Object(m.a)(G,2),H=W[0],U=W[1],I=Object(r.useState)([]),C=Object(m.a)(I,2),y=C[0],S=C[1];return Object(r.useEffect)((function(){var e=_.database().ref("/users"),a=_.database().ref("/games");e.on("value",(function(e){var a=e.val(),s=[];for(var c in a)s.push(a[c]);var r=s.sort((function(e,a){return e.points>a.points?-1:1}));i(r);var l=s.slice(0,3);g(l);var t=s.slice(3,s.length);h(t);var n=s.sort((function(e,a){return e.points/e.gamePlayed>a.points/a.gamePlayed?-1:1}));A(n);var o=n.slice(0,3);U(o);var m=n.slice(3,n.length);S(m)})),a.on("value",(function(e){var a=e.val(),s=[];for(var c in a)s.push(a[c]);P(s)}))}),[]),Object(c.jsx)(d.Provider,{value:{users:t,firstThree:j,restOfUsers:p,games:x,usersByGames:k,firstThreeByGames:H,restOfUsersByGames:y},children:a})},b=s(29),O=s(31),p=function(){return Object(c.jsxs)("nav",{className:"Nav",children:[Object(c.jsx)(n.c,{className:"Nav__link",to:"/our-game-ranking/perGame",children:"per games"}),Object(c.jsx)(n.c,{className:"Nav__link",exact:!0,to:"/our-game-ranking",children:"standard"}),Object(c.jsx)(n.c,{className:"Nav__link",to:"/our-game-ranking/percentage",children:"percentage"})]})},h=s.p+"static/media/coronaIcon.ba990780.svg",u=s.p+"static/media/silverMedalIcon.ebe2bf14.svg",f=s.p+"static/media/bronzeMedalIcon.b566105d.svg",x=function(e){var a=e.data,s=e.restOfData,l=Object(r.useState)(4),t=Object(m.a)(l,2),i=t[0],j=(t[1],Object(o.g)()),_=s.map((function(e){return Object(c.jsxs)(n.b,{to:"/our-game-ranking/".concat(e.username),className:"HomePage__anotherPlaces",children:[Object(c.jsx)("span",{className:"HomePage__placeNumberSpan",children:i}),Object(c.jsxs)("div",{className:"HomePage__anotherPlacesBox",children:[Object(c.jsx)("div",{className:"HomePage__anotherPlacesImageWrapper",children:Object(c.jsx)("img",{src:e.imageUrl,alt:"Profilowe",className:"HomePage__anotherPlacesImage"})}),Object(c.jsx)("span",{className:"HomePage__anotherPlacesNickname",children:e.username}),Object(c.jsx)("span",{className:"HomePage__anotherPlacesPoints",children:"/our-game-ranking/perGame"!==j.pathname?e.points:(e.points/e.gamePlayed).toFixed(2)})]})]},e.username)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"HomePage__leadersWrapper",children:[Object(c.jsxs)(n.b,{to:"/our-game-ranking/".concat(a.length&&a[2].username),className:"HomePage__thirdPlace",children:[Object(c.jsx)("span",{className:"HomePage__placeNumber",children:"3"}),Object(c.jsx)("div",{className:"HomePage__symbol",children:Object(c.jsx)("img",{src:f,className:"HomePage__symbolImage"})}),Object(c.jsx)("div",{className:"HomePage__image",children:Object(c.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[2].imageUrl})}),Object(c.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[2].username}),Object(c.jsx)("span",{className:"HomePage__points",children:a.length&&("/our-game-ranking/perGame"!==j.pathname?a[2].points:(a[2].points/a[2].gamePlayed).toFixed(2))})]}),Object(c.jsxs)(n.b,{to:"/our-game-ranking/".concat(a.length&&a[0].username),className:"HomePage__firstPlace",children:[Object(c.jsx)("span",{className:"HomePage__placeNumber",children:"1"}),Object(c.jsx)("div",{className:"HomePage__symbol",children:Object(c.jsx)("img",{src:h,className:"HomePage__corona",alt:"corona"})}),Object(c.jsx)("div",{className:"HomePage__image HomePage__image--first",children:Object(c.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[0].imageUrl})}),Object(c.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[0].username}),Object(c.jsx)("span",{className:"HomePage__points",children:a.length&&("/our-game-ranking/perGame"!==j.pathname?a[0].points:(a[0].points/a[0].gamePlayed).toFixed(2))})]}),Object(c.jsxs)(n.b,{to:"/our-game-ranking/".concat(a.length&&a[1].username),className:"HomePage__secondPlace",children:[Object(c.jsx)("span",{className:"HomePage__placeNumber",children:"2"}),Object(c.jsx)("div",{className:"HomePage__symbol",children:Object(c.jsx)("img",{src:u,className:"HomePage__symbolImage"})}),Object(c.jsx)("div",{className:"HomePage__image",children:Object(c.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[1].imageUrl})}),Object(c.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[1].username}),Object(c.jsx)("span",{className:"HomePage__points",children:a.length&&("/our-game-ranking/perGame"!==j.pathname?a[1].points:(a[1].points/a[1].gamePlayed).toFixed(2))})]})]}),s&&_]})},P=function(){var e=Object(r.useContext)(d),a=e.restOfUsers,s=e.firstThree,l=e.firstThreeByGames,t=e.restOfUsersByGames;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(n.b,{to:"/our-game-ranking/user",className:"HomePage__userCogWrapper",children:Object(c.jsx)(b.a,{className:"HomePage__userCog",icon:O.a})}),Object(c.jsx)(n.a,{children:Object(c.jsxs)("div",{className:"HomePage",children:[Object(c.jsx)("h2",{className:"HomePage__header",children:"Leaderboard"}),Object(c.jsx)(p,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/our-game-ranking",children:Object(c.jsx)(x,{data:s,restOfData:a})}),Object(c.jsx)(o.a,{exact:!0,path:"/our-game-ranking/perGame",children:Object(c.jsx)(x,{data:l,restOfData:t})}),Object(c.jsx)(o.a,{exact:!0,path:"/our-game-ranking/percentage",children:Object(c.jsx)(x,{data:l,restOfData:t})})]})]})})]})},N=s.p+"static/media/userCogImage.876ff057.svg",v=s(24),k=s.n(v),A=s(32),G=function(){var e=Object(r.useState)(""),a=Object(m.a)(e,2),s=a[0],l=a[1],t=Object(r.useState)(""),i=Object(m.a)(t,2),n=i[0],o=i[1],j=Object(r.useState)(""),d=Object(m.a)(j,2),g=d[0],b=d[1],O=Object(r.useState)(!1),p=Object(m.a)(O,2),h=p[0],u=p[1],f=function(){var e=Object(A.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=_.database().ref("/users/"+s),h&&(a.set({username:s,imageUrl:g,gamePlayed:10,points:0}),l(""),o(""),u(!1));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"AddUser",children:[Object(c.jsx)("h2",{className:"AddUser__header",children:"Add User"}),Object(c.jsxs)("label",{className:"AddUser__nicknameLabel",children:["Username",Object(c.jsx)("input",{value:s,onChange:function(e){return l(e.target.value)},type:"text",className:"AddUser__nicknameInput"})]}),Object(c.jsxs)("label",{className:"AddUser__userImageLabel",children:["User Image",Object(c.jsx)("input",{onChange:function(e){return o(e.target.value)},value:n,type:"text",placeholder:"example.jpg",className:"AddUser__userImageInput"})]}),Object(c.jsx)("button",{onClick:function(){_.storage().ref("/images").child(n).getDownloadURL().then((function(e){b(e),u(!0)})).catch((function(e){return console.log(e)}))},className:"AddUser__submit",children:"Get Url"}),Object(c.jsx)("button",{onClick:f,className:h?"AddUser__submit":"AddUser__submit AddUser__submit--disabled",children:"Create"})]})},W=function(){var e=Object(r.useState)(""),a=Object(m.a)(e,2),s=a[0],l=a[1],t=Object(r.useState)(""),i=Object(m.a)(t,2),n=i[0],o=i[1],j=Object(r.useState)(4),d=Object(m.a)(j,2),g=d[0],b=d[1],O=Object(r.useState)(2),p=Object(m.a)(O,2),h=p[0],u=p[1],f=Object(r.useState)(1),x=Object(m.a)(f,2),P=x[0],N=x[1],v=Object(r.useState)(!1),k=Object(m.a)(v,2),A=k[0],G=k[1],W=Object(r.useState)(""),H=Object(m.a)(W,2),U=H[0],I=H[1];return Object(c.jsxs)("div",{className:"AddGame",children:[Object(c.jsx)("h2",{className:"AddGame__header",children:"Add Game"}),Object(c.jsxs)("label",{className:"AddGame__nicknameLabel",children:["Name",Object(c.jsx)("input",{value:s,onChange:function(e){return l(e.target.value)},type:"text",className:"AddGame__nicknameInput"})]}),Object(c.jsxs)("label",{className:"AddGame__userImageLabel",children:["Logo",Object(c.jsx)("input",{onChange:function(e){return o(e.target.value)},value:n,type:"text",placeholder:"example.jpg",className:"AddGame__userImageInput"})]}),Object(c.jsx)("h2",{className:"AddGame__pointsHeader",children:"Points"}),Object(c.jsxs)("label",{className:"AddGame__pointsLabel",children:["1st place",Object(c.jsx)("input",{onChange:function(e){return b(e.target.value)},value:g,type:"number",className:"AddGame__pointsInput"})]}),Object(c.jsxs)("label",{className:"AddGame__pointsLabel",children:["2nd place",Object(c.jsx)("input",{onChange:function(e){return u(e.target.value)},value:h,type:"number",className:"AddGame__pointsInput"})]}),Object(c.jsxs)("label",{className:"AddGame__pointsLabel",children:["3rd place",Object(c.jsx)("input",{onChange:function(e){return N(e.target.value)},value:P,type:"number",className:"AddGame__pointsInput"})]}),Object(c.jsx)("button",{onClick:function(){_.storage().ref("/images").child(n).getDownloadURL().then((function(e){I(e),G(!0)})).catch((function(e){return console.log(e)}))},className:"AddGame__submit",children:"Get Url"}),Object(c.jsx)("button",{onClick:function(){var e=_.database().ref("/games/"+s);s&&n&&g&&h&&P&&(e.set({name:s,imageUrl:U,firstPlace:g,secondPlace:h,thirdPlace:P}),G(!1),l(""),o(""))},className:A?"AddGame__submit":"AddGame__submit AddGame__submit--disabled",children:"Add game"})]})},H=function(){return Object(c.jsxs)("div",{className:"Buttons",children:[Object(c.jsx)("h2",{className:"Buttons__header",children:"User options"}),Object(c.jsx)(n.b,{to:"/our-game-ranking/addUser",className:"Buttons__addUser",children:"Add user"}),Object(c.jsx)(n.b,{to:"/our-game-ranking/addGame",className:"Buttons__addGame",children:"Add game"}),Object(c.jsx)(n.b,{to:"/our-game-ranking/allGames",className:"Buttons__addGame",children:"Show all games"}),Object(c.jsx)(n.b,{to:"/our-game-ranking/gameSummary",className:"Buttons__addGame",children:"Game summary"})]})},U=function(){var e=Object(r.useContext)(d).games,a=e.map((function(e){return Object(c.jsxs)("div",{className:"AllGames__gameWrapper",children:[Object(c.jsx)("div",{className:"AllGames__logoWrapper",children:Object(c.jsx)("img",{src:e.imageUrl,className:"AllGames__logoImage"})}),Object(c.jsx)("span",{className:"AllGames__gameName",children:e.name}),Object(c.jsxs)("span",{className:"AllGames__gamePoints",children:["1st: ",e.firstPlace]}),Object(c.jsxs)("span",{className:"AllGames__gamePoints",children:["2nd: ",e.secondPlace]}),Object(c.jsxs)("span",{className:"AllGames__gamePoints",children:["3rd: ",e.thirdPlace]})]},e.name)}));return Object(c.jsxs)("div",{className:"AllGames",children:[Object(c.jsx)("h2",{className:"AllGames__header",children:"All Games"}),e.length&&a]})},I=function(){var e=Object(o.f)();return Object(c.jsx)("div",{className:"Back",onClick:function(){return e.goBack()}})},C=function(){return Object(c.jsx)(n.a,{children:Object(c.jsxs)("div",{className:"UserCog",children:[Object(c.jsx)(I,{}),Object(c.jsx)("img",{src:N,alt:"image",className:"UserCog__image"}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/our-game-ranking/user",component:H}),Object(c.jsx)(o.a,{path:"/our-game-ranking/addUser",component:G}),Object(c.jsx)(o.a,{path:"/our-game-ranking/addGame",component:W}),Object(c.jsx)(o.a,{path:"/our-game-ranking/allGames",component:U})]})]})})},y=s.p+"static/media/karolPhoto.78bd859a.jpg",S=s.p+"static/media/catanLogo.08f68185.png",w=function(e){var a=e.match;return Object(c.jsxs)("div",{className:"Profile",children:[Object(c.jsx)(I,{}),Object(c.jsx)("h2",{className:"Profile__header",children:"Profile"}),Object(c.jsxs)("div",{className:"Profile__photoAndCirclesWrapper",children:[Object(c.jsx)("div",{className:"Profile__photoWrapper",children:Object(c.jsx)("img",{src:y,alt:"profileImage",className:"Profile__image"})}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--1"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--2"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--3"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--4"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--5"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--6"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--7"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--8"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--9"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--10"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--11"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--12"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--13"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--14"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--15"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--16"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--17"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--18"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--19"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--20"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--21"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--22"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--23"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--24"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--25"}),Object(c.jsx)("div",{className:"Profile__circle Profile__circle--26"})]}),Object(c.jsx)("span",{className:"Profile__name",children:a.params.name}),Object(c.jsx)("span",{className:"Profile__points",children:"345"}),Object(c.jsx)("h2",{className:"Profile__headerGames",children:"Last played"}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]}),Object(c.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(c.jsx)("span",{className:"Profile__gamePlace",children:"1"}),Object(c.jsxs)("div",{className:"Profile__gameWrapper",children:[Object(c.jsx)("div",{className:"Profile__logoWrapper",children:Object(c.jsx)("img",{src:S,className:"Profile__logoImage"})}),Object(c.jsx)("span",{className:"Profile__gameName",children:"Catan"}),Object(c.jsx)("span",{className:"Profile__gameDate",children:"23-05-2020"})]})]})]})};var B=function(){return Object(c.jsx)(n.a,{children:Object(c.jsx)(g,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/our-game-ranking",component:P}),Object(c.jsx)(o.a,{path:"/our-game-ranking/user",component:C}),Object(c.jsx)(o.a,{path:"/our-game-ranking/:name",component:w})]})})})})},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(a){var s=a.getCLS,c=a.getFID,r=a.getFCP,l=a.getLCP,t=a.getTTFB;s(e),c(e),r(e),l(e),t(e)}))};i.a.render(Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/our-game-ranking",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/our-game-ranking","/service-worker.js");D?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var c=s.headers.get("content-type");404===s.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):L(a,e)}))}}(),F()}},[[48,1,2]]]);
//# sourceMappingURL=main.0c71d9e3.chunk.js.map