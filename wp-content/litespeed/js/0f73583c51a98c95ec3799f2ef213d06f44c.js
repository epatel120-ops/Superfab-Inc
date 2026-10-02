/**
 * Lottier for Wpbakery
 * Lottie animations in just a few clicks without writing a single line of code
 * Exclusively on https://1.envato.market/lottier-wpbakery
 *
 * @encoding        UTF-8
 * @version         1.1.6
 * @copyright       (C) 2018 - 2021 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Nemirovskiy Vitaliy (nemirovskiyvitaliy@gmail.com), Dmitry Merkulov (dmitry@merkulov.design)
 * @support         help@merkulov.design
 **/
window.addEventListener("DOMContentLoaded",t=>{function e(t){let e=t.getBoundingClientRect(),o=window.innerHeight-e.top>0,n=e.bottom>0;return o&&n}function o(t){let o=!1;return e(t)?(t.play(),o=!0):(t.pause(),o=!1),o}function n(t,e){const o=t.getBoundingClientRect();let n=100*(o.y+o.height)/(window.innerHeight+o.height);n="scroll_forward"===e?Math.abs(100-Math.floor(n)):Math.floor(n),t.seek(n+"%")}setTimeout((function(){const t=document.querySelectorAll(".mdp-lottier-player");for(const a of t){const t=a.querySelector("#mdp-lottier-"+a.getAttribute("data-id")),r=a.getAttribute("data-autoplay"),l=a.getAttribute("data-finish-before-pause");if(t.setSpeed(parseInt(a.getAttribute("data-speed"))),t.loop="true"===a.getAttribute("data-loop"),t.controls="true"===a.getAttribute("data-controls"),t.mode=a.getAttribute("data-mode"),"autoplay"===r&&(t.autoplay=!0,t.play()),["scroll_forward","scroll_backward"].includes(r)&&(n(t,r),window.addEventListener("scroll",e=>{n(t,r)})),"visible"===r){let n=!1;e(t)!==n&&(n=o(t)),window.addEventListener("scroll",i=>{e(t)!==n&&(n=o(t))})}if("section"===a.getAttribute("data-autoplay")||"hover"===r){function i(){t.pause()}t.addEventListener("mouseover",(function(){t.play(),"yes"===l&&t.removeEventListener("loop",i)})),t.addEventListener("mouseout",(function(){"yes"===l?t.addEventListener("loop",i):t.pause()}))}if("click"===r){let e=0;t.addEventListener("click",(function(){0===e?(t.play(),e=1):(t.pause(),e=0)}))}}}),300)})
;