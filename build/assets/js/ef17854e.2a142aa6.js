"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2690],{8557:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"node-guide/cli-options","title":"GaiaNet CLI options","description":"After installing the GaiaNet software, you can use the gaianet CLI to manage the node. The following are the CLI options.","source":"@site/versioned_docs/version-1.0.0/node-guide/cli-options.md","sourceDirName":"node-guide","slug":"/node-guide/cli-options","permalink":"/1.0.0/node-guide/cli-options","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/versioned_docs/version-1.0.0/node-guide/cli-options.md","tags":[],"version":"1.0.0","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Joining the Gaia Protocol","permalink":"/1.0.0/node-guide/register"},"next":{"title":"Troubleshooting","permalink":"/1.0.0/node-guide/troubleshooting"}}');var o=i(4848),a=i(8453);const s={sidebar_position:8},l="GaiaNet CLI options",c={},d=[{value:"help",id:"help",level:2},{value:"version",id:"version",level:2},{value:"init",id:"init",level:2},{value:"start",id:"start",level:2},{value:"stop",id:"stop",level:2},{value:"config",id:"config",level:2},{value:"base",id:"base",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"gaianet-cli-options",children:"GaiaNet CLI options"})}),"\n",(0,o.jsxs)(n.p,{children:["After installing the GaiaNet software, you can use the ",(0,o.jsx)(n.code,{children:"gaianet"})," CLI to manage the node. The following are the CLI options."]}),"\n",(0,o.jsx)(n.h2,{id:"help",children:"help"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"gaianet --help"})," to check all the available CLI options."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gaianet --help\n\n## Output\nUsage: gaianet {config|init|run|stop|OPTIONS}\n\nSubcommands:\n  config             Update the configuration.\n  init               Initialize the GaiaNet node.\n  run|start          Start the GaiaNet node.\n  stop               Stop the GaiaNet node.\n\nOptions:\n  --help             Show this help message\n"})}),"\n",(0,o.jsx)(n.h2,{id:"version",children:"version"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"gaianet --version"})," to check your GaiaNet version."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gaianet --version\n"})}),"\n",(0,o.jsx)(n.h2,{id:"init",children:"init"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"gaianet init"})," command initializes the node according to the ",(0,o.jsx)(n.code,{children:"$HOME/gaianet/config.json"})," file. You can use some of our ",(0,o.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/node-configs",children:"pre-set configurations"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet init"})," will init the default node. It's an RAG application with Gaianet knowledge."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet init --config mua"})," will init a node with the MUA project knowledge."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet init --base <path>"})," will init a node in an alternative directory."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can also use ",(0,o.jsx)(n.code,{children:"gaianet init url_your_config_json"})," to init your customized settings for the node. You can customize your node using the Gaianet node link. If you're familiar with the Gaianet config.json, you can create your own manually. See an example ",(0,o.jsx)(n.a,{href:"https://github.com/GaiaNet-AI/gaianet-node/blob/main/config.json",children:"here"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/pure-llama-3-8b/config.json\n"})}),"\n",(0,o.jsx)(n.h2,{id:"start",children:"start"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"gaianet start"})," is to start running the node."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"gaianet start"})," to start the node according to the ",(0,o.jsx)(n.code,{children:"$HOME/gaianet/config.json"})," file."]}),"\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"gaianet start --base $HOME/gaianet-2.alt "})," to start the node according to the ",(0,o.jsx)(n.code,{children:"$HOME/gaianet-2/config.json"})," file."]}),"\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"gaianet start --local-only"})," to start the node for local use according to the ",(0,o.jsx)(n.code,{children:"$HOME/gaianet/config.json"})," file."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"stop",children:"stop"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"gaianet stop"})," is to stop the running node."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"gaianet stop"})," to stop running the node."]}),"\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"gaianet stop --force"})," to force stop the GaiaNet node."]}),"\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"gaianet stop --base $HOME/gaianet-2.alt"})," to stop the node according to the ",(0,o.jsx)(n.code,{children:"$HOME/gaianet-2/config.json"})," file."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"config",children:"config"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"gaianet config"})," can update the key fields defined in the ",(0,o.jsx)(n.code,{children:"config.json"})," file."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet config --help"})," will list all the available arguments"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet config --chat-url <url>"})," will change the download link of the chat model."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet config --prompt-template <template>"})," will change the prompt_template of the chat model."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet config --chat-ctx-size <size>"})," will change the context size of the chat model. The default value is 4096."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet config --embedding-url <url>"})," will change the download link of the embedding model."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet config --embedding-ctx-size <size>"})," will change the context size of the embedding model. The value here is associated with the embedding model you choose."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gaianet config --port <port>"})," will change the port of the Gaianet node API server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'gaianet config --system-prompt "<prompt>"'})," will change the system prompt."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'gaianet config --rag-prompt "<prompt>"'})," will change the rag prompt."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'gaianet config --reverse-prompt "<prompt>"'})," will change the reverse prompt."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gainet config --base <path> "})," will modify the ",(0,o.jsx)(n.code,{children:"<path>/config.json"})," parameters."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After you use ",(0,o.jsx)(n.code,{children:"gaianet conifg"})," to change some parameters, please"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["use ",(0,o.jsx)(n.code,{children:"gaianet init"})," to make your settings take effect."]}),"\n",(0,o.jsxs)(n.li,{children:["use ",(0,o.jsx)(n.code,{children:"gaianet start"})," to start your new node."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you use ",(0,o.jsx)(n.code,{children:"gaianet config --base $HOME/gaianet-2.alt"})," to update some settings, please"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["use ",(0,o.jsx)(n.code,{children:"gaianet init --base $HOME/gaianet-2.alt"})," to make your settings take effect."]}),"\n",(0,o.jsxs)(n.li,{children:["use ",(0,o.jsx)(n.code,{children:"gaianet start --base $HOME/gaianet-2.alt"})," to start your new node."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"gaianet config"})," supports multiple parameters in one command. The example below will change the download link and prompt template of the chat model at the same time."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gaianet config --chat-url https://huggingface.co/gaianet/gemma-1.1-2b-it-GGUF/resolve/main/gemma-1.1-2b-it-Q5_K_M.gguf --prompt-template gemma-chat\n"})}),"\n",(0,o.jsx)(n.p,{children:"The output is the following."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"[+] Updating the url of chat model ...\n    * Old url: https://huggingface.co/gaianet/Llama-3-8B-Instruct-GGUF/resolve/main/Meta-Llama-3-8B-Instruct-Q5_K_M.gguf\n    * New url: https://huggingface.co/gaianet/gemma-1.1-2b-it-GGUF/resolve/main/gemma-1.1-2b-it-Q5_K_M.gguf\n\n[+] Updating the prompt template of chat model ...\n    * Old template: llama-3-chat\n    * New template: gemma-chat\n\n[+] COMPLETED! The config.json is updated successfully.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"base",children:"base"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"--base"})," option is global. You can combine it with other subcommands to specify a base directory for the GaiaNet node other than the ",(0,o.jsx)(n.code,{children:"$HOME/gaianet"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);