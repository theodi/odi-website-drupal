<?php
// Hack to make content appear as summary in Drupal Feed Aggregator when using
// Google Calendar feeds
date_default_timezone_set('Europe/London');

if (!isset($_GET) || !array_key_exists('url', $_GET)) {
	die('No url given');
}

$url = $_GET['url'];

// Check url begines with google.com
if (substr($url, 0, strlen('http://www.google.com/')) !== 'http://www.google.com/') {
	die('Invalid url');
}

function registerNamespaces (&$xml) {
  $xml->registerXPathNamespace('def', 'http://www.w3.org/2005/Atom');
  $xml->registerXPathNamespace('openSearch', 'http://a9.com/-/spec/opensearchrss/1.0/');
  $xml->registerXPathNamespace('gCal', 'http://schemas.google.com/gCal/2005');
  $xml->registerXPathNamespace('gd', 'http://schemas.google.com/g/2005');
}


$data = file_get_contents($url);
$xml = new SimpleXMLElement($data);
unset($data);

registerNamespaces($xml);

$entries = $xml->xpath('//def:feed/def:entry');


$until = '<span class="until">-</span> ';
function s ($content, $classes) {
  return '<span class="' . $classes . '">' . $content . '</span> ';
}

header('Content-type: text/xml');

print('<?xml version="1.0" encoding="utf-8"?>');
?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Google Calendar (Converted)</title>
  <subtitle>ODI</subtitle>
  <link href="http://example.org/feed/" rel="self" />
  <link href="http://example.org/" />
  <id>urn:uuid:60a76c80-d399-11d9-b91C-0003939e0af6</id>
  <updated>2003-12-13T18:30:02Z</updated><?php
  
  array_walk($entries, function ($entry) use ($until) {
    registerNamespaces($entry);
    $title = $entry->title;
    $id = $entry->id;
    //$updated = $entry->updated;
    $links = $entry->xpath('def:link[@rel="self"]/@href');
    $link = $links[0]->href;
    $link_alts = $entry->xpath('def:link[@rel="alternate"]/@href'); 
    $link_alt = $link_alts[0];

    $body = array();
    $contents = $entry->content;
    $content = (string)$contents;
    $whens = $entry->xpath('gd:when');
    $when = get_object_vars($whens[0]);
    $start = strtotime($when['@attributes']['startTime']);
    $end = strtotime($when['@attributes']['endTime']);
    $wheres = $entry->xpath('gd:where');
    $where = get_object_vars($wheres[0]);
    
    $updated = $when['@attributes']['startTime'];
    
    $datestring = '';
    
    $day1 = intval(date('j', $start));
    $month1 = date('M', $start);
    $year1 = date('Y', $start);
    $time1 = date('g:i a', $start);
    
    $day2 = intval(date('j', $end));
    $month2 = date('M', $end);
    $year2 = date('Y', $end);
    $time2 = date('g:i a', $end);
    
    if ($time2 === '12:00 am') {
      $day2 -= 1;
    }
    
    $datestring .= s($day1, 'starts day');
    
    if ($year1 === $year2 && $month1 === $month2 && $day1 !== $day2) {
      $datestring .= $until . s($day2, 'ends day');
    }
    
    $datestring .= s($month1, 'ends month');
    
    if ($year1 === $year2 && $month1 !== $month2) {
      $datestring .= $until . s($day2, 'ends day') . s($month2, 'ends month');
    }
    
    /*
    $datestring .= $year;
    if ($year1 !== $year2) {
      $datestring .= $until . s($day2, 'ends day') . s($month2, 'ends month') . s($year2, 'ends year');
    }*/
    
    if ($time1 !== '12:00 am') {
//      $datestring .= s($time1, 'starts time');
//      if ($time1 !== $time2) {
//        $datestring .= $until . s($day2, 'end time');
//      }
	$datestring .= '<span class="time_bit">' . $time1 . ' - ' . $time2 . '</span>';
    }
    
   
    
    $body['Dates'] =  '<span class="dates">' . $datestring . '</span>';
    $body['Where'] = $where['@attributes']['valueString'];
    $body['Content'] = $content;
    
    
    $summary = '';
    array_walk($body, function ($str, $name) use (&$summary) {
      $codename = str_replace(' ', '-', strtolower($name));
      $summary .= '<div class="' . $codename . '"><b>' . $name . '</b> ' . $str . '</div>';
    });
    
//    $summary = htmlentities($summary);
    $summary = '<![CDATA[' . $summary . ']]>';
    
    ?>
    
  <entry>
    <id><?php print($id); ?></id>
    <title><?php print($title); ?></title>
    <link href="<?php print($link); ?>" />
    <link rel="alternate" type="text/html" href="<?php print($link_alt); ?>"/>
    <updated><?php print($updated); ?></updated>
    <summary type="html"><?php print($summary); ?></summary>
    <author>
      <name></name>
    </author>
  </entry><?php
 
 });

?>
</feed>
