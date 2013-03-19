(function($) {
	$.getJSON('/sites/default/files/courses.json', function(data) {
		$('.views-table')
			.eventTable({ data: data });
		return true;
	});
})(jQuery);