const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){e.setAttribute("disabled","disabled"),t.removeAttribute("disabled"),clearInterval(a)})),e.removeAttribute("disabled");
//# sourceMappingURL=01-color-switcher.938fa33e.js.map
