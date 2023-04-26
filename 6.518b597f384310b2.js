"use strict";(self.webpackChunkVkeyboard=self.webpackChunkVkeyboard||[]).push([[6],{6:(h,u,s)=>{s.r(u),s.d(u,{Layout1Module:()=>m});var p=s(895),r=s(322),t=s(256);const d=[{path:"",component:(()=>{class e{constructor(o){this.router=o,this.displayValue="",this.promptValue="587942",this.testStarted=!1,this.startTime=null,this.endTime=null,this.elapsedTime=0,this.typingErrors=0}ngOnInit(){}handleButtonClick(o){this.testStarted||(this.testStarted=!0,this.startTime=new Date),this.displayValue.length>=6||(o===this.promptValue[this.displayValue.length]?this.displayValue+=o:this.typingErrors++,"."===o&&this.displayValue.includes(".")||6!==this.displayValue.length||(this.testStarted=!1,this.endTime=new Date,this.displayValue===this.promptValue?(console.log("Test completed successfully"),console.log("Start time:",this.startTime),console.log("End time:",this.endTime),this.elapsedTime=(this.endTime.getTime()-this.startTime.getTime())/1e3,console.log(`Elapsed Time: ${this.elapsedTime} seconds`),console.log(`Typing Speed: ${this.typingSpeed} CH/Minute`),console.log(`Typing Accuracy: ${this.typingAccuracy}%`),console.log(`Typing Errors: ${this.typingErrors}`),this.generateLogFile()):(console.log("Test completed with errors"),console.log("Start time:",this.startTime),console.log("End time:",this.endTime),this.elapsedTime=(this.endTime.getTime()-this.startTime.getTime())/1e3,console.log(`Elapsed Time: ${this.elapsedTime} seconds`),console.log("Typing speed:",6e4*(this.displayValue.length-this.typingErrors)/this.elapsedTime,"CH/Minute"),console.log("Error count:",this.typingErrors))))}clearDisplay(){this.displayValue=""}get typingSpeed(){return Math.round(this.displayValue.length/this.elapsedTime*60)}get typingAccuracy(){return 0===this.displayValue.length?0:Math.round((this.displayValue.length-this.typingErrors)/this.displayValue.length*100)}generateLogFile(){const n=[`Completion Time: ${this.elapsedTime} seconds`,`Typing Accuracy: ${this.typingAccuracy}%`,`Typing Errors: ${this.typingErrors}`,`Typing Speed: ${this.typingSpeed} CH/Minute`,`Start Time: ${this.startTime}`,`End Time: ${this.endTime}`].join("\n"),i=new Blob([n],{type:"text/plain"}),c=URL.createObjectURL(i),a=document.createElement("a");a.href=c,a.download="Layout-A-Results.txt",document.body.appendChild(a),console.log(n),a.click(),document.body.removeChild(a),URL.revokeObjectURL(c)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout1"]],decls:38,vars:1,consts:[[1,"col"],["type","text",3,"value"],[1,"keyboard-container"],[1,"keyboard"],[1,"row"],[3,"click"],[1,"wide-button",3,"click"],[1,"lable"],[1,"prompt"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div"),t._UZ(2,"input",1),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"div",4)(6,"button",5),t.NdJ("click",function(){return n.handleButtonClick("7")}),t._uU(7,"7"),t.qZA(),t.TgZ(8,"button",5),t.NdJ("click",function(){return n.handleButtonClick("8")}),t._uU(9,"8"),t.qZA(),t.TgZ(10,"button",5),t.NdJ("click",function(){return n.handleButtonClick("9")}),t._uU(11,"9"),t.qZA()(),t.TgZ(12,"div",4)(13,"button",5),t.NdJ("click",function(){return n.handleButtonClick("4")}),t._uU(14,"4"),t.qZA(),t.TgZ(15,"button",5),t.NdJ("click",function(){return n.handleButtonClick("5")}),t._uU(16,"5"),t.qZA(),t.TgZ(17,"button",5),t.NdJ("click",function(){return n.handleButtonClick("6")}),t._uU(18,"6"),t.qZA()(),t.TgZ(19,"div",4)(20,"button",5),t.NdJ("click",function(){return n.handleButtonClick("1")}),t._uU(21,"1"),t.qZA(),t.TgZ(22,"button",5),t.NdJ("click",function(){return n.handleButtonClick("2")}),t._uU(23,"2"),t.qZA(),t.TgZ(24,"button",5),t.NdJ("click",function(){return n.handleButtonClick("3")}),t._uU(25,"3"),t.qZA()(),t.TgZ(26,"div",4)(27,"button",6),t.NdJ("click",function(){return n.handleButtonClick("0")}),t._uU(28,"0"),t.qZA(),t.TgZ(29,"button",5),t.NdJ("click",function(){return n.handleButtonClick(".")}),t._uU(30,"."),t.qZA()()()()(),t.TgZ(31,"div",0)(32,"p"),t._uU(33,"Layout A"),t.qZA(),t.TgZ(34,"label",7),t._uU(35,"Please enter:"),t.qZA(),t.TgZ(36,"h1",8),t._uU(37,"587942"),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("value",n.displayValue))},styles:[".keyboard-container[_ngcontent-%COMP%]{position:fixed;bottom:56px;right:56px;margin:20px}.keyboard[_ngcontent-%COMP%]{display:flex;flex-direction:column}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}button[_ngcontent-%COMP%]{width:64px;height:64px;margin:8px;border:none;background-color:#2e2e2e;color:#fff;font-size:24px;text-align:center;transition:all .2s ease-in-out}button[_ngcontent-%COMP%]:hover{background-color:#1e1e1e}button[_ngcontent-%COMP%]:active{background-color:#3e3e3e}.wide-button[_ngcontent-%COMP%]{width:144px}#output[_ngcontent-%COMP%]{font-size:36px;font-weight:700;text-align:center;margin-top:64px}input[type=text][_ngcontent-%COMP%]{text-align:end;border:none;background-color:transparent;font-size:64px;width:94%;margin-top:100px}.prompt[_ngcontent-%COMP%]{font-size:100px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;padding-left:100px}.lable[_ngcontent-%COMP%]{font-size:26px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#3e3e3e;padding-left:100px}p[_ngcontent-%COMP%]{font-size:16px;font-weight:700;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#3e3e3e;padding-left:100px}.results[_ngcontent-%COMP%]{font-size:16px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#3e3e3e;padding-left:100px;margin-top:52px}h1[_ngcontent-%COMP%]{margin:12px 0 0!important}.col[_ngcontent-%COMP%]{margin-top:20px}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(d),r.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,g]}),e})()}}]);