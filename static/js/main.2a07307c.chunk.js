(this["webpackJsonprich-text-editor"]=this["webpackJsonprich-text-editor"]||[]).push([[0],{155:function(e,t,o){},260:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(88),c=o.n(i),a=(o(155),o(20)),l=(o(252),o(303)),s=o(304),d=o(300),j=o(305),b=o(135),h=o.n(b),x=o(136),O=o.n(x),u=o(137),m=o.n(u),p=o(138),g=o.n(p),S=o(139),k=o.n(S),C=o(140),E=o.n(C),R=o(141),f=o.n(R),I=o(142),U=o.n(I),B=o(145),v=o(2);const y=Object(B.a)(d.a)({transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.2)",backgroundColor:"rgba(0, 0, 0, 0.1)"}});var L=e=>{let{onBold:t,onItalic:o,onUnderline:n,onStrikethrough:r,onBulletList:i,onNumberList:c,onUndo:a,onRedo:d}=e;return Object(v.jsx)(l.a,{position:"static",color:"primary",children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(j.a,{variant:"h6",sx:{flexGrow:1},children:"Rich Text Editor"}),Object(v.jsx)(y,{color:"inherit",onClick:t,"aria-label":"Bold",children:Object(v.jsx)(h.a,{})}),Object(v.jsx)(y,{color:"inherit",onClick:o,"aria-label":"Italic",children:Object(v.jsx)(O.a,{})}),Object(v.jsx)(y,{color:"inherit",onClick:n,"aria-label":"Underline",children:Object(v.jsx)(m.a,{})}),Object(v.jsx)(y,{color:"inherit",onClick:r,"aria-label":"Strikethrough",children:Object(v.jsx)(g.a,{})}),Object(v.jsx)(y,{color:"inherit",onClick:i,"aria-label":"Bullet List",children:Object(v.jsx)(k.a,{})}),Object(v.jsx)(y,{color:"inherit",onClick:c,"aria-label":"Number List",children:Object(v.jsx)(E.a,{})}),Object(v.jsx)(y,{color:"inherit",onClick:a,"aria-label":"Undo",children:Object(v.jsx)(f.a,{})}),Object(v.jsx)(y,{color:"inherit",onClick:d,"aria-label":"Redo",children:Object(v.jsx)(U.a,{})})]})})},T=o(301),w=o(302),N=o(143);const D=Object(B.a)(T.a)({padding:"16px",marginTop:"16px",minHeight:"200px",cursor:"text",transition:"border 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{border:"1px solid #3f51b5",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}),J=a.DefaultDraftBlockRenderMap,H=Object(N.debounce)((e=>{localStorage.setItem("content",JSON.stringify(e))}),1e3);var K=()=>{const[e,t]=Object(n.useState)((()=>{const e=localStorage.getItem("content");return e?a.EditorState.createWithContent(Object(a.convertFromRaw)(JSON.parse(e))):a.EditorState.createEmpty()}));Object(n.useEffect)((()=>{const t=e.getCurrentContent();H(Object(a.convertToRaw)(t))}),[e]);const o=o=>{t(a.RichUtils.toggleInlineStyle(e,o))},r=o=>{t(a.RichUtils.toggleBlockType(e,o))};return Object(v.jsxs)(w.a,{maxWidth:"md",children:[Object(v.jsx)(L,{onBold:()=>o("BOLD"),onItalic:()=>o("ITALIC"),onUnderline:()=>o("UNDERLINE"),onStrikethrough:()=>o("STRIKETHROUGH"),onBulletList:()=>r("unordered-list-item"),onNumberList:()=>r("ordered-list-item"),onUndo:()=>t(a.EditorState.undo(e)),onRedo:()=>t(a.EditorState.redo(e))}),Object(v.jsx)(D,{onClick:()=>t(a.EditorState.moveFocusToEnd(e)),children:Object(v.jsx)(a.Editor,{editorState:e,handleKeyCommand:o=>{const n=a.RichUtils.handleKeyCommand(e,o);return n?(t(n),"handled"):"not-handled"},blockRenderMap:J,placeholder:"Start typing...",onChange:t})})]})};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(K,{})}),document.getElementById("root"))}},[[260,1,2]]]);
//# sourceMappingURL=main.2a07307c.chunk.js.map