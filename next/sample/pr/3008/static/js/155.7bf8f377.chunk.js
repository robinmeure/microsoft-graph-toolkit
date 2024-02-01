"use strict";(self.webpackChunkreact_contoso=self.webpackChunkreact_contoso||[]).push([[155],{505:function(r,e,o){o.d(e,{m:function(){return i}});o(969);var t=o(7780),f=o(3583),a=o(7574),l=(0,t.Z)({divider:{alignItems:"self-start",paddingTop:"20px",marginBottom:"20px"}}),i=function(r){var e=l();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:r.title}),(0,a.jsx)("div",{children:r.description}),(0,a.jsx)(f.i,{className:e.divider})]})}},3155:function(r,e,o){o.r(e),o.d(e,{default:function(){return q}});var t=o(6234),f=o(3028),a=o(969),l=o(505),i=o(5750),n=o(6231),d=(0,n.$)("file-list",i.KN),s=o(7780),c=o(4220),b=o(8013),p=o(9191),h=(0,n.$)("teams-channel-picker",i.Bs),u=o(7574),k=(0,s.Z)({fileGrid:{paddingBottom:"10px"}}),g=function(){var r=a.useState(null),e=(0,t.Z)(r,2),o=e[0],f=e[1],l=k();return(0,u.jsxs)("div",{children:[(0,u.jsx)(h,{selectionChanged:function(r){return f(r.detail)},className:l.fileGrid}),o&&(0,u.jsx)(d,{groupId:o.team.id,itemPath:o.channel.displayName,pageSize:100})]})},v=o(2723),m=o(4795),x=o(2742),w=(0,n.$)("picker",i.Cd),j=(0,s.Z)({picker:{paddingBottom:"10px",display:"block"}}),y=function(){var r=a.useState(null),e=(0,t.Z)(r,2),o=e[0],f=e[1],l=a.useState(""),i=(0,t.Z)(l,2),n=i[0],s=i[1],c=a.useState(""),b=(0,t.Z)(c,2),p=b[0],h=b[1],k=j(),g=function(){var r=(0,m.Z)((0,v.Z)().mark((function r(e){var o;return(0,v.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("documentLibrary"!==e.detail.list.template){r.next=9;break}return r.next=3,x.C.globalProvider.graph.client.api("/sites/root/lists/".concat(e.detail.id,"/drive")).get();case 3:o=r.sent,f(e.detail),s(o.id),h(""),r.next=12;break;case 9:f(null),s(""),h("Please select a document library");case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,u.jsxs)("div",{children:[(0,u.jsx)(w,{resource:"/sites/root/lists",placeholder:"Select a list",keyName:"displayName",selectionChanged:g,className:k.picker}),o&&n&&(0,u.jsx)(d,{itemPath:"/",driveId:n,pageSize:100}),p&&(0,u.jsx)("div",{children:p})]})},B=(0,s.Z)({panels:(0,f.Z)({},c.q5.padding("10px"))}),q=function(){var r=B(),e=a.useState("my"),o=(0,t.Z)(e,2),f=o[0],i=o[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.m,{title:"Files",description:"View your files from accross your OneDrive, channels you are a member of and your SharePoint sites"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)(b.t,{selectedValue:f,onTabSelect:function(r,e){i(e.value)},children:[(0,u.jsx)(p.O,{value:"my",children:"My Files"}),(0,u.jsx)(p.O,{value:"recent",children:"Recent Files"}),(0,u.jsx)(p.O,{value:"site",children:"Site Files"}),(0,u.jsx)(p.O,{value:"channel",children:"Channel Files"})]}),(0,u.jsxs)("div",{className:r.panels,children:["my"===f&&(0,u.jsx)(d,{pageSize:100}),"recent"===f&&(0,u.jsx)(d,{insightType:"used",enableFileUpload:!1,pageSize:100}),"site"===f&&(0,u.jsx)(y,{}),"channel"===f&&(0,u.jsx)(g,{})]})]})]})}},3583:function(r,e,o){o.d(e,{i:function(){return v}});var t=o(969),f=o(1229),a=o(7658),l=o(3028),i=o(1201),n=o(3489),d=o(5786),s=o(4956),c=o(16),b="fui-Divider",p="fui-Divider__wrapper",h=(0,s.s)({base:{Bt984gj:"f122n59",B7ck84d:"f1ewtqcl",mc9l5x:"f22iagw",Beiy3e4:"f1063pyq",Bh6795r:"fqerorx",qhf8xq:"f10pi13n",Bahqtrf:"fk6fouc",Be2twd7:"fy9rknc",Bhrd7zp:"figsok6",Bg96gwp:"fwrc4pm",fsow6f:"f17mccla",Bcvre1j:"fyl8oag",Br0sdwz:"f16vkdww",Bn78ew0:"fhsnbul",li1rpt:"f1gw3sf2",ap17g6:"f1ly5f7u",B771hl4:"f1s3tz6t"},childless:{susq4k:"f1kyqvp9",Bicfajf:["fzynn9s","f1z0ukd1"],jwcpgy:["fekrn8e","ftdg338"],B4rk6o:"fesgyo"},start:{Bsft5z2:"f13zj6fq"},center:{Ftih45:"f1wl9k8s",Bsft5z2:"f13zj6fq"},end:{Ftih45:"f1wl9k8s"},brand:{sj55zd:"f16muhyy",Bq4z7u6:"fcbuu2a",Bk5zm6e:["f1wdw2dr","f1ttio3w"],Bqjgrrk:"f1582fpk",Bm6vgfq:["f1ttio3w","f1wdw2dr"],B0n5ga8:"f1ahrvm8",s924m2:["f1cd3wbc","f17hbk9y"],B1q35kw:"fvrapl0",Gp14am:["f17hbk9y","f1cd3wbc"]},default:{sj55zd:"fkfq4zb",Bq4z7u6:"f1vccso1",Bk5zm6e:["f1geml7w","fjml6kk"],Bqjgrrk:"f1r7kh1m",Bm6vgfq:["fjml6kk","f1geml7w"],B0n5ga8:"f16j7guv",s924m2:["fx01ahm","fj1a37q"],B1q35kw:"fl8d8yv",Gp14am:["fj1a37q","fx01ahm"]},subtle:{sj55zd:"fkfq4zb",Bq4z7u6:"f5g06un",Bk5zm6e:["f13sxdku","f1n015lb"],Bqjgrrk:"f1x6bl8t",Bm6vgfq:["f1n015lb","f13sxdku"],B0n5ga8:"fvod1wy",s924m2:["fwslg65","flk0e17"],B1q35kw:"f103fvts",Gp14am:["flk0e17","fwslg65"]},strong:{sj55zd:"fkfq4zb",Bq4z7u6:"f10tv6oz",Bk5zm6e:["f16xp3sf","f1seuxxq"],Bqjgrrk:"fwrmqbx",Bm6vgfq:["f1seuxxq","f16xp3sf"],B0n5ga8:"ft83z1f",s924m2:["f1g4150c","f192dr6e"],B1q35kw:"f1qnawh6",Gp14am:["f192dr6e","f1g4150c"]}},{d:[".f122n59{align-items:center;}",".f1ewtqcl{box-sizing:border-box;}",".f22iagw{display:flex;}",".f1063pyq{flex-direction:row;}",".fqerorx{flex-grow:1;}",".f10pi13n{position:relative;}",".fk6fouc{font-family:var(--fontFamilyBase);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".f17mccla{text-align:center;}",".fyl8oag::before{box-sizing:border-box;}",".f16vkdww::before{display:flex;}",".fhsnbul::before{flex-grow:1;}",".f1gw3sf2::after{box-sizing:border-box;}",".f1ly5f7u::after{display:flex;}",".f1s3tz6t::after{flex-grow:1;}",".f1kyqvp9::before{margin-bottom:0;}",".fzynn9s::before{margin-right:0;}",".f1z0ukd1::before{margin-left:0;}",".fekrn8e::after{margin-left:0;}",".ftdg338::after{margin-right:0;}",".fesgyo::after{margin-top:0;}",'.f13zj6fq::after{content:"";}','.f1wl9k8s::before{content:"";}',".f16muhyy{color:var(--colorBrandForeground1);}",".fcbuu2a::before{border-top-color:var(--colorBrandStroke1);}",".f1wdw2dr::before{border-right-color:var(--colorBrandStroke1);}",".f1ttio3w::before{border-left-color:var(--colorBrandStroke1);}",".f1582fpk::before{border-bottom-color:var(--colorBrandStroke1);}",".f1ahrvm8::after{border-top-color:var(--colorBrandStroke1);}",".f1cd3wbc::after{border-right-color:var(--colorBrandStroke1);}",".f17hbk9y::after{border-left-color:var(--colorBrandStroke1);}",".fvrapl0::after{border-bottom-color:var(--colorBrandStroke1);}",".fkfq4zb{color:var(--colorNeutralForeground2);}",".f1vccso1::before{border-top-color:var(--colorNeutralStroke2);}",".f1geml7w::before{border-right-color:var(--colorNeutralStroke2);}",".fjml6kk::before{border-left-color:var(--colorNeutralStroke2);}",".f1r7kh1m::before{border-bottom-color:var(--colorNeutralStroke2);}",".f16j7guv::after{border-top-color:var(--colorNeutralStroke2);}",".fx01ahm::after{border-right-color:var(--colorNeutralStroke2);}",".fj1a37q::after{border-left-color:var(--colorNeutralStroke2);}",".fl8d8yv::after{border-bottom-color:var(--colorNeutralStroke2);}",".f5g06un::before{border-top-color:var(--colorNeutralStroke3);}",".f13sxdku::before{border-right-color:var(--colorNeutralStroke3);}",".f1n015lb::before{border-left-color:var(--colorNeutralStroke3);}",".f1x6bl8t::before{border-bottom-color:var(--colorNeutralStroke3);}",".fvod1wy::after{border-top-color:var(--colorNeutralStroke3);}",".fwslg65::after{border-right-color:var(--colorNeutralStroke3);}",".flk0e17::after{border-left-color:var(--colorNeutralStroke3);}",".f103fvts::after{border-bottom-color:var(--colorNeutralStroke3);}",".f10tv6oz::before{border-top-color:var(--colorNeutralStroke1);}",".f16xp3sf::before{border-right-color:var(--colorNeutralStroke1);}",".f1seuxxq::before{border-left-color:var(--colorNeutralStroke1);}",".fwrmqbx::before{border-bottom-color:var(--colorNeutralStroke1);}",".ft83z1f::after{border-top-color:var(--colorNeutralStroke1);}",".f1g4150c::after{border-right-color:var(--colorNeutralStroke1);}",".f192dr6e::after{border-left-color:var(--colorNeutralStroke1);}",".f1qnawh6::after{border-bottom-color:var(--colorNeutralStroke1);}"]}),u=(0,s.s)({base:{a9b677:"fly5x3f",Bdkvgpv:"f163fonl",B0qfbqy:"f51yk4v",pbipgd:"f13rof3u",Bm2nyyq:"f8rth92",xrcqlc:"f6czdpx",i5u598:"f1iyka9k"},inset:{uwmqm3:["fjlbh76","f11qrl6u"],z189sj:["f11qrl6u","fjlbh76"]},start:{Ftih45:"f1wl9k8s",Bicfajf:["f1ojjlep","fk1kexq"],Bxwl2t9:"f1he2m4d",jwcpgy:["f12w1bnb","f1558wlj"]},center:{Bicfajf:["f1ojjlep","fk1kexq"],jwcpgy:["f12w1bnb","f1558wlj"]},end:{Bicfajf:["f1ojjlep","fk1kexq"],Bsft5z2:"f13zj6fq",jwcpgy:["f12w1bnb","f1558wlj"],Iy66sp:"f1ayce8x"}},{d:[".fly5x3f{width:100%;}",".f163fonl::before{border-top-style:solid;}",".f51yk4v::before{border-top-width:var(--strokeWidthThin);}",".f13rof3u::before{min-width:8px;}",".f8rth92::after{border-top-style:solid;}",".f6czdpx::after{border-top-width:var(--strokeWidthThin);}",".f1iyka9k::after{min-width:8px;}",".fjlbh76{padding-left:12px;}",".f11qrl6u{padding-right:12px;}",'.f1wl9k8s::before{content:"";}',".f1ojjlep::before{margin-right:12px;}",".fk1kexq::before{margin-left:12px;}",".f1he2m4d::before{max-width:8px;}",".f12w1bnb::after{margin-left:12px;}",".f1558wlj::after{margin-right:12px;}",'.f13zj6fq::after{content:"";}',".f1ayce8x::after{max-width:8px;}"]}),k=(0,s.s)({base:{Beiy3e4:"f1vx9l62",sshi5w:"f16gbxbe",m598lv:["f1yq6w5o","f1jpmc5p"],B4f6apu:["f9sc749","f1x8pvcy"],zkzzav:"fhkwbjy",Barhvk9:["flthirb","ftkbnf5"],Ihftqj:["f13hvwk3","f1en4csx"],Bde111x:"f19onpk6"},inset:{B6of3ja:"f1xdg43u",jrapky:"f1jlhsmd"},withChildren:{sshi5w:"f1tjaq3g"},start:{Ftih45:"f1wl9k8s",susq4k:"fg2pwug",Bbdr6tz:"fkjtzyi",B4rk6o:"f8vk40g"},center:{susq4k:"fg2pwug",B4rk6o:"f8vk40g"},end:{susq4k:"fg2pwug",Bsft5z2:"f13zj6fq",B4rk6o:"f8vk40g",gn64ia:"fqg5mu5"}},{d:[".f1vx9l62{flex-direction:column;}",".f16gbxbe{min-height:20px;}",".f1yq6w5o::before{border-right-style:solid;}",".f1jpmc5p::before{border-left-style:solid;}",".f9sc749::before{border-right-width:var(--strokeWidthThin);}",".f1x8pvcy::before{border-left-width:var(--strokeWidthThin);}",".fhkwbjy::before{min-height:8px;}",".flthirb::after{border-right-style:solid;}",".ftkbnf5::after{border-left-style:solid;}",".f13hvwk3::after{border-right-width:var(--strokeWidthThin);}",".f1en4csx::after{border-left-width:var(--strokeWidthThin);}",".f19onpk6::after{min-height:8px;}",".f1xdg43u{margin-top:12px;}",".f1jlhsmd{margin-bottom:12px;}",".f1tjaq3g{min-height:84px;}",'.f1wl9k8s::before{content:"";}',".fg2pwug::before{margin-bottom:12px;}",".fkjtzyi::before{max-height:8px;}",".f8vk40g::after{margin-top:12px;}",'.f13zj6fq::after{content:"";}',".fqg5mu5::after{max-height:8px;}"]}),g=o(2255),v=t.forwardRef((function(r,e){var o=function(r,e){var o=r.alignContent,t=void 0===o?"center":o,f=r.appearance,a=void 0===f?"default":f,s=r.inset,c=void 0!==s&&s,b=r.vertical,p=void 0!==b&&b,h=r.wrapper,u=(0,i.Me)("divider-");return{alignContent:t,appearance:a,inset:c,vertical:p,components:{root:"div",wrapper:"div"},root:n.Bx((0,d.h)("div",(0,l.Z)((0,l.Z)({role:"separator","aria-orientation":p?"vertical":"horizontal","aria-labelledby":r.children?u:void 0},r),{},{ref:e})),{elementType:"div"}),wrapper:n.Bx(h,{defaultProps:{id:u,children:r.children},elementType:"div"})}}(r,e);return function(r){var e=h(),o=u(),t=k(),f=r.alignContent,a=r.appearance,l=r.inset,i=r.vertical;r.root.className=(0,c.z)(b,e.base,e[f],a&&e[a],!i&&o.base,!i&&l&&o.inset,!i&&o[f],i&&t.base,i&&l&&t.inset,i&&t[f],i&&void 0!==r.root.children&&t.withChildren,void 0===r.root.children&&e.childless,r.root.className),r.wrapper&&(r.wrapper.className=(0,c.z)(p,r.wrapper.className))}(o),(0,g.oj)("useDividerStyles_unstable")(o),function(r){return(0,a.a)(r),(0,f.tZ)(r.root,{children:void 0!==r.root.children&&(0,f.tZ)(r.wrapper,{children:r.root.children})})}(o)}));v.displayName="Divider"}}]);
//# sourceMappingURL=155.7bf8f377.chunk.js.map