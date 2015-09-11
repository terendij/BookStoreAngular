'use strict';

angular.module('catalogServices', []).
    factory('catalogService', function($http, $q){

        var catalogURL = 'https://api.mongolab.com/api/1/databases/books/collections/books/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

        var catalogPromise = $http.get(catalogURL).then(function(response) {
            return response.data;
        }, function(){
            $q.reject("Pas trouvé les livres");
        });

        return {
            getCatalog : function(){
                return catalogPromise
            },
            getBookById : function(bookId){

                return catalogPromise.then(function(data){

                    return data.filter(function(item){
                           return item._id.$oid == bookId
                    })[0] || $q.reject("Pas trouvé le livre");
                });
            }
        }
    });