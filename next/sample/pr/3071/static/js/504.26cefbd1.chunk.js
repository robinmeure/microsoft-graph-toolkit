"use strict";(self.webpackChunkreact_contoso=self.webpackChunkreact_contoso||[]).push([[504],{64092:function(e,t,n){n.d(t,{u:function(){return l}});n(59192);var r=n(32580),a=n(63920),i=n(9e4),s=(0,r.a)({divider:{alignItems:"self-start",paddingTop:"20px",marginBottom:"20px"}}),l=function(e){var t=s();return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:e.title}),(0,i.jsx)("div",{children:e.description}),(0,i.jsx)(a.c,{className:t.divider})]})}},13504:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(51428),a=n(64412),i=n(59192),s=n(64092),l=n(51624),c=n(70051),o=(0,c.e)("search-results",l.eG),d=n(9e4),u=function(e){return(0,d.jsx)(d.Fragment,{children:e.searchTerm&&(0,d.jsxs)(d.Fragment,{children:["*"!==e.searchTerm&&(0,d.jsx)(o,{entityTypes:["bookmark"],queryString:e.searchTerm,version:"beta",size:1,scopes:["Bookmark.Read.All"],children:(0,d.jsx)(m,{template:"no-data"})}),(0,d.jsx)(o,{entityTypes:["driveItem","listItem","site"],queryString:e.searchTerm,scopes:["Files.Read.All","Files.ReadWrite.All","Sites.Read.All"],fetchThumbnail:!0})]})})},m=function(e){return(0,d.jsx)(d.Fragment,{})},h=function(e){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(o,{entityTypes:["people"],size:20,queryString:e.searchTerm,version:"beta"})})},x=n(32580),p=n(75528),f=n(78136),j=n(10144),v=n(4964),g=function(e){return(0,d.jsx)(d.Fragment,{children:e.searchTerm&&(0,d.jsx)(o,{entityTypes:["externalItem"],contentSources:["/external/connections/contosoBlogPosts"],queryString:e.searchTerm,scopes:["ExternalItem.Read.All"],version:"beta"})})},y=n(83516),T=(0,c.e)("file",l.u4),w=n(37992),C=n(54912),S=n(91184),I=n(7596),D=n(28552),b=n(99143),k=n(34596),R=n(65636),F=n(61436),N=n(46432),L=n(90496),q=n(4504),W=(0,x.a)({container:(0,a.c)((0,a.c)({},p.uS.gap("16px")),{},{display:"flex",flexDirection:"row",flexWrap:"wrap"}),card:{width:"300px",height:"fit-content",maxWidth:"100%"},caption:{color:C.C.colorNeutralForeground3},noDataSearchTerm:{fontWeight:C.C.fontWeightSemibold},emptyContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"calc(100vh - 300px)"},fileContainer:{display:"flex"},fileTitle:{paddingLeft:"10px",alignSelf:"center"},noDataMessage:{paddingLeft:"10px"},noDataIcon:{fontSize:"128px"},row:{cursor:"pointer"}}),A=function(e){return(0,d.jsx)(d.Fragment,{children:e.searchTerm&&(0,d.jsxs)(o,{entityTypes:["driveItem"],queryString:e.searchTerm,fetchThumbnail:!0,queryTemplate:"({searchTerms}) ContentTypeId:0x0101*",version:"beta",fields:["createdBy","lastModifiedDateTime","Title","DefaultEncodingURL"],size:30,cacheEnabled:!0,children:[(0,d.jsx)(G,{template:"default"}),(0,d.jsx)(G,{template:"loading"}),(0,d.jsx)(z,{template:"no-data"})]})})},M=function(e,t){return[(0,S.G)({columnId:"name",renderHeaderCell:function(){return"Name"},renderCell:function(n){return(0,d.jsx)(I.I,{children:e?(0,d.jsx)(D.o,{shape:"rectangle",style:{width:"120px"}}):(0,d.jsxs)("div",{className:t.fileContainer,children:[(0,d.jsx)(T,{fileDetails:n.resource,view:"image"}),(0,d.jsx)("span",{className:t.fileTitle,children:n.resource.listItem.fields.title})]})})}}),(0,S.G)({columnId:"modified",renderHeaderCell:function(){return"Modified"},renderCell:function(t){return(0,d.jsx)(I.I,{children:e?(0,d.jsx)(D.o,{shape:"rectangle",style:{width:"120px"}}):B(new Date(t.resource.lastModifiedDateTime))})}}),(0,S.G)({columnId:"owner",renderHeaderCell:function(){return"Owner"},renderCell:function(t){return(0,d.jsx)(I.I,{children:e?(0,d.jsxs)("div",{style:{display:"grid",alignItems:"center",position:"relative",gridTemplateColumns:"min-content 80%",gap:"10px"},children:[(0,d.jsx)(D.o,{shape:"circle",size:32}),(0,d.jsx)(D.o,{style:{width:"120px"}})]}):(0,d.jsx)(w.u,{personQuery:t.resource.createdBy.user.email,view:"oneline",personCardInteraction:"hover"})})}})]},G=function(e){var t,n,a,s=W(),l=i.useState(null===(t=e.dataContext.value)||void 0===t||null===(n=t[0])||void 0===n||null===(a=n.hitsContainers[0])||void 0===a?void 0:a.hits),c=(0,r.c)(l,1)[0];return(0,d.jsx)("div",{children:(0,d.jsxs)(b.o,{columns:M("loading"===e.template,s),items:"loading"===e.template?(0,y.c)(Array(30)):c,children:[(0,d.jsx)(k.G,{children:(0,d.jsx)(R.Q,{children:function(e){var t=e.renderHeaderCell;return(0,d.jsx)(F.C,{children:t()})}})}),(0,d.jsx)(N.u,{children:function(e){var t=e.item,n=e.rowId;return(0,d.jsx)(R.Q,{className:s.row,onClick:function(){return function(e){var t=new URL(e.resource.listItem.fields.defaultEncodingURL);t.searchParams.append("Web","1"),window.open(t.toString(),"_blank")}(t)},children:function(e){var n=e.renderCell;return(0,d.jsx)(L.m,{children:n(t)})}},n)}})]})})},z=function(e){var t,n=W(),a=i.useState(null===(t=e.dataContext.value[0])||void 0===t?void 0:t.searchTerms),s=(0,r.c)(a,1)[0];return(0,d.jsxs)("div",{className:n.emptyContainer,children:[(0,d.jsx)("div",{children:(0,d.jsx)(q.OCQ,{className:n.noDataIcon})}),(0,d.jsxs)("div",{className:n.noDataMessage,children:["We couldn't find any results for ",(0,d.jsx)("span",{className:n.noDataSearchTerm,children:s.join(" ")})]})]})},B=function(e){var t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate());if(e>=n)return e.toLocaleString("default",{hour:"numeric",minute:"numeric"});var r=new Date(n);if(r.setDate(t.getDate()-t.getDay()),e>=r)return e.toLocaleString("default",{hour:"numeric",minute:"numeric",weekday:"short"});var a=new Date(r);return a.setDate(r.getDate()-7),e>=a?e.toLocaleString("default",{day:"numeric",month:"numeric",weekday:"short"}):e.toLocaleString("default",{day:"numeric",month:"numeric",year:"numeric"})},E=(0,x.a)({panels:(0,a.c)({},p.uS.padding("10px")),container:{maxWidth:"1028px",width:"100%"}}),U=function(){var e=E(),t=(0,v.K)(),n=i.useState(new URLSearchParams(window.location.search).get("q")),a=(0,r.c)(n,1)[0],l=i.useState("allResults"),c=(0,r.c)(l,2),o=c[0],m=c[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.u,{title:"Search",description:"Use this Search Center to test Microsot Graph Toolkit search components capabilities"}),(0,d.jsxs)("div",{className:e.container,children:[(0,d.jsxs)(f.q,{selectedValue:o,onTabSelect:function(e,t){m(t.value)},children:[(0,d.jsx)(j.s,{value:"allResults",children:"All Results"}),(0,d.jsx)(j.s,{value:"driveItems",children:"Files"}),(0,d.jsx)(j.s,{value:"externalItems",children:"External Items"}),(0,d.jsx)(j.s,{value:"people",children:"People"})]}),(0,d.jsxs)("div",{className:e.panels,children:["allResults"===o&&(0,d.jsx)(u,{searchTerm:null!==a&&void 0!==a?a:t.state.searchTerm}),"driveItems"===o&&(0,d.jsx)(A,{searchTerm:null!==a&&void 0!==a?a:t.state.searchTerm}),"externalItems"===o&&(0,d.jsx)(g,{searchTerm:null!==a&&void 0!==a?a:t.state.searchTerm}),"people"===o&&(0,d.jsx)(h,{searchTerm:null!==a&&void 0!==a?a:t.state.searchTerm})]})]})]})}}}]);
//# sourceMappingURL=504.26cefbd1.chunk.js.map