'use strict';
let $ = require("../lib/node_modules/jquery");

let scrollNav = () => {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 930 ) {
                $('#hide-nav')
                .fadeIn(600)
                .css('display', 'flex')
                .css('flex-direction', 'row')
                .css('justify-content', 'end');
            } else {
                $('#hide-nav')
                .fadeOut(600);
            }
        });
    });
};

module.exports = { scrollNav };