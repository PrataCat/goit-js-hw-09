function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");e(r).Notify.init({timeout:4e3,clickToClose:!0});const l=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');let s=1,c=0,f=0,p=0;l.addEventListener("change",(()=>{c=+a.value,f=+u.value,p=+d.value})),l.addEventListener("submit",(function(t){t.preventDefault(),function(){const t=setInterval((()=>{var n,o;s<=p?(n=s,o=c,new Promise(((e,t)=>{Math.random()>.3?e({position:n,delay:o}):t({position:n,delay:o})}))).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})).finally((()=>{s+=1,c+=f})):(clearInterval(t),s=1,l.reset())}),c)}()}));
//# sourceMappingURL=03-promises.34d99e48.js.map