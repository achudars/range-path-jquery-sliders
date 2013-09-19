$(function() {
	var hSimple = $( ".hSimpleSlider" ).slider();
	var vSimple = $( ".vSimpleSlider" ).slider();

	var hRange = $( ".hRangeSlider" ).slider();
	var vRange = $( ".vRangeSlider" ).slider();

	var hJQRange = $(".hJQRangeSlider").rangeSlider();

	
	/* simple sliders */
	hSimple.slider({
		range: "min",
		value: 123,
		min: 1,
		max: 1000,
		slide: function( event, ui ) {
			$( "#hSimpleAmount" ).text( ui.value );
		}
	});
	$( "#hSimpleAmount" ).text( hSimple.slider( "value" ) );

	vSimple.slider({
		orientation: "vertical",
		range: "min",
		value: 123,
		min: 1,
		max: 1000,
		slide: function( event, ui ) {
			$( "#vSimpleAmount" ).text( ui.value );
		}
	});
	$( "#vSimpleAmount" ).text( vSimple.slider( "value" ) );

	/* range sliders */
	hRange.slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 123, 789 ],
		slide: function( event, ui ) {
			$( "#hRangeAmount" ).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#hRangeAmount" ).text( hRange.slider( "values", 0 ) +
		" - " + hRange.slider( "values", 1 ) );
	vRange.slider({
		orientation: "vertical",
		range: true,
		min: 0,
		max: 1000,
		values: [ 123, 789 ],
		slide: function( event, ui ) {
			$( "#vRangeAmount" ).text( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#vRangeAmount" ).text( vRange.slider( "values", 0 ) +
		" - " + vRange.slider( "values", 1 ) );


	/* jqRangeSlider sliders */
	/*hJQRange.rangeSlider({range: {min: 10}});*/

	hJQRange.bind("valuesChanged", function(e, data){
		$( "#hJQRangeAmount" ).text( data.values.min.toFixed(0) + " - " + data.values.max.toFixed(0) );
	});

	/* Pathslider sliders */
	$("#vCurvedSlider").pathslider({
		points     : [ 150,250,-50,-50,-50,50,150,50 ],
		curve      : { width:15, color:"rgb(55, 60, 67 )"},
	});

	$("#vCurvedSliderInner").pathslider({
		points     : [ 150,250,-50,-50,-50,50,150,50 ],
		value      : 100,
		dataPoints : 100,
		rotateGrip : false,
		tolerance  : 1,
		curve      : { width:5, color:"rgb(51, 129,193)" },
		// called while the grip is moving
		slide      : function(e,slider) {
			$("#vCurvedAmount").text(slider.percent);
		}
	});


});
