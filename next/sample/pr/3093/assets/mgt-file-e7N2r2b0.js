import{W as b,a1 as x,X as P,Y as c,a2 as S,a3 as w,aR as D,cw as T,a0 as l,cy as _}from"./App-DYPcBQlM.js";import{z as $,A as z,B as k,C as M,D as B,E as F,F as j,H as O,I as C,J as R,K as U,L as N,M as L,N as E}from"./graph.files-DFMGAvoK.js";import{b as Q,a as v}from"./index-AoubP4US.js";const W=[b`
:host([hidden]){display:none}:host{display:block;font-family:var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif);font-size:var(--default-font-size, 14px);--theme-primary-color:#0078d7;--theme-dark-color:#005a9e}:focus-visible{outline-color:var(--focus-ring-color,Highlight);outline-color:var(--focus-ring-color,-webkit-focus-ring-color);outline-style:var(--focus-ring-style,auto)}.ms-icon{display:inline-block;font-family:FabricMDL2Icons;font-style:normal;font-weight:400;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:4px 0}.error{background-color:#fde7e9;padding-block:8px;padding-inline:8px 12px}.ms-icon-chevron-down::before{content:"\\\e70d"}.ms-icon-chevron-up::before{content:"\\\e70e"}.ms-icon-contact::before{content:"\\\e77b"}.ms-icon-add-friend::before{content:"\\\e8fa"}.ms-icon-outlook-logo-inverser::before{content:"\\\eb6d"}:host{font-size:var(--default-font-size);font-weight:var(--default-font-weight,400);border:var(--file-border,1px solid transparent);border-radius:var(--file-border-radius,4px);background-color:var(--file-background-color)}:host .item{display:flex;flex-flow:row nowrap;align-items:center;background-color:var(--file-background-color);padding:var(--file-padding,0);margin:var(--file-margin,0)}:host .item:hover{background-color:var(--file-background-color-hover,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px);cursor:pointer;--secondary-text-color:var(--secondary-text-hover-color)}:host .item:focus,:host .item:focus-visible{background-color:var(--file-background-color-focus,var(--neutral-fill-hover));border-radius:var(--file-border-radius,4px)}:host .item__file-type-icon{height:var(--file-type-icon-height,28px);display:flex;align-items:center;justify-content:center}:host .item__file-type-icon img{height:var(--file-type-icon-height,28px)}:host .item__details{padding-inline-start:var(--file-padding-inline-start,14px)}:host .item__details .line1{font-size:var(--default-font-size);font-weight:var(--file-line1-font-weight,var(--default-font-weight,400));text-transform:var(--file-line1-text-transform,initial);line-height:20px;color:var(--file-line1-color,var(--neutral-foreground-rest))}:host .item__details .line2{color:var(--file-line2-color,var(--secondary-text-color));font-size:var(--file-line2-font-size, var(--last-modified-font-size, 12px));font-weight:var(--file-line2-font-weight,var(--default-font-weight,400));text-transform:var(--file-line2-text-transform,initial);line-height:16px}:host .item__details .line3{color:var(--file-line3-color,var(--secondary-text-color));font-size:var(--file-line3-font-size, var(--size-font-size, 12px));font-weight:var(--file-line3-font-weight,var(--default-font-weight,400));text-transform:var(--file-line3-text-transform,initial);line-height:16px}[dir=rtl] .item{direction:rtl}[dir=rtl] .item__details{direction:rtl}
`],y={PowerPoint:"pptx",Word:"docx",Excel:"xlsx",Pdf:"pdf",OneNote:"onetoc",OneNotePage:"one",InfoPath:"xsn",Visio:"vstx",Publisher:"pub",Project:"mpp",Access:"accdb",Mail:"email",Csv:"csv",Archive:"archive",Xps:"vector",Audio:"audio",Video:"video",Image:"photo",Web:"html",Text:"txt",Xml:"xml",Story:"genericfile",ExternalContent:"genericfile",Folder:"folder",Spsite:"spo",Other:"genericfile"},I="https://spoprod-a.akamaihd.net/files/fabric-cdn-prod_20201008.001/assets/item-types",A=(n,i,t)=>Object.keys(y).find(r=>y[r]===n)?`${I}/${i.toString()}/${n}.${t}`:n==="jpg"||n==="png"?(n="photo",`${I}/${i.toString()}/${n}.${t}`):null,H={modifiedSubtitle:"Modified",sizeSubtitle:"Size"};var a=function(n,i,t,e){var r=arguments.length,s=r<3?i:e===null?e=Object.getOwnPropertyDescriptor(i,t):e,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,i,t,e);else for(var f=n.length-1;f>=0;f--)(h=n[f])&&(s=(r<3?h(s):r>3?h(i,t,s):h(i,t))||s);return r>3&&s&&Object.defineProperty(i,t,s),s},d=function(n,i){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,i)},X=function(n,i,t,e){function r(s){return s instanceof t?s:new t(function(h){h(s)})}return new(t||(t=Promise))(function(s,h){function f(p){try{u(e.next(p))}catch(m){h(m)}}function g(p){try{u(e.throw(p))}catch(m){h(m)}}function u(p){p.done?s(p.value):r(p.value).then(f,g)}u((e=e.apply(n,i||[])).next())})};const J=()=>x("file",o);class o extends P{static get styles(){return W}get strings(){return H}static get requiredScopes(){return[...new Set(["files.read","files.read.all","sites.read.all"])]}args(){return[this.providerState,this.fileQuery,this.siteId,this.itemId,this.driveId,this.itemPath,this.listId,this.groupId,this.userId,this.insightType,this.insightId,this.fileDetails,this.fileIcon]}constructor(){super(),this.renderContent=()=>{if(!this.driveItem)return this.renderNoData();const i=this.driveItem;let t;if(t=this.renderTemplate("default",{file:i}),!t){const e=this.renderDetails(i),r=this.renderFileTypeIcon();t=c`
        <div class="item">
          ${r} ${e}
        </div>`}return t},this.line1Property="name",this.line2Property="lastModifiedDateTime",this.line3Property="size",this.view="threelines"}renderNoData(){return this.renderTemplate("no-data",null)||c``}renderFileTypeIcon(){if(!this.fileIcon&&!this.driveItem.name)return c``;let i;if(this.fileIcon)i=this.fileIcon;else{const t=/(?:\.([^.]+))?$/,e=this.driveItem.package===void 0&&this.driveItem.folder===void 0?t.exec(this.driveItem.name)[1]?t.exec(this.driveItem.name)[1].toLowerCase():this.driveItem.size?"null":"folder":this.driveItem.package!==void 0&&this.driveItem.package.type==="oneNote"?"onetoc":"folder";i=A(e,48,"svg")}return c`
      <div class="item__file-type-icon">
        ${i?c`
              <img src=${i} alt="File icon" />
            `:c`
              ${S(w.File)}
            `}
      </div>
    `}renderDetails(i){if(!i||this.view==="image")return c``;const t=[];if(this.view>"image"){const e=this.getTextFromProperty(i,this.line1Property);e&&t.push(c`
          <div class="line1" aria-label="${e}">${e}</div>
        `)}if(this.view>"oneline"){const e=this.getTextFromProperty(i,this.line2Property);e&&t.push(c`
          <div class="line2" aria-label="${e}">${e}</div>
        `)}if(this.view>"twolines"){const e=this.getTextFromProperty(i,this.line3Property);e&&t.push(c`
          <div class="line3" aria-label="${e}">${e}</div>
        `)}return c`
      <div class="item__details">
        ${t}
      </div>
    `}loadState(){return X(this,void 0,void 0,function*(){if(this.fileDetails){this.driveItem=this.fileDetails;return}const i=Q.globalProvider;if(!i||i.state===v.Loading)return;if(i.state===v.SignedOut){this.driveItem=null;return}const t=i.graph.forComponent(this);let e;const r=!this.driveId&&!this.siteId&&!this.groupId&&!this.listId&&!this.userId;this.driveId&&!this.itemId&&!this.itemPath||this.siteId&&!this.itemId&&!this.itemPath||this.groupId&&!this.itemId&&!this.itemPath||this.listId&&!this.siteId&&!this.itemId||this.insightType&&!this.insightId||this.userId&&!this.itemId&&!this.itemPath&&!this.insightType&&!this.insightId?e=null:this.fileQuery?e=yield $(t,this.fileQuery):this.itemId&&r?e=yield z(t,this.itemId):this.itemPath&&r?e=yield k(t,this.itemPath):this.userId?this.itemId?e=yield M(t,this.userId,this.itemId):this.itemPath?e=yield B(t,this.userId,this.itemPath):this.insightType&&this.insightId&&(e=yield F(t,this.userId,this.insightType,this.insightId)):this.driveId?this.itemId?e=yield j(t,this.driveId,this.itemId):this.itemPath&&(e=yield O(t,this.driveId,this.itemPath)):this.siteId&&!this.listId?this.itemId?e=yield C(t,this.siteId,this.itemId):this.itemPath&&(e=yield R(t,this.siteId,this.itemPath)):this.listId?e=yield U(t,this.siteId,this.listId,this.itemId):this.groupId?this.itemId?e=yield N(t,this.groupId,this.itemId):this.itemPath&&(e=yield L(t,this.groupId,this.itemPath)):this.insightType&&!this.userId&&(e=yield E(t,this.insightType,this.insightId)),this.driveItem=e})}getTextFromProperty(i,t){if(!t||t.length===0)return null;const e=t.trim().split(",");let r,s=0;for(;!r&&s<e.length;){const h=e[s].trim();switch(h){case"size":{let f="0";i.size&&(f=T(i.size)),r=`${this.strings.sizeSubtitle}: ${f}`;break}case"lastModifiedDateTime":{let f,g;if(i.lastModifiedDateTime){const u=new Date(i.lastModifiedDateTime);f=D(u),g=`${this.strings.modifiedSubtitle} ${f}`}else g="";r=g;break}default:r=i[h]}s++}return r}}a([l({attribute:"file-query"}),d("design:type",String)],o.prototype,"fileQuery",void 0);a([l({attribute:"site-id"}),d("design:type",String)],o.prototype,"siteId",void 0);a([l({attribute:"drive-id"}),d("design:type",String)],o.prototype,"driveId",void 0);a([l({attribute:"group-id"}),d("design:type",String)],o.prototype,"groupId",void 0);a([l({attribute:"list-id"}),d("design:type",String)],o.prototype,"listId",void 0);a([l({attribute:"user-id"}),d("design:type",String)],o.prototype,"userId",void 0);a([l({attribute:"item-id"}),d("design:type",String)],o.prototype,"itemId",void 0);a([l({attribute:"item-path"}),d("design:type",String)],o.prototype,"itemPath",void 0);a([l({attribute:"insight-type"}),d("design:type",String)],o.prototype,"insightType",void 0);a([l({attribute:"insight-id"}),d("design:type",String)],o.prototype,"insightId",void 0);a([l({type:Object}),d("design:type",Object)],o.prototype,"fileDetails",void 0);a([l({attribute:"file-icon"}),d("design:type",String)],o.prototype,"fileIcon",void 0);a([l({type:Object}),d("design:type",Object)],o.prototype,"driveItem",void 0);a([l({attribute:"line1-property"}),d("design:type",String)],o.prototype,"line1Property",void 0);a([l({attribute:"line2-property"}),d("design:type",String)],o.prototype,"line2Property",void 0);a([l({attribute:"line3-property"}),d("design:type",String)],o.prototype,"line3Property",void 0);a([l({attribute:"view",converter:n=>_(n,"threelines")}),d("design:type",String)],o.prototype,"view",void 0);export{o as M,J as r};
