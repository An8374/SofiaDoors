(()=>{"use strict";(function(){const e=document.querySelector(".mobile-nav-btn"),t=document.querySelector(".nav-icon"),o=document.querySelector(".header__nav");e.onclick=function(){t.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll"),o.classList.toggle("open")}})(),(()=>{const e=document.querySelectorAll(".tab__button"),t=document.querySelectorAll(".tab__content");e.forEach(((o,n)=>o.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("tab__button--active"))),o.classList.toggle("tab__button--active"),t.forEach((e=>e.classList.remove("tab__content--active"))),t[n].classList.add("tab__content--active")}))))})(),(()=>{const e=document.querySelector(".footer__left"),t=document.querySelector(".social"),o=document.querySelector(".footer__policy"),n=document.querySelector(".footer__nav-row"),c=document.getElementById("footer-col"),r=document.querySelector(".news__body"),a=document.querySelector(".news__top"),d=document.querySelector(".news__btn"),l=window.innerWidth;l<=992&&(e.append(t),e.append(o)),l<=768&&r.append(d),window.addEventListener("resize",(()=>{const l=window.innerWidth;l<=992&&(e.append(t),e.append(o)),l>992&&(n.append(t),c.append(o)),l<=768&&r.append(d),l>768&&a.append(d)}))})()})();