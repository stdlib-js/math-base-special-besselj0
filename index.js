// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Math.sqrt,e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function f(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function U(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,i,o,c,u,s,l,p,y,g,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",u=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,U(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+A(d):A(d)+p)),c+=n.arg||"",u+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var N=Object.prototype,T=N.toString,O=N.__defineGetter__,V=N.__defineSetter__,$=N.__lookupGetter__,G=N.__lookupSetter__,H=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function W(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C,L=2147483647,P=2146435072,R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),M=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[Y],a=Y,e=null!=(i=r)&&Z.call(i,a);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D="function"==typeof Uint32Array?Uint32Array:void 0;C=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(z&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=C,Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0;J=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr,nr=J,ir="function"==typeof Uint8Array,ar="function"==typeof Uint8Array?Uint8Array:null,or="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),t=e,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,fr=tr,ur="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,lr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(ur&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr={uint16:cr,uint8:fr};(pr=new yr.uint16(1))[0]=4660;var gr=52===new yr.uint8(pr.buffer)[0],dr=!0===gr?1:0,hr=new nr(1),vr=new K(hr.buffer);function wr(r){return hr[0]=r,vr[dr]}var br,mr,Ar=1048575,_r=!0===gr?0:1,Er=new nr(1),Ur=new K(Er.buffer);!0===gr?(br=1,mr=0):(br=0,mr=1);var Sr={HIGH:br,LOW:mr},Ir=new nr(1),kr=new K(Ir.buffer),xr=Sr.HIGH,jr=Sr.LOW;function Fr(r,e){return kr[xr]=r,kr[jr]=e,Ir[0]}var Nr=Math.floor,Tr=Number.POSITIVE_INFINITY,Or=Number.NEGATIVE_INFINITY,Vr=1023,$r=1023,Gr=-1023,Hr=-1074;function Wr(r){return r!=r}function Cr(r){return r===Tr||r===Or}var Lr,Pr,Rr=2147483648;!0===gr?(Lr=1,Pr=0):(Lr=0,Pr=1);var Mr={HIGH:Lr,LOW:Pr},Zr=new nr(1),Xr=new K(Zr.buffer),Yr=Mr.HIGH,qr=Mr.LOW;function zr(r,e,t,n){return Zr[0]=r,e[n]=Xr[Yr],e[n+t]=Xr[qr],e}function Br(r){return zr(r,[0,0],1,0)}W(Br,"assign",zr);var Dr=[0,0],Jr=22250738585072014e-324,Kr=4503599627370496;function Qr(r,e,t,n){return Wr(r)||Cr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Jr?(e[n]=r*Kr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=2220446049250313e-31,ee=2148532223,te=[0,0],ne=[0,0];function ie(r,e){var t,n,i,a,o,c;return 0===e||0===r||Wr(r)||Cr(r)?r:(Qr(r,te,1,0),r=te[0],e+=te[1],e+=function(r){var e=wr(r);return(e=(e&P)>>>20)-Vr|0}(r),e<Hr?(i=0,a=r,Br.assign(i,Dr,1,0),o=Dr[0],o&=L,c=wr(a),Fr(o|=c&=Rr,Dr[1])):e>$r?r<0?Or:Tr:(e<=Gr?(e+=52,n=re):n=1,Br.assign(r,ne,1,0),t=ne[0],t&=ee,n*Fr(t|=e+Vr<<20,ne[1])))}function ae(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var oe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ce=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fe=16777216,ue=5.960464477539063e-8,se=ae(20),le=ae(20),pe=ae(20),ye=ae(20);function ge(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,g,d,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=ue*v|0,ye[y]=v-fe*s|0,v=n[h-1]+s,h-=1;if(v=ie(v,i),v-=8*Nr(.125*v),v-=d=0|v,l=0,i>0?(d+=y=ye[t-1]>>24-i,ye[t-1]-=y<<24-i,l=ye[t-1]>>23-i):0===i?l=ye[t-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<t;y++)h=ye[y],0===u?0!==h&&(u=1,ye[y]=16777216-h):ye[y]=16777215-h;if(i>0)switch(i){case 1:ye[t-1]&=8388607;break;case 2:ye[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=ie(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=ye[y];if(0===h){for(g=1;0===ye[a-g];g++);for(y=t+1;y<=t+g;y++){for(f[c+y]=oe[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return ge(r,e,t+=g,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===ye[t];)t-=1,i-=24;else(v=ie(v,-i))>=fe?(s=ue*v|0,ye[t]=v-fe*s|0,i+=24,ye[t+=1]=s):ye[t]=0|v;for(s=ie(1,i),y=t;y>=0;y--)n[y]=s*ye[y],s*=ue;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=ce[g]*n[y+g];pe[t-y]=s}for(s=0,y=t;y>=0;y--)s+=pe[y];for(e[0]=0===l?s:-s,s=pe[0]-s,y=1;y<=t;y++)s+=pe[y];return e[1]=0===l?s:-s,7&d}function de(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)se[f]=u<0?0:oe[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*se[o+(f-u)];le[f]=i}return ge(r,e,4,le,c,4,a,o,se)}var he=Math.round,ve=.6366197723675814,we=1.5707963267341256,be=6077100506506192e-26,me=6077100506303966e-26,Ae=20222662487959506e-37,_e=20222662487111665e-37,Ee=84784276603689e-45,Ue=2047;function Se(r,e,t){var n,i,a,o,c;return a=r-(n=he(r*ve))*we,o=n*be,c=e>>20|0,t[0]=a-o,c-(wr(t[0])>>20&Ue)>16&&(o=n*Ae-((i=a)-(a=i-(o=n*me))-o),t[0]=a-o,c-(wr(t[0])>>20&Ue)>49&&(o=n*Ee-((i=a)-(a=i-(o=n*_e))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ie=0,ke=16777216,xe=1.5707963267341256,je=6077100506506192e-26,Fe=2*je,Ne=3*je,Te=4*je,Oe=598523,Ve=1072243195,$e=1073928572,Ge=1074752122,He=1074977148,We=1075183036,Ce=1075388923,Le=1075594811,Pe=1094263291,Re=[0,0,0],Me=[0,0];function Ze(r,e){var t,n,i,a,o,c,f;if((i=wr(r)&L|0)<=Ve)return e[0]=r,e[1]=0,0;if(i<=Ge)return(i&Ar)===Oe?Se(r,i,e):i<=$e?r>0?(f=r-xe,e[0]=f-je,e[1]=f-e[0]-je,1):(f=r+xe,e[0]=f+je,e[1]=f-e[0]+je,-1):r>0?(f=r-2*xe,e[0]=f-Fe,e[1]=f-e[0]-Fe,2):(f=r+2*xe,e[0]=f+Fe,e[1]=f-e[0]+Fe,-2);if(i<=Le)return i<=We?i===He?Se(r,i,e):r>0?(f=r-3*xe,e[0]=f-Ne,e[1]=f-e[0]-Ne,3):(f=r+3*xe,e[0]=f+Ne,e[1]=f-e[0]+Ne,-3):i===Ce?Se(r,i,e):r>0?(f=r-4*xe,e[0]=f-Te,e[1]=f-e[0]-Te,4):(f=r+4*xe,e[0]=f+Te,e[1]=f-e[0]+Te,-4);if(i<Pe)return Se(r,i,e);if(i>=P)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Er[0]=r,Ur[_r]}(r),f=Fr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Re[o]=0|f,f=(f-Re[o])*ke;for(Re[2]=f,a=3;Re[a-1]===Ie;)a-=1;return c=de(Re,Me,n,a),r<0?(e[0]=-Me[0],e[1]=-Me[1],-c):(e[0]=Me[0],e[1]=Me[1],c)}var Xe=-.16666666666666632,Ye=.00833333333332249,qe=-.0001984126982985795,ze=27557313707070068e-22,Be=-2.5050760253406863e-8,De=1.58969099521155e-10,Je=.0416666666666666,Ke=-.001388888888887411,Qe=2480158728947673e-20,rt=-2.7557314351390663e-7,et=2.087572321298175e-9,tt=-11359647557788195e-27;function nt(r,e,t,n,i){var a,o,c,f,u;return o=Ye+(u=r*r)*(qe+u*ze)+u*(f=u*u)*(Be+u*De),c=u*r,t[i]=0===e?r+c*(Xe+u*o):r-(u*(.5*e-c*o)-e-c*Xe),o=u*(Je+u*(Ke+u*Qe)),o+=f*f*(rt+u*(et+u*tt)),f=1-(a=.5*u),t[i+n]=f+(1-f-a+(u*o-r*e)),t}var it=1072243195,at=1044381696,ot=[0,0];function ct(r,e,t,n){var i,a,o;if(a=wr(r),(a&=L)<=it)return a<at&&0==(0|r)&&(e[n]=r,e[n+t]=0),nt(r,0,e,t,n);if(a>=P)return e[n]=NaN,e[n+t]=NaN,e;switch(o=Ze(r,ot),nt(ot[0],ot[1],e,t,n),3&o){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}W((function(r){return ct(r,[0,0],1,0)}),"assign",ct);var ft=[0,0];return function(e){var t,n,i,a,o,c;return e<0&&(e=-e),e===Tr?0:0===e?1:e<=4?(a=function(r){var e,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(e=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(e=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),e/t)}(o=e*e),(c=(e+2.404825557695773)*(e-2.40625- -.0014244423042272315))*a):e<=8?(a=function(r){var e,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(e=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(e=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),e/t)}(o=1-e*e/64),(c=(e+5.520078110286311)*(e-1413/256-.0005468602863106496))*a):(t=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/t)}(i=(o=8/e)*o),n=function(r){var e,t;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/t)}(i),c=.5641895835477563/r(e),ct(e,ft,1,0),c*(t*(ft[1]+ft[0])-o*n*(ft[0]-ft[1])))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).j0=e();
//# sourceMappingURL=index.js.map
