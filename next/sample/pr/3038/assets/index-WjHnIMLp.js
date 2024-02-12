import{g as J}from"./index-Dy59uYSb.js";import{c1 as Q,c2 as B,c3 as X,D as Y,O as p,c4 as Z,_ as r,b as h,o as f,bt as L,c5 as tt,bv as et,m as D,br as R,aE as A,bs as T,t as E,c6 as g,x as d,y as P,J as b,G as z,bI as it,c7 as st,M,c8 as ot,by as l,C as c,I as n,E as k,bB as C,bK as N,bO as w,bN as K,c9 as at,ca as F,cb as lt,cc as nt,P as W,cd as rt,aK as ct,bJ as dt,bD as $,bL as H,bM as _,L as V,ce as ht,aG as pt,aH as ut,cf as bt,Q as o,cg as ft}from"./App-Dsryfq8Y.js";const m={above:"above",below:"below"};class vt extends B{}class xt extends Q(vt){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const u={inline:"inline",list:"list",both:"both",none:"none"};let a=class extends xt{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=X("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===u.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===u.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===u.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),Y.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return p.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,p.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return p.track(this,"value"),this._value}set value(e){var t,i,x;const O=`${this._value}`;if(this.$fastController.isConnected&&this.options){const I=this.options.findIndex(U=>U.text.toLowerCase()===e.toLowerCase()),q=(t=this.options[this.selectedIndex])===null||t===void 0?void 0:t.text,G=(i=this.options[I])===null||i===void 0?void 0:i.text;this.selectedIndex=q!==G?I:this.selectedIndex,e=((x=this.firstSelectedOption)===null||x===void 0?void 0:x.text)||e}O!==e&&(this._value=e,super.valueChanged(O,e),p.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===u.none)&&(this.filter="");const e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;const t=e.relatedTarget;if(this.isSameNode(t)){this.focus();return}(!this.options||!this.options.includes(t))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(t=>t.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){const t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(t=Z(-1,this.options.length-1,t),t!==this.selectedIndex){this.selectedIndex=t;return}super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const e=this.options.findIndex(t=>t.getAttribute("selected")!==null||t.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;const t=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?m.above:m.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===m.above?~~e.top:~~i}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach(i=>{i.selected=t.includes(i)})}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=((t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){const e=this.control.value.length;this.control.setSelectionRange(e,e)}};r([h({attribute:"autocomplete",mode:"fromView"})],a.prototype,"autocomplete",void 0);r([f],a.prototype,"maxHeight",void 0);r([h({attribute:"open",mode:"boolean"})],a.prototype,"open",void 0);r([h],a.prototype,"placeholder",void 0);r([h({attribute:"position"})],a.prototype,"positionAttribute",void 0);r([f],a.prototype,"position",void 0);class v{}r([f],v.prototype,"ariaAutoComplete",void 0);r([f],v.prototype,"ariaControls",void 0);L(v,tt);L(a,et,v);const gt=(s,e)=>D`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        @focusout="${(t,i)=>t.focusoutHandler(i.event)}"
        @keydown="${(t,i)=>t.keydownHandler(i.event)}"
    >
        <div class="control" part="control">
            ${R(s,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,i)=>t.inputHandler(i.event)}"
                    @keyup="${(t,i)=>t.keyupHandler(i.event)}"
                    ${A("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${T(s,e)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${A("listbox")}
        >
            <slot
                ${E({filter:B.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,$t=(s,e)=>D`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${R(s,e)}
        <span class="content" part="content">
            <slot ${E("content")}></slot>
        </span>
        ${T(s,e)}
    </template>
`;class mt{constructor(e,t){this.cache=new WeakMap,this.ltr=e,this.rtl=t}bind(e){this.attach(e)}unbind(e){const t=this.cache.get(e);t&&g.unsubscribe(t)}attach(e){const t=this.cache.get(e)||new yt(this.ltr,this.rtl,e),i=g.getValueFor(e);g.subscribe(t),t.attach(i),this.cache.set(e,t)}}class yt{constructor(e,t,i){this.ltr=e,this.rtl=t,this.source=i,this.attached=null}handleChange({target:e,token:t}){this.attach(t.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const St=(s,e)=>d`
    ${P("inline-flex")}
    
    :host {
      border-radius: calc(${b} * 1px);
      box-sizing: border-box;
      color: ${z};
      fill: currentcolor;
      font-family: ${it};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${st};
      background: ${M};
      border-radius: calc(${ot} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${l} * 1px));
      padding: calc((${c} - ${n} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${n} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${n} * 1px) solid transparent;
      border-radius: calc(${b} * 1px);
      height: calc(${l} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${k}
      min-height: 100%;
      padding: 0 calc(${c} * 2.25px);
      width: 100%;
    }

    :host(:${C}) {
      ${N}
    }

    :host([disabled]) .control {
      cursor: ${w};
      opacity: ${K};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${l} + ${c} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${l} + ${c} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,y=".control",S=":not([disabled]):not([open])",Ct=(s,e)=>d`
    ${St()}

    ${at()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${w};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${k}
      height: calc(100% - ${n} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(F("outline",lt(s,e,y,S)),F("filled",nt(s,e,y,S)),W(rt(s,e,y,S)));class j extends a{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&M.setValueFor(this.listbox,ct)}}J([h({mode:"fromView"})],j.prototype,"appearance",void 0);const At=j.compose({baseName:"combobox",baseClass:a,shadowOptions:{delegatesFocus:!0},template:gt,styles:Ct,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),kt=(s,e)=>d`
    ${P("inline-flex")} :host {
      position: relative;
      ${k}
      background: ${dt};
      border-radius: calc(${b} * 1px);
      border: calc(${n} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${z};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${l} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${c} * 3) - ${n} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${$} - ${n}) * 1px);
      top: calc((${l} / 4) - ${$} * 1px);
      width: 3px;
      height: calc((${l} / 2) * 1px);
      background: transparent;
      border-radius: calc(${b} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${H};
    }

    :host(:not([disabled]):active) {
      background: ${_};
    }

    :host(:not([disabled]):active)::before {
      background: ${V};
      height: calc(((${l} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${V};
    }

    :host(:${C}) {
      ${N}
      background: ${ht};
    }

    :host([aria-selected='true']) {
      background: ${pt};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${ut};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${bt};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${H};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${_};
    }

    :host([disabled]) {
      cursor: ${w};
      opacity: ${K};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new mt(null,d`
      :host::before {
        right: calc((${$} - ${n}) * 1px);
      }
    `),W(d`
        :host {
          background: ${o.ButtonFace};
          border-color: ${o.ButtonFace};
          color: ${o.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${o.Highlight};
          color: ${o.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${o.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${o.Canvas};
          color: ${o.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${C}) {
          outline-color: ${o.CanvasText};
        }
      `)),Ft=ft.compose({baseName:"option",template:$t,styles:kt});export{mt as D,At as a,Ft as f};
