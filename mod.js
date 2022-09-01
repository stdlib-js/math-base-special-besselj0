// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.sqrt;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var f=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,f,u,a,i;if(null==r)return t.call(r);f=r[o],i=o,n=null!=(a=r)&&e.call(a,i);try{r[o]=void 0}catch(n){return t.call(r)}return u=t.call(r),n?r[o]=f:delete r[o],u}:function(r){return t.call(r)},u="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var i,c="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?c:function(){throw new Error("not implemented")};var y=i,v="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var p,A="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var w=p,b="function"==typeof Uint8Array;var U="function"==typeof Uint8Array?Uint8Array:null;var h,s="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,256,257]),t=n,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var m=h,N="function"==typeof Uint16Array;var d="function"==typeof Uint16Array?Uint16Array:null;var I,F="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,65536,65537]),t=n,r=(N&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var S,g={uint16:I,uint8:m};(S=new g.uint16(1))[0]=4660;var H=52===new g.uint8(S.buffer)[0],O=!0===H?1:0,E=new w(1),j=new y(E.buffer);function T(r){return E[0]=r,j[O]}var G,L,M=!0===H?0:1,W=new w(1),P=new y(W.buffer);!0===H?(G=1,L=0):(G=0,L=1);var V={HIGH:G,LOW:L},Y=new w(1),_=new y(Y.buffer),k=V.HIGH,q=V.LOW;function x(r,n){return _[k]=r,_[q]=n,Y[0]}var z,B,C=Math.floor,D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r!=r}function Q(r){return r===D||r===J}!0===H?(z=1,B=0):(z=0,B=1);var R={HIGH:z,LOW:B},X=new w(1),Z=new y(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n){return X[0]=n,r[0]=Z[$],r[1]=Z[rr],r}function tr(r,n){return 1===arguments.length?nr([0,0],r):nr(r,n)}var er=[0,0];function or(r,n){return K(n)||Q(n)?(r[0]=n,r[1]=0,r):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var fr=[0,0],ur=[0,0];function ar(r,n){var t,e,o,f,u;return 0===n||0===r||K(r)||Q(r)?r:(function(r,n){1===arguments.length?or([0,0],r):or(r,n)}(fr,r),n+=fr[1],n+=function(r){var n=T(r);return(n=(2146435072&n)>>>20)-1023|0}(r=fr[0]),n<-1074?(o=r,tr(er,0),f=er[0],f&=2147483647,u=T(o),x(f|=u&=2147483648,er[1])):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr(ur,r),t=ur[0],t&=2148532223,e*x(t|=n+1023<<20,ur[1])))}function ir(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var cr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],vr=5.960464477539063e-8,lr=ir(20),pr=ir(20),Ar=ir(20),wr=ir(20);function br(r,n,t,e,o,f,u,a,i){var c,y,v,l,p,A,w,b,U;for(l=f,U=e[t],b=t,p=0;b>0;p++)y=vr*U|0,wr[p]=U-16777216*y|0,U=e[b-1]+y,b-=1;if(U=ar(U,o),U-=8*C(.125*U),U-=w=0|U,v=0,o>0?(w+=p=wr[t-1]>>24-o,wr[t-1]-=p<<24-o,v=wr[t-1]>>23-o):0===o?v=wr[t-1]>>23:U>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<t;p++)b=wr[p],0===c?0!==b&&(c=1,wr[p]=16777216-b):wr[p]=16777215-b;if(o>0)switch(o){case 1:wr[t-1]&=8388607;break;case 2:wr[t-1]&=4194303}2===v&&(U=1-U,0!==c&&(U-=ar(1,o)))}if(0===U){for(b=0,p=t-1;p>=f;p--)b|=wr[p];if(0===b){for(A=1;0===wr[f-A];A++);for(p=t+1;p<=t+A;p++){for(i[a+p]=cr[u+p],y=0,b=0;b<=a;b++)y+=r[b]*i[a+(p-b)];e[p]=y}return br(r,n,t+=A,e,o,f,u,a,i)}}if(0===U)for(t-=1,o-=24;0===wr[t];)t-=1,o-=24;else(U=ar(U,-o))>=16777216?(y=vr*U|0,wr[t]=U-16777216*y|0,o+=24,wr[t+=1]=y):wr[t]=0|U;for(y=ar(1,o),p=t;p>=0;p--)e[p]=y*wr[p],y*=vr;for(p=t;p>=0;p--){for(y=0,A=0;A<=l&&A<=t-p;A++)y+=yr[A]*e[p+A];Ar[t-p]=y}for(y=0,p=t;p>=0;p--)y+=Ar[p];for(n[0]=0===v?y:-y,y=Ar[0]-y,p=1;p<=t;p++)y+=Ar[p];return n[1]=0===v?y:-y,7&w}function Ur(r,n,t,e){var o,f,u,a,i,c,y;for(4,(f=(t-3)/24|0)<0&&(f=0),a=t-24*(f+1),c=f-(u=e-1),y=u+4,i=0;i<=y;i++)lr[i]=c<0?0:cr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=u;c++)o+=r[c]*lr[u+(i-c)];pr[i]=o}return 4,br(r,n,4,pr,a,4,f,u,lr)}var hr=Math.round;function sr(r,n,t){var e,o,f,u,a;return f=r-1.5707963267341256*(e=hr(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=f-u,a-(T(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,a-(T(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e}var mr=1.5707963267341256,Nr=6077100506506192e-26,dr=2*Nr,Ir=4*Nr,Fr=[0,0,0],Sr=[0,0];function gr(r,n){var t,e,o,f,u,a,i;if((o=2147483647&T(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?sr(r,o,n):o<=1073928572?r>0?(i=r-mr,n[0]=i-Nr,n[1]=i-n[0]-Nr,1):(i=r+mr,n[0]=i+Nr,n[1]=i-n[0]+Nr,-1):r>0?(i=r-2*mr,n[0]=i-dr,n[1]=i-n[0]-dr,2):(i=r+2*mr,n[0]=i+dr,n[1]=i-n[0]+dr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?sr(r,o,n):r>0?(i=r-3*mr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*mr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?sr(r,o,n):r>0?(i=r-4*mr,n[0]=i-Ir,n[1]=i-n[0]-Ir,4):(i=r+4*mr,n[0]=i+Ir,n[1]=i-n[0]+Ir,-4);if(o<1094263291)return sr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return W[0]=r,P[M]}(r),i=x(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Fr[u]=0|i,i=16777216*(i-Fr[u]);for(Fr[2]=i,f=3;0===Fr[f-1];)f-=1;return a=Ur(Fr,Sr,e,f),r<0?(n[0]=-Sr[0],n[1]=-Sr[1],-a):(n[0]=Sr[0],n[1]=Sr[1],a)}var Hr=-.16666666666666632;function Or(r,n,t){var e,o,f,u,a;return o=.00833333333332249+(a=n*n)*(27557313707070068e-22*a-.0001984126982985795)+a*(u=a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),f=a*n,r[0]=0===t?n+f*(Hr+a*o):n-(a*(.5*t-f*o)-t-f*Hr),o=a*(.0416666666666666+a*(2480158728947673e-20*a-.001388888888887411)),o+=u*u*(a*(2.087572321298175e-9+-11359647557788195e-27*a)-2.7557314351390663e-7),u=1-(e=.5*a),r[1]=u+(1-u-e+(a*o-n*t)),r}var Er=[0,0];function jr(r,n){var t,e;if(t=T(n),(t&=2147483647)<=1072243195)return t<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),Or(r,n,0);if(t>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=gr(n,Er),Or(r,Er[0],Er[1]),3&e){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}}var Tr=[0,0];function Gr(n){var t,e,o,f,u,a;return n<0&&(n=-n),n===D?0:0===n?1:n<=4?(f=function(r){var n,t;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(n=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,t=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(n=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,t=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),n/t)}(u=n*n),(a=(n+2.404825557695773)*(n-2.40625- -.0014244423042272315))*f):n<=8?(f=function(r){var n,t;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(n=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,t=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),t=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/t)}(u=1-n*n/64),(a=(n+5.520078110286311)*(n-1413/256-.0005468602863106496))*f):(t=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),t=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(n=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),t=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),n/t)}(o=(u=8/n)*u),e=function(r){var n,t;return 0===r?-.015625:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,t=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(n=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,t=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),n/t)}(o),a=.5641895835477563/r(n),function(r,n){1===arguments.length?jr([0,0],r):jr(r,n)}(Tr,n),a*(t*(Tr[1]+Tr[0])-u*e*(Tr[0]-Tr[1])))}export{Gr as default};
//# sourceMappingURL=mod.js.map
