(this["webpackJsonprich-text-editor"]=this["webpackJsonprich-text-editor"]||[]).push([[0],{154:function(e,t,o){},258:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),i=o(88),c=o.n(i),a=(o(154),o(20)),l=(o(251),o(301)),s=o(302),d=o(298),j=o(303),h=o(135),b=o.n(h),x=o(136),O=o.n(x),u=o(137),m=o.n(u),p=o(138),g=o.n(p),S=o(139),k=o.n(S),C=o(140),E=o.n(C),R=o(141),f=o.n(R),I=o(142),U=o.n(I),v=o(144),B=o(2);const y=Object(v.a)(d.a)((e=>{let{theme:t}=e;return{transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.2)",backgroundColor:t.palette.action.hover}}}));var L=e=>{let{onBold:t,onItalic:o,onUnderline:n,onStrikethrough:r,onBulletList:i,onNumberList:c,onUndo:a,onRedo:d}=e;return Object(B.jsx)(l.a,{position:"static",color:"primary",children:Object(B.jsxs)(s.a,{children:[Object(B.jsx)(j.a,{variant:"h6",sx:{flexGrow:1},children:"Rich Text Editor"}),Object(B.jsx)(y,{color:"inherit",onClick:t,"aria-label":"Bold",children:Object(B.jsx)(b.a,{})}),Object(B.jsx)(y,{color:"inherit",onClick:o,"aria-label":"Italic",children:Object(B.jsx)(O.a,{})}),Object(B.jsx)(y,{color:"inherit",onClick:n,"aria-label":"Underline",children:Object(B.jsx)(m.a,{})}),Object(B.jsx)(y,{color:"inherit",onClick:r,"aria-label":"Strikethrough",children:Object(B.jsx)(g.a,{})}),Object(B.jsx)(y,{color:"inherit",onClick:i,"aria-label":"Bullet List",children:Object(B.jsx)(k.a,{})}),Object(B.jsx)(y,{color:"inherit",onClick:c,"aria-label":"Number List",children:Object(B.jsx)(E.a,{})}),Object(B.jsx)(y,{color:"inherit",onClick:a,"aria-label":"Undo",children:Object(B.jsx)(f.a,{})}),Object(B.jsx)(y,{color:"inherit",onClick:d,"aria-label":"Redo",children:Object(B.jsx)(U.a,{})})]})})},T=o(299),w=o(300);const N=Object(v.a)(T.a)({padding:"16px",marginTop:"16px",minHeight:"200px",cursor:"text",transition:"border 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{border:"1px solid #3f51b5",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}}),D=a.DefaultDraftBlockRenderMap;var J=()=>{const[e,t]=Object(n.useState)((()=>{const e=localStorage.getItem("content");return e?a.EditorState.createWithContent(Object(a.convertFromRaw)(JSON.parse(e))):a.EditorState.createEmpty()}));Object(n.useEffect)((()=>{const t=e.getCurrentContent();localStorage.setItem("content",JSON.stringify(Object(a.convertToRaw)(t)))}),[e]);const o=o=>{t(a.RichUtils.toggleInlineStyle(e,o))},r=o=>{t(a.RichUtils.toggleBlockType(e,o))};return Object(B.jsxs)(w.a,{maxWidth:"md",children:[Object(B.jsx)(L,{onBold:()=>o("BOLD"),onItalic:()=>o("ITALIC"),onUnderline:()=>o("UNDERLINE"),onStrikethrough:()=>o("STRIKETHROUGH"),onBulletList:()=>r("unordered-list-item"),onNumberList:()=>r("ordered-list-item"),onUndo:()=>t(a.EditorState.undo(e)),onRedo:()=>t(a.EditorState.redo(e))}),Object(B.jsx)(N,{onClick:()=>t(a.EditorState.moveFocusToEnd(e)),children:Object(B.jsx)(a.Editor,{editorState:e,handleKeyCommand:o=>{const n=a.RichUtils.handleKeyCommand(e,o);return n?(t(n),"handled"):"not-handled"},blockRenderMap:D,placeholder:"Start typing...",onChange:t})})]})};c.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(J,{})}),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.bb06333f.chunk.js.map