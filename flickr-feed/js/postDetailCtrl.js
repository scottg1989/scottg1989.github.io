(function () {
    'use strict';

    angular.module('flickrFeed').controller('postDetailCtrl', function ($stateParams, postsFeed, $sce) {
        var that = this;

        function loadPostData() {
            that.post = postsFeed.getPost($stateParams.postId);
        }

        postsFeed.onPostsUpdated(loadPostData);
        loadPostData();

        that.tagsArray = function () {
            if (!that.post) {
                return [];
            }
            return that.post.tags.split(' ');
        };

        that.imageDescription = function () {
            var html = $.parseHTML(  );

            var parsedHtml = $.parseHTML(that.post.description)
            var el = $('<span></span>').append(parsedHtml);
            el.find('p:nth-child(1), p:nth-child(2)').remove();

            return $sce.trustAsHtml(el.text().trim())
        };
    });

}());
