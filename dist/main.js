(()=>{"use strict";const e=document.querySelector("#city-country"),t=document.querySelector("#daily-forecast"),n=e=>fetch(((e="",t="",n="",i="")=>""===e&""===t&""===n&""===i?1:""!==e&""!==t?"https://api.openweathermap.org/data/2.5/forecast?q="+e+","+t+"&units=metric&appid=b4094e7ee81afa53177036765e7564f9":1)(...e),{mode:"cors"}).then((e=>e.json())),i=e=>`http://openweathermap.org/img/wn/${e}.png`,r=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},a=t=>{e.appendChild(((e,t)=>{let n=document.createElement("div"),i=document.createElement("h1");i.innerHTML=e;let r=document.createElement("h5");return r.innerHTML=t,n.appendChild(i),n.appendChild(r),n})(...(t=>(r(e),[t.city.name,t.city.country]))(t)))},m=e=>new Date(1e3*e).toDateString(),l=(()=>{const e=(e,t,n,r)=>{let a=document.createElement("div"),m=document.createElement("h3"),l=document.createElement("div");m.innerHTML=e,l.innerHTML="Currently"===e?`<img src=${i(r)}>`:t,a.appendChild(m),a.appendChild(l),n.appendChild(a)};return{makeComponent:n=>{t.appendChild(((t,n,i,r,a,l,c,d)=>{let o=document.createElement("div"),u=document.createElement("div");return u.innerHTML=m(d),o.appendChild(u),e("Current Temperature",t,o),e("Feels Like",n,o),e("Min Temp",i,o),e("Max Temp",r,o),e("Humidity",a,o),e("Currently",!1,o,c),o})(...(e=>(r(t),[e.list[0].main.temp,e.list[0].main.feels_like,e.list[0].main.temp_min,e.list[0].main.temp_max,e.list[0].main.humidity,e.list[0].weather[0].main,e.list[0].weather[0].icon,e.list[0].dt]))(n)))}}})();document.querySelector("#search-fields > form > button").addEventListener("click",(async()=>{let e=[document.querySelector('#search-fields > form > input[name="city"]').value,document.querySelector('#search-fields > form > input[name="country-code"]').value,document.querySelector('#search-fields > form > input[name="longitude"]').value,document.querySelector('#search-fields > form > input[name="latitude"]').value],t=await n(e);a(t),l.makeComponent(t)}))})();