/*
Author: georgeejr		
Description: 	parse JSON embedded
Usage: 			<script id="team-member-data"  type="text/x-json">
                [
                    {
                        "DetailsURL": "/team-member-repository/roger-sharp",
                        "ImageURL": "",
                        "Name": "ROGER SHARP",
                        "Position": "Chairman"
                    }
                ]
                </script>

  				var peopleData = $("team-member-data").embeddedData();
*/
(function($){
	$.fn.embeddedData = function(prop){
		var xJson = this.data('x-json');
		
		if( !xJson && this.attr('type') === 'text/x-json' ) {
			xJson = $.parseJSON( this.html() );
			this.data( 'x-json', xJson );
		}	
		
		if( prop ) {
			return xJson[prop] || null;
		} else {
			return xJson || {};
		}
	};
})(jQuery);