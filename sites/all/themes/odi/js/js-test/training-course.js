module('auto-substitution');

test('table substituted', function () {
	var events = {
  	"http://dummy.eventbrite.co.uk/": {
	      "@type": "http://schema.org/Event",
	      "startDate": "2013-04-29T09:00:00",
	      "endDate": "2013-05-01T17:00:00",
	      "location": {
	        "@type": "http://schema.org/Place",
	        "name": "Covent Garden, London"
	      },
	      "offers": [{
	        "@type": "http://schema.org/Offer",
	        "name": "Standard Registration",
	        "price": 1395.00,
	        "priceCurrency": "GBP",
	        "validFrom": "2013-03-29",
	        "validThrough": "2013-04-28",
	        "inventoryLevel": 13
	      }, {
	        "@type": "http://schema.org/Offer",
	        "name": "Early-Bird Registration",
	        "price": 1255.00,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-03-29",
	        "inventoryLevel": 13
	      }]
    	}
		}
	, $eventTable
	;
	$('#test1').eventTable({
		data: events,
		date: new Date('2013-02-13')
	});
	$eventTable = $('.table:eq(0)');
	ok($eventTable.is('table'), 'eventTable() returns a table');
	equal($eventTable.attr('class'), 'table', 'the table has a class of .table');
	ok($eventTable.find('thead').is('thead'), 'the table contains a thead');
	equal($eventTable.find('thead tr').length, 1, 'the thead has a single row');
	equal($eventTable.find('thead tr th').length, 5, 'the thead has five columns');
	equal($eventTable.find('thead tr th:eq(0)').text(), 'Course Date', 'the first column is entitled "Course Date"');
	equal($eventTable.find('thead tr th:eq(1)').text(), 'Location', 'the second column is entitled "Location"');
	equal($eventTable.find('thead tr th:eq(2)').text(), 'Price', 'the third columns is entitled "Price"');
	equal($eventTable.find('thead tr th:eq(3)').text(), '', 'the fourth column has no title');
	equal($eventTable.find('thead tr th:eq(4)').text(), '', 'the final column has no title');
	ok($eventTable.find('tbody').is('tbody'), 'the table contains a tbody');
	equal($eventTable.find('tbody tr').length, 1, 'the tbody has a single row');
	equal($eventTable.find('tbody tr td').length, 5, 'the row has five cells');
	equal($eventTable.find('tbody tr td:eq(0)').text(), '29 Apr - 1 May 2013');
	equal($eventTable.find('tbody tr td:eq(1)').text(), 'Covent Garden, London');
	equal($eventTable.find('tbody tr td:eq(2)').text(), '£1,395.00 £1,255.00 (until 29 Mar)');
	equal($eventTable.find('tbody tr td:eq(3) a').attr('href'), '/courses/something-2013-06-01');
	equal($eventTable.find('tbody tr td:eq(3) a').attr('class'), 'btn btn-small btn-info');
	equal($eventTable.find('tbody tr td:eq(3) a').text(), 'More Details');
	equal($eventTable.find('tbody tr td:eq(4) a').attr('href'), 'http://dummy.eventbrite.co.uk/');
	equal($eventTable.find('tbody tr td:eq(4) a').attr('class'), 'btn btn-small btn-primary');
	equal($eventTable.find('tbody tr td:eq(4) a').text(), 'Book Now');
});

// this test is based on a specific set of data coming through from the test server
asyncTest('ajax table substitution', function () {
	$.ajax(
		'http://151.236.219.131/sites/default/files/courses.json',
		{
			dataType: 'json',
			success: function (data) {
				$('#test2')
					.eventTable({ data: data });
				$eventTable = $('.table:eq(1)');
				equal($eventTable.find('tbody tr').length, 2, 'the tbody has two rows');
				equal($eventTable.find('tbody tr:eq(0) td:eq(0)').text(), '17 Mar 2013');
				equal($eventTable.find('tbody tr:eq(0) td:eq(1)').text(), 'The office');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2)').text(), '£1.00 free');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2) strike').text(), '£1.00');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2) em').text(), 'free');
				equal($eventTable.find('tbody tr:eq(0) td:eq(3) a').attr('href'), '/courses/drupal-down-the-rabbit-hole-2013-03-17');
				equal($eventTable.find('tbody tr:eq(0) td:eq(4) a').attr('href'), 'http://www.eventbrite.com/event/5441375300');
				equal($eventTable.find('tbody tr:eq(1) td:eq(0)').text(), '16 Apr 2013');
				equal($eventTable.find('tbody tr:eq(1) td:eq(1)').text(), 'Open Data Institute');
				equal($eventTable.find('tbody tr:eq(1) td:eq(2)').text(), 'from £185.15');
				equal($eventTable.find('tbody tr:eq(1) td:eq(3) a').attr('href'), '/courses/open-data-law-and-licensing-2013-04-16');
				equal($eventTable.find('tbody tr:eq(1) td:eq(4) a').attr('href'), 'http://www.eventbrite.com/event/5519765768');
				start();
			}
		}
	);
});

// this test is based on a specific set of data coming through from the test server
asyncTest('course details table substitution', function () {
	$.ajax(
		'http://151.236.219.131/sites/default/files/courses.json',
		{
			dataType: 'json',
			success: function (data) {
				$('#test3')
					.eventTable({ data: data });
				$eventTable = $('.table:eq(2)');
				equal($eventTable.find('tbody tr').length, 2, 'the tbody has two rows');
				equal($eventTable.find('tbody tr:eq(0) td:eq(0)').text(), '17 Mar 2013');
				equal($eventTable.find('tbody tr:eq(0) td:eq(1)').text(), 'The office');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2)').text(), '£1.00 free');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2) strike').text(), '£1.00');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2) em').text(), 'free');
				equal($eventTable.find('tbody tr:eq(0) td:eq(3) a').attr('href'), 'http://www.eventbrite.com/event/5441375300');
				equal($eventTable.find('tbody tr:eq(1) td:eq(0)').text(), '16 Apr 2013');
				equal($eventTable.find('tbody tr:eq(1) td:eq(1)').text(), 'Open Data Institute');
				equal($eventTable.find('tbody tr:eq(1) td:eq(2)').text(), 'from £185.15');
				equal($eventTable.find('tbody tr:eq(1) td:eq(3) a').attr('href'), 'http://www.eventbrite.com/event/5519765768');
				start();
			}
		}
	);
});

// this test is based on a specific set of data coming through from the test server
asyncTest('course details table substitution', function () {
	$.ajax(
		'http://151.236.219.131/sites/default/files/courses.json',
		{
			dataType: 'json',
			success: function (data) {
				$('#test3')
					.eventTable({ data: data });
				$eventTable = $('.table:eq(2)');
				equal($eventTable.find('tbody tr').length, 2, 'the tbody has two rows');
				equal($eventTable.find('tbody tr:eq(0) td:eq(0)').text(), '17 Mar 2013');
				equal($eventTable.find('tbody tr:eq(0) td:eq(1)').text(), 'The office');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2)').text(), '£1.00 free');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2) strike').text(), '£1.00');
				equal($eventTable.find('tbody tr:eq(0) td:eq(2) em').text(), 'free');
				equal($eventTable.find('tbody tr:eq(0) td:eq(3) a').attr('href'), 'http://www.eventbrite.com/event/5441375300');
				equal($eventTable.find('tbody tr:eq(1) td:eq(0)').text(), '16 Apr 2013');
				equal($eventTable.find('tbody tr:eq(1) td:eq(1)').text(), 'Open Data Institute');
				equal($eventTable.find('tbody tr:eq(1) td:eq(2)').text(), 'from £185.15');
				equal($eventTable.find('tbody tr:eq(1) td:eq(3) a').attr('href'), 'http://www.eventbrite.com/event/5519765768');
				start();
			}
		}
	);
});

module('table generation');

test('no events', function () {
	var events = {}
	,   ids = []
	,   pages = []
	,		$eventTable = $($.eventTable(ids, pages, events, new Date('2013-02-13')))
	;
	ok($eventTable.is('table'), 'eventTable() returns a table');
	equal($eventTable.attr('class'), 'table', 'the table has a class of .table');
	ok($eventTable.find('thead').is('thead'), 'the table contains a thead');
	equal($eventTable.find('thead tr').length, 1, 'the thead has a single row');
	equal($eventTable.find('thead tr th').length, 5, 'the thead has five columns');
	equal($eventTable.find('thead tr th:eq(0)').text(), 'Course Date', 'the first column is entitled "Course Date"');
	equal($eventTable.find('thead tr th:eq(1)').text(), 'Location', 'the second column is entitled "Location"');
	equal($eventTable.find('thead tr th:eq(2)').text(), 'Price', 'the third columns is entitled "Price"');
	equal($eventTable.find('thead tr th:eq(3)').text(), '', 'the fourth column has no title');
	equal($eventTable.find('thead tr th:eq(4)').text(), '', 'the final column has no title');
	ok($eventTable.find('tbody').is('tbody'), 'the table contains a tbody');
	equal($eventTable.find('tbody tr').length, 1, 'the tbody has a single row');
	equal($eventTable.find('tbody tr td').length, 1, 'the row has a single cell');
	equal($eventTable.find('tbody tr td').attr('colspan'), '5', 'the cell should span all four columns');
	equal($eventTable.find('tbody tr td').text(), 'This course is not scheduled to run again soon');
});

test('single matched event', function () {
	var events = {
  	"http://dummy.eventbrite.co.uk/": {
	      "@type": "http://schema.org/Event",
	      "startDate": "2013-04-29T09:00:00",
	      "endDate": "2013-05-01T17:00:00",
	      "location": {
	        "@type": "http://schema.org/Place",
	        "name": "Covent Garden, London"
	      },
	      "offers": [{
	        "@type": "http://schema.org/Offer",
	        "name": "Standard Registration",
	        "price": 1395.00,
	        "priceCurrency": "GBP",
	        "validFrom": "2013-03-29",
	        "validThrough": "2013-04-28",
	        "inventoryLevel": 13
	      }, {
	        "@type": "http://schema.org/Offer",
	        "name": "Early-Bird Registration",
	        "price": 1255.00,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-03-29",
	        "inventoryLevel": 13
	      }]
    	}
		}
	, ids = ['http://dummy.eventbrite.co.uk/']
	, pages = ['/courses/dummy-course-2013-04-29']
	, date = new Date('2013-02-13')
	, $eventTable = $($.eventTable(ids, pages, events, date));
	;
	equal($eventTable.find('tbody tr').length, 1, 'the tbody has a single row');
	equal($eventTable.find('tbody tr td').length, 5, 'the row has five cells');
	equal($eventTable.find('tbody tr td:eq(0)').text(), '29 Apr - 1 May 2013');
	equal($eventTable.find('tbody tr td:eq(1)').text(), 'Covent Garden, London');
	equal($eventTable.find('tbody tr td:eq(2)').text(), '£1,395.00 £1,255.00 (until 29 Mar)');
	equal($eventTable.find('tbody tr td:eq(2) strike').text(), '£1,395.00');
	equal($eventTable.find('tbody tr td:eq(2) em').text(), '£1,255.00 (until 29 Mar)');
	equal($eventTable.find('tbody tr td:eq(3) a').attr('href'), '/courses/dummy-course-2013-04-29');
	equal($eventTable.find('tbody tr td:eq(3) a').attr('class'), 'btn btn-small btn-info');
	equal($eventTable.find('tbody tr td:eq(3) a').text(), 'More Details');
	equal($eventTable.find('tbody tr td:eq(4) a').attr('href'), 'http://dummy.eventbrite.co.uk/');
	equal($eventTable.find('tbody tr td:eq(4) a').attr('class'), 'btn btn-small btn-primary');
	equal($eventTable.find('tbody tr td:eq(4) a').text(), 'Book Now');
});

test('sold out event', function () {
	var events = {
  	"http://dummy.eventbrite.co.uk/": {
	      "@type": "http://schema.org/Event",
	      "startDate": "2013-04-29T09:00:00",
	      "endDate": "2013-05-01T17:00:00",
	      "location": {
	        "@type": "http://schema.org/Place",
	        "name": "Covent Garden, London"
	      },
	      "offers": [{
	        "@type": "http://schema.org/Offer",
	        "name": "Standard Registration",
	        "price": 1395.00,
	        "priceCurrency": "GBP",
	        "validFrom": "2013-03-29",
	        "validThrough": "2013-04-28",
	        "inventoryLevel": 0
	      }, {
	        "@type": "http://schema.org/Offer",
	        "name": "Early-Bird Registration",
	        "price": 1255.00,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-03-29",
	        "inventoryLevel": 0
	      }]
    	}
		}
	, ids = ['http://dummy.eventbrite.co.uk/']
	, pages = ['/courses/dummy-course-2013-04-29']
	, date = new Date('2013-02-13')
	, $eventTable = $($.eventTable(ids, pages, events, date));
	;
	equal($eventTable.find('tbody tr').length, 1, 'the tbody has a single row');
	equal($eventTable.find('tbody tr td:eq(2)').text(), 'from £1,255.00');
	equal($eventTable.find('tbody tr td:eq(4)').text(), 'Sold Out');
});

test('multiple matched events', function () {
	var events = {
  	"http://dummy1.eventbrite.co.uk/": {
	      "@type": "http://schema.org/Event",
	      "startDate": "2013-04-29T09:00:00",
	      "endDate": "2013-05-01T17:00:00",
	      "location": {
	        "@type": "http://schema.org/Place",
	        "name": "Covent Garden, London"
	      },
	      "offers": [{
	        "@type": "http://schema.org/Offer",
	        "name": "Standard Registration",
	        "price": 1395.00,
	        "priceCurrency": "GBP",
	        "validFrom": "2013-03-29",
	        "validThrough": "2013-04-28",
	        "inventoryLevel": 13
	      }, {
	        "@type": "http://schema.org/Offer",
	        "name": "Early-Bird Registration",
	        "price": 1255.00,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-03-29",
	        "inventoryLevel": 13
	      }]
    	}
  	, "http://dummy2.eventbrite.co.uk/": {
	      "@type": "http://schema.org/Event",
	      "startDate": "2013-06-10T09:00:00",
	      "endDate": "2013-06-12T17:00:00",
	      "location": {
	        "@type": "http://schema.org/Place",
	        "name": "Clerkenwell, London"
	      },
	      "offers": [{
	        "@type": "http://schema.org/Offer",
	        "name": "Standard Registration",
	        "price": 1395.00,
	        "priceCurrency": "GBP",
	        "validFrom": "2013-05-13",
	        "validThrough": "2013-06-09",
	        "inventoryLevel": 13
	      }, {
	        "@type": "http://schema.org/Offer",
	        "name": "Early-Bird Registration",
	        "price": 1255.00,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-05-13",
	        "inventoryLevel": 13
	      }]
    	}
		}
	, ids = ['http://dummy1.eventbrite.co.uk/', 'http://dummy2.eventbrite.co.uk/']
	, pages = ['/courses/dummy-course-2013-04-29', '/courses/dummy-course-2013-06-10']
	, date = new Date('2013-02-13')
	, $eventTable = $($.eventTable(ids, pages, events, date));
	;
	equal($eventTable.find('tbody tr').length, 2, 'the tbody has two rows');
	equal($eventTable.find('tbody tr:eq(0) td:eq(0)').text(), '29 Apr - 1 May 2013');
	equal($eventTable.find('tbody tr:eq(0) td:eq(1)').text(), 'Covent Garden, London');
	equal($eventTable.find('tbody tr:eq(0) td:eq(2)').text(), '£1,395.00 £1,255.00 (until 29 Mar)');
	equal($eventTable.find('tbody tr:eq(0) td:eq(3) a').attr('href'), '/courses/dummy-course-2013-04-29');
	equal($eventTable.find('tbody tr:eq(0) td:eq(4) a').attr('href'), 'http://dummy1.eventbrite.co.uk/');
	equal($eventTable.find('tbody tr:eq(1) td:eq(0)').text(), '10-12 Jun 2013');
	equal($eventTable.find('tbody tr:eq(1) td:eq(1)').text(), 'Clerkenwell, London');
	equal($eventTable.find('tbody tr:eq(1) td:eq(2)').text(), '£1,395.00 £1,255.00 (until 13 May)');
	equal($eventTable.find('tbody tr:eq(1) td:eq(3) a').attr('href'), '/courses/dummy-course-2013-06-10');
	equal($eventTable.find('tbody tr:eq(1) td:eq(4) a').attr('href'), 'http://dummy2.eventbrite.co.uk/');
});

test('event with a .com URL', function () {
	var events = {
  	"http://dummy.eventbrite.com/": {
	      "@type": "http://schema.org/Event",
	      "startDate": "2013-04-29T09:00:00",
	      "endDate": "2013-05-01T17:00:00",
	      "location": {
	        "@type": "http://schema.org/Place",
	        "name": "Covent Garden, London"
	      },
	      "offers": [{
	        "@type": "http://schema.org/Offer",
	        "name": "Standard Registration",
	        "price": 1395.00,
	        "priceCurrency": "GBP",
	        "validFrom": "2013-03-29",
	        "validThrough": "2013-04-28",
	        "inventoryLevel": 13
	      }, {
	        "@type": "http://schema.org/Offer",
	        "name": "Early-Bird Registration",
	        "price": 1255.00,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-03-29",
	        "inventoryLevel": 13
	      }]
    	}
		}
	, ids = ['http://dummy.eventbrite.co.uk/']
	, pages = ['/courses/dummy-course-2013-04-29']
	, date = new Date('2013-02-13')
	, $eventTable = $($.eventTable(ids, pages, events, date));
	;
	equal($eventTable.find('tbody tr').length, 1, 'the tbody has a single row');
	equal($eventTable.find('tbody tr td').length, 5, 'the row has five cells');
	equal($eventTable.find('tbody tr td:eq(0)').text(), '29 Apr - 1 May 2013');
	equal($eventTable.find('tbody tr td:eq(1)').text(), 'Covent Garden, London');
	equal($eventTable.find('tbody tr td:eq(2)').text(), '£1,395.00 £1,255.00 (until 29 Mar)');
	equal($eventTable.find('tbody tr td:eq(3) a').attr('href'), '/courses/dummy-course-2013-04-29');
	equal($eventTable.find('tbody tr td:eq(4) a').attr('href'), 'http://dummy.eventbrite.co.uk/');
});

test('event with sold out final ticket', function () {
	var events = {
  	"http://opendatalaw20130417.eventbrite.com": {
	    "@type": "http://schema.org/Event",
	    "startDate": "2013-04-17T09:30:00+00:00",
	    "endDate": "2013-04-17T12:30:00+00:00",
	    "location": {
	      "@type": "http://schema.org/Place",
	      "name": "Open Data Institute"
	    },
	    "offers": [
	      {
	        "@type": "http://schema.org/Offer",
	        "name": "Earlybird",
	        "price": 190.0,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-03-22T12:00:00+00:00",
	        "inventoryLevel": 20
	      },
	      {
	        "@type": "http://schema.org/Offer",
	        "name": "ODI Member",
	        "price": 180.0,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-04-16T12:00:00+00:00",
	        "inventoryLevel": 20
	      },
	      {
	        "@type": "http://schema.org/Offer",
	        "name": "Civil servants and charities",
	        "price": 180.0,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-04-16T12:00:00+00:00",
	        "inventoryLevel": 20
	      },
	      {
	        "@type": "http://schema.org/Offer",
	        "name": "Full price",
	        "price": 225.0,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-04-16T12:00:00+00:00",
	        "inventoryLevel": 20
	      },
	      {
	        "@type": "http://schema.org/Offer",
	        "name": "Free place",
	        "price": 0.0,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-04-17T08:30:00+00:00",
	        "inventoryLevel": 0
	      }
	    ]
	  }
	  }
	, ids = ['http://opendatalaw20130417.eventbrite.com']
	, pages = ['/courses/open-data-law-and-licensing-2013-04-17']
	, date = new Date('2013-02-27')
	, $eventTable = $($.eventTable(ids, pages, events, date));
	;
	equal($eventTable.find('tbody tr').length, 1, 'the tbody has a single row');
	equal($eventTable.find('tbody tr td').length, 5, 'the row has five cells');
	equal($eventTable.find('tbody tr td:eq(0)').text(), '17 Apr 2013');
	equal($eventTable.find('tbody tr td:eq(1)').text(), 'Open Data Institute');
	equal($eventTable.find('tbody tr td:eq(2)').text(), 'from £180.00');
	equal($eventTable.find('tbody tr td:eq(3) a').attr('href'), '/courses/open-data-law-and-licensing-2013-04-17');
	equal($eventTable.find('tbody tr td:eq(4) a').attr('href'), 'http://opendatalaw20130417.eventbrite.com');
});

module('date range formatting');

test('date range formatting', function () {
	equal($.dateRange('2013-01-01T09:00:00', '2013-01-03T17:00:00'), '1-3 Jan 2013');
	equal($.dateRange('2013-01-31T09:00:00', '2013-02-01T17:00:00'), '31 Jan - 1 Feb 2013');
	equal($.dateRange('2013-12-31T09:00:00', '2014-01-02T17:00:00'), '31 Dec 2013 - 2 Jan 2014');
	equal($.dateRange('2013-01-01T09:00:00', '2013-01-01T17:00:00'), '1 Jan 2013');
});

module('price formatting');

test('single price', function () {
	var offers = [{
			"@type": "http://schema.org/Offer",
			"name": "Registration",
			"price": 1255.00,
			"priceCurrency": "GBP",
      "validThrough": "2013-04-28",
			"inventoryLevel": 13
		}]
	;
	equal($.priceOptions(offers, new Date('2013-02-13'), new Date('2013-04-28'), false), '£1,255.00');
});

test('member price', function () {
	var offers = [{
			"@type": "http://schema.org/Offer",
			"name": "Member Registration",
			"price": 360.75,
			"priceCurrency": "GBP",
      "validThrough": "2013-04-28",
			"inventoryLevel": 34
		}, {
			"@type": "http://schema.org/Offer",
			"name": "Standard Registration",
			"price": 570.32,
			"priceCurrency": "GBP",
      "validThrough": "2013-04-28",
			"inventoryLevel": 34
		}]
	;
	equal($.priceOptions(offers, new Date('2013-02-13'), new Date('2013-04-28'), false), 'from £360.75');
});

test('early-bird prices', function () {
	var offers = [{
			"@type": "http://schema.org/Offer",
			"name": "Standard Registration",
			"price": 1395.00,
			"priceCurrency": "GBP",
			"validFrom": "2013-03-29",
      "validThrough": "2013-04-28",
			"inventoryLevel": 13
		}, {
			"@type": "http://schema.org/Offer",
			"name": "Early-Bird Registration",
			"price": 1255.00,
			"priceCurrency": "GBP",
			"validThrough": "2013-03-29",
			"inventoryLevel": 13
		}]
	;
	equal($.priceOptions(offers, new Date('2013-02-28'), new Date('2013-04-28'), false), '<strike>£1,395.00</strike> <em>£1,255.00 (until 29 Mar)</em>');
	equal($.priceOptions(offers, new Date('2013-03-29'), new Date('2013-04-28'), false), '£1,395.00');
	equal($.priceOptions(offers, new Date('2013-04-05'), new Date('2013-04-28'), false), '£1,395.00');
});

test('sold-out early-bird prices', function () {
	var offers = [{
			"@type": "http://schema.org/Offer",
			"name": "Standard Registration",
			"price": 1395.00,
			"priceCurrency": "GBP",
      "validThrough": "2013-04-28",
			"inventoryLevel": 13
		}, {
			"@type": "http://schema.org/Offer",
			"name": "Early-Bird Registration",
			"price": 1255.00,
			"priceCurrency": "GBP",
      "validThrough": "2013-04-28",
			"inventoryLevel": 0
		}]
	;
	equal($.priceOptions(offers, new Date('2013-02-28'), new Date('2013-04-28'), false), '£1,395.00');
});

test('only free', function () {
	var offers = [
	      {
	        "@type": "http://schema.org/Offer",
	        "name": "Open data market makers",
	        "price": 0.0,
	        "priceCurrency": "GBP",
	        "validThrough": "2013-03-07T15:30:00+00:00",
	        "inventoryLevel": 40
	      }
	    ]
	;
	equal($.priceOptions(offers, new Date('2013-02-16'), new Date('2013-03-07T15:30:00+00:00'), false), 'free');
})

test('free sold out', function () {
	var offers = [
	  {
        "@type": "http://schema.org/Offer",
        "name": "Earlybird",
        "price": 190.0,
        "priceCurrency": "GBP",
        "validThrough": "2013-03-22T12:00:00+00:00",
        "inventoryLevel": 20
      },
      {
        "@type": "http://schema.org/Offer",
        "name": "ODI Member",
        "price": 180.0,
        "priceCurrency": "GBP",
        "validThrough": "2013-04-16T12:00:00+00:00",
        "inventoryLevel": 20
      },
      {
        "@type": "http://schema.org/Offer",
        "name": "Civil servants and charities",
        "price": 180.0,
        "priceCurrency": "GBP",
        "validThrough": "2013-04-16T12:00:00+00:00",
        "inventoryLevel": 20
      },
      {
        "@type": "http://schema.org/Offer",
        "name": "Full price",
        "price": 225.0,
        "priceCurrency": "GBP",
        "validThrough": "2013-04-16T12:00:00+00:00",
        "inventoryLevel": 20
      },
      {
        "@type": "http://schema.org/Offer",
        "name": "Free place",
        "price": 0.0,
        "priceCurrency": "GBP",
        "validThrough": "2013-04-17T08:30:00+00:00",
        "inventoryLevel": 0
      }
    ]
	;
	equal($.priceOptions(offers, new Date('2013-02-27'), new Date('2013-04-16T12:00:00+00:00'), false), 'from £180.00');
})
