"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[490],{8350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/functions/getRgbaFromHex","title":"getRgbaFromHex()","description":"Converts a hexadecimal color code to RGBA format.","source":"@site/docs/api/functions/getRgbaFromHex.md","sourceDirName":"api/functions","slug":"/api/functions/getRgbaFromHex","permalink":"/colorhacks/docs/api/functions/getRgbaFromHex","draft":false,"unlisted":false,"editUrl":"https://github.com/sillybit-io/colorhacks/tree/main/website/docs/api/functions/getRgbaFromHex.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"getOppositeColor()","permalink":"/colorhacks/docs/api/functions/getOppositeColor"},"next":{"title":"isHSLColor()","permalink":"/colorhacks/docs/api/functions/isHSLColor"}}');var o=r(6070),s=r(2907);const i={},a="getRgbaFromHex()",c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"getrgbafromhex",children:"getRgbaFromHex()"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"function getRgbaFromHex(options): GetRgbaFromHexOutput\n"})}),"\n",(0,o.jsx)(t.p,{children:"Converts a hexadecimal color code to RGBA format."}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"options"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"/colorhacks/docs/api/interfaces/GetRgbaFromHexOptions",children:(0,o.jsx)(t.code,{children:"GetRgbaFromHexOptions"})})}),(0,o.jsx)(t.td,{children:"The options for converting hex to RGBA."})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/colorhacks/docs/api/interfaces/GetRgbaFromHexOutput",children:(0,o.jsx)(t.code,{children:"GetRgbaFromHexOutput"})})}),"\n",(0,o.jsx)(t.p,{children:"An object containing the RGBA color string and individual RGBA values."}),"\n",(0,o.jsx)(t.h2,{id:"throws",children:"Throws"}),"\n",(0,o.jsx)(t.p,{children:"If the provided hexCode is invalid."}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"getRgbaFromHex({ hexCode: '#FF0000' });\n// Returns { rgba: 'rgba(255, 0, 0, 1)', r: 255, g: 0, b: 0, a: 1 }\n\ngetRgbaFromHex({ hexCode: '#00FF00', alpha: 0.5 });\n// Returns { rgba: 'rgba(0, 255, 0, 0.5)', r: 0, g: 255, b: 0, a: 0.5 }\n\ngetRgbaFromHex({ hexCode: 'invalid' });\n// Throws an error: Invalid color\n"})}),"\n",(0,o.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/rgb/rgb.ts#L24",children:"rgb/rgb.ts:24"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2907:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(758);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);