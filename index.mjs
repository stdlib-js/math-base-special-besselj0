// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.0-esm/index.mjs";import{assign as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.0-esm/index.mjs";var r=[0,0];function e(e){var i,a,o,m,d,c;return e<0&&(e=-e),e===s?0:0===e?1:e<=4?(m=function(t){var n,s;return 0===t?-.17291506903064494:((t<0?-t:t)<=1?(n=t*(27282507878.60594+t*(t*(6630299.79048338+t*(t*(103.44222815443189+-.12117036164593528*t)-36629.81465510709))-621407004.2354012))-412986685009.9087,s=2388378799633.229+t*(26328198300.85965+t*(139850973.72263435+t*(456126.9622421994+t*(936.1402239233771+t*(1+0*t)))))):(n=(t=1/t)*(103.44222815443189+t*(t*(6630299.79048338+t*(t*(27282507878.60594+-412986685009.9087*t)-621407004.2354012))-36629.81465510709))-.12117036164593528,s=0+t*(1+t*(936.1402239233771+t*(456126.9622421994+t*(139850973.72263435+t*(26328198300.85965+2388378799633.229*t)))))),n/s)}(d=e*e),(c=(e+2.404825557695773)*(e-2.40625- -.0014244423042272315))*m):e<=8?(m=function(t){var n,s;return 0===t?.005119512965174424:((t<0?-t:t)<=1?(n=t*(t*(t*(10341.910641583727+t*(11725.046279757104+t*(4417.670702532509+t*(743.2119668062425+48.5917033559165*t))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,s=t*(245991.0226258631+t*(t*(18680.99000835919+t*(t*(333.07310774649073+t*(1*t-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(n=48.5917033559165+(t=1/t)*(743.2119668062425+t*(4417.670702532509+t*(11725.046279757104+t*(10341.910641583727+t*(t*(-1831.9397969392085*t-12254.07816137899)-7287.970246446462))))),s=1+t*(t*(333.07310774649073+t*(t*(18680.99000835919+t*(t*(245991.0226258631+-357834.78026152303*t)-84055.06259116957))-2945.876654550934))-25.258076240801554)),n/s)}(d=1-e*e/64),(c=(e+5.520078110286311)*(e-1413/256-.0005468602863106496))*m):(i=function(t){var n,s;return 0===t?1:((t<0?-t:t)<=1?(n=22779.090197304686+t*(41345.38663958076+t*(21170.523380864943+t*(3480.648644324927+t*(153.76201909008356+.8896154842421046*t)))),s=22779.090197304686+t*(41370.41249551042+t*(21215.350561880117+t*(3502.8735138235606+t*(157.11159858080893+1*t))))):(n=.8896154842421046+(t=1/t)*(153.76201909008356+t*(3480.648644324927+t*(21170.523380864943+t*(41345.38663958076+22779.090197304686*t)))),s=1+t*(157.11159858080893+t*(3502.8735138235606+t*(21215.350561880117+t*(41370.41249551042+22779.090197304686*t))))),n/s)}(o=(d=8/e)*d),a=function(t){var n,s;return 0===t?-.015625:((t<0?-t:t)<=1?(n=t*(t*(t*(t*(-.008803330304868075*t-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,s=5710.502412851206+t*(11951.131543434614+t*(7264.278016921102+t*(1488.7231232283757+t*(90.59376959499312+1*t))))):(n=(t=1/t)*(t*(t*(t*(-89.22660020080009*t-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,s=1+t*(90.59376959499312+t*(1488.7231232283757+t*(7264.278016921102+t*(11951.131543434614+5710.502412851206*t))))),n/s)}(o),c=.5641895835477563/t(e),n(e,r,1,0),c*(i*(r[1]+r[0])-d*a*(r[0]-r[1])))}export{e as default};
//# sourceMappingURL=index.mjs.map
