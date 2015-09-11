'use strict';

angular.module('stateServices', []).
    factory('stateService', function($cacheFactory){

        var cache = $cacheFactory('stateService');

        return function(pageId, initialValue){
             return cache.get(pageId) || cache.put(pageId, initialValue);
        }
    }).
    factory('sortOptions', function(){
        var sorts = [
            {label:'Prix croissant', data:'price'},
            {label:'Prix décroissant', data:'-price'},
            {label:'Titre', data:'title'}
        ];
        return {
             list : sorts,
            default : sorts[2]
        };
    })
;