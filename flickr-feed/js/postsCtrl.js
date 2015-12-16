(function () {
    'use strict';

    angular.module('flickrFeed').controller('postsCtrl', function (postsFeed) {
        var that = this;

        that.posts = function () {
            return postsFeed.posts;
        };
    });

}());
