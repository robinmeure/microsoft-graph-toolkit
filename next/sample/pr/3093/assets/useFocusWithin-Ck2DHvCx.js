import{bZ as f,b_ as d,be as p,aZ as s,b$ as v,c0 as n,c1 as T,c2 as l,b7 as y}from"./App-C2ns6K9I.js";import{r as o}from"./index-CnB6Kp1M.js";const h=e=>{const t=f();return t&&d(t),p({groupper:{tabbability:g(e==null?void 0:e.tabBehavior)},focusable:{ignoreKeydown:e==null?void 0:e.ignoreDefaultKeydown}})},g=e=>{switch(e){case"unlimited":return s.GroupperTabbabilities.Unlimited;case"limited":return s.GroupperTabbabilities.Limited;case"limited-trap-focus":return s.GroupperTabbabilities.LimitedTrapFocus;default:return}};function m(e,t){const r=v(t);r.subscribe(i=>{i||c(e)});const a=i=>{r.isNavigatingWithKeyboard()&&b(i.target)&&L(e)},u=i=>{(!i.relatedTarget||b(i.relatedTarget)&&!e.contains(i.relatedTarget))&&c(e)};return e.addEventListener(n,a),e.addEventListener("focusout",u),()=>{e.removeEventListener(n,a),e.removeEventListener("focusout",u),T(r)}}function L(e){e.setAttribute(l,"")}function c(e){e.removeAttribute(l)}function b(e){return e?!!(e&&typeof e=="object"&&"classList"in e&&"contains"in e):!1}function G(){const{targetDocument:e}=y(),t=o.useRef(null);return o.useEffect(()=>{if(e!=null&&e.defaultView&&t.current)return m(t.current,e.defaultView)},[t,e]),t}export{h as a,G as u};