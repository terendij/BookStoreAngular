"use strict";

angular.module('mapDirective', [])
    .directive('gmaps', function () {
        return {
            restrict: 'AE',
            transclude:true,
            templateUrl:'view-map/gmaps.html',
            scope: {
                center :'=',
                zoom :'='
            },
            link: function (scope, element, attrs) {
                var firstDiv = element.find('div')[0];
                var map = new google.maps.Map(firstDiv, scope);

                scope.$watch('zoom', function(newZoom){
                      map.setZoom(newZoom);
                });
                scope.$watch('center', function(newCenter){
                    map.setCenter(newCenter);
                }, true);


                map.setMapTypeId(google.maps.MapTypeId.TERRAIN);


                google.maps.event.addListener(map, 'zoom_changed', function () {
                    scope.$applyAsync(function(){
                        scope.zoom = map.getZoom();
                    });
                });

               google.maps.event.addListener(map, 'center_changed', function () {
                   scope.$applyAsync(function(){
                       scope.center.lat = map.getCenter().lat();
                       scope.center.lng = map.getCenter().lng();
                   });
                });

                scope.markers = [];

                scope.addMarker = function(){
                    var objMarker = {
                        label: scope.markerLbl,
                        lat:scope.center.lat,
                        lng:scope.center.lng,
                        zoom:scope.zoom
                    };

                    var marker = new google.maps.Marker({
                        position: scope.center,
                        map: map,
                        title: scope.markerLbl
                    });

                    scope.markers.push(objMarker);
                    scope.markerLbl = '';
                };

                scope.goto = function(marker){
                    scope.zoom = marker.zoom;
                    scope.center.lat = marker.lat;
                    scope.center.lng = marker.lng;
                };
            }
        };
    });