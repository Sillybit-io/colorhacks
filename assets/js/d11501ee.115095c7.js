"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15],{1824:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"api/interfaces/GenerateThemeOptions","title":"GenerateThemeOptions\\\\<T\\\\>","description":"Options for generating a color theme","source":"@site/docs/api/interfaces/GenerateThemeOptions.md","sourceDirName":"api/interfaces","slug":"/api/interfaces/GenerateThemeOptions","permalink":"/colorhacks/docs/api/interfaces/GenerateThemeOptions","draft":false,"unlisted":false,"editUrl":"https://github.com/sillybit-io/colorhacks/tree/main/website/docs/api/interfaces/GenerateThemeOptions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"ExpandedColorTheme","permalink":"/colorhacks/docs/api/interfaces/ExpandedColorTheme"},"next":{"title":"GetColorNameFromHexOptions","permalink":"/colorhacks/docs/api/interfaces/GetColorNameFromHexOptions"}}');var r=i(6070),l=i(2907);const s={},a="GenerateThemeOptions<T>",d={},o=[{value:"Example",id:"example",level:2},{value:"Type Parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"baseColor",id:"basecolor",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"colorScheme?",id:"colorscheme",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"errorHue?",id:"errorhue",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"expandPalette?",id:"expandpalette",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"infoHue?",id:"infohue",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"successHue?",id:"successhue",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"warningHue?",id:"warninghue",level:3},{value:"Defined in",id:"defined-in-6",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"generatethemeoptionst",children:"GenerateThemeOptions<T>"})}),"\n",(0,r.jsx)(n.p,{children:"Options for generating a color theme"}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const options: GenerateThemeOptions = {\n  baseColor: '#ff0000',\n  expandPalette: true,\n  colorScheme: 'complementary',\n  infoHue: 200,\n  successHue: 120,\n  warningHue: 40,\n  errorHue: 0\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type Parameter"}),(0,r.jsx)(n.th,{children:"Default type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"T"})," ",(0,r.jsx)(n.em,{children:"extends"})," ",(0,r.jsx)(n.code,{children:"boolean"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Boolean type parameter that determines if the theme palette should be expanded"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"basecolor",children:"baseColor"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"baseColor: `#${string}`;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The base color to generate the theme from"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/tailwind/tailwind.type.ts#L45",children:"tailwind/tailwind.type.ts:45"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"colorscheme",children:"colorScheme?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"optional colorScheme: ColorSchemeType;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The type of color scheme to generate"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/tailwind/tailwind.type.ts#L47",children:"tailwind/tailwind.type.ts:47"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"errorhue",children:"errorHue?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"optional errorHue: number;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The hue value for error colors"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/tailwind/tailwind.type.ts#L51",children:"tailwind/tailwind.type.ts:51"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"expandpalette",children:"expandPalette?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"optional expandPalette: T;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Whether to generate an expanded palette with additional shades"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/tailwind/tailwind.type.ts#L46",children:"tailwind/tailwind.type.ts:46"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"infohue",children:"infoHue?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"optional infoHue: number;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The hue value for info colors"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/tailwind/tailwind.type.ts#L48",children:"tailwind/tailwind.type.ts:48"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"successhue",children:"successHue?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"optional successHue: number;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The hue value for success colors"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/tailwind/tailwind.type.ts#L49",children:"tailwind/tailwind.type.ts:49"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"warninghue",children:"warningHue?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"optional warningHue: number;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The hue value for warning colors"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/65202bb6da0411a11e7fe2f61bc3ee36de485aeb/src/features/tailwind/tailwind.type.ts#L50",children:"tailwind/tailwind.type.ts:50"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2907:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(758);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);