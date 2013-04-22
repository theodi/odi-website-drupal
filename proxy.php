<?php
header('Content-type: application/json');
$rackspace_domain = "http://9a5ecbb162fad36016c1-f4f0e949652bd505301474cc78fdcf7c.r84.cf3.rackcdn.com/";

if ($_GET['type'] == "courses") {
  echo file_get_contents($rackspace_domain . "courses.json");
} else {
  echo file_get_contents($rackspace_domain . "lectures.json");  
}
?>