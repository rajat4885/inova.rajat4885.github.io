"use strict";!function(t){var o={carousel:function(o){0<t(".doctor-carousel",o).length&&(t(".doctor-carousel",o).slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}}]}),t(".doctor-carousel",o).favoriteItem({container:".slick-list",cookieName:"savedDoctor",button:"button.save",parent:".provider",dataAttr:"doctor",text:"Doctor",link:"/doctors?saved=1"}))}};window.inovaDoctorsParagraph=o}(jQuery);