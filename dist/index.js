"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=v(function(B,f){
function N(r){var e,i,a;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(i=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),a=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,i=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),a=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),i/a)}f.exports=N
});var c=v(function(G,o){
function P(r){var e,i,a;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(i=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),a=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,i=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),a=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),i/a)}o.exports=P
});var q=v(function(H,p){
function S(r){var e,i,a;return r===0?1:(r<0?e=-r:e=r,e<=1?(i=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),a=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,i=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),a=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),i/a)}p.exports=S
});var I=v(function(J,y){
function g(r){var e,i,a;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(i=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),a=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,i=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),a=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),i/a)}y.exports=g
});var j=v(function(K,_){
var C=require('@stdlib/math-base-special-sqrt/dist'),D=require('@stdlib/math-base-special-sincos/dist').assign,E=require('@stdlib/constants-float64-pinf/dist'),F=l(),O=c(),Q=q(),R=I(),T=.5641895835477563,V=2.404825557695773,b=5.520078110286311,d=616,h=-.0014244423042272315,k=1413,m=.0005468602863106496,u=[0,0];function w(r){var e,i,a,n,s,t;return r<0&&(r=-r),r===E?0:r===0?1:r<=4?(s=r*r,n=F(s),t=(r+V)*(r-d/256-h),t*n):r<=8?(s=1-r*r/64,n=O(s),t=(r+b)*(r-k/256-m),t*n):(s=8/r,a=s*s,e=Q(a),i=R(a),t=T/C(r),D(r,u,1,0),t*(e*(u[1]+u[0])-s*i*(u[0]-u[1])))}_.exports=w
});var z=j();module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
