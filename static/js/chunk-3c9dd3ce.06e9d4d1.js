(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c9dd3ce"],{"0b24":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"scores",staticStyle:{height:"100%"}},[e("score-board",{attrs:{scoreLeft:t.redTeamEnergy,scoreRight:t.redTeamCarbon},on:{clickLeft:t.leftClick}})],1)},s=[],l=e("5530"),n=e("2811"),r=e("5880"),h={components:{"score-board":n["a"]},data:function(){return{}},computed:Object(l["a"])({},Object(r["mapState"])("score",["redTeamEnergy","redTeamCarbon"])),methods:{}},o=h,c=e("2877"),u=Object(c["a"])(o,i,s,!1,null,"f8550f76",null);a["default"]=u.exports},"0bb1":function(t,a,e){"use strict";e("bd6e")},2811:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("a-card",{staticClass:"card",attrs:{title:t.titleLeft,headStyle:{"text-align":"center",color:"#FFFFFF","font-size":"168px","font-family":"YOUSHEBIAOTIHEI",background:t.headLeftBGColor}},on:{click:t.clickLeft}},[e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v(t._s(t.subtitleLeft))]),e("div",{staticClass:"cardBox"},[e("canvas",{staticStyle:{width:"100%"},attrs:{id:"canvasRTEnergy",height:"200",width:"600"}},[t._v("当前浏览器不支持canvas，请更换浏览器后再试")])])]),e("a-card",{staticClass:"card",attrs:{title:t.titleRight,headStyle:{"text-align":"center",color:"#FFFFFF","font-size":"168px","font-family":"YOUSHEBIAOTIHEI",background:t.headRightBGColor}},on:{click:t.clickRight}},[e("a",{attrs:{slot:"extra",href:"#"},slot:"extra"},[t._v(t._s(t.subtitleRight))]),e("div",{staticClass:"cardBox"},[e("canvas",{staticStyle:{width:"100%"},attrs:{id:"canvasRTCarbon",height:"200",width:"600"}},[t._v("当前浏览器不支持canvas，请更换浏览器后再试")])])])],1)},s=[],l=e("53ca"),n=(e("a9e3"),e("d3b7"),e("25f0"),e("5880"),e("d4ec")),r=e("bee2"),h=e("ade3"),o=(e("cb29"),e("ac1f"),e("1276"),e("99af"),e("a434"),[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]]]),c=function(){function t(a,e,i){Object(n["a"])(this,t),Object(h["a"])(this,"data",[]),Object(h["a"])(this,"balls",[]),Object(h["a"])(this,"MaxLen",3),Object(h["a"])(this,"balls",[]),Object(h["a"])(this,"R",1),Object(h["a"])(this,"H",200),Object(h["a"])(this,"W",450),Object(h["a"])(this,"NumColor","black"),Object(h["a"])(this,"canvas",null),Object(h["a"])(this,"canvasLabel",""),Object(h["a"])(this,"cxt",null),this.canvasLabel=a,this.NumColor=e,this.MaxLen=i}return Object(r["a"])(t,[{key:"renderDigit",value:function(t,a){for(var e=0;e<o[a].length;e++)for(var i=0;i<o[a][e].length;i++)1===o[a][e][i]&&(this.cxt.beginPath(),this.cxt.arc(14*(this.R+2)*t+2*i*(this.R+1)+(this.R+1),2*e*(this.R+1)+(this.R+1),this.R,0,2*Math.PI),this.cxt.fillStyle=this.NumColor,this.cxt.closePath(),this.cxt.fill())}},{key:"updateDigit",value:function(t){if(!(t.length>this.MaxLen)){for(var a=[],e=[],i=t.split(""),s=0;s<i.length&&s<this.MaxLen;s++)e.push(i[s]);for(var l=this.data.length-1;l>=0;l--)e[l]!==this.data[l]&&a.push(l+"_"+(Number(this.data[l])+1)%10);for(var n=0;n<a.length;n++)this.addBalls.apply(this,a[n].split("_"));this.data=e.concat()}}},{key:"updateDigitWithColor",value:function(t,a){if(!(t.length>this.MaxLen)){for(var e=[],i=[],s=t.split(""),l=0;l<s.length&&l<this.MaxLen;l++)i.push(s[l]);for(var n=this.data.length-1;n>=0;n--)i[n]!==this.data[n]&&e.push(n+"_"+(Number(this.data[n])+1)%10+"_"+a);for(var r=0;r<e.length;r++)this.addBallsWithColor.apply(this,e[r].split("_"));this.data=i.concat()}}},{key:"updateBalls",value:function(){for(var t=0;t<this.balls.length;t++)this.balls[t].stepY+=this.balls[t].disY,this.balls[t].x+=this.balls[t].stepX,this.balls[t].y+=this.balls[t].stepY,(this.balls[t].x>this.W+this.R||this.balls[t].y>this.H+this.R)&&(this.balls.splice(t,1),t--)}},{key:"addBalls",value:function(t,a){for(var e=[1,2,3],i=["#3BE","#09C","#A6C","#93C","#9C0","#690","#FB3","#F80","#F44","#C00"],s=0;s<o[a].length;s++)for(var l=0;l<o[a][s].length;l++)if(1==o[a][s][l]){var n={x:14*(this.R+2)*t+2*l*(this.R+1)+(this.R+1),y:2*s*(this.R+1)+(this.R+1),stepX:Math.floor(4*Math.random()-2),stepY:-2*e[Math.floor(Math.random()*e.length)],color:i[Math.floor(Math.random()*i.length)],disY:1};this.balls.push(n)}}},{key:"addBallsWithColor",value:function(t,a,e){for(var i=[1,2,3],s=0;s<o[a].length;s++)for(var l=0;l<o[a][s].length;l++)if(1==o[a][s][l]){var n={x:14*(this.R+2)*t+2*l*(this.R+1)+(this.R+1),y:2*s*(this.R+1)+(this.R+1),stepX:Math.floor(4*Math.random()-2),stepY:-2*i[Math.floor(Math.random()*i.length)],color:e,disY:1};this.balls.push(n)}}},{key:"render",value:function(){this.canvas.height=this.H;for(var t=0;t<this.data.length;t++)this.renderDigit(t,this.data[t]);for(var a=0;a<this.balls.length;a++)this.cxt.beginPath(),this.cxt.arc(this.balls[a].x,this.balls[a].y,this.R,0,2*Math.PI),this.cxt.fillStyle=this.balls[a].color,this.cxt.closePath(),this.cxt.fill()}},{key:"beginRender",value:function(){var t=this;if(this.canvas=document.getElementById(this.canvasLabel),null!=this.canvas&&this.canvas.getContext){this.cxt=this.canvas.getContext("2d"),this.canvas.height=this.H;for(var a=0;a<this.MaxLen;a++)this.data.push(0);clearInterval(e);var e=setInterval((function(){t.R=t.canvas.height/20-1,t.updateBalls(),t.render()}),20)}}}]),t}(),u={name:"Scoreboard",props:{titleLeft:{type:String,default:"能量值"},subtitleLeft:{type:String,default:""},titleRight:{type:String,default:"碳排放"},subtitleRight:{type:String,default:""},headLeftBGColor:{type:String,default:"red"},headRightBGColor:{type:String,default:"red"},scoreLeft:{default:"0"},scoreRight:{default:"0"},ballsColor:{type:String,default:""},enableVoice:{type:Boolean,default:!1},count:{type:Number,default:0}},data:function(){return{leftObj:null,rightObj:null,audioOjb:null}},watch:{count:function(t){this.enableVoice&&this.audioOjb.play()},scoreLeft:function(t){var a=t;Object(l["a"])(t)===Number&&(a=String(t)),""!==this.ballsColor?this.leftObj.updateDigitWithColor(this.formatNum(a),this.ballsColor):this.leftObj.updateDigit(this.formatNum(a))},scoreRight:function(t){var a=t;Object(l["a"])(t)===Number&&(a=String(t)),""!==this.ballsColor?this.rightObj.updateDigitWithColor(this.formatNum(a),this.ballsColor):this.rightObj.updateDigit(this.formatNum(a))}},methods:{clickLeft:function(){this.$emit("clickLeft"),this.audioOjb.play()},clickRight:function(){this.$emit("clickRight")},formatNum:function(t){var a="0";return t<100&&t>=10?a+=t:a=t<10?"00"+t:t.toString(),a}},mounted:function(){this.leftObj=new c("canvasRTEnergy","black",3),this.leftObj.beginRender(),this.rightObj=new c("canvasRTCarbon","black",3),this.rightObj.beginRender()},created:function(){}},f=u,d=(e("0bb1"),e("2877")),b=Object(d["a"])(f,i,s,!1,null,"370713a7",null);a["a"]=b.exports},"81d5":function(t,a,e){"use strict";var i=e("7b0b"),s=e("23cb"),l=e("50c4");t.exports=function(t){var a=i(this),e=l(a.length),n=arguments.length,r=s(n>1?arguments[1]:void 0,e),h=n>2?arguments[2]:void 0,o=void 0===h?e:s(h,e);while(o>r)a[r++]=t;return a}},bd6e:function(t,a,e){},bee2:function(t,a,e){"use strict";function i(t,a){for(var e=0;e<a.length;e++){var i=a[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,a,e){return a&&i(t.prototype,a),e&&i(t,e),t}e.d(a,"a",(function(){return s}))},cb29:function(t,a,e){var i=e("23e7"),s=e("81d5"),l=e("44d2");i({target:"Array",proto:!0},{fill:s}),l("fill")},d4ec:function(t,a,e){"use strict";function i(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}e.d(a,"a",(function(){return i}))}}]);