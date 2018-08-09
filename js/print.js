'use strict';

let $ = require('jquery');

console.log("hello print.js");

let printLogos = () => {
    $(".carouselContainer").html(
        `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol id="active-carousel-indicators" class="carousel-indicators carouselBar">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 " src="./images/logo/beararms-logo.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/logo/pantry-logo.svg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/logo/unicorn.svg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/logo/wyfy-logo.svg" alt="Fourth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/logo/flamepoint.png" alt="Fifth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/logo/music-city-pet-sitting.png" alt="Sixth slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>`
    );
};

let printIcons = () => {
    $(".carouselContainer").html(
        `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol id="active-carousel-indicators" class="carousel-indicators carouselBar">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./images/icons/missile-alert-icons.svg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/icons/wyfy-icons.svg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/icons/pantry-icons.png" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/icons/beararms-icons.svg" alt="Fourth slide">
                </div>           
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>`
    );
};

let printArt = () => {
    $(".carouselContainer").html(
        `<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol id="active-carousel-indicators" class="carousel-indicators carouselBar">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./images/art/wizard.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/rodeo.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/unstoppable.png" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/eagle.png" alt="Fourth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/octo.png" alt="Fifth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/kneepads.png" alt="Sixth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/fett.png" alt="Seventh slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/right.png" alt="Eighth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/tmg.png" alt="Ninth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/damo.png" alt="Tenth slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/camu.png" alt="Eleventh slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./images/art/vegeta.png" alt="Twelfth slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>`
    );
};

module.exports = { printArt, printIcons, printLogos };