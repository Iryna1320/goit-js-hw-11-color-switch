(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,i){},QfWi:function(t,n,i){"use strict";i.r(n);i("XCdf"),i("L1EO")},XCdf:function(t,n){var i=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e=document.querySelector("body"),o=document.querySelector('button[data-action="start"]'),c=document.querySelector('button[data-action="stop"]'),a={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){var t,n,o=(t=0,n=i.length-1,Math.floor(Math.random()*(n-t+1)+t)),c=i[o];e.style.backgroundColor=c}),1e3))},stop:function(){clearInterval(this.intervalId),this.intervalId=null,this.isActive=!1}};o.addEventListener("click",a.start.bind(a)),c.addEventListener("click",a.stop.bind(a))}},[["QfWi",1]]]);
//# sourceMappingURL=main.469f6176deb2e66359bd.js.map