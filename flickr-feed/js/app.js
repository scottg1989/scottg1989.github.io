(function () {
    'use strict';

    var myApp = angular.module('flickrFeed', ['ui.router', 'angularUtils.filters.ordinalDate']);

    myApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/posts");

        $stateProvider
        .state('posts', {
            url: "/posts",
            templateUrl: "/flickr-feed/partials/postsListing.html",
            controller: 'postsCtrl',
            controllerAs: 'postsListing'
        })
        .state('postDetail', {
            url: "/posts/:postId",
            templateUrl: "/flickr-feed/partials/postDetail.html",
            controller: 'postDetailCtrl',
            controllerAs: 'postDetail'
        });
    });

}());
