(this.webpackJsonpour_game_ranking=this.webpackJsonpour_game_ranking||[]).push([[0],{43:function(e,a,s){},53:function(e,a,s){"use strict";s.r(a);var t=s(0),c=s(2),r=s.n(c),n=s(33),l=s.n(n),i=(s(43),s(6)),m=s(7),o=s(4),d=s(26);s(16);d.a.initializeApp({apiKey:"AIzaSyCHFG4J2mf_3Axbo8ND7diX2nOZm293gsk",authDomain:"our-game-ranking.firebaseapp.com",databaseURL:"https://our-game-ranking-default-rtdb.europe-west1.firebasedatabase.app",projectId:"our-game-ranking",storageBucket:"our-game-ranking.appspot.com",messagingSenderId:"118353229617",appId:"1:118353229617:web:8fc80354023366c55c6210"});var j=d.a,u=(s(32),Object(c.createContext)()),b=function(e){var a=e.children,s=Object(c.useState)([]),r=Object(o.a)(s,2),n=r[0],l=r[1],i=Object(c.useState)([]),m=Object(o.a)(i,2),d=m[0],b=m[1],_=Object(c.useState)([]),p=Object(o.a)(_,2),O=p[0],g=p[1],h=Object(c.useState)([]),f=Object(o.a)(h,2),x=f[0],P=f[1],N=Object(c.useState)([]),v=Object(o.a)(N,2),y=v[0],G=v[1],S=Object(c.useState)([]),k=Object(o.a)(S,2),A=k[0],H=k[1],U=Object(c.useState)([]),C=Object(o.a)(U,2),W=C[0],I=C[1];return Object(c.useEffect)((function(){var e=j.database().ref("/users"),a=j.database().ref("/games");e.on("value",(function(e){var a=e.val(),s=[];for(var t in a)s.push(a[t]);var c=s.sort((function(e,a){return e.points>a.points?-1:1}));l(c);var r=s.slice(0,3);b(r);var n=s.slice(3,s.length);g(n);var i=s.sort((function(e,a){return e.points/e.gamePlayed>a.points/a.gamePlayed?-1:1}));G(i);var m=i.slice(0,3);H(m);var o=i.slice(3,i.length);I(o)})),a.on("value",(function(e){var a=e.val(),s=[];for(var t in a)s.push(a[t]);P(s)}))}),[]),Object(t.jsx)(u.Provider,{value:{users:n,firstThree:d,restOfUsers:O,games:x,usersByGames:y,firstThreeByGames:A,restOfUsersByGames:W},children:a})},_=s(34),p=s(36),O=s.p+"static/media/coronaIcon.ba990780.svg",g=s.p+"static/media/silverMedalIcon.ebe2bf14.svg",h=s.p+"static/media/bronzeMedalIcon.b566105d.svg",f=function(e){return Object(t.jsx)("div",{className:"loaderWrapper",children:Object(t.jsxs)("div",{className:"styledLoader",children:[Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{})})]})})},x=function(e){var a=e.data,s=e.restOfData,c=e.isStandard,r=4,n=s.map((function(e){return r++,Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(e.username),className:"HomePage__anotherPlaces",children:[Object(t.jsx)("span",{className:"HomePage__placeNumberSpan",children:r}),Object(t.jsxs)("div",{className:"HomePage__anotherPlacesBox",children:[Object(t.jsx)("div",{className:"HomePage__anotherPlacesImageWrapper",children:Object(t.jsx)("img",{src:e.imageUrl,alt:"Profilowe",className:"HomePage__anotherPlacesImage"})}),Object(t.jsx)("span",{className:"HomePage__anotherPlacesNickname",children:e.username}),Object(t.jsx)("span",{className:"HomePage__anotherPlacesPoints",children:c?e.points:(a=e.points,s=e.gamePlayed,0===s?0:a/s.toFixed(2))})]})]},e.username);var a,s}));return a.length?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"HomePage__leadersWrapper",children:[Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(a.length&&a[2].username),className:"HomePage__thirdPlace",children:[Object(t.jsx)("span",{className:"HomePage__placeNumber",children:"3"}),Object(t.jsx)("div",{className:"HomePage__symbol",children:Object(t.jsx)("img",{src:h,className:"HomePage__symbolImage"})}),Object(t.jsx)("div",{className:"HomePage__image",children:Object(t.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[2].imageUrl})}),Object(t.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[2].username}),Object(t.jsx)("span",{className:"HomePage__points",children:a.length&&(c?a[2].points:(a[2].points/a[2].gamePlayed).toFixed(2))})]}),Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(a.length&&a[0].username),className:"HomePage__firstPlace",children:[Object(t.jsx)("span",{className:"HomePage__placeNumber",children:"1"}),Object(t.jsx)("div",{className:"HomePage__symbol",children:Object(t.jsx)("img",{src:O,className:"HomePage__corona",alt:"corona"})}),Object(t.jsx)("div",{className:"HomePage__image HomePage__image--first",children:Object(t.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[0].imageUrl})}),Object(t.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[0].username}),Object(t.jsx)("span",{className:"HomePage__points",children:a.length&&(c?a[0].points:(a[0].points/a[0].gamePlayed).toFixed(2))})]}),Object(t.jsxs)(i.b,{to:"/our-game-ranking/users/".concat(a.length&&a[1].username),className:"HomePage__secondPlace",children:[Object(t.jsx)("span",{className:"HomePage__placeNumber",children:"2"}),Object(t.jsx)("div",{className:"HomePage__symbol",children:Object(t.jsx)("img",{src:g,className:"HomePage__symbolImage"})}),Object(t.jsx)("div",{className:"HomePage__image",children:Object(t.jsx)("img",{className:"HomePage__imageSrc",src:a.length&&a[1].imageUrl})}),Object(t.jsx)("span",{className:"HomePage__nickname",children:a.length&&a[1].username}),Object(t.jsx)("span",{className:"HomePage__points",children:a.length&&(c?a[1].points:(a[1].points/a[1].gamePlayed).toFixed(2))})]})]}),s&&n]}):Object(t.jsx)(f,{})},P=s(9),N=function(){var e=Object(c.useContext)(u),a=e.restOfUsers,s=e.firstThree,r=e.firstThreeByGames,n=e.restOfUsersByGames,l=Object(c.useRef)(null),m=Object(c.useState)(!0),d=Object(o.a)(m,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){P.a.timeline().fromTo(l,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"HomePage",ref:function(e){return l=e},children:[Object(t.jsx)("h2",{className:"HomePage__header",children:"Leaderboard"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/user",className:"HomePage__userCogWrapper",children:Object(t.jsx)(_.a,{className:"HomePage__userCog",icon:p.a})}),Object(t.jsxs)("nav",{className:"HomePage__nav",children:[Object(t.jsx)("div",{onClick:function(){return b(!1)},className:j?"HomePage__link":"HomePage__link HomePage__link--active",children:"per games"}),Object(t.jsx)("div",{onClick:function(){return b(!0)},className:j?"HomePage__link HomePage__link--active":"HomePage__link",children:"standard"})]}),j?Object(t.jsx)(x,{isStandard:j,data:s,restOfData:a}):Object(t.jsx)(x,{isStandard:j,data:r,restOfData:n})]})})},v=s.p+"static/media/userCogImage.876ff057.svg",y=s(29),G=s.n(y),S=s(37),k=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),s=a[0],r=a[1],n=Object(c.useState)(""),l=Object(o.a)(n,2),i=l[0],m=l[1],d=Object(c.useState)(""),u=Object(o.a)(d,2),b=u[0],_=u[1],p=Object(c.useState)(!1),O=Object(o.a)(p,2),g=O[0],h=O[1],f=Object(c.useRef)(null),x=function(){var e=Object(S.a)(G.a.mark((function e(){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=j.database().ref("/users/"+s),g&&(a.set({username:s,imageUrl:b,gamePlayed:0,points:0,firstPlaces:0,secondPlaces:0,thirdPlaces:0,anotherPlaces:0}),r(""),m(""),h(!1));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){P.a.timeline().fromTo(f,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),Object(t.jsxs)("div",{className:"AddUser",ref:function(e){return f=e},children:[Object(t.jsx)("h2",{className:"AddUser__header",children:"Add User"}),Object(t.jsxs)("label",{className:"AddUser__nicknameLabel",children:["Username",Object(t.jsx)("input",{value:s,onChange:function(e){return r(e.target.value)},type:"text",className:"AddUser__nicknameInput"})]}),Object(t.jsxs)("label",{className:"AddUser__userImageLabel",children:["User Image",Object(t.jsx)("input",{onChange:function(e){return m(e.target.value)},value:i,type:"text",placeholder:"example.jpg",className:"AddUser__userImageInput"})]}),Object(t.jsx)("button",{onClick:function(){j.storage().ref("/images").child(i).getDownloadURL().then((function(e){_(e),h(!0)})).catch((function(e){return console.log(e)}))},className:"AddUser__submit",children:"Get Url"}),Object(t.jsx)("button",{onClick:x,className:g?"AddUser__submit":"AddUser__submit AddUser__submit--disabled",children:"Create"})]})},A=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),s=a[0],r=a[1],n=Object(c.useState)(""),l=Object(o.a)(n,2),i=l[0],m=l[1],d=Object(c.useState)(4),u=Object(o.a)(d,2),b=u[0],_=u[1],p=Object(c.useState)(2),O=Object(o.a)(p,2),g=O[0],h=O[1],f=Object(c.useState)(1),x=Object(o.a)(f,2),N=x[0],v=x[1],y=Object(c.useState)(!1),G=Object(o.a)(y,2),S=G[0],k=G[1],A=Object(c.useState)(""),H=Object(o.a)(A,2),U=H[0],C=H[1],W=Object(c.useRef)(null);return Object(c.useEffect)((function(){P.a.timeline().fromTo(W,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),Object(t.jsxs)("div",{className:"AddGame",ref:function(e){return W=e},children:[Object(t.jsx)("h2",{className:"AddGame__header",children:"Add Game"}),Object(t.jsxs)("label",{className:"AddGame__nicknameLabel",children:["Name",Object(t.jsx)("input",{value:s,onChange:function(e){return r(e.target.value)},type:"text",className:"AddGame__nicknameInput"})]}),Object(t.jsxs)("label",{className:"AddGame__userImageLabel",children:["Logo",Object(t.jsx)("input",{onChange:function(e){return m(e.target.value)},value:i,type:"text",placeholder:"example.jpg",className:"AddGame__userImageInput"})]}),Object(t.jsx)("h2",{className:"AddGame__pointsHeader",children:"Points"}),Object(t.jsxs)("label",{className:"AddGame__pointsLabel",children:["1st place",Object(t.jsx)("input",{onChange:function(e){return _(e.target.value)},value:b,type:"number",className:"AddGame__pointsInput"})]}),Object(t.jsxs)("label",{className:"AddGame__pointsLabel",children:["2nd place",Object(t.jsx)("input",{onChange:function(e){return h(e.target.value)},value:g,type:"number",className:"AddGame__pointsInput"})]}),Object(t.jsxs)("label",{className:"AddGame__pointsLabel",children:["3rd place",Object(t.jsx)("input",{onChange:function(e){return v(e.target.value)},value:N,type:"number",className:"AddGame__pointsInput"})]}),Object(t.jsx)("button",{onClick:function(){j.storage().ref("/images").child(i).getDownloadURL().then((function(e){C(e),k(!0)})).catch((function(e){return console.log(e)}))},className:"AddGame__submit",children:"Get Url"}),Object(t.jsx)("button",{onClick:function(){var e=j.database().ref("/games/"+s);s&&i&&b&&g&&N&&(e.set({name:s,imageUrl:U,firstPlace:b,secondPlace:g,thirdPlace:N}),k(!1),r(""),m(""))},className:S?"AddGame__submit":"AddGame__submit AddGame__submit--disabled",children:"Add game"})]})},H=function(){return Object(t.jsxs)("div",{className:"Buttons",children:[Object(t.jsx)("h2",{className:"Buttons__header",children:"User options"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/addUser",className:"Buttons__addUser",children:"Add user"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/addGame",className:"Buttons__addGame",children:"Add game"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/allGames",className:"Buttons__addGame",children:"Show all games"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/allGamesHistory",className:"Buttons__addGame",children:"Games history"}),Object(t.jsx)(i.b,{to:"/our-game-ranking/gameSummary",className:"Buttons__addGame",children:"Game summary"})]})},U=function(){var e=Object(c.useContext)(u).games,a=Object(c.useRef)(null);Object(c.useEffect)((function(){P.a.timeline().fromTo(a,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]);var s=e.map((function(e){return Object(t.jsxs)("div",{className:"AllGames__gameWrapper",children:[Object(t.jsx)("div",{className:"AllGames__logoWrapper",children:Object(t.jsx)("img",{src:e.imageUrl,className:"AllGames__logoImage"})}),Object(t.jsx)("span",{className:"AllGames__gameName",children:e.name.length>16?"".concat(e.name.slice(0,16),".."):e.name}),Object(t.jsxs)("span",{className:"AllGames__gamePoints",children:["1st: ",e.firstPlace]}),Object(t.jsxs)("span",{className:"AllGames__gamePoints",children:["2nd: ",e.secondPlace]}),Object(t.jsxs)("span",{className:"AllGames__gamePoints",children:["3rd: ",e.thirdPlace]})]},e.name)}));return e?Object(t.jsxs)("div",{className:"AllGames",ref:function(e){return a=e},children:[Object(t.jsx)("h2",{className:"AllGames__header",children:"All Games"}),e.length&&s]}):Object(t.jsx)(f,{})},C=s(15),W=function(e){var a=Object(c.useState)([]),s=Object(o.a)(a,2),r=s[0],n=s[1],l=Object(c.useRef)(null),m=r.map((function(e){return Object(t.jsxs)(i.b,{to:"/our-game-ranking/gameHistory/".concat(e.name," ").concat(e.date.slice(0,17)),className:"AllGamesHistory__gameWrapper",children:[Object(t.jsx)("div",{className:"AllGamesHistory__imageWrapper",children:Object(t.jsx)("img",{src:e.gameUrl,alt:"game photo",className:"AllGamesHistory__image"})}),Object(t.jsxs)("div",{className:"AllGamesHistory__restWrapper",children:[Object(t.jsx)("span",{className:"AllGamesHistory__tittle",children:e.name}),Object(t.jsx)("div",{className:"AllGamesHistory__playersWrapper",children:e.playersList.map((function(e){return Object(t.jsx)("div",{className:"AllGamesHistory__playerImageWrapper",children:Object(t.jsx)("img",{src:e.imageUrl,alt:"player image",className:"AllGamesHistory__playerImage"})})}))})]})]})}));return Object(c.useEffect)((function(){j.database().ref("/gameHistory/").on("value",(function(e){var a=e.val(),s=[];for(var t in a){var c=[];for(var r in a[t].players)c.push(Object(C.a)({},a[t].players[r]));s.push(Object(C.a)(Object(C.a)({},a[t]),{},{playersList:c}))}n(s)}))}),[]),Object(c.useEffect)((function(){P.a.timeline().fromTo(l,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),console.log(r),Object(t.jsxs)("div",{className:"AllGamesHistory",ref:function(e){return l=e},children:[Object(t.jsx)("h2",{className:"AllGames__header",children:"Games History"}),r&&m]})},I=function(){var e=Object(m.f)();return Object(t.jsx)("div",{className:"Back",onClick:function(){return e.goBack()}})},w=s(23),B=function(e){var a=e.message,s=e.closeDialog;return Object(t.jsxs)("div",{className:"Dialog",children:[Object(t.jsx)("span",{className:"Dialog__message",children:a}),Object(t.jsx)("span",{onClick:s,className:"Dialog__confirm",children:"OK"})]})},L=function(){var e=Object(c.useContext)(u),a=e.users,s=e.games,r=Object(c.useRef)(null),n=Object(m.f)(),l=Object(c.useState)(!1),i=Object(o.a)(l,2),d=i[0],b=i[1],_=Object(c.useState)(""),p=Object(o.a)(_,2),O=p[0],g=p[1],h=Object(c.useState)([]),f=Object(o.a)(h,2),x=f[0],N=f[1],v=Object(c.useState)(""),y=Object(o.a)(v,2),G=y[0],S=y[1],k=a.map((function(e){return Object(t.jsx)("option",{value:e.username,name:e.username,children:e.username},e.username)})),A=x.map((function(e){return Object(t.jsx)("div",{className:"GameSummary__playerIcon",children:Object(t.jsx)("img",{src:e.imgUrl,className:"GameSummary__playerIconImg"})},e.name)})),H=Object(c.useState)([]),U=Object(o.a)(H,2),W=U[0],I=U[1],L=Object(c.useState)(!1),D=Object(o.a)(L,2),T=D[0],E=D[1],F=s.map((function(e){return Object(t.jsx)("option",{value:e.name,name:e.name,children:e.name},e.name)})),R=Object(c.useState)(),M=Object(o.a)(R,2),z=M[0],J=M[1],V=Object(c.useState)(!1),K=Object(o.a)(V,2),Y=K[0],X=K[1],Z=Object(c.useState)(4),$=Object(o.a)(Z,2),q=$[0],Q=$[1],ee=Object(c.useState)(),ae=Object(o.a)(ee,2),se=ae[0],te=ae[1],ce=Object(c.useState)(),re=Object(o.a)(ce,2),ne=re[0],le=re[1],ie=Object(c.useState)(),me=Object(o.a)(ie,2),oe=me[0],de=me[1],je=Object(c.useState)([]),ue=Object(o.a)(je,2),be=ue[0],_e=ue[1],pe=Object(c.useState)(""),Oe=Object(o.a)(pe,2),ge=Oe[0],he=Oe[1],fe=Object(c.useState)(!1),xe=Object(o.a)(fe,2),Pe=(xe[0],xe[1]),Ne=Object(c.useState)(!1),ve=Object(o.a)(Ne,2),ye=ve[0],Ge=ve[1],Se=Object(c.useState)([]),ke=Object(o.a)(Se,2),Ae=ke[0],He=ke[1],Ue=Object(c.useState)([]),Ce=Object(o.a)(Ue,2),We=Ce[0],Ie=Ce[1],we=function(e){Ge(!0),le(e.target.dataset.place),te(e.target.dataset.index),de(e.target.dataset.finalplace)},Be=be.map((function(e){return Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:e.place}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(0pkt)"}),Ae[e.place-1]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:Ae[e.place-1]&&Ae[e.place-1].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:Ae[e.place-1]&&Ae[e.place-1].username})]}):Object(t.jsx)("span",{"data-place":"anotherPlace","data-finalplace":e.place,"data-index":e.place-1,onClick:we,className:"GameSummary__addPlayerToRanking",children:"Add player"})]},e.place)})),Le=x.map((function(e){return Object(t.jsx)("option",{value:e.name,name:e.name,children:e.name},e.name)})),De=Object(c.useState)(!1),Te=Object(o.a)(De,2),Ee=Te[0],Fe=Te[1],Re=function(){return Fe(!1)};return console.log(Ae),Object(c.useEffect)((function(){var e=[];a.map((function(a){return e.push(null)})),Ie(e)}),[]),Object(c.useEffect)((function(){P.a.timeline().fromTo(r,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),console.log(Ae),Object(t.jsxs)("div",{className:"GameSummary",ref:function(e){return r=e},children:[Object(t.jsx)("h2",{className:"GameSummary__header",children:"Game summary"}),Object(t.jsx)("h2",{className:"GameSummary__header GameSummary__header--addPlayers",children:"Add players"}),Object(t.jsx)("div",{className:"GameSummary__usersIconWrapper",children:A}),Object(t.jsx)("div",{className:"GameSummary__addPlayer",onClick:function(){return b(!0)},children:"+"}),d?Object(t.jsxs)("div",{className:"GameSummary__usersPrompt",children:[Object(t.jsx)("div",{className:"GameSummary__usersPromptUsers",children:Object(t.jsxs)("label",{className:"GameSummary__usersPromptLabel",children:["Select Player:",Object(t.jsxs)("select",{onChange:function(e){var s=a.find((function(a){return a.username===e.target.value}));g(e.target.value),S(s.imageUrl)},className:"GameSummary__usersPromptSelect",defaultValue:"DEFAULT",children:[Object(t.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Player"}),k]})]})}),Object(t.jsx)("div",{className:"GameSummary__usersPromptAdd",onClick:function(){N((function(e){return x.find((function(e){return e.name===O}))?(X(!0),J("A user with this nickname has already been added"),Object(w.a)(e)):[].concat(Object(w.a)(e),[{name:O,imgUrl:G}])})),b(!1)},children:"Add player"})]}):null,Object(t.jsx)("h2",{className:"GameSummary__header GameSummary__header--chooseGame",children:"Choose game"}),Object(t.jsx)("div",{className:"GameSummary__currentGameWrapper",children:W.name}),Object(t.jsx)("div",{onClick:function(){return E(!0)},className:"GameSummary__addPlayer",children:"+"}),T?Object(t.jsxs)("div",{className:"GameSummary__usersPrompt",children:[Object(t.jsx)("div",{className:"GameSummary__usersPromptUsers",children:Object(t.jsxs)("label",{className:"GameSummary__usersPromptLabel",children:["Select Game:",Object(t.jsxs)("select",{onChange:function(e){return I(s.find((function(a){return a.name===e.target.value})))},className:"GameSummary__usersPromptSelect",defaultValue:"DEFAULT",children:[Object(t.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select game"}),F]})]})}),Object(t.jsx)("div",{className:"GameSummary__usersPromptAdd",onClick:function(){return E(!1)},children:"Add game"})]}):null,Object(t.jsx)("h2",{className:"GameSummary__header GameSummary__header--chooseGame",children:"Add points"}),x.length&&W.name?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("ul",{className:"GameSummary__addPointsUl",children:[Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:"1"}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(".concat(W.name?W.firstPlace:"0","pkt)")}),Ae[0]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:Ae[0].username&&Ae[0].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:Ae[0].username&&Ae[0].username})]}):Object(t.jsx)("span",{"data-place":"firstPlace","data-index":0,"data-finalplace":1,onClick:we,className:"GameSummary__addPlayerToRanking",children:"Add player"})]}),Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:"2"}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(".concat(W.name?W.secondPlace:"0","pkt)")}),Ae[1]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:Ae[1].username&&Ae[1].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:Ae[1].username&&Ae[1].username})]}):Object(t.jsx)("span",{"data-place":"secondPlace","data-index":1,"data-finalplace":2,onClick:we,className:"GameSummary__addPlayerToRanking",children:"Add player"})]}),Object(t.jsxs)("li",{className:"GameSummary__addPointsLi",children:[Object(t.jsx)("span",{className:"GameSummary__addPointsPlace",children:"3"}),Object(t.jsx)("span",{className:"GameSummary__addPointsPointsForPlace",children:"(".concat(W.name?W.thirdPlace:"0","pkt)")}),Ae[2]?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"GameSummary__addPointsImageWrapper",children:Object(t.jsx)("img",{src:Ae[2].username&&Ae[2].imageUrl,alt:"Player Photo",className:"GameSummary__addPointsImage"})}),Object(t.jsx)("span",{className:"GameSummary__addPointsNicknme",children:Ae[2].username&&Ae[2].username})]}):Object(t.jsx)("span",{"data-place":"thirdPlace","data-index":2,"data-finalplace":3,onClick:we,className:"GameSummary__addPlayerToRanking",children:"Add player"})]}),Be]}),Object(t.jsx)("div",{onClick:function(){if(!(be.length+3<x.length))return J("You have only added ".concat(x.length," players")),void X(!0);_e((function(e){return[].concat(Object(w.a)(e),[{place:q}])})),Q((function(e){return e+1}))},className:"GameSummary__addPointsAddAnother",children:"+ Next Player"})]}):null,Object(t.jsx)("div",{onClick:function(){return Fe(!0)},className:"GameSummary__updateButton",children:"Update ranking!"}),Ee?Object(t.jsxs)("div",{className:"GameSummary__updateConfirmBox",children:[Object(t.jsx)("span",{className:"GameSummary__updateConfirmMessage",children:"Are you sure you want to update the ranking?"}),Object(t.jsxs)("div",{className:"GameSummary__confirmBoxOptionsWrapper",children:[Object(t.jsx)("span",{onClick:Re,className:"GameSummary__confirmBoxReject",children:"No"}),Object(t.jsx)("span",{onClick:function(){var e=new Date,a=e.toString().slice(4,24),s=e.toString().slice(4,21);j.database().ref("/gameHistory/".concat(W.name," ").concat(s)).set({date:a,name:W.name,gameUrl:W.imageUrl}),Ae.map((function(e){if(e){var t=j.database().ref("/users/"+e.username),c=j.database().ref("/users/".concat(e.username,"/lastPlayedGames/").concat(e.currentGame," ").concat(a));t.update({points:e.newPoints,gamePlayed:e.gamePlayed+1,firstPlaces:1===e.finalPlace?e.firstPlaces+1:e.firstPlaces,secondPlaces:2===e.finalPlace?e.secondPlaces+1:e.secondPlaces,thirdPlaces:3===e.finalPlace?e.thirdPlaces+1:e.thirdPlaces,anotherPlaces:e.finalPlace>3?e.anotherPlaces+1:e.anotherPlaces}),c.set({name:e.currentGame,place:e.finalPlace,imageUrl:e.currentGameUrl,date:a}),j.database().ref("/gameHistory/".concat(W.name," ").concat(s,"/players")).push({name:e.username,place:e.finalPlace,imageUrl:e.imageUrl}),Re(),n.push("/our-game-ranking")}}))},className:"GameSummary__confirmBoxAgreement",children:"Yes"})]})]}):null,Y?Object(t.jsx)(B,{closeDialog:function(){return X(!1)},message:z}):null,ye?Object(t.jsxs)("div",{className:"GameSummary__usersPrompt",children:[Object(t.jsx)("div",{className:"GameSummary__usersPromptUsers",children:Object(t.jsxs)("label",{className:"GameSummary__usersPromptLabel",children:["Select Player:",Object(t.jsxs)("select",{onChange:function(e){var s=a.find((function(a){return a.username===e.target.value})),t=Object.entries(W).find((function(e){var a=Object(o.a)(e,2),s=a[0];a[1];return s===ne}));he(Object(C.a)(Object(C.a)({},s),{},{finalPlace:parseInt(oe),newPoints:s.points+parseInt(t[1]),place:ne,currentGame:W.name,currentGameUrl:W.imageUrl}))},className:"GameSummary__usersPromptSelect",defaultValue:"DEFAULT",children:[Object(t.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select player"}),x&&Le]})]})}),Object(t.jsx)("div",{className:"GameSummary__usersPromptAdd",onClick:function(){Ge(!1),Pe(!0),We.splice(se,1,ge),He(We)},children:"Add player"})]}):null]})},D=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){P.a.timeline().fromTo(e,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),Object(t.jsx)(i.a,{children:Object(t.jsxs)("div",{className:"UserCog",ref:function(a){return e=a},children:[Object(t.jsx)(I,{}),Object(t.jsx)("img",{src:v,alt:"image",className:"UserCog__image"}),Object(t.jsxs)(m.c,{children:[Object(t.jsx)(m.a,{path:"/our-game-ranking/user",component:H}),Object(t.jsx)(m.a,{path:"/our-game-ranking/addUser",component:k}),Object(t.jsx)(m.a,{path:"/our-game-ranking/addGame",component:A}),Object(t.jsx)(m.a,{path:"/our-game-ranking/allGames",component:U}),Object(t.jsx)(m.a,{path:"/our-game-ranking/gameSummary",component:L}),Object(t.jsx)(m.a,{path:"/our-game-ranking/allGamesHistory",component:W})]})]})})},T=function(e){var a=e.item,s=e.placeBgc,r=e.numberPlaceBgc,n=Object(c.useState)(!1),l=Object(o.a)(n,2),m=l[0],d=l[1],j=Object(c.useState)(!1),u=Object(o.a)(j,2),b=u[0],_=u[1];return Object(t.jsxs)("div",{className:"Profile__gameAllWrapper",children:[Object(t.jsx)("span",{className:r(a.place),children:a.place}),Object(t.jsxs)("div",{className:s(a.place),children:[Object(t.jsx)("div",{className:"Profile__logoWrapper",children:Object(t.jsx)("img",{src:a.imageUrl,className:"Profile__logoImage"})}),Object(t.jsx)("span",{className:"Profile__gameName",children:a.name.length>12?"".concat(a.name.slice(0,12),"..."):a.name}),Object(t.jsx)("span",{className:"Profile__gameDate",children:a.date.slice(0,17)}),Object(t.jsxs)("div",{className:b?"Profile__detailsWrapper Profile__detailsWrapper--active":"Profile__detailsWrapper",onClick:function(){d((function(e){return!e})),_(!0),setTimeout((function(){return _(!1)}),300)},children:[Object(t.jsx)("div",{className:"Profile__details"}),Object(t.jsx)("div",{className:m?"Profile__moreDetailsBox Profile__moreDetailsBox--visible":"Profile__moreDetailsBox",children:Object(t.jsx)(i.b,{to:"/our-game-ranking/gameHistory/".concat(a.name," ").concat(a.date.slice(0,17)),className:"Profile__moreDetails",children:"more details"})})]})]})]},a.date)},E=function(e,a){return 0===a?0:e/a*100},F=function(e){var a,s,r=e.match,n=Object(c.useContext)(u).users,l=Object(c.useState)(""),i=Object(o.a)(l,2),m=i[0],d=i[1],b=Object(c.useState)([]),_=Object(o.a)(b,2),p=_[0],O=_[1],g=Object(c.useRef)(null),h=function(e){return 1===e?"Profile__gameWrapper--firstPlace Profile__gameWrapper":2===e?"Profile__gameWrapper--secondPlace Profile__gameWrapper":3===e?"Profile__gameWrapper--thirdPlace Profile__gameWrapper":e>3?"Profile__gameWrapper":void 0},f=function(e){return 1===e?"Profile__gamePlace--firstPlace Profile__gamePlace":2===e?"Profile__gamePlace--secondPlace Profile__gamePlace":3===e?"Profile__gamePlace--thirdPlace Profile__gamePlace":e>3?"Profile__gamePlace":void 0},x=p.map((function(e){return Object(t.jsx)(T,{item:e,placeBgc:h,numberPlaceBgc:f})})),N=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map((function(e){return Object(t.jsx)("div",{className:"Profile__circle Profile__circle--".concat(e)},e)}));return Object(c.useEffect)((function(){var e=j.database().ref("/users/".concat(r.params.name,"/lastPlayedGames")),a=n.find((function(e){return e.username===r.params.name}));e.on("value",(function(e){var a=e.val(),s=[];for(var t in a)s.push(a[t]);s.sort((function(e,a){var s=new Date(e.date);return new Date(a.date)-s})),O(s)})),d(a)}),[]),Object(c.useEffect)((function(){P.a.timeline().fromTo(g,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),Object(t.jsxs)("div",{className:"Profile",ref:function(e){return g=e},children:[Object(t.jsx)(I,{}),Object(t.jsx)("h2",{className:"Profile__header",children:"Profile"}),Object(t.jsxs)("div",{className:"Profile__photoAndCirclesWrapper",children:[Object(t.jsx)("div",{className:"Profile__photoWrapper",children:Object(t.jsx)("img",{src:m&&m.imageUrl,alt:"profileImage",className:"Profile__image"})}),N]}),Object(t.jsx)("span",{className:"Profile__name",children:r.params.name}),Object(t.jsxs)("div",{className:"Profile__stats",children:[Object(t.jsxs)("div",{className:"Profile__pointsBox",children:[Object(t.jsx)("span",{className:"Profile__pointsLabel",children:"points"}),Object(t.jsx)("span",{className:"Profile__points",children:m&&m.points})]}),Object(t.jsxs)("div",{className:"Profile__pointsPerGamesBox",children:[Object(t.jsx)("span",{className:"Profile__pointsPerGamesLabel",children:"average"}),Object(t.jsx)("span",{className:"Profile__pointsPerGames",children:m&&(a=m.points,s=m.gamePlayed,0===s?0:(a/s).toFixed(2))})]}),Object(t.jsxs)("div",{className:"Profile__gamesPlayedBox",children:[Object(t.jsx)("span",{className:"Profile__gamesPlayedLabel",children:"games"}),Object(t.jsx)("span",{className:"Profile__gamesPlayed",children:m&&m.gamePlayed})]}),Object(t.jsxs)("div",{className:"Profile__gamesPlayedBox",children:[Object(t.jsx)("span",{className:"Profile__gamesPlayedLabel",children:"wins"}),Object(t.jsxs)("span",{className:"Profile__gamesPlayed",children:[m&&E(m.firstPlaces,m.gamePlayed),"%"]})]})]}),Object(t.jsx)("h2",{className:"Profile__headerGames",children:"Last played"}),x]})},R=function(e){var a=e.match,s=Object(c.useState)({}),r=Object(o.a)(s,2),n=r[0],l=r[1],i=Object(c.useState)([]),d=Object(o.a)(i,2),u=d[0],b=d[1],_=Object(m.f)(),p=Object(c.useRef)(null),O=function(e){return 1===e?"GameHistory__playerWrapper--firstPlace GameHistory__playerWrapper":2===e?"GameHistory__playerWrapper--secondPlace GameHistory__playerWrapper":3===e?"GameHistory__playerWrapper--thirdPlace GameHistory__playerWrapper":e>3?"GameHistory__playerWrapper":void 0},g=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map((function(e){return Object(t.jsx)("div",{className:"Profile__circle Profile__circle--".concat(e)},e)})),h=u.map((function(e){return Object(t.jsxs)("div",{className:"GameHistory__playerAllWrapper",children:[Object(t.jsx)("span",{className:(a=e.place,1===a?"GameHistory__playerPlace--firstPlace GameHistory__playerPlace":2===a?"GameHistory__playerPlace--secondPlace GameHistory__playerPlace":3===a?"GameHistory__playerPlace--thirdPlace GameHistory__playerPlace":a>3?"GameHistory__playerPlace":void 0),children:e.place}),Object(t.jsxs)("div",{className:O(e.place),children:[Object(t.jsx)("div",{className:"GameHistory__imageWrapper",children:Object(t.jsx)("img",{src:e.imageUrl,className:"GameHistory__playerImage"})}),Object(t.jsx)("span",{className:"GameHistory__name",children:e.name})]})]},e.name);var a}));return Object(c.useEffect)((function(){j.database().ref("/gameHistory/".concat(a.params.game)).on("value",(function(e){var a=e.val();l(a);var s=[];for(var t in a.players)s.push(Object(C.a)({},a.players[t]));s.sort((function(e,a){return e.place-a.place})),b(s)}))}),[]),Object(c.useEffect)((function(){P.a.timeline().fromTo(p,{autoAlpha:0},{duration:.3,autoAlpha:1})}),[]),n&&u?Object(t.jsxs)("div",{className:"GameHistory",ref:function(e){return p=e},children:[Object(t.jsx)(I,{}),Object(t.jsx)("h2",{className:"Profile__header",children:"Game History"}),Object(t.jsxs)("div",{className:"Profile__photoAndCirclesWrapper",children:[Object(t.jsx)("div",{className:"Profile__photoWrapper",children:Object(t.jsx)("img",{src:n.gameUrl,alt:"gameImage",className:"Profile__image"})}),g]}),Object(t.jsx)("span",{className:"GameHistory__gameName",children:n.name}),Object(t.jsxs)("div",{className:"GameHistory__dateBox",children:[Object(t.jsx)("span",{className:"GameHistory__dateDay",children:n.date&&n.date.slice(0,11)}),Object(t.jsx)("span",{className:"GameHistory__dateHour",children:n.date&&n.date.slice(11,17)})]}),u&&h,Object(t.jsx)("button",{className:"GameHistory__goBackButton",onClick:function(){return _.goBack()},children:"Go back"})]}):Object(t.jsx)(f,{})};var M=function(){return Object(t.jsx)(i.a,{children:Object(t.jsx)(b,{children:Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)(m.c,{children:[Object(t.jsx)(m.a,{exact:!0,path:"/our-game-ranking",component:N}),Object(t.jsx)(m.a,{path:"/our-game-ranking/user",component:D}),Object(t.jsx)(m.a,{path:"/our-game-ranking/users/:name",component:F}),Object(t.jsx)(m.a,{path:"/our-game-ranking/gameHistory/:game",component:R})]})})})})},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/our-game-ranking",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/our-game-ranking","/service-worker.js");z?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var t=s.headers.get("content-type");404===s.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(a,e)}))}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.1a7f4055.chunk.js.map