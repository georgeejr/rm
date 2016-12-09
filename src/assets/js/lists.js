/*
Author: georgeejr
Dependencies: handlebarjs, jQuery 
*/
 
var rmApp = rmApp || {};

(function($){
    'use strict';
      var probListing = {
            init: () =>{
                 probListing.loadData();    
            }, 
            handlerData: (json) =>{
                    var templateSource   = $("#list-template").html(),
                        template = Handlebars.compile(templateSource),
                        studentHTML = template(json);
                    $('#probListing').html(studentHTML);
            },
            loadData : () =>{
                $.ajax({
                    url:"https://api.myjson.com/bins/150rl",
                    method:'get',
                    success:probListing.handlerData(json);

                })
            }
        };
      $(function(){
            probListing.init();
      });


})(jQuery);