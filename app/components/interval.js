'use strict';

angular.module('appComponents', [])
    .filter('interval', function($parse){
        return function(input, expr, min, max){
            var getter = $parse(expr);
            return input && input.filter(function (item){
                var value = getter(item);
               return (!min || value >= min) && (!max ||value <=max);
            });
        } ;
    }

);