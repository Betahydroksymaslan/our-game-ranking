(this.webpackJsonpour_game_ranking=this.webpackJsonpour_game_ranking||[]).push([[0],{43:function(e,a,s){},53:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(2),n=s.n(c),r=s(33),l=s.n(r),i=(s(43),s(7)),m=s(6),o=s(4),d=s(26);s(14);d.a.initializeApp({apiKey:"AIzaSyCHFG4J2mf_3Axbo8ND7diX2nOZm293gsk",authDomain:"our-game-ranking.firebaseapp.com",databaseURL:"https://our-game-ranking-default-rtdb.europe-west1.firebasedatabase.app",projectId:"our-game-ranking",storageBucket:"our-game-ranking.appspot.com",messagingSenderId:"118353229617",appId:"1:118353229617:web:8fc80354023366c55c6210"});var j=d.a,u=(s(32),Object(c.createContext)()),b=function(e){var a=e.children,s=Object(c.useState)([]),n=Object(o.a)(s,2),r=n[0],l=n[1],i=Object(c.useState)([]),m=Object(o.a)(i,2),d=m[0],b=m[1],_=Object(c.useState)([]),p=Object(o.a)(_,2),O=p[0],g=p[1],h=Object(c.useState)([]),x=Object(o.a)(h,2),f=x[0],P=x[1],N=Object(c.useState)([]),v=Object(o.a)(N,2),y=v[0],G=v[1],S=Object(c.useState)([]),k=Object(o.a)(S,2),A=k[0],H=k[1],U=Object(c.useState)([]),C=Object(o.a)(U,2),W=C[0],w=C[1];return Object(c.useEffect)((function(){var e=j.database().ref("/users"),a=j.database().ref("/games");e.on("value",(function(e){var a=e.val(),s=[];for(var t in a)s.push(a[t]);var c=s.sort((function(e,a){return e.points>a.points?-1:1}));l(c);var n=s.slice(0,3);b(n);var r=s.slice(3,s.length);g(r);var i=s.sort((function(e,a){return e.points/e.gamePlayed>a.points/a.gamePlayed?-1:1}));G(i);var m=i.slice(0,3);H(m);var o=i.slice(3,i.length);w(o)})),a.on("value",(function(e){var a=e.val(),s=[];for(var t in a)s.push(a[t]);P(s)}))}),[]),Object(t.jsx)(u.Provider,{value:{users:r,firstThree:d,restOfUsers:O,games:f,usersByGames:y,firstThreeByGames:A,restOfUsersByGames:W},children:a})},_=s(34),p=s(36),O=s.p+"static/media/coronaIcon.ba990780.svg",g=s.p+"static/media/silverMedalIcon.ebe2bf14.svg",h=s.p+"static/media/bronzeMedalIcon.b566105d.svg",x=function(e){return Object(t.jsx)("div",{className:"loaderWrapper",children:Object(t.jsxs)("div",{className:"styledLoader",children:[Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})})]})})},f=function(e){var a=e.data,s=e.restOfData,c=e.isStandard,n=4,r=s.map((function(e){return n++,Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(e.username),className:"HomePage__anotherPlaces",children:[Object(t.jsx)("span",{className:"HomePage__placeNumberSpan",children:n}),Object(t.jsxs)("div",{className:"HomePage__anotherPlacesBox",children:[Object(t.jsx)("div",{className:"HomePage__anotherPlacesImageWrapper",children:Object(t.jsx)("img",{src:e.imageUrl,alt:"Profilowe",className:"HomePage__anotherPlacesImage"})}),Object(t.jsx)("span",{className:"HomePage__anotherPlacesNickname",children:e.username}),Object(t.jsx)("span",{className:"HomePage__anotherPlacesPoints",children:c?e.points:(a=e.points,s=e.gamePlayed,0===s?0:a/s.toFixed(2))})]})]},e.username);var a,s}));return a.length?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"HomePage__leadersWrapper",children:[Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(a.length&&a[2].username),className:"HomePage__thirdPlace",children:[Object(t.jsx)("span",{className:"HomePage__placeNumber",children:"3"}),Object(t.jsx)("div",{className:"HomePage__symbol",children:Object(t.jsx)("img",{src:h,className:"HomePage__symbolImage"})}),Object(t.jsx)("div",{className:"HomePage__image",children:Object(t.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[2].imageUrl})}),Object(t.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[2].username}),Object(t.jsx)("span",{className:"HomePage__points",children:a.length&&(c?a[2].points:(a[2].points/a[2].gamePlayed).toFixed(2))})]}),Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(a.length&&a[0].username),className:"HomePage__firstPlace",children:[Object(t.jsx)("span",{className:"HomePage__placeNumber",children:"1"}),Object(t.jsx)("div",{className:"HomePage__symbol",children:Object(t.jsx)("img",{src:O,className:"HomePage__corona",alt:"corona"})}),Object(t.jsx)("div",{className:"HomePage__image HomePage__image--first",children:Object(t.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[0].imageUrl})}),Object(t.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[0].username}),Object(t.jsx)("span",{className:"HomePage__points",children:a.length&&(c?a[0].points:(a[0].points/a[0].gamePlayed).toFixed(2))})]}),Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(a.length&&a[1].username),className:"HomePage__secondPlace",children:[Object(t.jsx)("span",{className:"HomePage__placeNumber",children:"2"}),Object(t.jsx)("div",{className:"HomePage__symbol",children:Object(t.jsx)("img",{src:g,className:"HomePage__symbolImage"})}),Object(t.jsx)("div",{className:"HomePage__image",children:Object(t.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[1].imageUrl})}),Object(t.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[1].username}),Object(t.jsx)("span",{className:"HomePage__points",children:a.length&&(c?a[1].points:(a[1].points/a[1].gamePlayed).toFixed(2))})]})]}),s&&r]}):Object(t.jsx)(x,{})},P=s(17),N=function(){var e=Object(c.useContext)(u),a=e.restOfUsers,s=e.firstThree,n=e.firstThreeByGames,r=e.restOfUsersByGames,l=Object(c.useRef)(null),m=Object(c.useState)(!0),d=Object(o.a)(m,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){P.a.timeline().fromTo(l,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"HomePage",ref:function(e){return l=e},children:[Object(t.jsx)("h2",{className:"HomePage__header",children:"Leaderboard"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/user",className:"HomePage__userCogWrapper",children:Object(t.jsx)(_.a,{className:"HomePage__userCog",icon:p.a})}),Object(t.jsxs)("nav",{className:"HomePage__nav",children:[Object(t.jsx)("div",{onClick:function(){return b(!1)},className:j?"HomePage__link":"HomePage__link HomePage__link--active",children:"per games"}),Object(t.jsx)("div",{onClick:function(){return b(!0)},className:j?"HomePage__link HomePage__link--active":"HomePage__link",children:"standard"})]}),j?Object(t.jsx)(f,{isStandard:j,data:s,restOfData:a}):Object(t.jsx)(f,{isStandard:j,data:n,restOfData:r})]})})},v=s.p+"static/media/userCogImage.876ff057.svg",y=s(29),G=s.n(y),S=s(37),k=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),s=a[0],n=a[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),i=l[0],m=l[1],d=Object(c.useState)(""),u=Object(o.a)(d,2),b=u[0],_=u[1],p=Object(c.useState)(!1),O=Object(o.a)(p,2),g=O[0],h=O[1],x=function(){var e=Object(S.a)(G.a.mark((function e(){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=j.database().ref("/users/"+s),g&&(a.set({username:s,imageUrl:b,gamePlayed:0,points:0,winnings:0}),n(""),m(""),h(!1));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.jsxs)("div",{className:"AddUser",children:[Object(t.jsx)("h2",{className:"AddUser__header",children:"Add User"}),Object(t.jsxs)("label",{className:"AddUser__nicknameLabel",children:["Username",Object(t.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},type:"text",className:"AddUser__nicknameInput"})]}),Object(t.jsxs)("label",{className:"AddUser__userImageLabel",children:["User Image",Object(t.jsx)("input",{onChange:function(e){return m(e.target.value)},value:i,type:"text",placeholder:"example.jpg",className:"AddUser__userImageInput"})]}),Object(t.jsx)("button",{onClick:function(){j.storage().ref("/images").child(i).getDownloadURL().then((function(e){_(e),h(!0)})).catch((function(e){return console.log(e)}))},className:"AddUser__submit",children:"Get Url"}),Object(t.jsx)("button",{onClick:x,className:g?"AddUser__submit":"AddUser__submit AddUser__submit--disabled",children:"Create"})]})},A=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),s=a[0],n=a[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),i=l[0],m=l[1],d=Object(c.useState)(4),u=Object(o.a)(d,2),b=u[0],_=u[1],p=Object(c.useState)(2),O=Object(o.a)(p,2),g=O[0],h=O[1],x=Object(c.useState)(1),f=Object(o.a)(x,2),P=f[0],N=f[1],v=Object(c.useState)(!1),y=Object(o.a)(v,2),G=y[0],S=y[1],k=Object(c.useState)(""),A=Object(o.a)(k,2),H=A[0],U=A[1];return Object(t.jsxs)("div",{className:"AddGame",children:[Object(t.jsx)("h2",{className:"AddGame__header",children:"Add Game"}),Object(t.jsxs)("label",{className:"AddGame__nicknameLabel",children:["Name",Object(t.jsx)("input",{value:s,onChange:function(e){return n(e.target.value)},type:"text",className:"AddGame__nicknameInput"})]}),Object(t.jsxs)("label",{className:"AddGame__userImageLabel",children:["Logo",Object(t.jsx)("input",{onChange:function(e){return m(e.target.value)},value:i,type:"text",placeholder:"example.jpg",className:"AddGame__userImageInput"})]}),Object(t.jsx)("h2",{className:"AddGame__pointsHeader",children:"Points"}),Object(t.jsxs)("label",{className:"AddGame__pointsLabel",children:["1st place",Object(t.jsx)("input",{onChange:function(e){return _(e.target.value)},value:b,type:"number",className:"AddGame__pointsInput"})]}),Object(t.jsxs)("label",{className:"AddGame__pointsLabel",children:["2nd place",Object(t.jsx)("input",{onChange:function(e){return h(e.target.value)},value:g,type:"number",className:"AddGame__pointsInput"})]}),Object(t.jsxs)("label",{className:"AddGame__pointsLabel",children:["3rd place",Object(t.jsx)("input",{onChange:function(e){return N(e.target.value)},value:P,type:"number",className:"AddGame__pointsInput"})]}),Object(t.jsx)("button",{onClick:function(){j.storage().ref("/images").child(i).getDownloadURL().then((function(e){U(e),S(!0)})).catch((function(e){return console.log(e)}))},className:"AddGame__submit",children:"Get Url"}),Object(t.jsx)("button",{onClick:function(){var e=j.database().ref("/games/"+s);s&&i&&b&&g&&P&&(e.set({name:s,imageUrl:H,firstPlace:b,secondPlace:g,thirdPlace:P}),S(!1),n(""),m(""))},className:G?"AddGame__submit":"AddGame__submit AddGame__submit--disabled",children:"Add game"})]})},H=function(){return Object(t.jsxs)("div",{className:"Buttons",children:[Object(t.jsx)("h2",{className:"Buttons__header",children:"User options"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/addUser",className:"Buttons__addUser",children:"Add user"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/addGame",className:"Buttons__addGame",children:"Add game"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/allGames",className:"Buttons__addGame",children:"Show all games"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/gameSummary",className:"Buttons__addGame",children:"Game summary"})]})},U=function(){var e=Object(c.useContext)(u).games,a=e.map((function(e){return Object(t.jsxs)("div",{className:"AllGames__gameWrapper",children:[Object(t.jsx)("div",{className:"AllGames__logoWrapper",children:Object(t.jsx)("img",{src:e.imageUrl,className:"AllGames__logoImage"})}),Object(t.jsx)("span",{className:"AllGames__gameName",children:e.name.length>16?"".concat(e.name.slice(0,16),".."):e.name}),Object(t.jsxs)("span",{className:"AllGames__gamePoints",children:["1st: ",e.firstPlace]}),Object(t.jsxs)("span",{className:"AllGames__gamePoints",children:["2nd: ",e.secondPlace]}),Object(t.jsxs)("span",{className:"AllGames__gamePoints",children:["3rd: ",e.thirdPlace]})]},e.name)}));return e?Object(t.jsxs)("div",{className:"AllGames",children:[Object(t.jsx)("h2",{className:"AllGames__header",children:"All Games"}),e.length&&a]}):Object(t.jsx)(x,{})},C=function(){var e=Object(m.f)();return Object(t.jsx)("div",{className:"Back",onClick:function(){return e.goBack()}})},W=s(20),w=s(23),I=function(e){var a=e.message,s=e.closeDialog;return Object(t.jsxs)("div",{className:"Dialog",children:[Object(t.jsx)("span",{className:"Dialog__message",children:a}),Object(t.jsx)("span",{onClick:s,className:"Dialog__confirm",children:"OK"})]})},B=function(){var e=Object(c.useContext)(u),a=e.users,s=e.games,n=Object(c.useState)(!1),r=Object(o.a)(n,2),l=r[0],i=r[1],m=Object(c.useState)(""),d=Object(o.a)(m,2),b=d[0],_=d[1],p=Object(c.useState)([]),O=Object(o.a)(p,2),g=O[0],h=O[1],x=Object(c.useState)(""),f=Object(o.a)(x,2),P=f[0],N=f[1],v=a.map((function(e){return Object(t.jsx)("option",{value:e.username,name:e.username,children:e.username},e.username)})),y=g.map((function(e){return Object(t.jsx)("div",{className:"GameSummary__playerIcon",children:Object(t.jsx)("img",{src:e.imgUrl,className:"GameSummary__playerIconImg"})},e.name)})),G=Object(c.useState)([]),S=Object(o.a)(G,2),k=S[0],A=S[1],H=Object(c.useState)(!1),U=Object(o.a)(H,2),C=U[0],B=U[1],L=s.map((function(e){return Object(t.jsx)("option",{value:e.name,name:e.name,children:e.name},e.name)})),D=Object(c.useState)(),F=Object(o.a)(D,2),T=F[0],E=F[1],R=Object(c.useState)(!1),M=Object(o.a)(R,2),z=M[0],J=M[1],V=Object(c.useState)(4),K=Object(o.a)(V,2),Y=K[0],X=K[1],Z=Object(c.useState)(),$=Object(o.a)(Z,2),q=$[0],Q=$[1],ee=Object(c.useState)(),ae=Object(o.a)(ee,2),se=ae[0],te=ae[1],ce=Object(c.useState)(),ne=Object(o.a)(ce,2),re=ne[0],le=ne[1],ie=Object(c.useState)([]),me=Object(o.a)(ie,2),oe=me[0],de=me[1],je=Object(c.useState)(""),ue=Object(o.a)(je,2),be=ue[0],_e=ue[1],pe=Object(c.useState)(!1),Oe=Object(o.a)(pe,2),ge=(Oe[0],Oe[1]),he=Object(c.useState)(!1),xe=Object(o.a)(he,2),fe=xe[0],Pe=xe[1],Ne=Object(c.useState)([]),ve=Object(o.a)(Ne,2),ye=ve[0],Ge=ve[1],Se=Object(c.useState)([]),ke=Object(o.a)(Se,2),Ae=ke[0],He=ke[1],Ue=function(e){Pe(!0),te(e.target.dataset.place),Q(e.target.dataset.index),le(e.target.dataset.finalplace)},Ce=oe.map((function(e){return Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:e.place}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(0pkt)"}),ye[e.place-1]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:ye[e.place-1]&&ye[e.place-1].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:ye[e.place-1]&&ye[e.place-1].username})]}):Object(t.jsx)("span",{"data-place":"anotherPlace","data-finalplace":e.place,"data-index":e.place-1,onClick:Ue,className:"GameSummary__addPlayerToRanking",children:"Add player"})]},e.place)})),We=g.map((function(e){return Object(t.jsx)("option",{value:e.name,name:e.name,children:e.name},e.name)})),we=Object(c.useState)(!1),Ie=Object(o.a)(we,2),Be=Ie[0],Le=Ie[1],De=function(){return Le(!1)};return Object(c.useEffect)((function(){var e=[];a.map((function(a){return e.push(null)})),He(e)}),[]),console.log(ye),Object(t.jsxs)("div",{className:"GameSummary",children:[Object(t.jsx)("h2",{className:"GameSummary__header",children:"Game summary"}),Object(t.jsx)("h2",{className:"GameSummary__header GameSummary__header--addPlayers",children:"Add players"}),Object(t.jsx)("div",{className:"GameSummary__usersIconWrapper",children:y}),Object(t.jsx)("div",{className:"GameSummary__addPlayer",onClick:function(){return i(!0)},children:"+"}),l?Object(t.jsxs)("div",{className:"GameSummary__usersPrompt",children:[Object(t.jsx)("div",{className:"GameSummary__usersPromptUsers",children:Object(t.jsxs)("label",{className:"GameSummary__usersPromptLabel",children:["Select Player:",Object(t.jsxs)("select",{onChange:function(e){var s=a.find((function(a){return a.username===e.target.value}));_(e.target.value),N(s.imageUrl)},className:"GameSummary__usersPromptSelect",defaultValue:"DEFAULT",children:[Object(t.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Player"}),v]})]})}),Object(t.jsx)("div",{className:"GameSummary__usersPromptAdd",onClick:function(){h((function(e){return g.find((function(e){return e.name===b}))?(J(!0),E("A user with this nickname has already been added"),Object(w.a)(e)):[].concat(Object(w.a)(e),[{name:b,imgUrl:P}])})),i(!1)},children:"Add player"})]}):null,Object(t.jsx)("h2",{className:"GameSummary__header GameSummary__header--chooseGame",children:"Choose game"}),Object(t.jsx)("div",{className:"GameSummary__currentGameWrapper",children:k.name}),Object(t.jsx)("div",{onClick:function(){return B(!0)},className:"GameSummary__addPlayer",children:"+"}),C?Object(t.jsxs)("div",{className:"GameSummary__usersPrompt",children:[Object(t.jsx)("div",{className:"GameSummary__usersPromptUsers",children:Object(t.jsxs)("label",{className:"GameSummary__usersPromptLabel",children:["Select Game:",Object(t.jsxs)("select",{onChange:function(e){return A(s.find((function(a){return a.name===e.target.value})))},className:"GameSummary__usersPromptSelect",defaultValue:"DEFAULT",children:[Object(t.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select game"}),L]})]})}),Object(t.jsx)("div",{className:"GameSummary__usersPromptAdd",onClick:function(){return B(!1)},children:"Add game"})]}):null,Object(t.jsx)("h2",{className:"GameSummary__header GameSummary__header--chooseGame",children:"Add points"}),g.length&&k.name?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("ul",{className:"GameSummary__addPointsUl",children:[Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:"1"}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(".concat(k.name?k.firstPlace:"0","pkt)")}),ye[0]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:ye[0].username&&ye[0].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:ye[0].username&&ye[0].username})]}):Object(t.jsx)("span",{"data-place":"firstPlace","data-index":0,"data-finalplace":1,onClick:Ue,className:"GameSummary__addPlayerToRanking",children:"Add player"})]}),Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:"2"}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(".concat(k.name?k.secondPlace:"0","pkt)")}),ye[1]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:ye[1].username&&ye[1].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:ye[1].username&&ye[1].username})]}):Object(t.jsx)("span",{"data-place":"secondPlace","data-index":1,"data-finalplace":2,onClick:Ue,className:"GameSummary__addPlayerToRanking",children:"Add player"})]}),Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:"3"}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(".concat(k.name?k.thirdPlace:"0","pkt)")}),ye[2]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:ye[2].username&&ye[2].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:ye[2].username&&ye[2].username})]}):Object(t.jsx)("span",{"data-place":"thirdPlace","data-index":2,"data-finalplace":3,onClick:Ue,className:"GameSummary__addPlayerToRanking",children:"Add player"})]}),Ce]}),Object(t.jsx)("div",{onClick:function(){if(!(oe.length+3<g.length))return E("You have only added ".concat(g.length," players")),void J(!0);de((function(e){return[].concat(Object(w.a)(e),[{place:Y}])})),X((function(e){return e+1}))},className:"GameSummary__addPointsAddAnother",children:"+ Next Player"})]}):null,Object(t.jsx)("div",{onClick:function(){return Le(!0)},className:"GameSummary__updateButton",children:"Update ranking!"}),Be?Object(t.jsxs)("div",{className:"GameSummary__updateConfirmBox",children:[Object(t.jsx)("span",{className:"GameSummary__updateConfirmMessage",children:"Are you sure you want to update the ranking?"}),Object(t.jsxs)("div",{className:"GameSummary__confirmBoxOptionsWrapper",children:[Object(t.jsx)("span",{onClick:De,className:"GameSummary__confirmBoxReject",children:"No"}),Object(t.jsx)("span",{onClick:function(){var e=new Date;ye.map((function(a){if(a){var s=j.database().ref("/users/"+a.username),t=j.database().ref("/users/".concat(a.username,"/lastPlayedGames/").concat(a.currentGame," ").concat(e.toString().slice(4,24)));s.update({points:a.newPoints,gamePlayed:a.gamePlayed+1,winnings:1===a.finalPlace?a.winnings+1:a.winnings}),t.set({name:a.currentGame,place:a.finalPlace,imageUrl:a.currentGameUrl,date:e.toString().slice(4,24)}),De()}}))},className:"GameSummary__confirmBoxAgreement",children:"Yes"})]})]}):null,z?Object(t.jsx)(I,{closeDialog:function(){return J(!1)},message:T}):null,fe?Object(t.jsxs)("div",{className:"GameSummary__usersPrompt",children:[Object(t.jsx)("div",{className:"GameSummary__usersPromptUsers",children:Object(t.jsxs)("label",{className:"GameSummary__usersPromptLabel",children:["Select Player:",Object(t.jsxs)("select",{onChange:function(e){var s=a.find((function(a){return a.username===e.target.value})),t=Object.entries(k).find((function(e){var a=Object(o.a)(e,2),s=a[0];a[1];return s===se}));_e(Object(W.a)(Object(W.a)({},s),{},{finalPlace:parseInt(re),newPoints:s.points+parseInt(t[1]),place:se,currentGame:k.name,currentGameUrl:k.imageUrl}))},className:"GameSummary__usersPromptSelect",defaultValue:"DEFAULT",children:[Object(t.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select player"}),g&&We]})]})}),Object(t.jsx)("div",{className:"GameSummary__usersPromptAdd",onClick:function(){Pe(!1),ge(!0),Ae.splice(q,1,be),Ge(Ae)},children:"Add player"})]}):null]})},L=function(){return Object(t.jsx)(i.a,{children:Object(t.jsxs)("div",{className:"UserCog",children:[Object(t.jsx)(C,{}),Object(t.jsx)("img",{src:v,alt:"image",className:"UserCog__image"}),Object(t.jsxs)(m.c,{children:[Object(t.jsx)(m.a,{path:"/our-game-ranking/user",component:H}),Object(t.jsx)(m.a,{path:"/our-game-ranking/addUser",component:k}),Object(t.jsx)(m.a,{path:"/our-game-ranking/addGame",component:A}),Object(t.jsx)(m.a,{path:"/our-game-ranking/allGames",component:U}),Object(t.jsx)(m.a,{path:"/our-game-ranking/gameSummary",component:B})]})]})})},D=function(e){var a=e.item,s=e.placeBgc,n=e.numberPlaceBgc,r=Object(c.useState)(!1),l=Object(o.a)(r,2),m=l[0],d=l[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),b=u[0],_=u[1];return Object(t.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(t.jsx)("span",{className:n(a.place),children:a.place}),Object(t.jsxs)("div",{className:s(a.place),children:[Object(t.jsx)("div",{className:"Profile__logoWrapper",children:Object(t.jsx)("img",{src:a.imageUrl,className:"Profile__logoImage"})}),Object(t.jsx)("span",{className:"Profile__gameName",children:a.name.length>12?"".concat(a.name.slice(0,12),"..."):a.name}),Object(t.jsx)("span",{className:"Profile__gameDate",children:a.date.slice(0,17)}),Object(t.jsxs)("div",{className:b?"Profile__detailsWrapper Profile__detailsWrapper--active":"Profile__detailsWrapper",onClick:function(){d((function(e){return!e})),_(!0),setTimeout((function(){return _(!1)}),300)},children:[Object(t.jsx)("div",{className:"Profile__details"}),Object(t.jsx)("div",{className:m?"Profile__moreDetailsBox Profile__moreDetailsBox--visible":"Profile__moreDetailsBox",children:Object(t.jsx)(i.b,{to:"/our-game-ranking/gameHistory/".concat(a.name," ").concat(a.date.slice(0,17)," "),className:"Profile__moreDetails",children:"more details"})})]})]})]},a.date)},F=function(e,a){return 0===a?0:e/a*100},T=function(e){var a,s,n=e.match,r=Object(c.useContext)(u).users,l=Object(c.useState)(""),i=Object(o.a)(l,2),m=i[0],d=i[1],b=Object(c.useState)([]),_=Object(o.a)(b,2),p=_[0],O=_[1],g=Object(c.useRef)(null),h=function(e){return 1===e?"Profile__gameWrapper--firstPlace Profile__gameWrapper":2===e?"Profile__gameWrapper--secondPlace Profile__gameWrapper":3===e?"Profile__gameWrapper--thirdPlace Profile__gameWrapper":e>3?"Profile__gameWrapper":void 0},x=function(e){return 1===e?"Profile__gamePlace--firstPlace Profile__gamePlace":2===e?"Profile__gamePlace--secondPlace Profile__gamePlace":3===e?"Profile__gamePlace--thirdPlace Profile__gamePlace":e>3?"Profile__gamePlace":void 0},f=p.map((function(e){return Object(t.jsx)(D,{item:e,placeBgc:h,numberPlaceBgc:x})})),N=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map((function(e){return Object(t.jsx)("div",{className:"Profile__circle Profile__circle--".concat(e)},e)}));return Object(c.useEffect)((function(){var e=j.database().ref("/users/".concat(n.params.name,"/lastPlayedGames")),a=r.find((function(e){return e.username===n.params.name}));e.on("value",(function(e){var a=e.val(),s=[];for(var t in a)s.push(a[t]);s.sort((function(e,a){var s=new Date(e.date);return new Date(a.date)-s})),O(s)})),d(a)}),[]),Object(c.useEffect)((function(){P.a.timeline().fromTo(g,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),Object(t.jsxs)("div",{className:"Profile",ref:function(e){return g=e},children:[Object(t.jsx)(C,{}),Object(t.jsx)("h2",{className:"Profile__header",children:"Profile"}),Object(t.jsxs)("div",{className:"Profile__photoAndCirclesWrapper",children:[Object(t.jsx)("div",{className:"Profile__photoWrapper",children:Object(t.jsx)("img",{src:m&&m.imageUrl,alt:"profileImage",className:"Profile__image"})}),N]}),Object(t.jsx)("span",{className:"Profile__name",children:n.params.name}),Object(t.jsxs)("div",{className:"Profile__stats",children:[Object(t.jsxs)("div",{className:"Profile__pointsBox",children:[Object(t.jsx)("span",{className:"Profile__pointsLabel",children:"points "}),Object(t.jsx)("span",{className:"Profile__points",children:m&&m.points})]}),Object(t.jsxs)("div",{className:"Profile__pointsPerGamesBox",children:[Object(t.jsx)("span",{className:"Profile__pointsPerGamesLabel",children:"average"}),Object(t.jsx)("span",{className:"Profile__pointsPerGames",children:m&&(a=m.points,s=m.gamePlayed,0===s?0:a/s)})]}),Object(t.jsxs)("div",{className:"Profile__gamesPlayedBox",children:[Object(t.jsx)("span",{className:"Profile__gamesPlayedLabel",children:"games"}),Object(t.jsx)("span",{className:"Profile__gamesPlayed",children:m&&m.gamePlayed})]}),Object(t.jsxs)("div",{className:"Profile__gamesPlayedBox",children:[Object(t.jsx)("span",{className:"Profile__gamesPlayedLabel",children:"wins"}),Object(t.jsxs)("span",{className:"Profile__gamesPlayed",children:[m&&F(m.winnings,m.gamePlayed),"%"]})]})]}),Object(t.jsx)("h2",{className:"Profile__headerGames",children:"Last played"}),f]})},E=function(e){var a=e.match,s=Object(c.useState)({}),n=Object(o.a)(s,2),r=n[0],l=n[1],i=Object(c.useState)([]),d=Object(o.a)(i,2),u=d[0],b=d[1],_=Object(m.f)(),p=Object(c.useRef)(null),O=function(e){return 1===e?"GameHistory__playerWrapper--firstPlace GameHistory__playerWrapper":2===e?"GameHistory__playerWrapper--secondPlace GameHistory__playerWrapper":3===e?"GameHistory__playerWrapper--thirdPlace GameHistory__playerWrapper":e>3?"GameHistory__playerWrapper":void 0},g=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map((function(e){return Object(t.jsx)("div",{className:"Profile__circle Profile__circle--".concat(e)},e)})),h=u.map((function(e){return Object(t.jsxs)("div",{className:"GameHistory__playerAllWrapper",children:[Object(t.jsx)("span",{className:(a=e.place,1===a?"GameHistory__playerPlace--firstPlace GameHistory__playerPlace":2===a?"GameHistory__playerPlace--secondPlace GameHistory__playerPlace":3===a?"GameHistory__playerPlace--thirdPlace GameHistory__playerPlace":a>3?"GameHistory__playerPlace":void 0),children:e.place}),Object(t.jsxs)("div",{className:O(e.place),children:[Object(t.jsx)("div",{className:"GameHistory__imageWrapper",children:Object(t.jsx)("img",{src:e.imageUrl,className:"GameHistory__playerImage"})}),Object(t.jsx)("span",{className:"GameHistory__name",children:e.name})]})]},e.name);var a}));return Object(c.useEffect)((function(){j.database().ref("/gameHistory/".concat(a.params.game)).on("value",(function(e){var a=e.val();l(a);var s=[];for(var t in a.players)s.push(Object(W.a)({},a.players[t]));s.sort((function(e,a){return e.place-a.place})),b(s)}))}),[]),Object(c.useEffect)((function(){P.a.timeline().fromTo(p,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),r&&u?Object(t.jsxs)("div",{className:"GameHistory",ref:function(e){return p=e},children:[Object(t.jsx)("h2",{className:"Profile__header",children:"Game History"}),Object(t.jsxs)("div",{className:"Profile__photoAndCirclesWrapper",children:[Object(t.jsx)("div",{className:"Profile__photoWrapper",children:Object(t.jsx)("img",{src:r.gameUrl,alt:"gameImage",className:"Profile__image"})}),g]}),Object(t.jsx)("span",{className:"GameHistory__gameName",children:r.name}),Object(t.jsxs)("div",{className:"GameHistory__dateBox",children:[Object(t.jsx)("span",{className:"GameHistory__dateDay",children:r.date&&r.date.slice(0,11)}),Object(t.jsx)("span",{className:"GameHistory__dateHour",children:r.date&&r.date.slice(11,17)})]}),u&&h,Object(t.jsx)("button",{className:"GameHistory__goBackButton",onClick:function(){return _.goBack()},children:"Go back"})]}):Object(t.jsx)(x,{})};var R=function(){return Object(t.jsx)(i.a,{children:Object(t.jsx)(b,{children:Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)(m.c,{children:[Object(t.jsx)(m.a,{exact:!0,path:"/our-game-ranking",component:N}),Object(t.jsx)(m.a,{path:"/our-game-ranking/user",component:L}),Object(t.jsx)(m.a,{path:"/our-game-ranking/users/:name",component:T}),Object(t.jsx)(m.a,{path:"/our-game-ranking/gameHistory/:game",component:E})]})})})})},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/our-game-ranking",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/our-game-ranking","/service-worker.js");M?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var t=s.headers.get("content-type");404===s.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):z(a,e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.ea82f598.chunk.js.map