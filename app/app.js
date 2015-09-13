'use strict';

angular.module('bookStoreApp',
        [
            'ngRoute',
            'ngSanitize',
            'catalogModule',
            'mapModule',
            'bookModule',
            'appComponents',
            'inboxModule',
            /*'objectTable',*/
            'directives',
            'mapDirective'
        ]).
    /*config(function(inboxManagementServiceProvider){
        inboxManagementServiceProvider.limit = 200;
    }).*/
    config(function($routeProvider) {

        $routeProvider.when('/catalog', {
            templateUrl : 'view-catalog/catalog.html',
            controller : 'CatalogController',
            controllerAs: 'catalogCtrl'
        });

        $routeProvider.when('/book/:bookId', {
            templateUrl : 'view-book/book.html',
            controller : 'BookController',
            controllerAs: 'bookCtrl'
        });

        $routeProvider.when('/inbox', {
            templateUrl : 'view-inbox/inbox.html',
            controller : 'InboxController',
            controllerAs: 'inboxCtrl'
        });

        $routeProvider.when('/map', {
            templateUrl : 'view-map/map.html',
            controller : 'MapController',
            controllerAs: 'mapCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/catalog'});
    });
