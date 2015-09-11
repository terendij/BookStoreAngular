'use strict';

angular.module('catalogModule',
        [
            'inboxServices',
            'stateServices',
            'catalogServices'
        ]).controller('CatalogController',
    function($rootScope, $location, inboxManagementService, stateService, sortOptions, catalogService){

        var catalog = this;

        $rootScope.routeTitle = 'Book store';

        catalog.sortOptions = sortOptions.list;


        catalog.state = stateService('/catalog', {'selectSort' :sortOptions.default});

        catalog.addBook = function (book){
            inboxManagementService.addRow(book);
            $location.path("/inbox");
        };

        // Simple GET request example :
        catalogService.getCatalog().then(function(data){
            catalog.booksFromURL = data;
        });


    });