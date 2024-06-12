import{a,S as m,i as p}from"./assets/vendor-59537f4e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();a.defaults.baseURL="https://api.thecatapi.com/v1/";a.defaults.headers.common["x-api-key"]="live_IkTNNDEEFztCZXmmf7CnL0I4gvGXL6SaBwJ1LTvmSFQVrnXatzLon3CvBCLPLMA";function h(){return a.get("breeds").then(t=>t.data).catch(t=>{throw console.log(t),t})}function g(t){return a.get(`/images/${t}`).then(o=>o).catch(o=>console.log(o))}const c=document.querySelector(".breed-select"),u=document.querySelector(".cat-info"),d=document.querySelector(".loader-text"),i=(t,o)=>{t.classList.toggle("hidden",!o)};i(c,!1);document.addEventListener("DOMContentLoaded",()=>{h().then(t=>{t.forEach(o=>{const n=document.createElement("option");n.value=o.reference_image_id,n.textContent=o.name,n.setAttribute("data-breed",o.name),c.appendChild(n)}),new m({select:".breed-select"}),i(d,!1),i(c,!0)}).catch(t=>{console.log(t),f()})});c.addEventListener("change",()=>{i(d,!0),u.innerHTML="";const t=c.value,n=c.options[c.selectedIndex].getAttribute("data-breed");g(t).then(s=>{i(d,!1);const e=`<img src='${s.data.url}' alt='${n} class= 'cat-image' />
          <div class="breed-info">
              <h1>${n}</h1>
              <p>${s.data.breeds[0].description}</p>
              <p> <span class="bold">Temperament: </span>${s.data.breeds[0].temperament}</p>
          </div>`;u.innerHTML=e}).catch(s=>{f(),console.error(s.message)})});function f(){p.show({timeout:1500,close:!1,title:"Something went wrong, please try again",titleColor:"white",backgroundColor:"red",position:"topCenter"})}
//# sourceMappingURL=commonHelpers.js.map