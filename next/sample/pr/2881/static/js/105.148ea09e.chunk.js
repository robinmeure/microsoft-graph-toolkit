"use strict";(self.webpackChunkreact_contoso=self.webpackChunkreact_contoso||[]).push([[105],{90505:function(e,t,n){n.d(t,{m:function(){return o}});n(30969);var i=n(47780),r=n(73583),s=n(37574),a=(0,i.Z)({divider:{alignItems:"self-start",paddingTop:"20px",marginBottom:"20px"}}),o=function(e){var t=a();return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:e.title}),(0,s.jsx)("div",{children:e.description}),(0,s.jsx)(r.i,{className:t.divider})]})}},57724:function(e,t,n){n.d(t,{xV:function(){return Q}});var i,r,s,a,o,l,c=n(32723),u=n(68079),p=n(71171),h=n(9249),d=n(87371),f=n(93069),v=n(95058),g=n(45754),b=n(86906),y=n(73836),m=n(84761),x=n(46222),k=n(72742),C=n(42292),O=n(98556),P=n(78402),j=n(66429),R=n(65854),w=n(47425),S=n(72097),Z=n(58097),T=function(e,t,n,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(s<3?r(a):s>3?r(t,n,a):r(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},E=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function a(e){try{l(i.next(e))}catch(t){s(t)}}function o(e){try{l(i.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}l((i=i.apply(e,t||[])).next())}))},I=function(e){return Array.isArray(null===e||void 0===e?void 0:e.value)};!function(e){e.json="json",e.image="image"}(l||(l={}));var N=function(){return x.Q.config.response.isEnabled&&x.Q.config.isEnabled},Q=function(){return(0,Z.R)("get",U)},U=function(e){(0,g.Z)(n,e);var t=(0,b.Z)(n);function n(){var e;return(0,h.Z)(this,n),(e=t.apply(this,arguments)).scopes=[],e.version="v1.0",e.type=l.json,e.maxPages=3,e.pollingRate=0,e.cacheEnabled=!1,e.cacheInvalidationPeriod=0,e.isPolling=!1,e.isRefreshing=!1,e}return(0,d.Z)(n,[{key:"attributeChangedCallback",value:function(e,t,i){(0,f.Z)((0,v.Z)(n.prototype),"attributeChangedCallback",this).call(this,e,t,i),this.requestStateUpdate()}},{key:"refresh",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isRefreshing=!0,e&&this.clearState(),this.requestStateUpdate(e)}},{key:"clearState",value:function(){this.response=null}},{key:"render",value:function(){var e=this;if(this.isLoadingState&&!this.response)return this.renderTemplate("loading",null);if(this.error)return this.renderTemplate("error",this.error);if(this.hasTemplate("value")&&I(this.response)){var t;if(I(this.response)){var n=null;this.isLoadingState&&!this.isPolling&&(n=this.renderTemplate("loading",null)),t=(0,y.dy)(i||(i=(0,p.Z)(["\n          "," ","\n        "])),this.response.value.map((function(t){return e.renderTemplate("value",t,t.id)})),n)}else t=this.renderTemplate("value",this.response);if(this.hasTemplate("default")){var l=this.renderTemplate("default",this.response);return this.templates.value.templateOrder>this.templates.default.templateOrder?(0,y.dy)(r||(r=(0,p.Z)(["\n            ","","\n          "])),l,t):(0,y.dy)(s||(s=(0,p.Z)(["\n            ","","\n          "])),t,l)}return t}return this.response?this.renderTemplate("default",this.response)||(0,y.dy)(a||(a=(0,p.Z)([""]))):this.hasTemplate("no-data")?this.renderTemplate("no-data",null):(0,y.dy)(o||(o=(0,p.Z)([""])))}},{key:"loadState",value:function(){var e,t,n;return L(this,void 0,void 0,(0,c.Z)().mark((function i(){var r,s,a,o,p,h,d,f,v,g,b,y,m,j,Z,T,E,L=this;return(0,c.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r=k.C.globalProvider,this.error=null,r&&r.state===C.Aw.SignedIn){i.next=4;break}return i.abrupt("return");case 4:if(!this.resource){i.next=75;break}if(i.prev=5,a="".concat(this.version).concat(this.resource),o=null,!this.shouldRetrieveCache()){i.next=19;break}if(s=x.Q.getCache(S.O.get,S.O.get.stores.responses),!N()){i.next=16;break}return i.next=13,s.getValue(a);case 13:i.t0=i.sent,i.next=17;break;case 16:i.t0=null;case 17:(p=i.t0)&&(this.cacheInvalidationPeriod||x.Q.config.response.invalidationPeriod||x.Q.config.defaultInvalidationPeriod)>Date.now()-p.timeCached&&(o=JSON.parse(p.response));case 19:if(o){i.next=66;break}if(h=this.resource,d=!1,(null===(e=this.response)||void 0===e?void 0:e["@odata.deltaLink"])?(h=this.response["@odata.deltaLink"],d=!0):d=new URL(h,"https://graph.microsoft.com").pathname.endsWith("delta"),f=r.graph.forComponent(this),v=f.api(h).version(this.version),(null===(t=this.scopes)||void 0===t?void 0:t.length)&&(v=v.middlewareOptions(O.z.apply(void 0,(0,u.Z)(this.scopes)))),this.type!==l.json){i.next=46;break}return i.next=29,v.get();case 29:if(o=i.sent,d&&I(this.response)&&I(o)&&(g=o.value,o.value=this.response.value.concat(g)),this.isPolling||(0,P.f)(this.response,o)||(this.response=o),!I(o)||!o["@odata.nextLink"]){i.next=44;break}b=1,y=o;case 35:if(!(b<this.maxPages||this.maxPages<=0||d&&this.pollingRate)||!(null===y||void 0===y?void 0:y["@odata.nextLink"])){i.next=44;break}return b++,m=y["@odata.nextLink"].split(this.version)[1],i.next=40,f.client.api(m).version(this.version).get();case 40:y=i.sent,(null===(n=null===y||void 0===y?void 0:y.value)||void 0===n?void 0:n.length)&&(y.value=o.value.concat(y.value),o=y,this.isPolling||(this.response=o)),i.next=35;break;case 44:i.next=62;break;case 46:if(-1!==this.resource.indexOf("/photo/$value")||-1!==this.resource.indexOf("/thumbnails/")){i.next=48;break}throw new Error("Only /photo/$value and /thumbnails/ endpoints support the image type");case 48:if(!(this.resource.indexOf("/photo/$value")>-1)){i.next=56;break}return Z=this.resource.replace("/photo/$value",""),i.next=52,(0,R.E0)(f,Z,this.scopes);case 52:(T=i.sent)&&(j=T.photo),i.next=61;break;case 56:if(!(this.resource.indexOf("/thumbnails/")>-1)){i.next=61;break}return i.next=59,(0,w.mp)(f,this.resource,this.scopes);case 59:(E=i.sent)&&(j=E.thumbnail);case 61:j&&(o={image:j});case 62:if(!this.shouldUpdateCache()||!o){i.next=66;break}return s=x.Q.getCache(S.O.get,S.O.get.stores.responses),i.next=66,s.putValue(a,{response:JSON.stringify(o)});case 66:(0,P.f)(this.response,o)||(this.response=o),i.next=72;break;case 69:i.prev=69,i.t1=i.catch(5),this.error=i.t1;case 72:this.response&&(this.error=null,this.pollingRate&&setTimeout((function(){L.isPolling=!0,L.loadState().finally((function(){L.isPolling=!1}))}),this.pollingRate)),i.next=76;break;case 75:this.response=null;case 76:this.isRefreshing=!1,this.fireCustomEvent("dataChange",{response:this.response,error:this.error});case 78:case"end":return i.stop()}}),i,this,[[5,69]])})))}},{key:"shouldRetrieveCache",value:function(){return N()&&this.cacheEnabled&&!(this.isRefreshing||this.isPolling)}},{key:"shouldUpdateCache",value:function(){return N()&&this.cacheEnabled}}]),n}(j.h);T([(0,m.Cb)({attribute:"resource",reflect:!0,type:String}),E("design:type",String)],U.prototype,"resource",void 0),T([(0,m.Cb)({attribute:"scopes",converter:function(e,t){return e?e.toLowerCase().split(","):null},reflect:!0}),E("design:type",Array)],U.prototype,"scopes",void 0),T([(0,m.Cb)({attribute:"version",reflect:!0,type:String}),E("design:type",Object)],U.prototype,"version",void 0),T([(0,m.Cb)({attribute:"type",reflect:!0,type:l}),E("design:type",String)],U.prototype,"type",void 0),T([(0,m.Cb)({attribute:"max-pages",reflect:!0,type:Number}),E("design:type",Object)],U.prototype,"maxPages",void 0),T([(0,m.Cb)({attribute:"polling-rate",reflect:!0,type:Number}),E("design:type",Object)],U.prototype,"pollingRate",void 0),T([(0,m.Cb)({attribute:"cache-enabled",reflect:!0,type:Boolean}),E("design:type",Object)],U.prototype,"cacheEnabled",void 0),T([(0,m.Cb)({attribute:"cache-invalidation-period",type:Number}),E("design:type",Object)],U.prototype,"cacheInvalidationPeriod",void 0),T([(0,m.Cb)({attribute:!1}),E("design:type",Object)],U.prototype,"response",void 0),T([(0,m.Cb)({attribute:!1}),E("design:type",Object)],U.prototype,"error",void 0)}}]);
//# sourceMappingURL=105.148ea09e.chunk.js.map