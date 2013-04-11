<?php
/**
 * @file
 * partners.features.inc
 */

/**
 * Implements hook_views_api().
 */
function partners_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function partners_node_info() {
  $items = array(
    'partners' => array(
      'name' => t('Partners'),
      'base' => 'node_content',
      'description' => t('Lists ODI partners for display on the homepage'),
      'has_title' => '1',
      'title_label' => t('Organisation name'),
      'help' => '',
    ),
  );
  return $items;
}
