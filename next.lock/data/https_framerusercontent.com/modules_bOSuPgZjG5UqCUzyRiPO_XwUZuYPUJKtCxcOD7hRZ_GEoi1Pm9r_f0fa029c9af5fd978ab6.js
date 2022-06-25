import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (d4eeff2)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useVariantState,RichText,Stack,Link}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import*as sharedStyle from"https://framerusercontent.com/modules/9ywEPnI9pLRIw6eUt098/QmfqksFBHI7T8HlKQEid/NcNOp6JHK.js";const cycleOrder=["fFdGd6igW","LddscMlcY","bTHDaXD71","fu8_5Bbif","zFzYqAp_Z"];const variantClassNames={"fFdGd6igW":"framer-v-1bafxho","LddscMlcY":"framer-v-n3gs2v","bTHDaXD71":"framer-v-1jggphn","fu8_5Bbif":"framer-v-zt749m","zFzYqAp_Z":"framer-v-ax6is6"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Desktop":"fFdGd6igW","Tablet":"LddscMlcY","Phone":"bTHDaXD71","Tablet Expanded":"fu8_5Bbif","Phone Expanded":"zFzYqAp_Z"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":400,"damping":30,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="fFdGd6igW",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"fFdGd6igW",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapk67jcg=activeVariantCallback(async(...args)=>{setVariant("fu8_5Bbif");});const onTap4vnkbm=activeVariantCallback(async(...args)=>{setVariant("zFzYqAp_Z");});const onTap1wwyrmu=activeVariantCallback(async(...args)=>{setVariant("LddscMlcY");});const onTap1jo1f1h=activeVariantCallback(async(...args)=>{setVariant("bTHDaXD71");});const isDisplayed1=()=>{if(["LddscMlcY","bTHDaXD71","fu8_5Bbif","zFzYqAp_Z"].includes(baseVariant))return true;return false;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-I72ha",sharedStyle.className,classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(Stack,{...restProps,layoutId:"fFdGd6igW",className:cx("framer-1bafxho",className),style:{"backgroundColor":"rgb(255, 255, 255)","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px","--border-bottom-width":"1px","--border-style":"solid","--border-color":"rgba(0, 0, 0, 0.05)",...style},transition:transition,layoutDependency:layoutDependency,as:"nav",direction:"horizontal",distribution:"center",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"25px 25px 25px 25px"},center:false,"data-framer-name":"Desktop","data-border":true,ref:ref,...addPropertyOverrides({"LddscMlcY":{"direction":"vertical","center":false,"distribution":"start","gap":0,"data-framer-name":"Tablet","__contentWrapperStyle":{"width":"100%","height":"100%","padding":"20px 20px 20px 20px"}},"bTHDaXD71":{"direction":"vertical","center":false,"distribution":"start","gap":0,"data-framer-name":"Phone","__contentWrapperStyle":{"width":"100%","height":"100%","padding":"20px 20px 20px 20px"}},"fu8_5Bbif":{"direction":"vertical","center":false,"distribution":"start","gap":0,"data-framer-name":"Tablet Expanded","__contentWrapperStyle":{"width":"100%","height":"auto","padding":"20px 20px 20px 20px"}},"zFzYqAp_Z":{"direction":"vertical","center":false,"distribution":"start","gap":0,"data-framer-name":"Phone Expanded","__contentWrapperStyle":{"width":"100%","height":"auto","padding":"20px 20px 20px 20px"}}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsxs(Stack,{layoutId:"d1Juw_KVP",className:"framer-1xcm1vq",style:{},transition:transition,layoutDependency:layoutDependency,background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px","maxWidth":"1200px"},center:false,"data-framer-name":"Icons",...addPropertyOverrides({"LddscMlcY":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null},"bTHDaXD71":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null},"fu8_5Bbif":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null},"zFzYqAp_Z":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},"background":null}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(Link,{href:"data:framer/page-link,augiA20Il",children:/*#__PURE__*/ _jsx(Stack,{layoutId:"YBwNNVTYw",className:"framer-epvuf1",style:{},transition:transition,layoutDependency:layoutDependency,as:"a",background:null,direction:"horizontal",distribution:"start",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,children:/*#__PURE__*/ _jsx(RichText,{fonts:["CUSTOM;Titillium Web Bold"],style:{"--framer-paragraph-spacing":"0px","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,layoutId:"oz92XBcsx",className:"framer-jnq3kh",transition:transition,layoutDependency:layoutDependency,__htmlStructure:"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">{{ text-placeholder }}</span></h1>",htmlFromDesign:"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">Bin Bros.</span></h1>",...addPropertyOverrides({"LddscMlcY":{"fonts":["CUSTOM;Titillium Web Bold"],"__htmlStructure":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">{{ text-placeholder }}</span></h1>","htmlFromDesign":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">Bin Bros.</span></h1>"},"bTHDaXD71":{"fonts":["CUSTOM;Titillium Web Bold"],"__htmlStructure":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">{{ text-placeholder }}</span></h1>","htmlFromDesign":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">Bin Bros.</span></h1>"},"fu8_5Bbif":{"fonts":["CUSTOM;Titillium Web Bold"],"__htmlStructure":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">{{ text-placeholder }}</span></h1>","htmlFromDesign":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">Bin Bros.</span></h1>"},"zFzYqAp_Z":{"fonts":["CUSTOM;Titillium Web Bold"],"__htmlStructure":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">{{ text-placeholder }}</span></h1>","htmlFromDesign":"<h1><span style=\"--framer-font-family:&quot;Titillium Web Bold&quot;, serif; --framer-font-style:normal; --framer-font-weight:400; --font-selector:Q1VTVE9NO1RpdGlsbGl1bSBXZWIgQm9sZA==; --framer-text-color:rgb(8, 95, 99); --framer-font-size:24px; --framer-letter-spacing:-0.3px;\">Bin Bros.</span></h1>"}},baseVariant,gestureVariant)})})}),isDisplayed1()&&/*#__PURE__*/ _jsxs(motion.div,{layoutId:"RxXQtrs_t",className:"framer-1gw9jrm",style:{},transition:transition,layoutDependency:layoutDependency,background:null,"data-framer-name":"Menu",...addPropertyOverrides({"LddscMlcY":{"onTap":onTapk67jcg,"data-highlight":true},"bTHDaXD71":{"onTap":onTap4vnkbm,"data-highlight":true},"fu8_5Bbif":{"onTap":onTap1wwyrmu,"data-highlight":true},"zFzYqAp_Z":{"onTap":onTap1jo1f1h,"data-highlight":true}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(motion.div,{layoutId:"uWh4NYJOO",className:"framer-87slnu",style:{"backgroundColor":"rgb(136, 136, 136)","rotate":0},transition:transition,layoutDependency:layoutDependency,"data-framer-name":"Bottom",variants:{"fu8_5Bbif":{"rotate":-45},"zFzYqAp_Z":{"rotate":-45}}}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"I7Nixy7Gk",className:"framer-ndxqpx",style:{"backgroundColor":"rgb(136, 136, 136)"},transition:transition,layoutDependency:layoutDependency,"data-framer-name":"Mid"}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"Q52bJgCOu",className:"framer-j2815i",style:{"backgroundColor":"rgb(136, 136, 136)","rotate":0},transition:transition,layoutDependency:layoutDependency,"data-framer-name":"Top",variants:{"fu8_5Bbif":{"rotate":45},"zFzYqAp_Z":{"rotate":45}}})]})]}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"WLQA029F4",className:"framer-1mytubk",style:{"opacity":1},transition:transition,layoutDependency:layoutDependency,background:null,direction:"horizontal",distribution:"start",alignment:"center",gap:20,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,"data-framer-name":"Links",variants:{"LddscMlcY":{"opacity":0},"bTHDaXD71":{"opacity":0}},...addPropertyOverrides({"LddscMlcY":{"center":false,"direction":"vertical","__contentWrapperStyle":{"width":"auto","height":"auto","padding":"64px 64px 64px 64px"},"background":null},"bTHDaXD71":{"center":false,"direction":"vertical","__contentWrapperStyle":{"width":"auto","height":"auto","padding":"64px 64px 64px 64px"},"background":null},"fu8_5Bbif":{"center":false,"direction":"vertical","gap":30,"__contentWrapperStyle":{"width":"auto","height":"auto","padding":"60px 60px 60px 60px"},"background":null},"zFzYqAp_Z":{"center":false,"direction":"vertical","gap":30,"__contentWrapperStyle":{"width":"auto","height":"auto","padding":"60px 60px 60px 60px"},"background":null}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(RichText,{fonts:["Inter-Medium"],style:{"--framer-paragraph-spacing":"0px"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,__link:"data:framer/page-link,fyxHY82ZH",layoutId:"S6TdtePP3",className:"framer-1nnvt6k",transition:transition,layoutDependency:layoutDependency,__htmlStructure:"<p style=\"--framer-line-height:1em; --framer-text-alignment:center;\"><a class=\"framer-styles-preset-1egf4dr\" data-styles-preset=\"NcNOp6JHK\" href=\"data:framer/page-link,fyxHY82ZH\"><span style=\"--framer-font-family:&quot;Inter-Medium&quot;, &quot;Inter&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:500; --font-selector:SW50ZXItTWVkaXVt; --framer-text-color:rgb(153, 153, 153);\">{{ text-placeholder }}</span></a></p>",htmlFromDesign:"<p style=\"--framer-line-height:1em; --framer-text-alignment:center;\"><a class=\"framer-styles-preset-1egf4dr\" data-styles-preset=\"NcNOp6JHK\" href=\"data:framer/page-link,fyxHY82ZH\"><span style=\"--framer-font-family:&quot;Inter-Medium&quot;, &quot;Inter&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:500; --font-selector:SW50ZXItTWVkaXVt; --framer-text-color:rgb(153, 153, 153);\">About</span></a></p>"}),/*#__PURE__*/ _jsx(Link,{href:"data:framer/page-link,oSqiE1i1k",children:/*#__PURE__*/ _jsx(Stack,{layoutId:"T3h9ocpKA",className:"framer-9odhrf",style:{"borderBottomLeftRadius":22,"borderBottomRightRadius":22,"borderTopRightRadius":22,"borderTopLeftRadius":22,"backgroundColor":"rgb(8, 95, 99)"},transition:transition,layoutDependency:layoutDependency,as:"a",direction:"horizontal",distribution:"center",alignment:"center",gap:8,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"10px 20px 10px 20px"},center:false,"data-reset":"button",...addPropertyOverrides({"LddscMlcY":{"center":false,"__contentWrapperStyle":{"width":"auto","height":"auto","padding":"10px 20px 10px 20px"}},"bTHDaXD71":{"center":false,"__contentWrapperStyle":{"width":"auto","height":"auto","padding":"10px 20px 10px 20px"}},"fu8_5Bbif":{"center":false,"__contentWrapperStyle":{"width":"auto","height":"auto","padding":"10px 20px 10px 20px"}},"zFzYqAp_Z":{"center":false,"__contentWrapperStyle":{"width":"auto","height":"auto","padding":"10px 20px 10px 20px"}}},baseVariant,gestureVariant),children:/*#__PURE__*/ _jsx(RichText,{fonts:["GF;DM Sans-700"],style:{"--framer-paragraph-spacing":"0px"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,layoutId:"ao19Y1MWN",className:"framer-1fswrff",transition:transition,layoutDependency:layoutDependency,__htmlStructure:"<p><span style=\"--framer-font-family:&quot;DM Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:700; --font-selector:R0Y7RE0gU2Fucy03MDA=; --framer-text-color:rgb(255, 255, 255); --framer-font-size:20px;\">{{ text-placeholder }}</span></p>",htmlFromDesign:"<p><span style=\"--framer-font-family:&quot;DM Sans&quot;, sans-serif; --framer-font-style:normal; --framer-font-weight:700; --font-selector:R0Y7RE0gU2Fucy03MDA=; --framer-text-color:rgb(255, 255, 255); --framer-font-size:20px;\">Order</span></p>"})})})]})]})})}));});const css=[".framer-I72ha [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-I72ha * { box-sizing: border-box; }",".framer-I72ha .framer-1bafxho { position: relative; overflow: hidden; width: 1200px; height: 80px; }",".framer-I72ha .framer-1xcm1vq { position: relative; overflow: visible; max-width: 1200px; width: 1px; height: min-content; flex: 1 0 0px; }",".framer-I72ha .framer-epvuf1 { position: relative; overflow: visible; width: min-content; height: min-content; flex: none; display: block; text-decoration: none; }",".framer-I72ha .framer-jnq3kh, .framer-I72ha .framer-1nnvt6k, .framer-I72ha .framer-1fswrff { position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre; }",".framer-I72ha .framer-1gw9jrm { position: relative; overflow: hidden; width: 32px; height: 32px; flex: none; }",".framer-I72ha .framer-87slnu { position: absolute; overflow: hidden; width: 24px; height: 2px; bottom: 7px; left: calc(50.00000000000002% - 24px / 2); flex: none; }",".framer-I72ha .framer-ndxqpx { position: absolute; overflow: hidden; width: 24px; height: 2px; left: calc(50.00000000000002% - 24px / 2); top: calc(50.00000000000002% - 2px / 2); flex: none; }",".framer-I72ha .framer-j2815i { position: absolute; overflow: hidden; width: 24px; height: 2px; left: calc(50.00000000000002% - 24px / 2); top: 7px; flex: none; }",".framer-I72ha .framer-1mytubk { position: relative; overflow: visible; width: min-content; height: min-content; flex: none; }",".framer-I72ha .framer-9odhrf { position: relative; width: min-content; height: min-content; flex: none; display: block; text-decoration: none; }",".framer-I72ha.framer-v-n3gs2v .framer-1bafxho { width: 810px; height: 80px; }",".framer-I72ha.framer-v-n3gs2v .framer-1xcm1vq, .framer-I72ha.framer-v-1jggphn .framer-1xcm1vq, .framer-I72ha.framer-v-zt749m .framer-1xcm1vq, .framer-I72ha.framer-v-ax6is6 .framer-1xcm1vq { width: 100%; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; }",".framer-I72ha.framer-v-n3gs2v .framer-1gw9jrm, .framer-I72ha.framer-v-1jggphn .framer-1gw9jrm, .framer-I72ha.framer-v-zt749m .framer-1gw9jrm, .framer-I72ha.framer-v-ax6is6 .framer-1gw9jrm { cursor: pointer; }",".framer-I72ha.framer-v-n3gs2v .framer-1mytubk, .framer-I72ha.framer-v-n3gs2v .framer-9odhrf, .framer-I72ha.framer-v-1jggphn .framer-1mytubk, .framer-I72ha.framer-v-1jggphn .framer-9odhrf, .framer-I72ha.framer-v-zt749m .framer-1mytubk, .framer-I72ha.framer-v-zt749m .framer-9odhrf, .framer-I72ha.framer-v-ax6is6 .framer-1mytubk, .framer-I72ha.framer-v-ax6is6 .framer-9odhrf { width: min-content; height: min-content; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; aspect-ratio: unset; }",".framer-I72ha.framer-v-n3gs2v .framer-1nnvt6k, .framer-I72ha.framer-v-1jggphn .framer-1nnvt6k, .framer-I72ha.framer-v-zt749m .framer-1nnvt6k, .framer-I72ha.framer-v-ax6is6 .framer-1nnvt6k { width: auto; height: auto; right: auto; bottom: auto; left: auto; top: auto; flex: none; align-self: auto; white-space: pre; aspect-ratio: unset; }",".framer-I72ha.framer-v-1jggphn .framer-1bafxho { width: 390px; height: 80px; }",".framer-I72ha.framer-v-zt749m .framer-1bafxho { width: 810px; height: min-content; }",".framer-I72ha.framer-v-zt749m .framer-87slnu, .framer-I72ha.framer-v-ax6is6 .framer-87slnu { width: 24px; height: 2px; right: auto; bottom: 15px; left: calc(50.00000000000002% - 24px / 2); top: auto; flex: none; aspect-ratio: unset; }",".framer-I72ha.framer-v-zt749m .framer-ndxqpx, .framer-I72ha.framer-v-ax6is6 .framer-ndxqpx { width: 2px; height: 2px; right: auto; bottom: auto; left: calc(50.00000000000002% - 2px / 2); top: calc(50.00000000000002% - 2px / 2); flex: none; aspect-ratio: unset; }",".framer-I72ha.framer-v-zt749m .framer-j2815i, .framer-I72ha.framer-v-ax6is6 .framer-j2815i { width: 24px; height: 2px; right: auto; bottom: auto; left: calc(50.00000000000002% - 24px / 2); top: 15px; flex: none; aspect-ratio: unset; }",".framer-I72ha.framer-v-ax6is6 .framer-1bafxho { width: 390px; height: min-content; }",...sharedStyle.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 80
 * @framerIntrinsicWidth 1200
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "LddscMlcY": {"layout": ["fixed", "fixed"]}, "bTHDaXD71": {"layout": ["fixed", "fixed"]}, "fu8_5Bbif": {"layout": ["fixed", "auto"]}, "zFzYqAp_Z": {"layout": ["fixed", "auto"]}}}
 */ const FramerGEoi1Pm9r=withCSS(Component,css);export default FramerGEoi1Pm9r;FramerGEoi1Pm9r.displayName="Navigation";FramerGEoi1Pm9r.defaultProps={"width":1200,"height":80};addPropertyControls(FramerGEoi1Pm9r,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["fFdGd6igW","LddscMlcY","bTHDaXD71","fu8_5Bbif","zFzYqAp_Z"],"optionTitles":["Desktop","Tablet","Phone","Tablet Expanded","Phone Expanded"]}});addFonts(FramerGEoi1Pm9r,[{"url":new URL("assets/rClzA8yDKcv6PASj9CTUGYJTK6U.ttf",import.meta.url).href,"family":"Titillium Web Bold","moduleAsset":{"url":"assets/rClzA8yDKcv6PASj9CTUGYJTK6U.ttf","localModuleIdentifier":"local-module:canvasComponent/GEoi1Pm9r:default"}},{"url":"https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitOB-sClQX6Cg.ttf","family":"DM Sans","style":"normal","weight":"700","moduleAsset":{"url":"https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitOB-sClQX6Cg.ttf","localModuleIdentifier":"local-module:canvasComponent/GEoi1Pm9r:default"}},...sharedStyle.fonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerGEoi1Pm9r","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicHeight":"80","framerIntrinsicWidth":"1200","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"LddscMlcY\": {\"layout\": [\"fixed\", \"fixed\"]}, \"bTHDaXD71\": {\"layout\": [\"fixed\", \"fixed\"]}, \"fu8_5Bbif\": {\"layout\": [\"fixed\", \"auto\"]}, \"zFzYqAp_Z\": {\"layout\": [\"fixed\", \"auto\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./GEoi1Pm9r.map