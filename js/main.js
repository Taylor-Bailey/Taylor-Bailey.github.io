'use strict';
let $ = require("../lib/node_modules/jquery");

let printer = require('./print');
let nav= require('./scrollnav');

nav.scrollNav();
printer.printArt();


$(document).on("click" , "#iconSelector", function(){
    event.preventDefault();
    console.log("hearing the click");
    $("#iconSelector").addClass("activeSelector");
    $("#artSelector").removeClass("activeSelector");
    $("#logoSelector").removeClass("activeSelector");
    printer.printIcons();
    $('.carousel').carousel('cycle');
  });

  $(document).on("click" , "#logoSelector", function(){
    event.preventDefault();
    console.log("hearing the click");
    $("#logoSelector").addClass("activeSelector");
    $("#artSelector").removeClass("activeSelector");
    $("#iconSelector").removeClass("activeSelector");
    printer.printLogos();
    $('.carousel').carousel('cycle');
  });

  $(document).on("click" , "#artSelector", function(){
    event.preventDefault();
    console.log("hearing the click");
    $("#artSelector").addClass("activeSelector");
    $("#logoSelector").removeClass("activeSelector");
    $("#iconSelector").removeClass("activeSelector");
    printer.printArt();
    $('.carousel').carousel('cycle');
  });

