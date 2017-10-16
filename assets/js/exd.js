/*jslint browser: true, evil: false, plusplus: true */
/*global $ */

(function (globals) {
    'use strict';

    var EXD = {

        Modules: {},

        Utilities: {},

        // Events: $({}), // Example of using JQuery for events.
        Events: false,

        init: function (events) {
            var x;

            this.Events = events || false;

            for (x in EXD.Modules) {
                if (EXD.Modules.hasOwnProperty(x) && typeof (EXD.Modules[x].init) === "function") {
                    EXD.Modules[x].init();
                }
            }
        }
    };

    globals.EXD = EXD;
}(this));

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

/*jslint browser: true, evil: false, plusplus: true */
/*global EXD, $ */

(function (globals) {
    'use strict';
    // Add modules
    // globals.EXD.Modules.EXDTopNav = EXDTopNav;
    globals.EXD.Modules.EXDSticky = EXDSticky;

    // Initialise
    globals.EXD.init($({}));
}(this));
  