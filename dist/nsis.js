(function () {
	'use strict';

	/*! prism-nsis | MIT License | github.com/idleberg/prismjs-nsis */

	Prism.languages.nsis = {
		'comment': {
			pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|[#;].*)/,
			lookbehind: true,
			greedy: true
		},
		'string': {
			pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'keyword': {
			pattern: /(^\s*)(?:A(?:bort|dd(?:BrandingImage|Size)|llow(?:RootDirInstall|SkipFiles)|utoCloseWindow)|B(?:G(?:Font|Gradient)|r(?:andingText|ingToFront))|C(?:RCCheck|a(?:ll(?:InstDLL)?|ption)|h(?:angeUI|eckBitmap)|learErrors|o(?:mp(?:letedText|onentText)|pyFiles)|reate(?:Directory|Font|ShortCut))|D(?:e(?:lete(?:(?:INIS(?:ec|tr)|Reg(?:Key|Value)))?|tail(?:Print|sButtonText))|ir(?:Text|V(?:ar|erify)))|E(?:n(?:ableWindow|umReg(?:Key|Value))|x(?:ch|ec(?:(?:Shell(?:Wait)?|Wait))?|pandEnvStrings))|F(?:i(?:le(?:(?:BufSize|Close|ErrorText|Open|Read(?:(?:Byte|UTF16LE|Word))?|Seek|Write(?:(?:Byte|UTF16LE|Word))?))?|nd(?:Close|First|Next|Window))|lushINI|unction(?:End)?)|G(?:et(?:Cur(?:InstType|rentAddress)|D(?:LLVersion(?:Local)?|lgItem)|ErrorLevel|F(?:ileTime(?:Local)?|u(?:llPathName|nctionAddress))|InstDirError|KnownFolderPath|LabelAddress|TempFileName|WinVer)|oto)|HideWindow|I(?:con|f(?:Abort|Errors|FileExists|R(?:ebootFlag|tlLanguage)|S(?:hellVarContextAll|ilent))|n(?:itPluginsDir|st(?:ProgressFlags|Type(?:(?:GetText|SetText))?|all(?:ButtonText|Colors|Dir(?:RegKey)?))|t(?:64(?:CmpU?|Fmt)|CmpU?|Fmt|Op|Ptr(?:CmpU?|Op)))|sWindow)|L(?:angString|icense(?:BkColor|Data|ForceSelection|LangString|Text)|o(?:ad(?:AndSetImage|LanguageFile)|ckWindow|g(?:Set|Text)))|M(?:anifest(?:DPIAware|LongPathAware|MaxVersionTested|SupportedOS)|essageBox|iscButtonText)|N(?:ame|op)|OutFile|P(?:E(?:AddResource|DllCharacteristics|RemoveResource|SubsysVer)|age(?:(?:Callbacks|Ex(?:End)?))?|op|ush)|Quit|R(?:MDir|e(?:ad(?:EnvStr|INIStr|Reg(?:DWORD|Str))|boot|gDLL|name|questExecutionLevel|serveFile|turn))|S(?:e(?:archPath|ction(?:(?:G(?:et(?:Flags|InstTypes|Size|Text)|roup(?:End)?)|In|Set(?:Flags|InstTypes|Size|Text)|End))?|ndMessage|t(?:AutoClose|BrandingImage|C(?:ompress(?:or(?:DictSize)?)?|tlColors|urInstType)|D(?:at(?:ablockOptimize|eSave)|etails(?:Print|View))|Error(?:Level|s)|F(?:ileAttributes|ont)|O(?:utPath|verwrite)|Re(?:bootFlag|gView)|S(?:hellVarContext|ilent)))|how(?:InstDetails|UninstDetails|Window)|ilent(?:Install|UnInstall)|leep|paceTexts|tr(?:C(?:mpS?|py)|Len)|ubCaption)|Target|Un(?:RegDLL|i(?:code|nst(?:Page|all(?:ButtonText|Caption|Icon|SubCaption|Text))))|V(?:I(?:AddVersionKey|FileVersion|ProductVersion)|ar)|W(?:indowIcon|rite(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller))|XPStyle)\b/m,
			lookbehind: true
		},
		'property': /\b(?:ARCHIVE|FILE_ATTRIBUTE_(?:ARCHIVE|NORMAL|OFFLINE|READONLY|SYSTEM|TEMPORARY)|HK(?:C(?:R(?:(?:32|64))?|U(?:(?:32|64))?)|DD|EY_(?:C(?:LASSES_ROOT|URRENT_(?:CONFIG|USER))|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|LM(?:(?:32|64))?|PD|U)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON[1234]|ICON(?:EXCLAMATION|INFORMATION|QUESTION|STOP)|OK(?:CANCEL)?|R(?:ETRYCANCEL|IGHT|TLREADING)|SETFOREGROUND|TOPMOST|USERICON|YESNO)|OFFLINE|READONLY|S(?:H(?:CTX|ELL_CONTEXT)|YSTEM)|TEMPORARY|Win(?:10|Vista|[78])|a(?:dmin|ll|md64-unicode|uto)|b(?:ot(?:tom|h)|zip2)|c(?:o(?:lored|mponents)|u(?:rrent|stom))|directory|f(?:alse|orce)|hi(?:de|ghest)|i(?:f(?:diff|newer)|nstfiles)|l(?:astused|e(?:ave|ft)|i(?:cense|stonly)|zma)|n(?:evershow|o(?:ne|rmal|tset))|o(?:ff|pen|n)|print|right|s(?:how|ilent(?:log)?|mooth)|t(?:extonly|op|r(?:ue|y))|u(?:n(?:\.(?:c(?:omponents|ustom)|directory|instfiles|license)|instConfirm)|ser)|x86-(?:ansi|unicode)|zlib)\b/,
		'constant': /\${[\w.:^-]+}|\$\([\w.:^-]+\)/i,
		'variable': /\$\w+/i,
		'number': /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
		'operator': /--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*/~^%]/,
		'punctuation': /[{}[\];(),.:]/,
		'important': {
			pattern: /(^\s*)!(?:a(?:dd(?:includedir|plugindir)|ppendfile|ssert)|cd|de(?:fine|lfile)|e(?:cho|rror|xecute|lse|ndif)|finalize|get(?:dllversion|tlbversion)|i(?:n(?:clude|sertmacro)|f(?:(?:def|macro(?:def|ndef)|ndef))?)|makensis|p(?:ackhdr|ragma)|s(?:earch(?:parse|replace)|ystem)|tempfile|un(?:def|instfinalize)|verbose|warning)\b/mi,
			lookbehind: true
		}
	};

})();
