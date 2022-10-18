"use strict";function ownKeys(e,t){var o,a=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)),a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach(function(t){_defineProperty(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function _defineProperty(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}!function(t){var i={},i={settings:{storage_key:"doctorLocation",lat_selector:"#latitude",lng_selector:"#longitude",formatted_address_selector:"#formatted_address",fallback_location:{lat:39.0920031,lng:-77.2578338,formatted_address:"3300 Gallows Rd, Falls Church, VA 22042"}},requestLocation:function(){var t=this.getLocation();return new Promise(function(e,o){"geolocation"in navigator&&_.isEmpty(t)&&navigator.geolocation.getCurrentPosition(function(t){i.setLocation({lat:t.coords.latitude,lng:t.coords.longitude}),i.setLatLongFormFields(),e({lat:t.coords.latitude,lng:t.coords.longitude})},function(t){alert("Error getting location: (".concat(t.code,"): ").concat(t.message)),o(t)},{timeout:5e3,maximumAge:0,enableHighAccuracy:!0})})},requestAddress:function(){var e=this;return new Promise(function(a,n){var t=new google.maps.Geocoder,r=e.getLocation().lat,s=e.getLocation().lng;t.geocode({location:{lat:r,lng:s}},function(t,e){var o=i.settings.fallback_location.formatted_address;"OK"===e?t[0]?(o=t[0].formatted_address,a(t)):(alert("Address not found for lat: ".concat(r," long: ").concat(s)),a(e)):n(e),i.updateLocation({formatted_address:o}),i.setFormattedAddressField()})})},requestLatLngFromAddress:function(r){var s=this;return new Promise(function(a,n){(new google.maps.Geocoder).geocode({address:r},function(t,e){var o;e===google.maps.GeocoderStatus.OK?t[0]?(o={lat:t[0].geometry.location.lat(),lng:t[0].geometry.location.lng(),formatted_address:r},s.setLocation(o),s.setLatLongFormFields(),a(o)):(alert("Results not available: ".concat(t)),i.setLocation({lat:i.settings.fallback_location.lat,lng:i.settings.fallback_location.lng,formatted_address:i.settings.fallback_location.formatted_address}),s.setLatLongFormFields(),n(t)):(alert("Status not OK: ".concat(e)),i.setLocation({lat:i.settings.fallback_location.lat,lng:i.settings.fallback_location.lng,formatted_address:i.settings.fallback_location.formatted_address}),s.setLatLongFormFields(),n(e))})})},setLocation:function(t){sessionStorage.setItem(this.settings.storage_key,JSON.stringify({lat:t.lat,lng:t.lng,formatted_address:t.formatted_address}))},updateLocation:function(t){this.setLocation(_objectSpread(_objectSpread({},this.getLocation()),t))},getLocation:function(){return JSON.parse(sessionStorage.getItem(this.settings.storage_key))},deleteLocation:function(){sessionStorage.removeItem(this.settings.storage_key)},setLatLongFormFields:function(){t(this.settings.lat_selector).val(this.getLocation().lat),t(this.settings.lng_selector).val(this.getLocation().lng)},setFormattedAddressField:function(){t(this.settings.formatted_address_selector).val(this.getLocation().formatted_address)},clearLatLongFormFields:function(){t(this.settings.lat_selector).val(""),t(this.settings.lng_selector).val("")},clearAddressField:function(){t(this.settings.formatted_address_selector).val("")},hasLocation:function(){return!_.isEmpty(sessionStorage.getItem(this.settings.storage_key))},removeMyLocation:function(){return new Promise(function(t){i.deleteLocation(),i.clearLatLongFormFields(),i.clearAddressField(),inovaDoctors.toggleLocationText();var e=window.location.href,e=inovaHelpers.removeURLParameter(e,"radius");e=inovaHelpers.removeURLParameter(e,"longitude"),e=inovaHelpers.removeURLParameter(e,"latitude"),t(inovaHelpers.removeURLParameter(e,"formatted_address"))})}};window.inovaGeoLocation=i}(jQuery);