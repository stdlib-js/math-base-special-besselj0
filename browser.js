// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Math.sqrt,n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&u&&u.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return v.call(r);t=r[b],i=b,n=null!=(o=r)&&s.call(o,i);try{r[b]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[b]=t:delete r[b],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=y,U="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var N,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=N,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M={uint16:F,uint8:T};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,k=new I(1),x=new h(k.buffer);function Y(r){return k[0]=r,x[W]}var q,C,z=!0===V?0:1,B=new I(1),D=new h(B.buffer);!0===V?(q=1,C=0):(q=0,C=1);var J={HIGH:q,LOW:C},K=new I(1),Q=new h(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,n){return Q[R]=r,Q[X]=n,K[0]}var $,rr,nr=Math.floor,tr=Number.POSITIVE_INFINITY,er=Number.NEGATIVE_INFINITY;function or(r){return r!=r}function ir(r){return r===tr||r===er}!0===V?($=1,rr=0):($=0,rr=1);var ur={HIGH:$,LOW:rr},fr=new I(1),ar=new h(fr.buffer),cr=ur.HIGH,lr=ur.LOW;function yr(r,n,t,e){return fr[0]=r,n[e]=ar[cr],n[e+t]=ar[lr],n}function pr(r){return yr(r,[0,0],1,0)}l(pr,"assign",yr);var vr=[0,0];function sr(r,n,t,e){return or(r)||ir(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return sr(r,[0,0],1,0)}),"assign",sr);var br=[0,0],dr=[0,0];function wr(r,n){var t,e,o,i,u,f;return 0===n||0===r||or(r)||ir(r)?r:(sr(r,br,1,0),n+=br[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-1023|0}(r=br[0]),n<-1074?(o=0,i=r,pr.assign(o,vr,1,0),u=vr[0],u&=2147483647,f=Y(i),Z(u|=f&=2147483648,vr[1])):n>1023?r<0?er:tr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pr.assign(r,dr,1,0),t=dr[0],t&=2148532223,e*Z(t|=n+1023<<20,dr[1])))}function Ar(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var _r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hr=16777216,Ur=5.960464477539063e-8,gr=Ar(20),jr=Ar(20),Nr=Ar(20),Ir=Ar(20);function Or(r,n,t,e,o,i,u,f,a){var c,l,y,p,v,s,b,d,w;for(p=i,w=e[t],d=t,v=0;d>0;v++)l=Ur*w|0,Ir[v]=w-hr*l|0,w=e[d-1]+l,d-=1;if(w=wr(w,o),w-=8*nr(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Ir[t-1]>>24-o,Ir[t-1]-=v<<24-o,y=Ir[t-1]>>23-o):0===o?y=Ir[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<t;v++)d=Ir[v],0===c?0!==d&&(c=1,Ir[v]=16777216-d):Ir[v]=16777215-d;if(o>0)switch(o){case 1:Ir[t-1]&=8388607;break;case 2:Ir[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=wr(1,o)))}if(0===w){for(d=0,v=t-1;v>=i;v--)d|=Ir[v];if(0===d){for(s=1;0===Ir[i-s];s++);for(v=t+1;v<=t+s;v++){for(a[f+v]=_r[u+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Or(r,n,t+=s,e,o,i,u,f,a)}}if(0===w)for(t-=1,o-=24;0===Ir[t];)t-=1,o-=24;else(w=wr(w,-o))>=hr?(l=Ur*w|0,Ir[t]=w-hr*l|0,o+=24,Ir[t+=1]=l):Ir[t]=0|w;for(l=wr(1,o),v=t;v>=0;v--)e[v]=l*Ir[v],l*=Ur;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=mr[s]*e[v+s];Nr[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Nr[v];for(n[0]=0===y?l:-l,l=Nr[0]-l,v=1;v<=t;v++)l+=Nr[v];return n[1]=0===y?l:-l,7&b}function Sr(r,n,t,e){var o,i,u,f,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(u=e-1),l=u+4,a=0;a<=l;a++)gr[a]=c<0?0:_r[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*gr[u+(a-c)];jr[a]=o}return Or(r,n,4,jr,f,4,i,u,gr)}var Er=Math.round;function Fr(r,n,t){var e,o,i,u,f;return i=r-1.5707963267341256*(e=Er(.6366197723675814*r)),u=6077100506506192e-26*e,f=n>>20|0,t[0]=i-u,f-(Y(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),t[0]=i-u,f-(Y(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),t[0]=i-u)),t[1]=i-t[0]-u,e}var Tr=1.5707963267341256,Hr=6077100506506192e-26,Gr=2*Hr,Pr=3*Hr,Lr=4*Hr,Mr=[0,0,0],Vr=[0,0];function Wr(r,n){var t,e,o,i,u,f,a;if((o=2147483647&Y(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fr(r,o,n):o<=1073928572?r>0?(a=r-Tr,n[0]=a-Hr,n[1]=a-n[0]-Hr,1):(a=r+Tr,n[0]=a+Hr,n[1]=a-n[0]+Hr,-1):r>0?(a=r-2*Tr,n[0]=a-Gr,n[1]=a-n[0]-Gr,2):(a=r+2*Tr,n[0]=a+Gr,n[1]=a-n[0]+Gr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fr(r,o,n):r>0?(a=r-3*Tr,n[0]=a-Pr,n[1]=a-n[0]-Pr,3):(a=r+3*Tr,n[0]=a+Pr,n[1]=a-n[0]+Pr,-3):1075388923===o?Fr(r,o,n):r>0?(a=r-4*Tr,n[0]=a-Lr,n[1]=a-n[0]-Lr,4):(a=r+4*Tr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-4);if(o<1094263291)return Fr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return B[0]=r,D[z]}(r),a=Z(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Mr[u]=0|a,a=16777216*(a-Mr[u]);for(Mr[2]=a,i=3;0===Mr[i-1];)i-=1;return f=Sr(Mr,Vr,e,i),r<0?(n[0]=-Vr[0],n[1]=-Vr[1],-f):(n[0]=Vr[0],n[1]=Vr[1],f)}var kr=-.16666666666666632;function xr(r,n,t,e,o){var i,u,f,a,c;return u=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,t[o]=0===n?r+f*(kr+c*u):r-(c*(.5*n-f*u)-n-f*kr),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(i=.5*c),t[o+e]=a+(1-a-i+(c*u-r*n)),t}var Yr=[0,0];function qr(r,n,t,e){var o,i;if(o=Y(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),xr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(i=Wr(r,Yr),xr(Yr[0],Yr[1],n,t,e),3&i){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}l((function(r){return qr(r,[0,0],1,0)}),"assign",qr);var Cr=[0,0];return function(n){var t,e,o,i,u,f;return n<0&&(n=-n),n===tr?0:0===n?1:n<=4?(i=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)}(u=n*n),(f=(n+2.404825557695773)*(n-2.40625- -.0014244423042272315))*i):n<=8?(i=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)}(u=1-n*n/64),(f=(n+5.520078110286311)*(n-1413/256-.0005468602863106496))*i):(t=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(o=(u=8/n)*u),e=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(o),f=.5641895835477563/r(n),qr(n,Cr,1,0),f*(t*(Cr[1]+Cr[0])-u*e*(Cr[0]-Cr[1])))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).j0=n();
//# sourceMappingURL=browser.js.map