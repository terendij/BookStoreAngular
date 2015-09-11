'use strict';

angular.module('inboxModule', ['inboxServices']).controller('InboxController',
    function($rootScope, inboxManagementService ){

        var inbox = this;

        $rootScope.routeTitle = 'Panier';

        inbox.rows = inboxManagementService.rows;

        inbox.htTot = inboxManagementService.htTotal();
        inbox.ttcTot = inboxManagementService.ttcTotal();
        inbox.isBig = function(item) { return inboxManagementService.isBig(item)};

        inbox.calcHTAmount = function(item){
            item.htAmount = inboxManagementService.htRowAmount(item);
            inbox.htTot = inboxManagementService.htTotal();
            return item.htAmount;
        };

        inbox.calcTTCAmount = function(item){
            item.ttcAmount = inboxManagementService.ttcRowAmount(item);
            inbox.ttcTot = inboxManagementService.ttcTotal();
            return item.ttcAmount;
        };

        inbox.delItem = function(item){
            inboxManagementService.delRow(item);
            inbox.htTot = inboxManagementService.htTotal();
            inbox.ttcTot = inboxManagementService.ttcTotal();
        };
    });