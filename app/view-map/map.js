'use strict';

angular.module('mapModule', []).controller('MapController',
    function(){

        var mapCtrl = this;

        mapCtrl.maps = [
            { center: {lat: 43.86823121550797, lng: 4.083504661560028}, zoom: 12, label:'Vic-Le-Fesq' },
            { center: {lat: 37.423, lng: -122.086}, zoom: 9, label:'Montain view' }
        ];
    }
);