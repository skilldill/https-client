(this["webpackJsonphttps-client"]=this["webpackJsonphttps-client"]||[]).push([[0],{188:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return a}));var r=n(31),a=function(t,e,n,a,i){var c=t.ownerDocument.defaultView;return Object(r.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;a(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,r=e/n,a=t.velocityX,o=n/2,s=a>=0&&(a>.2||t.deltaX>o),u=(s?1-r:r)*n,h=0;if(u>5){var d=u/Math.abs(a);h=Math.min(d,540)}i(s,r<=0?.01:r,h)}})}}}]);
//# sourceMappingURL=0.cc666bc3.chunk.js.map