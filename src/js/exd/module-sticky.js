(function (globals) {
    'use strict';
    var init,
        sticky,
        Sticky,
        EXD = globals.EXD || {};

    // Create empty function upon which to hang the prototypes below
    Sticky = function Sticky() {};

    Sticky.prototype.init = function(){

        var header = document.getElementById('header');
        var main = document.getElementById('main');

        console.log('loading sticky');
    };


    // use below to init on all pages
    // sticky = new Sticky();
    // this has been left in, in case requirements change
    init = function () {
        // sticky.init();
    };

    globals.EXDSticky = {
        init: init,
        sticky: Sticky
    };

}(this));
