(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,r){e.exports=r(33)},27:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(7),o=r.n(i),s=(r(27),r(8)),c=r(9),u=r(20),l=r(16),d=r(5),p=r(21),h=r(10),f={knight:[0,0],board:[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],iterations:0},v=r(1),m=r.n(v),b=r(6),k=new(function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"findMoves",value:function(e){return[[e[0]-1,e[1]-2],[e[0]-2,e[1]-1],[e[0]+1,e[1]-2],[e[0]+2,e[1]-1],[e[0]-2,e[1]+1],[e[0]-1,e[1]+2],[e[0]+1,e[1]+2],[e[0]+2,e[1]+1]].filter(function(e){return e[0]>=0&&e[1]>=0&&e[0]<8&&e[1]<8})}},{key:"validMove",value:function(e,t){return 1!==e[t[0]][t[1]]}},{key:"boardVisited",value:function(e){return 63===e.length}},{key:"boardVisitedWarnsdorf",value:function(e){return 65===e.length}},{key:"shuffle",value:function(e){for(var t,r,a=e.length;0!==a;)r=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[r],e[r]=t;return e}},{key:"numOfEmpty",value:function(e,t){var r=0,a=this.findMoves(t),n=!0,i=!1,o=void 0;try{for(var s,c=a[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var u=s.value;this.validMove(e,u)&&r++}}catch(l){i=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return r}},{key:"mapNumToCoords",value:function(e){return[e%8,Math.floor(e/8)]}}]),e}()),g=function(){var e=Object(b.a)(m.a.mark(function e(t,r,a,n,i,o,s){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(Object(b.a)(m.a.mark(function e(){var s,c,u,l,d,p,h;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o(),(s=t)[0][0]=1,!k.boardVisited(r)){e.next=5;break}return e.abrupt("return",!0);case 5:c=r[r.length-1],u=k.findMoves(c),u=k.shuffle(u),l=0;case 9:if(!(l<u.length)){e.next=27;break}if(d=u[l],!k.validMove(s,d)){e.next=24;break}if(r.push(d),p=d[0],h=d[1],s[p][h]=1,n(d),a(s),!g(s,r,a,n,i,o)){e.next=20;break}return e.abrupt("return",!0);case 20:r.pop(),s[d[0]][d[1]]=0,n(r[r.length-1]),a(s);case 24:l++,e.next=9;break;case 27:s[c[0]][c[1]]=0,r.pop(),n(r[r.length-2]),a(s),g([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],[[0,0]],a,n,i,o);case 32:case"end":return e.stop()}},e)})),i);case 2:case"end":return e.stop()}},e)}));return function(t,r,a,n,i,o,s){return e.apply(this,arguments)}}(),E=g,w=function(){var e=Object(b.a)(m.a.mark(function e(t,r,a,n,i,o){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(Object(b.a)(m.a.mark(function e(){var s,c,u,l,d,p,h,f,v,b,g,E,y,O;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t,!k.boardVisitedWarnsdorf(r)){e.next=3;break}return e.abrupt("return",!0);case 3:for(o(),c=r[r.length-1],u=k.findMoves(c),d=1/0,p=!0,h=!1,f=void 0,e.prev=10,v=u[Symbol.iterator]();!(p=(b=v.next()).done);p=!0)g=b.value,(E=k.numOfEmpty(s,g))<d&&k.validMove(s,g)&&(d=E,l=g);e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),h=!0,f=e.t0;case 18:e.prev=18,e.prev=19,p||null==v.return||v.return();case 21:if(e.prev=21,!h){e.next=24;break}throw f;case 24:return e.finish(21);case 25:return e.finish(18);case 26:if(void 0===l[0]||void 0===l[1]){e.next=35;break}r.push(l),y=l[0],O=l[1],s[y][O]=1,n(l),a(s),e.next=37;break;case 35:return alert("failed to converge on correct solution!"),e.abrupt("return",!1);case 37:if(!w(s,r,a,n,i,o)){e.next=39;break}return e.abrupt("return",!0);case 39:return e.abrupt("return",!1);case 40:case"end":return e.stop()}},e,null,[[10,14,18,26],[19,,21,25]])})),i);case 2:case"end":return e.stop()}},e)}));return function(t,r,a,n,i,o){return e.apply(this,arguments)}}(),y=w,O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={iter:0,speed:100,start:[[0,0]]},e.backtrack=E.bind(Object(d.a)(e)),e.warnsdorff=y.bind(Object(d.a)(e)),e.iterate=e.iterate.bind(Object(d.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({speed:e.target.value})}},{key:"iterate",value:function(){this.setState({iter:this.state.iter+1})}},{key:"updateSpeed",value:function(){return this.state.speed}},{key:"renderSquare",value:function(e){var t,r,a=e%8,i=Math.floor(e/8),o=(a+i)%2===1;return this.props.knight&&(t=this.props.knight[0]===a&&this.props.knight[1]===i),this.props.board&&(r=1===this.props.board[i][a]),t?o?n.a.createElement("div",{key:e,className:"black square knight"}):n.a.createElement("div",{key:e,className:"white square knight"}):o?r?n.a.createElement("div",{key:e,className:"black square visited"}):n.a.createElement("div",{key:e,className:"black square"}):r?n.a.createElement("div",{key:e,className:"white square visited"}):n.a.createElement("div",{key:e,className:"white square"})}},{key:"render",value:function(){for(var e=this,t=[],r=0;r<64;r++)t.push(this.renderSquare(r));return n.a.createElement("div",{id:"main"},n.a.createElement("div",{id:"img"},n.a.createElement("img",{className:"img",alt:"knight",src:"https://i.imgur.com/rDN4qFr.jpg"})),n.a.createElement("div",{className:"middle"},n.a.createElement("div",{id:"title"},n.a.createElement("h1",null,"Knight's Tour"),n.a.createElement("p",null,"By ",n.a.createElement("a",{href:"http://matthewhowe.net"},"Matthew Howe"))),n.a.createElement("div",{id:"board"},t)),n.a.createElement("div",{id:"buttons"},n.a.createElement("button",{onClick:function(){return e.backtrack(e.props.board,e.state.start,e.props.updateBoard,e.props.moveKnight,e.state.speed,e.iterate,e.updateSpeed)},id:"b4"},"Brute Force Iterations"),n.a.createElement("button",{onClick:function(){return e.warnsdorff(e.props.board,e.state.start,e.props.updateBoard,e.props.moveKnight,e.state.speed,e.iterate)},id:"b3"},"Warnsdorf's Rule"),n.a.createElement("div",null),n.a.createElement("div",null,n.a.createElement("p",{className:"speed-text"},"Speed: ",this.state.speed," ms"),n.a.createElement("input",{name:"speed",onChange:function(t){e.handleChange(t)},type:"range",min:"10",max:"500",value:this.state.speed,className:"slider"})),n.a.createElement("p",{className:"iterations"},"Iterations: ",this.state.iter)))}}]),t}(a.Component),j=Object(h.b)(function(e){return{board:e.board.board,knight:e.board.knight,iterations:e.board.iterations}},function(e){return{moveKnight:function(t){return e(function(e){return{type:"MOVE_KNIGHT",knight:e}}(t))},updateBoard:function(t){return e({type:"UPDATE_BOARD",board:t})}}})(O);var x=function(){return n.a.createElement("div",{className:"app"},n.a.createElement("div",null,n.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=r(3),M=r(18),S=r(19),T={script:null,speed:125,temp:null},C=Object(N.combineReducers)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_KNIGHT":return Object.assign({},e,{knight:[t.knight[1],t.knight[0]]});case"UPDATE_BOARD":return Object.assign({},e,{board:t.board});case"FAILURE":alert("Failed to converge on a correct solution. Try again.");break;case"RUN_SCRIPT":return f;default:return console.log("Switch function error in board store"),f}},algorithm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RUN_SCRIPT":return Object.assign({},e,{script:t.script});case"CHANGE_SPEED":case"MODULATE_SPEED":return Object.assign({},e,{speed:t.newSpeed});case"UPDATE_TEMP":return Object.assign({},e,{temp:t.newTemp});default:return T}}}),D=Object(S.composeWithDevTools)(Object(N.applyMiddleware)(Object(M.createLogger)({collapsed:!0}))),q=Object(N.createStore)(C,D);o.a.render(n.a.createElement(h.a,{store:q},n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.4b7e5470.chunk.js.map