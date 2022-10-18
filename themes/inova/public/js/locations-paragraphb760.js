"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(f){var t={init:function(t){this.build(".locations-map",t),this.build('[data-location-type="grid"]',t),this.build('[data-location-type="single"]',t)}};t.build=function(t,e){var a,d,n,u,y=t,r=drupalSettings.locationDetails,b=".locations-map",S='[data-location-type="grid"]',L='[data-location-type="single"]',o=document.querySelectorAll(b,e),c=document.querySelectorAll(S,e),i=document.querySelectorAll(L,e),p=[];y===S&&document.querySelector(S)?(n=c,u=document.querySelectorAll('[data-location-type="grid"] .locations',e),d=function(t,a){t.forEach(function(t,a){var e;e=y===L?Array.from(t.childNodes).filter(function(t){return t.classList}).filter(function(t){return t.classList.contains("item")})[0].dataset.locationId:t.getAttribute("data-paragraph-id"),d=r[e]});var e=-1;for(var n in d)d.hasOwnProperty(n)&&(a.push(d[n]),e++,Object.defineProperty(d[n],"index",{value:e}));return d}(n,p)):y===L&&document.querySelector(L)&&(n=i,u=document.querySelectorAll('[data-location-type="single"]',e),d=1<u.length?drupalSettings.locationDetails:(a=document.querySelector('[data-location-type="single"] .item').getAttribute("data-location-id"),r[a]));var _={organizeSchedule:function(t){for(var a,e=moment().format("dddd").toLowerCase(),n=t.length;n--;)if(e==t[n][0]){a=n;break}for(var o=0;o<a;o++){var c=t.shift();t.push(c)}},convertTime:function(t){var a,e,n;return(t=(t=t/60/60).toString()).includes(".")&&(a=t.split("."),e=parseFloat(a[0]),60<(n=6*parseInt(a[1]))&&((n=n.toString()).split(""),n=n[0]+n[1]+"."+n[2],n=Math.round(n)),t=e+(n*=.01)),"0"===(t=(t=(t=12<=t?12===t?(+t).toFixed(2)+"PM":(t-12).toFixed(2)+"PM":(+t).toFixed(2)+"AM").toString()).split("."))[0]?t[0]="12":(t[0],t[0]),t=t[1].match(/00/)?t[0]+t[1].split(/00/)[1]:"".concat(t[0],":").concat(t[1])},checkIfOpen:function(t,a){var e=new Date,n=60*e.getHours()*60+60*e.getMinutes();return t=parseFloat(t),a=parseFloat(a),null===t?'<span class="closed">Closed</span>':0===t&&86400===a||86400===t&&86400===a?'<span class="open">Open 24hrs</span>':t<=n&&n<=a?(a=_.convertTime(a),'<span class="open">Open</span> • <span>Closes at '.concat(a,"</span>")):n<t?(t=_.convertTime(t),'<span class="closed">Closed</span> • <span>Opens at '.concat(t,"</span>")):'<span class="closed">Closed</span>'},buildSchedule:function(l){var r="";l.forEach(function(t,a){var e,n,o,c=l[a][0];o=null===l[a][1]?"Closed":null!==l[a][1]&&"0"===l[a][1].from&&"86400"===l[a][1].to||"86400"===l[a][1].from&&"86400"===l[a][1].to?"Open 24hrs":(e=_.convertTime(l[a][1].to),n=_.convertTime(l[a][1].from),"".concat(n,"–").concat(e));var i='<span class="hours">'.concat(c," ").concat(o,"</span>");r=r.concat("",i)});var t=document.createElement("div");return t.insertAdjacentHTML("beforeend",r),t},buildLocations:function(E,O){var e,x=0;y===b||y===S?"object"===_typeof(E)&&E.constructor===Object?Object.values(E.schedule).forEach(function(t,a){null===t&&x++}):"object"===_typeof(E)&&E.constructor===Array&&0<E.length&&(E.forEach(function(t,a){e=Object.values(t.schedule)}),e.forEach(function(t,a){null===t&&x++})):y===L&&Object.values(E).forEach(function(t,a){null===t&&x++}),void 0===O&&(O="uncategorized");var z="";if(y===b){"object"===_typeof(E)&&E.constructor===Object&&(E=Object.values(E.schedule)),E.forEach(function(t,a){var e,n,o,c,i,l,r=E[a],s=E[a].index,d=E[a].id,u="categorized"===O?(e="<h4>".concat(r.name,"</h4>"),"categorized-item"):(e="<h3>".concat(r.name,"</h3>"),"item"),p=null!=(p=r.phone)?'<span class="phone-prefix">Phone: </span><a href="tel:'.concat(p,'">').concat(p,"</a>"):"",f=null!=(f=r.fax)?"<span>fax: ".concat(f,"</span>"):"",v=null!=(v=r.short_description)?"<div>".concat(v,"</div>"):"";void 0!==r.address&&(n=r.address,o='<span class="line1">'.concat(n.address_line1,"</span>"),""!==(c=n.address_line2).replace(/\s/g,"")&&(c='<span class="line2">'.concat(n.address_line2,"</span>")),i='<span class="line3">'.concat(n.administrative_area,", ").concat(n.locality," ").concat(n.postal_code,"</span>"),l='<div class="address">'.concat(o," ").concat(c," ").concat(i,"</div>"));var h,g,m='<a href="'.concat(r.detailsLink,'" class="more">See Location Details</a>'),y='<a href="'.concat(r.directionsLink,'" target="_blank">Get Directions</a>'),b=null!==r.geolocation&&void 0!==r.geolocation?(h=r.geolocation.lat,r.geolocation.lng):h="";if(x<7){if(void 0!==r.schedule){var S=r.schedule,L=[];for(var T in S)L.push([T,S[T]]);_.organizeSchedule(L);var w,A=L[0],k=null!==A[1]?(w=A[1].from,A[1].to):w=void 0,q=_.buildSchedule(L),M=_.checkIfOpen(w,k);q=q.innerHTML}g='<div class="'.concat(u,'" data-lat="').concat(h,'" data-lng="').concat(b,'" data-index="').concat(s,'" data-location-id="').concat(d,'">\n                                                ').concat(e,'\n                                                <div class="content">\n                                                    <button class="save">Save</button>\n                                                    <div class="short-desc">').concat(v,"</div>\n                                                    ").concat(l,"\n                                                    ").concat(y,'\n                                                    <span class="see-details">').concat(m,'</span>\n                                                    <div class="schedule">\n                                                        <div class="current-status">').concat(M,'</div>\n                                                        <div class="hours-wrap">').concat(q,"</div>\n                                                    </div>\n                                                </div>\n                                            </div>")}else g='<div class="'.concat(u,'" data-lat="').concat(h,'" data-lng="').concat(b,'" data-index="').concat(s,'" data-location-id="').concat(d,'">\n                                                ').concat(e,'\n                                                <div class="content">\n                                                    <button class="save">Save</button>\n                                                    <div class="short-desc">').concat(v,"</div>\n                                                    ").concat(l,"\n                                                    ").concat(y,'\n                                                    <span class="see-details">').concat(m,"</span>\n                                                </div>\n                                            </div>");z=z.concat("",g)});var t=document.createElement("div");return t.insertAdjacentHTML("beforeend",z),t}if(y===S&&x<7){if(void 0!==E.schedule){var a=E.schedule,n=[];for(var o in a)n.push([o,a[o]]);_.organizeSchedule(n);var c,i=n[0],l=null!==i[1]?(c=i[1].from,i[1].to):c=void 0,r=_.buildSchedule(n),s=_.checkIfOpen(c,l);r=r.innerHTML}return'<div class="schedule">\n                                        <div class="current-status">'.concat(s,'</div>\n                                        <div class="hours-wrap">').concat(r,"</div>\n                                    </div>")}if(y===L&&x<7){var d=E,u=[];for(var p in d)u.push([p,d[p]]);_.organizeSchedule(u);var f,v=u[0],h=null!==v[1]?(f=v[1].from,v[1].to):f=void 0,g=_.buildSchedule(u),m=_.checkIfOpen(f,h);return g=g.innerHTML,'<div class="schedule">\n                                        <div class="current-status">'.concat(m,'</div>\n                                        <div class="hours-wrap">').concat(g,"</div>\n                                    </div>")}},buildLocationTypes:function(t){if(t){var a=t.getAttribute("data-paragraph-id");p=r[a];var e=[];p.filter(function(t,a){0<t.locationTypes.length&&e.push(t.locationTypes)}),e=[].concat.apply([],e);var n=[];return e.forEach(function(t,a){delete t.id,n.push(t.name)}),n.reduce(function(t,a,e,n){return-1!==n.indexOf(a,e+1)&&-1===t.indexOf(a)&&t.push(a),t},[])}},buildMap:function(l){({googleMap:function(){var t,a,e,n,o=l.querySelector('[id*="mapParagraph"]'),A=new google.maps.Map(o,{center:{lat:39.0469566,lng:-77.6942945},disableDefaultUI:!0,scrollwheel:!1,zoom:9,zoomControl:!0}),k=new google.maps.InfoWindow({}),c=[],i=l.getAttribute("data-paragraph-id"),q=r[i];q.forEach(function(L,T){var w;null!==L.geolocation&void 0!==L.geolocation&&(t=L.geolocation.lat,a=L.geolocation.lng),e=new google.maps.LatLng(t,a),n=new google.maps.Marker({position:e,map:A,icon:"/themes/inova/public/img/map-marker.png",title:L.name}),c.push(n),google.maps.event.addListener(n,"click",(w=n,function(){var t=q[T],a=t.id,e="<h3>".concat(t.name,"</h3>"),n=null!==(n=t.phone)&&""!==n.replace(/\s/g,"")?'<a href="tel:'.concat(n,'" class="phone">tel: ').concat(n,"</a>"):"",o=null!==(o=t.fax)&&""!==o.replace(/\s/g,"")?'<span class="fax">fax: '.concat(o,"</span>"):"",c=null!==(c=t.short_description)&&""!==c.replace(/\s/g,"")?"<div>".concat(c,"</div>"):"",i=t.address,l='<span class="line1">'.concat(i.address_line1,"</span>"),r=i.address_line2;""!==r.replace(/\s/g,"")&&(r='<span class="line2">'.concat(i.address_line2,"</span>"));var s='<span class="line3">'.concat(i.locality,", ").concat(i.administrative_area," ").concat(i.postal_code,"</span>"),d='<div class="address">'.concat(l," ").concat(r," ").concat(s,"</div>"),u='<a class="more" href="'.concat(L.detailsLink,'">See Location Details</a>'),p='<a href="'.concat(L.directionsLink,'" target="_blank">Get Directions</a>'),f=t.schedule,v=[];for(var h in f)v.push([h,f[h]]);_.organizeSchedule(v);var g,m,y=v[0],b=null!==y[1]?(g=y[1].from,y[1].to):g=void 0,S=0;v.forEach(function(t,a){null===t[1]&&S++}),m=S<7?_.checkIfOpen(g,b):"",k.setContent('<div class="google-info-window item" data-location-id="'.concat(a,'">\n                                            ').concat(e,'\n                                            <div class="content">\n                                                <button class="save">Save</button>\n                                                <div class="short-desc">').concat(c,"</div>\n                                                ").concat(d,"\n                                                ").concat(n,"\n                                                ").concat(o,"\n                                                ").concat(p,"\n                                                ").concat(u,'\n                                                <div class="schedule">\n                                                    <div class="current-status">').concat(m,"</div>\n                                                </div>\n                                            </div>\n                                        </div>")),k.open(A,w)})),google.maps.event.trigger(c[0],"click"),google.maps.event.addListener(k,"domready",function(){f(".interior-wrap").favoriteItem({container:".locations-map",cookieName:"savedLocation",parent:".item, .categorized-item",dataAttr:"location",text:"Location",link:"/locations?&saved=true"})})}),l.querySelectorAll(".categorized-item").forEach(function(t,a){t.addEventListener("click",function(t){google.maps.event.trigger(c[a],"click")})})},initialize:function(){this.googleMap()}}).initialize()},locationTypesTemplate:function(a){return{buildTemplate:function(){var t=_.buildLocationTypes(a),o={};t.forEach(function(a,t){Object.defineProperty(o,a,{value:p.filter(function(t){return t.locationTypes.map(function(t){return t.name}).includes(a)})})});var c="";return t.forEach(function(t,a){var e,n=_.buildLocations(o[t],"categorized");n&&(n=n.innerHTML,e='<div class="item">\n                                                          <h3>'.concat(t,'</h3>\n                                                          <div class="content">\n                                                              ').concat(n,"\n                                                          </div>\n                                                  </div>"),c=c.concat("",e))}),c},buildDOM:function(){var t=this.buildTemplate();return a.querySelector(".items-wrap").innerHTML=t}}.buildDOM()},locationsWithoutTypeTemplate:function(t){var c;if(y===b){var a=_.buildLocationTypes(t),e=[],n=t.getAttribute("data-paragraph-id");if(p=drupalSettings.locationDetails[n],0<a.length)for(var o=0;o<p.length;o++){0===p[o].locationTypes.length&&e.push(p[o]);for(var i=0;i<p[o].locationTypes.length;i++)for(var l=0;l<a.length;l++)p[o].locationTypes.includes(a[l])&&e.push(p[o])}else for(var r=0;r<p.length;r++)e.push(p[r]);var s=_.buildLocations(e);if(s)return s=s.innerHTML,(u=t.querySelector(".listing-wrap .items-wrap")).insertAdjacentHTML("beforeend",s)}else y===S?(document.querySelectorAll('[data-location-type="grid"]').forEach(function(t,a){var o=t.getAttribute("data-paragraph-id");t.querySelectorAll('[data-paragraph-id="'.concat(o,'"] [data-location-id]')).forEach(function(a,t){var e=a.getAttribute("data-location-id"),n=drupalSettings.locationDetails[o][e];if(c=_.buildLocations(n),a.querySelector(".location-description--toggle")&&a.querySelector(".location-description--toggle").addEventListener("click",function(t){a.classList.contains("open")?a.classList.remove("open"):a.classList.add("open")}),c)return document.querySelector('[data-paragraph-id="'.concat(o,'"] [data-location-id="').concat(e,'"] .schedule')).insertAdjacentHTML("beforeend",c)})}),f(".interior-wrap").favoriteItem({container:'[data-location-type="grid"]',cookieName:"savedLocation",parent:"[data-location-id]",dataAttr:"location",text:"Location",link:"/locations?&saved=true"})):y===L&&document.querySelectorAll('[data-location-type="single"] [data-location-id]:not(.save-wrap)').forEach(function(t,a){var e=t.getAttribute("data-location-id");if(c=1<document.querySelectorAll('[data-location-type="single"]').length?_.buildLocations(d[e]):_.buildLocations(d))return document.querySelector('[data-location-type="single"] [data-location-id="'.concat(e,'"] .schedule')).insertAdjacentHTML("beforeend",c)})},accordion:function(t,a){a&&document.querySelectorAll(a).forEach(function(t){var a=t.querySelector(".items-wrap .item:first-of-type");a.classList.add("active"),a.querySelector(".content").style.display="block"}),(t=f(t)).on("click",function(){f(this).siblings(".content").slideToggle(),f(this).parent().toggleClass("active")})},accordionSchedule:function(t){f("".concat(t," .schedule")).on("click",function(){f(this).toggleClass("active"),f(this).children(".hours-wrap").slideToggle()})},responsive:function(){enquire.register("screen and (max-width: 767px)",{match:function(){_.accordion(".locations-map .items-wrap .categorized-item h4")},unmatch:function(){f(".locations-map .items-wrap .categorized-item h4").off(),f(".locations-map .items-wrap .categorized-item h4").parent().removeClass(".active"),f(".locations-map .items-wrap .categorized-item h4").siblings().hide()}})},finalBuild:function(){var a=this;y===b&&o.length?(f(window).on("load",function(){inovaHelpers.scrollbar(e)}),document.querySelectorAll("[data-paragraph-id]").forEach(function(t){t.querySelector('[id*="mapParagraph"]')&&(t.getAttribute("data-paragraph-id"),a.locationTypesTemplate(t),a.locationsWithoutTypeTemplate(t),a.accordionSchedule(".locations-map .items-wrap"),a.buildMap(t))}),this.accordion(".locations-map .items-wrap h3",".locations-map")):y===S&&c.length?(this.locationsWithoutTypeTemplate(),this.accordionSchedule(".locations-grid")):y===L&&i.length&&(this.locationsWithoutTypeTemplate(),this.accordionSchedule('[data-location-type="single"]'))},init:function(){this.finalBuild()}};_.init()},window.inovaLocationsParagraph=t}(jQuery);