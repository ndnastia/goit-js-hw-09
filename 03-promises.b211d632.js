function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form"),u=document.querySelector(".submit");function d(e,t){const o={position:e,delay:t},n=Math.random()>.3;return new Promise(((e,i)=>{setTimeout((()=>{n?e(o):i(o)}),t)}))}l.addEventListener("submit",(function(t){t.preventDefault();let o=Number(l.delay.value);for(let t=1;t<=l.amount.value;t+=1)u.setAttribute("disabled","disabled"),d(t,o).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})).finally((()=>u.removeAttribute("disabled"))),o+=Number(l.step.value)}));
//# sourceMappingURL=03-promises.b211d632.js.map
