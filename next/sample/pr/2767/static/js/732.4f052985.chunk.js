"use strict";(self.webpackChunkreact_contoso=self.webpackChunkreact_contoso||[]).push([[732],{505:function(e,r,o){o.d(r,{m:function(){return i}});o(969);var t=o(7780),f=o(3583),a=o(7574),l=(0,t.Z)({divider:{alignItems:"self-start",paddingTop:"20px",marginBottom:"20px"}}),i=function(e){var r=l();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)("div",{children:e.description}),(0,a.jsx)(f.i,{className:r.divider})]})}},6732:function(e,r,o){o.r(r),o.d(r,{default:function(){return q}});var t=o(6234),f=o(3028),a=o(969),l=o(505),i=o(1166),n=o(841),d=o(6231),s=(0,d.$)("agenda",n.KX),c=o(2476),b=o(7780),p=o(4220),h=o(16),v=o(7574),g=(0,b.Z)({email:(0,f.Z)((0,f.Z)((0,f.Z)({boxShadow:"var(--box-shadow)"},p.q5.padding("10px")),p.q5.margin("8px")),{},{":hover":{borderLeftWidth:"4px",borderLeftColor:"var(--input-border-color--hover)",borderLeftStyle:"solid",paddingLeft:"6px"},"& mgt-person":{"--font-size":"12px","--person-avatar-size":"16px"}}),link:{color:"var(--color-sub1)",textDecorationLine:"none"},header:{display:"flex",justifyContent:"space-between"},subject:(0,f.Z)((0,f.Z)({color:"var(--color-sub1)",fontSize:"14px"},p.q5.gridArea("1 / 1 / auto / 3")),p.q5.margin("0")),title:{display:"flex",justifyContent:"space-between",marginBottom:"4px",color:"var(--color-sub1)"},date:{fontSize:"12px",paddingLeft:"4px",float:"right"},body:(0,f.Z)((0,f.Z)({fontSize:"13px",textOverflow:"ellipsis",wordWrap:"break-word"},p.q5.overflow("hidden")),{},{maxHeight:"2.8em",lineHeight:"1.4em",color:"var(--color-sub2)"}),emptyBody:{fontStyle:"italic"}});function x(e){var r,o,t,f,a=g(),l=e.dataContext;return(0,v.jsx)("div",{className:a.email,children:(0,v.jsxs)("a",{className:a.link,href:l.webLink,target:"_blank",rel:"noreferrer",children:[(0,v.jsx)("div",{className:a.header,children:(0,v.jsx)("div",{children:(0,v.jsx)(c.F,{personQuery:null===(r=l.sender)||void 0===r||null===(o=r.emailAddress)||void 0===o?void 0:o.address,personCardInteraction:"hover",view:"oneline"})})}),(0,v.jsxs)("div",{className:a.title,children:[(0,v.jsx)("h3",{className:a.subject,children:l.subject}),(0,v.jsx)("span",{className:a.date,children:new Date(l.receivedDateTime).toLocaleDateString()})]}),null!==(t=l.bodyPreview)&&void 0!==t?t:(0,v.jsx)("div",{className:a.body,children:l.bodyPreview}),null!==(f=!l.bodyPreview)&&void 0!==f?f:(0,v.jsx)("div",{className:(0,h.z)(a.body,a.emptyBody),children:"..."})]})})}var m=(0,d.$)("spinner",n.Y9),u=(0,b.Z)({root:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 300px)"},message:{paddingLeft:"10px"}}),k=function(e){var r=u();return(0,v.jsxs)("div",{className:r.root,children:[(0,v.jsx)(m,{}),(0,v.jsx)("div",{className:r.message,children:(0,v.jsx)("span",{children:e.message||"Loading..."})})]})},w=o(8013),j=o(9191),y=(0,b.Z)({container:{display:"flex",flexDirection:"row"},panels:(0,f.Z)({},p.q5.padding("10px")),main:{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"70%"},side:{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"30%"}}),q=function(){var e=y(),r=a.useState("focused"),o=(0,t.Z)(r,2),f=o[0],n=o[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.m,{title:"Mail and Calendar",description:"Stay productive and navigate your emails and your calendar appointments"}),(0,v.jsxs)(w.t,{selectedValue:f,onTabSelect:function(e,r){n(r.value)},className:e.container,children:[(0,v.jsx)(j.O,{value:"focused",children:"Focused"}),(0,v.jsx)(j.O,{value:"others",children:"Others"})]}),(0,v.jsxs)("div",{className:e.container,children:[(0,v.jsxs)("div",{className:(0,h.z)(e.panels,e.main),children:["focused"===f&&(0,v.jsxs)(i.d,{resource:"/me/mailFolders/Inbox/messages?$orderby=InferenceClassification, createdDateTime DESC&filter=InferenceClassification eq 'Focused'",maxPages:3,scopes:["Mail.Read"],children:[(0,v.jsx)(x,{template:"value"}),(0,v.jsx)(k,{template:"loading",message:"Loading your focused inbox..."})]}),"others"===f&&(0,v.jsxs)(i.d,{resource:"/me/mailFolders/Inbox/messages?$orderby=InferenceClassification, createdDateTime DESC&filter=InferenceClassification eq 'Other'",maxPages:3,scopes:["Mail.Read"],children:[(0,v.jsx)(x,{template:"value"}),(0,v.jsx)(k,{template:"loading",message:"Loading your other inbox..."})]})]}),(0,v.jsx)("div",{className:e.side,children:(0,v.jsx)(s,{groupByDay:!0})})]})]})}},3583:function(e,r,o){o.d(r,{i:function(){return m}});var t=o(969),f=o(1229),a=o(7658),l=o(3028),i=o(1201),n=o(3489),d=o(5786),s=o(4956),c=o(16),b="fui-Divider",p="fui-Divider__wrapper",h=(0,s.s)({base:{Bt984gj:"f122n59",B7ck84d:"f1ewtqcl",mc9l5x:"f22iagw",Beiy3e4:"f1063pyq",Bh6795r:"fqerorx",qhf8xq:"f10pi13n",Bahqtrf:"fk6fouc",Be2twd7:"fy9rknc",Bhrd7zp:"figsok6",Bg96gwp:"fwrc4pm",fsow6f:"f17mccla",Bcvre1j:"fyl8oag",Br0sdwz:"f16vkdww",Bn78ew0:"fhsnbul",li1rpt:"f1gw3sf2",ap17g6:"f1ly5f7u",B771hl4:"f1s3tz6t"},childless:{susq4k:"f1kyqvp9",Bicfajf:["fzynn9s","f1z0ukd1"],jwcpgy:["fekrn8e","ftdg338"],B4rk6o:"fesgyo"},start:{Bsft5z2:"f13zj6fq"},center:{Ftih45:"f1wl9k8s",Bsft5z2:"f13zj6fq"},end:{Ftih45:"f1wl9k8s"},brand:{sj55zd:"f16muhyy",Bq4z7u6:"fcbuu2a",Bk5zm6e:["f1wdw2dr","f1ttio3w"],Bqjgrrk:"f1582fpk",Bm6vgfq:["f1ttio3w","f1wdw2dr"],B0n5ga8:"f1ahrvm8",s924m2:["f1cd3wbc","f17hbk9y"],B1q35kw:"fvrapl0",Gp14am:["f17hbk9y","f1cd3wbc"]},default:{sj55zd:"fkfq4zb",Bq4z7u6:"f1vccso1",Bk5zm6e:["f1geml7w","fjml6kk"],Bqjgrrk:"f1r7kh1m",Bm6vgfq:["fjml6kk","f1geml7w"],B0n5ga8:"f16j7guv",s924m2:["fx01ahm","fj1a37q"],B1q35kw:"fl8d8yv",Gp14am:["fj1a37q","fx01ahm"]},subtle:{sj55zd:"fkfq4zb",Bq4z7u6:"f5g06un",Bk5zm6e:["f13sxdku","f1n015lb"],Bqjgrrk:"f1x6bl8t",Bm6vgfq:["f1n015lb","f13sxdku"],B0n5ga8:"fvod1wy",s924m2:["fwslg65","flk0e17"],B1q35kw:"f103fvts",Gp14am:["flk0e17","fwslg65"]},strong:{sj55zd:"fkfq4zb",Bq4z7u6:"f10tv6oz",Bk5zm6e:["f16xp3sf","f1seuxxq"],Bqjgrrk:"fwrmqbx",Bm6vgfq:["f1seuxxq","f16xp3sf"],B0n5ga8:"ft83z1f",s924m2:["f1g4150c","f192dr6e"],B1q35kw:"f1qnawh6",Gp14am:["f192dr6e","f1g4150c"]}},{d:[".f122n59{align-items:center;}",".f1ewtqcl{box-sizing:border-box;}",".f22iagw{display:flex;}",".f1063pyq{flex-direction:row;}",".fqerorx{flex-grow:1;}",".f10pi13n{position:relative;}",".fk6fouc{font-family:var(--fontFamilyBase);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".f17mccla{text-align:center;}",".fyl8oag::before{box-sizing:border-box;}",".f16vkdww::before{display:flex;}",".fhsnbul::before{flex-grow:1;}",".f1gw3sf2::after{box-sizing:border-box;}",".f1ly5f7u::after{display:flex;}",".f1s3tz6t::after{flex-grow:1;}",".f1kyqvp9::before{margin-bottom:0;}",".fzynn9s::before{margin-right:0;}",".f1z0ukd1::before{margin-left:0;}",".fekrn8e::after{margin-left:0;}",".ftdg338::after{margin-right:0;}",".fesgyo::after{margin-top:0;}",'.f13zj6fq::after{content:"";}','.f1wl9k8s::before{content:"";}',".f16muhyy{color:var(--colorBrandForeground1);}",".fcbuu2a::before{border-top-color:var(--colorBrandStroke1);}",".f1wdw2dr::before{border-right-color:var(--colorBrandStroke1);}",".f1ttio3w::before{border-left-color:var(--colorBrandStroke1);}",".f1582fpk::before{border-bottom-color:var(--colorBrandStroke1);}",".f1ahrvm8::after{border-top-color:var(--colorBrandStroke1);}",".f1cd3wbc::after{border-right-color:var(--colorBrandStroke1);}",".f17hbk9y::after{border-left-color:var(--colorBrandStroke1);}",".fvrapl0::after{border-bottom-color:var(--colorBrandStroke1);}",".fkfq4zb{color:var(--colorNeutralForeground2);}",".f1vccso1::before{border-top-color:var(--colorNeutralStroke2);}",".f1geml7w::before{border-right-color:var(--colorNeutralStroke2);}",".fjml6kk::before{border-left-color:var(--colorNeutralStroke2);}",".f1r7kh1m::before{border-bottom-color:var(--colorNeutralStroke2);}",".f16j7guv::after{border-top-color:var(--colorNeutralStroke2);}",".fx01ahm::after{border-right-color:var(--colorNeutralStroke2);}",".fj1a37q::after{border-left-color:var(--colorNeutralStroke2);}",".fl8d8yv::after{border-bottom-color:var(--colorNeutralStroke2);}",".f5g06un::before{border-top-color:var(--colorNeutralStroke3);}",".f13sxdku::before{border-right-color:var(--colorNeutralStroke3);}",".f1n015lb::before{border-left-color:var(--colorNeutralStroke3);}",".f1x6bl8t::before{border-bottom-color:var(--colorNeutralStroke3);}",".fvod1wy::after{border-top-color:var(--colorNeutralStroke3);}",".fwslg65::after{border-right-color:var(--colorNeutralStroke3);}",".flk0e17::after{border-left-color:var(--colorNeutralStroke3);}",".f103fvts::after{border-bottom-color:var(--colorNeutralStroke3);}",".f10tv6oz::before{border-top-color:var(--colorNeutralStroke1);}",".f16xp3sf::before{border-right-color:var(--colorNeutralStroke1);}",".f1seuxxq::before{border-left-color:var(--colorNeutralStroke1);}",".fwrmqbx::before{border-bottom-color:var(--colorNeutralStroke1);}",".ft83z1f::after{border-top-color:var(--colorNeutralStroke1);}",".f1g4150c::after{border-right-color:var(--colorNeutralStroke1);}",".f192dr6e::after{border-left-color:var(--colorNeutralStroke1);}",".f1qnawh6::after{border-bottom-color:var(--colorNeutralStroke1);}"]}),v=(0,s.s)({base:{a9b677:"fly5x3f",Bdkvgpv:"f163fonl",B0qfbqy:"f51yk4v",pbipgd:"f13rof3u",Bm2nyyq:"f8rth92",xrcqlc:"f6czdpx",i5u598:"f1iyka9k"},inset:{uwmqm3:["fjlbh76","f11qrl6u"],z189sj:["f11qrl6u","fjlbh76"]},start:{Ftih45:"f1wl9k8s",Bicfajf:["f1ojjlep","fk1kexq"],Bxwl2t9:"f1he2m4d",jwcpgy:["f12w1bnb","f1558wlj"]},center:{Bicfajf:["f1ojjlep","fk1kexq"],jwcpgy:["f12w1bnb","f1558wlj"]},end:{Bicfajf:["f1ojjlep","fk1kexq"],Bsft5z2:"f13zj6fq",jwcpgy:["f12w1bnb","f1558wlj"],Iy66sp:"f1ayce8x"}},{d:[".fly5x3f{width:100%;}",".f163fonl::before{border-top-style:solid;}",".f51yk4v::before{border-top-width:var(--strokeWidthThin);}",".f13rof3u::before{min-width:8px;}",".f8rth92::after{border-top-style:solid;}",".f6czdpx::after{border-top-width:var(--strokeWidthThin);}",".f1iyka9k::after{min-width:8px;}",".fjlbh76{padding-left:12px;}",".f11qrl6u{padding-right:12px;}",'.f1wl9k8s::before{content:"";}',".f1ojjlep::before{margin-right:12px;}",".fk1kexq::before{margin-left:12px;}",".f1he2m4d::before{max-width:8px;}",".f12w1bnb::after{margin-left:12px;}",".f1558wlj::after{margin-right:12px;}",'.f13zj6fq::after{content:"";}',".f1ayce8x::after{max-width:8px;}"]}),g=(0,s.s)({base:{Beiy3e4:"f1vx9l62",sshi5w:"f16gbxbe",m598lv:["f1yq6w5o","f1jpmc5p"],B4f6apu:["f9sc749","f1x8pvcy"],zkzzav:"fhkwbjy",Barhvk9:["flthirb","ftkbnf5"],Ihftqj:["f13hvwk3","f1en4csx"],Bde111x:"f19onpk6"},inset:{B6of3ja:"f1xdg43u",jrapky:"f1jlhsmd"},withChildren:{sshi5w:"f1tjaq3g"},start:{Ftih45:"f1wl9k8s",susq4k:"fg2pwug",Bbdr6tz:"fkjtzyi",B4rk6o:"f8vk40g"},center:{susq4k:"fg2pwug",B4rk6o:"f8vk40g"},end:{susq4k:"fg2pwug",Bsft5z2:"f13zj6fq",B4rk6o:"f8vk40g",gn64ia:"fqg5mu5"}},{d:[".f1vx9l62{flex-direction:column;}",".f16gbxbe{min-height:20px;}",".f1yq6w5o::before{border-right-style:solid;}",".f1jpmc5p::before{border-left-style:solid;}",".f9sc749::before{border-right-width:var(--strokeWidthThin);}",".f1x8pvcy::before{border-left-width:var(--strokeWidthThin);}",".fhkwbjy::before{min-height:8px;}",".flthirb::after{border-right-style:solid;}",".ftkbnf5::after{border-left-style:solid;}",".f13hvwk3::after{border-right-width:var(--strokeWidthThin);}",".f1en4csx::after{border-left-width:var(--strokeWidthThin);}",".f19onpk6::after{min-height:8px;}",".f1xdg43u{margin-top:12px;}",".f1jlhsmd{margin-bottom:12px;}",".f1tjaq3g{min-height:84px;}",'.f1wl9k8s::before{content:"";}',".fg2pwug::before{margin-bottom:12px;}",".fkjtzyi::before{max-height:8px;}",".f8vk40g::after{margin-top:12px;}",'.f13zj6fq::after{content:"";}',".fqg5mu5::after{max-height:8px;}"]}),x=o(2255),m=t.forwardRef((function(e,r){var o=function(e,r){var o=e.alignContent,t=void 0===o?"center":o,f=e.appearance,a=void 0===f?"default":f,s=e.inset,c=void 0!==s&&s,b=e.vertical,p=void 0!==b&&b,h=e.wrapper,v=(0,i.Me)("divider-");return{alignContent:t,appearance:a,inset:c,vertical:p,components:{root:"div",wrapper:"div"},root:n.Bx((0,d.h)("div",(0,l.Z)((0,l.Z)({role:"separator","aria-orientation":p?"vertical":"horizontal","aria-labelledby":e.children?v:void 0},e),{},{ref:r})),{elementType:"div"}),wrapper:n.Bx(h,{defaultProps:{id:v,children:e.children},elementType:"div"})}}(e,r);return function(e){var r=h(),o=v(),t=g(),f=e.alignContent,a=e.appearance,l=e.inset,i=e.vertical;e.root.className=(0,c.z)(b,r.base,r[f],a&&r[a],!i&&o.base,!i&&l&&o.inset,!i&&o[f],i&&t.base,i&&l&&t.inset,i&&t[f],i&&void 0!==e.root.children&&t.withChildren,void 0===e.root.children&&r.childless,e.root.className),e.wrapper&&(e.wrapper.className=(0,c.z)(p,e.wrapper.className))}(o),(0,x.oj)("useDividerStyles_unstable")(o),function(e){return(0,a.a)(e),(0,f.tZ)(e.root,{children:void 0!==e.root.children&&(0,f.tZ)(e.wrapper,{children:e.root.children})})}(o)}));m.displayName="Divider"},1166:function(e,r,o){o.d(r,{d:function(){return f}});var t=o(841),f=(0,o(6231).$)("get",t.xV)}}]);
//# sourceMappingURL=732.4f052985.chunk.js.map