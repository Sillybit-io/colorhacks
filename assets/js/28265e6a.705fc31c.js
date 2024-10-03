"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[808],{3645:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=t(6070),r=t(1503);const c={},i="getColorNameFromHex()",s={id:"api/functions/getColorNameFromHex",title:"getColorNameFromHex()",description:"Retrieves the color name from a given hexadecimal color code.",source:"@site/docs/api/functions/getColorNameFromHex.md",sourceDirName:"api/functions",slug:"/api/functions/getColorNameFromHex",permalink:"/colorhacks/docs/api/functions/getColorNameFromHex",draft:!1,unlisted:!1,editUrl:"https://github.com/sillybit-io/colorhacks/tree/main/website/docs/api/functions/getColorNameFromHex.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ColorNames",permalink:"/colorhacks/docs/api/enumerations/ColorNames"},next:{title:"getRgbaFromHex()",permalink:"/colorhacks/docs/api/functions/getRgbaFromHex"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Throws",id:"throws",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"getcolornamefromhex",children:"getColorNameFromHex()"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:"function getColorNameFromHex(options): GetColorNameFromHexOutput\n"})}),"\n",(0,n.jsx)(o.p,{children:"Retrieves the color name from a given hexadecimal color code."}),"\n",(0,n.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Parameter"}),(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.code,{children:"options"})}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"/colorhacks/docs/api/interfaces/GetColorNameFromHexOptions",children:(0,n.jsx)(o.code,{children:"GetColorNameFromHexOptions"})})}),(0,n.jsx)(o.td,{children:"The options object containing the hexadecimal color code."})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/colorhacks/docs/api/interfaces/GetColorNameFromHexOutput",children:(0,n.jsx)(o.code,{children:"GetColorNameFromHexOutput"})})}),"\n",(0,n.jsx)(o.p,{children:"An object containing information about the color:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"hexcode: The input hex code, normalized to lowercase with '#' prefix."}),"\n",(0,n.jsx)(o.li,{children:"colorName: The name of the closest matching color."}),"\n",(0,n.jsx)(o.li,{children:"isExactMatch: Boolean indicating if an exact match was found."}),"\n",(0,n.jsx)(o.li,{children:"shadeHex: The hex code of the closest matching color."}),"\n",(0,n.jsx)(o.li,{children:"shadeName: The name of the closest matching color (same as colorName)."}),"\n",(0,n.jsx)(o.li,{children:"distance: The color distance between the input and the closest match (0 for exact matches)."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"throws",children:"Throws"}),"\n",(0,n.jsx)(o.p,{children:"If unable to find a closest color match."}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:"const result = getColorNameFromHex({ hexCode: '#FF0000' });\n// Returns: { hexcode: '#ff0000', colorName: 'Red', isExactMatch: true, shadeHex: '#ff0000', shadeName: 'Red', distance: 0 }\n"})}),"\n",(0,n.jsx)(o.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://github.com/Sillybit-io/colorhacks/blob/f739f8e09cf6746cd42041e0e192050db80aaf7f/src/features/colorname/colorname.ts#L26",children:"colorname/colorname.ts:26"})})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1503:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>s});var n=t(758);const r={},c=n.createContext(r);function i(e){const o=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(c.Provider,{value:o},e.children)}}}]);