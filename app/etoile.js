'use strict';

angular.module('directives', [])
    .directive('etoile', function(){
       return function(scope, element, attrs){

           var nb, max;

           function draw() {
               var html = '';
               for (var i = 0 ; i < nb ; i++) {
                   html += '<img src="star.png"/>';
               }
               for ( ; max && i < max ; i++) {
                   html += '<img src="empty-star.png"/>';
               }
               element.html(html);
           }

           scope.$watch(attrs.maxEtoiles, function (value) {
               max = value;
               draw();
           });

           scope.$watch(attrs.etoiles, function (value) {
               nb = value;
               draw();
           });
       };
    });