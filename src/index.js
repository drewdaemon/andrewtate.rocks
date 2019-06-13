import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jqueryui/jquery-ui.min.css';
import './style.css';

import $ from 'jquery';
import 'jqueryui';
import Vivus from 'vivus';
import Typed from 'typed.js';
import 'impress.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.html';

import mobilecheck from './mobile-checker';

window.location.hash = '/first';

function hidePointer() {
    $('#link-pointer').addClass('fadeOut');
    $('#pointer-text').addClass('fadeOut');
}

function showPointer() {
    $('#link-pointer').show().addClass('animated fadeInUp');
    setTimeout(function() {$('#pointer-text').show().addClass('animated fadeIn')}, 1000);
    setTimeout(hidePointer, 4000);
}

function showPortfolio() {
    $('#impress').addClass('animated fadeOut');
    $('#overlay').removeClass('animated fadeOut');
    $('#overlay').addClass('animated fadeIn');
    $('#portfolio').show();
    $('#first').remove();
}

$('#showPF').on('click', function () {
    showPortfolio();
});

$('#first').on('impress:stepenter', function () {
    $(function () {
        new Typed("#first", {
            strings: ['Hello, I’m Andrew! ^1000', 'Press space bar <br> to learn <br> more about me!'],
            typeSpeed: 40,
            backSpeed: 40,
            startDelay: 1000,
            showCursor: false,
            // callback: showPointer,
            contentType: 'html'
        });
    });
});

$('#technologies').on('impress:stepenter', function () {
    var technologies = $(this).children('div.technology');
    setTimeout(function () {technologies.eq(0).show().addClass('animated bounceInLeft');}, 500);
    setTimeout(function () {technologies.eq(1).show().addClass('animated rotateInUpRight');}, 1000);
    setTimeout(function () {technologies.eq(2).show().addClass('animated zoomInRight');}, 1500);
    setTimeout(function () {technologies.eq(3).show().addClass('animated zoomInDown');}, 2000);
    setTimeout(function () {technologies.eq(4).show().addClass('animated zoomInUp');}, 2500);
    setTimeout(function () {technologies.eq(5).show().addClass('animated bounceInRight');}, 3000);
    setTimeout(function () {technologies.eq(6).show().addClass('animated zoomInRight');}, 3500);
    setTimeout(function () {technologies.eq(7).show().addClass('animated zoomInRight');}, 4000);
    setTimeout(function () {technologies.eq(8).show().addClass('animated zoomInRight');}, 4500);
    setTimeout(function () {technologies.eq(8).show().addClass('animated zoomInRight');}, 5000);
    setTimeout(function () {technologies.eq(9).show().addClass('animated rubberBand');}, 5000);
    setTimeout(function () {technologies.eq(10).show().addClass('animated zoomInRight');}, 5500);
    setTimeout(function () {technologies.eq(11).show().addClass('animated zoomIn');}, 6400);
});

$('#big-pic').on('impress:stepenter', function () {
    setTimeout(function () {$('#landscape-container').removeClass('invisible').addClass('animated fadeIn');}, 1000);
});

function jump () {
    $('#dive').animate({top: "+=1000px", left: "+=300px"}, {
        duration: 600,
        specialEasing: {top: 'easeInQuad', left: 'easeOutQuad'},
        complete: function () {
            $('#dive').hide();
        }
    });
}

$('#details').on('impress:stepenter', function () {
    $('#angle').show();
    $('#dive').animate(
        {
            right: '-=80px',
        },
        {
            duration: 600,
            complete: function () {
                $('#dive').addClass('animated bounce');
                setTimeout(jump, 1500)
            }
        }
    );
});

$('#angle').on('impress:stepenter', function () {
    $('#angle').show();
    setTimeout(function () {
        $('#lightbulb-container').removeClass('invisible');
        new Vivus('lightbulb', {duration: 200, pathTimingFunction: Vivus.EASE_IN, type: 'async'}, function () {
            setTimeout(function () {
                showPortfolio();
            }, 2500);
        });
    }, 500);
});

$( document ).ready(function () {
    $('body').show();
    if (!mobilecheck()) {
        impress().init();

        setTimeout(function () {
            $('#overlay').addClass('animated fadeOut');
        }, 500);
    } else {
        showPortfolio();
    }
});

