webpackJsonp([202],{1729:function(t,n){t.exports={content:["section",["p","\u6309\u7167\u65e5\u5386\u5f62\u5f0f\u5c55\u793a\u6570\u636e\u7684\u5bb9\u5668\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u5f53\u6570\u636e\u662f\u65e5\u671f\u6216\u6309\u7167\u65e5\u671f\u5212\u5206\u65f6\uff0c\u4f8b\u5982\u65e5\u7a0b\u3001\u8bfe\u8868\u3001\u4ef7\u683c\u65e5\u5386\u7b49\uff0c\u519c\u5386\u7b49\u3002\u76ee\u524d\u652f\u6301\u5e74/\u6708\u5207\u6362\u3002"]],meta:{category:"Components",type:"Data Display",subtitle:"\u65e5\u5386",cols:1,title:"Calendar",filename:"components/calendar/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p",["strong","\u6ce8\u610f\uff1a"],"Calendar \u90e8\u5206 locale \u662f\u4ece value \u4e2d\u8bfb\u53d6\uff0c\u6240\u4ee5\u8bf7\u5148\u6b63\u786e\u8bbe\u7f6e moment \u7684 locale\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u9ed8\u8ba4\u8bed\u8a00\u4e3a en-US\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\uff0c\u63a8\u8350\u5728\u5165\u53e3\u6587\u4ef6\u5168\u5c40\u8bbe\u7f6e locale</span>\n<span class="token comment" spellcheck="true">// import moment from \'moment\';</span>\n<span class="token comment" spellcheck="true">// import \'moment/locale/zh-cn\';</span>\n<span class="token comment" spellcheck="true">// moment.locale(\'zh-cn\');</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>\n  <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span>\n  <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","// \u9ed8\u8ba4\u8bed\u8a00\u4e3a en-US\uff0c\u6240\u4ee5\u5982\u679c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\uff0c\u63a8\u8350\u5728\u5165\u53e3\u6587\u4ef6\u5168\u5c40\u8bbe\u7f6e locale\n// import moment from 'moment';\n// import 'moment/locale/zh-cn';\n// moment.locale('zh-cn');\n\n<Calendar\n  dateCellRender={dateCellRender}\n  monthCellRender={monthCellRender}\n  onPanelChange={onPanelChange}\n  onSelect={onSelect}\n/>"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","dateCellRender"],["td","\u81ea\u5b9a\u4e49\u6e32\u67d3\u65e5\u671f\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u4f1a\u88ab\u8ffd\u52a0\u5230\u5355\u5143\u683c"],["td","function(date: moment): ReactNode"],["td","\u65e0"]],["tr",["td","dateFullCellRender"],["td","\u81ea\u5b9a\u4e49\u6e32\u67d3\u65e5\u671f\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u8986\u76d6\u5355\u5143\u683c"],["td","function(date: moment): ReactNode"],["td","\u65e0"]],["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u5c55\u793a\u7684\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u9ed8\u8ba4\u65e5\u671f"]],["tr",["td","disabledDate"],["td","\u4e0d\u53ef\u9009\u62e9\u7684\u65e5\u671f"],["td","(currentDate: moment) => boolean"],["td","\u65e0"]],["tr",["td","fullscreen"],["td","\u662f\u5426\u5168\u5c4f\u663e\u793a"],["td","boolean"],["td","true"]],["tr",["td","locale"],["td","\u56fd\u9645\u5316\u914d\u7f6e"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"\u9ed8\u8ba4\u914d\u7f6e"]]],["tr",["td","mode"],["td","\u521d\u59cb\u6a21\u5f0f\uff0c",["code","month/year"]],["td","string"],["td","month"]],["tr",["td","monthCellRender"],["td","\u81ea\u5b9a\u4e49\u6e32\u67d3\u6708\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u4f1a\u88ab\u8ffd\u52a0\u5230\u5355\u5143\u683c"],["td","function(date: moment): ReactNode"],["td","\u65e0"]],["tr",["td","monthFullCellRender"],["td","\u81ea\u5b9a\u4e49\u6e32\u67d3\u6708\u5355\u5143\u683c\uff0c\u8fd4\u56de\u5185\u5bb9\u8986\u76d6\u5355\u5143\u683c"],["td","function(date: moment): ReactNode"],["td","\u65e0"]],["tr",["td","validRange"],["td","\u8bbe\u7f6e\u53ef\u4ee5\u663e\u793a\u7684\u65e5\u671f"],["td","[",["a",{title:null,href:"http://momentjs.com/"},"moment"],", ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"]"],["td","\u65e0"]],["tr",["td","value"],["td","\u5c55\u793a\u65e5\u671f"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","\u5f53\u524d\u65e5\u671f"]],["tr",["td","onPanelChange"],["td","\u65e5\u671f\u9762\u677f\u53d8\u5316\u56de\u8c03"],["td","function(date: moment, mode: string)"],["td","\u65e0"]],["tr",["td","onSelect"],["td","\u70b9\u51fb\u9009\u62e9\u65e5\u671f\u56de\u8c03"],["td","function(date: moment\uff09"],["td","\u65e0"]]]]]}}});