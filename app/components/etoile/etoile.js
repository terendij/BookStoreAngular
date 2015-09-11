'use strict';

angular.module('directives', [])
    .directive('etoile', function(){
       return function(scope, element, attrs){


           scope.$watch(attrs.etoiles, function (value) {

               var html = '';
               for (var i = 0 ; i < value ; i++) {
                   html += '<img src="star.png"/>';
               }
               for ( ; i < 5 ; i++) {
                   html += '<img src="empty-star.png"/>';
               }
               element.html(html);
           });
       };
    });