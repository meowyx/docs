"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1749],{8503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"node-guide/tasks/multiple","title":"Install multiple nodes on a single machine","description":"The default GaiaNet installer installs the node into the $HOME/gaianet base directory.","source":"@site/versioned_docs/version-1.0.0/node-guide/tasks/multiple.md","sourceDirName":"node-guide/tasks","slug":"/node-guide/tasks/multiple","permalink":"/1.0.0/node-guide/tasks/multiple","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/versioned_docs/version-1.0.0/node-guide/tasks/multiple.md","tags":[],"version":"1.0.0","sidebarPosition":103,"frontMatter":{"sidebar_position":103},"sidebar":"tutorialSidebar","previous":{"title":"Install CUDA on Linux","permalink":"/1.0.0/node-guide/tasks/cuda"},"next":{"title":"Run a local-only node","permalink":"/1.0.0/node-guide/tasks/local"}}');var o=t(4848),i=t(8453);const a={sidebar_position:103},d="Install multiple nodes on a single machine",l={},r=[];function c(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"install-multiple-nodes-on-a-single-machine",children:"Install multiple nodes on a single machine"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"../quick-start",children:"default GaiaNet installer"})," installs the node into the ",(0,o.jsx)(n.code,{children:"$HOME/gaianet"}),' base directory.\nYou could install multiple nodes on the same machine. Each node has its own "base directory".\nTo do that, you just need to use the ',(0,o.jsx)(n.code,{children:"--base"})," option."]}),"\n",(0,o.jsxs)(n.p,{children:["Let's say that the base directory for your second node is ",(0,o.jsx)(n.code,{children:"$HOME/node-2"}),".\nYou can install GaiaNet node software using the following command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"curl -sSfL 'https://raw.githubusercontent.com/GaiaNet-AI/gaianet-node/main/install.sh' | bash -s -- --base $HOME/node-2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After that, you can specify the ",(0,o.jsx)(n.code,{children:"gaianet"})," CLI to operate on ",(0,o.jsx)(n.code,{children:"node-2"})," by appending the ",(0,o.jsx)(n.code,{children:"--base"})," option as well."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gaianet init --base $HOME/node-2\ngaianet start --base $HOME/node-2\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);