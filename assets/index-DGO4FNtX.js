const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-Hl2jBjRS.js","assets/src-pU_fyWyz.js","assets/chunk-Y2CYZVJY-Bg_95ya4.js","assets/chunk-742MDFTN-Reio-Ogm.js","assets/chunk-O7XYJQB3-CFZ1dr9U.js","assets/chunk-ZIGJFQKS-BpDgqCK4.js","assets/dist-Ct2CQMTA.js","assets/chunk-MBY4JIJT-txc6ZV0C.js","assets/chunk-5DYCD2WN-DDFA3VFD.js","assets/chunk-7INBJB4K-CIDjFwX6.js","assets/chunk-7PRAP22T-qB0oeNIJ.js","assets/chunk-J5ZVWO5B-B7BYqhUP.js","assets/rough.esm-Cs8YDIX4.js","assets/chunk-6AEJRKK7-C9JgZW4A.js","assets/chunk-GNY47TPC-DqGNOJY1.js","assets/chunk-DUW6YSOI-CaX5BfCt.js","assets/chunk-UA2S7LBM-D5gIEoYI.js","assets/chunk-Z7XXMR3K-CaGgULJN.js","assets/line-Bk1MUASa.js","assets/path-CNO468J-.js","assets/array-DYRGGQae.js","assets/chunk-LNGE3PJU-DPPgykQq.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Array.isArray,t=Array.prototype.indexOf,n=Array.prototype.includes,r=Array.from,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors,s=Object.prototype,c=Array.prototype,l=Object.getPrototypeOf,u=Object.isExtensible,d=()=>{};function f(e){for(var t=0;t<e.length;t++)e[t]()}function p(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var m=1024,h=2048,g=4096,_=8192,v=16384,y=32768,b=1<<25,x=65536,S=1<<19,C=1<<20,w=1<<25,T=65536,ee=1<<21,E=1<<22,te=1<<23,D=Symbol(`$state`),ne=Symbol(`legacy props`),re=Symbol(``),O=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},ie=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`);function ae(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function oe(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function se(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function ce(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function le(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function ue(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function de(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function fe(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function pe(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function me(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function he(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function ge(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var _e={},k=Symbol(),ve=`http://www.w3.org/1999/xhtml`;function ye(){console.warn(`https://svelte.dev/e/derived_inert`)}function be(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function xe(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var A=!1;function Se(e){A=e}var j;function Ce(e){if(e===null)throw be(),_e;return j=e}function we(){return Ce(Kt(j))}function M(e){if(A){if(Kt(j)!==null)throw be(),_e;j=e}}function Te(e=1){if(A){for(var t=e,n=j;t--;)n=Kt(n);j=n}}function Ee(e=!0){for(var t=0,n=j;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else (r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=Kt(n);e&&n.remove(),n=i}}function De(e){if(!e||e.nodeType!==8)throw be(),_e;return e.data}function Oe(e){return e===this.v}function ke(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Ae(e){return!ke(e,this.v)}var je=!1,Me=!1,N=null;function Ne(e){N=e}function Pe(e,t=!1,n){N={p:N,i:!1,c:null,e:null,s:e,x:null,r:W,l:Me&&!t?{s:null,u:null,$:[]}:null}}function Fe(e){var t=N,n=t.e;if(n!==null){t.e=null;for(var r of n)on(r)}return e!==void 0&&(t.x=e),t.i=!0,N=t.p,e??{}}function Ie(){return!Me||N!==null&&N.l===null}var Le=[];function Re(){var e=Le;Le=[],f(e)}function ze(e){if(Le.length===0&&!Ze){var t=Le;queueMicrotask(()=>{t===Le&&Re()})}Le.push(e)}function Be(e){var t=W;if(t===null)return U.f|=te,e;if(!(t.f&32768)&&!(t.f&4))throw e;Ve(e,t)}function Ve(e,t){for(;t!==null;){if(t.f&128){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}var He=~(h|g|m);function P(e,t){e.f=e.f&He|t}function Ue(e){e.f&512||e.deps===null?P(e,m):P(e,g)}function We(e){if(e!==null)for(let t of e)!(t.f&2)||!(t.f&65536)||(t.f^=T,We(t.deps))}function Ge(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),We(e.deps),P(e,m)}var Ke=!1,qe=!1;function Je(e){var t=qe;try{return qe=!1,[e(),qe]}finally{qe=t}}var Ye=new Set,F=null,I=null,Xe=null,Ze=!1,Qe=!1,$e=null,et=null,tt=0,nt=1,rt=class e{id=nt++;current=new Map;previous=new Map;#e=new Set;#t=new Set;#n=new Set;#r=new Map;#i=new Map;#a=null;#o=[];#s=[];#c=new Set;#l=new Set;#u=new Map;#d=new Set;is_fork=!1;#f=!1;#p=new Set;#m(){return this.is_fork||this.#i.size>0}#h(){for(let n of this.#p)for(let r of n.#i.keys()){for(var e=!1,t=r;t.parent!==null;){if(this.#u.has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1}skip_effect(e){this.#u.has(e)||this.#u.set(e,{d:[],m:[]}),this.#d.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#u.get(e);if(n){this.#u.delete(e);for(var r of n.d)P(r,h),t(r);for(r of n.m)P(r,g),t(r)}this.#d.add(e)}#g(){if(tt++>1e3&&(Ye.delete(this),it()),!this.#m()){for(let e of this.#c)this.#l.delete(e),P(e,h),this.schedule(e);for(let e of this.#l)P(e,g),this.schedule(e)}let t=this.#o;this.#o=[],this.apply();var n=$e=[],r=[],i=et=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw dt(e),t}if(F=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if($e=null,et=null,this.#m()||this.#h()){this.#v(r),this.#v(n);for(let[e,t]of this.#u)ut(e,t)}else{this.#r.size===0&&Ye.delete(this),this.#c.clear(),this.#l.clear();for(let e of this.#e)e(this);this.#e.clear(),ot(r),ot(n),this.#a?.resolve()}var o=F;if(this.#o.length>0){let e=o??=this;e.#o.push(...this.#o.filter(t=>!e.#o.includes(t)))}o!==null&&(Ye.add(o),o.#g()),je&&!Ye.has(this)&&this.#y()}#_(e,t,n){e.f^=m;for(var r=e.first;r!==null;){var i=r.f,a=(i&96)!=0;if(!(a&&i&1024||i&8192||this.#u.has(r))&&r.fn!==null){a?r.f^=m:i&4?t.push(r):je&&i&16777224?n.push(r):Bn(r)&&(i&16&&this.#l.add(r),Gn(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(e){for(var t=0;t<e.length;t+=1)Ge(e[t],this.#c,this.#l)}capture(e,t,n=!1){e.v!==k&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),I?.set(e,t)),this.is_fork||(e.v=t)}activate(){F=this}deactivate(){F=null,I=null}flush(){try{Qe=!0,F=this,this.#g()}finally{tt=0,Xe=null,$e=null,et=null,Qe=!1,F=null,I=null,At.clear()}}discard(){for(let e of this.#t)e(this);this.#t.clear(),this.#n.clear(),Ye.delete(this)}register_created_effect(e){this.#s.push(e)}#y(){for(let l of Ye){var e=l.id<this.id,t=[];for(let[r,[i,a]]of this.current){if(l.current.has(r)){var n=l.current.get(r)[0];if(e&&i!==n)l.current.set(r,[i,a]);else continue}t.push(r)}var r=[...l.current.keys()].filter(e=>!this.current.has(e));if(r.length===0)e&&l.discard();else if(t.length>0){if(e)for(let e of this.#d)l.unskip_effect(e,e=>{e.f&4194320?l.schedule(e):l.#v([e])});l.activate();var i=new Set,a=new Map;for(var o of t)st(o,r,i,a);a=new Map;var s=[...l.current.keys()].filter(e=>this.current.has(e)?this.current.get(e)[0]!==e:!0);for(let e of this.#s)!(e.f&155648)&&ct(e,s,a)&&(e.f&4194320?(P(e,h),l.schedule(e)):l.#c.add(e));if(l.#o.length>0){l.apply();for(var c of l.#o)l.#_(c,[],[]);l.#o=[]}l.deactivate()}}for(let e of Ye)e.#p.has(this)&&(e.#p.delete(this),e.#p.size===0&&!e.#m()&&(e.activate(),e.#g()))}increment(e,t){let n=this.#r.get(t)??0;if(this.#r.set(t,n+1),e){let e=this.#i.get(t)??0;this.#i.set(t,e+1)}}decrement(e,t,n){let r=this.#r.get(t)??0;if(r===1?this.#r.delete(t):this.#r.set(t,r-1),e){let e=this.#i.get(t)??0;e===1?this.#i.delete(t):this.#i.set(t,e-1)}this.#f||n||(this.#f=!0,ze(()=>{this.#f=!1,this.flush()}))}transfer_effects(e,t){for(let t of e)this.#c.add(t);for(let e of t)this.#l.add(e);e.clear(),t.clear()}oncommit(e){this.#e.add(e)}ondiscard(e){this.#t.add(e)}on_fork_commit(e){this.#n.add(e)}run_fork_commit_callbacks(){for(let e of this.#n)e(this);this.#n.clear()}settled(){return(this.#a??=p()).promise}static ensure(){if(F===null){let t=F=new e;Qe||(Ye.add(F),Ze||ze(()=>{F===t&&t.flush()}))}return F}apply(){if(!je||!this.is_fork&&Ye.size===1){I=null;return}I=new Map;for(let[e,[t]]of this.current)I.set(e,t);for(let n of Ye)if(!(n===this||n.is_fork)){var e=!1,t=!1;if(n.id<this.id)for(let[r,[,i]]of n.current)i||(e||=this.current.has(r),t||=!this.current.has(r));if(e&&t)this.#p.add(n);else for(let[e,t]of n.previous)I.has(e)||I.set(e,t)}}schedule(e){if(Xe=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if($e!==null&&t===W&&(je||(U===null||!(U.f&2))&&!Ke))return;if(n&96){if(!(n&1024))return;t.f^=m}}this.#o.push(t)}};function it(){try{de()}catch(e){Ve(e,Xe)}}var at=null;function ot(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&Bn(r)&&(at=new Set,Gn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&_n(r),at?.size>0)){At.clear();for(let e of at){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)at.has(n)&&(at.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||Gn(n)}}at.clear()}}at=null}}function st(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let i of e.reactions){let e=i.f;e&2?st(i,t,n,r):e&4194320&&!(e&2048)&&ct(i,t,r)&&(P(i,h),lt(i))}}function ct(e,t,r){let i=r.get(e);if(i!==void 0)return i;if(e.deps!==null)for(let i of e.deps){if(n.call(t,i))return!0;if(i.f&2&&ct(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function lt(e){F.schedule(e)}function ut(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),P(e,m);for(var n=e.first;n!==null;)ut(n,t),n=n.next}}function dt(e){P(e,m);for(var t=e.first;t!==null;)dt(t),t=t.next}function ft(e){let t=0,n=Mt(0),r;return()=>{nn()&&(K(n),un(()=>(t===0&&(r=Jn(()=>e(()=>It(n)))),t+=1,()=>{ze(()=>{--t,t===0&&(r?.(),r=void 0,It(n))})})))}}var pt=x|S;function mt(e,t,n,r){new ht(e,t,n,r)}var ht=class{parent;is_pending=!1;transform_error;#e;#t=A?j:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=ft(()=>(this.#m=Mt(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=W;t.b=this,t.f|=128,n(e)},this.parent=W.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=dn(()=>{if(A){let e=this.#t;we();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#v():this.#g()}else this.#y()},pt),A&&(this.#e=j)}#g(){try{this.#a=fn(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed;t&&(this.#s=fn(()=>{t(this.#e,()=>e,()=>()=>{})}))}#v(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=fn(()=>e(this.#e)),ze(()=>{var e=this.#c=document.createDocumentFragment(),t=Wt();e.append(t),this.#a=this.#x(()=>fn(()=>this.#r(t))),this.#u===0&&(this.#e.before(e),this.#c=null,vn(this.#o,()=>{this.#o=null}),this.#b(F))}))}#y(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=fn(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();Sn(this.#a,e);let t=this.#n.pending;this.#o=fn(()=>t(this.#e))}else this.#b(F)}catch(e){this.error(e)}}#b(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){Ge(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#x(e){var t=W,n=U,r=N;kn(this.#i),On(this.#i),Ne(this.#i.ctx);try{return rt.ensure(),e()}catch(e){return Be(e),null}finally{kn(t),On(n),Ne(r)}}#S(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#S(e,t);return}this.#u+=e,this.#u===0&&(this.#b(t),this.#o&&vn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#S(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,ze(()=>{this.#d=!1,this.#m&&Pt(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),K(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;F?.is_fork?(this.#a&&F.skip_effect(this.#a),this.#o&&F.skip_effect(this.#o),this.#s&&F.skip_effect(this.#s),F.on_fork_commit(()=>{this.#C(e)})):this.#C(e)}#C(e){this.#a&&=(H(this.#a),null),this.#o&&=(H(this.#o),null),this.#s&&=(H(this.#s),null),A&&(Ce(this.#t),Te(),Ce(Ee()));var t=this.#n.onerror;let n=this.#n.failed;var r=!1,i=!1;let a=()=>{if(r){xe();return}r=!0,i&&ge(),this.#s!==null&&vn(this.#s,()=>{this.#s=null}),this.#x(()=>{this.#y()})},o=e=>{try{i=!0,t?.(e,a),i=!1}catch(e){Ve(e,this.#i&&this.#i.parent)}n&&(this.#s=this.#x(()=>{try{return fn(()=>{var t=W;t.b=this,t.f|=128,n(this.#e,()=>e,()=>a)})}catch(e){return Ve(e,this.#i.parent),null}}))};ze(()=>{var t;try{t=this.transform_error(e)}catch(e){Ve(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(o,e=>Ve(e,this.#i&&this.#i.parent)):o(t)})}};function gt(e,t,n,r){let i=Ie()?bt:Ct;var a=e.filter(e=>!e.settled);if(n.length===0&&a.length===0){r(t.map(i));return}var o=W,s=_t(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function l(e){s();try{r(e)}catch(e){o.f&16384||Ve(e,o)}vt()}if(n.length===0){c.then(()=>l(t.map(i)));return}var u=yt();function d(){Promise.all(n.map(e=>xt(e))).then(e=>l([...t.map(i),...e])).catch(e=>Ve(e,o)).finally(()=>u())}c?c.then(()=>{s(),d(),vt()}):d()}function _t(){var e=W,t=U,n=N,r=F;return function(i=!0){kn(e),On(t),Ne(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function vt(e=!0){kn(null),On(null),Ne(null),e&&F?.deactivate()}function yt(){var e=W,t=e.b,n=F,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),(i=!1)=>{t.update_pending_count(-1,n),n.decrement(r,e,i)}}function bt(e){var t=2|h;return W!==null&&(W.f|=S),{ctx:N,deps:null,effects:null,equals:Oe,f:t,fn:e,reactions:null,rv:0,v:k,wv:0,parent:W,ac:null}}function xt(e,t,n){let r=W;r===null&&oe();var i=void 0,a=Mt(k),o=!U,s=new Map;return ln(()=>{var t=W,n=p();i=n.promise;try{Promise.resolve(e()).then(n.resolve,n.reject).finally(vt)}catch(e){n.reject(e),vt()}var c=F;if(o){if(t.f&32768)var l=yt();if(r.b.is_rendered())s.get(c)?.reject(O),s.delete(c);else{for(let e of s.values())e.reject(O);s.clear()}s.set(c,n)}let u=(e,n=void 0)=>{if(l&&l(n===O),!(n===O||t.f&16384)){if(c.activate(),n)a.f|=te,Pt(a,n);else{a.f&8388608&&(a.f^=te),Pt(a,e);for(let[e,t]of s){if(s.delete(e),e===c)break;t.reject(O)}}c.deactivate()}};n.promise.then(u,e=>u(null,e||`unknown`))}),rn(()=>{for(let e of s.values())e.reject(O)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function St(e){let t=bt(e);return je||jn(t),t}function Ct(e){let t=bt(e);return t.equals=Ae,t}function wt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)H(t[n])}}function Tt(e){var t,n=W,r=e.parent;if(!Tn&&r!==null&&r.f&24576)return ye(),e.v;kn(r);try{e.f&=~T,wt(e),t=Hn(e)}finally{kn(n)}return t}function Et(e){var t=Tt(e);if(!e.equals(t)&&(e.wv=zn(),(!F?.is_fork||e.deps===null)&&(F===null?e.v=t:F.capture(e,t,!0),e.deps===null))){P(e,m);return}Tn||(I===null?Ue(e):(nn()||F?.is_fork)&&I.set(e,t))}function Dt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(O),t.teardown=d,t.ac=null,Wn(t,0),mn(t))}function Ot(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&Gn(t)}var kt=new Set,At=new Map,jt=!1;function Mt(e,t){return{f:0,v:e,reactions:null,equals:Oe,rv:0,wv:0}}function L(e,t){let n=Mt(e,t);return jn(n),n}function Nt(e,t=!1,n=!0){let r=Mt(e);return t||(r.equals=Ae),Me&&n&&N!==null&&N.l!==null&&(N.l.s??=[]).push(r),r}function R(e,t,r=!1){return U!==null&&(!Dn||U.f&131072)&&Ie()&&U.f&4325394&&(An===null||!n.call(An,e))&&he(),Pt(e,r?Rt(t):t,et)}function Pt(e,t,n=null){if(!e.equals(t)){At.set(e,Tn?t:e.v);var r=rt.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&Tt(t),I===null&&Ue(t)}e.wv=zn(),Lt(e,h,n),Ie()&&W!==null&&W.f&1024&&!(W.f&96)&&(Nn===null?Pn([e]):Nn.push(e)),!r.is_fork&&kt.size>0&&!jt&&Ft()}return t}function Ft(){jt=!1;for(let e of kt)e.f&1024&&P(e,g),Bn(e)&&Gn(e);kt.clear()}function It(e){R(e,e.v+1)}function Lt(e,t,n){var r=e.reactions;if(r!==null)for(var i=Ie(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(!(!i&&s===W)){var l=(c&h)===0;if(l&&P(s,t),c&2){var u=s;I?.delete(u),c&65536||(c&512&&(W===null||!(W.f&2097152))&&(s.f|=T),Lt(u,g,n))}else if(l){var d=s;c&16&&at!==null&&at.add(d),n===null?lt(d):n.push(d)}}}}function Rt(t){if(typeof t!=`object`||!t||D in t)return t;let n=l(t);if(n!==s&&n!==c)return t;var r=new Map,i=e(t),o=L(0),u=null,d=Ln,f=e=>{if(Ln===d)return e();var t=U,n=Ln;On(null),Rn(d);var r=e();return On(t),Rn(n),r};return i&&r.set(`length`,L(t.length,u)),new Proxy(t,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&pe();var i=r.get(t);return i===void 0?f(()=>{var e=L(n.value,u);return r.set(t,e),e}):R(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>L(k,u));r.set(t,e),It(o)}}else R(n,k),It(o);return!0},get(e,n,i){if(n===D)return t;var o=r.get(n),s=n in e;if(o===void 0&&(!s||a(e,n)?.writable)&&(o=f(()=>L(Rt(s?e[n]:k),u)),r.set(n,o)),o!==void 0){var c=K(o);return c===k?void 0:c}return Reflect.get(e,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=K(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==k)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===D)return!0;var n=r.get(t),i=n!==void 0&&n.v!==k||Reflect.has(e,t);return(n!==void 0||W!==null&&(!i||a(e,t)?.writable))&&(n===void 0&&(n=f(()=>L(i?Rt(e[t]):k,u)),r.set(t,n)),K(n)===k)?!1:i},set(e,t,n,s){var c=r.get(t),l=t in e;if(i&&t===`length`)for(var d=n;d<c.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>L(k,u)),r.set(d+``,p)):R(p,k)}if(c===void 0)(!l||a(e,t)?.writable)&&(c=f(()=>L(void 0,u)),R(c,Rt(n)),r.set(t,c));else{l=c.v!==k;var m=f(()=>Rt(n));R(c,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(s,n),!l){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&R(g,_+1)}It(o)}return!0},ownKeys(e){K(o);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==k});for(var[n,i]of r)i.v!==k&&!(n in e)&&t.push(n);return t},setPrototypeOf(){me()}})}var zt,Bt,Vt,Ht;function Ut(){if(zt===void 0){zt=window,Bt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Vt=a(t,`firstChild`).get,Ht=a(t,`nextSibling`).get,u(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),u(n)&&(n.__t=void 0)}}function Wt(e=``){return document.createTextNode(e)}function Gt(e){return Vt.call(e)}function Kt(e){return Ht.call(e)}function z(e,t){if(!A)return Gt(e);var n=Gt(j);if(n===null)n=j.appendChild(Wt());else if(t&&n.nodeType!==3){var r=Wt();return n?.before(r),Ce(r),r}return t&&Zt(n),Ce(n),n}function qt(e,t=!1){if(!A){var n=Gt(e);return n instanceof Comment&&n.data===``?Kt(n):n}if(t){if(j?.nodeType!==3){var r=Wt();return j?.before(r),Ce(r),r}Zt(j)}return j}function B(e,t=1,n=!1){let r=A?j:e;for(var i;t--;)i=r,r=Kt(r);if(!A)return r;if(n){if(r?.nodeType!==3){var a=Wt();return r===null?i?.after(a):r.before(a),Ce(a),a}Zt(r)}return Ce(r),r}function Jt(e){e.textContent=``}function Yt(){return!je||at!==null?!1:(W.f&y)!==0}function Xt(e,t,n){let r=n?{is:n}:void 0;return document.createElementNS(t??`http://www.w3.org/1999/xhtml`,e,r)}function Zt(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Qt(e){var t=U,n=W;On(null),kn(null);try{return e()}finally{On(t),kn(n)}}function $t(e){W===null&&(U===null&&ue(e),le()),Tn&&ce(e)}function en(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function tn(e,t){var n=W;n!==null&&n.f&8192&&(e|=_);var r={ctx:N,deps:null,nodes:null,f:e|h|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};F?.register_created_effect(r);var i=r;if(e&4)$e===null?rt.ensure().schedule(r):$e.push(r);else if(t!==null){try{Gn(r)}catch(e){throw H(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=x))}if(i!==null&&(i.parent=n,n!==null&&en(i,n),U!==null&&U.f&2&&!(e&64))){var a=U;(a.effects??=[]).push(i)}return r}function nn(){return U!==null&&!Dn}function rn(e){let t=tn(8,null);return P(t,m),t.teardown=e,t}function an(e){$t(`$effect`);var t=W.f;if(!U&&t&32&&!(t&32768)){var n=N;(n.e??=[]).push(e)}else return on(e)}function on(e){return tn(4|C,e)}function sn(e){rt.ensure();let t=tn(64|S,e);return(e={})=>new Promise(n=>{e.outro?vn(t,()=>{H(t),n(void 0)}):(H(t),n(void 0))})}function cn(e){return tn(4,e)}function ln(e){return tn(E|S,e)}function un(e,t=0){return tn(8|t,e)}function V(e,t=[],n=[],r=[]){gt(r,t,n,t=>{tn(8,()=>e(...t.map(K)))})}function dn(e,t=0){return tn(16|t,e)}function fn(e){return tn(32|S,e)}function pn(e){var t=e.teardown;if(t!==null){let e=Tn,n=U;En(!0),On(null);try{t.call(null)}finally{En(e),On(n)}}}function mn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&Qt(()=>{e.abort(O)});var r=n.next;n.f&64?n.parent=null:H(n,t),n=r}}function hn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||H(t),t=n}}function H(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(gn(e.nodes.start,e.nodes.end),n=!0),P(e,b),mn(e,t&&!n),Wn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();pn(e),e.f^=b,e.f|=v;var i=e.parent;i!==null&&i.first!==null&&_n(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function gn(e,t){for(;e!==null;){var n=e===t?null:Kt(e);e.remove(),e=n}}function _n(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function vn(e,t,n=!0){var r=[];yn(e,r,!0);var i=()=>{n&&H(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function yn(e,t,n){if(!(e.f&8192)){e.f^=_;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=(i.f&65536)!=0||(i.f&32)!=0&&(e.f&16)!=0;yn(i,t,o?n:!1)}i=a}}}function bn(e){xn(e,!0)}function xn(e,t){if(e.f&8192){e.f^=_,e.f&1024||(P(e,h),rt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&65536)!=0||(n.f&32)!=0;xn(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function Sn(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:Kt(n);t.append(n),n=i}}var Cn=null,wn=!1,Tn=!1;function En(e){Tn=e}var U=null,Dn=!1;function On(e){U=e}var W=null;function kn(e){W=e}var An=null;function jn(e){U!==null&&(!je||U.f&2)&&(An===null?An=[e]:An.push(e))}var G=null,Mn=0,Nn=null;function Pn(e){Nn=e}var Fn=1,In=0,Ln=In;function Rn(e){Ln=e}function zn(){return++Fn}function Bn(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~T),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(Bn(a)&&Et(a),a.wv>e.wv)return!0}t&512&&I===null&&P(e,m)}return!1}function Vn(e,t,r=!0){var i=e.reactions;if(i!==null&&!(!je&&An!==null&&n.call(An,e)))for(var a=0;a<i.length;a++){var o=i[a];o.f&2?Vn(o,t,!1):t===o&&(r?P(o,h):o.f&1024&&P(o,g),lt(o))}}function Hn(e){var t=G,n=Mn,r=Nn,i=U,a=An,o=N,s=Dn,c=Ln,l=e.f;G=null,Mn=0,Nn=null,U=l&96?null:e,An=null,Ne(e.ctx),Dn=!1,Ln=++In,e.ac!==null&&(Qt(()=>{e.ac.abort(O)}),e.ac=null);try{e.f|=ee;var u=e.fn,d=u();e.f|=y;var f=e.deps,p=F?.is_fork;if(G!==null){var m;if(p||Wn(e,Mn),f!==null&&Mn>0)for(f.length=Mn+G.length,m=0;m<G.length;m++)f[Mn+m]=G[m];else e.deps=f=G;if(nn()&&e.f&512)for(m=Mn;m<f.length;m++)(f[m].reactions??=[]).push(e)}else !p&&f!==null&&Mn<f.length&&(Wn(e,Mn),f.length=Mn);if(Ie()&&Nn!==null&&!Dn&&f!==null&&!(e.f&6146))for(m=0;m<Nn.length;m++)Vn(Nn[m],e);if(i!==null&&i!==e){if(In++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=In;if(t!==null)for(let e of t)e.rv=In;Nn!==null&&(r===null?r=Nn:r.push(...Nn))}return e.f&8388608&&(e.f^=te),d}catch(e){return Be(e)}finally{e.f^=ee,G=t,Mn=n,Nn=r,U=i,An=a,Ne(o),Dn=s,Ln=c}}function Un(e,r){let i=r.reactions;if(i!==null){var a=t.call(i,e);if(a!==-1){var o=i.length-1;o===0?i=r.reactions=null:(i[a]=i[o],i.pop())}}if(i===null&&r.f&2&&(G===null||!n.call(G,r))){var s=r;s.f&512&&(s.f^=512,s.f&=~T),s.v!==k&&Ue(s),Dt(s),Wn(s,0)}}function Wn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Un(e,n[r])}function Gn(e){var t=e.f;if(!(t&16384)){P(e,m);var n=W,r=wn;W=e,wn=!0;try{t&16777232?hn(e):mn(e),pn(e);var i=Hn(e);e.teardown=typeof i==`function`?i:null,e.wv=Fn}finally{wn=r,W=n}}}function K(e){var t=(e.f&2)!=0;if(Cn?.add(e),U!==null&&!Dn&&!(W!==null&&W.f&16384)&&(An===null||!n.call(An,e))){var r=U.deps;if(U.f&2097152)e.rv<In&&(e.rv=In,G===null&&r!==null&&r[Mn]===e?Mn++:G===null?G=[e]:G.push(e));else{(U.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[U]:n.call(i,U)||i.push(U)}}if(Tn&&At.has(e))return At.get(e);if(t){var a=e;if(Tn){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||qn(a))&&(o=Tt(a)),At.set(a,o),o}var s=(a.f&512)==0&&!Dn&&U!==null&&(wn||(U.f&512)!=0),c=(a.f&y)===0;Bn(a)&&(s&&(a.f|=512),Et(a)),s&&!c&&(Ot(a),Kn(a))}if(I?.has(e))return I.get(e);if(e.f&8388608)throw e.v;return e.v}function Kn(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(Ot(t),Kn(t))}function qn(e){if(e.v===k)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(At.has(t)||t.f&2&&qn(t))return!0;return!1}function Jn(e){var t=Dn;try{return Dn=!0,e()}finally{Dn=t}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var Yn=[`touchstart`,`touchmove`];function Xn(e){return Yn.includes(e)}var Zn=Symbol(`events`),Qn=new Set,$n=new Set;function er(e,t,n,r={}){function i(e){if(r.capture||ar.call(t,e),!e.cancelBubble)return Qt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?ze(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function tr(e,t,n,r,i){var a={capture:r,passive:i},o=er(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&rn(()=>{t.removeEventListener(e,o,a)})}function nr(e,t,n){(t[Zn]??={})[e]=n}function rr(e){for(var t=0;t<e.length;t++)Qn.add(e[t]);for(var n of $n)n(e)}var ir=null;function ar(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],o=a[0]||e.target;ir=e;var s=0,c=ir===e&&e[Zn];if(c){var l=a.indexOf(c);if(l!==-1&&(t===document||t===window)){e[Zn]=t;return}var u=a.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(o=a[s]||e.target,o!==t){i(e,`currentTarget`,{configurable:!0,get(){return o||n}});var d=U,f=W;On(null),kn(null);try{for(var p,m=[];o!==null;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var g=o[Zn]?.[r];g!=null&&(!o.disabled||e.target===o)&&g.call(o,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble||h===t||h===null)break;o=h}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[Zn]=t,delete e.currentTarget,On(d),kn(f)}}}var or=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function sr(e){return or?.createHTML(e)??e}function cr(e){var t=Xt(`template`);return t.innerHTML=sr(e.replaceAll(`<!>`,`<!---->`)),t.content}function lr(e,t){var n=W;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function q(e,t){var n=(t&1)!=0,r=(t&2)!=0,i,a=!e.startsWith(`<!>`);return()=>{if(A)return lr(j,null),j;i===void 0&&(i=cr(a?e:`<!>`+e),n||(i=Gt(i)));var t=r||Bt?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=Gt(t),s=t.lastChild;lr(o,s)}else lr(t,t);return t}}function ur(e=``){if(!A){var t=Wt(e+``);return lr(t,t),t}var n=j;return n.nodeType===3?Zt(n):(n.before(n=Wt()),Ce(n)),lr(n,n),n}function dr(){if(A)return lr(j,null),j;var e=document.createDocumentFragment(),t=document.createComment(``),n=Wt();return e.append(t,n),lr(t,n),e}function J(e,t){if(A){var n=W;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=j),we();return}e!==null&&e.before(t)}function Y(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e.__t??=e.nodeValue)&&(e.__t=n,e.nodeValue=`${n}`)}function fr(e,t){return mr(e,t)}var pr=new Map;function mr(e,{target:t,anchor:n,props:i={},events:a,context:o,intro:s=!0,transformError:c}){Ut();var l=void 0,u=sn(()=>{var s=n??t.appendChild(Wt());mt(s,{pending:()=>{}},t=>{Pe({});var n=N;if(o&&(n.c=o),a&&(i.$$events=a),A&&lr(t,null),l=e(t,i)||{},A&&(W.nodes.end=j,j===null||j.nodeType!==8||j.data!==`]`))throw be(),_e;Fe()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=Xn(r);for(let e of[t,document]){var a=pr.get(e);a===void 0&&(a=new Map,pr.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,ar,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(r(Qn)),$n.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=pr.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,ar),r.delete(e),r.size===0&&pr.delete(n)):r.set(e,i)}$n.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return hr.set(l,u),l}var hr=new WeakMap,gr=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)bn(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&(this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(H(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();Sn(r,t),t.append(Wt()),this.#n.set(e,{effect:r,fragment:t})}else H(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),vn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(H(n.effect),this.#n.delete(e))};ensure(e,t){var n=F,r=Yt();if(t&&!this.#t.has(e)&&!this.#n.has(e))if(r){var i=document.createDocumentFragment(),a=Wt();i.append(a),this.#n.set(e,{effect:fn(()=>t(a)),fragment:i})}else this.#t.set(e,fn(()=>t(this.anchor)));if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else A&&(this.anchor=j),this.#a(n)}};function _r(e,t,n=!1){var r;A&&(r=j,we());var i=new gr(e),a=n?x:0;function o(e,t){if(A){var n=De(r);if(e!==parseInt(n.substring(1))){var a=Ee();Ce(a),i.anchor=a,Se(!1),i.ensure(e,t),Se(!0);return}}i.ensure(e,t)}dn(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function X(e,t){return t}function vr(e,t,n){for(var i=[],a=t.length,o,s=t.length,c=0;c<a;c++){let n=t[c];vn(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;yr(e,r(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else --s},!1)}if(s===0){var l=i.length===0&&n!==null;if(l){var u=n,d=u.parentNode;Jt(d),d.append(u),e.items.clear()}yr(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function yr(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=w,Sn(a,document.createDocumentFragment())):H(t[i],n)}}var br;function Z(t,n,i,a,o,s=null){var c=t,l=new Map;if(n&4){var u=t;c=A?Ce(Gt(u)):u.appendChild(Wt())}A&&we();var d=null,f=Ct(()=>{var t=i();return e(t)?t:t==null?[]:r(t)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=d,Sr(v,p,c,n,a),d!==null&&(p.length===0?d.f&33554432?(d.f^=w,wr(d,null,c)):bn(d):vn(d,()=>{d=null})))}function _(e){v.pending.delete(e)}var v={effect:dn(()=>{p=K(f);var e=p.length;let t=!1;A&&De(c)===`[!`!=(e===0)&&(c=Ee(),Ce(c),Se(!1),t=!0);for(var r=new Set,u=F,v=Yt(),y=0;y<e;y+=1){A&&j.nodeType===8&&j.data===`]`&&(c=j,t=!0,Se(!1));var b=p[y],x=a(b,y),S=h?null:l.get(x);S?(S.v&&Pt(S.v,b),S.i&&Pt(S.i,y),v&&u.unskip_effect(S.e)):(S=Cr(l,h?c:br??=Wt(),b,x,y,o,n,i),h||(S.e.f|=w),l.set(x,S)),r.add(x)}if(e===0&&s&&!d&&(h?d=fn(()=>s(c)):(d=fn(()=>s(br??=Wt())),d.f|=w)),e>r.size&&se(``,``,``),A&&e>0&&Ce(Ee()),!h)if(m.set(u,r),v){for(let[e,t]of l)r.has(e)||u.skip_effect(t.e);u.oncommit(g),u.ondiscard(_)}else g(u);t&&Se(!0),K(f)}),flags:n,items:l,pending:m,outrogroups:null,fallback:d};h=!1,A&&(c=j)}function xr(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function Sr(e,t,n,i,a){var o=(i&8)!=0,s=t.length,c=e.items,l=xr(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=a(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=a(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&(bn(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432)if(_.f^=w,_===l)wr(_,null,n);else{var y=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),Tr(e,d,_),Tr(e,_,y),wr(_,y,n),d=_,p=[],m=[],l=xr(d.next);continue}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var b=m[0],x;d=b.prev;var S=p[0],C=p[p.length-1];for(x=0;x<p.length;x+=1)wr(p[x],b,n);for(x=0;x<m.length;x+=1)u.delete(m[x]);Tr(e,S.prev,C.next),Tr(e,d,S),Tr(e,C,b),l=b,d=C,--v,p=[],m=[]}else u.delete(_),wr(_,l,n),Tr(e,_.prev,_.next),Tr(e,_,d===null?e.effect.first:d.next),Tr(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=xr(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=xr(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(yr(e,r(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var T=[];if(u!==void 0)for(_ of u)_.f&8192||T.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&T.push(l),l=xr(l.next);var ee=T.length;if(ee>0){var E=i&4&&s===0?n:null;if(o){for(v=0;v<ee;v+=1)T[v].nodes?.a?.measure();for(v=0;v<ee;v+=1)T[v].nodes?.a?.fix()}vr(e,T,E)}}o&&ze(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function Cr(e,t,n,r,i,a,o,s){var c=o&1?o&16?Mt(n):Nt(n,!1,!1):null,l=o&2?Mt(i):null;return{v:c,i:l,e:fn(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function wr(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=Kt(r);if(a.before(r),r===i)return;r=o}}function Tr(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}var Er=[...` 	
\r\f\xA0\v﻿`];function Dr(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||Er.includes(r[o-1]))&&(s===r.length||Er.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Or(e,t=!1){var n=t?` !important;`:`;`,r=``;for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==``&&(r+=` `+i+`: `+a+n)}return r}function kr(e){return e[0]!==`-`||e[1]!==`-`?e.toLowerCase():e}function Ar(e,t){if(t){var n=``,r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,``).trim();var a=!1,o=0,s=!1,c=[];r&&c.push(...Object.keys(r).map(kr)),i&&c.push(...Object.keys(i).map(kr));var l=0,u=-1;let t=e.length;for(var d=0;d<t;d++){var f=e[d];if(s?f===`/`&&e[d-1]===`*`&&(s=!1):a?a===f&&(a=!1):f===`/`&&e[d+1]===`*`?s=!0:f===`"`||f===`'`?a=f:f===`(`?o++:f===`)`&&o--,!s&&a===!1&&o===0){if(f===`:`&&u===-1)u=d;else if(f===`;`||d===t-1){if(u!==-1){var p=kr(e.substring(l,u).trim());if(!c.includes(p)){f!==`;`&&d++;var m=e.substring(l,d).trim();n+=` `+m+`;`}}l=d+1,u=-1}}}}return r&&(n+=Or(r)),i&&(n+=Or(i,!0)),n=n.trim(),n===``?null:n}return e==null?null:String(e)}function Q(e,t,n,r,i,a){var o=e.__className;if(A||o!==n||o===void 0){var s=Dr(n,r,a);(!A||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e.__className=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function jr(e,t={},n,r){for(var i in n){var a=n[i];t[i]!==a&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,r))}}function Mr(e,t,n,r){var i=e.__style;if(A||i!==t){var a=Ar(t,r);(!A||a!==e.getAttribute(`style`))&&(a==null?e.removeAttribute(`style`):e.style.cssText=a),e.__style=t}else r&&(Array.isArray(r)?(jr(e,n?.[0],r[0]),jr(e,n?.[1],r[1],`important`)):jr(e,n,r));return r}var Nr=Symbol(`is custom element`),Pr=Symbol(`is html`),Fr=ie?`link`:`LINK`;function Ir(e,t,n,r){var i=Lr(e);A&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===Fr)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[re]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&zr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Lr(e){return e.__attributes??={[Nr]:e.nodeName.includes(`-`),[Pr]:e.namespaceURI===ve}}var Rr=new Map;function zr(e){var t=e.getAttribute(`is`)||e.nodeName,n=Rr.get(t);if(n)return n;Rr.set(t,n=[]);for(var r,i=e,a=Element.prototype;a!==i;){for(var s in r=o(i),r)r[s].set&&n.push(s);i=l(i)}return n}function Br(e,t){return e===t||e?.[D]===t}function Vr(e={},t,n,r){var i=N.r,a=W;return cn(()=>{var o,s;return un(()=>{o=s,s=r?.()||[],Jn(()=>{e!==n(...s)&&(t(e,...s),o&&Br(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&Br(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function Hr(e,t,n,r){var i=!Me||(n&2)!=0,o=(n&8)!=0,s=(n&16)!=0,c=r,l=!0,u=()=>(l&&(l=!1,c=s?Jn(r):r),c);let d;if(o){var f=D in e||ne in e;d=a(e,t)?.set??(f&&t in e?n=>e[t]=n:void 0)}var p,m=!1;o?[p,m]=Je(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=u(),d&&(i&&fe(t),d(p)));var h=i?()=>{var n=e[t];return n===void 0?u():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return h;if(d){var g=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||g||m)&&d(t?h():e),e):h()})}var _=!1,v=(n&1?bt:Ct)(()=>(_=!1,h()));o&&K(v);var y=W;return(function(e,t){if(arguments.length>0){let n=t?K(v):i&&o?Rt(e):e;return R(v,n),_=!0,c!==void 0&&(c=n),e}return Tn&&_||y.f&16384?v.v:K(v)})}function Ur(e){N===null&&ae(`onMount`),Me&&N.l!==null?Gr(N).m.push(e):an(()=>{let t=Jn(e);if(typeof t==`function`)return t})}function Wr(e){N===null&&ae(`onDestroy`),Ur(()=>()=>Jn(e))}function Gr(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`);var $=`https://github.com/Anubisx404`,Kr=[{slug:`extent`,title:`Extent`,type:`Tools & Utilities`,description:`Repo-aware Go CLI that automates OpenTelemetry SDK setup, Docker LGTM stack provisioning, instrumentation injection, and signal-quality scoring for any local project.`,tags:[`Go 1.22`,`OpenTelemetry`,`Docker Compose`,`Prometheus`,`Grafana`],link:`https://github.com/Anubisx404/Extent`,overview:`Adding observability to an existing codebase usually means stitching together SDK setup, environment variables, Docker networking, collectors, and dashboards by hand. Extent turns that into a guided workflow: point it at a repository and it scans the project, maps runtime and framework signals, generates an observability contract, provisions a local LGTM stack, injects bootstrap instrumentation, verifies that telemetry actually flows, and scores signal quality from Prometheus evidence.`,capabilities:[`Repository scanning and runtime/framework detection before any code is touched`,`AST, route, database, and queue analysis to build a real signal map`,`Rollout planning with profiles and dependency synchronization`,`Docker LGTM stack provisioning (Loki, Grafana, Tempo, Mimir) wired together automatically`,`Synthetic traffic smoke tests that verify end-to-end telemetry correlation`,`Signal-quality scoring and bottleneck reporting from live Prometheus evidence`],architecture:[{label:`Language`,value:`Go 1.22+`},{label:`Pipeline`,value:`scan → analyze → plan → apply → instrument → stack up → verify → report → score`},{label:`Observability`,value:`OpenTelemetry OTLP, Prometheus, Grafana LGTM`},{label:`Quality gates`,value:`CI with go vet, govulncheck, Go Report Card`},{label:`Release`,value:`goreleaser with published GitHub releases`}],repo:{public:!0,url:`https://github.com/Anubisx404/Extent`,note:`Open source. CI, release pipeline, and Go Report Card all green.`}},{slug:`telos`,title:`Telos`,type:`Web & UI`,description:`Cross-platform educational ecosystem combining document OCR, an AI tutor with native LaTeX rendering, and project/book/lecture tracking across mobile, web, and desktop.`,tags:[`Flutter`,`.NET 10`,`Python`,`FastAPI`,`PaddleOCR`,`PostgreSQL`],link:`https://github.com/Anubisx404/Telos`,overview:`Telos is an educational platform built around the problem of turning scattered paper into structured, queryable knowledge. Students and educators scan printed and handwritten documents, the text is segmented and enhanced automatically, and the result feeds a contextual AI tutor that renders full LaTeX expressions and plots mathematical functions on demand. Learning tracks are organized through linked project, book, and lecture trackers rather than a flat notes list.`,capabilities:[`Document capture for printed and handwritten academic material`,`Asynchronous OCR vision microservice with automatic segmentation and text enhancement`,`Contextual AI tutor with streaming responses over SignalR`,`Native LaTeX rendering for inline and display-block mathematics`,`Dynamic chart engine that plots f(x) functions parsed from AI markdown tags`,`Linked project, book, and lecture trackers for organizing learning tracks`,`Encrypted local persistence with offline-capable mobile and web clients`],architecture:[{label:`Client`,value:`Flutter 3 / Dart 3.8+ — Android, iOS, Web, Desktop`},{label:`Gateway`,value:`Nginx reverse proxy (:80, :5000)`},{label:`Backend`,value:`.NET 10 Clean Architecture (Domain / Application / Infrastructure / Api)`},{label:`OCR service`,value:`Python FastAPI with PaddleOCR`},{label:`AI tutor`,value:`Microsoft Semantic Kernel with Ollama inference`},{label:`Data`,value:`PostgreSQL 16, Redis cache, MinIO S3 object storage`},{label:`Real-time`,value:`SignalR hub at /hubs/chat`}],repo:{public:!0,url:`https://github.com/Anubisx404/Telos`,note:`Open source repository with full architecture documentation.`}},{slug:`zenith`,title:`Zenith`,type:`Systems & Data`,description:`Real-time distributed energy intelligence platform ingesting high-frequency telemetry from solar, battery, and grid assets into TimescaleDB hypertables with live SignalR streaming.`,tags:[`.NET 10`,`Flutter`,`TimescaleDB`,`Redis`,`SignalR`,`IoT`],link:`https://github.com/Anubisx404/Zenith`,overview:`Zenith is an IoT energy intelligence and management platform built for high-frequency telemetry. It captures, validates, and persists time-series data across solar photovoltaic arrays, home battery storage, grid interchanges, EV chargers, and commercial building circuits, then streams it to clients in real time. The backend follows Clean Architecture over an event-driven ingestion pipeline; the Flutter client visualizes live power flow between Solar, Battery, Grid, and Household load with a particle-based flow engine and cost-savings analytics.`,capabilities:[`High-throughput telemetry ingestion endpoint with device key authentication`,`TimescaleDB hypertables for time-series storage with Redis distributed state caching`,`Real-time SignalR WebSocket streaming with automatic client reconnection`,`Particle-based power-flow visualization between energy sources and loads`,`Site-level current-state queries plus historical aggregation rollups`,`Configurable device simulator emulating inverters, PV production curves, battery charge/discharge cycles, and household consumption spikes`,`Cost-savings analytics across tracked assets`],architecture:[{label:`Backend`,value:`.NET 10 Clean Architecture with EF Core`},{label:`Storage`,value:`PostgreSQL 16 with TimescaleDB hypertables`},{label:`Cache`,value:`Redis 7 distributed state`},{label:`Real-time`,value:`SignalR hub at /hubs/telemetry`},{label:`Client`,value:`Flutter 3 with Riverpod — mobile, web, desktop`},{label:`Deployment`,value:`Docker Compose with Kubernetes manifests`}],repo:{public:!0,url:`https://github.com/Anubisx404/Zenith`,note:`Open source. Previously developed under the FluxSync name; the FluxSync_assets and frontend/fluxsync_app paths are legacy branding.`}},{slug:`grace-boutique`,title:`Grace Boutique`,type:`Web & UI`,description:`GraphQL-first fashion e-commerce monorepo with a .NET microservices backend, SvelteKit admin dashboard, Flutter try-on client, and Pinecone-backed semantic search.`,tags:[`.NET 10`,`GraphQL`,`SvelteKit`,`Flutter`,`Pinecone`],link:`https://github.com/Anubisx404/Grace_Boutique`,overview:`Grace Boutique is a monorepo covering an end-to-end commerce platform. The backend is a set of GraphQL-first .NET services; the admin dashboard is a SvelteKit application; the customer-facing mobile client is Flutter; and product discovery is backed by Pinecone vector search so queries match intent rather than keywords. Background workers handle content processing so ingestion never blocks a request.`,capabilities:[`GraphQL-first API surface over a .NET 10 microservices backend`,`SvelteKit admin dashboard for catalog and order operations`,`Flutter client with integrated virtual try-on`,`Pinecone-backed semantic product search`,`Background content-processing workers for asynchronous ingestion`,`Contract-first integration between services`,`Docker-based infrastructure and deployment definitions`],architecture:[{label:`Backend`,value:`.NET 10 GraphQL services`},{label:`Admin`,value:`SvelteKit`},{label:`Mobile`,value:`Flutter`},{label:`Search`,value:`Pinecone vector embeddings`},{label:`Async`,value:`Dedicated content-processor workers`},{label:`Infra`,value:`Docker, contracts package, deployment scripts`}],repo:{public:!0,url:`https://github.com/Anubisx404/Grace_Boutique`,note:`Open source. Active development on the feat/content-media-notifications branch.`}},{slug:`page-ui`,title:`Page.Ui`,type:`Web & UI`,description:`Event-driven AI chat and component rendering platform that compiles generated Svelte artifacts and serves them through hardened, network-isolated runtimes.`,tags:[`.NET 10`,`GraphQL`,`SignalR`,`Docker Sandbox`,`Svelte`],link:$,overview:`Page.Ui is a platform where a model generates a Svelte component and the system compiles and serves it — safely. The hard problem is containment: arbitrary generated code must not be able to reach the network or the host. Page.Ui solves that with a Clean Architecture backend and a dedicated SvelteRender microservice running in isolated, hardened runtimes, streaming the result back to the editor over SignalR.`,capabilities:[`AI chat pipeline that emits Svelte components rather than text`,`Compile-and-serve of generated artifacts through a dedicated SvelteRender service`,`Hardened, network-isolated Docker sandbox runtimes for untrusted generated code`,`Event-driven streaming back to the client over SignalR`,`GraphQL API surface over a layered .NET 10 backend`,`Dedicated AI worker for inference and artifact generation`],architecture:[{label:`Backend`,value:`.NET 10 — Application, Domain, Infrastructure, Presentation layers`},{label:`Rendering`,value:`Page.Ui.SvelteRender microservice`},{label:`AI`,value:`Page.Ui.Worker.Ai for inference and generation`},{label:`Transport`,value:`GraphQL and SignalR`},{label:`Isolation`,value:`Docker sandboxes with restricted networking`},{label:`Testing`,value:`Page.Ui.Backend.Tests`}],repo:{public:!1,url:$,note:`Developed in a shared organization repository (page-ui/Backend_Department) rather than a personal public repo.`}},{slug:`svelterender`,title:`SvelteRender`,type:`Web & UI`,description:`API-secured SSR microservice that compiles and renders Svelte components dynamically, running each render in isolated Bun and Node.js sandboxes.`,tags:[`.NET 10`,`Bun`,`Node.js`,`Svelte Compiler`,`Sandboxing`],link:$,overview:`SvelteRender is the rendering engine that Page.Ui depends on. It takes a Svelte component, compiles it with the official Svelte compiler, and renders it server-side — but the component is not trusted input, so every render happens inside an isolated worker process. Two runtime backends are maintained, one on Bun and one on Node.js, so the isolation and lifecycle behavior can be compared directly. Access is gated behind an API key.`,capabilities:[`Dynamic Svelte component compilation via the official compiler`,`Server-side rendering behind an API-secured endpoint`,`Isolated worker sandboxes on both Bun and Node.js runtimes`,`Parallel runtime implementations for behavioral comparison`,`API key authentication and request gating`,`Documented failure modes and fixes accumulated during integration`],architecture:[{label:`Runtimes`,value:`Bun_SvelteRender and Node_SvelteRender`},{label:`Compilation`,value:`Official Svelte compiler, server-side`},{label:`Isolation`,value:`Per-render worker sandbox`},{label:`Access`,value:`API-key secured`},{label:`Notes`,value:`Integration fixes documented under Node_SvelteRender/docs/fixes/`},{label:`Relationship`,value:`Standalone service. Page.Ui carries its own separate Page.Ui.SvelteRender project — the two are distinct codebases.`}],repo:{public:!1,url:$,note:`Not published.`}},{slug:`fleetpulse`,title:`FleetPulse`,type:`Systems & Data`,description:`Full-stack transit fleet intelligence platform for live bus telemetry, component health tracking, delay alerting, and role-based operational workflows.`,tags:[`.NET 10`,`Svelte 5`,`PostgreSQL`,`EF Core`],link:$,overview:`FleetPulse is an operational platform for transit agencies running bus fleets. It ingests live vehicle telemetry, tracks component health so failures surface before they become breakdowns, raises delay alerts, and models role-based workflows so dispatchers, supervisors, and maintenance staff each see the tools appropriate to their role. The .NET backend and Svelte 5 dashboard are developed together as a single solution.`,capabilities:[`Live bus telemetry ingestion and monitoring`,`Component health tracking with early failure indication`,`Delay alerting and operational exception handling`,`Role-based access for dispatch, supervision, and maintenance`,`PostgreSQL persistence through Entity Framework Core`,`Svelte 5 operational dashboard`],architecture:[{label:`Backend`,value:`.NET 10 (FleetPulse.slnx)`},{label:`Frontend`,value:`Svelte 5 dashboard`},{label:`Data`,value:`PostgreSQL with EF Core`},{label:`Layout`,value:`backend/ and frontend/ in one solution`}],repo:{public:!1,url:$,note:`Not published.`}},{slug:`hr-attendance`,title:`HR Attendance`,type:`Systems & Data`,description:`Modular monolith for HR attendance management on .NET 10 and Clean Architecture, with EF Core migrations against PostgreSQL and containerized local infrastructure.`,tags:[`.NET 10`,`Clean Architecture`,`EF Core`,`PostgreSQL`,`Docker`],link:$,overview:`HR Attendance is a modular monolith for managing employee attendance. The design goal was explicit structure rather than a big ball of mud: Domain holds entities and value objects, Application holds use cases and contracts, Infrastructure holds EF Core and external services, and Api holds endpoints and middleware. Local setup is fully scripted — copy the env file, bring up Postgres in Docker, apply migrations, run the API.`,capabilities:[`Attendance recording and employee-level attendance tracking`,`Clean Architecture layering with strict dependency direction`,`EF Core migrations applied against PostgreSQL`,`Docker Compose for reproducible local database infrastructure`,`Interactive API documentation served at /scalar`,`Unit test project covering application and domain logic`],architecture:[{label:`Pattern`,value:`Modular monolith, Clean Architecture`},{label:`Layers`,value:`HrAttendance.Api / Application / Domain / Infrastructure`},{label:`Persistence`,value:`EF Core with PostgreSQL, migrations via dotnet-ef`},{label:`Testing`,value:`HrAttendance.UnitTests`},{label:`Local infra`,value:`Docker Compose + nginx reverse proxy`}],repo:{public:!1,url:$,note:`Not published.`}},{slug:`virtual-tryon`,title:`Virtual Try-On Platform`,type:`Web & UI`,description:`Dedicated virtual try-on service with provider adapters for image generation, MinIO-backed asset storage, and a .NET application/domain split feeding a Flutter front end.`,tags:[`.NET 10`,`Flutter`,`MinIO`,`BFL Provider`,`Docker`],link:$,overview:`The Virtual Try-On Platform is split out from Grace Boutique as its own service so the try-on pipeline can evolve independently. It takes a customer image and a garment, sends them to a pluggable image-generation provider, and stores the result in MinIO. Providers are behind an adapter interface, so a new generation backend can be added without touching the application layer.`,capabilities:[`Pluggable image-generation provider adapters (BFL provider included)`,`Customer image and garment input handling`,`MinIO S3-compatible storage for generated assets`,`Explicit Application / Contracts / Domain / Infrastructure separation`,`Background worker and API entry points`,`Flutter client consuming the service`,`Docker Compose and Kubernetes deployment definitions`],architecture:[{label:`Backend`,value:`VirtualTryOn.Application / Contracts / Domain / Infrastructure`},{label:`Providers`,value:`VirtualTryOn.Provider.Bfl adapter`},{label:`Storage`,value:`VirtualTryOn.Storage.Minio`},{label:`Entry points`,value:`api/ and worker/`},{label:`Client`,value:`Flutter application`},{label:`Deployment`,value:`Docker Compose, Kubernetes manifests`}],repo:{public:!1,url:$,note:`Not published. Migrated out of the Grace Boutique monorepo.`}},{slug:`ai-decision-lab`,title:`AI Decision Automation Lab`,type:`Machine Learning`,description:`Benchmark lab for AI-driven routing decisions, measuring script/language detection latency and tool-calling reliability across isolated model runtimes.`,tags:[`Python`,`LLM Routing`,`Benchmarks`,`Policy Gates`,`Telemetry`],link:$,overview:`The AI Decision Automation Lab is a benchmark harness for models that make routing decisions. Two capabilities are measured in isolation: Laya for script and language detection, and cactus-needle for tool calling and structured extraction. Each runs in its own uv-managed virtual environment so results are not contaminated by shared dependencies. A composite gateway and a policy gate sit on top, turning raw model output into a routed decision with a documented trust boundary.`,capabilities:[`Script and language detection benchmarked per language with per-call latency`,`Tool-calling and entity extraction benchmarked with confidence scores`,`Isolated uv virtual environments per lab so results stay reproducible`,`Composite gateway orchestrating multiple model runtimes behind one interface`,`Policy gate enforcing an explicit trust boundary on model output`,`Telemetry suppressed via NEEDLE_TELEMETRY and DO_NOT_TRACK`,`Benchmark results and validation reports emitted as JSON`],architecture:[{label:`Runtimes`,value:`Laya (script/language) and cactus-needle (tool calling), isolated via uv`},{label:`Gateway`,value:`services/composite-gateway with state builders and orchestrator`},{label:`Policy`,value:`packages/policy gate.py trust boundary`},{label:`Contracts`,value:`packages/contracts models.py`},{label:`Benchmarks`,value:`benchmarks/run_demonstrations.py`},{label:`Results`,value:`Validation JSON and reports per lab`}],repo:{public:!1,url:$,note:`Not published. Environment setup documented in SETUP.md.`}},{slug:`bb84`,title:`BB84 Key Distribution Simulator`,type:`Simulation & Physics`,description:`Educational simulator for the BB84 quantum key distribution protocol with configurable quantum channels and eavesdropping detection via QBER analysis.`,tags:[`Svelte 5`,`Three.js`,`Quantum Physics`],link:$,overview:`An interactive simulator of the BB84 quantum key distribution protocol. The point is to make the protocol tangible: prepare states, send them over a simulated channel, and watch the sifted key emerge. Channel noise is adjustable, and when an eavesdropper is introduced the quantum bit error rate climbs — which is exactly the signal Alice and Bob use to detect her presence.`,capabilities:[`Full BB84 protocol simulation from state preparation to sifted key`,`Configurable quantum channel noise`,`Eavesdropper injection with QBER-based detection`,`Interactive 3D visualization of the protocol stages`,`Educational framing aimed at making post-quantum reasoning concrete`],architecture:[{label:`Frontend`,value:`Svelte 5`},{label:`Visualization`,value:`Three.js`},{label:`Domain`,value:`Quantum key distribution, QBER analysis`}],repo:{public:!1,url:$,note:`Not published.`}},{slug:`dijkstra`,title:`Dijkstra's Algorithm Visualizer`,type:`Simulation & Physics`,description:`Python and Manim pipeline that turns Dijkstra pathfinding runs into mathematical graph animations and step-by-step visualizer tables.`,tags:[`Python`,`Manim`,`NumPy`,`FFmpeg`],link:$,overview:`Dijkstra's algorithm is easy to state and surprisingly hard to picture. This project runs the algorithm for real, captures the intermediate state at each step, and renders both a Manim animation of the graph exploration and a table of the frontier, distances, and predecessor pointers. The visuals are generated from actual execution rather than hand-drawn illustrations.`,capabilities:[`Real Dijkstra execution with per-step state capture`,`Manim-rendered graph exploration animations`,`Distance, frontier, and predecessor tables generated from the run`,`NumPy-backed data shaping for the render pipeline`,`FFmpeg output for video export`],architecture:[{label:`Language`,value:`Python`},{label:`Animation`,value:`Manim`},{label:`Data`,value:`NumPy`},{label:`Encoding`,value:`FFmpeg`}],repo:{public:!1,url:$,note:`Not published.`}},{slug:`fourier-transform`,title:`Fourier Transform MASM Suite`,type:`Simulation & Physics`,description:`Comparative radix-2 decimation-in-time FFT implementation across C++20, Zig, and hand-written x86-64 MASM butterfly routines.`,tags:[`C++20`,`Zig`,`x86-64 MASM`,`FFT`],link:$,overview:`The same FFT written three ways. A radix-2 decimation-in-time implementation exists in C++20, in Zig, and in hand-written x86-64 MASM where the butterfly computation is written directly in assembly. Running all three against the same inputs makes the cost of compiler codegen versus explicit low-level control visible, and the hand-written core exists to establish a performance floor.`,capabilities:[`Radix-2 decimation-in-time FFT`,`Butterfly calculations implemented in three languages`,`Hand-written x86-64 MASM core for explicit low-level control`,`Identical test vectors across implementations for direct comparison`,`Performance comparison between compiler-generated and hand-written code`],architecture:[{label:`Implementations`,value:`C++20, Zig, x86-64 MASM`},{label:`Algorithm`,value:`Radix-2 decimation-in-time FFT`},{label:`Focus`,value:`Butterfly computation and codegen comparison`}],repo:{public:!1,url:$,note:`Not published.`}},{slug:`fourier-optics`,title:`Fourier Optics Simulator`,type:`Simulation & Physics`,description:`Interactive optics toolkit modeling optical field propagation, Fraunhofer and Fresnel diffraction regimes, aperture shapes, and OTF/MTF lens transfer functions.`,tags:[`Svelte`,`WebGL`,`Three.js`,`Optics`],link:$,overview:`An interactive toolkit for the Fourier optics that sits underneath imaging systems. Propagate an optical field through a chosen regime — Fraunhofer far-field or Fresnel near-field — and shape it with real aperture geometry. The frequency-domain side of the same model produces optical transfer function and modulation transfer function curves, which is where lens performance stops being an abstract claim and becomes a measurable plot.`,capabilities:[`Optical field wave propagation simulation`,`Fraunhofer far-field and Fresnel near-field diffraction regimes`,`Configurable aperture shapes affecting the point spread function`,`OTF and MTF lens transfer function computation`,`Interactive parameter adjustment with immediate visual feedback`,`Frequency-domain analysis alongside spatial-domain results`],architecture:[{label:`Frontend`,value:`Svelte`},{label:`Rendering`,value:`WebGL, Three.js`},{label:`Domain`,value:`Physical optics, diffraction, transfer functions`}],repo:{public:!1,url:$,note:`Not published.`}},{slug:`mirox`,title:`Mirox Markdown Editor`,type:`Tools & Utilities`,description:`Cross-platform desktop Markdown viewer and editor built with Avalonia UI and MVVM, featuring reactive patterns and an HTML preview pipeline.`,tags:[`.NET 10`,`Avalonia UI`,`ReactiveUI`,`C#`],link:`https://github.com/Anubisx404/Mirox`,overview:`Mirox is a desktop Markdown editor that runs on every platform Avalonia targets. The architecture is MVVM with ReactiveUI driving view-model composition, so file watching, document state, and preview refresh all flow through observable pipelines rather than manual event wiring. The preview pipeline converts Markdown to HTML in-process.`,capabilities:[`Cross-platform desktop app via Avalonia UI`,`Live HTML preview pipeline alongside the editor`,`MVVM architecture with ReactiveUI view models`,`Observable document state and file-system watching`,`Solution structured with dedicated demo and test projects`],architecture:[{label:`Framework`,value:`.NET 10 with Avalonia UI`},{label:`Pattern`,value:`MVVM`},{label:`Reactive`,value:`ReactiveUI`},{label:`Build`,value:`Central package management via Directory.Packages.props`},{label:`Tests`,value:`tests/ with a separate demo application`}],repo:{public:!0,url:`https://github.com/Anubisx404/Mirox`,note:`Open source.`}}],qr={id:`sealed-security`,type:`Cybersecurity`,title:`RESTRICTED // DEFENSIVE RESEARCH PROGRAM`,description:`Active defensive security research spanning adaptive-evasion analysis and adversarial hardening of learning-based detectors. The underlying dossiers are withheld from this archive — the work is documented and reproducible, but not published here.`,tags:[`NDA`,`Security Research`,`Threat Modeling`,`Red Team`]},Jr=[`Cybersecurity`,`Simulation & Physics`,`Web & UI`,`Tools & Utilities`,`Machine Learning`,`Systems & Data`];function Yr(e){return Kr.find(t=>t.slug===e)}var Xr=Kr.filter(e=>e.repo.public).length,Zr=new Set;function Qr(){let e=window.location.hash,t=/^#\/project\/([a-z0-9-]+)$/.exec(e);return t?Yr(t[1])??null:null}var $r=Qr();function ei(){let e=Qr();$r=e,Zr.forEach(t=>t(e))}window.addEventListener(`hashchange`,ei);function ti(e){return Zr.add(e),e($r),()=>Zr.delete(e)}function ni(e){window.location.hash=`#/project/${e}`}function ri(){window.location.hash=``}var ii=q(`<canvas class="quantum-foam svelte-1vqtosf" aria-hidden="true"></canvas>`);function ai(e,t){Pe(t,!0);let n=Hr(t,`lightMode`,3,!1),r,i=null,a=null,o,s,c=0;function l(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}function u(){if(!r||(i=r.getContext(`webgl`,{alpha:!1,antialias:!1}),!i))return!1;let e=l(i,i.VERTEX_SHADER,`
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `),t=l(i,i.FRAGMENT_SHADER,`
    precision highp float;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_scroll;
    uniform float u_lightmode;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                         -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
        dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      for (int i = 0; i < 5; i++) {
        value += amplitude * snoise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      return value;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float aspect = u_resolution.x / u_resolution.y;
      vec2 p = vec2(uv.x * aspect, uv.y) * 3.0;

      float scrollOffset = u_scroll * 0.00008;
      float t = u_time * 0.025;

      float warp1 = fbm(p * 0.5 + vec2(t * 0.12, scrollOffset));
      float warp2 = fbm(p * 0.5 + vec2(-t * 0.08, t * 0.06 + scrollOffset));
      vec2 warped = p + vec2(warp1, warp2) * 0.8;

      float n1 = fbm(warped * 1.2);
      float n2 = fbm(warped * 1.8 + 3.7);

      float eps = 0.01;
      float nx1 = fbm((warped + vec2(eps, 0.0)) * 1.2);
      float ny1 = fbm((warped + vec2(0.0, eps)) * 1.2);
      float edge1 = length(vec2(nx1 - n1, ny1 - n1)) / eps;

      float fibers = smoothstep(0.3, 1.4, edge1);
      fibers = pow(fibers, 2.0) * 0.4;

      float drift = snoise(warped * 1.5 + vec2(t * 0.4, t * 0.2)) * 0.5 + 0.5;
      float energyFlow = drift * smoothstep(0.5, 1.3, edge1);
      float pulse = sin(t * 1.2 + warp1 * 4.0) * 0.5 + 0.5;
      energyFlow *= mix(0.1, 0.5, pulse) * 0.55;

      vec3 baseDark = mix(vec3(0.0, 0.0, 0.0), vec3(0.98, 0.97, 0.96), u_lightmode);
      vec3 fiberTint = mix(vec3(0.08, 0.08, 0.08), vec3(0.90, 0.90, 0.90), u_lightmode);
      vec3 col = mix(baseDark, fiberTint, fibers);

      col += mix(vec3(0.12), vec3(-0.15), u_lightmode) * fibers * 0.6;
      col += mix(vec3(0.3), vec3(-0.35), u_lightmode) * energyFlow * 0.3;

      float nodeGlow = smoothstep(0.60, 0.80, snoise(p * 0.4 + vec2(t * 0.03)));
      col += mix(vec3(0.3), vec3(-0.3), u_lightmode) * nodeGlow * 0.06 * pulse;

      float vignette = 1.0 - length((uv - 0.5) * 1.6);
      vignette = smoothstep(0.0, 0.7, vignette);
      col *= vignette * 0.85 + 0.15;

      col *= 0.35;

      gl_FragColor = vec4(col, 1.0);
    }
  `);if(!e||!t||(a=i.createProgram(),!a)||(i.attachShader(a,e),i.attachShader(a,t),i.linkProgram(a),!i.getProgramParameter(a,i.LINK_STATUS)))return!1;let n=new Float32Array([-1,-1,1,-1,-1,1,1,1]),o=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,o),i.bufferData(i.ARRAY_BUFFER,n,i.STATIC_DRAW);let s=i.getAttribLocation(a,`a_position`);return i.enableVertexAttribArray(s),i.vertexAttribPointer(s,2,i.FLOAT,!1,0,0),!0}function d(){if(!r)return;let e=Math.min(window.devicePixelRatio,1.5),t=window.innerWidth,n=window.innerHeight;r.width=t*e,r.height=n*e,r.style.width=t+`px`,r.style.height=n+`px`,i&&i.viewport(0,0,r.width,r.height)}function f(e){if(!i||!a||!r)return;let t=(e-s)/1e3;i.useProgram(a);let l=i.getUniformLocation(a,`u_resolution`);i.uniform2f(l,r.width,r.height);let u=i.getUniformLocation(a,`u_time`);i.uniform1f(u,t);let d=i.getUniformLocation(a,`u_scroll`);i.uniform1f(d,c);let p=i.getUniformLocation(a,`u_lightmode`);i.uniform1f(p,+!!n()),i.drawArrays(i.TRIANGLE_STRIP,0,4),o=requestAnimationFrame(f)}function p(){c=window.scrollY}Ur(()=>{let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;d(),u()&&(s=performance.now(),e?f(s):o=requestAnimationFrame(f)),window.addEventListener(`resize`,d),window.addEventListener(`scroll`,p,{passive:!0})}),Wr(()=>{o&&cancelAnimationFrame(o),window.removeEventListener(`resize`,d),window.removeEventListener(`scroll`,p),i&&i.getExtension(`WEBGL_lose_context`)?.loseContext()});var m=ii();Vr(m,e=>r=e,()=>r),J(e,m),Fe()}var oi=q(`<div class="terminal-perimeter svelte-1pvyio3" aria-hidden="true"><div class="edge top-edge svelte-1pvyio3"><span class="segment font-mono text-[10px] svelte-1pvyio3">SYS_PORT_CON: 001</span> <span class="spacer svelte-1pvyio3"></span> <span class="segment font-mono text-[10px] svelte-1pvyio3"> </span></div> <div class="edge bottom-edge svelte-1pvyio3"><span class="segment font-mono text-[10px] svelte-1pvyio3"> </span> <span class="spacer svelte-1pvyio3"></span> <span class="segment font-mono text-[10px] svelte-1pvyio3"> </span></div> <div class="edge left-edge svelte-1pvyio3"><div class="side-segment svelte-1pvyio3">SEC_LVL_4</div> <div class="side-spacer svelte-1pvyio3"></div> <div class="side-segment svelte-1pvyio3">RUN_STATUS_OK</div></div> <div class="edge right-edge svelte-1pvyio3"><div class="side-segment svelte-1pvyio3">ARCHIVE_DEV_3</div> <div class="side-spacer svelte-1pvyio3"></div> <div class="side-segment svelte-1pvyio3">ANUBIS_LINK</div></div> <div class="corner top-left font-mono text-[10px] svelte-1pvyio3">[+]</div> <div class="corner top-right font-mono text-[10px] svelte-1pvyio3">[+]</div> <div class="corner bottom-left font-mono text-[10px] svelte-1pvyio3">[+]</div> <div class="corner bottom-right font-mono text-[10px] svelte-1pvyio3">[+]</div></div>`);function si(e,t){Pe(t,!0);let n=L(`00:00:00`),r=L(0),i=L(`000.000`),a=L(`000.000`),o;Ur(()=>{o=window.setInterval(()=>{R(n,new Date().toTimeString().split(` `)[0],!0),R(r,K(r)+1),R(i,(120+Math.sin(K(r)*.05)*5+Math.random()*.2).toFixed(3),!0),R(a,(450+Math.cos(K(r)*.03)*8+Math.random()*.3).toFixed(3),!0)},1e3)}),Wr(()=>{clearInterval(o)});var s=oi(),c=z(s),l=B(z(c),4),u=z(l);M(l),M(c);var d=B(c,2),f=z(d),p=z(f);M(f);var m=B(f,4),h=z(m);M(m),M(d),Te(12),M(s),V(()=>{Y(u,`TIME_LOCK: ${K(n)??``}`),Y(p,`COORD_X: ${K(i)??``}`),Y(h,`COORD_Y: ${K(a)??``}`)}),J(e,s),Fe()}var ci=`/assets/stage-orb-MfJtDuO1.jfif`,li=`/assets/plasma-rings-FsS_SUWa.png`,ui=`/assets/particle-trails-yR9Qc7sy.png`,di=`/assets/signal-scratches-A0cgi0u9.png`,fi=q(`<img alt=""/>`),pi=q(`<img alt=""/> <img alt=""/>`,1),mi=q(`<img alt=""/> <!> <!>`,1),hi=q(`<div><img alt=""/> <!></div>`),gi=q(`<span> </span>`),_i=q(`<div aria-hidden="true"><div><!> <div></div> <div></div> <div class="film-grain svelte-1a2hxud"></div> <div></div></div> <div><span class="svelte-1a2hxud"> </span> <span class="svelte-1a2hxud"> </span> <!></div></div>`);function vi(e,t){Pe(t,!0);let n=Hr(t,`lightMode`,3,!1),r=[{src:ci,label:`STAGE_ORB_REFRACTION`,objectPosition:`50% 48%`,driftX:10,driftY:4,scale:1.12},{src:li,label:`PLASMA_RING_DRIFT`,objectPosition:`50% 46%`,driftX:-8,driftY:12,scale:1.18},{src:ui,label:`PARTICLE_TRACE_FIELD`,objectPosition:`49% 52%`,driftX:12,driftY:-10,scale:1.16},{src:di,label:`SIGNAL_SCRATCH_MAP`,objectPosition:`52% 48%`,driftX:-10,driftY:-8,scale:1.14}],i=L(0),a=L(!1),o=L(Rt([])),s=L(!1),c=L(!1),l=L(50),u=L(0),d=L(0),f=L(0),p=L(0),m=0,h=0,g,_,v,y,b=St(()=>r[K(i)]);function x(e,t,n){return Math.min(Math.max(e,t),n)}function S(){let e=[];for(let t=0;t<5;t+=1){let t=3+Math.random()*10,n=Math.random()*(100-t),r=100-(n+t),i=-18+Math.random()*36,a=Math.random()*1.4;e.push({top:n,bottom:r,left:i,blur:a})}R(o,e,!0)}function C(){R(c,!1),R(u,0),R(p,0)}function w(e){if(K(s))return;let t=e.clientX,n=e.clientY,r=t-m,i=n-h,a=Math.sqrt(r*r+i*i);m=t,h=n;let o=t/window.innerWidth-.5,_=n/window.innerHeight-.5;R(c,!0),R(l,x(n/window.innerHeight*100,8,92),!0),R(u,x(a*.45,0,34)*(r>=0?1:-1)),R(d,o*18),R(f,_*12),R(p,x(a/120,0,1),!0),clearTimeout(g),g=window.setTimeout(C,180)}Ur(()=>(R(s,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,!0),S(),K(s)||(_=window.setInterval(()=>{R(i,(K(i)+1)%r.length)},7600),v=window.setInterval(()=>{Math.random()>.48&&(R(a,!0),S(),clearTimeout(y),y=window.setTimeout(()=>{R(a,!1)},180))},1250),window.addEventListener(`mousemove`,w,{passive:!0})),()=>{clearInterval(_),clearInterval(v),clearTimeout(y),clearTimeout(g),window.removeEventListener(`mousemove`,w)}));var T=_i();let ee;var E=z(T);let te,D;var ne=z(E);Z(ne,17,()=>r,X,(e,t,r)=>{var m=hi();let h;var g=z(m);let _;var v=B(g,2),y=e=>{var r=mi(),i=qt(r);let s;var m=B(i,2),h=e=>{var r=dr();Z(qt(r),17,()=>K(o),X,(e,r)=>{var i=fi();let a;V(()=>{Ir(i,`src`,K(t).src),a=Q(i,1,`slice-image absolute inset-0 h-full w-full object-cover grayscale pointer-events-none svelte-1a2hxud`,null,a,{invert:n()}),Mr(i,`
                  object-position: ${K(t).objectPosition??``};
                  clip-path: inset(${K(r).top??``}% 0 ${K(r).bottom??``}% 0);
                  transform: translate3d(${K(r).left??``}px, 0, 0) scale(${K(t).scale+.018});
                  filter: blur(${K(r).blur??``}px) brightness(${n()?.72:1.55}) contrast(1.7);
                  mix-blend-mode: ${n()?`multiply`:`screen`};
                `)}),J(e,i)}),J(e,r)};_r(m,e=>{K(a)&&e(h)});var g=B(m,2),_=e=>{var r=pi(),i=qt(r);let a;var o=B(i,2);let s;V((e,r,c,l)=>{Ir(i,`src`,K(t).src),a=Q(i,1,`slice-image absolute inset-0 h-full w-full object-cover grayscale pointer-events-none svelte-1a2hxud`,null,a,{invert:n()}),Mr(i,`
                object-position: ${K(t).objectPosition??``};
                clip-path: inset(${e??``}% 0 ${r??``}% 0);
                transform: translate3d(${K(u)??``}px, 0, 0) scale(${K(t).scale+.035});
                filter: brightness(${n()?.65:1.9}) contrast(1.9);
                opacity: ${.34+K(p)*.36};
                mix-blend-mode: ${n()?`multiply`:`screen`};
              `),Ir(o,`src`,K(t).src),s=Q(o,1,`slice-image absolute inset-0 h-full w-full object-cover grayscale pointer-events-none svelte-1a2hxud`,null,s,{invert:n()}),Mr(o,`
                object-position: ${K(t).objectPosition??``};
                clip-path: inset(${c??``}% 0 ${l??``}% 0);
                transform: translate3d(${K(u)*-.68}px, 0, 0) scale(${K(t).scale+.02});
                filter: brightness(${n()?.7:1.55}) contrast(1.6);
                opacity: ${.26+K(p)*.24};
                mix-blend-mode: ${n()?`multiply`:`screen`};
              `)},[()=>x(K(l)-5.5,0,100),()=>x(100-(K(l)+5.5),0,100),()=>x(K(l)-1,0,100),()=>x(100-(K(l)+1),0,100)]),J(e,r)};_r(g,e=>{K(c)&&e(_)}),V(()=>{Ir(i,`src`,K(t).src),s=Q(i,1,`cursor-parallax absolute inset-0 h-full w-full object-cover grayscale pointer-events-none svelte-1a2hxud`,null,s,{visible:K(c),invert:n()}),Mr(i,`
              object-position: ${K(t).objectPosition??``};
              transform: translate3d(${K(d)*-.55}px, ${K(f)*-.4}px, 0) scale(${K(t).scale+.025});
              opacity: ${.05+K(p)*.2};
              mix-blend-mode: ${n()?`multiply`:`screen`};
            `)}),J(e,r)};_r(v,e=>{K(i)===r&&!K(s)&&e(y)}),M(m),V(()=>{h=Q(m,1,`image-plane absolute inset-0 h-full w-full svelte-1a2hxud`,null,h,{active:K(i)===r}),Ir(g,`src`,K(t).src),_=Q(g,1,`background-image h-full w-full object-cover grayscale transition-all duration-[1600ms] svelte-1a2hxud`,null,_,{invert:n()}),Mr(g,`
            --drift-x: ${K(t).driftX??``}px;
            --drift-y: ${K(t).driftY??``}px;
            --base-scale: ${K(t).scale??``};
            --cursor-x: ${(K(i)===r?K(d):0)??``}px;
            --cursor-y: ${(K(i)===r?K(f):0)??``}px;
            --cursor-glow: ${(K(i)===r?K(p):0)??``};
            object-position: ${K(t).objectPosition??``};
          `)}),J(e,m)});var re=B(ne,2);let O;var ie=B(re,2);let ae;var oe=B(ie,4);let se;M(E);var ce=B(E,2),le=z(ce),ue=z(le);M(le);var de=B(le,2),fe=z(de);M(de);var pe=B(de,2),me=e=>{var t=gi(),r=z(t);M(t),V(e=>{Q(t,1,`transition-colors ${n()?`text-black/55`:`text-white/60`}`,`svelte-1a2hxud`),Y(r,`CURSOR_DRIFT: DETECTED (${e??``}px)`)},[()=>K(u).toFixed(1)]),J(e,t)};_r(pe,e=>{K(c)&&e(me)}),M(ce),M(T),V(()=>{ee=Q(T,1,`fixed inset-0 z-0 h-screen w-screen select-none overflow-hidden transition-colors duration-500 svelte-1a2hxud`,null,ee,{"bg-white":n(),"bg-black":!n()}),te=Q(E,1,`background-stage relative h-full w-full svelte-1a2hxud`,null,te,{"reduced-motion":K(s)}),D=Mr(E,``,D,{opacity:n()?.085:.18}),O=Q(re,1,`scan-bar svelte-1a2hxud`,null,O,{light:n()}),ae=Q(ie,1,`grid-overlay svelte-1a2hxud`,null,ae,{light:n()}),se=Q(oe,1,`vignette svelte-1a2hxud`,null,se,{light:n()}),Q(ce,1,`fixed bottom-6 left-8 z-20 flex items-center gap-4 font-mono text-[9px] transition-colors ${n()?`text-black/30`:`text-white/30`}`,`svelte-1a2hxud`),Y(ue,`SYSTEM_IMAGE: ${K(b).label??``}`),Y(fe,`INDEX: [0${K(i)+1}_OF_04]`)}),J(e,T),Fe()}function yi(e,t,n=20){let r=0,i=setInterval(()=>{t(e.split(``).map((t,n)=>n<r?e[n]:t===` `?` `:`abcdefghijklmnopqrstuvwxyz0123456789`[Math.floor(Math.random()*36)]).join(``)),r>=e.length&&clearInterval(i),r+=e.length/15},n)}var bi={extent:[{caption:`End-to-end pipeline: discovery, provisioning, runtime, governance`,code:`flowchart TD
    subgraph Discovery ["1. Discovery & Planning"]
        A["Target Repository"] --> B["extent scan<br/>(Runtime & Framework Detection)"]
        B --> C["extent analyze<br/>(AST, Routes, DB, Queues)"]
        C --> D["extent plan<br/>(Rollout Strategy & Profiles)"]
    end

    subgraph Generation ["2. Provisioning & Instrumentation"]
        E["extent apply<br/>(extent.yaml & LGTM Configs)"]
        E --> F["extent instrument<br/>(OTel Bootstrap Injection)"]
        F --> G["extent deps<br/>(SDK Dependency Sync)"]
    end

    subgraph Runtime ["3. Stack & Verification"]
        H["extent stack up<br/>(Docker Compose LGTM Stack)"]
        H --> I["extent verify / doctor<br/>(Config & Endpoint Checks)"]
        I --> J["extent smoke<br/>(Synthetic Traffic & Correlation)"]
    end

    subgraph Governance ["4. Analysis & Quality"]
        K["extent cardinality<br/>(Loki Label Risk Score)"]
        L["extent score<br/>(Telemetry Quality Rating)"]
        M["extent report / baseline<br/>(Prometheus Bottlenecks & Diff)"]
    end

    D --> E
    G --> H
    J --> K
    J --> L
    J --> M`},{caption:`Extent against the manual alternative`,code:`flowchart LR
    APP["Target App<br/>(OTel Traces / Metrics / Logs)"] -->|"OTLP gRPC:4317 / HTTP:4318"| OTCP["otel-collector.yml<br/>(OTel Collector)"]

    subgraph LGTM ["Local LGTM Stack (docker-compose.observability.yml)"]
        PROM["prometheus.yml<br/>(Prometheus Metrics)"]
        TEMPO["tempo.yml<br/>(Tempo Traces)"]
        LOKI["loki.yml<br/>(Loki Logs)"]
        GRAF["grafana/<br/>(Dashboards & Datasources)"]

        PROM --> GRAF
        TEMPO --> GRAF
        LOKI --> GRAF
    end

    OTCP -->|"Remote Write :9090"| PROM
    OTCP -->|"OTLP Exporter :3200"| TEMPO
    OTCP -->|"Loki Push API :3100"| LOKI

    CLI_VERIFY["extent smoke / verify / report"] -.->|"Query API"| PROM
    CLI_VERIFY -.->|"Query API"| TEMPO
    CLI_VERIFY -.->|"Query API"| LOKI`},{caption:`CLI command and directory surface`,code:`flowchart TD
    CLI["cmd/extent<br/>(CLI Entrypoint & Dispatcher)"]

    subgraph AnalysisLayer ["Analysis & Contract Engine"]
        SCAN["internal/scanner"]
        ANALYZER["internal/analyzer"]
        PLANNER["internal/planner"]
        CONTRACT["internal/contract"]
        CONF["internal/config"]
    end

    subgraph MutationLayer ["Instrumentation & GitOps"]
        INST["internal/instrumenter"]
        DEPS["internal/deps"]
        CODEMOD["internal/codemods"]
        GITOPS["internal/gitops"]
        RECIPES["recipes/"]
    end

    subgraph ProvisioningLayer ["Stack Provisioning & Control"]
        TEMPL["internal/templates"]
        STACK["internal/stack"]
    end

    subgraph VerificationLayer ["Verification & Evidence Engine"]
        VERIFY["internal/verifier"]
        SMOKE["internal/smoke"]
        EVID["internal/evidence"]
        REPORT["internal/reporter"]
        RECOM["internal/recommendations"]
        BASE["internal/baseline"]
        CARD["internal/cardinality"]
        SCORE["internal/scorer"]
    end

    subgraph TargetArtifacts ["Target System & LGTM Stack"]
        TARGET_CODE["Application Source & Dependencies"]
        COMPOSE["docker-compose.observability.yml"]
        COLLECTOR["OTel Collector (OTLP Ingest)"]
        BACKENDS["Prometheus / Tempo / Loki / Grafana"]
    end

    CLI --> SCAN
    CLI --> INST
    CLI --> TEMPL
    CLI --> VERIFY

    SCAN --> ANALYZER
    ANALYZER --> PLANNER
    PLANNER --> CONTRACT
    CONTRACT --> CONF
    CONF --> TEMPL

    INST --> TARGET_CODE
    DEPS --> TARGET_CODE
    CODEMOD --> TARGET_CODE

    TEMPL --> COMPOSE
    STACK --> COMPOSE
    COMPOSE --> COLLECTOR
    COLLECTOR --> BACKENDS

    VERIFY --> TARGET_CODE
    SMOKE --> COLLECTOR
    EVID --> BACKENDS
    REPORT --> BACKENDS`}],telos:[{caption:`System architecture — client, gateway, API, OCR service, and data stores`,code:`graph TD
    Client["Flutter Client (Android / iOS / Web / Desktop)"]
    Gateway["Nginx Gateway / Reverse Proxy (:80, :5000)"]
    Api[".NET 10 Web API (EduScan.Api)"]
    SignalR["SignalR Real-Time Hub (/hubs/chat)"]
    OcrService["OCR Vision Microservice (Python FastAPI / PaddleOCR)"]
    AiTutor["AI Inference Engine (Semantic Kernel / Ollama)"]
    Postgres[("PostgreSQL 16 Database")]
    Minio[("MinIO S3 Object Storage")]
    RedisCache[("Redis Cache")]

    Client -->|HTTP / REST| Gateway
    Client -->|WebSocket| Gateway
    Gateway -->|Forward| Api
    Gateway -->|Stream| SignalR
    SignalR -.-> Api
    Api -->|Persist Metadata| Postgres
    Api -->|Cache & State| RedisCache
    Api -->|Store Scans & Blobs| Minio
    Api -->|Dispatch Ingestion| OcrService
    Api -->|Contextual Prompting| AiTutor`}],zenith:[{caption:`System architecture — telemetry ingestion through to the Flutter client`,code:`graph TD
    Sim["Hardware Devices & Zenith Simulator"] -->|HTTP / Telemetry Ingestion| Api["Zenith Web API (.NET 10)"]
    Api -->|Validate Device Auth| Auth["Device Authentication Service"]
    Api -->|Persist Hypertable Records| Timescale[("TimescaleDB (PostgreSQL)")]
    Api -->|Update Current Site State| Redis[("Redis Distributed Cache")]
    Api -->|Broadcast Telemetry Events| SignalR["SignalR Real-Time Hub (/hubs/telemetry)"]
    SignalR -->|WebSocket Stream| Client["Zenith Flutter Client (Mobile / Web / Desktop)"]
    Client -->|Query Aggregated History| Api`}],fleetpulse:[{caption:`Container view`,code:`flowchart LR
    User[Dispatcher / Fleet Manager / Maintenance Staff]
    Browser[Svelte + Vite Frontend]
    Api[ASP.NET Core API]
    App[Application Services]
    Domain[Domain Model]
    Infra[Infrastructure Repositories]
    Db[(PostgreSQL)]

    User --> Browser
    Browser -->|JWT + JSON over /api| Api
    Api --> App
    Api --> Infra
    App --> Domain
    Infra --> Domain
    Infra -->|EF Core / Npgsql| Db`},{caption:`Clean Architecture dependency rule`,code:`flowchart BT
    Domain[FleetPulse.Domain]
    Application[FleetPulse.Application]
    Infrastructure[FleetPulse.Infrastructure]
    Api[FleetPulse.Api]
    Tests[FleetPulse.Tests]

    Application --> Domain
    Infrastructure --> Domain
    Api --> Application
    Api --> Infrastructure
    Tests --> Api
    Tests --> Application
    Tests --> Infrastructure
    Tests --> Domain`},{caption:`Request pipeline`,code:`sequenceDiagram
    participant Client as Svelte Client
    participant Middleware as ASP.NET Middleware
    participant Controller as API Controller
    participant Service as Application Service
    participant Repo as Repository
    participant Db as PostgreSQL

    Client->>Middleware: HTTP request with Bearer token
    Middleware->>Middleware: Exception handling, CORS, JWT auth
    Middleware->>Controller: Authorized request
    Controller->>Service: Business operation when needed
    Service->>Repo: Query/update domain data
    Repo->>Db: EF Core SQL via Npgsql
    Db-->>Repo: Rows
    Repo-->>Service: Entities / aggregates
    Service-->>Controller: Result model
    Controller-->>Client: JSON DTO response`},{caption:`Authentication and authorization`,code:`sequenceDiagram
    participant User
    participant Frontend
    participant Auth as AuthController
    participant Users as UserRepository
    participant Jwt as JWT Issuer

    User->>Frontend: Submit username/password
    Frontend->>Auth: POST /api/auth/login
    Auth->>Users: Find user by username
    Auth->>Auth: Verify BCrypt password hash
    Auth->>Jwt: Issue signed JWT with role claim
    Auth-->>Frontend: Token + user fields
    Frontend->>Frontend: Store token in localStorage
    Frontend->>Auth: GET /api/auth/me with Bearer token
    Auth-->>Frontend: Current user profile`},{caption:`Frontend runtime architecture`,code:`flowchart TD
    Main[main.ts]
    App[App.svelte]
    Router[lib/router.ts]
    AuthStore[lib/stores/auth.ts]
    UiStore[lib/stores/ui.ts]
    ApiClient[lib/api.ts]
    Pages[pages/*.svelte]
    Components[lib/components/*.svelte]
    Backend[ASP.NET Core API]

    Main --> App
    App --> Router
    App --> AuthStore
    App --> UiStore
    App --> Pages
    Pages --> Components
    Pages --> ApiClient
    AuthStore --> ApiClient
    ApiClient -->|/api through Vite proxy in dev| Backend`},{caption:`Data model`,code:`erDiagram
    DEPOT ||--o{ BUS : houses
    ROUTE ||--o{ BUS : assigned_to
    BUS ||--o{ TRIP : performs
    ROUTE ||--o{ TRIP : serves
    BUS ||--o{ MILEAGE_LOG : records
    BUS ||--o{ BUS_COMPONENT : owns
    BUS ||--o{ MAINTENANCE_RECORD : receives
    BUS_COMPONENT ||--o{ MAINTENANCE_RECORD : serviced_by
    BUS ||--o{ ALERT : triggers
    BUS_COMPONENT ||--o{ ALERT : triggers
    USER ||--o{ ALERT : resolves

    DEPOT {
        uuid Id
        string Name
        string Location
        int Capacity
    }

    BUS {
        uuid Id
        string BusNumber
        string PlateNumber
        string Model
        int Year
        string CurrentStatus
        double TotalMileage
    }

    ROUTE {
        uuid Id
        string Name
        string StartPoint
        string Destination
        jsonb Stops
        double DistanceKm
        bool IsActive
    }

    BUS_COMPONENT {
        uuid Id
        string ComponentType
        double CurrentConditionScore
        double FailureProbability
        string Status
    }

    MAINTENANCE_RECORD {
        uuid Id
        string Type
        string Description
        decimal Cost
        datetime PerformedAt
    }

    ALERT {
        uuid Id
        string Type
        string Severity
        string Title
        bool IsRead
        bool IsResolved
    }

    USER {
        uuid Id
        string Username
        string Email
        string Role
        bool IsActive
    }`},{caption:`Dashboard load sequence`,code:`sequenceDiagram
    participant UI as Dashboard.svelte
    participant Api as api.ts
    participant Backend as ASP.NET Core API
    participant Db as PostgreSQL

    UI->>Api: getDashboardStats()
    UI->>Api: getBuses()
    UI->>Api: getRoutes()
    UI->>Api: getTrips()
    UI->>Api: getAlerts(resolved=false)
    UI->>Api: getCriticalComponents()
    UI->>Api: getMileageTrends()
    Api->>Backend: Parallel /api requests
    Backend->>Db: Aggregate and resource queries
    Db-->>Backend: Fleet data
    Backend-->>Api: JSON DTOs
    Api-->>UI: Typed data
    UI->>UI: Render stat cards, charts, alerts, component list`},{caption:`Alert generation and resolution`,code:`flowchart TD
    Trigger[User clicks Generate Alerts]
    Endpoint[POST /api/alerts/generate]
    AlertService[AlertService]
    Repos[Bus, Component, Maintenance Repositories]
    Rules{Evaluate rules}
    Persist[Persist generated alerts]
    UIRefresh[Refresh alert list and stats]

    Trigger --> Endpoint
    Endpoint --> AlertService
    AlertService --> Repos
    Repos --> Rules
    Rules -->|replacement due| Persist
    Rules -->|overdue maintenance| Persist
    Rules -->|abnormal mileage| Persist
    Rules -->|idle bus / repeated failure| Persist
    Persist --> UIRefresh`},{caption:`Component health model`,code:`flowchart LR
    Mileage[Mileage since install]
    Time[Age in months]
    Condition[Manual condition score]
    Health[Component health score]
    Probability[Failure probability]
    Forecast[Estimated replacement date]
    Alerts[Replacement alert]

    Mileage --> Health
    Time --> Health
    Condition --> Health
    Health --> Probability
    Probability --> Forecast
    Forecast --> Alerts`}],"page-ui":[{caption:`Runtime / container topology (docker compose)`,code:`graph TD
U[Browser] --> N[Nginx :80]

N --> API[auth-service<br/>Page.Ui.Presentation :8080]
N --> R[svelte-render<br/>Page.Ui.SvelteRender :8080<br/>via /runs/*]
N --> M[minio :9000<br/>via /minio/*]

API --> PG[(PostgreSQL 17)]
API --> RD[(Redis)]
API --> MQ[(RabbitMQ)]
API --> M
API --> DP[(RSA/DataProtection keys volumes)]

W[worker-ai<br/>Page.Ui.Worker.Ai] --> PG
W --> RD
W --> MQ
W --> R

MQ --> W
MQ --> API
R --> SB[svelte-render-sandbox<br/>Node.js :4000]
R --> RUNS[(render runs/result cache)]
CB[create-bucket init job] --> M`},{caption:`Edge routing and protocols (Nginx)`,code:`sequenceDiagram
participant U as Browser
participant N as Nginx (:80)
participant API as auth-service (:8080)
participant R as svelte-render (:8080)
participant M as minio (:9000)

U->>N: POST /graphql/ (queries + mutations)
N->>API: proxy_pass
API-->>U: JSON

U->>N: WS /graphql (subscriptions)
N->>API: proxy_pass + Upgrade
API-->>U: subscription events

U->>N: WS /hubs/chat (SignalR)
N->>API: proxy_pass + Upgrade
API-->>U: hub events

U->>N: GET /api/upload/presign?fileName=...
N->>API: proxy_pass
API-->>U: uploadUrl + downloadUrl (presigned)

U->>N: PUT /minio/chat-uploads/userId/objectKey?X-Amz-...
N->>M: proxy_pass /minio/*
M-->>U: 200/204

U->>N: GET /runs/publicRunToken/preview.html
N->>R: proxy_pass /runs/*
R-->>U: static HTML/CSS/JS`},{caption:`auth-service (Page.Ui.Presentation) components`,code:`graph TB
subgraph API[auth-service]
GQL[HotChocolate GraphQL\\nqueries/mutations/subscriptions]
WS[GraphQL WS auth\\nChatSocketSessionInterceptor]
HUB[SignalR ChatHub\\n/hubs/chat]
UP[UploadController\\n/api/upload/presign]
AUTH[Identity + JWT auth]
CHAT[ChatService\\nrate limits + createChat lock]
AUTHSVC[AuthService]
MAIL[AuthEmailRequested consumer]
RTC[Realtime consumers\\nChatMessageCreated + AiResponseMessageGenerated]
OUTBOX[EF bus outbox]
end

subgraph State
PG[(PostgreSQL)]
RD[(Redis)]
MQ[(RabbitMQ)]
M[(MinIO chat-uploads)]
end

GQL --> CHAT
GQL --> AUTHSVC
GQL --> AUTH
WS --> AUTH
UP --> RD
UP --> M
CHAT --> PG
CHAT --> RD
CHAT --> M
CHAT --> OUTBOX
AUTH --> PG
AUTHSVC --> PG
MAIL --> MQ
HUB <--> RD
GQL <--> RD
OUTBOX --> PG
RTC --> PG
RTC <--> MQ
RTC --> HUB
RTC --> GQL`},{caption:`Chat and AI render flow`,code:`sequenceDiagram
participant U as User
participant API as auth-service
participant RD as Redis
participant DB as PostgreSQL
participant MQ as RabbitMQ
participant RT as Realtime consumers
participant W as worker-ai
participant R as svelte-render

U->>API: createChat(input + initialUserMessage)
API->>RD: write-rate limit + distributed createChat lock
API->>DB: Begin transaction
API->>DB: Insert Chat with OwnerUserId
API->>DB: Insert initial Message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated after commit
MQ->>RT: Broadcast initial message
MQ->>W: Consume ChatMessageCreated
W->>RD: short AI rate limit
W->>R: POST /api/render
R-->>W: previewUrl or render error
W-->>MQ: Publish AiResponseMessageGenerated
MQ->>API: Consume AiResponseMessageGenerated
API->>DB: Insert AI/system message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated (AI/system)
MQ->>RT: Broadcast AI/system message
API-->>U: createChat payload (new chatId + chatKey each call)

U->>API: createMessage(chatKey, content, attachmentUrl?)
API->>RD: write-rate limit
API->>DB: Insert Message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated after commit
MQ->>RT: Broadcast message
MQ->>W: Consume ChatMessageCreated
W->>RD: short AI rate limit
W->>R: POST /api/render
R-->>W: previewUrl or render error
W-->>MQ: Publish AiResponseMessageGenerated
MQ->>API: Consume AiResponseMessageGenerated
API->>DB: Insert AI/system message + outbox rows
DB-->>MQ: Deliver ChatMessageCreated (AI/system)
MQ->>RT: Broadcast AI/system message

U->>API: createMessage(chatKey, content, clientRequestId?)
API->>DB: Insert USER_MESSAGE + outbox rows
DB-->>MQ: Deliver ChatMessageCreated
MQ->>W: Consume ChatMessageCreated
W->>AI: POST generate with signed internal JWT
AI->>API: GET /api/ai-dev/upload/presign
AI->>M: PUT generated files to ai-runs via presigned URLs
AI->>API: createMessage / renameChat callbacks with internal JWT
AI->>API: POST /api/ai-dev/render-trigger
API->>MQ: Publish TriggerAiRunRender
MQ->>W: Consume TriggerAiRunRender
W->>R: POST /api/render with X-Render-Api-Key
R-->>W: opaque public preview link
W-->>MQ: Publish AI_RUN
MQ->>API: Persist + rebroadcast`},{caption:`Auth email delivery flow`,code:`sequenceDiagram
participant U as User
participant API as auth-service
participant DB as PostgreSQL
participant MQ as RabbitMQ
participant MAIL as auth email consumer
participant SMTP as SMTP provider

U->>API: register / forgotPassword / resendVerification
API->>API: Validate input + apply Redis rate limits
API->>DB: Persist auth state + outbox rows
DB-->>MQ: Deliver AuthEmailRequested after commit
API-->>U: success response
MQ->>MAIL: Consume AuthEmailRequested
MAIL->>SMTP: Connect + authenticate + send
SMTP-->>MAIL: delivery result / retry`},{caption:`Attachment upload and message validation`,code:`sequenceDiagram
participant U as User
participant API as auth-service
participant M as MinIO
participant DB as PostgreSQL
participant MQ as RabbitMQ
participant RT as Realtime consumers

U->>API: GET /api/upload/presign?fileName=photo.png
API->>API: Validate filename + rate limit
API->>M: Ensure bucket exists on first use
API-->>U: uploadUrl + downloadUrl (signed for user folder)

U->>M: PUT uploadUrl (image bytes)
M-->>U: 200/204

U->>API: createMessage(..., attachmentUrl=downloadUrl)
API->>API: Validate attachment URL format
API->>M: StatObject(chat-uploads/userId/objectKey)
API->>DB: Save message (stores stable path without query)
API->>MQ: Publish ChatMessageCreated
MQ->>RT: Broadcast message with attachmentUrl`},{caption:`Render service internals (Page.Ui.SvelteRender)`,code:`graph TB
subgraph R[svelte-render]
AuthMW[API key middleware\\nX-Render-Api-Key]
RC[RenderController\\nPOST /api/render]
RF[RenderController\\nPOST /api/render-form]
Hash[SHA-256 input hash -> runId]
Cache[result.json cache by runId]
RS[SandboxRenderService]
Static[Static files\\nGET /runs/*]
Runs[Runs directory\\nNodeWorker/runs/runId]
end

subgraph Sandbox[Isolated Node Sandbox]
Worker[runner.js TCP Server :4000]
Svelte[Pre-warmed Svelte Compiler/SSR]
Temp[tmpfs /render_jobs]
end

AuthMW --> RC
AuthMW --> RF
RC --> Hash --> Cache
RF --> Hash
RC --> RS
RF --> RS
RS -- TCP Protocol --> Worker
Worker --> Svelte
Worker --> Temp
RS -- Copy Artifacts --> Runs
Static --> Runs`},{caption:`Project layers and dependencies`,code:`graph BT
Domain[Page.Ui.Domain]
App[Page.Ui.Application] --> Domain
Infra[Page.Ui.Infrastructure] --> App
Infra --> Domain
Pres[Page.Ui.Presentation] --> App
Pres --> Infra
Worker[Page.Ui.Worker.Ai] --> App
Worker --> Infra
Render[Page.Ui.SvelteRender]`}],mirox:[{caption:`System architecture — MVVM view models through to the HTML preview pipeline`,code:`graph TD
    UI["Avalonia Presentation Layer (Mirox.Presentation.Avalonia)"]
    Editor["AvaloniaEdit Buffer"]
    WebView["Native WebView (WebView2 / WebKit)"]
    App["Application Layer (Mirox.Application)"]
    Infra["Infrastructure Layer (Mirox.Infrastructure)"]
    Core["Domain Core (Mirox.Core)"]

    UI --> Editor
    UI --> WebView
    UI --> App
    App --> Core
    App --> Infra
    Infra --> Core
    Infra --> Markdig["Markdig Pipeline (GFM + Extensions)"]
    Infra --> ReverseMD["ReverseMarkdown (HTML to Markdown)"]
    Infra --> FileIO["Local File System & Settings Storage"]`}]},xi={dijkstra:[{src:`/media/dijkstra/dijkstra-visualization.gif`,alt:`Looping Manim animation of the graph expanding as Dijkstra settles each node`}]};function Si(e){return bi[e]??[]}function Ci(e){return xi[e]??[]}var wi=`modulepreload`,Ti=function(e){return`/`+e},Ei={},Di=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Ti(t,n),t in Ei)return;Ei[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:wi,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Oi=q(`<p class="text-[10px] text-[var(--text-secondary)] opacity-45 font-mono break-words"> </p>`),ki=q(`<div class="diagram-body-status diagram-body-overlay svelte-1ua23jv"><p class="text-xs text-[var(--text-secondary)] opacity-70 font-mono lowercase">diagram could not be rendered — source below</p> <!></div>`),Ai=q(`<div class="diagram-body-status diagram-body-overlay svelte-1ua23jv"><span class="diagram-spinner svelte-1ua23jv" aria-hidden="true"></span> <span class="text-[10px] uppercase text-[var(--text-secondary)] opacity-50">decoding diagram</span></div>`),ji=q(`<div class="diagram-toolbar svelte-1ua23jv"><span class="text-[9px] uppercase text-[var(--text-secondary)] opacity-45"> </span> <div class="flex gap-1.5"><button type="button" class="diagram-tool svelte-1ua23jv">[-]</button> <span class="diagram-zoom svelte-1ua23jv"> </span> <button type="button" class="diagram-tool svelte-1ua23jv">[+]</button> <button type="button" class="diagram-tool svelte-1ua23jv">fit</button></div></div>`),Mi=q(`<pre class="diagram-source svelte-1ua23jv"><code> </code></pre>`),Ni=q(`<figure class="diagram-frame svelte-1ua23jv"><figcaption class="diagram-caption svelte-1ua23jv"><span class="text-[var(--text-secondary)] opacity-40"> </span> <span class="diagram-caption-text svelte-1ua23jv"> </span></figcaption> <div><div></div> <!></div> <!> <button type="button" class="diagram-source-toggle svelte-1ua23jv"> </button> <!></figure>`);function Pi(e,t){Pe(t,!0);let n=L(void 0),r=L(void 0),i=L(`idle`),a=L(``),o=L(!1),s=L(1),c=L(0),l=L(0),u=0,d=.35,f=St(()=>K(c)>900),p=St(()=>Math.round(K(c)*K(s))),m=St(()=>Math.round(K(l)*K(s))),h=L(0),g=L(1);function _(e){return Math.min(4,Math.max(d,Math.round(e*100)/100))}let v=St(()=>K(i)===`ok`&&(K(f)||K(p)>K(h)||K(m)>520)),y=Math.random().toString(36).slice(2,9),b=null,x=!1;async function S(){try{if(await new Promise(e=>setTimeout(e,0)),b||=(await Di(()=>import(`./mermaid.core-Hl2jBjRS.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]))).default,x)return;R(i,`idle`);let e=document.documentElement.classList.contains(`light-mode`);b.initialize({startOnLoad:!1,securityLevel:`strict`,theme:`base`,fontFamily:`IBM Plex Mono, Courier, monospace`,themeVariables:e?{background:`#ffffff`,primaryColor:`#f4f4f4`,primaryTextColor:`#000000`,primaryBorderColor:`#000000`,lineColor:`#000000`,secondaryColor:`#ebebeb`,tertiaryColor:`#ffffff`,textColor:`#000000`,noteBkgColor:`#f4f4f4`,noteTextColor:`#000000`,noteBorderColor:`#000000`,actorBkg:`#ffffff`,actorBorder:`#000000`,actorTextColor:`#000000`,signalColor:`#000000`,signalTextColor:`#000000`,labelBoxBkgColor:`#f4f4f4`,labelTextColor:`#000000`,loopTextColor:`#000000`,activationBkgColor:`#e0e0e0`,activationBorderColor:`#000000`,sequenceNumberColor:`#ffffff`,attributeBackgroundColorOdd:`#ffffff`,attributeBackgroundColorEven:`#f4f4f4`}:{background:`#0a0a0a`,primaryColor:`#141414`,primaryTextColor:`#ffffff`,primaryBorderColor:`#ffffff`,lineColor:`#cccccc`,secondaryColor:`#1c1c1c`,tertiaryColor:`#0a0a0a`,textColor:`#ffffff`,noteBkgColor:`#141414`,noteTextColor:`#ffffff`,noteBorderColor:`#ffffff`,actorBkg:`#0a0a0a`,actorBorder:`#ffffff`,actorTextColor:`#ffffff`,signalColor:`#ffffff`,signalTextColor:`#ffffff`,labelBoxBkgColor:`#141414`,labelTextColor:`#ffffff`,loopTextColor:`#ffffff`,activationBkgColor:`#1c1c1c`,activationBorderColor:`#ffffff`,sequenceNumberColor:`#000000`,attributeBackgroundColorOdd:`#0a0a0a`,attributeBackgroundColorEven:`#141414`}}),u+=1;let{svg:r}=await b.render(`mmd-${y}-${t.index}-${u}`,t.diagram.code);if(x)return;if(!K(n)){R(i,`error`),R(a,`render target missing`);return}K(n).innerHTML=r;let o=K(n).querySelector(`svg`);if(o){o.removeAttribute(`width`),o.removeAttribute(`height`);let e=o.getAttribute(`viewBox`);if(e){let t=e.split(/\s+/).map(Number);Number.isFinite(t[2])&&t[2]>0&&R(c,Math.round(t[2]),!0),Number.isFinite(t[3])&&t[3]>0&&R(l,Math.round(t[3]),!0)}o.style.maxWidth=`none`;let t=K(n).parentElement;if(t){let e=getComputedStyle(t),n=t.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight);if(n>0&&K(c)>n){let e=n/K(c);R(g,Math.max(d,Math.floor(e*20)/20),!0)}else R(g,1);R(s,K(g),!0)}}R(i,`ok`)}catch(e){console.error(`mermaid render failed`,e),R(a,e instanceof Error?`${e.name}: ${e.message}`:String(e),!0),R(i,`error`)}}Ur(()=>{S();let e=document.documentElement,t=new MutationObserver(()=>{K(i)===`ok`&&S()});t.observe(e,{attributes:!0,attributeFilter:[`class`]}),an(()=>{if(K(i)!==`ok`||!K(n))return;let e=K(n).querySelector(`svg`);!e||!K(c)||!K(l)||(e.style.width=`${K(p)}px`,e.style.height=`${K(m)}px`)});let a;return K(r)&&(R(h,K(r).clientWidth,!0),a=new ResizeObserver(()=>{R(h,K(r)?K(r).clientWidth:0,!0)}),a.observe(K(r))),()=>{x=!0,t.disconnect(),a?.disconnect()}});var C=Ni(),w=z(C),T=z(w),ee=z(T);M(T);var E=B(T,2),te=z(E,!0);M(E),M(w);var D=B(w,2);let ne;var re=z(D);let O;Vr(re,e=>R(n,e),()=>K(n));var ie=B(re,2),ae=e=>{var t=ki(),n=B(z(t),2),r=e=>{var t=Oi(),n=z(t,!0);M(t),V(()=>Y(n,K(a))),J(e,t)};_r(n,e=>{K(a)&&e(r)}),M(t),J(e,t)},oe=e=>{J(e,Ai())};_r(ie,e=>{K(i)===`error`?e(ae):K(i)!==`ok`&&e(oe,1)}),M(D),Vr(D,e=>R(r,e),()=>K(r));var se=B(D,2),ce=e=>{var t=ji(),n=z(t),r=z(n,!0);M(n);var i=B(n,2),a=z(i),o=B(a,2),c=z(o);M(o);var l=B(o,2),u=B(l,2);M(i),M(t),V(e=>{Y(r,K(f)?`scroll to pan`:`fit to width`),Y(c,`${e??``}%`)},[()=>Math.round(K(s)*100)]),nr(`click`,a,()=>R(s,_(K(s)/1.25),!0)),nr(`click`,l,()=>R(s,_(K(s)*1.25),!0)),nr(`click`,u,()=>R(s,K(g),!0)),J(e,t)};_r(se,e=>{K(i)===`ok`&&e(ce)});var le=B(se,2),ue=z(le,!0);M(le);var de=B(le,2),fe=e=>{var n=Mi(),r=z(n),i=z(r,!0);M(r),M(n),V(()=>Y(i,t.diagram.code)),J(e,n)};_r(de,e=>{K(o)&&e(fe)}),M(C),V(e=>{Y(ee,`[FIG ${e??``}]`),Y(te,t.diagram.caption),ne=Q(D,1,`diagram-body svelte-1ua23jv`,null,ne,{"diagram-body-scroll":K(v)}),O=Q(re,1,`diagram-canvas svelte-1ua23jv`,null,O,{"diagram-canvas-pending":K(i)!==`ok`}),Ir(le,`aria-expanded`,K(o)),Y(ue,K(o)?`[-] hide mermaid source`:`[+] view mermaid source`)},[()=>String(t.index+1).padStart(2,`0`)]),nr(`click`,le,()=>R(o,!K(o))),J(e,C),Fe()}rr([`click`]);var Fi=q(`<span class="border border-[var(--border-muted)] px-2 py-0.5 text-[9px] text-[var(--text-secondary)] opacity-50"> </span>`),Ii=q(`<li class="flex gap-3 text-xs leading-relaxed text-[var(--text-secondary)] opacity-75 font-mono lowercase"><span class="text-[var(--text-primary)] opacity-50 shrink-0">&gt;</span> <span> </span></li>`),Li=q(`<div class="border border-[var(--border-muted)] p-3 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 hover:border-[var(--border-primary)] transition-all duration-300"><span class="text-[var(--text-secondary)] opacity-60 text-[10px] uppercase shrink-0 sm:w-40"> </span> <span class="text-xs font-mono lowercase break-words sm:text-right sm:flex-1"> </span></div>`),Ri=q(`<figure class="shot svelte-1yt4zsb"><img loading="lazy" decoding="async" class="svelte-1yt4zsb"/> <figcaption class="shot-caption svelte-1yt4zsb"> </figcaption></figure>`),zi=q(`<section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[ANIM]</span> <h2 class="text-sm font-bold uppercase tracking-wider">MOTION PREVIEW</h2></div> <div class="grid gap-3"></div></section>`),Bi=q(`<section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-4"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[DIAGRAM]</span> <h2 class="text-sm font-bold uppercase tracking-wider">ARCHITECTURE DIAGRAMS <span class="text-[var(--text-secondary)] opacity-40 font-normal normal-case"> </span></h2></div> <p class="text-[10px] text-[var(--text-secondary)] opacity-50 font-mono lowercase">rendered from this project's own readme, with the original mermaid source available on every diagram.</p> <div class="space-y-4"></div></section>`),Vi=q(`<div class="w-full max-w-4xl mx-auto space-y-6"><button class="terminal-border-single px-4 py-2 text-xs bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 uppercase">&lt;- RETURN TO LEDGER</button> <header class="terminal-border-double p-5 md:p-8 bg-[var(--bg-surface)]/95 space-y-4"><div class="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 gap-4"><span class="text-[9px] text-[var(--text-secondary)] opacity-40 uppercase tracking-wider break-words"> </span> <span class="text-xs text-[var(--text-secondary)] opacity-40"> </span></div> <h1 class="text-2xl md:text-4xl font-bold uppercase tracking-tight text-glow break-words"> </h1> <p class="text-xs leading-relaxed text-[var(--text-secondary)] opacity-75 font-mono lowercase"> </p> <div class="flex flex-wrap gap-1.5 pt-1"></div></header> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[BRIEF]</span> <h2 class="text-sm font-bold uppercase tracking-wider">OVERVIEW</h2></div> <p class="text-xs leading-relaxed text-[var(--text-secondary)] opacity-75 font-mono lowercase"> </p></section> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[CAPS]</span> <h2 class="text-sm font-bold uppercase tracking-wider">CAPABILITIES</h2></div> <ul class="space-y-2"></ul></section> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[ARCH]</span> <h2 class="text-sm font-bold uppercase tracking-wider">ARCHITECTURE</h2></div> <div class="space-y-2"></div></section> <!> <!> <section class="terminal-border-single p-5 md:p-6 bg-[var(--bg-surface)]/95 space-y-3"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[REPO]</span> <h2 class="text-sm font-bold uppercase tracking-wider">REPOSITORY STATUS</h2></div> <div><span> </span> <a target="_blank" rel="noopener noreferrer" class="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors break-words"> </a></div> <p class="text-[10px] leading-relaxed text-[var(--text-secondary)] opacity-60 font-mono lowercase"> </p></section> <div class="flex flex-col sm:flex-row gap-3 pt-1"><button class="inline-flex w-full sm:w-auto justify-center items-center gap-2 terminal-border-single px-5 py-2.5 text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-primary)] transition hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] hover:scale-[1.03] duration-300">&lt;- BACK TO ALL PROJECTS</button> <a target="_blank" rel="noopener noreferrer" class="inline-flex w-full sm:w-auto justify-center items-center gap-2 terminal-border-single px-5 py-2.5 text-xs font-semibold bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:scale-[1.03] transition-all duration-300">OPEN SOURCE PORTAL -&gt;</a></div></div>`);function Hi(e,t){Pe(t,!0);let n=L(``),r=L(!1),i=St(()=>Si(t.project.slug)),a=St(()=>Ci(t.project.slug));an(()=>{R(n,t.project.title,!0),R(r,!1)});function o(){K(r)||(R(r,!0),yi(t.project.title,e=>{R(n,e,!0)}))}var s=Vi(),c=z(s),l=B(c,2),u=z(l),d=z(u),f=z(d,!0);M(d);var p=B(d,2),m=z(p);M(p),M(u);var h=B(u,2),g=z(h,!0);M(h);var _=B(h,2),v=z(_,!0);M(_);var y=B(_,2);Z(y,21,()=>t.project.tags,X,(e,t)=>{var n=Fi(),r=z(n,!0);M(n),V(()=>Y(r,K(t))),J(e,n)}),M(y),M(l);var b=B(l,2),x=B(z(b),2),S=z(x,!0);M(x),M(b);var C=B(b,2),w=B(z(C),2);Z(w,21,()=>t.project.capabilities,X,(e,t)=>{var n=Ii(),r=B(z(n),2),i=z(r,!0);M(r),M(n),V(()=>Y(i,K(t))),J(e,n)}),M(w),M(C);var T=B(C,2),ee=B(z(T),2);Z(ee,21,()=>t.project.architecture,X,(e,t)=>{var n=Li(),r=z(n),i=z(r);M(r);var a=B(r,2),o=z(a,!0);M(a),M(n),V(()=>{Y(i,`${K(t).label??``}:`),Y(o,K(t).value)}),J(e,n)}),M(ee),M(T);var E=B(T,2),te=e=>{var t=zi(),n=B(z(t),2);Z(n,21,()=>K(a),X,(e,t)=>{var n=Ri(),r=z(n),i=B(r,2),a=z(i,!0);M(i),M(n),V(()=>{Ir(r,`src`,K(t).src),Ir(r,`alt`,K(t).alt),Y(a,K(t).alt)}),J(e,n)}),M(n),M(t),J(e,t)};_r(E,e=>{K(a).length>0&&e(te)});var D=B(E,2),ne=e=>{var t=Bi(),n=z(t),r=B(z(n),2),a=B(z(r)),o=z(a);M(a),M(r),M(n);var s=B(n,4);Z(s,21,()=>K(i),X,(e,t,n)=>{Pi(e,{get diagram(){return K(t)},index:n})}),M(s),M(t),V(()=>Y(o,`(${K(i).length??``})`)),J(e,t)};_r(D,e=>{K(i).length>0&&e(ne)});var re=B(D,2),O=B(z(re),2),ie=z(O),ae=z(ie,!0);M(ie);var oe=B(ie,2),se=z(oe);M(oe),M(O);var ce=B(O,2),le=z(ce,!0);M(ce),M(re);var ue=B(re,2),de=z(ue),fe=B(de,2);M(ue),M(s),V((e,r)=>{Y(f,t.project.type),Y(m,`DOSSIER // ${e??``}`),Y(g,K(n)),Y(v,t.project.description),Y(S,t.project.overview),Q(O,1,`border p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-all duration-300
        ${t.project.repo.public?`border-[var(--border-primary)]`:`border-[var(--border-muted)]`}`),Q(ie,1,`text-[10px] uppercase ${t.project.repo.public?`text-[var(--text-primary)]`:`text-[var(--text-secondary)] opacity-50`}`),Y(ae,t.project.repo.public?`[PUBLIC] SOURCE AVAILABLE`:`[PRIVATE] NOT PUBLISHED`),Ir(oe,`href`,t.project.repo.url),Y(se,`ROUTING: // ${r??``} ->`),Y(le,t.project.repo.note),Ir(fe,`href`,t.project.link)},[()=>t.project.slug.toUpperCase(),()=>t.project.repo.url.replace(`https://`,``)]),nr(`click`,c,function(...e){t.onback?.apply(this,e)}),tr(`mouseenter`,h,o),tr(`mouseleave`,h,()=>R(n,t.project.title,!0)),nr(`click`,de,function(...e){t.onback?.apply(this,e)}),J(e,s),Fe()}rr([`click`]);var Ui=q(`<main class="grid gap-8 relative z-10"><!></main>`),Wi=q(`<div class="border border-[var(--border-muted)] bg-[var(--bg-surface)] p-3 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1 text-xs hover:border-[var(--border-primary)] transition-all duration-300 hover:translate-x-2"><span class="text-[var(--text-secondary)] opacity-60"> </span> <span class="font-bold break-words"> </span></div>`),Gi=q(`<button> </button>`),Ki=q(`<span class="border border-[var(--border-muted)] bg-[var(--bg-surface)] px-2 py-0.5 text-[9px] text-[var(--text-secondary)] opacity-50"> </span>`),qi=q(`<aside class="terminal-border-double p-5 md:p-6 md:px-10 bg-[var(--bg-surface)]/95 relative overflow-hidden" aria-label="Restricted work notice"><div class="flex items-center justify-between border-b border-[var(--border-muted)] pb-2 mb-4 gap-3 flex-wrap"><span class="text-[9px] text-[var(--text-secondary)] opacity-40 uppercase tracking-wider"> </span> <span class="inline-flex items-center gap-2 text-[9px] uppercase text-[var(--text-secondary)] opacity-50"><span class="inline-block w-1.5 h-1.5 bg-[var(--text-primary)] opacity-60 animate-pulse"></span> NOT PUBLISHED</span></div> <div class="space-y-3"><h4 class="text-md font-bold uppercase tracking-wide break-words"> </h4> <p class="text-xs leading-relaxed text-[var(--text-secondary)] opacity-70 font-mono lowercase"> </p> <div class="flex flex-wrap gap-1.5 pt-1"></div></div></aside>`),Ji=q(`<span class="border border-[var(--border-muted)] bg-[var(--bg-surface)] px-2 py-0.5 text-[9px] text-[var(--text-secondary)] opacity-50"> </span>`),Yi=q(`<article class="terminal-border-single p-5 bg-[var(--bg-surface)]/95 flex flex-col justify-between relative group hover:border-[var(--border-primary)] hover:scale-[1.02] hover:shadow-[0_0_16px_rgba(255,255,255,0.04)] transition-all duration-300"><button type="button" class="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--border-primary)]"><span class="sr-only"> </span></button> <div class="space-y-4"><div class="flex items-center justify-between border-b border-[var(--border-muted)] pb-2"><span class="text-[9px] text-[var(--text-secondary)] opacity-40 uppercase tracking-wider"> </span> <span class="text-[var(--text-secondary)] opacity-40 group-hover:text-[var(--text-primary)] transition-colors text-xs">[+]</span></div> <h4 class="text-md font-bold uppercase tracking-wide text-[var(--text-primary)] group-hover:text-glow break-words"> </h4> <p class="text-xs leading-relaxed text-[var(--text-secondary)] opacity-70 font-mono lowercase"> </p> <div class="flex flex-wrap gap-1.5 pt-2"></div></div> <div class="pt-4 border-t border-[var(--border-muted)] mt-4 flex items-center justify-between gap-2"><span> </span> <span class="text-xs text-[var(--text-secondary)] opacity-50 group-hover:text-[var(--text-primary)] transition-colors">OPEN DOSSIER <span class="group-hover:translate-x-1.5 transition-transform duration-300 inline-block">-&gt;</span></span></div></article>`),Xi=q(`<div class="border border-[var(--border-muted)] p-3 space-y-1.5 hover:border-[var(--border-primary)] transition-all duration-300"><div class="flex items-center justify-between text-[10px]"><span class="font-bold text-[var(--text-primary)] uppercase"> </span> <span class="text-[var(--text-secondary)] opacity-40"> </span></div> <p class="text-[10px] text-[var(--text-secondary)] opacity-60 leading-relaxed font-mono lowercase"> </p></div>`),Zi=q(`<a target="_blank" rel="noopener noreferrer" class="flex items-center justify-between border border-[var(--border-muted)] bg-[var(--bg-surface)] px-4 py-3 text-xs hover:border-[var(--border-primary)] hover:translate-x-2 transition-all duration-300"><span class="uppercase font-bold"> </span> <span class="text-[var(--text-secondary)] opacity-40">ROUTE_ACTIVE -&gt;</span></a>`),Qi=q(`<main class="grid gap-8 relative z-10"><section class="terminal-border-double p-4 md:p-8 bg-[var(--bg-surface)]/85 scanline relative hover:shadow-[0_0_24px_rgba(255,255,255,0.06)] transition-all duration-500"><div class="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start"><div class="space-y-4"><div class="inline-block max-w-full border border-[var(--border-muted)] px-3 py-1 text-[10px] uppercase text-[var(--text-secondary)] tracking-wider break-words hover:border-[var(--border-primary)] transition-colors duration-300">OPERATIONAL DOSSIER // RECONNAISSANCE_LINK</div> <h1 class="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-none">MOHAMED ALAA <br/><span class="text-[var(--text-secondary)] opacity-40">ANUBISX404</span></h1> <p class="text-sm leading-relaxed text-[var(--text-secondary)] opacity-80 tracking-wide font-mono max-w-2xl normal-case">Software engineer with a B.Sc. in Physics and Computer Sciences, focused on .NET backend
              development, distributed systems, observability, realtime platforms, and cross-platform
              applications. I tend to approach systems end to end, from architecture through
              verification, with particular attention to reliability, data flow, message delivery, and
              security boundaries. My background in physics and computer science shapes how I approach
              problems that connect software architecture, computation, and real-world engineering.</p> <div class="flex flex-col sm:flex-row sm:flex-wrap gap-3 pt-2"><a href="#projects" class="inline-flex w-full sm:w-auto justify-center items-center gap-2 terminal-border-single px-5 py-2.5 text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-primary)] transition hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] hover:scale-[1.03] duration-300">EXPLORE LEDGER</a> <a href="#links" class="inline-flex w-full sm:w-auto justify-center items-center gap-2 terminal-border-single px-5 py-2.5 text-xs font-semibold bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] hover:scale-[1.03] transition-all duration-300">OPEN COMMUNICATIONS</a></div></div> <div class="border-t md:border-t-0 md:border-l border-[var(--border-muted)] pt-6 md:pt-0 md:pl-8 space-y-4"><h3 class="text-xs uppercase text-[var(--text-secondary)] opacity-50 tracking-wider">ARCHIVE INDEX DATA</h3> <div class="space-y-3"></div></div></div></section> <section id="projects" class="space-y-6 pt-4"><div class="border-b border-[var(--border-muted)] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-4"><div><h3 class="text-xs uppercase text-[var(--text-secondary)] opacity-40 tracking-wider">REPOSITORY DOSSIERS</h3> <h2 class="text-xl font-bold uppercase tracking-widest mt-1">ACTIVE CONSTELLATION</h2></div> <p class="text-xs text-[var(--text-secondary)] opacity-50 max-w-md text-left sm:text-right"> <!>. PRESS A NODE FILTER TO NARROW TRANSMISSIONS.</p></div> <div class="flex flex-wrap gap-2"></div> <!> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div></section> <section class="grid gap-6 md:grid-cols-2 pt-4"><div class="terminal-border-single p-6 bg-[var(--bg-surface)]/95 space-y-4 hover:border-[var(--border-primary)] transition-all duration-300"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[SYS_LOG]</span> <h3 class="text-sm font-bold uppercase tracking-wider">TRANSMISSIONS</h3></div> <div class="space-y-3"></div></div> <div id="links" class="terminal-border-single p-6 bg-[var(--bg-surface)]/95 space-y-4 flex flex-col hover:border-[var(--border-primary)] transition-all duration-300"><div class="flex items-center gap-2 border-b border-[var(--border-muted)] pb-3"><span class="text-[var(--text-secondary)] opacity-40 text-xs">[NET_PORT]</span> <h3 class="text-sm font-bold uppercase tracking-wider">NET ROUTING SIGNALS</h3></div> <div class="grid gap-2 flex-1 content-center"></div></div></section></main>`),$i=q(`<div class="min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] relative font-mono selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] transition-colors duration-500"><!> <!> <!> <div class="relative z-10 px-6 py-8 md:px-12 md:py-12 max-w-7xl mx-auto"><div class="absolute inset-0 noise opacity-20 pointer-events-none"></div> <header class="border-b border-[var(--border-muted)] pb-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10"><div><div class="flex items-center gap-2"><span class="font-mono text-xs transition-colors text-[var(--text-secondary)] opacity-40 break-all">ARCHIVE: // MOHAMED_ALAA_ANUBISX404</span> <span class="inline-block w-2 h-3 blink bg-[var(--text-primary)]"></span></div> <p class="text-lg font-bold uppercase tracking-widest mt-1 text-glow"><button type="button" title="Return to the ledger" class="text-left cursor-pointer hover:opacity-70 transition-opacity duration-300">Mohamed Alaa — Anubisx404</button></p></div> <div class="flex flex-wrap gap-2"><button class="terminal-border-single px-3 py-1 text-xs hover:border-[var(--border-primary)] transition-all duration-300 uppercase text-[var(--text-secondary)] bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"> </button> <span class="terminal-border-single px-3 py-1 text-xs text-[var(--text-secondary)] opacity-60 bg-[var(--bg-surface)] hover:border-[var(--border-primary)] transition-colors duration-300">SEC_LOCK: OK</span> <span class="terminal-border-single px-3 py-1 text-xs text-[var(--text-secondary)] opacity-60 bg-[var(--bg-surface)] hover:border-[var(--border-primary)] transition-colors duration-300">STATION: REC_ACTIVE</span></div></header> <!> <footer class="border-t border-[var(--border-muted)] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-secondary)] opacity-40 relative z-10"><p>SYSTEM CODE SIGNATURE: // MOHAMED_ALAA // COMPILER_SVELTE_5</p> <div class="flex gap-4"><a href="https://github.com/Anubisx404" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors duration-300">GITHUB</a> <a href="https://www.linkedin.com/in/mohamed-alaa-231b972" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--text-primary)] transition-colors duration-300">LINKEDIN</a> <a href="mailto:mohamedalaaeco@gmail.com" class="hover:text-[var(--text-primary)] transition-colors duration-300">EMAIL</a></div></footer></div></div>`);function ea(e,t){Pe(t,!0);let n=[{title:`Documenting security research defensively`,date:`MAY 2026`,excerpt:`How to keep an offensive-tradecraft knowledge base structured and defensible — and why the most useful output is the writeup, not the tool.`},{title:`Simulating quantum eavesdropping with BB84`,date:`APR 2026`,excerpt:`How the BB84 simulator detects Eve's interference through QBER analysis and why it matters for post-quantum cryptography.`},{title:`Fourier optics as a visual teaching tool`,date:`MAR 2026`,excerpt:`Using diffraction simulations and frequency-domain analysis to make abstract physics concepts tangible and interactive.`}],r=St(()=>[{label:`Constellation size`,value:`${Kr.length} Projects`},{label:`Public Repositories`,value:`${Xr} Open Source`},{label:`Core Platforms`,value:`C#/.NET, TS, Go, Python`},{label:`Archive Status`,value:`Online (Hardened)`}]),i=L(`All`),a=L(!1),o=L(null),s=[`All`,...Jr],c=St(()=>K(i)===`All`?Kr:Kr.filter(e=>e.type===K(i))),l=St(()=>K(i)===`Cybersecurity`),u=[{label:`GitHub Port`,href:`https://github.com/Anubisx404`},{label:`LinkedIn Port`,href:`https://www.linkedin.com/in/mohamed-alaa-231b972`},{label:`Email Route`,href:`mailto:mohamedalaaeco@gmail.com`}],d=Rt(Kr.map(e=>e.title)),f=Rt(u.map(e=>e.label));an(()=>ti(e=>{R(o,e,!0),e&&(window.scrollTo({top:0}),K(i)!==`All`&&R(i,`All`))}));function p(e){yi(Kr[e].title,t=>{d[e]=t})}function m(e){d[e]=Kr[e].title}function h(e){yi(u[e].label,t=>{f[e]=t})}function g(e){f[e]=u[e].label}function _(){R(a,!K(a)),K(a)?document.documentElement.classList.add(`light-mode`):document.documentElement.classList.remove(`light-mode`)}var v=$i(),y=z(v);ai(y,{get lightMode(){return K(a)}});var b=B(y,2);si(b,{});var x=B(b,2);vi(x,{get lightMode(){return K(a)}});var S=B(x,2),C=B(z(S),2),w=z(C),T=B(z(w),2),ee=z(T);M(T),M(w);var E=B(w,2),te=z(E),D=z(te);M(te),Te(4),M(E),M(C);var ne=B(C,2),re=e=>{var t=Ui();Hi(z(t),{get project(){return K(o)},get onback(){return ri}}),M(t),J(e,t)},O=e=>{var t=Qi(),a=z(t),o=z(a),_=B(z(o),2),v=B(z(_),2);Z(v,21,()=>K(r),X,(e,t)=>{var n=Wi(),r=z(n),i=z(r);M(r);var a=B(r,2),o=z(a,!0);M(a),M(n),V(()=>{Y(i,`${K(t).label??``}:`),Y(o,K(t).value)}),J(e,n)}),M(v),M(_),M(o),M(a);var y=B(a,2),b=z(y),x=B(z(b),2),S=z(x),C=B(S),w=e=>{J(e,ur(`· 1 RESTRICTED`))};_r(C,e=>{K(i)===`Cybersecurity`&&e(w)}),Te(),M(x),M(b);var T=B(b,2);Z(T,21,()=>s,X,(e,t)=>{var n=Gi(),r=z(n);M(n),V(e=>{Q(n,1,`terminal-border-single px-4 py-2 text-xs font-mono transition ${K(i)===K(t)?`bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold`:`bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]`} hover:scale-[1.05] duration-300`),Y(r,`[${e??``}]`)},[()=>K(t).toUpperCase()]),nr(`click`,n,()=>R(i,K(t),!0)),J(e,n)}),M(T);var ee=B(T,2),E=e=>{var t=qi(),n=z(t),r=z(n),i=z(r,!0);M(r),Te(2),M(n);var a=B(n,2),o=z(a),s=z(o,!0);M(o);var c=B(o,2),l=z(c,!0);M(c);var u=B(c,2);Z(u,21,()=>qr.tags,X,(e,t)=>{var n=Ki(),r=z(n,!0);M(n),V(()=>Y(r,K(t))),J(e,n)}),M(u),M(a),M(t),V(()=>{Y(i,qr.type),Y(s,qr.title),Y(l,qr.description)}),J(e,t)};_r(ee,e=>{K(l)&&e(E)});var te=B(ee,2);Z(te,21,()=>K(c),X,(e,t)=>{let n=St(()=>Kr.findIndex(e=>e.slug===K(t).slug));var r=Yi(),i=z(r),a=z(i),o=z(a);M(a),M(i);var s=B(i,2),c=z(s),l=z(c),u=z(l,!0);M(l),Te(2),M(c);var f=B(c,2),h=z(f,!0);M(f);var g=B(f,2),_=z(g,!0);M(g);var v=B(g,2);Z(v,21,()=>K(t).tags,X,(e,t)=>{var n=Ji(),r=z(n,!0);M(n),V(()=>Y(r,K(t))),J(e,n)}),M(v),M(s);var y=B(s,2),b=z(y),x=z(b,!0);M(b),Te(2),M(y),M(r),V(()=>{Y(o,`Open dossier: ${K(t).title??``}`),Y(u,K(t).type),Y(h,d[K(n)]),Y(_,K(t).description),Q(b,1,`text-[9px] uppercase ${K(t).repo.public?`text-[var(--text-primary)] opacity-70`:`text-[var(--text-secondary)] opacity-35`}`),Y(x,K(t).repo.public?`[public]`:`[private]`)}),tr(`mouseenter`,r,()=>p(K(n))),tr(`mouseleave`,r,()=>m(K(n))),nr(`click`,i,()=>ni(K(t).slug)),J(e,r)}),M(te),M(y);var D=B(y,2),ne=z(D),re=B(z(ne),2);Z(re,21,()=>n,X,(e,t)=>{var n=Xi(),r=z(n),i=z(r),a=z(i,!0);M(i);var o=B(i,2),s=z(o,!0);M(o),M(r);var c=B(r,2),l=z(c,!0);M(c),M(n),V(()=>{Y(a,K(t).title),Y(s,K(t).date),Y(l,K(t).excerpt)}),J(e,n)}),M(re),M(ne);var O=B(ne,2),ie=B(z(O),2);Z(ie,21,()=>u,X,(e,t,n)=>{var r=Zi(),i=z(r),a=z(i,!0);M(i),Te(2),M(r),V(()=>{Ir(r,`href`,K(t).href),Y(a,f[n])}),tr(`mouseenter`,r,()=>h(n)),tr(`mouseleave`,r,()=>g(n)),J(e,r)}),M(ie),M(O),M(D),M(t),V(()=>Y(S,`DISPLAYING ${K(c).length??``} OF ${Kr.length??``} DOSSIERS `)),J(e,t)};_r(ne,e=>{K(o)?e(re):e(O,-1)}),Te(2),M(S),M(v),V(()=>Y(D,`THEME: ${K(a)?`PAPER_WHITE`:`MONO_DARK`}`)),nr(`click`,ee,()=>ri()),nr(`click`,te,_),J(e,v),Fe()}rr([`click`]),fr(ea,{target:document.getElementById(`app`)});export{Di as t};