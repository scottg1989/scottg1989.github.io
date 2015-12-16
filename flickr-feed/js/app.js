(function () {
    'use strict';

    var myApp = angular.module('flickrFeed', ['ui.router', 'angularUtils.filters.ordinalDate']);

    myApp.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/posts");

        $stateProvider
        .state('posts', {
            url: "/posts",
            templateUrl: "/partials/postsListing.html",
            controller: 'postsCtrl',
            controllerAs: 'postsListing'
        })
        .state('postDetail', {
            url: "/posts/:postId",
            templateUrl: "/partials/postDetail.html",
            controller: 'postDetailCtrl',
            controllerAs: 'postDetail'
        });
    });

}());
