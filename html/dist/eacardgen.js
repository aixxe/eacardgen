var h;h||=typeof Module != 'undefined' ? Module : {};var aa=Object.assign({},h),p=(a,b)=>{throw b;},ba="object"==typeof window,q="function"==typeof importScripts,r="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,t=h.ENVIRONMENT_IS_PTHREAD||!1,_scriptDir="undefined"!=typeof document?document.currentScript?.src:void 0;q?_scriptDir=self.location.href:r&&(_scriptDir=__filename);var u="";
function ca(a){return h.locateFile?h.locateFile(a,u):u+a}var da,ea,fa;
if(r){var fs=require("fs"),ha=require("path");u=q?ha.dirname(u)+"/":__dirname+"/";da=(a,b)=>{a=ka(a)?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};fa=a=>{a=da(a,!0);a.buffer||(a=new Uint8Array(a));return a};ea=(a,b,c,d=!0)=>{a=ka(a)?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,f)=>{e?c(e):b(d?f.buffer:f)})};process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof v||a.context instanceof
v))throw a;});p=(a,b)=>{process.exitCode=a;throw b;};global.Worker=require("worker_threads").Worker}else if(ba||q)q?u=self.location.href:"undefined"!=typeof document&&document.currentScript&&(u=document.currentScript.src),u=u.startsWith("blob:")?"":u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1),r||(da=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
ea=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)});r&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var la=console.log.bind(console),ma=console.error.bind(console);r&&(la=(...a)=>fs.writeSync(1,a.join(" ")+"\n"),ma=(...a)=>fs.writeSync(2,a.join(" ")+"\n"));var na=h.print||la,A=h.printErr||ma;Object.assign(h,aa);aa=null;
h.quit&&(p=h.quit);var B;h.wasmBinary&&(B=h.wasmBinary);var C,oa,pa=!1,D,qa,E,H,ra,I,J,sa,ta,ua=h.INITIAL_MEMORY||16777216;
if(t)C=h.wasmMemory;else if(h.wasmMemory)C=h.wasmMemory;else if(C=new WebAssembly.Memory({initial:ua/65536,maximum:ua/65536,shared:!0}),!(C.buffer instanceof SharedArrayBuffer))throw A("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),r&&A("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),
Error("bad memory");var K=C.buffer;h.HEAP8=qa=new Int8Array(K);h.HEAP16=H=new Int16Array(K);h.HEAPU8=E=new Uint8Array(K);h.HEAPU16=ra=new Uint16Array(K);h.HEAP32=I=new Int32Array(K);h.HEAPU32=J=new Uint32Array(K);h.HEAPF32=sa=new Float32Array(K);h.HEAPF64=ta=new Float64Array(K);ua=C.buffer.byteLength;var va=[],wa=[],xa=[],L=0,ya=null,M=null;function za(){L++;h.monitorRunDependencies?.(L)}
function Aa(){L--;h.monitorRunDependencies?.(L);if(0==L&&(null!==ya&&(clearInterval(ya),ya=null),M)){var a=M;M=null;a()}}function Ba(a){h.onAbort?.(a);a="Aborted("+a+")";A(a);pa=!0;D=1;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Ca=a=>a.startsWith("data:application/octet-stream;base64,"),ka=a=>a.startsWith("file://"),N;N="eacardgen.wasm";Ca(N)||(N=ca(N));
function Da(a){if(a==N&&B)return new Uint8Array(B);if(fa)return fa(a);throw"both async and sync fetching of the wasm failed";}function Ea(a){if(!B&&(ba||q)){if("function"==typeof fetch&&!ka(a))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw`failed to load wasm binary file at '${a}'`;return b.arrayBuffer()}).catch(()=>Da(a));if(ea)return new Promise((b,c)=>{ea(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Da(a))}
function Fa(a,b,c){return Ea(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{A(`failed to asynchronously prepare wasm: ${d}`);Ba(d)})}function Ga(a,b){var c=N;B||"function"!=typeof WebAssembly.instantiateStreaming||Ca(c)||ka(c)||r||"function"!=typeof fetch?Fa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){A(`wasm streaming compile failed: ${e}`);A("falling back to ArrayBuffer instantiation");return Fa(c,a,b)}))}
function v(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
var Ha=a=>{a.terminate();a.onmessage=()=>{}},Ja=a=>{0==O.na.length&&(Ia(),O.Ba(O.na[0]));var b=O.na.pop();if(!b)return 6;O.pa.push(b);O.ia[a.la]=b;b.la=a.la;var c={cmd:"run",start_routine:a.Va,arg:a.Ha,pthread_ptr:a.la};r&&b.unref();b.postMessage(c,a.Xa);return 0},P=0,Ma=a=>{var b=Ka();a=a();La(b);return a},Pa=(a,b,...c)=>Ma(()=>{for(var d=c.length,e=Na(8*d),f=e>>3,g=0;g<c.length;g++)ta[f+g]=c[g];return Oa(a,0,d,e,b)});
function Qa(a){if(t)return Pa(0,1,a);D=a;Q||0<P||(O.Wa(),h.onExit?.(a),pa=!0);p(a,new v(a))}var Sa=a=>{D=a;if(t)throw Ra(a),"unwind";Qa(a)};function Ta(){for(var a=1;a--;)Ia();va.unshift(()=>{za();Ua(()=>Aa())})}function Ia(){var a=ca("eacardgen.worker.js");a=new Worker(a);O.na.push(a)}function Ua(a){t?a():Promise.all(O.na.map(O.Ba)).then(a)}
var O={na:[],pa:[],Ga:[],ia:{},xa(){t?(O.receiveObjectTransfer=O.Ta,O.threadInitTLS=O.Fa,O.setExitStatus=O.Ea,Q=!1):Ta()},Ea:a=>D=a,$a:["$terminateWorker"],Wa:()=>{for(var a of O.pa)Ha(a);for(a of O.na)Ha(a);O.na=[];O.pa=[];O.ia=[]},Da:a=>{var b=a.la;delete O.ia[b];O.na.push(a);O.pa.splice(O.pa.indexOf(a),1);a.la=0;Va(b)},Ta(){},Fa(){O.Ga.forEach(a=>a())},Ba:a=>new Promise(b=>{a.onmessage=f=>{f=f.data;var g=f.cmd;if(f.targetThread&&f.targetThread!=Wa()){var k=O.ia[f.targetThread];k?k.postMessage(f,
f.transferList):A(`Internal error! Worker sent a message "${g}" to target pthread ${f.targetThread}, but that thread no longer exists!`)}else if("checkMailbox"===g)Xa();else if("spawnThread"===g)Ja(f);else if("cleanupThread"===g)O.Da(O.ia[f.thread]);else if("killThread"===g)f=f.thread,g=O.ia[f],delete O.ia[f],Ha(g),Va(f),O.pa.splice(O.pa.indexOf(g),1),g.la=0;else if("cancelThread"===g)O.ia[f.thread].postMessage({cmd:"cancel"});else if("loaded"===g)a.loaded=!0,r&&!a.la&&a.unref(),b(a);else if("alert"===
g)alert(`Thread ${f.threadId}: ${f.text}`);else if("setimmediate"===f.target)a.postMessage(f);else if("callHandler"===g)h[f.handler](...f.args);else g&&A(`worker sent an unknown command ${g}`)};a.onerror=f=>{A(`${"worker sent an error!"} ${f.filename}:${f.lineno}: ${f.message}`);throw f;};r&&(a.on("message",f=>a.onmessage({data:f})),a.on("error",f=>a.onerror(f)));var c=[],d=["onExit","onAbort","print","printErr"],e;for(e of d)h.hasOwnProperty(e)&&c.push(e);a.postMessage({cmd:"load",handlers:c,urlOrBlob:h.mainScriptUrlOrBlob||
_scriptDir,wasmMemory:C,wasmModule:oa})})};h.PThread=O;var Ya=a=>{for(;0<a.length;)a.shift()(h)};h.establishStackSpace=()=>{var a=Wa(),b=J[a+52>>2];Za(b,b-J[a+56>>2]);La(b)};function Ra(a){if(t)return Pa(1,0,a);Sa(a)}var $a=[],ab,bb=a=>{var b=$a[a];b||(a>=$a.length&&($a.length=a+1),$a[a]=b=ab.get(a));return b};h.invokeEntryPoint=(a,b)=>{P=0;a=bb(a)(b);Q||0<P?O.Ea(a):cb(a)};var Q=h.noExitRuntime||!0;
class fb{constructor(a){this.da=a-24}xa(a,b){J[this.da+16>>2]=0;J[this.da+4>>2]=a;J[this.da+8>>2]=b}}var gb=0,hb=0;function ib(a,b,c,d){return t?Pa(2,1,a,b,c,d):jb(a,b,c,d)}
var jb=(a,b,c,d)=>{if("undefined"==typeof SharedArrayBuffer)return A("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var e=[];if(t&&0===e.length)return ib(a,b,c,d);a={Va:c,la:a,Ha:d,Xa:e};return t?(a.Za="spawnThread",postMessage(a,e),0):Ja(a)},kb,R=a=>{for(var b="";E[a];)b+=kb[E[a++]];return b},S={},T={},lb={},U,mb=a=>{throw new U(a);},nb,ob=(a,b,c)=>{function d(k){k=c(k);if(k.length!==a.length)throw new nb("Mismatched type converter count");for(var m=0;m<
a.length;++m)V(a[m],k[m])}a.forEach(function(k){lb[k]=b});var e=Array(b.length),f=[],g=0;b.forEach((k,m)=>{T.hasOwnProperty(k)?e[m]=T[k]:(f.push(k),S.hasOwnProperty(k)||(S[k]=[]),S[k].push(()=>{e[m]=T[k];++g;g===f.length&&d(e)}))});0===f.length&&d(e)};
function pb(a,b,c={}){var d=b.name;if(!a)throw new U(`type "${d}" must have a positive integer typeid pointer`);if(T.hasOwnProperty(a)){if(c.Na)return;throw new U(`Cannot register type '${d}' twice`);}T[a]=b;delete lb[a];S.hasOwnProperty(a)&&(b=S[a],delete S[a],b.forEach(e=>e()))}function V(a,b,c={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");return pb(a,b,c)}
var qb=a=>{throw new U(a.aa.ea.ba.name+" instance already deleted");},rb=!1,sb=()=>{},tb=(a,b,c)=>{if(b===c)return a;if(void 0===c.ga)return null;a=tb(a,b,c.ga);return null===a?null:c.Ka(a)},ub={},vb=[],wb=()=>{for(;vb.length;){var a=vb.pop();a.aa.qa=!1;a["delete"]()}},xb,yb={},zb=(a,b)=>{if(void 0===b)throw new U("ptr should not be undefined");for(;a.ga;)b=a.ta(b),a=a.ga;return yb[b]},Bb=(a,b)=>{if(!b.ea||!b.da)throw new nb("makeClassHandle requires ptr and ptrType");if(!!b.ha!==!!b.fa)throw new nb("Both smartPtrType and smartPtr must be specified");
b.count={value:1};return Ab(Object.create(a,{aa:{value:b,writable:!0}}))},Ab=a=>{if("undefined"===typeof FinalizationRegistry)return Ab=b=>b,a;rb=new FinalizationRegistry(b=>{b=b.aa;--b.count.value;0===b.count.value&&(b.fa?b.ha.ma(b.fa):b.ea.ba.ma(b.da))});Ab=b=>{var c=b.aa;c.fa&&rb.register(b,{aa:c},b);return b};sb=b=>{rb.unregister(b)};return Ab(a)};function Cb(){}
var Db=(a,b)=>Object.defineProperty(b,"name",{value:a}),Eb=(a,b,c)=>{if(void 0===a[b].ka){var d=a[b];a[b]=function(...e){if(!a[b].ka.hasOwnProperty(e.length))throw new U(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${a[b].ka})!`);return a[b].ka[e.length].apply(this,e)};a[b].ka=[];a[b].ka[d.ua]=d}},Fb=(a,b)=>{if(h.hasOwnProperty(a))throw new U(`Cannot register public name '${a}' twice`);h[a]=b},Gb=a=>{if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,
"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?`_${a}`:a};function Hb(a,b,c,d,e,f,g,k){this.name=a;this.constructor=b;this.ra=c;this.ma=d;this.ga=e;this.La=f;this.ta=g;this.Ka=k;this.Qa=[]}var Ib=(a,b,c)=>{for(;b!==c;){if(!b.ta)throw new U(`Expected null or instance of ${c.name}, got an instance of ${b.name}`);a=b.ta(a);b=b.ga}return a};
function Jb(a,b){if(null===b){if(this.ya)throw new U(`null is not a valid ${this.name}`);return 0}if(!b.aa)throw new U(`Cannot pass "${Kb(b)}" as a ${this.name}`);if(!b.aa.da)throw new U(`Cannot pass deleted object as a pointer of type ${this.name}`);return Ib(b.aa.da,b.aa.ea.ba,this.ba)}
function Lb(a,b){if(null===b){if(this.ya)throw new U(`null is not a valid ${this.name}`);if(this.wa){var c=this.Ra();null!==a&&a.push(this.ma,c);return c}return 0}if(!b||!b.aa)throw new U(`Cannot pass "${Kb(b)}" as a ${this.name}`);if(!b.aa.da)throw new U(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.va&&b.aa.ea.va)throw new U(`Cannot convert argument of type ${b.aa.ha?b.aa.ha.name:b.aa.ea.name} to parameter type ${this.name}`);c=Ib(b.aa.da,b.aa.ea.ba,this.ba);if(this.wa){if(void 0===
b.aa.fa)throw new U("Passing raw pointer to smart pointer is illegal");switch(this.Ua){case 0:if(b.aa.ha===this)c=b.aa.fa;else throw new U(`Cannot convert argument of type ${b.aa.ha?b.aa.ha.name:b.aa.ea.name} to parameter type ${this.name}`);break;case 1:c=b.aa.fa;break;case 2:if(b.aa.ha===this)c=b.aa.fa;else{var d=b.clone();c=this.Sa(c,Mb(()=>d["delete"]()));null!==a&&a.push(this.ma,c)}break;default:throw new U("Unsupporting sharing policy");}}return c}
function Nb(a,b){if(null===b){if(this.ya)throw new U(`null is not a valid ${this.name}`);return 0}if(!b.aa)throw new U(`Cannot pass "${Kb(b)}" as a ${this.name}`);if(!b.aa.da)throw new U(`Cannot pass deleted object as a pointer of type ${this.name}`);if(b.aa.ea.va)throw new U(`Cannot convert argument of type ${b.aa.ea.name} to parameter type ${this.name}`);return Ib(b.aa.da,b.aa.ea.ba,this.ba)}function Ob(a){return this.fromWireType(J[a>>2])}
function Pb(a,b,c,d,e,f,g,k,m,l,n){this.name=a;this.ba=b;this.ya=c;this.va=d;this.wa=e;this.Pa=f;this.Ua=g;this.Ca=k;this.Ra=m;this.Sa=l;this.ma=n;e||void 0!==b.ga?this.toWireType=Lb:(this.toWireType=d?Jb:Nb,this.ja=null)}
var Qb=(a,b)=>{if(!h.hasOwnProperty(a))throw new nb("Replacing nonexistent public symbol");h[a]=b;h[a].ua=void 0},Rb=(a,b,c=[])=>{a.includes("j")?(a=a.replace(/p/g,"i"),b=(0,h["dynCall_"+a])(b,...c)):b=bb(b)(...c);return b},Sb=(a,b)=>(...c)=>Rb(a,b,c),W=(a,b)=>{a=R(a);var c=a.includes("j")?Sb(a,b):bb(b);if("function"!=typeof c)throw new U(`unknown function pointer with signature ${a}: ${b}`);return c},Tb,Vb=a=>{a=Ub(a);var b=R(a);X(a);return b},Wb=(a,b)=>{function c(f){e[f]||T[f]||(lb[f]?lb[f].forEach(c):
(d.push(f),e[f]=!0))}var d=[],e={};b.forEach(c);throw new Tb(`${a}: `+d.map(Vb).join([", "]));},Yb=(a,b)=>{for(var c=[],d=0;d<a;d++)c.push(J[b+4*d>>2]);return c},Zb=a=>{for(;a.length;){var b=a.pop();a.pop()(b)}};function $b(a){for(var b=1;b<a.length;++b)if(null!==a[b]&&void 0===a[b].ja)return!0;return!1}
function ac(a){var b=Function;if(!(b instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof b} which is not a function`);var c=Db(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function bc(a,b,c,d,e,f){var g=b.length;if(2>g)throw new U("argTypes array size mismatch! Must at least get return value and 'this' types!");var k=null!==b[1]&&null!==c,m=$b(b);c="void"!==b[0].name;d=[a,mb,d,e,Zb,b[0],b[1]];for(e=0;e<g-2;++e)d.push(b[e+2]);if(!m)for(e=k?1:2;e<b.length;++e)null!==b[e].ja&&d.push(b[e].ja);m=$b(b);e=b.length;var l="",n="";for(g=0;g<e-2;++g)l+=(0!==g?", ":"")+"arg"+g,n+=(0!==g?", ":"")+"arg"+g+"Wired";l=`\n        return function (${l}) {\n        if (arguments.length !== ${e-
2}) {\n          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${e-2}');\n        }`;m&&(l+="var destructors = [];\n");var y=m?"destructors":"null",w="humanName throwBindingError invoker fn runDestructors retType classParam".split(" ");k&&(l+="var thisWired = classParam['toWireType']("+y+", this);\n");for(g=0;g<e-2;++g)l+="var arg"+g+"Wired = argType"+g+"['toWireType']("+y+", arg"+g+");\n",w.push("argType"+g);k&&(n="thisWired"+(0<n.length?", ":
"")+n);l+=(c||f?"var rv = ":"")+"invoker(fn"+(0<n.length?", ":"")+n+");\n";if(m)l+="runDestructors(destructors);\n";else for(g=k?1:2;g<b.length;++g)f=1===g?"thisWired":"arg"+(g-2)+"Wired",null!==b[g].ja&&(l+=`${f}_dtor(${f});\n`,w.push(`${f}_dtor`));c&&(l+="var ret = retType['fromWireType'](rv);\nreturn ret;\n");let [z,x]=[w,l+"}\n"];z.push(x);b=ac(z)(...d);return Db(a,b)}
var cc=a=>{a=a.trim();const b=a.indexOf("(");return-1!==b?a.substr(0,b):a},dc=[],Y=[],ec=a=>{9<a&&0===--Y[a+1]&&(Y[a]=void 0,dc.push(a))},fc=a=>{if(!a)throw new U("Cannot use deleted val. handle = "+a);return Y[a]},Mb=a=>{switch(a){case void 0:return 2;case null:return 4;case !0:return 6;case !1:return 8;default:const b=dc.pop()||Y.length;Y[b]=a;Y[b+1]=1;return b}},gc={name:"emscripten::val",fromWireType:a=>{var b=fc(a);ec(a);return b},toWireType:(a,b)=>Mb(b),argPackAdvance:8,readValueFromPointer:Ob,
ja:null},Kb=a=>{if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a},hc=(a,b)=>{switch(b){case 4:return function(c){return this.fromWireType(sa[c>>2])};case 8:return function(c){return this.fromWireType(ta[c>>3])};default:throw new TypeError(`invalid float width (${b}): ${a}`);}},ic=(a,b,c)=>{switch(b){case 1:return c?d=>qa[d]:d=>E[d];case 2:return c?d=>H[d>>1]:d=>ra[d>>1];case 4:return c?d=>I[d>>2]:d=>J[d>>2];default:throw new TypeError(`invalid integer width (${b}): ${a}`);
}},jc="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,kc=(a,b,c)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&jc)return jc.decode(a.buffer instanceof SharedArrayBuffer?a.slice(b,c):a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|g:(e&7)<<18|f<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|
e&1023))}}else d+=String.fromCharCode(e)}return d},lc="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,mc=(a,b)=>{var c=a>>1;for(var d=c+b/2;!(c>=d)&&ra[c];)++c;c<<=1;if(32<c-a&&lc)return lc.decode(E.slice(a,c));c="";for(d=0;!(d>=b/2);++d){var e=H[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c},nc=(a,b,c)=>{c??=2147483647;if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)H[b>>1]=a.charCodeAt(e),b+=2;H[b>>1]=0;return b-d},oc=a=>2*a.length,pc=
(a,b)=>{for(var c=0,d="";!(c>=b/4);){var e=I[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d},qc=(a,b,c)=>{c??=2147483647;if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var g=a.charCodeAt(++e);f=65536+((f&1023)<<10)|g&1023}I[b>>2]=f;b+=4;if(b+4>c)break}I[b>>2]=0;return b-d},rc=a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;
b+=4}return b},sc=a=>{"function"===typeof Atomics.Ya&&(Atomics.Ya(I,a>>2,a).value.then(Xa),Atomics.store(I,a+128>>2,1))};h.__emscripten_thread_mailbox_await=sc;var Xa=()=>{var a=Wa();if(a&&(sc(a),a=tc,!pa))try{if(a(),!(Q||0<P))try{t?cb(D):Sa(D)}catch(b){b instanceof v||"unwind"==b||p(1,b)}}catch(b){b instanceof v||"unwind"==b||p(1,b)}};h.checkMailbox=Xa;
var uc=[],vc=[],wc=a=>{var b=vc.length;vc.push(a);return b},xc=(a,b)=>{for(var c=Array(a),d=0;d<a;++d){var e=d,f=J[b+4*d>>2],g=T[f];if(void 0===g)throw a=`${"parameter "+d} has unknown type ${Vb(f)}`,new U(a);c[e]=g}return c},yc=(a,b,c)=>{var d=[];a=a.toWireType(d,c);d.length&&(J[b>>2]=Mb(d));return a},zc=[null,[],[]];
function Ac(a,b,c,d){if(t)return Pa(3,1,a,b,c,d);for(var e=0,f=0;f<c;f++){var g=J[b>>2],k=J[b+4>>2];b+=8;for(var m=0;m<k;m++){var l=E[g+m],n=zc[a];0===l||10===l?((1===a?na:A)(kc(n,0)),n.length=0):n.push(l)}e+=k}J[d>>2]=e;return 0}O.xa();for(var Bc=Array(256),Cc=0;256>Cc;++Cc)Bc[Cc]=String.fromCharCode(Cc);kb=Bc;U=h.BindingError=class extends Error{constructor(a){super(a);this.name="BindingError"}};nb=h.InternalError=class extends Error{constructor(a){super(a);this.name="InternalError"}};
Object.assign(Cb.prototype,{isAliasOf:function(a){if(!(this instanceof Cb&&a instanceof Cb))return!1;var b=this.aa.ea.ba,c=this.aa.da;a.aa=a.aa;var d=a.aa.ea.ba;for(a=a.aa.da;b.ga;)c=b.ta(c),b=b.ga;for(;d.ga;)a=d.ta(a),d=d.ga;return b===d&&c===a},clone:function(){this.aa.da||qb(this);if(this.aa.sa)return this.aa.count.value+=1,this;var a=Ab,b=Object,c=b.create,d=Object.getPrototypeOf(this),e=this.aa;a=a(c.call(b,d,{aa:{value:{count:e.count,qa:e.qa,sa:e.sa,da:e.da,ea:e.ea,fa:e.fa,ha:e.ha}}}));a.aa.count.value+=
1;a.aa.qa=!1;return a},["delete"](){this.aa.da||qb(this);if(this.aa.qa&&!this.aa.sa)throw new U("Object already scheduled for deletion");sb(this);var a=this.aa;--a.count.value;0===a.count.value&&(a.fa?a.ha.ma(a.fa):a.ea.ba.ma(a.da));this.aa.sa||(this.aa.fa=void 0,this.aa.da=void 0)},isDeleted:function(){return!this.aa.da},deleteLater:function(){this.aa.da||qb(this);if(this.aa.qa&&!this.aa.sa)throw new U("Object already scheduled for deletion");vb.push(this);1===vb.length&&xb&&xb(wb);this.aa.qa=!0;
return this}});h.getInheritedInstanceCount=()=>Object.keys(yb).length;h.getLiveInheritedInstances=()=>{var a=[],b;for(b in yb)yb.hasOwnProperty(b)&&a.push(yb[b]);return a};h.flushPendingDeletes=wb;h.setDelayFunction=a=>{xb=a;vb.length&&xb&&xb(wb)};
Object.assign(Pb.prototype,{Ma(a){this.Ca&&(a=this.Ca(a));return a},Aa(a){this.ma?.(a)},argPackAdvance:8,readValueFromPointer:Ob,fromWireType:function(a){function b(){return this.wa?Bb(this.ba.ra,{ea:this.Pa,da:c,ha:this,fa:a}):Bb(this.ba.ra,{ea:this,da:a})}var c=this.Ma(a);if(!c)return this.Aa(a),null;var d=zb(this.ba,c);if(void 0!==d){if(0===d.aa.count.value)return d.aa.da=c,d.aa.fa=a,d.clone();d=d.clone();this.Aa(a);return d}d=this.ba.La(c);d=ub[d];if(!d)return b.call(this);d=this.va?d.Ia:d.pointerType;
var e=tb(c,this.ba,d.ba);return null===e?b.call(this):this.wa?Bb(d.ba.ra,{ea:d,da:e,ha:this,fa:a}):Bb(d.ba.ra,{ea:d,da:e})}});Tb=h.UnboundTypeError=((a,b)=>{var c=Db(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`};return c})(Error,"UnboundTypeError");
Y.push(0,1,void 0,1,null,1,!0,1,!1,1);h.count_emval_handles=()=>Y.length/2-5-dc.length;
var Dc=[Qa,Ra,ib,Ac],Gc={f:(a,b,c)=>{(new fb(a)).xa(b,c);gb=a;hb++;throw gb;},B:a=>{Ec(a,!q,1,!ba,65536,!1);O.Fa()},l:a=>{t?postMessage({cmd:"cleanupThread",thread:a}):O.Da(O.ia[a])},y:jb,s:()=>{},G:(a,b,c,d)=>{b=R(b);V(a,{name:b,fromWireType:function(e){return!!e},toWireType:function(e,f){return f?c:d},argPackAdvance:8,readValueFromPointer:function(e){return this.fromWireType(E[e])},ja:null})},r:(a,b,c,d,e,f,g,k,m,l,n,y,w)=>{n=R(n);f=W(e,f);k&&=W(g,k);l&&=W(m,l);w=W(y,w);var z=Gb(n);Fb(z,function(){Wb(`Cannot construct ${n} due to unbound types`,
[d])});ob([a,b,c],d?[d]:[],x=>{x=x[0];if(d){var F=x.ba;var ia=F.ra}else ia=Cb.prototype;x=Db(n,function(...db){if(Object.getPrototypeOf(this)!==eb)throw new U("Use 'new' to construct "+n);if(void 0===G.oa)throw new U(n+" has no accessible constructor");var Xb=G.oa[db.length];if(void 0===Xb)throw new U(`Tried to invoke ctor of ${n} with invalid number of parameters (${db.length}) - expected (${Object.keys(G.oa).toString()}) parameters instead!`);return Xb.apply(this,db)});var eb=Object.create(ia,{constructor:{value:x}});
x.prototype=eb;var G=new Hb(n,x,eb,w,F,f,k,l);if(G.ga){var ja;(ja=G.ga).za??(ja.za=[]);G.ga.za.push(G)}F=new Pb(n,G,!0,!1,!1);ja=new Pb(n+"*",G,!1,!1,!1);ia=new Pb(n+" const*",G,!1,!0,!1);ub[a]={pointerType:ja,Ia:ia};Qb(z,x);return[F,ja,ia]})},q:(a,b,c,d,e,f)=>{var g=Yb(b,c);e=W(d,e);ob([],[a],k=>{k=k[0];var m=`constructor ${k.name}`;void 0===k.ba.oa&&(k.ba.oa=[]);if(void 0!==k.ba.oa[b-1])throw new U(`Cannot register multiple constructors with identical number of parameters (${b-1}) for class '${k.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
k.ba.oa[b-1]=()=>{Wb(`Cannot construct ${k.name} due to unbound types`,g)};ob([],g,l=>{l.splice(1,0,null);k.ba.oa[b-1]=bc(m,l,null,e,f);return[]});return[]})},g:(a,b,c,d,e,f,g,k,m)=>{var l=Yb(c,d);b=R(b);b=cc(b);f=W(e,f);ob([],[a],n=>{function y(){Wb(`Cannot call ${w} due to unbound types`,l)}n=n[0];var w=`${n.name}.${b}`;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);k&&n.ba.Qa.push(b);var z=n.ba.ra,x=z[b];void 0===x||void 0===x.ka&&x.className!==n.name&&x.ua===c-2?(y.ua=c-2,y.className=n.name,z[b]=
y):(Eb(z,b,w),z[b].ka[c-2]=y);ob([],l,F=>{F=bc(w,F,n,f,g,m);void 0===z[b].ka?(F.ua=c-2,z[b]=F):z[b].ka[c-2]=F;return[]});return[]})},F:a=>V(a,gc),n:(a,b,c)=>{b=R(b);V(a,{name:b,fromWireType:d=>d,toWireType:(d,e)=>e,argPackAdvance:8,readValueFromPointer:hc(b,c),ja:null})},c:(a,b,c,d,e)=>{b=R(b);-1===e&&(e=4294967295);e=k=>k;if(0===d){var f=32-8*c;e=k=>k<<f>>>f}var g=b.includes("unsigned")?function(k,m){return m>>>0}:function(k,m){return m};V(a,{name:b,fromWireType:e,toWireType:g,argPackAdvance:8,readValueFromPointer:ic(b,
c,0!==d),ja:null})},b:(a,b,c)=>{function d(f){return new e(qa.buffer,J[f+4>>2],J[f>>2])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=R(c);V(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Na:!0})},o:(a,b)=>{b=R(b);var c="std::string"===b;V(a,{name:b,fromWireType:function(d){var e=J[d>>2],f=d+4;if(c)for(var g=f,k=0;k<=e;++k){var m=f+k;if(k==e||0==E[m]){g=g?kc(E,g,m-g):"";if(void 0===l)var l=g;else l+=String.fromCharCode(0),
l+=g;g=m+1}}else{l=Array(e);for(k=0;k<e;++k)l[k]=String.fromCharCode(E[f+k]);l=l.join("")}X(d);return l},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var f,g="string"==typeof e;if(!(g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array))throw new U("Cannot pass non-string to std::string");var k;if(c&&g)for(f=k=0;f<e.length;++f){var m=e.charCodeAt(f);127>=m?k++:2047>=m?k+=2:55296<=m&&57343>=m?(k+=4,++f):k+=3}else k=e.length;f=k;k=Fc(4+f+1);m=
k+4;J[k>>2]=f;if(c&&g){if(g=m,f+=1,0<f){f=g+f-1;for(m=0;m<e.length;++m){var l=e.charCodeAt(m);if(55296<=l&&57343>=l){var n=e.charCodeAt(++m);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(g>=f)break;E[g++]=l}else{if(2047>=l){if(g+1>=f)break;E[g++]=192|l>>6}else{if(65535>=l){if(g+2>=f)break;E[g++]=224|l>>12}else{if(g+3>=f)break;E[g++]=240|l>>18;E[g++]=128|l>>12&63}E[g++]=128|l>>6&63}E[g++]=128|l&63}}E[g]=0}}else if(g)for(g=0;g<f;++g){l=e.charCodeAt(g);if(255<l)throw X(m),new U("String has UTF-16 code units that do not fit in 8 bits");
E[m+g]=l}else for(g=0;g<f;++g)E[m+g]=e[g];null!==d&&d.push(X,k);return k},argPackAdvance:8,readValueFromPointer:Ob,ja(d){X(d)}})},k:(a,b,c)=>{c=R(c);if(2===b){var d=mc;var e=nc;var f=oc;var g=k=>ra[k>>1]}else 4===b&&(d=pc,e=qc,f=rc,g=k=>J[k>>2]);V(a,{name:c,fromWireType:k=>{for(var m=J[k>>2],l,n=k+4,y=0;y<=m;++y){var w=k+4+y*b;if(y==m||0==g(w))n=d(n,w-n),void 0===l?l=n:(l+=String.fromCharCode(0),l+=n),n=w+b}X(k);return l},toWireType:(k,m)=>{if("string"!=typeof m)throw new U(`Cannot pass non-string to C++ string type ${c}`);
var l=f(m),n=Fc(4+l+b);J[n>>2]=l/b;e(m,n+4,l+b);null!==k&&k.push(X,n);return n},argPackAdvance:8,readValueFromPointer:Ob,ja(k){X(k)}})},p:(a,b)=>{b=R(b);V(a,{Oa:!0,name:b,argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})},z:()=>1,w:(a,b)=>{a==b?setTimeout(Xa):t?postMessage({targetThread:a,cmd:"checkMailbox"}):(a=O.ia[a])&&a.postMessage({cmd:"checkMailbox"})},C:(a,b,c,d,e)=>{uc.length=d;b=e>>3;for(e=0;e<d;e++)uc[e]=ta[b+e];a=Dc[a];O.Ja=c;c=a(...uc);O.Ja=0;return c},A:sc,E:a=>{r&&O.ia[a].ref()},
j:(a,b,c,d)=>{a=vc[a];b=fc(b);return a(null,b,c,d)},d:ec,i:(a,b,c)=>{b=xc(a,b);var d=b.shift();a--;var e="return function (obj, func, destructorsRef, args) {\n",f=0,g=[];0===c&&g.push("obj");for(var k=["retType"],m=[d],l=0;l<a;++l)g.push("arg"+l),k.push("argType"+l),m.push(b[l]),e+=`  var arg${l} = argType${l}.readValueFromPointer(args${f?"+"+f:""});\n`,f+=b[l].argPackAdvance;e+=`  var rv = ${1===c?"new func":"func.call"}(${g.join(", ")});\n`;d.Oa||(k.push("emval_returnValue"),m.push(yc),e+="  return emval_returnValue(retType, destructorsRef, rv);\n");
k.push(e+"};\n");a=ac(k)(...m);c=`methodCaller<(${b.map(n=>n.name).join(", ")}) => ${d.name}>`;return wc(Db(c,a))},H:a=>{9<a&&(Y[a+1]+=1)},h:a=>{var b=fc(a);Zb(b);ec(a)},t:()=>{Ba("")},m:()=>{},D:()=>{P+=1;throw"unwind";},e:()=>performance.timeOrigin+performance.now(),v:()=>{Ba("OOM")},x:Sa,u:Ac,a:C},Z=function(){function a(c,d){Z=c.exports;O.Ga.push(Z.N);ab=Z.S;wa.unshift(Z.I);oa=d;Aa();return Z}var b={a:Gc};za();if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){return A(`Module.instantiateWasm callback failed with error: ${c}`),
!1}Ga(b,function(c){a(c.instance,c.module)});return{}}(),Wa=h._pthread_self=()=>(Wa=h._pthread_self=Z.J)(),Fc=a=>(Fc=Z.K)(a),Ub=a=>(Ub=Z.L)(a);h.__embind_initialize_bindings=()=>(h.__embind_initialize_bindings=Z.M)();h.__emscripten_tls_init=()=>(h.__emscripten_tls_init=Z.N)();var Ec=h.__emscripten_thread_init=(a,b,c,d,e,f)=>(Ec=h.__emscripten_thread_init=Z.O)(a,b,c,d,e,f);h.__emscripten_thread_crashed=()=>(h.__emscripten_thread_crashed=Z.P)();
var Oa=(a,b,c,d,e)=>(Oa=Z.Q)(a,b,c,d,e),X=a=>(X=Z.R)(a),Va=a=>(Va=Z.T)(a),cb=h.__emscripten_thread_exit=a=>(cb=h.__emscripten_thread_exit=Z.U)(a),tc=()=>(tc=Z.V)(),Za=(a,b)=>(Za=Z.W)(a,b),La=a=>(La=Z.X)(a),Na=a=>(Na=Z.Y)(a),Ka=()=>(Ka=Z.Z)();h.dynCall_jiji=(a,b,c,d,e)=>(h.dynCall_jiji=Z.$)(a,b,c,d,e);h.wasmMemory=C;h.keepRuntimeAlive=()=>Q||0<P;h.ExitStatus=v;var Hc;M=function Ic(){Hc||Jc();Hc||(M=Ic)};
function Jc(){function a(){if(!Hc&&(Hc=!0,h.calledRun=!0,!pa)){t||Ya(wa);if(h.onRuntimeInitialized)h.onRuntimeInitialized();if(!t){if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var b=h.postRun.shift();xa.unshift(b)}Ya(xa)}}}if(!(0<L))if(t)t||Ya(wa),startWorker(h);else{if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)va.unshift(h.preRun.shift());Ya(va);0<L||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},
1);a()},1)):a())}}if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();Jc();
