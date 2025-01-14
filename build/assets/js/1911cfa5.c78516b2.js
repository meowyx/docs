"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6230],{7835:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-guide/apps/zed","title":"Zed","description":"Zed is a next-generation code editor designed for high-performance collaboration with humans and AI, and it is written in Rust.  You can use Zed with your own Gaia node as the LLM backend. There are two big reasons for that","source":"@site/versioned_docs/version-1.0.0/user-guide/apps/zed.md","sourceDirName":"user-guide/apps","slug":"/user-guide/apps/zed","permalink":"/1.0.0/user-guide/apps/zed","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/versioned_docs/version-1.0.0/user-guide/apps/zed.md","tags":[],"version":"1.0.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"LlamaCloud","permalink":"/1.0.0/user-guide/apps/llamaparse"},"next":{"title":"Obsidian","permalink":"/1.0.0/user-guide/apps/obsidian"}}');var i=s(4848),r=s(8453);const o={sidebar_position:10},d="Zed",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Zed",id:"configure-zed",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"zed",children:"Zed"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://zed.dev/",children:"Zed"})," is a next-generation code editor designed for high-performance collaboration with humans and AI, and it is written in Rust.  You can use Zed with your own Gaia node as the LLM backend. There are two big reasons for that"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Your Gaia node could be supplemented by a knowledge base that is specific to your proprietary code repository, programming language choices, and coding guidelines/styles."}),"\n",(0,i.jsx)(n.li,{children:"Your Gaia node could ensure that your code stays private within your organization."}),"\n"]}),"\n",(0,i.jsx)("iframe",{width:"100%",style:{"aspect-ratio":"16 / 9"},src:"https://www.youtube.com/embed/icbFAAOZYcE",title:"A Rust coding assistant on Zed",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"You will need a Gaia node to provide LLM services to Zed. You can"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/1.0.0/node-guide/quick-start",children:"run your own node"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/1.0.0/user-guide/nodes",children:"use a public node"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we will use public ",(0,i.jsx)(n.a,{href:"https://github.com/QwenLM/Qwen2.5-Coder",children:"Qwen 2.5 Coder"})," nodes to power Cursor."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Model type"}),(0,i.jsx)(n.th,{children:"API base URL"}),(0,i.jsx)(n.th,{children:"Model name"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"General coding assistant"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://coder.gaia.domains/v1"})}),(0,i.jsx)(n.td,{children:"coder"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Coding assistant with Rust knowledge"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://rustcoder.gaia.domains/v1"})}),(0,i.jsx)(n.td,{children:"rustcoder"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Rust expert (slower but more accurate)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"https://rustexpert.gaia.domains/v1"})}),(0,i.jsx)(n.td,{children:"rustexpert"})]})]})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["A limitation of Cursor is that it does not support local LLM services. A Gaia node comes with a default networking tunnel that turns your local LLM service into a HTTPS service accessible from the Internet. That allows Cursor to use your own private LLM for coding. Start your own ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/qwen-2.5-coder-7b-instruct",children:"Qwen Coder"})," or ",(0,i.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs/tree/main/qwen-2.5-coder-7b-instruct_rustlang",children:"Qwen Coder with Rust"})," nodes today!"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configure-zed",children:"Configure Zed"}),"\n",(0,i.jsxs)(n.p,{children:["First, download and install ",(0,i.jsx)(n.a,{href:"https://zed.dev/",children:"Zed"}),". Click on your profile on the top right and choose ",(0,i.jsx)(n.strong,{children:"Setting"}),". Then a new tab called ",(0,i.jsx)(n.code,{children:"settings.json"})," will be opened. You can configure your Zed by editing this file."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6693).A+"",width:"2938",height:"1228"})}),"\n",(0,i.jsxs)(n.p,{children:["Below is the ",(0,i.jsx)(n.code,{children:"settings.json"})," we used. You can copy and paste sections ",(0,i.jsx)(n.code,{children:"language_models"})," and ",(0,i.jsx)(n.code,{children:"assistant"})," to your own. They configure Zed to use an OpenAI-compatible API provider and then specify the API endpoint URL and model name for that provider."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "features": {\n    "inline_completion_provider": "none"\n  },\n  "language_models": {\n    "openai": {\n      "version": "1",\n      "api_url": "https://rustcoder.gaia.domains/v1",\n      "low_speed_timeout_in_seconds": 60,\n      "available_models": [\n        {\n          "name": "yicoder9b",\n          "max_tokens": 8096\n        }\n      ]\n    }\n  },\n  "assistant": {\n    "provider": "openai",\n    "default_model": {\n      "provider": "openai",\n      "model": "yicoder9b"\n    },\n    "version": "2"\n  },\n  "ui_font_size": 16,\n  "buffer_font_size": 16,\n  "theme": {\n    "mode": "system",\n    "light": "One Light",\n    "dark": "One Dark"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Next we will configure the API key to access this Gaia node."}),"\n",(0,i.jsx)(n.p,{children:"Go back to the folder you opened. Click on the Star icon at the bottom to turn on the Assistant panel."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6334).A+"",width:"1586",height:"742"})}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Open configuration"})," to set up the API Key."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(1911).A+"",width:"1446",height:"728"})}),"\n",(0,i.jsxs)(n.p,{children:["Since we are using a free public Gaia node, you can use any API key in the OpenAI section at the bottom of the screen. For example, you can enter ",(0,i.jsx)(n.code,{children:"GAIA"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Now, we have everything ready."}),"\n",(0,i.jsx)(n.h1,{id:"use-zed",children:"Use Zed"}),"\n",(0,i.jsx)(n.p,{children:"You can"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Edit the highlighted code by selecting the code and clicking on the ",(0,i.jsx)(n.strong,{children:"Inline Assistant"})," button."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2920).A+"",width:"2924",height:"1114"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the Assistant panel by clicking on the ",(0,i.jsx)(n.strong,{children:"Assistant"})," icon at the bottom to turn on the Assistant panel."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(4049).A+"",width:"2922",height:"1638"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6693:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/zed-01-cf0cb473f9d2facf71d318043fca0179.png"},6334:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/zed-02-0120fdb612302c83426a76807ee18115.png"},1911:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/zed-03-71751fef612aad8f6d0b69312847f495.png"},2920:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/zed-04-693b6322554fe5bb3d0c1972ab22c709.png"},4049:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/zed-05-6785a1b71e9a38dee8d0d505d9296d2b.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);