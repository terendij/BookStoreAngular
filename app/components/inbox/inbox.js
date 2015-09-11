'use strict';

angular.module('inboxServices', [])
    .value('tax', 1.20)
    .provider('inboxManagementService', {
        limit : 1000,
       $get : function(tax){
           var provider = this;
           return {
               rows : {},
                addRow : function(book){
                      var row = this.rows[book._id.$oid];
                    if(row){
                        row.quantity++;
                    }else{
                        this.rows[book._id.$oid] = {book:book, quantity:1};
                    }
                },
                delRow : function(row){
                  delete this.rows[row.book._id.$oid];
                },
                htRowAmount : function(row){
                    return row.quantity * row.book.price;
                },
                ttcRowAmount : function(row){
                    return this.htRowAmount(row)*tax;
                },
                htTotal : function(){
                    var totalHt = 0;

                    for (var i in this.rows){
                        totalHt+=this.htRowAmount(this.rows[i]);
                    }

                    return totalHt;
                } ,
                ttcTotal : function(){
                    return this.htTotal()*tax;
                },
                isBig : function(row){
                    return this.htRowAmount(row) > provider.limit;
                }
            };
        }
    }
);
