/* CURRENTLY IN: javascript/main.js */
(function(){



	$('textarea').keypress(function() {
		var val = $(this).val();
		var markedhtml = marked( val );

		var processed = $( this ).prev();

		processed.html( markedhtml );

		// console.log( processed )

		// dispaly$("processed").html( 'markdownhtml' );
			

	});


	$( ".button" ).on( "mousedown", function() {
  		$('textarea').hide();
  		xepOnline.Formatter.Format('print');
  		setTimeout(function(){
  			$('textarea').show();
  			}, 1000);

	});

	
	



})();


