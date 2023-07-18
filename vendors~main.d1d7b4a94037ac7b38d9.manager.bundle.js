/*! For license information please see vendors~main.d1d7b4a94037ac7b38d9.manager.bundle.js.LICENSE.txt */
    <span
        part="end"
        ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("endContainer")}
        class=${x=>definition.end?"end":void 0}
    >
        <slot name="end" ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("end")} @slotchange="${x=>x.handleEndContentChange()}">
            ${definition.end||""}
        </slot>
    </span>
`,startSlotTemplate=(context,definition)=>_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.a`
    <span
        part="start"
        ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("startContainer")}
        class="${x=>definition.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("start")}
            @slotchange="${x=>x.handleStartContentChange()}"
        >
            ${definition.start||""}
        </slot>
    </span>
`;_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.a`
    <span part="end" ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("endContainer")}>
        <slot
            name="end"
            ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("end")}
            @slotchange="${x=>x.handleEndContentChange()}"
        ></slot>
    </span>
`,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.a`
    <span part="start" ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("startContainer")}>
        <slot
            name="start"
            ${Object(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.a)("start")}
            @slotchange="${x=>x.handleStartContentChange()}"
        ></slot>
    </span>
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return focusTreatmentBase})),__webpack_require__.d(__webpack_exports__,"b",(function(){return focusTreatmentTight}));var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(361),_design_tokens__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);const focusTreatmentBase=_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.b`
  outline: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.s} * 1px) solid ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.r};
  outline-offset: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.s} * -1px);
`,focusTreatmentTight=_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.b`
  outline: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.s} * 1px) solid ${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.r};
  outline-offset: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_1__.O} * 1px);
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.P};
  line-height: ${design_tokens.R};
  font-weight: initial;
  font-variation-settings: ${design_tokens.Q};
`;css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.S};
  line-height: ${design_tokens.U};
  font-weight: initial;
  font-variation-settings: ${design_tokens.T};
`,css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.V};
  line-height: ${design_tokens.X};
  font-weight: initial;
  font-variation-settings: ${design_tokens.W};
`,css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.Y};
  line-height: ${design_tokens.ab};
  font-weight: initial;
  font-variation-settings: ${design_tokens.Z};
`,css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.bb};
  line-height: ${design_tokens.db};
  font-weight: initial;
  font-variation-settings: ${design_tokens.cb};
`,css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.eb};
  line-height: ${design_tokens.gb};
  font-weight: initial;
  font-variation-settings: ${design_tokens.fb};
`,css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.hb};
  line-height: ${design_tokens.jb};
  font-weight: initial;
  font-variation-settings: ${design_tokens.ib};
`,css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.kb};
  line-height: ${design_tokens.mb};
  font-weight: initial;
  font-variation-settings: ${design_tokens.lb};
`,css.b`
  font-family: ${design_tokens.k};
  font-size: ${design_tokens.nb};
  line-height: ${design_tokens.pb};
  font-weight: initial;
  font-variation-settings: ${design_tokens.ob};
`;var styles_focus=__webpack_require__(225);class property_stylesheet_behavior_PropertyStyleSheetBehavior{constructor(propertyName,value,styles){this.propertyName=propertyName,this.value=value,this.styles=styles}bind(elementInstance){observable.b.getNotifier(elementInstance).subscribe(this,this.propertyName),this.handleChange(elementInstance,this.propertyName)}unbind(source){observable.b.getNotifier(source).unsubscribe(this,this.propertyName),source.$fastController.removeStyles(this.styles)}handleChange(source,key){source[key]===this.value?source.$fastController.addStyles(this.styles):source.$fastController.removeStyles(this.styles)}}function appearanceBehavior(value,styles){return new property_stylesheet_behavior_PropertyStyleSheetBehavior("appearance",value,styles)}const buttonStyles=(context,definition)=>css.a`
    :host(${":not([disabled])"}) .control {
      cursor: pointer;
    }

    :host(${"[disabled]"}) .control {
      cursor: ${"not-allowed"};
    }

    @media (forced-colors: none) {
      :host(${"[disabled]"}) .control {
        opacity: ${design_tokens.o};
      }
    }

    ${css.a`
    ${Object(display.a)("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${typeRampBase}
      height: calc(${size.a} * 1px);
      min-width: calc(${size.a} * 1px);
      color: ${design_tokens.F};
      border-radius: calc(${design_tokens.l} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${design_tokens.O} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${design_tokens.n} * 2 * ${design_tokens.m})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${focusVisible} {
      ${styles_focus.a}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `}
  `.withBehaviors(appearanceBehavior("neutral",((context,definition,interactivitySelector,nonInteractivitySelector="[disabled]")=>css.a`
    .control {
      background: padding-box linear-gradient(${design_tokens.A}, ${design_tokens.A}),
        border-box ${design_tokens.K};
    }

    :host(${interactivitySelector}:hover) .control {
      background: padding-box linear-gradient(${design_tokens.y}, ${design_tokens.y}),
        border-box ${design_tokens.J};
    }

    :host(${interactivitySelector}:active) .control {
      background: padding-box linear-gradient(${design_tokens.x}, ${design_tokens.x}),
        border-box ${design_tokens.I};
    }

    :host(${nonInteractivitySelector}) .control {
      background: padding-box linear-gradient(${design_tokens.A}, ${design_tokens.A}),
        border-box ${design_tokens.N};
    }
  `.withBehaviors(Object(match_media_stylesheet_behavior.a)(css.a`
        .control {
          background: ${system_colors.a.ButtonFace};
          border-color: ${system_colors.a.ButtonText};
          color: ${system_colors.a.ButtonText};
        }

        :host(${interactivitySelector}:hover) .control,
        :host(${interactivitySelector}:active) .control {
          forced-color-adjust: none;
          background: ${system_colors.a.HighlightText};
          border-color: ${system_colors.a.Highlight};
          color: ${system_colors.a.Highlight};
        }

        :host(${nonInteractivitySelector}) .control {
          background: transparent;
          border-color: ${system_colors.a.GrayText};
          color: ${system_colors.a.GrayText};
        }

        .control:${focusVisible} {
          outline-color: ${system_colors.a.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${system_colors.a.LinkText};
          color: ${system_colors.a.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${system_colors.a.CanvasText};
          color: ${system_colors.a.CanvasText};
        }
    `)))(0,0,":not([disabled])","[disabled]")),appearanceBehavior("accent",((context,definition,interactivitySelector,nonInteractivitySelector="[disabled]")=>css.a`
    .control {
      background: padding-box linear-gradient(${design_tokens.c}, ${design_tokens.c}),
        border-box ${design_tokens.i};
      color: ${design_tokens.v};
    }

    :host(${interactivitySelector}:hover) .control {
      background: padding-box linear-gradient(${design_tokens.b}, ${design_tokens.b}),
        border-box ${design_tokens.h};
      color: ${design_tokens.u};
    }

    :host(${interactivitySelector}:active) .control {
      background: padding-box linear-gradient(${design_tokens.a}, ${design_tokens.a}),
        border-box ${design_tokens.g};
      color: ${design_tokens.t};
    }

    :host(${nonInteractivitySelector}) .control {
      background: ${design_tokens.c};
    }

    .control:${focusVisible} {
      box-shadow: 0 0 0 calc(${design_tokens.s} * 1px) ${design_tokens.q} inset !important;
    }
  `.withBehaviors(Object(match_media_stylesheet_behavior.a)(css.a`
        .control {
          forced-color-adjust: none;
          background: ${system_colors.a.Highlight};
          color: ${system_colors.a.HighlightText};
        }

        :host(${interactivitySelector}:hover) .control,
        :host(${interactivitySelector}:active) .control {
          background: ${system_colors.a.HighlightText};
          border-color: ${system_colors.a.Highlight};
          color: ${system_colors.a.Highlight};
        }

        :host(${nonInteractivitySelector}) .control {
          background: transparent;
          border-color: ${system_colors.a.GrayText};
          color: ${system_colors.a.GrayText};
        }

        .control:${focusVisible} {
          outline-color: ${system_colors.a.CanvasText};
          box-shadow: 0 0 0 calc(${design_tokens.s} * 1px) ${system_colors.a.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${system_colors.a.LinkText};
          color: ${system_colors.a.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${system_colors.a.ButtonFace};
          border-color: ${system_colors.a.LinkText};
          color: ${system_colors.a.LinkText};
        }
      `)))(0,0,":not([disabled])","[disabled]")),appearanceBehavior("lightweight",((context,definition,interactivitySelector,nonInteractivitySelector="[disabled]")=>css.a`
    :host {
      color: ${design_tokens.f};
    }

    .control {
      background: ${design_tokens.D};
    }

    :host(${interactivitySelector}:hover) .control {
      background: ${design_tokens.C};
      color: ${design_tokens.e};
    }

    :host(${interactivitySelector}:active) .control {
      background: ${design_tokens.B};
      color: ${design_tokens.d};
    }

    :host(${nonInteractivitySelector}) .control {
      background: ${design_tokens.D};
    }
  `.withBehaviors(Object(match_media_stylesheet_behavior.a)(css.a`
        :host {
          color: ${system_colors.a.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${interactivitySelector}:hover) .control,
        :host(${interactivitySelector}:active) .control {
          background: transparent;
          border-color: ${system_colors.a.ButtonText};
          color: ${system_colors.a.ButtonText};
        }

        :host(${nonInteractivitySelector}) .control {
          background: transparent;
          color: ${system_colors.a.GrayText};
        }

        .control:${focusVisible} {
          outline-color: ${system_colors.a.CanvasText};
        }

        :host([href]) .control {
          color: ${system_colors.a.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${system_colors.a.LinkText};
          color: ${system_colors.a.LinkText};
        }
      `)))(0,0,":not([disabled])","[disabled]")),appearanceBehavior("outline",((context,definition,interactivitySelector,nonInteractivitySelector="[disabled]")=>css.a`
    .control {
      background: transparent !important;
      border-color: ${design_tokens.N};
    }

    :host(${interactivitySelector}:hover) .control {
      border-color: ${design_tokens.L};
    }

    :host(${interactivitySelector}:active) .control {
      border-color: ${design_tokens.H};
    }

    :host(${nonInteractivitySelector}) .control {
      background: transparent !important;
      border-color: ${design_tokens.N};
    }
  `.withBehaviors(Object(match_media_stylesheet_behavior.a)(css.a`
        .control {
          border-color: ${system_colors.a.ButtonText};
          color: ${system_colors.a.ButtonText};
        }

        :host(${interactivitySelector}:hover) .control,
        :host(${interactivitySelector}:active) .control {
          background: ${system_colors.a.HighlightText};
          border-color: ${system_colors.a.Highlight};
          color: ${system_colors.a.Highlight};
        }

        :host(${nonInteractivitySelector}) .control {
          border-color: ${system_colors.a.GrayText};
          color: ${system_colors.a.GrayText};
        }

        .control:${focusVisible} {
          outline-color: ${system_colors.a.CanvasText};
        }

        :host([href]) .control {
          border-color: ${system_colors.a.LinkText};
          color: ${system_colors.a.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${system_colors.a.CanvasText};
          color: ${system_colors.a.CanvasText};
        }
      `)))(0,0,":not([disabled])","[disabled]")),appearanceBehavior("stealth",((context,definition,interactivitySelector,nonInteractivitySelector="[disabled]")=>css.a`
    .control {
      background: ${design_tokens.D};
    }

    :host(${interactivitySelector}:hover) .control {
      background: ${design_tokens.C};
    }

    :host(${interactivitySelector}:active) .control {
      background: ${design_tokens.B};
    }

    :host(${nonInteractivitySelector}) .control {
      background: ${design_tokens.D};
    }
  `.withBehaviors(Object(match_media_stylesheet_behavior.a)(css.a`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${system_colors.a.ButtonText};
        }

        :host(${interactivitySelector}:hover) .control,
        :host(${interactivitySelector}:active) .control {
          background: transparent;
          border-color: ${system_colors.a.ButtonText};
          color: ${system_colors.a.ButtonText};
        }

        :host(${nonInteractivitySelector}) .control {
          background: transparent;
          color: ${system_colors.a.GrayText};
        }
        
        .control:${focusVisible} {
          outline-color: ${system_colors.a.CanvasText};
        }

        :host([href]) .control {
          color: ${system_colors.a.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${system_colors.a.LinkText};
          color: ${system_colors.a.LinkText};
        }
      `)))(0,0,":not([disabled])","[disabled]")));class esm_button_Button extends button_Button{appearanceChanged(oldValue,newValue){oldValue!==newValue&&(this.classList.add(newValue),this.classList.remove(oldValue))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const slottedElements=this.defaultSlottedContent.filter((x=>x.nodeType===Node.ELEMENT_NODE));1===slottedElements.length&&slottedElements[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}Object(tslib_es6.b)([attributes.c],esm_button_Button.prototype,"appearance",void 0);const fluentButton=esm_button_Button.compose({baseName:"button",baseClass:button_Button,template:(context,definition)=>template.a`
    <button
        class="control"
        part="control"
        ?autofocus="${x=>x.autofocus}"
        ?disabled="${x=>x.disabled}"
        form="${x=>x.formId}"
        formaction="${x=>x.formaction}"
        formenctype="${x=>x.formenctype}"
        formmethod="${x=>x.formmethod}"
        formnovalidate="${x=>x.formnovalidate}"
        formtarget="${x=>x.formtarget}"
        name="${x=>x.name}"
        type="${x=>x.type}"
        value="${x=>x.value}"
        aria-atomic="${x=>x.ariaAtomic}"
        aria-busy="${x=>x.ariaBusy}"
        aria-controls="${x=>x.ariaControls}"
        aria-current="${x=>x.ariaCurrent}"
        aria-describedby="${x=>x.ariaDescribedby}"
        aria-details="${x=>x.ariaDetails}"
        aria-disabled="${x=>x.ariaDisabled}"
        aria-errormessage="${x=>x.ariaErrormessage}"
        aria-expanded="${x=>x.ariaExpanded}"
        aria-flowto="${x=>x.ariaFlowto}"
        aria-haspopup="${x=>x.ariaHaspopup}"
        aria-hidden="${x=>x.ariaHidden}"
        aria-invalid="${x=>x.ariaInvalid}"
        aria-keyshortcuts="${x=>x.ariaKeyshortcuts}"
        aria-label="${x=>x.ariaLabel}"
        aria-labelledby="${x=>x.ariaLabelledby}"
        aria-live="${x=>x.ariaLive}"
        aria-owns="${x=>x.ariaOwns}"
        aria-pressed="${x=>x.ariaPressed}"
        aria-relevant="${x=>x.ariaRelevant}"
        aria-roledescription="${x=>x.ariaRoledescription}"
        ${Object(ref.a)("control")}
    >
        ${Object(start_end.c)(context,definition)}
        <span class="content" part="content">
            <slot ${Object(slotted.a)("defaultSlottedContent")}></slot>
        </span>
        ${Object(start_end.b)(context,definition)}
    </button>
`,styles:buttonStyles,shadowOptions:{delegatesFocus:!0}})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return fluentListbox}));var tslib_es6=__webpack_require__(9),observable=__webpack_require__(50),attributes=__webpack_require__(48),key_codes=__webpack_require__(904);let uniqueIdCounter=0;var foundation_element=__webpack_require__(89),dom=__webpack_require__(914),aria_global=__webpack_require__(276),start_end=__webpack_require__(224),apply_mixins=__webpack_require__(130);function isListboxOption(el){return Object(dom.b)(el)&&("option"===el.getAttribute("role")||el instanceof HTMLOptionElement)}class listbox_option_ListboxOption extends foundation_element.a{constructor(text,value,defaultSelected,selected){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,text&&(this.textContent=text),value&&(this.initialValue=value),defaultSelected&&(this.defaultSelected=defaultSelected),selected&&(this.selected=selected),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(prev,next){this.ariaChecked="boolean"!=typeof next?null:next?"true":"false"}contentChanged(prev,next){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(prev,next){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(previous,next){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var _a;return null!==(_a=this.value)&&void 0!==_a?_a:this.text}get text(){var _a,_b;return null!==(_b=null===(_a=this.textContent)||void 0===_a?void 0:_a.replace(/\s+/g," ").trim())&&void 0!==_b?_b:""}set value(next){const newValue=`${null!=next?next:""}`;this._value=newValue,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=newValue),observable.b.notify(this,"value")}get value(){var _a;return observable.b.track(this,"value"),null!==(_a=this._value)&&void 0!==_a?_a:this.text}get form(){return this.proxy?this.proxy.form:null}}Object(tslib_es6.a)([observable.d],listbox_option_ListboxOption.prototype,"checked",void 0),Object(tslib_es6.a)([observable.d],listbox_option_ListboxOption.prototype,"content",void 0),Object(tslib_es6.a)([observable.d],listbox_option_ListboxOption.prototype,"defaultSelected",void 0),Object(tslib_es6.a)([Object(attributes.c)({mode:"boolean"})],listbox_option_ListboxOption.prototype,"disabled",void 0),Object(tslib_es6.a)([Object(attributes.c)({attribute:"selected",mode:"boolean"})],listbox_option_ListboxOption.prototype,"selectedAttribute",void 0),Object(tslib_es6.a)([observable.d],listbox_option_ListboxOption.prototype,"selected",void 0),Object(tslib_es6.a)([Object(attributes.c)({attribute:"value",mode:"fromView"})],listbox_option_ListboxOption.prototype,"initialValue",void 0);class DelegatesARIAListboxOption{}Object(tslib_es6.a)([observable.d],DelegatesARIAListboxOption.prototype,"ariaChecked",void 0),Object(tslib_es6.a)([observable.d],DelegatesARIAListboxOption.prototype,"ariaPosInSet",void 0),Object(tslib_es6.a)([observable.d],DelegatesARIAListboxOption.prototype,"ariaSelected",void 0),Object(tslib_es6.a)([observable.d],DelegatesARIAListboxOption.prototype,"ariaSetSize",void 0),Object(apply_mixins.a)(DelegatesARIAListboxOption,aria_global.a),Object(apply_mixins.a)(listbox_option_ListboxOption,start_end.a,DelegatesARIAListboxOption);class listbox_Listbox extends foundation_element.a{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var _a;return null!==(_a=this.selectedOptions[0])&&void 0!==_a?_a:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((o=>o.disabled))}get length(){var _a,_b;return null!==(_b=null===(_a=this.options)||void 0===_a?void 0:_a.length)&&void 0!==_b?_b:0}get options(){return observable.b.track(this,"options"),this._options}set options(value){this._options=value,observable.b.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(value){this.typeaheadExpired=value}clickHandler(e){const captured=e.target.closest("option,[role=option]");if(captured&&!captured.disabled)return this.selectedIndex=this.options.indexOf(captured),!0}focusAndScrollOptionIntoView(optionToFocus=this.firstSelectedOption){this.contains(document.activeElement)&&null!==optionToFocus&&(optionToFocus.focus(),requestAnimationFrame((()=>{optionToFocus.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const pattern=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),re=new RegExp(`^${pattern}`,"gi");return this.options.filter((o=>o.text.trim().match(re)))}getSelectableIndex(prev=this.selectedIndex,next){const direction=prev>next?-1:prev<next?1:0,potentialDirection=prev+direction;let nextSelectableOption=null;switch(direction){case-1:nextSelectableOption=this.options.reduceRight(((nextSelectableOption,thisOption,index)=>!nextSelectableOption&&!thisOption.disabled&&index<potentialDirection?thisOption:nextSelectableOption),nextSelectableOption);break;case 1:nextSelectableOption=this.options.reduce(((nextSelectableOption,thisOption,index)=>!nextSelectableOption&&!thisOption.disabled&&index>potentialDirection?thisOption:nextSelectableOption),nextSelectableOption)}return this.options.indexOf(nextSelectableOption)}handleChange(source,propertyName){if("selected"===propertyName)listbox_Listbox.slottedOptionFilter(source)&&(this.selectedIndex=this.options.indexOf(source)),this.setSelectedOptions()}handleTypeAhead(key){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),listbox_Listbox.TYPE_AHEAD_TIMEOUT_MS),key.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${key}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const key=e.key;switch(key){case key_codes.f:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case key_codes.a:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case key_codes.b:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case key_codes.c:e.preventDefault(),this.selectLastOption();break;case key_codes.h:return this.focusAndScrollOptionIntoView(),!0;case key_codes.d:case key_codes.e:return!0;case key_codes.g:if(this.typeaheadExpired)return!0;default:return 1===key.length&&this.handleTypeAhead(`${key}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(prev,next){this.ariaMultiSelectable=next?"true":null}selectedIndexChanged(prev,next){var _a;if(this.hasSelectableOptions){if((null===(_a=this.options[this.selectedIndex])||void 0===_a?void 0:_a.disabled)&&"number"==typeof prev){const selectableIndex=this.getSelectableIndex(prev,next),newNext=selectableIndex>-1?selectableIndex:prev;return this.selectedIndex=newNext,void(next===newNext&&this.selectedIndexChanged(next,newNext))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(prev,next){var _a;const filteredNext=next.filter(listbox_Listbox.slottedOptionFilter);null===(_a=this.options)||void 0===_a||_a.forEach((o=>{const notifier=observable.b.getNotifier(o);notifier.unsubscribe(this,"selected"),o.selected=filteredNext.includes(o),notifier.subscribe(this,"selected")}))}selectFirstOption(){var _a,_b;this.disabled||(this.selectedIndex=null!==(_b=null===(_a=this.options)||void 0===_a?void 0:_a.findIndex((o=>!o.disabled)))&&void 0!==_b?_b:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function findLastIndex(array,predicate){let k=array.length;for(;k--;)if(predicate(array[k],k,array))return k;return-1}(this.options,(o=>!o.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var _a,_b;this.selectedIndex=null!==(_b=null===(_a=this.options)||void 0===_a?void 0:_a.findIndex((el=>el.defaultSelected)))&&void 0!==_b?_b:-1}setSelectedOptions(){var _a,_b,_c;(null===(_a=this.options)||void 0===_a?void 0:_a.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(_c=null===(_b=this.firstSelectedOption)||void 0===_b?void 0:_b.id)&&void 0!==_c?_c:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(prev,next){this.options=next.reduce(((options,item)=>(isListboxOption(item)&&options.push(item),options)),[]);const setSize=`${this.options.length}`;this.options.forEach(((option,index)=>{option.id||(option.id=function uniqueId(prefix=""){return`${prefix}${uniqueIdCounter++}`}("option-")),option.ariaPosInSet=`${index+1}`,option.ariaSetSize=setSize})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(prev,next){if(this.$fastController.isConnected){const typeaheadMatches=this.getTypeaheadMatches();if(typeaheadMatches.length){const selectedIndex=this.options.indexOf(typeaheadMatches[0]);selectedIndex>-1&&(this.selectedIndex=selectedIndex)}this.typeaheadExpired=!1}}}listbox_Listbox.slottedOptionFilter=n=>isListboxOption(n)&&!n.hidden,listbox_Listbox.TYPE_AHEAD_TIMEOUT_MS=1e3,Object(tslib_es6.a)([Object(attributes.c)({mode:"boolean"})],listbox_Listbox.prototype,"disabled",void 0),Object(tslib_es6.a)([observable.d],listbox_Listbox.prototype,"selectedIndex",void 0),Object(tslib_es6.a)([observable.d],listbox_Listbox.prototype,"selectedOptions",void 0),Object(tslib_es6.a)([observable.d],listbox_Listbox.prototype,"slottedOptions",void 0),Object(tslib_es6.a)([observable.d],listbox_Listbox.prototype,"typeaheadBuffer",void 0);class DelegatesARIAListbox{}Object(tslib_es6.a)([observable.d],DelegatesARIAListbox.prototype,"ariaActiveDescendant",void 0),Object(tslib_es6.a)([observable.d],DelegatesARIAListbox.prototype,"ariaDisabled",void 0),Object(tslib_es6.a)([observable.d],DelegatesARIAListbox.prototype,"ariaExpanded",void 0),Object(tslib_es6.a)([observable.d],DelegatesARIAListbox.prototype,"ariaMultiSelectable",void 0),Object(apply_mixins.a)(DelegatesARIAListbox,aria_global.a),Object(apply_mixins.a)(listbox_Listbox,DelegatesARIAListbox);var template=__webpack_require__(279),slotted=__webpack_require__(915),esm_dom=__webpack_require__(29);function inRange(value,min,max=0){return[min,max]=[min,max].sort(((a,b)=>a-b)),min<=value&&value<max}class listbox_element_ListboxElement extends listbox_Listbox{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var _a;return null===(_a=this.options)||void 0===_a?void 0:_a.filter((o=>o.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(prev,next){var _a,_b;this.ariaActiveDescendant=null!==(_b=null===(_a=this.options[next])||void 0===_a?void 0:_a.id)&&void 0!==_b?_b:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const activeItem=this.activeOption;activeItem&&(activeItem.checked=!0)}checkFirstOption(preserveChecked=!1){preserveChecked?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((o,i)=>{o.checked=inRange(i,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(preserveChecked=!1){preserveChecked?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((o,i)=>{o.checked=inRange(i,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(preserveChecked=!1){preserveChecked?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((o,i)=>{o.checked=inRange(i,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(preserveChecked=!1){preserveChecked?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((o,i)=>{o.checked=inRange(i,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var _a;if(!this.multiple)return super.clickHandler(e);const captured=null===(_a=e.target)||void 0===_a?void 0:_a.closest("[role=option]");return captured&&!captured.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(captured),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:key,shiftKey:shiftKey}=e;switch(this.shouldSkipFocus=!1,key){case key_codes.f:return void this.checkFirstOption(shiftKey);case key_codes.a:return void this.checkNextOption(shiftKey);case key_codes.b:return void this.checkPreviousOption(shiftKey);case key_codes.c:return void this.checkLastOption(shiftKey);case key_codes.h:return this.focusAndScrollOptionIntoView(),!0;case key_codes.e:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case key_codes.g:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===key.length&&this.handleTypeAhead(`${key}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(prev,next){var _a;this.ariaMultiSelectable=next?"true":null,null===(_a=this.options)||void 0===_a||_a.forEach((o=>{o.checked=!next&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((o=>o.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(prev,next){var _a;const size=Math.max(0,parseInt(null!==(_a=null==next?void 0:next.toFixed())&&void 0!==_a?_a:"",10));size!==next&&esm_dom.a.queueUpdate((()=>{this.size=size}))}toggleSelectedForAllCheckedOptions(){const enabledCheckedOptions=this.checkedOptions.filter((o=>!o.disabled)),force=!enabledCheckedOptions.every((o=>o.selected));enabledCheckedOptions.forEach((o=>o.selected=force)),this.selectedIndex=this.options.indexOf(enabledCheckedOptions[enabledCheckedOptions.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(prev,next){if(this.multiple){if(this.$fastController.isConnected){const typeaheadMatches=this.getTypeaheadMatches(),activeIndex=this.options.indexOf(typeaheadMatches[0]);activeIndex>-1&&(this.activeIndex=activeIndex,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(prev,next)}uncheckAllOptions(preserveChecked=!1){this.options.forEach((o=>o.checked=!this.multiple&&void 0)),preserveChecked||(this.rangeStartIndex=-1)}}Object(tslib_es6.a)([observable.d],listbox_element_ListboxElement.prototype,"activeIndex",void 0),Object(tslib_es6.a)([Object(attributes.c)({mode:"boolean"})],listbox_element_ListboxElement.prototype,"multiple",void 0),Object(tslib_es6.a)([Object(attributes.c)({converter:attributes.e})],listbox_element_ListboxElement.prototype,"size",void 0);var css=__webpack_require__(361),display=__webpack_require__(905),design_tokens=__webpack_require__(4),styles_focus=__webpack_require__(225);const listboxStyles=(context,definition)=>css.a`
    ${Object(display.a)("inline-flex")} :host {
      border: calc(${design_tokens.O} * 1px) solid ${design_tokens.N};
      border-radius: calc(${design_tokens.l} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${design_tokens.n} * 1px) 0;
    }

    ::slotted(${context.tagFor(listbox_option_ListboxOption)}) {
      margin: 0 calc(${design_tokens.n} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${styles_focus.a}
    }
  `;const fluentListbox=class esm_listbox_Listbox extends listbox_Listbox{}.compose({baseName:"listbox",template:(context,definition)=>template.a`
    <template
        aria-activedescendant="${x=>x.ariaActiveDescendant}"
        aria-multiselectable="${x=>x.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${x=>x.disabled?null:"0"}"
        @click="${(x,c)=>x.clickHandler(c.event)}"
        @focusin="${(x,c)=>x.focusinHandler(c.event)}"
        @keydown="${(x,c)=>x.keydownHandler(c.event)}"
        @mousedown="${(x,c)=>x.mousedownHandler(c.event)}"
    >
        <slot
            ${Object(slotted.a)({filter:listbox_element_ListboxElement.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:listboxStyles})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return fluentProgressRing}));var tslib_es6=__webpack_require__(9),attributes=__webpack_require__(48),observable=__webpack_require__(50),foundation_element=__webpack_require__(89);class base_progress_BaseProgress extends foundation_element.a{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const min="number"==typeof this.min?this.min:0,max="number"==typeof this.max?this.max:100,value="number"==typeof this.value?this.value:0,range=max-min;this.percentComplete=0===range?0:Math.fround((value-min)/range*100)}}Object(tslib_es6.a)([Object(attributes.c)({converter:attributes.e})],base_progress_BaseProgress.prototype,"value",void 0),Object(tslib_es6.a)([Object(attributes.c)({converter:attributes.e})],base_progress_BaseProgress.prototype,"min",void 0),Object(tslib_es6.a)([Object(attributes.c)({converter:attributes.e})],base_progress_BaseProgress.prototype,"max",void 0),Object(tslib_es6.a)([Object(attributes.c)({mode:"boolean"})],base_progress_BaseProgress.prototype,"paused",void 0),Object(tslib_es6.a)([observable.d],base_progress_BaseProgress.prototype,"percentComplete",void 0);var template=__webpack_require__(279);const isFunction=object=>"function"==typeof object,noTemplate=()=>null;function normalizeBinding(value){return void 0===value?noTemplate:isFunction(value)?value:()=>value}var css=__webpack_require__(361),system_colors=__webpack_require__(907),display=__webpack_require__(905),match_media_stylesheet_behavior=__webpack_require__(906),size=__webpack_require__(360),design_tokens=__webpack_require__(4);const progressRingStyles=(context,definition)=>css.a`
    ${Object(display.a)("flex")} :host {
      align-items: center;
      height: calc(${size.a} * 1px);
      width: calc(${size.a} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${design_tokens.c};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${design_tokens.c};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${design_tokens.E};
    }

    :host(.paused) .determinate {
      stroke: ${design_tokens.E};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(Object(match_media_stylesheet_behavior.a)(css.a`
        .background {
          stroke: ${system_colors.a.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${system_colors.a.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${system_colors.a.GrayText};
        }
      `));const fluentProgressRing=class progress_ring_ProgressRing extends base_progress_BaseProgress{}.compose({baseName:"progress-ring",template:(context,definition)=>template.a`
    <template
        role="progressbar"
        aria-valuenow="${x=>x.value}"
        aria-valuemin="${x=>x.min}"
        aria-valuemax="${x=>x.max}"
        class="${x=>x.paused?"paused":""}"
    >
        ${function when(binding,templateOrTemplateBinding,elseTemplateOrTemplateBinding){const dataBinding=isFunction(binding)?binding:()=>binding,templateBinding=normalizeBinding(templateOrTemplateBinding),elseBinding=normalizeBinding(elseTemplateOrTemplateBinding);return(source,context)=>dataBinding(source,context)?templateBinding(source,context):elseBinding(source,context)}((x=>"number"==typeof x.value),template.a`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${x=>44*x.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,template.a`
                <slot name="indeterminate" slot="indeterminate">
                    ${definition.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:progressRingStyles,indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return fluentCard}));var tslib_es6=__webpack_require__(10),foundation_element=__webpack_require__(89);class card_Card extends foundation_element.a{}var composed_parent=__webpack_require__(223),template=__webpack_require__(279);var observable=__webpack_require__(50),attributes=__webpack_require__(48),parse_color=__webpack_require__(916),design_tokens=__webpack_require__(4),color_swatch=__webpack_require__(62),palette=__webpack_require__(227),css=__webpack_require__(361),display=__webpack_require__(905),match_media_stylesheet_behavior=__webpack_require__(906),system_colors=__webpack_require__(907),design_token=__webpack_require__(496);const elevationShadowRecipe=design_token.a.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(element,size,reference)=>{let ambientOpacity=.12,directionalOpacity=.14;size>16&&(ambientOpacity=.2,directionalOpacity=.24);return`${`0 0 2px rgba(0, 0, 0, ${ambientOpacity})`}, ${`0 calc(${size} * 0.5px) calc((${size} * 1px)) rgba(0, 0, 0, ${directionalOpacity})`}`}}),elevationShadowCardRestSize=design_token.a.create("elevation-shadow-card-rest-size").withDefault(4),elevationShadowCardHoverSize=design_token.a.create("elevation-shadow-card-hover-size").withDefault(8),elevationShadowCardActiveSize=design_token.a.create("elevation-shadow-card-active-size").withDefault(0),elevationShadowCardFocusSize=design_token.a.create("elevation-shadow-card-focus-size").withDefault(8),elevationShadowCardRest=design_token.a.create("elevation-shadow-card-rest").withDefault((element=>elevationShadowRecipe.getValueFor(element).evaluate(element,elevationShadowCardRestSize.getValueFor(element)))),elevationShadowTooltipSize=(design_token.a.create("elevation-shadow-card-hover").withDefault((element=>elevationShadowRecipe.getValueFor(element).evaluate(element,elevationShadowCardHoverSize.getValueFor(element)))),design_token.a.create("elevation-shadow-card-active").withDefault((element=>elevationShadowRecipe.getValueFor(element).evaluate(element,elevationShadowCardActiveSize.getValueFor(element)))),design_token.a.create("elevation-shadow-card-focus").withDefault((element=>elevationShadowRecipe.getValueFor(element).evaluate(element,elevationShadowCardFocusSize.getValueFor(element)))),design_token.a.create("elevation-shadow-tooltip-size").withDefault(16)),elevationShadowFlyoutSize=(design_token.a.create("elevation-shadow-tooltip").withDefault((element=>elevationShadowRecipe.getValueFor(element).evaluate(element,elevationShadowTooltipSize.getValueFor(element)))),design_token.a.create("elevation-shadow-flyout-size").withDefault(32)),elevationShadowDialogSize=(design_token.a.create("elevation-shadow-flyout").withDefault((element=>elevationShadowRecipe.getValueFor(element).evaluate(element,elevationShadowFlyoutSize.getValueFor(element)))),design_token.a.create("elevation-shadow-dialog-size").withDefault(128)),cardStyles=(design_token.a.create("elevation-shadow-dialog").withDefault((element=>elevationShadowRecipe.getValueFor(element).evaluate(element,elevationShadowDialogSize.getValueFor(element)))),(context,definition)=>css.a`
    ${Object(display.a)("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${design_tokens.p};
      color: ${design_tokens.F};
      border: calc(${design_tokens.O} * 1px) solid ${design_tokens.M};
      border-radius: calc(${design_tokens.w} * 1px);
      box-shadow: ${elevationShadowCardRest};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Object(match_media_stylesheet_behavior.a)(css.a`
        :host {
          background: ${system_colors.a.Canvas};
          color: ${system_colors.a.CanvasText};
        }
      `)));class esm_card_Card extends card_Card{cardFillColorChanged(prev,next){if(next){const parsedColor=Object(parse_color.a)(next);null!==parsedColor&&(this.neutralPaletteSource=next,design_tokens.p.setValueFor(this,color_swatch.a.create(parsedColor.r,parsedColor.g,parsedColor.b)))}}neutralPaletteSourceChanged(prev,next){if(next){const color=Object(parse_color.a)(next),swatch=color_swatch.a.create(color.r,color.g,color.b);design_tokens.G.setValueFor(this,palette.a.create(swatch))}}handleChange(source,propertyName){this.cardFillColor||design_tokens.p.setValueFor(this,(target=>design_tokens.z.getValueFor(target).evaluate(target,design_tokens.p.getValueFor(source)).rest))}connectedCallback(){super.connectedCallback();const parent=Object(composed_parent.a)(this);if(parent){const parentNotifier=observable.b.getNotifier(parent);parentNotifier.subscribe(this,"fillColor"),parentNotifier.subscribe(this,"neutralPalette"),this.handleChange(parent,"fillColor")}}}Object(tslib_es6.b)([Object(attributes.c)({attribute:"card-fill-color",mode:"fromView"})],esm_card_Card.prototype,"cardFillColor",void 0),Object(tslib_es6.b)([Object(attributes.c)({attribute:"neutral-palette-source",mode:"fromView"})],esm_card_Card.prototype,"neutralPaletteSource",void 0);const fluentCard=esm_card_Card.compose({baseName:"card",baseClass:card_Card,template:(context,definition)=>template.a`
    <slot></slot>
`,styles:cardStyles})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return provideFluentDesignSystem}));var fast_definitions=__webpack_require__(221),foundation_element=__webpack_require__(89),di=__webpack_require__(132),design_token=__webpack_require__(496),component_presentation=__webpack_require__(222);const ElementDisambiguation=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),elementTypesByTag=new Map,elementTagsByType=new Map;let rootDesignSystem=null;const designSystemKey=di.a.createInterface((x=>x.cachedCallback((handler=>(null===rootDesignSystem&&(rootDesignSystem=new design_system_DefaultDesignSystem(null,handler)),rootDesignSystem))))),DesignSystem=Object.freeze({tagFor:type=>elementTagsByType.get(type),responsibleFor(element){const owned=element.$$designSystem$$;if(owned)return owned;return di.a.findResponsibleContainer(element).get(designSystemKey)},getOrCreate(node){if(!node)return null===rootDesignSystem&&(rootDesignSystem=di.a.getOrCreateDOMContainer().get(designSystemKey)),rootDesignSystem;const owned=node.$$designSystem$$;if(owned)return owned;const container=di.a.getOrCreateDOMContainer(node);if(container.has(designSystemKey,!1))return container.get(designSystemKey);{const system=new design_system_DefaultDesignSystem(node,container);return container.register(di.b.instance(designSystemKey,system)),system}}});class design_system_DefaultDesignSystem{constructor(owner,container){this.owner=owner,this.container=container,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>ElementDisambiguation.definitionCallbackOnly,null!==owner&&(owner.$$designSystem$$=this)}withPrefix(prefix){return this.prefix=prefix,this}withShadowRootMode(mode){return this.shadowRootMode=mode,this}withElementDisambiguation(callback){return this.disambiguate=callback,this}withDesignTokenRoot(root){return this.designTokenRoot=root,this}register(...registrations){const container=this.container,elementDefinitionEntries=[],disambiguate=this.disambiguate,shadowRootMode=this.shadowRootMode,context={elementPrefix:this.prefix,tryDefineElement(params,elementDefinitionType,elementDefinitionCallback){const extractedParams=function extractTryDefineElementParams(params,elementDefinitionType,elementDefinitionCallback){return"string"==typeof params?{name:params,type:elementDefinitionType,callback:elementDefinitionCallback}:params}(params,elementDefinitionType,elementDefinitionCallback),{name:name,callback:callback,baseClass:baseClass}=extractedParams;let{type:type}=extractedParams,elementName=name,typeFoundByName=elementTypesByTag.get(elementName),needsDefine=!0;for(;typeFoundByName;){const result=disambiguate(elementName,type,typeFoundByName);switch(result){case ElementDisambiguation.ignoreDuplicate:return;case ElementDisambiguation.definitionCallbackOnly:needsDefine=!1,typeFoundByName=void 0;break;default:elementName=result,typeFoundByName=elementTypesByTag.get(elementName)}}needsDefine&&((elementTagsByType.has(type)||type===foundation_element.a)&&(type=class extends type{}),elementTypesByTag.set(elementName,type),elementTagsByType.set(type,elementName),baseClass&&elementTagsByType.set(baseClass,elementName)),elementDefinitionEntries.push(new design_system_ElementDefinitionEntry(container,elementName,type,shadowRootMode,callback,needsDefine))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&design_token.a.registerRoot(this.designTokenRoot)),container.registerWithContext(context,...registrations);for(const entry of elementDefinitionEntries)entry.callback(entry),entry.willDefine&&null!==entry.definition&&entry.definition.define();return this}}class design_system_ElementDefinitionEntry{constructor(container,name,type,shadowRootMode,callback,willDefine){this.container=container,this.name=name,this.type=type,this.shadowRootMode=shadowRootMode,this.callback=callback,this.willDefine=willDefine,this.definition=null}definePresentation(presentation){component_presentation.a.define(this.name,presentation,this.container)}defineElement(definition){this.definition=new fast_definitions.a(this.type,Object.assign(Object.assign({},definition),{name:this.name}))}tagFor(type){return DesignSystem.tagFor(type)}}function provideFluentDesignSystem(element){return DesignSystem.getOrCreate(element).withPrefix("fluent")}},function(module,__webpack_exports__,__webpack_require__){"use strict";function canUseDOM(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function isHTMLElement(...args){return args.every((arg=>arg instanceof HTMLElement))}let _canUseFocusVisible;function canUseFocusVisible(){if("boolean"==typeof _canUseFocusVisible)return _canUseFocusVisible;if(!canUseDOM())return _canUseFocusVisible=!1,_canUseFocusVisible;const styleElement=document.createElement("style"),styleNonce=function getNonce(){const node=document.querySelector('meta[property="csp-nonce"]');return node?node.getAttribute("content"):null}();null!==styleNonce&&styleElement.setAttribute("nonce",styleNonce),document.head.appendChild(styleElement);try{styleElement.sheet.insertRule("foo:focus-visible {color:inherit}",0),_canUseFocusVisible=!0}catch(e){_canUseFocusVisible=!1}finally{document.head.removeChild(styleElement)}return _canUseFocusVisible}__webpack_require__.d(__webpack_exports__,"b",(function(){return isHTMLElement})),__webpack_require__.d(__webpack_exports__,"a",(function(){return canUseFocusVisible}))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return slotted}));var html_directive=__webpack_require__(128),observable=__webpack_require__(50),platform=__webpack_require__(61);class node_observation_NodeObservationBehavior{constructor(target,options){this.target=target,this.options=options,this.source=null}bind(source){const name=this.options.property;this.shouldUpdate=observable.b.getAccessors(source).some((x=>x.name===name)),this.source=source,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(platform.d),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let nodes=this.getNodes();return void 0!==this.options.filter&&(nodes=nodes.filter(this.options.filter)),nodes}updateTarget(value){this.source[this.options.property]=value}}class slotted_SlottedBehavior extends node_observation_NodeObservationBehavior{constructor(target,options){super(target,options)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function slotted(propertyOrOptions){return"string"==typeof propertyOrOptions&&(propertyOrOptions={property:propertyOrOptions}),new html_directive.a("fast-slotted",slotted_SlottedBehavior,propertyOrOptions)}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return parseColorHexRGB}));var color_rgba_64=__webpack_require__(26),math_utilities=__webpack_require__(7);const hexRGBRegex=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function parseColorHexRGB(raw){const result=hexRGBRegex.exec(raw);if(null===result)return null;let digits=result[1];if(3===digits.length){const r=digits.charAt(0),g=digits.charAt(1),b=digits.charAt(2);digits=r.concat(r,g,g,b,b)}const rawInt=parseInt(digits,16);return isNaN(rawInt)?null:new color_rgba_64.a(Object(math_utilities.g)((16711680&rawInt)>>>16,0,255),Object(math_utilities.g)((65280&rawInt)>>>8,0,255),Object(math_utilities.g)(255&rawInt,0,255),1)}}]]);