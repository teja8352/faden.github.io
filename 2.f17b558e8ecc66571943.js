(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{UxIp:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=t("k0Fy"),a=t("67Y/"),i=Object.assign||function(l){for(var n,t=1,e=arguments.length;t<e;t++)for(var u in n=arguments[t])Object.prototype.hasOwnProperty.call(n,u)&&(l[u]=n[u]);return l},s=function(){function l(l){this._firebaseService=l,this.scheduleListLength=null,this.playlistListLength=null,this.mediaListLength=null,this.subtitle="This is some text within a card block."}return l.prototype.ngAfterViewInit=function(){this.getSchedule(),this.getPlaylist(),this.getMediaList()},l.prototype.getSchedule=function(){var l=this;this._firebaseService.getSchedules().snapshotChanges().pipe(Object(a.a)(function(l){return l.map(function(l){return i({key:l.payload.key},l.payload.val())})})).subscribe(function(n){console.log("schedule List::::\n",n.length),l.scheduleListLength=n.length})},l.prototype.getMediaList=function(){var l=this;this._firebaseService.getFileUploads().snapshotChanges().pipe(Object(a.a)(function(l){return l.map(function(l){return i({key:l.payload.key},l.payload.val())})})).subscribe(function(n){console.log("media List::::\n",n.length),l.mediaListLength=n.length})},l.prototype.getPlaylist=function(){var l=this;this._firebaseService.getPlaylists().snapshotChanges().pipe(Object(a.a)(function(l){return l.map(function(l){return i({key:l.payload.key},l.payload.val())})})).subscribe(function(n){console.log("playlist List::::\n",n.length),l.playlistListLength=n.length})},l}(),o={title:"Dashboard",urls:[{title:"Dashboard",url:"/dashboard"},{title:"Dashboard"}]},r=function(){},c=e.Ma({encapsulation:2,styles:[],data:{}});function h(l){return e.ib(0,[(l()(),e.Oa(0,0,null,null,8,"div",[["class","row h-100 w-100 bg-white"]],null,null,null,null,null)),(l()(),e.Oa(1,0,null,null,7,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e.Oa(2,0,null,null,6,"div",[["class","row h-100"]],null,null,null,null,null)),(l()(),e.Oa(3,0,null,null,1,"div",[["class","col-6 m-1 mx-auto h-25 rounded shadow-sm"]],null,null,null,null,null)),(l()(),e.gb(4,null,[" "," "])),(l()(),e.Oa(5,0,null,null,1,"div",[["class","col-6 m-1 mx-auto h-25 rounded shadow-sm"]],null,null,null,null,null)),(l()(),e.gb(6,null,[" "," "])),(l()(),e.Oa(7,0,null,null,1,"div",[["class","col-12 m-1 h-50 rounded shadow-sm"]],null,null,null,null,null)),(l()(),e.gb(8,null,[" "," "]))],null,function(l,n){var t=n.component;l(n,4,0,t.playlistListLength),l(n,6,0,t.scheduleListLength),l(n,8,0,t.mediaListLength)})}var p=e.Ka("ng-component",s,function(l){return e.ib(0,[(l()(),e.Oa(0,0,null,null,1,"ng-component",[],null,null,null,h,c)),e.Na(1,4243456,null,0,s,[u.a],null,null)],null,null)},{},{},[]),d=t("gIcY"),g=t("Ip0R"),b=t("ZYCi");t.d(n,"StarterModuleNgFactory",function(){return f});var f=e.La(r,[],function(l){return e.Va([e.Wa(512,e.j,e.Aa,[[8,[p]],[3,e.j],e.w]),e.Wa(4608,d.r,d.r,[]),e.Wa(4608,g.n,g.m,[e.t,[2,g.A]]),e.Wa(1073742336,d.p,d.p,[]),e.Wa(1073742336,d.e,d.e,[]),e.Wa(1073742336,g.b,g.b,[]),e.Wa(1073742336,b.r,b.r,[[2,b.w],[2,b.o]]),e.Wa(1073742336,r,r,[]),e.Wa(1024,b.m,function(){return[[{path:"",data:o,component:s}]]},[])])})}}]);