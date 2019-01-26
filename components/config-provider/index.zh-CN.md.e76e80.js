(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1477:function(n,t){n.exports={content:["section",["p","为组件提供统一的全局化配置。"],["h2","使用"],["p","ConfigProvider 使用 React 的 ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"]," 特性，只需在应用外围包裹一次即可全局生效。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// ...</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>ConfigProvider <span class="token punctuation">{</span><span class="token operator">...</span>yourConfig<span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { ConfigProvider } from 'antd';\n\n// ...\n\nreturn (\n  <ConfigProvider {...yourConfig}>\n    <App />\n  </ConfigProvider>\n);"]],["h3","Content Security Policy"],["p","部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 ",["code","csp"]," 属性来进行配置："],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">csp</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> nonce<span class="token punctuation">:</span> <span class="token string">\'YourNonceCode\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>'},["code","<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>\n  <Button>My Button</Button>\n</ConfigProvider>"]]],meta:{category:"Components",subtitle:"全局化配置",cols:1,type:"其他",title:"ConfigProvider",filename:"components/config-provider/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","autoInsertSpaceInButton"],["td","设置为 ",["code","false"]," 时，移除按钮中 2 个汉字之间的空格"],["td","boolean"],["td","true"]],["tr",["td","renderEmpty"],["td","自定义组件空状态。参考 ",["a",{title:null,href:"/components/empty/"},"空状态"]],["td","Function(componentName: string): ReactNode"],["td","-"]],["tr",["td","getPopupContainer"],["td","弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。"],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","prefixCls"],["td","设置统一样式前缀"],["td","string"],["td","ant"]]]]]}}}]);