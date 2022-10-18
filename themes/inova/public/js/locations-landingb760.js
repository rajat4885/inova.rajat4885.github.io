"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var changeButtonTexts=function(t,n){_toConsumableArray(document.querySelectorAll("[data-location-id]")).filter(function(t){return Number(t.dataset["location-id"])===Number(n)})};!function($){var inovaLocationsLanding={};function inovaLocationsGeolocation(){var t=$(".zipcode-options .geolocation"),n=$(".zipcode-options .remove"),e=$(".location-search nav.filters");inovaGeoLocation.hasLocation()&&(t.hide(),n.show(),$(".filters").toggleClass("geolocation-on")),t.on("click",function(t){t.preventDefault(),e.toggleClass("loading");inovaGeoLocation.requestLocation().then(function(t){inovaGeoLocation.requestAddress().then(function(t){$(".zipcode-options .geolocation").toggle(),$(".zipcode-options .remove").toggle(),$(".filters").toggleClass("geolocation-on"),inovaLocationsLanding.submitSearch()},function(t){return e.toggleClass("loading"),!1})},function(t){e.toggleClass("loading")})}),n.on("click",function(t){t.preventDefault(),inovaGeoLocation.removeMyLocation().then(function(t){inovaLocationsLanding.submitSearch()})})}inovaLocationsLanding.save=function(t){var n=t.selectorContext,e=void 0===n?document:n,o=t.saveElem,a=void 0===o?"button.save":o,c=t.cookieType,i=t.crossReference,r=void 0!==i&&i,s=t.counter,c=c.toLowerCase(),l="data-".concat(c,"-id"),d={tooltip:function(t,n){var e=e=void 0!==t?'<a href="'.concat(n,'">').concat(t,"</a>"):"",o='<div class="save-message"><button class="dismiss">Dismiss Message</button>Saved '.concat(e,"</div>");return inovaHelpers.stringToHTML(o)},counterHTML:function(){c=c.charAt(0).toUpperCase()+c.slice(1);var t=document.cookie.split(";").filter(function(t){return t.includes("saved".concat(c))}),n="/"+c.toLowerCase()+"s?saved=1";return 1===t.length?'<a href="'.concat(n,'">(').concat(t.length,") Saved ").concat(c,"</a>"):1<t.length?'<a href="'.concat(n,'">(').concat(t.length,") Saved ").concat(c,"s</a>"):"(".concat(t.length,") Saved ").concat(c,"s")},breadcrumb:function(){var t,n=document.querySelector(".breadcrumb .saved-cookies-counter");"A"===n.parentNode.nodeName&&(t=n.parentNode).replaceWith.apply(t,_toConsumableArray(n.parentNode.childNodes));var e=d.counterHTML();n.innerHTML=e}},u={counterUpdate:function(){var n;null!=s&&(n=d.counterHTML(),1<s.length?s.forEach(function(t){t.innerHTML=n}):s[0].innerHTML=n)},tooltip:{dismiss:function(t){t.style.opacity="0",setTimeout(function(){t.remove()},225)},dismissBtn:function(t){t.querySelector(".dismiss").addEventListener("click",function(t){u.tooltip.dismiss(t.target.parentNode)})},autoDismiss:function(t){setTimeout(function(){u.tooltip.dismiss(t)},5e3)}},cookies:{create:function(t,n){var e=new Date;e.setTime(e.getTime()+31536e6),t=t.charAt(0).toUpperCase()+t.slice(1),document.cookie="saved".concat(t).concat(n,"=").concat(n,";expires=").concat(e.toUTCString(),";path=/")},delete:function(t,n){t=t.charAt(0).toUpperCase()+t.slice(1),document.cookie="saved".concat(t).concat(n,"=").concat(n,"; path=/; expires = Thu, 01 Jan 1970 00:00:00 GMT")},read:function(t,n){var e=document.cookie.split(";");t=t.charAt(0).toUpperCase()+t.slice(1);for(var o=0;o<e.length;o++)if(e[o].trim()==="saved".concat(t).concat(n,"=").concat(n))return!0}},saveBtn:function(){e.querySelectorAll(a).forEach(function(s){s.addEventListener("click",function(t){t.stopPropagation();var n,e=t.target,o=d.tooltip(),a=inovaHelpers.getClosest(e,"[".concat(l,"]")),i=a.getAttribute(l);a.classList.contains("saved")?a.classList.contains("saved")&&(e.textContent="Save ".concat(c),!0===r?document.querySelectorAll("[".concat(l,"='").concat(i,"']")).forEach(function(t){var n;t.classList.remove("saved"),"infowindow"!==t.querySelector("button.save").getAttribute("data-type")?t.querySelector("button.save").textContent="Save ".concat(c):t.querySelector("button.save").textContent="Save",t.querySelector(".save-message")&&(n=t.querySelector(".save-message"),u.tooltip.dismiss(n))}):(e.textContent="Save ".concat(c),a.classList.remove("saved"),a.querySelector(".save-message")&&(n=a.querySelector(".save-message"),u.tooltip.dismiss(n))),u.cookies.delete(c,i),s.innerText="Save Location",changeButtonTexts("Save Location",i)):(!0===r?document.querySelectorAll("[".concat(l,"='").concat(i,"']")).forEach(function(t){t.classList.add("saved"),"infowindow"!==t.querySelector("button.save").getAttribute("data-type")?t.querySelector("button.save").textContent="Saved ".concat(c):t.querySelector("button.save").textContent="Saved"}):(a.classList.add("saved"),e.textContent="Saved ".concat(c)),o.childNodes.forEach(function(t){a.appendChild(t),u.tooltip.dismissBtn(t),u.tooltip.autoDismiss(t),u.cookies.create(c,i)}),changeButtonTexts("Saved Location",i)),u.counterUpdate()})})}};d.breadcrumb(),u.counterUpdate(),u.saveBtn(),!0===r&&(e=document),e.querySelectorAll("[".concat(l,"]")).forEach(function(t){var n=t.getAttribute(l);!0===u.cookies.read(c,n)&&t.classList.add("saved")})},inovaLocationsLanding.init=function(){void 0!==drupalSettings.locationsLandingPage&&(this.locationHeaderBuild(),$("section.location-search .listing-wrap .items-wrap button.toggle").on("click",function(){inovaLocationsLanding.locationAccordion($(this))}),this.map(),this.filters(),this.helpers.submitOnKeyWordSearch())},inovaLocationsLanding.submitSearch=function(){var t,n;function e(){var t="/locations?"+v()+m()+p()+u();window.location.href=t}function o(t,n){var e,o,a=v(),i=m(),s=p(),c=u(),r=t,l=n;void 0!==_typeof(r)&&void 0!==_typeof(l)?(e="&latitude="+String(r)+(l="&longitude="+String(l)),o="&address="+$(".locations-landing-wrap .zipcode-options input").val()):e="";var d="/locations?"+a+i+e+s+c+o;window.location.href=d}function u(){var t=$("section.location-search .types-select-dropdown li.saved").hasClass("selected")?"&saved=true":"";return t}function p(){var t=$('section.location-search .keyword-search input[type="text"]').val().trim(),n=""!==t?"&keywords="+t:"";return n}function m(){var t=$("nav.filters .radius .bootstrap-select li.selected").attr("data-distance"),n="&radius=",e=n+t,o=$("nav.filters .radius .filter-option-inner-inner").text().split(" ");return t&&""!=t||(e=""),String(o[1])===getAllUrlParams().radius&&(e=n+getAllUrlParams().radius),e}function v(){var o=[];return $("nav.filters .location-types .options li.selected").each(function(t){var n=$(this).attr("data-id-value"),e=n&&""!=n?"&type[]="+n:"";o.push(e)}),o=o.join("")}t=inovaGeoLocation.getLocation(),n=$("#formatted_address"),t?o(t.lat,t.lng):(n.val()?function(){var t=$("#formatted_address");inovaGeoLocation.requestLatLngFromAddress(t.val()).then(function(t){var n=inovaGeoLocation.getLocation();return o(n.lat,n.lng),!1},function(t){return alert("Address to lat long was rejected: "+t),e(),!1})}:e)()},inovaLocationsLanding.filters=function(){var t,n,e;void 0!==drupalSettings.locationsLandingPage&&((t=$("nav.filters .actions button.clear")).on("click",function(){var t=$(".location-search nav.filters");t.find(".zipcode-options input"),t.find(".zipcode-options button.remove");$("nav.filters .location-types .types-select-dropdown button span").text("Nothing Selected"),$("nav.filters .location-types .types-select-dropdown li").removeClass("selected"),$("nav.filters .location-types").selectpicker("deselectAll"),$("nav.filters .radius .filter-option-inner-inner").text("Any"),$("section.location-search .items-wrap .item").removeClass("hide-non-saved"),inovaGeoLocation.deleteLocation(),inovaGeoLocation.clearLatLongFormFields(),inovaGeoLocation.clearAddressField(),inovaLocationsLanding.submitSearch()}),void 0===getAllUrlParams().radius&&void 0===getAllUrlParams().keywords&&void 0===getAllUrlParams().saved&&void 0===getAllUrlParams().type&&void 0===getAllUrlParams().latitude||t.show(),function(){for(var t=drupalSettings.locationsLandingPage.locationTypes,n=0;n<t.length;n++){t[n];var e=t[n].name,o='<li data-id-value="'+t[n].id+'">'+e+" ("+t[n].count+")</li>";$(".types-select-dropdown .options ul").append(o)}$(".types-select-dropdown button").on("click",function(){$(this).parent().toggleClass("active")}),$(".types-select-dropdown .options .dropdown-menu li:not(.saved-locations-filter)").on("click",function(){var e=[];$(this).toggleClass("selected").promise().done(function(){$(".types-select-dropdown .options .dropdown-menu li.selected").each(function(t){var n=$(".types-select-dropdown .options .dropdown-menu li.selected").eq(t).text();e.push(n),inovaLocationsLanding.submitSearch()}),$(".types-select-dropdown button span").text(e)}),0===$(".types-select-dropdown .options .dropdown-menu li.selected").length&&$(".types-select-dropdown button span").text("Nothing Selected")}),$(document).click(function(t){$(t.target).is(".types-select-dropdown button")||$(t.target).is(".types-select-dropdown li")||$(t.target).is(".types-select-dropdown button span")||$(t.target).is(".types-select-dropdown span")||$(".types-select-dropdown").removeClass("active")}),function(){var n,e,t,o,a=getAllUrlParams().type,i=[],s=$("nav.filters .location-types .options li"),c=[];if(location.href.includes("type%5B%5D")&&(n={},location.search.substr(1).split("&").forEach(function(t){t.split("=")[0]in n?n[t.split("=")[0]].push(t.split("=")[1]):n[t.split("=")[0]]=[t.split("=")[1]]}),e={},$.each(n,function(t,n){e[decodeURIComponent(t)]=n}),a=e["type[]"]),void 0!==a){s.each(function(){var t=$(this).attr("data-id-value");i.push(t)});for(var r=findMatch(a,i),l=0;l<s.length;l++){var d=s.eq(r[l]),u=d.text();d.addClass("selected"),c.push(u)}c=c.filter(function(t){return t}),$("nav.filters .location-types button span").text(c.join(", "))}void 0!==getAllUrlParams().saved&&(c.push("Saved Locations"),$("nav.filters .location-types button span").text(c.join(", ")),$(".location-search .types-select-dropdown .dropdown-menu li.saved").addClass("selected"),t=document.cookie.split(";").filter(function(t){return t.includes("savedLocation")}),o=[],t.forEach(function(t){t=t.split("=")[1],o.push(t)}),o.forEach(function(n){document.getElementById("locationResultsListing").querySelectorAll(".item").forEach(function(t){t.getAttribute("data-location-id")===n?(t.classList.add("saved"),t.classList.contains("hide-non-saved")&&t.classList.remove("hide-non-saved")):t.getAttribute("data-location-id")===n||t.classList.contains("saved")||t.classList.add("hide-non-saved")})}));var p,m,v=getAllUrlParams().radius;void 0!==v&&(p="Within "+v+" Miles",(m=$("#location-select-radius")).val(v).prop("selected",!0),$("option:selected",m).text(p),m.selectpicker("refresh"));var g,f=getAllUrlParams().address;void 0!==f&&(g=f.replace(/%20/g," "),$(".locations-landing-wrap .zipcode-options input").val(g))}()}(),e=String(drupalSettings.locationsLandingPage.allResults.length),void 0!==getAllUrlParams().saved&&(e-=$(".locations-landing-wrap .listing-wrap .item.hide-non-saved").length),$(".location-search .label .showing-count").text(e),0===drupalSettings.locationsLandingPage.allResults.length&&($(".location-search .label .showing-count").text("0"),(n=$(".locations-landing-wrap .location-search .listing-wrap .items-wrap")).addClass("no-results"),n.append("<span>No Results Found</span>")),$("nav.filters .radius .bootstrap-select").on("loaded.bs.select click",function(){var t=$("nav.filters .radius select option"),n=$("nav.filters .radius .bootstrap-select .dropdown-menu.inner li"),e=[];t.each(function(){var t=$(this).attr("data-distance");e.push(t)}),n.each(function(t){$(this).attr("data-distance",e[t])}),n.on("click",function(){$(this).siblings().removeClass("selected active")})}),$("nav.filters button.apply").on("click",function(){inovaLocationsLanding.submitSearch()}))},inovaLocationsLanding.locationHeaderBuild=function(){for(var t=drupalSettings.locationsLandingPage.allResults,n=0;n<t.length;n++){var e={id:t[n].id,index:[n],name:t[n].name,url:t[n].detailsLink},o=$("#locationResultItem").html(),a=Mustache.to_html(o,e);$(".locations-landing-wrap .results-wrap .items-wrap").append(a)}var i=inovaLocationsLanding.locationDetailsBuild("0"),s=inovaLocationsLanding.scheduleBuild("0"),c=$('.locations-landing-wrap .results-wrap .item[data-index="0"]'),r=$('.locations-landing-wrap .results-wrap .item[data-index="0"] .content');c.hasClass("built")||r.html(i).promise().done(function(){$(this).find(".schedule").append(s),c.addClass("built")}),!0===window.matchMedia("(max-width: 991px)").matches&&inovaLocationsLanding.save({selectorContext:document.querySelector("#locationResultsListing [data-index='0']"),cookieType:"location",crossReference:!0,counter:document.querySelectorAll(".saved-cookies-counter")})},inovaLocationsLanding.locationDetailsBuild=function(t){if(0<drupalSettings.locationsLandingPage.allResults.length){var n,e,o,a,i,s=drupalSettings.locationsLandingPage.allResults[t];i=void 0!==getAllUrlParams().latitude&&void 0!==getAllUrlParams().longitude&&(n=getAllUrlParams().latitude,e=getAllUrlParams().longitude,o=s.geolocation.lat,a=s.geolocation.lng,distance(n,e,o,a));var c={url:s.detailsLink,addressLine1:s.address.address_line1,addressLine2:s.address.address_line2,addressLocality:s.address.locality,addressAdmin:s.address.administrative_area,addressPostalCode:s.address.postal_code,directions:s.directionsLink,phone:s.phone,fax:s.fax,distance:i,shortDescription:s.short_description,longDescription:s.long_desc_trunc,longDescHead:s.long_description_header};null===c.fax&&(c.fax=!1),null===c.shortDescription&&(c.shortDescription=!1),null===c.longDescription&&(c.longDescription=!1),null===c.longDescHead&&(c.longDescHead="More Information");var r=$("#locationDetails").html(),l=Mustache.to_html(r,c);return $("section.location-search .listing-wrap .items-wrap").mCustomScrollbar(),l}},inovaLocationsLanding.locationAccordion=function(t,n){var e=t.parents().attr("data-index"),o=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(e,'"]')),a=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(e,'"] .content')),i=inovaLocationsLanding.locationDetailsBuild(e);o.hasClass("built")||a.html(i).promise().done(function(){o.addClass("built");var t=inovaLocationsLanding.locationDetailsBuild(e),n=inovaLocationsLanding.scheduleBuild(e);a.html(t).promise().done(function(){$(this).find(".schedule").append(n),inovaLocationsLanding.save({selectorContext:document.querySelector("#locationResultsListing [data-index='".concat(e,"']")),cookieType:"location",crossReference:!0,counter:document.querySelectorAll(".saved-cookies-counter")})})})},inovaLocationsLanding.scheduleBuild=function(t){var l;0<drupalSettings.locationsLandingPage.allResults.length&&(l=drupalSettings.locationsLandingPage.allResults[t].schedule);var n=function(){var t=[];for(var n in l)t.push([n,l[n]]);for(var e=[],o=0,a=0;a<t.length;a++){e.push(t[a]);var i={isClosed:!1,is24Hours:!1,hasHours:!1};t[a].push(i),null===t[a][1]?(i.isClosed=!0,t[a][1]="Closed",o++):"0"===t[a][1].from&&"86400"===t[a][1].to?(i.is24Hours=!0,t[a][1]="Open 24HRS"):(i.hasHours=!0,t[a][1]=function(t){var n=o(t.from/60/60);t.from=n;var e=o(t.to/60/60);function o(t){var n,e,o,a=moment.duration(t,"hours");return 0!==a._data.minutes?(n=moment(t,["HH"]).format("h"),e=(e=a._data.minutes).toString(),o=moment(t,["HH"]).format("a"),"".concat(n,":").concat(e).concat(o)):moment(t,["HH"]).format("ha")}return t.to=e,t}(t[a][1]))}var s=[];if(7!==o)for(var c=0;c<e.length;c++){var r={};r.day=e[c],s.push(r)}return function(t){var n,e=moment().format("dddd").toLowerCase(),o=t.length;for(;o--;)if(e==t[o].day[0]){n=o;break}for(var a=0;a<n;a++){var i=t.shift();t.push(i)}}(s),s}();if(0<n.length){var e=$("#locationSchedule").html(),o={days:n,today:[function(t){var n,e;if(t.open){for(var o=t.arr,a=moment().format("dddd").toLowerCase(),i=new Date,s=60*i.getHours()*60+60*i.getMinutes(),c=0;c<o.length;c++)a===o[c].day[0]&&(n=o[c].day);var r=moment(n[1].from,"h:mm:a").diff(moment().startOf("day"),"seconds"),l=moment(n[1].to,"h:mm:a").diff(moment().startOf("day"),"seconds");a===n[0]&&r<=s&&s<=l?t.open=!0:a===n[0]&&!0===n[2].is24Hours?(t.open=!0,t.closingTime="24HRS"):t.open=!1}return 1==t.closingTime?(e=n[1].to,t.closingTime="Closes ".concat(e)):1==t.closingTime&&null==n[1].to&&(t.closingTime=!1),t}({arr:n,open:!0,closingTime:!0})]};return Mustache.render(e,o)}},inovaLocationsLanding.map=function(){function convertToSeconds(t){function n(t){var n=(t=t.split(":"))[1].replace(/\D/g,"")*(100/60),e=t[0],n=Math.floor(n/10);return"".concat(e,".").concat(n)}return t=t.includes("pm")?t.includes(":")?60*(+(t=n(t))+12)*60:60*(+(t=t.replace(/\D/g,""))+12)*60:t.includes(":")?60*(t=n(t))*60:60*(t=t.replace(/\D/g,""))*60}var bounce_timeout;document.getElementById("map")&&function(){for(var locations=drupalSettings.locationsLandingPage.allResults,center={lat:38.860353917298,lng:-77.128126020201},map=new google.maps.Map(document.getElementById("map"),{center:center,disableDefaultUI:!0,scrollwheel:!1,zoom:9,zoomControl:!0}),infowindow=new google.maps.InfoWindow,icon="/themes/inova/public/img/map-marker.png",marker,markerArray=[],tooltipMarkup,count,count=0;count<locations.length;count++){var mapPosition=void 0;null!==locations[count].geolocation&&(mapPosition=new google.maps.LatLng(locations[count].geolocation.lat,locations[count].geolocation.lng)),marker=new google.maps.Marker({position:mapPosition,map:map,icon:icon,title:locations[count].name}),markerArray.push(marker),google.maps.event.addListener(map,"tilesloaded",function(marker,count){count=0;var addressLine1=locations[count].address.address_line1,addressLine3="".concat(locations[count].address.locality,", ").concat(locations[count].address.administrative_area," ").concat(locations[count].address.postal_code),$directions='<a href="'.concat(locations[count].directionsLink,'" target="_blank">Get Directions</a>'),$phoneNumber='<span class="phone-prefix">Phone: </span><a class="phone" href="tel:'.concat(locations[count].phone,'">').concat(locations[count].phone,"</a>"),$item=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"]')),$content=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"] .content')),$schedule=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"] .schedule'));return function(){var $parent=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"]')),$content=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"] .content'));$parent.addClass("active"),$content.show();var today=moment().format("dddd").toLowerCase(),currentTime=moment().format("ha"),createTime=new Date,currentTimeInSeconds=60*createTime.getHours()*60+60*createTime.getMinutes(),dayString="drupalSettings.locationsLandingPage.allResults["+[count]+"].schedule."+today,dayObj=eval(dayString),currentStatus="",openTimeString,openTimeObj,closeTimeString,closeTimeObj,openTimeSeconds,closeTimeSeconds,currentStatus;currentStatus=null!==dayObj?(openTimeString=dayString+".from",openTimeObj=eval(openTimeString),closeTimeString=dayString+".to",closeTimeObj=eval(closeTimeString),openTimeSeconds=convertToSeconds(openTimeObj),closeTimeSeconds=convertToSeconds(closeTimeObj),"0"===openTimeObj&&"86400"===closeTimeObj?'<div class="current-status"><span class="open">Open</span> • <span>24HRS</span></div>':openTimeSeconds<=currentTimeInSeconds&&currentTimeInSeconds<=closeTimeSeconds?'<div class="current-status">\n                                                    <span class="open">Open</span><span class="closing-time">Closes '.concat(closeTimeObj,"</span>\n                                                </div>"):'<div class="current-status"><span class="closed">Closed</span></div>'):"";var $locationLink='<a href="'.concat(locations[count].detailsLink,'" class="more">See Location Details</a>'),$locationName='<a href="'.concat(locations[count].detailsLink,'">').concat(locations[count].name,"</a>"),locationID=locations[count].id,$fax,$shortDescription,addressLine2,addressLine2,$fax=null!==locations[count].fax?'<span class="fax">Fax: '.concat(locations[count].fax,"</span>"):"",$shortDescription=null!==locations[count].short_description?'<div class="desc">'.concat(locations[count].short_description,"</div>"):"";addressLine2=null!==locations[count].address.address_line2?locations[count].address.address_line2:"",tooltipMarkup='<div class="item" data-location-id="'.concat(locationID,'">\n                                            <h2 class="loc-name">').concat($locationName,'</h2>\n                                            <div class="content">\n                                                ').concat($shortDescription,'\n                                                <button class="save" data-type="infowindow" aria-label="Save Location">Save</button>\n                                                <div class="address">\n                                                    <span class="line1">').concat(addressLine1,'</span>\n                                                    <span class="line2">').concat(addressLine2,'</span>\n                                                    <span class="line3">').concat(addressLine3,'</span>\n                                                    <div class="other-details">\n                                                        ').concat($phoneNumber,"\n                                                        ").concat($fax,"\n                                                        ").concat($directions,"\n                                                        <div>").concat($locationLink,"</div>\n                                                        ").concat(currentStatus,"\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>"),infowindow.setContent(tooltipMarkup),infowindow.open(map,marker)}}(marker,count)),google.maps.event.addListener(marker,"click",function(marker,count){var addressLine1=locations[count].address.address_line1,addressLine3="".concat(locations[count].address.locality,", ").concat(locations[count].address.administrative_area," ").concat(locations[count].address.postal_code),$directions='<a href="'.concat(locations[count].directionsLink,'" target="_blank">Get Directions</a>'),$phoneNumber='<span class="phone-prefix">Phone: </span><a class="phone" href="tel:'.concat(locations[count].phone,'">').concat(locations[count].phone,"</a>"),$item=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"]')),$content=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"] .content')),$schedule=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"] .schedule'));return function(){var $button=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"] button.toggle')),$parent=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"]')),$content=$('.locations-landing-wrap .results-wrap .item[data-index="'.concat(count,'"] .content'));$parent.toggleClass("active"),$content.slideToggle(),inovaLocationsLanding.locationAccordion($button),setTimeout(function(){$(".locations-landing-wrap .results-wrap .items-wrap").mCustomScrollbar("scrollTo",'.results-wrap .items-wrap .item[data-index="'.concat(count,'"] h2'),{timeout:60})},400);var today=moment().format("dddd").toLowerCase(),currentTime=moment().format("ha"),createTime=new Date,currentTimeInSeconds=60*createTime.getHours()*60+60*createTime.getMinutes(),dayString="drupalSettings.locationsLandingPage.allResults["+[count]+"].schedule."+today,dayObj=eval(dayString),currentStatus="",openTimeString,openTimeObj,closeTimeString,closeTimeObj,openTimeSeconds,closeTimeSeconds,currentStatus;currentStatus=null!==dayObj?(openTimeString=dayString+".from",openTimeObj=eval(openTimeString),closeTimeString=dayString+".to",closeTimeObj=eval(closeTimeString),openTimeSeconds=convertToSeconds(openTimeObj),closeTimeSeconds=convertToSeconds(closeTimeObj),"0"===openTimeObj&&"86400"===closeTimeObj?'<div class="current-status"><span class="open">Open</span> • <span>24HRS</span></div>':openTimeSeconds<=currentTimeInSeconds&&currentTimeInSeconds<=closeTimeSeconds?'<div class="current-status">\n                                                    <span class="open">Open</span><span class="closing-time">Closes '.concat(closeTimeObj,"</span>\n                                                </div>"):'<div class="current-status"><span class="closed">Closed</span></div>'):"";var $locationLink='<a href="'.concat(locations[count].detailsLink,'" class="more">See Location Details</a>'),$locationName='<a href="'.concat(locations[count].detailsLink,'">').concat(locations[count].name,"</a>"),locationID=locations[count].id,$fax,$shortDescription,addressLine2,addressLine2,$fax=null!==locations[count].fax?'<span class="fax">Fax: '.concat(locations[count].fax,"</span>"):"",$shortDescription=null!==locations[count].short_description?'<div class="desc">'.concat(locations[count].short_description,"</div>"):"";addressLine2=null!==locations[count].address.address_line2?locations[count].address.address_line2:"",tooltipMarkup='<div class="item" data-location-id="'.concat(locationID,'">\n                                            <h2>').concat($locationName,'</h2>\n                                            <div class="content">\n                                                <button class="save" data-type="infowindow" aria-label="Save Location">Save</button>\n                                                ').concat($shortDescription,'\n                                                <div class="address">\n                                                    <span class="line1">').concat(addressLine1,'</span>\n                                                    <span class="line2">').concat(addressLine2,'</span>\n                                                    <span class="line3">').concat(addressLine3,'</span>\n                                                    <div class="other-details">\n                                                        ').concat($phoneNumber,"\n                                                        ").concat($fax,"\n                                                        ").concat($directions,"\n                                                        ").concat($locationLink,"\n                                                        ").concat(currentStatus,"\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>"),infowindow.setContent(tooltipMarkup),inovaLocationsLanding.save({selectorContext:document.getElementById("map"),cookieType:"location",crossReference:!0,counter:document.querySelectorAll(".saved-cookies-counter")}),infowindow.open(map,marker)}}(marker,count))}google.maps.event.trigger("tilesloaded"),google.maps.event.addListenerOnce(map,"tilesloaded",function(){setTimeout(function(){inovaLocationsLanding.save({selectorContext:document,cookieType:"location",crossReference:!0,counter:document.querySelectorAll(".saved-cookies-counter")})},10)}),$("section.location-search .listing-wrap .items-wrap button.toggle").on("click",function(){var t=$(this).parents("[data-index]").attr("data-index");google.maps.event.trigger(markerArray[t],"click")}),bounce_timeout=[],$("section.location-search .items-wrap .item").mouseover(function(){var t,n;$(this).hasClass("active")||(t=$(this).attr("data-index"),(n=markerArray[t]).setAnimation(google.maps.Animation.BOUNCE),void 0!==bounce_timeout[t]&&clearTimeout(bounce_timeout[t]),bounce_timeout[t]=setTimeout(function(){n.setAnimation(-1)},1400))}).mouseout(function(){var t=$(this).attr("data-index"),n=markerArray[t];n.active||n.setAnimation(-1)}),setTimeout(function(){marker&&(google.maps.event.addListener(marker,"active",function(){marker.active=!0}),google.maps.event.addListener(marker,"inactive",function(){marker.setAnimation(-1),marker.active=!1}))},1e3)}()},inovaLocationsLanding.helpers={submitOnKeyWordSearch:function(){$('.keyword-search input[name="keywords"]').on("keypress",function(t){13===t.which&&inovaLocationsLanding.submitSearch()})}},inovaLocationsGeolocation(),window.inovaLocationsLanding=inovaLocationsLanding}(jQuery);