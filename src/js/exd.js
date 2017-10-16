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
