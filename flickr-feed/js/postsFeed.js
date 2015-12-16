(function () {
    'use strict';

    angular.module('flickrFeed').service('postsFeed', function ($http, utils) {
        var that = this;

        that.posts = [];

        that.getPost = function (postId) {
            var i;

            for(i = 0; i < that.posts.length; i++) {
                if (that.posts[i].id === postId) {
                    return that.posts[i];
                }
            }
        };

        // note that I have made an assumption here that the final part of
        // the link is unique to the post. This may need to be changed / clarified
        // in the future. Simply used as a way to refer to a post internally by
        // a single id.
        function getIdForPost(post) {
            return post.link.split('/').reverse()[1];
        }

        // note that I have made an assumption here about how to properly extract
        // the name of the author from data in the post object.
        function getAuthorNameForPost(post) {
            var regExp = /\(([^)]+)\)/;
            var matches = regExp.exec(post.author);

            return matches[1];
        }

        that.onPostsUpdated = utils.createSubscriptionFunction();

        var query = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';
        $http.jsonp(query).then(function(response) {
            that.posts = response.data.items.map(function (post) {
                post.id = getIdForPost(post);
                post.authorName = getAuthorNameForPost(post);
                return post;
            });
            that.onPostsUpdated.notify();
        }, function (d) {
            alert('an error occured.')
        });
    });

}());
