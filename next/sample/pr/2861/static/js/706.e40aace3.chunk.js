"use strict";(self.webpackChunkreact_contoso=self.webpackChunkreact_contoso||[]).push([[706],{7940:function(n,e,t){t.d(e,{g:function(){return I}});var o=t(9249),r=t(7371),i=t(5754),l=t(6906),a=t(6647),c=t(9604),d=t(9763),s=t(7450),h=t(5453),u=function(n){(0,i.Z)(t,n);var e=(0,l.Z)(t);function t(){return(0,o.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t)}(t(9350).I),v=function(n){(0,i.Z)(t,n);var e=(0,l.Z)(t);function t(){var n;return(0,o.Z)(this,t),(n=e.apply(this,arguments)).proxy=document.createElement("input"),n}return(0,r.Z)(t)}((0,h.V2)(u)),b=function(n){(0,i.Z)(t,n);var e=(0,l.Z)(t);function t(){var n;return(0,o.Z)(this,t),(n=e.call(this)).initialValue="on",n.indeterminate=!1,n.keypressHandler=function(e){if(!n.readOnly&&e.key===s.BI)n.indeterminate&&(n.indeterminate=!1),n.checked=!n.checked},n.clickHandler=function(e){n.disabled||n.readOnly||(n.indeterminate&&(n.indeterminate=!1),n.checked=!n.checked)},n.proxy.setAttribute("type","checkbox"),n}return(0,r.Z)(t,[{key:"readOnlyChanged",value:function(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}]),t}(v);(0,a.gn)([(0,c.Lj)({attribute:"readonly",mode:"boolean"})],b.prototype,"readOnly",void 0),(0,a.gn)([d.LO],b.prototype,"defaultSlottedNodes",void 0),(0,a.gn)([d.LO],b.prototype,"indeterminate",void 0);var f,k,p,g=t(1171),m=t(982),y=t(2474),H=t(3032),x=t(4047),A=t(5161),_=t(2607),Z=t(4101),w=t(287),$=t(8697),O=t(2132),F=t(1116),B=t(7960),I=b.compose({baseName:"checkbox",template:function(n,e){return(0,m.d)(f||(f=(0,g.Z)(['\n    <template\n        role="checkbox"\n        aria-checked="','"\n        aria-required="','"\n        aria-disabled="','"\n        aria-readonly="','"\n        tabindex="','"\n        @keypress="','"\n        @click="','"\n        class="'," "," ",'"\n    >\n        <div part="control" class="control">\n            <slot name="checked-indicator">\n                ','\n            </slot>\n            <slot name="indeterminate-indicator">\n                ','\n            </slot>\n        </div>\n        <label\n            part="label"\n            class="','"\n        >\n            <slot ',"></slot>\n        </label>\n    </template>\n"])),(function(n){return n.checked}),(function(n){return n.required}),(function(n){return n.disabled}),(function(n){return n.readOnly}),(function(n){return n.disabled?null:0}),(function(n,e){return n.keypressHandler(e.event)}),(function(n,e){return n.clickHandler(e.event)}),(function(n){return n.readOnly?"readonly":""}),(function(n){return n.checked?"checked":""}),(function(n){return n.indeterminate?"indeterminate":""}),e.checkedIndicator||"",e.indeterminateIndicator||"",(function(n){return n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}),(0,y.Q)("defaultSlottedNodes"))},styles:function(n,e){return(0,H.i)(k||(k=(0,g.Z)(["\n    "," :host {\n      align-items: center;\n      outline: none;\n      "," user-select: none;\n    }\n\n    .control {\n      position: relative;\n      width: calc(("," / 2 + ",") * 1px);\n      height: calc(("," / 2 + ",") * 1px);\n      box-sizing: border-box;\n      border-radius: calc("," * 1px);\n      border: calc("," * 1px) solid ",";\n      background: ",";\n      cursor: pointer;\n    }\n\n    .label__hidden {\n      display: none;\n      visibility: hidden;\n    }\n\n    .label {\n      ","\n      color: ",";\n      "," padding-inline-start: calc("," * 2px + 2px);\n      margin-inline-end: calc("," * 2px + 2px);\n      cursor: pointer;\n    }\n\n    slot[name='checked-indicator'],\n    slot[name='indeterminate-indicator'] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 100%;\n      height: 100%;\n      fill: ",";\n      opacity: 0;\n      pointer-events: none;\n    }\n\n    slot[name='indeterminate-indicator'] {\n      position: absolute;\n      top: 0;\n    }\n\n    :host(.checked) slot[name='checked-indicator'],\n    :host(.checked) slot[name='indeterminate-indicator'] {\n      fill: ",";\n    }\n\n    :host(:not(.disabled):hover) .control {\n      background: ",";\n      border-color: ",";\n    }\n\n    :host(:not(.disabled):active) .control {\n      background: ",";\n      border-color: ",";\n    }\n\n    :host(:",") .control {\n      background: ",";\n      ","\n    }\n\n    :host(.checked) .control {\n      background: ",";\n      border-color: transparent;\n    }\n\n    :host(.checked:not(.disabled):hover) .control {\n      background: ",";\n      border-color: transparent;\n    }\n\n    :host(.checked:not(.disabled):active) .control {\n      background: ",";\n      border-color: transparent;\n    }\n\n    :host(.disabled) .label,\n    :host(.readonly) .label,\n    :host(.readonly) .control,\n    :host(.disabled) .control {\n      cursor: ",";\n    }\n\n    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],\n    :host(.indeterminate) slot[name='indeterminate-indicator'] {\n      opacity: 1;\n    }\n\n    :host(.disabled) {\n      opacity: ",";\n    }\n  "])),(0,x.j)("inline-flex"),"",$.i,O._5n,$.i,O._5n,O.UWU,O.Han,O.rU8,O.pB6,F.cX,O.CHi,"",O._5n,O._5n,O.CHi,O.w41,O.vFq,O.gKw,O.bWE,O.ekh,A.b,O.W3V,B.H,O.Avx,O.OCG,O.UEO,_.H,O.VFZ).withBehaviors((0,Z.vF)((0,H.i)(p||(p=(0,g.Z)(["\n        .control {\n          border-color: ",";\n          background: ",";\n        }\n        :host(:not(.disabled):hover) .control,\n        :host(:not(.disabled):active) .control {\n          border-color: ",";\n          background: ",";\n        }\n        slot[name='checked-indicator'],\n        slot[name='indeterminate-indicator'] {\n          fill: ",";\n        }\n        :host(:",") .control {\n          forced-color-adjust: none;\n          outline-color: ",";\n          background: ",";\n          border-color: ",";\n        }\n        :host(.checked) .control {\n          background: ",";\n          border-color: ",";\n        }\n        :host(.checked:not(.disabled):hover) .control,\n        :host(.checked:not(.disabled):active) .control {\n          background: ",";\n          border-color: ",";\n        }\n        :host(.checked) slot[name='checked-indicator'],\n        :host(.checked) slot[name='indeterminate-indicator'] {\n          fill: ",";\n        }\n        :host(.checked:hover ) .control slot[name='checked-indicator'],\n        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {\n          fill: ",";\n        }\n        :host(.disabled) {\n          opacity: 1;\n        }\n        :host(.disabled) .control {\n          border-color: ",";\n          background: ",";\n        }\n        :host(.disabled) slot[name='checked-indicator'],\n        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],\n        :host(.disabled) slot[name='indeterminate-indicator'],\n        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {\n          fill: ",";\n        }\n      "])),w.H.FieldText,w.H.Field,w.H.Highlight,w.H.Field,w.H.FieldText,A.b,w.H.FieldText,w.H.Field,w.H.Highlight,w.H.Highlight,w.H.Highlight,w.H.HighlightText,w.H.Highlight,w.H.HighlightText,w.H.Highlight,w.H.GrayText,w.H.Field,w.H.GrayText)))},checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '})},1687:function(n,e,t){t.d(e,{r:function(){return m}});var o=t(6234),r=t(1361),i=t(9249),l=t(7371),a=t(1987),c=t(5754),d=t(6906),s=t(7910),h=t(3026),u=s.Al.D,v=function(){return document.createComment("")},b=function(n,e,t){var o=n._$AA.parentNode,r=void 0===e?n._$AB:e._$AA;if(void 0===t){var i=o.insertBefore(v(),r),l=o.insertBefore(v(),r);t=new u(i,l,n,n.options)}else{var a,c,d,s=t._$AB.nextSibling,h=t._$AM,b=h!==n;if(b)null!==(a=(c=t)._$AQ)&&void 0!==a&&a.call(c,n),t._$AM=n,void 0!==t._$AP&&(d=n._$AU)!==h._$AU&&t._$AP(d);if(s!==r||b)for(var f=t._$AA;f!==s;){var k=f.nextSibling;o.insertBefore(f,r),f=k}}return t},f=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;return n._$AI(e,t),n},k={},p=function(n){var e;null===(e=n._$AP)||void 0===e||e.call(n,!1,!0);for(var t=n._$AA,o=n._$AB.nextSibling;t!==o;){var r=t.nextSibling;t.remove(),t=r}},g=function(n,e,t){for(var o=new Map,r=e;r<=t;r++)o.set(n[r],r);return o},m=(0,h.XM)(function(n){(0,c.Z)(t,n);var e=(0,d.Z)(t);function t(n){var o;if((0,i.Z)(this,t),o=e.call(this,n),n.type!==h.pX.CHILD)throw Error("repeat() can only be used in text expressions");return(0,a.Z)(o)}return(0,l.Z)(t,[{key:"ht",value:function(n,e,t){var o;void 0===t?t=e:void 0!==e&&(o=e);var i,l=[],a=[],c=0,d=(0,r.Z)(n);try{for(d.s();!(i=d.n()).done;){var s=i.value;l[c]=o?o(s,c):c,a[c]=t(s,c),c++}}catch(h){d.e(h)}finally{d.f()}return{values:a,keys:l}}},{key:"render",value:function(n,e,t){return this.ht(n,e,t).values}},{key:"update",value:function(n,e){var t,r=(0,o.Z)(e,3),i=r[0],l=r[1],a=r[2],c=n._$AH,d=this.ht(i,l,a),h=d.values,u=d.keys;if(!Array.isArray(c))return this.dt=u,h;for(var v,m,y=null!==(t=this.dt)&&void 0!==t?t:this.dt=[],H=[],x=0,A=c.length-1,_=0,Z=h.length-1;x<=A&&_<=Z;)if(null===c[x])x++;else if(null===c[A])A--;else if(y[x]===u[_])H[_]=f(c[x],h[_]),x++,_++;else if(y[A]===u[Z])H[Z]=f(c[A],h[Z]),A--,Z--;else if(y[x]===u[Z])H[Z]=f(c[x],h[Z]),b(n,H[Z+1],c[x]),x++,Z--;else if(y[A]===u[_])H[_]=f(c[A],h[_]),b(n,c[x],c[A]),A--,_++;else if(void 0===v&&(v=g(u,_,Z),m=g(y,x,A)),v.has(y[x]))if(v.has(y[A])){var w=m.get(u[_]),$=void 0!==w?c[w]:null;if(null===$){var O=b(n,c[x]);f(O,h[_]),H[_]=O}else H[_]=f($,h[_]),b(n,c[x],$),c[w]=null;_++}else p(c[A]),A--;else p(c[x]),x++;for(;_<=Z;){var F=b(n,H[Z+1]);f(F,h[_]),H[_++]=F}for(;x<=A;){var B=c[x++];null!==B&&p(B)}return this.dt=u,function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;n._$AH=e}(n,H),s.Jb}}]),t}(h.Xe))}}]);
//# sourceMappingURL=706.e40aace3.chunk.js.map