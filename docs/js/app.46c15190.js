(function(e){function t(t){for(var n,o,s=t[0],h=t[1],r=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(e[n]=h[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,r||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,s=1;s<c.length;s++){var h=c[s];0!==i[h]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=c[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=n,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var u=h;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"011a":function(e,t,c){"use strict";c("7b8c")},1089:function(e,t,c){"use strict";c("6f0c")},"2b53":function(e,t,c){},"4e03":function(e,t,c){"use strict";c("2b53")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),i=Object(n["n"])("data-v-773401da");Object(n["h"])("data-v-773401da");var a={class:"container"},o=Object(n["e"])("h1",{class:"mob-attention"},"パソコンで使ってね！",-1),s={class:"key-wrap mob-catch"},h={key:0,class:"change-title mob-catch"},r=Object(n["d"])(" キー変更中"),u=Object(n["e"])("br",null,null,-1),l=Object(n["d"])(" (画面で変更したいキーを選択して、キーボードを押してね)"),d=Object(n["e"])("br",null,null,-1),g=Object(n["d"])(" Enterでキャンセル "),v={key:1,class:"change-title mob-catch"};Object(n["g"])();var f=i((function(e,t,c,i,f,p){var y=Object(n["i"])("Header"),b=Object(n["i"])("Kenban1"),k=Object(n["i"])("Kenban2"),j=Object(n["i"])("Kenban3"),O=Object(n["i"])("ChangeFinishDeclare");return Object(n["f"])(),Object(n["b"])("div",a,[Object(n["e"])(y,{ref:"headerRef",onChildOpening:p.opening,onChildClosing:p.closing,onAudioToMain:p.receiveAudioFromHeader,onChangeServe:p.changeKey,onDefaultServe:p.defaultKey},null,8,["onChildOpening","onChildClosing","onAudioToMain","onChangeServe","onDefaultServe"]),o,Object(n["e"])("div",s,[Object(n["e"])(b,{ref:"keyRef1",class:"kenban",onChangeEnd:p.receiveChangeEnd1},null,8,["onChangeEnd"]),Object(n["e"])(k,{ref:"keyRef2",class:"kenban",onChangeEnd:p.receiveChangeEnd2},null,8,["onChangeEnd"]),Object(n["e"])(j,{ref:"keyRef3",class:"kenban",onChangeEnd:p.receiveChangeEnd3},null,8,["onChangeEnd"])]),f.changingNow?(Object(n["f"])(),Object(n["b"])("h3",h,[r,u,l,d,g])):Object(n["c"])("",!0),f.changeCancel?(Object(n["f"])(),Object(n["b"])("h3",v,"キャンセル完了")):Object(n["c"])("",!0),f.changeFinish?(Object(n["f"])(),Object(n["b"])(O,{key:2,"changed-key":f.changedKey,class:"mob-catch"},null,8,["changed-key"])):Object(n["c"])("",!0)])})),p=Object(n["n"])("data-v-30c9977d");Object(n["h"])("data-v-30c9977d");var y=Object(n["e"])("h1",null,[Object(n["e"])("a",{class:"title-link",href:"/"},"3連キーボード図柄")],-1),b=Object(n["e"])("a",{href:"https://github.com/yoshiishunichi/ganja-key",target:"blank",rel:"noopener",class:"github-link"},[Object(n["e"])("svg",{id:"Capa_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 438.549 438.549",style:{"enable-background":"new 0 0 438.549 438.549"},"xml:space":"preserve"},[Object(n["e"])("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\n\t\tc-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\n\t\tc0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\n\t\tc2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n\t\tc-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\n\t\tc-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\n\t\tc-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\n\t\tc-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n\t\tc5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\n\t\tc6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\n\t\tc-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\n\t\tc-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n\t\tc-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\n\t\tc5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\n\t\tc7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\n\t\tc15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n\t\tc-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\n\t\tc9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\n\t\tc44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\n\t\tC438.536,184.851,428.728,148.168,409.132,114.573z"})])],-1),k=Object(n["e"])("i",{class:"fa fa-cog mr-2"},null,-1),j=Object(n["e"])("span",null,null,-1);Object(n["g"])();var O=p((function(e,t,c,i,a,o){var s=Object(n["i"])("ModalView");return Object(n["f"])(),Object(n["b"])("header",null,[y,b,a.showContent?Object(n["c"])("",!0):Object(n["m"])((Object(n["f"])(),Object(n["b"])("button",{key:0,class:"setting-btn",type:"button",onClick:t[1]||(t[1]=function(){return o.openModal&&o.openModal.apply(o,arguments)})},[k,j],512)),[[n["l"],!a.changing]]),Object(n["m"])(Object(n["e"])(s,{ref:"modalRef",onModalClose:o.closeModal,onAudioToHeader:o.receiveAudioFromModal,onChildChange:o.changeReceive,onChildDefault:o.defaultReceive},null,8,["onModalClose","onAudioToHeader","onChildChange","onChildDefault"]),[[n["l"],a.showContent]])])})),C=Object(n["n"])("data-v-7d0e3c10");Object(n["h"])("data-v-7d0e3c10");var w=Object(n["e"])("h2",null,"設定",-1),m={class:"release-stop-text"},K=Object(n["e"])("label",{for:"stopsound",class:"stopsoundlabel"},"指を離したら音を止める",-1);Object(n["g"])();var D=C((function(e,t,c,i,a,o){var s=Object(n["i"])("InputMusic");return Object(n["f"])(),Object(n["b"])("div",{id:"overlay",onClick:t[6]||(t[6]=function(){return o.clickEvent&&o.clickEvent.apply(o,arguments)})},[Object(n["e"])("div",{id:"modalwindow",onClick:t[5]||(t[5]=function(){return o.stopEvent&&o.stopEvent.apply(o,arguments)})},[w,Object(n["e"])(s,{class:"audioreceiver",onAudioServe:o.receiveAudioData},null,8,["onAudioServe"]),Object(n["e"])("p",m,[Object(n["m"])(Object(n["e"])("input",{id:"stopsound","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.releasestop=e}),type:"checkbox"},null,512),[[n["k"],a.releasestop]]),K]),Object(n["e"])("button",{class:"change-key-btn",onClick:t[2]||(t[2]=function(){return o.tapKeyChange&&o.tapKeyChange.apply(o,arguments)})},"キー変更"),Object(n["e"])("button",{class:"default-btn",onClick:t[3]||(t[3]=function(){return o.tapKeyDefault&&o.tapKeyDefault.apply(o,arguments)})},"配列をデフォルトに戻す"),Object(n["e"])("button",{onClick:t[4]||(t[4]=function(){return o.clickEvent&&o.clickEvent.apply(o,arguments)})},"閉じる")])])})),N=Object(n["n"])("data-v-4fb8a8bf");Object(n["h"])("data-v-4fb8a8bf");var S={for:"file_upload",class:"choice-file"},R=Object(n["d"])(" ファイルを選択してください "),U={key:0,class:"sample"},E=Object(n["d"])(" Your browser does not support the "),$=Object(n["e"])("code",null,"audio",-1),A=Object(n["d"])(" element. ");Object(n["g"])();var B=N((function(e,t,c,i,a,o){return Object(n["f"])(),Object(n["b"])("div",null,[Object(n["e"])("label",S,[R,Object(n["e"])("input",{id:"file_upload",type:"file",accept:"audio/*",onChange:t[1]||(t[1]=function(e){return o.fileChange(e)})},null,32)]),a.audioData?(Object(n["f"])(),Object(n["b"])("p",U,"〜サンプル〜")):Object(n["c"])("",!0),a.audioData?(Object(n["f"])(),Object(n["b"])("audio",{key:1,controls:"",src:a.audioData},[E,$,A],8,["src"])):Object(n["c"])("",!0),a.audioData?(Object(n["f"])(),Object(n["b"])("button",{key:2,onClick:t[2]||(t[2]=function(){return o.deleteAudio&&o.deleteAudio.apply(o,arguments)})},"選択したファイルをキャンセル")):Object(n["c"])("",!0)])})),M={name:"InputMusic",data:function(){return{files:null,audioData:""}},mounted:function(){this.audioData=localStorage.audio,this.$emit("audio-serve",this.audioData)},methods:{deleteAudio:function(){this.audioData="",this.$emit("audio-serve",this.audioData),localStorage.audio=this.audioData,this.files=null,document.getElementById("file_upload").value=""},fileChange:function(e){var t=this;if(e)if(this.files=e.target.files,this.files.length>0){var c=this.files[0],n=new FileReader;n.onload=function(e){t.audioData=e.target.result,t.$emit("audio-serve",t.audioData),localStorage.audio=t.audioData},n.readAsDataURL(c)}else this.audioData="",this.$emit("audio-serve",this.audioData),localStorage.audio=this.audioData;else this.audioData="",this.files=null,this.$emit("audio-serve",this.audioData),localStorage.audio=this.audioData}}};c("011a");M.render=B,M.__scopeId="data-v-4fb8a8bf";var W=M,x={name:"ModalView",components:{InputMusic:W},data:function(){return{releasestop:null,audioData:null}},beforeUnmount:function(){window.removeEventListener("keydown",this.keyDown)},methods:{clickEvent:function(){this.$emit("modal-close",this.releasestop)},stopEvent:function(){event.stopPropagation()},receiveStatus:function(e){this.releasestop=e,window.addEventListener("keydown",this.keyDown)},receiveAudioData:function(e){this.audioData=e,this.$emit("audio-to-header",this.audioData)},keyDown:function(e){"Escape"===e.key&&this.clickEvent()},tapKeyChange:function(){this.clickEvent(),this.$emit("child-change")},tapKeyDefault:function(){this.clickEvent(),this.$emit("child-default")}}};c("d1c7");x.render=D,x.__scopeId="data-v-7d0e3c10";var _=x,L={name:"Header",components:{ModalView:_},data:function(){return{showContent:!1,releasestop:!1,audioData:null,changing:!1}},methods:{openModal:function(){this.showContent=!0,this.$emit("child-opening"),this.$refs.modalRef.receiveStatus(this.releasestop)},closeModal:function(e){this.showContent=!1,this.releasestop=e,this.$emit("child-closing",this.releasestop)},receiveAudioFromModal:function(e){this.audioData=e,this.$emit("audio-to-main",this.audioData)},changeReceive:function(){this.$emit("change-serve")},defaultReceive:function(){this.$emit("default-serve")},toChanging:function(){this.changing=!0},toNotChanging:function(){this.changing=!1}}};c("df32");L.render=O,L.__scopeId="data-v-30c9977d";var F=L,V=Object(n["n"])("data-v-4c667442");Object(n["h"])("data-v-4c667442");var I={class:"frame"};Object(n["g"])();var J=V((function(e,t,c,i,a,o){return Object(n["f"])(),Object(n["b"])("div",I,[Object(n["e"])("div",{class:["key",{pointerKey:e.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:e.actives[0].active,changeW:e.actives[0].changing}],onClick:t[1]||(t[1]=function(e){return o.tapKey(0)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[0].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:e.actives[1].active,changeB:e.actives[1].changing}],onClick:t[2]||(t[2]=function(e){return o.tapKey(1)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[1].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:e.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:e.actives[2].active,changeW:e.actives[2].changing}],onClick:t[3]||(t[3]=function(e){return o.tapKey(2)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[2].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:e.actives[3].active,changeB:e.actives[3].changing}],onClick:t[4]||(t[4]=function(e){return o.tapKey(3)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[3].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:e.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:e.actives[4].active,changeW:e.actives[4].changing}],onClick:t[5]||(t[5]=function(e){return o.tapKey(4)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[4].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:e.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:e.actives[5].active,changeW:e.actives[5].changing}],onClick:t[6]||(t[6]=function(e){return o.tapKey(5)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[5].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:e.actives[6].active,changeB:e.actives[6].changing}],onClick:t[7]||(t[7]=function(e){return o.tapKey(6)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[6].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:e.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:e.actives[7].active,changeW:e.actives[7].changing}],onClick:t[8]||(t[8]=function(e){return o.tapKey(7)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[7].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:e.actives[8].active,changeB:e.actives[8].changing}],onClick:t[9]||(t[9]=function(e){return o.tapKey(8)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[8].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:e.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:e.actives[9].active,changeW:e.actives[9].changing}],onClick:t[10]||(t[10]=function(e){return o.tapKey(9)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[9].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:e.actives[10].active,changeB:e.actives[10].changing}],onClick:t[11]||(t[11]=function(e){return o.tapKey(10)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[10].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:e.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:e.actives[11].active,changeW:e.actives[11].changing}],onClick:t[12]||(t[12]=function(e){return o.tapKey(11)})},[Object(n["e"])("p",null,Object(n["j"])(e.keyCode[11].code.toUpperCase()),1)],2)],2)])})),T=(c("a434"),c("d3b7"),{name:"Kenban2",data:function(){return{actives:[{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1}],defaultKeyCode:["1","2","3","4","5","6","7","8","9","0","-","^"],keyCode:[{code:"1"},{code:"2"},{code:"3"},{code:"4"},{code:"5"},{code:"6"},{code:"7"},{code:"8"},{code:"9"},{code:"0"},{code:"-"},{code:"^"}],source:[null,null,null,null,null,null,null,null,null,null,null,null],ctx:new AudioContext,url:"./do.mp3",do:null,openingView:!1,releaseStop:!1,audioData:null,changeNow:!1,changeNum:[]}},mounted:function(){localStorage.keys1&&(this.keyCode=JSON.parse(localStorage.keys1)),window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)},beforeUnmount:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{tapKey:function(e){if(this.changeNow){this.actives[e].changing=!this.actives[e].changing;for(var t=!1,c=0;c<12;c++)this.changeNum[c]===e&&(t=!0,this.changeNum.splice(c,1));t||this.changeNum.push(e)}},defaultReceive:function(){for(var e=0;e<12;e++)this.keyCode[e].code=this.defaultKeyCode[e];localStorage.keys1=JSON.stringify(this.keyCode)},changeReceive:function(){this.changeNow=!0},endChaging:function(){this.changeNum=[],this.changeNow=!1;for(var e=0;e<12;e++)this.actives[e].changing&&(this.actives[e].changing=!1)},receiveModalStatus:function(e){this.openingView=e},receiveReleaseStatus:function(e){this.releaseStop=e},receiveAudioData:function(e){var t=this;this.audioData=e,this.audioData?window.fetch(this.audioData).then((function(e){return e.arrayBuffer()})).then((function(e){return t.ctx.decodeAudioData(e)})).then((function(e){t.do=e})):window.fetch(this.url).then((function(e){return e.arrayBuffer()})).then((function(e){return t.ctx.decodeAudioData(e)})).then((function(e){t.do=e}))},play:function(e,t){this.source[t+12]=this.ctx.createBufferSource(),this.source[t+12].buffer=e,this.source[t+12].playbackRate.value=Math.pow(2,t/12),this.source[t+12].connect(this.ctx.destination),this.source[t+12].start()},catchMeta:function(e){return"Meta"===e||"Tab"===e||"Control"===e||"Shift"===e||"Alt"===e||"CapsLock"===e||"Escape"===e},simplificKey:function(e){switch(e){case" ":return"Space";case"ArrowUp":return"↑";case"ArrowDown":return"↓";case"ArrowRight":return"→";case"ArrowLeft":return"←";case"Backspace":return"Del";default:return!1}},keyDown:function(e){for(var t=0;t<12;t++)e.key!==this.keyCode[t].code&&this.simplificKey(e.key)!==this.keyCode[t].code||this.actives[t].active||this.openingView||this.changeNow||(this.play(this.do,-12+t),this.actives[t].active=!0);if(this.changeNow&&"Enter"!=e.key&&!this.catchMeta(e.key)){for(var c=0;c<12;c++)this.actives[c].changing&&(this.simplificKey(e.key)?this.keyCode[c].code=this.simplificKey(e.key):this.keyCode[c].code=e.key,this.actives[c].changing=!1);localStorage.keys1=JSON.stringify(this.keyCode),this.changeNum=[],this.changeNow=!1,this.endChaging(),this.simplificKey(e.key)?this.$emit("change-end",this.simplificKey(e.key).toUpperCase()):this.$emit("change-end",e.key.toUpperCase())}},keyUp:function(e){for(var t=0;t<12;t++)e.key!==this.keyCode[t].code&&this.simplificKey(e.key)!==this.keyCode[t].code||(this.actives[t].active&&this.releaseStop&&this.source[t].stop(),this.actives[t].active=!1)}}});c("59a4");T.render=J,T.__scopeId="data-v-4c667442";var P=T,H=Object(n["n"])("data-v-1a97a512");Object(n["h"])("data-v-1a97a512");var q={class:"frame"};Object(n["g"])();var z=H((function(e,t,c,i,a,o){return Object(n["f"])(),Object(n["b"])("div",q,[Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[0].active,changeW:a.actives[0].changing}],onClick:t[1]||(t[1]=function(e){return o.tapKey(0)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[0].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[1].active,changeB:a.actives[1].changing}],onClick:t[2]||(t[2]=function(e){return o.tapKey(1)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[1].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[2].active,changeW:a.actives[2].changing}],onClick:t[3]||(t[3]=function(e){return o.tapKey(2)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[2].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[3].active,changeB:a.actives[3].changing}],onClick:t[4]||(t[4]=function(e){return o.tapKey(3)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[3].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[4].active,changeW:a.actives[4].changing}],onClick:t[5]||(t[5]=function(e){return o.tapKey(4)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[4].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[5].active,changeW:a.actives[5].changing}],onClick:t[6]||(t[6]=function(e){return o.tapKey(5)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[5].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[6].active,changeB:a.actives[6].changing}],onClick:t[7]||(t[7]=function(e){return o.tapKey(6)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[6].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[7].active,changeW:a.actives[7].changing}],onClick:t[8]||(t[8]=function(e){return o.tapKey(7)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[7].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[8].active,changeB:a.actives[8].changing}],onClick:t[9]||(t[9]=function(e){return o.tapKey(8)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[8].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[9].active,changeW:a.actives[9].changing}],onClick:t[10]||(t[10]=function(e){return o.tapKey(9)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[9].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[10].active,changeB:a.actives[10].changing}],onClick:t[11]||(t[11]=function(e){return o.tapKey(10)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[10].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[11].active,changeW:a.actives[11].changing}],onClick:t[12]||(t[12]=function(e){return o.tapKey(11)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[11].code.toUpperCase()),1)],2)],2)])})),Y={name:"Kenban2",data:function(){return{actives:[{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1}],defaultKeyCode:["q","w","e","r","t","y","u","i","o","p","@","["],keyCode:[{code:"q"},{code:"w"},{code:"e"},{code:"r"},{code:"t"},{code:"y"},{code:"u"},{code:"i"},{code:"o"},{code:"p"},{code:"@"},{code:"["}],source:[null,null,null,null,null,null,null,null,null,null,null,null],ctx:new AudioContext,url:"./do.mp3",do:null,openingView:!1,releaseStop:!1,changeNow:!1,changeNum:[]}},mounted:function(){localStorage.keys2&&(this.keyCode=JSON.parse(localStorage.keys2)),window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)},beforeUnmount:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{tapKey:function(e){if(this.changeNow){this.actives[e].changing=!this.actives[e].changing;for(var t=!1,c=0;c<12;c++)this.changeNum[c]===e&&(t=!0,this.changeNum.splice(c,1));t||this.changeNum.push(e)}},defaultReceive:function(){for(var e=0;e<12;e++)this.keyCode[e].code=this.defaultKeyCode[e];localStorage.keys2=JSON.stringify(this.keyCode)},changeReceive:function(){this.changeNow=!0},endChaging:function(){this.changeNum=[],this.changeNow=!1;for(var e=0;e<12;e++)this.actives[e].changing&&(this.actives[e].changing=!1)},receiveModalStatus:function(e){this.openingView=e},receiveReleaseStatus:function(e){this.releaseStop=e},receiveAudioData:function(e){var t=this;this.audioData=e,this.audioData?window.fetch(this.audioData).then((function(e){return e.arrayBuffer()})).then((function(e){return t.ctx.decodeAudioData(e)})).then((function(e){t.do=e})):window.fetch(this.url).then((function(e){return e.arrayBuffer()})).then((function(e){return t.ctx.decodeAudioData(e)})).then((function(e){t.do=e}))},play:function(e,t){this.source[t]=this.ctx.createBufferSource(),this.source[t].buffer=e,this.source[t].playbackRate.value=Math.pow(2,t/12),this.source[t].connect(this.ctx.destination),this.source[t].start()},catchMeta:function(e){return"Meta"===e||"Tab"===e||"Control"===e||"Shift"===e||"Alt"===e||"CapsLock"===e||"Escape"===e},simplificKey:function(e){switch(e){case" ":return"Space";case"ArrowUp":return"↑";case"ArrowDown":return"↓";case"ArrowRight":return"→";case"ArrowLeft":return"←";case"Backspace":return"Del";default:return!1}},keyDown:function(e){for(var t=0;t<12;t++)e.key!==this.keyCode[t].code&&this.simplificKey(e.key)!==this.keyCode[t].code||this.actives[t].active||this.openingView||this.changeNow||(this.play(this.do,t),this.actives[t].active=!0);if(this.changeNow&&"Enter"!=e.key&&!this.catchMeta(e.key)){for(var c=0;c<12;c++)this.actives[c].changing&&(this.simplificKey(e.key)?this.keyCode[c].code=this.simplificKey(e.key):this.keyCode[c].code=e.key,this.actives[c].changing=!1);localStorage.keys2=JSON.stringify(this.keyCode),this.changeNum=[],this.changeNow=!1,this.endChaging(),this.simplificKey(e.key)?this.$emit("change-end",this.simplificKey(e.key).toUpperCase()):this.$emit("change-end",e.key.toUpperCase())}},keyUp:function(e){for(var t=0;t<12;t++)e.key!==this.keyCode[t].code&&this.simplificKey(e.key)!==this.keyCode[t].code||(this.actives[t].active&&this.releaseStop&&this.source[t].stop(),this.actives[t].active=!1)}}};c("4e03");Y.render=z,Y.__scopeId="data-v-1a97a512";var G=Y,Q=Object(n["n"])("data-v-4c9b6580");Object(n["h"])("data-v-4c9b6580");var X={class:"frame"};Object(n["g"])();var Z=Q((function(e,t,c,i,a,o){return Object(n["f"])(),Object(n["b"])("div",X,[Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[0].active,changeW:a.actives[0].changing}],onClick:t[1]||(t[1]=function(e){return o.tapKey(0)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[0].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[1].active,changeB:a.actives[1].changing}],onClick:t[2]||(t[2]=function(e){return o.tapKey(1)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[1].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[2].active,changeW:a.actives[2].changing}],onClick:t[3]||(t[3]=function(e){return o.tapKey(2)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[2].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[3].active,changeB:a.actives[3].changing}],onClick:t[4]||(t[4]=function(e){return o.tapKey(3)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[3].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[4].active,changeW:a.actives[4].changing}],onClick:t[5]||(t[5]=function(e){return o.tapKey(4)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[4].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[5].active,changeW:a.actives[5].changing}],onClick:t[6]||(t[6]=function(e){return o.tapKey(5)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[5].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[6].active,changeB:a.actives[6].changing}],onClick:t[7]||(t[7]=function(e){return o.tapKey(6)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[6].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[7].active,changeW:a.actives[7].changing}],onClick:t[8]||(t[8]=function(e){return o.tapKey(7)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[7].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[8].active,changeB:a.actives[8].changing}],onClick:t[9]||(t[9]=function(e){return o.tapKey(8)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[8].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[9].active,changeW:a.actives[9].changing}],onClick:t[10]||(t[10]=function(e){return o.tapKey(9)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[9].code.toUpperCase()),1)],2),Object(n["e"])("div",{class:["black-key",{actB:a.actives[10].active,changeB:a.actives[10].changing}],onClick:t[11]||(t[11]=function(e){return o.tapKey(10)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[10].code.toUpperCase()),1)],2)],2),Object(n["e"])("div",{class:["key",{pointerKey:a.changeNow}]},[Object(n["e"])("div",{class:["white-key",{actW:a.actives[11].active,changeW:a.actives[11].changing}],onClick:t[12]||(t[12]=function(e){return o.tapKey(11)})},[Object(n["e"])("p",null,Object(n["j"])(a.keyCode[11].code.toUpperCase()),1)],2)],2)])})),ee={name:"Kenban2",data:function(){return{actives:[{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1},{active:!1,changing:!1}],defaultKeyCode:["a","s","d","f","g","h","j","k","l",";",":","]"],keyCode:[{code:"a"},{code:"s"},{code:"d"},{code:"f"},{code:"g"},{code:"h"},{code:"j"},{code:"k"},{code:"l"},{code:";"},{code:":"},{code:"]"}],source:[null,null,null,null,null,null,null,null,null,null,null,null],ctx:new AudioContext,url:"./do.mp3",do:null,openingView:!1,releaseStop:!1,changeNow:!1,changeNum:[]}},mounted:function(){localStorage.keys3&&(this.keyCode=JSON.parse(localStorage.keys3)),window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp)},beforeUnmount:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{tapKey:function(e){if(this.changeNow){this.actives[e].changing=!this.actives[e].changing;for(var t=!1,c=0;c<12;c++)this.changeNum[c]===e&&(t=!0,this.changeNum.splice(c,1));t||this.changeNum.push(e)}},defaultReceive:function(){for(var e=0;e<12;e++)this.keyCode[e].code=this.defaultKeyCode[e];localStorage.keys3=JSON.stringify(this.keyCode)},changeReceive:function(){this.changeNow=!0},endChaging:function(){this.changeNum=[],this.changeNow=!1;for(var e=0;e<12;e++)this.actives[e].changing&&(this.actives[e].changing=!1)},receiveModalStatus:function(e){this.openingView=e},receiveReleaseStatus:function(e){this.releaseStop=e},receiveAudioData:function(e){var t=this;this.audioData=e,this.audioData?window.fetch(this.audioData).then((function(e){return e.arrayBuffer()})).then((function(e){return t.ctx.decodeAudioData(e)})).then((function(e){t.do=e})):window.fetch(this.url).then((function(e){return e.arrayBuffer()})).then((function(e){return t.ctx.decodeAudioData(e)})).then((function(e){t.do=e}))},play:function(e,t){this.source[t-12]=this.ctx.createBufferSource(),this.source[t-12].buffer=e,this.source[t-12].playbackRate.value=Math.pow(2,t/12),this.source[t-12].connect(this.ctx.destination),this.source[t-12].start()},catchMeta:function(e){return"Meta"===e||"Tab"===e||"Control"===e||"Shift"===e||"Alt"===e||"CapsLock"===e||"Escape"===e},simplificKey:function(e){switch(e){case" ":return"Space";case"ArrowUp":return"↑";case"ArrowDown":return"↓";case"ArrowRight":return"→";case"ArrowLeft":return"←";case"Backspace":return"Del";default:return!1}},keyDown:function(e){for(var t=0;t<12;t++)e.key!==this.keyCode[t].code&&this.simplificKey(e.key)!==this.keyCode[t].code||this.actives[t].active||this.openingView||this.changeNow||(this.play(this.do,12+t),this.actives[t].active=!0);if(this.changeNow&&"Enter"!=e.key&&!this.catchMeta(e.key)){for(var c=0;c<12;c++)this.actives[c].changing&&(this.simplificKey(e.key)?this.keyCode[c].code=this.simplificKey(e.key):this.keyCode[c].code=e.key,this.actives[c].changing=!1);localStorage.keys3=JSON.stringify(this.keyCode),this.changeNum=[],this.changeNow=!1,this.endChaging(),this.simplificKey(e.key)?this.$emit("change-end",this.simplificKey(e.key).toUpperCase()):this.$emit("change-end",e.key.toUpperCase())}},keyUp:function(e){for(var t=0;t<12;t++)e.key!==this.keyCode[t].code&&this.simplificKey(e.key)!==this.keyCode[t].code||(this.actives[t].active&&this.releaseStop&&this.source[t].stop(),this.actives[t].active=!1)}}};c("cca64");ee.render=Z,ee.__scopeId="data-v-4c9b6580";var te=ee;function ce(e,t,c,i,a,o){return Object(n["f"])(),Object(n["b"])("h3",null,Object(n["j"])(c.changedKey)+"に変更完了",1)}var ne={name:"ChangeFinishDeclare",props:{changedKey:{type:String,default:""}}};ne.render=ce;var ie=ne,ae={name:"App",components:{Header:F,Kenban1:P,Kenban2:G,Kenban3:te,ChangeFinishDeclare:ie},data:function(){return{showContent:!1,releaseStop:!1,audioData:null,changingNow:!1,changeCancel:!1,changeFinish:!1,changedKey:""}},mounted:function(){window.addEventListener("keydown",this.keyDown)},beforeUnmount:function(){window.removeEventListener("keydown",this.keyDown)},methods:{keyDown:function(e){var t=this;this.changeCancel&&(this.changeCancel=!1),this.changeFinish&&setTimeout((function(){t.changeFinish=!1}),2e3),"Enter"===e.key&&this.changingNow&&(this.changingNow=!1,this.$refs.headerRef.toNotChanging(),this.changeCancel=!0,setTimeout((function(){t.changeCancel=!1}),2e3),this.$refs.keyRef1.endChaging(),this.$refs.keyRef2.endChaging(),this.$refs.keyRef3.endChaging())},defaultKey:function(){this.$refs.keyRef1.defaultReceive(),this.$refs.keyRef2.defaultReceive(),this.$refs.keyRef3.defaultReceive()},changeKey:function(){this.changingNow=!0,this.$refs.headerRef.toChanging(),this.changeCancel=!1,this.changeFinish=!1,this.$refs.keyRef1.changeReceive(),this.$refs.keyRef2.changeReceive(),this.$refs.keyRef3.changeReceive()},receiveChangeEnd1:function(e){this.changedKey=e,this.changeFinish=!0,this.changingNow=!1,this.$refs.headerRef.toNotChanging(),this.$refs.keyRef1.endChaging()},receiveChangeEnd2:function(){this.changingNow=!1,this.$refs.keyRef2.endChaging()},receiveChangeEnd3:function(){this.changingNow=!1,this.$refs.keyRef3.endChaging()},opening:function(){this.showContent=!0,this.$refs.keyRef1.receiveModalStatus(this.showContent),this.$refs.keyRef2.receiveModalStatus(this.showContent),this.$refs.keyRef3.receiveModalStatus(this.showContent)},closing:function(e){this.showContent=!1,this.releaseStop=e,this.$refs.keyRef1.receiveReleaseStatus(this.releaseStop),this.$refs.keyRef2.receiveReleaseStatus(this.releaseStop),this.$refs.keyRef3.receiveReleaseStatus(this.releaseStop),this.$refs.keyRef1.receiveModalStatus(this.showContent),this.$refs.keyRef2.receiveModalStatus(this.showContent),this.$refs.keyRef3.receiveModalStatus(this.showContent)},receiveAudioFromHeader:function(e){this.audioData=e,this.$refs.keyRef1.receiveAudioData(this.audioData),this.$refs.keyRef2.receiveAudioData(this.audioData),this.$refs.keyRef3.receiveAudioData(this.audioData)}}};c("1089"),c("9e47");ae.render=f,ae.__scopeId="data-v-773401da";var oe=ae;Object(n["a"])(oe).mount("#app")},"59a4":function(e,t,c){"use strict";c("dae0")},"5fcc":function(e,t,c){},"6f0c":function(e,t,c){},"7b8c":function(e,t,c){},"88f4":function(e,t,c){},"8cad":function(e,t,c){},"944e":function(e,t,c){},"9e47":function(e,t,c){"use strict";c("5fcc")},cca64:function(e,t,c){"use strict";c("8cad")},d1c7:function(e,t,c){"use strict";c("944e")},dae0:function(e,t,c){},df32:function(e,t,c){"use strict";c("88f4")}});
//# sourceMappingURL=app.46c15190.js.map