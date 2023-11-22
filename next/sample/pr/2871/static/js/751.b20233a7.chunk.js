"use strict";(self.webpackChunkreact_contoso=self.webpackChunkreact_contoso||[]).push([[751],{4751:function(e,t,o){o.r(t),o.d(t,{default:function(){return ne}});var n,r,i,a,s,l,c,d,u=o(969),p=o(505),f=o(6234),h=o(3028),m=o(1166),g=o(8079),b=o(2723),v=o(1171),y=o(9249),x=o(7371),k=o(5754),S=o(6906),I=o(3836),j=o(4761),T=o(3022),Z=o(6429),w={termsetIdRequired:"The termsetId property or termset-id attribute is required",noTermsFound:"No terms found",comboboxPlaceholder:"Select a term",loadingMessage:"Loading..."},C=o(9932),R=o(7788),P=o(6552),z=[(0,I.iv)(n||(n=(0,v.Z)(['\n:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size,14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\e70d"}.ms-icon-chevron-up::before{content:"\\e70e"}.ms-icon-contact::before{content:"\\e77b"}.ms-icon-add-friend::before{content:"\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\eb6d"}:host{--max-height:var(--taxonomy-picker-list-max-height, 380px)}:host .picker{background-color:var(--taxonomy-picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--taxonomy-picker-placeholder-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--taxonomy-picker-placeholder-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}\n'],['\n:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size,14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\\\\e70d"}.ms-icon-chevron-up::before{content:"\\\\\\e70e"}.ms-icon-contact::before{content:"\\\\\\e77b"}.ms-icon-add-friend::before{content:"\\\\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\\\\eb6d"}:host{--max-height:var(--taxonomy-picker-list-max-height, 380px)}:host .picker{background-color:var(--taxonomy-picker-background-color,transparent)}:host fluent-combobox::part(selected-value)::placeholder{color:var(--taxonomy-picker-placeholder-color,var(--input-filled-placeholder-rest))}:host fluent-combobox::part(selected-value):hover::placeholder{color:var(--taxonomy-picker-placeholder-color-hover,var(--secondary-text-hover-color))}[dir=rtl] .picker{direction:rtl}\n'])))],N=o(7724),U=o(8097),q=o(1734),F=function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},E=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function a(e){try{l(n.next(e))}catch(t){i(t)}}function s(e){try{l(n.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))},M=function(e){(0,k.Z)(o,e);var t=(0,S.Z)(o);function o(){var e;return(0,y.Z)(this,o),(e=t.call(this)).version="beta",e.position="below",e.cacheEnabled=!1,e.cacheInvalidationPeriod=0,e.placeholder=e.strings.comboboxPlaceholder,e.isRefreshing=!1,e.noTerms=!1,e}return(0,x.Z)(o,[{key:"strings",get:function(){return w}},{key:"defaultSelectedTermId",get:function(){return this._defaultSelectedTermId},set:function(e){e!==this._defaultSelectedTermId&&(this._defaultSelectedTermId=e,this.requestStateUpdate(!0))}},{key:"selectedTerm",get:function(){return this._selectedTerm},set:function(e){this._selectedTerm=e}},{key:"refresh",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isRefreshing=!0,e&&this.clearState(),this.requestStateUpdate(e)}},{key:"clearState",value:function(){this.terms=null,this.error=null,this.noTerms=!1}},{key:"render",value:function(){var e;return this.isLoadingState&&!this.terms?this.renderLoading():this.error?this.renderError():this.noTerms?this.renderNoData():(null===(e=this.terms)||void 0===e?void 0:e.length)>0?this.renderTaxonomyPicker():this.renderGet()}},{key:"renderLoading",value:function(){return this.renderTemplate("loading",null,"loading")||(0,T.b)(r||(r=(0,v.Z)(['\n        <div class="message-parent">\n          <mgt-spinner></mgt-spinner>\n          <div label="loading-text" aria-label="loading">\n            ',"\n          </div>\n        </div>\n      "])),this.strings.loadingMessage)}},{key:"renderError",value:function(){return this.renderTemplate("error",null,"error")||(0,I.dy)(i||(i=(0,v.Z)(["\n              <span>\n                ","\n            </span>\n          "])),this.error)}},{key:"renderNoData",value:function(){return this.renderTemplate("no-data",null)||(0,I.dy)(a||(a=(0,v.Z)(["\n            <span>\n              ","\n            </span>\n          "])),this.strings.noTermsFound)}},{key:"renderTaxonomyPicker",value:function(){var e=this;return(0,T.b)(s||(s=(0,v.Z)(['\n      <fluent-combobox class="taxonomy-picker" autocomplete="both" placeholder='," position="," ?disabled=",">\n        ","\n      </fluent-combobox>\n     "])),this.placeholder,this.position,this.disabled,this.terms.map((function(t){return e.renderTaxonomyPickerItem(t)})))}},{key:"renderTaxonomyPickerItem",value:function(e){var t=this,o=this.defaultSelectedTermId&&this.defaultSelectedTermId===e.id;return(0,I.dy)(l||(l=(0,v.Z)(["\n        <fluent-option value="," ?selected="," @click=","> "," </fluent-option>\n        "])),e.id,o,(function(o){return t.handleClick(o,e)}),this.renderTemplate("term",{term:e},e.id)||e.labels[0].name)}},{key:"renderGet",value:function(){if(!this.termsetId)return(0,I.dy)(c||(c=(0,v.Z)(["\n            <span>\n                ","\n            </span>\n            "])),this.strings.termsetIdRequired);var e="/termStore/sets/".concat(this.termsetId,"/children");return this.termId&&(e="/termStore/sets/".concat(this.termsetId,"/terms/").concat(this.termId,"/children")),this.siteId&&(e="/sites/".concat(this.siteId).concat(e)),e+="?$select=id,labels,descriptions,properties",(0,T.b)(d||(d=(0,v.Z)(['\n      <mgt-get\n        class="mgt-get"\n        resource=',"\n        version=","\n        scopes=","\n        ?cache-enabled=","\n        ?cache-invalidation-period=",">\n      </mgt-get>"])),e,this.version,["TermStore.Read.All"],this.cacheEnabled,this.cacheInvalidationPeriod)}},{key:"loadState",value:function(){return L(this,void 0,void 0,(0,b.Z)().mark((function e(){var t=this;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.terms||this.renderRoot.querySelector(".mgt-get").addEventListener("dataChange",(function(e){return t.handleDataChange(e)})),this.isRefreshing=!1,e.next=4,Promise.resolve();case 4:case"end":return e.stop()}}),e,this)})))}},{key:"handleDataChange",value:function(e){var t=this,o=e.detail.error?e.detail.error:null;if(o)this.error=o;else{this.locale&&(this.locale=this.locale.toLowerCase());var n=e.detail.response.value.map((function(e){var o=e.labels;if(o&&o.length>0&&t.locale){var n=o.find((function(e){return e.languageTag.toLowerCase()===t.locale}));n&&(e.labels=[n].concat((0,g.Z)(o.filter((function(e){return e.languageTag.toLowerCase()!==t.locale})))))}return e}));this.terms=n,0===n.length&&(this.noTerms=!0)}}},{key:"handleClick",value:function(e,t){this.selectedTerm=t,this.fireCustomEvent("selectionChanged",t)}}],[{key:"styles",get:function(){return z}}]),o}(Z.h);F([(0,j.Cb)({attribute:"term-set-id",type:String}),E("design:type",String)],M.prototype,"termsetId",void 0),F([(0,j.Cb)({attribute:"term-id",type:String}),E("design:type",String)],M.prototype,"termId",void 0),F([(0,j.Cb)({attribute:"site-id",type:String}),E("design:type",String)],M.prototype,"siteId",void 0),F([(0,j.Cb)({attribute:"locale",type:String}),E("design:type",String)],M.prototype,"locale",void 0),F([(0,j.Cb)({attribute:"version",type:String}),E("design:type",Object)],M.prototype,"version",void 0),F([(0,j.Cb)({attribute:"placeholder",type:String}),E("design:type",String)],M.prototype,"placeholder",void 0),F([(0,j.Cb)({attribute:"position",type:String,converter:function(e){return"above"===e?"above":"below"}}),E("design:type",String)],M.prototype,"position",void 0),F([(0,j.Cb)({attribute:"default-selected-term-id",type:String}),E("design:type",String),E("design:paramtypes",[String])],M.prototype,"defaultSelectedTermId",null),F([(0,j.Cb)({attribute:"selected-term",type:Object}),E("design:type",Object),E("design:paramtypes",[Object])],M.prototype,"selectedTerm",null),F([(0,j.Cb)({attribute:"disabled",type:Boolean}),E("design:type",Boolean)],M.prototype,"disabled",void 0),F([(0,j.Cb)({attribute:"cache-enabled",type:Boolean}),E("design:type",Object)],M.prototype,"cacheEnabled",void 0),F([(0,j.Cb)({attribute:"cache-invalidation-period",type:Number}),E("design:type",Object)],M.prototype,"cacheInvalidationPeriod",void 0),F([(0,j.SB)(),E("design:type",Array)],M.prototype,"terms",void 0),F([(0,j.SB)(),E("design:type",Boolean)],M.prototype,"noTerms",void 0);var B=(0,o(7908).$)("taxonomy-picker",(function(){(0,P.J)(C.ee,R.P),(0,q.Y)(),(0,N.xV)(),(0,U.R)("taxonomy-picker",M)})),D=o(7780),H=o(4220),O=o(9591),W=o(767),_=o(1972),$=o(3823),A=o(4532),G=o(5395),Q=o(7234),V=o(2309),Y=o(2514),J=o(710),K=o(7574),X=function(){return(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(m.d,{resource:"termStore/groups",version:"beta",children:(0,K.jsx)(te,{template:"default"})})})},ee=(0,D.Z)({main:(0,h.Z)((0,h.Z)({},H.q5.gap("36px")),{},{display:"flex",flexDirection:"column",flexWrap:"wrap"}),title:(0,h.Z)({},H.q5.margin(0,0,"12px")),description:(0,h.Z)({},H.q5.margin(0,0,"12px")),card:(0,h.Z)({width:"480px",maxWidth:"100%",height:"fit-content"},H.q5.margin("12px",0)),caption:{color:O.T.colorNeutralForeground3},icon:{width:"24px",height:"24px"},text:(0,h.Z)({},H.q5.margin(0)),groupPanel:(0,h.Z)({},H.q5.margin("12px","24px")),termPanel:(0,h.Z)({},H.q5.margin("12px","36px"))}),te=function(e){var t=ee(),o=u.useState(e.dataContext.value),n=(0,f.Z)(o,1)[0];return(0,K.jsx)(W.U,{collapsible:!0,children:n.map((function(e){return(0,K.jsxs)(_.Q,{value:e.id,children:[(0,K.jsx)($._,{icon:(0,K.jsx)(J.aMl,{}),children:e.displayName}),(0,K.jsx)(A.H,{className:t.groupPanel,children:(0,K.jsx)(m.d,{resource:"termStore/groups/".concat(e.id,"/sets"),version:"beta",children:(0,K.jsx)(oe,{template:"default"})})})]},e.id)}))})},oe=function(e){var t=ee(),o=u.useState(e.dataContext.value),n=(0,f.Z)(o,1)[0],r=u.useState(null),i=(0,f.Z)(r,2),a=i[0],s=i[1];return(0,K.jsx)(W.U,{collapsible:!0,onToggle:function(){return s(null)},children:n.map((function(e){var o,n,r;return(0,K.jsxs)(_.Q,{value:e.id,children:[(0,K.jsx)($._,{children:e.localizedNames[0].name}),(0,K.jsxs)(A.H,{className:t.termPanel,children:[(0,K.jsx)(B,{termsetId:e.id,selectionChanged:function(e){return s(e.detail)}}),a&&(0,K.jsxs)(G.Z,{className:t.card,children:[(0,K.jsx)(Q.O,{image:(0,K.jsx)(J._Ic,{className:t.icon}),header:(0,K.jsx)(V.x,{weight:"semibold",children:null===(o=a.labels)||void 0===o?void 0:o[0].name}),description:(0,K.jsx)(Y.d,{className:t.caption,children:a.id})}),(null===(n=a.descriptions)||void 0===n?void 0:n.length)>0&&(0,K.jsx)("p",{className:t.text,children:null===(r=a.descriptions)||void 0===r?void 0:r[0].description})]})]})]},e.id)}))})},ne=function(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(p.m,{title:"Taxonomy Explorer",description:"Use this taxonomy explorer to see all term groups, term sets and terms available"}),(0,K.jsx)(X,{})]})}},1734:function(e,t,o){o.d(t,{Y:function(){return h}});var n,r,i=o(1171),a=o(9249),s=o(7371),l=o(5754),c=o(6906),d=o(3836),u=o(524),p=[(0,d.iv)(n||(n=(0,i.Z)(['\n:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size,14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\e70d"}.ms-icon-chevron-up::before{content:"\\e70e"}.ms-icon-contact::before{content:"\\e77b"}.ms-icon-add-friend::before{content:"\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\eb6d"}\n'],['\n:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size,14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\\\\e70d"}.ms-icon-chevron-up::before{content:"\\\\\\e70e"}.ms-icon-contact::before{content:"\\\\\\e77b"}.ms-icon-add-friend::before{content:"\\\\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\\\\eb6d"}\n'])))],f=o(8097),h=function(){return(0,f.R)("spinner",m)},m=function(e){(0,l.Z)(o,e);var t=(0,c.Z)(o);function o(){return(0,a.Z)(this,o),t.apply(this,arguments)}return(0,s.Z)(o,[{key:"render",value:function(){return(0,d.dy)(r||(r=(0,i.Z)(['<fluent-progress-ring title="spinner"></fluent-progress-ring>'])))}}],[{key:"styles",get:function(){return p}}]),o}(u.b)},1166:function(e,t,o){o.d(t,{d:function(){return r}});var n=o(7724),r=(0,o(7908).$)("get",n.xV)}}]);
//# sourceMappingURL=751.b20233a7.chunk.js.map