(this["webpackJsonprich-text-editor"]=this["webpackJsonprich-text-editor"]||[]).push([[0],{112:function(t,e,n){},213:function(t,e,n){},214:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),i=n(28),o=n.n(i),a=(n(112),n(21)),l=(n(209),n(241)),s=n(232),d=n(233),b=n(240),j=n(234),h=n(235),m=n(236),p=n(237),x=n(238),O=n(239),g=n(4);var E=t=>{let{onBold:e,onItalic:n,onUnderline:r,onImage:c,onCode:i,onTable:o}=t;return Object(g.jsx)(l.a,{position:"static",children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(d.a,{variant:"h6",children:"Rich Text Editor"}),Object(g.jsx)(b.a,{color:"inherit",onClick:e,"aria-label":"Bold",children:Object(g.jsx)(j.a,{})}),Object(g.jsx)(b.a,{color:"inherit",onClick:n,"aria-label":"Italic",children:Object(g.jsx)(h.a,{})}),Object(g.jsx)(b.a,{color:"inherit",onClick:r,"aria-label":"Underline",children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(b.a,{color:"inherit",onClick:c,"aria-label":"Insert Image",children:Object(g.jsx)(p.a,{})}),Object(g.jsx)(b.a,{color:"inherit",onClick:i,"aria-label":"Code",children:Object(g.jsx)(x.a,{})}),Object(g.jsx)(b.a,{color:"inherit",onClick:o,"aria-label":"Insert Table",children:Object(g.jsx)(O.a,{})})]})})};var u=t=>{let{block:e,contentState:n}=t;const{src:r}=n.getEntity(e.getEntityAt(0)).getData();return Object(g.jsx)("div",{contentEditable:!1,style:{resize:"both",overflow:"auto"},children:Object(g.jsx)("img",{src:r,alt:"",style:{width:"100%"}})})};var y=t=>{let{block:e,contentState:n}=t;const{table:r}=n.getEntity(e.getEntityAt(0)).getData(),c=r.split("\n").map((t=>t.split("|").slice(1,-1)));return Object(g.jsx)("table",{style:{border:"1px solid black",borderCollapse:"collapse"},children:Object(g.jsx)("tbody",{children:c.map(((t,e)=>Object(g.jsx)("tr",{children:t.map(((t,e)=>Object(g.jsx)("td",{style:{border:"1px solid black",padding:"8px"},children:t.trim()},e)))},e)))})})},C=n(2);n(213);const k=Object(C.Map)({atomic:{element:"div",wrapper:Object(g.jsx)("div",{})}}),I=a.DefaultDraftBlockRenderMap.merge(k),f=t=>{if("atomic"===t.getType()){const e=t.getData().get("type");if("image"===e)return{component:u,editable:!1};if("table"===e)return{component:y,editable:!1}}return null};var v=()=>{const[t,e]=Object(r.useState)(a.EditorState.createEmpty()),n=n=>{e(a.RichUtils.toggleInlineStyle(t,n))};return Object(g.jsxs)("div",{children:[Object(g.jsx)(E,{onBold:()=>n("BOLD"),onItalic:()=>n("ITALIC"),onUnderline:()=>n("UNDERLINE"),onImage:()=>{const n=prompt("Enter image URL");if(n){const r=t.getCurrentContent().createEntity("IMAGE","IMMUTABLE",{src:n}).getLastCreatedEntityKey();e(a.AtomicBlockUtils.insertAtomicBlock(t,r," "))}},onCode:()=>n("CODE"),onTable:()=>{const n=prompt("Enter number of rows"),r=prompt("Enter number of columns");if(n&&r){const c=Array.from({length:n},(()=>"| "+"   | ".repeat(r))).join("\n"),i=t.getCurrentContent().createEntity("TABLE","IMMUTABLE",{table:c}).getLastCreatedEntityKey();e(a.AtomicBlockUtils.insertAtomicBlock(t,i," "))}}}),Object(g.jsx)("div",{className:"editor-container",onClick:()=>e(a.EditorState.moveFocusToEnd(t)),children:Object(g.jsx)(a.Editor,{editorState:t,handleKeyCommand:n=>{const r=a.RichUtils.handleKeyCommand(t,n);return r?(e(r),"handled"):"not-handled"},blockRenderMap:I,blockRendererFn:f,placeholder:"Start typing...",onChange:e})})]})};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.d09e2e10.chunk.js.map