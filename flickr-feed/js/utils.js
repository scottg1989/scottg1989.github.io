(function () {
    'use strict';

    angular.module('flickrFeed').service('utils', function () {
        function createSubscriptionFunction() {
            var callbacks = [];

            var registerFunction = function (callback) {
                callbacks.push(callback);
            };

            registerFunction.notify = function () {
                callbacks.forEach(function (callback) {
                    callback();
                });
            };

            return registerFunction;
        }

        return {
            createSubscriptionFunction: createSubscriptionFunction
        };
    });

}());
