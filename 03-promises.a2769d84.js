function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");e(r).Notify.init({timeout:4e3,clickToClose:!0});const l=document.querySelector(".form"),a=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');let s=1,c=0,f=0,p=0;l.addEventListener("change",(()=>{c=+a.value,f=+u.value,p=+d.value})),l.addEventListener("submit",(function(n){n.preventDefault(),function(){const n=setInterval((()=>{var t,o;s<=p?(t=s,o=c,new Promise(((e,n)=>{Math.random()>.3?e({position:t,delay:o}):n({position:t,delay:o})}))).then((({position:n,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)})).finally((()=>{s+=1,c+=f})):(clearInterval(n),s=1,c=0,f=0,p=0)}),c)}()}));
//# sourceMappingURL=03-promises.a2769d84.js.map
