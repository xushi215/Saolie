(function(e){function a(a){for(var n,i,s=a[0],c=a[1],u=a[2],m=0,f=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(a);while(f.length)f.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},r={"app~5a11b65b":0},o=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var l=c;o.push([0,"chunk-vendors~3b38e777","chunk-vendors~0f485567","chunk-vendors~c7bac266","chunk-vendors~5ea1a303","chunk-vendors~eb26399a","chunk-vendors~4ed259ab","chunk-vendors~ac50015d","chunk-vendors~5f8813c1","chunk-vendors~9a6beb85","chunk-vendors~301ae65c","chunk-vendors~62ab6885","chunk-vendors~d939e436","chunk-vendors~5bf85b7f","chunk-vendors~0cf8aeef","chunk-vendors~7d359b94","app~d0ae3f07","app~b07b7304"]),t()})({"0613":function(e,a,t){"use strict";t.d(a,"a",(function(){return W}));var n,r,o,i,s,c,u,l,m,f,d,g=t("5502"),v=(t("d3b7"),t("5cc6"),t("9a8c"),t("a975"),t("735e"),t("c1ac"),t("d139"),t("3a7b"),t("d5d6"),t("82f8"),t("e91f"),t("60bd"),t("5f96"),t("3280"),t("3fcc"),t("ca91"),t("25a1"),t("cd26"),t("3c5d"),t("2954"),t("649e"),t("219c"),t("170b"),t("b39a"),t("72f7"),t("5550")),h=t("fe0b"),p="flop-player-locale-storage",b={squareSize:16,marks:!1,fileDrag:!0,locale:h["b"].global.locale,gameSpeed:1,isVideoMap:!1,isMousePathMove:!0,isMousePathLeft:!0,isMousePathRight:!0,isMousePathDouble:!0,isShowOpening:!1},P=Object(v["b"])(p,b),M=function(e){e.watch((function(e){return e.squareSize}),(function(e){P.value.squareSize=e})),e.watch((function(e){return e.marks}),(function(e){P.value.marks=e})),e.watch((function(e){return e.fileDrag}),(function(e){P.value.fileDrag=e})),e.watch((function(e){return e.locale}),(function(e){P.value.locale=e,h["b"].global.locale=e}),{immediate:!0}),e.watch((function(e){return e.gameSpeed}),(function(e){P.value.gameSpeed=e})),e.watch((function(e){return e.isVideoMap}),(function(e){P.value.isVideoMap=e})),e.watch((function(e){return e.isMousePathMove}),(function(e){P.value.isMousePathMove=e})),e.watch((function(e){return e.isMousePathLeft}),(function(e){P.value.isMousePathLeft=e})),e.watch((function(e){return e.isMousePathRight}),(function(e){P.value.isMousePathRight=e})),e.watch((function(e){return e.isMousePathDouble}),(function(e){P.value.isMousePathDouble=e})),e.watch((function(e){return e.isShowOpening}),(function(e){P.value.isShowOpening=e}))},S=[M],y=t("1e42"),k={squareSize:null!==(n=P.value.squareSize)&&void 0!==n?n:b.squareSize,marks:null!==(r=P.value.marks)&&void 0!==r?r:b.marks,fileDrag:null!==(o=P.value.fileDrag)&&void 0!==o?o:b.fileDrag,locale:null!==(i=P.value.locale)&&void 0!==i?i:b.locale,gameSpeed:null!==(s=P.value.gameSpeed)&&void 0!==s?s:b.gameSpeed,isVideoMap:null!==(c=P.value.isVideoMap)&&void 0!==c?c:b.isVideoMap,isMousePathMove:null!==(u=P.value.isMousePathMove)&&void 0!==u?u:b.isMousePathMove,isMousePathLeft:null!==(l=P.value.isMousePathLeft)&&void 0!==l?l:b.isMousePathLeft,isMousePathRight:null!==(m=P.value.isMousePathRight)&&void 0!==m?m:b.isMousePathRight,isMousePathDouble:null!==(f=P.value.isMousePathDouble)&&void 0!==f?f:b.isMousePathDouble,isShowOpening:null!==(d=P.value.isShowOpening)&&void 0!==d?d:b.isShowOpening,gameType:"Video",videoParser:new y["a"],userParser:new y["a"],width:8,height:8,mines:0,level:0,bbbv:0,openings:0,islands:0,playerArray:new Uint8Array,anonymous:!1,gameEvents:[],gameCellBoard:[],gameImgBoard:[],videoAnimationId:0,faceStatus:"face-normal",gameEventIndex:0,gameStarted:!1,gameStartTime:0,gameElapsedTime:0,gameMousePoints:[],gameLeftPoints:[],gameRightPoints:[],gameDoublePoints:[],loading:!1,exit:self!==top,shareLink:"",uri:"",uriSuccess:!1},w=t("87ce"),E={isVideoPaused:function(e){return 0===e.videoAnimationId},isUserPlaying:function(e){return"Video"!==e.gameType&&0!==e.videoAnimationId},getRealTime:function(e){var a;return"Video"===e.gameType?Math.min((null===(a=e.gameEvents[e.gameEvents.length-1])||void 0===a?void 0:a.time)||0,e.gameElapsedTime)/1e3:e.gameElapsedTime/1e3},getMainWidth:function(e){var a=e.width*e.squareSize;return a>w["h"]?a:w["h"]},getSquareScale:function(e){return e.squareSize/w["k"]}},I=(t("3b18"),t("f64c")),T=(t("caad"),t("2532"),t("b0c0"),t("a630"),t("3ca3"),t("da92")),x=t("5fd3"),L=t("8475"),O={setVideoMap:function(e,a){e.isVideoMap=a},setMousePathMove:function(e,a){e.isMousePathMove=a},setMousePathLeft:function(e,a){e.isMousePathLeft=a},setMousePathRight:function(e,a){e.isMousePathRight=a},setMousePathDouble:function(e,a){e.isMousePathDouble=a},setShowOpening:function(e,a){e.isShowOpening=a},setSquareSize:function(e,a){w["l"].includes(a)&&(e.squareSize=a)},setLocale:function(e,a){h["b"].global.availableLocales.includes(a)&&(e.locale=a)},setGameStartTime:function(e,a){e.gameStartTime="Video"===e.gameType||e.gameStarted?a:0},setGameSpeed:function(e,a){-1!==w["j"].indexOf(a)&&(e.gameSpeed=a)},setGameElapsedTime:function(e,a){if(e.gameElapsedTime<=a){e.gameElapsedTime=a;while(e.gameEventIndex<e.gameEvents.length&&e.gameElapsedTime>=e.gameEvents[e.gameEventIndex].time)W.commit("performNextEvent")}else if(e.gameElapsedTime>a){e.gameElapsedTime=a,e.gameEventIndex=Math.min(e.gameEventIndex,e.gameEvents.length);while(e.gameEventIndex>0&&(e.gameElapsedTime<e.gameEvents[e.gameEventIndex-1].time||e.gameElapsedTime<=0))W.commit("performPreviousEvent")}},initGame:function(e,a){e.width=a.getWidth(),e.height=a.getHeight(),e.mines=a.getMines(),e.playerArray=a.getPlayerArray(),e.level=a.getLevel(),e.bbbv=a.getBBBV(),e.openings=a.getOpenings(),e.islands=a.getIslands(),e.gameEvents=a.getGameEvents(),e.gameCellBoard=a.getGameBoard()},pushUserEvent:function(e,a){var t=a.mouse,n=a.x,r=a.y;"Video"===e.gameType||"mv"===t&&0===e.gameEvents.length||(e.gameEvents=e.userParser.appendEvent({time:e.gameElapsedTime,mouse:t,column:Math.floor(n/16),row:Math.floor(r/16),x:n,y:r}))},receiveVideo:function(e,a){e.videoParser=a,W.commit("setLoading",!1),W.commit("initGame",e.videoParser),W.commit("replayVideo")},setLoading:function(e,a){e.loading=a,e.loading&&W.commit("setVideoPaused")},setAnonymous:function(e,a){e.anonymous=!0===a},setExit:function(e,a){a&&(e.gameType="Video",e.videoParser=e.userParser=new y["a"],W.commit("initGame",e.videoParser),W.commit("resetGame"),I["a"].destroy()),e.exit=a},setShareLink:function(e,a){e.shareLink=a},setURI:function(e,a){e.uri=a},setURISuccess:function(e,a){e.uriSuccess=a},toggleMarks:function(e){e.marks=!e.marks},toggleFileDrag:function(e){e.fileDrag=!e.fileDrag},setVideoPaused:function(e){"Video"===e.gameType&&(e.videoAnimationId=0)},performPreviousEvent:function(e){var a=--e.gameEventIndex,t=e.gameEvents[a],n=t.column+t.row*e.width;switch(t.snapshot&&(e.gameImgBoard[n]=t.snapshot.cellType,e.faceStatus=t.snapshot.faceStatus),t.name){case"Start":e.gameStarted=!1;break;case"MouseMove":e.gameMousePoints.pop();break;case"LeftIncrease":e.gameLeftPoints.pop();break;case"RightIncrease":e.gameRightPoints.pop();break;case"DoubleIncrease":e.gameDoublePoints.pop();break}},performNextEvent:function(e){var a=e.gameEventIndex++,t=e.gameEvents[a],n=t.column+t.row*e.width;switch(t.snapshot={cellType:e.gameImgBoard[n],faceStatus:e.faceStatus},t.name){case"Start":e.gameStarted=!0;break;case"MouseMove":e.gameMousePoints.push({x:t.x,y:t.y});break;case"LeftIncrease":e.gameLeftPoints.push({x:t.x,y:t.y});break;case"RightIncrease":e.gameRightPoints.push({x:t.x,y:t.y});break;case"DoubleIncrease":e.gameDoublePoints.push({x:t.x,y:t.y});break;case"LeftPress":e.faceStatus="face-press-cell";break;case"LeftPressWithShift":e.faceStatus="face-press-cell";break;case"LeftRelease":e.faceStatus="face-normal";break;case"RightPress":e.faceStatus="face-press-cell";break;case"RightRelease":e.faceStatus="face-normal";break;case"MiddlePress":e.faceStatus="face-press-cell";break;case"MiddleRelease":e.faceStatus="face-normal";break;case"Flag":e.gameImgBoard[n]="cell-flag";break;case"RemoveFlag":e.gameImgBoard[n]="cell-normal";break;case"QuestionMark":e.gameImgBoard[n]="cell-question";break;case"RemoveQuestionMark":e.gameImgBoard[n]="cell-normal";break;case"Press":e.gameImgBoard[n]="cell-press";break;case"Release":e.gameImgBoard[n]="cell-normal";break;case"Mine":e.gameImgBoard[n]="cell-mine";break;case"Mislabeled":e.gameImgBoard[n]="cell-flag-wrong";break;case"Blast":e.gameImgBoard[n]="cell-mine-bomb";break;case"Open":e.gameImgBoard[n]="cell-number-"+t.number;break;case"Win":e.videoAnimationId=0,e.faceStatus="face-win";break;case"Lose":e.videoAnimationId=0,e.faceStatus="face-lose";break;case"UnexpectedEnd":e.videoAnimationId=0;break}},resetGame:function(e){e.gameImgBoard=Array.from(Array(e.width*e.height),(function(){return"cell-normal"})),e.gameStarted=!1,e.gameElapsedTime=0,e.gameEventIndex=0,e.faceStatus="face-normal",e.gameMousePoints=[],e.gameLeftPoints=[],e.gameRightPoints=[],e.gameDoublePoints=[]},upk:function(e){var a=e.videoParser,t=new L["a"](a.getWidth(),a.getHeight(),a.getMines(),e.marks,a.getLevel(),a.getVideoBoard());e.userParser=new x["a"](t,!0),W.commit("initGame",e.userParser),e.gameType="UPK",W.commit("resetGame"),W.commit("playVideo")},replayVideo:function(e){e.gameEvents=e.videoParser.getGameEvents(),e.gameType="Video",W.commit("resetGame"),W.commit("playVideo")},playVideo:function(e){e.gameStartTime=0;var a=requestAnimationFrame((function t(){var n=Date.now();if(e.videoAnimationId===a&&!e.exit){var r=0===e.gameStartTime?0:n-e.gameStartTime;W.commit("setGameElapsedTime",Object(T["c"])(e.gameElapsedTime,Object(T["e"])(r,"Video"===e.gameType?e.gameSpeed:1))),W.commit("setGameStartTime",n),window.requestAnimationFrame(t)}}));e.videoAnimationId=a}},R=(t("99af"),t("1943")),V=t("bad0"),D=t("3cab"),B=t("04df"),A=h["b"].global.t,j=["avf","mvf","rmv","rawvf"],G=function(e){return j.includes(e)};function q(e){I["a"].error(e),W.commit("setLoading",!1)}function z(e){return-1!==e.indexOf(".")?e.substring(e.lastIndexOf(".")+1):""}function U(e,a){return e?e.length<=0?(a(A("error.fileNotSelect")),!1):!(e.length>1)||(a(A("error.fileTooMany",[e.length])),!1):(a(A("error.fileNotPresent")),!1)}function F(e,a){var t=z(e);return!!G(t)||(a(A("error.fileUnsupported")),!1)}function _(e,a,t){return e<=0?(t(A("error.fileEmpty",[a])),!1):!(e/1024/1024>5)||(t(A("error.fileTooLarge",[a])),!1)}function C(e,a){return 200===e||(a(A("error.invalidStatus",[e])),!1)}function H(e,a,t,n){try{switch(e){case"avf":t(new x["a"](new R["a"](a),!1));break;case"mvf":t(new x["a"](new V["a"](a),!1));break;case"rmv":t(new x["a"](new D["a"](a),!1));break;case"rawvf":t(new x["a"](new B["a"](a),!1));break;default:n("".concat(A("error.videoParse")).concat(A("error.fileUnsupported")))}}catch(r){console.error(r),n("".concat(A("error.videoParse")).concat(r.message))}}var N={fetchUri:function(e,a){var t=e.commit;t("setLoading",!0),t("setURI",a),t("setURISuccess",!1),W.dispatch("parseUri",{uri:a,onload:function(e){t("receiveVideo",e),t("setURISuccess",!0)},onerror:function(e){return q(e)}})},parseUri:function(e,a){var t=a.uri,n=a.onload,r=a.onerror;if(F(t,r)){var o=new XMLHttpRequest;o.onload=function(){C(o.status,r)&&_(o.response.byteLength,t,r)&&H(z(t),o.response,n,r)},o.onerror=function(e){console.error(e),r(A("error.uriRequest",[t]))},o.open("GET",t),o.responseType="arraybuffer",o.send()}},fetchFiles:function(e,a){var t=e.commit;t("setLoading",!0),W.dispatch("parseFiles",{fileList:a,onload:function(e){return t("receiveVideo",e)},onerror:function(e){return q(e)}})},parseFiles:function(e,a){var t=a.fileList,n=a.onload,r=a.onerror;if(U(t,r)&&t){var o=t[0];if(F(o.name,r)&&_(o.size,o.name,r)){var i=new FileReader;i.onload=function(){H(z(o.name),i.result,n,r)},i.onerror=function(e){console.error(e),r(A("error.fileReadError",[i.error]))},i.readAsArrayBuffer(o)}}}},W=Object(g["a"])({state:k,getters:E,mutations:O,actions:N,plugins:S})},"2a70":function(e,a,t){},"49cb":function(e,a,t){"use strict";function n(e,a){var t=document.createElement("canvas").getContext("2d");return t?(t.font=a||t.font,t.measureText(e).width):null}t.d(a,"a",(function(){return n}))},"5c91":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));t("caad");var n=["face-normal","face-press-cell","face-press-normal","face-win","face-lose"],r=function(e){return n.includes(e)}},cd49:function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2a70");var n=t("7a23"),r=t("3dfd"),o=t("0613"),i=t("da92"),s=t("fe0b"),c=t("b85c"),u=(t("7f6b"),t("8592")),l=(t("288f"),t("cdeb")),m=(t("fbd8"),t("55f1")),f=(t("438c"),t("fbdf")),d=(t("ea98"),t("1d87")),g=(t("922d"),t("09d9")),v=(t("6ba6"),t("5efb")),h=(t("b0c0"),t("5125"),[v["a"],g["a"],d["a"],f["a"],m["a"],m["a"].Item,m["a"].Divider,m["a"].SubMenu,m["a"].ItemGroup,l["a"],u["a"]]),p=function(e){var a,t=Object(c["a"])(h);try{for(t.s();!(a=t.n()).done;){var n=a.value;e.component(n.name,n)}}catch(r){t.e(r)}finally{t.f()}};i["a"].enableBoundaryChecking(!1);var b=Object(n["createApp"])(r["a"]);Object(s["a"])(b),p(b),b.use(o["a"]).mount("#app")},fe0b:function(e,a,t){"use strict";t.d(a,"b",(function(){return s}));var n=t("b85c"),r=(t("159b"),t("d3b7"),t("ddb0"),t("ac1f"),t("466d"),t("d899"));function o(){var e=t("3e6a"),a={};return e.keys().forEach((function(t){var n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];a[r]=e(t)}})),a}function i(){var e,a=navigator.languages||[navigator.language],t=Object(n["a"])(a);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(/^zh(?:-CN)?$/i.test(r))return"zh-Hans";if(/^zh\b/i.test(r))return"zh-Hant";if(/^en\b/i.test(r))return"en"}}catch(o){t.e(o)}finally{t.f()}return"en"}var s=Object(r["createI18n"])({fallbackLocale:"en",locale:i(),messages:o()});a["a"]=function(e){e.use(s)}}});