import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                    */const r=document.querySelector(".feedback-form");r.addEventListener("submit",n);r.addEventListener("input",m);let a={};if(localStorage.getItem("feedback-form-state")){a=JSON.parse(localStorage.getItem("feedback-form-state"));for(let e in a)r.elements[e].value=a[e]}function m({target:{value:e,name:t}}){a[t]=e.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))}function n(e){e.preventDefault();const t=e.target,s=t.elements.email.value.trim(),l=t.elements.message.value.trim();if(s!==""&&l!==""){const o={};o.email=s,o.message=l,console.log(o),localStorage.clear(),t.reset()}}
//# sourceMappingURL=commonHelpers2.js.map
