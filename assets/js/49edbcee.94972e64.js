"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[974],{2122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/functions/getContrastRatioWCAG20","title":"getContrastRatioWCAG20()","description":"Calculate the WCAG 2.0 contrast ratio between two colors","source":"@site/docs/api/functions/getContrastRatioWCAG20.md","sourceDirName":"api/functions","slug":"/api/functions/getContrastRatioWCAG20","permalink":"/colorhacks/docs/api/functions/getContrastRatioWCAG20","draft":false,"unlisted":false,"editUrl":"https://github.com/sillybit-io/colorhacks/tree/main/website/docs/api/functions/getContrastRatioWCAG20.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"getContrastRatio()","permalink":"/colorhacks/docs/api/functions/getContrastRatio"},"next":{"title":"getHEXfromHSL()","permalink":"/colorhacks/docs/api/functions/getHEXfromHSL"}}');var s=n(6070),o=n(2907);const i={},a="getContrastRatioWCAG20()",c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getcontrastratiowcag20",children:"getContrastRatioWCAG20()"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"function getContrastRatioWCAG20(hexCode1, hexCode2): number\n"})}),"\n",(0,s.jsx)(t.p,{children:"Calculate the WCAG 2.0 contrast ratio between two colors"}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"hexCode1"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:'First color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"hexCode2"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:'Second color in hexadecimal format (e.g., "#RRGGBB" or "RRGGBB")'})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"number"})}),"\n",(0,s.jsx)(t.p,{children:"The WCAG 2.0 contrast ratio between the two colors (a number between 1 and 21)"}),"\n",(0,s.jsx)(t.h2,{id:"throws",children:"Throws"}),"\n",(0,s.jsx)(t.p,{children:"If either hexCode1 or hexCode2 is not a valid hexadecimal color code"}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'const ratio = getContrastRatioWCAG20("#FFFFFF", "#000000");\nconsole.log(ratio); // Outputs: 21\n'})}),"\n",(0,s.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/hacks/hacks.ts#L79",children:"hacks/hacks.ts:79"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2907:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(758);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);