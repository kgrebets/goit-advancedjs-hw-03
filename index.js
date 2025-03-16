import{S as d,i}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="49374949-4ded30d1f71c5277e2f481102",f="https://pixabay.com/api/";async function p(n){const o=new URLSearchParams({key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{const r=await fetch(`${f}?${o}`);if(!r.ok)throw new Error("Network response was not ok");return await r.json()}catch(r){throw r}}function m(){const n=document.querySelector(".gallery");n.innerHTML=""}function y(n){const o=document.querySelector(".gallery"),r=n.map(s=>`
    <a class="gallery-item" href="${s.largeImageURL}">
      <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
      <div class="info">
        <p>Likes ${s.likes}</p>
        <p>Views ${s.views}</p>
        <p>Comments ${s.comments}</p>
        <p>Downloads ${s.downloads}</p>
      </div>
    </a>
  `).join("");o.insertAdjacentHTML("beforeend",r)}const l=document.querySelector("#search-form"),c=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements.searchQuery.value.trim();if(!o){i.error({message:"Please enter a search query!",position:"topLeft"});return}m(),c.classList.remove("hidden");try{const r=await p(o);if(c.classList.add("hidden"),r.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft"});return}y(r.hits),h.refresh()}catch(r){c.classList.add("hidden"),i.error({message:"An error occurred. Please try again.",position:"topLeft"}),console.error(r)}l.reset()});
//# sourceMappingURL=index.js.map
