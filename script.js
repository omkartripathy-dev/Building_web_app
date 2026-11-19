(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches,PH="918984705970";
function sv(k,v){try{localStorage.setItem(k,v)}catch(e){}}
/* language */
var L={en:{n1:"Services",n2:"Why us",n3:"Book",n4:"FAQ",a:"Broken tech?",b:"We fix it. Fast.",live:"Open now · 24 hours, 7 days",call:"Call now",svc:"See services",st:"Everything for your tech desk",bt:"Book a repair or visit",send:"Send on WhatsApp",ft:"Quick answers",tg:"Your tech. Our care."},
hi:{n1:"सेवाएँ",n2:"हम क्यों",n3:"बुकिंग",n4:"सवाल",a:"टेक खराब है?",b:"हम तुरंत ठीक करेंगे।",live:"अभी खुला · 24 घंटे, 7 दिन",call:"अभी कॉल करें",svc:"सेवाएँ देखें",st:"आपके टेक डेस्क की हर चीज़",bt:"रिपेयर या विज़िट बुक करें",send:"व्हाट्सऐप पर भेजें",ft:"जल्दी जवाब",tg:"आपकी तकनीक, हमारी देखभाल।"},
or:{n1:"ସେବା",n2:"କାହିଁକି ଆମେ",n3:"ବୁକିଂ",n4:"ପ୍ରଶ୍ନ",a:"ଟେକ୍ ଖରାପ ହୋଇଛି?",b:"ଆମେ ଶୀଘ୍ର ଠିକ୍ କରିବୁ।",live:"ବର୍ତ୍ତମାନ ଖୋଲା · ୨୪ ଘଣ୍ଟା, ୭ ଦିନ",call:"ଏବେ କଲ୍ କରନ୍ତୁ",svc:"ସେବା ଦେଖନ୍ତୁ",st:"ଆପଣଙ୍କ ଟେକ୍ ଡେସ୍କର ସବୁ କିଛି",bt:"ମରାମତି ବା ଭିଜିଟ୍ ବୁକ୍ କରନ୍ତୁ",send:"ହ୍ୱାଟ୍ସଆପରେ ପଠାନ୍ତୁ",ft:"ଶୀଘ୍ର ଉତ୍ତର",tg:"ଆପଣଙ୍କ ଟେକ୍, ଆମ ଯତ୍ନ।"}};
function lang(l){document.documentElement.lang=l;$$("[data-t]").forEach(function(e){e.textContent=L[l][e.dataset.t]});$$(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l==l)});sv("maa-lang",l)}
$$(".lang button").forEach(function(b){b.onclick=function(){lang(b.dataset.l)}});
var sl="en";try{sl=localStorage.getItem("maa-lang")||"en"}catch(e){}lang(L[sl]?sl:"en");
/* theme */
var tic=$("#tic");function th(t){document.documentElement.dataset.theme=t;tic.innerHTML='<use href="#'+(t=="dark"?"moon":"sun")+'"/>';sv("maa-theme",t)}th(document.documentElement.dataset.theme);
$("#theme").onclick=function(){var n=document.documentElement.dataset.theme=="dark"?"light":"dark";document.startViewTransition&&!RM?document.startViewTransition(function(){th(n)}):th(n)};
/* menu */
var bg=$(".burger"),lk=$(".links");function menu(o){bg.setAttribute("aria-expanded",o);lk.classList.toggle("open",o)}
bg.onclick=function(){menu(bg.getAttribute("aria-expanded")!="true")};lk.onclick=function(e){if(e.target.closest("a"))menu(false)};document.onkeydown=function(e){if(e.key=="Escape")menu(false)};
/* swap text with fade (timer-safe) */
function swap(box,fn,now){var el=$$(".sw1",box);clearTimeout(box._t);if(now||RM){fn();return}el.forEach(function(x){x.classList.add("fade")});box._t=setTimeout(function(){fn();el.forEach(function(x){x.classList.remove("fade")})},180)}
/* hero tabs */
var T=[["Repair it","Computer, laptop or printer not working? Bring it in or call us.","wrench"],["Buy it","Laptops, CPUs and tech desk items at prices that fit your pocket.","laptop"],["Install it","CCTV cameras, wiring and Wi-Fi set up neatly.","cctv"]],tb=$("#tabs"),tbs=$$("button",tb),pn=$(".panel");
function tab(k,now){tb.style.setProperty("--i",k);tbs.forEach(function(b,i){b.setAttribute("aria-selected",i==k);b.tabIndex=i==k?0:-1});swap(pn,function(){$("#pt").textContent=T[k][0];$("#pp").textContent=T[k][1];$("#pi").innerHTML='<use href="#'+T[k][2]+'"/>'},now)}
tbs.forEach(function(b,i){b.onclick=function(){tab(i)};b.onkeydown=function(e){var d={ArrowRight:1,ArrowLeft:-1}[e.key];if(d){var n=(i+d+3)%3;tab(n);tbs[n].focus();e.preventDefault()}}});tab(0,1);
/* visit mode */
var MT=["Walk in any time, day or night. We will look at your device.","We come to your home or office for a small extra cost."],mode=0,md=$("#mode"),mbs=$$("button",md);
function setMode(k,now){mode=k;md.style.setProperty("--i",k);mbs.forEach(function(b,i){b.setAttribute("aria-pressed",i==k)});swap($("#tip").parentNode,function(){$("#tip").textContent=MT[k]},now)}
mbs.forEach(function(b,i){b.onclick=function(){setMode(i)}});setMode(0,1);
/* booking form -> WhatsApp */
var f=$("#bf");f.onsubmit=function(e){e.preventDefault();var n=f.nm.value.trim(),p=f.ph.value.replace(/\D/g,""),m=f.pr.value.trim(),er=$("#er");
if(n.length<2||p.length<10||m.length<5){er.textContent="Please add your name, a 10-digit phone number and the problem.";f.classList.remove("shake");void f.offsetWidth;f.classList.add("shake");return}
er.textContent="";var t="Hello MAA Computer Services,\nName: "+n+"\nPhone: "+p+"\nDevice: "+f.dv.value+"\nService: "+(mode?"Doorstep visit":"Visit shop")+"\nProblem: "+m;window.open("https://wa.me/"+PH+"?text="+encodeURIComponent(t),"_blank","noopener")};
/* faq */
$$(".faq button").forEach(function(b){b.onclick=function(){var q=b.parentNode,o=!q.classList.contains("open");$$(".faq").forEach(function(x){x.classList.remove("open");$("button",x).setAttribute("aria-expanded",false)});q.classList.toggle("open",o);b.setAttribute("aria-expanded",o)}});
/* reveal */
var rv=$$(".box,.step,.st,.sh,.card,.faq");if("IntersectionObserver" in window&&!RM){rv.forEach(function(e,i){e.classList.add("rv");e.style.setProperty("--d",(i%4)*.09+"s")});
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var e=x.target,d=parseFloat(e.style.getPropertyValue("--d"))*1000;e.classList.add("on");io.unobserve(e);setTimeout(function(){e.classList.remove("rv","on");e.style.removeProperty("--d")},1100+d)}})},{threshold:.12});rv.forEach(function(e){io.observe(e)})}
/* counters */
var co=new IntersectionObserver(function(en){en.forEach(function(x){if(!x.isIntersecting)return;var e=x.target,n=+e.dataset.n,s=null;co.unobserve(e);if(RM){e.textContent=n;return}function st(t){s=s||t;var p=Math.min((t-s)/1400,1);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(st)}requestAnimationFrame(st)})},{threshold:.6});$$("[data-n]").forEach(function(e){co.observe(e)});
/* spotlight + tilt */
if(matchMedia("(hover:hover)").matches&&!RM)$$(".box").forEach(function(b){b.onpointermove=function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;b.style.setProperty("--mx",x*100+"%");b.style.setProperty("--my",y*100+"%");b.style.setProperty("--ry",(x-.5)*8+"deg");b.style.setProperty("--rx",(.5-y)*8+"deg")};b.onpointerleave=function(){b.style.setProperty("--rx","0deg");b.style.setProperty("--ry","0deg")}});
/* progress + header shadow */
var bar=$("#bar"),hd=$("header"),tk=0;addEventListener("scroll",function(){if(tk)return;tk=requestAnimationFrame(function(){var h=document.documentElement,m=h.scrollHeight-innerHeight;bar.style.transform="scaleX("+(m>0?scrollY/m:0)+")";hd.classList.toggle("sc",scrollY>8);tk=0})},{passive:true});
/* ripple + year */
document.addEventListener("click",function(e){var b=e.target.closest(".btn");if(!b||RM)return;var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height)*2,s=document.createElement("span");s.className="rp";s.style.cssText="width:"+d+"px;height:"+d+"px;left:"+(e.clientX-r.left-d/2)+"px;top:"+(e.clientY-r.top-d/2)+"px";b.appendChild(s);setTimeout(function(){s.remove()},700)});
$("#yr").textContent=new Date().getFullYear();
})();
