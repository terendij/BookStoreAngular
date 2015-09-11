'use strict';

angular.module('bookModule', ['catalogServices']).controller('BookController',
    function($routeParams, catalogService, $rootScope){
    var book = this;

    book.bookId =$routeParams.bookId;

        catalogService.getBookById(book.bookId).then(function(data){
            book.bookFromURL = data;
            $rootScope.routeTitle = book.bookFromURL.title;
        }, function(error){

        });
});