(function($) {
	$.getJSON('/courses.json', function(data) {
		$('.views-table')
			.eventTable({ data: data });
		return true;
	});
})(jQuery);