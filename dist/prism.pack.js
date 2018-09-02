var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var s=/\blang(?:uage)?-([\w-]+)\b/i,t=0,E=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof i?new i(e.type,E.util.encode(e.content),e.alias):"Array"===E.util.type(e)?e.map(E.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,n){var t=E.util.type(e);switch(n=n||{},t){case"Object":if(n[E.util.objId(e)])return n[E.util.objId(e)];var r={};for(var a in n[E.util.objId(e)]=r,e)e.hasOwnProperty(a)&&(r[a]=E.util.clone(e[a],n));return r;case"Array":if(n[E.util.objId(e)])return n[E.util.objId(e)];r=[];return n[E.util.objId(e)]=r,e.forEach(function(e,t){r[t]=E.util.clone(e,n)}),r}return e}},languages:{extend:function(e,t){var n=E.util.clone(E.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(n,e,t,r){var a=(r=r||E.languages)[n];if(2==arguments.length){for(var l in t=e)t.hasOwnProperty(l)&&(a[l]=t[l]);return a}var i={};for(var o in a)if(a.hasOwnProperty(o)){if(o==e)for(var l in t)t.hasOwnProperty(l)&&(i[l]=t[l]);i[o]=a[o]}return E.languages.DFS(E.languages,function(e,t){t===r[n]&&e!=n&&(this[e]=i)}),r[n]=i},DFS:function(e,t,n,r){for(var a in r=r||{},e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],n||a),"Object"!==E.util.type(e[a])||r[E.util.objId(e[a])]?"Array"!==E.util.type(e[a])||r[E.util.objId(e[a])]||(r[E.util.objId(e[a])]=!0,E.languages.DFS(e[a],t,a,r)):(r[E.util.objId(e[a])]=!0,E.languages.DFS(e[a],t,null,r)))}},plugins:{},highlightAll:function(e,t){E.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};E.hooks.run("before-highlightall",r);for(var a,l=r.elements||e.querySelectorAll(r.selector),i=0;a=l[i++];)E.highlightElement(a,!0===t,r.callback)},highlightElement:function(e,t,n){for(var r,a,l=e;l&&!s.test(l.className);)l=l.parentNode;l&&(r=(l.className.match(s)||[,""])[1].toLowerCase(),a=E.languages[r]),e.className=e.className.replace(s,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(l=e.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(s,"").replace(/\s+/g," ")+" language-"+r));var i={element:e,language:r,grammar:a,code:e.textContent};if(E.hooks.run("before-sanity-check",i),!i.code||!i.grammar)return i.code&&(E.hooks.run("before-highlight",i),i.element.textContent=i.code,E.hooks.run("after-highlight",i)),void E.hooks.run("complete",i);if(E.hooks.run("before-highlight",i),t&&_self.Worker){var o=new Worker(E.filename);o.onmessage=function(e){i.highlightedCode=e.data,E.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,n&&n.call(i.element),E.hooks.run("after-highlight",i),E.hooks.run("complete",i)},o.postMessage(JSON.stringify({language:i.language,code:i.code,immediateClose:!0}))}else i.highlightedCode=E.highlight(i.code,i.grammar,i.language),E.hooks.run("before-insert",i),i.element.innerHTML=i.highlightedCode,n&&n.call(e),E.hooks.run("after-highlight",i),E.hooks.run("complete",i)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return E.hooks.run("before-tokenize",r),r.tokens=E.tokenize(r.code,r.grammar),E.hooks.run("after-tokenize",r),i.stringify(E.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,a,l,i){var o=E.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==i)return;var u=n[s];u="Array"===E.util.type(u)?u:[u];for(var g=0;g<u.length;++g){var c=u[g],h=c.inside,f=!!c.lookbehind,d=!!c.greedy,m=0,p=c.alias;if(d&&!c.pattern.global){var y=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,y+"g")}c=c.pattern||c;for(var v=r,b=a;v<t.length;b+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof o)){if(d&&v!=t.length-1){if(c.lastIndex=b,!(x=c.exec(e)))break;for(var w=x.index+(f?x[1].length:0),j=x.index+x[0].length,_=v,A=b,P=t.length;_<P&&(A<j||!t[_].type&&!t[_-1].greedy);++_)(A+=t[_].length)<=w&&(++v,b=A);if(t[v]instanceof o)continue;O=_-v,k=e.slice(b,A),x.index-=b}else{c.lastIndex=0;var x=c.exec(k),O=1}if(x){f&&(m=x[1]?x[1].length:0);j=(w=x.index+m)+(x=x[0].slice(m)).length;var I=k.slice(0,w),N=k.slice(j),S=[v,O];I&&(++v,b+=I.length,S.push(I));var C=new o(s,h?E.tokenize(x,h):x,p,x,d);if(S.push(C),N&&S.push(N),Array.prototype.splice.apply(t,S),1!=O&&E.matchGrammar(e,t,n,v,b,!0,s),l)break}else if(l)break}}}}},tokenize:function(e,t,n){var r=[e],a=t.rest;if(a){for(var l in a)t[l]=a[l];delete t.rest}return E.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=E.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=E.hooks.all[e];if(n&&n.length)for(var r,a=0;r=n[a++];)r(t)}}},i=E.Token=function(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a};if(i.stringify=function(t,n,e){if("string"==typeof t)return t;if("Array"===E.util.type(t))return t.map(function(e){return i.stringify(e,n,t)}).join("");var r={type:t.type,content:i.stringify(t.content,n,e),tag:"span",classes:["token",t.type],attributes:{},language:n,parent:e};if(t.alias){var a="Array"===E.util.type(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(r.classes,a)}E.hooks.run("wrap",r);var l=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(l?" "+l:"")+">"+r.content+"</"+r.tag+">"},!_self.document)return _self.addEventListener&&(E.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,r=t.code,a=t.immediateClose;_self.postMessage(E.highlight(r,E.languages[n],n)),a&&_self.close()},!1)),_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(E.filename=e.src,E.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(E.highlightAll):window.setTimeout(E.highlightAll,16):document.addEventListener("DOMContentLoaded",E.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
/*! prism-nsis | MIT License | github.com/idleberg/prismjs-nsis */
Prism.languages.nsis={comment:{pattern:/(^|[^\\])(\/\*[\s\S]*?\*\/|[#;].*)/,lookbehind:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:{pattern:/(^\s*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|Banner|BG(?:Font|Gradient|Image)|BrandingText|BringToFront|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|WriteUTF16LE|Seek|Write|WriteByte|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DlgItem|DLLVersion(?:Local)?|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|LabelAddress|TempFileName)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|Silent)|InitPluginsDir|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|Name|Nop|ns(?:Dialogs|Exec)|NSISdl|OutFile|Page(?:Callbacks)?|PE(?:DllCharacteristics|SubsysVer)|Pop|Push|Quit|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Unicode|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UninstPage|UnRegDLL|UserInfo|Var|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle)\b/m,lookbehind:!0},property:/\b(?:admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user|ARCHIVE|FILE_(ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK((CR|CU|LM)(32|64)?|DD|PD|U)|HKEY_(CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)\b/,constant:/\${[\w\.:\^-]+}|\$\([\w\.:\^-]+\)/i,variable:/\$\w+/i,number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,punctuation:/[{}[\];(),.:]/,important:{pattern:/(^\s*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,lookbehind:!0}};
"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var i={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var e,a=t.getAttribute("data-src"),n=t,r=/\blang(?:uage)?-([\w-]+)\b/i;n&&!r.test(n.className);)n=n.parentNode;if(n&&(e=(t.className.match(r)||[,""])[1]),!e){var o=(a.match(/\.(\w+)$/)||[,""])[1];e=i[o]||o}var s=document.createElement("code");s.className="language-"+e,t.textContent="",s.textContent="Loading…",t.appendChild(s);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,Prism.highlightElement(s)):400<=l.status?s.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:s.textContent="✖ Error: File does not exist or is empty")},l.send(null)}),Prism.plugins.toolbar&&Prism.plugins.toolbar.registerButton("download-file",function(t){var e=t.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-src")&&e.hasAttribute("data-download-link")){var a=e.getAttribute("data-src"),n=document.createElement("a");return n.textContent=e.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight));