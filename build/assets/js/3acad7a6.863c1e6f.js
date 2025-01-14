"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7729],{3067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"litepaper","title":"GaiaNet: GenAI Agent Network","description":"Abstract","source":"@site/versioned_docs/version-1.0.0/litepaper.md","sourceDirName":".","slug":"/litepaper","permalink":"/1.0.0/litepaper","draft":false,"unlisted":false,"editUrl":"https://github.com/GaiaNet-AI/docs/edit/main/versioned_docs/version-1.0.0/litepaper.md","tags":[],"version":"1.0.0","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Working with eliza","permalink":"/1.0.0/tutorial/eliza"}}');var o=t(4848),s=t(8453);const i={sidebar_position:9},r="GaiaNet: GenAI Agent Network",d={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Open-source and decentralization",id:"open-source-and-decentralization",level:2},{value:"GaiaNet node",id:"gaianet-node",level:2},{value:"GaiaNet network",id:"gaianet-network",level:2},{value:"GaiaNet token",id:"gaianet-token",level:2},{value:"Component marketplace for AI assets",id:"component-marketplace-for-ai-assets",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"gaianet-genai-agent-network",children:"GaiaNet: GenAI Agent Network"})}),"\n",(0,o.jsx)(n.h2,{id:"abstract",children:"Abstract"}),"\n",(0,o.jsx)(n.p,{children:"Specialized, finetuned and RAG-enhanced open-source Large Language Models are key elements in emerging AI agent applications. However, those agent apps also present unique challenges to the traditional cloud computing and SaaS infrastructure, including new requirements for application portability, virtualization, security isolation, costs, data privacy, and ownership."}),"\n",(0,o.jsx)(n.p,{children:"GaiaNet is a decentralized computing infrastructure that enables everyone to create, deploy, scale, and monetize their own AI agents that reflect their styles, values, knowledge, and expertise. A GaiaNet node consists of a high-performance and cross-platform application runtime, a finetuned LLM, a knowledge embedding model, a vector database, a prompt manager, an open API server, and a plugin system for calling external tools and functions using LLM outputs. It can be deployed by any knowledge worker as a digital twin and offered as a web API service. A new class of tradeable assets and a marketplace could be created from individualized knowledge bases and components. Similar GaiaNet nodes are organized into GaiaNet domains, which offer trusted and reliable AI agent services to the public. The GaiaNet node and domains are governed by the GaiaNet DAO (Decentralized Autonomous Organization). Through Purpose Bound Money smart contracts, the GaiaNet network is a decentralized marketplace for AI agent services."}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"The emergence of ChatGPT and Large Language Model (LLM) has revolutionized how humans produce and consume knowledge. Within a year, AI-native applications have evolved from chatbots to copilots, to agents."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"AI agents would increasingly evolve from supportive tools (akin to Copilots) to autonomous entities capable of completing tasks independently. \u2014 Dr. Andrew Ng at Sequoia Capital AI Ascent 2024 Summit"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Agents are software applications that can complete tasks on its own autonomously like a human. The agent can understand the task, plan the steps to complete the task, execute all the steps, handle errors and exceptions, and deliver the results. While a powerful LLM could act as the \u201cbrain\u201d for the agent, we need to connect to external data sources (eyes and ears), domain-specific knowledge base and prompts (skills), context stores (memory), and external tools (hands). For agent tasks, we often need to customize the LLM itself"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"to reduce hallucinations in a specific domain."}),"\n",(0,o.jsx)(n.li,{children:"to generate responses in a specific format (e.g., a JSON schema)."}),"\n",(0,o.jsx)(n.li,{children:"to answer \u201cpolitically incorrect\u201d questions (e.g., to analyze CVE exploits for an agent in the security domain)."}),"\n",(0,o.jsx)(n.li,{children:"and to answer requests in a specific style (e.g., to mimic a person)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"What is a GaiaNet agent",src:t(5353).A+"",width:"951",height:"481"})}),"\n",(0,o.jsx)(n.p,{children:"Agents are complex software that require significant amount of engineering and resources. Today, most agents are close-source and hosted on SaaS-based LLMs. Popular examples include GPTs and Microsoft/GitHub copilots on OpenAI LLMs, and Duet on Google\u2019s Gemini LLMs."}),"\n",(0,o.jsx)(n.p,{children:"However, as we discussed, a key requirement for agents is to customize and adapt its underlying LLM and software stack for domain-specific tasks \u2014 an area where centralized SaaS perform very poorly. For example, with ChatGPT, every small task must be handled by a very large model. It is also enormously expensive to fine-tune or modify any ChatGPT models. The one-size-fits-all LLMs are detrimental to the agent use case in capabilities, alignment, and cost structure. Furthermore, the SaaS hosted LLMs lack privacy controls on how the agent\u2019s private knowledge might be used and shared. Because of these shortcomings, it is difficult for individual knowledge workers to create and monetize agents for his or her own domain and tasks on SaaS platforms like OpenAI, Google, Anthropic, Microsoft and AWS."}),"\n",(0,o.jsx)(n.p,{children:"In this paper, we propose a decentralized software platform and protocol network for AI agents for everyone. Specifically, our goals are two-folds."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Goal #1:"})," Empower individuals to incorporate his/her private knowledge and expertise into personal LLM agent apps. Those apps aim to perform knowledge tasks and use tools just as the individual would, but also reflect the individual\u2019s style and values."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Goal #2:"})," Enable individuals to provide and scale their LLM agents as services, and get compensated for their expertise and work."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"GaiaNet is \u201cYouTube for knowledge and skills.\u201d"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"open-source-and-decentralization",children:"Open-source and decentralization"}),"\n",(0,o.jsx)(n.p,{children:"As of April 2024, there are over 6000 open-source LLMs published on Hugging face. Compared with close-source LLMs, such as GPT-4, open-source LLMs offer advantages in privacy, cost, and systematic bias. Even with general QA performance, open-source LLMs are closing the gap with close-source counterparties quickly."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Open vs close source LLMs",src:t(8507).A+"",width:"1262",height:"764"})}),"\n",(0,o.jsx)(n.p,{children:"For AI agent use cases, it has been demonstrated that smaller but task-specific LLMs often outperform larger general models."}),"\n",(0,o.jsx)(n.p,{children:"However, it is difficult for individuals and businesses to deploy and orchestrate multiple finetuned LLMs on their own heterogeneous GPU infrastructure. The complex software stack for agents, as well as the complex interaction with external tools, are fragile and error-prone."}),"\n",(0,o.jsx)(n.p,{children:"Furthermore, LLM agents have entirely different scaling characteristics than past application servers. LLM is extremely computationally intensive. A LLM agent server can typically only serve one user at a time, and it often blocks for seconds at a time. The scaling need is no longer to handle many async requests on a single server, but to load balance among many discrete servers on the internet scale."}),"\n",(0,o.jsx)(n.p,{children:"The GaiaNet project provides a cross-platform and highly efficient SDK and runtime for finetuned open-source LLMs with proprietary knowledge bases, customized prompts, structured responses, and external tools for function calling. A GaiaNet node can be started in minutes on any personal, cloud, or edge device. It can then offer services through an incentivized web3 network."}),"\n",(0,o.jsx)(n.h2,{id:"gaianet-node",children:"GaiaNet node"}),"\n",(0,o.jsx)(n.p,{children:"The basic operational unit in the GaiaNet network is a node. A GaiaNet node is a streamlined software stack that allows any technically competent person to run an AI agent of his own. The software stack on the GaiaNet node consists of the following 7 key components."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"GaiaNet node architecture",src:t(5100).A+"",width:"1051",height:"701"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"1 Application runtime."})," GaiaNet applications run in a lightweight, secure and high-performance sandbox called WasmEdge. As an open-source project managed by the Linux Foundation and CNCF, WasmEdge runtime works seamlessly with leading cloud native tools such as Docker, containerd, CRI-O, Podman and Kubernetes. It is also the virtual machine of choice by leading public blockchains to securely and efficiently execute on-chain and off-chain smart contracts."]}),"\n",(0,o.jsx)(n.p,{children:"WasmEdge is a high-performance and cross-platform runtime. It can run AI models on almost all CPUs, GPUs, and AI accelerators at native speed, making it an ideal runtime for decentralized AI agents."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"2 Finetuned LLM."})," The GaiaNet node supports almost all open-source LLMs, multimodal models (eg Large Vision Models or LVMs), text-to-image models (eg Stable Diffusion) and text-to-video models. That includes all finetuned models using personal or proprietary data."]}),"\n",(0,o.jsx)(n.p,{children:"The node owner can finetune open-source models using a wide variety of tools. For example, the node owner can finetune an LLM using personal chat histories so that the finetuned LLM can mimic his own speaking style. He can also finetune an LLM to focus it on a specific knowledge domain to reduce hallucinations and improve answer quality for questions in that domain. A finetuned LLM can guarantee to output JSON text that matches a pre-determined schema for use with external tools."}),"\n",(0,o.jsx)(n.p,{children:"Besides LLMs, the node owner could finetune Stable Diffusion models with her own photos to generate images that look like her."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"3 Embedding model."})," The GaiaNet node needs to manage a body of public or proprietary knowledge for the AI agent. It is a key feature that enables the agent to specialize and outperform much larger models in a specific domain.  The embedding models are specially trained LLMs that turns input sentences into a vector representation, instead of generating completions. Since the embedding models are trained from LLMs, they can \u201cembed\u201d the \u201cmeaning\u201d of the sentences into the vectors so that similar sentences are located close together in the high dimensional space occupied by those vectors."]}),"\n",(0,o.jsx)(n.p,{children:"With the embedding model, a GaiaNet node can ingest a body of text, images, PDFs, web links, audio and video files, and generate a collection of embedding vectors based on their contents. The embedding model also turns user questions and conversations into vectors, which allows the GaiaNet node to quickly identify contents in its knowledge base that are relevant to the current conversation."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"4 Vector database."})," The embedding vectors that form GaiaNet node\u2019s knowledge base are stored on the node itself for optimal performance and maximum privacy. The GaiaNet node includes a Qdrant vector database."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"5 Custom prompts."})," Besides finetuning and knowledge arguments, the easiest way to customize an LLM for new applications is simply to prompt it. Like humans, LLMs are remarkable one-shot learners. You can simply give it an example of how to accomplish a task, and it will learn and do similar tasks on its own. Prompt engineering is a practical field to research and develop such prompts."]}),"\n",(0,o.jsx)(n.p,{children:"Furthermore, effective prompts could be highly dependent on the model in use. A prompt that works well for a large model, such as Mixtral 8x22b, is probably not going to work well for a small model like Mistral 7b."}),"\n",(0,o.jsx)(n.p,{children:"The GaiaNet node can support several different prompts that are dynamically chosen and used in applications. For example,"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"system_prompt"})," is a general introduction to the agent task the node is supposed to perform. It often contains a persona to help the LLM respond with the right tone. For example, the ",(0,o.jsx)(n.code,{children:"system_prompt"})," for a college teaching assistant could be: \u201cYou are a teaching assistant for UC Berkeley\u2019s computer science 101 class. Please explain concepts and answer questions in detail. Do not answer any question that is not related to math or computer science.\u201d"]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"rag_prompt"})," is a prefix prompt to be dynamically inserted in front of knowledge base search results in an RAG chat. It could be something like this: \u201cPlease answer the question based on facts and opinions in the context below. Do not make anything that is not in the context. ---------\u201d"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The LLM community has developed many useful prompts for different application use cases. GaiaNet node allows you to easily manage and experiment with them."}),"\n",(0,o.jsx)(n.p,{children:"Through the our developer SDK, GaiaNet owners and operators could customize the logic of dynamic prompt generation in their own way. For example, a GaiaNet node could perform a Google search for any user question, and add the search results into the prompt as context."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"6 Function calls and tool use."})," The LLM not only is great at generating human language, but also excels at generating machine instructions. Through finetuning and prompt engineering, we could get some LLMs to consistently generate structured JSON objects or computer code in many language tasks, such as summarizing and extracting key elements from a paragraph of text."]}),"\n",(0,o.jsx)(n.p,{children:"The GaiaNet node allows you to specify the output format of the generated text. You can give it a grammar specification file to enforce that responses will always conform to a pre-defined JSON schema."}),"\n",(0,o.jsx)(n.p,{children:"Once the LLM returns a structured JSON response, the agent typically need to pass the JSON to a tool that performs the task and comes back with an answer. For example, the user question might be."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"What is the weather like in Singapore?\n"})}),"\n",(0,o.jsx)(n.p,{children:"The LLM generates the following JSON response."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{"tool":"get_current_weather", "location":"Singapore","unit":"celsius"}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The GaiaNet node must know what is the tool associated with get_current_weather and then invoke it. GaiaNet node owners and operators can configure any number of external tools by mapping a tool name with a web service endpoint. In the above example, the get_current_weather tool might be associated with a web service that takes this JSON data. The GaiaNet node sends the JSON to the web service endpoint via HTTPS POST and receives an answer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"42\n"})}),"\n",(0,o.jsx)(n.p,{children:"It then optionally feeds the answer to the LLM to generate a human language answer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"The current weather in Singapore is 42C. \n"})}),"\n",(0,o.jsx)(n.p,{children:"Through the GaiaNet node SDK, developers are not limited to using web services. They can write plugins to process LLM responses locally on the node. For example, the LLM might return Python code, which can be executed locally in a sandbox and for the GaiaNet node to perform a complex operation."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"7 The API server."})," All GaiaNet nodes must have the same API for questions and answers. That allows front-end applications to work with, and potentially be load-balanced to any GaiaNet node. We choose to support the OpenAI API specification, which enables GaiaNet nodes to become drop-in replacements for OpenAI API endpoints for a large ecosystem of applications."]}),"\n",(0,o.jsx)(n.p,{children:"The API server runs securely and cross-platform on the WasmEdge runtime. It ties together all the other components in the GaiaNet node. It receives user requests, generates an embedding from the request, searches the vector database, adds search results to the prompt context, generates an LLM response, and then optionally uses the response to perform function calling. The API server also provides a web-based chatbot UI for users to chat with the RAG-enhanced finetuned LLM on the node."}),"\n",(0,o.jsx)(n.h2,{id:"gaianet-network",children:"GaiaNet network"}),"\n",(0,o.jsx)(n.p,{children:"While each GaiaNet node is already a powerful AI agent capable of answering complex questions and performing actions, individual nodes are not suitable for providing public services. There are several important reasons."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"For the public consumers and users, it is very hard to judge the trustworthiness of individual GaiaNet nodes. Harmful misinformation could be spread by malicious node operators."}),"\n",(0,o.jsx)(n.li,{children:"For GaiaNet node owners and operators, there is no economic incentive to provide such services to the public, which could be very costly to run."}),"\n",(0,o.jsx)(n.li,{children:"The AI agent servers have very different scaling characteristics than traditional internet application servers. When the agent is processing a user request, it typically takes up all the computing resources on the hardware. Instead of using software to scale concurrent users on a single server, the challenge of GaiaNet is to scale to many different identical nodes for a large application."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Those challenges have given rise to the GaiaNet domain, which forms the basis of the GaiaNet web3 network. A GaiaNet domain is a collection of GaiaNet nodes available under a single Internet domain name. The domain operator decides which GaiaNet nodes can be registered under the domain and makes the node services available to the public. For example, a GaiaNet domain might be a Computer Science teaching assistant for UC Berkeley. The domain could provide services through ",(0,o.jsx)(n.code,{children:"https://cs101.gaianet.berkeley.edu"}),". The domain operator needs to do the following."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Verify and admit individual nodes to be registered under the domain. Those nodes must all meet requirements, such as the LLM, knowledge base, and prompts, set by the domain operator to ensure service quality. The node registration on a domain could be done via a whitelist or blacklist. It is up to the domain operator."}),"\n",(0,o.jsx)(n.li,{children:"Monitor each node\u2019s performance at real time and remove inactive ones."}),"\n",(0,o.jsx)(n.li,{children:"Promotes the \u201cteaching assistant\u201d chatbot apps to the target audience."}),"\n",(0,o.jsx)(n.li,{children:"Set the price for the API services."}),"\n",(0,o.jsx)(n.li,{children:"Load balance between active nodes."}),"\n",(0,o.jsx)(n.li,{children:"Getting paid by users."}),"\n",(0,o.jsx)(n.li,{children:"Pay nodes for their services."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"GaiaNet network architecture",src:t(1813).A+"",width:"801",height:"282"})}),"\n",(0,o.jsx)(n.p,{children:"Each GaiaNet node has an unique node ID in the form of an ETH address. The private key associated with the ETH address is stored on the node. Once a node is successfully registered with a domain, it is entitled to receive payments from both service revenue and network awards from the domain. The domain could send payments directly to the node's ETH address. Or, the domain could provide a mechanism for a node operator to register multiple nodes under a single Metamask address, such as signing a challenge phrase using the node private keys. In that case, the node operator will receive aggregated payments in his Metamask account for all associated nodes."}),"\n",(0,o.jsx)(n.p,{children:"Each GaiaNet domain has an associated smart contract that is used for escrow payments. It is similar to OpenAI\u2019s credit payment model, where users purchase credits first, and then consume them over time. When the user pays into the smart contract, an access token will be automatically issued to him. He uses this token to make API calls to the domain, which is then load-balanced to random nodes in the domain. As the user consumes those services, his fund in the contract depletes and the access token stops working if he no longer has any balance."}),"\n",(0,o.jsx)(n.p,{children:"The pricing and payment of the API service are determined by the domain operator. It is typically denominated in USD stable coins. The domain operator pays a share of the revenue to node operators who provided the services. The GaiaNet network is a decentralized marketplace of agent services."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The funds locked in GaiaNet domain contracts are for a single purpose of consuming API services. It is called Purpose Bound Money."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A key aspect of the GaiaNet protocol is that the domain operators are \u201ctrust providers\u201d in the ecosystem of decentralized nodes. The protocol network is designed to incentivize the trust of the operators through tokenomics designs such as mining and staking. GaiaNet nodes, domains, users, and developers form a DAO to grow the network and benefit all contributors."}),"\n",(0,o.jsx)(n.h2,{id:"gaianet-token",children:"GaiaNet token"}),"\n",(0,o.jsx)(n.p,{children:"The GaiaNet token is a utility token designed to facilitate transactions, support governance, and foster trust in the network. It serves three primary purposes."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"As a DAO governance token, holders can participate in setting the rules of the network."}),"\n",(0,o.jsx)(n.li,{children:"As a staking token, holders vouch for domain operators\u2019 trustworthiness. Stakers get a cut from the domain operator\u2019s service revenue. But they could also be slashed if the domain operator misbehave, such as spreading misinformation or providing unreliable services."}),"\n",(0,o.jsx)(n.li,{children:"As a payment token, the GaiaNet token could be deposited into the domain\u2019s escrow contract and be used to pay for services over time."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The payment utility of the GaiaNet token is designed to balance the network supply and demand. The value of the GaiaNet token asset is determined at the time when it enters or leaves the escrow smart contract based on real-time exchange rates."}),"\n",(0,o.jsx)(n.p,{children:"Service consumers could lock in savings from the potential appreciation of the token. For example, if a user deposits $100 worth of GaiaNet tokens into the contract, and when the domain and nodes get paid, the token value has gone up to $110, he would have received $110 worth of agent services."}),"\n",(0,o.jsx)(n.p,{children:"Conversely, if the token price drops, the service providers (domains and nodes) now have an opportunity to \u201cmine\u201d the tokens on the cheap. If the $100 initial tokens is only worth $90 now, service providers will get more tokens for each unit of electricity and compute they provide. That incentivizes more nodes to join the network and speculate on a later rise in token value."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"An exercise: OpenAI is projected to reach $5 billion in ARR in 2024. Assume that most enterprise customers pay quarterly, that is $1.25 billion of circulation market cap in addition to OpenAI\u2019s current enterprise value if they were to issue a payment token. The overall AI services market size is projected to reach $2 trillion in a few years. That translates to $500 billion market cap for a payment utility token alone."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"component-marketplace-for-ai-assets",children:"Component marketplace for AI assets"}),"\n",(0,o.jsx)(n.p,{children:"GaiaNet is a developer platform to create your agent services. We provide tools for you to do these."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Tools to generate finetuning datasets and perform finetuning on CPU and GPU machines."}),"\n",(0,o.jsx)(n.li,{children:"Tools to ingest documents and create vector embeddings for the knowledge base."}),"\n",(0,o.jsx)(n.li,{children:"Rust-based SDK to dynamically generate and manage prompts."}),"\n",(0,o.jsx)(n.li,{children:"Rust-based SDK to extend the agent\u2019s capability for invoking tools and software on the node."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For developers who do not wish to operate nodes, we are building a marketplace for"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"finetuned models"}),"\n",(0,o.jsx)(n.li,{children:"knowledge bases and datasets"}),"\n",(0,o.jsx)(n.li,{children:"function-calling plugins"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"All those components are blockchain-based assets represented by NFTs. A node operator could purchase NFTs for the components it wishes to use, and share service revenue with the component developers. That enables diverse and cashflow-generating assets to be issued from the GaiaNet ecosystem."}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"GaiaNet provides open-source tools for individuals and teams to create agent services using their proprietary knowledge and skills. Developers could create finetuned LLMs, knowledge collections, and plugins for the agent, and issue assets based on those components. The GaiaNet protocol makes those nodes discoverable and accessible through GaiaNet domains."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8507:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/closed_vs_open-7465b42b1c6b33cfebee85ed6c721e5a.jpg"},5353:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/gaianet_agent-f614c7c96d8253e1b4024e396b96169e.png"},1813:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/gaianet_eco-cd68b47237f0227986c6317281b31ccb.png"},5100:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/gaianet_node-91f817661a1d3e1f4f7628f809ed6c70.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);