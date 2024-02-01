// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.sqrt,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,y=String.prototype.replace,v=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function A(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=y.call(t,m,"$1e"),t=y.call(t,b,"e"),t=y.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=y.call(t,v,"e+0$1"),t=y.call(t,g,"e-0$1"),r.alternate&&(t=y.call(t,d,"$1."),t=y.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):l.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var U=String.fromCharCode,I=isNaN,S=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,i,o,c,s,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,I(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):U(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",s+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function T(r){return"string"==typeof r}function O(r){var e,t,n;if(!T(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return N.apply(null,t)}var V=Object.prototype,$=V.toString,G=V.__defineGetter__,H=V.__defineSetter__,W=V.__lookupGetter__,C=V.__lookupSetter__;var L=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(r,e,t.get),o&&H&&H.call(r,e,t.set),r};function P(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var M=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[Y],a=Y,e=null!=(i=r)&&Z.call(i,a);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null;var D,J="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(z&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null;var er,tr="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr=er,ir="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null;var or,cr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),t=e,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var ur=or,fr="function"==typeof Uint16Array;var sr="function"==typeof Uint16Array?Uint16Array:null;var lr,pr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(fr&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,vr={uint16:lr,uint8:ur};(yr=new vr.uint16(1))[0]=4660;var gr=52===new vr.uint8(yr.buffer)[0],dr=!0===gr?1:0,hr=new nr(1),wr=new K(hr.buffer);function br(r){return hr[0]=r,wr[dr]}var mr,Ar,_r=!0===gr?0:1,Er=new nr(1),Ur=new K(Er.buffer);!0===gr?(mr=1,Ar=0):(mr=0,Ar=1);var Ir={HIGH:mr,LOW:Ar},Sr=new nr(1),kr=new K(Sr.buffer),Nr=Ir.HIGH,xr=Ir.LOW;function Fr(r,e){return kr[Nr]=r,kr[xr]=e,Sr[0]}var jr=Math.floor,Tr=Number.POSITIVE_INFINITY,Or=Number.NEGATIVE_INFINITY;function Vr(r){return r!=r}function $r(r){return r===Tr||r===Or}var Gr,Hr;!0===gr?(Gr=1,Hr=0):(Gr=0,Hr=1);var Wr={HIGH:Gr,LOW:Hr},Cr=new nr(1),Lr=new K(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Mr(r,e,t,n){return Cr[0]=r,e[n]=Lr[Pr],e[n+t]=Lr[Rr],e}function Zr(r){return Mr(r,[0,0],1,0)}P(Zr,"assign",Mr);var Xr=[0,0];function Yr(r,e,t,n){return Vr(r)||$r(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}P((function(r){return Yr(r,[0,0],1,0)}),"assign",Yr);var qr=[0,0],zr=[0,0];function Br(r,e){var t,n,i,a,o,c;return 0===e||0===r||Vr(r)||$r(r)?r:(Yr(r,qr,1,0),e+=qr[1],e+=function(r){var e=br(r);return(e=(2146435072&e)>>>20)-1023|0}(r=qr[0]),e<-1074?(i=0,a=r,Zr.assign(i,Xr,1,0),o=Xr[0],o&=2147483647,c=br(a),Fr(o|=c&=2147483648,Xr[1])):e>1023?r<0?Or:Tr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Zr.assign(r,zr,1,0),t=zr[0],t&=2148532223,n*Fr(t|=e+1023<<20,zr[1])))}function Dr(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Kr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Qr=5.960464477539063e-8,re=Dr(20),ee=Dr(20),te=Dr(20),ne=Dr(20);function ie(r,e,t,n,i,a,o,c,u){var f,s,l,p,y,v,g,d,h;for(p=a,h=n[t],d=t,y=0;d>0;y++)s=Qr*h|0,ne[y]=h-16777216*s|0,h=n[d-1]+s,d-=1;if(h=Br(h,i),h-=8*jr(.125*h),h-=g=0|h,l=0,i>0?(g+=y=ne[t-1]>>24-i,ne[t-1]-=y<<24-i,l=ne[t-1]>>23-i):0===i?l=ne[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,y=0;y<t;y++)d=ne[y],0===f?0!==d&&(f=1,ne[y]=16777216-d):ne[y]=16777215-d;if(i>0)switch(i){case 1:ne[t-1]&=8388607;break;case 2:ne[t-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=Br(1,i)))}if(0===h){for(d=0,y=t-1;y>=a;y--)d|=ne[y];if(0===d){for(v=1;0===ne[a-v];v++);for(y=t+1;y<=t+v;y++){for(u[c+y]=Jr[o+y],s=0,d=0;d<=c;d++)s+=r[d]*u[c+(y-d)];n[y]=s}return ie(r,e,t+=v,n,i,a,o,c,u)}}if(0===h)for(t-=1,i-=24;0===ne[t];)t-=1,i-=24;else(h=Br(h,-i))>=16777216?(s=Qr*h|0,ne[t]=h-16777216*s|0,i+=24,ne[t+=1]=s):ne[t]=0|h;for(s=Br(1,i),y=t;y>=0;y--)n[y]=s*ne[y],s*=Qr;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=Kr[v]*n[y+v];te[t-y]=s}for(s=0,y=t;y>=0;y--)s+=te[y];for(e[0]=0===l?s:-s,s=te[0]-s,y=1;y<=t;y++)s+=te[y];return e[1]=0===l?s:-s,7&g}function ae(r,e,t,n){var i,a,o,c,u,f,s;for(4,(a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),f=a-(o=n-1),s=o+4,u=0;u<=s;u++)re[u]=f<0?0:Jr[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*re[o+(u-f)];ee[u]=i}return 4,ie(r,e,4,ee,c,4,a,o,re)}var oe=Math.round;function ce(r,e,t){var n,i,a,o,c;return a=r-1.5707963267341256*(n=oe(.6366197723675814*r)),o=6077100506506192e-26*n,c=e>>20|0,t[0]=a-o,c-(br(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,c-(br(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var ue=1.5707963267341256,fe=6077100506506192e-26,se=2*fe,le=4*fe,pe=[0,0,0],ye=[0,0];function ve(r,e){var t,n,i,a,o,c,u;if((i=2147483647&br(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ce(r,i,e):i<=1073928572?r>0?(u=r-ue,e[0]=u-fe,e[1]=u-e[0]-fe,1):(u=r+ue,e[0]=u+fe,e[1]=u-e[0]+fe,-1):r>0?(u=r-2*ue,e[0]=u-se,e[1]=u-e[0]-se,2):(u=r+2*ue,e[0]=u+se,e[1]=u-e[0]+se,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ce(r,i,e):r>0?(u=r-3*ue,e[0]=u-1.8231301519518578e-10,e[1]=u-e[0]-1.8231301519518578e-10,3):(u=r+3*ue,e[0]=u+1.8231301519518578e-10,e[1]=u-e[0]+1.8231301519518578e-10,-3):1075388923===i?ce(r,i,e):r>0?(u=r-4*ue,e[0]=u-le,e[1]=u-e[0]-le,4):(u=r+4*ue,e[0]=u+le,e[1]=u-e[0]+le,-4);if(i<1094263291)return ce(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Er[0]=r,Ur[_r]}(r),u=Fr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)pe[o]=0|u,u=16777216*(u-pe[o]);for(pe[2]=u,a=3;0===pe[a-1];)a-=1;return c=ae(pe,ye,n,a),r<0?(e[0]=-ye[0],e[1]=-ye[1],-c):(e[0]=ye[0],e[1]=ye[1],c)}var ge=-.16666666666666632;function de(r,e,t,n,i){var a,o,c,u,f;return o=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(u=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),c=f*r,t[i]=0===e?r+c*(ge+f*o):r-(f*(.5*e-c*o)-e-c*ge),o=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),o+=u*u*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),u=1-(a=.5*f),t[i+n]=u+(1-u-a+(f*o-r*e)),t}var he=[0,0];function we(r,e,t,n){var i,a;if(i=br(r),(i&=2147483647)<=1072243195)return i<1044381696&&0==(0|r)&&(e[n]=r,e[n+t]=0),de(r,0,e,t,n);if(i>=2146435072)return e[n]=NaN,e[n+t]=NaN,e;switch(a=ve(r,he),de(he[0],he[1],e,t,n),3&a){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}P((function(r){return we(r,[0,0],1,0)}),"assign",we);var be=[0,0];function me(e){var t,n,i,a,o,c;return e<0&&(e=-e),e===Tr?0:0===e?1:e<=4?(a=function(r){var e,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(e=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(e=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),e/t)}(o=e*e),(c=(e+2.404825557695773)*(e-2.40625- -.0014244423042272315))*a):e<=8?(a=function(r){var e,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(e=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(e=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),e/t)}(o=1-e*e/64),(c=(e+5.520078110286311)*(e-1413/256-.0005468602863106496))*a):(t=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(e=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),e/t)}(i=(o=8/e)*o),n=function(r){var e,t;return 0===r?-.015625:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(e=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),e/t)}(i),c=.5641895835477563/r(e),we(e,be,1,0),c*(t*(be[1]+be[0])-o*n*(be[0]-be[1])))}export{me as default};
//# sourceMappingURL=mod.js.map
